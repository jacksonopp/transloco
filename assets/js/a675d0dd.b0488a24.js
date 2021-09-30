"use strict";(self.webpackChunktransloco_docs=self.webpackChunktransloco_docs||[]).push([[6976],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=d(n),c=i,u=k["".concat(p,".").concat(c)]||k[c]||m[c]||l;return n?a.createElement(u,r(r({ref:t},s),{},{components:n})):a.createElement(u,r({ref:t},s))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6369:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return k}});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),r=["components"],o={title:"Schematics",description:"Schematics | Transloco Angular i18n"},p=void 0,d={unversionedId:"schematics",id:"schematics",isDocsHomePage:!1,title:"Schematics",description:"Schematics | Transloco Angular i18n",source:"@site/docs/schematics.mdx",sourceDirName:".",slug:"/schematics",permalink:"/transloco/docs/schematics",editUrl:"https://github.com/ngneat/transloco/edit/master/docs/docs/schematics.mdx",tags:[],version:"current",frontMatter:{title:"Schematics",description:"Schematics | Transloco Angular i18n"}},s=[{value:"Ng-add",id:"ng-add",children:[{value:"Overview",id:"overview",children:[]},{value:"Command",id:"command",children:[]},{value:"Options",id:"options",children:[]}]},{value:"Scope",id:"scope",children:[{value:"Overview",id:"overview-1",children:[]},{value:"Command",id:"command-1",children:[]},{value:"Options",id:"options-1",children:[]},{value:"Examples",id:"examples",children:[]}]},{value:"Component",id:"component",children:[{value:"Overview",id:"overview-2",children:[]},{value:"Command",id:"command-2",children:[]},{value:"Options",id:"options-2",children:[]}]},{value:"Join",id:"join",children:[{value:"Overview",id:"overview-3",children:[]},{value:"Command",id:"command-3",children:[]},{value:"Examples",id:"examples-1",children:[]},{value:"Options",id:"options-3",children:[]}]},{value:"Split",id:"split",children:[{value:"Overview",id:"overview-4",children:[]},{value:"Command",id:"command-4",children:[]},{value:"Options",id:"options-4",children:[]}]},{value:"Upgrade",id:"upgrade",children:[{value:"Overview",id:"overview-5",children:[]},{value:"Command",id:"command-5",children:[]},{value:"Options",id:"options-5",children:[]}]}],m={toc:s};function k(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"ng-add"},"Ng-add"),(0,l.kt)("h3",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Creates boilerplate translation files for the given languages, and adds Transloco configuration for the project's root module."),(0,l.kt)("h3",{id:"command"},"Command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  ng add @ngneat/transloco\n")),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("h4",{id:"create-the-translation-files-along-with-the-required-configuration"},"Create the translation files along with the required configuration."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"--langs")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"default"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"en, es")))),(0,l.kt)("h4",{id:"provide-the-translation-files-loader"},"Provide the translation files loader."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"--loader")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"default"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Http")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"options"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Http"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Webpack")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"alias"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"lo")))),(0,l.kt)("h4",{id:"define-the-translation-files-format"},"Define the translation files format."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"--translate-type")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"default"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"options"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Typescript")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"alias"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"t")))),(0,l.kt)("h4",{id:"provide-the-configuration-that-is-needed-for-a-project-using-server-side-rendering"},"Provide the configuration that is needed for a project using server side rendering."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"--ssr")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),","),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"default"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"false")))),(0,l.kt)("h4",{id:"define-the-location-of-the-translation-files"},"Define the location of the translation files."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"--path")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"default"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"assets/i18n/")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"alias"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"p")))),(0,l.kt)("h4",{id:"provide-the-name-of-the-project-where-transloco-should-be-installed-to"},"Provide the name of the project where Transloco should be installed to."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"--project")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")))),(0,l.kt)("h4",{id:"provide-the-path-to-a-root-module-and-import-translocomodule-along-with-the-modules-required-configuration-defined-by-previous-flags"},"Provide the path to a root ",(0,l.kt)("inlineCode",{parentName:"h4"},"Module")," and import ",(0,l.kt)("inlineCode",{parentName:"h4"},"TranslocoModule")," along with the module's required configuration defined by previous flags."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"--module")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"default"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"app")))),(0,l.kt)("h2",{id:"scope"},"Scope"),(0,l.kt)("h3",{id:"overview-1"},"Overview"),(0,l.kt)("p",null,"Add new Transloco scope to a new/existing Angular ",(0,l.kt)("inlineCode",{parentName:"p"},"module"),", and create the scope's translation files."),(0,l.kt)("h3",{id:"command-1"},"Command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ng generate @ngneat/transloco:scope [name]\n")),(0,l.kt)("h3",{id:"options-1"},"Options"),(0,l.kt)("p",null,"Define the name of the new scope."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--name"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Define the path at which module to add scope to, relative to the workspace root."),(0,l.kt)("p",null,"Note if this flag won't be provide a new Module should be created."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--module"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Define the languages of the scope, default is the root languages."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--langs"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"alias"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"la")),(0,l.kt)("p",null,"Skip the creation of the translation files."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--skip-creation"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Define the format of the translation files."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--translate-type"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"default"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON")),(0,l.kt)("p",null,"Define the location of the translation files."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--translation-path"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ng g @ngneat/transloco:scope my-scope\nng g @ngneat/transloco:scope my-scope --module path/to/my-scope\nng g @ngneat/transloco:scope my-scope --inline-loader\n")),(0,l.kt)("h2",{id:"component"},"Component"),(0,l.kt)("h3",{id:"overview-2"},"Overview"),(0,l.kt)("p",null,"Creates boilerplate files for Angular ",(0,l.kt)("inlineCode",{parentName:"p"},"component")," with a simple translation"),(0,l.kt)("h3",{id:"command-2"},"Command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ng generate @ngneat/transloco:component [name]\n")),(0,l.kt)("h3",{id:"options-2"},"Options"),(0,l.kt)("h4",{id:"define-the-components-name"},"Define the component's name."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"--name")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")))),(0,l.kt)("h2",{id:"join"},"Join"),(0,l.kt)("h3",{id:"overview-3"},"Overview"),(0,l.kt)("p",null,"Merge all our translation files into one piece for each language."),(0,l.kt)("h3",{id:"command-3"},"Command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ng generate @ngneat/transloco:join\n")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If you have more then one entry folder for your translation files, you will have to add a mapping for each folder entry and the scope name. It could be done using scopePathMap property in your ",(0,l.kt)("inlineCode",{parentName:"p"},"transloco.config.js")," file."))),(0,l.kt)("p",null,"By default the build script will go over the root translation file directory and will refer every sub directory as scope."),(0,l.kt)("p",null,"Let's say we have the following translations folder:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u251c\u2500 src/assets/i18n/\n   \u251c\u2500 en.json\n   \u251c\u2500 fr.json\n   \u251c\u2500 es.json\n   \u251c\u2500 todos/\n      \u251c\u2500 en.json\n      \u251c\u2500 fr.json\n      \u251c\u2500 es.json\n")),(0,l.kt)("p",null,"The script will run over all the directory files (minus the default language) and will merge the scope files to the main translation files."),(0,l.kt)("p",null,"Say our project's default language is English,  if we run the script the expected output would be:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="dist-i18n/es.json"',title:'"dist-i18n/es.json"'},'{\n  "hello": "transloco es",\n  "todos": {\n    "todos-translation": "todos es"\n  }\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="dist-i18n/fr.json"',title:'"dist-i18n/fr.json"'},'{\n  "hello": "transloco fr",\n  "todos": {\n    "todos-translation": "todos fr"\n  }\n}\n')),(0,l.kt)("p",null,"If we have more then one entry folder for a ",(0,l.kt)("inlineCode",{parentName:"p"},"scope")," we can specify a map between the ",(0,l.kt)("inlineCode",{parentName:"p"},"scope")," name and the path to the translations using scopePathMap property in your ",(0,l.kt)("inlineCode",{parentName:"p"},"transloco.config.js")," file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="transloco.config.js"',title:'"transloco.config.js"'},'{\n  "scopePathMap": {\n    "my-scope": "src/app/path-to-scope",\n    "my-project-scope": "projects/my-project/i18n"\n  }\n}\n')),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Once you specify the scopePathMap the script will automatically use it"))),(0,l.kt)("h3",{id:"examples-1"},"Examples"),(0,l.kt)("p",null,"Merge translations files to a specific output directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ng g @ngneat/transloco:build --default-lang en\n")),(0,l.kt)("h3",{id:"options-3"},"Options"),(0,l.kt)("p",null,"The folder that contains the root translation files."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"--translation-path")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"default"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"src/assets/i18n")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"alias"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"root")))),(0,l.kt)("p",null,"The output directory path"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"--out-dir")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"default"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"dist-i18n")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"alias"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"o")))),(0,l.kt)("p",null,"The default language of the project"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"--default-lang")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"alias"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"o")))),(0,l.kt)("p",null,"Determine rather to join also the default language"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"--include-default-lang")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"default"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"false")))),(0,l.kt)("h2",{id:"split"},"Split"),(0,l.kt)("h3",{id:"overview-4"},"Overview"),(0,l.kt)("p",null,"Does the opposite process of ",(0,l.kt)("inlineCode",{parentName:"p"},"join")," command. It splits the translated files between the project's translation files."),(0,l.kt)("h3",{id:"command-4"},"Command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ng generate @ngneat/transloco:split\n")),(0,l.kt)("h3",{id:"options-4"},"Options"),(0,l.kt)("p",null,"The folder that contains the root translation files."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"--translation-path")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"default"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"src/assets/i18n")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"alias"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"root")))),(0,l.kt)("p",null,"The path of the source directory that contains the translated files."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"source")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"default"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"dist-i18n")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"alias"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"o")))),(0,l.kt)("h2",{id:"upgrade"},"Upgrade"),(0,l.kt)("h3",{id:"overview-5"},"Overview"),(0,l.kt)("p",null,"The Library's upgrade script from lower versions. For more information about the script see:\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ngneat/transloco/tree/master/schematics/src/upgrade/v2-upgrade.md"},"v2-upgrade.md")),(0,l.kt)("h3",{id:"command-5"},"Command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"}," ng generate @ngneat/transloco:upgrade\n")),(0,l.kt)("h3",{id:"options-5"},"Options"),(0,l.kt)("h4",{id:"define-the-entry-path-of-the-upgrade-script"},"Define the entry path of the upgrade script."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"--path")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"default"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"./src/app")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"alias"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"p")))))}k.isMDXComponent=!0}}]);