(self.webpackChunkethan_blog=self.webpackChunkethan_blog||[]).push([[179],{32290:(s,t,e)=>{"use strict";e.d(t,{Z:()=>o});var l=e(88014),a=e.n(l),r=e(86568),i=e.n(r)()(a());i.push([s.id,".container{max-width:800px;margin:0 auto;border-bottom:1px dashed #ccc}.post{padding:35px 25px;display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start}.post:hover{background-color:#fafafa}.post .left{width:40%;margin-right:40px}.post .left .title{font-size:20px;font-weight:bold;line-height:1.4;margin-bottom:15px}.post .left .created-date{font-size:13px;font-weight:lighter;color:#ddd}.post .summary{width:60%;font-size:15px;line-height:1.7}.post .summary .markdown-body{margin-top:0;margin-bottom:0}",""]);const o=i},54339:(s,t,e)=>{"use strict";e.d(t,{Z:()=>o});var l=e(88014),a=e.n(l),r=e(86568),i=e.n(r)()(a());i.push([s.id,".markdown-body{max-width:1020px;margin-top:32px;margin-bottom:32px;margin-left:auto;margin-right:auto;padding-left:16px;padding-right:16px}",""]);const o=i},30681:(s,t,e)=>{"use strict";e.d(t,{Z:()=>o});var l=e(88014),a=e.n(l),r=e(86568),i=e.n(r)()(a());i.push([s.id,'body{font-family:"Open Sans"}a{text-decoration:none;color:inherit}a:active{color:inherit}.markdown-body input[type=checkbox]{margin-right:5px}',""]);const o=i},93233:(s,t,e)=>{"use strict";var l=e(11527),a=e(44478),r=e(76057),i=e(37936),o=e(97905),A=e(50959),h=e(49472),j=e.n(h);const n=j().create({baseURL:"https://ethan.thoughtworkers.me",timeout:2e4,headers:{"Access-Control-Allow-Origin":"*"}}),d=j().create({timeout:2e4});var c=e(15181),m=e.n(c),g=e(23001),p=e.n(g),u=e(85512),b=e.n(u),k=e(73194),f=e.n(k),y=e(56766),x=e.n(y),w=e(54855),B=e.n(w),v=e(32290),O={};O.styleTagTransform=B(),O.setAttributes=f(),O.insert=b().bind(null,"head"),O.domAPI=p(),O.insertStyleElement=x(),m()(v.Z,O),v.Z&&v.Z.locals&&v.Z.locals;var D=e(32928),E=e(3748),T=e(60834),Y=(e(70462),e(89293)),Z=e(22052);const C=e.n(Z)()(["prism/coy","hljs/arduino-light","hljs/atelier-forest-light","hljs/color-brewer","hljs/foundation","hljs/github-gist","hljs/github","hljs/idea","hljs/magula","hljs/mono-blue","hljs/qtcreator_light","hljs/tomorrow-night-eighties","hljs/vs2015"]),{default:M}=e(46629)(`./${C}`),G=({language:s,value:t})=>(0,l.jsx)(Y.ZP,Object.assign({language:s,style:M},{children:t}));var I=e(54339),Q={};Q.styleTagTransform=B(),Q.setAttributes=f(),Q.insert=b().bind(null,"head"),Q.domAPI=p(),Q.insertStyleElement=x(),m()(I.Z,Q),I.Z&&I.Z.locals&&I.Z.locals;const z=({data:s})=>(0,l.jsx)(D.D,Object.assign({components:{code:G},rehypePlugins:[T.Z],remarkPlugins:[E.Z],className:"markdown-body"},{children:s})),N=({path:s,title:t,createdDate:e,summary:a})=>(0,l.jsx)("div",Object.assign({className:"container"},{children:(0,l.jsx)(o.rU,Object.assign({to:s},{children:(0,l.jsxs)("section",Object.assign({className:"post"},{children:[(0,l.jsxs)("div",Object.assign({className:"left"},{children:[(0,l.jsx)("div",Object.assign({className:"title"},{children:t})),(0,l.jsx)("div",Object.assign({className:"created-date"},{children:e}))]})),a&&(0,l.jsx)("div",Object.assign({className:"summary"},{children:(0,l.jsx)(z,{data:a})}))]}))}))}));var U=e(27027),L=e(40705);const F=(s=>{const t={};return Object.keys(s).filter((t=>"function"==typeof s[t])).forEach((e=>{t[e]=(0,U.Z)(e,s[e].bind(t)),t[e].toString=()=>e})),t})({fetchBlogDetail:s=>({id:s}),saveBlogDetail:(s,t)=>({id:s,data:t})}),q=e(61316),J=(0,o.cP)((0,r.i7)((0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.AW,{path:"/",element:(0,l.jsx)((()=>{const[{blogs:s},t]=(0,A.useState)({blogs:[]});return(0,A.useEffect)((()=>{n.get("/api/posts.json").then((({data:s})=>{t({blogs:s})}))}),[]),s.map((({id:s,path:t,title:e,summary:a,createdDate:r})=>(0,l.jsx)(N,{path:t.replace("_posts/","post/").replace(".md",""),title:e,summary:a,createdDate:r},s)))}),{})}),(0,l.jsx)(r.AW,{path:"/post/:postId",element:(0,l.jsx)((()=>{const[s,t]=(0,A.useState)({title:"",summary:"",detail:""}),e=(0,i.I0)(),{postId:a}=(0,r.UO)(),o=(0,i.v9)((s=>s.detail.posts[a]))||"";return(0,A.useEffect)((()=>{e(F.fetchBlogDetail(a))}),[a]),(0,A.useEffect)((()=>{const{frontMatters:s,content:e}=(s=>((s="")=>{if(!s)return{frontMatters:{},content:""};if("string"!=typeof s)throw new Error("post should be a string, instead got: "+typeof s);const{attributes:t,body:e}=q(s.trim());return{frontMatters:t,content:e}})(s))(o),l=(({title:s})=>s?`# ${s.trim()}`:"")(s),{summary:a,detail:r}=(s=>{const t=s.trim(),e=t.indexOf("\n");return{summary:t.slice(0,e).trim(),detail:t.slice(e).trim()}})(e);t({title:l,summary:a,content:r}),document.title=l}),[o]),(0,l.jsxs)("div",Object.assign({className:"container"},{children:[s.title&&(0,l.jsx)(z,{data:s.title}),s.summary&&(0,l.jsx)(z,{data:s.summary}),s.content&&(0,l.jsx)(z,{data:s.content})]}))}),{})})]})));var S=e(35290),H=e(14200),P=e(85490),W=e(86088);const V=((s,t)=>{const e={};return((s,t,l)=>{const a=s.toString();e[a]={next:t,throw:l}})(F.saveBlogDetail,((s,t)=>s.setIn(["posts",t.payload.id],t.payload.data))),(0,L.Z)(e,t)})(0,e.n(W)().from({posts:{}})),X=(0,S.UY)({detail:V});var K=e(28974);function*R({payload:{id:s}}){try{const{data:t}=yield(0,K.RE)(d.get,`https://cdn.jsdelivr.net/gh/linesh-simplicity/blog/_posts/${s}.md`);yield(0,K.gz)(F.saveBlogDetail(s,t))}catch(s){}}function*_(){yield(0,K.ib)(F.fetchBlogDetail,R)}const $=(0,H.ZP)();let ss=(0,S.md)($);ss=(0,P.Uo)(ss);const ts=(0,S.MT)(X,{},ss);$.run((function*(){yield(0,K.$6)([_()])}));var es=e(30681),ls={};ls.styleTagTransform=B(),ls.setAttributes=f(),ls.insert=b().bind(null,"head"),ls.domAPI=p(),ls.insertStyleElement=x(),m()(es.Z,ls),es.Z&&es.Z.locals&&es.Z.locals,(0,a.s)(document.getElementById("root")).render((0,l.jsx)(i.zt,Object.assign({store:ts},{children:(0,l.jsx)(r.pG,{router:J})})))},46629:(s,t,e)=>{var l={"./hljs":32826,"./hljs/":32826,"./hljs/agate":72351,"./hljs/agate.js":72351,"./hljs/androidstudio":58249,"./hljs/androidstudio.js":58249,"./hljs/arduino-light":27531,"./hljs/arduino-light.js":27531,"./hljs/arta":2313,"./hljs/arta.js":2313,"./hljs/ascetic":30115,"./hljs/ascetic.js":30115,"./hljs/atelier-cave-dark":23009,"./hljs/atelier-cave-dark.js":23009,"./hljs/atelier-cave-light":28757,"./hljs/atelier-cave-light.js":28757,"./hljs/atelier-dune-dark":98400,"./hljs/atelier-dune-dark.js":98400,"./hljs/atelier-dune-light":38815,"./hljs/atelier-dune-light.js":38815,"./hljs/atelier-estuary-dark":45737,"./hljs/atelier-estuary-dark.js":45737,"./hljs/atelier-estuary-light":63153,"./hljs/atelier-estuary-light.js":63153,"./hljs/atelier-forest-dark":74136,"./hljs/atelier-forest-dark.js":74136,"./hljs/atelier-forest-light":3047,"./hljs/atelier-forest-light.js":3047,"./hljs/atelier-heath-dark":1825,"./hljs/atelier-heath-dark.js":1825,"./hljs/atelier-heath-light":93906,"./hljs/atelier-heath-light.js":93906,"./hljs/atelier-lakeside-dark":63017,"./hljs/atelier-lakeside-dark.js":63017,"./hljs/atelier-lakeside-light":13742,"./hljs/atelier-lakeside-light.js":13742,"./hljs/atelier-plateau-dark":62801,"./hljs/atelier-plateau-dark.js":62801,"./hljs/atelier-plateau-light":24043,"./hljs/atelier-plateau-light.js":24043,"./hljs/atelier-savanna-dark":40912,"./hljs/atelier-savanna-dark.js":40912,"./hljs/atelier-savanna-light":84137,"./hljs/atelier-savanna-light.js":84137,"./hljs/atelier-seaside-dark":42526,"./hljs/atelier-seaside-dark.js":42526,"./hljs/atelier-seaside-light":70766,"./hljs/atelier-seaside-light.js":70766,"./hljs/atelier-sulphurpool-dark":52642,"./hljs/atelier-sulphurpool-dark.js":52642,"./hljs/atelier-sulphurpool-light":96479,"./hljs/atelier-sulphurpool-light.js":96479,"./hljs/atom-one-dark":95256,"./hljs/atom-one-dark.js":95256,"./hljs/atom-one-light":73603,"./hljs/atom-one-light.js":73603,"./hljs/brown-paper":18753,"./hljs/brown-paper.js":18753,"./hljs/codepen-embed":67360,"./hljs/codepen-embed.js":67360,"./hljs/color-brewer":30749,"./hljs/color-brewer.js":30749,"./hljs/darcula":96816,"./hljs/darcula.js":96816,"./hljs/dark":12321,"./hljs/dark.js":12321,"./hljs/darkula":88890,"./hljs/darkula.js":88890,"./hljs/default-style":40410,"./hljs/default-style.js":40410,"./hljs/docco":29278,"./hljs/docco.js":29278,"./hljs/dracula":51424,"./hljs/dracula.js":51424,"./hljs/far":23322,"./hljs/far.js":23322,"./hljs/foundation":78162,"./hljs/foundation.js":78162,"./hljs/github":18824,"./hljs/github-gist":8936,"./hljs/github-gist.js":8936,"./hljs/github.js":18824,"./hljs/googlecode":29041,"./hljs/googlecode.js":29041,"./hljs/grayscale":79864,"./hljs/grayscale.js":79864,"./hljs/gruvbox-dark":76476,"./hljs/gruvbox-dark.js":76476,"./hljs/gruvbox-light":27930,"./hljs/gruvbox-light.js":27930,"./hljs/hopscotch":53753,"./hljs/hopscotch.js":53753,"./hljs/hybrid":35661,"./hljs/hybrid.js":35661,"./hljs/idea":61897,"./hljs/idea.js":61897,"./hljs/index":32826,"./hljs/index.js":32826,"./hljs/ir-black":52734,"./hljs/ir-black.js":52734,"./hljs/kimbie.dark":57837,"./hljs/kimbie.dark.js":57837,"./hljs/kimbie.light":62354,"./hljs/kimbie.light.js":62354,"./hljs/magula":35865,"./hljs/magula.js":35865,"./hljs/mono-blue":90977,"./hljs/mono-blue.js":90977,"./hljs/monokai":7020,"./hljs/monokai-sublime":57722,"./hljs/monokai-sublime.js":57722,"./hljs/monokai.js":7020,"./hljs/obsidian":59676,"./hljs/obsidian.js":59676,"./hljs/ocean":72894,"./hljs/ocean.js":72894,"./hljs/paraiso-dark":75816,"./hljs/paraiso-dark.js":75816,"./hljs/paraiso-light":66163,"./hljs/paraiso-light.js":66163,"./hljs/pojoaque":29092,"./hljs/pojoaque.js":29092,"./hljs/purebasic":78823,"./hljs/purebasic.js":78823,"./hljs/qtcreator_dark":2047,"./hljs/qtcreator_dark.js":2047,"./hljs/qtcreator_light":75261,"./hljs/qtcreator_light.js":75261,"./hljs/railscasts":4071,"./hljs/railscasts.js":4071,"./hljs/rainbow":65678,"./hljs/rainbow.js":65678,"./hljs/routeros":54585,"./hljs/routeros.js":54585,"./hljs/school-book":76615,"./hljs/school-book.js":76615,"./hljs/solarized-dark":29050,"./hljs/solarized-dark.js":29050,"./hljs/solarized-light":85908,"./hljs/solarized-light.js":85908,"./hljs/sunburst":40353,"./hljs/sunburst.js":40353,"./hljs/tomorrow":46002,"./hljs/tomorrow-night":45639,"./hljs/tomorrow-night-blue":8406,"./hljs/tomorrow-night-blue.js":8406,"./hljs/tomorrow-night-bright":78470,"./hljs/tomorrow-night-bright.js":78470,"./hljs/tomorrow-night-eighties":39260,"./hljs/tomorrow-night-eighties.js":39260,"./hljs/tomorrow-night.js":45639,"./hljs/tomorrow.js":46002,"./hljs/vs":29245,"./hljs/vs.js":29245,"./hljs/vs2015":12027,"./hljs/vs2015.js":12027,"./hljs/xcode":76678,"./hljs/xcode.js":76678,"./hljs/xt256":35995,"./hljs/xt256.js":35995,"./hljs/zenburn":10675,"./hljs/zenburn.js":10675,"./prism":95589,"./prism/":95589,"./prism/atom-dark":94272,"./prism/atom-dark.js":94272,"./prism/base16-ateliersulphurpool.light":49909,"./prism/base16-ateliersulphurpool.light.js":49909,"./prism/cb":35916,"./prism/cb.js":35916,"./prism/coy":75867,"./prism/coy.js":75867,"./prism/darcula":65390,"./prism/darcula.js":65390,"./prism/dark":6596,"./prism/dark.js":6596,"./prism/duotone-dark":98063,"./prism/duotone-dark.js":98063,"./prism/duotone-earth":86825,"./prism/duotone-earth.js":86825,"./prism/duotone-forest":58838,"./prism/duotone-forest.js":58838,"./prism/duotone-light":16710,"./prism/duotone-light.js":16710,"./prism/duotone-sea":77602,"./prism/duotone-sea.js":77602,"./prism/duotone-space":73280,"./prism/duotone-space.js":73280,"./prism/funky":57945,"./prism/funky.js":57945,"./prism/ghcolors":20298,"./prism/ghcolors.js":20298,"./prism/hopscotch":42149,"./prism/hopscotch.js":42149,"./prism/index":95589,"./prism/index.js":95589,"./prism/okaidia":53185,"./prism/okaidia.js":53185,"./prism/pojoaque":34044,"./prism/pojoaque.js":34044,"./prism/prism":98558,"./prism/prism.js":98558,"./prism/solarizedlight":26102,"./prism/solarizedlight.js":26102,"./prism/tomorrow":2591,"./prism/tomorrow.js":2591,"./prism/twilight":57578,"./prism/twilight.js":57578,"./prism/vs":59826,"./prism/vs.js":59826,"./prism/xonokai":77374,"./prism/xonokai.js":77374};function a(s){var t=r(s);return e(t)}function r(s){if(!e.o(l,s)){var t=new Error("Cannot find module '"+s+"'");throw t.code="MODULE_NOT_FOUND",t}return l[s]}a.keys=function(){return Object.keys(l)},a.resolve=r,s.exports=a,a.id=46629},21621:s=>{"use strict";s.exports="data:font/woff;charset=utf-8;base64,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"},25231:()=>{}},s=>{s.O(0,[736],(()=>(93233,s(s.s=93233)))),s.O()}]);