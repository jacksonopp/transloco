"use strict";(self.webpackChunktransloco_docs=self.webpackChunktransloco_docs||[]).push([[851],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),g=o,d=m["".concat(c,".").concat(g)]||m[g]||u[g]||a;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3704:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={title:"Multiple Languages Simultaneously",description:"Multiple Languages Simultaneously | Transloco Angular i18n"},c=void 0,p={unversionedId:"multi-lang",id:"multi-lang",isDocsHomePage:!1,title:"Multiple Languages Simultaneously",description:"Multiple Languages Simultaneously | Transloco Angular i18n",source:"@site/docs/multi-lang.mdx",sourceDirName:".",slug:"/multi-lang",permalink:"/transloco/docs/multi-lang",editUrl:"https://github.com/ngneat/transloco/edit/master/docs/docs/multi-lang.mdx",tags:[],version:"current",frontMatter:{title:"Multiple Languages Simultaneously",description:"Multiple Languages Simultaneously | Transloco Angular i18n"},sidebar:"docs",previous:{title:"SSR Support",permalink:"/transloco/docs/ssr-support"},next:{title:"Additional Functionality",permalink:"/transloco/docs/additional-functionality"}},s=[],u={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are times you may need to use a different language in a specific part of the template, or in a particular component or module. This can be achieved in a similar way to the previous example, except here set the ",(0,a.kt)("inlineCode",{parentName:"p"},"TRANSLOCO_LANG")," provider either in lazy module providers list, the component providers or in the template."),(0,a.kt)("p",null,"Here's an example of setting it in a component's providers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'{6,7} title="my-comp.component.ts"',"{6,7}":!0,title:'"my-comp.component.ts"'},"@Component({\n  selector: 'my-comp',\n  templateUrl: './my-comp.component.html',\n  providers: [\n    {\n      provide: TRANSLOCO_LANG,\n      useValue: 'es'\n    }\n  ]\n})\nexport class MyComponent {}\n")),(0,a.kt)("p",null,"Using Angular's DI rules, this will ensure that the language in this component's template and all of its children's templates is ",(0,a.kt)("inlineCode",{parentName:"p"},"es"),"."),(0,a.kt)("p",null,"Alternatively, here is how to use it directly in the template:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'{1} title="my-comp.component.html"',"{1}":!0,title:'"my-comp.component.html"'},"<ng-container *transloco=\"let t; lang: 'en'\">\n  <p>Inline (en) wins: {{ t('home') }}</p>\n</ng-container>\n")),(0,a.kt)("p",null,"Note that it will be used as the ",(0,a.kt)("strong",{parentName:"p"},"initial")," language. If you need it to be ",(0,a.kt)("em",{parentName:"p"},"static"),", you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"static")," pipe:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'{7} title="my-comp.component.ts"',"{7}":!0,title:'"my-comp.component.ts"'},"@Component({\n  selector: 'my-comp',\n  templateUrl: './my-comp.component.html',\n  providers: [\n    {\n      provide: TRANSLOCO_LANG,\n      useValue: 'es|static'\n    }\n  ]\n})\nexport class MyComponent {}\n")),(0,a.kt)("p",null,"Or in the template:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="my-comp.component.html"',title:'"my-comp.component.html"'},"// Define the lang dynamically in the component\n<ng-container *transloco=\"let t; lang: someVariable\">\n\n// Or pass it as inline string\n<ng-container *transloco=\"let t; lang: 'es|static'\">\n  <p>Inline (es) wins and stays: {{ t('home') }}</p>\n</ng-container>\n")))}m.isMDXComponent=!0}}]);