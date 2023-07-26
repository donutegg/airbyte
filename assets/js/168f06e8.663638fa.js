"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[10260],{21626:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const l={},i="Mongo DB",o={unversionedId:"integrations/sources/mongodb-v2",id:"integrations/sources/mongodb-v2",title:"Mongo DB",description:"The MongoDB source allows to sync data from MongoDb. Source supports Full Refresh and Incremental sync strategies.",source:"@site/../docs/integrations/sources/mongodb-v2.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/mongodb-v2",permalink:"/integrations/sources/mongodb-v2",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/mongodb-v2.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Monday",permalink:"/integrations/sources/monday"},next:{title:"Microsoft SQL Server (MSSQL)",permalink:"/integrations/sources/mssql"}},p={},d=[{value:"Resulting schema",id:"resulting-schema",level:2},{value:"Step 1. Find all unique properties",id:"step-1-find-all-unique-properties",level:3},{value:"Step 2. Determine property types",id:"step-2-determine-property-types",level:3},{value:"Features",id:"features",level:2},{value:"Full Refresh sync",id:"full-refresh-sync",level:3},{value:"Incremental sync",id:"incremental-sync",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Create users",id:"create-users",level:3},{value:"Enable MongoDB authentication",id:"enable-mongodb-authentication",level:3},{value:"Configure firewall",id:"configure-firewall",level:3},{value:"TLS/SSL on a Connection",id:"tlsssl-on-a-connection",level:3},{value:"\u0421onfiguration Parameters",id:"\u0441onfiguration-parameters",level:3},{value:"Changelog",id:"changelog",level:2}],s={toc:d},m="wrapper";function c(t){let{components:e,...a}=t;return(0,n.kt)(m,(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mongo-db"},"Mongo DB"),(0,n.kt)("p",null,"The MongoDB source allows to sync data from MongoDb. Source supports Full Refresh and Incremental sync strategies."),(0,n.kt)("h2",{id:"resulting-schema"},"Resulting schema"),(0,n.kt)("p",null,"MongoDB does not have anything like table definition, thus we have to define column types from actual attributes and their values. Discover phase have two steps:"),(0,n.kt)("h3",{id:"step-1-find-all-unique-properties"},"Step 1. Find all unique properties"),(0,n.kt)("p",null,"Connector select 10k documents to collect all distinct field."),(0,n.kt)("h3",{id:"step-2-determine-property-types"},"Step 2. Determine property types"),(0,n.kt)("p",null,"For each property found, connector determines its type, if all the selected values have the same type - connector will set appropriate type to the property. In all other cases connector will fallback to ",(0,n.kt)("inlineCode",{parentName:"p"},"string")," type."),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Replicate Incremental Deletes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,n.kt)("h3",{id:"full-refresh-sync"},"Full Refresh sync"),(0,n.kt)("p",null,"Works as usual full refresh sync."),(0,n.kt)("h3",{id:"incremental-sync"},"Incremental sync"),(0,n.kt)("p",null,"Cursor field can not be nested. Currently only top level document properties are supported."),(0,n.kt)("p",null,"Cursor should ",(0,n.kt)("strong",{parentName:"p"},"never")," be blank. In case cursor is blank - the incremental sync results might be unpredictable and will totally rely on MongoDB comparison algorithm."),(0,n.kt)("p",null,"Only ",(0,n.kt)("inlineCode",{parentName:"p"},"datetime")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"number")," cursor types are supported. Cursor type is determined based on the cursor field name:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"datetime")," - if cursor field name contains a string from: ",(0,n.kt)("inlineCode",{parentName:"li"},"time"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"date"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"_at"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"timestamp"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"ts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"number")," - otherwise")),(0,n.kt)("h2",{id:"getting-started"},"Getting started"),(0,n.kt)("p",null,"This guide describes in details how you can configure MongoDB for integration with Airbyte."),(0,n.kt)("h3",{id:"create-users"},"Create users"),(0,n.kt)("p",null,"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"mongo")," shell, switch to ",(0,n.kt)("inlineCode",{parentName:"p"},"admin")," database and create a ",(0,n.kt)("inlineCode",{parentName:"p"},"READ_ONLY_USER"),". ",(0,n.kt)("inlineCode",{parentName:"p"},"READ_ONLY_USER")," will be used for Airbyte integration. Please make sure that user has read-only privileges."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'mongo\nuse admin;\ndb.createUser({user: "READ_ONLY_USER", pwd: "READ_ONLY_PASSWORD", roles: [{role: "read", db: "TARGET_DATABASE"}]})\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Make sure the user have appropriate access levels, a user with higher access levels may throw an exception.")),(0,n.kt)("h3",{id:"enable-mongodb-authentication"},"Enable MongoDB authentication"),(0,n.kt)("p",null,"Open ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/mongod.conf")," and add/replace specific keys:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"net:\n  bindIp: 0.0.0.0\n\nsecurity:\n  authorization: enabled\n")),(0,n.kt)("p",null,"Binding to ",(0,n.kt)("inlineCode",{parentName:"p"},"0.0.0.0")," will allow to connect to database from any IP address."),(0,n.kt)("p",null,"The last line will enable MongoDB security. Now only authenticated users will be able to access the database."),(0,n.kt)("h3",{id:"configure-firewall"},"Configure firewall"),(0,n.kt)("p",null,"Make sure that MongoDB is accessible from external servers. Specific commands will depend on the firewall you are using ","(","UFW/iptables/AWS/etc",")",". Please refer to appropriate documentation."),(0,n.kt)("p",null,"Your ",(0,n.kt)("inlineCode",{parentName:"p"},"READ_ONLY_USER")," should now be ready for use with Airbyte."),(0,n.kt)("h3",{id:"tlsssl-on-a-connection"},"TLS/SSL on a Connection"),(0,n.kt)("p",null,"It is recommended to use encrypted connection. Connection with TLS/SSL security protocol for MongoDb Atlas Cluster and Replica Set instances is enabled by default. To enable TSL/SSL connection with Standalone MongoDb instance, please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/tutorial/configure-ssl/"},"MongoDb Documentation"),"."),(0,n.kt)("h3",{id:"\u0441onfiguration-parameters"},"\u0421onfiguration Parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Database: database name"),(0,n.kt)("li",{parentName:"ul"},"Authentication Source: specifies the database that the supplied credentials should be validated against. Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"admin"),"."),(0,n.kt)("li",{parentName:"ul"},"User: username to use when connecting"),(0,n.kt)("li",{parentName:"ul"},"Password: used to authenticate the user"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Standalone MongoDb instance"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Host: URL of the database"),(0,n.kt)("li",{parentName:"ul"},"Port: Port to use for connecting to the database"),(0,n.kt)("li",{parentName:"ul"},"TLS: indicates whether to create encrypted connection"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Replica Set"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Server addresses: the members of a replica set"),(0,n.kt)("li",{parentName:"ul"},"Replica Set: A replica set name"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"MongoDb Atlas Cluster"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Cluster URL: URL of a cluster to connect to")))),(0,n.kt)("p",null,"For more information regarding configuration parameters, please see ",(0,n.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/drivers/java/sync/v4.3/fundamentals/connection/"},"MongoDb Documentation"),"."),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-07-26"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/28733"},"28733")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix bug preventing syncs from discovering field types")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-07-25"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/28692"},"28692")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix bug preventing statistics retrieval from views")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-07-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/28527"},"28527")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Log server information")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-06-26"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/27737"},"27737")),(0,n.kt)("td",{parentName:"tr",align:"left"},"License Update: Elv2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.19"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-07"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17614"},"17614")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Increased discover performance")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.18"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-05"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17590"},"17590")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add ability to enforce SSL in MongoDB connector and check logic")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.17"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16401"},"16401")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed bug with empty strings in fields with ",(0,n.kt)("em",{parentName:"td"},"aibyte_transform"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.16"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-18"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14356"},"14356")),(0,n.kt)("td",{parentName:"tr",align:"left"},"DB Sources: only show a table can sync incrementally if at least one column can be used as a cursor field")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.15"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-17"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13864"},"13864")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Updated stacktrace format for any trace message errors")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.14"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-05"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12428"},"12428")),(0,n.kt)("td",{parentName:"tr",align:"left"},"JsonSchema: Add properties to fields with type 'object'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.13"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-02-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10276"},"10276")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Create a custom codec registry to handle DBRef MongoDB objects")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.12"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-02-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10256"},"10256")),(0,n.kt)("td",{parentName:"tr",align:"left"},"(unpublished) Add ",(0,n.kt)("inlineCode",{parentName:"td"},"-XX:+ExitOnOutOfMemoryError")," JVM option")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.11"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-10"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9238"},"9238")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Return only those collections for which the user has privileges")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9202"},"9202")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-07"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8491"},"8491")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Configure 10000 limit doc reading during Discovery step")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-29"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8306"},"8306")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added milliseconds for date format for cursor")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-22"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8161"},"8161")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Updated Performance and updated cursor for timestamp type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-17"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8046"},"8046")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added milliseconds to convert timestamp to datetime format")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-15"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7982"},"7982")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Updated Performance")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-19"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7160"},"7160")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed nested document parsing")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-07"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6860"},"6860")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added filter to avoid MongoDb system collections")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6364"},"6364")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Source MongoDb: added support via TLS/SSL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-08-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5530"},"5530")),(0,n.kt)("td",{parentName:"tr",align:"left"},"New source: MongoDb ported to java")))))}c.isMDXComponent=!0},3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>g});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),d=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=d(a),u=n,g=m["".concat(p,".").concat(u)]||m[u]||c[u]||l;return a?r.createElement(g,i(i({ref:e},s),{},{components:a})):r.createElement(g,i({ref:e},s))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:n,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);