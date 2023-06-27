"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[22e3],{12997:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const l={},i="Google Sheets",o={unversionedId:"integrations/sources/google-sheets",id:"integrations/sources/google-sheets",title:"Google Sheets",description:"This page guides you through the process of setting up the Google Sheets source connector.",source:"@site/../docs/integrations/sources/google-sheets.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/google-sheets",permalink:"/integrations/sources/google-sheets",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/google-sheets.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Google Search Console",permalink:"/integrations/sources/google-search-console"},next:{title:"Google-webfonts",permalink:"/integrations/sources/google-webfonts"}},p={},u=[{value:"Setup guide",id:"setup-guide",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Data type mapping",id:"data-type-mapping",level:2},{value:"Performance consideration",id:"performance-consideration",level:2},{value:"Changelog",id:"changelog",level:2}],s={toc:u},m="wrapper";function d(t){let{components:e,...a}=t;return(0,n.kt)(m,(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"google-sheets"},"Google Sheets"),(0,n.kt)("p",null,"This page guides you through the process of setting up the Google Sheets source connector."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The Google Sheets source connector pulls data from a single Google Sheets spreadsheet. To replicate multiple spreadsheets, set up multiple Google Sheets source connectors in your Airbyte instance.")),(0,n.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Cloud:")),(0,n.kt)("p",null,"To set up Google Sheets as a source in Airbyte Cloud:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.airbyte.com/workspaces"},"Log into your Airbyte Cloud")," account."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,n.kt)("strong",{parentName:"li"},"+ New source"),"."),(0,n.kt)("li",{parentName:"ol"},"On the Set up the source page, select ",(0,n.kt)("strong",{parentName:"li"},"Google Sheets")," from the ",(0,n.kt)("strong",{parentName:"li"},"Source type")," dropdown."),(0,n.kt)("li",{parentName:"ol"},"Enter a name for the Google Sheets connector."),(0,n.kt)("li",{parentName:"ol"},"Authenticate your Google account via OAuth or Service Account Key Authentication.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"(Recommended)")," To authenticate your Google account via OAuth, click ",(0,n.kt)("strong",{parentName:"li"},"Sign in with Google")," and complete the authentication workflow."),(0,n.kt)("li",{parentName:"ul"},"To authenticate your Google account via Service Account Key Authentication, enter your ",(0,n.kt)("a",{parentName:"li",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating_service_account_keys"},"Google Cloud service account key")," in JSON format. Make sure the Service Account has the Project Viewer permission. If your spreadsheet is viewable by anyone with its link, no further action is needed. If not, ",(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/GyomEw5a2NQ%22"},"give your Service account access to your spreadsheet"),"."))),(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"Spreadsheet Link"),", enter the link to the Google spreadsheet. To get the link, go to the Google spreadsheet you want to sync, click ",(0,n.kt)("strong",{parentName:"li"},"Share")," in the top right corner, and click ",(0,n.kt)("strong",{parentName:"li"},"Copy Link"),"."),(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"Row Batch Size"),", define the number of records you want the Google API to fetch at a time. The default value is 200.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Open Source:")),(0,n.kt)("p",null,"To set up Google Sheets as a source in Airbyte Open Source:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://support.google.com/googleapi/answer/6158841?hl=en"},"Enable the Google Cloud Platform APIs for your personal or organization account"),"."),(0,n.kt)("admonition",{parentName:"li",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The connector only finds the spreadsheet you want to replicate; it does not access any of your other files in Google Drive."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the Airbyte UI and in the left navigation bar, click ",(0,n.kt)("strong",{parentName:"p"},"Sources"),". In the top-right corner, click ",(0,n.kt)("strong",{parentName:"p"},"+ New source"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the Set up the source page, select ",(0,n.kt)("strong",{parentName:"p"},"Google Sheets")," from the Source type dropdown.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter a name for the Google Sheets connector.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Authenticate your Google account via OAuth or Service Account Key Authentication:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"To authenticate your Google account via OAuth, enter your Google application's ",(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/identity/protocols/oauth2"},"client ID, client secret, and refresh token"),"."),(0,n.kt)("li",{parentName:"ul"},"To authenticate your Google account via Service Account Key Authentication, enter your ",(0,n.kt)("a",{parentName:"li",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating_service_account_keys"},"Google Cloud service account key")," in JSON format. Make sure the Service Account has the Project Viewer permission. If your spreadsheet is viewable by anyone with its link, no further action is needed. If not, ",(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/GyomEw5a2NQ%22"},"give your Service account access to your spreadsheet"),"."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"For ",(0,n.kt)("strong",{parentName:"p"},"Spreadsheet Link"),", enter the link to the Google spreadsheet. To get the link, go to the Google spreadsheet you want to sync, click ",(0,n.kt)("strong",{parentName:"p"},"Share")," in the top right corner, and click ",(0,n.kt)("strong",{parentName:"p"},"Copy Link"),"."))),(0,n.kt)("h3",{id:"output-schema"},"Output schema"),(0,n.kt)("p",null,"Each sheet in the selected spreadsheet is synced as a separate stream. Each selected column in the sheet is synced as a string field."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note: Sheet names and column headers must contain only alphanumeric characters or ",(0,n.kt)("inlineCode",{parentName:"strong"},"_"),", as specified in the")," ",(0,n.kt)("a",{parentName:"p",href:"/understanding-airbyte/airbyte-protocol"},(0,n.kt)("strong",{parentName:"a"},"Airbyte Protocol")),". For example, if your sheet or column header is named ",(0,n.kt)("inlineCode",{parentName:"p"},"the data"),", rename it to ",(0,n.kt)("inlineCode",{parentName:"p"},"the_data"),". This restriction does not apply to non-header cell values."),(0,n.kt)("p",null,"Airbyte only supports replicating ",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/sheets#SheetType"},"Grid")," sheets."),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The Google Sheets source connector supports the following sync modes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/full-refresh-overwrite/"},"Full Refresh - Overwrite")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/full-refresh-append"},"Full Refresh - Append"))),(0,n.kt)("h2",{id:"data-type-mapping"},"Data type mapping"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"any type"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h2",{id:"performance-consideration"},"Performance consideration"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/sheets/api/limits"},"Google API rate limit")," is 100 requests per 100 seconds per user and 500 requests per 100 seconds per project. Airbyte batches requests to the API in order to efficiently pull data and respects these rate limits. We recommended not using the same service user for more than 3 instances of the Google Sheets source connector to ensure high transfer speeds."),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Version"),(0,n.kt)("th",{parentName:"tr",align:null},"Date"),(0,n.kt)("th",{parentName:"tr",align:null},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:null},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.3.0"),(0,n.kt)("td",{parentName:"tr",align:null},"2023-06-26"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/27738"},"27738")),(0,n.kt)("td",{parentName:"tr",align:null},"License Update: Elv2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.2.39"),(0,n.kt)("td",{parentName:"tr",align:null},"2023-05-31"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/26833"},"26833")),(0,n.kt)("td",{parentName:"tr",align:null},"Remove authSpecification in favour of advancedAuth in specification")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.2.38"),(0,n.kt)("td",{parentName:"tr",align:null},"2023-05-16"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/26097"},"26097")),(0,n.kt)("td",{parentName:"tr",align:null},"Refactor config error")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.2.37"),(0,n.kt)("td",{parentName:"tr",align:null},"2023-02-21"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/23292"},"23292")),(0,n.kt)("td",{parentName:"tr",align:null},"Skip non grid sheets.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.2.36"),(0,n.kt)("td",{parentName:"tr",align:null},"2023-02-21"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/23272"},"23272")),(0,n.kt)("td",{parentName:"tr",align:null},"Handle empty sheets gracefully.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.2.35"),(0,n.kt)("td",{parentName:"tr",align:null},"2023-02-23"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/23057"},"23057")),(0,n.kt)("td",{parentName:"tr",align:null},"Slugify column names")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.2.34"),(0,n.kt)("td",{parentName:"tr",align:null},"2023-02-15"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/23071"},"23071")),(0,n.kt)("td",{parentName:"tr",align:null},"Change min spreadsheet id size to 20 symbols")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.2.33"),(0,n.kt)("td",{parentName:"tr",align:null},"2023-02-13"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/23278"},"23278")),(0,n.kt)("td",{parentName:"tr",align:null},"Handle authentication errors")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.2.32"),(0,n.kt)("td",{parentName:"tr",align:null},"2023-02-13"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/22884"},"22884")),(0,n.kt)("td",{parentName:"tr",align:null},"Do not consume http spreadsheets.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.2.31"),(0,n.kt)("td",{parentName:"tr",align:null},"2022-10-09"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/19574"},"19574")),(0,n.kt)("td",{parentName:"tr",align:null},"Revert 'Add row_id to rows and use as primary key'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.2.30"),(0,n.kt)("td",{parentName:"tr",align:null},"2022-10-09"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/19215"},"19215")),(0,n.kt)("td",{parentName:"tr",align:null},"Add row_id to rows and use as primary key")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.2.21"),(0,n.kt)("td",{parentName:"tr",align:null},"2022-10-04"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15591"},"15591")),(0,n.kt)("td",{parentName:"tr",align:null},"Clean instantiation of AirbyteStream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.2.20"),(0,n.kt)("td",{parentName:"tr",align:null},"2022-10-10"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17766"},"17766")),(0,n.kt)("td",{parentName:"tr",align:null},"Fix null pointer exception when parsing the spreadsheet id.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.2.19"),(0,n.kt)("td",{parentName:"tr",align:null},"2022-09-29"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17410"},"17410")),(0,n.kt)("td",{parentName:"tr",align:null},"Use latest CDK.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.2.18"),(0,n.kt)("td",{parentName:"tr",align:null},"2022-09-28"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17326"},"17326")),(0,n.kt)("td",{parentName:"tr",align:null},"Migrate to per-stream states.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.2.17"),(0,n.kt)("td",{parentName:"tr",align:null},"2022-08-03"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15107"},"15107")),(0,n.kt)("td",{parentName:"tr",align:null},"Expose Row Batch Size in Connector Specification")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.2.16"),(0,n.kt)("td",{parentName:"tr",align:null},"2022-07-07"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13729"},"13729")),(0,n.kt)("td",{parentName:"tr",align:null},"Improve configuration field description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.2.15"),(0,n.kt)("td",{parentName:"tr",align:null},"2022-06-02"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13446"},"13446")),(0,n.kt)("td",{parentName:"tr",align:null},"Retry requests resulting in a server error")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.2.13"),(0,n.kt)("td",{parentName:"tr",align:null},"2022-05-06"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12685"},"12685")),(0,n.kt)("td",{parentName:"tr",align:null},"Update CDK to v0.1.56 to emit an ",(0,n.kt)("inlineCode",{parentName:"td"},"AirbyeTraceMessage")," on uncaught exceptions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.2.12"),(0,n.kt)("td",{parentName:"tr",align:null},"2022-04-20"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12230"},"12230")),(0,n.kt)("td",{parentName:"tr",align:null},"Update connector to use a ",(0,n.kt)("inlineCode",{parentName:"td"},"spec.yaml"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.2.11"),(0,n.kt)("td",{parentName:"tr",align:null},"2022-04-13"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11977"},"11977")),(0,n.kt)("td",{parentName:"tr",align:null},"Replace leftover print statement with airbyte logger")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.2.10"),(0,n.kt)("td",{parentName:"tr",align:null},"2022-03-25"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11404"},"11404")),(0,n.kt)("td",{parentName:"tr",align:null},"Allow using Spreadsheet Link/URL instead of Spreadsheet ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.2.9"),(0,n.kt)("td",{parentName:"tr",align:null},"2022-01-25"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9208"},"9208")),(0,n.kt)("td",{parentName:"tr",align:null},"Update title and descriptions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.2.7"),(0,n.kt)("td",{parentName:"tr",align:null},"2021-09-27"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8470"},"8470")),(0,n.kt)("td",{parentName:"tr",align:null},"Migrate to the CDK")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.2.6"),(0,n.kt)("td",{parentName:"tr",align:null},"2021-09-27"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6354"},"6354")),(0,n.kt)("td",{parentName:"tr",align:null},"Support connecting via Oauth webflow")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.2.5"),(0,n.kt)("td",{parentName:"tr",align:null},"2021-09-12"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5972"},"5972")),(0,n.kt)("td",{parentName:"tr",align:null},"Fix full_refresh test by adding supported_sync_modes to Stream initialization")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.2.4"),(0,n.kt)("td",{parentName:"tr",align:null},"2021-08-05"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5233"},"5233")),(0,n.kt)("td",{parentName:"tr",align:null},"Fix error during listing sheets with diagram only")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.2.3"),(0,n.kt)("td",{parentName:"tr",align:null},"2021-06-09"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3973"},"3973")),(0,n.kt)("td",{parentName:"tr",align:null},"Add AIRBYTE_ENTRYPOINT for Kubernetes support")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.2.2"),(0,n.kt)("td",{parentName:"tr",align:null},"2021-04-20"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/2994"},"2994")),(0,n.kt)("td",{parentName:"tr",align:null},"Formatting spec")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.2.1"),(0,n.kt)("td",{parentName:"tr",align:null},"2021-04-03"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/2726"},"2726")),(0,n.kt)("td",{parentName:"tr",align:null},"Fix base connector versioning")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.2.0"),(0,n.kt)("td",{parentName:"tr",align:null},"2021-03-09"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/2238"},"2238")),(0,n.kt)("td",{parentName:"tr",align:null},"Protocol allows future/unknown properties")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.1.7"),(0,n.kt)("td",{parentName:"tr",align:null},"2021-01-21"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/1762"},"1762")),(0,n.kt)("td",{parentName:"tr",align:null},"Fix issue large spreadsheet")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.1.6"),(0,n.kt)("td",{parentName:"tr",align:null},"2021-01-27"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/1668"},"1668")),(0,n.kt)("td",{parentName:"tr",align:null},"Adopt connector best practices")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.1.5"),(0,n.kt)("td",{parentName:"tr",align:null},"2020-12-30"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/1438"},"1438")),(0,n.kt)("td",{parentName:"tr",align:null},"Implement backoff")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.1.4"),(0,n.kt)("td",{parentName:"tr",align:null},"2020-11-30"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/1046"},"1046")),(0,n.kt)("td",{parentName:"tr",align:null},"Add connectors using an index YAML file")))))}d.isMDXComponent=!0},3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>g});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),u=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=u(a),c=n,g=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return a?r.createElement(g,i(i({ref:e},s),{},{components:a})):r.createElement(g,i({ref:e},s))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:n,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);