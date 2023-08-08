#
# Copyright (c) 2023 Airbyte, Inc., all rights reserved.
#

import json
import logging
import os
from typing import Any, Dict, Iterable, List, Mapping, Optional
from urllib.parse import unquote

import pyarrow as pa
import pyarrow.parquet as pq
from airbyte_cdk.sources.file_based.config.file_based_stream_config import FileBasedStreamConfig, ParquetFormat
from airbyte_cdk.sources.file_based.file_based_stream_reader import AbstractFileBasedStreamReader, FileReadMode
from airbyte_cdk.sources.file_based.file_types.file_type_parser import FileTypeParser
from airbyte_cdk.sources.file_based.remote_file import RemoteFile
from airbyte_cdk.sources.file_based.schema_helpers import SchemaType
from pyarrow import Scalar


class ParquetParser(FileTypeParser):
    async def infer_schema(
        self,
        config: FileBasedStreamConfig,
        file: RemoteFile,
        stream_reader: AbstractFileBasedStreamReader,
        logger: logging.Logger,
    ) -> SchemaType:
        parquet_format = config.format[config.file_type] if config.format else ParquetFormat()
        if not isinstance(parquet_format, ParquetFormat):
            raise ValueError(f"Expected ParquetFormat, got {parquet_format}")

        with stream_reader.open_file(file, self.file_read_mode, logger) as fp:
            parquet_file = pq.ParquetFile(fp)
            parquet_schema = parquet_file.schema_arrow

        # Inferred non-partition schema
        schema = {field.name: ParquetParser.parquet_type_to_schema_type(field.type, parquet_format) for field in parquet_schema}
        # Inferred partition schema
        partition_columns = {partition.split("=")[0]: {"type": "string"} for partition in self._extract_partitions(file.uri)}

        schema.update(partition_columns)
        return schema

    def parse_records(
        self,
        config: FileBasedStreamConfig,
        file: RemoteFile,
        stream_reader: AbstractFileBasedStreamReader,
        logger: logging.Logger,
        discovered_schema: Optional[SchemaType],
    ) -> Iterable[Dict[str, Any]]:
        parquet_format = config.format[config.file_type] if config.format else ParquetFormat()
        if not isinstance(parquet_format, ParquetFormat):
            raise ValueError(f"Expected ParquetFormat, got {parquet_format}")  # FIXME test this branch!
        with stream_reader.open_file(file, self.file_read_mode, logger) as fp:
            reader = pq.ParquetFile(fp)
            partition_columns = {x.split("=")[0]: x.split("=")[1] for x in self._extract_partitions(file.uri)}
            for row_group in range(reader.num_row_groups):
                batch_dict = reader.read_row_group(row_group).to_pydict()
                for record_values in zip(*batch_dict.values()):
                    record = dict(zip(batch_dict.keys(), record_values))
                    record.update(partition_columns)
                    yield record

    @staticmethod
    def _extract_partitions(filepath: str) -> List[str]:
        return [unquote(partition) for partition in filepath.split(os.sep) if "=" in partition]

    @property
    def file_read_mode(self) -> FileReadMode:
        return FileReadMode.READ_BINARY

    @staticmethod
    def _to_output_value(parquet_value: Scalar, parquet_format: ParquetFormat) -> Any:
        """
        Convert a pyarrow scalar to a value that can be output by the source.
        """
        # Convert date and datetime objects to isoformat strings
        if pa.types.is_time(parquet_value.type) or pa.types.is_timestamp(parquet_value.type) or pa.types.is_date(parquet_value.type):
            return parquet_value.as_py().isoformat()

        # Convert month_day_nano_interval to array
        if parquet_value.type == pa.month_day_nano_interval():
            return json.loads(json.dumps(parquet_value.as_py()))

        # Decode binary strings to utf-8
        if ParquetParser._is_binary(parquet_value.type):
            return parquet_value.as_py().decode("utf-8")
        if pa.types.is_decimal(parquet_value.type):
            if parquet_format.decimal_as_float:
                return parquet_value.as_py()
            else:
                return str(parquet_value.as_py())

        # Dictionaries are stored as two columns: indices and values
        # The indices column is an array of integers that maps to the values column
        if pa.types.is_dictionary(parquet_value.type):
            return {
                "indices": parquet_value.indices.tolist(),
                "values": parquet_value.dictionary.tolist(),
            }
        if pa.types.is_map(parquet_value.type):
            return {k: v for k, v in parquet_value.as_py()}

        if pa.types.is_null(parquet_value.type):
            return None

        # Convert duration to seconds, then convert to the appropriate unit
        if pa.types.is_duration(parquet_value.type):
            duration = parquet_value.as_py()
            duration_seconds = duration.total_seconds()
            if parquet_value.type.unit == "s":
                return duration_seconds
            elif parquet_value.type.unit == "ms":
                return duration_seconds * 1000
            elif parquet_value.type.unit == "us":
                return duration_seconds * 1_000_000
            elif parquet_value.type.unit == "ns":
                return duration_seconds * 1_000_000_000 + duration.nanoseconds
            else:
                raise ValueError(f"Unknown duration unit: {parquet_value.type.unit}")
        else:
            return parquet_value.as_py()

    @staticmethod
    def parquet_type_to_schema_type(parquet_type: pa.DataType, parquet_format: ParquetFormat) -> Mapping[str, str]:
        """
        Convert a pyarrow data type to an Airbyte schema type.
        Parquet data types are defined at https://arrow.apache.org/docs/python/api/datatypes.html
        """

        if pa.types.is_timestamp(parquet_type):
            return {"type": "string", "format": "date-time"}
        elif pa.types.is_date(parquet_type):
            return {"type": "string", "format": "date"}
        elif ParquetParser._is_string(parquet_type, parquet_format):
            return {"type": "string"}
        elif pa.types.is_boolean(parquet_type):
            return {"type": "boolean"}
        elif ParquetParser._is_integer(parquet_type):
            return {"type": "integer"}
        elif ParquetParser._is_float(parquet_type, parquet_format):
            return {"type": "number"}
        elif ParquetParser._is_object(parquet_type):
            return {"type": "object"}
        elif ParquetParser._is_list(parquet_type):
            return {"type": "array"}
        elif pa.types.is_null(parquet_type):
            return {"type": "null"}
        else:
            raise ValueError(f"Unsupported parquet type: {parquet_type}")

    @staticmethod
    def _is_binary(parquet_type: pa.DataType) -> bool:
        return bool(
            pa.types.is_binary(parquet_type) or pa.types.is_large_binary(parquet_type) or pa.types.is_fixed_size_binary(parquet_type)
        )

    @staticmethod
    def _is_integer(parquet_type: pa.DataType) -> bool:
        return bool(pa.types.is_integer(parquet_type) or pa.types.is_duration(parquet_type))

    @staticmethod
    def _is_float(parquet_type: pa.DataType, parquet_format: ParquetFormat) -> bool:
        if pa.types.is_decimal(parquet_type):
            return parquet_format.decimal_as_float
        else:
            return bool(pa.types.is_floating(parquet_type))

    @staticmethod
    def _is_string(parquet_type: pa.DataType, parquet_format: ParquetFormat) -> bool:
        if pa.types.is_decimal(parquet_type):
            return not parquet_format.decimal_as_float
        else:
            return bool(
                pa.types.is_time(parquet_type)
                or pa.types.is_string(parquet_type)
                or pa.types.is_large_string(parquet_type)
                or ParquetParser._is_binary(parquet_type)  # Best we can do is return as a string since we do not support binary
            )

    @staticmethod
    def _is_object(parquet_type: pa.DataType) -> bool:
        return bool(pa.types.is_dictionary(parquet_type) or pa.types.is_struct(parquet_type) or pa.types.is_map(parquet_type))

    @staticmethod
    def _is_list(parquet_type: pa.DataType) -> bool:
        return bool(pa.types.is_list(parquet_type) or pa.types.is_large_list(parquet_type) or parquet_type == pa.month_day_nano_interval())
