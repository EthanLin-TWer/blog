(self.webpackChunkethan_blog=self.webpackChunkethan_blog||[]).push([[8891],{86088:(t,e,r)=>{var n;!function(){"use strict";var i=function t(e){var r,n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element"),i=60103,o={use_static:!1};function s(t){var e=Object.getPrototypeOf(t);return e?Object.create(e):{}}function a(t,e,r){Object.defineProperty(t,e,{enumerable:!1,configurable:!1,writable:!1,value:r})}function u(t,e){a(t,e,(function(){throw new b("The "+e+" method cannot be invoked on an Immutable data structure.")}))}"object"!=typeof(r=e)||Array.isArray(r)||null===r||void 0!==e.use_static&&(o.use_static=Boolean(e.use_static));var c="__immutable_invariants_hold";function f(t){return"object"!=typeof t||null===t||Boolean(Object.getOwnPropertyDescriptor(t,c))}function l(t,e){return t===e||t!=t&&e!=e}function h(t){return!(null===t||"object"!=typeof t||Array.isArray(t)||t instanceof Date)}var p=["setPrototypeOf"],y=p.concat(["push","pop","sort","splice","shift","unshift","reverse"]),v=["keys"].concat(["map","filter","slice","concat","reduce","reduceRight"]),d=p.concat(["setDate","setFullYear","setHours","setMilliseconds","setMinutes","setMonth","setSeconds","setTime","setUTCDate","setUTCFullYear","setUTCHours","setUTCMilliseconds","setUTCMinutes","setUTCMonth","setUTCSeconds","setYear"]);function b(t){this.name="MyError",this.message=t,this.stack=(new Error).stack}function m(t,e){for(var r in a(t,c,!0),e)e.hasOwnProperty(r)&&u(t,e[r]);return Object.freeze(t),t}function g(t,e){var r=t[e];a(t,e,(function(){return G(r.apply(t,arguments))}))}function w(t,e,r){var n=r&&r.deep;if(t in this&&(n&&this[t]!==e&&h(e)&&h(this[t])&&(e=G.merge(this[t],e,{deep:!0,mode:"replace"})),l(this[t],e)))return this;var i=_.call(this);return i[t]=G(e),A(i)}b.prototype=new Error,b.prototype.constructor=Error;var O=G([]);function j(t,e,r){var n=t[0];if(1===t.length)return w.call(this,n,e,r);var i,o=t.slice(1),s=this[n];if("object"==typeof s&&null!==s)i=G.setIn(s,o,e);else{var a=o[0];i=""!==a&&isFinite(a)?j.call(O,o,e):$.call(B,o,e)}if(n in this&&s===i)return this;var u=_.call(this);return u[n]=i,A(u)}function A(t){for(var e in v)v.hasOwnProperty(e)&&g(t,v[e]);o.use_static||(a(t,"flatMap",P),a(t,"asObject",D),a(t,"asMutable",_),a(t,"set",w),a(t,"setIn",j),a(t,"update",Y),a(t,"updateIn",z),a(t,"getIn",J));for(var r=0,n=t.length;r<n;r++)t[r]=G(t[r]);return m(t,y)}function I(){return new Date(this.getTime())}function P(t){if(0===arguments.length)return this;var e,r=[],n=this.length;for(e=0;e<n;e++){var i=t(this[e],e,this);Array.isArray(i)?r.push.apply(r,i):r.push(i)}return A(r)}function T(t){if(void 0===t&&0===arguments.length)return this;if("function"!=typeof t){var e=Array.isArray(t)?t.slice():Array.prototype.slice.call(arguments);e.forEach((function(t,e,r){"number"==typeof t&&(r[e]=t.toString())})),t=function(t,r){return-1!==e.indexOf(r)}}var r=s(this);for(var n in this)this.hasOwnProperty(n)&&!1===t(this[n],n)&&(r[n]=this[n]);return q(r)}function _(t){var e,r,n=[];if(t&&t.deep)for(e=0,r=this.length;e<r;e++)n.push(M(this[e]));else for(e=0,r=this.length;e<r;e++)n.push(this[e]);return n}function D(t){"function"!=typeof t&&(t=function(t){return t});var e,r={},n=this.length;for(e=0;e<n;e++){var i=t(this[e],e,this),o=i[0],s=i[1];r[o]=s}return q(r)}function M(t){return!t||"object"!=typeof t||!Object.getOwnPropertyDescriptor(t,c)||t instanceof Date?t:G.asMutable(t,{deep:!0})}function k(t,e){for(var r in t)Object.getOwnPropertyDescriptor(t,r)&&(e[r]=t[r]);return e}function E(t,e){if(0===arguments.length)return this;if(null===t||"object"!=typeof t)throw new TypeError("Immutable#merge can only be invoked with objects or arrays, not "+JSON.stringify(t));var r,n,i=Array.isArray(t),o=e&&e.deep,a=e&&e.mode||"merge",u=e&&e.merger;function c(t,n,i){var a,c=G(n[i]),f=u&&u(t[i],c,e),p=t[i];void 0===r&&void 0===f&&t.hasOwnProperty(i)&&l(c,p)||l(p,a=void 0!==f?f:o&&h(p)&&h(c)?G.merge(p,c,e):c)&&t.hasOwnProperty(i)||(void 0===r&&(r=k(t,s(t))),r[i]=a)}if(i)for(var f=0,p=t.length;f<p;f++){var y=t[f];for(n in y)y.hasOwnProperty(n)&&c(void 0!==r?r:this,y,n)}else{for(n in t)Object.getOwnPropertyDescriptor(t,n)&&c(this,t,n);"replace"===a&&function(t,e){for(var n in t)e.hasOwnProperty(n)||(void 0===r&&(r=k(t,s(t))),delete r[n])}(this,t)}return void 0===r?this:q(r)}function C(t,e){var r=e&&e.deep;if(0===arguments.length)return this;if(null===t||"object"!=typeof t)throw new TypeError("Immutable#replace can only be invoked with objects or arrays, not "+JSON.stringify(t));return G.merge(this,t,{deep:r,mode:"replace"})}var S,U,F,B=G({});function $(t,e,r){if(!Array.isArray(t)||0===t.length)throw new TypeError('The first argument to Immutable#setIn must be an array containing at least one "key" string.');var n=t[0];if(1===t.length)return H.call(this,n,e,r);var i,o=t.slice(1),a=this[n];if(i=this.hasOwnProperty(n)&&"object"==typeof a&&null!==a?G.setIn(a,o,e):$.call(B,o,e),this.hasOwnProperty(n)&&a===i)return this;var u=k(this,s(this));return u[n]=i,q(u)}function H(t,e,r){var n=r&&r.deep;if(this.hasOwnProperty(t)&&(n&&this[t]!==e&&h(e)&&h(this[t])&&(e=G.merge(this[t],e,{deep:!0,mode:"replace"})),l(this[t],e)))return this;var i=k(this,s(this));return i[t]=G(e),q(i)}function Y(t,e){var r=Array.prototype.slice.call(arguments,2),n=this[t];return G.set(this,t,e.apply(n,[n].concat(r)))}function x(t,e){for(var r=0,n=e.length;null!=t&&r<n;r++)t=t[e[r]];return r&&r==n?t:void 0}function z(t,e){var r=Array.prototype.slice.call(arguments,2),n=x(this,t);return G.setIn(this,t,e.apply(n,[n].concat(r)))}function J(t,e){var r=x(this,t);return void 0===r?e:r}function N(t){var e,r=s(this);if(t&&t.deep)for(e in this)this.hasOwnProperty(e)&&(r[e]=M(this[e]));else for(e in this)this.hasOwnProperty(e)&&(r[e]=this[e]);return r}function R(){return{}}function q(t){return o.use_static||(a(t,"merge",E),a(t,"replace",C),a(t,"without",T),a(t,"asMutable",N),a(t,"set",H),a(t,"setIn",$),a(t,"update",Y),a(t,"updateIn",z),a(t,"getIn",J)),m(t,p)}function G(t,e,r){if(f(t)||function(t){return"object"==typeof t&&null!==t&&(t.$$typeof===i||t.$$typeof===n)}(t)||function(t){return"undefined"!=typeof File&&t instanceof File}(t)||function(t){return"undefined"!=typeof Blob&&t instanceof Blob}(t)||function(t){return t instanceof Error}(t))return t;if(function(t){return"object"==typeof t&&"function"==typeof t.then}(t))return t.then(G);if(Array.isArray(t))return A(t.slice());if(t instanceof Date)return s=new Date(t.getTime()),o.use_static||a(s,"asMutable",I),m(s,d);var s,u=e&&e.prototype,c=(u&&u!==Object.prototype?function(){return Object.create(u)}:R)();if(null==r&&(r=64),r<=0)throw new b("Attempt to construct Immutable from a deeply nested object was detected. Have you tried to wrap an object with circular references (e.g. React element)? See https://github.com/rtfeldman/seamless-immutable/wiki/Deeply-nested-object-was-detected for details.");for(var l in r-=1,t)Object.getOwnPropertyDescriptor(t,l)&&(c[l]=G(t[l],void 0,r));return q(c)}function K(t){return function(){var e=[].slice.call(arguments),r=e.shift();return t.apply(r,e)}}function L(t,e){return function(){var r=[].slice.call(arguments),n=r.shift();return Array.isArray(n)?e.apply(n,r):t.apply(n,r)}}return G.from=G,G.isImmutable=f,G.ImmutableError=b,G.merge=K(E),G.replace=K(C),G.without=K(T),G.asMutable=(S=N,U=_,F=I,function(){var t=[].slice.call(arguments),e=t.shift();return Array.isArray(e)?U.apply(e,t):e instanceof Date?F.apply(e,t):S.apply(e,t)}),G.set=L(H,w),G.setIn=L($,j),G.update=K(Y),G.updateIn=K(z),G.getIn=K(J),G.flatMap=K(P),G.asObject=K(D),o.use_static||(G.static=t({use_static:!0})),Object.freeze(G),G}();void 0===(n=function(){return i}.call(e,r,e,t))||(t.exports=n)}()}}]);