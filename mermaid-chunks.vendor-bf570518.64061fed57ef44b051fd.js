/*! For license information please see mermaid-chunks.vendor-bf570518.64061fed57ef44b051fd.js.LICENSE.txt */
"use strict";(self.webpackChunkethan_blog=self.webpackChunkethan_blog||[]).push([[90],{97905:(e,t,r)=>{r.d(t,{cP:()=>i,rU:()=>d});var n=r(50959),o=r(76057),a=r(92999);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}const l=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function i(e,t){return(0,a.p7)({basename:null==t?void 0:t.basename,future:null==t?void 0:t.future,history:(0,a.q_)({window:null==t?void 0:t.window}),hydrationData:(null==t?void 0:t.hydrationData)||s(),routes:e,detectErrorBoundary:o.b6}).initialize()}function s(){var e;let t=null==(e=window)?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=u({},t,{errors:c(t.errors)})),t}function c(e){if(!e)return null;let t=Object.entries(e),r={};for(let[e,n]of t)if(n&&"RouteErrorResponse"===n.__type)r[e]=new a.iQ(n.status,n.statusText,n.data,!0===n.internal);else if(n&&"Error"===n.__type){let t=new Error(n.message);t.stack="",r[e]=t}else r[e]=n;return r}const f="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,p=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,d=n.forwardRef((function(e,t){let r,{onClick:i,relative:s,reloadDocument:c,replace:d,state:h,target:m,to:y,preventScrollReset:v}=e,b=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,l),{basename:g}=n.useContext(o.Us),E=!1;if("string"==typeof y&&p.test(y)&&(r=y,f)){let e=new URL(window.location.href),t=y.startsWith("//")?new URL(e.protocol+y):new URL(y),r=(0,a.Zn)(t.pathname,g);t.origin===e.origin&&null!=r?y=r+t.search+t.hash:E=!0}let _=(0,o.oQ)(y,{relative:s}),C=function(e,t){let{target:r,replace:u,state:l,preventScrollReset:i,relative:s}=void 0===t?{}:t,c=(0,o.s0)(),f=(0,o.TH)(),p=(0,o.WU)(e,{relative:s});return n.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,r)){t.preventDefault();let r=void 0!==u?u:(0,a.Ep)(f)===(0,a.Ep)(p);c(e,{replace:r,state:l,preventScrollReset:i,relative:s})}}),[f,c,p,u,l,r,e,i,s])}(y,{replace:d,state:h,target:m,preventScrollReset:v,relative:s});return n.createElement("a",u({},b,{href:r||_,onClick:E||c?i:function(e){i&&i(e),e.defaultPrevented||C(e)},ref:t,target:m}))}));var h,m;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(h||(h={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(m||(m={}))},76057:(e,t,r)=>{var n;r.d(t,{AW:()=>U,TH:()=>E,UO:()=>C,Us:()=>d,WU:()=>R,b6:()=>J,i7:()=>L,oQ:()=>b,pG:()=>j,s0:()=>_});var o=r(92999),a=r(50959);"function"==typeof Object.is&&Object.is;const{useState:u,useEffect:l,useLayoutEffect:i,useDebugValue:s}=n||(n=r.t(a,2));"undefined"==typeof window||void 0===window.document||window.document.createElement;const c=(n||(n=r.t(a,2))).useSyncExternalStore,f=a.createContext(null),p=a.createContext(null),d=a.createContext(null),h=a.createContext(null),m=a.createContext({outlet:null,matches:[]}),y=a.createContext(null);function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},v.apply(this,arguments)}function b(e,t){let{relative:r}=void 0===t?{}:t;g()||(0,o.J0)(!1);let{basename:n,navigator:u}=a.useContext(d),{hash:l,pathname:i,search:s}=R(e,{relative:r}),c=i;return"/"!==n&&(c="/"===i?n:(0,o.RQ)([n,i])),u.createHref({pathname:c,search:s,hash:l})}function g(){return null!=a.useContext(h)}function E(){return g()||(0,o.J0)(!1),a.useContext(h).location}function _(){g()||(0,o.J0)(!1);let{basename:e,navigator:t}=a.useContext(d),{matches:r}=a.useContext(m),{pathname:n}=E(),u=JSON.stringify((0,o.Zq)(r).map((e=>e.pathnameBase))),l=a.useRef(!1);return a.useEffect((()=>{l.current=!0})),a.useCallback((function(r,a){if(void 0===a&&(a={}),!l.current)return;if("number"==typeof r)return void t.go(r);let i=(0,o.pC)(r,JSON.parse(u),n,"path"===a.relative);"/"!==e&&(i.pathname="/"===i.pathname?e:(0,o.RQ)([e,i.pathname])),(a.replace?t.replace:t.push)(i,a.state,a)}),[e,t,u,n])}function C(){let{matches:e}=a.useContext(m),t=e[e.length-1];return t?t.params:{}}function R(e,t){let{relative:r}=void 0===t?{}:t,{matches:n}=a.useContext(m),{pathname:u}=E(),l=JSON.stringify((0,o.Zq)(n).map((e=>e.pathnameBase)));return a.useMemo((()=>(0,o.pC)(e,JSON.parse(l),u,"path"===r)),[e,l,u,r])}function S(){let e=function(){var e;let t=a.useContext(y),r=function(e){let t=a.useContext(p);return t||(0,o.J0)(!1),t}(O.UseRouteError),n=function(e){let t=function(e){let t=a.useContext(m);return t||(0,o.J0)(!1),t}(),r=t.matches[t.matches.length-1];return r.route.id||(0,o.J0)(!1),r.route.id}(O.UseRouteError);return t||(null==(e=r.errors)?void 0:e[n])}(),t=(0,o.WK)(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return a.createElement(a.Fragment,null,a.createElement("h2",null,"Unexpected Application Error!"),a.createElement("h3",{style:{fontStyle:"italic"}},t),r?a.createElement("pre",{style:n},r):null,null)}class w extends a.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location?{error:e.error,location:e.location}:{error:e.error||t.error,location:t.location}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?a.createElement(m.Provider,{value:this.props.routeContext},a.createElement(y.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function x(e){let{routeContext:t,match:r,children:n}=e,o=a.useContext(f);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),a.createElement(m.Provider,{value:t},n)}var k,O,P;function j(e){let{fallbackElement:t,router:r}=e,n=a.useCallback((()=>r.state),[r]),o=c(r.subscribe,n,n),u=a.useMemo((()=>({createHref:r.createHref,encodeLocation:r.encodeLocation,go:e=>r.navigate(e),push:(e,t,n)=>r.navigate(e,{state:t,preventScrollReset:null==n?void 0:n.preventScrollReset}),replace:(e,t,n)=>r.navigate(e,{replace:!0,state:t,preventScrollReset:null==n?void 0:n.preventScrollReset})})),[r]),l=r.basename||"/",i=a.useMemo((()=>({router:r,navigator:u,static:!1,basename:l})),[r,u,l]);return a.createElement(a.Fragment,null,a.createElement(f.Provider,{value:i},a.createElement(p.Provider,{value:o},a.createElement(B,{basename:r.basename,location:r.state.location,navigationType:r.state.historyAction,navigator:u},r.state.initialized?a.createElement(D,null):t))),null)}function U(e){(0,o.J0)(!1)}function B(e){let{basename:t="/",children:r=null,location:n,navigationType:u=o.aU.Pop,navigator:l,static:i=!1}=e;g()&&(0,o.J0)(!1);let s=t.replace(/^\/*/,"/"),c=a.useMemo((()=>({basename:s,navigator:l,static:i})),[s,l,i]);"string"==typeof n&&(n=(0,o.cP)(n));let{pathname:f="/",search:p="",hash:m="",state:y=null,key:v="default"}=n,b=a.useMemo((()=>{let e=(0,o.Zn)(f,s);return null==e?null:{location:{pathname:e,search:p,hash:m,state:y,key:v},navigationType:u}}),[s,f,p,m,y,v,u]);return null==b?null:a.createElement(d.Provider,{value:c},a.createElement(h.Provider,{children:r,value:b}))}function D(e){let{children:t,location:r}=e,n=a.useContext(f);return function(e,t){g()||(0,o.J0)(!1);let{navigator:r}=a.useContext(d),n=a.useContext(p),{matches:u}=a.useContext(m),l=u[u.length-1],i=l?l.params:{},s=(l&&l.pathname,l?l.pathnameBase:"/");l&&l.route;let c,f=E();if(t){var y;let e="string"==typeof t?(0,o.cP)(t):t;"/"===s||(null==(y=e.pathname)?void 0:y.startsWith(s))||(0,o.J0)(!1),c=e}else c=f;let b=c.pathname||"/",_="/"===s?b:b.slice(s.length)||"/",C=(0,o.fp)(e,{pathname:_}),R=function(e,t,r){if(void 0===t&&(t=[]),null==e){if(null==r||!r.errors)return null;e=r.matches}let n=e,u=null==r?void 0:r.errors;if(null!=u){let e=n.findIndex((e=>e.route.id&&(null==u?void 0:u[e.route.id])));e>=0||(0,o.J0)(!1),n=n.slice(0,Math.min(n.length,e+1))}return n.reduceRight(((e,o,l)=>{let i=o.route.id?null==u?void 0:u[o.route.id]:null,s=null;r&&(s=o.route.ErrorBoundary?a.createElement(o.route.ErrorBoundary,null):o.route.errorElement?o.route.errorElement:a.createElement(S,null));let c=t.concat(n.slice(0,l+1)),f=()=>{let t=e;return i?t=s:o.route.Component?t=a.createElement(o.route.Component,null):o.route.element&&(t=o.route.element),a.createElement(x,{match:o,routeContext:{outlet:e,matches:c},children:t})};return r&&(o.route.ErrorBoundary||o.route.errorElement||0===l)?a.createElement(w,{location:r.location,component:s,error:i,children:f(),routeContext:{outlet:null,matches:c}}):f()}),null)}(C&&C.map((e=>Object.assign({},e,{params:Object.assign({},i,e.params),pathname:(0,o.RQ)([s,r.encodeLocation?r.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?s:(0,o.RQ)([s,r.encodeLocation?r.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),u,n||void 0);return t&&R?a.createElement(h.Provider,{value:{location:v({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:o.aU.Pop}},R):R}(n&&!t?n.router.routes:L(t),r)}!function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"}(k||(k={})),function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"}(O||(O={})),function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"}(P||(P={})),new Promise((()=>{}));class $ extends a.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){console.error("<Await> caught the following error during render",e,t)}render(){let{children:e,errorElement:t,resolve:r}=this.props,n=null,o=P.pending;if(r instanceof Promise)if(this.state.error){P.error;let e=this.state.error;Promise.reject().catch((()=>{})),Object.defineProperty(n,"_tracked",{get:()=>!0}),Object.defineProperty(n,"_error",{get:()=>e})}else r._tracked?void 0!==n._error?P.error:void 0!==n._data?P.success:P.pending:(P.pending,Object.defineProperty(r,"_tracked",{get:()=>!0}),r.then((e=>Object.defineProperty(r,"_data",{get:()=>e})),(e=>Object.defineProperty(r,"_error",{get:()=>e}))));else P.success,Promise.resolve(),Object.defineProperty(n,"_tracked",{get:()=>!0}),Object.defineProperty(n,"_data",{get:()=>r});if(o===P.error&&n._error instanceof AbortedDeferredError)throw neverSettledPromise;if(o===P.error&&!t)throw n._error;if(o===P.error)return React.createElement(AwaitContext.Provider,{value:n,children:t});if(o===P.success)return React.createElement(AwaitContext.Provider,{value:n,children:e});throw n}}function L(e,t){void 0===t&&(t=[]);let r=[];return a.Children.forEach(e,((e,n)=>{if(!a.isValidElement(e))return;let u=[...t,n];if(e.type===a.Fragment)return void r.push.apply(r,L(e.props.children,u));e.type!==U&&(0,o.J0)(!1),e.props.index&&e.props.children&&(0,o.J0)(!1);let l={id:e.props.id||u.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(l.children=L(e.props.children,u)),r.push(l)})),r}function J(e){return Boolean(e.ErrorBoundary)||Boolean(e.errorElement)}},3354:(e,t,r)=>{var n=r(50959),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,a={},s=null,c=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(c=t.ref),t)u.call(t,n)&&!i.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:s,ref:c,props:a,_owner:l.current}}t.Fragment=a,t.jsx=s,t.jsxs=s},95257:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),i=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator,h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,y={};function v(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||h}function b(){}function g(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var E=g.prototype=new b;E.constructor=g,m(E,v.prototype),E.isPureReactComponent=!0;var _=Array.isArray,C=Object.prototype.hasOwnProperty,R={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var o,a={},u=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(u=""+t.key),t)C.call(t,o)&&!S.hasOwnProperty(o)&&(a[o]=t[o]);var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){for(var s=Array(i),c=0;c<i;c++)s[c]=arguments[c+2];a.children=s}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===a[o]&&(a[o]=i[o]);return{$$typeof:r,type:e,key:u,ref:l,props:a,_owner:R.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var k=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,o,a,u){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var i=!1;if(null===e)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case r:case n:i=!0}}if(i)return u=u(i=e),e=""===a?"."+O(i,0):a,_(u)?(o="",null!=e&&(o=e.replace(k,"$&/")+"/"),P(u,t,o,"",(function(e){return e}))):null!=u&&(x(u)&&(u=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||i&&i.key===u.key?"":(""+u.key).replace(k,"$&/")+"/")+e)),t.push(u)),1;if(i=0,a=""===a?".":a+":",_(e))for(var s=0;s<e.length;s++){var c=a+O(l=e[s],s);i+=P(l,t,o,c,u)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),s=0;!(l=e.next()).done;)i+=P(l=l.value,t,o,c=a+O(l,s++),u);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function j(e,t,r){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function U(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var B={current:null},D={transition:null},$={ReactCurrentDispatcher:B,ReactCurrentBatchConfig:D,ReactCurrentOwner:R};t.Children={map:j,forEach:function(e,t,r){j(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return j(e,(function(){t++})),t},toArray:function(e){return j(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=u,t.PureComponent=g,t.StrictMode=a,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),a=e.key,u=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,l=R.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in t)C.call(t,s)&&!S.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==i?i[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){i=Array(s);for(var c=0;c<s;c++)i[c]=arguments[c+2];o.children=i}return{$$typeof:r,type:e.type,key:a,ref:u,props:o,_owner:l}},t.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:U}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=D.transition;D.transition={};try{e()}finally{D.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return B.current.useCallback(e,t)},t.useContext=function(e){return B.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return B.current.useDeferredValue(e)},t.useEffect=function(e,t){return B.current.useEffect(e,t)},t.useId=function(){return B.current.useId()},t.useImperativeHandle=function(e,t,r){return B.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return B.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return B.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return B.current.useMemo(e,t)},t.useReducer=function(e,t,r){return B.current.useReducer(e,t,r)},t.useRef=function(e){return B.current.useRef(e)},t.useState=function(e){return B.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return B.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return B.current.useTransition()},t.version="18.2.0"},50959:(e,t,r)=>{e.exports=r(95257)},11527:(e,t,r)=>{e.exports=r(3354)}}]);