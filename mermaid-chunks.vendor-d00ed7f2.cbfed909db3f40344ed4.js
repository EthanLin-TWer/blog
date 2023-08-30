"use strict";(self.webpackChunkethan_blog=self.webpackChunkethan_blog||[]).push([[9327],{440:(t,e,a)=>{a.r(e),a.d(e,{diagram:()=>f});var i=a(80641),s=a(27435),n=a(54746),r=a(42521),d=a(89252);a(67006),a(91088),a(65165);const o={},c=(t,e,a)=>{const i=(0,d.c)().state.padding,s=2*(0,d.c)().state.padding,n=t.node().getBBox(),r=n.width,o=n.x,c=t.append("text").attr("x",0).attr("y",(0,d.c)().state.titleShift).attr("font-size",(0,d.c)().state.fontSize).attr("class","state-title").text(e.id),l=c.node().getBBox().width+s;let g,p=Math.max(l,r);p===r&&(p+=s);const h=t.node().getBBox();e.doc,g=o-i,l>r&&(g=(r-p)/2+i),Math.abs(o-h.x)<i&&l>r&&(g=o-(l-r)/2);const x=1-(0,d.c)().state.textHeight;return t.insert("rect",":first-child").attr("x",g).attr("y",x).attr("class",a?"alt-composit":"composit").attr("width",p).attr("height",h.height+(0,d.c)().state.textHeight+(0,d.c)().state.titleShift+1).attr("rx","0"),c.attr("x",g+i),l<=r&&c.attr("x",o+(p-s)/2-l/2+i),t.insert("rect",":first-child").attr("x",g).attr("y",(0,d.c)().state.titleShift-(0,d.c)().state.textHeight-(0,d.c)().state.padding).attr("width",p).attr("height",3*(0,d.c)().state.textHeight).attr("rx",(0,d.c)().state.radius),t.insert("rect",":first-child").attr("x",g).attr("y",(0,d.c)().state.titleShift-(0,d.c)().state.textHeight-(0,d.c)().state.padding).attr("width",p).attr("height",h.height+3+2*(0,d.c)().state.textHeight).attr("rx",(0,d.c)().state.radius),t},l=function(t,e){const a=e.id,i={id:a,label:e.id,width:0,height:0},s=t.append("g").attr("id",a).attr("class","stateGroup");"start"===e.type&&(t=>{t.append("circle").attr("class","start-state").attr("r",(0,d.c)().state.sizeUnit).attr("cx",(0,d.c)().state.padding+(0,d.c)().state.sizeUnit).attr("cy",(0,d.c)().state.padding+(0,d.c)().state.sizeUnit)})(s),"end"===e.type&&(t=>{t.append("circle").attr("class","end-state-outer").attr("r",(0,d.c)().state.sizeUnit+(0,d.c)().state.miniPadding).attr("cx",(0,d.c)().state.padding+(0,d.c)().state.sizeUnit+(0,d.c)().state.miniPadding).attr("cy",(0,d.c)().state.padding+(0,d.c)().state.sizeUnit+(0,d.c)().state.miniPadding),t.append("circle").attr("class","end-state-inner").attr("r",(0,d.c)().state.sizeUnit).attr("cx",(0,d.c)().state.padding+(0,d.c)().state.sizeUnit+2).attr("cy",(0,d.c)().state.padding+(0,d.c)().state.sizeUnit+2)})(s),"fork"!==e.type&&"join"!==e.type||((t,e)=>{let a=(0,d.c)().state.forkWidth,i=(0,d.c)().state.forkHeight;if(e.parentId){let t=a;a=i,i=t}t.append("rect").style("stroke","black").style("fill","black").attr("width",a).attr("height",i).attr("x",(0,d.c)().state.padding).attr("y",(0,d.c)().state.padding)})(s,e),"note"===e.type&&((t,e)=>{e.attr("class","state-note");const a=e.append("rect").attr("x",0).attr("y",(0,d.c)().state.padding),i=e.append("g"),{textWidth:s,textHeight:n}=((t,e,a,i)=>{let s=0;const n=i.append("text");n.style("text-anchor","start"),n.attr("class","noteText");let r=t.replace(/\r\n/g,"<br/>");r=r.replace(/\n/g,"<br/>");const o=r.split(d.e.lineBreakRegex);let c=1.25*(0,d.c)().state.noteMargin;for(const t of o){const e=t.trim();if(e.length>0){const t=n.append("tspan");t.text(e),0===c&&(c+=t.node().getBBox().height),s+=c,t.attr("x",0+(0,d.c)().state.noteMargin),t.attr("y",0+s+1.25*(0,d.c)().state.noteMargin)}}return{textWidth:n.node().getBBox().width,textHeight:s}})(t,0,0,i);a.attr("height",n+2*(0,d.c)().state.noteMargin),a.attr("width",s+2*(0,d.c)().state.noteMargin)})(e.note.text,s),"divider"===e.type&&(t=>{t.append("line").style("stroke","grey").style("stroke-dasharray","3").attr("x1",(0,d.c)().state.textHeight).attr("class","divider").attr("x2",2*(0,d.c)().state.textHeight).attr("y1",0).attr("y2",0)})(s),"default"===e.type&&0===e.descriptions.length&&((t,e)=>{const a=t.append("text").attr("x",2*(0,d.c)().state.padding).attr("y",(0,d.c)().state.textHeight+2*(0,d.c)().state.padding).attr("font-size",(0,d.c)().state.fontSize).attr("class","state-title").text(e.id).node().getBBox();t.insert("rect",":first-child").attr("x",(0,d.c)().state.padding).attr("y",(0,d.c)().state.padding).attr("width",a.width+2*(0,d.c)().state.padding).attr("height",a.height+2*(0,d.c)().state.padding).attr("rx",(0,d.c)().state.radius)})(s,e),"default"===e.type&&e.descriptions.length>0&&((t,e)=>{const a=t.append("text").attr("x",2*(0,d.c)().state.padding).attr("y",(0,d.c)().state.textHeight+1.3*(0,d.c)().state.padding).attr("font-size",(0,d.c)().state.fontSize).attr("class","state-title").text(e.descriptions[0]).node().getBBox(),i=a.height,s=t.append("text").attr("x",(0,d.c)().state.padding).attr("y",i+.4*(0,d.c)().state.padding+(0,d.c)().state.dividerMargin+(0,d.c)().state.textHeight).attr("class","state-description");let n=!0,r=!0;e.descriptions.forEach((function(t){n||(function(t,e,a){const i=t.append("tspan").attr("x",2*(0,d.c)().state.padding).text(e);a||i.attr("dy",(0,d.c)().state.textHeight)}(s,t,r),r=!1),n=!1}));const o=t.append("line").attr("x1",(0,d.c)().state.padding).attr("y1",(0,d.c)().state.padding+i+(0,d.c)().state.dividerMargin/2).attr("y2",(0,d.c)().state.padding+i+(0,d.c)().state.dividerMargin/2).attr("class","descr-divider"),c=s.node().getBBox(),l=Math.max(c.width,a.width);o.attr("x2",l+3*(0,d.c)().state.padding),t.insert("rect",":first-child").attr("x",(0,d.c)().state.padding).attr("y",(0,d.c)().state.padding).attr("width",l+2*(0,d.c)().state.padding).attr("height",c.height+i+2*(0,d.c)().state.padding).attr("rx",(0,d.c)().state.radius)})(s,e);const n=s.node().getBBox();return i.width=n.width+2*(0,d.c)().state.padding,i.height=n.height+2*(0,d.c)().state.padding,r=i,o[a]=r,i;var r};let g,p=0;const h={},x=(t,e,a,o,u,f,y)=>{const b=new r.k({compound:!0,multigraph:!0});let w,m=!0;for(w=0;w<t.length;w++)if("relation"===t[w].stmt){m=!1;break}a?b.setGraph({rankdir:"LR",multigraph:!0,compound:!0,ranker:"tight-tree",ranksep:m?1:g.edgeLengthFactor,nodeSep:m?1:50,isMultiGraph:!0}):b.setGraph({rankdir:"TB",multigraph:!0,compound:!0,ranksep:m?1:g.edgeLengthFactor,nodeSep:m?1:50,ranker:"tight-tree",isMultiGraph:!0}),b.setDefaultEdgeLabel((function(){return{}})),y.db.extract(t);const B=y.db.getStates(),k=y.db.getRelations(),S=Object.keys(B);for(const t of S){const i=B[t];let s;if(a&&(i.parentId=a),i.doc){let t=e.append("g").attr("id",i.id).attr("class","stateGroup");s=x(i.doc,t,i.id,!o,u,f,y);{t=c(t,i,o);let e=t.node().getBBox();s.width=e.width,s.height=e.height+g.padding/2,h[i.id]={y:g.compositTitleSize}}}else s=l(e,i);if(i.note){const t={descriptions:[],id:i.id+"-note",note:i.note,type:"note"},a=l(e,t);"left of"===i.note.position?(b.setNode(s.id+"-note",a),b.setNode(s.id,s)):(b.setNode(s.id,s),b.setNode(s.id+"-note",a)),b.setParent(s.id,s.id+"-group"),b.setParent(s.id+"-note",s.id+"-group")}else b.setNode(s.id,s)}d.l.debug("Count=",b.nodeCount(),b);let v=0;k.forEach((function(t){var e;v++,d.l.debug("Setting edge",t),b.setEdge(t.id1,t.id2,{relation:t,width:(e=t.title,e?e.length*g.fontSizeFactor:1),height:g.labelHeight*d.e.getRows(t.title).length,labelpos:"c"},"id"+v)})),(0,n.bK)(b),d.l.debug("Graph after layout",b.nodes());const N=e.node();b.nodes().forEach((function(t){void 0!==t&&void 0!==b.node(t)?(d.l.warn("Node "+t+": "+JSON.stringify(b.node(t))),u.select("#"+N.id+" #"+t).attr("transform","translate("+(b.node(t).x-b.node(t).width/2)+","+(b.node(t).y+(h[t]?h[t].y:0)-b.node(t).height/2)+" )"),u.select("#"+N.id+" #"+t).attr("data-x-shift",b.node(t).x-b.node(t).width/2),f.querySelectorAll("#"+N.id+" #"+t+" .divider").forEach((t=>{const e=t.parentElement;let a=0,i=0;e&&(e.parentElement&&(a=e.parentElement.getBBox().width),i=parseInt(e.getAttribute("data-x-shift"),10),Number.isNaN(i)&&(i=0)),t.setAttribute("x1",0-i+8),t.setAttribute("x2",a-i-8)}))):d.l.debug("No Node "+t+": "+JSON.stringify(b.node(t)))}));let E=N.getBBox();b.edges().forEach((function(t){void 0!==t&&void 0!==b.edge(t)&&(d.l.debug("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(b.edge(t))),function(t,e,a){e.points=e.points.filter((t=>!Number.isNaN(t.y)));const n=e.points,r=(0,s.jvg)().x((function(t){return t.x})).y((function(t){return t.y})).curve(s.$0Z),o=t.append("path").attr("d",r(n)).attr("id","edge"+p).attr("class","transition");let c="";if((0,d.c)().state.arrowMarkerAbsolute&&(c=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,c=c.replace(/\(/g,"\\("),c=c.replace(/\)/g,"\\)")),o.attr("marker-end","url("+c+"#"+function(t){switch(t){case i.d.relationType.AGGREGATION:return"aggregation";case i.d.relationType.EXTENSION:return"extension";case i.d.relationType.COMPOSITION:return"composition";case i.d.relationType.DEPENDENCY:return"dependency"}}(i.d.relationType.DEPENDENCY)+"End)"),void 0!==a.title){const i=t.append("g").attr("class","stateLabel"),{x:s,y:n}=d.u.calcLabelPosition(e.points),r=d.e.getRows(a.title);let o=0;const c=[];let l=0,g=0;for(let t=0;t<=r.length;t++){const e=i.append("text").attr("text-anchor","middle").text(r[t]).attr("x",s).attr("y",n+o),a=e.node().getBBox();if(l=Math.max(l,a.width),g=Math.min(g,a.x),d.l.info(a.x,s,n+o),0===o){const t=e.node().getBBox();o=t.height,d.l.info("Title height",o,n)}c.push(e)}let p=o*r.length;if(r.length>1){const t=(r.length-1)*o*.5;c.forEach(((e,a)=>e.attr("y",n+a*o-t))),p=o*r.length}const h=i.node().getBBox();i.insert("rect",":first-child").attr("class","box").attr("x",s-l/2-(0,d.c)().state.padding/2).attr("y",n-p/2-(0,d.c)().state.padding/2-3.5).attr("width",l+(0,d.c)().state.padding).attr("height",p+(0,d.c)().state.padding),d.l.info(h)}p++}(e,b.edge(t),b.edge(t).relation))})),E=N.getBBox();const T={id:a||"root",label:a||"root",width:0,height:0};return T.width=E.width+2*g.padding,T.height=E.height+2*g.padding,d.l.debug("Doc rendered",T,b),T},u={setConf:function(){},draw:function(t,e,a,i){g=(0,d.c)().state;const n=(0,d.c)().securityLevel;let r;"sandbox"===n&&(r=(0,s.Ys)("#i"+e));const o="sandbox"===n?(0,s.Ys)(r.nodes()[0].contentDocument.body):(0,s.Ys)("body"),c="sandbox"===n?r.nodes()[0].contentDocument:document;d.l.debug("Rendering diagram "+t);const l=o.select(`[id='${e}']`);l.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z");const p=i.db.getRootDoc();x(p,l,void 0,!1,o,c,i);const h=g.padding,u=l.node().getBBox(),f=u.width+2*h,y=u.height+2*h,b=1.75*f;(0,d.i)(l,y,b,g.useMaxWidth),l.attr("viewBox",`${u.x-g.padding}  ${u.y-g.padding} `+f+" "+y)}},f={parser:i.p,db:i.d,renderer:u,styles:i.s,init:t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute,i.d.clear()}}},78482:(t,e,a)=>{a.r(e),a.d(e,{diagram:()=>H});var i=a(80641),s=a(42521),n=a(27435),r=a(89252),d=a(48065);a(67006),a(91088),a(65165),a(54746),a(50442);const o="rect",c="rectWithTitle",l="statediagram",g=`${l}-state`,p="transition",h=`${p} note-edge`,x=`${l}-note`,u=`${l}-cluster`,f=`${l}-cluster-alt`,y="parent",b="note",w="----",m=`${w}${b}`,B=`${w}${y}`,k="fill:none",S="fill: #333",v="text",N="normal";let E={},T=0;function $(t="",e=0,a="",i=w){return`state-${t}${null!==a&&a.length>0?`${i}${a}`:""}-${e}`}const M=(t,e,a,s,n,d)=>{const l=a.id,p=null==(w=s[l])?"":w.classes?w.classes.join(" "):"";var w;if("root"!==l){let e=o;!0===a.start&&(e="start"),!1===a.start&&(e="end"),a.type!==i.D&&(e=a.type),E[l]||(E[l]={id:l,shape:e,description:r.e.sanitizeText(l,(0,r.c)()),classes:`${p} ${g}`});const s=E[l];a.description&&(Array.isArray(s.description)?(s.shape=c,s.description.push(a.description)):s.description.length>0?(s.shape=c,s.description===l?s.description=[a.description]:s.description=[s.description,a.description]):(s.shape=o,s.description=a.description),s.description=r.e.sanitizeTextOrArray(s.description,(0,r.c)())),1===s.description.length&&s.shape===c&&(s.shape=o),!s.type&&a.doc&&(r.l.info("Setting cluster for ",l,z(a)),s.type="group",s.dir=z(a),s.shape=a.type===i.a?"divider":"roundedWithTitle",s.classes=s.classes+" "+u+" "+(d?f:""));const n={labelStyle:"",shape:s.shape,labelText:s.description,classes:s.classes,style:"",id:l,dir:s.dir,domId:$(l,T),type:s.type,padding:15,centerLabel:!0};if(a.note){const e={labelStyle:"",shape:"note",labelText:a.note.text,classes:x,style:"",id:l+m+"-"+T,domId:$(l,T,b),type:s.type,padding:15},i={labelStyle:"",shape:"noteGroup",labelText:a.note.text,classes:s.classes,style:"",id:l+B,domId:$(l,T,y),type:"group",padding:0};T++;const r=l+B;t.setNode(r,i),t.setNode(e.id,e),t.setNode(l,n),t.setParent(l,r),t.setParent(e.id,r);let d=l,o=e.id;"left of"===a.note.position&&(d=e.id,o=l),t.setEdge(d,o,{arrowhead:"none",arrowType:"",style:k,labelStyle:"",classes:h,arrowheadStyle:S,labelpos:"c",labelType:v,thickness:N})}else t.setNode(l,n)}e&&"root"!==e.id&&(r.l.trace("Setting node ",l," to be child of its parent ",e.id),t.setParent(l,e.id)),a.doc&&(r.l.trace("Adding nodes children "),D(t,a,a.doc,s,n,!d))},D=(t,e,a,s,n,d)=>{r.l.trace("items",a),a.forEach((a=>{switch(a.stmt){case i.b:case i.D:M(t,e,a,s,n,d);break;case i.S:{M(t,e,a.state1,s,n,d),M(t,e,a.state2,s,n,d);const i={id:"edge"+T,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:k,labelStyle:"",label:r.e.sanitizeText(a.description,(0,r.c)()),arrowheadStyle:S,labelpos:"c",labelType:v,thickness:N,classes:p};t.setEdge(a.state1.id,a.state2.id,i,T),T++}}}))},z=(t,e=i.c)=>{let a=e;if(t.doc)for(let e=0;e<t.doc.length;e++){const i=t.doc[e];"dir"===i.stmt&&(a=i.value)}return a},A={setConf:function(t){const e=Object.keys(t);for(const a of e)t[a]},getClasses:function(t,e){return e.db.extract(e.db.getRootDocV2()),e.db.getClasses()},draw:async function(t,e,a,i){r.l.info("Drawing state diagram (v2)",e),E={},i.db.getDirection();const{securityLevel:c,state:g}=(0,r.c)(),p=g.nodeSpacing||50,h=g.rankSpacing||50;r.l.info(i.db.getRootDocV2()),i.db.extract(i.db.getRootDocV2()),r.l.info(i.db.getRootDocV2());const x=i.db.getStates(),u=new s.k({multigraph:!0,compound:!0}).setGraph({rankdir:z(i.db.getRootDocV2()),nodesep:p,ranksep:h,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));let f;M(u,void 0,i.db.getRootDocV2(),x,i.db,!0),"sandbox"===c&&(f=(0,n.Ys)("#i"+e));const y="sandbox"===c?(0,n.Ys)(f.nodes()[0].contentDocument.body):(0,n.Ys)("body"),b=y.select(`[id="${e}"]`),w=y.select("#"+e+" g");await(0,d.r)(w,u,["barb"],l,e),r.u.insertTitle(b,"statediagramTitleText",g.titleTopMargin,i.db.getDiagramTitle());const m=b.node().getBBox(),B=m.width+16,k=m.height+16;b.attr("class",l);const S=b.node().getBBox();(0,r.i)(b,k,B,g.useMaxWidth);const v=`${S.x-8} ${S.y-8} ${B} ${k}`;r.l.debug(`viewBox ${v}`),b.attr("viewBox",v);const N=document.querySelectorAll('[id="'+e+'"] .edgeLabel .label');for(const t of N){const e=t.getBBox(),a=document.createElementNS("http://www.w3.org/2000/svg",o);a.setAttribute("rx",0),a.setAttribute("ry",0),a.setAttribute("width",e.width),a.setAttribute("height",e.height),t.insertBefore(a,t.firstChild)}}},H={parser:i.p,db:i.d,renderer:A,styles:i.s,init:t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute,i.d.clear()}}}}]);