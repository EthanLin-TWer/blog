"use strict";(self.webpackChunkethan_blog=self.webpackChunkethan_blog||[]).push([[6002],{48065:(e,t,n)=>{n.d(t,{r:()=>X});var i=n(54746),r=n(50442),a=n(38500),d=n(89252),l=n(42521),o=n(54503),s=n(27435);let c={},h={},g={};const f=(e,t)=>(d.l.trace("In isDecendant",t," ",e," = ",h[t].includes(e)),!!h[t].includes(e)),w=(e,t,n,i)=>{d.l.warn("Copying children of ",e,"root",i,"data",t.node(e),i);const r=t.children(e)||[];e!==i&&r.push(e),d.l.warn("Copying (nodes) clusterId",e,"nodes",r),r.forEach((r=>{if(t.children(r).length>0)w(r,t,n,i);else{const a=t.node(r);d.l.info("cp ",r," to ",i," with parent ",e),n.setNode(r,a),i!==t.parent(r)&&(d.l.warn("Setting parent",r,t.parent(r)),n.setParent(r,t.parent(r))),e!==i&&r!==e?(d.l.debug("Setting parent",r,e),n.setParent(r,e)):(d.l.info("In copy ",e,"root",i,"data",t.node(e),i),d.l.debug("Not Setting parent for node=",r,"cluster!==rootId",e!==i,"node!==clusterId",r!==e));const l=t.edges(r);d.l.debug("Copying Edges",l),l.forEach((r=>{d.l.info("Edge",r);const a=t.edge(r.v,r.w,r.name);d.l.info("Edge data",a,i);try{((e,t)=>(d.l.info("Decendants of ",t," is ",h[t]),d.l.info("Edge is ",e),e.v!==t&&e.w!==t&&(h[t]?h[t].includes(e.v)||f(e.v,t)||f(e.w,t)||h[t].includes(e.w):(d.l.debug("Tilt, ",t,",not in decendants"),!1))))(r,i)?(d.l.info("Copying as ",r.v,r.w,a,r.name),n.setEdge(r.v,r.w,a,r.name),d.l.info("newGraph edges ",n.edges(),n.edge(n.edges()[0]))):d.l.info("Skipping copy of edge ",r.v,"--\x3e",r.w," rootId: ",i," clusterId:",e)}catch(e){d.l.error(e)}}))}d.l.debug("Removing node",r),t.removeNode(r)}))},u=(e,t)=>{const n=t.children(e);let i=[...n];for(const r of n)g[r]=e,i=[...i,...u(r,t)];return i},p=(e,t)=>{d.l.trace("Searching",e);const n=t.children(e);if(d.l.trace("Searching children of id ",e,n),n.length<1)return d.l.trace("This is a valid node",e),e;for(const i of n){const n=p(i,t);if(n)return d.l.trace("Found replacement for",e," => ",n),n}},y=e=>c[e]&&c[e].externalConnections&&c[e]?c[e].id:e,v=(e,t)=>{if(d.l.warn("extractor - ",t,r.c(e),e.children("D")),t>10)return void d.l.error("Bailing out");let n=e.nodes(),i=!1;for(const t of n){const n=e.children(t);i=i||n.length>0}if(i){d.l.debug("Nodes = ",n,t);for(const i of n)if(d.l.debug("Extracting node",i,c,c[i]&&!c[i].externalConnections,!e.parent(i),e.node(i),e.children("D")," Depth ",t),c[i])if(!c[i].externalConnections&&e.children(i)&&e.children(i).length>0){d.l.warn("Cluster without external connections, without a parent and with children",i,t);let n="TB"===e.graph().rankdir?"LR":"TB";c[i]&&c[i].clusterData&&c[i].clusterData.dir&&(n=c[i].clusterData.dir,d.l.warn("Fixing dir",c[i].clusterData.dir,n));const a=new l.k({multigraph:!0,compound:!0}).setGraph({rankdir:n,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));d.l.warn("Old graph before copy",r.c(e)),w(i,e,a,i),e.setNode(i,{clusterNode:!0,id:i,clusterData:c[i].clusterData,labelText:c[i].labelText,graph:a}),d.l.warn("New graph after copy node: (",i,")",r.c(a)),d.l.debug("Old graph after copy",r.c(e))}else d.l.warn("Cluster ** ",i," **not meeting the criteria !externalConnections:",!c[i].externalConnections," no parent: ",!e.parent(i)," children ",e.children(i)&&e.children(i).length>0,e.children("D"),t),d.l.debug(c);else d.l.debug("Not a cluster",i,t);n=e.nodes(),d.l.warn("New list of nodes",n);for(const i of n){const n=e.node(i);d.l.warn(" Now next level",i,n),n.clusterNode&&v(n.graph,t+1)}}else d.l.debug("Done, no node has children",e.nodes())},x=(e,t)=>{if(0===t.length)return[];let n=Object.assign(t);return t.forEach((t=>{const i=e.children(t),r=x(e,i);n=[...n,...r]})),n},b={rect:(e,t)=>{d.l.info("Creating subgraph rect for ",t.id,t);const n=e.insert("g").attr("class","cluster"+(t.class?" "+t.class:"")).attr("id",t.id),i=n.insert("rect",":first-child"),r=(0,d.n)((0,d.c)().flowchart.htmlLabels),l=n.insert("g").attr("class","cluster-label"),c="markdown"===t.labelType?(0,o.c)(l,t.labelText,{style:t.labelStyle,useHtmlLabels:r}):l.node().appendChild((0,a.c)(t.labelText,t.labelStyle,void 0,!0));let h=c.getBBox();if((0,d.n)((0,d.c)().flowchart.htmlLabels)){const e=c.children[0],t=(0,s.Ys)(c);h=e.getBoundingClientRect(),t.attr("width",h.width),t.attr("height",h.height)}const g=0*t.padding,f=g/2,w=t.width<=h.width+g?h.width+g:t.width;t.width<=h.width+g?t.diff=(h.width-t.width)/2-t.padding/2:t.diff=-t.padding/2,d.l.trace("Data ",t,JSON.stringify(t)),i.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-w/2).attr("y",t.y-t.height/2-f).attr("width",w).attr("height",t.height+g),r?l.attr("transform","translate("+(t.x-h.width/2)+", "+(t.y-t.height/2)+")"):l.attr("transform","translate("+t.x+", "+(t.y-t.height/2)+")");const u=i.node().getBBox();return t.width=u.width,t.height=u.height,t.intersect=function(e){return(0,a.i)(t,e)},n},roundedWithTitle:(e,t)=>{const n=e.insert("g").attr("class",t.classes).attr("id",t.id),i=n.insert("rect",":first-child"),r=n.insert("g").attr("class","cluster-label"),l=n.append("rect"),o=r.node().appendChild((0,a.c)(t.labelText,t.labelStyle,void 0,!0));let c=o.getBBox();if((0,d.n)((0,d.c)().flowchart.htmlLabels)){const e=o.children[0],t=(0,s.Ys)(o);c=e.getBoundingClientRect(),t.attr("width",c.width),t.attr("height",c.height)}c=o.getBBox();const h=0*t.padding,g=h/2,f=t.width<=c.width+t.padding?c.width+t.padding:t.width;t.width<=c.width+t.padding?t.diff=(c.width+0*t.padding-t.width)/2:t.diff=-t.padding/2,i.attr("class","outer").attr("x",t.x-f/2-g).attr("y",t.y-t.height/2-g).attr("width",f+h).attr("height",t.height+h),l.attr("class","inner").attr("x",t.x-f/2-g).attr("y",t.y-t.height/2-g+c.height-1).attr("width",f+h).attr("height",t.height+h-c.height-3),r.attr("transform","translate("+(t.x-c.width/2)+", "+(t.y-t.height/2-t.padding/3+((0,d.n)((0,d.c)().flowchart.htmlLabels)?5:3))+")");const w=i.node().getBBox();return t.height=w.height,t.intersect=function(e){return(0,a.i)(t,e)},n},noteGroup:(e,t)=>{const n=e.insert("g").attr("class","note-cluster").attr("id",t.id),i=n.insert("rect",":first-child"),r=0*t.padding,d=r/2;i.attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-t.width/2-d).attr("y",t.y-t.height/2-d).attr("width",t.width+r).attr("height",t.height+r).attr("fill","none");const l=i.node().getBBox();return t.width=l.width,t.height=l.height,t.intersect=function(e){return(0,a.i)(t,e)},n},divider:(e,t)=>{const n=e.insert("g").attr("class",t.classes).attr("id",t.id),i=n.insert("rect",":first-child"),r=0*t.padding,d=r/2;i.attr("class","divider").attr("x",t.x-t.width/2-d).attr("y",t.y-t.height/2).attr("width",t.width+r).attr("height",t.height+r);const l=i.node().getBBox();return t.width=l.width,t.height=l.height,t.diff=-t.padding/2,t.intersect=function(e){return(0,a.i)(t,e)},n}};let m={};const N=async(e,t,n,l)=>{d.l.info("Graph in recursive render: XXX",r.c(t),l);const o=t.graph().rankdir;d.l.trace("Dir in recursive render - dir:",o);const s=e.insert("g").attr("class","root");t.nodes()?d.l.info("Recursive render XXX",t.nodes()):d.l.info("No nodes found for",t),t.edges().length>0&&d.l.trace("Recursive edges",t.edge(t.edges()[0]));const h=s.insert("g").attr("class","clusters"),g=s.insert("g").attr("class","edgePaths"),f=s.insert("g").attr("class","edgeLabels"),w=s.insert("g").attr("class","nodes");await Promise.all(t.nodes().map((async function(e){const i=t.node(e);if(void 0!==l){const n=JSON.parse(JSON.stringify(l.clusterData));d.l.info("Setting data for cluster XXX (",e,") ",n,l),t.setNode(l.id,n),t.parent(e)||(d.l.trace("Setting parent",e,l.id),t.setParent(e,l.id,n))}if(d.l.info("(Insert) Node XXX"+e+": "+JSON.stringify(t.node(e))),i&&i.clusterNode){d.l.info("Cluster identified",e,i.width,t.node(e));const r=await N(w,i.graph,n,t.node(e)),l=r.elem;(0,a.u)(i,l),i.diff=r.diff||0,d.l.info("Node bounds (abc123)",e,i,i.width,i.x,i.y),(0,a.s)(l,i),d.l.warn("Recursive render complete ",l,i)}else t.children(e).length>0?(d.l.info("Cluster - the non recursive path XXX",e,i.id,i,t),d.l.info(p(i.id,t)),c[i.id]={id:p(i.id,t),node:i}):(d.l.info("Node - the non recursive path",e,i.id,i),await(0,a.e)(w,t.node(e),o))}))),t.edges().forEach((function(e){const n=t.edge(e.v,e.w,e.name);d.l.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e)),d.l.info("Edge "+e.v+" -> "+e.w+": ",e," ",JSON.stringify(t.edge(e))),d.l.info("Fix",c,"ids:",e.v,e.w,"Translateing: ",c[e.v],c[e.w]),(0,a.f)(f,n)})),t.edges().forEach((function(e){d.l.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e))})),d.l.info("#############################################"),d.l.info("###                Layout                 ###"),d.l.info("#############################################"),d.l.info(t),(0,i.bK)(t),d.l.info("Graph after layout:",r.c(t));let u=0;return(e=>x(e,e.children()))(t).forEach((function(e){const n=t.node(e);d.l.info("Position "+e+": "+JSON.stringify(t.node(e))),d.l.info("Position "+e+": ("+n.x,","+n.y,") width: ",n.width," height: ",n.height),n&&n.clusterNode?(0,a.p)(n):t.children(e).length>0?(((e,t)=>{d.l.trace("Inserting cluster");const n=t.shape||"rect";m[t.id]=b[n](e,t)})(h,n),c[n.id].node=n):(0,a.p)(n)})),t.edges().forEach((function(e){const i=t.edge(e);d.l.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(i),i);const r=(0,a.g)(g,e,i,c,n,t);(0,a.h)(i,r)})),t.nodes().forEach((function(e){const n=t.node(e);d.l.info(e,n.type,n.diff),"group"===n.type&&(u=n.diff)})),{elem:s,diff:u}},X=async(e,t,n,i,l)=>{(0,a.a)(e,n,i,l),(0,a.b)(),(0,a.d)(),m={},h={},g={},c={},d.l.warn("Graph at first:",r.c(t)),((e,t)=>{e?(d.l.debug("Opting in, graph "),e.nodes().forEach((function(t){e.children(t).length>0&&(d.l.warn("Cluster identified",t," Replacement id in edges: ",p(t,e)),h[t]=u(t,e),c[t]={id:p(t,e),clusterData:e.node(t)})})),e.nodes().forEach((function(t){const n=e.children(t),i=e.edges();n.length>0?(d.l.debug("Cluster identified",t,h),i.forEach((e=>{e.v!==t&&e.w!==t&&f(e.v,t)^f(e.w,t)&&(d.l.warn("Edge: ",e," leaves cluster ",t),d.l.warn("Decendants of XXX ",t,": ",h[t]),c[t].externalConnections=!0)}))):d.l.debug("Not a cluster ",t,h)})),e.edges().forEach((function(t){const n=e.edge(t);d.l.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(t)),d.l.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(e.edge(t)));let i=t.v,r=t.w;if(d.l.warn("Fix XXX",c,"ids:",t.v,t.w,"Translating: ",c[t.v]," --- ",c[t.w]),c[t.v]&&c[t.w]&&c[t.v]===c[t.w]){d.l.warn("Fixing and trixing link to self - removing XXX",t.v,t.w,t.name),d.l.warn("Fixing and trixing - removing XXX",t.v,t.w,t.name),i=y(t.v),r=y(t.w),e.removeEdge(t.v,t.w,t.name);const a=t.w+"---"+t.v;e.setNode(a,{domId:a,id:a,labelStyle:"",labelText:n.label,padding:0,shape:"labelRect",style:""});const l=JSON.parse(JSON.stringify(n)),o=JSON.parse(JSON.stringify(n));l.label="",l.arrowTypeEnd="none",o.label="",l.fromCluster=t.v,o.toCluster=t.v,e.setEdge(i,a,l,t.name+"-cyclic-special"),e.setEdge(a,r,o,t.name+"-cyclic-special")}else(c[t.v]||c[t.w])&&(d.l.warn("Fixing and trixing - removing XXX",t.v,t.w,t.name),i=y(t.v),r=y(t.w),e.removeEdge(t.v,t.w,t.name),i!==t.v&&(n.fromCluster=t.v),r!==t.w&&(n.toCluster=t.w),d.l.warn("Fix Replacing with XXX",i,r,t.name),e.setEdge(i,r,n,t.name))})),d.l.warn("Adjusted Graph",r.c(e)),v(e,0),d.l.trace(c)):d.l.debug("Opting out, no graph ")})(t),d.l.warn("Graph after:",r.c(t)),await N(e,t,i)}}}]);