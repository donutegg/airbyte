"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[15538],{38398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={},i="Convex",l={unversionedId:"integrations/destinations/convex",id:"integrations/destinations/convex",title:"Convex",description:"This page contains the setup guide and reference information for the Convex destination connector.",source:"@site/../docs/integrations/destinations/convex.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/convex",permalink:"/integrations/destinations/convex",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/destinations/convex.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"ClickHouse",permalink:"/integrations/destinations/clickhouse"},next:{title:"Local CSV",permalink:"/integrations/destinations/csv"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Changelog",id:"changelog",level:2}],d={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"convex"},"Convex"),(0,r.kt)("p",null,"This page contains the setup guide and reference information for the Convex destination connector."),(0,r.kt)("p",null,"Get started with Convex at the ",(0,r.kt)("a",{parentName:"p",href:"https://convex.dev"},"Convex website"),".\nSee your data on the ",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.convex.dev/"},"Convex dashboard"),"."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Convex destination connector supports Full Refresh Overwrite, Full Refresh Append, Incremental Append, and Incremental Append Dedup."),(0,r.kt)("h3",{id:"output-schema"},"Output schema"),(0,r.kt)("p",null,"Each stream will be output into a table in Convex. Convex's table naming rules apply - table names can only contain letters, digits, and underscores and may not start with an underscore."),(0,r.kt)("p",null,"Each record is a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.convex.dev/using/types"},"document")," in Convex and is assigned ",(0,r.kt)("inlineCode",{parentName:"p"},"_id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"_creationTime")," fields during sync."),(0,r.kt)("h3",{id:"features"},"Features"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Dedupe Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Replicate Incremental Deletes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Change Data Capture"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")))),(0,r.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,r.kt)("p",null,"Take care to use the appropriate sync method and frequency for the quantity of data streaming from the source. Performance may suffer with large, frequent syncs with Full Refresh. Prefer Incremental modes when possible.\nIf you see performance issues,please reach via email to ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@convex.dev"},"Convex support")," or on ",(0,r.kt)("a",{parentName:"p",href:"https://convex.dev/community"},"Discord"),"."),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Convex Account"),(0,r.kt)("li",{parentName:"ul"},"Convex Project"),(0,r.kt)("li",{parentName:"ul"},"Deploy key")),(0,r.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,r.kt)("p",null,"Airbyte integration is available to all Convex developers."),(0,r.kt)("p",null,"On the ",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.convex.dev/"},"Convex dashboard"),", navigate to the project and deployment that you want to sync."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the Settings tab."),(0,r.kt)("li",{parentName:"ol"},'Copy the "Deployment URL" from the settings page to the ',(0,r.kt)("inlineCode",{parentName:"li"},"deployment_url")," field in Airbyte."),(0,r.kt)("li",{parentName:"ol"},'Click "Generate a deploy key".'),(0,r.kt)("li",{parentName:"ol"},"Copy the generated deploy key into the ",(0,r.kt)("inlineCode",{parentName:"li"},"access_key")," field in Airbyte.")),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2023-01-05"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TODO: link to PR here"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\ud83c\udf89 New Destination: Convex")))))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);