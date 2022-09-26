"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[0],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=l(n),u=r,k=s["".concat(d,".").concat(u)]||s[u]||c[u]||i;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6643:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},o="Writing",p={unversionedId:"actions/writing",id:"actions/writing",title:"Writing",description:"Make sure your values are properly encoded",source:"@site/docs/actions/writing.md",sourceDirName:"actions",slug:"/actions/writing",permalink:"/obsidian-advanced-uri/actions/writing",draft:!1,editUrl:"https://github.com/Vinzent03/obsidian-advanced-uri/tree/master/docs/docs/actions/writing.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"Navigation",permalink:"/obsidian-advanced-uri/actions/navigation"},next:{title:"Commands",permalink:"/obsidian-advanced-uri/actions/commands"}},d={},l=[],m={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"writing"},"Writing"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Make sure your values are properly ",(0,r.kt)("a",{parentName:"p",href:"/obsidian-advanced-uri/concepts/encoding"},"encoded"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," parameter can be replaced with ",(0,r.kt)("inlineCode",{parentName:"p"},"clipboard=true")," to get the content from the clipboard.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"/"),(0,r.kt)("th",{parentName:"tr",align:null},"parameters"),(0,r.kt)("th",{parentName:"tr",align:null},"explanation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"write"),(0,r.kt)("td",{parentName:"tr",align:null},"<identification",">",", data"),(0,r.kt)("td",{parentName:"tr",align:null},"Only writes ",(0,r.kt)("inlineCode",{parentName:"td"},"data")," to the file if the file is not already present")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"overwrite"),(0,r.kt)("td",{parentName:"tr",align:null},"<identification",">",", data, mode=overwrite"),(0,r.kt)("td",{parentName:"tr",align:null},"Writes ",(0,r.kt)("inlineCode",{parentName:"td"},"data")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"filepath")," even if the file already exists")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"append"),(0,r.kt)("td",{parentName:"tr",align:null},"<identification",">",", data, mode=append"),(0,r.kt)("td",{parentName:"tr",align:null},"Only appends ",(0,r.kt)("inlineCode",{parentName:"td"},"data")," to the file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"prepend"),(0,r.kt)("td",{parentName:"tr",align:null},"<identification",">",", data, mode=prepend"),(0,r.kt)("td",{parentName:"tr",align:null},"Only prepends ",(0,r.kt)("inlineCode",{parentName:"td"},"data")," to the file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"new"),(0,r.kt)("td",{parentName:"tr",align:null},"filepath, data, mode=new"),(0,r.kt)("td",{parentName:"tr",align:null},"Definitely creates a new file. If ",(0,r.kt)("inlineCode",{parentName:"td"},"filepath")," already exists, an incrementing number is appended")))),(0,r.kt)("admonition",{title:"Example",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Write"),' "Hello World" to "my-file.md":'),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-uri"},"obsidian://advanced-uri?vault=<your-vault>&filepath=my-file&data=Hello%2520World\n")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Overwrite"),' "This text is overwritten" to "my-file.md":'),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-uri"},"obsidian://advanced-uri?vault=<your-vault>&filepath=my-file&data=This%2520text%2520is%2520overwritten&mode=overwrite\n")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Append"),' "Hello World" to today\'s ',(0,r.kt)("strong",{parentName:"p"},"daily note"),":"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-uri"},"obsidian://advanced-uri?vault=<your-vault>&daily=true&data=Hello%2520World&mode=append\n")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Append")," content from the ",(0,r.kt)("strong",{parentName:"p"},"clipboard")," to today's ",(0,r.kt)("strong",{parentName:"p"},"daily note"),":"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-uri"},"obsidian://advanced-uri?vault=<your-vault>&daily=true&clipboard=true&mode=append\n"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You may use the ",(0,r.kt)("inlineCode",{parentName:"p"},"heading")," parameter to append and prepend data to a heading. More information in ",(0,r.kt)("a",{parentName:"p",href:"/obsidian-advanced-uri/actions/navigation"},"Navigation"))))}c.isMDXComponent=!0}}]);