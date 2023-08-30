"use strict";(self.webpackChunkethan_blog=self.webpackChunkethan_blog||[]).push([[8521],{6914:(t,i,e)=>{e.r(i),e.d(i,{diagram:()=>d});var a=e(89252),n=e(27435),r=(e(67006),e(91088),e(65165),function(){var t=function(t,i,e,a){for(e=e||{},a=t.length;a--;e[t[a]]=i);return e},i=[1,3],e=[1,5],a=[1,6],n=[1,7],r=[1,8],s=[1,10],l=[1,5,14,16,18,20,21,26,28,29,30,31,32,38,39,40,41,47,48,50,51,52,53,54,55,56,57,58,59,60],o=[1,5,7,14,16,18,20,21,26,28,29,30,31,32,38,39,40,41,47,48,50,51,52,53,54,55,56,57,58,59,60],h=[38,39,40],c=[2,8],d=[1,19],u=[1,23],x=[1,24],g=[1,25],f=[1,26],y=[1,27],p=[1,29],q=[1,30],T=[1,31],_=[1,32],m=[1,33],A=[1,34],b=[1,37],S=[1,38],v=[1,39],k=[1,40],F=[1,41],P=[1,42],C=[1,43],E=[1,44],L=[1,45],D=[1,46],z=[1,47],I=[1,48],B=[1,49],w=[1,52],R=[1,67],W=[1,68],N=[5,23,27,38,39,40,50,51,52,53,54,55,56,57,58,59,60,61],U=[5,7,38,39,40,41],Q={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,SPACE:5,directive:6,QUADRANT:7,document:8,line:9,statement:10,axisDetails:11,quadrantDetails:12,points:13,title:14,title_value:15,acc_title:16,acc_title_value:17,acc_descr:18,acc_descr_value:19,acc_descr_multiline_value:20,section:21,text:22,point_start:23,point_x:24,point_y:25,"X-AXIS":26,"AXIS-TEXT-DELIMITER":27,"Y-AXIS":28,QUADRANT_1:29,QUADRANT_2:30,QUADRANT_3:31,QUADRANT_4:32,openDirective:33,typeDirective:34,closeDirective:35,":":36,argDirective:37,NEWLINE:38,SEMI:39,EOF:40,open_directive:41,type_directive:42,arg_directive:43,close_directive:44,alphaNumToken:45,textNoTagsToken:46,STR:47,MD_STR:48,alphaNum:49,PUNCTUATION:50,AMP:51,NUM:52,ALPHA:53,COMMA:54,PLUS:55,EQUALS:56,MULT:57,DOT:58,BRKT:59,UNDERSCORE:60,MINUS:61,$accept:0,$end:1},terminals_:{2:"error",5:"SPACE",7:"QUADRANT",14:"title",15:"title_value",16:"acc_title",17:"acc_title_value",18:"acc_descr",19:"acc_descr_value",20:"acc_descr_multiline_value",21:"section",23:"point_start",24:"point_x",25:"point_y",26:"X-AXIS",27:"AXIS-TEXT-DELIMITER",28:"Y-AXIS",29:"QUADRANT_1",30:"QUADRANT_2",31:"QUADRANT_3",32:"QUADRANT_4",36:":",38:"NEWLINE",39:"SEMI",40:"EOF",41:"open_directive",42:"type_directive",43:"arg_directive",44:"close_directive",47:"STR",48:"MD_STR",50:"PUNCTUATION",51:"AMP",52:"NUM",53:"ALPHA",54:"COMMA",55:"PLUS",56:"EQUALS",57:"MULT",58:"DOT",59:"BRKT",60:"UNDERSCORE",61:"MINUS"},productions_:[0,[3,2],[3,2],[3,2],[3,2],[8,0],[8,2],[9,2],[10,0],[10,2],[10,1],[10,1],[10,1],[10,2],[10,2],[10,2],[10,1],[10,1],[10,1],[13,4],[11,4],[11,3],[11,2],[11,4],[11,3],[11,2],[12,2],[12,2],[12,2],[12,2],[6,3],[6,5],[4,1],[4,1],[4,1],[33,1],[34,1],[37,1],[35,1],[22,1],[22,2],[22,1],[22,1],[49,1],[49,2],[45,1],[45,1],[45,1],[45,1],[45,1],[45,1],[45,1],[45,1],[45,1],[45,1],[45,1],[46,1],[46,1],[46,1]],performAction:function(t,i,e,a,n,r,s){var l=r.length-1;switch(n){case 13:this.$=r[l].trim(),a.setDiagramTitle(this.$);break;case 14:this.$=r[l].trim(),a.setAccTitle(this.$);break;case 15:case 16:this.$=r[l].trim(),a.setAccDescription(this.$);break;case 17:a.addSection(r[l].substr(8)),this.$=r[l].substr(8);break;case 19:a.addPoint(r[l-3],r[l-1],r[l]);break;case 20:a.setXAxisLeftText(r[l-2]),a.setXAxisRightText(r[l]);break;case 21:r[l-1].text+=" ⟶ ",a.setXAxisLeftText(r[l-1]);break;case 22:a.setXAxisLeftText(r[l]);break;case 23:a.setYAxisBottomText(r[l-2]),a.setYAxisTopText(r[l]);break;case 24:r[l-1].text+=" ⟶ ",a.setYAxisBottomText(r[l-1]);break;case 25:a.setYAxisBottomText(r[l]);break;case 26:a.setQuadrant1Text(r[l]);break;case 27:a.setQuadrant2Text(r[l]);break;case 28:a.setQuadrant3Text(r[l]);break;case 29:a.setQuadrant4Text(r[l]);break;case 35:a.parseDirective("%%{","open_directive");break;case 36:a.parseDirective(r[l],"type_directive");break;case 37:r[l]=r[l].trim().replace(/'/g,'"'),a.parseDirective(r[l],"arg_directive");break;case 38:a.parseDirective("}%%","close_directive","quadrantChart");break;case 39:case 41:this.$={text:r[l],type:"text"};break;case 40:this.$={text:r[l-1].text+""+r[l],type:r[l-1].type};break;case 42:this.$={text:r[l],type:"markdown"};break;case 43:this.$=r[l];break;case 44:this.$=r[l-1]+""+r[l]}},table:[{3:1,4:2,5:i,6:4,7:e,33:9,38:a,39:n,40:r,41:s},{1:[3]},{3:11,4:2,5:i,6:4,7:e,33:9,38:a,39:n,40:r,41:s},{3:12,4:2,5:i,6:4,7:e,33:9,38:a,39:n,40:r,41:s},{3:13,4:2,5:i,6:4,7:e,33:9,38:a,39:n,40:r,41:s},t(l,[2,5],{8:14}),t(o,[2,32]),t(o,[2,33]),t(o,[2,34]),{34:15,42:[1,16]},{42:[2,35]},{1:[2,1]},{1:[2,2]},{1:[2,3]},t(h,c,{33:9,9:17,10:18,11:20,12:21,13:22,6:28,22:35,45:36,1:[2,4],5:d,14:u,16:x,18:g,20:f,21:y,26:p,28:q,29:T,30:_,31:m,32:A,41:s,47:b,48:S,50:v,51:k,52:F,53:P,54:C,55:E,56:L,57:D,58:z,59:I,60:B}),{35:50,36:[1,51],44:w},t([36,44],[2,36]),t(l,[2,6]),{4:53,38:a,39:n,40:r},t(h,c,{33:9,11:20,12:21,13:22,6:28,22:35,45:36,10:54,5:d,14:u,16:x,18:g,20:f,21:y,26:p,28:q,29:T,30:_,31:m,32:A,41:s,47:b,48:S,50:v,51:k,52:F,53:P,54:C,55:E,56:L,57:D,58:z,59:I,60:B}),t(h,[2,10]),t(h,[2,11]),t(h,[2,12]),{15:[1,55]},{17:[1,56]},{19:[1,57]},t(h,[2,16]),t(h,[2,17]),t(h,[2,18]),{22:58,45:36,47:b,48:S,50:v,51:k,52:F,53:P,54:C,55:E,56:L,57:D,58:z,59:I,60:B},{22:59,45:36,47:b,48:S,50:v,51:k,52:F,53:P,54:C,55:E,56:L,57:D,58:z,59:I,60:B},{22:60,45:36,47:b,48:S,50:v,51:k,52:F,53:P,54:C,55:E,56:L,57:D,58:z,59:I,60:B},{22:61,45:36,47:b,48:S,50:v,51:k,52:F,53:P,54:C,55:E,56:L,57:D,58:z,59:I,60:B},{22:62,45:36,47:b,48:S,50:v,51:k,52:F,53:P,54:C,55:E,56:L,57:D,58:z,59:I,60:B},{22:63,45:36,47:b,48:S,50:v,51:k,52:F,53:P,54:C,55:E,56:L,57:D,58:z,59:I,60:B},{5:R,23:[1,64],45:66,46:65,50:v,51:k,52:F,53:P,54:C,55:E,56:L,57:D,58:z,59:I,60:B,61:W},t(N,[2,39]),t(N,[2,41]),t(N,[2,42]),t(N,[2,45]),t(N,[2,46]),t(N,[2,47]),t(N,[2,48]),t(N,[2,49]),t(N,[2,50]),t(N,[2,51]),t(N,[2,52]),t(N,[2,53]),t(N,[2,54]),t(N,[2,55]),t(U,[2,30]),{37:69,43:[1,70]},t(U,[2,38]),t(l,[2,7]),t(h,[2,9]),t(h,[2,13]),t(h,[2,14]),t(h,[2,15]),t(h,[2,22],{46:65,45:66,5:R,27:[1,71],50:v,51:k,52:F,53:P,54:C,55:E,56:L,57:D,58:z,59:I,60:B,61:W}),t(h,[2,25],{46:65,45:66,5:R,27:[1,72],50:v,51:k,52:F,53:P,54:C,55:E,56:L,57:D,58:z,59:I,60:B,61:W}),t(h,[2,26],{46:65,45:66,5:R,50:v,51:k,52:F,53:P,54:C,55:E,56:L,57:D,58:z,59:I,60:B,61:W}),t(h,[2,27],{46:65,45:66,5:R,50:v,51:k,52:F,53:P,54:C,55:E,56:L,57:D,58:z,59:I,60:B,61:W}),t(h,[2,28],{46:65,45:66,5:R,50:v,51:k,52:F,53:P,54:C,55:E,56:L,57:D,58:z,59:I,60:B,61:W}),t(h,[2,29],{46:65,45:66,5:R,50:v,51:k,52:F,53:P,54:C,55:E,56:L,57:D,58:z,59:I,60:B,61:W}),{24:[1,73]},t(N,[2,40]),t(N,[2,56]),t(N,[2,57]),t(N,[2,58]),{35:74,44:w},{44:[2,37]},t(h,[2,21],{45:36,22:75,47:b,48:S,50:v,51:k,52:F,53:P,54:C,55:E,56:L,57:D,58:z,59:I,60:B}),t(h,[2,24],{45:36,22:76,47:b,48:S,50:v,51:k,52:F,53:P,54:C,55:E,56:L,57:D,58:z,59:I,60:B}),{25:[1,77]},t(U,[2,31]),t(h,[2,20],{46:65,45:66,5:R,50:v,51:k,52:F,53:P,54:C,55:E,56:L,57:D,58:z,59:I,60:B,61:W}),t(h,[2,23],{46:65,45:66,5:R,50:v,51:k,52:F,53:P,54:C,55:E,56:L,57:D,58:z,59:I,60:B,61:W}),t(h,[2,19])],defaultActions:{10:[2,35],11:[2,1],12:[2,2],13:[2,3],70:[2,37]},parseError:function(t,i){if(!i.recoverable){var e=new Error(t);throw e.hash=i,e}this.trace(t)},parse:function(t){var i=[0],e=[],a=[null],n=[],r=this.table,s="",l=0,o=0,h=n.slice.call(arguments,1),c=Object.create(this.lexer),d={yy:{}};for(var u in this.yy)Object.prototype.hasOwnProperty.call(this.yy,u)&&(d.yy[u]=this.yy[u]);c.setInput(t,d.yy),d.yy.lexer=c,d.yy.parser=this,void 0===c.yylloc&&(c.yylloc={});var x=c.yylloc;n.push(x);var g=c.options&&c.options.ranges;"function"==typeof d.yy.parseError?this.parseError=d.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var f,y,p,q,T,_,m,A,b,S={};;){if(y=i[i.length-1],this.defaultActions[y]?p=this.defaultActions[y]:(null==f&&(b=void 0,"number"!=typeof(b=e.pop()||c.lex()||1)&&(b instanceof Array&&(b=(e=b).pop()),b=this.symbols_[b]||b),f=b),p=r[y]&&r[y][f]),void 0===p||!p.length||!p[0]){var v;for(T in A=[],r[y])this.terminals_[T]&&T>2&&A.push("'"+this.terminals_[T]+"'");v=c.showPosition?"Parse error on line "+(l+1)+":\n"+c.showPosition()+"\nExpecting "+A.join(", ")+", got '"+(this.terminals_[f]||f)+"'":"Parse error on line "+(l+1)+": Unexpected "+(1==f?"end of input":"'"+(this.terminals_[f]||f)+"'"),this.parseError(v,{text:c.match,token:this.terminals_[f]||f,line:c.yylineno,loc:x,expected:A})}if(p[0]instanceof Array&&p.length>1)throw new Error("Parse Error: multiple actions possible at state: "+y+", token: "+f);switch(p[0]){case 1:i.push(f),a.push(c.yytext),n.push(c.yylloc),i.push(p[1]),f=null,o=c.yyleng,s=c.yytext,l=c.yylineno,x=c.yylloc;break;case 2:if(_=this.productions_[p[1]][1],S.$=a[a.length-_],S._$={first_line:n[n.length-(_||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(_||1)].first_column,last_column:n[n.length-1].last_column},g&&(S._$.range=[n[n.length-(_||1)].range[0],n[n.length-1].range[1]]),void 0!==(q=this.performAction.apply(S,[s,o,l,d.yy,p[1],a,n].concat(h))))return q;_&&(i=i.slice(0,-1*_*2),a=a.slice(0,-1*_),n=n.slice(0,-1*_)),i.push(this.productions_[p[1]][0]),a.push(S.$),n.push(S._$),m=r[i[i.length-2]][i[i.length-1]],i.push(m);break;case 3:return!0}}return!0}},H={EOF:1,parseError:function(t,i){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,i)},setInput:function(t,i){return this.yy=i||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var i=t.length,e=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-i),this.offset-=i;var a=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),e.length-1&&(this.yylineno-=e.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:e?(e.length===a.length?this.yylloc.first_column:0)+a[a.length-e.length].length-e[0].length:this.yylloc.first_column-i},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-i]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),i=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+i+"^"},test_match:function(t,i){var e,a,n;if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),(a=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=a.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:a?a[a.length-1].length-a[a.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],e=this.performAction.call(this,this.yy,this,i,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),e)return e;if(this._backtrack){for(var r in n)this[r]=n[r];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,i,e,a;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var n=this._currentRules(),r=0;r<n.length;r++)if((e=this._input.match(this.rules[n[r]]))&&(!i||e[0].length>i[0].length)){if(i=e,a=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(e,n[r])))return t;if(this._backtrack){i=!1;continue}return!1}if(!this.options.flex)break}return i?!1!==(t=this.test_match(i,n[a]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,i,e,a){switch(e){case 0:return this.begin("open_directive"),41;case 1:return this.begin("type_directive"),42;case 2:return this.popState(),this.begin("arg_directive"),36;case 3:return this.popState(),this.popState(),44;case 4:return 43;case 5:case 6:case 8:break;case 7:return 38;case 9:return this.begin("title"),14;case 10:return this.popState(),"title_value";case 11:return this.begin("acc_title"),16;case 12:return this.popState(),"acc_title_value";case 13:return this.begin("acc_descr"),18;case 14:return this.popState(),"acc_descr_value";case 15:this.begin("acc_descr_multiline");break;case 16:case 27:case 29:case 33:this.popState();break;case 17:return"acc_descr_multiline_value";case 18:return 26;case 19:return 28;case 20:return 27;case 21:return 29;case 22:return 30;case 23:return 31;case 24:return 32;case 25:this.begin("md_string");break;case 26:return"MD_STR";case 28:this.begin("string");break;case 30:return"STR";case 31:return this.begin("point_start"),23;case 32:return this.begin("point_x"),24;case 34:this.popState(),this.begin("point_y");break;case 35:return this.popState(),25;case 36:return 7;case 37:return 53;case 38:return"COLON";case 39:return 55;case 40:return 54;case 41:case 42:return 56;case 43:return 57;case 44:return 59;case 45:return 60;case 46:return 58;case 47:return 51;case 48:return 61;case 49:return 52;case 50:return 5;case 51:return 39;case 52:return 50;case 53:return 40}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:title\b)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?: *x-axis *)/i,/^(?: *y-axis *)/i,/^(?: *--+> *)/i,/^(?: *quadrant-1 *)/i,/^(?: *quadrant-2 *)/i,/^(?: *quadrant-3 *)/i,/^(?: *quadrant-4 *)/i,/^(?:["][`])/i,/^(?:[^`"]+)/i,/^(?:[`]["])/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:\s*:\s*\[\s*)/i,/^(?:(1)|(0(.\d+)?))/i,/^(?:\s*\] *)/i,/^(?:\s*,\s*)/i,/^(?:(1)|(0(.\d+)?))/i,/^(?: *quadrantChart *)/i,/^(?:[A-Za-z]+)/i,/^(?::)/i,/^(?:\+)/i,/^(?:,)/i,/^(?:=)/i,/^(?:=)/i,/^(?:\*)/i,/^(?:#)/i,/^(?:[\_])/i,/^(?:\.)/i,/^(?:&)/i,/^(?:-)/i,/^(?:[0-9]+)/i,/^(?:\s)/i,/^(?:;)/i,/^(?:[!"#$%&'*+,-.`?\\_/])/i,/^(?:$)/i],conditions:{point_y:{rules:[35],inclusive:!1},point_x:{rules:[34],inclusive:!1},point_start:{rules:[32,33],inclusive:!1},acc_descr_multiline:{rules:[16,17],inclusive:!1},acc_descr:{rules:[14],inclusive:!1},acc_title:{rules:[12],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},title:{rules:[10],inclusive:!1},md_string:{rules:[26,27],inclusive:!1},string:{rules:[29,30],inclusive:!1},INITIAL:{rules:[0,5,6,7,8,9,11,13,15,18,19,20,21,22,23,24,25,28,31,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53],inclusive:!0}}};function $(){this.yy={}}return Q.lexer=H,$.prototype=Q,Q.Parser=$,new $}());r.parser=r;const s=r,l=(0,a.D)(),o=(0,a.c)();function h(t){return(0,a.d)(t.trim(),o)}const c=new class{constructor(){this.config=this.getDefaultConfig(),this.themeConfig=this.getDefaultThemeConfig(),this.data=this.getDefaultData()}getDefaultData(){return{titleText:"",quadrant1Text:"",quadrant2Text:"",quadrant3Text:"",quadrant4Text:"",xAxisLeftText:"",xAxisRightText:"",yAxisBottomText:"",yAxisTopText:"",points:[]}}getDefaultConfig(){var t,i,e,n,r,s,l,o,h,c,d,u,x,g,f,y,p,q;return{showXAxis:!0,showYAxis:!0,showTitle:!0,chartHeight:(null==(t=a.E.quadrantChart)?void 0:t.chartWidth)||500,chartWidth:(null==(i=a.E.quadrantChart)?void 0:i.chartHeight)||500,titlePadding:(null==(e=a.E.quadrantChart)?void 0:e.titlePadding)||10,titleFontSize:(null==(n=a.E.quadrantChart)?void 0:n.titleFontSize)||20,quadrantPadding:(null==(r=a.E.quadrantChart)?void 0:r.quadrantPadding)||5,xAxisLabelPadding:(null==(s=a.E.quadrantChart)?void 0:s.xAxisLabelPadding)||5,yAxisLabelPadding:(null==(l=a.E.quadrantChart)?void 0:l.yAxisLabelPadding)||5,xAxisLabelFontSize:(null==(o=a.E.quadrantChart)?void 0:o.xAxisLabelFontSize)||16,yAxisLabelFontSize:(null==(h=a.E.quadrantChart)?void 0:h.yAxisLabelFontSize)||16,quadrantLabelFontSize:(null==(c=a.E.quadrantChart)?void 0:c.quadrantLabelFontSize)||16,quadrantTextTopPadding:(null==(d=a.E.quadrantChart)?void 0:d.quadrantTextTopPadding)||5,pointTextPadding:(null==(u=a.E.quadrantChart)?void 0:u.pointTextPadding)||5,pointLabelFontSize:(null==(x=a.E.quadrantChart)?void 0:x.pointLabelFontSize)||12,pointRadius:(null==(g=a.E.quadrantChart)?void 0:g.pointRadius)||5,xAxisPosition:(null==(f=a.E.quadrantChart)?void 0:f.xAxisPosition)||"top",yAxisPosition:(null==(y=a.E.quadrantChart)?void 0:y.yAxisPosition)||"left",quadrantInternalBorderStrokeWidth:(null==(p=a.E.quadrantChart)?void 0:p.quadrantInternalBorderStrokeWidth)||1,quadrantExternalBorderStrokeWidth:(null==(q=a.E.quadrantChart)?void 0:q.quadrantExternalBorderStrokeWidth)||2}}getDefaultThemeConfig(){return{quadrant1Fill:l.quadrant1Fill,quadrant2Fill:l.quadrant2Fill,quadrant3Fill:l.quadrant3Fill,quadrant4Fill:l.quadrant4Fill,quadrant1TextFill:l.quadrant1TextFill,quadrant2TextFill:l.quadrant2TextFill,quadrant3TextFill:l.quadrant3TextFill,quadrant4TextFill:l.quadrant4TextFill,quadrantPointFill:l.quadrantPointFill,quadrantPointTextFill:l.quadrantPointTextFill,quadrantXAxisTextFill:l.quadrantXAxisTextFill,quadrantYAxisTextFill:l.quadrantYAxisTextFill,quadrantTitleFill:l.quadrantTitleFill,quadrantInternalBorderStrokeFill:l.quadrantInternalBorderStrokeFill,quadrantExternalBorderStrokeFill:l.quadrantExternalBorderStrokeFill}}clear(){this.config=this.getDefaultConfig(),this.themeConfig=this.getDefaultThemeConfig(),this.data=this.getDefaultData(),a.l.info("clear called")}setData(t){this.data={...this.data,...t}}addPoints(t){this.data.points=[...t,...this.data.points]}setConfig(t){a.l.trace("setConfig called with: ",t),this.config={...this.config,...t}}setThemeConfig(t){a.l.trace("setThemeConfig called with: ",t),this.themeConfig={...this.themeConfig,...t}}calculateSpace(t,i,e,a){const n=2*this.config.xAxisLabelPadding+this.config.xAxisLabelFontSize,r={top:"top"===t&&i?n:0,bottom:"bottom"===t&&i?n:0},s=2*this.config.yAxisLabelPadding+this.config.yAxisLabelFontSize,l={left:"left"===this.config.yAxisPosition&&e?s:0,right:"right"===this.config.yAxisPosition&&e?s:0},o=this.config.titleFontSize+2*this.config.titlePadding,h={top:a?o:0},c=this.config.quadrantPadding+l.left,d=this.config.quadrantPadding+r.top+h.top,u=this.config.chartWidth-2*this.config.quadrantPadding-l.left-l.right,x=this.config.chartHeight-2*this.config.quadrantPadding-r.top-r.bottom-h.top;return{xAxisSpace:r,yAxisSpace:l,titleSpace:h,quadrantSpace:{quadrantLeft:c,quadrantTop:d,quadrantWidth:u,quadrantHalfWidth:u/2,quadrantHeight:x,quadrantHalfHeight:x/2}}}getAxisLabels(t,i,e,a){const{quadrantSpace:n,titleSpace:r}=a,{quadrantHalfHeight:s,quadrantHeight:l,quadrantLeft:o,quadrantHalfWidth:h,quadrantTop:c,quadrantWidth:d}=n,u=0===this.data.points.length,x=[];return this.data.xAxisLeftText&&i&&x.push({text:this.data.xAxisLeftText,fill:this.themeConfig.quadrantXAxisTextFill,x:o+(u?h/2:0),y:"top"===t?this.config.xAxisLabelPadding+r.top:this.config.xAxisLabelPadding+c+l+this.config.quadrantPadding,fontSize:this.config.xAxisLabelFontSize,verticalPos:u?"center":"left",horizontalPos:"top",rotation:0}),this.data.xAxisRightText&&i&&x.push({text:this.data.xAxisRightText,fill:this.themeConfig.quadrantXAxisTextFill,x:o+h+(u?h/2:0),y:"top"===t?this.config.xAxisLabelPadding+r.top:this.config.xAxisLabelPadding+c+l+this.config.quadrantPadding,fontSize:this.config.xAxisLabelFontSize,verticalPos:u?"center":"left",horizontalPos:"top",rotation:0}),this.data.yAxisBottomText&&e&&x.push({text:this.data.yAxisBottomText,fill:this.themeConfig.quadrantYAxisTextFill,x:"left"===this.config.yAxisPosition?this.config.yAxisLabelPadding:this.config.yAxisLabelPadding+o+d+this.config.quadrantPadding,y:c+l-(u?s/2:0),fontSize:this.config.yAxisLabelFontSize,verticalPos:u?"center":"left",horizontalPos:"top",rotation:-90}),this.data.yAxisTopText&&e&&x.push({text:this.data.yAxisTopText,fill:this.themeConfig.quadrantYAxisTextFill,x:"left"===this.config.yAxisPosition?this.config.yAxisLabelPadding:this.config.yAxisLabelPadding+o+d+this.config.quadrantPadding,y:c+s-(u?s/2:0),fontSize:this.config.yAxisLabelFontSize,verticalPos:u?"center":"left",horizontalPos:"top",rotation:-90}),x}getQuadrants(t){const{quadrantSpace:i}=t,{quadrantHalfHeight:e,quadrantLeft:a,quadrantHalfWidth:n,quadrantTop:r}=i,s=[{text:{text:this.data.quadrant1Text,fill:this.themeConfig.quadrant1TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:a+n,y:r,width:n,height:e,fill:this.themeConfig.quadrant1Fill},{text:{text:this.data.quadrant2Text,fill:this.themeConfig.quadrant2TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:a,y:r,width:n,height:e,fill:this.themeConfig.quadrant2Fill},{text:{text:this.data.quadrant3Text,fill:this.themeConfig.quadrant3TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:a,y:r+e,width:n,height:e,fill:this.themeConfig.quadrant3Fill},{text:{text:this.data.quadrant4Text,fill:this.themeConfig.quadrant4TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:a+n,y:r+e,width:n,height:e,fill:this.themeConfig.quadrant4Fill}];for(const t of s)t.text.x=t.x+t.width/2,0===this.data.points.length?(t.text.y=t.y+t.height/2,t.text.horizontalPos="middle"):(t.text.y=t.y+this.config.quadrantTextTopPadding,t.text.horizontalPos="top");return s}getQuadrantPoints(t){const{quadrantSpace:i}=t,{quadrantHeight:e,quadrantLeft:a,quadrantTop:r,quadrantWidth:s}=i,l=(0,n.BYU)().domain([0,1]).range([a,s+a]),o=(0,n.BYU)().domain([0,1]).range([e+r,r]);return this.data.points.map((t=>({x:l(t.x),y:o(t.y),fill:this.themeConfig.quadrantPointFill,radius:this.config.pointRadius,text:{text:t.text,fill:this.themeConfig.quadrantPointTextFill,x:l(t.x),y:o(t.y)+this.config.pointTextPadding,verticalPos:"center",horizontalPos:"top",fontSize:this.config.pointLabelFontSize,rotation:0}})))}getBorders(t){const i=this.config.quadrantExternalBorderStrokeWidth/2,{quadrantSpace:e}=t,{quadrantHalfHeight:a,quadrantHeight:n,quadrantLeft:r,quadrantHalfWidth:s,quadrantTop:l,quadrantWidth:o}=e;return[{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:r-i,y1:l,x2:r+o+i,y2:l},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:r+o,y1:l+i,x2:r+o,y2:l+n-i},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:r-i,y1:l+n,x2:r+o+i,y2:l+n},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:r,y1:l+i,x2:r,y2:l+n-i},{strokeFill:this.themeConfig.quadrantInternalBorderStrokeFill,strokeWidth:this.config.quadrantInternalBorderStrokeWidth,x1:r+s,y1:l+i,x2:r+s,y2:l+n-i},{strokeFill:this.themeConfig.quadrantInternalBorderStrokeFill,strokeWidth:this.config.quadrantInternalBorderStrokeWidth,x1:r+i,y1:l+a,x2:r+o-i,y2:l+a}]}getTitle(t){if(t)return{text:this.data.titleText,fill:this.themeConfig.quadrantTitleFill,fontSize:this.config.titleFontSize,horizontalPos:"top",verticalPos:"center",rotation:0,y:this.config.titlePadding,x:this.config.chartWidth/2}}build(){const t=this.config.showXAxis&&!(!this.data.xAxisLeftText&&!this.data.xAxisRightText),i=this.config.showYAxis&&!(!this.data.yAxisTopText&&!this.data.yAxisBottomText),e=this.config.showTitle&&!!this.data.titleText,a=this.data.points.length>0?"bottom":this.config.xAxisPosition,n=this.calculateSpace(a,t,i,e);return{points:this.getQuadrantPoints(n),quadrants:this.getQuadrants(n),axisLabels:this.getAxisLabels(a,t,i,n),borderLines:this.getBorders(n),title:this.getTitle(e)}}},d={parser:s,db:{setWidth:function(t){c.setConfig({chartWidth:t})},setHeight:function(t){c.setConfig({chartHeight:t})},setQuadrant1Text:function(t){c.setData({quadrant1Text:h(t.text)})},setQuadrant2Text:function(t){c.setData({quadrant2Text:h(t.text)})},setQuadrant3Text:function(t){c.setData({quadrant3Text:h(t.text)})},setQuadrant4Text:function(t){c.setData({quadrant4Text:h(t.text)})},setXAxisLeftText:function(t){c.setData({xAxisLeftText:h(t.text)})},setXAxisRightText:function(t){c.setData({xAxisRightText:h(t.text)})},setYAxisTopText:function(t){c.setData({yAxisTopText:h(t.text)})},setYAxisBottomText:function(t){c.setData({yAxisBottomText:h(t.text)})},addPoint:function(t,i,e){c.addPoints([{x:i,y:e,text:h(t.text)}])},getQuadrantData:function(){const t=(0,a.c)(),{themeVariables:i,quadrantChart:e}=t;return e&&c.setConfig(e),c.setThemeConfig({quadrant1Fill:i.quadrant1Fill,quadrant2Fill:i.quadrant2Fill,quadrant3Fill:i.quadrant3Fill,quadrant4Fill:i.quadrant4Fill,quadrant1TextFill:i.quadrant1TextFill,quadrant2TextFill:i.quadrant2TextFill,quadrant3TextFill:i.quadrant3TextFill,quadrant4TextFill:i.quadrant4TextFill,quadrantPointFill:i.quadrantPointFill,quadrantPointTextFill:i.quadrantPointTextFill,quadrantXAxisTextFill:i.quadrantXAxisTextFill,quadrantYAxisTextFill:i.quadrantYAxisTextFill,quadrantExternalBorderStrokeFill:i.quadrantExternalBorderStrokeFill,quadrantInternalBorderStrokeFill:i.quadrantInternalBorderStrokeFill,quadrantTitleFill:i.quadrantTitleFill}),c.setData({titleText:(0,a.t)()}),c.build()},parseDirective:function(t,i,e){a.m.parseDirective(this,t,i,e)},clear:function(){c.clear(),(0,a.v)()},setAccTitle:a.s,getAccTitle:a.g,setDiagramTitle:a.r,getDiagramTitle:a.t,getAccDescription:a.a,setAccDescription:a.b},renderer:{draw:(t,i,e,r)=>{var s,l,o;function h(t){return"top"===t?"hanging":"middle"}function c(t){return"left"===t?"start":"middle"}function d(t){return`translate(${t.x}, ${t.y}) rotate(${t.rotation||0})`}const u=(0,a.c)();a.l.debug("Rendering quadrant chart\n"+t);const x=u.securityLevel;let g;"sandbox"===x&&(g=(0,n.Ys)("#i"+i));const f=("sandbox"===x?(0,n.Ys)(g.nodes()[0].contentDocument.body):(0,n.Ys)("body")).select(`[id="${i}"]`),y=f.append("g").attr("class","main"),p=(null==(s=u.quadrantChart)?void 0:s.chartWidth)||500,q=(null==(l=u.quadrantChart)?void 0:l.chartHeight)||500;(0,a.i)(f,q,p,(null==(o=u.quadrantChart)?void 0:o.useMaxWidth)||!0),f.attr("viewBox","0 0 "+p+" "+q),r.db.setHeight(q),r.db.setWidth(p);const T=r.db.getQuadrantData(),_=y.append("g").attr("class","quadrants"),m=y.append("g").attr("class","border"),A=y.append("g").attr("class","data-points"),b=y.append("g").attr("class","labels"),S=y.append("g").attr("class","title");T.title&&S.append("text").attr("x",0).attr("y",0).attr("fill",T.title.fill).attr("font-size",T.title.fontSize).attr("dominant-baseline",h(T.title.horizontalPos)).attr("text-anchor",c(T.title.verticalPos)).attr("transform",d(T.title)).text(T.title.text),T.borderLines&&m.selectAll("line").data(T.borderLines).enter().append("line").attr("x1",(t=>t.x1)).attr("y1",(t=>t.y1)).attr("x2",(t=>t.x2)).attr("y2",(t=>t.y2)).style("stroke",(t=>t.strokeFill)).style("stroke-width",(t=>t.strokeWidth));const v=_.selectAll("g.quadrant").data(T.quadrants).enter().append("g").attr("class","quadrant");v.append("rect").attr("x",(t=>t.x)).attr("y",(t=>t.y)).attr("width",(t=>t.width)).attr("height",(t=>t.height)).attr("fill",(t=>t.fill)),v.append("text").attr("x",0).attr("y",0).attr("fill",(t=>t.text.fill)).attr("font-size",(t=>t.text.fontSize)).attr("dominant-baseline",(t=>h(t.text.horizontalPos))).attr("text-anchor",(t=>c(t.text.verticalPos))).attr("transform",(t=>d(t.text))).text((t=>t.text.text)),b.selectAll("g.label").data(T.axisLabels).enter().append("g").attr("class","label").append("text").attr("x",0).attr("y",0).text((t=>t.text)).attr("fill",(t=>t.fill)).attr("font-size",(t=>t.fontSize)).attr("dominant-baseline",(t=>h(t.horizontalPos))).attr("text-anchor",(t=>c(t.verticalPos))).attr("transform",(t=>d(t)));const k=A.selectAll("g.data-point").data(T.points).enter().append("g").attr("class","data-point");k.append("circle").attr("cx",(t=>t.x)).attr("cy",(t=>t.y)).attr("r",(t=>t.radius)).attr("fill",(t=>t.fill)),k.append("text").attr("x",0).attr("y",0).text((t=>t.text.text)).attr("fill",(t=>t.text.fill)).attr("font-size",(t=>t.text.fontSize)).attr("dominant-baseline",(t=>h(t.text.horizontalPos))).attr("text-anchor",(t=>c(t.text.verticalPos))).attr("transform",(t=>d(t.text)))}},styles:()=>""}}}]);