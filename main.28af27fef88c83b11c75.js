"use strict";(self.webpackChunkethan_blog=self.webpackChunkethan_blog||[]).push([[179],{39429:(t,e,A)=>{A.d(e,{Z:()=>r});var n=A(88014),s=A.n(n),a=A(86568),i=A.n(a)()(s());i.push([t.id,".container-details{display:flex;flex-direction:column;align-items:flex-start;max-width:960px;margin:0 auto;padding:0 8%}.article-title,.article-summary{text-align:center}pre.mermaid{background-color:#fff}",""]);const r=i},32290:(t,e,A)=>{A.d(e,{Z:()=>r});var n=A(88014),s=A.n(n),a=A(86568),i=A.n(a)()(s());i.push([t.id,".container-list{max-width:800px;margin:0 auto;border-bottom:1px dashed #ccc}.post{padding:35px 25px}.post:hover{background-color:#fafafa}.post .title-container .title{font-size:20px;font-weight:bold;line-height:1.4;margin-bottom:15px}.post .title-container .created-date{font-size:13px;font-weight:lighter;color:#ddd}.post .summary{font-size:15px;line-height:1.7}.post .summary .markdown-body{margin-top:0;margin-bottom:0}@media (max-width:1025px){.post{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.post .title-container .created-date{display:none}}@media (min-width:1025px){.post{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start}.post .title-container{width:40%;margin-right:40px}.post .summary{width:60%}}",""]);const r=i},54339:(t,e,A)=>{A.d(e,{Z:()=>r});var n=A(88014),s=A.n(n),a=A(86568),i=A.n(a)()(s());i.push([t.id,".markdown-body{min-width:100%;margin:32px auto}",""]);const r=i},30681:(t,e,A)=>{A.d(e,{Z:()=>r});var n=A(88014),s=A.n(n),a=A(86568),i=A.n(a)()(s());i.push([t.id,'body{font-family:"Open Sans"}a{text-decoration:none;color:inherit}a:active{color:inherit}.markdown-body input[type=checkbox]{margin-right:5px}',""]);const r=i},54705:(t,e,A)=>{var n=A(11527),s=A(44478),a=A(76057),i=A(37936),r=A(97905),o=A(50959),l=A(49472),c=A.n(l);const d=c().create({baseURL:"https://ethan.thoughtworkers.me",timeout:2e4,headers:{"Access-Control-Allow-Origin":"*"}}),m=c().create({timeout:2e4});var g=A(15181),h=A.n(g),u=A(23001),p=A.n(u),f=A(85512),x=A.n(f),y=A(73194),b=A.n(y),j=A(56766),B=A.n(j),v=A(54855),Z=A.n(v),w=A(32290),O={};O.styleTagTransform=Z(),O.setAttributes=b(),O.insert=x().bind(null,"head"),O.domAPI=p(),O.insertStyleElement=B(),h()(w.Z,O),w.Z&&w.Z.locals&&w.Z.locals;var E=A(89694),T=A(21666),D=A(77685);function N(t,e,A){var n;if(e(t))return(null==A?void 0:A(t))||t;if((null===(n=t.children)||void 0===n?void 0:n.length)>0){const n=t.children.map((t=>N(t,e,A)));return Object.assign(Object.assign({},t),{children:n})}return t}function Y(){return function(t){return N(t,(t=>{var e,A,n;return 0!==(null===(e=t.children)||void 0===e?void 0:e.length)&&"pre"===t.tagName&&"code"===t.children[0].tagName&&"language-mermaid"===(null===(n=null===(A=t.children[0].properties)||void 0===A?void 0:A.className)||void 0===n?void 0:n[0])}),(t=>{return Object.assign(Object.assign({},t),{tagName:"mermaid",properties:{className:["mermaid"],id:(e=t.children[0].children[0].value,(4096*e.length^3).toFixed(12).toString())},children:t.children[0].children});var e}))}}var C=A(89252);const I=({className:t,children:[e],id:A})=>((0,o.useEffect)((()=>{const[,t]=e.match(/%%\s*{\s*init:\s*(.*)}\s*%%/)||[];C.L.initialize(t?JSON.parse(t):{})}),[e]),(0,n.jsx)("pre",Object.assign({id:A,className:t},{children:e})));var M=A(22052),G=A.n(M),L=A(77545),Q=A(57531),k=A(96592),z=A(83596),H=A(92992),S=A(17103),U=A(75867),F=A(27531),J=A(3047),P=A(30749),W=A(78162),V=A(8936),X=A(18824),K=A(61897),q=A(35865),R=A(90977),_=A(75261),$=A(39260),tt=A(12027);(0,L.HT)("typescript",Q.Z),(0,L.HT)("javascript",k.Z),(0,L.HT)("markdown",z.Z),(0,L.HT)("java",H.Z),(0,L.HT)("bash",S.Z);const et=t=>{const{language:e,value:A}=t;return A?(0,n.jsx)(L.ZP,Object.assign({language:e,style:G()([U.Z,F.Z,J.Z,P.Z,W.Z,V.Z,X.Z,K.Z,q.Z,R.Z,_.Z,$.Z,tt.Z]),showLineNumbers:!0},{children:A})):null};A(70462);var At=A(54339),nt={};nt.styleTagTransform=Z(),nt.setAttributes=b(),nt.insert=x().bind(null,"head"),nt.domAPI=p(),nt.insertStyleElement=B(),h()(At.Z,nt),At.Z&&At.Z.locals&&At.Z.locals;const st=({data:t,className:e})=>(0,n.jsx)(E.D,Object.assign({components:{mermaid:I,code:et},remarkPlugins:[T.Z],rehypePlugins:[Y,D.Z],className:`markdown-body ${e||""}`},{children:t})),at=({path:t,title:e,createdDate:A,summary:s})=>(0,n.jsx)("div",Object.assign({className:"container-list"},{children:(0,n.jsx)(r.rU,Object.assign({to:t},{children:(0,n.jsxs)("section",Object.assign({className:"post"},{children:[(0,n.jsxs)("div",Object.assign({className:"title-container"},{children:[(0,n.jsx)("div",Object.assign({className:"title"},{children:e})),(0,n.jsx)("div",Object.assign({className:"created-date"},{children:A}))]})),s&&(0,n.jsx)("div",Object.assign({className:"summary"},{children:(0,n.jsx)(st,{data:s})}))]}))}))}));class it extends o.Component{constructor(t){super(t),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t,e){console.log("-------- error, info --------"),console.log(t,e)}render(){return this.state.hasError?(0,n.jsx)("div",{children:"something goes wrong"}):this.props.children}}var rt=A(27027),ot=A(40705);const lt=(t=>{const e={};return Object.keys(t).filter((e=>"function"==typeof t[e])).forEach((A=>{e[A]=(0,rt.Z)(A,t[A].bind(e)),e[A].toString=()=>A})),e})({fetchBlogDetail:t=>({id:t}),saveBlogDetail:(t,e)=>({id:t,data:e}),isLoading:(t,e)=>({id:t,isLoading:e})}),ct="---\n";var dt=A(39429),mt={};mt.styleTagTransform=Z(),mt.setAttributes=b(),mt.insert=x().bind(null,"head"),mt.domAPI=p(),mt.insertStyleElement=B(),h()(dt.Z,mt),dt.Z&&dt.Z.locals&&dt.Z.locals;const gt=(0,r.cP)((0,a.i7)((0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.AW,{path:"/",element:(0,n.jsx)((()=>{const[{blogs:t},e]=(0,o.useState)({blogs:[]});return(0,o.useEffect)((()=>{d.get("/api/posts.json").then((({data:t})=>{e({blogs:t})}))}),[]),t.map((({id:t,path:e,title:A,summary:s,createdDate:a})=>(0,n.jsx)(at,{path:e.replace("_posts/","post/").replace(".md",""),title:A,summary:s,createdDate:a},t)))}),{})}),(0,n.jsx)(a.AW,{path:"/post/:postId",element:(0,n.jsx)((()=>{const[t,e]=(0,o.useState)({title:"",summary:"",detail:""}),A=(0,i.I0)(),{postId:s}=(0,a.UO)(),r=(0,i.v9)((t=>t.detail.posts[s]))||"",l=(0,i.v9)((t=>t.detail.loading[s]))||!1;return(0,o.useEffect)((()=>{A(lt.fetchBlogDetail(s))}),[s]),(0,o.useEffect)((()=>{const{title:t,summary:A,content:n}=(t=>{var e;const{frontMatters:A,content:n}=((t="")=>{if(!t)return{frontMatters:{},content:""};if("string"!=typeof t)throw new Error("post should be a string, instead got: "+typeof t);const{frontMatters:e,content:A}=(t=>({frontMatters:t.substring(t.indexOf(ct)+ct.length,t.lastIndexOf(ct)).split("\n").filter((t=>t)).map((t=>t.split(":"))).map((([t,e])=>({[t]:e.trim()}))).reduce(((t,e)=>Object.assign(Object.assign({},t),e)),{}),content:t.substring(t.lastIndexOf(ct)+ct.length).trim()}))(t);return{frontMatters:e,content:A}})(t),s=(null===(e=A.title)||void 0===e?void 0:e.trim())||"",{summary:a,detail:i}=function(t){const e=t.trim(),A=e.indexOf("\n");return{summary:e.slice(0,A).trim(),detail:e.slice(A).trim()}}(n);return{title:s,summary:a,content:i}})(r);e({title:t&&`# ${t}`,summary:A,content:n}),document.title=t,document.getElementsByTagName("meta").description.content=A}),[r]),l?(0,n.jsx)("div",{children:"loading ..."}):r?(0,n.jsx)(it,{children:(0,n.jsxs)("div",Object.assign({className:"container-details"},{children:[t.title&&(0,n.jsx)(st,{data:t.title,className:"article-title"}),t.summary&&(0,n.jsx)(st,{data:t.summary,className:"article-summary"}),t.content&&(0,n.jsx)(st,{data:t.content,className:"article-content"})]}))}):(0,n.jsx)("div",{children:"there is no post at this path"})}),{})})]})));var ht=A(43453),ut=A(57391),pt=A(85490),ft=A(86088);const xt=((t,e)=>{const A={};return(n=(t,e,n)=>{const s=t.toString();A[s]={next:e,throw:n}})(lt.saveBlogDetail,((t,e)=>t.setIn(["posts",e.payload.id],e.payload.data))),n(lt.isLoading,((t,e)=>t.setIn(["loading",e.payload.id],e.payload.isLoading))),(0,ot.Z)(A,e);var n})(0,A.n(ft)().from({posts:{},loading:{}})),yt=(0,ht.UY)({detail:xt});var bt=A(28974);function*jt({payload:{id:t}}){try{yield(0,bt.gz)(lt.isLoading(t,!0));const{data:e}=yield(0,bt.RE)(m.get,"https://cdn.jsdelivr.net/gh/EthanLin-TWer/blog@gh-pages/_posts/{id}.md".replace("{id}",t));yield(0,bt.gz)(lt.saveBlogDetail(t,e))}catch(t){}finally{yield(0,bt.gz)(lt.isLoading(t,!1))}}function*Bt(){yield(0,bt.ib)(lt.fetchBlogDetail,jt)}const vt=(0,ut.ZP)();let Zt=(0,ht.md)(vt);Zt=(0,pt.Uo)(Zt);const wt=(0,ht.MT)(yt,{},Zt);vt.run((function*(){yield(0,bt.$6)([Bt()])}));var Ot=A(30681),Et={};Et.styleTagTransform=Z(),Et.setAttributes=b(),Et.insert=x().bind(null,"head"),Et.domAPI=p(),Et.insertStyleElement=B(),h()(Ot.Z,Et),Ot.Z&&Ot.Z.locals&&Ot.Z.locals,(0,s.s)(document.getElementById("root")).render((0,n.jsx)(i.zt,Object.assign({store:wt},{children:(0,n.jsx)(a.pG,{router:gt})})))},21621:t=>{t.exports="data:font/woff;charset=utf-8;base64,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"}},t=>{t.O(0,[6730,9629,8729,512,5493,9052,1658,9245,2934,144,403,9213,4167,3638,5473,9674,7006,9678,8898,2306,2229,8933,8216,4692,1119,9005,2719,734,8213,9919,3936,1450,3286,3518,5385,9714,5614,5487,836,1415,7320,8636,4802,6743,4548,6002,1802,7275,2481,7961,8521,7462,9787,5975,9327,416,167,8455,6877,8954,5022,4183,522,9350,1731,8450,4791,849,9516,5635,4992,4352,9781,5652,7350,6763,1162,8891,9688,9355,6816,7666],(()=>(54705,t(t.s=54705)))),t.O()}]);