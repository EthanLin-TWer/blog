/*! For license information please see react-core.vendor-d0ec3b80.74c03d36d9592267e31c.js.LICENSE.txt */
"use strict";(self.webpackChunkethan_blog=self.webpackChunkethan_blog||[]).push([[629],{44478:(e,t,n)=>{var r=n(10422);t.s=r.createRoot,r.hydrateRoot},10422:(e,t,n)=>{!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=n(53746)},60198:(e,t)=>{var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,l=n?Symbol.for("react.fragment"):60107,s=n?Symbol.for("react.strict_mode"):60108,i=n?Symbol.for("react.profiler"):60114,a=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.async_mode"):60111,f=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,y=n?Symbol.for("react.memo"):60115,h=n?Symbol.for("react.lazy"):60116,b=n?Symbol.for("react.block"):60121,g=n?Symbol.for("react.fundamental"):60117,w=n?Symbol.for("react.responder"):60118,S=n?Symbol.for("react.scope"):60119;function v(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case u:case f:case l:case i:case s:case p:return e;default:switch(e=e&&e.$$typeof){case c:case d:case h:case y:case a:return e;default:return t}}case o:return t}}}function E(e){return v(e)===f}t.AsyncMode=u,t.ConcurrentMode=f,t.ContextConsumer=c,t.ContextProvider=a,t.Element=r,t.ForwardRef=d,t.Fragment=l,t.Lazy=h,t.Memo=y,t.Portal=o,t.Profiler=i,t.StrictMode=s,t.Suspense=p,t.isAsyncMode=function(e){return E(e)||v(e)===u},t.isConcurrentMode=E,t.isContextConsumer=function(e){return v(e)===c},t.isContextProvider=function(e){return v(e)===a},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return v(e)===d},t.isFragment=function(e){return v(e)===l},t.isLazy=function(e){return v(e)===h},t.isMemo=function(e){return v(e)===y},t.isPortal=function(e){return v(e)===o},t.isProfiler=function(e){return v(e)===i},t.isStrictMode=function(e){return v(e)===s},t.isSuspense=function(e){return v(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===l||e===f||e===i||e===s||e===p||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===y||e.$$typeof===a||e.$$typeof===c||e.$$typeof===d||e.$$typeof===g||e.$$typeof===w||e.$$typeof===S||e.$$typeof===b)},t.typeOf=v},56237:(e,t,n)=>{e.exports=n(60198)},11195:(e,t)=>{var n,r=Symbol.for("react.element"),o=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.server_context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),h=Symbol.for("react.offscreen");function b(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case l:case i:case s:case d:case p:return e;default:switch(e=e&&e.$$typeof){case u:case c:case f:case y:case m:case a:return e;default:return t}}case o:return t}}}n=Symbol.for("react.module.reference"),t.ContextConsumer=c,t.ContextProvider=a,t.Element=r,t.ForwardRef=f,t.Fragment=l,t.Lazy=y,t.Memo=m,t.Portal=o,t.Profiler=i,t.StrictMode=s,t.Suspense=d,t.SuspenseList=p,t.isAsyncMode=function(){return!1},t.isConcurrentMode=function(){return!1},t.isContextConsumer=function(e){return b(e)===c},t.isContextProvider=function(e){return b(e)===a},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return b(e)===f},t.isFragment=function(e){return b(e)===l},t.isLazy=function(e){return b(e)===y},t.isMemo=function(e){return b(e)===m},t.isPortal=function(e){return b(e)===o},t.isProfiler=function(e){return b(e)===i},t.isStrictMode=function(e){return b(e)===s},t.isSuspense=function(e){return b(e)===d},t.isSuspenseList=function(e){return b(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===l||e===i||e===s||e===d||e===p||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===m||e.$$typeof===a||e.$$typeof===c||e.$$typeof===f||e.$$typeof===n||void 0!==e.getModuleId)},t.typeOf=b},61357:(e,t,n)=>{e.exports=n(11195)},37936:(e,t,n)=>{n.d(t,{zt:()=>g,I0:()=>E,v9:()=>m});var r=n(4322),o=n(7231),l=n(10422);let s=function(e){e()};const i=()=>s;var a=n(50959);const c=(0,a.createContext)(null);function u(){return(0,a.useContext)(c)}let f=()=>{throw new Error("uSES not initialized!")};const d=(e,t)=>e===t;function p(e=c){const t=e===c?u:()=>(0,a.useContext)(e);return function(e,n=d){const{store:r,subscription:o,getServerState:l}=t(),s=f(o.addNestedSub,r.getState,l||r.getState,e,n);return(0,a.useDebugValue)(s),s}}const m=p();n(72535),n(61357);const y={notify(){},get:()=>[]};const h="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?a.useLayoutEffect:a.useEffect;let b=null;const g=function({store:e,context:t,children:n,serverState:r}){const o=(0,a.useMemo)((()=>{const t=function(e,t){let n,r=y;function o(){s.onStateChange&&s.onStateChange()}function l(){n||(n=t?t.addNestedSub(o):e.subscribe(o),r=function(){const e=i();let t=null,n=null;return{clear(){t=null,n=null},notify(){e((()=>{let e=t;for(;e;)e.callback(),e=e.next}))},get(){let e=[],n=t;for(;n;)e.push(n),n=n.next;return e},subscribe(e){let r=!0,o=n={callback:e,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){r&&null!==t&&(r=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}())}const s={addNestedSub:function(e){return l(),r.subscribe(e)},notifyNestedSubs:function(){r.notify()},handleChangeWrapper:o,isSubscribed:function(){return Boolean(n)},trySubscribe:l,tryUnsubscribe:function(){n&&(n(),n=void 0,r.clear(),r=y)},getListeners:()=>r};return s}(e);return{store:e,subscription:t,getServerState:r?()=>r:void 0}}),[e,r]),l=(0,a.useMemo)((()=>e.getState()),[e]);h((()=>{const{subscription:t}=o;return t.onStateChange=t.notifyNestedSubs,t.trySubscribe(),l!==e.getState()&&t.notifyNestedSubs(),()=>{t.tryUnsubscribe(),t.onStateChange=void 0}}),[o,l]);const s=t||c;return a.createElement(s.Provider,{value:o},n)};function w(e=c){const t=e===c?u:()=>(0,a.useContext)(e);return function(){const{store:e}=t();return e}}const S=w();function v(e=c){const t=e===c?S:w(e);return function(){return t().dispatch}}const E=v();var $,x;$=o.useSyncExternalStoreWithSelector,f=$,(e=>{b=e})(r.useSyncExternalStore),x=l.unstable_batchedUpdates,s=x},97905:(e,t,n)=>{n.d(t,{cP:()=>a,rU:()=>p});var r=n(50959),o=n(76057),l=n(92999);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}const i=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function a(e,t){return(0,l.p7)({basename:null==t?void 0:t.basename,future:null==t?void 0:t.future,history:(0,l.q_)({window:null==t?void 0:t.window}),hydrationData:(null==t?void 0:t.hydrationData)||c(),routes:e,detectErrorBoundary:o.b6}).initialize()}function c(){var e;let t=null==(e=window)?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=s({},t,{errors:u(t.errors)})),t}function u(e){if(!e)return null;let t=Object.entries(e),n={};for(let[e,r]of t)if(r&&"RouteErrorResponse"===r.__type)n[e]=new l.iQ(r.status,r.statusText,r.data,!0===r.internal);else if(r&&"Error"===r.__type){let t=new Error(r.message);t.stack="",n[e]=t}else n[e]=r;return n}const f="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,d=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,p=r.forwardRef((function(e,t){let n,{onClick:a,relative:c,reloadDocument:u,replace:p,state:m,target:y,to:h,preventScrollReset:b}=e,g=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,i),{basename:w}=r.useContext(o.Us),S=!1;if("string"==typeof h&&d.test(h)&&(n=h,f)){let e=new URL(window.location.href),t=h.startsWith("//")?new URL(e.protocol+h):new URL(h),n=(0,l.Zn)(t.pathname,w);t.origin===e.origin&&null!=n?h=n+t.search+t.hash:S=!0}let v=(0,o.oQ)(h,{relative:c}),E=function(e,t){let{target:n,replace:s,state:i,preventScrollReset:a,relative:c}=void 0===t?{}:t,u=(0,o.s0)(),f=(0,o.TH)(),d=(0,o.WU)(e,{relative:c});return r.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,n)){t.preventDefault();let n=void 0!==s?s:(0,l.Ep)(f)===(0,l.Ep)(d);u(e,{replace:n,state:i,preventScrollReset:a,relative:c})}}),[f,u,d,s,i,n,e,a,c])}(h,{replace:p,state:m,target:y,preventScrollReset:b,relative:c});return r.createElement("a",s({},g,{href:n||v,onClick:S||u?a:function(e){a&&a(e),e.defaultPrevented||E(e)},ref:t,target:y}))}));var m,y;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(m||(m={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(y||(y={}))},89694:(e,t,n)=>{n.d(t,{D:()=>R});var r=n(50959),o=n(25987),l=n(27040),s=n(58660),i=n(25130),a=n(40507),c=n(38699),u=n(95449);function f(e){if(e.allowedElements&&e.disallowedElements)throw new TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");if(e.allowedElements||e.disallowedElements||e.allowElement)return t=>{(0,u.Vn)(t,"element",((t,n,r)=>{const o=r;let l;if(e.allowedElements?l=!e.allowedElements.includes(t.tagName):e.disallowedElements&&(l=e.disallowedElements.includes(t.tagName)),!l&&e.allowElement&&"number"==typeof n&&(l=!e.allowElement(t,n,o)),l&&"number"==typeof n)return e.unwrapDisallowed&&t.children?o.children.splice(n,1,...t.children):o.children.splice(n,1),n}))}}var d=n(61357),p=n(71361),m=n(48374),y=n(98333),h=n(83135),b=n(57529),g=n(65830);const w=["http","https","mailto","tel"];function S(e){const t=(e||"").trim(),n=t.charAt(0);if("#"===n||"/"===n)return t;const r=t.indexOf(":");if(-1===r)return t;let o=-1;for(;++o<w.length;){const e=w[o];if(r===e.length&&t.slice(0,e.length).toLowerCase()===e)return t}return o=t.indexOf("?"),-1!==o&&r>o?t:(o=t.indexOf("#"),-1!==o&&r>o?t:"javascript:void(0)")}const v={}.hasOwnProperty,E=new Set(["table","thead","tbody","tfoot","tr"]);function $(e,t){const n=[];let r,o=-1;for(;++o<t.children.length;)r=t.children[o],"element"===r.type?n.push(x(e,r,o,t)):"text"===r.type?"element"===t.type&&E.has(t.tagName)&&(0,p.Q)(r)||n.push(r.value):"raw"!==r.type||e.options.skipHtml||n.push(r.value);return n}function x(e,t,n,o){const l=e.options,s=void 0===l.transformLinkUri?S:l.transformLinkUri,i=e.schema,a=t.tagName,u={};let f,p=i;if("html"===i.space&&"svg"===a&&(p=c.YP,e.schema=p),t.properties)for(f in t.properties)v.call(t.properties,f)&&k(u,f,t.properties[f],e);"ol"!==a&&"ul"!==a||e.listDepth++;const m=$(e,t);"ol"!==a&&"ul"!==a||e.listDepth--,e.schema=i;const y=t.position||{start:{line:null,column:null,offset:null},end:{line:null,column:null,offset:null}},h=l.components&&v.call(l.components,a)?l.components[a]:a,b="string"==typeof h||h===r.Fragment;if(!d.isValidElementType(h))throw new TypeError(`Component for name \`${a}\` not defined or is not renderable`);if(u.key=n,"a"===a&&l.linkTarget&&(u.target="function"==typeof l.linkTarget?l.linkTarget(String(u.href||""),t.children,"string"==typeof u.title?u.title:null):l.linkTarget),"a"===a&&s&&(u.href=s(String(u.href||""),t.children,"string"==typeof u.title?u.title:null)),b||"code"!==a||"element"!==o.type||"pre"===o.tagName||(u.inline=!0),b||"h1"!==a&&"h2"!==a&&"h3"!==a&&"h4"!==a&&"h5"!==a&&"h6"!==a||(u.level=Number.parseInt(a.charAt(1),10)),"img"===a&&l.transformImageUri&&(u.src=l.transformImageUri(String(u.src||""),String(u.alt||""),"string"==typeof u.title?u.title:null)),!b&&"li"===a&&"element"===o.type){const e=function(e){let t=-1;for(;++t<e.children.length;){const n=e.children[t];if("element"===n.type&&"input"===n.tagName)return n}return null}(t);u.checked=e&&e.properties?Boolean(e.properties.checked):null,u.index=O(o,t),u.ordered="ol"===o.tagName}var g;return b||"ol"!==a&&"ul"!==a||(u.ordered="ol"===a,u.depth=e.listDepth),"td"!==a&&"th"!==a||(u.align&&(u.style||(u.style={}),u.style.textAlign=u.align,delete u.align),b||(u.isHeader="th"===a)),b||"tr"!==a||"element"!==o.type||(u.isHeader=Boolean("thead"===o.tagName)),l.sourcePos&&(u["data-sourcepos"]=[(g=y).start.line,":",g.start.column,"-",g.end.line,":",g.end.column].map(String).join("")),!b&&l.rawSourcePos&&(u.sourcePosition=t.position),!b&&l.includeElementIndex&&(u.index=O(o,t),u.siblingCount=O(o)),b||(u.node=t),m.length>0?r.createElement(h,u,m):r.createElement(h,u)}function O(e,t){let n=-1,r=0;for(;++n<e.children.length&&e.children[n]!==t;)"element"===e.children[n].type&&r++;return r}function k(e,t,n,r){const o=(0,m.s)(r.schema,t);let l=n;null!=l&&l==l&&(Array.isArray(l)&&(l=o.commaSeparated?(0,b.P)(l):(0,h.P)(l)),"style"===o.property&&"string"==typeof l&&(l=function(e){const t={};try{(0,g.Z)(e,(function(e,n){const r="-ms-"===e.slice(0,4)?`ms-${e.slice(4)}`:e;t[r.replace(/-([a-z])/g,_)]=n}))}catch{}return t}(l)),o.space&&o.property?e[v.call(y.D,o.property)?y.D[o.property]:o.property]=l:o.attribute&&(e[o.attribute]=l))}function _(e,t){return t.toUpperCase()}const C={}.hasOwnProperty,P="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",T={plugins:{to:"remarkPlugins",id:"change-plugins-to-remarkplugins"},renderers:{to:"components",id:"change-renderers-to-components"},astPlugins:{id:"remove-buggy-html-in-markdown-parser"},allowDangerousHtml:{id:"remove-buggy-html-in-markdown-parser"},escapeHtml:{id:"remove-buggy-html-in-markdown-parser"},source:{to:"children",id:"change-source-to-children"},allowNode:{to:"allowElement",id:"replace-allownode-allowedtypes-and-disallowedtypes"},allowedTypes:{to:"allowedElements",id:"replace-allownode-allowedtypes-and-disallowedtypes"},disallowedTypes:{to:"disallowedElements",id:"replace-allownode-allowedtypes-and-disallowedtypes"},includeNodeIndex:{to:"includeElementIndex",id:"change-includenodeindex-to-includeelementindex"}};function R(e){for(const t in T)if(C.call(T,t)&&C.call(e,t)){const e=T[t];console.warn(`[react-markdown] Warning: please ${e.to?`use \`${e.to}\` instead of`:"remove"} \`${t}\` (see <${P}#${e.id}> for more info)`),delete T[t]}const t=(0,l.l)().use(s.Z).use(e.remarkPlugins||[]).use(i.Z,{...e.remarkRehypeOptions,allowDangerousHtml:!0}).use(e.rehypePlugins||[]).use(f,e),n=new o.k;"string"==typeof e.children?n.value=e.children:void 0!==e.children&&null!==e.children&&console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`);const a=t.runSync(t.parse(n),n);if("root"!==a.type)throw new TypeError("Expected a `root` node");let u=r.createElement(r.Fragment,{},$({options:e,schema:c.dy,listDepth:0},a));return e.className&&(u=r.createElement("div",{className:e.className},u)),u}R.propTypes={children:a.string,className:a.string,allowElement:a.func,allowedElements:a.arrayOf(a.string),disallowedElements:a.arrayOf(a.string),unwrapDisallowed:a.bool,remarkPlugins:a.arrayOf(a.oneOfType([a.object,a.func,a.arrayOf(a.oneOfType([a.bool,a.string,a.object,a.func,a.arrayOf(a.any)]))])),rehypePlugins:a.arrayOf(a.oneOfType([a.object,a.func,a.arrayOf(a.oneOfType([a.bool,a.string,a.object,a.func,a.arrayOf(a.any)]))])),sourcePos:a.bool,rawSourcePos:a.bool,skipHtml:a.bool,includeElementIndex:a.bool,transformLinkUri:a.oneOfType([a.func,a.bool]),linkTarget:a.oneOfType([a.func,a.string]),transformImageUri:a.func,components:a.object}}}]);