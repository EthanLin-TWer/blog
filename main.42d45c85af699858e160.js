(self.webpackChunkethan_blog=self.webpackChunkethan_blog||[]).push([[179],{9429:(s,t,e)=>{"use strict";e.d(t,{Z:()=>o});var a=e(8014),l=e.n(a),i=e(6568),r=e.n(i)()(l());r.push([s.id,".container-details{display:flex;flex-direction:column;align-items:flex-start;max-width:960px;margin:0 auto;padding:0 8%}.article-title,.article-summary{text-align:center}",""]);const o=r},2290:(s,t,e)=>{"use strict";e.d(t,{Z:()=>o});var a=e(8014),l=e.n(a),i=e(6568),r=e.n(i)()(l());r.push([s.id,".container-list{max-width:800px;margin:0 auto;border-bottom:1px dashed #ccc}.post{padding:35px 25px}.post:hover{background-color:#fafafa}.post .title-container .title{font-size:20px;font-weight:bold;line-height:1.4;margin-bottom:15px}.post .title-container .created-date{font-size:13px;font-weight:lighter;color:#ddd}.post .summary{font-size:15px;line-height:1.7}.post .summary .markdown-body{margin-top:0;margin-bottom:0}@media (max-width:1025px){.post{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.post .title-container .created-date{display:none}}@media (min-width:1025px){.post{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start}.post .title-container{width:40%;margin-right:40px}.post .summary{width:60%}}",""]);const o=r},4339:(s,t,e)=>{"use strict";e.d(t,{Z:()=>o});var a=e(8014),l=e.n(a),i=e(6568),r=e.n(i)()(l());r.push([s.id,".markdown-body{min-width:100%;margin:32px auto}",""]);const o=r},681:(s,t,e)=>{"use strict";e.d(t,{Z:()=>o});var a=e(8014),l=e.n(a),i=e(6568),r=e.n(i)()(l());r.push([s.id,'body{font-family:"Open Sans"}a{text-decoration:none;color:inherit}a:active{color:inherit}.markdown-body input[type=checkbox]{margin-right:5px}',""]);const o=r},3881:(s,t,e)=>{"use strict";var a=e(1527),l=e(4478),i=e(6057),r=e(7936),o=e(7905),A=e(959),n=e(9472),h=e.n(n);const j=h().create({baseURL:"https://ethan.thoughtworkers.me",timeout:2e4,headers:{"Access-Control-Allow-Origin":"*"}}),d=h().create({timeout:2e4});var c=e(5181),m=e.n(c),g=e(3001),u=e.n(g),p=e(5512),b=e.n(p),y=e(3194),k=e.n(y),x=e(6766),f=e.n(x),w=e(4855),v=e.n(w),B=e(2290),E={};E.styleTagTransform=v(),E.setAttributes=k(),E.insert=b().bind(null,"head"),E.domAPI=u(),E.insertStyleElement=f(),m()(B.Z,E),B.Z&&B.Z.locals&&B.Z.locals;var Z=e(2928),T=e(3748),D=e(834),O=(e(462),e(2052)),C=e.n(O),Y=e(7545),M=e(7531),I=e(6592),N=e(3596),G=e(2992),L=e(7103);const Q=JSON.parse('{"i":["prism/coy","hljs/arduino-light","hljs/atelier-forest-light","hljs/color-brewer","hljs/foundation","hljs/github-gist","hljs/github","hljs/idea","hljs/magula","hljs/mono-blue","hljs/qtcreator_light","hljs/tomorrow-night-eighties","hljs/vs2015"]}'),z=()=>{const s=C()(Q.i);return e(6629)(`./${s}`)};(0,Y.HT)("typescript",M.Z),(0,Y.HT)("javascript",I.Z),(0,Y.HT)("markdown",N.Z),(0,Y.HT)("java",G.Z),(0,Y.HT)("bash",L.Z);const U=({language:s,value:t})=>(0,a.jsx)(Y.ZP,Object.assign({language:s,style:z(),showLineNumbers:!0},{children:t}));var H=e(4339),F={};F.styleTagTransform=v(),F.setAttributes=k(),F.insert=b().bind(null,"head"),F.domAPI=u(),F.insertStyleElement=f(),m()(H.Z,F),H.Z&&H.Z.locals&&H.Z.locals;const S=({data:s,className:t})=>(0,a.jsx)(Z.D,Object.assign({components:{code:U},rehypePlugins:[D.Z],remarkPlugins:[T.Z],className:`markdown-body ${t||""}`},{children:s})),J=({path:s,title:t,createdDate:e,summary:l})=>(0,a.jsx)("div",Object.assign({className:"container-list"},{children:(0,a.jsx)(o.rU,Object.assign({to:s},{children:(0,a.jsxs)("section",Object.assign({className:"post"},{children:[(0,a.jsxs)("div",Object.assign({className:"title-container"},{children:[(0,a.jsx)("div",Object.assign({className:"title"},{children:t})),(0,a.jsx)("div",Object.assign({className:"created-date"},{children:e}))]})),l&&(0,a.jsx)("div",Object.assign({className:"summary"},{children:(0,a.jsx)(S,{data:l})}))]}))}))}));class q extends A.Component{constructor(s){super(s),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(s,t){console.log("-------- error, info --------"),console.log(s,t)}render(){return this.state.hasError?(0,a.jsx)("div",{children:"something goes wrong"}):this.props.children}}var P=e(7027),W=e(705);const V=(s=>{const t={};return Object.keys(s).filter((t=>"function"==typeof s[t])).forEach((e=>{t[e]=(0,P.Z)(e,s[e].bind(t)),t[e].toString=()=>e})),t})({fetchBlogDetail:s=>({id:s}),saveBlogDetail:(s,t)=>({id:s,data:t}),isLoading:(s,t)=>({id:s,isLoading:t})}),X=e(1316);var K=e(9429),R={};R.styleTagTransform=v(),R.setAttributes=k(),R.insert=b().bind(null,"head"),R.domAPI=u(),R.insertStyleElement=f(),m()(K.Z,R),K.Z&&K.Z.locals&&K.Z.locals;const _=(0,o.cP)((0,i.i7)((0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.AW,{path:"/",element:(0,a.jsx)((()=>{const[{blogs:s},t]=(0,A.useState)({blogs:[]});return(0,A.useEffect)((()=>{j.get("/api/posts.json").then((({data:s})=>{t({blogs:s})}))}),[]),s.map((({id:s,path:t,title:e,summary:l,createdDate:i})=>(0,a.jsx)(J,{path:t.replace("_posts/","post/").replace(".md",""),title:e,summary:l,createdDate:i},s)))}),{})}),(0,a.jsx)(i.AW,{path:"/post/:postId",element:(0,a.jsx)((()=>{const[s,t]=(0,A.useState)({title:"",summary:"",detail:""}),e=(0,r.I0)(),{postId:l}=(0,i.UO)(),o=(0,r.v9)((s=>s.detail.posts[l]))||"",n=(0,r.v9)((s=>s.detail.loading[l]))||!1;return(0,A.useEffect)((()=>{e(V.fetchBlogDetail(l))}),[l]),(0,A.useEffect)((()=>{const{title:s,summary:e,content:a}=(s=>{var t;const{frontMatters:e,content:a}=((s="")=>{if(!s)return{frontMatters:{},content:""};if("string"!=typeof s)throw new Error("post should be a string, instead got: "+typeof s);const{attributes:t,body:e}=X(s.trim());return{frontMatters:t,content:e}})(s),l=(null===(t=e.title)||void 0===t?void 0:t.trim())||"",{summary:i,detail:r}=function(s){const t=s.trim(),e=t.indexOf("\n");return{summary:t.slice(0,e).trim(),detail:t.slice(e).trim()}}(a);return{title:l,summary:i,content:r}})(o);t({title:s&&`# ${s}`,summary:e,content:a}),document.title=s,document.getElementsByTagName("meta").description.content=e}),[o]),n?(0,a.jsx)("div",{children:"loading ..."}):o?(0,a.jsx)(q,{children:(0,a.jsxs)("div",Object.assign({className:"container-details"},{children:[s.title&&(0,a.jsx)(S,{data:s.title,className:"article-title"}),s.summary&&(0,a.jsx)(S,{data:s.summary,className:"article-summary"}),s.content&&(0,a.jsx)(S,{data:s.content,className:"article-content"})]}))}):(0,a.jsx)("div",{children:"there is no post at this path"})}),{})})]})));var $=e(5290),ss=e(4200),ts=e(5490),es=e(6088);const as=((s,t)=>{const e={};return(a=(s,t,a)=>{const l=s.toString();e[l]={next:t,throw:a}})(V.saveBlogDetail,((s,t)=>s.setIn(["posts",t.payload.id],t.payload.data))),a(V.isLoading,((s,t)=>s.setIn(["loading",t.payload.id],t.payload.isLoading))),(0,W.Z)(e,t);var a})(0,e.n(es)().from({posts:{},loading:{}})),ls=(0,$.UY)({detail:as});var is=e(8974);function*rs({payload:{id:s}}){try{yield(0,is.gz)(V.isLoading(s,!0));const{data:t}=yield(0,is.RE)(d.get,"https://cdn.jsdelivr.net/gh/EthanLin-TWer/blog@gh-pages/_posts/{id}.md".replace("{id}",s));yield(0,is.gz)(V.saveBlogDetail(s,t))}catch(s){}finally{yield(0,is.gz)(V.isLoading(s,!1))}}function*os(){yield(0,is.ib)(V.fetchBlogDetail,rs)}const As=(0,ss.ZP)();let ns=(0,$.md)(As);ns=(0,ts.Uo)(ns);const hs=(0,$.MT)(ls,{},ns);As.run((function*(){yield(0,is.$6)([os()])}));var js=e(681),ds={};ds.styleTagTransform=v(),ds.setAttributes=k(),ds.insert=b().bind(null,"head"),ds.domAPI=u(),ds.insertStyleElement=f(),m()(js.Z,ds),js.Z&&js.Z.locals&&js.Z.locals,(0,l.s)(document.getElementById("root")).render((0,a.jsx)(r.zt,Object.assign({store:hs},{children:(0,a.jsx)(i.pG,{router:_})})))},6629:(s,t,e)=>{var a={"./hljs":2826,"./hljs/":2826,"./hljs/agate":2351,"./hljs/agate.js":2351,"./hljs/androidstudio":8249,"./hljs/androidstudio.js":8249,"./hljs/arduino-light":7841,"./hljs/arduino-light.js":7841,"./hljs/arta":2313,"./hljs/arta.js":2313,"./hljs/ascetic":115,"./hljs/ascetic.js":115,"./hljs/atelier-cave-dark":3009,"./hljs/atelier-cave-dark.js":3009,"./hljs/atelier-cave-light":8757,"./hljs/atelier-cave-light.js":8757,"./hljs/atelier-dune-dark":8400,"./hljs/atelier-dune-dark.js":8400,"./hljs/atelier-dune-light":8815,"./hljs/atelier-dune-light.js":8815,"./hljs/atelier-estuary-dark":5737,"./hljs/atelier-estuary-dark.js":5737,"./hljs/atelier-estuary-light":3153,"./hljs/atelier-estuary-light.js":3153,"./hljs/atelier-forest-dark":4136,"./hljs/atelier-forest-dark.js":4136,"./hljs/atelier-forest-light":3047,"./hljs/atelier-forest-light.js":3047,"./hljs/atelier-heath-dark":1825,"./hljs/atelier-heath-dark.js":1825,"./hljs/atelier-heath-light":3906,"./hljs/atelier-heath-light.js":3906,"./hljs/atelier-lakeside-dark":3017,"./hljs/atelier-lakeside-dark.js":3017,"./hljs/atelier-lakeside-light":3742,"./hljs/atelier-lakeside-light.js":3742,"./hljs/atelier-plateau-dark":2801,"./hljs/atelier-plateau-dark.js":2801,"./hljs/atelier-plateau-light":4043,"./hljs/atelier-plateau-light.js":4043,"./hljs/atelier-savanna-dark":912,"./hljs/atelier-savanna-dark.js":912,"./hljs/atelier-savanna-light":4137,"./hljs/atelier-savanna-light.js":4137,"./hljs/atelier-seaside-dark":2526,"./hljs/atelier-seaside-dark.js":2526,"./hljs/atelier-seaside-light":766,"./hljs/atelier-seaside-light.js":766,"./hljs/atelier-sulphurpool-dark":2642,"./hljs/atelier-sulphurpool-dark.js":2642,"./hljs/atelier-sulphurpool-light":6479,"./hljs/atelier-sulphurpool-light.js":6479,"./hljs/atom-one-dark":5256,"./hljs/atom-one-dark.js":5256,"./hljs/atom-one-light":3603,"./hljs/atom-one-light.js":3603,"./hljs/brown-paper":8753,"./hljs/brown-paper.js":8753,"./hljs/codepen-embed":7360,"./hljs/codepen-embed.js":7360,"./hljs/color-brewer":749,"./hljs/color-brewer.js":749,"./hljs/darcula":6816,"./hljs/darcula.js":6816,"./hljs/dark":2321,"./hljs/dark.js":2321,"./hljs/darkula":8890,"./hljs/darkula.js":8890,"./hljs/default-style":410,"./hljs/default-style.js":410,"./hljs/docco":9278,"./hljs/docco.js":9278,"./hljs/dracula":1424,"./hljs/dracula.js":1424,"./hljs/far":3322,"./hljs/far.js":3322,"./hljs/foundation":8162,"./hljs/foundation.js":8162,"./hljs/github":8824,"./hljs/github-gist":8936,"./hljs/github-gist.js":8936,"./hljs/github.js":8824,"./hljs/googlecode":9041,"./hljs/googlecode.js":9041,"./hljs/grayscale":9864,"./hljs/grayscale.js":9864,"./hljs/gruvbox-dark":3220,"./hljs/gruvbox-dark.js":3220,"./hljs/gruvbox-light":7930,"./hljs/gruvbox-light.js":7930,"./hljs/hopscotch":3753,"./hljs/hopscotch.js":3753,"./hljs/hybrid":5661,"./hljs/hybrid.js":5661,"./hljs/idea":1897,"./hljs/idea.js":1897,"./hljs/index":2826,"./hljs/index.js":2826,"./hljs/ir-black":2734,"./hljs/ir-black.js":2734,"./hljs/kimbie.dark":7837,"./hljs/kimbie.dark.js":7837,"./hljs/kimbie.light":2354,"./hljs/kimbie.light.js":2354,"./hljs/magula":5865,"./hljs/magula.js":5865,"./hljs/mono-blue":977,"./hljs/mono-blue.js":977,"./hljs/monokai":7020,"./hljs/monokai-sublime":7722,"./hljs/monokai-sublime.js":7722,"./hljs/monokai.js":7020,"./hljs/obsidian":9676,"./hljs/obsidian.js":9676,"./hljs/ocean":2894,"./hljs/ocean.js":2894,"./hljs/paraiso-dark":5816,"./hljs/paraiso-dark.js":5816,"./hljs/paraiso-light":6163,"./hljs/paraiso-light.js":6163,"./hljs/pojoaque":9092,"./hljs/pojoaque.js":9092,"./hljs/purebasic":8823,"./hljs/purebasic.js":8823,"./hljs/qtcreator_dark":2047,"./hljs/qtcreator_dark.js":2047,"./hljs/qtcreator_light":5261,"./hljs/qtcreator_light.js":5261,"./hljs/railscasts":4071,"./hljs/railscasts.js":4071,"./hljs/rainbow":5678,"./hljs/rainbow.js":5678,"./hljs/routeros":4585,"./hljs/routeros.js":4585,"./hljs/school-book":6615,"./hljs/school-book.js":6615,"./hljs/solarized-dark":9050,"./hljs/solarized-dark.js":9050,"./hljs/solarized-light":5908,"./hljs/solarized-light.js":5908,"./hljs/sunburst":5420,"./hljs/sunburst.js":5420,"./hljs/tomorrow":6002,"./hljs/tomorrow-night":5639,"./hljs/tomorrow-night-blue":8406,"./hljs/tomorrow-night-blue.js":8406,"./hljs/tomorrow-night-bright":8470,"./hljs/tomorrow-night-bright.js":8470,"./hljs/tomorrow-night-eighties":9260,"./hljs/tomorrow-night-eighties.js":9260,"./hljs/tomorrow-night.js":5639,"./hljs/tomorrow.js":6002,"./hljs/vs":9245,"./hljs/vs.js":9245,"./hljs/vs2015":2027,"./hljs/vs2015.js":2027,"./hljs/xcode":6678,"./hljs/xcode.js":6678,"./hljs/xt256":5995,"./hljs/xt256.js":5995,"./hljs/zenburn":675,"./hljs/zenburn.js":675,"./prism":5589,"./prism/":5589,"./prism/atom-dark":4272,"./prism/atom-dark.js":4272,"./prism/base16-ateliersulphurpool.light":9909,"./prism/base16-ateliersulphurpool.light.js":9909,"./prism/cb":5916,"./prism/cb.js":5916,"./prism/coy":5867,"./prism/coy.js":5867,"./prism/darcula":5390,"./prism/darcula.js":5390,"./prism/dark":6596,"./prism/dark.js":6596,"./prism/duotone-dark":8063,"./prism/duotone-dark.js":8063,"./prism/duotone-earth":6825,"./prism/duotone-earth.js":6825,"./prism/duotone-forest":8838,"./prism/duotone-forest.js":8838,"./prism/duotone-light":6710,"./prism/duotone-light.js":6710,"./prism/duotone-sea":7602,"./prism/duotone-sea.js":7602,"./prism/duotone-space":3280,"./prism/duotone-space.js":3280,"./prism/funky":7945,"./prism/funky.js":7945,"./prism/ghcolors":298,"./prism/ghcolors.js":298,"./prism/hopscotch":2149,"./prism/hopscotch.js":2149,"./prism/index":5589,"./prism/index.js":5589,"./prism/okaidia":9400,"./prism/okaidia.js":9400,"./prism/pojoaque":4044,"./prism/pojoaque.js":4044,"./prism/prism":8558,"./prism/prism.js":8558,"./prism/solarizedlight":6102,"./prism/solarizedlight.js":6102,"./prism/tomorrow":2591,"./prism/tomorrow.js":2591,"./prism/twilight":7578,"./prism/twilight.js":7578,"./prism/vs":9826,"./prism/vs.js":9826,"./prism/xonokai":7374,"./prism/xonokai.js":7374};function l(s){var t=i(s);return e(t)}function i(s){if(!e.o(a,s)){var t=new Error("Cannot find module '"+s+"'");throw t.code="MODULE_NOT_FOUND",t}return a[s]}l.keys=function(){return Object.keys(a)},l.resolve=i,s.exports=l,l.id=6629},1621:s=>{"use strict";s.exports="data:font/woff;charset=utf-8;base64,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"},5231:()=>{}},s=>{s.O(0,[736],(()=>(3881,s(s.s=3881)))),s.O()}]);