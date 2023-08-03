# generated by datamodel-codegen:
#   filename:  SupportLevel.yaml

from __future__ import annotations

from pydantic import BaseModel, Field
from typing_extensions import Literal


class SupportLevel(BaseModel):
    __root__: Literal["community", "certified"] = Field(
        ...,
        description="enum that describes a connector's release stage",
        title="SupportLevel",
    )
