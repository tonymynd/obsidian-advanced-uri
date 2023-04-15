"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[454],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,k=c["".concat(p,".").concat(u)]||c[u]||s[u]||i;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1654:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},o="Navigation",l={unversionedId:"actions/navigation",id:"actions/navigation",title:"Navigation",description:"Use the view mode parameter to e.g. switch between reading and live preview mode.",source:"@site/docs/actions/navigation.md",sourceDirName:"actions",slug:"/actions/navigation",permalink:"/obsidian-advanced-uri/zh-CN/actions/navigation",draft:!1,editUrl:"https://github.com/Vinzent03/obsidian-advanced-uri/tree/master/docs/docs/actions/navigation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Actions",permalink:"/obsidian-advanced-uri/zh-CN/actions/"},next:{title:"Writing",permalink:"/obsidian-advanced-uri/zh-CN/actions/writing"}},p={},d=[],m={toc:d};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"navigation"},"Navigation"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use the ",(0,r.kt)("a",{parentName:"p",href:"/obsidian-advanced-uri/zh-CN/concepts/navigation_parameters#view-mode"},"view mode")," parameter to e.g. switch between reading and live preview mode.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use the ",(0,r.kt)("a",{parentName:"p",href:"/obsidian-advanced-uri/zh-CN/concepts/navigation_parameters#open-mode"},"open mode")," parameter to open the file always in a new tab or in a new window.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"/"),(0,r.kt)("th",{parentName:"tr",align:null},"parameters"),(0,r.kt)("th",{parentName:"tr",align:null},"explanation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"workspace"),(0,r.kt)("td",{parentName:"tr",align:null},"workspace"),(0,r.kt)("td",{parentName:"tr",align:null},"Opens the workspace called ",(0,r.kt)("inlineCode",{parentName:"td"},"workspace"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"save current workspace"),(0,r.kt)("td",{parentName:"tr",align:null},"saveworkspace=true"),(0,r.kt)("td",{parentName:"tr",align:null},"Saves the current workspace. (Can be combined with ",(0,r.kt)("inlineCode",{parentName:"td"},"workspace")," to open a new workspace afterwards)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file"),(0,r.kt)("td",{parentName:"tr",align:null},"<identification",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Opens file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"line in file"),(0,r.kt)("td",{parentName:"tr",align:null},"<identification",">",", line"),(0,r.kt)("td",{parentName:"tr",align:null},"Opens line ",(0,r.kt)("inlineCode",{parentName:"td"},"line")," in file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"heading"),(0,r.kt)("td",{parentName:"tr",align:null},"<identification",">",", heading"),(0,r.kt)("td",{parentName:"tr",align:null},"Opens the ",(0,r.kt)("inlineCode",{parentName:"td"},"heading")," in file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"block reference"),(0,r.kt)("td",{parentName:"tr",align:null},"<identification",">",", block"),(0,r.kt)("td",{parentName:"tr",align:null},"Opens the ",(0,r.kt)("inlineCode",{parentName:"td"},"block")," in file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"settings tab"),(0,r.kt)("td",{parentName:"tr",align:null},"settingid"),(0,r.kt)("td",{parentName:"tr",align:null},"Opens a settings tab by id, all plugins are supported. See ",(0,r.kt)("a",{parentName:"td",href:"/obsidian-advanced-uri/zh-CN/actions/settings_navigation"},"here")," for a list of all available options")))),(0,r.kt)("admonition",{title:"Example",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Open ",(0,r.kt)("strong",{parentName:"p"},"workspace"),' "main":'),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-uri"},"obsidian://advanced-uri?vault=<your-vault>&workspace=main\n")),(0,r.kt)("p",{parentName:"admonition"},"Open ",(0,r.kt)("strong",{parentName:"p"},"heading"),' "Goal" in "my-file.md" (',(0,r.kt)("strong",{parentName:"p"},"Important:")," Without syntax, only ",(0,r.kt)("inlineCode",{parentName:"p"},"Goal"),"):"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-uri"},"obsidian://advanced-uri?vault=<your-vault>&filepath=my-file&heading=Goal\n")),(0,r.kt)("p",{parentName:"admonition"},"Open ",(0,r.kt)("strong",{parentName:"p"},"block"),'-id "12345" in "my-file.md" (',(0,r.kt)("strong",{parentName:"p"},"Important:")," Without syntax, only ",(0,r.kt)("inlineCode",{parentName:"p"},"12345"),"):"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-uri"},"obsidian://advanced-uri?vault=<your-vault>&filepath=my-file&block=12345\n"))))}s.isMDXComponent=!0}}]);