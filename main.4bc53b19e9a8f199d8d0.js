"use strict";(self.webpackChunkethan_blog=self.webpackChunkethan_blog||[]).push([[179],{39429:(t,e,A)=>{A.d(e,{Z:()=>r});var s=A(88014),a=A.n(s),n=A(86568),i=A.n(n)()(a());i.push([t.id,".container-details{display:flex;flex-direction:column;align-items:flex-start;max-width:960px;margin:0 auto;padding:0 8%}.article-title,.article-summary{text-align:center}",""]);const r=i},32290:(t,e,A)=>{A.d(e,{Z:()=>r});var s=A(88014),a=A.n(s),n=A(86568),i=A.n(n)()(a());i.push([t.id,".container-list{max-width:800px;margin:0 auto;border-bottom:1px dashed #ccc}.post{padding:35px 25px}.post:hover{background-color:#fafafa}.post .title-container .title{font-size:20px;font-weight:bold;line-height:1.4;margin-bottom:15px}.post .title-container .created-date{font-size:13px;font-weight:lighter;color:#ddd}.post .summary{font-size:15px;line-height:1.7}.post .summary .markdown-body{margin-top:0;margin-bottom:0}@media (max-width:1025px){.post{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.post .title-container .created-date{display:none}}@media (min-width:1025px){.post{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start}.post .title-container{width:40%;margin-right:40px}.post .summary{width:60%}}",""]);const r=i},54339:(t,e,A)=>{A.d(e,{Z:()=>r});var s=A(88014),a=A.n(s),n=A(86568),i=A.n(n)()(a());i.push([t.id,".markdown-body{min-width:100%;margin:32px auto}pre.mermaid{background-color:#fff}",""]);const r=i},30681:(t,e,A)=>{A.d(e,{Z:()=>r});var s=A(88014),a=A.n(s),n=A(86568),i=A.n(n)()(a());i.push([t.id,'body{font-family:"Open Sans"}a{text-decoration:none;color:inherit}a:active{color:inherit}.markdown-body input[type=checkbox]{margin-right:5px}',""]);const r=i},9692:(t,e,A)=>{var s=A(11527),a=A(44478),n=A(76057),i=A(37936),r=A(97905),o=A(50959),l=A(49472),c=A.n(l);const d=c().create({baseURL:"https://ethan.thoughtworkers.me",timeout:2e4,headers:{"Access-Control-Allow-Origin":"*"}}),m=c().create({timeout:2e4});var g=A(15181),h=A.n(g),p=A(23001),u=A.n(p),x=A(85512),f=A.n(x),y=A(73194),b=A.n(y),j=A(56766),B=A.n(j),Z=A(54855),w=A.n(Z),v=A(32290),E={};E.styleTagTransform=w(),E.setAttributes=b(),E.insert=f().bind(null,"head"),E.domAPI=u(),E.insertStyleElement=B(),h()(v.Z,E),v.Z&&v.Z.locals&&v.Z.locals;var O=A(89694),T=A(21666),D=A(77685),M=A(22052),Y=A.n(M),C=A(77545),I=A(57531),N=A(96592),G=A(83596),L=A(92992),Q=A(17103),k=A(75867),z=A(27531),S=A(3047),H=A(30749),U=A(78162),F=A(8936),J=A(18824),P=A(61897),W=A(35865),V=A(90977),X=A(75261),K=A(39260),q=A(12027),R=A(89252);const _=/%%\s*{\s*init:\s*(.*)}\s*%%/,$=({children:t})=>{const[e,A]=(0,o.useState)("");return(0,o.useEffect)((()=>{A((t.length*Math.pow(4096,3)).toFixed().toString())}),[t]),(0,o.useEffect)((()=>{if(e){const[,e]=t.match(_)||[];R.L.initialize(e?JSON.parse(e):{}),R.L.run().then((()=>{}))}}),[e,t]),(0,s.jsx)("pre",Object.assign({id:e,className:"mermaid"},{children:t}))};(0,C.HT)("typescript",I.Z),(0,C.HT)("javascript",N.Z),(0,C.HT)("markdown",G.Z),(0,C.HT)("java",L.Z),(0,C.HT)("bash",Q.Z);const tt=Y()([k.Z,z.Z,S.Z,H.Z,U.Z,F.Z,J.Z,P.Z,W.Z,V.Z,X.Z,K.Z,q.Z]),et=({node:t})=>{const{children:e,properties:A}=t.children[0],{language:a,isMermaid:n}=(t=>{const[e="language-text"]=null==t?void 0:t.className,A=e.substring("language-".length);return{language:A,isMermaid:()=>"mermaid"===A}})(A),i=(t=>t[0].value)(e);return n()?(0,s.jsx)($,{children:i}):(0,s.jsx)(C.ZP,Object.assign({language:a,style:tt,showLineNumbers:!0},{children:i}))};A(70462);var At=A(54339),st={};st.styleTagTransform=w(),st.setAttributes=b(),st.insert=f().bind(null,"head"),st.domAPI=u(),st.insertStyleElement=B(),h()(At.Z,st),At.Z&&At.Z.locals&&At.Z.locals;const at=({data:t,className:e})=>(0,s.jsx)(O.D,Object.assign({components:{pre:et},remarkPlugins:[T.Z],rehypePlugins:[D.Z],className:`markdown-body ${e||""}`},{children:t})),nt=({path:t,title:e,createdDate:A,summary:a})=>(0,s.jsx)("div",Object.assign({className:"container-list"},{children:(0,s.jsx)(r.rU,Object.assign({to:t},{children:(0,s.jsxs)("section",Object.assign({className:"post"},{children:[(0,s.jsxs)("div",Object.assign({className:"title-container"},{children:[(0,s.jsx)("div",Object.assign({className:"title"},{children:e})),(0,s.jsx)("div",Object.assign({className:"created-date"},{children:A}))]})),a&&(0,s.jsx)("div",Object.assign({className:"summary"},{children:(0,s.jsx)(at,{data:a})}))]}))}))}));class it extends o.Component{constructor(t){super(t),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t,e){console.log("-------- error, info --------"),console.log(t,e)}render(){return this.state.hasError?(0,s.jsx)("div",{children:"something goes wrong"}):this.props.children}}var rt=A(27027),ot=A(40705);const lt=(t=>{const e={};return Object.keys(t).filter((e=>"function"==typeof t[e])).forEach((A=>{e[A]=(0,rt.Z)(A,t[A].bind(e)),e[A].toString=()=>A})),e})({fetchBlogDetail:t=>({id:t}),saveBlogDetail:(t,e)=>({id:t,data:e}),isLoading:(t,e)=>({id:t,isLoading:e})}),ct="---\n";var dt=A(39429),mt={};mt.styleTagTransform=w(),mt.setAttributes=b(),mt.insert=f().bind(null,"head"),mt.domAPI=u(),mt.insertStyleElement=B(),h()(dt.Z,mt),dt.Z&&dt.Z.locals&&dt.Z.locals;const gt=(0,r.cP)((0,n.i7)((0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.AW,{path:"/",element:(0,s.jsx)((()=>{const[{blogs:t},e]=(0,o.useState)({blogs:[]});return(0,o.useEffect)((()=>{d.get("/api/posts.json").then((({data:t})=>{e({blogs:t})}))}),[]),t.map((({id:t,path:e,title:A,summary:a,createdDate:n})=>(0,s.jsx)(nt,{path:e.replace("_posts/","post/").replace(".md",""),title:A,summary:a,createdDate:n},t)))}),{})}),(0,s.jsx)(n.AW,{path:"/post/:postId",element:(0,s.jsx)((()=>{const[t,e]=(0,o.useState)({title:"",summary:"",detail:""}),A=(0,i.I0)(),{postId:a}=(0,n.UO)(),r=(0,i.v9)((t=>t.detail.posts[a]))||"",l=(0,i.v9)((t=>t.detail.loading[a]))||!1;return(0,o.useEffect)((()=>{A(lt.fetchBlogDetail(a))}),[a]),(0,o.useEffect)((()=>{const{title:t,summary:A,content:s}=(t=>{var e;const{frontMatters:A,content:s}=((t="")=>{if(!t)return{frontMatters:{},content:""};if("string"!=typeof t)throw new Error("post should be a string, instead got: "+typeof t);const{frontMatters:e,content:A}=(t=>({frontMatters:t.substring(t.indexOf(ct)+ct.length,t.lastIndexOf(ct)).split("\n").filter((t=>t)).map((t=>t.split(":"))).map((([t,e])=>({[t]:e.trim()}))).reduce(((t,e)=>Object.assign(Object.assign({},t),e)),{}),content:t.substring(t.lastIndexOf(ct)+ct.length).trim()}))(t);return{frontMatters:e,content:A}})(t),a=(null===(e=A.title)||void 0===e?void 0:e.trim())||"",{summary:n,detail:i}=function(t){const e=t.trim(),A=e.indexOf("\n");return{summary:e.slice(0,A).trim(),detail:e.slice(A).trim()}}(s);return{title:a,summary:n,content:i}})(r);e({title:t&&`# ${t}`,summary:A,content:s}),document.title=t,document.getElementsByTagName("meta").description.content=A}),[r]),l?(0,s.jsx)("div",{children:"loading ..."}):r?(0,s.jsx)(it,{children:(0,s.jsxs)("div",Object.assign({className:"container-details"},{children:[t.title&&(0,s.jsx)(at,{data:t.title,className:"article-title"}),t.summary&&(0,s.jsx)(at,{data:t.summary,className:"article-summary"}),t.content&&(0,s.jsx)(at,{data:t.content,className:"article-content"})]}))}):(0,s.jsx)("div",{children:"there is no post at this path"})}),{})})]})));var ht=A(43453),pt=A(14200),ut=A(85490),xt=A(86088);const ft=((t,e)=>{const A={};return(s=(t,e,s)=>{const a=t.toString();A[a]={next:e,throw:s}})(lt.saveBlogDetail,((t,e)=>t.setIn(["posts",e.payload.id],e.payload.data))),s(lt.isLoading,((t,e)=>t.setIn(["loading",e.payload.id],e.payload.isLoading))),(0,ot.Z)(A,e);var s})(0,A.n(xt)().from({posts:{},loading:{}})),yt=(0,ht.UY)({detail:ft});var bt=A(28974);function*jt({payload:{id:t}}){try{yield(0,bt.gz)(lt.isLoading(t,!0));const{data:e}=yield(0,bt.RE)(m.get,"https://cdn.jsdelivr.net/gh/EthanLin-TWer/blog@gh-pages/_posts/{id}.md".replace("{id}",t));yield(0,bt.gz)(lt.saveBlogDetail(t,e))}catch(t){}finally{yield(0,bt.gz)(lt.isLoading(t,!1))}}function*Bt(){yield(0,bt.ib)(lt.fetchBlogDetail,jt)}const Zt=(0,pt.ZP)();let wt=(0,ht.md)(Zt);wt=(0,ut.Uo)(wt);const vt=(0,ht.MT)(yt,{},wt);Zt.run((function*(){yield(0,bt.$6)([Bt()])}));var Et=A(30681),Ot={};Ot.styleTagTransform=w(),Ot.setAttributes=b(),Ot.insert=f().bind(null,"head"),Ot.domAPI=u(),Ot.insertStyleElement=B(),h()(Et.Z,Ot),Et.Z&&Et.Z.locals&&Et.Z.locals,(0,a.s)(document.getElementById("root")).render((0,s.jsx)(i.zt,Object.assign({store:vt},{children:(0,s.jsx)(n.pG,{router:gt})})))},21621:t=>{t.exports="data:font/woff;charset=utf-8;base64,d09GRgABAAAAAAZwABAAAAAACFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEU0lHAAAGaAAAAAgAAAAIAAAAAUdTVUIAAAZcAAAACgAAAAoAAQAAT1MvMgAAAyQAAABJAAAAYFYEU3RjbWFwAAADcAAAAEUAAACAAJThvmN2dCAAAATkAAAABAAAAAQAAAAAZnBnbQAAA7gAAACyAAABCUM+8IhnYXNwAAAGTAAAABAAAAAQABoAI2dseWYAAAFsAAABPAAAAZwcEq9taGVhZAAAAsgAAAA0AAAANgh4a91oaGVhAAADCAAAABoAAAAkCA8DRGhtdHgAAAL8AAAADAAAAAwGAACfbG9jYQAAAsAAAAAIAAAACABiATBtYXhwAAACqAAAABgAAAAgAA8ASm5hbWUAAAToAAABQgAAAlXu73sOcG9zdAAABiwAAAAeAAAAME3QpOBwcmVwAAAEbAAAAHYAAAB/aFGpk3jaTY6xa8JAGMW/O62BDi0tJLYQincXEypYIiGJjSgHniQ6umTsUEyLm5BV6NDBP8Tpts6F0v+k/0an2i+itHDw3v2+9+DBKTzsJNnWJNTgHEy4BgG3EMI9DCEDOGEXzDADU5hBKMIgNPZqoD3SilVaXZCER3/I7AtxEJLtzzuZfI+VVkprxTlXShWKb3TBecG11rwoNlmmn1P2WYcJczl32etSpKnziC7lQyWe1smVPy/Lt7Kc+0vWY/gAgIIEqAN9we0pwKXreiMasxvabDQMM4riO+qxM2ogwDGOZTXxwxDiycQIcoYFBLj5K3EIaSctAq2kTYiw+ymhce7vwM9jSqO8JyVd5RH9gyTt2+J/yUmYlIR0s04n6+7Vm1ozezUeLEaUjhaDSuXHwVRgvLJn1tQ7xiuVv/ocTRF42mNgZGBgYGbwZOBiAAFGJBIMAAizAFoAAABiAGIAznjaY2BkYGAA4in8zwXi+W2+MjCzMIDApSwvXzC97Z4Ig8N/BxYGZgcgl52BCSQKAA3jCV8CAABfAAAAAAQAAEB42mNgZGBg4f3vACQZQABIMjKgAmYAKEgBXgAAeNpjYGY6wTiBgZWBg2kmUxoDA4MPhGZMYzBi1AHygVLYQUCaawqDA4PChxhmh/8ODDEsvAwHgMKMIDnGL0x7gJQCAwMAJd4MFwAAAHjaY2BgYGaA4DAGRgYQkAHyGMF8NgYrIM3JIAGVYYDT+AEjAwuDFpBmA9KMDEwMCh9i/v8H8sH0/4dQc1iAmAkALaUKLgAAAHjaTY9LDsIgEIbtgqHUPpDi3gPoBVyRTmTddOmqTXThEXqrob2gQ1FjwpDvfwCBdmdXC5AVKFu3e5MfNFJ29KTQT48Ob9/lqYwOGZxeUelN2U2R6+cArgtCJpauW7UQBqnFkUsjAY/kOU1cP+DAgvxwn1chZDwUbd6CFimGXwzwF6tPbFIcjEl+vvmM/byA48e6tWrKArm4ZJlCbdsrxksL1AwWn/yBSJKpYbq8AXaaTb8AAHja28jAwOC00ZrBeQNDQOWO//sdBBgYGRiYWYAEELEwMTE4uzo5Zzo5b2BxdnFOcALxNjA6b2ByTswC8jYwg0VlNuoCTWAMqNzMzsoK1rEhNqByEyerg5PMJlYuVueETKcd/89uBpnpvIEVomeHLoMsAAe1Id4AAAAAAAB42oWQT07CQBTGv0JBhagk7HQzKxca2sJCE1hDt4QF+9JOS0nbaaYDCQfwCJ7Au3AHj+LO13FMmm6cl7785vven0kBjHCBhfpYuNa5Ph1c0e2Xu3jEvWG7UdPDLZ4N92nOm+EBXuAbHmIMSRMs+4aUEd4Nd3CHD8NdvOLTsA2GL8M9PODbcL+hD7C1xoaHeLJSEao0FEW14ckxC+TU8TxvsY6X0eLPmRhry2WVioLpkrbp84LLQPGI7c6sOiUzpWIWS5GzlSgUzzLBSikOPFTOXqly7rqx0Z1Q5BAIoZBSFihQYQOOBEdkCOgXTOHA07HAGjGWiIjaPZNW13/+lm6S9FT7rLHFJ6fQbkATOG1j2OFMucKJJsxIVfQORl+9Jyda6Sl1dUYhSCm1dyClfoeDve4qMYdLEbfqHf3O/AdDumsjAAB42mNgYoAAZQYjBmyAGYQZmdhL8zLdDEydARfoAqIAAAABAAMABwAKABMAB///AA8AAQAAAAAAAAAAAAAAAAABAAAAAA=="}},t=>{t.O(0,[730,629,729,512,493,52,934,144,403,213,678,898,933,692,119,734,634,936,224,992,671,320,712,548,802,481,889,722,787,975,327,167,877,455,731,450,791,106,273,516,781,635,763,688,355],(()=>(9692,t(t.s=9692)))),t.O()}]);