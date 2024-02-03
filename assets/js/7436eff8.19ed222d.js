"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[240],{5788:(e,n,t)=>{t.d(n,{Iu:()=>g,yg:()=>y});var a=t(1504);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),m=d(t),s=r,y=m["".concat(p,".").concat(s)]||m[s]||c[s]||i;return t?a.createElement(y,o(o({ref:n},g),{},{components:t})):a.createElement(y,o({ref:n},g))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=s;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},7824:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=t(5072),r=(t(1504),t(5788));const i={sidebar_position:1},o="Navigation",l={unversionedId:"actions/navigation",id:"actions/navigation",title:"Navigation",description:"Use the view mode parameter to e.g. switch between reading and live preview mode.",source:"@site/docs/actions/navigation.md",sourceDirName:"actions",slug:"/actions/navigation",permalink:"/obsidian-advanced-uri/actions/navigation",draft:!1,editUrl:"https://github.com/Vinzent03/obsidian-advanced-uri/tree/master/docs/docs/actions/navigation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Actions",permalink:"/obsidian-advanced-uri/actions/"},next:{title:"Writing",permalink:"/obsidian-advanced-uri/actions/writing"}},p={},d=[],g={toc:d},m="wrapper";function c(e){let{components:n,...t}=e;return(0,r.yg)(m,(0,a.c)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"navigation"},"Navigation"),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Use the ",(0,r.yg)("a",{parentName:"p",href:"/obsidian-advanced-uri/concepts/navigation_parameters#view-mode"},"view mode")," parameter to e.g. switch between reading and live preview mode.")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Use the ",(0,r.yg)("a",{parentName:"p",href:"/obsidian-advanced-uri/concepts/navigation_parameters#open-mode"},"open mode")," parameter to open the file always in a new tab or in a new window.")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"/"),(0,r.yg)("th",{parentName:"tr",align:null},"parameters"),(0,r.yg)("th",{parentName:"tr",align:null},"explanation"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"workspace"),(0,r.yg)("td",{parentName:"tr",align:null},"workspace"),(0,r.yg)("td",{parentName:"tr",align:null},"Opens the workspace called ",(0,r.yg)("inlineCode",{parentName:"td"},"workspace"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"save current workspace"),(0,r.yg)("td",{parentName:"tr",align:null},"saveworkspace=true"),(0,r.yg)("td",{parentName:"tr",align:null},"Saves the current workspace. (Can be combined with ",(0,r.yg)("inlineCode",{parentName:"td"},"workspace")," to open a new workspace afterwards)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"file"),(0,r.yg)("td",{parentName:"tr",align:null},"<identification",">"),(0,r.yg)("td",{parentName:"tr",align:null},"Opens file")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"line in file"),(0,r.yg)("td",{parentName:"tr",align:null},"<identification",">",", line"),(0,r.yg)("td",{parentName:"tr",align:null},"Opens line ",(0,r.yg)("inlineCode",{parentName:"td"},"line")," in file")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"heading in file"),(0,r.yg)("td",{parentName:"tr",align:null},"<identification",">",", heading"),(0,r.yg)("td",{parentName:"tr",align:null},"Opens the ",(0,r.yg)("inlineCode",{parentName:"td"},"heading")," in file")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"block reference in file"),(0,r.yg)("td",{parentName:"tr",align:null},"<identification",">",", block"),(0,r.yg)("td",{parentName:"tr",align:null},"Opens the ",(0,r.yg)("inlineCode",{parentName:"td"},"block")," in file")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"global block reference"),(0,r.yg)("td",{parentName:"tr",align:null},"block"),(0,r.yg)("td",{parentName:"tr",align:null},"Searches the whole vault for that block id and uses that file for <identification",">")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"settings tab"),(0,r.yg)("td",{parentName:"tr",align:null},"settingid"),(0,r.yg)("td",{parentName:"tr",align:null},"Opens a settings tab by id, all plugins are supported. See ",(0,r.yg)("a",{parentName:"td",href:"/obsidian-advanced-uri/actions/settings_navigation"},"here")," for a list of all available options")))),(0,r.yg)("admonition",{title:"Example",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Open ",(0,r.yg)("strong",{parentName:"p"},"workspace"),' "main":'),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-uri"},"obsidian://advanced-uri?vault=<your-vault>&workspace=main\n")),(0,r.yg)("p",{parentName:"admonition"},"Open ",(0,r.yg)("strong",{parentName:"p"},"heading"),' "Goal" in "my-file.md" (',(0,r.yg)("strong",{parentName:"p"},"Important:")," Without syntax, only ",(0,r.yg)("inlineCode",{parentName:"p"},"Goal"),"):"),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-uri"},"obsidian://advanced-uri?vault=<your-vault>&filepath=my-file&heading=Goal\n")),(0,r.yg)("p",{parentName:"admonition"},"Open ",(0,r.yg)("strong",{parentName:"p"},"block"),'-id "12345" in "my-file.md" (',(0,r.yg)("strong",{parentName:"p"},"Important:")," Without syntax, only ",(0,r.yg)("inlineCode",{parentName:"p"},"12345"),"):"),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-uri"},"obsidian://advanced-uri?vault=<your-vault>&filepath=my-file&block=12345\n")),(0,r.yg)("p",{parentName:"admonition"},"Searches whole vault for ",(0,r.yg)("strong",{parentName:"p"},"block"),'-id "12345". Ideally that block id is unique. (',(0,r.yg)("strong",{parentName:"p"},"Important:")," Without syntax, only ",(0,r.yg)("inlineCode",{parentName:"p"},"12345"),"):"),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-uri"},"obsidian://advanced-uri?vault=<your-vault>&block=12345\n"))))}c.isMDXComponent=!0}}]);