(self.webpackChunkethan_blog=self.webpackChunkethan_blog||[]).push([[9245],{27797:function(t,n,e){var i;i=function(t){return function(t){var n={};function e(i){if(n[i])return n[i].exports;var o=n[i]={i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=1)}([function(n,e){n.exports=t},function(t,n,e){"use strict";var i=e(0).layoutBase.LayoutConstants,o=e(0).layoutBase.FDLayoutConstants,r=e(0).CoSEConstants,a=e(0).CoSELayout,l=e(0).CoSENode,u=e(0).layoutBase.PointD,s=e(0).layoutBase.DimensionD,d={ready:function(){},stop:function(){},quality:"default",nodeDimensionsIncludeLabels:!1,refresh:30,fit:!0,padding:10,randomize:!0,nodeRepulsion:4500,idealEdgeLength:50,edgeElasticity:.45,nestingFactor:.1,gravity:.25,numIter:2500,tile:!0,animate:"end",animationDuration:500,tilingPaddingVertical:10,tilingPaddingHorizontal:10,gravityRangeCompound:1.5,gravityCompound:1,gravityRange:3.8,initialEnergyOnIncremental:.5};function c(t){this.options=function(t,n){var e={};for(var i in t)e[i]=t[i];for(var i in n)e[i]=n[i];return e}(d,t),f(this.options)}var f=function(t){null!=t.nodeRepulsion&&(r.DEFAULT_REPULSION_STRENGTH=o.DEFAULT_REPULSION_STRENGTH=t.nodeRepulsion),null!=t.idealEdgeLength&&(r.DEFAULT_EDGE_LENGTH=o.DEFAULT_EDGE_LENGTH=t.idealEdgeLength),null!=t.edgeElasticity&&(r.DEFAULT_SPRING_STRENGTH=o.DEFAULT_SPRING_STRENGTH=t.edgeElasticity),null!=t.nestingFactor&&(r.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR=o.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR=t.nestingFactor),null!=t.gravity&&(r.DEFAULT_GRAVITY_STRENGTH=o.DEFAULT_GRAVITY_STRENGTH=t.gravity),null!=t.numIter&&(r.MAX_ITERATIONS=o.MAX_ITERATIONS=t.numIter),null!=t.gravityRange&&(r.DEFAULT_GRAVITY_RANGE_FACTOR=o.DEFAULT_GRAVITY_RANGE_FACTOR=t.gravityRange),null!=t.gravityCompound&&(r.DEFAULT_COMPOUND_GRAVITY_STRENGTH=o.DEFAULT_COMPOUND_GRAVITY_STRENGTH=t.gravityCompound),null!=t.gravityRangeCompound&&(r.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR=o.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR=t.gravityRangeCompound),null!=t.initialEnergyOnIncremental&&(r.DEFAULT_COOLING_FACTOR_INCREMENTAL=o.DEFAULT_COOLING_FACTOR_INCREMENTAL=t.initialEnergyOnIncremental),"draft"==t.quality?i.QUALITY=0:"proof"==t.quality?i.QUALITY=2:i.QUALITY=1,r.NODE_DIMENSIONS_INCLUDE_LABELS=o.NODE_DIMENSIONS_INCLUDE_LABELS=i.NODE_DIMENSIONS_INCLUDE_LABELS=t.nodeDimensionsIncludeLabels,r.DEFAULT_INCREMENTAL=o.DEFAULT_INCREMENTAL=i.DEFAULT_INCREMENTAL=!t.randomize,r.ANIMATE=o.ANIMATE=i.ANIMATE=t.animate,r.TILE=t.tile,r.TILING_PADDING_VERTICAL="function"==typeof t.tilingPaddingVertical?t.tilingPaddingVertical.call():t.tilingPaddingVertical,r.TILING_PADDING_HORIZONTAL="function"==typeof t.tilingPaddingHorizontal?t.tilingPaddingHorizontal.call():t.tilingPaddingHorizontal};c.prototype.run=function(){var t,n,e=this.options,i=(this.idToLNode={},this.layout=new a),o=this;o.stopped=!1,this.cy=this.options.cy,this.cy.trigger({type:"layoutstart",layout:this});var r=i.newGraphManager();this.gm=r;var l=this.options.eles.nodes(),u=this.options.eles.edges();this.root=r.addRoot(),this.processChildrenList(this.root,this.getTopMostNodes(l),i);for(var s=0;s<u.length;s++){var d=u[s],c=this.idToLNode[d.data("source")],f=this.idToLNode[d.data("target")];c!==f&&0==c.getEdgesBetween(f).length&&(r.add(i.newEdge(),c,f).id=d.id())}var p=function(t,n){"number"==typeof t&&(t=n);var e=t.data("id"),i=o.idToLNode[e];return{x:i.getRect().getCenterX(),y:i.getRect().getCenterY()}},g=function r(){for(var a,l=function(){e.fit&&e.cy.fit(e.eles,e.padding),t||(t=!0,o.cy.one("layoutready",e.ready),o.cy.trigger({type:"layoutready",layout:o}))},u=o.options.refresh,s=0;s<u&&!a;s++)a=o.stopped||o.layout.tick();if(a)return i.checkLayoutSuccess()&&!i.isSubLayout&&i.doPostLayout(),i.tilingPostLayout&&i.tilingPostLayout(),i.isLayoutFinished=!0,o.options.eles.nodes().positions(p),l(),o.cy.one("layoutstop",o.options.stop),o.cy.trigger({type:"layoutstop",layout:o}),n&&cancelAnimationFrame(n),void(t=!1);var d=o.layout.getPositionsData();e.eles.nodes().positions((function(t,n){if("number"==typeof t&&(t=n),!t.isParent()){for(var e=t.id(),i=d[e],o=t;null==i&&(i=d[o.data("parent")]||d["DummyCompound_"+o.data("parent")],d[e]=i,null!=(o=o.parent()[0])););return null!=i?{x:i.x,y:i.y}:{x:t.position("x"),y:t.position("y")}}})),l(),n=requestAnimationFrame(r)};return i.addListener("layoutstarted",(function(){"during"===o.options.animate&&(n=requestAnimationFrame(g))})),i.runLayout(),"during"!==this.options.animate&&(o.options.eles.nodes().not(":parent").layoutPositions(o,o.options,p),t=!1),this},c.prototype.getTopMostNodes=function(t){for(var n={},e=0;e<t.length;e++)n[t[e].id()]=!0;var i=t.filter((function(t,e){"number"==typeof t&&(t=e);for(var i=t.parent()[0];null!=i;){if(n[i.id()])return!1;i=i.parent()[0]}return!0}));return i},c.prototype.processChildrenList=function(t,n,e){for(var i=n.length,o=0;o<i;o++){var r,a,d=n[o],c=d.children(),f=d.layoutDimensions({nodeDimensionsIncludeLabels:this.options.nodeDimensionsIncludeLabels});if((r=null!=d.outerWidth()&&null!=d.outerHeight()?t.add(new l(e.graphManager,new u(d.position("x")-f.w/2,d.position("y")-f.h/2),new s(parseFloat(f.w),parseFloat(f.h)))):t.add(new l(this.graphManager))).id=d.data("id"),r.paddingLeft=parseInt(d.css("padding")),r.paddingTop=parseInt(d.css("padding")),r.paddingRight=parseInt(d.css("padding")),r.paddingBottom=parseInt(d.css("padding")),this.options.nodeDimensionsIncludeLabels&&d.isParent()){var p=d.boundingBox({includeLabels:!0,includeNodes:!1}).w,g=d.boundingBox({includeLabels:!0,includeNodes:!1}).h,h=d.css("text-halign");r.labelWidth=p,r.labelHeight=g,r.labelPos=h}this.idToLNode[d.data("id")]=r,isNaN(r.rect.x)&&(r.rect.x=0),isNaN(r.rect.y)&&(r.rect.y=0),null!=c&&c.length>0&&(a=e.getGraphManager().add(e.newGraph(),r),this.processChildrenList(a,c,e))}},c.prototype.stop=function(){return this.stopped=!0,this};var p=function(t){t("layout","cose-bilkent",c)};"undefined"!=typeof cytoscape&&p(cytoscape),t.exports=p}])},t.exports=i(e(33519))},25546:(t,n,e)=>{"use strict";function i(t,n){let e;if(void 0===n)for(const n of t)null!=n&&(e<n||void 0===e&&n>=n)&&(e=n);else{let i=-1;for(let o of t)null!=(o=n(o,++i,t))&&(e<o||void 0===e&&o>=o)&&(e=o)}return e}e.d(n,{Z:()=>i})},34604:(t,n,e)=>{"use strict";function i(t,n){let e;if(void 0===n)for(const n of t)null!=n&&(e>n||void 0===e&&n>=n)&&(e=n);else{let i=-1;for(let o of t)null!=(o=n(o,++i,t))&&(e>o||void 0===e&&o>=o)&&(e=o)}return e}e.d(n,{Z:()=>i})},73408:(t,n,e)=>{"use strict";function i(t,n){let e=0;if(void 0===n)for(let n of t)(n=+n)&&(e+=n);else{let i=-1;for(let o of t)(o=+n(o,++i,t))&&(e+=o)}return e}e.d(n,{Z:()=>i})},64784:(t,n,e)=>{"use strict";function i(t,n){return null==t||null==n?NaN:t<n?-1:t>n?1:t>=n?0:NaN}e.d(n,{Z:()=>i})},48685:(t,n,e)=>{"use strict";e.d(n,{ZP:()=>l});var i=e(64784),o=e(92083);const r=(0,o.Z)(i.Z),a=r.right,l=(r.left,(0,o.Z)((function(t){return null===t?NaN:+t})).center,a)},92083:(t,n,e)=>{"use strict";e.d(n,{Z:()=>r});var i=e(64784);function o(t,n){return null==t||null==n?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function r(t){let n,e,r;function l(t,i,o=0,r=t.length){if(o<r){if(0!==n(i,i))return r;do{const n=o+r>>>1;e(t[n],i)<0?o=n+1:r=n}while(o<r)}return o}return 2!==t.length?(n=i.Z,e=(n,e)=>(0,i.Z)(t(n),e),r=(n,e)=>t(n)-e):(n=t===i.Z||t===o?t:a,e=t,r=t),{left:l,center:function(t,n,e=0,i=t.length){const o=l(t,n,e,i-1);return o>e&&r(t[o-1],n)>-r(t[o],n)?o-1:o},right:function(t,i,o=0,r=t.length){if(o<r){if(0!==n(i,i))return r;do{const n=o+r>>>1;e(t[n],i)<=0?o=n+1:r=n}while(o<r)}return o}}}function a(){return 0}},29669:(t,n,e)=>{"use strict";function i(t,n){let e;if(void 0===n)for(const n of t)null!=n&&(e<n||void 0===e&&n>=n)&&(e=n);else{let i=-1;for(let o of t)null!=(o=n(o,++i,t))&&(e<o||void 0===e&&o>=o)&&(e=o)}return e}function o(t,n){let e;if(void 0===n)for(const n of t)null!=n&&(e>n||void 0===e&&n>=n)&&(e=n);else{let i=-1;for(let o of t)null!=(o=n(o,++i,t))&&(e>o||void 0===e&&o>=o)&&(e=o)}return e}e.d(n,{Fp:()=>i,VV:()=>o})},77252:(t,n,e)=>{"use strict";e.d(n,{G9:()=>u,ZP:()=>l,ly:()=>s});const i=Math.sqrt(50),o=Math.sqrt(10),r=Math.sqrt(2);function a(t,n,e){const l=(n-t)/Math.max(0,e),u=Math.floor(Math.log10(l)),s=l/Math.pow(10,u),d=s>=i?10:s>=o?5:s>=r?2:1;let c,f,p;return u<0?(p=Math.pow(10,-u)/d,c=Math.round(t*p),f=Math.round(n*p),c/p<t&&++c,f/p>n&&--f,p=-p):(p=Math.pow(10,u)*d,c=Math.round(t/p),f=Math.round(n/p),c*p<t&&++c,f*p>n&&--f),f<c&&.5<=e&&e<2?a(t,n,2*e):[c,f,p]}function l(t,n,e){if(!((e=+e)>0))return[];if((t=+t)==(n=+n))return[t];const i=n<t,[o,r,l]=i?a(n,t,e):a(t,n,e);if(!(r>=o))return[];const u=r-o+1,s=new Array(u);if(i)if(l<0)for(let t=0;t<u;++t)s[t]=(r-t)/-l;else for(let t=0;t<u;++t)s[t]=(r-t)*l;else if(l<0)for(let t=0;t<u;++t)s[t]=(o+t)/-l;else for(let t=0;t<u;++t)s[t]=(o+t)*l;return s}function u(t,n,e){return a(t=+t,n=+n,e=+e)[2]}function s(t,n,e){e=+e;const i=(n=+n)<(t=+t),o=i?u(n,t,e):u(t,n,e);return(i?-1:1)*(o<0?1/-o:o)}},79418:(t,n,e)=>{"use strict";function i(t){return t}e.d(n,{LL:()=>y,F5:()=>h});var o=1,r=2,a=3,l=4,u=1e-6;function s(t){return"translate("+t+",0)"}function d(t){return"translate(0,"+t+")"}function c(t){return n=>+t(n)}function f(t,n){return n=Math.max(0,t.bandwidth()-2*n)/2,t.round()&&(n=Math.round(n)),e=>+t(e)+n}function p(){return!this.__axis}function g(t,n){var e=[],g=null,h=null,y=6,E=6,L=3,N="undefined"!=typeof window&&window.devicePixelRatio>1?0:.5,T=t===o||t===l?-1:1,_=t===l||t===r?"x":"y",A=t===o||t===a?s:d;function m(s){var d=null==g?n.ticks?n.ticks.apply(n,e):n.domain():g,m=null==h?n.tickFormat?n.tickFormat.apply(n,e):i:h,I=Math.max(y,0)+L,v=n.range(),R=+v[0]+N,D=+v[v.length-1]+N,C=(n.bandwidth?f:c)(n.copy(),N),F=s.selection?s.selection():s,M=F.selectAll(".domain").data([null]),G=F.selectAll(".tick").data(d,n).order(),O=G.exit(),P=G.enter().append("g").attr("class","tick"),x=G.select("line"),S=G.select("text");M=M.merge(M.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),G=G.merge(P),x=x.merge(P.append("line").attr("stroke","currentColor").attr(_+"2",T*y)),S=S.merge(P.append("text").attr("fill","currentColor").attr(_,T*I).attr("dy",t===o?"0em":t===a?"0.71em":"0.32em")),s!==F&&(M=M.transition(s),G=G.transition(s),x=x.transition(s),S=S.transition(s),O=O.transition(s).attr("opacity",u).attr("transform",(function(t){return isFinite(t=C(t))?A(t+N):this.getAttribute("transform")})),P.attr("opacity",u).attr("transform",(function(t){var n=this.parentNode.__axis;return A((n&&isFinite(n=n(t))?n:C(t))+N)}))),O.remove(),M.attr("d",t===l||t===r?E?"M"+T*E+","+R+"H"+N+"V"+D+"H"+T*E:"M"+N+","+R+"V"+D:E?"M"+R+","+T*E+"V"+N+"H"+D+"V"+T*E:"M"+R+","+N+"H"+D),G.attr("opacity",1).attr("transform",(function(t){return A(C(t)+N)})),x.attr(_+"2",T*y),S.attr(_,T*I).text(m),F.filter(p).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===r?"start":t===l?"end":"middle"),F.each((function(){this.__axis=C}))}return m.scale=function(t){return arguments.length?(n=t,m):n},m.ticks=function(){return e=Array.from(arguments),m},m.tickArguments=function(t){return arguments.length?(e=null==t?[]:Array.from(t),m):e.slice()},m.tickValues=function(t){return arguments.length?(g=null==t?null:Array.from(t),m):g&&g.slice()},m.tickFormat=function(t){return arguments.length?(h=t,m):h},m.tickSize=function(t){return arguments.length?(y=E=+t,m):y},m.tickSizeInner=function(t){return arguments.length?(y=+t,m):y},m.tickSizeOuter=function(t){return arguments.length?(E=+t,m):E},m.tickPadding=function(t){return arguments.length?(L=+t,m):L},m.offset=function(t){return arguments.length?(N=+t,m):N},m}function h(t){return g(o,t)}function y(t){return g(a,t)}}}]);