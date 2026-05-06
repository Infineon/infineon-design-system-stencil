import{a as re,b as de,d as Hg,e as jg,f as Pn,g as ou,n as au}from"./chunk-P2F6QYGH.js";var Ng=Hg((gR,ra)=>{"use strict";var fy=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};var j=(function(n){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,e={},r={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function E(w){return w instanceof a?new a(w.type,E(w.content),w.alias):Array.isArray(w)?w.map(E):w.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(E){return Object.prototype.toString.call(E).slice(8,-1)},objId:function(E){return E.__id||Object.defineProperty(E,"__id",{value:++i}),E.__id},clone:function E(w,D){D=D||{};var M,A;switch(r.util.type(w)){case"Object":if(A=r.util.objId(w),D[A])return D[A];M={},D[A]=M;for(var $ in w)w.hasOwnProperty($)&&(M[$]=E(w[$],D));return M;case"Array":return A=r.util.objId(w),D[A]?D[A]:(M=[],D[A]=M,w.forEach(function(ie,U){M[U]=E(ie,D)}),M);default:return w}},getLanguage:function(E){for(;E;){var w=t.exec(E.className);if(w)return w[1].toLowerCase();E=E.parentElement}return"none"},setLanguage:function(E,w){E.className=E.className.replace(RegExp(t,"gi"),""),E.classList.add("language-"+w)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(M){var E=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(M.stack)||[])[1];if(E){var w=document.getElementsByTagName("script");for(var D in w)if(w[D].src==E)return w[D]}return null}},isActive:function(E,w,D){for(var M="no-"+w;E;){var A=E.classList;if(A.contains(w))return!0;if(A.contains(M))return!1;E=E.parentElement}return!!D}},languages:{plain:e,plaintext:e,text:e,txt:e,extend:function(E,w){var D=r.util.clone(r.languages[E]);for(var M in w)D[M]=w[M];return D},insertBefore:function(E,w,D,M){M=M||r.languages;var A=M[E],$={};for(var ie in A)if(A.hasOwnProperty(ie)){if(ie==w)for(var U in D)D.hasOwnProperty(U)&&($[U]=D[U]);D.hasOwnProperty(ie)||($[ie]=A[ie])}var ue=M[E];return M[E]=$,r.languages.DFS(r.languages,function(ve,vt){vt===ue&&ve!=E&&(this[ve]=$)}),$},DFS:function E(w,D,M,A){A=A||{};var $=r.util.objId;for(var ie in w)if(w.hasOwnProperty(ie)){D.call(w,ie,w[ie],M||ie);var U=w[ie],ue=r.util.type(U);ue==="Object"&&!A[$(U)]?(A[$(U)]=!0,E(U,D,null,A)):ue==="Array"&&!A[$(U)]&&(A[$(U)]=!0,E(U,D,ie,A))}}},plugins:{},highlightAll:function(E,w){r.highlightAllUnder(document,E,w)},highlightAllUnder:function(E,w,D){var M={callback:D,container:E,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",M),M.elements=Array.prototype.slice.apply(M.container.querySelectorAll(M.selector)),r.hooks.run("before-all-elements-highlight",M);for(var A=0,$;$=M.elements[A++];)r.highlightElement($,w===!0,M.callback)},highlightElement:function(E,w,D){var M=r.util.getLanguage(E),A=r.languages[M];r.util.setLanguage(E,M);var $=E.parentElement;$&&$.nodeName.toLowerCase()==="pre"&&r.util.setLanguage($,M);var ie=E.textContent,U={element:E,language:M,grammar:A,code:ie};function ue(vt){U.highlightedCode=vt,r.hooks.run("before-insert",U),U.element.innerHTML=U.highlightedCode,r.hooks.run("after-highlight",U),r.hooks.run("complete",U),D&&D.call(U.element)}if(r.hooks.run("before-sanity-check",U),$=U.element.parentElement,$&&$.nodeName.toLowerCase()==="pre"&&!$.hasAttribute("tabindex")&&$.setAttribute("tabindex","0"),!U.code){r.hooks.run("complete",U),D&&D.call(U.element);return}if(r.hooks.run("before-highlight",U),!U.grammar){ue(r.util.encode(U.code));return}if(w&&n.Worker){var ve=new Worker(r.filename);ve.onmessage=function(vt){ue(vt.data)},ve.postMessage(JSON.stringify({language:U.language,code:U.code,immediateClose:!0}))}else ue(r.highlight(U.code,U.grammar,U.language))},highlight:function(E,w,D){var M={code:E,grammar:w,language:D};if(r.hooks.run("before-tokenize",M),!M.grammar)throw new Error('The language "'+M.language+'" has no grammar.');return M.tokens=r.tokenize(M.code,M.grammar),r.hooks.run("after-tokenize",M),a.stringify(r.util.encode(M.tokens),M.language)},tokenize:function(E,w){var D=w.rest;if(D){for(var M in D)w[M]=D[M];delete w.rest}var A=new f;return g(A,A.head,E),u(E,A,w,A.head,0),I(A)},hooks:{all:{},add:function(E,w){var D=r.hooks.all;D[E]=D[E]||[],D[E].push(w)},run:function(E,w){var D=r.hooks.all[E];if(!(!D||!D.length))for(var M=0,A;A=D[M++];)A(w)}},Token:a};n.Prism=r;function a(E,w,D,M){this.type=E,this.content=w,this.alias=D,this.length=(M||"").length|0}a.stringify=function E(w,D){if(typeof w=="string")return w;if(Array.isArray(w)){var M="";return w.forEach(function(ue){M+=E(ue,D)}),M}var A={type:w.type,content:E(w.content,D),tag:"span",classes:["token",w.type],attributes:{},language:D},$=w.alias;$&&(Array.isArray($)?Array.prototype.push.apply(A.classes,$):A.classes.push($)),r.hooks.run("wrap",A);var ie="";for(var U in A.attributes)ie+=" "+U+'="'+(A.attributes[U]||"").replace(/"/g,"&quot;")+'"';return"<"+A.tag+' class="'+A.classes.join(" ")+'"'+ie+">"+A.content+"</"+A.tag+">"};function c(E,w,D,M){E.lastIndex=w;var A=E.exec(D);if(A&&M&&A[1]){var $=A[1].length;A.index+=$,A[0]=A[0].slice($)}return A}function u(E,w,D,M,A,$){for(var ie in D)if(!(!D.hasOwnProperty(ie)||!D[ie])){var U=D[ie];U=Array.isArray(U)?U:[U];for(var ue=0;ue<U.length;++ue){if($&&$.cause==ie+","+ue)return;var ve=U[ue],vt=ve.inside,tu=!!ve.lookbehind,nu=!!ve.greedy,Rg=ve.alias;if(nu&&!ve.pattern.global){var Pg=ve.pattern.toString().match(/[imsuy]*$/)[0];ve.pattern=RegExp(ve.pattern.source,Pg+"g")}for(var iu=ve.pattern||ve,xe=M.next,Je=A;xe!==w.tail&&!($&&Je>=$.reach);Je+=xe.value.length,xe=xe.next){var sn=xe.value;if(w.length>E.length)return;if(!(sn instanceof a)){var Bi=1,He;if(nu){if(He=c(iu,Je,E,tu),!He||He.index>=E.length)break;var zi=He.index,Vg=He.index+He[0].length,xt=Je;for(xt+=xe.value.length;zi>=xt;)xe=xe.next,xt+=xe.value.length;if(xt-=xe.value.length,Je=xt,xe.value instanceof a)continue;for(var Rn=xe;Rn!==w.tail&&(xt<Vg||typeof Rn.value=="string");Rn=Rn.next)Bi++,xt+=Rn.value.length;Bi--,sn=E.slice(Je,xt),He.index-=Je}else if(He=c(iu,0,sn,tu),!He)continue;var zi=He.index,Ui=He[0],Za=sn.slice(0,zi),ru=sn.slice(zi+Ui.length),Ja=Je+sn.length;$&&Ja>$.reach&&($.reach=Ja);var $i=xe.prev;Za&&($i=g(w,$i,Za),Je+=Za.length),v(w,$i,Bi);var qg=new a(ie,vt?r.tokenize(Ui,vt):Ui,Rg,Ui);if(xe=g(w,$i,qg),ru&&g(w,xe,ru),Bi>1){var Ya={cause:ie+","+ue,reach:Ja};u(E,w,D,xe.prev,Je,Ya),$&&Ya.reach>$.reach&&($.reach=Ya.reach)}}}}}}function f(){var E={value:null,prev:null,next:null},w={value:null,prev:E,next:null};E.next=w,this.head=E,this.tail=w,this.length=0}function g(E,w,D){var M=w.next,A={value:D,prev:w,next:M};return w.next=A,M.prev=A,E.length++,A}function v(E,w,D){for(var M=w.next,A=0;A<D&&M!==E.tail;A++)M=M.next;w.next=M,M.prev=w,E.length-=A}function I(E){for(var w=[],D=E.head.next;D!==E.tail;)w.push(D.value),D=D.next;return w}if(!n.document)return n.addEventListener&&(r.disableWorkerMessageHandler||n.addEventListener("message",function(E){var w=JSON.parse(E.data),D=w.language,M=w.code,A=w.immediateClose;n.postMessage(r.highlight(M,r.languages[D],D)),A&&n.close()},!1)),r;var S=r.util.currentScript();S&&(r.filename=S.src,S.hasAttribute("data-manual")&&(r.manual=!0));function y(){r.manual||r.highlightAll()}if(!r.manual){var L=document.readyState;L==="loading"||L==="interactive"&&S&&S.defer?document.addEventListener("DOMContentLoaded",y):window.requestAnimationFrame?window.requestAnimationFrame(y):window.setTimeout(y,16)}return r})(fy);typeof ra<"u"&&ra.exports&&(ra.exports=j);typeof global<"u"&&(global.Prism=j);j.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};j.languages.markup.tag.inside["attr-value"].inside.entity=j.languages.markup.entity;j.languages.markup.doctype.inside["internal-subset"].inside=j.languages.markup;j.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))});Object.defineProperty(j.languages.markup.tag,"addInlined",{value:function(t,i){var e={};e["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:j.languages[i]},e.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:e}};r["language-"+i]={pattern:/[\s\S]+/,inside:j.languages[i]};var a={};a[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:r},j.languages.insertBefore("markup","cdata",a)}});Object.defineProperty(j.languages.markup.tag,"addAttribute",{value:function(n,t){j.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:j.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});j.languages.html=j.languages.markup;j.languages.mathml=j.languages.markup;j.languages.svg=j.languages.markup;j.languages.xml=j.languages.extend("markup",{});j.languages.ssml=j.languages.xml;j.languages.atom=j.languages.xml;j.languages.rss=j.languages.xml;(function(n){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var i=n.languages.markup;i&&(i.tag.addInlined("style","css"),i.tag.addAttribute("style","css"))})(j);j.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};j.languages.javascript=j.languages.extend("clike",{"class-name":[j.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});j.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;j.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:j.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:j.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:j.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:j.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:j.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});j.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:j.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});j.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});j.languages.markup&&(j.languages.markup.tag.addInlined("script","javascript"),j.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));j.languages.js=j.languages.javascript;(function(){if(typeof j>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var n="Loading\u2026",t=function(S,y){return"\u2716 Error "+S+" while fetching file: "+y},i="\u2716 Error: File does not exist or is empty",e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},r="data-src-status",a="loading",c="loaded",u="failed",f="pre[data-src]:not(["+r+'="'+c+'"]):not(['+r+'="'+a+'"])';function g(S,y,L){var E=new XMLHttpRequest;E.open("GET",S,!0),E.onreadystatechange=function(){E.readyState==4&&(E.status<400&&E.responseText?y(E.responseText):E.status>=400?L(t(E.status,E.statusText)):L(i))},E.send(null)}function v(S){var y=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(S||"");if(y){var L=Number(y[1]),E=y[2],w=y[3];return E?w?[L,Number(w)]:[L,void 0]:[L,L]}}j.hooks.add("before-highlightall",function(S){S.selector+=", "+f}),j.hooks.add("before-sanity-check",function(S){var y=S.element;if(y.matches(f)){S.code="",y.setAttribute(r,a);var L=y.appendChild(document.createElement("CODE"));L.textContent=n;var E=y.getAttribute("data-src"),w=S.language;if(w==="none"){var D=(/\.(\w+)$/.exec(E)||[,"none"])[1];w=e[D]||D}j.util.setLanguage(L,w),j.util.setLanguage(y,w);var M=j.plugins.autoloader;M&&M.loadLanguages(w),g(E,function(A){y.setAttribute(r,c);var $=v(y.getAttribute("data-range"));if($){var ie=A.split(/\r\n?|\n/g),U=$[0],ue=$[1]==null?ie.length:$[1];U<0&&(U+=ie.length),U=Math.max(0,Math.min(U-1,ie.length)),ue<0&&(ue+=ie.length),ue=Math.max(0,Math.min(ue,ie.length)),A=ie.slice(U,ue).join(`
`),y.hasAttribute("data-start")||y.setAttribute("data-start",String(U+1))}L.textContent=A,j.highlightElement(L)},function(A){y.setAttribute(r,u),L.textContent=A})}}),j.plugins.fileHighlight={highlight:function(y){for(var L=(y||document).querySelectorAll(f),E=0,w;w=L[E++];)j.highlightElement(w)}};var I=!1;j.fileHighlight=function(){I||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),I=!0),j.plugins.fileHighlight.highlight.apply(this,arguments)}})()});var Xa;function Gi(){return Xa}function Ye(n){let t=Xa;return Xa=n,t}var su=Symbol("NotFound");function ln(n){return n===su||n?.name==="\u0275NotFound"}var be=null,Wi=!1,Qa=1,Bg=null,Se=Symbol("SIGNAL");function Z(n){let t=be;return be=n,t}function Xi(){return be}var dn={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Qi(n){if(Wi)throw new Error("");if(be===null)return;be.consumerOnSignalRead(n);let t=be.producersTail;if(t!==void 0&&t.producer===n)return;let i,e=be.recomputing;if(e&&(i=t!==void 0?t.nextProducer:be.producers,i!==void 0&&i.producer===n)){be.producersTail=i,i.lastReadVersion=n.version;return}let r=n.consumersTail;if(r!==void 0&&r.consumer===be&&(!e||Ug(r,be)))return;let a=cn(be),c={producer:n,consumer:be,nextProducer:i,prevConsumer:r,lastReadVersion:n.version,nextConsumer:void 0};be.producersTail=c,t!==void 0?t.nextProducer=c:be.producers=c,a&&uu(n,c)}function lu(){Qa++}function Ki(n){if(!(cn(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Qa)){if(!n.producerMustRecompute(n)&&!tr(n)){Yi(n);return}n.producerRecomputeValue(n),Yi(n)}}function Ka(n){if(n.consumers===void 0)return;let t=Wi;Wi=!0;try{for(let i=n.consumers;i!==void 0;i=i.nextConsumer){let e=i.consumer;e.dirty||zg(e)}}finally{Wi=t}}function es(){return be?.consumerAllowSignalWrites!==!1}function zg(n){n.dirty=!0,Ka(n),n.consumerMarkedDirty?.(n)}function Yi(n){n.dirty=!1,n.lastCleanEpoch=Qa}function qn(n){return n&&du(n),Z(n)}function du(n){n.producersTail=void 0,n.recomputing=!0}function er(n,t){Z(t),n&&cu(n)}function cu(n){n.recomputing=!1;let t=n.producersTail,i=t!==void 0?t.nextProducer:n.producers;if(i!==void 0){if(cn(n))do i=ts(i);while(i!==void 0);t!==void 0?t.nextProducer=void 0:n.producers=void 0}}function tr(n){for(let t=n.producers;t!==void 0;t=t.nextProducer){let i=t.producer,e=t.lastReadVersion;if(e!==i.version||(Ki(i),e!==i.version))return!0}return!1}function nr(n){if(cn(n)){let t=n.producers;for(;t!==void 0;)t=ts(t)}n.producers=void 0,n.producersTail=void 0,n.consumers=void 0,n.consumersTail=void 0}function uu(n,t){let i=n.consumersTail,e=cn(n);if(i!==void 0?(t.nextConsumer=i.nextConsumer,i.nextConsumer=t):(t.nextConsumer=void 0,n.consumers=t),t.prevConsumer=i,n.consumersTail=t,!e)for(let r=n.producers;r!==void 0;r=r.nextProducer)uu(r.producer,r)}function ts(n){let t=n.producer,i=n.nextProducer,e=n.nextConsumer,r=n.prevConsumer;if(n.nextConsumer=void 0,n.prevConsumer=void 0,e!==void 0?e.prevConsumer=r:t.consumersTail=r,r!==void 0)r.nextConsumer=e;else if(t.consumers=e,!cn(t)){let a=t.producers;for(;a!==void 0;)a=ts(a)}return i}function cn(n){return n.consumerIsAlwaysLive||n.consumers!==void 0}function ir(n){Bg?.(n)}function Ug(n,t){let i=t.producersTail;if(i!==void 0){let e=t.producers;do{if(e===n)return!0;if(e===i)break;e=e.nextProducer}while(e!==void 0)}return!1}function rr(n,t){return Object.is(n,t)}function or(n,t){let i=Object.create($g);i.computation=n,t!==void 0&&(i.equal=t);let e=()=>{if(Ki(i),Qi(i),i.value===Vn)throw i.error;return i.value};return e[Se]=i,ir(i),e}var Zi=Symbol("UNSET"),Ji=Symbol("COMPUTING"),Vn=Symbol("ERRORED"),$g=de(re({},dn),{value:Zi,dirty:!0,error:null,equal:rr,kind:"computed",producerMustRecompute(n){return n.value===Zi||n.value===Ji},producerRecomputeValue(n){if(n.value===Ji)throw new Error("");let t=n.value;n.value=Ji;let i=qn(n),e,r=!1;try{e=n.computation(),Z(null),r=t!==Zi&&t!==Vn&&e!==Vn&&n.equal(t,e)}catch(a){e=Vn,n.error=a}finally{er(n,i)}if(r){n.value=t;return}n.value=e,n.version++}});function Gg(){throw new Error}var pu=Gg;function fu(n){pu(n)}function ns(n){pu=n}var Wg=null;function is(n,t){let i=Object.create(hu);i.value=n,t!==void 0&&(i.equal=t);let e=()=>mu(i);return e[Se]=i,ir(i),[e,c=>ar(i,c),c=>rs(i,c)]}function mu(n){return Qi(n),n.value}function ar(n,t){es()||fu(n),n.equal(n.value,t)||(n.value=t,Zg(n))}function rs(n,t){es()||fu(n),ar(n,t(n.value))}var hu=de(re({},dn),{equal:rr,value:void 0,kind:"signal"});function Zg(n){n.version++,lu(),Ka(n),Wg?.(n)}function oe(n){return typeof n=="function"}function sr(n){let i=n(e=>{Error.call(e),e.stack=new Error().stack});return i.prototype=Object.create(Error.prototype),i.prototype.constructor=i,i}var lr=sr(n=>function(i){n(this),this.message=i?`${i.length} errors occurred during unsubscription:
${i.map((e,r)=>`${r+1}) ${e.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=i});function Hn(n,t){if(n){let i=n.indexOf(t);0<=i&&n.splice(i,1)}}var Ie=class n{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let t;if(!this.closed){this.closed=!0;let{_parentage:i}=this;if(i)if(this._parentage=null,Array.isArray(i))for(let a of i)a.remove(this);else i.remove(this);let{initialTeardown:e}=this;if(oe(e))try{e()}catch(a){t=a instanceof lr?a.errors:[a]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let a of r)try{gu(a)}catch(c){t=t??[],c instanceof lr?t=[...t,...c.errors]:t.push(c)}}if(t)throw new lr(t)}}add(t){var i;if(t&&t!==this)if(this.closed)gu(t);else{if(t instanceof n){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(i=this._finalizers)!==null&&i!==void 0?i:[]).push(t)}}_hasParent(t){let{_parentage:i}=this;return i===t||Array.isArray(i)&&i.includes(t)}_addParent(t){let{_parentage:i}=this;this._parentage=Array.isArray(i)?(i.push(t),i):i?[i,t]:t}_removeParent(t){let{_parentage:i}=this;i===t?this._parentage=null:Array.isArray(i)&&Hn(i,t)}remove(t){let{_finalizers:i}=this;i&&Hn(i,t),t instanceof n&&t._removeParent(this)}};Ie.EMPTY=(()=>{let n=new Ie;return n.closed=!0,n})();var os=Ie.EMPTY;function dr(n){return n instanceof Ie||n&&"closed"in n&&oe(n.remove)&&oe(n.add)&&oe(n.unsubscribe)}function gu(n){oe(n)?n():n.unsubscribe()}var je={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var un={setTimeout(n,t,...i){let{delegate:e}=un;return e?.setTimeout?e.setTimeout(n,t,...i):setTimeout(n,t,...i)},clearTimeout(n){let{delegate:t}=un;return(t?.clearTimeout||clearTimeout)(n)},delegate:void 0};function cr(n){un.setTimeout(()=>{let{onUnhandledError:t}=je;if(t)t(n);else throw n})}function as(){}var vu=ss("C",void 0,void 0);function xu(n){return ss("E",void 0,n)}function bu(n){return ss("N",n,void 0)}function ss(n,t,i){return{kind:n,value:t,error:i}}var Nt=null;function pn(n){if(je.useDeprecatedSynchronousErrorHandling){let t=!Nt;if(t&&(Nt={errorThrown:!1,error:null}),n(),t){let{errorThrown:i,error:e}=Nt;if(Nt=null,i)throw e}}else n()}function yu(n){je.useDeprecatedSynchronousErrorHandling&&Nt&&(Nt.errorThrown=!0,Nt.error=n)}var Ft=class extends Ie{constructor(t){super(),this.isStopped=!1,t?(this.destination=t,dr(t)&&t.add(this)):this.destination=Xg}static create(t,i,e){return new fn(t,i,e)}next(t){this.isStopped?ds(bu(t),this):this._next(t)}error(t){this.isStopped?ds(xu(t),this):(this.isStopped=!0,this._error(t))}complete(){this.isStopped?ds(vu,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},Jg=Function.prototype.bind;function ls(n,t){return Jg.call(n,t)}var cs=class{constructor(t){this.partialObserver=t}next(t){let{partialObserver:i}=this;if(i.next)try{i.next(t)}catch(e){ur(e)}}error(t){let{partialObserver:i}=this;if(i.error)try{i.error(t)}catch(e){ur(e)}else ur(t)}complete(){let{partialObserver:t}=this;if(t.complete)try{t.complete()}catch(i){ur(i)}}},fn=class extends Ft{constructor(t,i,e){super();let r;if(oe(t)||!t)r={next:t??void 0,error:i??void 0,complete:e??void 0};else{let a;this&&je.useDeprecatedNextContext?(a=Object.create(t),a.unsubscribe=()=>this.unsubscribe(),r={next:t.next&&ls(t.next,a),error:t.error&&ls(t.error,a),complete:t.complete&&ls(t.complete,a)}):r=t}this.destination=new cs(r)}};function ur(n){je.useDeprecatedSynchronousErrorHandling?yu(n):cr(n)}function Yg(n){throw n}function ds(n,t){let{onStoppedNotification:i}=je;i&&un.setTimeout(()=>i(n,t))}var Xg={closed:!0,next:as,error:Yg,complete:as};var mn=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Iu(n){return n}function Cu(n){return n.length===0?Iu:n.length===1?n[0]:function(i){return n.reduce((e,r)=>r(e),i)}}var fe=(()=>{class n{constructor(i){i&&(this._subscribe=i)}lift(i){let e=new n;return e.source=this,e.operator=i,e}subscribe(i,e,r){let a=Kg(i)?i:new fn(i,e,r);return pn(()=>{let{operator:c,source:u}=this;a.add(c?c.call(a,u):u?this._subscribe(a):this._trySubscribe(a))}),a}_trySubscribe(i){try{return this._subscribe(i)}catch(e){i.error(e)}}forEach(i,e){return e=Eu(e),new e((r,a)=>{let c=new fn({next:u=>{try{i(u)}catch(f){a(f),c.unsubscribe()}},error:a,complete:r});this.subscribe(c)})}_subscribe(i){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(i)}[mn](){return this}pipe(...i){return Cu(i)(this)}toPromise(i){return i=Eu(i),new i((e,r)=>{let a;this.subscribe(c=>a=c,c=>r(c),()=>e(a))})}}return n.create=t=>new n(t),n})();function Eu(n){var t;return(t=n??je.Promise)!==null&&t!==void 0?t:Promise}function Qg(n){return n&&oe(n.next)&&oe(n.error)&&oe(n.complete)}function Kg(n){return n&&n instanceof Ft||Qg(n)&&dr(n)}function e1(n){return oe(n?.lift)}function hn(n){return t=>{if(e1(t))return t.lift(function(i){try{return n(i,this)}catch(e){this.error(e)}});throw new TypeError("Unable to lift unknown Observable type")}}function gn(n,t,i,e,r){return new us(n,t,i,e,r)}var us=class extends Ft{constructor(t,i,e,r,a,c){super(t),this.onFinalize=a,this.shouldUnsubscribe=c,this._next=i?function(u){try{i(u)}catch(f){t.error(f)}}:super._next,this._error=r?function(u){try{r(u)}catch(f){t.error(f)}finally{this.unsubscribe()}}:super._error,this._complete=e?function(){try{e()}catch(u){t.error(u)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:i}=this;super.unsubscribe(),!i&&((t=this.onFinalize)===null||t===void 0||t.call(this))}}};var wu=sr(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var lt=(()=>{class n extends fe{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(i){let e=new pr(this,this);return e.operator=i,e}_throwIfClosed(){if(this.closed)throw new wu}next(i){pn(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let e of this.currentObservers)e.next(i)}})}error(i){pn(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=i;let{observers:e}=this;for(;e.length;)e.shift().error(i)}})}complete(){pn(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:i}=this;for(;i.length;)i.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var i;return((i=this.observers)===null||i===void 0?void 0:i.length)>0}_trySubscribe(i){return this._throwIfClosed(),super._trySubscribe(i)}_subscribe(i){return this._throwIfClosed(),this._checkFinalizedStatuses(i),this._innerSubscribe(i)}_innerSubscribe(i){let{hasError:e,isStopped:r,observers:a}=this;return e||r?os:(this.currentObservers=null,a.push(i),new Ie(()=>{this.currentObservers=null,Hn(a,i)}))}_checkFinalizedStatuses(i){let{hasError:e,thrownError:r,isStopped:a}=this;e?i.error(r):a&&i.complete()}asObservable(){let i=new fe;return i.source=this,i}}return n.create=(t,i)=>new pr(t,i),n})(),pr=class extends lt{constructor(t,i){super(),this.destination=t,this.source=i}next(t){var i,e;(e=(i=this.destination)===null||i===void 0?void 0:i.next)===null||e===void 0||e.call(i,t)}error(t){var i,e;(e=(i=this.destination)===null||i===void 0?void 0:i.error)===null||e===void 0||e.call(i,t)}complete(){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||i===void 0||i.call(t)}_subscribe(t){var i,e;return(e=(i=this.source)===null||i===void 0?void 0:i.subscribe(t))!==null&&e!==void 0?e:os}};var jn=class extends lt{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){let i=super._subscribe(t);return!i.closed&&t.next(this._value),i}getValue(){let{hasError:t,thrownError:i,_value:e}=this;if(t)throw i;return this._throwIfClosed(),e}next(t){super.next(this._value=t)}};function t1(n){return n[n.length-1]}function _u(n){return oe(t1(n))?n.pop():void 0}function H(n,t,i,e){var r=arguments.length,a=r<3?t:e===null?e=Object.getOwnPropertyDescriptor(t,i):e,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(n,t,i,e);else for(var u=n.length-1;u>=0;u--)(c=n[u])&&(a=(r<3?c(a):r>3?c(t,i,a):c(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}function Du(n,t,i,e){function r(a){return a instanceof i?a:new i(function(c){c(a)})}return new(i||(i=Promise))(function(a,c){function u(v){try{g(e.next(v))}catch(I){c(I)}}function f(v){try{g(e.throw(v))}catch(I){c(I)}}function g(v){v.done?a(v.value):r(v.value).then(u,f)}g((e=e.apply(n,t||[])).next())})}function Su(n){var t=typeof Symbol=="function"&&Symbol.iterator,i=t&&n[t],e=0;if(i)return i.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&e>=n.length&&(n=void 0),{value:n&&n[e++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Lt(n){return this instanceof Lt?(this.v=n,this):new Lt(n)}function Tu(n,t,i){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=i.apply(n,t||[]),r,a=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),u("next"),u("throw"),u("return",c),r[Symbol.asyncIterator]=function(){return this},r;function c(y){return function(L){return Promise.resolve(L).then(y,I)}}function u(y,L){e[y]&&(r[y]=function(E){return new Promise(function(w,D){a.push([y,E,w,D])>1||f(y,E)})},L&&(r[y]=L(r[y])))}function f(y,L){try{g(e[y](L))}catch(E){S(a[0][3],E)}}function g(y){y.value instanceof Lt?Promise.resolve(y.value.v).then(v,I):S(a[0][2],y)}function v(y){f("next",y)}function I(y){f("throw",y)}function S(y,L){y(L),a.shift(),a.length&&f(a[0][0],a[0][1])}}function ku(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=n[Symbol.asyncIterator],i;return t?t.call(n):(n=typeof Su=="function"?Su(n):n[Symbol.iterator](),i={},e("next"),e("throw"),e("return"),i[Symbol.asyncIterator]=function(){return this},i);function e(a){i[a]=n[a]&&function(c){return new Promise(function(u,f){c=n[a](c),r(u,f,c.done,c.value)})}}function r(a,c,u,f){Promise.resolve(f).then(function(g){a({value:g,done:u})},c)}}var fr=n=>n&&typeof n.length=="number"&&typeof n!="function";function mr(n){return oe(n?.then)}function hr(n){return oe(n[mn])}function gr(n){return Symbol.asyncIterator&&oe(n?.[Symbol.asyncIterator])}function vr(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function n1(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var xr=n1();function br(n){return oe(n?.[xr])}function yr(n){return Tu(this,arguments,function*(){let i=n.getReader();try{for(;;){let{value:e,done:r}=yield Lt(i.read());if(r)return yield Lt(void 0);yield yield Lt(e)}}finally{i.releaseLock()}})}function Ir(n){return oe(n?.getReader)}function bt(n){if(n instanceof fe)return n;if(n!=null){if(hr(n))return i1(n);if(fr(n))return r1(n);if(mr(n))return o1(n);if(gr(n))return Mu(n);if(br(n))return a1(n);if(Ir(n))return s1(n)}throw vr(n)}function i1(n){return new fe(t=>{let i=n[mn]();if(oe(i.subscribe))return i.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function r1(n){return new fe(t=>{for(let i=0;i<n.length&&!t.closed;i++)t.next(n[i]);t.complete()})}function o1(n){return new fe(t=>{n.then(i=>{t.closed||(t.next(i),t.complete())},i=>t.error(i)).then(null,cr)})}function a1(n){return new fe(t=>{for(let i of n)if(t.next(i),t.closed)return;t.complete()})}function Mu(n){return new fe(t=>{l1(n,t).catch(i=>t.error(i))})}function s1(n){return Mu(yr(n))}function l1(n,t){var i,e,r,a;return Du(this,void 0,void 0,function*(){try{for(i=ku(n);e=yield i.next(),!e.done;){let c=e.value;if(t.next(c),t.closed)return}}catch(c){r={error:c}}finally{try{e&&!e.done&&(a=i.return)&&(yield a.call(i))}finally{if(r)throw r.error}}t.complete()})}function Xe(n,t,i,e=0,r=!1){let a=t.schedule(function(){i(),r?n.add(this.schedule(null,e)):this.unsubscribe()},e);if(n.add(a),!r)return a}function Cr(n,t=0){return hn((i,e)=>{i.subscribe(gn(e,r=>Xe(e,n,()=>e.next(r),t),()=>Xe(e,n,()=>e.complete(),t),r=>Xe(e,n,()=>e.error(r),t)))})}function Er(n,t=0){return hn((i,e)=>{e.add(n.schedule(()=>i.subscribe(e),t))})}function Au(n,t){return bt(n).pipe(Er(t),Cr(t))}function Ou(n,t){return bt(n).pipe(Er(t),Cr(t))}function Nu(n,t){return new fe(i=>{let e=0;return t.schedule(function(){e===n.length?i.complete():(i.next(n[e++]),i.closed||this.schedule())})})}function Fu(n,t){return new fe(i=>{let e;return Xe(i,t,()=>{e=n[xr](),Xe(i,t,()=>{let r,a;try{({value:r,done:a}=e.next())}catch(c){i.error(c);return}a?i.complete():i.next(r)},0,!0)}),()=>oe(e?.return)&&e.return()})}function wr(n,t){if(!n)throw new Error("Iterable cannot be null");return new fe(i=>{Xe(i,t,()=>{let e=n[Symbol.asyncIterator]();Xe(i,t,()=>{e.next().then(r=>{r.done?i.complete():i.next(r.value)})},0,!0)})})}function Lu(n,t){return wr(yr(n),t)}function Ru(n,t){if(n!=null){if(hr(n))return Au(n,t);if(fr(n))return Nu(n,t);if(mr(n))return Ou(n,t);if(gr(n))return wr(n,t);if(br(n))return Fu(n,t);if(Ir(n))return Lu(n,t)}throw vr(n)}function ps(n,t){return t?Ru(n,t):bt(n)}function Rt(n,t){return hn((i,e)=>{let r=0;i.subscribe(gn(e,a=>{e.next(n.call(t,a,r++))}))})}var{isArray:d1}=Array;function c1(n,t){return d1(t)?n(...t):n(t)}function Pu(n){return Rt(t=>c1(n,t))}var{isArray:u1}=Array,{getPrototypeOf:p1,prototype:f1,keys:m1}=Object;function Vu(n){if(n.length===1){let t=n[0];if(u1(t))return{args:t,keys:null};if(h1(t)){let i=m1(t);return{args:i.map(e=>t[e]),keys:i}}}return{args:n,keys:null}}function h1(n){return n&&typeof n=="object"&&p1(n)===f1}function qu(n,t){return n.reduce((i,e,r)=>(i[e]=t[r],i),{})}function fs(...n){let t=_u(n),{args:i,keys:e}=Vu(n),r=new fe(a=>{let{length:c}=i;if(!c){a.complete();return}let u=new Array(c),f=c,g=c;for(let v=0;v<c;v++){let I=!1;bt(i[v]).subscribe(gn(a,S=>{I||(I=!0,g--),u[v]=S},()=>f--,void 0,()=>{(!f||!I)&&(g||a.next(e?qu(e,u):u),a.complete())}))}});return t?r.pipe(Pu(t)):r}function Hu(n){let t=Z(null);try{return n()}finally{Z(t)}}var Tr="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",W=class extends Error{code;constructor(t,i){super(kr(t,i)),this.code=t}};function g1(n){return`NG0${Math.abs(n)}`}function kr(n,t){return`${g1(n)}${t?": "+t:""}`}var Ce=globalThis;function ae(n){for(let t in n)if(n[t]===ae)return t;throw Error("")}function zu(n,t){for(let i in t)t.hasOwnProperty(i)&&!n.hasOwnProperty(i)&&(n[i]=t[i])}function ct(n){if(typeof n=="string")return n;if(Array.isArray(n))return`[${n.map(ct).join(", ")}]`;if(n==null)return""+n;let t=n.overriddenName||n.name;if(t)return`${t}`;let i=n.toString();if(i==null)return""+i;let e=i.indexOf(`
`);return e>=0?i.slice(0,e):i}function _s(n,t){return n?t?`${n} ${t}`:n:t||""}var v1=ae({__forward_ref__:ae});function Be(n){return n.__forward_ref__=Be,n.toString=function(){return ct(this())},n}function he(n){return Ss(n)?n():n}function Ss(n){return typeof n=="function"&&n.hasOwnProperty(v1)&&n.__forward_ref__===Be}function le(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function De(n){return{providers:n.providers||[],imports:n.imports||[]}}function Mr(n){return x1(n,Ar)}function x1(n,t){return n.hasOwnProperty(t)&&n[t]||null}function b1(n){let t=n?.[Ar]??null;return t||null}function hs(n){return n&&n.hasOwnProperty(Sr)?n[Sr]:null}var Ar=ae({\u0275prov:ae}),Sr=ae({\u0275inj:ae}),J=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(t,i){this._desc=t,this.\u0275prov=void 0,typeof i=="number"?this.__NG_ELEMENT_ID__=i:i!==void 0&&(this.\u0275prov=le({token:this,providedIn:i.providedIn||"root",factory:i.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Ds(n){return n&&!!n.\u0275providers}var Ts=ae({\u0275cmp:ae}),ks=ae({\u0275dir:ae}),Ms=ae({\u0275pipe:ae}),As=ae({\u0275mod:ae}),zn=ae({\u0275fac:ae}),zt=ae({__NG_ELEMENT_ID__:ae}),ju=ae({__NG_ENV_ID__:ae});function Or(n){return typeof n=="string"?n:n==null?"":String(n)}function Uu(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():Or(n)}var $u=ae({ngErrorCode:ae}),y1=ae({ngErrorMessage:ae}),I1=ae({ngTokenPath:ae});function Os(n,t){return Gu("",-200,t)}function Nr(n,t){throw new W(-201,!1)}function Gu(n,t,i){let e=new W(t,n);return e[$u]=t,e[y1]=n,i&&(e[I1]=i),e}function C1(n){return n[$u]}var gs;function Wu(){return gs}function Oe(n){let t=gs;return gs=n,t}function Ns(n,t,i){let e=Mr(n);if(e&&e.providedIn=="root")return e.value===void 0?e.value=e.factory():e.value;if(i&8)return null;if(t!==void 0)return t;Nr(n,"Injector")}var E1={},Pt=E1,w1="__NG_DI_FLAG__",vs=class{injector;constructor(t){this.injector=t}retrieve(t,i){let e=Vt(i)||0;try{return this.injector.get(t,e&8?null:Pt,e)}catch(r){if(ln(r))return r;throw r}}};function _1(n,t=0){let i=Gi();if(i===void 0)throw new W(-203,!1);if(i===null)return Ns(n,void 0,t);{let e=S1(t),r=i.retrieve(n,e);if(ln(r)){if(e.optional)return null;throw r}return r}}function te(n,t=0){return(Wu()||_1)(he(n),t)}function ee(n,t){return te(n,Vt(t))}function Vt(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function S1(n){return{optional:!!(n&8),host:!!(n&1),self:!!(n&2),skipSelf:!!(n&4)}}function xs(n){let t=[];for(let i=0;i<n.length;i++){let e=he(n[i]);if(Array.isArray(e)){if(e.length===0)throw new W(900,!1);let r,a=0;for(let c=0;c<e.length;c++){let u=e[c],f=D1(u);typeof f=="number"?f===-1?r=u.token:a|=f:r=u}t.push(te(r,a))}else t.push(te(e))}return t}function D1(n){return n[w1]}function qt(n,t){let i=n.hasOwnProperty(zn);return i?n[zn]:null}function Fr(n,t){n.forEach(i=>Array.isArray(i)?Fr(i,t):t(i))}function Fs(n,t,i){t>=n.length?n.push(i):n.splice(t,0,i)}function $n(n,t){return t>=n.length-1?n.pop():n.splice(t,1)[0]}function Zu(n,t){let i=[];for(let e=0;e<n;e++)i.push(t);return i}function Ju(n,t,i,e){let r=n.length;if(r==t)n.push(i,e);else if(r===1)n.push(e,n[0]),n[0]=i;else{for(r--,n.push(n[r-1],n[r]);r>t;){let a=r-2;n[r]=n[a],r--}n[t]=i,n[t+1]=e}}function Yu(n,t,i){let e=xn(n,t);return e>=0?n[e|1]=i:(e=~e,Ju(n,e,t,i)),e}function Lr(n,t){let i=xn(n,t);if(i>=0)return n[i|1]}function xn(n,t){return T1(n,t,1)}function T1(n,t,i){let e=0,r=n.length>>i;for(;r!==e;){let a=e+(r-e>>1),c=n[a<<i];if(t===c)return a<<i;c>t?r=a:e=a+1}return~(r<<i)}var It={},Ne=[],Ct=new J(""),Ls=new J("",-1),Rs=new J(""),Un=class{get(t,i=Pt){if(i===Pt){let r=Gu("",-201);throw r.name="\u0275NotFound",r}return i}};function Xu(n){return n[As]||null}function Ut(n){return n[Ts]||null}function Ps(n){return n[ks]||null}function Qu(n){return n[Ms]||null}function Rr(n){return{\u0275providers:n}}function Ku(n){return Rr([{provide:Ct,multi:!0,useValue:n}])}function ep(...n){return{\u0275providers:Vs(!0,n),\u0275fromNgModule:!0}}function Vs(n,...t){let i=[],e=new Set,r,a=c=>{i.push(c)};return Fr(t,c=>{let u=c;Dr(u,a,[],e)&&(r||=[],r.push(u))}),r!==void 0&&tp(r,a),i}function tp(n,t){for(let i=0;i<n.length;i++){let{ngModule:e,providers:r}=n[i];qs(r,a=>{t(a,e)})}}function Dr(n,t,i,e){if(n=he(n),!n)return!1;let r=null,a=hs(n),c=!a&&Ut(n);if(!a&&!c){let f=n.ngModule;if(a=hs(f),a)r=f;else return!1}else{if(c&&!c.standalone)return!1;r=n}let u=e.has(r);if(c){if(u)return!1;if(e.add(r),c.dependencies){let f=typeof c.dependencies=="function"?c.dependencies():c.dependencies;for(let g of f)Dr(g,t,i,e)}}else if(a){if(a.imports!=null&&!u){e.add(r);let g;Fr(a.imports,v=>{Dr(v,t,i,e)&&(g||=[],g.push(v))}),g!==void 0&&tp(g,t)}if(!u){let g=qt(r)||(()=>new r);t({provide:r,useFactory:g,deps:Ne},r),t({provide:Rs,useValue:r,multi:!0},r),t({provide:Ct,useValue:()=>te(r),multi:!0},r)}let f=a.providers;if(f!=null&&!u){let g=n;qs(f,v=>{t(v,g)})}}else return!1;return r!==n&&n.providers!==void 0}function qs(n,t){for(let i of n)Ds(i)&&(i=i.\u0275providers),Array.isArray(i)?qs(i,t):t(i)}var k1=ae({provide:String,useValue:ae});function np(n){return n!==null&&typeof n=="object"&&k1 in n}function M1(n){return!!(n&&n.useExisting)}function A1(n){return!!(n&&n.useFactory)}function Ht(n){return typeof n=="function"}function ip(n){return!!n.useClass}var Gn=new J(""),_r={},Bu={},ms;function Wn(){return ms===void 0&&(ms=new Un),ms}var Re=class{},jt=class extends Re{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(t,i,e,r){super(),this.parent=i,this.source=e,this.scopes=r,ys(t,c=>this.processProvider(c)),this.records.set(Ls,vn(void 0,this)),r.has("environment")&&this.records.set(Re,vn(void 0,this));let a=this.records.get(Gn);a!=null&&typeof a.value=="string"&&this.scopes.add(a.value),this.injectorDefTypes=new Set(this.get(Rs,Ne,{self:!0}))}retrieve(t,i){let e=Vt(i)||0;try{return this.get(t,Pt,e)}catch(r){if(ln(r))return r;throw r}}destroy(){Bn(this),this._destroyed=!0;let t=Z(null);try{for(let e of this._ngOnDestroyHooks)e.ngOnDestroy();let i=this._onDestroyHooks;this._onDestroyHooks=[];for(let e of i)e()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),Z(t)}}onDestroy(t){return Bn(this),this._onDestroyHooks.push(t),()=>this.removeOnDestroy(t)}runInContext(t){Bn(this);let i=Ye(this),e=Oe(void 0),r;try{return t()}finally{Ye(i),Oe(e)}}get(t,i=Pt,e){if(Bn(this),t.hasOwnProperty(ju))return t[ju](this);let r=Vt(e),a,c=Ye(this),u=Oe(void 0);try{if(!(r&4)){let g=this.records.get(t);if(g===void 0){let v=R1(t)&&Mr(t);v&&this.injectableDefInScope(v)?g=vn(bs(t),_r):g=null,this.records.set(t,g)}if(g!=null)return this.hydrate(t,g,r)}let f=r&2?Wn():this.parent;return i=r&8&&i===Pt?null:i,f.get(t,i)}catch(f){let g=C1(f);throw g===-200||g===-201?new W(g,null):f}finally{Oe(u),Ye(c)}}resolveInjectorInitializers(){let t=Z(null),i=Ye(this),e=Oe(void 0),r;try{let a=this.get(Ct,Ne,{self:!0});for(let c of a)c()}finally{Ye(i),Oe(e),Z(t)}}toString(){let t=[],i=this.records;for(let e of i.keys())t.push(ct(e));return`R3Injector[${t.join(", ")}]`}processProvider(t){t=he(t);let i=Ht(t)?t:he(t&&t.provide),e=N1(t);if(!Ht(t)&&t.multi===!0){let r=this.records.get(i);r||(r=vn(void 0,_r,!0),r.factory=()=>xs(r.multi),this.records.set(i,r)),i=t,r.multi.push(t)}this.records.set(i,e)}hydrate(t,i,e){let r=Z(null);try{if(i.value===Bu)throw Os(ct(t));return i.value===_r&&(i.value=Bu,i.value=i.factory(void 0,e)),typeof i.value=="object"&&i.value&&L1(i.value)&&this._ngOnDestroyHooks.add(i.value),i.value}finally{Z(r)}}injectableDefInScope(t){if(!t.providedIn)return!1;let i=he(t.providedIn);return typeof i=="string"?i==="any"||this.scopes.has(i):this.injectorDefTypes.has(i)}removeOnDestroy(t){let i=this._onDestroyHooks.indexOf(t);i!==-1&&this._onDestroyHooks.splice(i,1)}};function bs(n){let t=Mr(n),i=t!==null?t.factory:qt(n);if(i!==null)return i;if(n instanceof J)throw new W(204,!1);if(n instanceof Function)return O1(n);throw new W(204,!1)}function O1(n){if(n.length>0)throw new W(204,!1);let i=b1(n);return i!==null?()=>i.factory(n):()=>new n}function N1(n){if(np(n))return vn(void 0,n.useValue);{let t=Hs(n);return vn(t,_r)}}function Hs(n,t,i){let e;if(Ht(n)){let r=he(n);return qt(r)||bs(r)}else if(np(n))e=()=>he(n.useValue);else if(A1(n))e=()=>n.useFactory(...xs(n.deps||[]));else if(M1(n))e=(r,a)=>te(he(n.useExisting),a!==void 0&&a&8?8:void 0);else{let r=he(n&&(n.useClass||n.provide));if(F1(n))e=()=>new r(...xs(n.deps));else return qt(r)||bs(r)}return e}function Bn(n){if(n.destroyed)throw new W(205,!1)}function vn(n,t,i=!1){return{factory:n,value:t,multi:i?[]:void 0}}function F1(n){return!!n.deps}function L1(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function R1(n){return typeof n=="function"||typeof n=="object"&&n.ngMetadataName==="InjectionToken"}function ys(n,t){for(let i of n)Array.isArray(i)?ys(i,t):i&&Ds(i)?ys(i.\u0275providers,t):t(i)}function Pr(n,t){let i;n instanceof jt?(Bn(n),i=n):i=new vs(n);let e,r=Ye(i),a=Oe(void 0);try{return t()}finally{Ye(r),Oe(a)}}function js(){return Wu()!==void 0||Gi()!=null}var ze=0,X=1,Y=2,ge=3,Pe=4,Ee=5,bn=6,yn=7,ye=8,Et=9,et=10,pe=11,In=12,Bs=13,$t=14,Te=15,Gt=16,Wt=17,Zt=18,Zn=19,zs=20,dt=21,Vr=22,Jn=23,Fe=24,qr=25,Yn=26,me=27,rp=1;var wt=7,Xn=8,Qn=9,we=10;function tt(n){return Array.isArray(n)&&typeof n[rp]=="object"}function Ue(n){return Array.isArray(n)&&n[rp]===!0}function Us(n){return(n.flags&4)!==0}function _t(n){return n.componentOffset>-1}function Kn(n){return(n.flags&1)===1}function nt(n){return!!n.template}function Cn(n){return(n[Y]&512)!==0}function Jt(n){return(n[Y]&256)===256}var op="svg",ap="math";function Ve(n){for(;Array.isArray(n);)n=n[ze];return n}function $s(n,t){return Ve(t[n])}function it(n,t){return Ve(t[n.index])}function ei(n,t){return n.data[t]}function qe(n,t){let i=t[n];return tt(i)?i:i[ze]}function Hr(n){return(n[Y]&128)===128}function sp(n){return Ue(n[ge])}function St(n,t){return t==null?null:n[t]}function Gs(n){n[Wt]=0}function Ws(n){n[Y]&1024||(n[Y]|=1024,Hr(n)&&ni(n))}function lp(n,t){for(;n>0;)t=t[$t],n--;return t}function ti(n){return!!(n[Y]&9216||n[Fe]?.dirty)}function jr(n){n[et].changeDetectionScheduler?.notify(8),n[Y]&64&&(n[Y]|=1024),ti(n)&&ni(n)}function ni(n){n[et].changeDetectionScheduler?.notify(0);let t=yt(n);for(;t!==null&&!(t[Y]&8192||(t[Y]|=8192,!Hr(t)));)t=yt(t)}function Zs(n,t){if(Jt(n))throw new W(911,!1);n[dt]===null&&(n[dt]=[]),n[dt].push(t)}function dp(n,t){if(n[dt]===null)return;let i=n[dt].indexOf(t);i!==-1&&n[dt].splice(i,1)}function yt(n){let t=n[ge];return Ue(t)?t[ge]:t}function cp(n){return n[yn]??=[]}function up(n){return n.cleanup??=[]}var ne={lFrame:_p(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Is=!1;function pp(){return ne.lFrame.elementDepthCount}function fp(){ne.lFrame.elementDepthCount++}function mp(){ne.lFrame.elementDepthCount--}function Js(){return ne.bindingsEnabled}function Ys(){return ne.skipHydrationRootTNode!==null}function hp(n){return ne.skipHydrationRootTNode===n}function gp(){ne.skipHydrationRootTNode=null}function se(){return ne.lFrame.lView}function _e(){return ne.lFrame.tView}function ke(){let n=Xs();for(;n!==null&&n.type===64;)n=n.parent;return n}function Xs(){return ne.lFrame.currentTNode}function vp(){let n=ne.lFrame,t=n.currentTNode;return n.isParent?t:t.parent}function En(n,t){let i=ne.lFrame;i.currentTNode=n,i.isParent=t}function Qs(){return ne.lFrame.isParent}function Ks(){ne.lFrame.isParent=!1}function el(){return Is}function tl(n){let t=Is;return Is=n,t}function xp(n){return ne.lFrame.bindingIndex=n}function ii(){return ne.lFrame.bindingIndex++}function bp(n){let t=ne.lFrame,i=t.bindingIndex;return t.bindingIndex=t.bindingIndex+n,i}function yp(){return ne.lFrame.inI18n}function Ip(n,t){let i=ne.lFrame;i.bindingIndex=i.bindingRootIndex=n,Br(t)}function Cp(){return ne.lFrame.currentDirectiveIndex}function Br(n){ne.lFrame.currentDirectiveIndex=n}function Ep(n){let t=ne.lFrame.currentDirectiveIndex;return t===-1?null:n[t]}function nl(n){ne.lFrame.currentQueryIndex=n}function P1(n){let t=n[X];return t.type===2?t.declTNode:t.type===1?n[Ee]:null}function il(n,t,i){if(i&4){let r=t,a=n;for(;r=r.parent,r===null&&!(i&1);)if(r=P1(a),r===null||(a=a[$t],r.type&10))break;if(r===null)return!1;t=r,n=a}let e=ne.lFrame=wp();return e.currentTNode=t,e.lView=n,!0}function zr(n){let t=wp(),i=n[X];ne.lFrame=t,t.currentTNode=i.firstChild,t.lView=n,t.tView=i,t.contextLView=n,t.bindingIndex=i.bindingStartIndex,t.inI18n=!1}function wp(){let n=ne.lFrame,t=n===null?null:n.child;return t===null?_p(n):t}function _p(n){let t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=t),t}function Sp(){let n=ne.lFrame;return ne.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var rl=Sp;function Ur(){let n=Sp();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function Dp(n){return(ne.lFrame.contextLView=lp(n,ne.lFrame.contextLView))[ye]}function Yt(){return ne.lFrame.selectedIndex}function Dt(n){ne.lFrame.selectedIndex=n}function ol(){let n=ne.lFrame;return ei(n.tView,n.selectedIndex)}function Tp(){return ne.lFrame.currentNamespace}var kp=!0;function $r(){return kp}function Gr(n){kp=n}function Cs(n,t=null,i=null,e){let r=al(n,t,i,e);return r.resolveInjectorInitializers(),r}function al(n,t=null,i=null,e,r=new Set){let a=[i||Ne,ep(n)];return e=e||(typeof n=="object"?void 0:ct(n)),new jt(a,t||Wn(),e||null,r)}var Qe=class n{static THROW_IF_NOT_FOUND=Pt;static NULL=new Un;static create(t,i){if(Array.isArray(t))return Cs({name:""},i,t,"");{let e=t.name??"";return Cs({name:e},t.parent,t.providers,e)}}static \u0275prov=le({token:n,providedIn:"any",factory:()=>te(Ls)});static __NG_ELEMENT_ID__=-1},Me=new J(""),Xt=(()=>{class n{static __NG_ELEMENT_ID__=V1;static __NG_ENV_ID__=i=>i}return n})(),Es=class extends Xt{_lView;constructor(t){super(),this._lView=t}get destroyed(){return Jt(this._lView)}onDestroy(t){let i=this._lView;return Zs(i,t),()=>dp(i,t)}};function V1(){return new Es(se())}var Ke=class{_console=console;handleError(t){this._console.error("ERROR",t)}},rt=new J("",{providedIn:"root",factory:()=>{let n=ee(Re),t;return i=>{n.destroyed&&!t?setTimeout(()=>{throw i}):(t??=n.get(Ke),t.handleError(i))}}}),Mp={provide:Ct,useValue:()=>{ee(Ke)},multi:!0},q1=new J("",{providedIn:"root",factory:()=>{let n=ee(Me).defaultView;if(!n)return;let t=ee(rt),i=a=>{t(a.reason),a.preventDefault()},e=a=>{a.error?t(a.error):t(new Error(a.message,{cause:a})),a.preventDefault()},r=()=>{n.addEventListener("unhandledrejection",i),n.addEventListener("error",e)};typeof Zone<"u"?Zone.root.run(r):r(),ee(Xt).onDestroy(()=>{n.removeEventListener("error",e),n.removeEventListener("unhandledrejection",i)})}});function sl(){return Rr([Ku(()=>{ee(q1)})])}function ll(n){return typeof n=="function"&&n[Se]!==void 0}function ut(n,t){let[i,e,r]=is(n,t?.equal),a=i,c=a[Se];return a.set=e,a.update=r,a.asReadonly=Ap.bind(a),a}function Ap(){let n=this[Se];if(n.readonlyFn===void 0){let t=()=>this();t[Se]=n,n.readonlyFn=t}return n.readonlyFn}function dl(n){return ll(n)&&typeof n.set=="function"}var Bt=class{},Wr=new J("",{providedIn:"root",factory:()=>!1});var cl=new J(""),ul=new J(""),Qt=(()=>{class n{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new jn(!1);get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new fe(i=>{i.next(!1),i.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let i=this.taskId++;return this.pendingTasks.add(i),i}has(i){return this.pendingTasks.has(i)}remove(i){this.pendingTasks.delete(i),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=le({token:n,providedIn:"root",factory:()=>new n})}return n})();function ri(...n){}var pl=(()=>{class n{static \u0275prov=le({token:n,providedIn:"root",factory:()=>new ws})}return n})(),ws=class{dirtyEffectCount=0;queues=new Map;add(t){this.enqueue(t),this.schedule(t)}schedule(t){t.dirty&&this.dirtyEffectCount++}remove(t){let i=t.zone,e=this.queues.get(i);e.has(t)&&(e.delete(t),t.dirty&&this.dirtyEffectCount--)}enqueue(t){let i=t.zone;this.queues.has(i)||this.queues.set(i,new Set);let e=this.queues.get(i);e.has(t)||e.add(t)}flush(){for(;this.dirtyEffectCount>0;){let t=!1;for(let[i,e]of this.queues)i===null?t||=this.flushQueue(e):t||=i.run(()=>this.flushQueue(e));t||(this.dirtyEffectCount=0)}}flushQueue(t){let i=!1;for(let e of t)e.dirty&&(this.dirtyEffectCount--,i=!0,e.run());return i}};function fi(n){return{toString:n}.toString()}function ff(n){let t=Ce.ng;if(t&&t.\u0275compilerFacade)return t.\u0275compilerFacade;throw new Error("JIT compiler unavailable")}function K1(n){return typeof n=="function"}var no=class{previousValue;currentValue;firstChange;constructor(t,i,e){this.previousValue=t,this.currentValue=i,this.firstChange=e}isFirstChange(){return this.firstChange}};function mf(n,t,i,e){t!==null?t.applyValueToInputSignal(t,e):n[i]=e}var bo=(()=>{let n=()=>hf;return n.ngInherit=!0,n})();function hf(n){return n.type.prototype.ngOnChanges&&(n.setInput=tv),ev}function ev(){let n=vf(this),t=n?.current;if(t){let i=n.previous;if(i===It)n.previous=t;else for(let e in t)i[e]=t[e];n.current=null,this.ngOnChanges(t)}}function tv(n,t,i,e,r){let a=this.declaredInputs[e],c=vf(n)||nv(n,{previous:It,current:null}),u=c.current||(c.current={}),f=c.previous,g=f[a];u[a]=new no(g&&g.currentValue,i,f===It),mf(n,t,r,i)}var gf="__ngSimpleChanges__";function vf(n){return n[gf]||null}function nv(n,t){return n[gf]=t}var Op=[];var ce=function(n,t=null,i){for(let e=0;e<Op.length;e++){let r=Op[e];r(n,t,i)}};function iv(n,t,i){let{ngOnChanges:e,ngOnInit:r,ngDoCheck:a}=t.type.prototype;if(e){let c=hf(t);(i.preOrderHooks??=[]).push(n,c),(i.preOrderCheckHooks??=[]).push(n,c)}r&&(i.preOrderHooks??=[]).push(0-n,r),a&&((i.preOrderHooks??=[]).push(n,a),(i.preOrderCheckHooks??=[]).push(n,a))}function xf(n,t){for(let i=t.directiveStart,e=t.directiveEnd;i<e;i++){let a=n.data[i].type.prototype,{ngAfterContentInit:c,ngAfterContentChecked:u,ngAfterViewInit:f,ngAfterViewChecked:g,ngOnDestroy:v}=a;c&&(n.contentHooks??=[]).push(-i,c),u&&((n.contentHooks??=[]).push(i,u),(n.contentCheckHooks??=[]).push(i,u)),f&&(n.viewHooks??=[]).push(-i,f),g&&((n.viewHooks??=[]).push(i,g),(n.viewCheckHooks??=[]).push(i,g)),v!=null&&(n.destroyHooks??=[]).push(i,v)}}function Kr(n,t,i){bf(n,t,3,i)}function eo(n,t,i,e){(n[Y]&3)===i&&bf(n,t,i,e)}function fl(n,t){let i=n[Y];(i&3)===t&&(i&=16383,i+=1,n[Y]=i)}function bf(n,t,i,e){let r=e!==void 0?n[Wt]&65535:0,a=e??-1,c=t.length-1,u=0;for(let f=r;f<c;f++)if(typeof t[f+1]=="number"){if(u=t[f],e!=null&&u>=e)break}else t[f]<0&&(n[Wt]+=65536),(u<a||a==-1)&&(rv(n,i,t,f),n[Wt]=(n[Wt]&4294901760)+f+2),f++}function Np(n,t){ce(4,n,t);let i=Z(null);try{t.call(n)}finally{Z(i),ce(5,n,t)}}function rv(n,t,i,e){let r=i[e]<0,a=i[e+1],c=r?-i[e]:i[e],u=n[c];r?n[Y]>>14<n[Wt]>>16&&(n[Y]&3)===t&&(n[Y]+=16384,Np(u,a)):Np(u,a)}var _n=-1,en=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(t,i,e,r){this.factory=t,this.name=r,this.canSeeViewProviders=i,this.injectImpl=e}};function ov(n){return(n.flags&8)!==0}function av(n){return(n.flags&16)!==0}function sv(n,t,i){let e=0;for(;e<i.length;){let r=i[e];if(typeof r=="number"){if(r!==0)break;e++;let a=i[e++],c=i[e++],u=i[e++];n.setAttribute(t,c,u,a)}else{let a=r,c=i[++e];dv(a)?n.setProperty(t,a,c):n.setAttribute(t,a,c),e++}}return e}function lv(n){return n===3||n===4||n===6}function dv(n){return n.charCodeAt(0)===64}function si(n,t){if(!(t===null||t.length===0))if(n===null||n.length===0)n=t.slice();else{let i=-1;for(let e=0;e<t.length;e++){let r=t[e];typeof r=="number"?i=r:i===0||(i===-1||i===2?Fp(n,i,r,null,t[++e]):Fp(n,i,r,null,null))}}return n}function Fp(n,t,i,e,r){let a=0,c=n.length;if(t===-1)c=-1;else for(;a<n.length;){let u=n[a++];if(typeof u=="number"){if(u===t){c=-1;break}else if(u>t){c=a-1;break}}}for(;a<n.length;){let u=n[a];if(typeof u=="number")break;if(u===i){r!==null&&(n[a+1]=r);return}a++,r!==null&&a++}c!==-1&&(n.splice(c,0,t),a=c+1),n.splice(a++,0,i),r!==null&&n.splice(a++,0,r)}function yf(n){return n!==_n}function io(n){return n&32767}function cv(n){return n>>16}function ro(n,t){let i=cv(n),e=t;for(;i>0;)e=e[$t],i--;return e}var El=!0;function Lp(n){let t=El;return El=n,t}var uv=256,If=uv-1,Cf=5,pv=0,ot={};function fv(n,t,i){let e;typeof i=="string"?e=i.charCodeAt(0)||0:i.hasOwnProperty(zt)&&(e=i[zt]),e==null&&(e=i[zt]=pv++);let r=e&If,a=1<<r;t.data[n+(r>>Cf)]|=a}function oo(n,t){let i=Ef(n,t);if(i!==-1)return i;let e=t[X];e.firstCreatePass&&(n.injectorIndex=t.length,ml(e.data,n),ml(t,null),ml(e.blueprint,null));let r=$l(n,t),a=n.injectorIndex;if(yf(r)){let c=io(r),u=ro(r,t),f=u[X].data;for(let g=0;g<8;g++)t[a+g]=u[c+g]|f[c+g]}return t[a+8]=r,a}function ml(n,t){n.push(0,0,0,0,0,0,0,0,t)}function Ef(n,t){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||t[n.injectorIndex+8]===null?-1:n.injectorIndex}function $l(n,t){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let i=0,e=null,r=t;for(;r!==null;){if(e=Tf(r),e===null)return _n;if(i++,r=r[$t],e.injectorIndex!==-1)return e.injectorIndex|i<<16}return _n}function wl(n,t,i){fv(n,t,i)}function wf(n,t,i){if(i&8||n!==void 0)return n;Nr(t,"NodeInjector")}function _f(n,t,i,e){if(i&8&&e===void 0&&(e=null),(i&3)===0){let r=n[Et],a=Oe(void 0);try{return r?r.get(t,e,i&8):Ns(t,e,i&8)}finally{Oe(a)}}return wf(e,t,i)}function Sf(n,t,i,e=0,r){if(n!==null){if(t[Y]&2048&&!(e&2)){let c=xv(n,t,i,e,ot);if(c!==ot)return c}let a=Df(n,t,i,e,ot);if(a!==ot)return a}return _f(t,i,e,r)}function Df(n,t,i,e,r){let a=gv(i);if(typeof a=="function"){if(!il(t,n,e))return e&1?wf(r,i,e):_f(t,i,e,r);try{let c;if(c=a(e),c==null&&!(e&8))Nr(i);else return c}finally{rl()}}else if(typeof a=="number"){let c=null,u=Ef(n,t),f=_n,g=e&1?t[Te][Ee]:null;for((u===-1||e&4)&&(f=u===-1?$l(n,t):t[u+8],f===_n||!Pp(e,!1)?u=-1:(c=t[X],u=io(f),t=ro(f,t)));u!==-1;){let v=t[X];if(Rp(a,u,v.data)){let I=mv(u,t,i,c,e,g);if(I!==ot)return I}f=t[u+8],f!==_n&&Pp(e,t[X].data[u+8]===g)&&Rp(a,u,t)?(c=v,u=io(f),t=ro(f,t)):u=-1}}return r}function mv(n,t,i,e,r,a){let c=t[X],u=c.data[n+8],f=e==null?_t(u)&&El:e!=c&&(u.type&3)!==0,g=r&1&&a===u,v=hv(u,c,i,f,g);return v!==null?ao(t,c,v,u,r):ot}function hv(n,t,i,e,r){let a=n.providerIndexes,c=t.data,u=a&1048575,f=n.directiveStart,g=n.directiveEnd,v=a>>20,I=e?u:u+v,S=r?u+v:g;for(let y=I;y<S;y++){let L=c[y];if(y<f&&i===L||y>=f&&L.type===i)return y}if(r){let y=c[f];if(y&&nt(y)&&y.type===i)return f}return null}function ao(n,t,i,e,r){let a=n[i],c=t.data;if(a instanceof en){let u=a;if(u.resolving){let y=Uu(c[i]);throw Os(y)}let f=Lp(u.canSeeViewProviders);u.resolving=!0;let g=c[i].type||c[i],v,I=u.injectImpl?Oe(u.injectImpl):null,S=il(n,e,0);try{a=n[i]=u.factory(void 0,r,c,n,e),t.firstCreatePass&&i>=e.directiveStart&&iv(i,c[i],t)}finally{I!==null&&Oe(I),Lp(f),u.resolving=!1,rl()}}return a}function gv(n){if(typeof n=="string")return n.charCodeAt(0)||0;let t=n.hasOwnProperty(zt)?n[zt]:void 0;return typeof t=="number"?t>=0?t&If:vv:t}function Rp(n,t,i){let e=1<<n;return!!(i[t+(n>>Cf)]&e)}function Pp(n,t){return!(n&2)&&!(n&1&&t)}var Kt=class{_tNode;_lView;constructor(t,i){this._tNode=t,this._lView=i}get(t,i,e){return Sf(this._tNode,this._lView,t,Vt(e),i)}};function vv(){return new Kt(ke(),se())}function Gl(n){return fi(()=>{let t=n.prototype.constructor,i=t[zn]||_l(t),e=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==e;){let a=r[zn]||_l(r);if(a&&a!==i)return a;r=Object.getPrototypeOf(r)}return a=>new a})}function _l(n){return Ss(n)?()=>{let t=_l(he(n));return t&&t()}:qt(n)}function xv(n,t,i,e,r){let a=n,c=t;for(;a!==null&&c!==null&&c[Y]&2048&&!Cn(c);){let u=Df(a,c,i,e|2,ot);if(u!==ot)return u;let f=a.parent;if(!f){let g=c[zs];if(g){let v=g.get(i,ot,e);if(v!==ot)return v}f=Tf(c),c=c[$t]}a=f}return r}function Tf(n){let t=n[X],i=t.type;return i===2?t.declTNode:i===1?n[Ee]:null}function bv(){return yo(ke(),se())}function yo(n,t){return new F(it(n,t))}var F=(()=>{class n{nativeElement;constructor(i){this.nativeElement=i}static __NG_ELEMENT_ID__=bv}return n})();function kf(n){return(n.flags&128)===128}var Wl=(function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n})(Wl||{}),Mf=new Map,yv=0;function Iv(){return yv++}function Cv(n){Mf.set(n[Zn],n)}function Sl(n){Mf.delete(n[Zn])}var Vp="__ngContext__";function Sn(n,t){tt(t)?(n[Vp]=t[Zn],Cv(t)):n[Vp]=t}function Af(n){return Nf(n[In])}function Of(n){return Nf(n[Pe])}function Nf(n){for(;n!==null&&!Ue(n);)n=n[Pe];return n}var Dl;function Zl(n){Dl=n}function Jl(){if(Dl!==void 0)return Dl;if(typeof document<"u")return document;throw new W(210,!1)}var Io=new J("",{providedIn:"root",factory:()=>Ev}),Ev="ng",Co=new J(""),on=new J("",{providedIn:"platform",factory:()=>"unknown"});var Eo=new J("",{providedIn:"root",factory:()=>Jl().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var wv="h",_v="b";var Ff=!1,Lf=new J("",{providedIn:"root",factory:()=>Ff});var Sv=(n,t,i,e)=>{};function Dv(n,t,i,e){Sv(n,t,i,e)}function wo(n){return(n.flags&32)===32}var Tv=()=>null;function Rf(n,t,i=!1){return Tv(n,t,i)}function Pf(n,t){let i=n.contentQueries;if(i!==null){let e=Z(null);try{for(let r=0;r<i.length;r+=2){let a=i[r],c=i[r+1];if(c!==-1){let u=n.data[c];nl(a),u.contentQueries(2,t[c],c)}}}finally{Z(e)}}}function Tl(n,t,i){nl(0);let e=Z(null);try{t(n,i)}finally{Z(e)}}function Vf(n,t,i){if(Us(t)){let e=Z(null);try{let r=t.directiveStart,a=t.directiveEnd;for(let c=r;c<a;c++){let u=n.data[c];if(u.contentQueries){let f=i[c];u.contentQueries(1,f,c)}}}finally{Z(e)}}}var pt=(function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n})(pt||{});var Zr;function kv(){if(Zr===void 0&&(Zr=null,Ce.trustedTypes))try{Zr=Ce.trustedTypes.createPolicy("angular",{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n})}catch{}return Zr}function _o(n){return kv()?.createHTML(n)||n}var Jr;function Mv(){if(Jr===void 0&&(Jr=null,Ce.trustedTypes))try{Jr=Ce.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n})}catch{}return Jr}function qp(n){return Mv()?.createHTML(n)||n}var so=class{changingThisBreaksApplicationSecurity;constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Tr})`}};function Yl(n){return n instanceof so?n.changingThisBreaksApplicationSecurity:n}function qf(n,t){let i=Hf(n);if(i!=null&&i!==t){if(i==="ResourceURL"&&t==="URL")return!0;throw new Error(`Required a safe ${t}, got a ${i} (see ${Tr})`)}return i===t}function Hf(n){return n instanceof so&&n.getTypeName()||null}function Av(n){let t=new Ml(n);return Ov()?new kl(t):t}var kl=class{inertDocumentHelper;constructor(t){this.inertDocumentHelper=t}getInertBodyElement(t){t="<body><remove></remove>"+t;try{let i=new window.DOMParser().parseFromString(_o(t),"text/html").body;return i===null?this.inertDocumentHelper.getInertBodyElement(t):(i.firstChild?.remove(),i)}catch{return null}}},Ml=class{defaultDoc;inertDocument;constructor(t){this.defaultDoc=t,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(t){let i=this.inertDocument.createElement("template");return i.innerHTML=_o(t),i}};function Ov(){try{return!!new window.DOMParser().parseFromString(_o(""),"text/html")}catch{return!1}}var Nv=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function jf(n){return n=String(n),n.match(Nv)?n:"unsafe:"+n}function ft(n){let t={};for(let i of n.split(","))t[i]=!0;return t}function mi(...n){let t={};for(let i of n)for(let e in i)i.hasOwnProperty(e)&&(t[e]=!0);return t}var Bf=ft("area,br,col,hr,img,wbr"),zf=ft("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),Uf=ft("rp,rt"),Fv=mi(Uf,zf),Lv=mi(zf,ft("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),Rv=mi(Uf,ft("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),Hp=mi(Bf,Lv,Rv,Fv),$f=ft("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),Pv=ft("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),Vv=ft("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),qv=mi($f,Pv,Vv),Hv=ft("script,style,template");var Al=class{sanitizedSomething=!1;buf=[];sanitizeChildren(t){let i=t.firstChild,e=!0,r=[];for(;i;){if(i.nodeType===Node.ELEMENT_NODE?e=this.startElement(i):i.nodeType===Node.TEXT_NODE?this.chars(i.nodeValue):this.sanitizedSomething=!0,e&&i.firstChild){r.push(i),i=zv(i);continue}for(;i;){i.nodeType===Node.ELEMENT_NODE&&this.endElement(i);let a=Bv(i);if(a){i=a;break}i=r.pop()}}return this.buf.join("")}startElement(t){let i=jp(t).toLowerCase();if(!Hp.hasOwnProperty(i))return this.sanitizedSomething=!0,!Hv.hasOwnProperty(i);this.buf.push("<"),this.buf.push(i);let e=t.attributes;for(let r=0;r<e.length;r++){let a=e.item(r),c=a.name,u=c.toLowerCase();if(!qv.hasOwnProperty(u)){this.sanitizedSomething=!0;continue}let f=a.value;$f[u]&&(f=jf(f)),this.buf.push(" ",c,'="',Bp(f),'"')}return this.buf.push(">"),!0}endElement(t){let i=jp(t).toLowerCase();Hp.hasOwnProperty(i)&&!Bf.hasOwnProperty(i)&&(this.buf.push("</"),this.buf.push(i),this.buf.push(">"))}chars(t){this.buf.push(Bp(t))}};function jv(n,t){return(n.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function Bv(n){let t=n.nextSibling;if(t&&n!==t.previousSibling)throw Gf(t);return t}function zv(n){let t=n.firstChild;if(t&&jv(n,t))throw Gf(t);return t}function jp(n){let t=n.nodeName;return typeof t=="string"?t:"FORM"}function Gf(n){return new Error(`Failed to sanitize html because the element is clobbered: ${n.outerHTML}`)}var Uv=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,$v=/([^\#-~ |!])/g;function Bp(n){return n.replace(/&/g,"&amp;").replace(Uv,function(t){let i=t.charCodeAt(0),e=t.charCodeAt(1);return"&#"+((i-55296)*1024+(e-56320)+65536)+";"}).replace($v,function(t){return"&#"+t.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var Yr;function Wf(n,t){let i=null;try{Yr=Yr||Av(n);let e=t?String(t):"";i=Yr.getInertBodyElement(e);let r=5,a=e;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,e=a,a=i.innerHTML,i=Yr.getInertBodyElement(e)}while(e!==a);let u=new Al().sanitizeChildren(zp(i)||i);return _o(u)}finally{if(i){let e=zp(i)||i;for(;e.firstChild;)e.firstChild.remove()}}}function zp(n){return"content"in n&&Gv(n)?n.content:null}function Gv(n){return n.nodeType===Node.ELEMENT_NODE&&n.nodeName==="TEMPLATE"}function Wv(n,t){return n.createText(t)}function Zv(n,t,i){n.setValue(t,i)}function Zf(n,t,i){return n.createElement(t,i)}function lo(n,t,i,e,r){n.insertBefore(t,i,e,r)}function Jf(n,t,i){n.appendChild(t,i)}function Up(n,t,i,e,r){e!==null?lo(n,t,i,e,r):Jf(n,t,i)}function Jv(n,t,i,e){n.removeChild(null,t,i,e)}function Yv(n,t,i){n.setAttribute(t,"style",i)}function Xv(n,t,i){i===""?n.removeAttribute(t,"class"):n.setAttribute(t,"class",i)}function Yf(n,t,i){let{mergedAttrs:e,classes:r,styles:a}=i;e!==null&&sv(n,t,e),r!==null&&Xv(n,t,r),a!==null&&Yv(n,t,a)}var Xl=(function(n){return n[n.NONE=0]="NONE",n[n.HTML=1]="HTML",n[n.STYLE=2]="STYLE",n[n.SCRIPT=3]="SCRIPT",n[n.URL=4]="URL",n[n.RESOURCE_URL=5]="RESOURCE_URL",n})(Xl||{});function _(n){let t=Qv();return t?qp(t.sanitize(Xl.HTML,n)||""):qf(n,"HTML")?qp(Yl(n)):Wf(Jl(),Or(n))}function Qv(){let n=se();return n&&n[et].sanitizer}function Kv(n){return n instanceof Function?n():n}function e0(n,t,i){let e=n.length;for(;;){let r=n.indexOf(t,i);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let a=t.length;if(r+a===e||n.charCodeAt(r+a)<=32)return r}i=r+1}}var Xf="ng-template";function t0(n,t,i,e){let r=0;if(e){for(;r<t.length&&typeof t[r]=="string";r+=2)if(t[r]==="class"&&e0(t[r+1].toLowerCase(),i,0)!==-1)return!0}else if(Ql(n))return!1;if(r=t.indexOf(1,r),r>-1){let a;for(;++r<t.length&&typeof(a=t[r])=="string";)if(a.toLowerCase()===i)return!0}return!1}function Ql(n){return n.type===4&&n.value!==Xf}function n0(n,t,i){let e=n.type===4&&!i?Xf:n.value;return t===e}function i0(n,t,i){let e=4,r=n.attrs,a=r!==null?a0(r):0,c=!1;for(let u=0;u<t.length;u++){let f=t[u];if(typeof f=="number"){if(!c&&!$e(e)&&!$e(f))return!1;if(c&&$e(f))continue;c=!1,e=f|e&1;continue}if(!c)if(e&4){if(e=2|e&1,f!==""&&!n0(n,f,i)||f===""&&t.length===1){if($e(e))return!1;c=!0}}else if(e&8){if(r===null||!t0(n,r,f,i)){if($e(e))return!1;c=!0}}else{let g=t[++u],v=r0(f,r,Ql(n),i);if(v===-1){if($e(e))return!1;c=!0;continue}if(g!==""){let I;if(v>a?I="":I=r[v+1].toLowerCase(),e&2&&g!==I){if($e(e))return!1;c=!0}}}}return $e(e)||c}function $e(n){return(n&1)===0}function r0(n,t,i,e){if(t===null)return-1;let r=0;if(e||!i){let a=!1;for(;r<t.length;){let c=t[r];if(c===n)return r;if(c===3||c===6)a=!0;else if(c===1||c===2){let u=t[++r];for(;typeof u=="string";)u=t[++r];continue}else{if(c===4)break;if(c===0){r+=4;continue}}r+=a?1:2}return-1}else return s0(t,n)}function Qf(n,t,i=!1){for(let e=0;e<t.length;e++)if(i0(n,t[e],i))return!0;return!1}function o0(n){let t=n.attrs;if(t!=null){let i=t.indexOf(5);if((i&1)===0)return t[i+1]}return null}function a0(n){for(let t=0;t<n.length;t++){let i=n[t];if(lv(i))return t}return n.length}function s0(n,t){let i=n.indexOf(4);if(i>-1)for(i++;i<n.length;){let e=n[i];if(typeof e=="number")return-1;if(e===t)return i;i++}return-1}function l0(n,t){e:for(let i=0;i<t.length;i++){let e=t[i];if(n.length===e.length){for(let r=0;r<n.length;r++)if(n[r]!==e[r])continue e;return!0}}return!1}function $p(n,t){return n?":not("+t.trim()+")":t}function d0(n){let t=n[0],i=1,e=2,r="",a=!1;for(;i<n.length;){let c=n[i];if(typeof c=="string")if(e&2){let u=n[++i];r+="["+c+(u.length>0?'="'+u+'"':"")+"]"}else e&8?r+="."+c:e&4&&(r+=" "+c);else r!==""&&!$e(c)&&(t+=$p(a,r),r=""),e=c,a=a||!$e(e);i++}return r!==""&&(t+=$p(a,r)),t}function c0(n){return n.map(d0).join(",")}function u0(n){let t=[],i=[],e=1,r=2;for(;e<n.length;){let a=n[e];if(typeof a=="string")r===2?a!==""&&t.push(a,n[++e]):r===8&&i.push(a);else{if(!$e(r))break;r=a}e++}return i.length&&t.push(1,...i),t}var mt={};function Kl(n,t,i,e,r,a,c,u,f,g,v){let I=me+e,S=I+r,y=p0(I,S),L=typeof g=="function"?g():g;return y[X]={type:n,blueprint:y,template:i,queries:null,viewQuery:u,declTNode:t,data:y.slice().fill(null,I),bindingStartIndex:I,expandoStartIndex:S,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof a=="function"?a():a,pipeRegistry:typeof c=="function"?c():c,firstChild:null,schemas:f,consts:L,incompleteFirstPass:!1,ssrId:v}}function p0(n,t){let i=[];for(let e=0;e<t;e++)i.push(e<n?null:mt);return i}function f0(n){let t=n.tView;return t===null||t.incompleteFirstPass?n.tView=Kl(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):t}function ed(n,t,i,e,r,a,c,u,f,g,v){let I=t.blueprint.slice();return I[ze]=r,I[Y]=e|4|128|8|64|1024,(g!==null||n&&n[Y]&2048)&&(I[Y]|=2048),Gs(I),I[ge]=I[$t]=n,I[ye]=i,I[et]=c||n&&n[et],I[pe]=u||n&&n[pe],I[Et]=f||n&&n[Et]||null,I[Ee]=a,I[Zn]=Iv(),I[bn]=v,I[zs]=g,I[Te]=t.type==2?n[Te]:I,I}function m0(n,t,i){let e=it(t,n),r=f0(i),a=n[et].rendererFactory,c=td(n,ed(n,r,null,Kf(i),e,t,null,a.createRenderer(e,i),null,null,null));return n[t.index]=c}function Kf(n){let t=16;return n.signals?t=4096:n.onPush&&(t=64),t}function em(n,t,i,e){if(i===0)return-1;let r=t.length;for(let a=0;a<i;a++)t.push(e),n.blueprint.push(e),n.data.push(null);return r}function td(n,t){return n[In]?n[Bs][Pe]=t:n[In]=t,n[Bs]=t,t}function d(n=1){tm(_e(),se(),Yt()+n,!1)}function tm(n,t,i,e){if(!e)if((t[Y]&3)===3){let a=n.preOrderCheckHooks;a!==null&&Kr(t,a,i)}else{let a=n.preOrderHooks;a!==null&&eo(t,a,0,i)}Dt(i)}var So=(function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n})(So||{});function Ol(n,t,i,e){let r=Z(null);try{let[a,c,u]=n.inputs[i],f=null;(c&So.SignalBased)!==0&&(f=t[a][Se]),f!==null&&f.transformFn!==void 0?e=f.transformFn(e):u!==null&&(e=u.call(t,e)),n.setInput!==null?n.setInput(t,f,e,i,a):mf(t,f,a,e)}finally{Z(r)}}var at=(function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n})(at||{}),h0;function nd(n,t){return h0(n,t)}var Dn=new Set,id=(function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n})(id||{}),hi=new J(""),Gp=new Set;function gi(n){Gp.has(n)||(Gp.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var nm=!1,Nl=class extends lt{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(t=!1){super(),this.__isAsync=t,js()&&(this.destroyRef=ee(Xt,{optional:!0})??void 0,this.pendingTasks=ee(Qt,{optional:!0})??void 0)}emit(t){let i=Z(null);try{super.next(t)}finally{Z(i)}}subscribe(t,i,e){let r=t,a=i||(()=>null),c=e;if(t&&typeof t=="object"){let f=t;r=f.next?.bind(f),a=f.error?.bind(f),c=f.complete?.bind(f)}this.__isAsync&&(a=this.wrapInTimeout(a),r&&(r=this.wrapInTimeout(r)),c&&(c=this.wrapInTimeout(c)));let u=super.subscribe({next:r,error:a,complete:c});return t instanceof Ie&&t.add(u),u}wrapInTimeout(t){return i=>{let e=this.pendingTasks?.add();setTimeout(()=>{try{t(i)}finally{e!==void 0&&this.pendingTasks?.remove(e)}})}}},R=Nl;function im(n){let t,i;function e(){n=ri;try{i!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(i),t!==void 0&&clearTimeout(t)}catch{}}return t=setTimeout(()=>{n(),e()}),typeof requestAnimationFrame=="function"&&(i=requestAnimationFrame(()=>{n(),e()})),()=>e()}function Wp(n){return queueMicrotask(()=>n()),()=>{n=ri}}var rd="isAngularZone",co=rd+"_ID",g0=0,T=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new R(!1);onMicrotaskEmpty=new R(!1);onStable=new R(!1);onError=new R(!1);constructor(t){let{enableLongStackTrace:i=!1,shouldCoalesceEventChangeDetection:e=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:a=nm}=t;if(typeof Zone>"u")throw new W(908,!1);Zone.assertZonePatched();let c=this;c._nesting=0,c._outer=c._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(c._inner=c._inner.fork(new Zone.TaskTrackingZoneSpec)),i&&Zone.longStackTraceZoneSpec&&(c._inner=c._inner.fork(Zone.longStackTraceZoneSpec)),c.shouldCoalesceEventChangeDetection=!r&&e,c.shouldCoalesceRunChangeDetection=r,c.callbackScheduled=!1,c.scheduleInRootZone=a,b0(c)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(rd)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new W(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new W(909,!1)}run(t,i,e){return this._inner.run(t,i,e)}runTask(t,i,e,r){let a=this._inner,c=a.scheduleEventTask("NgZoneEvent: "+r,t,v0,ri,ri);try{return a.runTask(c,i,e)}finally{a.cancelTask(c)}}runGuarded(t,i,e){return this._inner.runGuarded(t,i,e)}runOutsideAngular(t){return this._outer.run(t)}},v0={};function od(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function x0(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function t(){im(()=>{n.callbackScheduled=!1,Fl(n),n.isCheckStableRunning=!0,od(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{t()}):n._outer.run(()=>{t()}),Fl(n)}function b0(n){let t=()=>{x0(n)},i=g0++;n._inner=n._inner.fork({name:"angular",properties:{[rd]:!0,[co]:i,[co+i]:!0},onInvokeTask:(e,r,a,c,u,f)=>{if(y0(f))return e.invokeTask(a,c,u,f);try{return Zp(n),e.invokeTask(a,c,u,f)}finally{(n.shouldCoalesceEventChangeDetection&&c.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&t(),Jp(n)}},onInvoke:(e,r,a,c,u,f,g)=>{try{return Zp(n),e.invoke(a,c,u,f,g)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!I0(f)&&t(),Jp(n)}},onHasTask:(e,r,a,c)=>{e.hasTask(a,c),r===a&&(c.change=="microTask"?(n._hasPendingMicrotasks=c.microTask,Fl(n),od(n)):c.change=="macroTask"&&(n.hasPendingMacrotasks=c.macroTask))},onHandleError:(e,r,a,c)=>(e.handleError(a,c),n.runOutsideAngular(()=>n.onError.emit(c)),!1)})}function Fl(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function Zp(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function Jp(n){n._nesting--,od(n)}var li=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new R;onMicrotaskEmpty=new R;onStable=new R;onError=new R;run(t,i,e){return t.apply(i,e)}runGuarded(t,i,e){return t.apply(i,e)}runOutsideAngular(t){return t()}runTask(t,i,e,r){return t.apply(i,e)}};function y0(n){return rm(n,"__ignore_ng_zone__")}function I0(n){return rm(n,"__scheduler_tick__")}function rm(n,t){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[t]===!0}function om(n="zone.js",t){return n==="noop"?new li:n==="zone.js"?new T(t):n}var am=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=le({token:n,providedIn:"root",factory:()=>new n})}return n})();var C0=new J("",{providedIn:"root",factory:()=>({queue:new Set,isScheduled:!1,scheduler:null})});function sm(n,t,i){let e=n.get(C0);if(Array.isArray(t))for(let r of t)e.queue.add(r),i?.detachedLeaveAnimationFns?.push(r);else e.queue.add(t),i?.detachedLeaveAnimationFns?.push(t);e.scheduler&&e.scheduler(n)}function E0(n,t){for(let[i,e]of t)sm(n,e.animateFns)}function Yp(n,t,i,e){let r=n?.[Yn]?.enter;t!==null&&r&&r.has(i.index)&&E0(e,r)}function wn(n,t,i,e,r,a,c,u){if(r!=null){let f,g=!1;Ue(r)?f=r:tt(r)&&(g=!0,r=r[ze]);let v=Ve(r);n===0&&e!==null?(Yp(u,e,a,i),c==null?Jf(t,e,v):lo(t,e,v,c||null,!0)):n===1&&e!==null?(Yp(u,e,a,i),lo(t,e,v,c||null,!0)):n===2?Xp(u,a,i,I=>{Jv(t,v,g,I)}):n===3&&Xp(u,a,i,()=>{t.destroyNode(v)}),f!=null&&F0(t,n,i,f,a,e,c)}}function w0(n,t){lm(n,t),t[ze]=null,t[Ee]=null}function _0(n,t,i,e,r,a){e[ze]=r,e[Ee]=t,Do(n,e,i,1,r,a)}function lm(n,t){t[et].changeDetectionScheduler?.notify(9),Do(n,t,t[pe],2,null,null)}function S0(n){let t=n[In];if(!t)return hl(n[X],n);for(;t;){let i=null;if(tt(t))i=t[In];else{let e=t[we];e&&(i=e)}if(!i){for(;t&&!t[Pe]&&t!==n;)tt(t)&&hl(t[X],t),t=t[ge];t===null&&(t=n),tt(t)&&hl(t[X],t),i=t&&t[Pe]}t=i}}function ad(n,t){let i=n[Qn],e=i.indexOf(t);i.splice(e,1)}function sd(n,t){if(Jt(t))return;let i=t[pe];i.destroyNode&&Do(n,t,i,3,null,null),S0(t)}function hl(n,t){if(Jt(t))return;let i=Z(null);try{t[Y]&=-129,t[Y]|=256,t[Fe]&&nr(t[Fe]),k0(n,t),T0(n,t),t[X].type===1&&t[pe].destroy();let e=t[Gt];if(e!==null&&Ue(t[ge])){e!==t[ge]&&ad(e,t);let r=t[Zt];r!==null&&r.detachView(n)}Sl(t)}finally{Z(i)}}function Xp(n,t,i,e){let r=n?.[Yn];if(r==null||r.leave==null||!r.leave.has(t.index))return e(!1);n&&Dn.add(n),sm(i,()=>{if(r.leave&&r.leave.has(t.index)){let c=r.leave.get(t.index),u=[];if(c){for(let f=0;f<c.animateFns.length;f++){let g=c.animateFns[f],{promise:v}=g();u.push(v)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(u),D0(n,e)}else n&&Dn.delete(n),e(!1)},r)}function D0(n,t){let i=n[Yn]?.running;if(i){i.then(()=>{n[Yn].running=void 0,Dn.delete(n),t(!0)});return}t(!1)}function T0(n,t){let i=n.cleanup,e=t[yn];if(i!==null)for(let c=0;c<i.length-1;c+=2)if(typeof i[c]=="string"){let u=i[c+3];u>=0?e[u]():e[-u].unsubscribe(),c+=2}else{let u=e[i[c+1]];i[c].call(u)}e!==null&&(t[yn]=null);let r=t[dt];if(r!==null){t[dt]=null;for(let c=0;c<r.length;c++){let u=r[c];u()}}let a=t[Jn];if(a!==null){t[Jn]=null;for(let c of a)c.destroy()}}function k0(n,t){let i;if(n!=null&&(i=n.destroyHooks)!=null)for(let e=0;e<i.length;e+=2){let r=t[i[e]];if(!(r instanceof en)){let a=i[e+1];if(Array.isArray(a))for(let c=0;c<a.length;c+=2){let u=r[a[c]],f=a[c+1];ce(4,u,f);try{f.call(u)}finally{ce(5,u,f)}}else{ce(4,r,a);try{a.call(r)}finally{ce(5,r,a)}}}}}function dm(n,t,i){return M0(n,t.parent,i)}function M0(n,t,i){let e=t;for(;e!==null&&e.type&168;)t=e,e=t.parent;if(e===null)return i[ze];if(_t(e)){let{encapsulation:r}=n.data[e.directiveStart+e.componentOffset];if(r===pt.None||r===pt.Emulated)return null}return it(e,i)}function cm(n,t,i){return O0(n,t,i)}function A0(n,t,i){return n.type&40?it(n,i):null}var O0=A0,Qp;function ld(n,t,i,e){let r=dm(n,e,t),a=t[pe],c=e.parent||t[Ee],u=cm(c,e,t);if(r!=null)if(Array.isArray(i))for(let f=0;f<i.length;f++)Up(a,r,i[f],u,!1);else Up(a,r,i,u,!1);Qp!==void 0&&Qp(a,e,t,i,r)}function oi(n,t){if(t!==null){let i=t.type;if(i&3)return it(t,n);if(i&4)return Ll(-1,n[t.index]);if(i&8){let e=t.child;if(e!==null)return oi(n,e);{let r=n[t.index];return Ue(r)?Ll(-1,r):Ve(r)}}else{if(i&128)return oi(n,t.next);if(i&32)return nd(t,n)()||Ve(n[t.index]);{let e=um(n,t);if(e!==null){if(Array.isArray(e))return e[0];let r=yt(n[Te]);return oi(r,e)}else return oi(n,t.next)}}}return null}function um(n,t){if(t!==null){let e=n[Te][Ee],r=t.projection;return e.projection[r]}return null}function Ll(n,t){let i=we+n+1;if(i<t.length){let e=t[i],r=e[X].firstChild;if(r!==null)return oi(e,r)}return t[wt]}function dd(n,t,i,e,r,a,c){for(;i!=null;){let u=e[Et];if(i.type===128){i=i.next;continue}let f=e[i.index],g=i.type;if(c&&t===0&&(f&&Sn(Ve(f),e),i.flags|=2),!wo(i))if(g&8)dd(n,t,i.child,e,r,a,!1),wn(t,n,u,r,f,i,a,e);else if(g&32){let v=nd(i,e),I;for(;I=v();)wn(t,n,u,r,I,i,a,e);wn(t,n,u,r,f,i,a,e)}else g&16?pm(n,t,e,i,r,a):wn(t,n,u,r,f,i,a,e);i=c?i.projectionNext:i.next}}function Do(n,t,i,e,r,a){dd(i,e,n.firstChild,t,r,a,!1)}function N0(n,t,i){let e=t[pe],r=dm(n,i,t),a=i.parent||t[Ee],c=cm(a,i,t);pm(e,0,t,i,r,c)}function pm(n,t,i,e,r,a){let c=i[Te],f=c[Ee].projection[e.projection];if(Array.isArray(f))for(let g=0;g<f.length;g++){let v=f[g];wn(t,n,i[Et],r,v,e,a,i)}else{let g=f,v=c[ge];kf(e)&&(g.flags|=128),dd(n,t,g,v,r,a,!0)}}function F0(n,t,i,e,r,a,c){let u=e[wt],f=Ve(e);u!==f&&wn(t,n,i,a,u,r,c);for(let g=we;g<e.length;g++){let v=e[g];Do(v[X],v,n,t,a,u)}}function L0(n,t,i,e,r){if(t)r?n.addClass(i,e):n.removeClass(i,e);else{let a=e.indexOf("-")===-1?void 0:at.DashCase;r==null?n.removeStyle(i,e,a):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),a|=at.Important),n.setStyle(i,e,r,a))}}function fm(n,t,i,e,r){let a=Yt(),c=e&2;try{Dt(-1),c&&t.length>me&&tm(n,t,me,!1),ce(c?2:0,r,i),i(e,r)}finally{Dt(a),ce(c?3:1,r,i)}}function cd(n,t,i){B0(n,t,i),(i.flags&64)===64&&z0(n,t,i)}function ud(n,t,i=it){let e=t.localNames;if(e!==null){let r=t.index+1;for(let a=0;a<e.length;a+=2){let c=e[a+1],u=c===-1?i(t,n):n[c];n[r++]=u}}}function R0(n,t,i,e){let a=e.get(Lf,Ff)||i===pt.ShadowDom,c=n.selectRootElement(t,a);return P0(c),c}function P0(n){V0(n)}var V0=()=>null;function q0(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function mm(n,t,i,e,r,a){let c=t[X];if(pd(n,c,t,i,e)){_t(n)&&j0(t,n.index);return}n.type&3&&(i=q0(i)),H0(n,t,i,e,r,a)}function H0(n,t,i,e,r,a){if(n.type&3){let c=it(n,t);e=a!=null?a(e,n.value||"",i):e,r.setProperty(c,i,e)}else n.type&12}function j0(n,t){let i=qe(t,n);i[Y]&16||(i[Y]|=64)}function B0(n,t,i){let e=i.directiveStart,r=i.directiveEnd;_t(i)&&m0(t,i,n.data[e+i.componentOffset]),n.firstCreatePass||oo(i,t);let a=i.initialInputs;for(let c=e;c<r;c++){let u=n.data[c],f=ao(t,n,c,i);if(Sn(f,t),a!==null&&$0(t,c-e,f,u,i,a),nt(u)){let g=qe(i.index,t);g[ye]=ao(t,n,c,i)}}}function z0(n,t,i){let e=i.directiveStart,r=i.directiveEnd,a=i.index,c=Cp();try{Dt(a);for(let u=e;u<r;u++){let f=n.data[u],g=t[u];Br(u),(f.hostBindings!==null||f.hostVars!==0||f.hostAttrs!==null)&&U0(f,g)}}finally{Dt(-1),Br(c)}}function U0(n,t){n.hostBindings!==null&&n.hostBindings(1,t)}function hm(n,t){let i=n.directiveRegistry,e=null;if(i)for(let r=0;r<i.length;r++){let a=i[r];Qf(t,a.selectors,!1)&&(e??=[],nt(a)?e.unshift(a):e.push(a))}return e}function $0(n,t,i,e,r,a){let c=a[t];if(c!==null)for(let u=0;u<c.length;u+=2){let f=c[u],g=c[u+1];Ol(e,i,f,g)}}function G0(n,t,i,e,r){let a=me+i,c=t[X],u=r(c,t,n,e,i);t[a]=u,En(n,!0);let f=n.type===2;return f?(Yf(t[pe],u,n),(pp()===0||Kn(n))&&Sn(u,t),fp()):Sn(u,t),$r()&&(!f||!wo(n))&&ld(c,t,u,n),n}function W0(n){let t=n;return Qs()?Ks():(t=t.parent,En(t,!1)),t}function Z0(n,t){let i=n[Et];if(!i)return;let e;try{e=i.get(rt,null)}catch{e=null}e?.(t)}function pd(n,t,i,e,r){let a=n.inputs?.[e],c=n.hostDirectiveInputs?.[e],u=!1;if(c)for(let f=0;f<c.length;f+=2){let g=c[f],v=c[f+1],I=t.data[g];Ol(I,i[g],v,r),u=!0}if(a)for(let f of a){let g=i[f],v=t.data[f];Ol(v,g,e,r),u=!0}return u}function J0(n,t){let i=qe(t,n),e=i[X];Y0(e,i);let r=i[ze];r!==null&&i[bn]===null&&(i[bn]=Rf(r,i[Et])),ce(18),fd(e,i,i[ye]),ce(19,i[ye])}function Y0(n,t){for(let i=t.length;i<n.blueprint.length;i++)t.push(n.blueprint[i])}function fd(n,t,i){zr(t);try{let e=n.viewQuery;e!==null&&Tl(1,e,i);let r=n.template;r!==null&&fm(n,t,r,1,i),n.firstCreatePass&&(n.firstCreatePass=!1),t[Zt]?.finishViewCreation(n),n.staticContentQueries&&Pf(n,t),n.staticViewQueries&&Tl(2,n.viewQuery,i);let a=n.components;a!==null&&X0(t,a)}catch(e){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),e}finally{t[Y]&=-5,Ur()}}function X0(n,t){for(let i=0;i<t.length;i++)J0(n,t[i])}function md(n,t,i,e){let r=Z(null);try{let a=t.tView,u=n[Y]&4096?4096:16,f=ed(n,a,i,u,null,t,null,null,e?.injector??null,e?.embeddedViewInjector??null,e?.dehydratedView??null),g=n[t.index];f[Gt]=g;let v=n[Zt];return v!==null&&(f[Zt]=v.createEmbeddedView(a)),fd(a,f,i),f}finally{Z(r)}}function uo(n,t){return!t||t.firstChild===null||kf(n)}function di(n,t,i,e,r=!1){for(;i!==null;){if(i.type===128){i=r?i.projectionNext:i.next;continue}let a=t[i.index];a!==null&&e.push(Ve(a)),Ue(a)&&gm(a,e);let c=i.type;if(c&8)di(n,t,i.child,e);else if(c&32){let u=nd(i,t),f;for(;f=u();)e.push(f)}else if(c&16){let u=um(t,i);if(Array.isArray(u))e.push(...u);else{let f=yt(t[Te]);di(f[X],f,u,e,!0)}}i=r?i.projectionNext:i.next}return e}function gm(n,t){for(let i=we;i<n.length;i++){let e=n[i],r=e[X].firstChild;r!==null&&di(e[X],e,r,t)}n[wt]!==n[ze]&&t.push(n[wt])}function vm(n){if(n[qr]!==null){for(let t of n[qr])t.impl.addSequence(t);n[qr].length=0}}var xm=[];function Q0(n){return n[Fe]??K0(n)}function K0(n){let t=xm.pop()??Object.create(t6);return t.lView=n,t}function e6(n){n.lView[Fe]!==n&&(n.lView=null,xm.push(n))}var t6=de(re({},dn),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{ni(n.lView)},consumerOnSignalRead(){this.lView[Fe]=this}});function n6(n){let t=n[Fe]??Object.create(i6);return t.lView=n,t}var i6=de(re({},dn),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{let t=yt(n.lView);for(;t&&!bm(t[X]);)t=yt(t);t&&Ws(t)},consumerOnSignalRead(){this.lView[Fe]=this}});function bm(n){return n.type!==2}function ym(n){if(n[Jn]===null)return;let t=!0;for(;t;){let i=!1;for(let e of n[Jn])e.dirty&&(i=!0,e.zone===null||Zone.current===e.zone?e.run():e.zone.run(()=>e.run()));t=i&&!!(n[Y]&8192)}}var r6=100;function Im(n,t=0){let e=n[et].rendererFactory,r=!1;r||e.begin?.();try{o6(n,t)}finally{r||e.end?.()}}function o6(n,t){let i=el();try{tl(!0),Rl(n,t);let e=0;for(;ti(n);){if(e===r6)throw new W(103,!1);e++,Rl(n,1)}}finally{tl(i)}}function a6(n,t,i,e){if(Jt(t))return;let r=t[Y],a=!1,c=!1;zr(t);let u=!0,f=null,g=null;a||(bm(n)?(g=Q0(t),f=qn(g)):Xi()===null?(u=!1,g=n6(t),f=qn(g)):t[Fe]&&(nr(t[Fe]),t[Fe]=null));try{Gs(t),xp(n.bindingStartIndex),i!==null&&fm(n,t,i,2,e);let v=(r&3)===3;if(!a)if(v){let y=n.preOrderCheckHooks;y!==null&&Kr(t,y,null)}else{let y=n.preOrderHooks;y!==null&&eo(t,y,0,null),fl(t,0)}if(c||s6(t),ym(t),Cm(t,0),n.contentQueries!==null&&Pf(n,t),!a)if(v){let y=n.contentCheckHooks;y!==null&&Kr(t,y)}else{let y=n.contentHooks;y!==null&&eo(t,y,1),fl(t,1)}d6(n,t);let I=n.components;I!==null&&wm(t,I,0);let S=n.viewQuery;if(S!==null&&Tl(2,S,e),!a)if(v){let y=n.viewCheckHooks;y!==null&&Kr(t,y)}else{let y=n.viewHooks;y!==null&&eo(t,y,2),fl(t,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),t[Vr]){for(let y of t[Vr])y();t[Vr]=null}a||(vm(t),t[Y]&=-73)}catch(v){throw a||ni(t),v}finally{g!==null&&(er(g,f),u&&e6(g)),Ur()}}function Cm(n,t){for(let i=Af(n);i!==null;i=Of(i))for(let e=we;e<i.length;e++){let r=i[e];Em(r,t)}}function s6(n){for(let t=Af(n);t!==null;t=Of(t)){if(!(t[Y]&2))continue;let i=t[Qn];for(let e=0;e<i.length;e++){let r=i[e];Ws(r)}}}function l6(n,t,i){ce(18);let e=qe(t,n);Em(e,i),ce(19,e[ye])}function Em(n,t){Hr(n)&&Rl(n,t)}function Rl(n,t){let e=n[X],r=n[Y],a=n[Fe],c=!!(t===0&&r&16);if(c||=!!(r&64&&t===0),c||=!!(r&1024),c||=!!(a?.dirty&&tr(a)),c||=!1,a&&(a.dirty=!1),n[Y]&=-9217,c)a6(e,n,e.template,n[ye]);else if(r&8192){let u=Z(null);try{ym(n),Cm(n,1);let f=e.components;f!==null&&wm(n,f,1),vm(n)}finally{Z(u)}}}function wm(n,t,i){for(let e=0;e<t.length;e++)l6(n,t[e],i)}function d6(n,t){let i=n.hostBindingOpCodes;if(i!==null)try{for(let e=0;e<i.length;e++){let r=i[e];if(r<0)Dt(~r);else{let a=r,c=i[++e],u=i[++e];Ip(c,a);let f=t[a];ce(24,f),u(2,f),ce(25,f)}}}finally{Dt(-1)}}function hd(n,t){let i=el()?64:1088;for(n[et].changeDetectionScheduler?.notify(t);n;){n[Y]|=i;let e=yt(n);if(Cn(n)&&!e)return n;n=e}return null}function _m(n,t,i,e){return[n,!0,0,t,null,e,null,i,null,null]}function c6(n,t){let i=we+t;if(i<n.length)return n[i]}function gd(n,t,i,e=!0){let r=t[X];if(p6(r,t,n,i),e){let c=Ll(i,n),u=t[pe],f=u.parentNode(n[wt]);f!==null&&_0(r,n[Ee],u,t,f,c)}let a=t[bn];a!==null&&a.firstChild!==null&&(a.firstChild=null)}function u6(n,t){let i=po(n,t);return i!==void 0&&sd(i[X],i),i}function po(n,t){if(n.length<=we)return;let i=we+t,e=n[i];if(e){let r=e[Gt];r!==null&&r!==n&&ad(r,e),t>0&&(n[i-1][Pe]=e[Pe]);let a=$n(n,we+t);w0(e[X],e);let c=a[Zt];c!==null&&c.detachView(a[X]),e[ge]=null,e[Pe]=null,e[Y]&=-129}return e}function p6(n,t,i,e){let r=we+e,a=i.length;e>0&&(i[r-1][Pe]=t),e<a-we?(t[Pe]=i[r],Fs(i,we+e,t)):(i.push(t),t[Pe]=null),t[ge]=i;let c=t[Gt];c!==null&&i!==c&&Sm(c,t);let u=t[Zt];u!==null&&u.insertView(n),jr(t),t[Y]|=128}function Sm(n,t){let i=n[Qn],e=t[ge];if(tt(e))n[Y]|=2;else{let r=e[ge][Te];t[Te]!==r&&(n[Y]|=2)}i===null?n[Qn]=[t]:i.push(t)}var Tt=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let t=this._lView,i=t[X];return di(i,t,i.firstChild,[])}constructor(t,i){this._lView=t,this._cdRefInjectingView=i}get context(){return this._lView[ye]}set context(t){this._lView[ye]=t}get destroyed(){return Jt(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let t=this._lView[ge];if(Ue(t)){let i=t[Xn],e=i?i.indexOf(this):-1;e>-1&&(po(t,e),$n(i,e))}this._attachedToViewContainer=!1}sd(this._lView[X],this._lView)}onDestroy(t){Zs(this._lView,t)}markForCheck(){hd(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[Y]&=-129}reattach(){jr(this._lView),this._lView[Y]|=128}detectChanges(){this._lView[Y]|=1024,Im(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new W(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let t=Cn(this._lView),i=this._lView[Gt];i!==null&&!t&&ad(i,this._lView),lm(this._lView[X],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new W(902,!1);this._appRef=t;let i=Cn(this._lView),e=this._lView[Gt];e!==null&&!i&&Sm(e,this._lView),jr(this._lView)}};var To=(()=>{class n{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=f6;constructor(i,e,r){this._declarationLView=i,this._declarationTContainer=e,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(i,e){return this.createEmbeddedViewImpl(i,e)}createEmbeddedViewImpl(i,e,r){let a=md(this._declarationLView,this._declarationTContainer,i,{embeddedViewInjector:e,dehydratedView:r});return new Tt(a)}}return n})();function f6(){return m6(ke(),se())}function m6(n,t){return n.type&4?new To(t,n,yo(n,t)):null}function vi(n,t,i,e,r){let a=n.data[t];if(a===null)a=h6(n,t,i,e,r),yp()&&(a.flags|=32);else if(a.type&64){a.type=i,a.value=e,a.attrs=r;let c=vp();a.injectorIndex=c===null?-1:c.injectorIndex}return En(a,!0),a}function h6(n,t,i,e,r){let a=Xs(),c=Qs(),u=c?a:a&&a.parent,f=n.data[t]=v6(n,u,i,t,e,r);return g6(n,f,a,c),f}function g6(n,t,i,e){n.firstChild===null&&(n.firstChild=t),i!==null&&(e?i.child==null&&t.parent!==null&&(i.child=t):i.next===null&&(i.next=t,t.prev=i))}function v6(n,t,i,e,r,a){let c=t?t.injectorIndex:-1,u=0;return Ys()&&(u|=128),{type:i,index:e,insertBeforeIndex:null,injectorIndex:c,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:u,providerIndexes:0,value:r,attrs:a,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var OS=new RegExp(`^(\\d+)*(${_v}|${wv})*(.*)`);var x6=()=>null,b6=()=>null;function Pl(n,t){return x6(n,t)}function y6(n,t,i){return b6(n,t,i)}var Dm=class{},ko=class{},Vl=class{resolveComponentFactory(t){throw new W(917,!1)}},xi=class{static NULL=new Vl},tn=class{},bi=(()=>{class n{destroyNode=null;static __NG_ELEMENT_ID__=()=>I6()}return n})();function I6(){let n=se(),t=ke(),i=qe(t.index,n);return(tt(i)?i:n)[pe]}var Tm=(()=>{class n{static \u0275prov=le({token:n,providedIn:"root",factory:()=>null})}return n})();var to={},ql=class{injector;parentInjector;constructor(t,i){this.injector=t,this.parentInjector=i}get(t,i,e){let r=this.injector.get(t,to,e);return r!==to||i===to?r:this.parentInjector.get(t,i,e)}};function Kp(n,t,i){let e=i?n.styles:null,r=i?n.classes:null,a=0;if(t!==null)for(let c=0;c<t.length;c++){let u=t[c];if(typeof u=="number")a=u;else if(a==1)r=_s(r,u);else if(a==2){let f=u,g=t[++c];e=_s(e,f+": "+g+";")}}i?n.styles=e:n.stylesWithoutHost=e,i?n.classes=r:n.classesWithoutHost=r}function x(n,t=0){let i=se();if(i===null)return te(n,t);let e=ke();return Sf(e,i,he(n),t)}function km(n,t,i,e,r){let a=e===null?null:{"":-1},c=r(n,i);if(c!==null){let u=c,f=null,g=null;for(let v of c)if(v.resolveHostDirectives!==null){[u,f,g]=v.resolveHostDirectives(c);break}w6(n,t,i,u,a,f,g)}a!==null&&e!==null&&C6(i,e,a)}function C6(n,t,i){let e=n.localNames=[];for(let r=0;r<t.length;r+=2){let a=i[t[r+1]];if(a==null)throw new W(-301,!1);e.push(t[r],a)}}function E6(n,t,i){t.componentOffset=i,(n.components??=[]).push(t.index)}function w6(n,t,i,e,r,a,c){let u=e.length,f=!1;for(let S=0;S<u;S++){let y=e[S];!f&&nt(y)&&(f=!0,E6(n,i,S)),wl(oo(i,t),n,y.type)}M6(i,n.data.length,u);for(let S=0;S<u;S++){let y=e[S];y.providersResolver&&y.providersResolver(y)}let g=!1,v=!1,I=em(n,t,u,null);u>0&&(i.directiveToIndex=new Map);for(let S=0;S<u;S++){let y=e[S];if(i.mergedAttrs=si(i.mergedAttrs,y.hostAttrs),S6(n,i,t,I,y),k6(I,y,r),c!==null&&c.has(y)){let[E,w]=c.get(y);i.directiveToIndex.set(y.type,[I,E+i.directiveStart,w+i.directiveStart])}else(a===null||!a.has(y))&&i.directiveToIndex.set(y.type,I);y.contentQueries!==null&&(i.flags|=4),(y.hostBindings!==null||y.hostAttrs!==null||y.hostVars!==0)&&(i.flags|=64);let L=y.type.prototype;!g&&(L.ngOnChanges||L.ngOnInit||L.ngDoCheck)&&((n.preOrderHooks??=[]).push(i.index),g=!0),!v&&(L.ngOnChanges||L.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(i.index),v=!0),I++}_6(n,i,a)}function _6(n,t,i){for(let e=t.directiveStart;e<t.directiveEnd;e++){let r=n.data[e];if(i===null||!i.has(r))ef(0,t,r,e),ef(1,t,r,e),nf(t,e,!1);else{let a=i.get(r);tf(0,t,a,e),tf(1,t,a,e),nf(t,e,!0)}}}function ef(n,t,i,e){let r=n===0?i.inputs:i.outputs;for(let a in r)if(r.hasOwnProperty(a)){let c;n===0?c=t.inputs??={}:c=t.outputs??={},c[a]??=[],c[a].push(e),Mm(t,a)}}function tf(n,t,i,e){let r=n===0?i.inputs:i.outputs;for(let a in r)if(r.hasOwnProperty(a)){let c=r[a],u;n===0?u=t.hostDirectiveInputs??={}:u=t.hostDirectiveOutputs??={},u[c]??=[],u[c].push(e,a),Mm(t,c)}}function Mm(n,t){t==="class"?n.flags|=8:t==="style"&&(n.flags|=16)}function nf(n,t,i){let{attrs:e,inputs:r,hostDirectiveInputs:a}=n;if(e===null||!i&&r===null||i&&a===null||Ql(n)){n.initialInputs??=[],n.initialInputs.push(null);return}let c=null,u=0;for(;u<e.length;){let f=e[u];if(f===0){u+=4;continue}else if(f===5){u+=2;continue}else if(typeof f=="number")break;if(!i&&r.hasOwnProperty(f)){let g=r[f];for(let v of g)if(v===t){c??=[],c.push(f,e[u+1]);break}}else if(i&&a.hasOwnProperty(f)){let g=a[f];for(let v=0;v<g.length;v+=2)if(g[v]===t){c??=[],c.push(g[v+1],e[u+1]);break}}u+=2}n.initialInputs??=[],n.initialInputs.push(c)}function S6(n,t,i,e,r){n.data[e]=r;let a=r.factory||(r.factory=qt(r.type,!0)),c=new en(a,nt(r),x,null);n.blueprint[e]=c,i[e]=c,D6(n,t,e,em(n,i,r.hostVars,mt),r)}function D6(n,t,i,e,r){let a=r.hostBindings;if(a){let c=n.hostBindingOpCodes;c===null&&(c=n.hostBindingOpCodes=[]);let u=~t.index;T6(c)!=u&&c.push(u),c.push(i,e,a)}}function T6(n){let t=n.length;for(;t>0;){let i=n[--t];if(typeof i=="number"&&i<0)return i}return 0}function k6(n,t,i){if(i){if(t.exportAs)for(let e=0;e<t.exportAs.length;e++)i[t.exportAs[e]]=n;nt(t)&&(i[""]=n)}}function M6(n,t,i){n.flags|=1,n.directiveStart=t,n.directiveEnd=t+i,n.providerIndexes=t}function Am(n,t,i,e,r,a,c,u){let f=t[X],g=f.consts,v=St(g,c),I=vi(f,n,i,e,v);return a&&km(f,t,I,St(g,u),r),I.mergedAttrs=si(I.mergedAttrs,I.attrs),I.attrs!==null&&Kp(I,I.attrs,!1),I.mergedAttrs!==null&&Kp(I,I.mergedAttrs,!0),f.queries!==null&&f.queries.elementStart(f,I),I}function Om(n,t){xf(n,t),Us(t)&&n.queries.elementEnd(t)}function yi(n,t,i){if(i===mt)return!1;let e=n[t];return Object.is(e,i)?!1:(n[t]=i,!0)}function gl(n,t,i){return function e(r){let a=_t(n)?qe(n.index,t):t;hd(a,5);let c=t[ye],u=rf(t,c,i,r),f=e.__ngNextListenerFn__;for(;f;)u=rf(t,c,f,r)&&u,f=f.__ngNextListenerFn__;return u}}function rf(n,t,i,e){let r=Z(null);try{return ce(6,t,i),i(e)!==!1}catch(a){return Z0(n,a),!1}finally{ce(7,t,i),Z(r)}}function A6(n,t,i,e,r,a,c,u){let f=Kn(n),g=!1,v=null;if(!e&&f&&(v=N6(t,i,a,n.index)),v!==null){let I=v.__ngLastListenerFn__||v;I.__ngNextListenerFn__=c,v.__ngLastListenerFn__=c,g=!0}else{let I=it(n,i),S=e?e(I):I;Dv(i,S,a,u);let y=r.listen(S,a,u);if(!O6(a)){let L=e?E=>e(Ve(E[n.index])):n.index;Nm(L,t,i,a,u,y,!1)}}return g}function O6(n){return n.startsWith("animation")||n.startsWith("transition")}function N6(n,t,i,e){let r=n.cleanup;if(r!=null)for(let a=0;a<r.length-1;a+=2){let c=r[a];if(c===i&&r[a+1]===e){let u=t[yn],f=r[a+2];return u&&u.length>f?u[f]:null}typeof c=="string"&&(a+=2)}return null}function Nm(n,t,i,e,r,a,c){let u=t.firstCreatePass?up(t):null,f=cp(i),g=f.length;f.push(r,a),u&&u.push(e,n,g,(g+1)*(c?-1:1))}function of(n,t,i,e,r,a){let c=t[i],u=t[X],g=u.data[i].outputs[e],I=c[g].subscribe(a);Nm(n.index,u,t,r,a,I,!0)}var Hl=Symbol("BINDING");var fo=class extends xi{ngModule;constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){let i=Ut(t);return new ci(i,this.ngModule)}};function F6(n){return Object.keys(n).map(t=>{let[i,e,r]=n[t],a={propName:i,templateName:t,isSignal:(e&So.SignalBased)!==0};return r&&(a.transform=r),a})}function L6(n){return Object.keys(n).map(t=>({propName:n[t],templateName:t}))}function R6(n,t,i){let e=t instanceof Re?t:t?.injector;return e&&n.getStandaloneInjector!==null&&(e=n.getStandaloneInjector(e)||e),e?new ql(i,e):i}function P6(n){let t=n.get(tn,null);if(t===null)throw new W(407,!1);let i=n.get(Tm,null),e=n.get(Bt,null);return{rendererFactory:t,sanitizer:i,changeDetectionScheduler:e,ngReflect:!1}}function V6(n,t){let i=Fm(n);return Zf(t,i,i==="svg"?op:i==="math"?ap:null)}function Fm(n){return(n.selectors[0][0]||"div").toLowerCase()}var ci=class extends ko{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=F6(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=L6(this.componentDef.outputs),this.cachedOutputs}constructor(t,i){super(),this.componentDef=t,this.ngModule=i,this.componentType=t.type,this.selector=c0(t.selectors),this.ngContentSelectors=t.ngContentSelectors??[],this.isBoundToModule=!!i}create(t,i,e,r,a,c){ce(22);let u=Z(null);try{let f=this.componentDef,g=q6(e,f,c,a),v=R6(f,r||this.ngModule,t),I=P6(v),S=I.rendererFactory.createRenderer(null,f),y=e?R0(S,e,f.encapsulation,v):V6(f,S),L=c?.some(af)||a?.some(D=>typeof D!="function"&&D.bindings.some(af)),E=ed(null,g,null,512|Kf(f),null,null,I,S,v,null,Rf(y,v,!0));E[me]=y,zr(E);let w=null;try{let D=Am(me,E,2,"#host",()=>g.directiveRegistry,!0,0);Yf(S,y,D),Sn(y,E),cd(g,E,D),Vf(g,D,E),Om(g,D),i!==void 0&&j6(D,this.ngContentSelectors,i),w=qe(D.index,E),E[ye]=w[ye],fd(g,E,null)}catch(D){throw w!==null&&Sl(w),Sl(E),D}finally{ce(23),Ur()}return new mo(this.componentType,E,!!L)}finally{Z(u)}}};function q6(n,t,i,e){let r=n?["ng-version","20.3.19"]:u0(t.selectors[0]),a=null,c=null,u=0;if(i)for(let v of i)u+=v[Hl].requiredVars,v.create&&(v.targetIdx=0,(a??=[]).push(v)),v.update&&(v.targetIdx=0,(c??=[]).push(v));if(e)for(let v=0;v<e.length;v++){let I=e[v];if(typeof I!="function")for(let S of I.bindings){u+=S[Hl].requiredVars;let y=v+1;S.create&&(S.targetIdx=y,(a??=[]).push(S)),S.update&&(S.targetIdx=y,(c??=[]).push(S))}}let f=[t];if(e)for(let v of e){let I=typeof v=="function"?v:v.type,S=Ps(I);f.push(S)}return Kl(0,null,H6(a,c),1,u,f,null,null,null,[r],null)}function H6(n,t){return!n&&!t?null:i=>{if(i&1&&n)for(let e of n)e.create();if(i&2&&t)for(let e of t)e.update()}}function af(n){let t=n[Hl].kind;return t==="input"||t==="twoWay"}var mo=class extends Dm{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(t,i,e){super(),this._rootLView=i,this._hasInputBindings=e,this._tNode=ei(i[X],me),this.location=yo(this._tNode,i),this.instance=qe(this._tNode.index,i)[ye],this.hostView=this.changeDetectorRef=new Tt(i,void 0),this.componentType=t}setInput(t,i){this._hasInputBindings;let e=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(t)&&Object.is(this.previousInputValues.get(t),i))return;let r=this._rootLView,a=pd(e,r[X],r,t,i);this.previousInputValues.set(t,i);let c=qe(e.index,r);hd(c,1)}get injector(){return new Kt(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}};function j6(n,t,i){let e=n.projection=[];for(let r=0;r<t.length;r++){let a=i[r];e.push(a!=null&&a.length?Array.from(a):null)}}var Mo=(()=>{class n{static __NG_ELEMENT_ID__=B6}return n})();function B6(){let n=ke();return U6(n,se())}var z6=Mo,Lm=class extends z6{_lContainer;_hostTNode;_hostLView;constructor(t,i,e){super(),this._lContainer=t,this._hostTNode=i,this._hostLView=e}get element(){return yo(this._hostTNode,this._hostLView)}get injector(){return new Kt(this._hostTNode,this._hostLView)}get parentInjector(){let t=$l(this._hostTNode,this._hostLView);if(yf(t)){let i=ro(t,this._hostLView),e=io(t),r=i[X].data[e+8];return new Kt(r,i)}else return new Kt(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){let i=sf(this._lContainer);return i!==null&&i[t]||null}get length(){return this._lContainer.length-we}createEmbeddedView(t,i,e){let r,a;typeof e=="number"?r=e:e!=null&&(r=e.index,a=e.injector);let c=Pl(this._lContainer,t.ssrId),u=t.createEmbeddedViewImpl(i||{},a,c);return this.insertImpl(u,r,uo(this._hostTNode,c)),u}createComponent(t,i,e,r,a,c,u){let f=t&&!K1(t),g;if(f)g=i;else{let w=i||{};g=w.index,e=w.injector,r=w.projectableNodes,a=w.environmentInjector||w.ngModuleRef,c=w.directives,u=w.bindings}let v=f?t:new ci(Ut(t)),I=e||this.parentInjector;if(!a&&v.ngModule==null){let D=(f?I:this.parentInjector).get(Re,null);D&&(a=D)}let S=Ut(v.componentType??{}),y=Pl(this._lContainer,S?.id??null),L=y?.firstChild??null,E=v.create(I,r,L,a,c,u);return this.insertImpl(E.hostView,g,uo(this._hostTNode,y)),E}insert(t,i){return this.insertImpl(t,i,!0)}insertImpl(t,i,e){let r=t._lView;if(sp(r)){let u=this.indexOf(t);if(u!==-1)this.detach(u);else{let f=r[ge],g=new Lm(f,f[Ee],f[ge]);g.detach(g.indexOf(t))}}let a=this._adjustIndex(i),c=this._lContainer;return gd(c,r,a,e),t.attachToViewContainerRef(),Fs(vl(c),a,t),t}move(t,i){return this.insert(t,i)}indexOf(t){let i=sf(this._lContainer);return i!==null?i.indexOf(t):-1}remove(t){let i=this._adjustIndex(t,-1),e=po(this._lContainer,i);e&&($n(vl(this._lContainer),i),sd(e[X],e))}detach(t){let i=this._adjustIndex(t,-1),e=po(this._lContainer,i);return e&&$n(vl(this._lContainer),i)!=null?new Tt(e):null}_adjustIndex(t,i=0){return t??this.length+i}};function sf(n){return n[Xn]}function vl(n){return n[Xn]||(n[Xn]=[])}function U6(n,t){let i,e=t[n.index];return Ue(e)?i=e:(i=_m(e,t,null,n),t[n.index]=i,td(t,i)),G6(i,t,n,e),new Lm(i,n,t)}function $6(n,t){let i=n[pe],e=i.createComment(""),r=it(t,n),a=i.parentNode(r);return lo(i,a,e,i.nextSibling(r),!1),e}var G6=J6,W6=()=>!1;function Z6(n,t,i){return W6(n,t,i)}function J6(n,t,i,e){if(n[wt])return;let r;i.type&8?r=Ve(e):r=$6(t,i),n[wt]=r}function Rm(n){let t=[],i=new Map;function e(r){let a=i.get(r);if(!a){let c=n(r);i.set(r,a=c.then(u=>X6(r,u)))}return a}return ho.forEach((r,a)=>{let c=[];r.templateUrl&&c.push(e(r.templateUrl).then(g=>{r.template=g}));let u=typeof r.styles=="string"?[r.styles]:r.styles||[];if(r.styles=u,r.styleUrl&&r.styleUrls?.length)throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple");if(r.styleUrls?.length){let g=r.styles.length,v=r.styleUrls;r.styleUrls.forEach((I,S)=>{u.push(""),c.push(e(I).then(y=>{u[g+S]=y,v.splice(v.indexOf(I),1),v.length==0&&(r.styleUrls=void 0)}))})}else r.styleUrl&&c.push(e(r.styleUrl).then(g=>{u.push(g),r.styleUrl=void 0}));let f=Promise.all(c).then(()=>Q6(a));t.push(f)}),Pm(),Promise.all(t).then(()=>{})}var ho=new Map,Y6=new Set;function Pm(){let n=ho;return ho=new Map,n}function Vm(){return ho.size===0}function X6(n,t){return typeof t=="string"?t:t.status!==void 0&&t.status!==200?Promise.reject(new W(918,!1)):t.text()}function Q6(n){Y6.delete(n)}var nn=class{},qm=class{};var ui=class extends nn{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new fo(this);constructor(t,i,e,r=!0){super(),this.ngModuleType=t,this._parent=i;let a=Xu(t);this._bootstrapComponents=Kv(a.bootstrap),this._r3Injector=al(t,i,[{provide:nn,useValue:this},{provide:xi,useValue:this.componentFactoryResolver},...e],ct(t),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(i=>i()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}},go=class extends qm{moduleType;constructor(t){super(),this.moduleType=t}create(t){return new ui(this.moduleType,t,[])}};function Hm(n,t,i){return new ui(n,t,i,!1)}var vo=class extends nn{injector;componentFactoryResolver=new fo(this);instance=null;constructor(t){super();let i=new jt([...t.providers,{provide:nn,useValue:this},{provide:xi,useValue:this.componentFactoryResolver}],t.parent||Wn(),t.debugName,new Set(["environment"]));this.injector=i,t.runEnvironmentInitializers&&i.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(t){this.injector.onDestroy(t)}};function jm(n,t,i=null){return new vo({providers:n,parent:t,debugName:i,runEnvironmentInitializers:!0}).injector}var K6=(()=>{class n{_injector;cachedInjectors=new Map;constructor(i){this._injector=i}getOrCreateStandaloneInjector(i){if(!i.standalone)return null;if(!this.cachedInjectors.has(i)){let e=Vs(!1,i.type),r=e.length>0?jm([e],this._injector,`Standalone[${i.type.name}]`):null;this.cachedInjectors.set(i,r)}return this.cachedInjectors.get(i)}ngOnDestroy(){try{for(let i of this.cachedInjectors.values())i!==null&&i.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=le({token:n,providedIn:"environment",factory:()=>new n(te(Re))})}return n})();function C(n){return fi(()=>{let t=Bm(n),i=de(re({},t),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===Wl.OnPush,directiveDefs:null,pipeDefs:null,dependencies:t.standalone&&n.dependencies||null,getStandaloneInjector:t.standalone?r=>r.get(K6).getOrCreateStandaloneInjector(i):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||pt.Emulated,styles:n.styles||Ne,_:null,schemas:n.schemas||null,tView:null,id:""});t.standalone&&gi("NgStandalone"),zm(i);let e=n.dependencies;return i.directiveDefs=lf(e,ex),i.pipeDefs=lf(e,Qu),i.id=ix(i),i})}function ex(n){return Ut(n)||Ps(n)}function Le(n){return fi(()=>({type:n.type,bootstrap:n.bootstrap||Ne,declarations:n.declarations||Ne,imports:n.imports||Ne,exports:n.exports||Ne,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function tx(n,t){if(n==null)return It;let i={};for(let e in n)if(n.hasOwnProperty(e)){let r=n[e],a,c,u,f;Array.isArray(r)?(u=r[0],a=r[1],c=r[2]??a,f=r[3]||null):(a=r,c=r,u=So.None,f=null),i[a]=[e,u,f],t[a]=c}return i}function nx(n){if(n==null)return It;let t={};for(let i in n)n.hasOwnProperty(i)&&(t[n[i]]=i);return t}function Ae(n){return fi(()=>{let t=Bm(n);return zm(t),t})}function Bm(n){let t={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:t,inputConfig:n.inputs||It,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||Ne,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,inputs:tx(n.inputs,t),outputs:nx(n.outputs),debugInfo:null}}function zm(n){n.features?.forEach(t=>t(n))}function lf(n,t){return n?()=>{let i=typeof n=="function"?n():n,e=[];for(let r of i){let a=t(r);a!==null&&e.push(a)}return e}:null}function ix(n){let t=0,i=typeof n.consts=="function"?"":n.consts,e=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,i,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let a of e.join("|"))t=Math.imul(31,t)+a.charCodeAt(0)<<0;return t+=2147483648,"c"+t}function rx(n){return Object.getPrototypeOf(n.prototype).constructor}function Ge(n){let t=rx(n.type),i=!0,e=[n];for(;t;){let r;if(nt(n))r=t.\u0275cmp||t.\u0275dir;else{if(t.\u0275cmp)throw new W(903,!1);r=t.\u0275dir}if(r){if(i){e.push(r);let c=n;c.inputs=xl(n.inputs),c.declaredInputs=xl(n.declaredInputs),c.outputs=xl(n.outputs);let u=r.hostBindings;u&&dx(n,u);let f=r.viewQuery,g=r.contentQueries;if(f&&sx(n,f),g&&lx(n,g),ox(n,r),zu(n.outputs,r.outputs),nt(r)&&r.data.animation){let v=n.data;v.animation=(v.animation||[]).concat(r.data.animation)}}let a=r.features;if(a)for(let c=0;c<a.length;c++){let u=a[c];u&&u.ngInherit&&u(n),u===Ge&&(i=!1)}}t=Object.getPrototypeOf(t)}ax(e)}function ox(n,t){for(let i in t.inputs){if(!t.inputs.hasOwnProperty(i)||n.inputs.hasOwnProperty(i))continue;let e=t.inputs[i];e!==void 0&&(n.inputs[i]=e,n.declaredInputs[i]=t.declaredInputs[i])}}function ax(n){let t=0,i=null;for(let e=n.length-1;e>=0;e--){let r=n[e];r.hostVars=t+=r.hostVars,r.hostAttrs=si(r.hostAttrs,i=si(i,r.hostAttrs))}}function xl(n){return n===It?{}:n===Ne?[]:n}function sx(n,t){let i=n.viewQuery;i?n.viewQuery=(e,r)=>{t(e,r),i(e,r)}:n.viewQuery=t}function lx(n,t){let i=n.contentQueries;i?n.contentQueries=(e,r,a)=>{t(e,r,a),i(e,r,a)}:n.contentQueries=t}function dx(n,t){let i=n.hostBindings;i?n.hostBindings=(e,r)=>{t(e,r),i(e,r)}:n.hostBindings=t}function Um(n,t,i,e,r,a,c,u){if(i.firstCreatePass){n.mergedAttrs=si(n.mergedAttrs,n.attrs);let v=n.tView=Kl(2,n,r,a,c,i.directiveRegistry,i.pipeRegistry,null,i.schemas,i.consts,null);i.queries!==null&&(i.queries.template(i,n),v.queries=i.queries.embeddedTView(n))}u&&(n.flags|=u),En(n,!1);let f=ux(i,t,n,e);$r()&&ld(i,t,f,n),Sn(f,t);let g=_m(f,t,f,n);t[e+me]=g,td(t,g),Z6(g,n,t)}function cx(n,t,i,e,r,a,c,u,f,g,v){let I=i+me,S;return t.firstCreatePass?(S=vi(t,I,4,c||null,u||null),Js()&&km(t,n,S,St(t.consts,g),hm),xf(t,S)):S=t.data[I],Um(S,n,t,i,e,r,a,f),Kn(S)&&cd(t,n,S),g!=null&&ud(n,S,v),S}function vd(n,t,i,e,r,a,c,u,f,g,v){let I=i+me,S;if(t.firstCreatePass){if(S=vi(t,I,4,c||null,u||null),g!=null){let y=St(t.consts,g);S.localNames=[];for(let L=0;L<y.length;L+=2)S.localNames.push(y[L],-1)}}else S=t.data[I];return Um(S,n,t,i,e,r,a,f),g!=null&&ud(n,S,v),S}function Ao(n,t,i,e,r,a,c,u){let f=se(),g=_e(),v=St(g.consts,a);return cx(f,g,n,t,i,e,r,v,void 0,c,u),Ao}var ux=px;function px(n,t,i,e){return Gr(!0),t[pe].createComment("")}var Oo=new J(""),kn=new J(""),Ii=(()=>{class n{_ngZone;registry;_isZoneStable=!0;_callbacks=[];_taskTrackingZone=null;_destroyRef;constructor(i,e,r){this._ngZone=i,this.registry=e,js()&&(this._destroyRef=ee(Xt,{optional:!0})??void 0),xd||($m(r),r.addToWindow(e)),this._watchAngularEvents(),i.run(()=>{this._taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){let i=this._ngZone.onUnstable.subscribe({next:()=>{this._isZoneStable=!1}}),e=this._ngZone.runOutsideAngular(()=>this._ngZone.onStable.subscribe({next:()=>{T.assertNotInAngularZone(),queueMicrotask(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}}));this._destroyRef?.onDestroy(()=>{i.unsubscribe(),e.unsubscribe()})}isStable(){return this._isZoneStable&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())queueMicrotask(()=>{for(;this._callbacks.length!==0;){let i=this._callbacks.pop();clearTimeout(i.timeoutId),i.doneCb()}});else{let i=this.getPendingTasks();this._callbacks=this._callbacks.filter(e=>e.updateCb&&e.updateCb(i)?(clearTimeout(e.timeoutId),!1):!0)}}getPendingTasks(){return this._taskTrackingZone?this._taskTrackingZone.macroTasks.map(i=>({source:i.source,creationLocation:i.creationLocation,data:i.data})):[]}addCallback(i,e,r){let a=-1;e&&e>0&&(a=setTimeout(()=>{this._callbacks=this._callbacks.filter(c=>c.timeoutId!==a),i()},e)),this._callbacks.push({doneCb:i,timeoutId:a,updateCb:r})}whenStable(i,e,r){if(r&&!this._taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(i,e,r),this._runCallbacksIfReady()}registerApplication(i){this.registry.registerApplication(i,this)}unregisterApplication(i){this.registry.unregisterApplication(i)}findProviders(i,e,r){return[]}static \u0275fac=function(e){return new(e||n)(te(T),te(Ci),te(kn))};static \u0275prov=le({token:n,factory:n.\u0275fac})}return n})(),Ci=(()=>{class n{_applications=new Map;registerApplication(i,e){this._applications.set(i,e)}unregisterApplication(i){this._applications.delete(i)}unregisterAllApplications(){this._applications.clear()}getTestability(i){return this._applications.get(i)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(i,e=!0){return xd?.findTestabilityInTree(this,i,e)??null}static \u0275fac=function(e){return new(e||n)};static \u0275prov=le({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})();function $m(n){xd=n}var xd;function Mn(n){return!!n&&typeof n.then=="function"}function bd(n){return!!n&&typeof n.subscribe=="function"}var No=new J("");var yd=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((i,e)=>{this.resolve=i,this.reject=e});appInits=ee(No,{optional:!0})??[];injector=ee(Qe);constructor(){}runInitializers(){if(this.initialized)return;let i=[];for(let r of this.appInits){let a=Pr(this.injector,r);if(Mn(a))i.push(a);else if(bd(a)){let c=new Promise((u,f)=>{a.subscribe({complete:u,error:f})});i.push(c)}}let e=()=>{this.done=!0,this.resolve()};Promise.all(i).then(()=>{e()}).catch(r=>{this.reject(r)}),i.length===0&&e(),this.initialized=!0}static \u0275fac=function(e){return new(e||n)};static \u0275prov=le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Gm=new J("");function Wm(){ns(()=>{let n="";throw new W(600,n)})}function Zm(n){return n.isBoundToModule}var fx=10;function Id(n,t){return Array.isArray(t)?t.reduce(Id,n):re(re({},n),t)}var kt=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=ee(rt);afterRenderManager=ee(am);zonelessEnabled=ee(Wr);rootEffectScheduler=ee(pl);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new lt;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=ee(Qt);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(Rt(i=>!i))}constructor(){ee(hi,{optional:!0})}whenStable(){let i;return new Promise(e=>{i=this.isStable.subscribe({next:r=>{r&&e()}})}).finally(()=>{i.unsubscribe()})}_injector=ee(Re);_rendererFactory=null;get injector(){return this._injector}bootstrap(i,e){return this.bootstrapImpl(i,e)}bootstrapImpl(i,e,r=Qe.NULL){return this._injector.get(T).run(()=>{ce(10);let c=i instanceof ko;if(!this._injector.get(yd).done){let L="";throw new W(405,L)}let f;c?f=i:f=this._injector.get(xi).resolveComponentFactory(i),this.componentTypes.push(f.componentType);let g=Zm(f)?void 0:this._injector.get(nn),v=e||f.selector,I=f.create(r,[],v,g),S=I.location.nativeElement,y=I.injector.get(Oo,null);return y?.registerApplication(S),I.onDestroy(()=>{this.detachView(I.hostView),ai(this.components,I),y?.unregisterApplication(S)}),this._loadComponent(I),ce(11,I),I})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){ce(12),this.tracingSnapshot!==null?this.tracingSnapshot.run(id.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw new W(101,!1);let i=Z(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,Z(i),this.afterTick.next(),ce(13)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(tn,null,{optional:!0}));let i=0;for(;this.dirtyFlags!==0&&i++<fx;)ce(14),this.synchronizeOnce(),ce(15)}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let i=!1;if(this.dirtyFlags&7){let e=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!e&&!ti(r))continue;let a=e&&!this.zonelessEnabled?0:1;Im(r,a),i=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}i||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:i})=>ti(i))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(i){let e=i;this._views.push(e),e.attachToAppRef(this)}detachView(i){let e=i;ai(this._views,e),e.detachFromAppRef()}_loadComponent(i){this.attachView(i.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(i),this._injector.get(Gm,[]).forEach(r=>r(i))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(i=>i()),this._views.slice().forEach(i=>i.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(i){return this._destroyListeners.push(i),()=>ai(this._destroyListeners,i)}destroy(){if(this._destroyed)throw new W(406,!1);let i=this._injector;i.destroy&&!i.destroyed&&i.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(e){return new(e||n)};static \u0275prov=le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function ai(n,t){let i=n.indexOf(t);i>-1&&n.splice(i,1)}var qS=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";function Ei(n,t,i,e,r,a,c,u){gi("NgControlFlow");let f=se(),g=_e(),v=St(g.consts,a);return vd(f,g,n,t,i,e,r,v,256,c,u),Cd}function Cd(n,t,i,e,r,a,c,u){gi("NgControlFlow");let f=se(),g=_e(),v=St(g.consts,a);return vd(f,g,n,t,i,e,r,v,512,c,u),Cd}function wi(n,t){gi("NgControlFlow");let i=se(),e=ii(),r=i[e]!==mt?i[e]:-1,a=r!==-1?df(i,me+r):void 0,c=0;if(yi(i,e,n)){let u=Z(null);try{if(a!==void 0&&u6(a,c),n!==-1){let f=me+n,g=df(i,f),v=mx(i[X],f),I=y6(g,v,i),S=md(i,v,t,{dehydratedView:I});gd(g,S,c,uo(v,I))}}finally{Z(u)}}else if(a!==void 0){let u=c6(a,c);u!==void 0&&(u[ye]=t)}}function df(n,t){return n[t]}function mx(n,t){return ei(n,t)}function p(n,t,i){let e=se(),r=ii();if(yi(e,r,t)){let a=_e(),c=ol();mm(c,e,n,t,e[pe],i)}return p}function cf(n,t,i,e,r){pd(t,n,i,r?"class":"style",e)}function l(n,t,i,e){let r=se(),a=r[X],c=n+me,u=a.firstCreatePass?Am(c,r,2,t,hm,Js(),i,e):a.data[c];if(G0(u,r,n,t,hx),Kn(u)){let f=r[X];cd(f,r,u),Vf(f,u,r)}return e!=null&&ud(r,u),l}function o(){let n=_e(),t=ke(),i=W0(t);return n.firstCreatePass&&Om(n,i),hp(i)&&gp(),mp(),i.classesWithoutHost!=null&&ov(i)&&cf(n,i,se(),i.classesWithoutHost,!0),i.stylesWithoutHost!=null&&av(i)&&cf(n,i,se(),i.stylesWithoutHost,!1),o}function b(n,t,i,e){return l(n,t,i,e),o(),b}var hx=(n,t,i,e,r)=>(Gr(!0),Zf(t[pe],e,Tp()));var _i="en-US";var gx=_i;function Jm(n){typeof n=="string"&&(gx=n.toLowerCase().replace(/_/g,"-"))}function m(n,t,i){let e=se(),r=_e(),a=ke();return Ym(r,e,e[pe],a,n,t,i),m}function Ym(n,t,i,e,r,a,c){let u=!0,f=null;if((e.type&3||c)&&(f??=gl(e,t,a),A6(e,n,t,c,i,r,a,f)&&(u=!1)),u){let g=e.outputs?.[r],v=e.hostDirectiveOutputs?.[r];if(v&&v.length)for(let I=0;I<v.length;I+=2){let S=v[I],y=v[I+1];f??=gl(e,t,a),of(e,t,S,y,r,f)}if(g&&g.length)for(let I of g)f??=gl(e,t,a),of(e,t,I,r,r,f)}}function Si(n=1){return Dp(n)}function vx(n,t){let i=null,e=o0(n);for(let r=0;r<t.length;r++){let a=t[r];if(a==="*"){i=r;continue}if(e===null?Qf(n,a,!0):l0(e,a))return r}return i}function V(n){let t=se()[Te][Ee];if(!t.projection){let i=n?n.length:1,e=t.projection=Zu(i,null),r=e.slice(),a=t.child;for(;a!==null;){if(a.type!==128){let c=n?vx(a,n):0;c!==null&&(r[c]?r[c].projectionNext=a:e[c]=a,r[c]=a)}a=a.next}}}function q(n,t=0,i,e,r,a){let c=se(),u=_e(),f=e?n+1:null;f!==null&&vd(c,u,f,e,r,a,null,i);let g=vi(u,me+n,16,null,i||null);g.projection===null&&(g.projection=t),Ks();let I=!c[bn]||Ys();c[Te][Ee].projection[g.projection]===null&&f!==null?xx(c,u,f):I&&!wo(g)&&N0(u,c,g)}function xx(n,t,i){let e=me+i,r=t.data[e],a=n[e],c=Pl(a,r.tView.ssrId),u=md(n,r,void 0,{dehydratedView:c});gd(a,u,0,uo(r,c))}function Xr(n,t){return n<<17|t<<2}function rn(n){return n>>17&32767}function bx(n){return(n&2)==2}function yx(n,t){return n&131071|t<<17}function jl(n){return n|2}function Tn(n){return(n&131068)>>2}function bl(n,t){return n&-131069|t<<2}function Ix(n){return(n&1)===1}function Bl(n){return n|1}function Cx(n,t,i,e,r,a){let c=a?t.classBindings:t.styleBindings,u=rn(c),f=Tn(c);n[e]=i;let g=!1,v;if(Array.isArray(i)){let I=i;v=I[1],(v===null||xn(I,v)>0)&&(g=!0)}else v=i;if(r)if(f!==0){let S=rn(n[u+1]);n[e+1]=Xr(S,u),S!==0&&(n[S+1]=bl(n[S+1],e)),n[u+1]=yx(n[u+1],e)}else n[e+1]=Xr(u,0),u!==0&&(n[u+1]=bl(n[u+1],e)),u=e;else n[e+1]=Xr(f,0),u===0?u=e:n[f+1]=bl(n[f+1],e),f=e;g&&(n[e+1]=jl(n[e+1])),uf(n,v,e,!0),uf(n,v,e,!1),Ex(t,v,n,e,a),c=Xr(u,f),a?t.classBindings=c:t.styleBindings=c}function Ex(n,t,i,e,r){let a=r?n.residualClasses:n.residualStyles;a!=null&&typeof t=="string"&&xn(a,t)>=0&&(i[e+1]=Bl(i[e+1]))}function uf(n,t,i,e){let r=n[i+1],a=t===null,c=e?rn(r):Tn(r),u=!1;for(;c!==0&&(u===!1||a);){let f=n[c],g=n[c+1];wx(f,t)&&(u=!0,n[c+1]=e?Bl(g):jl(g)),c=e?rn(g):Tn(g)}u&&(n[i+1]=e?jl(r):Bl(r))}function wx(n,t){return n===null||t==null||(Array.isArray(n)?n[1]:n)===t?!0:Array.isArray(n)&&typeof t=="string"?xn(n,t)>=0:!1}function Fo(n,t){return _x(n,t,null,!0),Fo}function _x(n,t,i,e){let r=se(),a=_e(),c=bp(2);if(a.firstUpdatePass&&Dx(a,n,c,e),t!==mt&&yi(r,c,t)){let u=a.data[Yt()];Ox(a,u,r,r[pe],n,r[c+1]=Nx(t,i),e,c)}}function Sx(n,t){return t>=n.expandoStartIndex}function Dx(n,t,i,e){let r=n.data;if(r[i+1]===null){let a=r[Yt()],c=Sx(n,i);Fx(a,e)&&t===null&&!c&&(t=!1),t=Tx(r,a,t,e),Cx(r,a,t,i,c,e)}}function Tx(n,t,i,e){let r=Ep(n),a=e?t.residualClasses:t.residualStyles;if(r===null)(e?t.classBindings:t.styleBindings)===0&&(i=yl(null,n,t,i,e),i=pi(i,t.attrs,e),a=null);else{let c=t.directiveStylingLast;if(c===-1||n[c]!==r)if(i=yl(r,n,t,i,e),a===null){let f=kx(n,t,e);f!==void 0&&Array.isArray(f)&&(f=yl(null,n,t,f[1],e),f=pi(f,t.attrs,e),Mx(n,t,e,f))}else a=Ax(n,t,e)}return a!==void 0&&(e?t.residualClasses=a:t.residualStyles=a),i}function kx(n,t,i){let e=i?t.classBindings:t.styleBindings;if(Tn(e)!==0)return n[rn(e)]}function Mx(n,t,i,e){let r=i?t.classBindings:t.styleBindings;n[rn(r)]=e}function Ax(n,t,i){let e,r=t.directiveEnd;for(let a=1+t.directiveStylingLast;a<r;a++){let c=n[a].hostAttrs;e=pi(e,c,i)}return pi(e,t.attrs,i)}function yl(n,t,i,e,r){let a=null,c=i.directiveEnd,u=i.directiveStylingLast;for(u===-1?u=i.directiveStart:u++;u<c&&(a=t[u],e=pi(e,a.hostAttrs,r),a!==n);)u++;return n!==null&&(i.directiveStylingLast=u),e}function pi(n,t,i){let e=i?1:2,r=-1;if(t!==null)for(let a=0;a<t.length;a++){let c=t[a];typeof c=="number"?r=c:r===e&&(Array.isArray(n)||(n=n===void 0?[]:["",n]),Yu(n,c,i?!0:t[++a]))}return n===void 0?null:n}function Ox(n,t,i,e,r,a,c,u){if(!(t.type&3))return;let f=n.data,g=f[u+1],v=Ix(g)?pf(f,t,i,r,Tn(g),c):void 0;if(!xo(v)){xo(a)||bx(g)&&(a=pf(f,null,i,r,u,c));let I=$s(Yt(),i);L0(e,c,I,r,a)}}function pf(n,t,i,e,r,a){let c=t===null,u;for(;r>0;){let f=n[r],g=Array.isArray(f),v=g?f[1]:f,I=v===null,S=i[r+1];S===mt&&(S=I?Ne:void 0);let y=I?Lr(S,e):v===e?S:void 0;if(g&&!xo(y)&&(y=Lr(f,e)),xo(y)&&(u=y,c))return u;let L=n[r+1];r=c?rn(L):Tn(L)}if(t!==null){let f=a?t.residualClasses:t.residualStyles;f!=null&&(u=Lr(f,e))}return u}function xo(n){return n!==void 0}function Nx(n,t){return n==null||n===""||(typeof t=="string"?n=n+t:typeof n=="object"&&(n=ct(Yl(n)))),n}function Fx(n,t){return(n.flags&(t?8:16))!==0}function s(n,t=""){let i=se(),e=_e(),r=n+me,a=e.firstCreatePass?vi(e,r,1,t,null):e.data[r],c=Lx(e,i,a,t,n);i[r]=c,$r()&&ld(e,i,c,a),En(a,!1)}var Lx=(n,t,i,e,r)=>(Gr(!0),Wv(t[pe],e));function Rx(n,t,i,e=""){return yi(n,ii(),i)?t+Or(i)+e:mt}function h(n,t,i){let e=se(),r=Rx(e,n,t,i);return r!==mt&&Px(e,Yt(),r),h}function Px(n,t,i){let e=$s(t,n);Zv(n[pe],e,i)}function We(n,t,i){dl(t)&&(t=t());let e=se(),r=ii();if(yi(e,r,t)){let a=_e(),c=ol();mm(c,e,n,t,e[pe],i)}return We}function st(n,t){let i=dl(n);return i&&n.set(t),i}function Ze(n,t){let i=se(),e=_e(),r=ke();return Ym(e,i,i[pe],r,n,t),Ze}function Vx(n,t,i){let e=_e();if(e.firstCreatePass){let r=nt(n);zl(i,e.data,e.blueprint,r,!0),zl(t,e.data,e.blueprint,r,!1)}}function zl(n,t,i,e,r){if(n=he(n),Array.isArray(n))for(let a=0;a<n.length;a++)zl(n[a],t,i,e,r);else{let a=_e(),c=se(),u=ke(),f=Ht(n)?n:he(n.provide),g=Hs(n),v=u.providerIndexes&1048575,I=u.directiveStart,S=u.providerIndexes>>20;if(Ht(n)||!n.multi){let y=new en(g,r,x,null),L=Cl(f,t,r?v:v+S,I);L===-1?(wl(oo(u,c),a,f),Il(a,n,t.length),t.push(f),u.directiveStart++,u.directiveEnd++,r&&(u.providerIndexes+=1048576),i.push(y),c.push(y)):(i[L]=y,c[L]=y)}else{let y=Cl(f,t,v+S,I),L=Cl(f,t,v,v+S),E=y>=0&&i[y],w=L>=0&&i[L];if(r&&!w||!r&&!E){wl(oo(u,c),a,f);let D=jx(r?Hx:qx,i.length,r,e,g,n);!r&&w&&(i[L].providerFactory=D),Il(a,n,t.length,0),t.push(f),u.directiveStart++,u.directiveEnd++,r&&(u.providerIndexes+=1048576),i.push(D),c.push(D)}else{let D=Xm(i[r?L:y],g,!r&&e);Il(a,n,y>-1?y:L,D)}!r&&e&&w&&i[L].componentProviders++}}}function Il(n,t,i,e){let r=Ht(t),a=ip(t);if(r||a){let f=(a?he(t.useClass):t).prototype.ngOnDestroy;if(f){let g=n.destroyHooks||(n.destroyHooks=[]);if(!r&&t.multi){let v=g.indexOf(i);v===-1?g.push(i,[e,f]):g[v+1].push(e,f)}else g.push(i,f)}}}function Xm(n,t,i){return i&&n.componentProviders++,n.multi.push(t)-1}function Cl(n,t,i,e){for(let r=i;r<e;r++)if(t[r]===n)return r;return-1}function qx(n,t,i,e,r){return Ul(this.multi,[])}function Hx(n,t,i,e,r){let a=this.multi,c;if(this.providerFactory){let u=this.providerFactory.componentProviders,f=ao(e,e[X],this.providerFactory.index,r);c=f.slice(0,u),Ul(a,c);for(let g=u;g<f.length;g++)c.push(f[g])}else c=[],Ul(a,c);return c}function Ul(n,t){for(let i=0;i<n.length;i++){let e=n[i];t.push(e())}return t}function jx(n,t,i,e,r,a){let c=new en(n,i,x,null);return c.multi=[],c.index=t,c.componentProviders=0,Xm(c,r,e&&!i),c}function Mt(n,t=[]){return i=>{i.providersResolver=(e,r)=>Vx(e,r?r(n):n,t)}}var Qr=null;function Qm(n){Qr!==null&&(n.defaultEncapsulation!==Qr.defaultEncapsulation||n.preserveWhitespaces!==Qr.preserveWhitespaces)||(Qr=n)}var Km=new J("");var Bx=(()=>{class n{zone=ee(T);changeDetectionScheduler=ee(Bt);applicationRef=ee(kt);applicationErrorHandler=ee(rt);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{try{this.applicationRef.dirtyFlags|=1,this.applicationRef._tick()}catch(i){this.applicationErrorHandler(i)}})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(e){return new(e||n)};static \u0275prov=le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function eh({ngZoneFactory:n,ignoreChangesOutsideZone:t,scheduleInRootZone:i}){return n??=()=>new T(de(re({},Ed()),{scheduleInRootZone:i})),[{provide:T,useFactory:n},{provide:Ct,multi:!0,useFactory:()=>{let e=ee(Bx,{optional:!0});return()=>e.initialize()}},{provide:Ct,multi:!0,useFactory:()=>{let e=ee(zx);return()=>{e.initialize()}}},t===!0?{provide:cl,useValue:!0}:[],{provide:ul,useValue:i??nm},{provide:rt,useFactory:()=>{let e=ee(T),r=ee(Re),a;return c=>{e.runOutsideAngular(()=>{r.destroyed&&!a?setTimeout(()=>{throw c}):(a??=r.get(Ke),a.handleError(c))})}}}]}function Ed(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var zx=(()=>{class n{subscription=new Ie;initialized=!1;zone=ee(T);pendingTasks=ee(Qt);initialize(){if(this.initialized)return;this.initialized=!0;let i=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(i=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{T.assertNotInAngularZone(),queueMicrotask(()=>{i!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(i),i=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{T.assertInAngularZone(),i??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(e){return new(e||n)};static \u0275prov=le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var th=(()=>{class n{applicationErrorHandler=ee(rt);appRef=ee(kt);taskService=ee(Qt);ngZone=ee(T);zonelessEnabled=ee(Wr);tracing=ee(hi,{optional:!0});disableScheduling=ee(cl,{optional:!0})??!1;zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new Ie;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(co):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(ee(ul,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof li||!this.zoneIsDefined)}notify(i){if(!this.zonelessEnabled&&i===5)return;let e=!1;switch(i){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2,e=!0;break}case 12:{this.appRef.dirtyFlags|=16,e=!0;break}case 13:{this.appRef.dirtyFlags|=2,e=!0;break}case 11:{e=!0;break}default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick(e))return;let r=this.useMicrotaskScheduler?Wp:im;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(i){return!(this.disableScheduling&&!i||this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(co+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let i=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(e){this.taskService.remove(i),this.applicationErrorHandler(e)}finally{this.cleanup()}this.useMicrotaskScheduler=!0,Wp(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(i)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let i=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(i)}}static \u0275fac=function(e){return new(e||n)};static \u0275prov=le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ux(){return typeof $localize<"u"&&$localize.locale||_i}var Lo=new J("",{providedIn:"root",factory:()=>ee(Lo,{optional:!0,skipSelf:!0})||Ux()});function ht(n){return Hu(n)}function Di(n,t){return or(n,t?.equal)}var nh=class{[Se];constructor(t){this[Se]=t}destroy(){this[Se].destroy()}};var rb=new J("");rb.__NG_ELEMENT_ID__=n=>{let t=ke();if(t===null)throw new W(204,!1);if(t.type&2)return t.value;if(n&8)return null;throw new W(204,!1)};function ob(n,t,i){let e=new go(i);return Promise.resolve(e)}function ih(n){for(let t=n.length-1;t>=0;t--)if(n[t]!==void 0)return n[t]}var Ro=new J(""),ab=new J("");function Ti(n){return!n.moduleRef}function sb(n){let t=Ti(n)?n.r3Injector:n.moduleRef.injector,i=t.get(T);return i.run(()=>{Ti(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let e=t.get(rt),r;if(i.runOutsideAngular(()=>{r=i.onError.subscribe({next:e})}),Ti(n)){let a=()=>t.destroy(),c=n.platformInjector.get(Ro);c.add(a),t.onDestroy(()=>{r.unsubscribe(),c.delete(a)})}else{let a=()=>n.moduleRef.destroy(),c=n.platformInjector.get(Ro);c.add(a),n.moduleRef.onDestroy(()=>{ai(n.allPlatformModules,n.moduleRef),r.unsubscribe(),c.delete(a)})}return db(e,i,()=>{let a=t.get(Qt),c=a.add(),u=t.get(yd);return u.runInitializers(),u.donePromise.then(()=>{let f=t.get(Lo,_i);if(Jm(f||_i),!t.get(ab,!0))return Ti(n)?t.get(kt):(n.allPlatformModules.push(n.moduleRef),n.moduleRef);if(Ti(n)){let v=t.get(kt);return n.rootComponent!==void 0&&v.bootstrap(n.rootComponent),v}else return oh?.(n.moduleRef,n.allPlatformModules),n.moduleRef}).finally(()=>{a.remove(c)})})})}var oh;function rh(){oh=lb}function lb(n,t){let i=n.injector.get(kt);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(e=>i.bootstrap(e));else if(n.instance.ngDoBootstrap)n.instance.ngDoBootstrap(i);else throw new W(-403,!1);t.push(n)}function db(n,t,i){try{let e=i();return Mn(e)?e.catch(r=>{throw t.runOutsideAngular(()=>n(r)),r}):e}catch(e){throw t.runOutsideAngular(()=>n(e)),e}}var ah=(()=>{class n{_injector;_modules=[];_destroyListeners=[];_destroyed=!1;constructor(i){this._injector=i}bootstrapModuleFactory(i,e){let r=e?.scheduleInRootZone,a=()=>om(e?.ngZone,de(re({},Ed({eventCoalescing:e?.ngZoneEventCoalescing,runCoalescing:e?.ngZoneRunCoalescing})),{scheduleInRootZone:r})),c=e?.ignoreChangesOutsideZone,u=[eh({ngZoneFactory:a,ignoreChangesOutsideZone:c}),{provide:Bt,useExisting:th},Mp],f=Hm(i.moduleType,this.injector,u);return rh(),sb({moduleRef:f,allPlatformModules:this._modules,platformInjector:this.injector})}bootstrapModule(i,e=[]){let r=Id({},e);return rh(),ob(this.injector,r,i).then(a=>this.bootstrapModuleFactory(a,r))}onDestroy(i){this._destroyListeners.push(i)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new W(404,!1);this._modules.slice().forEach(e=>e.destroy()),this._destroyListeners.forEach(e=>e());let i=this._injector.get(Ro,null);i&&(i.forEach(e=>e()),i.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}static \u0275fac=function(e){return new(e||n)(te(Qe))};static \u0275prov=le({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})(),wd=null;function cb(n){if(Sd())throw new W(400,!1);Wm(),wd=n;let t=n.get(ah);return fb(n),t}function _d(n,t,i=[]){let e=`Platform: ${t}`,r=new J(e);return(a=[])=>{let c=Sd();if(!c){let u=[...i,...a,{provide:r,useValue:!0}];c=n?.(u)??cb(ub(u,e))}return pb(r)}}function ub(n=[],t){return Qe.create({name:t,providers:[{provide:Gn,useValue:"platform"},{provide:Ro,useValue:new Set([()=>wd=null])},...n]})}function pb(n){let t=Sd();if(!t)throw new W(-401,!1);return t}function Sd(){return wd?.get(ah)??null}function fb(n){let t=n.get(Co,null);Pr(n,()=>{t?.forEach(i=>i())})}var P=(()=>{class n{static __NG_ELEMENT_ID__=mb}return n})();function mb(n){return hb(ke(),se(),(n&16)===16)}function hb(n,t,i){if(_t(n)&&!i){let e=qe(n.index,t);return new Tt(e,e)}else if(n.type&175){let e=t[Te];return new Tt(e,t)}return null}var sh=_d(null,"core",[]),lh=(()=>{class n{constructor(i){}static \u0275fac=function(e){return new(e||n)(te(kt))};static \u0275mod=Le({type:n});static \u0275inj=De({})}return n})();function dh(n){return typeof n=="boolean"?n:n!=null&&n!=="false"}var ch=null;function gt(){return ch}function Dd(n){ch??=n}var ki=class{};var Td=(()=>{class n{_viewContainer;_context=new Po;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(i,e){this._viewContainer=i,this._thenTemplateRef=e}set ngIf(i){this._context.$implicit=this._context.ngIf=i,this._updateView()}set ngIfThen(i){uh(i,!1),this._thenTemplateRef=i,this._thenViewRef=null,this._updateView()}set ngIfElse(i){uh(i,!1),this._elseTemplateRef=i,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(i,e){return!0}static \u0275fac=function(e){return new(e||n)(x(Mo),x(To))};static \u0275dir=Ae({type:n,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return n})(),Po=class{$implicit=null;ngIf=null};function uh(n,t){if(n&&!n.createEmbeddedView)throw new W(2020,!1)}var Mi=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=Le({type:n});static \u0275inj=De({})}return n})();function kd(n,t){t=encodeURIComponent(t);for(let i of n.split(";")){let e=i.indexOf("="),[r,a]=e==-1?[i,""]:[i.slice(0,e),i.slice(e+1)];if(r.trim()===t)return decodeURIComponent(a)}return null}var Ai=class{};var Md="browser";function Ad(n){return n===Md}var Oi=class{_doc;constructor(t){this._doc=t}manager},Vo=(()=>{class n extends Oi{constructor(i){super(i)}supports(i){return!0}addEventListener(i,e,r,a){return i.addEventListener(e,r,a),()=>this.removeEventListener(i,e,r,a)}removeEventListener(i,e,r,a){return i.removeEventListener(e,r,a)}static \u0275fac=function(e){return new(e||n)(te(Me))};static \u0275prov=le({token:n,factory:n.\u0275fac})}return n})(),Ho=new J(""),Rd=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(i,e){this._zone=e,i.forEach(c=>{c.manager=this});let r=i.filter(c=>!(c instanceof Vo));this._plugins=r.slice().reverse();let a=i.find(c=>c instanceof Vo);a&&this._plugins.push(a)}addEventListener(i,e,r,a){return this._findPluginFor(e).addEventListener(i,e,r,a)}getZone(){return this._zone}_findPluginFor(i){let e=this._eventNameToPlugin.get(i);if(e)return e;if(e=this._plugins.find(a=>a.supports(i)),!e)throw new W(5101,!1);return this._eventNameToPlugin.set(i,e),e}static \u0275fac=function(e){return new(e||n)(te(Ho),te(T))};static \u0275prov=le({token:n,factory:n.\u0275fac})}return n})(),Od="ng-app-id";function ph(n){for(let t of n)t.remove()}function fh(n,t){let i=t.createElement("style");return i.textContent=n,i}function xb(n,t,i,e){let r=n.head?.querySelectorAll(`style[${Od}="${t}"],link[${Od}="${t}"]`);if(r)for(let a of r)a.removeAttribute(Od),a instanceof HTMLLinkElement?e.set(a.href.slice(a.href.lastIndexOf("/")+1),{usage:0,elements:[a]}):a.textContent&&i.set(a.textContent,{usage:0,elements:[a]})}function Fd(n,t){let i=t.createElement("link");return i.setAttribute("rel","stylesheet"),i.setAttribute("href",n),i}var Pd=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(i,e,r,a={}){this.doc=i,this.appId=e,this.nonce=r,xb(i,e,this.inline,this.external),this.hosts.add(i.head)}addStyles(i,e){for(let r of i)this.addUsage(r,this.inline,fh);e?.forEach(r=>this.addUsage(r,this.external,Fd))}removeStyles(i,e){for(let r of i)this.removeUsage(r,this.inline);e?.forEach(r=>this.removeUsage(r,this.external))}addUsage(i,e,r){let a=e.get(i);a?a.usage++:e.set(i,{usage:1,elements:[...this.hosts].map(c=>this.addElement(c,r(i,this.doc)))})}removeUsage(i,e){let r=e.get(i);r&&(r.usage--,r.usage<=0&&(ph(r.elements),e.delete(i)))}ngOnDestroy(){for(let[,{elements:i}]of[...this.inline,...this.external])ph(i);this.hosts.clear()}addHost(i){this.hosts.add(i);for(let[e,{elements:r}]of this.inline)r.push(this.addElement(i,fh(e,this.doc)));for(let[e,{elements:r}]of this.external)r.push(this.addElement(i,Fd(e,this.doc)))}removeHost(i){this.hosts.delete(i)}addElement(i,e){return this.nonce&&e.setAttribute("nonce",this.nonce),i.appendChild(e)}static \u0275fac=function(e){return new(e||n)(te(Me),te(Io),te(Eo,8),te(on))};static \u0275prov=le({token:n,factory:n.\u0275fac})}return n})(),Nd={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Vd=/%COMP%/g;var hh="%COMP%",bb=`_nghost-${hh}`,yb=`_ngcontent-${hh}`,Ib=!0,Cb=new J("",{providedIn:"root",factory:()=>Ib});function Eb(n){return yb.replace(Vd,n)}function wb(n){return bb.replace(Vd,n)}function gh(n,t){return t.map(i=>i.replace(Vd,n))}var qd=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(i,e,r,a,c,u,f=null,g=null){this.eventManager=i,this.sharedStylesHost=e,this.appId=r,this.removeStylesOnCompDestroy=a,this.doc=c,this.ngZone=u,this.nonce=f,this.tracingService=g,this.platformIsServer=!1,this.defaultRenderer=new Ni(i,c,u,this.platformIsServer,this.tracingService)}createRenderer(i,e){if(!i||!e)return this.defaultRenderer;let r=this.getOrCreateRenderer(i,e);return r instanceof qo?r.applyToHost(i):r instanceof Fi&&r.applyStyles(),r}getOrCreateRenderer(i,e){let r=this.rendererByCompId,a=r.get(e.id);if(!a){let c=this.doc,u=this.ngZone,f=this.eventManager,g=this.sharedStylesHost,v=this.removeStylesOnCompDestroy,I=this.platformIsServer,S=this.tracingService;switch(e.encapsulation){case pt.Emulated:a=new qo(f,g,e,this.appId,v,c,u,I,S);break;case pt.ShadowDom:return new Ld(f,g,i,e,c,u,this.nonce,I,S);default:a=new Fi(f,g,e,v,c,u,I,S);break}r.set(e.id,a)}return a}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(i){this.rendererByCompId.delete(i)}static \u0275fac=function(e){return new(e||n)(te(Rd),te(Pd),te(Io),te(Cb),te(Me),te(T),te(Eo),te(hi,8))};static \u0275prov=le({token:n,factory:n.\u0275fac})}return n})(),Ni=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(t,i,e,r,a){this.eventManager=t,this.doc=i,this.ngZone=e,this.platformIsServer=r,this.tracingService=a}destroy(){}destroyNode=null;createElement(t,i){return i?this.doc.createElementNS(Nd[i]||i,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,i){(mh(t)?t.content:t).appendChild(i)}insertBefore(t,i,e){t&&(mh(t)?t.content:t).insertBefore(i,e)}removeChild(t,i){i.remove()}selectRootElement(t,i){let e=typeof t=="string"?this.doc.querySelector(t):t;if(!e)throw new W(-5104,!1);return i||(e.textContent=""),e}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,i,e,r){if(r){i=r+":"+i;let a=Nd[r];a?t.setAttributeNS(a,i,e):t.setAttribute(i,e)}else t.setAttribute(i,e)}removeAttribute(t,i,e){if(e){let r=Nd[e];r?t.removeAttributeNS(r,i):t.removeAttribute(`${e}:${i}`)}else t.removeAttribute(i)}addClass(t,i){t.classList.add(i)}removeClass(t,i){t.classList.remove(i)}setStyle(t,i,e,r){r&(at.DashCase|at.Important)?t.style.setProperty(i,e,r&at.Important?"important":""):t.style[i]=e}removeStyle(t,i,e){e&at.DashCase?t.style.removeProperty(i):t.style[i]=""}setProperty(t,i,e){t!=null&&(t[i]=e)}setValue(t,i){t.nodeValue=i}listen(t,i,e,r){if(typeof t=="string"&&(t=gt().getGlobalEventTarget(this.doc,t),!t))throw new W(5102,!1);let a=this.decoratePreventDefault(e);return this.tracingService?.wrapEventListener&&(a=this.tracingService.wrapEventListener(t,i,a)),this.eventManager.addEventListener(t,i,a,r)}decoratePreventDefault(t){return i=>{if(i==="__ngUnwrap__")return t;t(i)===!1&&i.preventDefault()}}};function mh(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Ld=class extends Ni{sharedStylesHost;hostEl;shadowRoot;constructor(t,i,e,r,a,c,u,f,g){super(t,a,c,f,g),this.sharedStylesHost=i,this.hostEl=e,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let v=r.styles;v=gh(r.id,v);for(let S of v){let y=document.createElement("style");u&&y.setAttribute("nonce",u),y.textContent=S,this.shadowRoot.appendChild(y)}let I=r.getExternalStyles?.();if(I)for(let S of I){let y=Fd(S,a);u&&y.setAttribute("nonce",u),this.shadowRoot.appendChild(y)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,i){return super.appendChild(this.nodeOrShadowRoot(t),i)}insertBefore(t,i,e){return super.insertBefore(this.nodeOrShadowRoot(t),i,e)}removeChild(t,i){return super.removeChild(null,i)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Fi=class extends Ni{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(t,i,e,r,a,c,u,f,g){super(t,a,c,u,f),this.sharedStylesHost=i,this.removeStylesOnCompDestroy=r;let v=e.styles;this.styles=g?gh(g,v):v,this.styleUrls=e.getExternalStyles?.(g)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Dn.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},qo=class extends Fi{contentAttr;hostAttr;constructor(t,i,e,r,a,c,u,f,g){let v=r+"-"+e.id;super(t,i,e,a,c,u,f,g,v),this.contentAttr=Eb(v),this.hostAttr=wb(v)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,i){let e=super.createElement(t,i);return super.setAttribute(e,this.contentAttr,""),e}};var jo=class n extends ki{supportsDOMEvents=!0;static makeCurrent(){Dd(new n)}onAndCancel(t,i,e,r){return t.addEventListener(i,e,r),()=>{t.removeEventListener(i,e,r)}}dispatchEvent(t,i){t.dispatchEvent(i)}remove(t){t.remove()}createElement(t,i){return i=i||this.getDefaultDocument(),i.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,i){return i==="window"?window:i==="document"?t:i==="body"?t.body:null}getBaseHref(t){let i=_b();return i==null?null:Sb(i)}resetBaseElement(){Li=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return kd(document.cookie,t)}},Li=null;function _b(){return Li=Li||document.head.querySelector("base"),Li?Li.getAttribute("href"):null}function Sb(n){return new URL(n,document.baseURI).pathname}var Bo=class{addToWindow(t){Ce.getAngularTestability=(e,r=!0)=>{let a=t.findTestabilityInTree(e,r);if(a==null)throw new W(5103,!1);return a},Ce.getAllAngularTestabilities=()=>t.getAllTestabilities(),Ce.getAllAngularRootElements=()=>t.getAllRootElements();let i=e=>{let r=Ce.getAllAngularTestabilities(),a=r.length,c=function(){a--,a==0&&e()};r.forEach(u=>{u.whenStable(c)})};Ce.frameworkStabilizers||(Ce.frameworkStabilizers=[]),Ce.frameworkStabilizers.push(i)}findTestabilityInTree(t,i,e){if(i==null)return null;let r=t.getTestability(i);return r??(e?gt().isShadowRoot(i)?this.findTestabilityInTree(t,i.host,!0):this.findTestabilityInTree(t,i.parentElement,!0):null)}},Db=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(e){return new(e||n)};static \u0275prov=le({token:n,factory:n.\u0275fac})}return n})(),vh=["alt","control","meta","shift"],Tb={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},kb={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},xh=(()=>{class n extends Oi{constructor(i){super(i)}supports(i){return n.parseEventName(i)!=null}addEventListener(i,e,r,a){let c=n.parseEventName(e),u=n.eventCallback(c.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>gt().onAndCancel(i,c.domEventName,u,a))}static parseEventName(i){let e=i.toLowerCase().split("."),r=e.shift();if(e.length===0||!(r==="keydown"||r==="keyup"))return null;let a=n._normalizeKey(e.pop()),c="",u=e.indexOf("code");if(u>-1&&(e.splice(u,1),c="code."),vh.forEach(g=>{let v=e.indexOf(g);v>-1&&(e.splice(v,1),c+=g+".")}),c+=a,e.length!=0||a.length===0)return null;let f={};return f.domEventName=r,f.fullKey=c,f}static matchEventFullKeyCode(i,e){let r=Tb[i.key]||i.key,a="";return e.indexOf("code.")>-1&&(r=i.code,a="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),vh.forEach(c=>{if(c!==r){let u=kb[c];u(i)&&(a+=c+".")}}),a+=r,a===e)}static eventCallback(i,e,r){return a=>{n.matchEventFullKeyCode(a,i)&&r.runGuarded(()=>e(a))}}static _normalizeKey(i){return i==="esc"?"escape":i}static \u0275fac=function(e){return new(e||n)(te(Me))};static \u0275prov=le({token:n,factory:n.\u0275fac})}return n})();function Mb(){jo.makeCurrent()}function Ab(){return new Ke}function Ob(){return Zl(document),document}var Nb=[{provide:on,useValue:Md},{provide:Co,useValue:Mb,multi:!0},{provide:Me,useFactory:Ob}],Hd=_d(sh,"browser",Nb);var Fb=[{provide:kn,useClass:Bo},{provide:Oo,useClass:Ii,deps:[T,Ci,kn]},{provide:Ii,useClass:Ii,deps:[T,Ci,kn]}],Lb=[{provide:Gn,useValue:"root"},{provide:Ke,useFactory:Ab},{provide:Ho,useClass:Vo,multi:!0,deps:[Me]},{provide:Ho,useClass:xh,multi:!0,deps:[Me]},qd,Pd,Rd,{provide:tn,useExisting:qd},{provide:Ai,useClass:Db},[]],jd=(()=>{class n{constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275mod=Le({type:n});static \u0275inj=De({providers:[...Lb,...Fb],imports:[Mi,lh]})}return n})();var Sh=(()=>{class n{_renderer;_elementRef;onChange=i=>{};onTouched=()=>{};constructor(i,e){this._renderer=i,this._elementRef=e}setProperty(i,e){this._renderer.setProperty(this._elementRef.nativeElement,i,e)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}static \u0275fac=function(e){return new(e||n)(x(bi),x(F))};static \u0275dir=Ae({type:n})}return n})(),Rb=(()=>{class n extends Sh{static \u0275fac=(()=>{let i;return function(r){return(i||(i=Gl(n)))(r||n)}})();static \u0275dir=Ae({type:n,features:[Ge]})}return n})(),Nn=new J("");var Pb={provide:Nn,useExisting:Be(()=>Dh),multi:!0};function Vb(){let n=gt()?gt().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var qb=new J(""),Dh=(()=>{class n extends Sh{_compositionMode;_composing=!1;constructor(i,e,r){super(i,e),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Vb())}writeValue(i){let e=i??"";this.setProperty("value",e)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}static \u0275fac=function(e){return new(e||n)(x(bi),x(F),x(qb,8))};static \u0275dir=Ae({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){e&1&&m("input",function(c){return r._handleInput(c.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(c){return r._compositionEnd(c.target.value)})},standalone:!1,features:[Mt([Pb]),Ge]})}return n})();var Hb=new J(""),jb=new J("");function Th(n){return n!=null}function kh(n){return Mn(n)?ps(n):n}function Mh(n){let t={};return n.forEach(i=>{t=i!=null?re(re({},t),i):t}),Object.keys(t).length===0?null:t}function Ah(n,t){return t.map(i=>i(n))}function Bb(n){return!n.validate}function Oh(n){return n.map(t=>Bb(t)?t:i=>t.validate(i))}function zb(n){if(!n)return null;let t=n.filter(Th);return t.length==0?null:function(i){return Mh(Ah(i,t))}}function Nh(n){return n!=null?zb(Oh(n)):null}function Ub(n){if(!n)return null;let t=n.filter(Th);return t.length==0?null:function(i){let e=Ah(i,t).map(kh);return fs(e).pipe(Rt(Mh))}}function Fh(n){return n!=null?Ub(Oh(n)):null}function bh(n,t){return n===null?[t]:Array.isArray(n)?[...n,t]:[n,t]}function $b(n){return n._rawValidators}function Gb(n){return n._rawAsyncValidators}function Bd(n){return n?Array.isArray(n)?n:[n]:[]}function Uo(n,t){return Array.isArray(n)?n.includes(t):n===t}function yh(n,t){let i=Bd(t);return Bd(n).forEach(r=>{Uo(i,r)||i.push(r)}),i}function Ih(n,t){return Bd(t).filter(i=>!Uo(n,i))}var $o=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=Nh(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=Fh(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,i){return this.control?this.control.hasError(t,i):!1}getError(t,i){return this.control?this.control.getError(t,i):null}},zd=class extends $o{name;get formDirective(){return null}get path(){return null}},Hi=class extends $o{_parent=null;name=null;valueAccessor=null},Ud=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Wb={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},GL=de(re({},Wb),{"[class.ng-submitted]":"isSubmitted"}),Wo=(()=>{class n extends Ud{constructor(i){super(i)}static \u0275fac=function(e){return new(e||n)(x(Hi,2))};static \u0275dir=Ae({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){e&2&&Fo("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[Ge]})}return n})();var Ri="VALID",zo="INVALID",An="PENDING",Pi="DISABLED",an=class{},Go=class extends an{value;source;constructor(t,i){super(),this.value=t,this.source=i}},Vi=class extends an{pristine;source;constructor(t,i){super(),this.pristine=t,this.source=i}},qi=class extends an{touched;source;constructor(t,i){super(),this.touched=t,this.source=i}},On=class extends an{status;source;constructor(t,i){super(),this.status=t,this.source=i}};var $d=class extends an{source;constructor(t){super(),this.source=t}};function Zb(n){return(Zo(n)?n.validators:n)||null}function Jb(n){return Array.isArray(n)?Nh(n):n||null}function Yb(n,t){return(Zo(t)?t.asyncValidators:n)||null}function Xb(n){return Array.isArray(n)?Fh(n):n||null}function Zo(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}var Gd=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,i){this._assignValidators(t),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return ht(this.statusReactive)}set status(t){ht(()=>this.statusReactive.set(t))}_status=Di(()=>this.statusReactive());statusReactive=ut(void 0);get valid(){return this.status===Ri}get invalid(){return this.status===zo}get pending(){return this.status==An}get disabled(){return this.status===Pi}get enabled(){return this.status!==Pi}errors;get pristine(){return ht(this.pristineReactive)}set pristine(t){ht(()=>this.pristineReactive.set(t))}_pristine=Di(()=>this.pristineReactive());pristineReactive=ut(!0);get dirty(){return!this.pristine}get touched(){return ht(this.touchedReactive)}set touched(t){ht(()=>this.touchedReactive.set(t))}_touched=Di(()=>this.touchedReactive());touchedReactive=ut(!1);get untouched(){return!this.touched}_events=new lt;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(yh(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(yh(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Ih(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Ih(t,this._rawAsyncValidators))}hasValidator(t){return Uo(this._rawValidators,t)}hasAsyncValidator(t){return Uo(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let i=this.touched===!1;this.touched=!0;let e=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsTouched(de(re({},t),{sourceControl:e})),i&&t.emitEvent!==!1&&this._events.next(new qi(!0,e))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(i=>i.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(i=>i.markAllAsTouched(t))}markAsUntouched(t={}){let i=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let e=t.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:e})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,e),i&&t.emitEvent!==!1&&this._events.next(new qi(!1,e))}markAsDirty(t={}){let i=this.pristine===!0;this.pristine=!1;let e=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsDirty(de(re({},t),{sourceControl:e})),i&&t.emitEvent!==!1&&this._events.next(new Vi(!1,e))}markAsPristine(t={}){let i=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let e=t.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t,e),i&&t.emitEvent!==!1&&this._events.next(new Vi(!0,e))}markAsPending(t={}){this.status=An;let i=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new On(this.status,i)),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.markAsPending(de(re({},t),{sourceControl:i}))}disable(t={}){let i=this._parentMarkedDirty(t.onlySelf);this.status=Pi,this.errors=null,this._forEachChild(r=>{r.disable(de(re({},t),{onlySelf:!0}))}),this._updateValue();let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Go(this.value,e)),this._events.next(new On(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(de(re({},t),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){let i=this._parentMarkedDirty(t.onlySelf);this.status=Ri,this._forEachChild(e=>{e.enable(de(re({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(de(re({},t),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(e=>e(!1))}_updateAncestors(t,i){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine({},i),this._parent._updateTouched({},i))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let e=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Ri||this.status===An)&&this._runAsyncValidator(e,t.emitEvent)}let i=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Go(this.value,i)),this._events.next(new On(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(de(re({},t),{sourceControl:i}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Pi:Ri}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,i){if(this.asyncValidator){this.status=An,this._hasOwnPendingAsyncValidator={emitEvent:i!==!1,shouldHaveEmitted:t!==!1};let e=kh(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:i,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,i={}){this.errors=t,this._updateControlsErrors(i.emitEvent!==!1,this,i.shouldHaveEmitted)}get(t){let i=t;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((e,r)=>e&&e._find(r),this)}getError(t,i){let e=i?this.get(i):this;return e&&e.errors?e.errors[t]:null}hasError(t,i){return!!this.getError(t,i)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,i,e){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||e)&&this._events.next(new On(this.status,i)),this._parent&&this._parent._updateControlsErrors(t,i,e)}_initObservables(){this.valueChanges=new R,this.statusChanges=new R}_calculateStatus(){return this._allControlsDisabled()?Pi:this.errors?zo:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(An)?An:this._anyControlsHaveStatus(zo)?zo:Ri}_anyControlsHaveStatus(t){return this._anyControls(i=>i.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,i){let e=!this._anyControlsDirty(),r=this.pristine!==e;this.pristine=e,this._parent&&!t.onlySelf&&this._parent._updatePristine(t,i),r&&this._events.next(new Vi(this.pristine,i))}_updateTouched(t={},i){this.touched=this._anyControlsTouched(),this._events.next(new qi(this.touched,i)),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,i)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){Zo(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){let i=this._parent&&this._parent.dirty;return!t&&!!i&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=Jb(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=Xb(this._rawAsyncValidators)}};var Lh=new J("",{providedIn:"root",factory:()=>Wd}),Wd="always";function Qb(n,t){return[...t.path,n]}function Kb(n,t,i=Wd){ty(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||i==="always")&&t.valueAccessor.setDisabledState?.(n.disabled),ny(n,t),ry(n,t),iy(n,t),ey(n,t)}function Ch(n,t){n.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(t)})}function ey(n,t){if(t.valueAccessor.setDisabledState){let i=e=>{t.valueAccessor.setDisabledState(e)};n.registerOnDisabledChange(i),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(i)})}}function ty(n,t){let i=$b(n);t.validator!==null?n.setValidators(bh(i,t.validator)):typeof i=="function"&&n.setValidators([i]);let e=Gb(n);t.asyncValidator!==null?n.setAsyncValidators(bh(e,t.asyncValidator)):typeof e=="function"&&n.setAsyncValidators([e]);let r=()=>n.updateValueAndValidity();Ch(t._rawValidators,r),Ch(t._rawAsyncValidators,r)}function ny(n,t){t.valueAccessor.registerOnChange(i=>{n._pendingValue=i,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&Rh(n,t)})}function iy(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&Rh(n,t),n.updateOn!=="submit"&&n.markAsTouched()})}function Rh(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function ry(n,t){let i=(e,r)=>{t.valueAccessor.writeValue(e),r&&t.viewToModelUpdate(e)};n.registerOnChange(i),t._registerOnDestroy(()=>{n._unregisterOnChange(i)})}function oy(n,t){if(!n.hasOwnProperty("model"))return!1;let i=n.model;return i.isFirstChange()?!0:!Object.is(t,i.currentValue)}function ay(n){return Object.getPrototypeOf(n.constructor)===Rb}function sy(n,t){if(!t)return null;Array.isArray(t);let i,e,r;return t.forEach(a=>{a.constructor===Dh?i=a:ay(a)?e=a:r=a}),r||e||i||null}function Eh(n,t){let i=n.indexOf(t);i>-1&&n.splice(i,1)}function wh(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var ly=class extends Gd{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,i,e){super(Zb(i),Yb(e,i)),this._applyFormState(t),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Zo(i)&&(i.nonNullable||i.initialValueIsDefault)&&(wh(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,i={}){this.value=this._pendingValue=t,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(e=>e(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(t,i={}){this.setValue(t,i)}reset(t=this.defaultValue,i={}){this._applyFormState(t),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1,i?.emitEvent!==!1&&this._events.next(new $d(this))}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Eh(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Eh(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){wh(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var dy={provide:Hi,useExisting:Be(()=>ji)},_h=Promise.resolve(),ji=(()=>{class n extends Hi{_changeDetectorRef;callSetDisabledState;control=new ly;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new R;constructor(i,e,r,a,c,u){super(),this._changeDetectorRef=c,this.callSetDisabledState=u,this._parent=i,this._setValidators(e),this._setAsyncValidators(r),this.valueAccessor=sy(this,a)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let e=i.name.previousValue;this.formDirective.removeControl({name:e,path:this._getPath(e)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),oy(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Kb(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){_h.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let e=i.isDisabled.currentValue,r=e!==0&&dh(e);_h.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?Qb(i,this._parent):[i]}static \u0275fac=function(e){return new(e||n)(x(zd,9),x(Hb,10),x(jb,10),x(Nn,10),x(P,8),x(Lh,8))};static \u0275dir=Ae({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[Mt([dy]),Ge,bo]})}return n})();var cy=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=Le({type:n});static \u0275inj=De({})}return n})();var Ph=(()=>{class n{static withConfig(i){return{ngModule:n,providers:[{provide:Lh,useValue:i.callSetDisabledState??Wd}]}}static \u0275fac=function(e){return new(e||n)};static \u0275mod=Le({type:n});static \u0275inj=De({imports:[cy]})}return n})();var qh=(n,t)=>Pn(null,null,function*(){if(!(typeof window>"u"))return yield ou(),au(JSON.parse('[["ifx-table",[[769,"ifx-table",{"cols":[8],"rows":[8],"buttonRendererOptions":[16],"iconButtonRendererOptions":[16],"checkboxRendererOptions":[16],"rowHeight":[1,"row-height"],"tableHeight":[1,"table-height"],"pagination":[4],"paginationItemsPerPage":[1,"pagination-items-per-page"],"filterOrientation":[1,"filter-orientation"],"headline":[1],"headlineNumber":[2,"headline-number"],"variant":[1],"serverSidePagination":[4,"server-side-pagination"],"serverPageChangeHandler":[16],"enableSelection":[4,"enable-selection"],"showLoading":[4,"show-loading"],"fitColumns":[4,"fit-columns"],"columnMinWidth":[2,"column-min-width"],"columnWidth":[1,"column-width"],"currentPage":[32],"rowData":[32],"colData":[32],"filterOptions":[32],"currentFilters":[32],"uniqueKey":[32],"showAllItems":[32],"paginationPageSize":[32],"showSidebarFilters":[32],"matchingResultsCount":[32],"selectedRows":[32],"selectAll":[32],"selectedRowsData":[32],"onBtShowLoading":[64]},[[0,"ifxItemsPerPageChange","handleResultsPerPageChange"],[0,"ifxChange","handleChipChange"]],{"rows":[{"rowsChanged":0}],"fitColumns":[{"onSizingOptionsChanged":0}],"columnMinWidth":[{"onSizingOptionsChanged":0}],"cols":[{"colsChanged":0}],"buttonRendererOptions":[{"onButtonRendererOptionsChanged":0}],"iconButtonRendererOptions":[{"onIconButtonRendererOptionsChanged":0}],"checkboxRendererOptions":[{"onCheckboxRendererOptionsChanged":0}]}]]],["ifx-templates-ui",[[1,"ifx-templates-ui",null,[[0,"fieldError","handleError"],[0,"toggleTemplates","filterTemplates"]]]]],["ifx-set-filter",[[513,"ifx-set-filter",{"filterName":[1,"filter-name"],"filterLabel":[1,"filter-label"],"placeholder":[1],"type":[1],"options":[1],"filterValues":[32]}]]],["ifx-file-upload",[[513,"ifx-file-upload",{"dragAndDrop":[4,"drag-and-drop"],"required":[4],"disabled":[4],"maxFileSizeMB":[2,"max-file-size-m-b"],"allowedFileTypes":[1,"allowed-file-types"],"additionalAllowedFileTypes":[1,"additional-allowed-file-types"],"allowAnyFileType":[4,"allow-any-file-type"],"allowedFileExtensions":[1,"allowed-file-extensions"],"uploadHandler":[16],"maxFiles":[6146,"max-files"],"label":[1],"labelRequiredError":[1,"label-required-error"],"labelBrowseFiles":[1,"label-browse-files"],"labelDragAndDrop":[1,"label-drag-and-drop"],"labelUploadedFilesHeading":[1,"label-uploaded-files-heading"],"labelFileTooLarge":[1,"label-file-too-large"],"labelUnsupportedFileType":[1,"label-unsupported-file-type"],"labelUploaded":[1,"label-uploaded"],"labelUploadFailed":[1,"label-upload-failed"],"labelSupportedFormatsTemplate":[1,"label-supported-formats-template"],"labelFileSingular":[1,"label-file-singular"],"labelFilePlural":[1,"label-file-plural"],"labelMaxFilesInfo":[1,"label-max-files-info"],"labelMaxFilesExceeded":[1,"label-max-files-exceeded"],"ariaLabelBrowseFiles":[1,"aria-label-browse-files"],"ariaLabelDropzone":[1,"aria-label-dropzone"],"ariaLabelFileInput":[1,"aria-label-file-input"],"ariaLabelRemoveFile":[1,"aria-label-remove-file"],"ariaLabelCancelUpload":[1,"aria-label-cancel-upload"],"ariaLabelRetryUpload":[1,"aria-label-retry-upload"],"ariaLabelUploadingStatus":[1,"aria-label-uploading-status"],"ariaLabelUploadedStatus":[1,"aria-label-uploaded-status"],"ariaLabelUploadFailedStatus":[1,"aria-label-upload-failed-status"],"isDragOver":[32],"files":[32],"uploadTasks":[32],"rejectedSizeFiles":[32],"rejectedTypeFiles":[32],"requiredError":[32],"statusMessage":[32],"injectDemoState":[64],"triggerDemoValidation":[64]}]]],["ifx-icons-preview",[[513,"ifx-icons-preview",{"iconsArray":[32],"isCopied":[32],"copiedIndex":[32],"copiedIcon":[32],"htmlTag":[32],"iconName":[32],"searchTerm":[32]}]]],["ifx-tabs",[[769,"ifx-tabs",{"orientation":[1],"activeTabIndex":[2,"active-tab-index"],"fullWidth":[4,"full-width"],"label":[1],"number":[2],"subline":[1],"positionSticky":[4,"position-sticky"],"internalOrientation":[32],"internalActiveTabIndex":[32],"tabObjects":[32],"canScrollLeft":[32],"canScrollRight":[32],"atTop":[32]},[[9,"resize","updateBorderOnWindowResize"],[0,"tabHeaderChange","handleTabHeaderChange"],[9,"scroll","handleScroll"],[0,"slotchange","onSlotChange"],[0,"keydown","handleKeyDown"]],{"activeTabIndex":[{"activeTabIndexChanged":0}]}]]],["ifx-list-entry",[[513,"ifx-list-entry",{"value":[1028],"label":[1],"type":[1]},[[0,"ifxChange","handleFilterEntryChange"]],{"value":[{"valueChanged":0}]}]]],["ifx-overview-table",[[1,"ifx-overview-table"]]],["ifx-dropdown-trigger-button",[[769,"ifx-dropdown-trigger-button",{"isOpen":[4,"is-open"],"theme":[1],"variant":[1],"size":[1],"disabled":[4],"hideArrow":[4,"hide-arrow"]}]]],["ifx-filter-accordion",[[769,"ifx-filter-accordion",{"maxVisibleItems":[2,"max-visible-items"],"filterGroupName":[1,"filter-group-name"],"expanded":[32],"count":[32],"totalItems":[32]}]]],["ifx-filter-bar",[[769,"ifx-filter-bar",{"maxShownFilters":[2,"max-shown-filters"],"selectedOptions":[32],"showAllFilters":[32],"visibleSlots":[32],"showMoreFilters":[64]}]]],["ifx-filter-search",[[513,"ifx-filter-search",{"filterName":[1,"filter-name"],"disabled":[4],"filterValue":[1025,"filter-value"],"filterKey":[1,"filter-key"],"filterOrientation":[1,"filter-orientation"],"placeholder":[1],"showDeleteIcon":[32]},[[0,"ifxInput","handleFilterSearchChange"]],{"value":[{"valueChanged":0}]}]]],["ifx-list",[[769,"ifx-list",{"name":[1],"maxVisibleItems":[2,"max-visible-items"],"type":[1],"resetTrigger":[1028,"reset-trigger"],"expanded":[32],"showMore":[32],"selectedCount":[32],"totalItems":[32],"internalResetTrigger":[32]},null,{"type":[{"handleTypeChange":0}],"resetTrigger":[{"resetTriggerChanged":0}]}]]],["ifx-modal",[[769,"ifx-modal",{"opened":[1540],"caption":[1],"captionAriaLabel":[1,"caption-aria-label"],"closeOnOverlayClick":[4,"close-on-overlay-click"],"variant":[1],"size":[1],"alertIcon":[1,"alert-icon"],"showCloseButton":[4,"show-close-button"],"closeButtonAriaLabel":[1,"close-button-aria-label"],"showModal":[32],"slotButtonsPresent":[32],"openModal":[64],"closeModal":[64]},null,{"opened":[{"openedChanged":0}]}]]],["ifx-navbar-item",[[769,"ifx-navbar-item",{"showLabel":[4,"show-label"],"icon":[1],"href":[1],"target":[1],"hideOnMobile":[4,"hide-on-mobile"],"numberIndicator":[2,"number-indicator"],"dotIndicator":[4,"dot-indicator"],"internalHref":[32],"isMenuItem":[32],"hasChildNavItems":[32],"isSidebarMenuItem":[32],"itemPosition":[32],"hideComponent":[64],"showComponent":[64],"toggleChildren":[64],"moveChildComponentsIntoSubLayerMenu":[64],"toggleFirstLayerItem":[64],"addMenuItemClass":[64],"moveChildComponentsBackIntoNavbar":[64],"returnToFirstLayer":[64],"setMenuItemPosition":[64],"setItemSideSpecifications":[64]},[[5,"mousedown","handleOutsideClick"]]]]],["ifx-search-bar",[[513,"ifx-search-bar",{"isOpen":[4,"is-open"],"disabled":[4],"value":[1025],"maxlength":[2],"autocomplete":[1],"showCloseButton":[4,"show-close-button"],"internalState":[32],"open":[64],"close":[64]},null,{"isOpen":[{"handlePropChange":0}]}]]],["ifx-sidebar-item",[[769,"ifx-sidebar-item",{"icon":[1],"href":[1],"target":[1],"numberIndicator":[2,"number-indicator"],"active":[4],"isActionItem":[4,"is-action-item"],"handleItemClick":[16],"internalHref":[32],"isExpandable":[32],"isNested":[32],"isSubMenuItem":[32],"showIcon":[32],"showIconWrapper":[32],"indicatorVariant":[32],"internalActiveState":[32],"setActiveClasses":[64],"expandMenu":[64],"isItemExpandable":[64]},[[0,"consoleError","handleConsoleError"]],{"active":[{"handleActiveChange":0}],"numberIndicator":[{"handleNumberIndicatorChange":0}]}]]],["ifx-tree-view-item",[[769,"ifx-tree-view-item",{"expanded":[1540],"initiallyExpanded":[4,"initially-expanded"],"disableItem":[4,"disable-item"],"ariaLabelText":[1,"aria-label-text"],"initiallySelected":[4,"initially-selected"],"value":[1],"hasChildren":[32],"isChecked":[32],"partialChecked":[32],"level":[32],"disableAllItems":[32],"expandAllItems":[32],"suppressExpandEvents":[32]},null,{"expanded":[{"handleExpandedChange":0}],"disableItem":[{"handleDisableItemChange":0}]}]]],["ifx-accordion-item",[[769,"ifx-accordion-item",{"caption":[1],"open":[1028],"ariaLevelNumber":[2,"aria-level-number"],"icon":[1],"internalOpen":[32]},[[0,"keydown","handleKeydown"]],{"open":[{"openChanged":0}]}]]],["ifx-ai-label",[[513,"ifx-ai-label",{"divider":[4],"variant":[1]}]]],["ifx-breadcrumb-item-label",[[769,"ifx-breadcrumb-item-label",{"icon":[1],"href":[1],"target":[1]}]]],["ifx-checkbox-group",[[769,"ifx-checkbox-group",{"alignment":[1],"size":[1],"showGroupLabel":[4,"show-group-label"],"groupLabelText":[1,"group-label-text"],"showCaption":[4,"show-caption"],"captionText":[1,"caption-text"],"showCaptionIcon":[4,"show-caption-icon"],"required":[4],"hasErrors":[32],"setGroupError":[64]},[[0,"ifxError","handleCheckboxError"]]]]],["ifx-date-picker",[[513,"ifx-date-picker",{"size":[1],"error":[4],"success":[4],"disabled":[4],"ariaLabelText":[1,"aria-label-text"],"value":[1],"type":[1],"max":[1],"min":[1],"required":[4],"label":[1],"caption":[1],"autocomplete":[1],"internalValue":[32],"clear":[64]},null,{"value":[{"handleValueChange":0}]}]]],["ifx-download",[[769,"ifx-download",{"tokens":[1]}]]],["ifx-dropdown-item",[[769,"ifx-dropdown-item",{"icon":[1],"href":[1],"target":[1],"hide":[4],"error":[4],"size":[32]},[[16,"menuSize","handleMenuSize"]]]]],["ifx-navbar",[[769,"ifx-navbar",{"applicationName":[1,"application-name"],"fixed":[4],"showLogoAndAppname":[4,"show-logo-and-appname"],"logoHref":[1,"logo-href"],"logoHrefTarget":[1,"logo-href-target"],"main":[32],"products":[32],"applications":[32],"design":[32],"support":[32],"about":[32],"hasLeftMenuItems":[32],"searchBarIsOpen":[32],"internalLogoHref":[32],"internalLogoHrefTarget":[32]},[[0,"ifxNavItem","clearFirstLayerMenu"],[0,"ifxOpen","handleSearchBarToggle"]]]]],["ifx-popover",[[769,"ifx-popover",{"popoverTitle":[1,"popover-title"],"text":[1],"position":[1],"disabled":[4],"open":[1540],"ariaLabelText":[1,"aria-label"],"popoverVisible":[32],"computedArrowPosition":[32],"show":[64],"hide":[64],"toggle":[64]},null,{"open":[{"openChanged":0}],"position":[{"positionChanged":0}]}]]],["ifx-radio-button-group",[[769,"ifx-radio-button-group",{"alignment":[1],"size":[1],"showGroupLabel":[4,"show-group-label"],"groupLabelText":[1,"group-label-text"],"showCaption":[4,"show-caption"],"captionText":[1,"caption-text"],"showCaptionIcon":[4,"show-caption-icon"],"required":[4],"hasErrors":[32],"setGroupError":[64]},[[0,"ifxError","handleRadioButtonError"]]]]],["ifx-segment",[[769,"ifx-segment",{"icon":[1],"segmentIndex":[2,"segment-index"],"selected":[1028],"value":[1]}]]],["ifx-segmented-control",[[769,"ifx-segmented-control",{"caption":[1],"label":[1],"size":[1],"required":[4],"error":[4]},[[0,"segmentSelect","onSegmentSelect"]]]]],["ifx-sidebar",[[769,"ifx-sidebar",{"applicationName":[1,"application-name"],"initialCollapse":[4,"initial-collapse"],"showFooter":[4,"show-footer"],"showHeader":[4,"show-header"],"termsOfUse":[1,"terms-of-use"],"imprint":[1],"privacyPolicy":[1,"privacy-policy"],"footerHrefTarget":[1,"footer-href-target"],"logoHref":[1,"logo-href"],"logoHrefTarget":[1,"logo-href-target"],"copyrightText":[1,"copyright-text"],"collapsible":[4],"collapsed":[4],"hideMenuLabel":[1,"hide-menu-label"],"position":[1],"internalLogoHref":[32],"internalLogoHrefTarget":[32],"currentYear":[32],"isCollapsed":[32],"internalTermsofUse":[32],"internalImprint":[32],"internalPrivacyPolicy":[32],"internalShowFooter":[32],"activeItem":[32],"toggleCollapse":[64],"collapse":[64],"expand":[64]},[[0,"ifxSidebarMenu","handleSidebarItemInteraction"],[0,"ifxSidebarNavigationItem","handleSidebarItemActivated"]],{"collapsible":[{"handleCollapsibleChange":0}],"collapsed":[{"handleCollapsedPropChange":0}]}]]],["ifx-slider",[[513,"ifx-slider",{"min":[2],"max":[2],"step":[2],"value":[2],"minValueHandle":[2,"min-value-handle"],"maxValueHandle":[2,"max-value-handle"],"disabled":[4],"showPercentage":[4,"show-percentage"],"leftIcon":[1,"left-icon"],"rightIcon":[1,"right-icon"],"leftText":[1,"left-text"],"rightText":[1,"right-text"],"type":[1],"ariaLabelText":[1,"aria-label-text"],"internalValue":[32],"percentage":[32],"internalMinValue":[32],"internalMaxValue":[32]},null,{"value":[{"valueChanged":0}],"minValueHandle":[{"minValueChanged":0}],"maxValueHandle":[{"maxValueChanged":0}]}]]],["ifx-step",[[769,"ifx-step",{"complete":[4],"disabled":[4],"error":[1028],"lastStep":[4,"last-step"],"stepId":[2,"step-id"],"stepperState":[16],"active":[32],"clickable":[32]},[[4,"ifxChange","onStepChange"]],{"stepperState":[{"updateCurrentStep":0}],"active":[{"updateErrorState":0}]}]]],["ifx-tooltip",[[769,"ifx-tooltip",{"header":[1],"text":[1],"position":[1],"ariaLabelText":[1,"aria-label-text"],"variant":[1],"icon":[1],"appendToBody":[4,"append-to-body"],"tooltipVisible":[32],"internalPosition":[32]},null,{"position":[{"positionChanged":0}]}]]],["ifx-accordion",[[785,"ifx-accordion",{"autoCollapse":[4,"auto-collapse"]},[[0,"ifxOpen","onItemOpen"]]]]],["ifx-action-list",[[769,"ifx-action-list",{"listAriaLabel":[1,"list-aria-label"]}]]],["ifx-action-list-item",[[769,"ifx-action-list-item",{"itemTitle":[1,"item-title"],"description":[1],"value":[1],"href":[1],"target":[1],"disabled":[4],"itemAriaLabel":[1,"item-aria-label"]},null,{"disabled":[{"onDisabledChange":0}]}]]],["ifx-basic-table",[[512,"ifx-basic-table",{"cols":[1],"rows":[1],"rowHeight":[1,"row-height"],"tableHeight":[1,"table-height"],"variant":[1],"gridOptions":[32],"columnDefs":[32],"rowData":[32],"uniqueKey":[32]}]]],["ifx-breadcrumb",[[257,"ifx-breadcrumb"]]],["ifx-breadcrumb-item",[[769,"ifx-breadcrumb-item",{"isLastItem":[32],"uniqueId":[32],"hasDropdownMenu":[32]},[[5,"mousedown","handleOutsideClick"],[0,"keydown","handleKeyDown"],[0,"breadcrumbMenuIconWrapper","menuWrapperEventReEmitter"]]]]],["ifx-card",[[769,"ifx-card",{"direction":[1],"href":[1],"target":[1],"ariaLabelText":[1,"aria-label-text"],"fullWidth":[4,"full-width"],"noBtns":[32],"alignment":[32],"noImg":[32],"internalHref":[32]},[[0,"imgPosition","setImgPosition"]]]]],["ifx-card-headline",[[769,"ifx-card-headline",{"direction":[32],"hasDesc":[32]}]]],["ifx-card-image",[[513,"ifx-card-image",{"src":[1],"alt":[1],"position":[1]}]]],["ifx-card-links",[[257,"ifx-card-links"]]],["ifx-card-overline",[[257,"ifx-card-overline"]]],["ifx-card-text",[[769,"ifx-card-text",{"hasBtn":[32]}]]],["ifx-content-switcher",[[769,"ifx-content-switcher",{"items":[32],"activeIndex":[32],"hoverIndex":[32],"focusIndex":[32],"dividers":[32]}]]],["ifx-content-switcher-item",[[769,"ifx-content-switcher-item",{"selected":[4],"value":[1]}]]],["ifx-dropdown",[[769,"ifx-dropdown",{"placement":[1],"defaultOpen":[4,"default-open"],"noAppendToBody":[4,"no-append-to-body"],"disabled":[4],"noCloseOnOutsideClick":[4,"no-close-on-outside-click"],"noCloseOnMenuClick":[4,"no-close-on-menu-click"],"internalIsOpen":[32],"trigger":[32],"menu":[32],"isOpen":[64],"closeDropdown":[64],"openDropdown":[64]},[[5,"mousedown","handleOutsideClick"],[4,"focusin","handleFocusOutside"],[0,"slotchange","watchHandlerSlot"]],{"defaultOpen":[{"watchHandlerIsOpen":0}],"disabled":[{"watchHandlerDisabled":0}]}]]],["ifx-dropdown-header",[[257,"ifx-dropdown-header"]]],["ifx-dropdown-menu",[[769,"ifx-dropdown-menu",{"isOpen":[4,"is-open"],"size":[1],"hideTopPadding":[32],"filteredItems":[32]},[[0,"ifxInput","handleMenuFilter"],[0,"ifxDropdownItem","handleDropdownItemValueEmission"]]]]],["ifx-dropdown-separator",[[1,"ifx-dropdown-separator"]]],["ifx-dropdown-trigger",[[769,"ifx-dropdown-trigger",{"isOpen":[4,"is-open"]}]]],["ifx-error-page",[[769,"ifx-error-page",{"illustrationUrl":[1,"illustration-url"],"imgAlt":[1,"img-alt"],"type":[1],"headline":[1],"description":[1]}]]],["ifx-filter-type-group",[[769,"ifx-filter-type-group",{"selectedOptions":[32]}]]],["ifx-footer",[[769,"ifx-footer",{"copyrightText":[1,"copyright-text"],"currentYear":[32]}]]],["ifx-footer-column",[[257,"ifx-footer-column"]]],["ifx-navbar-profile",[[769,"ifx-navbar-profile",{"showLabel":[4,"show-label"],"href":[1],"imageUrl":[1,"image-url"],"target":[1],"alt":[1],"userName":[1,"user-name"],"internalHref":[32],"isMenuItem":[32],"hasChildNavItems":[32],"internalImageUrl":[32],"hideComponent":[64],"showComponent":[64]},[[5,"mousedown","handleOutsideClick"]]]]],["ifx-sidebar-title",[[769,"ifx-sidebar-title",{"showInCollapsed":[4,"show-in-collapsed"]}]]],["ifx-status",[[513,"ifx-status",{"label":[1],"border":[4],"color":[1]}]]],["ifx-stepper",[[769,"ifx-stepper",{"activeStep":[1026,"active-step"],"indicatorPosition":[1,"indicator-position"],"showStepNumber":[4,"show-step-number"],"variant":[1],"ariaLabelText":[1,"aria-label-text"],"ariaCurrentText":[1,"aria-current-text"],"stepsCount":[32],"shouldEmitEvent":[32],"emittedByClick":[32]},[[0,"ifxChange","onStepChange"]],{"activeStep":[{"handleActiveStep":0}]}]]],["ifx-switch",[[833,"ifx-switch",{"checked":[1028],"disabled":[4],"name":[1],"value":[1],"isChecked":[64],"setChecked":[64],"toggle":[64]},null,{"checked":[{"onCheckedChange":0}]}]]],["ifx-tab",[[772,"ifx-tab",{"header":[1],"disabled":[4],"icon":[1],"iconPosition":[1,"icon-position"],"subline":[1],"label":[1],"number":[2],"positionSticky":[4,"position-sticky"]}]]],["ifx-textarea",[[577,"ifx-textarea",{"caption":[1],"cols":[2],"disabled":[4],"error":[4],"label":[1],"maxlength":[2],"name":[513],"placeholder":[1],"required":[4],"readOnly":[4,"read-only"],"resize":[1],"rows":[2],"value":[1025],"wrap":[1],"fullWidth":[513,"full-width"],"reset":[64]},null,{"value":[{"valueWatcher":0}]}]]],["ifx-tree-view",[[769,"ifx-tree-view",{"label":[1],"disableAllItems":[4,"disable-all-items"],"expandAllItems":[4,"expand-all-items"],"ariaLabelText":[1,"aria-label-text"]},null,{"expandAllItems":[{"handleExpandAllItemsChange":0}],"disableAllItems":[{"handleDisableAllItemsChange":0}]}]]],["ifx-notification",[[769,"ifx-notification",{"icon":[1],"variant":[1],"linkText":[1,"link-text"],"linkHref":[1,"link-href"],"linkTarget":[1,"link-target"]}]]],["ifx-progress-bar",[[513,"ifx-progress-bar",{"value":[2],"size":[1],"showLabel":[4,"show-label"],"internalValue":[32]},null,{"value":[{"valueChanged":0}]}]]],["ifx-radio-button",[[769,"ifx-radio-button",{"disabled":[4],"value":[1],"error":[4],"size":[513],"name":[513],"checked":[1028],"internalChecked":[32],"hasSlot":[32],"isChecked":[64]},[[0,"keydown","handleKeyDown"],[4,"change","handleExternalChange"]],{"checked":[{"handleCheckedChange":0}],"internalChecked":[{"updateFormValue":0}],"error":[{"errorChanged":0}]}]]],["ifx-icon",[[512,"ifx-icon",{"icon":[1],"iconSvg":[32]},null,{"icon":[{"updateIcon":0}]}]]],["ifx-multiselect_2",[[769,"ifx-multiselect",{"name":[1],"disabled":[4],"required":[4],"error":[4],"caption":[1],"label":[1],"placeholder":[1],"showSearch":[4,"show-search"],"showSelectAll":[4,"show-select-all"],"showClearButton":[4,"show-clear-button"],"showExpandCollapse":[4,"show-expand-collapse"],"noResultsMessage":[1,"no-results-message"],"showNoResultsMessage":[4,"show-no-results-message"],"searchPlaceholder":[1,"search-placeholder"],"selectAllLabel":[1,"select-all-label"],"expandLabel":[1,"expand-label"],"collapseLabel":[1,"collapse-label"],"ariaMultiSelectLabel":[1,"aria-multi-select-label"],"ariaMultiSelectLabelledBy":[1,"aria-multi-select-labelled-by"],"ariaMultiSelectDescribedBy":[1,"aria-multi-select-described-by"],"ariaSearchLabel":[1,"aria-search-label"],"ariaClearLabel":[1,"aria-clear-label"],"ariaToggleLabel":[1,"aria-toggle-label"],"ariaSelectAllLabel":[1,"aria-select-all-label"],"ariaExpandAllLabel":[1,"aria-expand-all-label"],"ariaCollapseAllLabel":[1,"aria-collapse-all-label"],"internalError":[32],"persistentSelectedOptions":[32],"dropdownOpen":[32],"dropdownFlipped":[32],"searchTerm":[32],"clearSelection":[64]},null,{"error":[{"updateInternalError":0}],"persistentSelectedOptions":[{"onSelectionChange":0}]}],[769,"ifx-multiselect-option",{"value":[1],"selected":[1540],"disabled":[1540],"indeterminate":[1540],"isExpanded":[32],"hasChildren":[32],"depth":[32],"searchTerm":[32],"isSearchActive":[32],"isSearchDisabled":[32]},[[0,"click","handleClick"],[0,"keydown","handleKeyDown"]]]]],["ifx-chip",[[769,"ifx-chip",{"placeholder":[1],"size":[1],"value":[1025],"variant":[1],"theme":[1],"readOnly":[4,"read-only"],"ariaLabelText":[1,"aria-label-text"],"disabled":[4],"icon":[1],"opened":[32],"selectedOptions":[32]},[[5,"mousedown","closeDropdownOnOutsideClick"],[0,"ifxChipItemSelect","updateSelectedOptions"]],{"value":[{"handleValueChange":0}],"readOnly":[{"handleReadOnlyChange":0}]}]]],["ifx-select",[[512,"ifx-select",{"value":[1],"name":[1],"items":[16],"choices":[1],"renderChoiceLimit":[2,"render-choice-limit"],"maxItemCount":[2,"max-item-count"],"addItems":[4,"add-items"],"removeItems":[4,"remove-items"],"removeItemButton":[4,"remove-item-button"],"editItems":[4,"edit-items"],"duplicateItemsAllowed":[4,"duplicate-items-allowed"],"delimiter":[1],"paste":[4],"showSearch":[4,"show-search"],"searchChoices":[4,"search-choices"],"searchFields":[1,"search-fields"],"searchFloor":[2,"search-floor"],"searchResultLimit":[2,"search-result-limit"],"position":[1],"resetScrollPosition":[4,"reset-scroll-position"],"shouldSort":[4,"should-sort"],"shouldSortItems":[4,"should-sort-items"],"sorter":[16],"placeholder":[8],"searchPlaceholderValue":[1,"search-placeholder-value"],"prependValue":[1,"prepend-value"],"appendValue":[1,"append-value"],"renderSelectedChoices":[1,"render-selected-choices"],"loadingText":[1,"loading-text"],"noResultsText":[1,"no-results-text"],"noChoicesText":[1,"no-choices-text"],"itemSelectText":[1,"item-select-text"],"addItemText":[1,"add-item-text"],"maxItemText":[1,"max-item-text"],"uniqueItemText":[1,"unique-item-text"],"classNames":[16],"fuseOptions":[16],"addItemFilter":[1,"add-item-filter"],"customAddItemText":[1,"custom-add-item-text"],"callbackOnInit":[16],"callbackOnCreateTemplates":[16],"valueComparer":[16],"error":[4],"label":[1],"caption":[1],"disabled":[4],"required":[4],"placeholderValue":[1,"placeholder-value"],"options":[1025],"size":[1],"showClearButton":[4,"show-clear-button"],"selectedOption":[32],"optionIsSelected":[32],"clearSelection":[64],"handleChange":[64],"highlightItem":[64],"unhighlightItem":[64],"highlightAll":[64],"unhighlightAll":[64],"removeActiveItemsByValue":[64],"removeActiveItems":[64],"removeHighlightedItems":[64],"showDropdown":[64],"hideDropdown":[64],"getValue":[64],"setValue":[64],"setChoiceByValue":[64],"setChoices":[64],"clearChoices":[64],"clearStore":[64],"clearInput":[64],"ajax":[64],"handleDeleteIcon":[64]},[[5,"mousedown","handleOutsideClick"]],{"disabled":[{"watchDisabled":0}]}]]],["ifx-spinner_2",[[513,"ifx-spinner",{"size":[1],"variant":[1],"inverted":[4],"ariaLabelText":[1,"aria-label-text"]}],[577,"ifx-text-field",{"placeholder":[1],"name":[513],"value":[1025],"error":[4],"label":[1],"icon":[1],"caption":[1],"size":[1],"required":[4],"success":[4],"disabled":[4],"readOnly":[4,"read-only"],"maxlength":[2],"showDeleteIcon":[4,"show-delete-icon"],"autocomplete":[1],"type":[1],"internalId":[1,"internal-id"],"internalType":[32],"reset":[64]},null,{"value":[{"valueWatcher":0}]}]]],["ifx-search-field",[[513,"ifx-search-field",{"value":[1025],"suggestions":[16],"showSuggestions":[4,"show-suggestions"],"maxSuggestions":[2,"max-suggestions"],"maxHistoryItems":[2,"max-history-items"],"enableHistory":[4,"enable-history"],"historyKey":[1,"history-key"],"historyHeaderText":[1,"history-header-text"],"ariaLabelText":[1,"aria-label-text"],"ariaLabelledBy":[1,"aria-labelled-by"],"ariaDescribedBy":[1,"aria-described-by"],"deleteIconAriaLabel":[1,"delete-icon-aria-label"],"historyDeleteAriaLabel":[1,"history-delete-aria-label"],"dropdownAriaLabel":[1,"dropdown-aria-label"],"suggestionAriaLabel":[1,"suggestion-aria-label"],"historyItemAriaLabel":[1,"history-item-aria-label"],"showDeleteIcon":[4,"show-delete-icon"],"disabled":[4],"size":[1],"placeholder":[1],"autocomplete":[1],"maxlength":[2],"showDeleteIconInternalState":[32],"isFocused":[32],"showDropdown":[32],"filteredSuggestions":[32],"selectedSuggestionIndex":[32],"searchHistory":[32],"clearSearchHistory":[64]},[[5,"mousedown","handleOutsideClick"],[0,"keydown","handleKeyDown"]],{"value":[{"valueWatcher":0}],"suggestions":[{"suggestionsWatcher":0}]}]]],["ifx-icon-button",[[513,"ifx-icon-button",{"variant":[1],"size":[1],"disabled":[4],"icon":[1],"href":[1],"target":[1],"shape":[1],"ariaLabelText":[1,"aria-label-text"],"internalIcon":[32],"setFocus":[64]},[[2,"click","handleClick"]],{"icon":[{"updateIcon":0}]}]]],["ifx-button",[[769,"ifx-button",{"variant":[1],"theme":[1],"size":[1],"disabled":[4],"href":[1],"target":[1],"type":[1],"fullWidth":[4,"full-width"],"ariaLabelText":[1,"aria-label-text"],"internalHref":[32],"setFocus":[64]},[[0,"keydown","handleKeyDown"],[2,"click","handleHostClick"]],{"href":[{"setInternalHref":0}]}]]],["ifx-alert_2",[[513,"ifx-template",{"name":[1],"thumbnail":[1],"repoDetails":[32],"repoUrl":[32],"showDetails":[32],"isTemplatePage":[32],"isLoading":[32],"repoError":[32],"toggleTemplate":[64]}],[769,"ifx-alert",{"variant":[1],"icon":[1],"closable":[4],"ariaLiveText":[1,"aria-live-text"],"uniqueId":[32]}]]],["ifx-checkbox",[[833,"ifx-checkbox",{"disabled":[4],"name":[1],"checked":[1028],"indeterminate":[4],"error":[4],"size":[1],"value":[1],"internalIndeterminate":[32],"isChecked":[64],"setChecked":[64],"toggleCheckedState":[64],"toggle":[64]},null,{"checked":[{"valueChanged":0}],"error":[{"errorChanged":0}],"indeterminate":[{"indeterminateChanged":0}]}]]],["ifx-chip-item_2",[[513,"ifx-pagination",{"currentPage":[2,"current-page"],"showItemsPerPage":[4,"show-items-per-page"],"total":[2],"itemsPerPage":[1,"items-per-page"],"itemsPerPageLabel":[1,"items-per-page-label"],"showAllItems":[32],"internalPage":[32],"internalItemsPerPage":[32],"numberOfPages":[32],"filteredItemsPerPage":[32],"visiblePages":[32]},[[0,"ifxSelect","setItemsPerPage"]],{"total":[{"watchTotalHandler":0}],"currentPage":[{"currentPageWatcher":0}]}],[769,"ifx-chip-item",{"value":[1],"chipState":[16],"selected":[1540]},[[16,"ifxChipItemSelect","updateItemSelection"]],{"selected":[{"validateSelected":0}]}]]],["ifx-indicator",[[513,"ifx-indicator",{"inverted":[4],"ariaLabelText":[1,"aria-label-text"],"variant":[1],"number":[2],"filteredNumber":[32]}]]],["ifx-link",[[769,"ifx-link",{"href":[1],"target":[1],"variant":[1],"size":[1],"disabled":[4],"download":[1],"ariaLabelText":[1,"aria-label-text"],"internalHref":[32],"internalTarget":[32],"internalVariant":[32]}]]]]'),t)});(function(){if(typeof window<"u"&&window.Reflect!==void 0&&window.customElements!==void 0){var n=HTMLElement;window.HTMLElement=function(){return Reflect.construct(n,[],this.constructor)},HTMLElement.prototype=n.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,n)}})();var B=["*"],uy=(n,t)=>{let i=n.prototype;t.forEach(e=>{Object.defineProperty(i,e,{get(){return this.el[e]},set(r){this.z.runOutsideAngular(()=>this.el[e]=r)},configurable:!0})})},py=(n,t)=>{let i=n.prototype;t.forEach(e=>{i[e]=function(){let r=arguments;return this.z.runOutsideAngular(()=>this.el[e].apply(this.el,r))}})};function z(n){return function(i){let{defineCustomElementFn:e,inputs:r,methods:a}=n;return e!==void 0&&e(),r&&uy(i,r),a&&py(i,a),i}}var Hh=(()=>{let n=class Zd{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Zd)(x(P),x(F),x(T))};static \u0275cmp=C({type:Zd,selectors:[["ifx-accordion"]],inputs:{autoCollapse:"autoCollapse"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["autoCollapse"]})],n),n})(),jh=(()=>{let n=class Jd{z;el;ifxOpen=new R;ifxClose=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Jd)(x(P),x(F),x(T))};static \u0275cmp=C({type:Jd,selectors:[["ifx-accordion-item"]],inputs:{ariaLevelNumber:"ariaLevelNumber",caption:"caption",icon:"icon",open:"open"},outputs:{ifxOpen:"ifxOpen",ifxClose:"ifxClose"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["ariaLevelNumber","caption","icon","open"]})],n),n})(),Bh=(()=>{let n=class Yd{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Yd)(x(P),x(F),x(T))};static \u0275cmp=C({type:Yd,selectors:[["ifx-action-list"]],inputs:{listAriaLabel:"listAriaLabel"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["listAriaLabel"]})],n),n})(),zh=(()=>{let n=class Xd{z;el;ifxActionListItemClick=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Xd)(x(P),x(F),x(T))};static \u0275cmp=C({type:Xd,selectors:[["ifx-action-list-item"]],inputs:{description:"description",disabled:"disabled",href:"href",itemAriaLabel:"itemAriaLabel",itemTitle:"itemTitle",target:"target",value:"value"},outputs:{ifxActionListItemClick:"ifxActionListItemClick"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["description","disabled","href","itemAriaLabel","itemTitle","target","value"]})],n),n})(),Uh=(()=>{let n=class Qd{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Qd)(x(P),x(F),x(T))};static \u0275cmp=C({type:Qd,selectors:[["ifx-ai-label"]],inputs:{divider:"divider",variant:"variant"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["divider","variant"]})],n),n})(),$h=(()=>{let n=class Kd{z;el;ifxClose=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Kd)(x(P),x(F),x(T))};static \u0275cmp=C({type:Kd,selectors:[["ifx-alert"]],inputs:{ariaLiveText:"ariaLiveText",closable:"closable",icon:"icon",variant:"variant"},outputs:{ifxClose:"ifxClose"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["ariaLiveText","closable","icon","variant"]})],n),n})(),Gh=(()=>{let n=class ec{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||ec)(x(P),x(F),x(T))};static \u0275cmp=C({type:ec,selectors:[["ifx-basic-table"]],inputs:{cols:"cols",rowHeight:"rowHeight",rows:"rows",tableHeight:"tableHeight",variant:"variant"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["cols","rowHeight","rows","tableHeight","variant"]})],n),n})();var k=(()=>{let n=class tc{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||tc)(x(P),x(F),x(T))};static \u0275cmp=C({type:tc,selectors:[["ifx-button"]],inputs:{ariaLabelText:"ariaLabelText",disabled:"disabled",fullWidth:"fullWidth",href:"href",size:"size",target:"target",theme:"theme",type:"type",variant:"variant"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["ariaLabelText","disabled","fullWidth","href","size","target","theme","type","variant"],methods:["setFocus"]})],n),n})(),Wh=(()=>{let n=class nc{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||nc)(x(P),x(F),x(T))};static \u0275cmp=C({type:nc,selectors:[["ifx-card"]],inputs:{ariaLabelText:"ariaLabelText",direction:"direction",fullWidth:"fullWidth",href:"href",target:"target"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["ariaLabelText","direction","fullWidth","href","target"]})],n),n})(),Zh=(()=>{let n=class ic{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||ic)(x(P),x(F),x(T))};static \u0275cmp=C({type:ic,selectors:[["ifx-card-headline"]],standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({})],n),n})(),Jh=(()=>{let n=class rc{z;el;imgPosition=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||rc)(x(P),x(F),x(T))};static \u0275cmp=C({type:rc,selectors:[["ifx-card-image"]],inputs:{alt:"alt",position:"position",src:"src"},outputs:{imgPosition:"imgPosition"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["alt","position","src"]})],n),n})(),Yh=(()=>{let n=class oc{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||oc)(x(P),x(F),x(T))};static \u0275cmp=C({type:oc,selectors:[["ifx-card-links"]],standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({})],n),n})(),Xh=(()=>{let n=class ac{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||ac)(x(P),x(F),x(T))};static \u0275cmp=C({type:ac,selectors:[["ifx-card-overline"]],standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({})],n),n})(),Qh=(()=>{let n=class sc{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||sc)(x(P),x(F),x(T))};static \u0275cmp=C({type:sc,selectors:[["ifx-card-text"]],standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({})],n),n})(),Fn=(()=>{let n=class lc{z;el;ifxChange=new R;ifxError=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||lc)(x(P),x(F),x(T))};static \u0275cmp=C({type:lc,selectors:[["ifx-checkbox"]],inputs:{checked:"checked",disabled:"disabled",error:"error",indeterminate:"indeterminate",name:"name",size:"size",value:"value"},outputs:{ifxChange:"ifxChange",ifxError:"ifxError"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["checked","disabled","error","indeterminate","name","size","value"],methods:["isChecked","setChecked","toggleCheckedState","toggle"]})],n),n})(),Kh=(()=>{let n=class dc{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||dc)(x(P),x(F),x(T))};static \u0275cmp=C({type:dc,selectors:[["ifx-checkbox-group"]],inputs:{alignment:"alignment",captionText:"captionText",groupLabelText:"groupLabelText",required:"required",showCaption:"showCaption",showCaptionIcon:"showCaptionIcon",showGroupLabel:"showGroupLabel",size:"size"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["alignment","captionText","groupLabelText","required","showCaption","showCaptionIcon","showGroupLabel","size"],methods:["setGroupError"]})],n),n})(),eg=(()=>{let n=class cc{z;el;ifxChange=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||cc)(x(P),x(F),x(T))};static \u0275cmp=C({type:cc,selectors:[["ifx-chip"]],inputs:{ariaLabelText:"ariaLabelText",disabled:"disabled",icon:"icon",placeholder:"placeholder",readOnly:"readOnly",size:"size",theme:"theme",value:"value",variant:"variant"},outputs:{ifxChange:"ifxChange"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["ariaLabelText","disabled","icon","placeholder","readOnly","size","theme","value","variant"]})],n),n})(),tg=(()=>{let n=class uc{z;el;ifxChipItemSelect=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||uc)(x(P),x(F),x(T))};static \u0275cmp=C({type:uc,selectors:[["ifx-chip-item"]],inputs:{chipState:"chipState",selected:"selected",value:"value"},outputs:{ifxChipItemSelect:"ifxChipItemSelect"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["chipState","selected","value"]})],n),n})(),ng=(()=>{let n=class pc{z;el;ifxChange=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||pc)(x(P),x(F),x(T))};static \u0275cmp=C({type:pc,selectors:[["ifx-content-switcher"]],outputs:{ifxChange:"ifxChange"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({})],n),n})(),ig=(()=>{let n=class fc{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||fc)(x(P),x(F),x(T))};static \u0275cmp=C({type:fc,selectors:[["ifx-content-switcher-item"]],inputs:{selected:"selected",value:"value"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["selected","value"]})],n),n})(),rg=(()=>{let n=class mc{z;el;ifxDate=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||mc)(x(P),x(F),x(T))};static \u0275cmp=C({type:mc,selectors:[["ifx-date-picker"]],inputs:{ariaLabelText:"ariaLabelText",autocomplete:"autocomplete",caption:"caption",disabled:"disabled",error:"error",label:"label",max:"max",min:"min",required:"required",size:"size",success:"success",type:"type",value:"value"},outputs:{ifxDate:"ifxDate"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["ariaLabelText","autocomplete","caption","disabled","error","label","max","min","required","size","success","type","value"],methods:["clear"]})],n),n})();var og=(()=>{let n=class hc{z;el;ifxOpen=new R;ifxClose=new R;ifxDropdown=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||hc)(x(P),x(F),x(T))};static \u0275cmp=C({type:hc,selectors:[["ifx-dropdown"]],inputs:{defaultOpen:"defaultOpen",disabled:"disabled",noAppendToBody:"noAppendToBody",noCloseOnMenuClick:"noCloseOnMenuClick",noCloseOnOutsideClick:"noCloseOnOutsideClick",placement:"placement"},outputs:{ifxOpen:"ifxOpen",ifxClose:"ifxClose",ifxDropdown:"ifxDropdown"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["defaultOpen","disabled","noAppendToBody","noCloseOnMenuClick","noCloseOnOutsideClick","placement"],methods:["isOpen","closeDropdown","openDropdown"]})],n),n})();var ag=(()=>{let n=class gc{z;el;ifxDropdownItem=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||gc)(x(P),x(F),x(T))};static \u0275cmp=C({type:gc,selectors:[["ifx-dropdown-item"]],inputs:{error:"error",hide:"hide",href:"href",icon:"icon",target:"target"},outputs:{ifxDropdownItem:"ifxDropdownItem"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["error","hide","href","icon","target"]})],n),n})(),sg=(()=>{let n=class vc{z;el;menuSize=new R;ifxDropdownMenuItem=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||vc)(x(P),x(F),x(T))};static \u0275cmp=C({type:vc,selectors:[["ifx-dropdown-menu"]],inputs:{isOpen:"isOpen",size:"size"},outputs:{menuSize:"menuSize",ifxDropdownMenuItem:"ifxDropdownMenuItem"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["isOpen","size"]})],n),n})();var lg=(()=>{let n=class xc{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||xc)(x(P),x(F),x(T))};static \u0275cmp=C({type:xc,selectors:[["ifx-dropdown-trigger-button"]],inputs:{disabled:"disabled",hideArrow:"hideArrow",isOpen:"isOpen",size:"size",theme:"theme",variant:"variant"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["disabled","hideArrow","isOpen","size","theme","variant"]})],n),n})(),dg=(()=>{let n=class bc{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||bc)(x(P),x(F),x(T))};static \u0275cmp=C({type:bc,selectors:[["ifx-error-page"]],inputs:{description:"description",headline:"headline",illustrationUrl:"illustrationUrl",imgAlt:"imgAlt",type:"type"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["description","headline","illustrationUrl","imgAlt","type"]})],n),n})();var cg=(()=>{let n=class yc{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||yc)(x(P),x(F),x(T))};static \u0275cmp=C({type:yc,selectors:[["ifx-footer"]],inputs:{copyrightText:"copyrightText"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["copyrightText"]})],n),n})();var At=(()=>{let n=class Ic{z;el;consoleError=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Ic)(x(P),x(F),x(T))};static \u0275cmp=C({type:Ic,selectors:[["ifx-icon"]],inputs:{icon:"icon"},outputs:{consoleError:"consoleError"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["icon"]})],n),n})(),ug=(()=>{let n=class Cc{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Cc)(x(P),x(F),x(T))};static \u0275cmp=C({type:Cc,selectors:[["ifx-icon-button"]],inputs:{ariaLabelText:"ariaLabelText",disabled:"disabled",href:"href",icon:"icon",shape:"shape",size:"size",target:"target",variant:"variant"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["ariaLabelText","disabled","href","icon","shape","size","target","variant"],methods:["setFocus"]})],n),n})();var pg=(()=>{let n=class Ec{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Ec)(x(P),x(F),x(T))};static \u0275cmp=C({type:Ec,selectors:[["ifx-indicator"]],inputs:{ariaLabelText:"ariaLabelText",inverted:"inverted",number:"number",variant:"variant"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["ariaLabelText","inverted","number","variant"]})],n),n})(),Jo=(()=>{let n=class wc{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||wc)(x(P),x(F),x(T))};static \u0275cmp=C({type:wc,selectors:[["ifx-link"]],inputs:{ariaLabelText:"ariaLabelText",disabled:"disabled",download:"download",href:"href",size:"size",target:"target",variant:"variant"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["ariaLabelText","disabled","download","href","size","target","variant"]})],n),n})();var fg=(()=>{let n=class _c{z;el;ifxOpen=new R;ifxClose=new R;ifxOpenedChange=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||_c)(x(P),x(F),x(T))};static \u0275cmp=C({type:_c,selectors:[["ifx-modal"]],inputs:{alertIcon:"alertIcon",caption:"caption",captionAriaLabel:"captionAriaLabel",closeButtonAriaLabel:"closeButtonAriaLabel",closeOnOverlayClick:"closeOnOverlayClick",opened:"opened",showCloseButton:"showCloseButton",size:"size",variant:"variant"},outputs:{ifxOpen:"ifxOpen",ifxClose:"ifxClose",ifxOpenedChange:"ifxOpenedChange"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["alertIcon","caption","captionAriaLabel","closeButtonAriaLabel","closeOnOverlayClick","opened","showCloseButton","size","variant"],methods:["openModal","closeModal"]})],n),n})();var Yo=(()=>{let n=class Sc{z;el;ifxNavbarMobileMenuIsOpen=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Sc)(x(P),x(F),x(T))};static \u0275cmp=C({type:Sc,selectors:[["ifx-navbar"]],inputs:{applicationName:"applicationName",fixed:"fixed",logoHref:"logoHref",logoHrefTarget:"logoHrefTarget",showLogoAndAppname:"showLogoAndAppname"},outputs:{ifxNavbarMobileMenuIsOpen:"ifxNavbarMobileMenuIsOpen"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["applicationName","fixed","logoHref","logoHrefTarget","showLogoAndAppname"]})],n),n})(),Xo=(()=>{let n=class Dc{z;el;ifxNavItem=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Dc)(x(P),x(F),x(T))};static \u0275cmp=C({type:Dc,selectors:[["ifx-navbar-item"]],inputs:{dotIndicator:"dotIndicator",hideOnMobile:"hideOnMobile",href:"href",icon:"icon",numberIndicator:"numberIndicator",showLabel:"showLabel",target:"target"},outputs:{ifxNavItem:"ifxNavItem"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["dotIndicator","hideOnMobile","href","icon","numberIndicator","showLabel","target"],methods:["hideComponent","showComponent","toggleChildren","moveChildComponentsIntoSubLayerMenu","toggleFirstLayerItem","addMenuItemClass","moveChildComponentsBackIntoNavbar","returnToFirstLayer","setMenuItemPosition","setItemSideSpecifications"]})],n),n})(),mg=(()=>{let n=class Tc{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Tc)(x(P),x(F),x(T))};static \u0275cmp=C({type:Tc,selectors:[["ifx-navbar-profile"]],inputs:{alt:"alt",href:"href",imageUrl:"imageUrl",showLabel:"showLabel",target:"target",userName:"userName"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["alt","href","imageUrl","showLabel","target","userName"],methods:["hideComponent","showComponent"]})],n),n})(),hg=(()=>{let n=class kc{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||kc)(x(P),x(F),x(T))};static \u0275cmp=C({type:kc,selectors:[["ifx-notification"]],inputs:{icon:"icon",linkHref:"linkHref",linkTarget:"linkTarget",linkText:"linkText",variant:"variant"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["icon","linkHref","linkTarget","linkText","variant"]})],n),n})();var gg=(()=>{let n=class Mc{z;el;ifxPageChange=new R;ifxItemsPerPageChange=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Mc)(x(P),x(F),x(T))};static \u0275cmp=C({type:Mc,selectors:[["ifx-pagination"]],inputs:{currentPage:"currentPage",itemsPerPage:"itemsPerPage",itemsPerPageLabel:"itemsPerPageLabel",showItemsPerPage:"showItemsPerPage",total:"total"},outputs:{ifxPageChange:"ifxPageChange",ifxItemsPerPageChange:"ifxItemsPerPageChange"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["currentPage","itemsPerPage","itemsPerPageLabel","showItemsPerPage","total"]})],n),n})();var vg=(()=>{let n=class Ac{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Ac)(x(P),x(F),x(T))};static \u0275cmp=C({type:Ac,selectors:[["ifx-progress-bar"]],inputs:{showLabel:"showLabel",size:"size",value:"value"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["showLabel","size","value"]})],n),n})(),Qo=(()=>{let n=class Oc{z;el;ifxChange=new R;ifxError=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Oc)(x(P),x(F),x(T))};static \u0275cmp=C({type:Oc,selectors:[["ifx-radio-button"]],inputs:{checked:"checked",disabled:"disabled",error:"error",name:"name",size:"size",value:"value"},outputs:{ifxChange:"ifxChange",ifxError:"ifxError"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["checked","disabled","error","name","size","value"],methods:["isChecked"]})],n),n})(),xg=(()=>{let n=class Nc{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Nc)(x(P),x(F),x(T))};static \u0275cmp=C({type:Nc,selectors:[["ifx-radio-button-group"]],inputs:{alignment:"alignment",captionText:"captionText",groupLabelText:"groupLabelText",required:"required",showCaption:"showCaption",showCaptionIcon:"showCaptionIcon",showGroupLabel:"showGroupLabel",size:"size"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["alignment","captionText","groupLabelText","required","showCaption","showCaptionIcon","showGroupLabel","size"],methods:["setGroupError"]})],n),n})(),Ln=(()=>{let n=class Fc{z;el;ifxInput=new R;ifxOpen=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Fc)(x(P),x(F),x(T))};static \u0275cmp=C({type:Fc,selectors:[["ifx-search-bar"]],inputs:{autocomplete:"autocomplete",disabled:"disabled",isOpen:"isOpen",maxlength:"maxlength",showCloseButton:"showCloseButton",value:"value"},outputs:{ifxInput:"ifxInput",ifxOpen:"ifxOpen"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["autocomplete","disabled","isOpen","maxlength","showCloseButton","value"],methods:["open","close"]})],n),n})(),Ko=(()=>{let n=class Lc{z;el;ifxInput=new R;ifxSuggestionRequested=new R;ifxSuggestionSelected=new R;ifxFocus=new R;ifxBlur=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Lc)(x(P),x(F),x(T))};static \u0275cmp=C({type:Lc,selectors:[["ifx-search-field"]],inputs:{ariaDescribedBy:"ariaDescribedBy",ariaLabelText:"ariaLabelText",ariaLabelledBy:"ariaLabelledBy",autocomplete:"autocomplete",deleteIconAriaLabel:"deleteIconAriaLabel",disabled:"disabled",dropdownAriaLabel:"dropdownAriaLabel",enableHistory:"enableHistory",historyDeleteAriaLabel:"historyDeleteAriaLabel",historyHeaderText:"historyHeaderText",historyItemAriaLabel:"historyItemAriaLabel",historyKey:"historyKey",maxHistoryItems:"maxHistoryItems",maxSuggestions:"maxSuggestions",maxlength:"maxlength",placeholder:"placeholder",showDeleteIcon:"showDeleteIcon",showSuggestions:"showSuggestions",size:"size",suggestionAriaLabel:"suggestionAriaLabel",suggestions:"suggestions",value:"value"},outputs:{ifxInput:"ifxInput",ifxSuggestionRequested:"ifxSuggestionRequested",ifxSuggestionSelected:"ifxSuggestionSelected",ifxFocus:"ifxFocus",ifxBlur:"ifxBlur"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["ariaDescribedBy","ariaLabelText","ariaLabelledBy","autocomplete","deleteIconAriaLabel","disabled","dropdownAriaLabel","enableHistory","historyDeleteAriaLabel","historyHeaderText","historyItemAriaLabel","historyKey","maxHistoryItems","maxSuggestions","maxlength","placeholder","showDeleteIcon","showSuggestions","size","suggestionAriaLabel","suggestions","value"],methods:["clearSearchHistory"]})],n),n})(),bg=(()=>{let n=class Rc{z;el;segmentSelect=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Rc)(x(P),x(F),x(T))};static \u0275cmp=C({type:Rc,selectors:[["ifx-segment"]],inputs:{icon:"icon",segmentIndex:"segmentIndex",selected:"selected",value:"value"},outputs:{segmentSelect:"segmentSelect"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["icon","segmentIndex","selected","value"]})],n),n})(),yg=(()=>{let n=class Pc{z;el;ifxChange=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Pc)(x(P),x(F),x(T))};static \u0275cmp=C({type:Pc,selectors:[["ifx-segmented-control"]],inputs:{caption:"caption",error:"error",label:"label",required:"required",size:"size"},outputs:{ifxChange:"ifxChange"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["caption","error","label","required","size"]})],n),n})(),Ig=(()=>{let n=class Vc{z;el;ifxSelect=new R;ifxInput=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Vc)(x(P),x(F),x(T))};static \u0275cmp=C({type:Vc,selectors:[["ifx-select"]],inputs:{addItemFilter:"addItemFilter",addItemText:"addItemText",addItems:"addItems",appendValue:"appendValue",callbackOnCreateTemplates:"callbackOnCreateTemplates",callbackOnInit:"callbackOnInit",caption:"caption",choices:"choices",classNames:"classNames",customAddItemText:"customAddItemText",delimiter:"delimiter",disabled:"disabled",duplicateItemsAllowed:"duplicateItemsAllowed",editItems:"editItems",error:"error",fuseOptions:"fuseOptions",itemSelectText:"itemSelectText",items:"items",label:"label",loadingText:"loadingText",maxItemCount:"maxItemCount",maxItemText:"maxItemText",name:"name",noChoicesText:"noChoicesText",noResultsText:"noResultsText",options:"options",paste:"paste",placeholder:"placeholder",placeholderValue:"placeholderValue",position:"position",prependValue:"prependValue",removeItemButton:"removeItemButton",removeItems:"removeItems",renderChoiceLimit:"renderChoiceLimit",renderSelectedChoices:"renderSelectedChoices",required:"required",resetScrollPosition:"resetScrollPosition",searchChoices:"searchChoices",searchFields:"searchFields",searchFloor:"searchFloor",searchPlaceholderValue:"searchPlaceholderValue",searchResultLimit:"searchResultLimit",shouldSort:"shouldSort",shouldSortItems:"shouldSortItems",showClearButton:"showClearButton",showSearch:"showSearch",size:"size",sorter:"sorter",uniqueItemText:"uniqueItemText",value:"value",valueComparer:"valueComparer"},outputs:{ifxSelect:"ifxSelect",ifxInput:"ifxInput"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["addItemFilter","addItemText","addItems","appendValue","callbackOnCreateTemplates","callbackOnInit","caption","choices","classNames","customAddItemText","delimiter","disabled","duplicateItemsAllowed","editItems","error","fuseOptions","itemSelectText","items","label","loadingText","maxItemCount","maxItemText","name","noChoicesText","noResultsText","options","paste","placeholder","placeholderValue","position","prependValue","removeItemButton","removeItems","renderChoiceLimit","renderSelectedChoices","required","resetScrollPosition","searchChoices","searchFields","searchFloor","searchPlaceholderValue","searchResultLimit","shouldSort","shouldSortItems","showClearButton","showSearch","size","sorter","uniqueItemText","value","valueComparer"],methods:["clearSelection","handleChange","highlightItem","unhighlightItem","highlightAll","unhighlightAll","removeActiveItemsByValue","removeActiveItems","removeHighlightedItems","showDropdown","hideDropdown","getValue","setValue","setChoiceByValue","setChoices","clearChoices","clearStore","clearInput","ajax","handleDeleteIcon"]})],n),n})();var Cg=(()=>{let n=class qc{z;el;ifxSidebarCollapseChange=new R;ifxSidebarLogoClick=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||qc)(x(P),x(F),x(T))};static \u0275cmp=C({type:qc,selectors:[["ifx-sidebar"]],inputs:{applicationName:"applicationName",collapsed:"collapsed",collapsible:"collapsible",copyrightText:"copyrightText",footerHrefTarget:"footerHrefTarget",hideMenuLabel:"hideMenuLabel",imprint:"imprint",initialCollapse:"initialCollapse",logoHref:"logoHref",logoHrefTarget:"logoHrefTarget",position:"position",privacyPolicy:"privacyPolicy",showFooter:"showFooter",showHeader:"showHeader",termsOfUse:"termsOfUse"},outputs:{ifxSidebarCollapseChange:"ifxSidebarCollapseChange",ifxSidebarLogoClick:"ifxSidebarLogoClick"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["applicationName","collapsed","collapsible","copyrightText","footerHrefTarget","hideMenuLabel","imprint","initialCollapse","logoHref","logoHrefTarget","position","privacyPolicy","showFooter","showHeader","termsOfUse"],methods:["toggleCollapse","collapse","expand"]})],n),n})(),Eg=(()=>{let n=class Hc{z;el;ifxSidebarMenu=new R;ifxSidebarNavigationItem=new R;ifxSidebarActionItem=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Hc)(x(P),x(F),x(T))};static \u0275cmp=C({type:Hc,selectors:[["ifx-sidebar-item"]],inputs:{active:"active",handleItemClick:"handleItemClick",href:"href",icon:"icon",isActionItem:"isActionItem",numberIndicator:"numberIndicator",target:"target"},outputs:{ifxSidebarMenu:"ifxSidebarMenu",ifxSidebarNavigationItem:"ifxSidebarNavigationItem",ifxSidebarActionItem:"ifxSidebarActionItem"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["active","handleItemClick","href","icon","isActionItem","numberIndicator","target"],methods:["setActiveClasses","expandMenu","isItemExpandable"]})],n),n})(),wg=(()=>{let n=class jc{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||jc)(x(P),x(F),x(T))};static \u0275cmp=C({type:jc,selectors:[["ifx-sidebar-title"]],inputs:{showInCollapsed:"showInCollapsed"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["showInCollapsed"]})],n),n})();var _g=(()=>{let n=class Bc{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Bc)(x(P),x(F),x(T))};static \u0275cmp=C({type:Bc,selectors:[["ifx-spinner"]],inputs:{ariaLabelText:"ariaLabelText",inverted:"inverted",size:"size",variant:"variant"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["ariaLabelText","inverted","size","variant"]})],n),n})(),Sg=(()=>{let n=class zc{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||zc)(x(P),x(F),x(T))};static \u0275cmp=C({type:zc,selectors:[["ifx-status"]],inputs:{border:"border",color:"color",label:"label"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["border","color","label"]})],n),n})(),ea=(()=>{let n=class Uc{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Uc)(x(P),x(F),x(T))};static \u0275cmp=C({type:Uc,selectors:[["ifx-step"]],inputs:{complete:"complete",disabled:"disabled",error:"error",lastStep:"lastStep",stepId:"stepId",stepperState:"stepperState"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["complete","disabled","error","lastStep","stepId","stepperState"]})],n),n})(),ta=(()=>{let n=class $c{z;el;ifxChange=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||$c)(x(P),x(F),x(T))};static \u0275cmp=C({type:$c,selectors:[["ifx-stepper"]],inputs:{activeStep:"activeStep",ariaCurrentText:"ariaCurrentText",ariaLabelText:"ariaLabelText",indicatorPosition:"indicatorPosition",showStepNumber:"showStepNumber",variant:"variant"},outputs:{ifxChange:"ifxChange"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["activeStep","ariaCurrentText","ariaLabelText","indicatorPosition","showStepNumber","variant"]})],n),n})(),na=(()=>{let n=class Gc{z;el;ifxChange=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Gc)(x(P),x(F),x(T))};static \u0275cmp=C({type:Gc,selectors:[["ifx-switch"]],inputs:{checked:"checked",disabled:"disabled",name:"name",value:"value"},outputs:{ifxChange:"ifxChange"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["checked","disabled","name","value"],methods:["isChecked","setChecked","toggle"]})],n),n})(),Dg=(()=>{let n=class Wc{z;el;tabHeaderChange=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Wc)(x(P),x(F),x(T))};static \u0275cmp=C({type:Wc,selectors:[["ifx-tab"]],inputs:{disabled:"disabled",header:"header",icon:"icon",iconPosition:"iconPosition",label:"label",number:"number",positionSticky:"positionSticky",subline:"subline"},outputs:{tabHeaderChange:"tabHeaderChange"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["disabled","header","icon","iconPosition","label","number","positionSticky","subline"]})],n),n})(),Tg=(()=>{let n=class Zc{z;el;ifxSortChange=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Zc)(x(P),x(F),x(T))};static \u0275cmp=C({type:Zc,selectors:[["ifx-table"]],inputs:{buttonRendererOptions:"buttonRendererOptions",checkboxRendererOptions:"checkboxRendererOptions",cols:"cols",columnMinWidth:"columnMinWidth",columnWidth:"columnWidth",enableSelection:"enableSelection",filterOrientation:"filterOrientation",fitColumns:"fitColumns",headline:"headline",headlineNumber:"headlineNumber",iconButtonRendererOptions:"iconButtonRendererOptions",pagination:"pagination",paginationItemsPerPage:"paginationItemsPerPage",rowHeight:"rowHeight",rows:"rows",serverPageChangeHandler:"serverPageChangeHandler",serverSidePagination:"serverSidePagination",showLoading:"showLoading",tableHeight:"tableHeight",variant:"variant"},outputs:{ifxSortChange:"ifxSortChange"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["buttonRendererOptions","checkboxRendererOptions","cols","columnMinWidth","columnWidth","enableSelection","filterOrientation","fitColumns","headline","headlineNumber","iconButtonRendererOptions","pagination","paginationItemsPerPage","rowHeight","rows","serverPageChangeHandler","serverSidePagination","showLoading","tableHeight","variant"],methods:["onBtShowLoading"]})],n),n})(),kg=(()=>{let n=class Jc{z;el;ifxChange=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Jc)(x(P),x(F),x(T))};static \u0275cmp=C({type:Jc,selectors:[["ifx-tabs"]],inputs:{activeTabIndex:"activeTabIndex",fullWidth:"fullWidth",label:"label",number:"number",orientation:"orientation",positionSticky:"positionSticky",subline:"subline"},outputs:{ifxChange:"ifxChange"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["activeTabIndex","fullWidth","label","number","orientation","positionSticky","subline"]})],n),n})();var O=(()=>{let n=class Yc{z;el;ifxInput=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Yc)(x(P),x(F),x(T))};static \u0275cmp=C({type:Yc,selectors:[["ifx-text-field"]],inputs:{autocomplete:"autocomplete",caption:"caption",disabled:"disabled",error:"error",icon:"icon",internalId:"internalId",label:"label",maxlength:"maxlength",name:"name",placeholder:"placeholder",readOnly:"readOnly",required:"required",showDeleteIcon:"showDeleteIcon",size:"size",success:"success",type:"type",value:"value"},outputs:{ifxInput:"ifxInput"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["autocomplete","caption","disabled","error","icon","internalId","label","maxlength","name","placeholder","readOnly","required","showDeleteIcon","size","success","type","value"],methods:["reset"]})],n),n})(),ia=(()=>{let n=class Xc{z;el;ifxInput=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Xc)(x(P),x(F),x(T))};static \u0275cmp=C({type:Xc,selectors:[["ifx-textarea"]],inputs:{caption:"caption",cols:"cols",disabled:"disabled",error:"error",fullWidth:"fullWidth",label:"label",maxlength:"maxlength",name:"name",placeholder:"placeholder",readOnly:"readOnly",required:"required",resize:"resize",rows:"rows",value:"value",wrap:"wrap"},outputs:{ifxInput:"ifxInput"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["caption","cols","disabled","error","fullWidth","label","maxlength","name","placeholder","readOnly","required","resize","rows","value","wrap"],methods:["reset"]})],n),n})(),Mg=(()=>{let n=class Qc{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Qc)(x(P),x(F),x(T))};static \u0275cmp=C({type:Qc,selectors:[["ifx-tooltip"]],inputs:{appendToBody:"appendToBody",ariaLabelText:"ariaLabelText",header:"header",icon:"icon",position:"position",text:"text",variant:"variant"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["appendToBody","ariaLabelText","header","icon","position","text","variant"]})],n),n})();var Kc=(()=>{class n{el;onChange=()=>{};onTouched=()=>{};lastValue;constructor(i){this.el=i}writeValue(i){this.el.nativeElement.value=this.lastValue=i??""}handleChangeEvent(i){i!==this.lastValue&&(this.lastValue=i,this.onChange(i))}_handleBlurEvent(){this.onTouched()}registerOnChange(i){this.onChange=i}registerOnTouched(i){this.onTouched=i}setDisabledState(i){this.el.nativeElement.disabled=i}static \u0275fac=function(e){return new(e||n)(x(F))};static \u0275dir=Ae({type:n,hostBindings:function(e,r){e&1&&m("focusout",function(){return r._handleBlurEvent()})}})}return n})(),Ot=(()=>{class n extends Kc{constructor(i){super(i)}writeValue(i){this.el.nativeElement.checked=this.lastValue=i??!1}static \u0275fac=function(e){return new(e||n)(x(F))};static \u0275dir=Ae({type:n,selectors:[["ifx-switch"],["ifx-checkbox"]],hostBindings:function(e,r){e&1&&m("ifxChange",function(c){return r.handleChangeEvent(c.target==null?null:c.target.checked)})},standalone:!1,features:[Mt([{provide:Nn,useExisting:Be(()=>n),multi:!0}]),Ge]})}return n})(),N=(()=>{class n extends Kc{constructor(i){super(i)}static \u0275fac=function(e){return new(e||n)(x(F))};static \u0275dir=Ae({type:n,selectors:[["ifx-search-field"],["ifx-search-bar"],["ifx-text-field"],["ifx-textarea"]],hostBindings:function(e,r){e&1&&m("ifxInput",function(c){return r.handleChangeEvent(c.target==null?null:c.target.value)})},standalone:!1,features:[Mt([{provide:Nn,useExisting:Be(()=>n),multi:!0}]),Ge]})}return n})(),Ag=(()=>{class n extends Kc{constructor(i){super(i)}writeValue(i){this.el.nativeElement.opened=this.lastValue=i??!1}static \u0275fac=function(e){return new(e||n)(x(F))};static \u0275dir=Ae({type:n,selectors:[["ifx-modal","ngModel",""],["ifx-modal","formControl",""],["ifx-modal","formControlName",""]],hostBindings:function(e,r){e&1&&m("ifxOpenedChange",function(c){return r.handleChangeEvent(c.target==null?null:c.target.opened)})},standalone:!1,features:[Mt([{provide:Nn,useExisting:Be(()=>n),multi:!0}]),Ge]})}return n})(),Og=(()=>{class n{static forRoot(){return{ngModule:n,providers:[{provide:No,useFactory:()=>qh,multi:!0,deps:[Me,T]}]}}static \u0275fac=function(e){return new(e||n)};static \u0275mod=Le({type:n});static \u0275inj=De({imports:[Mi]})}return n})();var eu=jg(Ng());Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(t,i){var e={};e["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[i]},e.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:e}};r["language-"+i]={pattern:/[\s\S]+/,inside:Prism.languages[i]};var a={};a[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:r},Prism.languages.insertBefore("markup","cdata",a)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(n,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;(function(n){n.languages.typescript=n.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),n.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete n.languages.typescript.parameter,delete n.languages.typescript["literal-property"];var t=n.languages.extend("typescript",{});delete t["class-name"],n.languages.typescript["class-name"].inside=t,n.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),n.languages.ts=n.languages.typescript})(Prism);var Fg={name:"angular-module-example",version:"39.27.0",scripts:{ng:"ng",dev:"wireit",build:"ng build",preview:"pnpx serve dist/angular-module-example/browser -p 4004","cicd-update-version":`sed -i 's/"workspace:\\*"/"'$PACKAGE_VERSION'"/' package.json`},private:!0,author:"Pfaff Fabian <fabian.pfaff@infineon.com>",license:"MIT",dependencies:{"@angular/common":"^20.3.0","@angular/compiler":"^20.3.0","@angular/core":"^20.3.0","@angular/forms":"^20.3.0","@angular/platform-browser":"^20.3.0","@angular/platform-server":"^20.3.0","@angular/router":"^20.3.0","@angular/ssr":"^20.3.7","@infineon/infineon-design-system-angular":"39.28.0--canary.2213.25430830969.0",express:"^5.1.0",prismjs:"^1.30.0",rxjs:"~7.8.0",tslib:"^2.3.0","zone.js":"~0.15.0"},devDependencies:{"@angular/build":"^20.3.7","@angular/cli":"^20.3.7","@angular/compiler-cli":"^20.3.0","@types/express":"^5.0.1","@types/node":"^20.17.19","@types/prismjs":"^1.26.5",typescript:"~5.9.2"},wireit:{dev:{command:"ng serve --port 3004",service:!0,dependencies:[{script:"../../packages/wrapper-angular:dev",cascade:!1}]}}};var Lg="39.28.0--canary.2213.25430830969.0";var oa=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-accordion-example',
  templateUrl: './ifx-accordion-example.html',
  styleUrl: './ifx-accordion-example.scss',
  standalone: false
})
export class IfxAccordionExample {

  protected ariaLevelNumber = 3;
  protected autoCollapse = false;

  protected updateAriaLevelNumber(value: string) {
    this.ariaLevelNumber = Number(value);
  }

  protected handleAutoCollapseChange() {
    this.autoCollapse = !this.autoCollapse;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

  protected handleClose(event: CustomEvent) {
    console.log('ifxClose:', event);
    // Add your handler logic here
  }

  protected handleOpen(event: CustomEvent) {
    console.log('ifxOpen:', event);
    // Add your handler logic here
  }

}`;htmlCode=`  &lt;ifx-accordion [autoCollapse]=&quot;autoCollapse&quot;&gt;
    &lt;ifx-accordion-item
      caption=&quot;Label&quot;
      [open]=&quot;true&quot;
      icon=&quot;&quot;
      (ifxClose)=&quot;handleClose($any($event))&quot;
      (ifxOpen)=&quot;handleOpen($any($event))&quot;
      [ariaLevelNumber]=&quot;ariaLevelNumber&quot;&gt;Content for Initial Item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.&lt;/ifx-accordion-item&gt;
    &lt;ifx-accordion-item
      caption=&quot;Label&quot;
      [open]=&quot;false&quot;
      icon=&quot;&quot;
      [ariaLevelNumber]=&quot;ariaLevelNumber&quot;&gt;Content for Item #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.&lt;/ifx-accordion-item&gt;
    &lt;ifx-accordion-item
      caption=&quot;Label&quot;
      [open]=&quot;false&quot;
      icon=&quot;&quot;
      [ariaLevelNumber]=&quot;ariaLevelNumber&quot;&gt;Content for Item #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.&lt;/ifx-accordion-item&gt;
  &lt;/ifx-accordion&gt;`;ariaLevelNumber=3;autoCollapse=!1;updateAriaLevelNumber(t){this.ariaLevelNumber=Number(t)}handleAutoCollapseChange(){this.autoCollapse=!this.autoCollapse}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleClose(t){console.log("ifxClose:",t)}handleOpen(t){console.log("ifxOpen:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-accordion-example"]],standalone:!1,decls:35,vars:12,consts:[[3,"autoCollapse"],["caption","Label","icon","",3,"ifxClose","ifxOpen","open","ariaLevelNumber"],["caption","Label","icon","",3,"open","ariaLevelNumber"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","ariaLevelNumber","type","number",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-accordion",0)(1,"ifx-accordion-item",1),m("ifxClose",function(a){return e.handleClose(a)})("ifxOpen",function(a){return e.handleOpen(a)}),s(2,"Content for Initial Item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque."),o(),l(3,"ifx-accordion-item",2),s(4,"Content for Item #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque."),o(),l(5,"ifx-accordion-item",2),s(6,"Content for Item #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque."),o()(),l(7,"h3",3),s(8,"Controls"),o(),l(9,"div",4)(10,"ifx-button",5),m("click",function(){return e.handleAutoCollapseChange()}),s(11,"Toggle AutoCollapse"),o()(),l(12,"div",6)(13,"ifx-text-field",7),m("ifxInput",function(a){return e.updateAriaLevelNumber(e.getControlInputValue(a))}),o()(),l(14,"div",8)(15,"div")(16,"b"),s(17,"ariaLevelNumber:"),o(),s(18),o(),l(19,"div")(20,"b"),s(21,"autoCollapse:"),o(),s(22),o()(),l(23,"details",9)(24,"summary"),s(25,"View Code"),o(),l(26,"div",10)(27,"h3"),s(28,"ifx-accordion-example.ts"),o(),l(29,"pre"),b(30,"code",11),o(),l(31,"h3"),s(32,"ifx-accordion-example.html"),o(),l(33,"pre"),b(34,"code",12),o()()()),i&2&&(p("autoCollapse",e.autoCollapse),d(),p("open",!0)("ariaLevelNumber",e.ariaLevelNumber),d(2),p("open",!1)("ariaLevelNumber",e.ariaLevelNumber),d(2),p("open",!1)("ariaLevelNumber",e.ariaLevelNumber),d(8),p("value",e.stringifyValue(e.ariaLevelNumber)),d(5),h(" ",e.stringifyValue(e.ariaLevelNumber)),d(4),h(" ",e.stringifyValue(e.autoCollapse)),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[Hh,jh,k,O,N],encapsulation:2})};var aa=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-action-list-example',
  templateUrl: './ifx-action-list-example.html',
  styleUrl: './ifx-action-list-example.scss',
  standalone: false
})
export class IfxActionListExample {

  protected listAriaLabel = "Navigation menu";

  protected updateListAriaLabel(value: string) {
    this.listAriaLabel = value;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

  protected handleActionListItemClick(event: CustomEvent) {
    console.log('ifxActionListItemClick:', event);
    // Add your handler logic here
  }

}`;htmlCode=`  &lt;ifx-action-list [listAriaLabel]=&quot;listAriaLabel&quot;&gt;
    &lt;ifx-action-list-item
      item-title=&quot;Dashboard&quot;
      description=&quot;View your main dashboard&quot;
      value=&quot;dashboard&quot;
      item-aria-label=&quot;Navigation item&quot;
      (ifxActionListItemClick)=&quot;handleActionListItemClick($any($event))&quot;&gt;
      &lt;ifx-icon
        slot=&quot;trailing&quot;
        icon=&quot;chevron-right-16&quot;&gt;&lt;/ifx-icon&gt;
    &lt;/ifx-action-list-item&gt;
    &lt;ifx-action-list-item
      item-title=&quot;Settings&quot;
      value=&quot;settings&quot;
      item-aria-label=&quot;Navigation item&quot;&gt;
      &lt;ifx-icon
        slot=&quot;trailing&quot;
        icon=&quot;chevron-right-16&quot;&gt;&lt;/ifx-icon&gt;
    &lt;/ifx-action-list-item&gt;
    &lt;ifx-action-list-item
      item-title=&quot;Profile&quot;
      description=&quot;Manage your profile information&quot;
      value=&quot;profile&quot;
      [disabled]=&quot;true&quot;
      item-aria-label=&quot;Navigation item&quot;&gt;
      &lt;ifx-icon
        slot=&quot;trailing&quot;
        icon=&quot;chevron-right-16&quot;&gt;&lt;/ifx-icon&gt;
    &lt;/ifx-action-list-item&gt;
    &lt;ifx-action-list-item
      item-title=&quot;Advanced Analytics and Reporting Dashboard with Extended Functionality&quot;
      description=&quot;This comprehensive analytics dashboard provides detailed insights into user behavior and system performance metrics.&quot;
      value=&quot;analytics&quot;
      item-aria-label=&quot;Navigation item&quot;&gt;
      &lt;ifx-icon
        slot=&quot;trailing&quot;
        icon=&quot;chevron-right-16&quot;&gt;&lt;/ifx-icon&gt;
    &lt;/ifx-action-list-item&gt;
  &lt;/ifx-action-list&gt;`;listAriaLabel="Navigation menu";updateListAriaLabel(t){this.listAriaLabel=t}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleActionListItemClick(t){console.log("ifxActionListItemClick:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-action-list-example"]],standalone:!1,decls:30,vars:6,consts:[[3,"listAriaLabel"],["item-title","Dashboard","description","View your main dashboard","value","dashboard","item-aria-label","Navigation item",3,"ifxActionListItemClick"],["slot","trailing","icon","chevron-right-16"],["item-title","Settings","value","settings","item-aria-label","Navigation item"],["item-title","Profile","description","Manage your profile information","value","profile","item-aria-label","Navigation item",3,"disabled"],["item-title","Advanced Analytics and Reporting Dashboard with Extended Functionality","description","This comprehensive analytics dashboard provides detailed insights into user behavior and system performance metrics.","value","analytics","item-aria-label","Navigation item"],[1,"controls-title"],[1,"controls","controls-input"],["label","listAriaLabel","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-action-list",0)(1,"ifx-action-list-item",1),m("ifxActionListItemClick",function(a){return e.handleActionListItemClick(a)}),b(2,"ifx-icon",2),o(),l(3,"ifx-action-list-item",3),b(4,"ifx-icon",2),o(),l(5,"ifx-action-list-item",4),b(6,"ifx-icon",2),o(),l(7,"ifx-action-list-item",5),b(8,"ifx-icon",2),o()(),l(9,"h3",6),s(10,"Controls"),o(),l(11,"div",7)(12,"ifx-text-field",8),m("ifxInput",function(a){return e.updateListAriaLabel(e.getControlInputValue(a))}),o()(),l(13,"div",9)(14,"div")(15,"b"),s(16,"listAriaLabel:"),o(),s(17),o()(),l(18,"details",10)(19,"summary"),s(20,"View Code"),o(),l(21,"div",11)(22,"h3"),s(23,"ifx-action-list-example.ts"),o(),l(24,"pre"),b(25,"code",12),o(),l(26,"h3"),s(27,"ifx-action-list-example.html"),o(),l(28,"pre"),b(29,"code",13),o()()()),i&2&&(p("listAriaLabel",e.listAriaLabel),d(5),p("disabled",!0),d(7),p("value",e.stringifyValue(e.listAriaLabel)),d(5),h(" ",e.stringifyValue(e.listAriaLabel)),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[Bh,zh,At,O,N],encapsulation:2})};var sa=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-alert-example',
  templateUrl: './ifx-alert-example.html',
  styleUrl: './ifx-alert-example.scss',
  standalone: false
})
export class IfxAlertExample {

  protected readonly variantOptions = ["primary","success","danger","warning"];
  protected variantIndex = 0;
  protected readonly iconOptions = ["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];
  protected iconIndex = 0;
  protected closable = true;
  protected readonly ariaLiveTextOptions = ["off","polite","assertive"];
  protected ariaLiveTextIndex = 2;

  protected handleVariantChange() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
  }

  protected handleIconChange() {
    this.iconIndex = (this.iconIndex + 1) % this.iconOptions.length;
  }

  protected handleClosableChange() {
    this.closable = !this.closable;
  }

  protected handleAriaLiveTextChange() {
    this.ariaLiveTextIndex = (this.ariaLiveTextIndex + 1) % this.ariaLiveTextOptions.length;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

  protected handleClose(event: CustomEvent) {
    console.log('ifxClose:', event);
    // Add your handler logic here
  }

}`;htmlCode=`  &lt;ifx-alert
    (ifxClose)=&quot;handleClose($any($event))&quot;
    [ariaLiveText]=&quot;ariaLiveTextOptions[ariaLiveTextIndex]&quot;
    [variant]=&quot;variantOptions[variantIndex]&quot;
    [icon]=&quot;iconOptions[iconIndex]&quot;
    [closable]=&quot;closable&quot;&gt;Attention! This is an alert message \u2014 check it out!&lt;/ifx-alert&gt;`;variantOptions=["primary","success","danger","warning"];variantIndex=0;iconOptions=["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];iconIndex=0;closable=!0;ariaLiveTextOptions=["off","polite","assertive"];ariaLiveTextIndex=2;handleVariantChange(){this.variantIndex=(this.variantIndex+1)%this.variantOptions.length}handleIconChange(){this.iconIndex=(this.iconIndex+1)%this.iconOptions.length}handleClosableChange(){this.closable=!this.closable}handleAriaLiveTextChange(){this.ariaLiveTextIndex=(this.ariaLiveTextIndex+1)%this.ariaLiveTextOptions.length}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleClose(t){console.log("ifxClose:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-alert-example"]],standalone:!1,decls:42,vars:10,consts:[[3,"ifxClose","ariaLiveText","variant","icon","closable"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-alert",0),m("ifxClose",function(a){return e.handleClose(a)}),s(1,"Attention! This is an alert message \u2014 check it out!"),o(),l(2,"h3",1),s(3,"Controls"),o(),l(4,"div",2)(5,"ifx-button",3),m("click",function(){return e.handleVariantChange()}),s(6,"Toggle Variant"),o(),l(7,"ifx-button",3),m("click",function(){return e.handleIconChange()}),s(8,"Toggle Icon"),o(),l(9,"ifx-button",3),m("click",function(){return e.handleClosableChange()}),s(10,"Toggle Closable"),o(),l(11,"ifx-button",3),m("click",function(){return e.handleAriaLiveTextChange()}),s(12,"Toggle AriaLiveText"),o()(),l(13,"div",4)(14,"div")(15,"b"),s(16,"variant:"),o(),s(17),o(),l(18,"div")(19,"b"),s(20,"icon:"),o(),s(21),o(),l(22,"div")(23,"b"),s(24,"closable:"),o(),s(25),o(),l(26,"div")(27,"b"),s(28,"ariaLiveText:"),o(),s(29),o()(),l(30,"details",5)(31,"summary"),s(32,"View Code"),o(),l(33,"div",6)(34,"h3"),s(35,"ifx-alert-example.ts"),o(),l(36,"pre"),b(37,"code",7),o(),l(38,"h3"),s(39,"ifx-alert-example.html"),o(),l(40,"pre"),b(41,"code",8),o()()()),i&2&&(p("ariaLiveText",e.ariaLiveTextOptions[e.ariaLiveTextIndex])("variant",e.variantOptions[e.variantIndex])("icon",e.iconOptions[e.iconIndex])("closable",e.closable),d(17),h(" ",e.stringifyValue(e.variantOptions[e.variantIndex])),d(4),h(" ",e.stringifyValue(e.iconOptions[e.iconIndex])),d(4),h(" ",e.stringifyValue(e.closable)),d(4),h(" ",e.stringifyValue(e.ariaLiveTextOptions[e.ariaLiveTextIndex])),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[$h,k],encapsulation:2})};var la=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-ai-label-example',
  templateUrl: './ifx-ai-label-example.html',
  styleUrl: './ifx-ai-label-example.scss',
  standalone: false
})
export class IfxAiLabelExample {

  protected divider = true;
  protected readonly variantOptions = ["label","icon"];
  protected variantIndex = 0;

  protected handleDividerChange() {
    this.divider = !this.divider;
  }

  protected handleVariantChange() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

}`;htmlCode=`  &lt;ifx-ai-label
    [divider]=&quot;divider&quot;
    [variant]=&quot;variantOptions[variantIndex]&quot;&gt;&lt;/ifx-ai-label&gt;`;divider=!0;variantOptions=["label","icon"];variantIndex=0;handleDividerChange(){this.divider=!this.divider}handleVariantChange(){this.variantIndex=(this.variantIndex+1)%this.variantOptions.length}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-ai-label-example"]],standalone:!1,decls:29,vars:6,consts:[[3,"divider","variant"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(b(0,"ifx-ai-label",0),l(1,"h3",1),s(2,"Controls"),o(),l(3,"div",2)(4,"ifx-button",3),m("click",function(){return e.handleDividerChange()}),s(5,"Toggle Divider"),o(),l(6,"ifx-button",3),m("click",function(){return e.handleVariantChange()}),s(7,"Toggle Variant"),o()(),l(8,"div",4)(9,"div")(10,"b"),s(11,"divider:"),o(),s(12),o(),l(13,"div")(14,"b"),s(15,"variant:"),o(),s(16),o()(),l(17,"details",5)(18,"summary"),s(19,"View Code"),o(),l(20,"div",6)(21,"h3"),s(22,"ifx-ai-label-example.ts"),o(),l(23,"pre"),b(24,"code",7),o(),l(25,"h3"),s(26,"ifx-ai-label-example.html"),o(),l(27,"pre"),b(28,"code",8),o()()()),i&2&&(p("divider",e.divider)("variant",e.variantOptions[e.variantIndex]),d(12),h(" ",e.stringifyValue(e.divider)),d(4),h(" ",e.stringifyValue(e.variantOptions[e.variantIndex])),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[Uh,k],encapsulation:2})};function yy(n,t){if(n&1&&b(0,"ifx-icon",1),n&2){let i=Si(2);p("icon",i.stringifyValue(i.iconOptions[i.iconIndex]))}}function Iy(n,t){if(n&1&&Ei(0,yy,1,1,"ifx-icon",1),n&2){let i=Si();wi(i.iconPositionOptions[i.iconPositionIndex]==="left"?0:-1)}}function Cy(n,t){if(n&1&&b(0,"ifx-icon",1),n&2){let i=Si();p("icon",i.stringifyValue(i.iconOptions[i.iconIndex]))}}var da=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-button-example',
  templateUrl: './ifx-button-example.html',
  styleUrl: './ifx-button-example.scss',
  standalone: false
})
export class IfxButtonExample {

  protected readonly iconOptions = ["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];
  protected iconIndex = 0;
  protected readonly variantOptions = ["primary","secondary","tertiary"];
  protected variantIndex = 0;
  protected ariaLabelText = "Button";
  protected readonly themeOptions = ["default","danger","inverse"];
  protected themeIndex = 0;
  protected readonly typeOptions = ["button","submit","reset"];
  protected typeIndex = 0;
  protected readonly sizeOptions = ["xs","s","m","l"];
  protected sizeIndex = 2;
  protected fullWidth = false;
  protected disabled = false;
  protected readonly iconPositionOptions = ["left","right"];
  protected iconPositionIndex = 0;
  protected href = false;
  protected readonly targetOptions = ["_blank","_self","_parent"];
  protected targetIndex = 0;

  protected handleIconChange() {
    this.iconIndex = (this.iconIndex + 1) % this.iconOptions.length;
  }

  protected handleVariantChange() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
  }

  protected updateAriaLabelText(value: string) {
    this.ariaLabelText = value;
  }

  protected handleThemeChange() {
    this.themeIndex = (this.themeIndex + 1) % this.themeOptions.length;
  }

  protected handleTypeChange() {
    this.typeIndex = (this.typeIndex + 1) % this.typeOptions.length;
  }

  protected handleSizeChange() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected handleFullWidthChange() {
    this.fullWidth = !this.fullWidth;
  }

  protected handleDisabledChange() {
    this.disabled = !this.disabled;
  }

  protected handleIconPositionChange() {
    this.iconPositionIndex = (this.iconPositionIndex + 1) % this.iconPositionOptions.length;
  }

  protected handleHrefChange() {
    this.href = !this.href;
  }

  protected handleTargetChange() {
    this.targetIndex = (this.targetIndex + 1) % this.targetOptions.length;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

}`;htmlCode=`  &lt;ifx-button
    [type]=&quot;typeOptions[typeIndex]&quot;
    [ariaLabelText]=&quot;ariaLabelText&quot;
    [variant]=&quot;variantOptions[variantIndex]&quot;
    [size]=&quot;sizeOptions[sizeIndex]&quot;
    [target]=&quot;targetOptions[targetIndex]&quot;
    [theme]=&quot;themeOptions[themeIndex]&quot;
    [fullWidth]=&quot;fullWidth&quot;
    [disabled]=&quot;disabled&quot;
    [href]=&quot;href&quot;&gt;
    @if (iconOptions[iconIndex]) {
      @if (iconPositionOptions[iconPositionIndex] === &#039;left&#039;) {
        &lt;ifx-icon [icon]=&quot;stringifyValue(iconOptions[iconIndex])&quot;&gt;&lt;/ifx-icon&gt;
      }
    }
    Button
    @if (iconOptions[iconIndex] &amp;&amp; iconPositionOptions[iconPositionIndex] === &#039;right&#039;) {
      &lt;ifx-icon [icon]=&quot;stringifyValue(iconOptions[iconIndex])&quot;&gt;&lt;/ifx-icon&gt;
    }
  &lt;/ifx-button&gt;`;iconOptions=["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];iconIndex=0;variantOptions=["primary","secondary","tertiary"];variantIndex=0;ariaLabelText="Button";themeOptions=["default","danger","inverse"];themeIndex=0;typeOptions=["button","submit","reset"];typeIndex=0;sizeOptions=["xs","s","m","l"];sizeIndex=2;fullWidth=!1;disabled=!1;iconPositionOptions=["left","right"];iconPositionIndex=0;href=!1;targetOptions=["_blank","_self","_parent"];targetIndex=0;handleIconChange(){this.iconIndex=(this.iconIndex+1)%this.iconOptions.length}handleVariantChange(){this.variantIndex=(this.variantIndex+1)%this.variantOptions.length}updateAriaLabelText(t){this.ariaLabelText=t}handleThemeChange(){this.themeIndex=(this.themeIndex+1)%this.themeOptions.length}handleTypeChange(){this.typeIndex=(this.typeIndex+1)%this.typeOptions.length}handleSizeChange(){this.sizeIndex=(this.sizeIndex+1)%this.sizeOptions.length}handleFullWidthChange(){this.fullWidth=!this.fullWidth}handleDisabledChange(){this.disabled=!this.disabled}handleIconPositionChange(){this.iconPositionIndex=(this.iconPositionIndex+1)%this.iconPositionOptions.length}handleHrefChange(){this.href=!this.href}handleTargetChange(){this.targetIndex=(this.targetIndex+1)%this.targetOptions.length}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-button-example"]],standalone:!1,decls:86,vars:25,consts:[[3,"type","ariaLabelText","variant","size","target","theme","fullWidth","disabled","href"],[3,"icon"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","ariaLabelText","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-button",0),Ei(1,Iy,1,1),s(2," Button "),Ei(3,Cy,1,1,"ifx-icon",1),o(),l(4,"h3",2),s(5,"Controls"),o(),l(6,"div",3)(7,"ifx-button",4),m("click",function(){return e.handleIconChange()}),s(8,"Toggle Icon"),o(),l(9,"ifx-button",4),m("click",function(){return e.handleVariantChange()}),s(10,"Toggle Variant"),o(),l(11,"ifx-button",4),m("click",function(){return e.handleThemeChange()}),s(12,"Toggle Theme"),o(),l(13,"ifx-button",4),m("click",function(){return e.handleTypeChange()}),s(14,"Toggle Type"),o(),l(15,"ifx-button",4),m("click",function(){return e.handleSizeChange()}),s(16,"Toggle Size"),o(),l(17,"ifx-button",4),m("click",function(){return e.handleFullWidthChange()}),s(18,"Toggle FullWidth"),o(),l(19,"ifx-button",4),m("click",function(){return e.handleDisabledChange()}),s(20,"Toggle Disabled"),o(),l(21,"ifx-button",4),m("click",function(){return e.handleIconPositionChange()}),s(22,"Toggle IconPosition"),o(),l(23,"ifx-button",4),m("click",function(){return e.handleHrefChange()}),s(24,"Toggle Href"),o(),l(25,"ifx-button",4),m("click",function(){return e.handleTargetChange()}),s(26,"Toggle Target"),o()(),l(27,"div",5)(28,"ifx-text-field",6),m("ifxInput",function(a){return e.updateAriaLabelText(e.getControlInputValue(a))}),o()(),l(29,"div",7)(30,"div")(31,"b"),s(32,"icon:"),o(),s(33),o(),l(34,"div")(35,"b"),s(36,"variant:"),o(),s(37),o(),l(38,"div")(39,"b"),s(40,"ariaLabelText:"),o(),s(41),o(),l(42,"div")(43,"b"),s(44,"theme:"),o(),s(45),o(),l(46,"div")(47,"b"),s(48,"type:"),o(),s(49),o(),l(50,"div")(51,"b"),s(52,"size:"),o(),s(53),o(),l(54,"div")(55,"b"),s(56,"fullWidth:"),o(),s(57),o(),l(58,"div")(59,"b"),s(60,"disabled:"),o(),s(61),o(),l(62,"div")(63,"b"),s(64,"iconPosition:"),o(),s(65),o(),l(66,"div")(67,"b"),s(68,"href:"),o(),s(69),o(),l(70,"div")(71,"b"),s(72,"target:"),o(),s(73),o()(),l(74,"details",8)(75,"summary"),s(76,"View Code"),o(),l(77,"div",9)(78,"h3"),s(79,"ifx-button-example.ts"),o(),l(80,"pre"),b(81,"code",10),o(),l(82,"h3"),s(83,"ifx-button-example.html"),o(),l(84,"pre"),b(85,"code",11),o()()()),i&2&&(p("type",e.typeOptions[e.typeIndex])("ariaLabelText",e.ariaLabelText)("variant",e.variantOptions[e.variantIndex])("size",e.sizeOptions[e.sizeIndex])("target",e.targetOptions[e.targetIndex])("theme",e.themeOptions[e.themeIndex])("fullWidth",e.fullWidth)("disabled",e.disabled)("href",e.href),d(),wi(e.iconOptions[e.iconIndex]?1:-1),d(2),wi(e.iconOptions[e.iconIndex]&&e.iconPositionOptions[e.iconPositionIndex]==="right"?3:-1),d(25),p("value",e.stringifyValue(e.ariaLabelText)),d(5),h(" ",e.stringifyValue(e.iconOptions[e.iconIndex])),d(4),h(" ",e.stringifyValue(e.variantOptions[e.variantIndex])),d(4),h(" ",e.stringifyValue(e.ariaLabelText)),d(4),h(" ",e.stringifyValue(e.themeOptions[e.themeIndex])),d(4),h(" ",e.stringifyValue(e.typeOptions[e.typeIndex])),d(4),h(" ",e.stringifyValue(e.sizeOptions[e.sizeIndex])),d(4),h(" ",e.stringifyValue(e.fullWidth)),d(4),h(" ",e.stringifyValue(e.disabled)),d(4),h(" ",e.stringifyValue(e.iconPositionOptions[e.iconPositionIndex])),d(4),h(" ",e.stringifyValue(e.href)),d(4),h(" ",e.stringifyValue(e.targetOptions[e.targetIndex])),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,At,O,N],encapsulation:2})};var ca=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-card-example',
  templateUrl: './ifx-card-example.html',
  styleUrl: './ifx-card-example.scss',
  standalone: false
})
export class IfxCardExample {

  protected readonly directionOptions = ["horizontal","vertical"];
  protected directionIndex = 1;
  protected ariaLabelText = "Card";
  protected readonly positionOptions = ["left","right"];
  protected positionIndex = 1;
  protected href = "";
  protected readonly targetOptions = ["_blank","_self","_parent"];
  protected targetIndex = 0;
  protected src = "https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg";
  protected alt = "Coffee";
  protected fullWidth = false;

  protected handleDirectionChange() {
    this.directionIndex = (this.directionIndex + 1) % this.directionOptions.length;
  }

  protected updateAriaLabelText(value: string) {
    this.ariaLabelText = value;
  }

  protected handlePositionChange() {
    this.positionIndex = (this.positionIndex + 1) % this.positionOptions.length;
  }

  protected updateHref(value: string) {
    this.href = value;
  }

  protected handleTargetChange() {
    this.targetIndex = (this.targetIndex + 1) % this.targetOptions.length;
  }

  protected updateSrc(value: string) {
    this.src = value;
  }

  protected updateAlt(value: string) {
    this.alt = value;
  }

  protected handleFullWidthChange() {
    this.fullWidth = !this.fullWidth;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

  protected handleImgPosition(event: CustomEvent) {
    console.log('imgPosition:', event);
    // Add your handler logic here
  }

}`;htmlCode=`  &lt;ifx-card
    aria-label=&quot;&quot;
    [direction]=&quot;directionOptions[directionIndex]&quot;
    [href]=&quot;href&quot;
    [target]=&quot;targetOptions[targetIndex]&quot;
    [ariaLabelText]=&quot;ariaLabelText&quot;
    [fullWidth]=&quot;fullWidth&quot;&gt;
    &lt;ifx-card-image
      slot=&quot;img&quot;
      (imgPosition)=&quot;handleImgPosition($any($event))&quot;
      [position]=&quot;positionOptions[positionIndex]&quot;
      [src]=&quot;src&quot;
      [alt]=&quot;alt&quot;&gt;&lt;/ifx-card-image&gt;
    &lt;ifx-card-overline (imgPosition)=&quot;handleImgPosition($any($event))&quot;&gt;Overline&lt;/ifx-card-overline&gt;
    &lt;ifx-card-headline (imgPosition)=&quot;handleImgPosition($any($event))&quot;&gt;Headline&lt;/ifx-card-headline&gt;
    &lt;ifx-card-text (imgPosition)=&quot;handleImgPosition($any($event))&quot;&gt;Some quick example text to build on the card title and make up the bulk of the card&#039;s content.&lt;/ifx-card-text&gt;
    &lt;ifx-card-links
      slot=&quot;buttons&quot;
      (imgPosition)=&quot;handleImgPosition($any($event))&quot;&gt;
      &lt;ifx-button variant=&quot;primary&quot;&gt;Button&lt;/ifx-button&gt;
      &lt;ifx-button variant=&quot;secondary&quot;&gt;Button&lt;/ifx-button&gt;
    &lt;/ifx-card-links&gt;
  &lt;/ifx-card&gt;`;directionOptions=["horizontal","vertical"];directionIndex=1;ariaLabelText="Card";positionOptions=["left","right"];positionIndex=1;href="";targetOptions=["_blank","_self","_parent"];targetIndex=0;src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg";alt="Coffee";fullWidth=!1;handleDirectionChange(){this.directionIndex=(this.directionIndex+1)%this.directionOptions.length}updateAriaLabelText(t){this.ariaLabelText=t}handlePositionChange(){this.positionIndex=(this.positionIndex+1)%this.positionOptions.length}updateHref(t){this.href=t}handleTargetChange(){this.targetIndex=(this.targetIndex+1)%this.targetOptions.length}updateSrc(t){this.src=t}updateAlt(t){this.alt=t}handleFullWidthChange(){this.fullWidth=!this.fullWidth}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleImgPosition(t){console.log("imgPosition:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-card-example"]],standalone:!1,decls:74,vars:22,consts:[["aria-label","",3,"direction","href","target","ariaLabelText","fullWidth"],["slot","img",3,"imgPosition","position","src","alt"],[3,"imgPosition"],["slot","buttons",3,"imgPosition"],["variant","primary"],["variant","secondary"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","ariaLabelText","type","text",3,"ifxInput","value"],["label","href","type","text",3,"ifxInput","value"],["label","src","type","text",3,"ifxInput","value"],["label","alt","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-card",0)(1,"ifx-card-image",1),m("imgPosition",function(a){return e.handleImgPosition(a)}),o(),l(2,"ifx-card-overline",2),m("imgPosition",function(a){return e.handleImgPosition(a)}),s(3,"Overline"),o(),l(4,"ifx-card-headline",2),m("imgPosition",function(a){return e.handleImgPosition(a)}),s(5,"Headline"),o(),l(6,"ifx-card-text",2),m("imgPosition",function(a){return e.handleImgPosition(a)}),s(7,"Some quick example text to build on the card title and make up the bulk of the card's content."),o(),l(8,"ifx-card-links",3),m("imgPosition",function(a){return e.handleImgPosition(a)}),l(9,"ifx-button",4),s(10,"Button"),o(),l(11,"ifx-button",5),s(12,"Button"),o()()(),l(13,"h3",6),s(14,"Controls"),o(),l(15,"div",7)(16,"ifx-button",8),m("click",function(){return e.handleDirectionChange()}),s(17,"Toggle Direction"),o(),l(18,"ifx-button",8),m("click",function(){return e.handlePositionChange()}),s(19,"Toggle Position"),o(),l(20,"ifx-button",8),m("click",function(){return e.handleTargetChange()}),s(21,"Toggle Target"),o(),l(22,"ifx-button",8),m("click",function(){return e.handleFullWidthChange()}),s(23,"Toggle FullWidth"),o()(),l(24,"div",9)(25,"ifx-text-field",10),m("ifxInput",function(a){return e.updateAriaLabelText(e.getControlInputValue(a))}),o(),l(26,"ifx-text-field",11),m("ifxInput",function(a){return e.updateHref(e.getControlInputValue(a))}),o(),l(27,"ifx-text-field",12),m("ifxInput",function(a){return e.updateSrc(e.getControlInputValue(a))}),o(),l(28,"ifx-text-field",13),m("ifxInput",function(a){return e.updateAlt(e.getControlInputValue(a))}),o()(),l(29,"div",14)(30,"div")(31,"b"),s(32,"direction:"),o(),s(33),o(),l(34,"div")(35,"b"),s(36,"ariaLabelText:"),o(),s(37),o(),l(38,"div")(39,"b"),s(40,"position:"),o(),s(41),o(),l(42,"div")(43,"b"),s(44,"href:"),o(),s(45),o(),l(46,"div")(47,"b"),s(48,"target:"),o(),s(49),o(),l(50,"div")(51,"b"),s(52,"src:"),o(),s(53),o(),l(54,"div")(55,"b"),s(56,"alt:"),o(),s(57),o(),l(58,"div")(59,"b"),s(60,"fullWidth:"),o(),s(61),o()(),l(62,"details",15)(63,"summary"),s(64,"View Code"),o(),l(65,"div",16)(66,"h3"),s(67,"ifx-card-example.ts"),o(),l(68,"pre"),b(69,"code",17),o(),l(70,"h3"),s(71,"ifx-card-example.html"),o(),l(72,"pre"),b(73,"code",18),o()()()),i&2&&(p("direction",e.directionOptions[e.directionIndex])("href",e.href)("target",e.targetOptions[e.targetIndex])("ariaLabelText",e.ariaLabelText)("fullWidth",e.fullWidth),d(),p("position",e.positionOptions[e.positionIndex])("src",e.src)("alt",e.alt),d(24),p("value",e.stringifyValue(e.ariaLabelText)),d(),p("value",e.stringifyValue(e.href)),d(),p("value",e.stringifyValue(e.src)),d(),p("value",e.stringifyValue(e.alt)),d(5),h(" ",e.stringifyValue(e.directionOptions[e.directionIndex])),d(4),h(" ",e.stringifyValue(e.ariaLabelText)),d(4),h(" ",e.stringifyValue(e.positionOptions[e.positionIndex])),d(4),h(" ",e.stringifyValue(e.href)),d(4),h(" ",e.stringifyValue(e.targetOptions[e.targetIndex])),d(4),h(" ",e.stringifyValue(e.src)),d(4),h(" ",e.stringifyValue(e.alt)),d(4),h(" ",e.stringifyValue(e.fullWidth)),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,Wh,Zh,Jh,Yh,Xh,Qh,O,N],encapsulation:2})};var ua=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-checkbox-example',
  templateUrl: './ifx-checkbox-example.html',
  styleUrl: './ifx-checkbox-example.scss',
  standalone: false
})
export class IfxCheckboxExample {

  protected error = false;
  protected disabled = false;
  protected checked = false;
  protected indeterminate = false;
  protected readonly sizeOptions = ["s","m"];
  protected sizeIndex = 0;
  protected name = "checkbox";

  protected handleErrorChange() {
    this.error = !this.error;
  }

  protected handleDisabledChange() {
    this.disabled = !this.disabled;
  }

  protected handleCheckedChange() {
    this.checked = !this.checked;
  }

  protected handleIndeterminateChange() {
    this.indeterminate = !this.indeterminate;
  }

  protected handleSizeChange() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected updateName(value: string) {
    this.name = value;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

  protected handleChange(event: CustomEvent) {
    console.log('ifxChange:', event);
    // Add your handler logic here
  }

  protected handleError(event: CustomEvent) {
    console.log('ifxError:', event);
    // Add your handler logic here
  }

}`;htmlCode=`  &lt;ifx-checkbox
    (ifxChange)=&quot;handleChange($any($event))&quot;
    (ifxError)=&quot;handleError($any($event))&quot;
    [error]=&quot;error&quot;
    [disabled]=&quot;disabled&quot;
    [checked]=&quot;checked&quot;
    [size]=&quot;sizeOptions[sizeIndex]&quot;
    [indeterminate]=&quot;indeterminate&quot;
    [name]=&quot;name&quot;&gt;Text&lt;/ifx-checkbox&gt;`;error=!1;disabled=!1;checked=!1;indeterminate=!1;sizeOptions=["s","m"];sizeIndex=0;name="checkbox";handleErrorChange(){this.error=!this.error}handleDisabledChange(){this.disabled=!this.disabled}handleCheckedChange(){this.checked=!this.checked}handleIndeterminateChange(){this.indeterminate=!this.indeterminate}handleSizeChange(){this.sizeIndex=(this.sizeIndex+1)%this.sizeOptions.length}updateName(t){this.name=t}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleChange(t){console.log("ifxChange:",t)}handleError(t){console.log("ifxError:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-checkbox-example"]],standalone:!1,decls:54,vars:15,consts:[[3,"ifxChange","ifxError","error","disabled","checked","size","indeterminate","name"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","name","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-checkbox",0),m("ifxChange",function(a){return e.handleChange(a)})("ifxError",function(a){return e.handleError(a)}),s(1,"Text"),o(),l(2,"h3",1),s(3,"Controls"),o(),l(4,"div",2)(5,"ifx-button",3),m("click",function(){return e.handleErrorChange()}),s(6,"Toggle Error"),o(),l(7,"ifx-button",3),m("click",function(){return e.handleDisabledChange()}),s(8,"Toggle Disabled"),o(),l(9,"ifx-button",3),m("click",function(){return e.handleCheckedChange()}),s(10,"Toggle Checked"),o(),l(11,"ifx-button",3),m("click",function(){return e.handleIndeterminateChange()}),s(12,"Toggle Indeterminate"),o(),l(13,"ifx-button",3),m("click",function(){return e.handleSizeChange()}),s(14,"Toggle Size"),o()(),l(15,"div",4)(16,"ifx-text-field",5),m("ifxInput",function(a){return e.updateName(e.getControlInputValue(a))}),o()(),l(17,"div",6)(18,"div")(19,"b"),s(20,"error:"),o(),s(21),o(),l(22,"div")(23,"b"),s(24,"disabled:"),o(),s(25),o(),l(26,"div")(27,"b"),s(28,"checked:"),o(),s(29),o(),l(30,"div")(31,"b"),s(32,"indeterminate:"),o(),s(33),o(),l(34,"div")(35,"b"),s(36,"size:"),o(),s(37),o(),l(38,"div")(39,"b"),s(40,"name:"),o(),s(41),o()(),l(42,"details",7)(43,"summary"),s(44,"View Code"),o(),l(45,"div",8)(46,"h3"),s(47,"ifx-checkbox-example.ts"),o(),l(48,"pre"),b(49,"code",9),o(),l(50,"h3"),s(51,"ifx-checkbox-example.html"),o(),l(52,"pre"),b(53,"code",10),o()()()),i&2&&(p("error",e.error)("disabled",e.disabled)("checked",e.checked)("size",e.sizeOptions[e.sizeIndex])("indeterminate",e.indeterminate)("name",e.name),d(16),p("value",e.stringifyValue(e.name)),d(5),h(" ",e.stringifyValue(e.error)),d(4),h(" ",e.stringifyValue(e.disabled)),d(4),h(" ",e.stringifyValue(e.checked)),d(4),h(" ",e.stringifyValue(e.indeterminate)),d(4),h(" ",e.stringifyValue(e.sizeOptions[e.sizeIndex])),d(4),h(" ",e.stringifyValue(e.name)),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,Fn,O,Ot,N],encapsulation:2})};var pa=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-checkbox-group-example',
  templateUrl: './ifx-checkbox-group-example.html',
  styleUrl: './ifx-checkbox-group-example.scss',
  standalone: false
})
export class IfxCheckboxGroupExample {

  protected readonly alignmentOptions = ["vertical","horizontal"];
  protected alignmentIndex = 0;
  protected readonly sizeOptions = ["s","m"];
  protected sizeIndex = 1;
  protected showGroupLabel = false;
  protected groupLabelText = "Group Label";
  protected showCaption = false;
  protected captionText = "Caption text, description, error notification";
  protected showCaptionIcon = false;
  protected required = false;

  protected handleAlignmentChange() {
    this.alignmentIndex = (this.alignmentIndex + 1) % this.alignmentOptions.length;
  }

  protected handleSizeChange() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected handleShowGroupLabelChange() {
    this.showGroupLabel = !this.showGroupLabel;
  }

  protected updateGroupLabelText(value: string) {
    this.groupLabelText = value;
  }

  protected handleShowCaptionChange() {
    this.showCaption = !this.showCaption;
  }

  protected updateCaptionText(value: string) {
    this.captionText = value;
  }

  protected handleShowCaptionIconChange() {
    this.showCaptionIcon = !this.showCaptionIcon;
  }

  protected handleRequiredChange() {
    this.required = !this.required;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

  protected handleChange(event: CustomEvent) {
    console.log('ifxChange:', event);
    // Add your handler logic here
  }

  protected handleError(event: CustomEvent) {
    console.log('ifxError:', event);
    // Add your handler logic here
  }

}`;htmlCode=`  &lt;ifx-checkbox-group
    [alignment]=&quot;alignmentOptions[alignmentIndex]&quot;
    [groupLabelText]=&quot;groupLabelText&quot;
    [captionText]=&quot;captionText&quot;
    [size]=&quot;sizeOptions[sizeIndex]&quot;
    [showGroupLabel]=&quot;showGroupLabel&quot;
    [showCaption]=&quot;showCaption&quot;
    [showCaptionIcon]=&quot;showCaptionIcon&quot;
    [required]=&quot;required&quot;&gt;
    &lt;ifx-checkbox
      value=&quot;0&quot;
      [size]=&quot;sizeOptions[sizeIndex]&quot;&gt;Option 0&lt;/ifx-checkbox&gt;
    &lt;ifx-checkbox
      value=&quot;1&quot;
      [size]=&quot;sizeOptions[sizeIndex]&quot;&gt;Option 1&lt;/ifx-checkbox&gt;
    &lt;ifx-checkbox
      value=&quot;2&quot;
      [size]=&quot;sizeOptions[sizeIndex]&quot;&gt;Option 2&lt;/ifx-checkbox&gt;
  &lt;/ifx-checkbox-group&gt;`;alignmentOptions=["vertical","horizontal"];alignmentIndex=0;sizeOptions=["s","m"];sizeIndex=1;showGroupLabel=!1;groupLabelText="Group Label";showCaption=!1;captionText="Caption text, description, error notification";showCaptionIcon=!1;required=!1;handleAlignmentChange(){this.alignmentIndex=(this.alignmentIndex+1)%this.alignmentOptions.length}handleSizeChange(){this.sizeIndex=(this.sizeIndex+1)%this.sizeOptions.length}handleShowGroupLabelChange(){this.showGroupLabel=!this.showGroupLabel}updateGroupLabelText(t){this.groupLabelText=t}handleShowCaptionChange(){this.showCaption=!this.showCaption}updateCaptionText(t){this.captionText=t}handleShowCaptionIconChange(){this.showCaptionIcon=!this.showCaptionIcon}handleRequiredChange(){this.required=!this.required}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleChange(t){console.log("ifxChange:",t)}handleError(t){console.log("ifxError:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-checkbox-group-example"]],standalone:!1,decls:70,vars:23,consts:[[3,"alignment","groupLabelText","captionText","size","showGroupLabel","showCaption","showCaptionIcon","required"],["value","0",3,"size"],["value","1",3,"size"],["value","2",3,"size"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","groupLabelText","type","text",3,"ifxInput","value"],["label","captionText","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-checkbox-group",0)(1,"ifx-checkbox",1),s(2,"Option 0"),o(),l(3,"ifx-checkbox",2),s(4,"Option 1"),o(),l(5,"ifx-checkbox",3),s(6,"Option 2"),o()(),l(7,"h3",4),s(8,"Controls"),o(),l(9,"div",5)(10,"ifx-button",6),m("click",function(){return e.handleAlignmentChange()}),s(11,"Toggle Alignment"),o(),l(12,"ifx-button",6),m("click",function(){return e.handleSizeChange()}),s(13,"Toggle Size"),o(),l(14,"ifx-button",6),m("click",function(){return e.handleShowGroupLabelChange()}),s(15,"Toggle ShowGroupLabel"),o(),l(16,"ifx-button",6),m("click",function(){return e.handleShowCaptionChange()}),s(17,"Toggle ShowCaption"),o(),l(18,"ifx-button",6),m("click",function(){return e.handleShowCaptionIconChange()}),s(19,"Toggle ShowCaptionIcon"),o(),l(20,"ifx-button",6),m("click",function(){return e.handleRequiredChange()}),s(21,"Toggle Required"),o()(),l(22,"div",7)(23,"ifx-text-field",8),m("ifxInput",function(a){return e.updateGroupLabelText(e.getControlInputValue(a))}),o(),l(24,"ifx-text-field",9),m("ifxInput",function(a){return e.updateCaptionText(e.getControlInputValue(a))}),o()(),l(25,"div",10)(26,"div")(27,"b"),s(28,"alignment:"),o(),s(29),o(),l(30,"div")(31,"b"),s(32,"size:"),o(),s(33),o(),l(34,"div")(35,"b"),s(36,"showGroupLabel:"),o(),s(37),o(),l(38,"div")(39,"b"),s(40,"groupLabelText:"),o(),s(41),o(),l(42,"div")(43,"b"),s(44,"showCaption:"),o(),s(45),o(),l(46,"div")(47,"b"),s(48,"captionText:"),o(),s(49),o(),l(50,"div")(51,"b"),s(52,"showCaptionIcon:"),o(),s(53),o(),l(54,"div")(55,"b"),s(56,"required:"),o(),s(57),o()(),l(58,"details",11)(59,"summary"),s(60,"View Code"),o(),l(61,"div",12)(62,"h3"),s(63,"ifx-checkbox-group-example.ts"),o(),l(64,"pre"),b(65,"code",13),o(),l(66,"h3"),s(67,"ifx-checkbox-group-example.html"),o(),l(68,"pre"),b(69,"code",14),o()()()),i&2&&(p("alignment",e.alignmentOptions[e.alignmentIndex])("groupLabelText",e.groupLabelText)("captionText",e.captionText)("size",e.sizeOptions[e.sizeIndex])("showGroupLabel",e.showGroupLabel)("showCaption",e.showCaption)("showCaptionIcon",e.showCaptionIcon)("required",e.required),d(),p("size",e.sizeOptions[e.sizeIndex]),d(2),p("size",e.sizeOptions[e.sizeIndex]),d(2),p("size",e.sizeOptions[e.sizeIndex]),d(18),p("value",e.stringifyValue(e.groupLabelText)),d(),p("value",e.stringifyValue(e.captionText)),d(5),h(" ",e.stringifyValue(e.alignmentOptions[e.alignmentIndex])),d(4),h(" ",e.stringifyValue(e.sizeOptions[e.sizeIndex])),d(4),h(" ",e.stringifyValue(e.showGroupLabel)),d(4),h(" ",e.stringifyValue(e.groupLabelText)),d(4),h(" ",e.stringifyValue(e.showCaption)),d(4),h(" ",e.stringifyValue(e.captionText)),d(4),h(" ",e.stringifyValue(e.showCaptionIcon)),d(4),h(" ",e.stringifyValue(e.required)),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,Fn,Kh,O,Ot,N],encapsulation:2})};var fa=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-chip-example',
  templateUrl: './ifx-chip-example.html',
  styleUrl: './ifx-chip-example.scss',
  standalone: false
})
export class IfxChipExample {

  protected placeholder = "Label";
  protected readonly sizeOptions = ["small","medium","large"];
  protected sizeIndex = 1;
  protected readonly variantOptions = ["single","multi"];
  protected variantIndex = 0;
  protected readonly themeOptions = ["outlined","filled-light","filled-dark"];
  protected themeIndex = 0;
  protected readOnly = false;
  protected readonly iconOptions = ["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];
  protected iconIndex = 0;
  protected disabled = false;
  protected value = "Item Value";

  protected updatePlaceholder(value: string) {
    this.placeholder = value;
  }

  protected handleSizeChange() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected handleVariantChange() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
  }

  protected handleThemeChange() {
    this.themeIndex = (this.themeIndex + 1) % this.themeOptions.length;
  }

  protected handleReadOnlyChange() {
    this.readOnly = !this.readOnly;
  }

  protected handleIconChange() {
    this.iconIndex = (this.iconIndex + 1) % this.iconOptions.length;
  }

  protected handleDisabledChange() {
    this.disabled = !this.disabled;
  }

  protected updateValue(value: string) {
    this.value = value;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

  protected handleChange(event: CustomEvent) {
    console.log('ifxChange:', event);
    // Add your handler logic here
  }

  protected handleChipItemSelect(event: CustomEvent) {
    console.log('ifxChipItemSelect:', event);
    // Add your handler logic here
  }

}`;htmlCode=`  &lt;ifx-chip
    aria-label=&quot;Chip&quot;
    [placeholder]=&quot;placeholder&quot;
    [size]=&quot;sizeOptions[sizeIndex]&quot;
    [variant]=&quot;variantOptions[variantIndex]&quot;
    [theme]=&quot;themeOptions[themeIndex]&quot;
    [icon]=&quot;iconOptions[iconIndex]&quot;
    [readOnly]=&quot;readOnly&quot;
    [value]=&quot;value&quot;
    [disabled]=&quot;disabled&quot;&gt;
    &lt;ifx-chip-item
      (ifxChange)=&quot;handleChange($any($event))&quot;
      (ifxChipItemSelect)=&quot;handleChipItemSelect($any($event))&quot;
      [value]=&quot;value&quot;&gt;Item Label 1&lt;/ifx-chip-item&gt;
    &lt;ifx-chip-item [value]=&quot;value&quot;&gt;Item Label 2&lt;/ifx-chip-item&gt;
    &lt;ifx-chip-item [value]=&quot;value&quot;&gt;Item Label 3&lt;/ifx-chip-item&gt;
    &lt;ifx-chip-item [value]=&quot;value&quot;&gt;Item Label 4&lt;/ifx-chip-item&gt;
  &lt;/ifx-chip&gt;`;placeholder="Label";sizeOptions=["small","medium","large"];sizeIndex=1;variantOptions=["single","multi"];variantIndex=0;themeOptions=["outlined","filled-light","filled-dark"];themeIndex=0;readOnly=!1;iconOptions=["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];iconIndex=0;disabled=!1;value="Item Value";updatePlaceholder(t){this.placeholder=t}handleSizeChange(){this.sizeIndex=(this.sizeIndex+1)%this.sizeOptions.length}handleVariantChange(){this.variantIndex=(this.variantIndex+1)%this.variantOptions.length}handleThemeChange(){this.themeIndex=(this.themeIndex+1)%this.themeOptions.length}handleReadOnlyChange(){this.readOnly=!this.readOnly}handleIconChange(){this.iconIndex=(this.iconIndex+1)%this.iconOptions.length}handleDisabledChange(){this.disabled=!this.disabled}updateValue(t){this.value=t}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleChange(t){console.log("ifxChange:",t)}handleChipItemSelect(t){console.log("ifxChipItemSelect:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-chip-example"]],standalone:!1,decls:72,vars:24,consts:[["aria-label","Chip",3,"placeholder","size","variant","theme","icon","readOnly","value","disabled"],[3,"ifxChange","ifxChipItemSelect","value"],[3,"value"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","placeholder","type","text",3,"ifxInput","value"],["label","value","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-chip",0)(1,"ifx-chip-item",1),m("ifxChange",function(a){return e.handleChange(a)})("ifxChipItemSelect",function(a){return e.handleChipItemSelect(a)}),s(2,"Item Label 1"),o(),l(3,"ifx-chip-item",2),s(4,"Item Label 2"),o(),l(5,"ifx-chip-item",2),s(6,"Item Label 3"),o(),l(7,"ifx-chip-item",2),s(8,"Item Label 4"),o()(),l(9,"h3",3),s(10,"Controls"),o(),l(11,"div",4)(12,"ifx-button",5),m("click",function(){return e.handleSizeChange()}),s(13,"Toggle Size"),o(),l(14,"ifx-button",5),m("click",function(){return e.handleVariantChange()}),s(15,"Toggle Variant"),o(),l(16,"ifx-button",5),m("click",function(){return e.handleThemeChange()}),s(17,"Toggle Theme"),o(),l(18,"ifx-button",5),m("click",function(){return e.handleReadOnlyChange()}),s(19,"Toggle ReadOnly"),o(),l(20,"ifx-button",5),m("click",function(){return e.handleIconChange()}),s(21,"Toggle Icon"),o(),l(22,"ifx-button",5),m("click",function(){return e.handleDisabledChange()}),s(23,"Toggle Disabled"),o()(),l(24,"div",6)(25,"ifx-text-field",7),m("ifxInput",function(a){return e.updatePlaceholder(e.getControlInputValue(a))}),o(),l(26,"ifx-text-field",8),m("ifxInput",function(a){return e.updateValue(e.getControlInputValue(a))}),o()(),l(27,"div",9)(28,"div")(29,"b"),s(30,"placeholder:"),o(),s(31),o(),l(32,"div")(33,"b"),s(34,"size:"),o(),s(35),o(),l(36,"div")(37,"b"),s(38,"variant:"),o(),s(39),o(),l(40,"div")(41,"b"),s(42,"theme:"),o(),s(43),o(),l(44,"div")(45,"b"),s(46,"readOnly:"),o(),s(47),o(),l(48,"div")(49,"b"),s(50,"icon:"),o(),s(51),o(),l(52,"div")(53,"b"),s(54,"disabled:"),o(),s(55),o(),l(56,"div")(57,"b"),s(58,"value:"),o(),s(59),o()(),l(60,"details",10)(61,"summary"),s(62,"View Code"),o(),l(63,"div",11)(64,"h3"),s(65,"ifx-chip-example.ts"),o(),l(66,"pre"),b(67,"code",12),o(),l(68,"h3"),s(69,"ifx-chip-example.html"),o(),l(70,"pre"),b(71,"code",13),o()()()),i&2&&(p("placeholder",e.placeholder)("size",e.sizeOptions[e.sizeIndex])("variant",e.variantOptions[e.variantIndex])("theme",e.themeOptions[e.themeIndex])("icon",e.iconOptions[e.iconIndex])("readOnly",e.readOnly)("value",e.value)("disabled",e.disabled),d(),p("value",e.value),d(2),p("value",e.value),d(2),p("value",e.value),d(2),p("value",e.value),d(18),p("value",e.stringifyValue(e.placeholder)),d(),p("value",e.stringifyValue(e.value)),d(5),h(" ",e.stringifyValue(e.placeholder)),d(4),h(" ",e.stringifyValue(e.sizeOptions[e.sizeIndex])),d(4),h(" ",e.stringifyValue(e.variantOptions[e.variantIndex])),d(4),h(" ",e.stringifyValue(e.themeOptions[e.themeIndex])),d(4),h(" ",e.stringifyValue(e.readOnly)),d(4),h(" ",e.stringifyValue(e.iconOptions[e.iconIndex])),d(4),h(" ",e.stringifyValue(e.disabled)),d(4),h(" ",e.stringifyValue(e.value)),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,eg,tg,O,N],encapsulation:2})};var ma=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-content-switcher-example',
  templateUrl: './ifx-content-switcher-example.html',
  styleUrl: './ifx-content-switcher-example.scss',
  standalone: false
})
export class IfxContentSwitcherExample {

  protected value = "item";
  protected readonly iconOptions = ["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];
  protected iconIndex = 0;

  protected updateValue(value: string) {
    this.value = value;
  }

  protected handleIconChange() {
    this.iconIndex = (this.iconIndex + 1) % this.iconOptions.length;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

  protected handleChange(event: CustomEvent) {
    console.log('ifxChange:', event);
    // Add your handler logic here
  }

}`;htmlCode=`  &lt;ifx-content-switcher&gt;
    &lt;ifx-content-switcher-item
      (ifxChange)=&quot;handleChange($any($event))&quot;
      [value]=&quot;value&quot;&gt;
      &lt;ifx-icon [icon]=&quot;iconOptions[iconIndex]&quot;&gt;&lt;/ifx-icon&gt;
    &lt;/ifx-content-switcher-item&gt;
    &lt;ifx-content-switcher-item [value]=&quot;value&quot;&gt;
      &lt;ifx-icon [icon]=&quot;iconOptions[iconIndex]&quot;&gt;&lt;/ifx-icon&gt;
    &lt;/ifx-content-switcher-item&gt;
    &lt;ifx-content-switcher-item [value]=&quot;value&quot;&gt;
      &lt;ifx-icon [icon]=&quot;iconOptions[iconIndex]&quot;&gt;&lt;/ifx-icon&gt;
    &lt;/ifx-content-switcher-item&gt;
    &lt;ifx-content-switcher-item [value]=&quot;value&quot;&gt;
      &lt;ifx-icon [icon]=&quot;iconOptions[iconIndex]&quot;&gt;&lt;/ifx-icon&gt;
    &lt;/ifx-content-switcher-item&gt;
  &lt;/ifx-content-switcher&gt;`;value="item";iconOptions=["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];iconIndex=0;updateValue(t){this.value=t}handleIconChange(){this.iconIndex=(this.iconIndex+1)%this.iconOptions.length}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleChange(t){console.log("ifxChange:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-content-switcher-example"]],standalone:!1,decls:37,vars:13,consts:[[3,"ifxChange","value"],[3,"icon"],[3,"value"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","value","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-content-switcher")(1,"ifx-content-switcher-item",0),m("ifxChange",function(a){return e.handleChange(a)}),b(2,"ifx-icon",1),o(),l(3,"ifx-content-switcher-item",2),b(4,"ifx-icon",1),o(),l(5,"ifx-content-switcher-item",2),b(6,"ifx-icon",1),o(),l(7,"ifx-content-switcher-item",2),b(8,"ifx-icon",1),o()(),l(9,"h3",3),s(10,"Controls"),o(),l(11,"div",4)(12,"ifx-button",5),m("click",function(){return e.handleIconChange()}),s(13,"Toggle Icon"),o()(),l(14,"div",6)(15,"ifx-text-field",7),m("ifxInput",function(a){return e.updateValue(e.getControlInputValue(a))}),o()(),l(16,"div",8)(17,"div")(18,"b"),s(19,"value:"),o(),s(20),o(),l(21,"div")(22,"b"),s(23,"icon:"),o(),s(24),o()(),l(25,"details",9)(26,"summary"),s(27,"View Code"),o(),l(28,"div",10)(29,"h3"),s(30,"ifx-content-switcher-example.ts"),o(),l(31,"pre"),b(32,"code",11),o(),l(33,"h3"),s(34,"ifx-content-switcher-example.html"),o(),l(35,"pre"),b(36,"code",12),o()()()),i&2&&(d(),p("value",e.value),d(),p("icon",e.iconOptions[e.iconIndex]),d(),p("value",e.value),d(),p("icon",e.iconOptions[e.iconIndex]),d(),p("value",e.value),d(),p("icon",e.iconOptions[e.iconIndex]),d(),p("value",e.value),d(),p("icon",e.iconOptions[e.iconIndex]),d(7),p("value",e.stringifyValue(e.value)),d(5),h(" ",e.stringifyValue(e.value)),d(4),h(" ",e.stringifyValue(e.iconOptions[e.iconIndex])),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,ng,ig,At,O,N],encapsulation:2})};var ha=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-date-picker-example',
  templateUrl: './ifx-date-picker-example.html',
  styleUrl: './ifx-date-picker-example.scss',
  standalone: false
})
export class IfxDatePickerExample {

  protected label = "Label Text";
  protected caption = "Caption text, description, error notification.";
  protected min = "";
  protected max = "";
  protected disabled = false;
  protected success = false;
  protected error = false;
  protected readonly sizeOptions = ["s","l"];
  protected sizeIndex = 0;
  protected value = "";
  protected ariaLabelText = "Date Picker";
  protected required = false;
  protected autocomplete = "on";
  protected readonly typeOptions = ["date","datetime-local"];
  protected typeIndex = 0;

  protected updateLabel(value: string) {
    this.label = value;
  }

  protected updateCaption(value: string) {
    this.caption = value;
  }

  protected updateMin(value: string) {
    this.min = value;
  }

  protected updateMax(value: string) {
    this.max = value;
  }

  protected handleDisabledChange() {
    this.disabled = !this.disabled;
  }

  protected handleSuccessChange() {
    this.success = !this.success;
  }

  protected handleErrorChange() {
    this.error = !this.error;
  }

  protected handleSizeChange() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected updateValue(value: string) {
    this.value = value;
  }

  protected updateAriaLabelText(value: string) {
    this.ariaLabelText = value;
  }

  protected handleRequiredChange() {
    this.required = !this.required;
  }

  protected updateAutocomplete(value: string) {
    this.autocomplete = value;
  }

  protected handleTypeChange() {
    this.typeIndex = (this.typeIndex + 1) % this.typeOptions.length;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

  protected handleDate(event: CustomEvent) {
    console.log('ifxDate:', event);
    // Add your handler logic here
  }

}`;htmlCode=`  &lt;ifx-date-picker
    name=&quot;date-picker&quot;
    (ifxDate)=&quot;handleDate($any($event))&quot;
    [error]=&quot;error&quot;
    [disabled]=&quot;disabled&quot;
    [size]=&quot;sizeOptions[sizeIndex]&quot;
    [success]=&quot;success&quot;
    [value]=&quot;value&quot;
    [max]=&quot;max&quot;
    [min]=&quot;min&quot;
    [label]=&quot;label&quot;
    [caption]=&quot;caption&quot;
    [ariaLabelText]=&quot;ariaLabelText&quot;
    [required]=&quot;required&quot;
    [autocomplete]=&quot;autocomplete&quot;
    [type]=&quot;typeOptions[typeIndex]&quot;&gt;&lt;/ifx-date-picker&gt;`;label="Label Text";caption="Caption text, description, error notification.";min="";max="";disabled=!1;success=!1;error=!1;sizeOptions=["s","l"];sizeIndex=0;value="";ariaLabelText="Date Picker";required=!1;autocomplete="on";typeOptions=["date","datetime-local"];typeIndex=0;updateLabel(t){this.label=t}updateCaption(t){this.caption=t}updateMin(t){this.min=t}updateMax(t){this.max=t}handleDisabledChange(){this.disabled=!this.disabled}handleSuccessChange(){this.success=!this.success}handleErrorChange(){this.error=!this.error}handleSizeChange(){this.sizeIndex=(this.sizeIndex+1)%this.sizeOptions.length}updateValue(t){this.value=t}updateAriaLabelText(t){this.ariaLabelText=t}handleRequiredChange(){this.required=!this.required}updateAutocomplete(t){this.autocomplete=t}handleTypeChange(){this.typeIndex=(this.typeIndex+1)%this.typeOptions.length}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleDate(t){console.log("ifxDate:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-date-picker-example"]],standalone:!1,decls:89,vars:35,consts:[["name","date-picker",3,"ifxDate","error","disabled","size","success","value","max","min","label","caption","ariaLabelText","required","autocomplete","type"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","label","type","text",3,"ifxInput","value"],["label","caption","type","text",3,"ifxInput","value"],["label","min","type","text",3,"ifxInput","value"],["label","max","type","text",3,"ifxInput","value"],["label","value","type","text",3,"ifxInput","value"],["label","ariaLabelText","type","text",3,"ifxInput","value"],["label","autocomplete","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-date-picker",0),m("ifxDate",function(a){return e.handleDate(a)}),o(),l(1,"h3",1),s(2,"Controls"),o(),l(3,"div",2)(4,"ifx-button",3),m("click",function(){return e.handleDisabledChange()}),s(5,"Toggle Disabled"),o(),l(6,"ifx-button",3),m("click",function(){return e.handleSuccessChange()}),s(7,"Toggle Success"),o(),l(8,"ifx-button",3),m("click",function(){return e.handleErrorChange()}),s(9,"Toggle Error"),o(),l(10,"ifx-button",3),m("click",function(){return e.handleSizeChange()}),s(11,"Toggle Size"),o(),l(12,"ifx-button",3),m("click",function(){return e.handleRequiredChange()}),s(13,"Toggle Required"),o(),l(14,"ifx-button",3),m("click",function(){return e.handleTypeChange()}),s(15,"Toggle Type"),o()(),l(16,"div",4)(17,"ifx-text-field",5),m("ifxInput",function(a){return e.updateLabel(e.getControlInputValue(a))}),o(),l(18,"ifx-text-field",6),m("ifxInput",function(a){return e.updateCaption(e.getControlInputValue(a))}),o(),l(19,"ifx-text-field",7),m("ifxInput",function(a){return e.updateMin(e.getControlInputValue(a))}),o(),l(20,"ifx-text-field",8),m("ifxInput",function(a){return e.updateMax(e.getControlInputValue(a))}),o(),l(21,"ifx-text-field",9),m("ifxInput",function(a){return e.updateValue(e.getControlInputValue(a))}),o(),l(22,"ifx-text-field",10),m("ifxInput",function(a){return e.updateAriaLabelText(e.getControlInputValue(a))}),o(),l(23,"ifx-text-field",11),m("ifxInput",function(a){return e.updateAutocomplete(e.getControlInputValue(a))}),o()(),l(24,"div",12)(25,"div")(26,"b"),s(27,"label:"),o(),s(28),o(),l(29,"div")(30,"b"),s(31,"caption:"),o(),s(32),o(),l(33,"div")(34,"b"),s(35,"min:"),o(),s(36),o(),l(37,"div")(38,"b"),s(39,"max:"),o(),s(40),o(),l(41,"div")(42,"b"),s(43,"disabled:"),o(),s(44),o(),l(45,"div")(46,"b"),s(47,"success:"),o(),s(48),o(),l(49,"div")(50,"b"),s(51,"error:"),o(),s(52),o(),l(53,"div")(54,"b"),s(55,"size:"),o(),s(56),o(),l(57,"div")(58,"b"),s(59,"value:"),o(),s(60),o(),l(61,"div")(62,"b"),s(63,"ariaLabelText:"),o(),s(64),o(),l(65,"div")(66,"b"),s(67,"required:"),o(),s(68),o(),l(69,"div")(70,"b"),s(71,"autocomplete:"),o(),s(72),o(),l(73,"div")(74,"b"),s(75,"type:"),o(),s(76),o()(),l(77,"details",13)(78,"summary"),s(79,"View Code"),o(),l(80,"div",14)(81,"h3"),s(82,"ifx-date-picker-example.ts"),o(),l(83,"pre"),b(84,"code",15),o(),l(85,"h3"),s(86,"ifx-date-picker-example.html"),o(),l(87,"pre"),b(88,"code",16),o()()()),i&2&&(p("error",e.error)("disabled",e.disabled)("size",e.sizeOptions[e.sizeIndex])("success",e.success)("value",e.value)("max",e.max)("min",e.min)("label",e.label)("caption",e.caption)("ariaLabelText",e.ariaLabelText)("required",e.required)("autocomplete",e.autocomplete)("type",e.typeOptions[e.typeIndex]),d(17),p("value",e.stringifyValue(e.label)),d(),p("value",e.stringifyValue(e.caption)),d(),p("value",e.stringifyValue(e.min)),d(),p("value",e.stringifyValue(e.max)),d(),p("value",e.stringifyValue(e.value)),d(),p("value",e.stringifyValue(e.ariaLabelText)),d(),p("value",e.stringifyValue(e.autocomplete)),d(5),h(" ",e.stringifyValue(e.label)),d(4),h(" ",e.stringifyValue(e.caption)),d(4),h(" ",e.stringifyValue(e.min)),d(4),h(" ",e.stringifyValue(e.max)),d(4),h(" ",e.stringifyValue(e.disabled)),d(4),h(" ",e.stringifyValue(e.success)),d(4),h(" ",e.stringifyValue(e.error)),d(4),h(" ",e.stringifyValue(e.sizeOptions[e.sizeIndex])),d(4),h(" ",e.stringifyValue(e.value)),d(4),h(" ",e.stringifyValue(e.ariaLabelText)),d(4),h(" ",e.stringifyValue(e.required)),d(4),h(" ",e.stringifyValue(e.autocomplete)),d(4),h(" ",e.stringifyValue(e.typeOptions[e.typeIndex])),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,rg,O,N],encapsulation:2})};var ga=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-dropdown-example',
  templateUrl: './ifx-dropdown-example.html',
  styleUrl: './ifx-dropdown-example.scss',
  standalone: false
})
export class IfxDropdownExample {

  protected readonly placementOptions = ["auto","auto-start","auto-end","top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"];
  protected placementIndex = 7;
  protected readonly sizeOptions = ["s","m"];
  protected sizeIndex = 1;
  protected disabled = false;
  protected readonly variantOptions = ["primary","secondary","tertiary"];
  protected variantIndex = 0;
  protected defaultOpen = false;
  protected noCloseOnOutsideClick = false;
  protected noCloseOnMenuClick = false;
  protected noAppendToBody = false;

  protected handlePlacementChange() {
    this.placementIndex = (this.placementIndex + 1) % this.placementOptions.length;
  }

  protected handleSizeChange() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected handleDisabledChange() {
    this.disabled = !this.disabled;
  }

  protected handleVariantChange() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
  }

  protected handleDefaultOpenChange() {
    this.defaultOpen = !this.defaultOpen;
  }

  protected handleNoCloseOnOutsideClickChange() {
    this.noCloseOnOutsideClick = !this.noCloseOnOutsideClick;
  }

  protected handleNoCloseOnMenuClickChange() {
    this.noCloseOnMenuClick = !this.noCloseOnMenuClick;
  }

  protected handleNoAppendToBodyChange() {
    this.noAppendToBody = !this.noAppendToBody;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

  protected handleClose(event: CustomEvent) {
    console.log('ifxClose:', event);
    // Add your handler logic here
  }

  protected handleDropdown(event: CustomEvent) {
    console.log('ifxDropdown:', event);
    // Add your handler logic here
  }

  protected handleOpen(event: CustomEvent) {
    console.log('ifxOpen:', event);
    // Add your handler logic here
  }

  protected handleDropdownMenuItem(event: CustomEvent) {
    console.log('ifxDropdownMenuItem:', event);
    // Add your handler logic here
  }

  protected handleMenuSize(event: CustomEvent) {
    console.log('menuSize:', event);
    // Add your handler logic here
  }

}`;htmlCode=`  &lt;ifx-dropdown
    [placement]=&quot;placementOptions[placementIndex]&quot;
    [defaultOpen]=&quot;defaultOpen&quot;
    [noCloseOnOutsideClick]=&quot;noCloseOnOutsideClick&quot;
    [noCloseOnMenuClick]=&quot;noCloseOnMenuClick&quot;
    [noAppendToBody]=&quot;noAppendToBody&quot;
    [disabled]=&quot;disabled&quot;&gt;
    &lt;ifx-dropdown-trigger-button
      (ifxClose)=&quot;handleClose($any($event))&quot;
      (ifxDropdown)=&quot;handleDropdown($any($event))&quot;
      (ifxOpen)=&quot;handleOpen($any($event))&quot;
      (ifxDropdownMenuItem)=&quot;handleDropdownMenuItem($any($event))&quot;
      (menuSize)=&quot;handleMenuSize($any($event))&quot;
      [variant]=&quot;variantOptions[variantIndex]&quot;&gt;Dropdown&lt;/ifx-dropdown-trigger-button&gt;
    &lt;ifx-dropdown-menu
      (ifxClose)=&quot;handleClose($any($event))&quot;
      (ifxDropdown)=&quot;handleDropdown($any($event))&quot;
      (ifxOpen)=&quot;handleOpen($any($event))&quot;
      (ifxDropdownMenuItem)=&quot;handleDropdownMenuItem($any($event))&quot;
      (menuSize)=&quot;handleMenuSize($any($event))&quot;
      [size]=&quot;sizeOptions[sizeIndex]&quot;&gt;
      &lt;ifx-dropdown-item
        icon=&quot;c-info-16&quot;
        target=&quot;_self&quot;
        href=&quot;&quot;
        [error]=&quot;false&quot;
        (ifxClose)=&quot;handleClose($any($event))&quot;
        (ifxDropdown)=&quot;handleDropdown($any($event))&quot;
        (ifxOpen)=&quot;handleOpen($any($event))&quot;
        (ifxDropdownMenuItem)=&quot;handleDropdownMenuItem($any($event))&quot;
        (menuSize)=&quot;handleMenuSize($any($event))&quot;&gt;Menu Item&lt;/ifx-dropdown-item&gt;
      &lt;ifx-dropdown-item
        icon=&quot;c-info-16&quot;
        target=&quot;_self&quot;
        href=&quot;&quot;
        [error]=&quot;false&quot;&gt;Menu Item&lt;/ifx-dropdown-item&gt;
      &lt;ifx-dropdown-item
        icon=&quot;c-info-16&quot;
        target=&quot;_self&quot;
        href=&quot;&quot;
        [error]=&quot;false&quot;&gt;Menu Item&lt;/ifx-dropdown-item&gt;
      &lt;ifx-dropdown-item
        icon=&quot;c-info-16&quot;
        target=&quot;_self&quot;
        href=&quot;&quot;
        [error]=&quot;false&quot;&gt;Menu Item&lt;/ifx-dropdown-item&gt;
      &lt;ifx-dropdown-item
        icon=&quot;c-info-16&quot;
        target=&quot;_self&quot;
        href=&quot;&quot;
        [error]=&quot;false&quot;&gt;Menu Item&lt;/ifx-dropdown-item&gt;
    &lt;/ifx-dropdown-menu&gt;
  &lt;/ifx-dropdown&gt;`;placementOptions=["auto","auto-start","auto-end","top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"];placementIndex=7;sizeOptions=["s","m"];sizeIndex=1;disabled=!1;variantOptions=["primary","secondary","tertiary"];variantIndex=0;defaultOpen=!1;noCloseOnOutsideClick=!1;noCloseOnMenuClick=!1;noAppendToBody=!1;handlePlacementChange(){this.placementIndex=(this.placementIndex+1)%this.placementOptions.length}handleSizeChange(){this.sizeIndex=(this.sizeIndex+1)%this.sizeOptions.length}handleDisabledChange(){this.disabled=!this.disabled}handleVariantChange(){this.variantIndex=(this.variantIndex+1)%this.variantOptions.length}handleDefaultOpenChange(){this.defaultOpen=!this.defaultOpen}handleNoCloseOnOutsideClickChange(){this.noCloseOnOutsideClick=!this.noCloseOnOutsideClick}handleNoCloseOnMenuClickChange(){this.noCloseOnMenuClick=!this.noCloseOnMenuClick}handleNoAppendToBodyChange(){this.noAppendToBody=!this.noAppendToBody}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleClose(t){console.log("ifxClose:",t)}handleDropdown(t){console.log("ifxDropdown:",t)}handleOpen(t){console.log("ifxOpen:",t)}handleDropdownMenuItem(t){console.log("ifxDropdownMenuItem:",t)}handleMenuSize(t){console.log("menuSize:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-dropdown-example"]],standalone:!1,decls:78,vars:23,consts:[[3,"placement","defaultOpen","noCloseOnOutsideClick","noCloseOnMenuClick","noAppendToBody","disabled"],[3,"ifxClose","ifxDropdown","ifxOpen","ifxDropdownMenuItem","menuSize","variant"],[3,"ifxClose","ifxDropdown","ifxOpen","ifxDropdownMenuItem","menuSize","size"],["icon","c-info-16","target","_self","href","",3,"ifxClose","ifxDropdown","ifxOpen","ifxDropdownMenuItem","menuSize","error"],["icon","c-info-16","target","_self","href","",3,"error"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-dropdown",0)(1,"ifx-dropdown-trigger-button",1),m("ifxClose",function(a){return e.handleClose(a)})("ifxDropdown",function(a){return e.handleDropdown(a)})("ifxOpen",function(a){return e.handleOpen(a)})("ifxDropdownMenuItem",function(a){return e.handleDropdownMenuItem(a)})("menuSize",function(a){return e.handleMenuSize(a)}),s(2,"Dropdown"),o(),l(3,"ifx-dropdown-menu",2),m("ifxClose",function(a){return e.handleClose(a)})("ifxDropdown",function(a){return e.handleDropdown(a)})("ifxOpen",function(a){return e.handleOpen(a)})("ifxDropdownMenuItem",function(a){return e.handleDropdownMenuItem(a)})("menuSize",function(a){return e.handleMenuSize(a)}),l(4,"ifx-dropdown-item",3),m("ifxClose",function(a){return e.handleClose(a)})("ifxDropdown",function(a){return e.handleDropdown(a)})("ifxOpen",function(a){return e.handleOpen(a)})("ifxDropdownMenuItem",function(a){return e.handleDropdownMenuItem(a)})("menuSize",function(a){return e.handleMenuSize(a)}),s(5,"Menu Item"),o(),l(6,"ifx-dropdown-item",4),s(7,"Menu Item"),o(),l(8,"ifx-dropdown-item",4),s(9,"Menu Item"),o(),l(10,"ifx-dropdown-item",4),s(11,"Menu Item"),o(),l(12,"ifx-dropdown-item",4),s(13,"Menu Item"),o()()(),l(14,"h3",5),s(15,"Controls"),o(),l(16,"div",6)(17,"ifx-button",7),m("click",function(){return e.handlePlacementChange()}),s(18,"Toggle Placement"),o(),l(19,"ifx-button",7),m("click",function(){return e.handleSizeChange()}),s(20,"Toggle Size"),o(),l(21,"ifx-button",7),m("click",function(){return e.handleDisabledChange()}),s(22,"Toggle Disabled"),o(),l(23,"ifx-button",7),m("click",function(){return e.handleVariantChange()}),s(24,"Toggle Variant"),o(),l(25,"ifx-button",7),m("click",function(){return e.handleDefaultOpenChange()}),s(26,"Toggle DefaultOpen"),o(),l(27,"ifx-button",7),m("click",function(){return e.handleNoCloseOnOutsideClickChange()}),s(28,"Toggle NoCloseOnOutsideClick"),o(),l(29,"ifx-button",7),m("click",function(){return e.handleNoCloseOnMenuClickChange()}),s(30,"Toggle NoCloseOnMenuClick"),o(),l(31,"ifx-button",7),m("click",function(){return e.handleNoAppendToBodyChange()}),s(32,"Toggle NoAppendToBody"),o()(),l(33,"div",8)(34,"div")(35,"b"),s(36,"placement:"),o(),s(37),o(),l(38,"div")(39,"b"),s(40,"size:"),o(),s(41),o(),l(42,"div")(43,"b"),s(44,"disabled:"),o(),s(45),o(),l(46,"div")(47,"b"),s(48,"variant:"),o(),s(49),o(),l(50,"div")(51,"b"),s(52,"defaultOpen:"),o(),s(53),o(),l(54,"div")(55,"b"),s(56,"noCloseOnOutsideClick:"),o(),s(57),o(),l(58,"div")(59,"b"),s(60,"noCloseOnMenuClick:"),o(),s(61),o(),l(62,"div")(63,"b"),s(64,"noAppendToBody:"),o(),s(65),o()(),l(66,"details",9)(67,"summary"),s(68,"View Code"),o(),l(69,"div",10)(70,"h3"),s(71,"ifx-dropdown-example.ts"),o(),l(72,"pre"),b(73,"code",11),o(),l(74,"h3"),s(75,"ifx-dropdown-example.html"),o(),l(76,"pre"),b(77,"code",12),o()()()),i&2&&(p("placement",e.placementOptions[e.placementIndex])("defaultOpen",e.defaultOpen)("noCloseOnOutsideClick",e.noCloseOnOutsideClick)("noCloseOnMenuClick",e.noCloseOnMenuClick)("noAppendToBody",e.noAppendToBody)("disabled",e.disabled),d(),p("variant",e.variantOptions[e.variantIndex]),d(2),p("size",e.sizeOptions[e.sizeIndex]),d(),p("error",!1),d(2),p("error",!1),d(2),p("error",!1),d(2),p("error",!1),d(2),p("error",!1),d(25),h(" ",e.stringifyValue(e.placementOptions[e.placementIndex])),d(4),h(" ",e.stringifyValue(e.sizeOptions[e.sizeIndex])),d(4),h(" ",e.stringifyValue(e.disabled)),d(4),h(" ",e.stringifyValue(e.variantOptions[e.variantIndex])),d(4),h(" ",e.stringifyValue(e.defaultOpen)),d(4),h(" ",e.stringifyValue(e.noCloseOnOutsideClick)),d(4),h(" ",e.stringifyValue(e.noCloseOnMenuClick)),d(4),h(" ",e.stringifyValue(e.noAppendToBody)),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,og,ag,sg,lg],encapsulation:2})};var va=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-error-page-example',
  templateUrl: './ifx-error-page-example.html',
  styleUrl: './ifx-error-page-example.scss',
  standalone: false
})
export class IfxErrorPageExample {

  protected readonly typeOptions = ["403","404","503","maintenance"];
  protected typeIndex = 0;
  protected illustrationUrl = "";
  protected imgAlt = "";
  protected headline = "";
  protected description = "";

  protected handleTypeChange() {
    this.typeIndex = (this.typeIndex + 1) % this.typeOptions.length;
  }

  protected updateIllustrationUrl(value: string) {
    this.illustrationUrl = value;
  }

  protected updateImgAlt(value: string) {
    this.imgAlt = value;
  }

  protected updateHeadline(value: string) {
    this.headline = value;
  }

  protected updateDescription(value: string) {
    this.description = value;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

}`;htmlCode=`  &lt;ifx-error-page
    [imgAlt]=&quot;imgAlt&quot;
    [type]=&quot;typeOptions[typeIndex]&quot;
    [headline]=&quot;headline&quot;
    [description]=&quot;description&quot;
    [illustrationUrl]=&quot;illustrationUrl&quot;&gt;
    &lt;div slot=&quot;button&quot;&gt;
      &lt;ifx-button
        variant=&quot;primary&quot;
        [fullWidth]=&quot;true&quot;&gt;Go to homepage&lt;/ifx-button&gt;
    &lt;/div&gt;
    &lt;div slot=&quot;button&quot;&gt;
      &lt;ifx-button
        variant=&quot;secondary&quot;
        [fullWidth]=&quot;true&quot;&gt;Get support&lt;/ifx-button&gt;
    &lt;/div&gt;
  &lt;/ifx-error-page&gt;`;typeOptions=["403","404","503","maintenance"];typeIndex=0;illustrationUrl="";imgAlt="";headline="";description="";handleTypeChange(){this.typeIndex=(this.typeIndex+1)%this.typeOptions.length}updateIllustrationUrl(t){this.illustrationUrl=t}updateImgAlt(t){this.imgAlt=t}updateHeadline(t){this.headline=t}updateDescription(t){this.description=t}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-error-page-example"]],standalone:!1,decls:50,vars:18,consts:[[3,"imgAlt","type","headline","description","illustrationUrl"],["slot","button"],["variant","primary",3,"fullWidth"],["variant","secondary",3,"fullWidth"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","illustrationUrl","type","text",3,"ifxInput","value"],["label","imgAlt","type","text",3,"ifxInput","value"],["label","headline","type","text",3,"ifxInput","value"],["label","description","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-error-page",0)(1,"div",1)(2,"ifx-button",2),s(3,"Go to homepage"),o()(),l(4,"div",1)(5,"ifx-button",3),s(6,"Get support"),o()()(),l(7,"h3",4),s(8,"Controls"),o(),l(9,"div",5)(10,"ifx-button",6),m("click",function(){return e.handleTypeChange()}),s(11,"Toggle Type"),o()(),l(12,"div",7)(13,"ifx-text-field",8),m("ifxInput",function(a){return e.updateIllustrationUrl(e.getControlInputValue(a))}),o(),l(14,"ifx-text-field",9),m("ifxInput",function(a){return e.updateImgAlt(e.getControlInputValue(a))}),o(),l(15,"ifx-text-field",10),m("ifxInput",function(a){return e.updateHeadline(e.getControlInputValue(a))}),o(),l(16,"ifx-text-field",11),m("ifxInput",function(a){return e.updateDescription(e.getControlInputValue(a))}),o()(),l(17,"div",12)(18,"div")(19,"b"),s(20,"type:"),o(),s(21),o(),l(22,"div")(23,"b"),s(24,"illustrationUrl:"),o(),s(25),o(),l(26,"div")(27,"b"),s(28,"imgAlt:"),o(),s(29),o(),l(30,"div")(31,"b"),s(32,"headline:"),o(),s(33),o(),l(34,"div")(35,"b"),s(36,"description:"),o(),s(37),o()(),l(38,"details",13)(39,"summary"),s(40,"View Code"),o(),l(41,"div",14)(42,"h3"),s(43,"ifx-error-page-example.ts"),o(),l(44,"pre"),b(45,"code",15),o(),l(46,"h3"),s(47,"ifx-error-page-example.html"),o(),l(48,"pre"),b(49,"code",16),o()()()),i&2&&(p("imgAlt",e.imgAlt)("type",e.typeOptions[e.typeIndex])("headline",e.headline)("description",e.description)("illustrationUrl",e.illustrationUrl),d(2),p("fullWidth",!0),d(3),p("fullWidth",!0),d(8),p("value",e.stringifyValue(e.illustrationUrl)),d(),p("value",e.stringifyValue(e.imgAlt)),d(),p("value",e.stringifyValue(e.headline)),d(),p("value",e.stringifyValue(e.description)),d(5),h(" ",e.stringifyValue(e.typeOptions[e.typeIndex])),d(4),h(" ",e.stringifyValue(e.illustrationUrl)),d(4),h(" ",e.stringifyValue(e.imgAlt)),d(4),h(" ",e.stringifyValue(e.headline)),d(4),h(" ",e.stringifyValue(e.description)),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,dg,O,N],encapsulation:2})};var xa=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-footer-example-medium',
  templateUrl: './ifx-footer-example-medium.html',
  styleUrl: './ifx-footer-example-medium.scss',
  standalone: false
})
export class IfxFooterMediumExample {

  protected copyrightText = "\xA9 1999 - 2026 Infineon Technologies AG";

  protected updateCopyrightText(value: string) {
    this.copyrightText = value;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

}`;htmlCode=`  &lt;ifx-footer [copyrightText]=&quot;copyrightText&quot;&gt;
    &lt;div slot=&quot;socials&quot;&gt;
      &lt;ifx-link
        variant=&quot;title&quot;
        href=&quot;http://facebook.com/infineon&quot;
        aria-label=&quot;Follow us on Facebook&quot;&gt;
        &lt;ifx-icon icon=&quot;facebook&quot;&gt;&lt;/ifx-icon&gt;
      &lt;/ifx-link&gt;
      &lt;ifx-link
        variant=&quot;title&quot;
        href=&quot;http://youtube.com/infineon&quot;
        aria-label=&quot;Follow us on Youtube&quot;&gt;
        &lt;ifx-icon icon=&quot;youtube&quot;&gt;&lt;/ifx-icon&gt;
      &lt;/ifx-link&gt;
      &lt;ifx-link
        variant=&quot;title&quot;
        href=&quot;http://instagram.com/infineon&quot;
        aria-label=&quot;Follow us on Instagram&quot;&gt;
        &lt;ifx-icon icon=&quot;instagram&quot;&gt;&lt;/ifx-icon&gt;
      &lt;/ifx-link&gt;
      &lt;ifx-link
        variant=&quot;title&quot;
        href=&quot;http://linkedin.com/infineon&quot;
        aria-label=&quot;Follow us on LinkedIn&quot;&gt;
        &lt;ifx-icon icon=&quot;linkedin&quot;&gt;&lt;/ifx-icon&gt;
      &lt;/ifx-link&gt;
      &lt;ifx-link
        variant=&quot;title&quot;
        href=&quot;http://xing.com/infineon&quot;
        aria-label=&quot;Follow us on Xing&quot;&gt;
        &lt;ifx-icon icon=&quot;xing&quot;&gt;&lt;/ifx-icon&gt;
      &lt;/ifx-link&gt;
    &lt;/div&gt;
    &lt;div slot=&quot;info&quot;&gt;
      &lt;ifx-link
        variant=&quot;menu&quot;
        href=&quot;https://yourwebsite.com/terms&quot;
        target=&quot;_blank&quot;&gt;Terms&lt;/ifx-link&gt;
      &lt;ifx-link
        variant=&quot;menu&quot;
        href=&quot;https://yourwebsite.com/imprint&quot;
        target=&quot;_blank&quot;&gt;Imprint&lt;/ifx-link&gt;
      &lt;ifx-link
        variant=&quot;menu&quot;
        href=&quot;https://yourwebsite.com/privacy-policy&quot;
        target=&quot;_blank&quot;&gt;Privacy policy&lt;/ifx-link&gt;
      &lt;ifx-link
        variant=&quot;menu&quot;
        href=&quot;https://yourwebsite.com/glossary&quot;
        target=&quot;_blank&quot;&gt;Glossary&lt;/ifx-link&gt;
    &lt;/div&gt;
  &lt;/ifx-footer&gt;`;copyrightText="\xA9 1999 - 2026 Infineon Technologies AG";updateCopyrightText(t){this.copyrightText=t}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-footer-example-medium"]],standalone:!1,decls:42,vars:5,consts:[[3,"copyrightText"],["slot","socials"],["variant","title","href","http://facebook.com/infineon","aria-label","Follow us on Facebook"],["icon","facebook"],["variant","title","href","http://youtube.com/infineon","aria-label","Follow us on Youtube"],["icon","youtube"],["variant","title","href","http://instagram.com/infineon","aria-label","Follow us on Instagram"],["icon","instagram"],["variant","title","href","http://linkedin.com/infineon","aria-label","Follow us on LinkedIn"],["icon","linkedin"],["variant","title","href","http://xing.com/infineon","aria-label","Follow us on Xing"],["icon","xing"],["slot","info"],["variant","menu","href","https://yourwebsite.com/terms","target","_blank"],["variant","menu","href","https://yourwebsite.com/imprint","target","_blank"],["variant","menu","href","https://yourwebsite.com/privacy-policy","target","_blank"],["variant","menu","href","https://yourwebsite.com/glossary","target","_blank"],[1,"controls-title"],[1,"controls","controls-input"],["label","copyrightText","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-footer",0)(1,"div",1)(2,"ifx-link",2),b(3,"ifx-icon",3),o(),l(4,"ifx-link",4),b(5,"ifx-icon",5),o(),l(6,"ifx-link",6),b(7,"ifx-icon",7),o(),l(8,"ifx-link",8),b(9,"ifx-icon",9),o(),l(10,"ifx-link",10),b(11,"ifx-icon",11),o()(),l(12,"div",12)(13,"ifx-link",13),s(14,"Terms"),o(),l(15,"ifx-link",14),s(16,"Imprint"),o(),l(17,"ifx-link",15),s(18,"Privacy policy"),o(),l(19,"ifx-link",16),s(20,"Glossary"),o()()(),l(21,"h3",17),s(22,"Controls"),o(),l(23,"div",18)(24,"ifx-text-field",19),m("ifxInput",function(a){return e.updateCopyrightText(e.getControlInputValue(a))}),o()(),l(25,"div",20)(26,"div")(27,"b"),s(28,"copyrightText:"),o(),s(29),o()(),l(30,"details",21)(31,"summary"),s(32,"View Code"),o(),l(33,"div",22)(34,"h3"),s(35,"ifx-footer-example-medium.ts"),o(),l(36,"pre"),b(37,"code",23),o(),l(38,"h3"),s(39,"ifx-footer-example-medium.html"),o(),l(40,"pre"),b(41,"code",24),o()()()),i&2&&(p("copyrightText",e.copyrightText),d(24),p("value",e.stringifyValue(e.copyrightText)),d(5),h(" ",e.stringifyValue(e.copyrightText)),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[cg,At,Jo,O,N],encapsulation:2})};var ba=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-icon-button-example',
  templateUrl: './ifx-icon-button-example.html',
  styleUrl: './ifx-icon-button-example.scss',
  standalone: false
})
export class IfxIconButtonExample {

  protected readonly iconOptions = ["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];
  protected iconIndex = 0;
  protected readonly variantOptions = ["primary","secondary","tertiary"];
  protected variantIndex = 0;
  protected disabled = false;
  protected href = "";
  protected readonly sizeOptions = ["xs","s","m","l"];
  protected sizeIndex = 2;
  protected readonly targetOptions = ["_blank","_self","_parent"];
  protected targetIndex = 0;
  protected readonly shapeOptions = ["round","square"];
  protected shapeIndex = 0;
  protected ariaLabelText = "Icon Button";

  protected handleIconChange() {
    this.iconIndex = (this.iconIndex + 1) % this.iconOptions.length;
  }

  protected handleVariantChange() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
  }

  protected handleDisabledChange() {
    this.disabled = !this.disabled;
  }

  protected updateHref(value: string) {
    this.href = value;
  }

  protected handleSizeChange() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected handleTargetChange() {
    this.targetIndex = (this.targetIndex + 1) % this.targetOptions.length;
  }

  protected handleShapeChange() {
    this.shapeIndex = (this.shapeIndex + 1) % this.shapeOptions.length;
  }

  protected updateAriaLabelText(value: string) {
    this.ariaLabelText = value;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

}`;htmlCode=`  &lt;ifx-icon-button
    [shape]=&quot;shapeOptions[shapeIndex]&quot;
    [variant]=&quot;variantOptions[variantIndex]&quot;
    [icon]=&quot;iconOptions[iconIndex]&quot;
    [href]=&quot;href&quot;
    [target]=&quot;targetOptions[targetIndex]&quot;
    [size]=&quot;sizeOptions[sizeIndex]&quot;
    [ariaLabelText]=&quot;ariaLabelText&quot;
    [disabled]=&quot;disabled&quot;&gt;&lt;/ifx-icon-button&gt;`;iconOptions=["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];iconIndex=0;variantOptions=["primary","secondary","tertiary"];variantIndex=0;disabled=!1;href="";sizeOptions=["xs","s","m","l"];sizeIndex=2;targetOptions=["_blank","_self","_parent"];targetIndex=0;shapeOptions=["round","square"];shapeIndex=0;ariaLabelText="Icon Button";handleIconChange(){this.iconIndex=(this.iconIndex+1)%this.iconOptions.length}handleVariantChange(){this.variantIndex=(this.variantIndex+1)%this.variantOptions.length}handleDisabledChange(){this.disabled=!this.disabled}updateHref(t){this.href=t}handleSizeChange(){this.sizeIndex=(this.sizeIndex+1)%this.sizeOptions.length}handleTargetChange(){this.targetIndex=(this.targetIndex+1)%this.targetOptions.length}handleShapeChange(){this.shapeIndex=(this.shapeIndex+1)%this.shapeOptions.length}updateAriaLabelText(t){this.ariaLabelText=t}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-icon-button-example"]],standalone:!1,decls:64,vars:20,consts:[[3,"shape","variant","icon","href","target","size","ariaLabelText","disabled"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","href","type","text",3,"ifxInput","value"],["label","ariaLabelText","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(b(0,"ifx-icon-button",0),l(1,"h3",1),s(2,"Controls"),o(),l(3,"div",2)(4,"ifx-button",3),m("click",function(){return e.handleIconChange()}),s(5,"Toggle Icon"),o(),l(6,"ifx-button",3),m("click",function(){return e.handleVariantChange()}),s(7,"Toggle Variant"),o(),l(8,"ifx-button",3),m("click",function(){return e.handleDisabledChange()}),s(9,"Toggle Disabled"),o(),l(10,"ifx-button",3),m("click",function(){return e.handleSizeChange()}),s(11,"Toggle Size"),o(),l(12,"ifx-button",3),m("click",function(){return e.handleTargetChange()}),s(13,"Toggle Target"),o(),l(14,"ifx-button",3),m("click",function(){return e.handleShapeChange()}),s(15,"Toggle Shape"),o()(),l(16,"div",4)(17,"ifx-text-field",5),m("ifxInput",function(a){return e.updateHref(e.getControlInputValue(a))}),o(),l(18,"ifx-text-field",6),m("ifxInput",function(a){return e.updateAriaLabelText(e.getControlInputValue(a))}),o()(),l(19,"div",7)(20,"div")(21,"b"),s(22,"icon:"),o(),s(23),o(),l(24,"div")(25,"b"),s(26,"variant:"),o(),s(27),o(),l(28,"div")(29,"b"),s(30,"disabled:"),o(),s(31),o(),l(32,"div")(33,"b"),s(34,"href:"),o(),s(35),o(),l(36,"div")(37,"b"),s(38,"size:"),o(),s(39),o(),l(40,"div")(41,"b"),s(42,"target:"),o(),s(43),o(),l(44,"div")(45,"b"),s(46,"shape:"),o(),s(47),o(),l(48,"div")(49,"b"),s(50,"ariaLabelText:"),o(),s(51),o()(),l(52,"details",8)(53,"summary"),s(54,"View Code"),o(),l(55,"div",9)(56,"h3"),s(57,"ifx-icon-button-example.ts"),o(),l(58,"pre"),b(59,"code",10),o(),l(60,"h3"),s(61,"ifx-icon-button-example.html"),o(),l(62,"pre"),b(63,"code",11),o()()()),i&2&&(p("shape",e.shapeOptions[e.shapeIndex])("variant",e.variantOptions[e.variantIndex])("icon",e.iconOptions[e.iconIndex])("href",e.href)("target",e.targetOptions[e.targetIndex])("size",e.sizeOptions[e.sizeIndex])("ariaLabelText",e.ariaLabelText)("disabled",e.disabled),d(17),p("value",e.stringifyValue(e.href)),d(),p("value",e.stringifyValue(e.ariaLabelText)),d(5),h(" ",e.stringifyValue(e.iconOptions[e.iconIndex])),d(4),h(" ",e.stringifyValue(e.variantOptions[e.variantIndex])),d(4),h(" ",e.stringifyValue(e.disabled)),d(4),h(" ",e.stringifyValue(e.href)),d(4),h(" ",e.stringifyValue(e.sizeOptions[e.sizeIndex])),d(4),h(" ",e.stringifyValue(e.targetOptions[e.targetIndex])),d(4),h(" ",e.stringifyValue(e.shapeOptions[e.shapeIndex])),d(4),h(" ",e.stringifyValue(e.ariaLabelText)),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,ug,O,N],encapsulation:2})};var ya=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-indicator-example',
  templateUrl: './ifx-indicator-example.html',
  styleUrl: './ifx-indicator-example.scss',
  standalone: false
})
export class IfxIndicatorExample {

  protected inverted = false;

  protected handleInvertedChange() {
    this.inverted = !this.inverted;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

}`;htmlCode=`  &lt;ifx-indicator
    variant=&quot;number&quot;
    number=&quot;1&quot;
    [inverted]=&quot;inverted&quot;&gt;&lt;/ifx-indicator&gt;`;inverted=!1;handleInvertedChange(){this.inverted=!this.inverted}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-indicator-example"]],standalone:!1,decls:23,vars:4,consts:[["variant","number","number","1",3,"inverted"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(b(0,"ifx-indicator",0),l(1,"h3",1),s(2,"Controls"),o(),l(3,"div",2)(4,"ifx-button",3),m("click",function(){return e.handleInvertedChange()}),s(5,"Toggle Inverted"),o()(),l(6,"div",4)(7,"div")(8,"b"),s(9,"inverted:"),o(),s(10),o()(),l(11,"details",5)(12,"summary"),s(13,"View Code"),o(),l(14,"div",6)(15,"h3"),s(16,"ifx-indicator-example.ts"),o(),l(17,"pre"),b(18,"code",7),o(),l(19,"h3"),s(20,"ifx-indicator-example.html"),o(),l(21,"pre"),b(22,"code",8),o()()()),i&2&&(p("inverted",e.inverted),d(10),h(" ",e.stringifyValue(e.inverted)),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,pg],encapsulation:2})};var Ia=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-link-example',
  templateUrl: './ifx-link-example.html',
  styleUrl: './ifx-link-example.scss',
  standalone: false
})
export class IfxLinkExample {

  protected href = "";
  protected readonly targetOptions = ["_blank","_self","_parent"];
  protected targetIndex = 0;
  protected disabled = false;
  protected download = "";
  protected readonly sizeOptions = ["s","m","l","xl"];
  protected sizeIndex = 1;
  protected readonly variantOptions = ["bold","underlined","title","menu"];
  protected variantIndex = 0;

  protected updateHref(value: string) {
    this.href = value;
  }

  protected handleTargetChange() {
    this.targetIndex = (this.targetIndex + 1) % this.targetOptions.length;
  }

  protected handleDisabledChange() {
    this.disabled = !this.disabled;
  }

  protected updateDownload(value: string) {
    this.download = value;
  }

  protected handleSizeChange() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected handleVariantChange() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

}`;htmlCode=`  &lt;ifx-link
    aria-label=&quot;Link&quot;
    [href]=&quot;href&quot;
    [target]=&quot;targetOptions[targetIndex]&quot;
    [size]=&quot;sizeOptions[sizeIndex]&quot;
    [variant]=&quot;variantOptions[variantIndex]&quot;
    [download]=&quot;download&quot;
    [disabled]=&quot;disabled&quot;&gt;Link&lt;/ifx-link&gt;`;href="";targetOptions=["_blank","_self","_parent"];targetIndex=0;disabled=!1;download="";sizeOptions=["s","m","l","xl"];sizeIndex=1;variantOptions=["bold","underlined","title","menu"];variantIndex=0;updateHref(t){this.href=t}handleTargetChange(){this.targetIndex=(this.targetIndex+1)%this.targetOptions.length}handleDisabledChange(){this.disabled=!this.disabled}updateDownload(t){this.download=t}handleSizeChange(){this.sizeIndex=(this.sizeIndex+1)%this.sizeOptions.length}handleVariantChange(){this.variantIndex=(this.variantIndex+1)%this.variantOptions.length}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-link-example"]],standalone:!1,decls:53,vars:16,consts:[["aria-label","Link",3,"href","target","size","variant","download","disabled"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","href","type","text",3,"ifxInput","value"],["label","download","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-link",0),s(1,"Link"),o(),l(2,"h3",1),s(3,"Controls"),o(),l(4,"div",2)(5,"ifx-button",3),m("click",function(){return e.handleTargetChange()}),s(6,"Toggle Target"),o(),l(7,"ifx-button",3),m("click",function(){return e.handleDisabledChange()}),s(8,"Toggle Disabled"),o(),l(9,"ifx-button",3),m("click",function(){return e.handleSizeChange()}),s(10,"Toggle Size"),o(),l(11,"ifx-button",3),m("click",function(){return e.handleVariantChange()}),s(12,"Toggle Variant"),o()(),l(13,"div",4)(14,"ifx-text-field",5),m("ifxInput",function(a){return e.updateHref(e.getControlInputValue(a))}),o(),l(15,"ifx-text-field",6),m("ifxInput",function(a){return e.updateDownload(e.getControlInputValue(a))}),o()(),l(16,"div",7)(17,"div")(18,"b"),s(19,"href:"),o(),s(20),o(),l(21,"div")(22,"b"),s(23,"target:"),o(),s(24),o(),l(25,"div")(26,"b"),s(27,"disabled:"),o(),s(28),o(),l(29,"div")(30,"b"),s(31,"download:"),o(),s(32),o(),l(33,"div")(34,"b"),s(35,"size:"),o(),s(36),o(),l(37,"div")(38,"b"),s(39,"variant:"),o(),s(40),o()(),l(41,"details",8)(42,"summary"),s(43,"View Code"),o(),l(44,"div",9)(45,"h3"),s(46,"ifx-link-example.ts"),o(),l(47,"pre"),b(48,"code",10),o(),l(49,"h3"),s(50,"ifx-link-example.html"),o(),l(51,"pre"),b(52,"code",11),o()()()),i&2&&(p("href",e.href)("target",e.targetOptions[e.targetIndex])("size",e.sizeOptions[e.sizeIndex])("variant",e.variantOptions[e.variantIndex])("download",e.download)("disabled",e.disabled),d(14),p("value",e.stringifyValue(e.href)),d(),p("value",e.stringifyValue(e.download)),d(5),h(" ",e.stringifyValue(e.href)),d(4),h(" ",e.stringifyValue(e.targetOptions[e.targetIndex])),d(4),h(" ",e.stringifyValue(e.disabled)),d(4),h(" ",e.stringifyValue(e.download)),d(4),h(" ",e.stringifyValue(e.sizeOptions[e.sizeIndex])),d(4),h(" ",e.stringifyValue(e.variantOptions[e.variantIndex])),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,Jo,O,N],encapsulation:2})};var Ca=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-navbar-example',
  templateUrl: './ifx-navbar-example.html',
  styleUrl: './ifx-navbar-example.scss',
  standalone: false
})
export class IfxNavbarExample {

  protected applicationName = "Application name";
  protected showLogoAndAppname = true;
  protected logoHref = "http://google.com";
  protected readonly logoHrefTargetOptions = ["_self","_blank","_parent"];
  protected logoHrefTargetIndex = 0;
  protected numberIndicator = 0;
  protected dotIndicator = false;
  protected hideOnMobile = true;
  protected href = "http://google.com";
  protected readonly targetOptions = ["_self"];
  protected targetIndex = 0;
  protected alt = "profile image";
  protected userName = "";

  protected updateApplicationName(value: string) {
    this.applicationName = value;
  }

  protected handleShowLogoAndAppnameChange() {
    this.showLogoAndAppname = !this.showLogoAndAppname;
  }

  protected updateLogoHref(value: string) {
    this.logoHref = value;
  }

  protected handleLogoHrefTargetChange() {
    this.logoHrefTargetIndex = (this.logoHrefTargetIndex + 1) % this.logoHrefTargetOptions.length;
  }

  protected updateNumberIndicator(value: string) {
    this.numberIndicator = Number(value);
  }

  protected handleDotIndicatorChange() {
    this.dotIndicator = !this.dotIndicator;
  }

  protected handleHideOnMobileChange() {
    this.hideOnMobile = !this.hideOnMobile;
  }

  protected updateHref(value: string) {
    this.href = value;
  }

  protected handleTargetChange() {
    this.targetIndex = (this.targetIndex + 1) % this.targetOptions.length;
  }

  protected updateAlt(value: string) {
    this.alt = value;
  }

  protected updateUserName(value: string) {
    this.userName = value;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

  protected handleNavbarMobileMenuIsOpen(event: CustomEvent) {
    console.log('ifxNavbarMobileMenuIsOpen:', event);
    // Add your handler logic here
  }

  protected handleNavItem(event: CustomEvent) {
    console.log('ifxNavItem:', event);
    // Add your handler logic here
  }

  protected handleInput(event: CustomEvent) {
    console.log('ifxInput:', event);
    // Add your handler logic here
  }

  protected handleOpen(event: CustomEvent) {
    console.log('ifxOpen:', event);
    // Add your handler logic here
  }

}`;htmlCode=`  &lt;ifx-navbar
    [fixed]=&quot;false&quot;
    [showLogoAndAppname]=&quot;showLogoAndAppname&quot;
    [applicationName]=&quot;applicationName&quot;
    [logoHref]=&quot;logoHref&quot;
    [logoHrefTarget]=&quot;logoHrefTargetOptions[logoHrefTargetIndex]&quot;&gt;
    &lt;ifx-navbar-item
      icon=&quot;&quot;
      slot=&quot;left-item&quot;
      (ifxNavbarMobileMenuIsOpen)=&quot;handleNavbarMobileMenuIsOpen($any($event))&quot;
      (ifxNavItem)=&quot;handleNavItem($any($event))&quot;
      (ifxInput)=&quot;handleInput($any($event))&quot;
      (ifxOpen)=&quot;handleOpen($any($event))&quot;
      [target]=&quot;targetOptions[targetIndex]&quot;
      [href]=&quot;href&quot;
      [hideOnMobile]=&quot;hideOnMobile&quot;
      [numberIndicator]=&quot;numberIndicator&quot;
      [dotIndicator]=&quot;dotIndicator&quot;&gt;
      &lt;ifx-navbar-item
        icon=&quot;&quot;
        [numberIndicator]=&quot;numberIndicator&quot;
        [dotIndicator]=&quot;dotIndicator&quot;
        [hideOnMobile]=&quot;hideOnMobile&quot;&gt;
        &lt;ifx-navbar-item
          [numberIndicator]=&quot;numberIndicator&quot;
          [dotIndicator]=&quot;dotIndicator&quot;
          [hideOnMobile]=&quot;hideOnMobile&quot;&gt;
          &lt;ifx-navbar-item
            [href]=&quot;href&quot;
            [target]=&quot;targetOptions[targetIndex]&quot;
            [numberIndicator]=&quot;numberIndicator&quot;
            [dotIndicator]=&quot;dotIndicator&quot;
            [hideOnMobile]=&quot;hideOnMobile&quot;&gt;Link Layer 3 Nested Item 1&lt;/ifx-navbar-item&gt;
          &lt;ifx-navbar-item
            [numberIndicator]=&quot;numberIndicator&quot;
            [dotIndicator]=&quot;dotIndicator&quot;
            [hideOnMobile]=&quot;hideOnMobile&quot;&gt;Layer 3 Nested Item 2&lt;/ifx-navbar-item&gt;
          &lt;ifx-navbar-item
            [numberIndicator]=&quot;numberIndicator&quot;
            [dotIndicator]=&quot;dotIndicator&quot;
            [hideOnMobile]=&quot;hideOnMobile&quot;&gt;Layer 3 Nested Item 3&lt;/ifx-navbar-item&gt;
          &lt;ifx-navbar-item
            [numberIndicator]=&quot;numberIndicator&quot;
            [dotIndicator]=&quot;dotIndicator&quot;
            [hideOnMobile]=&quot;hideOnMobile&quot;&gt;Layer 3 Nested Item 4&lt;/ifx-navbar-item&gt;
        &lt;/ifx-navbar-item&gt;
        &lt;ifx-navbar-item
          [numberIndicator]=&quot;numberIndicator&quot;
          [dotIndicator]=&quot;dotIndicator&quot;
          [hideOnMobile]=&quot;hideOnMobile&quot;&gt;Layer 2 Nested Item 3&lt;/ifx-navbar-item&gt;
        &lt;ifx-navbar-item
          [numberIndicator]=&quot;numberIndicator&quot;
          [dotIndicator]=&quot;dotIndicator&quot;
          [hideOnMobile]=&quot;hideOnMobile&quot;&gt;Layer 2 Nested Item 4&lt;/ifx-navbar-item&gt;
        &lt;ifx-navbar-item
          [numberIndicator]=&quot;numberIndicator&quot;
          [dotIndicator]=&quot;dotIndicator&quot;
          [hideOnMobile]=&quot;hideOnMobile&quot;&gt;Layer 2 Nested Item 5&lt;/ifx-navbar-item&gt;
      &lt;/ifx-navbar-item&gt;
      &lt;ifx-navbar-item
        [numberIndicator]=&quot;numberIndicator&quot;
        [dotIndicator]=&quot;dotIndicator&quot;
        [hideOnMobile]=&quot;hideOnMobile&quot;&gt;
        &lt;ifx-navbar-item
          [numberIndicator]=&quot;numberIndicator&quot;
          [dotIndicator]=&quot;dotIndicator&quot;
          [hideOnMobile]=&quot;hideOnMobile&quot;&gt;Layer 2 Item 1&lt;/ifx-navbar-item&gt;
        &lt;ifx-navbar-item
          [numberIndicator]=&quot;numberIndicator&quot;
          [dotIndicator]=&quot;dotIndicator&quot;
          [hideOnMobile]=&quot;hideOnMobile&quot;&gt;Layer 2 Item 2&lt;/ifx-navbar-item&gt;
        &lt;ifx-navbar-item
          [numberIndicator]=&quot;numberIndicator&quot;
          [dotIndicator]=&quot;dotIndicator&quot;
          [hideOnMobile]=&quot;hideOnMobile&quot;&gt;Layer 2 Item 3&lt;/ifx-navbar-item&gt;
      &lt;/ifx-navbar-item&gt;
      &lt;ifx-navbar-item
        [numberIndicator]=&quot;numberIndicator&quot;
        [dotIndicator]=&quot;dotIndicator&quot;
        [hideOnMobile]=&quot;hideOnMobile&quot;&gt;Nested Item 3&lt;/ifx-navbar-item&gt;
      &lt;ifx-navbar-item
        [numberIndicator]=&quot;numberIndicator&quot;
        [dotIndicator]=&quot;dotIndicator&quot;
        [hideOnMobile]=&quot;hideOnMobile&quot;&gt;
        &lt;ifx-navbar-item
          [numberIndicator]=&quot;numberIndicator&quot;
          [dotIndicator]=&quot;dotIndicator&quot;
          [hideOnMobile]=&quot;hideOnMobile&quot;&gt;Nested Item 4&lt;/ifx-navbar-item&gt;
      &lt;/ifx-navbar-item&gt;
    &lt;/ifx-navbar-item&gt;
    &lt;ifx-navbar-item
      slot=&quot;left-item&quot;
      icon=&quot;&quot;
      [showLabel]=&quot;true&quot;
      [href]=&quot;href&quot;
      [target]=&quot;targetOptions[targetIndex]&quot;
      [numberIndicator]=&quot;numberIndicator&quot;
      [dotIndicator]=&quot;dotIndicator&quot;
      [hideOnMobile]=&quot;hideOnMobile&quot;&gt;Menu Item&lt;/ifx-navbar-item&gt;
    &lt;ifx-navbar-item
      slot=&quot;left-item&quot;
      [numberIndicator]=&quot;numberIndicator&quot;
      [dotIndicator]=&quot;dotIndicator&quot;
      [hideOnMobile]=&quot;hideOnMobile&quot;&gt;
      &lt;ifx-navbar-item
        [numberIndicator]=&quot;numberIndicator&quot;
        [dotIndicator]=&quot;dotIndicator&quot;
        [hideOnMobile]=&quot;hideOnMobile&quot;&gt;Item1&lt;/ifx-navbar-item&gt;
      &lt;ifx-navbar-item
        [numberIndicator]=&quot;numberIndicator&quot;
        [dotIndicator]=&quot;dotIndicator&quot;
        [hideOnMobile]=&quot;hideOnMobile&quot;&gt;Item2&lt;/ifx-navbar-item&gt;
    &lt;/ifx-navbar-item&gt;
    &lt;ifx-search-bar
      slot=&quot;search-bar-left&quot;
      [isOpen]=&quot;false&quot;&gt;&lt;/ifx-search-bar&gt;
    &lt;ifx-navbar-item
      slot=&quot;right-item&quot;
      [showLabel]=&quot;false&quot;
      icon=&quot;image-16&quot;
      [numberIndicator]=&quot;numberIndicator&quot;
      [target]=&quot;targetOptions[targetIndex]&quot;
      [href]=&quot;href&quot;
      [hideOnMobile]=&quot;hideOnMobile&quot;
      [dotIndicator]=&quot;dotIndicator&quot;&gt;&lt;/ifx-navbar-item&gt;
    &lt;ifx-navbar-item
      slot=&quot;right-item&quot;
      [showLabel]=&quot;false&quot;
      icon=&quot;image-16&quot;
      [dotIndicator]=&quot;dotIndicator&quot;
      [hideOnMobile]=&quot;hideOnMobile&quot;
      [numberIndicator]=&quot;numberIndicator&quot;&gt;&lt;/ifx-navbar-item&gt;
    &lt;ifx-navbar-profile
      slot=&quot;right-item&quot;
      image-url=&quot;&quot;
      [showLabel]=&quot;true&quot;
      (ifxNavbarMobileMenuIsOpen)=&quot;handleNavbarMobileMenuIsOpen($any($event))&quot;
      (ifxNavItem)=&quot;handleNavItem($any($event))&quot;
      (ifxInput)=&quot;handleInput($any($event))&quot;
      (ifxOpen)=&quot;handleOpen($any($event))&quot;
      [userName]=&quot;userName&quot;
      [href]=&quot;href&quot;
      [target]=&quot;targetOptions[targetIndex]&quot;
      [alt]=&quot;alt&quot;&gt;&lt;/ifx-navbar-profile&gt;
  &lt;/ifx-navbar&gt;`;applicationName="Application name";showLogoAndAppname=!0;logoHref="http://google.com";logoHrefTargetOptions=["_self","_blank","_parent"];logoHrefTargetIndex=0;numberIndicator=0;dotIndicator=!1;hideOnMobile=!0;href="http://google.com";targetOptions=["_self"];targetIndex=0;alt="profile image";userName="";updateApplicationName(t){this.applicationName=t}handleShowLogoAndAppnameChange(){this.showLogoAndAppname=!this.showLogoAndAppname}updateLogoHref(t){this.logoHref=t}handleLogoHrefTargetChange(){this.logoHrefTargetIndex=(this.logoHrefTargetIndex+1)%this.logoHrefTargetOptions.length}updateNumberIndicator(t){this.numberIndicator=Number(t)}handleDotIndicatorChange(){this.dotIndicator=!this.dotIndicator}handleHideOnMobileChange(){this.hideOnMobile=!this.hideOnMobile}updateHref(t){this.href=t}handleTargetChange(){this.targetIndex=(this.targetIndex+1)%this.targetOptions.length}updateAlt(t){this.alt=t}updateUserName(t){this.userName=t}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleNavbarMobileMenuIsOpen(t){console.log("ifxNavbarMobileMenuIsOpen:",t)}handleNavItem(t){console.log("ifxNavItem:",t)}handleInput(t){console.log("ifxInput:",t)}handleOpen(t){console.log("ifxOpen:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-navbar-example"]],standalone:!1,decls:118,vars:110,consts:[[3,"fixed","showLogoAndAppname","applicationName","logoHref","logoHrefTarget"],["icon","","slot","left-item",3,"ifxNavbarMobileMenuIsOpen","ifxNavItem","ifxInput","ifxOpen","target","href","hideOnMobile","numberIndicator","dotIndicator"],["icon","",3,"numberIndicator","dotIndicator","hideOnMobile"],[3,"numberIndicator","dotIndicator","hideOnMobile"],[3,"href","target","numberIndicator","dotIndicator","hideOnMobile"],["slot","left-item","icon","",3,"showLabel","href","target","numberIndicator","dotIndicator","hideOnMobile"],["slot","left-item",3,"numberIndicator","dotIndicator","hideOnMobile"],["slot","search-bar-left",3,"isOpen"],["slot","right-item","icon","image-16",3,"showLabel","numberIndicator","target","href","hideOnMobile","dotIndicator"],["slot","right-item","icon","image-16",3,"showLabel","dotIndicator","hideOnMobile","numberIndicator"],["slot","right-item","image-url","",3,"ifxNavbarMobileMenuIsOpen","ifxNavItem","ifxInput","ifxOpen","showLabel","userName","href","target","alt"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","applicationName","type","text",3,"ifxInput","value"],["label","logoHref","type","text",3,"ifxInput","value"],["label","numberIndicator","type","number",3,"ifxInput","value"],["label","href","type","text",3,"ifxInput","value"],["label","alt","type","text",3,"ifxInput","value"],["label","userName","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-navbar",0)(1,"ifx-navbar-item",1),m("ifxNavbarMobileMenuIsOpen",function(a){return e.handleNavbarMobileMenuIsOpen(a)})("ifxNavItem",function(a){return e.handleNavItem(a)})("ifxInput",function(a){return e.handleInput(a)})("ifxOpen",function(a){return e.handleOpen(a)}),l(2,"ifx-navbar-item",2)(3,"ifx-navbar-item",3)(4,"ifx-navbar-item",4),s(5,"Link Layer 3 Nested Item 1"),o(),l(6,"ifx-navbar-item",3),s(7,"Layer 3 Nested Item 2"),o(),l(8,"ifx-navbar-item",3),s(9,"Layer 3 Nested Item 3"),o(),l(10,"ifx-navbar-item",3),s(11,"Layer 3 Nested Item 4"),o()(),l(12,"ifx-navbar-item",3),s(13,"Layer 2 Nested Item 3"),o(),l(14,"ifx-navbar-item",3),s(15,"Layer 2 Nested Item 4"),o(),l(16,"ifx-navbar-item",3),s(17,"Layer 2 Nested Item 5"),o()(),l(18,"ifx-navbar-item",3)(19,"ifx-navbar-item",3),s(20,"Layer 2 Item 1"),o(),l(21,"ifx-navbar-item",3),s(22,"Layer 2 Item 2"),o(),l(23,"ifx-navbar-item",3),s(24,"Layer 2 Item 3"),o()(),l(25,"ifx-navbar-item",3),s(26,"Nested Item 3"),o(),l(27,"ifx-navbar-item",3)(28,"ifx-navbar-item",3),s(29,"Nested Item 4"),o()()(),l(30,"ifx-navbar-item",5),s(31,"Menu Item"),o(),l(32,"ifx-navbar-item",6)(33,"ifx-navbar-item",3),s(34,"Item1"),o(),l(35,"ifx-navbar-item",3),s(36,"Item2"),o()(),b(37,"ifx-search-bar",7)(38,"ifx-navbar-item",8)(39,"ifx-navbar-item",9),l(40,"ifx-navbar-profile",10),m("ifxNavbarMobileMenuIsOpen",function(a){return e.handleNavbarMobileMenuIsOpen(a)})("ifxNavItem",function(a){return e.handleNavItem(a)})("ifxInput",function(a){return e.handleInput(a)})("ifxOpen",function(a){return e.handleOpen(a)}),o()(),l(41,"h3",11),s(42,"Controls"),o(),l(43,"div",12)(44,"ifx-button",13),m("click",function(){return e.handleShowLogoAndAppnameChange()}),s(45,"Toggle ShowLogoAndAppname"),o(),l(46,"ifx-button",13),m("click",function(){return e.handleLogoHrefTargetChange()}),s(47,"Toggle LogoHrefTarget"),o(),l(48,"ifx-button",13),m("click",function(){return e.handleDotIndicatorChange()}),s(49,"Toggle DotIndicator"),o(),l(50,"ifx-button",13),m("click",function(){return e.handleHideOnMobileChange()}),s(51,"Toggle HideOnMobile"),o(),l(52,"ifx-button",13),m("click",function(){return e.handleTargetChange()}),s(53,"Toggle Target"),o()(),l(54,"div",14)(55,"ifx-text-field",15),m("ifxInput",function(a){return e.updateApplicationName(e.getControlInputValue(a))}),o(),l(56,"ifx-text-field",16),m("ifxInput",function(a){return e.updateLogoHref(e.getControlInputValue(a))}),o(),l(57,"ifx-text-field",17),m("ifxInput",function(a){return e.updateNumberIndicator(e.getControlInputValue(a))}),o(),l(58,"ifx-text-field",18),m("ifxInput",function(a){return e.updateHref(e.getControlInputValue(a))}),o(),l(59,"ifx-text-field",19),m("ifxInput",function(a){return e.updateAlt(e.getControlInputValue(a))}),o(),l(60,"ifx-text-field",20),m("ifxInput",function(a){return e.updateUserName(e.getControlInputValue(a))}),o()(),l(61,"div",21)(62,"div")(63,"b"),s(64,"applicationName:"),o(),s(65),o(),l(66,"div")(67,"b"),s(68,"showLogoAndAppname:"),o(),s(69),o(),l(70,"div")(71,"b"),s(72,"logoHref:"),o(),s(73),o(),l(74,"div")(75,"b"),s(76,"logoHrefTarget:"),o(),s(77),o(),l(78,"div")(79,"b"),s(80,"numberIndicator:"),o(),s(81),o(),l(82,"div")(83,"b"),s(84,"dotIndicator:"),o(),s(85),o(),l(86,"div")(87,"b"),s(88,"hideOnMobile:"),o(),s(89),o(),l(90,"div")(91,"b"),s(92,"href:"),o(),s(93),o(),l(94,"div")(95,"b"),s(96,"target:"),o(),s(97),o(),l(98,"div")(99,"b"),s(100,"alt:"),o(),s(101),o(),l(102,"div")(103,"b"),s(104,"userName:"),o(),s(105),o()(),l(106,"details",22)(107,"summary"),s(108,"View Code"),o(),l(109,"div",23)(110,"h3"),s(111,"ifx-navbar-example.ts"),o(),l(112,"pre"),b(113,"code",24),o(),l(114,"h3"),s(115,"ifx-navbar-example.html"),o(),l(116,"pre"),b(117,"code",25),o()()()),i&2&&(p("fixed",!1)("showLogoAndAppname",e.showLogoAndAppname)("applicationName",e.applicationName)("logoHref",e.logoHref)("logoHrefTarget",e.logoHrefTargetOptions[e.logoHrefTargetIndex]),d(),p("target",e.targetOptions[e.targetIndex])("href",e.href)("hideOnMobile",e.hideOnMobile)("numberIndicator",e.numberIndicator)("dotIndicator",e.dotIndicator),d(),p("numberIndicator",e.numberIndicator)("dotIndicator",e.dotIndicator)("hideOnMobile",e.hideOnMobile),d(),p("numberIndicator",e.numberIndicator)("dotIndicator",e.dotIndicator)("hideOnMobile",e.hideOnMobile),d(),p("href",e.href)("target",e.targetOptions[e.targetIndex])("numberIndicator",e.numberIndicator)("dotIndicator",e.dotIndicator)("hideOnMobile",e.hideOnMobile),d(2),p("numberIndicator",e.numberIndicator)("dotIndicator",e.dotIndicator)("hideOnMobile",e.hideOnMobile),d(2),p("numberIndicator",e.numberIndicator)("dotIndicator",e.dotIndicator)("hideOnMobile",e.hideOnMobile),d(2),p("numberIndicator",e.numberIndicator)("dotIndicator",e.dotIndicator)("hideOnMobile",e.hideOnMobile),d(2),p("numberIndicator",e.numberIndicator)("dotIndicator",e.dotIndicator)("hideOnMobile",e.hideOnMobile),d(2),p("numberIndicator",e.numberIndicator)("dotIndicator",e.dotIndicator)("hideOnMobile",e.hideOnMobile),d(2),p("numberIndicator",e.numberIndicator)("dotIndicator",e.dotIndicator)("hideOnMobile",e.hideOnMobile),d(2),p("numberIndicator",e.numberIndicator)("dotIndicator",e.dotIndicator)("hideOnMobile",e.hideOnMobile),d(),p("numberIndicator",e.numberIndicator)("dotIndicator",e.dotIndicator)("hideOnMobile",e.hideOnMobile),d(2),p("numberIndicator",e.numberIndicator)("dotIndicator",e.dotIndicator)("hideOnMobile",e.hideOnMobile),d(2),p("numberIndicator",e.numberIndicator)("dotIndicator",e.dotIndicator)("hideOnMobile",e.hideOnMobile),d(2),p("numberIndicator",e.numberIndicator)("dotIndicator",e.dotIndicator)("hideOnMobile",e.hideOnMobile),d(2),p("numberIndicator",e.numberIndicator)("dotIndicator",e.dotIndicator)("hideOnMobile",e.hideOnMobile),d(),p("numberIndicator",e.numberIndicator)("dotIndicator",e.dotIndicator)("hideOnMobile",e.hideOnMobile),d(2),p("showLabel",!0)("href",e.href)("target",e.targetOptions[e.targetIndex])("numberIndicator",e.numberIndicator)("dotIndicator",e.dotIndicator)("hideOnMobile",e.hideOnMobile),d(2),p("numberIndicator",e.numberIndicator)("dotIndicator",e.dotIndicator)("hideOnMobile",e.hideOnMobile),d(),p("numberIndicator",e.numberIndicator)("dotIndicator",e.dotIndicator)("hideOnMobile",e.hideOnMobile),d(2),p("numberIndicator",e.numberIndicator)("dotIndicator",e.dotIndicator)("hideOnMobile",e.hideOnMobile),d(2),p("isOpen",!1),d(),p("showLabel",!1)("numberIndicator",e.numberIndicator)("target",e.targetOptions[e.targetIndex])("href",e.href)("hideOnMobile",e.hideOnMobile)("dotIndicator",e.dotIndicator),d(),p("showLabel",!1)("dotIndicator",e.dotIndicator)("hideOnMobile",e.hideOnMobile)("numberIndicator",e.numberIndicator),d(),p("showLabel",!0)("userName",e.userName)("href",e.href)("target",e.targetOptions[e.targetIndex])("alt",e.alt),d(15),p("value",e.stringifyValue(e.applicationName)),d(),p("value",e.stringifyValue(e.logoHref)),d(),p("value",e.stringifyValue(e.numberIndicator)),d(),p("value",e.stringifyValue(e.href)),d(),p("value",e.stringifyValue(e.alt)),d(),p("value",e.stringifyValue(e.userName)),d(5),h(" ",e.stringifyValue(e.applicationName)),d(4),h(" ",e.stringifyValue(e.showLogoAndAppname)),d(4),h(" ",e.stringifyValue(e.logoHref)),d(4),h(" ",e.stringifyValue(e.logoHrefTargetOptions[e.logoHrefTargetIndex])),d(4),h(" ",e.stringifyValue(e.numberIndicator)),d(4),h(" ",e.stringifyValue(e.dotIndicator)),d(4),h(" ",e.stringifyValue(e.hideOnMobile)),d(4),h(" ",e.stringifyValue(e.href)),d(4),h(" ",e.stringifyValue(e.targetOptions[e.targetIndex])),d(4),h(" ",e.stringifyValue(e.alt)),d(4),h(" ",e.stringifyValue(e.userName)),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,Yo,Xo,mg,Ln,O,N],encapsulation:2})};var Ea=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-sidebar-example',
  templateUrl: './ifx-sidebar-example.html',
  styleUrl: './ifx-sidebar-example.scss',
  standalone: false
})
export class IfxSidebarExample {

  protected applicationName = "Application Name";
  protected showHeader = true;
  protected showFooter = true;
  protected initialCollapse = true;
  protected collapsed = false;
  protected collapsible = false;
  protected readonly positionOptions = ["left","right"];
  protected positionIndex = 0;
  protected imprint = "https://yourwebsite.com/imprint";
  protected termsOfUse = "https://yourwebsite.com/terms";
  protected privacyPolicy = "https://yourwebsite.com/privacy-policy";
  protected copyrightText = "\xA9 1999 - 2026 Infineon Technologies AG";
  protected readonly iconOptions = ["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];
  protected iconIndex = 0;
  protected hideMenuLabel = "Hide Menu";
  protected logoHref = "http://google.com";
  protected readonly logoHrefTargetOptions = ["_self","_blank","_parent"];
  protected logoHrefTargetIndex = 0;
  protected readonly footerHrefTargetOptions = ["_self","_blank","_parent"];
  protected footerHrefTargetIndex = 1;

  protected updateApplicationName(value: string) {
    this.applicationName = value;
  }

  protected handleShowHeaderChange() {
    this.showHeader = !this.showHeader;
  }

  protected handleShowFooterChange() {
    this.showFooter = !this.showFooter;
  }

  protected handleInitialCollapseChange() {
    this.initialCollapse = !this.initialCollapse;
  }

  protected handleCollapsedChange() {
    this.collapsed = !this.collapsed;
  }

  protected handleCollapsibleChange() {
    this.collapsible = !this.collapsible;
  }

  protected handlePositionChange() {
    this.positionIndex = (this.positionIndex + 1) % this.positionOptions.length;
  }

  protected updateImprint(value: string) {
    this.imprint = value;
  }

  protected updateTermsOfUse(value: string) {
    this.termsOfUse = value;
  }

  protected updatePrivacyPolicy(value: string) {
    this.privacyPolicy = value;
  }

  protected updateCopyrightText(value: string) {
    this.copyrightText = value;
  }

  protected handleIconChange() {
    this.iconIndex = (this.iconIndex + 1) % this.iconOptions.length;
  }

  protected updateHideMenuLabel(value: string) {
    this.hideMenuLabel = value;
  }

  protected updateLogoHref(value: string) {
    this.logoHref = value;
  }

  protected handleLogoHrefTargetChange() {
    this.logoHrefTargetIndex = (this.logoHrefTargetIndex + 1) % this.logoHrefTargetOptions.length;
  }

  protected handleFooterHrefTargetChange() {
    this.footerHrefTargetIndex = (this.footerHrefTargetIndex + 1) % this.footerHrefTargetOptions.length;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

  protected handleSidebarCollapseChange(event: CustomEvent) {
    console.log('ifxSidebarCollapseChange:', event);
    // Add your handler logic here
  }

  protected handleSidebarLogoClick(event: CustomEvent) {
    console.log('ifxSidebarLogoClick:', event);
    // Add your handler logic here
  }

  protected handleSidebarActionItem(event: CustomEvent) {
    console.log('ifxSidebarActionItem:', event);
    // Add your handler logic here
  }

  protected handleSidebarMenu(event: CustomEvent) {
    console.log('ifxSidebarMenu:', event);
    // Add your handler logic here
  }

  protected handleSidebarNavigationItem(event: CustomEvent) {
    console.log('ifxSidebarNavigationItem:', event);
    // Add your handler logic here
  }

}`;htmlCode=`  &lt;ifx-sidebar
    footer-target=&quot;_blank&quot;
    [applicationName]=&quot;applicationName&quot;
    [collapsible]=&quot;collapsible&quot;
    [collapsed]=&quot;collapsed&quot;
    [showHeader]=&quot;showHeader&quot;
    [showFooter]=&quot;showFooter&quot;
    [initialCollapse]=&quot;initialCollapse&quot;
    [termsOfUse]=&quot;termsOfUse&quot;
    [imprint]=&quot;imprint&quot;
    [privacyPolicy]=&quot;privacyPolicy&quot;
    [copyrightText]=&quot;copyrightText&quot;
    [position]=&quot;positionOptions[positionIndex]&quot;
    [logoHref]=&quot;logoHref&quot;
    [logoHrefTarget]=&quot;logoHrefTargetOptions[logoHrefTargetIndex]&quot;
    [hideMenuLabel]=&quot;hideMenuLabel&quot;
    [footerHrefTarget]=&quot;footerHrefTargetOptions[footerHrefTargetIndex]&quot;&gt;
    &lt;ifx-sidebar-title
      (ifxSidebarCollapseChange)=&quot;handleSidebarCollapseChange($any($event))&quot;
      (ifxSidebarLogoClick)=&quot;handleSidebarLogoClick($any($event))&quot;
      (ifxSidebarActionItem)=&quot;handleSidebarActionItem($any($event))&quot;
      (ifxSidebarMenu)=&quot;handleSidebarMenu($any($event))&quot;
      (ifxSidebarNavigationItem)=&quot;handleSidebarNavigationItem($any($event))&quot;&gt;Menu Items&lt;/ifx-sidebar-title&gt;
    &lt;ifx-sidebar-item
      href=&quot;https://google.com&quot;
      target=&quot;_blank&quot;
      (ifxSidebarCollapseChange)=&quot;handleSidebarCollapseChange($any($event))&quot;
      (ifxSidebarLogoClick)=&quot;handleSidebarLogoClick($any($event))&quot;
      (ifxSidebarActionItem)=&quot;handleSidebarActionItem($any($event))&quot;
      (ifxSidebarMenu)=&quot;handleSidebarMenu($any($event))&quot;
      (ifxSidebarNavigationItem)=&quot;handleSidebarNavigationItem($any($event))&quot;
      [icon]=&quot;iconOptions[iconIndex]&quot;&gt;Menu Item&lt;/ifx-sidebar-item&gt;
    &lt;ifx-sidebar-item
      href=&quot;https://google.com&quot;
      target=&quot;_blank&quot;
      [icon]=&quot;iconOptions[iconIndex]&quot;&gt;Menu Item&lt;/ifx-sidebar-item&gt;
    &lt;ifx-sidebar-item
      href=&quot;https://google.com&quot;
      target=&quot;_blank&quot;
      [icon]=&quot;iconOptions[iconIndex]&quot;&gt;Menu Item&lt;/ifx-sidebar-item&gt;
    &lt;ifx-sidebar-item
      href=&quot;https://google.com&quot;
      target=&quot;_blank&quot;
      [icon]=&quot;iconOptions[iconIndex]&quot;&gt;Menu Item&lt;/ifx-sidebar-item&gt;
    &lt;ifx-sidebar-item [icon]=&quot;iconOptions[iconIndex]&quot;&gt;
      &lt;ifx-sidebar-item
        href=&quot;https://google.com&quot;
        target=&quot;_blank&quot;
        [icon]=&quot;iconOptions[iconIndex]&quot;&gt;Menu Item&lt;/ifx-sidebar-item&gt;
      &lt;ifx-sidebar-item [icon]=&quot;iconOptions[iconIndex]&quot;&gt;
        &lt;ifx-sidebar-item [icon]=&quot;iconOptions[iconIndex]&quot;&gt;Sub menu item&lt;/ifx-sidebar-item&gt;
        &lt;ifx-sidebar-item
          [active]=&quot;true&quot;
          [icon]=&quot;iconOptions[iconIndex]&quot;&gt;Sub menu item&lt;/ifx-sidebar-item&gt;
        &lt;ifx-sidebar-item [icon]=&quot;iconOptions[iconIndex]&quot;&gt;Sub menu item&lt;/ifx-sidebar-item&gt;
      &lt;/ifx-sidebar-item&gt;
      &lt;ifx-sidebar-item
        href=&quot;https://google.com&quot;
        target=&quot;_blank&quot;
        [icon]=&quot;iconOptions[iconIndex]&quot;&gt;Menu Item&lt;/ifx-sidebar-item&gt;
      &lt;ifx-sidebar-item
        href=&quot;https://google.com&quot;
        target=&quot;_blank&quot;
        [icon]=&quot;iconOptions[iconIndex]&quot;&gt;Menu Item&lt;/ifx-sidebar-item&gt;
    &lt;/ifx-sidebar-item&gt;
    &lt;ifx-sidebar-title&gt;Items group&lt;/ifx-sidebar-title&gt;
    &lt;ifx-sidebar-item
      href=&quot;https://google.com&quot;
      target=&quot;_self&quot;
      number-indicator=&quot;&quot;
      isactionitem=&quot;false&quot;
      [active]=&quot;false&quot;
      [icon]=&quot;iconOptions[iconIndex]&quot;&gt;Item 1&lt;/ifx-sidebar-item&gt;
    &lt;ifx-sidebar-item
      href=&quot;https://google.com&quot;
      target=&quot;_blank&quot;
      [icon]=&quot;iconOptions[iconIndex]&quot;&gt;Item 2&lt;/ifx-sidebar-item&gt;
  &lt;/ifx-sidebar&gt;`;applicationName="Application Name";showHeader=!0;showFooter=!0;initialCollapse=!0;collapsed=!1;collapsible=!1;positionOptions=["left","right"];positionIndex=0;imprint="https://yourwebsite.com/imprint";termsOfUse="https://yourwebsite.com/terms";privacyPolicy="https://yourwebsite.com/privacy-policy";copyrightText="\xA9 1999 - 2026 Infineon Technologies AG";iconOptions=["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];iconIndex=0;hideMenuLabel="Hide Menu";logoHref="http://google.com";logoHrefTargetOptions=["_self","_blank","_parent"];logoHrefTargetIndex=0;footerHrefTargetOptions=["_self","_blank","_parent"];footerHrefTargetIndex=1;updateApplicationName(t){this.applicationName=t}handleShowHeaderChange(){this.showHeader=!this.showHeader}handleShowFooterChange(){this.showFooter=!this.showFooter}handleInitialCollapseChange(){this.initialCollapse=!this.initialCollapse}handleCollapsedChange(){this.collapsed=!this.collapsed}handleCollapsibleChange(){this.collapsible=!this.collapsible}handlePositionChange(){this.positionIndex=(this.positionIndex+1)%this.positionOptions.length}updateImprint(t){this.imprint=t}updateTermsOfUse(t){this.termsOfUse=t}updatePrivacyPolicy(t){this.privacyPolicy=t}updateCopyrightText(t){this.copyrightText=t}handleIconChange(){this.iconIndex=(this.iconIndex+1)%this.iconOptions.length}updateHideMenuLabel(t){this.hideMenuLabel=t}updateLogoHref(t){this.logoHref=t}handleLogoHrefTargetChange(){this.logoHrefTargetIndex=(this.logoHrefTargetIndex+1)%this.logoHrefTargetOptions.length}handleFooterHrefTargetChange(){this.footerHrefTargetIndex=(this.footerHrefTargetIndex+1)%this.footerHrefTargetOptions.length}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleSidebarCollapseChange(t){console.log("ifxSidebarCollapseChange:",t)}handleSidebarLogoClick(t){console.log("ifxSidebarLogoClick:",t)}handleSidebarActionItem(t){console.log("ifxSidebarActionItem:",t)}handleSidebarMenu(t){console.log("ifxSidebarMenu:",t)}handleSidebarNavigationItem(t){console.log("ifxSidebarNavigationItem:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-sidebar-example"]],standalone:!1,decls:137,vars:56,consts:[["footer-target","_blank",3,"applicationName","collapsible","collapsed","showHeader","showFooter","initialCollapse","termsOfUse","imprint","privacyPolicy","copyrightText","position","logoHref","logoHrefTarget","hideMenuLabel","footerHrefTarget"],[3,"ifxSidebarCollapseChange","ifxSidebarLogoClick","ifxSidebarActionItem","ifxSidebarMenu","ifxSidebarNavigationItem"],["href","https://google.com","target","_blank",3,"ifxSidebarCollapseChange","ifxSidebarLogoClick","ifxSidebarActionItem","ifxSidebarMenu","ifxSidebarNavigationItem","icon"],["href","https://google.com","target","_blank",3,"icon"],[3,"icon"],[3,"active","icon"],["href","https://google.com","target","_self","number-indicator","","isactionitem","false",3,"active","icon"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","applicationName","type","text",3,"ifxInput","value"],["label","imprint","type","text",3,"ifxInput","value"],["label","termsOfUse","type","text",3,"ifxInput","value"],["label","privacyPolicy","type","text",3,"ifxInput","value"],["label","copyrightText","type","text",3,"ifxInput","value"],["label","hideMenuLabel","type","text",3,"ifxInput","value"],["label","logoHref","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-sidebar",0)(1,"ifx-sidebar-title",1),m("ifxSidebarCollapseChange",function(a){return e.handleSidebarCollapseChange(a)})("ifxSidebarLogoClick",function(a){return e.handleSidebarLogoClick(a)})("ifxSidebarActionItem",function(a){return e.handleSidebarActionItem(a)})("ifxSidebarMenu",function(a){return e.handleSidebarMenu(a)})("ifxSidebarNavigationItem",function(a){return e.handleSidebarNavigationItem(a)}),s(2,"Menu Items"),o(),l(3,"ifx-sidebar-item",2),m("ifxSidebarCollapseChange",function(a){return e.handleSidebarCollapseChange(a)})("ifxSidebarLogoClick",function(a){return e.handleSidebarLogoClick(a)})("ifxSidebarActionItem",function(a){return e.handleSidebarActionItem(a)})("ifxSidebarMenu",function(a){return e.handleSidebarMenu(a)})("ifxSidebarNavigationItem",function(a){return e.handleSidebarNavigationItem(a)}),s(4,"Menu Item"),o(),l(5,"ifx-sidebar-item",3),s(6,"Menu Item"),o(),l(7,"ifx-sidebar-item",3),s(8,"Menu Item"),o(),l(9,"ifx-sidebar-item",3),s(10,"Menu Item"),o(),l(11,"ifx-sidebar-item",4)(12,"ifx-sidebar-item",3),s(13,"Menu Item"),o(),l(14,"ifx-sidebar-item",4)(15,"ifx-sidebar-item",4),s(16,"Sub menu item"),o(),l(17,"ifx-sidebar-item",5),s(18,"Sub menu item"),o(),l(19,"ifx-sidebar-item",4),s(20,"Sub menu item"),o()(),l(21,"ifx-sidebar-item",3),s(22,"Menu Item"),o(),l(23,"ifx-sidebar-item",3),s(24,"Menu Item"),o()(),l(25,"ifx-sidebar-title"),s(26,"Items group"),o(),l(27,"ifx-sidebar-item",6),s(28,"Item 1"),o(),l(29,"ifx-sidebar-item",3),s(30,"Item 2"),o()(),l(31,"h3",7),s(32,"Controls"),o(),l(33,"div",8)(34,"ifx-button",9),m("click",function(){return e.handleShowHeaderChange()}),s(35,"Toggle ShowHeader"),o(),l(36,"ifx-button",9),m("click",function(){return e.handleShowFooterChange()}),s(37,"Toggle ShowFooter"),o(),l(38,"ifx-button",9),m("click",function(){return e.handleInitialCollapseChange()}),s(39,"Toggle InitialCollapse"),o(),l(40,"ifx-button",9),m("click",function(){return e.handleCollapsedChange()}),s(41,"Toggle Collapsed"),o(),l(42,"ifx-button",9),m("click",function(){return e.handleCollapsibleChange()}),s(43,"Toggle Collapsible"),o(),l(44,"ifx-button",9),m("click",function(){return e.handlePositionChange()}),s(45,"Toggle Position"),o(),l(46,"ifx-button",9),m("click",function(){return e.handleIconChange()}),s(47,"Toggle Icon"),o(),l(48,"ifx-button",9),m("click",function(){return e.handleLogoHrefTargetChange()}),s(49,"Toggle LogoHrefTarget"),o(),l(50,"ifx-button",9),m("click",function(){return e.handleFooterHrefTargetChange()}),s(51,"Toggle FooterHrefTarget"),o()(),l(52,"div",10)(53,"ifx-text-field",11),m("ifxInput",function(a){return e.updateApplicationName(e.getControlInputValue(a))}),o(),l(54,"ifx-text-field",12),m("ifxInput",function(a){return e.updateImprint(e.getControlInputValue(a))}),o(),l(55,"ifx-text-field",13),m("ifxInput",function(a){return e.updateTermsOfUse(e.getControlInputValue(a))}),o(),l(56,"ifx-text-field",14),m("ifxInput",function(a){return e.updatePrivacyPolicy(e.getControlInputValue(a))}),o(),l(57,"ifx-text-field",15),m("ifxInput",function(a){return e.updateCopyrightText(e.getControlInputValue(a))}),o(),l(58,"ifx-text-field",16),m("ifxInput",function(a){return e.updateHideMenuLabel(e.getControlInputValue(a))}),o(),l(59,"ifx-text-field",17),m("ifxInput",function(a){return e.updateLogoHref(e.getControlInputValue(a))}),o()(),l(60,"div",18)(61,"div")(62,"b"),s(63,"applicationName:"),o(),s(64),o(),l(65,"div")(66,"b"),s(67,"showHeader:"),o(),s(68),o(),l(69,"div")(70,"b"),s(71,"showFooter:"),o(),s(72),o(),l(73,"div")(74,"b"),s(75,"initialCollapse:"),o(),s(76),o(),l(77,"div")(78,"b"),s(79,"collapsed:"),o(),s(80),o(),l(81,"div")(82,"b"),s(83,"collapsible:"),o(),s(84),o(),l(85,"div")(86,"b"),s(87,"position:"),o(),s(88),o(),l(89,"div")(90,"b"),s(91,"imprint:"),o(),s(92),o(),l(93,"div")(94,"b"),s(95,"termsOfUse:"),o(),s(96),o(),l(97,"div")(98,"b"),s(99,"privacyPolicy:"),o(),s(100),o(),l(101,"div")(102,"b"),s(103,"copyrightText:"),o(),s(104),o(),l(105,"div")(106,"b"),s(107,"icon:"),o(),s(108),o(),l(109,"div")(110,"b"),s(111,"hideMenuLabel:"),o(),s(112),o(),l(113,"div")(114,"b"),s(115,"logoHref:"),o(),s(116),o(),l(117,"div")(118,"b"),s(119,"logoHrefTarget:"),o(),s(120),o(),l(121,"div")(122,"b"),s(123,"footerHrefTarget:"),o(),s(124),o()(),l(125,"details",19)(126,"summary"),s(127,"View Code"),o(),l(128,"div",20)(129,"h3"),s(130,"ifx-sidebar-example.ts"),o(),l(131,"pre"),b(132,"code",21),o(),l(133,"h3"),s(134,"ifx-sidebar-example.html"),o(),l(135,"pre"),b(136,"code",22),o()()()),i&2&&(p("applicationName",e.applicationName)("collapsible",e.collapsible)("collapsed",e.collapsed)("showHeader",e.showHeader)("showFooter",e.showFooter)("initialCollapse",e.initialCollapse)("termsOfUse",e.termsOfUse)("imprint",e.imprint)("privacyPolicy",e.privacyPolicy)("copyrightText",e.copyrightText)("position",e.positionOptions[e.positionIndex])("logoHref",e.logoHref)("logoHrefTarget",e.logoHrefTargetOptions[e.logoHrefTargetIndex])("hideMenuLabel",e.hideMenuLabel)("footerHrefTarget",e.footerHrefTargetOptions[e.footerHrefTargetIndex]),d(3),p("icon",e.iconOptions[e.iconIndex]),d(2),p("icon",e.iconOptions[e.iconIndex]),d(2),p("icon",e.iconOptions[e.iconIndex]),d(2),p("icon",e.iconOptions[e.iconIndex]),d(2),p("icon",e.iconOptions[e.iconIndex]),d(),p("icon",e.iconOptions[e.iconIndex]),d(2),p("icon",e.iconOptions[e.iconIndex]),d(),p("icon",e.iconOptions[e.iconIndex]),d(2),p("active",!0)("icon",e.iconOptions[e.iconIndex]),d(2),p("icon",e.iconOptions[e.iconIndex]),d(2),p("icon",e.iconOptions[e.iconIndex]),d(2),p("icon",e.iconOptions[e.iconIndex]),d(4),p("active",!1)("icon",e.iconOptions[e.iconIndex]),d(2),p("icon",e.iconOptions[e.iconIndex]),d(24),p("value",e.stringifyValue(e.applicationName)),d(),p("value",e.stringifyValue(e.imprint)),d(),p("value",e.stringifyValue(e.termsOfUse)),d(),p("value",e.stringifyValue(e.privacyPolicy)),d(),p("value",e.stringifyValue(e.copyrightText)),d(),p("value",e.stringifyValue(e.hideMenuLabel)),d(),p("value",e.stringifyValue(e.logoHref)),d(5),h(" ",e.stringifyValue(e.applicationName)),d(4),h(" ",e.stringifyValue(e.showHeader)),d(4),h(" ",e.stringifyValue(e.showFooter)),d(4),h(" ",e.stringifyValue(e.initialCollapse)),d(4),h(" ",e.stringifyValue(e.collapsed)),d(4),h(" ",e.stringifyValue(e.collapsible)),d(4),h(" ",e.stringifyValue(e.positionOptions[e.positionIndex])),d(4),h(" ",e.stringifyValue(e.imprint)),d(4),h(" ",e.stringifyValue(e.termsOfUse)),d(4),h(" ",e.stringifyValue(e.privacyPolicy)),d(4),h(" ",e.stringifyValue(e.copyrightText)),d(4),h(" ",e.stringifyValue(e.iconOptions[e.iconIndex])),d(4),h(" ",e.stringifyValue(e.hideMenuLabel)),d(4),h(" ",e.stringifyValue(e.logoHref)),d(4),h(" ",e.stringifyValue(e.logoHrefTargetOptions[e.logoHrefTargetIndex])),d(4),h(" ",e.stringifyValue(e.footerHrefTargetOptions[e.footerHrefTargetIndex])),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,Cg,Eg,wg,O,N],encapsulation:2})};var wa=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-notification-example',
  templateUrl: './ifx-notification-example.html',
  styleUrl: './ifx-notification-example.scss',
  standalone: false
})
export class IfxNotificationExample {

  protected readonly variantOptions = ["success","locked","error","neutral"];
  protected variantIndex = 0;
  protected readonly iconOptions = ["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];
  protected iconIndex = 0;
  protected linkText = "Link";
  protected linkHref = "https://www.example.com";
  protected readonly linkTargetOptions = ["_blank","_self","_parent"];
  protected linkTargetIndex = 0;

  protected handleVariantChange() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
  }

  protected handleIconChange() {
    this.iconIndex = (this.iconIndex + 1) % this.iconOptions.length;
  }

  protected updateLinkText(value: string) {
    this.linkText = value;
  }

  protected updateLinkHref(value: string) {
    this.linkHref = value;
  }

  protected handleLinkTargetChange() {
    this.linkTargetIndex = (this.linkTargetIndex + 1) % this.linkTargetOptions.length;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

}`;htmlCode=`  &lt;ifx-notification
    [icon]=&quot;iconOptions[iconIndex]&quot;
    [variant]=&quot;variantOptions[variantIndex]&quot;
    [linkText]=&quot;linkText&quot;
    [linkHref]=&quot;linkHref&quot;
    [linkTarget]=&quot;linkTargetOptions[linkTargetIndex]&quot;&gt;Sample Notification&lt;/ifx-notification&gt;`;variantOptions=["success","locked","error","neutral"];variantIndex=0;iconOptions=["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];iconIndex=0;linkText="Link";linkHref="https://www.example.com";linkTargetOptions=["_blank","_self","_parent"];linkTargetIndex=0;handleVariantChange(){this.variantIndex=(this.variantIndex+1)%this.variantOptions.length}handleIconChange(){this.iconIndex=(this.iconIndex+1)%this.iconOptions.length}updateLinkText(t){this.linkText=t}updateLinkHref(t){this.linkHref=t}handleLinkTargetChange(){this.linkTargetIndex=(this.linkTargetIndex+1)%this.linkTargetOptions.length}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-notification-example"]],standalone:!1,decls:47,vars:14,consts:[[3,"icon","variant","linkText","linkHref","linkTarget"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","linkText","type","text",3,"ifxInput","value"],["label","linkHref","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-notification",0),s(1,"Sample Notification"),o(),l(2,"h3",1),s(3,"Controls"),o(),l(4,"div",2)(5,"ifx-button",3),m("click",function(){return e.handleVariantChange()}),s(6,"Toggle Variant"),o(),l(7,"ifx-button",3),m("click",function(){return e.handleIconChange()}),s(8,"Toggle Icon"),o(),l(9,"ifx-button",3),m("click",function(){return e.handleLinkTargetChange()}),s(10,"Toggle LinkTarget"),o()(),l(11,"div",4)(12,"ifx-text-field",5),m("ifxInput",function(a){return e.updateLinkText(e.getControlInputValue(a))}),o(),l(13,"ifx-text-field",6),m("ifxInput",function(a){return e.updateLinkHref(e.getControlInputValue(a))}),o()(),l(14,"div",7)(15,"div")(16,"b"),s(17,"variant:"),o(),s(18),o(),l(19,"div")(20,"b"),s(21,"icon:"),o(),s(22),o(),l(23,"div")(24,"b"),s(25,"linkText:"),o(),s(26),o(),l(27,"div")(28,"b"),s(29,"linkHref:"),o(),s(30),o(),l(31,"div")(32,"b"),s(33,"linkTarget:"),o(),s(34),o()(),l(35,"details",8)(36,"summary"),s(37,"View Code"),o(),l(38,"div",9)(39,"h3"),s(40,"ifx-notification-example.ts"),o(),l(41,"pre"),b(42,"code",10),o(),l(43,"h3"),s(44,"ifx-notification-example.html"),o(),l(45,"pre"),b(46,"code",11),o()()()),i&2&&(p("icon",e.iconOptions[e.iconIndex])("variant",e.variantOptions[e.variantIndex])("linkText",e.linkText)("linkHref",e.linkHref)("linkTarget",e.linkTargetOptions[e.linkTargetIndex]),d(12),p("value",e.stringifyValue(e.linkText)),d(),p("value",e.stringifyValue(e.linkHref)),d(5),h(" ",e.stringifyValue(e.variantOptions[e.variantIndex])),d(4),h(" ",e.stringifyValue(e.iconOptions[e.iconIndex])),d(4),h(" ",e.stringifyValue(e.linkText)),d(4),h(" ",e.stringifyValue(e.linkHref)),d(4),h(" ",e.stringifyValue(e.linkTargetOptions[e.linkTargetIndex])),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,hg,O,N],encapsulation:2})};var _a=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-pagination-example',
  templateUrl: './ifx-pagination-example.html',
  styleUrl: './ifx-pagination-example.scss',
  standalone: false
})
export class IfxPaginationExample {

  protected currentPage = "1";
  protected total = "50";
  protected itemsPerPage = "[{\\"value\\":\\"10\\",\\"selected\\":true}, {\\"value\\":\\"20\\",\\"selected\\":false}, {\\"value\\":\\"30\\",\\"selected\\":false}, {\\"value\\":\\"all\\",\\"selected\\":false}]";
  protected showItemsPerPage = true;
  protected itemsPerPageLabel = "Result per Pages";

  protected updateCurrentPage(value: string) {
    this.currentPage = value;
  }

  protected updateTotal(value: string) {
    this.total = value;
  }

  protected updateItemsPerPage(value: string) {
    this.itemsPerPage = value;
  }

  protected handleShowItemsPerPageChange() {
    this.showItemsPerPage = !this.showItemsPerPage;
  }

  protected updateItemsPerPageLabel(value: string) {
    this.itemsPerPageLabel = value;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

  protected handleItemsPerPageChange(event: CustomEvent) {
    console.log('ifxItemsPerPageChange:', event);
    // Add your handler logic here
  }

  protected handlePageChange(event: CustomEvent) {
    console.log('ifxPageChange:', event);
    // Add your handler logic here
  }

}`;htmlCode=`  &lt;ifx-pagination
    (ifxItemsPerPageChange)=&quot;handleItemsPerPageChange($any($event))&quot;
    (ifxPageChange)=&quot;handlePageChange($any($event))&quot;
    [total]=&quot;total&quot;
    [currentPage]=&quot;currentPage&quot;
    [showItemsPerPage]=&quot;showItemsPerPage&quot;
    [itemsPerPage]=&quot;itemsPerPage&quot;
    [itemsPerPageLabel]=&quot;itemsPerPageLabel&quot;&gt;&lt;/ifx-pagination&gt;`;currentPage="1";total="50";itemsPerPage='[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}, {"value":"all","selected":false}]';showItemsPerPage=!0;itemsPerPageLabel="Result per Pages";updateCurrentPage(t){this.currentPage=t}updateTotal(t){this.total=t}updateItemsPerPage(t){this.itemsPerPage=t}handleShowItemsPerPageChange(){this.showItemsPerPage=!this.showItemsPerPage}updateItemsPerPageLabel(t){this.itemsPerPageLabel=t}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleItemsPerPageChange(t){console.log("ifxItemsPerPageChange:",t)}handlePageChange(t){console.log("ifxPageChange:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-pagination-example"]],standalone:!1,decls:44,vars:16,consts:[[3,"ifxItemsPerPageChange","ifxPageChange","total","currentPage","showItemsPerPage","itemsPerPage","itemsPerPageLabel"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","currentPage","type","text",3,"ifxInput","value"],["label","total","type","text",3,"ifxInput","value"],["label","itemsPerPage","type","text",3,"ifxInput","value"],["label","itemsPerPageLabel","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-pagination",0),m("ifxItemsPerPageChange",function(a){return e.handleItemsPerPageChange(a)})("ifxPageChange",function(a){return e.handlePageChange(a)}),o(),l(1,"h3",1),s(2,"Controls"),o(),l(3,"div",2)(4,"ifx-button",3),m("click",function(){return e.handleShowItemsPerPageChange()}),s(5,"Toggle ShowItemsPerPage"),o()(),l(6,"div",4)(7,"ifx-text-field",5),m("ifxInput",function(a){return e.updateCurrentPage(e.getControlInputValue(a))}),o(),l(8,"ifx-text-field",6),m("ifxInput",function(a){return e.updateTotal(e.getControlInputValue(a))}),o(),l(9,"ifx-text-field",7),m("ifxInput",function(a){return e.updateItemsPerPage(e.getControlInputValue(a))}),o(),l(10,"ifx-text-field",8),m("ifxInput",function(a){return e.updateItemsPerPageLabel(e.getControlInputValue(a))}),o()(),l(11,"div",9)(12,"div")(13,"b"),s(14,"currentPage:"),o(),s(15),o(),l(16,"div")(17,"b"),s(18,"total:"),o(),s(19),o(),l(20,"div")(21,"b"),s(22,"itemsPerPage:"),o(),s(23),o(),l(24,"div")(25,"b"),s(26,"showItemsPerPage:"),o(),s(27),o(),l(28,"div")(29,"b"),s(30,"itemsPerPageLabel:"),o(),s(31),o()(),l(32,"details",10)(33,"summary"),s(34,"View Code"),o(),l(35,"div",11)(36,"h3"),s(37,"ifx-pagination-example.ts"),o(),l(38,"pre"),b(39,"code",12),o(),l(40,"h3"),s(41,"ifx-pagination-example.html"),o(),l(42,"pre"),b(43,"code",13),o()()()),i&2&&(p("total",e.total)("currentPage",e.currentPage)("showItemsPerPage",e.showItemsPerPage)("itemsPerPage",e.itemsPerPage)("itemsPerPageLabel",e.itemsPerPageLabel),d(7),p("value",e.stringifyValue(e.currentPage)),d(),p("value",e.stringifyValue(e.total)),d(),p("value",e.stringifyValue(e.itemsPerPage)),d(),p("value",e.stringifyValue(e.itemsPerPageLabel)),d(5),h(" ",e.stringifyValue(e.currentPage)),d(4),h(" ",e.stringifyValue(e.total)),d(4),h(" ",e.stringifyValue(e.itemsPerPage)),d(4),h(" ",e.stringifyValue(e.showItemsPerPage)),d(4),h(" ",e.stringifyValue(e.itemsPerPageLabel)),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,gg,O,N],encapsulation:2})};var Sa=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-progress-bar-example',
  templateUrl: './ifx-progress-bar-example.html',
  styleUrl: './ifx-progress-bar-example.scss',
  standalone: false
})
export class IfxProgressBarExample {

  protected value = 50;
  protected showLabel = false;
  protected readonly sizeOptions = ["s","m"];
  protected sizeIndex = 1;

  protected updateValue(value: string) {
    this.value = Number(value);
  }

  protected handleShowLabelChange() {
    this.showLabel = !this.showLabel;
  }

  protected handleSizeChange() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

}`;htmlCode=`  &lt;ifx-progress-bar
    [value]=&quot;value&quot;
    [size]=&quot;sizeOptions[sizeIndex]&quot;
    [showLabel]=&quot;showLabel&quot;&gt;&lt;/ifx-progress-bar&gt;`;value=50;showLabel=!1;sizeOptions=["s","m"];sizeIndex=1;updateValue(t){this.value=Number(t)}handleShowLabelChange(){this.showLabel=!this.showLabel}handleSizeChange(){this.sizeIndex=(this.sizeIndex+1)%this.sizeOptions.length}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-progress-bar-example"]],standalone:!1,decls:35,vars:9,consts:[[3,"value","size","showLabel"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","value","type","number",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(b(0,"ifx-progress-bar",0),l(1,"h3",1),s(2,"Controls"),o(),l(3,"div",2)(4,"ifx-button",3),m("click",function(){return e.handleShowLabelChange()}),s(5,"Toggle ShowLabel"),o(),l(6,"ifx-button",3),m("click",function(){return e.handleSizeChange()}),s(7,"Toggle Size"),o()(),l(8,"div",4)(9,"ifx-text-field",5),m("ifxInput",function(a){return e.updateValue(e.getControlInputValue(a))}),o()(),l(10,"div",6)(11,"div")(12,"b"),s(13,"value:"),o(),s(14),o(),l(15,"div")(16,"b"),s(17,"showLabel:"),o(),s(18),o(),l(19,"div")(20,"b"),s(21,"size:"),o(),s(22),o()(),l(23,"details",7)(24,"summary"),s(25,"View Code"),o(),l(26,"div",8)(27,"h3"),s(28,"ifx-progress-bar-example.ts"),o(),l(29,"pre"),b(30,"code",9),o(),l(31,"h3"),s(32,"ifx-progress-bar-example.html"),o(),l(33,"pre"),b(34,"code",10),o()()()),i&2&&(p("value",e.value)("size",e.sizeOptions[e.sizeIndex])("showLabel",e.showLabel),d(9),p("value",e.stringifyValue(e.value)),d(5),h(" ",e.stringifyValue(e.value)),d(4),h(" ",e.stringifyValue(e.showLabel)),d(4),h(" ",e.stringifyValue(e.sizeOptions[e.sizeIndex])),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,vg,O,N],encapsulation:2})};var Da=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-radio-button-example',
  templateUrl: './ifx-radio-button-example.html',
  styleUrl: './ifx-radio-button-example.scss',
  standalone: false
})
export class IfxRadioButtonExample {

  protected error = false;
  protected disabled = false;
  protected checked = false;
  protected readonly sizeOptions = ["s","m"];
  protected sizeIndex = 0;
  protected name = "radio-button";
  protected value = "radio";

  protected handleErrorChange() {
    this.error = !this.error;
  }

  protected handleDisabledChange() {
    this.disabled = !this.disabled;
  }

  protected handleCheckedChange() {
    this.checked = !this.checked;
  }

  protected handleSizeChange() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected updateName(value: string) {
    this.name = value;
  }

  protected updateValue(value: string) {
    this.value = value;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

  protected handleChange(event: CustomEvent) {
    console.log('ifxChange:', event);
    // Add your handler logic here
  }

  protected handleError(event: CustomEvent) {
    console.log('ifxError:', event);
    // Add your handler logic here
  }

}`;htmlCode=`  &lt;ifx-radio-button
    (ifxChange)=&quot;handleChange($any($event))&quot;
    (ifxError)=&quot;handleError($any($event))&quot;
    [size]=&quot;sizeOptions[sizeIndex]&quot;
    [name]=&quot;name&quot;
    [value]=&quot;value&quot;
    [error]=&quot;error&quot;
    [disabled]=&quot;disabled&quot;
    [checked]=&quot;checked&quot;&gt;Text&lt;/ifx-radio-button&gt;`;error=!1;disabled=!1;checked=!1;sizeOptions=["s","m"];sizeIndex=0;name="radio-button";value="radio";handleErrorChange(){this.error=!this.error}handleDisabledChange(){this.disabled=!this.disabled}handleCheckedChange(){this.checked=!this.checked}handleSizeChange(){this.sizeIndex=(this.sizeIndex+1)%this.sizeOptions.length}updateName(t){this.name=t}updateValue(t){this.value=t}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleChange(t){console.log("ifxChange:",t)}handleError(t){console.log("ifxError:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-radio-button-example"]],standalone:!1,decls:53,vars:16,consts:[[3,"ifxChange","ifxError","size","name","value","error","disabled","checked"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","name","type","text",3,"ifxInput","value"],["label","value","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-radio-button",0),m("ifxChange",function(a){return e.handleChange(a)})("ifxError",function(a){return e.handleError(a)}),s(1,"Text"),o(),l(2,"h3",1),s(3,"Controls"),o(),l(4,"div",2)(5,"ifx-button",3),m("click",function(){return e.handleErrorChange()}),s(6,"Toggle Error"),o(),l(7,"ifx-button",3),m("click",function(){return e.handleDisabledChange()}),s(8,"Toggle Disabled"),o(),l(9,"ifx-button",3),m("click",function(){return e.handleCheckedChange()}),s(10,"Toggle Checked"),o(),l(11,"ifx-button",3),m("click",function(){return e.handleSizeChange()}),s(12,"Toggle Size"),o()(),l(13,"div",4)(14,"ifx-text-field",5),m("ifxInput",function(a){return e.updateName(e.getControlInputValue(a))}),o(),l(15,"ifx-text-field",6),m("ifxInput",function(a){return e.updateValue(e.getControlInputValue(a))}),o()(),l(16,"div",7)(17,"div")(18,"b"),s(19,"error:"),o(),s(20),o(),l(21,"div")(22,"b"),s(23,"disabled:"),o(),s(24),o(),l(25,"div")(26,"b"),s(27,"checked:"),o(),s(28),o(),l(29,"div")(30,"b"),s(31,"size:"),o(),s(32),o(),l(33,"div")(34,"b"),s(35,"name:"),o(),s(36),o(),l(37,"div")(38,"b"),s(39,"value:"),o(),s(40),o()(),l(41,"details",8)(42,"summary"),s(43,"View Code"),o(),l(44,"div",9)(45,"h3"),s(46,"ifx-radio-button-example.ts"),o(),l(47,"pre"),b(48,"code",10),o(),l(49,"h3"),s(50,"ifx-radio-button-example.html"),o(),l(51,"pre"),b(52,"code",11),o()()()),i&2&&(p("size",e.sizeOptions[e.sizeIndex])("name",e.name)("value",e.value)("error",e.error)("disabled",e.disabled)("checked",e.checked),d(14),p("value",e.stringifyValue(e.name)),d(),p("value",e.stringifyValue(e.value)),d(5),h(" ",e.stringifyValue(e.error)),d(4),h(" ",e.stringifyValue(e.disabled)),d(4),h(" ",e.stringifyValue(e.checked)),d(4),h(" ",e.stringifyValue(e.sizeOptions[e.sizeIndex])),d(4),h(" ",e.stringifyValue(e.name)),d(4),h(" ",e.stringifyValue(e.value)),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,Qo,O,N],encapsulation:2})};var Ta=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-radio-button-group-example',
  templateUrl: './ifx-radio-button-group-example.html',
  styleUrl: './ifx-radio-button-group-example.scss',
  standalone: false
})
export class IfxRadioButtonGroupExample {

  protected readonly alignmentOptions = ["vertical","horizontal"];
  protected alignmentIndex = 0;
  protected readonly sizeOptions = ["s","m"];
  protected sizeIndex = 1;
  protected showGroupLabel = false;
  protected groupLabelText = "Group Label";
  protected showCaption = false;
  protected captionText = "Caption text, description, error notification";
  protected showCaptionIcon = false;
  protected required = false;

  protected handleAlignmentChange() {
    this.alignmentIndex = (this.alignmentIndex + 1) % this.alignmentOptions.length;
  }

  protected handleSizeChange() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected handleShowGroupLabelChange() {
    this.showGroupLabel = !this.showGroupLabel;
  }

  protected updateGroupLabelText(value: string) {
    this.groupLabelText = value;
  }

  protected handleShowCaptionChange() {
    this.showCaption = !this.showCaption;
  }

  protected updateCaptionText(value: string) {
    this.captionText = value;
  }

  protected handleShowCaptionIconChange() {
    this.showCaptionIcon = !this.showCaptionIcon;
  }

  protected handleRequiredChange() {
    this.required = !this.required;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

  protected handleChange(event: CustomEvent) {
    console.log('ifxChange:', event);
    // Add your handler logic here
  }

  protected handleError(event: CustomEvent) {
    console.log('ifxError:', event);
    // Add your handler logic here
  }

}`;htmlCode=`  &lt;ifx-radio-button-group
    [alignment]=&quot;alignmentOptions[alignmentIndex]&quot;
    [groupLabelText]=&quot;groupLabelText&quot;
    [captionText]=&quot;captionText&quot;
    [size]=&quot;sizeOptions[sizeIndex]&quot;
    [showGroupLabel]=&quot;showGroupLabel&quot;
    [showCaption]=&quot;showCaption&quot;
    [showCaptionIcon]=&quot;showCaptionIcon&quot;
    [required]=&quot;required&quot;&gt;
    &lt;ifx-radio-button
      value=&quot;0&quot;
      [size]=&quot;sizeOptions[sizeIndex]&quot;&gt;Option 0&lt;/ifx-radio-button&gt;
    &lt;ifx-radio-button
      value=&quot;1&quot;
      [size]=&quot;sizeOptions[sizeIndex]&quot;&gt;Option 1&lt;/ifx-radio-button&gt;
    &lt;ifx-radio-button
      value=&quot;2&quot;
      [size]=&quot;sizeOptions[sizeIndex]&quot;&gt;Option 2&lt;/ifx-radio-button&gt;
  &lt;/ifx-radio-button-group&gt;`;alignmentOptions=["vertical","horizontal"];alignmentIndex=0;sizeOptions=["s","m"];sizeIndex=1;showGroupLabel=!1;groupLabelText="Group Label";showCaption=!1;captionText="Caption text, description, error notification";showCaptionIcon=!1;required=!1;handleAlignmentChange(){this.alignmentIndex=(this.alignmentIndex+1)%this.alignmentOptions.length}handleSizeChange(){this.sizeIndex=(this.sizeIndex+1)%this.sizeOptions.length}handleShowGroupLabelChange(){this.showGroupLabel=!this.showGroupLabel}updateGroupLabelText(t){this.groupLabelText=t}handleShowCaptionChange(){this.showCaption=!this.showCaption}updateCaptionText(t){this.captionText=t}handleShowCaptionIconChange(){this.showCaptionIcon=!this.showCaptionIcon}handleRequiredChange(){this.required=!this.required}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleChange(t){console.log("ifxChange:",t)}handleError(t){console.log("ifxError:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-radio-button-group-example"]],standalone:!1,decls:70,vars:23,consts:[[3,"alignment","groupLabelText","captionText","size","showGroupLabel","showCaption","showCaptionIcon","required"],["value","0",3,"size"],["value","1",3,"size"],["value","2",3,"size"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","groupLabelText","type","text",3,"ifxInput","value"],["label","captionText","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-radio-button-group",0)(1,"ifx-radio-button",1),s(2,"Option 0"),o(),l(3,"ifx-radio-button",2),s(4,"Option 1"),o(),l(5,"ifx-radio-button",3),s(6,"Option 2"),o()(),l(7,"h3",4),s(8,"Controls"),o(),l(9,"div",5)(10,"ifx-button",6),m("click",function(){return e.handleAlignmentChange()}),s(11,"Toggle Alignment"),o(),l(12,"ifx-button",6),m("click",function(){return e.handleSizeChange()}),s(13,"Toggle Size"),o(),l(14,"ifx-button",6),m("click",function(){return e.handleShowGroupLabelChange()}),s(15,"Toggle ShowGroupLabel"),o(),l(16,"ifx-button",6),m("click",function(){return e.handleShowCaptionChange()}),s(17,"Toggle ShowCaption"),o(),l(18,"ifx-button",6),m("click",function(){return e.handleShowCaptionIconChange()}),s(19,"Toggle ShowCaptionIcon"),o(),l(20,"ifx-button",6),m("click",function(){return e.handleRequiredChange()}),s(21,"Toggle Required"),o()(),l(22,"div",7)(23,"ifx-text-field",8),m("ifxInput",function(a){return e.updateGroupLabelText(e.getControlInputValue(a))}),o(),l(24,"ifx-text-field",9),m("ifxInput",function(a){return e.updateCaptionText(e.getControlInputValue(a))}),o()(),l(25,"div",10)(26,"div")(27,"b"),s(28,"alignment:"),o(),s(29),o(),l(30,"div")(31,"b"),s(32,"size:"),o(),s(33),o(),l(34,"div")(35,"b"),s(36,"showGroupLabel:"),o(),s(37),o(),l(38,"div")(39,"b"),s(40,"groupLabelText:"),o(),s(41),o(),l(42,"div")(43,"b"),s(44,"showCaption:"),o(),s(45),o(),l(46,"div")(47,"b"),s(48,"captionText:"),o(),s(49),o(),l(50,"div")(51,"b"),s(52,"showCaptionIcon:"),o(),s(53),o(),l(54,"div")(55,"b"),s(56,"required:"),o(),s(57),o()(),l(58,"details",11)(59,"summary"),s(60,"View Code"),o(),l(61,"div",12)(62,"h3"),s(63,"ifx-radio-button-group-example.ts"),o(),l(64,"pre"),b(65,"code",13),o(),l(66,"h3"),s(67,"ifx-radio-button-group-example.html"),o(),l(68,"pre"),b(69,"code",14),o()()()),i&2&&(p("alignment",e.alignmentOptions[e.alignmentIndex])("groupLabelText",e.groupLabelText)("captionText",e.captionText)("size",e.sizeOptions[e.sizeIndex])("showGroupLabel",e.showGroupLabel)("showCaption",e.showCaption)("showCaptionIcon",e.showCaptionIcon)("required",e.required),d(),p("size",e.sizeOptions[e.sizeIndex]),d(2),p("size",e.sizeOptions[e.sizeIndex]),d(2),p("size",e.sizeOptions[e.sizeIndex]),d(18),p("value",e.stringifyValue(e.groupLabelText)),d(),p("value",e.stringifyValue(e.captionText)),d(5),h(" ",e.stringifyValue(e.alignmentOptions[e.alignmentIndex])),d(4),h(" ",e.stringifyValue(e.sizeOptions[e.sizeIndex])),d(4),h(" ",e.stringifyValue(e.showGroupLabel)),d(4),h(" ",e.stringifyValue(e.groupLabelText)),d(4),h(" ",e.stringifyValue(e.showCaption)),d(4),h(" ",e.stringifyValue(e.captionText)),d(4),h(" ",e.stringifyValue(e.showCaptionIcon)),d(4),h(" ",e.stringifyValue(e.required)),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,Qo,xg,O,N],encapsulation:2})};var ka=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-search-bar-example',
  templateUrl: './ifx-search-bar-example.html',
  styleUrl: './ifx-search-bar-example.scss',
  standalone: false
})
export class IfxSearchBarExample {

  protected isOpen = true;
  protected disabled = false;
  protected value = "";
  protected autocomplete = "on";
  protected maxlength = 0;
  protected showCloseButton = true;

  protected handleIsOpenChange() {
    this.isOpen = !this.isOpen;
  }

  protected handleDisabledChange() {
    this.disabled = !this.disabled;
  }

  protected updateValue(value: string) {
    this.value = value;
  }

  protected updateAutocomplete(value: string) {
    this.autocomplete = value;
  }

  protected updateMaxlength(value: string) {
    this.maxlength = Number(value);
  }

  protected handleShowCloseButtonChange() {
    this.showCloseButton = !this.showCloseButton;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

  protected handleInput(event: CustomEvent) {
    console.log('ifxInput:', event);
    // Add your handler logic here
  }

  protected handleOpen(event: CustomEvent) {
    console.log('ifxOpen:', event);
    // Add your handler logic here
  }

}`;htmlCode=`  &lt;ifx-search-bar
    (ifxInput)=&quot;handleInput($any($event))&quot;
    (ifxOpen)=&quot;handleOpen($any($event))&quot;
    [isOpen]=&quot;isOpen&quot;
    [disabled]=&quot;disabled&quot;
    [value]=&quot;value&quot;
    [showCloseButton]=&quot;showCloseButton&quot;
    [autocomplete]=&quot;autocomplete&quot;
    [maxlength]=&quot;maxlength&quot;&gt;&lt;/ifx-search-bar&gt;`;isOpen=!0;disabled=!1;value="";autocomplete="on";maxlength=0;showCloseButton=!0;handleIsOpenChange(){this.isOpen=!this.isOpen}handleDisabledChange(){this.disabled=!this.disabled}updateValue(t){this.value=t}updateAutocomplete(t){this.autocomplete=t}updateMaxlength(t){this.maxlength=Number(t)}handleShowCloseButtonChange(){this.showCloseButton=!this.showCloseButton}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleInput(t){console.log("ifxInput:",t)}handleOpen(t){console.log("ifxOpen:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-search-bar-example"]],standalone:!1,decls:51,vars:17,consts:[[3,"ifxInput","ifxOpen","isOpen","disabled","value","showCloseButton","autocomplete","maxlength"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","value","type","text",3,"ifxInput","value"],["label","autocomplete","type","text",3,"ifxInput","value"],["label","maxlength","type","number",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-search-bar",0),m("ifxInput",function(a){return e.handleInput(a)})("ifxOpen",function(a){return e.handleOpen(a)}),o(),l(1,"h3",1),s(2,"Controls"),o(),l(3,"div",2)(4,"ifx-button",3),m("click",function(){return e.handleIsOpenChange()}),s(5,"Toggle IsOpen"),o(),l(6,"ifx-button",3),m("click",function(){return e.handleDisabledChange()}),s(7,"Toggle Disabled"),o(),l(8,"ifx-button",3),m("click",function(){return e.handleShowCloseButtonChange()}),s(9,"Toggle ShowCloseButton"),o()(),l(10,"div",4)(11,"ifx-text-field",5),m("ifxInput",function(a){return e.updateValue(e.getControlInputValue(a))}),o(),l(12,"ifx-text-field",6),m("ifxInput",function(a){return e.updateAutocomplete(e.getControlInputValue(a))}),o(),l(13,"ifx-text-field",7),m("ifxInput",function(a){return e.updateMaxlength(e.getControlInputValue(a))}),o()(),l(14,"div",8)(15,"div")(16,"b"),s(17,"isOpen:"),o(),s(18),o(),l(19,"div")(20,"b"),s(21,"disabled:"),o(),s(22),o(),l(23,"div")(24,"b"),s(25,"value:"),o(),s(26),o(),l(27,"div")(28,"b"),s(29,"autocomplete:"),o(),s(30),o(),l(31,"div")(32,"b"),s(33,"maxlength:"),o(),s(34),o(),l(35,"div")(36,"b"),s(37,"showCloseButton:"),o(),s(38),o()(),l(39,"details",9)(40,"summary"),s(41,"View Code"),o(),l(42,"div",10)(43,"h3"),s(44,"ifx-search-bar-example.ts"),o(),l(45,"pre"),b(46,"code",11),o(),l(47,"h3"),s(48,"ifx-search-bar-example.html"),o(),l(49,"pre"),b(50,"code",12),o()()()),i&2&&(p("isOpen",e.isOpen)("disabled",e.disabled)("value",e.value)("showCloseButton",e.showCloseButton)("autocomplete",e.autocomplete)("maxlength",e.maxlength),d(11),p("value",e.stringifyValue(e.value)),d(),p("value",e.stringifyValue(e.autocomplete)),d(),p("value",e.stringifyValue(e.maxlength)),d(5),h(" ",e.stringifyValue(e.isOpen)),d(4),h(" ",e.stringifyValue(e.disabled)),d(4),h(" ",e.stringifyValue(e.value)),d(4),h(" ",e.stringifyValue(e.autocomplete)),d(4),h(" ",e.stringifyValue(e.maxlength)),d(4),h(" ",e.stringifyValue(e.showCloseButton)),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,Ln,O,N],encapsulation:2})};var Ma=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-search-field-example',
  templateUrl: './ifx-search-field-example.html',
  styleUrl: './ifx-search-field-example.scss',
  standalone: false
})
export class IfxSearchFieldExample {

  protected showDeleteIcon = true;
  protected disabled = false;
  protected readonly sizeOptions = ["s","m"];
  protected sizeIndex = 1;
  protected placeholder = "Search...";
  protected maxlength = 0;
  protected value = "";
  protected autocomplete = "on";
  protected showSuggestions = false;
  protected enableHistory = true;
  protected maxSuggestions = 10;
  protected maxHistoryItems = 5;
  protected historyKey = "ifx-search-history";
  protected historyHeaderText = "Recent Searches";
  protected ariaLabelText = "Search field";
  protected deleteIconAriaLabel = "Clear search";
  protected historyDeleteAriaLabel = "Remove from history";
  protected dropdownAriaLabel = "Search suggestions and history";
  protected suggestionAriaLabel = "Search suggestion";
  protected historyItemAriaLabel = "Search history item";

  protected handleShowDeleteIconChange() {
    this.showDeleteIcon = !this.showDeleteIcon;
  }

  protected handleDisabledChange() {
    this.disabled = !this.disabled;
  }

  protected handleSizeChange() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected updatePlaceholder(value: string) {
    this.placeholder = value;
  }

  protected updateMaxlength(value: string) {
    this.maxlength = Number(value);
  }

  protected updateValue(value: string) {
    this.value = value;
  }

  protected updateAutocomplete(value: string) {
    this.autocomplete = value;
  }

  protected handleShowSuggestionsChange() {
    this.showSuggestions = !this.showSuggestions;
  }

  protected handleEnableHistoryChange() {
    this.enableHistory = !this.enableHistory;
  }

  protected updateMaxSuggestions(value: string) {
    this.maxSuggestions = Number(value);
  }

  protected updateMaxHistoryItems(value: string) {
    this.maxHistoryItems = Number(value);
  }

  protected updateHistoryKey(value: string) {
    this.historyKey = value;
  }

  protected updateHistoryHeaderText(value: string) {
    this.historyHeaderText = value;
  }

  protected updateAriaLabelText(value: string) {
    this.ariaLabelText = value;
  }

  protected updateDeleteIconAriaLabel(value: string) {
    this.deleteIconAriaLabel = value;
  }

  protected updateHistoryDeleteAriaLabel(value: string) {
    this.historyDeleteAriaLabel = value;
  }

  protected updateDropdownAriaLabel(value: string) {
    this.dropdownAriaLabel = value;
  }

  protected updateSuggestionAriaLabel(value: string) {
    this.suggestionAriaLabel = value;
  }

  protected updateHistoryItemAriaLabel(value: string) {
    this.historyItemAriaLabel = value;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

  protected handleBlur(event: CustomEvent) {
    console.log('ifxBlur:', event);
    // Add your handler logic here
  }

  protected handleFocus(event: CustomEvent) {
    console.log('ifxFocus:', event);
    // Add your handler logic here
  }

  protected handleInput(event: CustomEvent) {
    console.log('ifxInput:', event);
    // Add your handler logic here
  }

  protected handleSuggestionRequested(event: CustomEvent) {
    console.log('ifxSuggestionRequested:', event);
    // Add your handler logic here
  }

  protected handleSuggestionSelected(event: CustomEvent) {
    console.log('ifxSuggestionSelected:', event);
    // Add your handler logic here
  }

}`;htmlCode=`  &lt;ifx-search-field
    (ifxBlur)=&quot;handleBlur($any($event))&quot;
    (ifxFocus)=&quot;handleFocus($any($event))&quot;
    (ifxInput)=&quot;handleInput($any($event))&quot;
    (ifxSuggestionRequested)=&quot;handleSuggestionRequested($any($event))&quot;
    (ifxSuggestionSelected)=&quot;handleSuggestionSelected($any($event))&quot;
    [size]=&quot;sizeOptions[sizeIndex]&quot;
    [showDeleteIcon]=&quot;showDeleteIcon&quot;
    [showSuggestions]=&quot;showSuggestions&quot;
    [enableHistory]=&quot;enableHistory&quot;
    [maxSuggestions]=&quot;maxSuggestions&quot;
    [maxHistoryItems]=&quot;maxHistoryItems&quot;
    [historyKey]=&quot;historyKey&quot;
    [historyHeaderText]=&quot;historyHeaderText&quot;
    [value]=&quot;value&quot;
    [autocomplete]=&quot;autocomplete&quot;
    [placeholder]=&quot;placeholder&quot;
    [ariaLabelText]=&quot;ariaLabelText&quot;
    [deleteIconAriaLabel]=&quot;deleteIconAriaLabel&quot;
    [historyDeleteAriaLabel]=&quot;historyDeleteAriaLabel&quot;
    [dropdownAriaLabel]=&quot;dropdownAriaLabel&quot;
    [suggestionAriaLabel]=&quot;suggestionAriaLabel&quot;
    [historyItemAriaLabel]=&quot;historyItemAriaLabel&quot;
    [disabled]=&quot;disabled&quot;
    [maxlength]=&quot;maxlength&quot;&gt;&lt;/ifx-search-field&gt;`;showDeleteIcon=!0;disabled=!1;sizeOptions=["s","m"];sizeIndex=1;placeholder="Search...";maxlength=0;value="";autocomplete="on";showSuggestions=!1;enableHistory=!0;maxSuggestions=10;maxHistoryItems=5;historyKey="ifx-search-history";historyHeaderText="Recent Searches";ariaLabelText="Search field";deleteIconAriaLabel="Clear search";historyDeleteAriaLabel="Remove from history";dropdownAriaLabel="Search suggestions and history";suggestionAriaLabel="Search suggestion";historyItemAriaLabel="Search history item";handleShowDeleteIconChange(){this.showDeleteIcon=!this.showDeleteIcon}handleDisabledChange(){this.disabled=!this.disabled}handleSizeChange(){this.sizeIndex=(this.sizeIndex+1)%this.sizeOptions.length}updatePlaceholder(t){this.placeholder=t}updateMaxlength(t){this.maxlength=Number(t)}updateValue(t){this.value=t}updateAutocomplete(t){this.autocomplete=t}handleShowSuggestionsChange(){this.showSuggestions=!this.showSuggestions}handleEnableHistoryChange(){this.enableHistory=!this.enableHistory}updateMaxSuggestions(t){this.maxSuggestions=Number(t)}updateMaxHistoryItems(t){this.maxHistoryItems=Number(t)}updateHistoryKey(t){this.historyKey=t}updateHistoryHeaderText(t){this.historyHeaderText=t}updateAriaLabelText(t){this.ariaLabelText=t}updateDeleteIconAriaLabel(t){this.deleteIconAriaLabel=t}updateHistoryDeleteAriaLabel(t){this.historyDeleteAriaLabel=t}updateDropdownAriaLabel(t){this.dropdownAriaLabel=t}updateSuggestionAriaLabel(t){this.suggestionAriaLabel=t}updateHistoryItemAriaLabel(t){this.historyItemAriaLabel=t}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleBlur(t){console.log("ifxBlur:",t)}handleFocus(t){console.log("ifxFocus:",t)}handleInput(t){console.log("ifxInput:",t)}handleSuggestionRequested(t){console.log("ifxSuggestionRequested:",t)}handleSuggestionSelected(t){console.log("ifxSuggestionSelected:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-search-field-example"]],standalone:!1,decls:118,vars:54,consts:[[3,"ifxBlur","ifxFocus","ifxInput","ifxSuggestionRequested","ifxSuggestionSelected","size","showDeleteIcon","showSuggestions","enableHistory","maxSuggestions","maxHistoryItems","historyKey","historyHeaderText","value","autocomplete","placeholder","ariaLabelText","deleteIconAriaLabel","historyDeleteAriaLabel","dropdownAriaLabel","suggestionAriaLabel","historyItemAriaLabel","disabled","maxlength"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","placeholder","type","text",3,"ifxInput","value"],["label","maxlength","type","number",3,"ifxInput","value"],["label","value","type","text",3,"ifxInput","value"],["label","autocomplete","type","text",3,"ifxInput","value"],["label","maxSuggestions","type","number",3,"ifxInput","value"],["label","maxHistoryItems","type","number",3,"ifxInput","value"],["label","historyKey","type","text",3,"ifxInput","value"],["label","historyHeaderText","type","text",3,"ifxInput","value"],["label","ariaLabelText","type","text",3,"ifxInput","value"],["label","deleteIconAriaLabel","type","text",3,"ifxInput","value"],["label","historyDeleteAriaLabel","type","text",3,"ifxInput","value"],["label","dropdownAriaLabel","type","text",3,"ifxInput","value"],["label","suggestionAriaLabel","type","text",3,"ifxInput","value"],["label","historyItemAriaLabel","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-search-field",0),m("ifxBlur",function(a){return e.handleBlur(a)})("ifxFocus",function(a){return e.handleFocus(a)})("ifxInput",function(a){return e.handleInput(a)})("ifxSuggestionRequested",function(a){return e.handleSuggestionRequested(a)})("ifxSuggestionSelected",function(a){return e.handleSuggestionSelected(a)}),o(),l(1,"h3",1),s(2,"Controls"),o(),l(3,"div",2)(4,"ifx-button",3),m("click",function(){return e.handleShowDeleteIconChange()}),s(5,"Toggle ShowDeleteIcon"),o(),l(6,"ifx-button",3),m("click",function(){return e.handleDisabledChange()}),s(7,"Toggle Disabled"),o(),l(8,"ifx-button",3),m("click",function(){return e.handleSizeChange()}),s(9,"Toggle Size"),o(),l(10,"ifx-button",3),m("click",function(){return e.handleShowSuggestionsChange()}),s(11,"Toggle ShowSuggestions"),o(),l(12,"ifx-button",3),m("click",function(){return e.handleEnableHistoryChange()}),s(13,"Toggle EnableHistory"),o()(),l(14,"div",4)(15,"ifx-text-field",5),m("ifxInput",function(a){return e.updatePlaceholder(e.getControlInputValue(a))}),o(),l(16,"ifx-text-field",6),m("ifxInput",function(a){return e.updateMaxlength(e.getControlInputValue(a))}),o(),l(17,"ifx-text-field",7),m("ifxInput",function(a){return e.updateValue(e.getControlInputValue(a))}),o(),l(18,"ifx-text-field",8),m("ifxInput",function(a){return e.updateAutocomplete(e.getControlInputValue(a))}),o(),l(19,"ifx-text-field",9),m("ifxInput",function(a){return e.updateMaxSuggestions(e.getControlInputValue(a))}),o(),l(20,"ifx-text-field",10),m("ifxInput",function(a){return e.updateMaxHistoryItems(e.getControlInputValue(a))}),o(),l(21,"ifx-text-field",11),m("ifxInput",function(a){return e.updateHistoryKey(e.getControlInputValue(a))}),o(),l(22,"ifx-text-field",12),m("ifxInput",function(a){return e.updateHistoryHeaderText(e.getControlInputValue(a))}),o(),l(23,"ifx-text-field",13),m("ifxInput",function(a){return e.updateAriaLabelText(e.getControlInputValue(a))}),o(),l(24,"ifx-text-field",14),m("ifxInput",function(a){return e.updateDeleteIconAriaLabel(e.getControlInputValue(a))}),o(),l(25,"ifx-text-field",15),m("ifxInput",function(a){return e.updateHistoryDeleteAriaLabel(e.getControlInputValue(a))}),o(),l(26,"ifx-text-field",16),m("ifxInput",function(a){return e.updateDropdownAriaLabel(e.getControlInputValue(a))}),o(),l(27,"ifx-text-field",17),m("ifxInput",function(a){return e.updateSuggestionAriaLabel(e.getControlInputValue(a))}),o(),l(28,"ifx-text-field",18),m("ifxInput",function(a){return e.updateHistoryItemAriaLabel(e.getControlInputValue(a))}),o()(),l(29,"div",19)(30,"div")(31,"b"),s(32,"showDeleteIcon:"),o(),s(33),o(),l(34,"div")(35,"b"),s(36,"disabled:"),o(),s(37),o(),l(38,"div")(39,"b"),s(40,"size:"),o(),s(41),o(),l(42,"div")(43,"b"),s(44,"placeholder:"),o(),s(45),o(),l(46,"div")(47,"b"),s(48,"maxlength:"),o(),s(49),o(),l(50,"div")(51,"b"),s(52,"value:"),o(),s(53),o(),l(54,"div")(55,"b"),s(56,"autocomplete:"),o(),s(57),o(),l(58,"div")(59,"b"),s(60,"showSuggestions:"),o(),s(61),o(),l(62,"div")(63,"b"),s(64,"enableHistory:"),o(),s(65),o(),l(66,"div")(67,"b"),s(68,"maxSuggestions:"),o(),s(69),o(),l(70,"div")(71,"b"),s(72,"maxHistoryItems:"),o(),s(73),o(),l(74,"div")(75,"b"),s(76,"historyKey:"),o(),s(77),o(),l(78,"div")(79,"b"),s(80,"historyHeaderText:"),o(),s(81),o(),l(82,"div")(83,"b"),s(84,"ariaLabelText:"),o(),s(85),o(),l(86,"div")(87,"b"),s(88,"deleteIconAriaLabel:"),o(),s(89),o(),l(90,"div")(91,"b"),s(92,"historyDeleteAriaLabel:"),o(),s(93),o(),l(94,"div")(95,"b"),s(96,"dropdownAriaLabel:"),o(),s(97),o(),l(98,"div")(99,"b"),s(100,"suggestionAriaLabel:"),o(),s(101),o(),l(102,"div")(103,"b"),s(104,"historyItemAriaLabel:"),o(),s(105),o()(),l(106,"details",20)(107,"summary"),s(108,"View Code"),o(),l(109,"div",21)(110,"h3"),s(111,"ifx-search-field-example.ts"),o(),l(112,"pre"),b(113,"code",22),o(),l(114,"h3"),s(115,"ifx-search-field-example.html"),o(),l(116,"pre"),b(117,"code",23),o()()()),i&2&&(p("size",e.sizeOptions[e.sizeIndex])("showDeleteIcon",e.showDeleteIcon)("showSuggestions",e.showSuggestions)("enableHistory",e.enableHistory)("maxSuggestions",e.maxSuggestions)("maxHistoryItems",e.maxHistoryItems)("historyKey",e.historyKey)("historyHeaderText",e.historyHeaderText)("value",e.value)("autocomplete",e.autocomplete)("placeholder",e.placeholder)("ariaLabelText",e.ariaLabelText)("deleteIconAriaLabel",e.deleteIconAriaLabel)("historyDeleteAriaLabel",e.historyDeleteAriaLabel)("dropdownAriaLabel",e.dropdownAriaLabel)("suggestionAriaLabel",e.suggestionAriaLabel)("historyItemAriaLabel",e.historyItemAriaLabel)("disabled",e.disabled)("maxlength",e.maxlength),d(15),p("value",e.stringifyValue(e.placeholder)),d(),p("value",e.stringifyValue(e.maxlength)),d(),p("value",e.stringifyValue(e.value)),d(),p("value",e.stringifyValue(e.autocomplete)),d(),p("value",e.stringifyValue(e.maxSuggestions)),d(),p("value",e.stringifyValue(e.maxHistoryItems)),d(),p("value",e.stringifyValue(e.historyKey)),d(),p("value",e.stringifyValue(e.historyHeaderText)),d(),p("value",e.stringifyValue(e.ariaLabelText)),d(),p("value",e.stringifyValue(e.deleteIconAriaLabel)),d(),p("value",e.stringifyValue(e.historyDeleteAriaLabel)),d(),p("value",e.stringifyValue(e.dropdownAriaLabel)),d(),p("value",e.stringifyValue(e.suggestionAriaLabel)),d(),p("value",e.stringifyValue(e.historyItemAriaLabel)),d(5),h(" ",e.stringifyValue(e.showDeleteIcon)),d(4),h(" ",e.stringifyValue(e.disabled)),d(4),h(" ",e.stringifyValue(e.sizeOptions[e.sizeIndex])),d(4),h(" ",e.stringifyValue(e.placeholder)),d(4),h(" ",e.stringifyValue(e.maxlength)),d(4),h(" ",e.stringifyValue(e.value)),d(4),h(" ",e.stringifyValue(e.autocomplete)),d(4),h(" ",e.stringifyValue(e.showSuggestions)),d(4),h(" ",e.stringifyValue(e.enableHistory)),d(4),h(" ",e.stringifyValue(e.maxSuggestions)),d(4),h(" ",e.stringifyValue(e.maxHistoryItems)),d(4),h(" ",e.stringifyValue(e.historyKey)),d(4),h(" ",e.stringifyValue(e.historyHeaderText)),d(4),h(" ",e.stringifyValue(e.ariaLabelText)),d(4),h(" ",e.stringifyValue(e.deleteIconAriaLabel)),d(4),h(" ",e.stringifyValue(e.historyDeleteAriaLabel)),d(4),h(" ",e.stringifyValue(e.dropdownAriaLabel)),d(4),h(" ",e.stringifyValue(e.suggestionAriaLabel)),d(4),h(" ",e.stringifyValue(e.historyItemAriaLabel)),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,Ko,O,N],encapsulation:2})};var Aa=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-segmented-control-example',
  templateUrl: './ifx-segmented-control-example.html',
  styleUrl: './ifx-segmented-control-example.scss',
  standalone: false
})
export class IfxSegmentedControlExample {

  protected caption = "Caption text to describe the controls";
  protected label = "Group Label";
  protected readonly sizeOptions = ["regular","small"];
  protected sizeIndex = 0;
  protected readonly iconOptions = ["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];
  protected iconIndex = 0;
  protected value = "Value";
  protected error = false;
  protected required = false;

  protected updateCaption(value: string) {
    this.caption = value;
  }

  protected updateLabel(value: string) {
    this.label = value;
  }

  protected handleSizeChange() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected handleIconChange() {
    this.iconIndex = (this.iconIndex + 1) % this.iconOptions.length;
  }

  protected updateValue(value: string) {
    this.value = value;
  }

  protected handleErrorChange() {
    this.error = !this.error;
  }

  protected handleRequiredChange() {
    this.required = !this.required;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

  protected handleChange(event: CustomEvent) {
    console.log('ifxChange:', event);
    // Add your handler logic here
  }

  protected handleSegmentSelect(event: CustomEvent) {
    console.log('segmentSelect:', event);
    // Add your handler logic here
  }

}`;htmlCode=`  &lt;ifx-segmented-control
    [caption]=&quot;caption&quot;
    [label]=&quot;label&quot;
    [size]=&quot;sizeOptions[sizeIndex]&quot;
    [error]=&quot;error&quot;
    [required]=&quot;required&quot;&gt;
    &lt;ifx-segment
      [value]=&quot;value&quot;
      [icon]=&quot;iconOptions[iconIndex]&quot;&gt;&lt;/ifx-segment&gt;
    &lt;ifx-segment
      [value]=&quot;value&quot;
      [icon]=&quot;iconOptions[iconIndex]&quot;&gt;&lt;/ifx-segment&gt;
    &lt;ifx-segment
      [value]=&quot;value&quot;
      [icon]=&quot;iconOptions[iconIndex]&quot;&gt;&lt;/ifx-segment&gt;
    &lt;ifx-segment
      [value]=&quot;value&quot;
      [icon]=&quot;iconOptions[iconIndex]&quot;&gt;&lt;/ifx-segment&gt;
    &lt;ifx-segment
      [value]=&quot;value&quot;
      [icon]=&quot;iconOptions[iconIndex]&quot;&gt;&lt;/ifx-segment&gt;
  &lt;/ifx-segmented-control&gt;`;caption="Caption text to describe the controls";label="Group Label";sizeOptions=["regular","small"];sizeIndex=0;iconOptions=["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];iconIndex=0;value="Value";error=!1;required=!1;updateCaption(t){this.caption=t}updateLabel(t){this.label=t}handleSizeChange(){this.sizeIndex=(this.sizeIndex+1)%this.sizeOptions.length}handleIconChange(){this.iconIndex=(this.iconIndex+1)%this.iconOptions.length}updateValue(t){this.value=t}handleErrorChange(){this.error=!this.error}handleRequiredChange(){this.required=!this.required}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleChange(t){console.log("ifxChange:",t)}handleSegmentSelect(t){console.log("segmentSelect:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-segmented-control-example"]],standalone:!1,decls:62,vars:27,consts:[[3,"caption","label","size","error","required"],[3,"value","icon"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","caption","type","text",3,"ifxInput","value"],["label","label","type","text",3,"ifxInput","value"],["label","value","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-segmented-control",0),b(1,"ifx-segment",1)(2,"ifx-segment",1)(3,"ifx-segment",1)(4,"ifx-segment",1)(5,"ifx-segment",1),o(),l(6,"h3",2),s(7,"Controls"),o(),l(8,"div",3)(9,"ifx-button",4),m("click",function(){return e.handleSizeChange()}),s(10,"Toggle Size"),o(),l(11,"ifx-button",4),m("click",function(){return e.handleIconChange()}),s(12,"Toggle Icon"),o(),l(13,"ifx-button",4),m("click",function(){return e.handleErrorChange()}),s(14,"Toggle Error"),o(),l(15,"ifx-button",4),m("click",function(){return e.handleRequiredChange()}),s(16,"Toggle Required"),o()(),l(17,"div",5)(18,"ifx-text-field",6),m("ifxInput",function(a){return e.updateCaption(e.getControlInputValue(a))}),o(),l(19,"ifx-text-field",7),m("ifxInput",function(a){return e.updateLabel(e.getControlInputValue(a))}),o(),l(20,"ifx-text-field",8),m("ifxInput",function(a){return e.updateValue(e.getControlInputValue(a))}),o()(),l(21,"div",9)(22,"div")(23,"b"),s(24,"caption:"),o(),s(25),o(),l(26,"div")(27,"b"),s(28,"label:"),o(),s(29),o(),l(30,"div")(31,"b"),s(32,"size:"),o(),s(33),o(),l(34,"div")(35,"b"),s(36,"icon:"),o(),s(37),o(),l(38,"div")(39,"b"),s(40,"value:"),o(),s(41),o(),l(42,"div")(43,"b"),s(44,"error:"),o(),s(45),o(),l(46,"div")(47,"b"),s(48,"required:"),o(),s(49),o()(),l(50,"details",10)(51,"summary"),s(52,"View Code"),o(),l(53,"div",11)(54,"h3"),s(55,"ifx-segmented-control-example.ts"),o(),l(56,"pre"),b(57,"code",12),o(),l(58,"h3"),s(59,"ifx-segmented-control-example.html"),o(),l(60,"pre"),b(61,"code",13),o()()()),i&2&&(p("caption",e.caption)("label",e.label)("size",e.sizeOptions[e.sizeIndex])("error",e.error)("required",e.required),d(),p("value",e.value)("icon",e.iconOptions[e.iconIndex]),d(),p("value",e.value)("icon",e.iconOptions[e.iconIndex]),d(),p("value",e.value)("icon",e.iconOptions[e.iconIndex]),d(),p("value",e.value)("icon",e.iconOptions[e.iconIndex]),d(),p("value",e.value)("icon",e.iconOptions[e.iconIndex]),d(13),p("value",e.stringifyValue(e.caption)),d(),p("value",e.stringifyValue(e.label)),d(),p("value",e.stringifyValue(e.value)),d(5),h(" ",e.stringifyValue(e.caption)),d(4),h(" ",e.stringifyValue(e.label)),d(4),h(" ",e.stringifyValue(e.sizeOptions[e.sizeIndex])),d(4),h(" ",e.stringifyValue(e.iconOptions[e.iconIndex])),d(4),h(" ",e.stringifyValue(e.value)),d(4),h(" ",e.stringifyValue(e.error)),d(4),h(" ",e.stringifyValue(e.required)),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,bg,yg,O,N],encapsulation:2})};var Oa=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-select-example',
  templateUrl: './ifx-select-example.html',
  styleUrl: './ifx-select-example.scss',
  standalone: false
})
export class IfxSelectExample {

  protected readonly sizeOptions = ["s","m"];
  protected sizeIndex = 1;
  protected placeholder = true;
  protected placeholderValue = "Placeholder";
  protected error = false;
  protected label = "";
  protected disabled = false;
  protected caption = "";
  protected required = true;
  protected showSearch = true;
  protected showClearButton = true;
  protected searchPlaceholderValue = "Search...";
  protected options = "[{\\"value\\":\\"a\\",\\"label\\":\\"option a\\",\\"selected\\":false},{\\"value\\":\\"b\\",\\"label\\":\\"option b\\",\\"selected\\":false},{\\"value\\":\\"c\\",\\"label\\":\\"option c\\",\\"selected\\":false}]";

  protected handleSizeChange() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected handlePlaceholderChange() {
    this.placeholder = !this.placeholder;
  }

  protected updatePlaceholderValue(value: string) {
    this.placeholderValue = value;
  }

  protected handleErrorChange() {
    this.error = !this.error;
  }

  protected updateLabel(value: string) {
    this.label = value;
  }

  protected handleDisabledChange() {
    this.disabled = !this.disabled;
  }

  protected updateCaption(value: string) {
    this.caption = value;
  }

  protected handleRequiredChange() {
    this.required = !this.required;
  }

  protected handleShowSearchChange() {
    this.showSearch = !this.showSearch;
  }

  protected handleShowClearButtonChange() {
    this.showClearButton = !this.showClearButton;
  }

  protected updateSearchPlaceholderValue(value: string) {
    this.searchPlaceholderValue = value;
  }

  protected updateOptions(value: string) {
    this.options = value;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

  protected handleInput(event: CustomEvent) {
    console.log('ifxInput:', event);
    // Add your handler logic here
  }

  protected handleSelect(event: CustomEvent) {
    console.log('ifxSelect:', event);
    // Add your handler logic here
  }

}`;htmlCode=`  &lt;ifx-select
    (ifxInput)=&quot;handleInput($any($event))&quot;
    (ifxSelect)=&quot;handleSelect($any($event))&quot;
    [size]=&quot;sizeOptions[sizeIndex]&quot;
    [placeholder]=&quot;placeholder&quot;
    [showClearButton]=&quot;showClearButton&quot;
    [showSearch]=&quot;showSearch&quot;
    [searchPlaceholderValue]=&quot;searchPlaceholderValue&quot;
    [required]=&quot;required&quot;
    [label]=&quot;label&quot;
    [caption]=&quot;caption&quot;
    [placeholderValue]=&quot;placeholderValue&quot;
    [options]=&quot;options&quot;
    [error]=&quot;error&quot;
    [disabled]=&quot;disabled&quot;&gt;&lt;/ifx-select&gt;`;sizeOptions=["s","m"];sizeIndex=1;placeholder=!0;placeholderValue="Placeholder";error=!1;label="";disabled=!1;caption="";required=!0;showSearch=!0;showClearButton=!0;searchPlaceholderValue="Search...";options='[{"value":"a","label":"option a","selected":false},{"value":"b","label":"option b","selected":false},{"value":"c","label":"option c","selected":false}]';handleSizeChange(){this.sizeIndex=(this.sizeIndex+1)%this.sizeOptions.length}handlePlaceholderChange(){this.placeholder=!this.placeholder}updatePlaceholderValue(t){this.placeholderValue=t}handleErrorChange(){this.error=!this.error}updateLabel(t){this.label=t}handleDisabledChange(){this.disabled=!this.disabled}updateCaption(t){this.caption=t}handleRequiredChange(){this.required=!this.required}handleShowSearchChange(){this.showSearch=!this.showSearch}handleShowClearButtonChange(){this.showClearButton=!this.showClearButton}updateSearchPlaceholderValue(t){this.searchPlaceholderValue=t}updateOptions(t){this.options=t}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleInput(t){console.log("ifxInput:",t)}handleSelect(t){console.log("ifxSelect:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-select-example"]],standalone:!1,decls:85,vars:31,consts:[[3,"ifxInput","ifxSelect","size","placeholder","showClearButton","showSearch","searchPlaceholderValue","required","label","caption","placeholderValue","options","error","disabled"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","placeholderValue","type","text",3,"ifxInput","value"],["label","label","type","text",3,"ifxInput","value"],["label","caption","type","text",3,"ifxInput","value"],["label","searchPlaceholderValue","type","text",3,"ifxInput","value"],["label","options","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-select",0),m("ifxInput",function(a){return e.handleInput(a)})("ifxSelect",function(a){return e.handleSelect(a)}),o(),l(1,"h3",1),s(2,"Controls"),o(),l(3,"div",2)(4,"ifx-button",3),m("click",function(){return e.handleSizeChange()}),s(5,"Toggle Size"),o(),l(6,"ifx-button",3),m("click",function(){return e.handlePlaceholderChange()}),s(7,"Toggle Placeholder"),o(),l(8,"ifx-button",3),m("click",function(){return e.handleErrorChange()}),s(9,"Toggle Error"),o(),l(10,"ifx-button",3),m("click",function(){return e.handleDisabledChange()}),s(11,"Toggle Disabled"),o(),l(12,"ifx-button",3),m("click",function(){return e.handleRequiredChange()}),s(13,"Toggle Required"),o(),l(14,"ifx-button",3),m("click",function(){return e.handleShowSearchChange()}),s(15,"Toggle ShowSearch"),o(),l(16,"ifx-button",3),m("click",function(){return e.handleShowClearButtonChange()}),s(17,"Toggle ShowClearButton"),o()(),l(18,"div",4)(19,"ifx-text-field",5),m("ifxInput",function(a){return e.updatePlaceholderValue(e.getControlInputValue(a))}),o(),l(20,"ifx-text-field",6),m("ifxInput",function(a){return e.updateLabel(e.getControlInputValue(a))}),o(),l(21,"ifx-text-field",7),m("ifxInput",function(a){return e.updateCaption(e.getControlInputValue(a))}),o(),l(22,"ifx-text-field",8),m("ifxInput",function(a){return e.updateSearchPlaceholderValue(e.getControlInputValue(a))}),o(),l(23,"ifx-text-field",9),m("ifxInput",function(a){return e.updateOptions(e.getControlInputValue(a))}),o()(),l(24,"div",10)(25,"div")(26,"b"),s(27,"size:"),o(),s(28),o(),l(29,"div")(30,"b"),s(31,"placeholder:"),o(),s(32),o(),l(33,"div")(34,"b"),s(35,"placeholderValue:"),o(),s(36),o(),l(37,"div")(38,"b"),s(39,"error:"),o(),s(40),o(),l(41,"div")(42,"b"),s(43,"label:"),o(),s(44),o(),l(45,"div")(46,"b"),s(47,"disabled:"),o(),s(48),o(),l(49,"div")(50,"b"),s(51,"caption:"),o(),s(52),o(),l(53,"div")(54,"b"),s(55,"required:"),o(),s(56),o(),l(57,"div")(58,"b"),s(59,"showSearch:"),o(),s(60),o(),l(61,"div")(62,"b"),s(63,"showClearButton:"),o(),s(64),o(),l(65,"div")(66,"b"),s(67,"searchPlaceholderValue:"),o(),s(68),o(),l(69,"div")(70,"b"),s(71,"options:"),o(),s(72),o()(),l(73,"details",11)(74,"summary"),s(75,"View Code"),o(),l(76,"div",12)(77,"h3"),s(78,"ifx-select-example.ts"),o(),l(79,"pre"),b(80,"code",13),o(),l(81,"h3"),s(82,"ifx-select-example.html"),o(),l(83,"pre"),b(84,"code",14),o()()()),i&2&&(p("size",e.sizeOptions[e.sizeIndex])("placeholder",e.placeholder)("showClearButton",e.showClearButton)("showSearch",e.showSearch)("searchPlaceholderValue",e.searchPlaceholderValue)("required",e.required)("label",e.label)("caption",e.caption)("placeholderValue",e.placeholderValue)("options",e.options)("error",e.error)("disabled",e.disabled),d(19),p("value",e.stringifyValue(e.placeholderValue)),d(),p("value",e.stringifyValue(e.label)),d(),p("value",e.stringifyValue(e.caption)),d(),p("value",e.stringifyValue(e.searchPlaceholderValue)),d(),p("value",e.stringifyValue(e.options)),d(5),h(" ",e.stringifyValue(e.sizeOptions[e.sizeIndex])),d(4),h(" ",e.stringifyValue(e.placeholder)),d(4),h(" ",e.stringifyValue(e.placeholderValue)),d(4),h(" ",e.stringifyValue(e.error)),d(4),h(" ",e.stringifyValue(e.label)),d(4),h(" ",e.stringifyValue(e.disabled)),d(4),h(" ",e.stringifyValue(e.caption)),d(4),h(" ",e.stringifyValue(e.required)),d(4),h(" ",e.stringifyValue(e.showSearch)),d(4),h(" ",e.stringifyValue(e.showClearButton)),d(4),h(" ",e.stringifyValue(e.searchPlaceholderValue)),d(4),h(" ",e.stringifyValue(e.options)),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,Ig,O,N],encapsulation:2})};var Na=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-spinner-example',
  templateUrl: './ifx-spinner-example.html',
  styleUrl: './ifx-spinner-example.scss',
  standalone: false
})
export class IfxSpinnerExample {

  protected readonly sizeOptions = ["s","m"];
  protected sizeIndex = 1;
  protected readonly variantOptions = ["default","brand"];
  protected variantIndex = 0;
  protected inverted = false;
  protected ariaLabelText = "";

  protected handleSizeChange() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected handleVariantChange() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
  }

  protected handleInvertedChange() {
    this.inverted = !this.inverted;
  }

  protected updateAriaLabelText(value: string) {
    this.ariaLabelText = value;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

}`;htmlCode=`  &lt;ifx-spinner
    [ariaLabelText]=&quot;ariaLabelText&quot;
    [variant]=&quot;variantOptions[variantIndex]&quot;
    [size]=&quot;sizeOptions[sizeIndex]&quot;
    [inverted]=&quot;inverted&quot;&gt;&lt;/ifx-spinner&gt;`;sizeOptions=["s","m"];sizeIndex=1;variantOptions=["default","brand"];variantIndex=0;inverted=!1;ariaLabelText="";handleSizeChange(){this.sizeIndex=(this.sizeIndex+1)%this.sizeOptions.length}handleVariantChange(){this.variantIndex=(this.variantIndex+1)%this.variantOptions.length}handleInvertedChange(){this.inverted=!this.inverted}updateAriaLabelText(t){this.ariaLabelText=t}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-spinner-example"]],standalone:!1,decls:41,vars:11,consts:[[3,"ariaLabelText","variant","size","inverted"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","ariaLabelText","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(b(0,"ifx-spinner",0),l(1,"h3",1),s(2,"Controls"),o(),l(3,"div",2)(4,"ifx-button",3),m("click",function(){return e.handleSizeChange()}),s(5,"Toggle Size"),o(),l(6,"ifx-button",3),m("click",function(){return e.handleVariantChange()}),s(7,"Toggle Variant"),o(),l(8,"ifx-button",3),m("click",function(){return e.handleInvertedChange()}),s(9,"Toggle Inverted"),o()(),l(10,"div",4)(11,"ifx-text-field",5),m("ifxInput",function(a){return e.updateAriaLabelText(e.getControlInputValue(a))}),o()(),l(12,"div",6)(13,"div")(14,"b"),s(15,"size:"),o(),s(16),o(),l(17,"div")(18,"b"),s(19,"variant:"),o(),s(20),o(),l(21,"div")(22,"b"),s(23,"inverted:"),o(),s(24),o(),l(25,"div")(26,"b"),s(27,"ariaLabelText:"),o(),s(28),o()(),l(29,"details",7)(30,"summary"),s(31,"View Code"),o(),l(32,"div",8)(33,"h3"),s(34,"ifx-spinner-example.ts"),o(),l(35,"pre"),b(36,"code",9),o(),l(37,"h3"),s(38,"ifx-spinner-example.html"),o(),l(39,"pre"),b(40,"code",10),o()()()),i&2&&(p("ariaLabelText",e.ariaLabelText)("variant",e.variantOptions[e.variantIndex])("size",e.sizeOptions[e.sizeIndex])("inverted",e.inverted),d(11),p("value",e.stringifyValue(e.ariaLabelText)),d(5),h(" ",e.stringifyValue(e.sizeOptions[e.sizeIndex])),d(4),h(" ",e.stringifyValue(e.variantOptions[e.variantIndex])),d(4),h(" ",e.stringifyValue(e.inverted)),d(4),h(" ",e.stringifyValue(e.ariaLabelText)),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,_g,O,N],encapsulation:2})};var Fa=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-status-example',
  templateUrl: './ifx-status-example.html',
  styleUrl: './ifx-status-example.scss',
  standalone: false
})
export class IfxStatusExample {

  protected label = "text";
  protected border = true;
  protected readonly colorOptions = ["engineering-100","engineering-200","engineering-300","engineering-400","engineering-500","engineering-600","ocean-100","ocean-200","ocean-300","ocean-400","ocean-500","ocean-600","ocean-700","red-500","red-600","red-700","orange-500","green-500","lawn-400","lawn-500","lawn-700","berry-400","berry-500","sun-400","sun-500","sand-400","sand-500"];
  protected colorIndex = 16;

  protected updateLabel(value: string) {
    this.label = value;
  }

  protected handleBorderChange() {
    this.border = !this.border;
  }

  protected handleColorChange() {
    this.colorIndex = (this.colorIndex + 1) % this.colorOptions.length;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

}`;htmlCode=`  &lt;ifx-status
    [label]=&quot;label&quot;
    [color]=&quot;colorOptions[colorIndex]&quot;
    [border]=&quot;border&quot;&gt;&lt;/ifx-status&gt;`;label="text";border=!0;colorOptions=["engineering-100","engineering-200","engineering-300","engineering-400","engineering-500","engineering-600","ocean-100","ocean-200","ocean-300","ocean-400","ocean-500","ocean-600","ocean-700","red-500","red-600","red-700","orange-500","green-500","lawn-400","lawn-500","lawn-700","berry-400","berry-500","sun-400","sun-500","sand-400","sand-500"];colorIndex=16;updateLabel(t){this.label=t}handleBorderChange(){this.border=!this.border}handleColorChange(){this.colorIndex=(this.colorIndex+1)%this.colorOptions.length}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-status-example"]],standalone:!1,decls:35,vars:9,consts:[[3,"label","color","border"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","label","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(b(0,"ifx-status",0),l(1,"h3",1),s(2,"Controls"),o(),l(3,"div",2)(4,"ifx-button",3),m("click",function(){return e.handleBorderChange()}),s(5,"Toggle Border"),o(),l(6,"ifx-button",3),m("click",function(){return e.handleColorChange()}),s(7,"Toggle Color"),o()(),l(8,"div",4)(9,"ifx-text-field",5),m("ifxInput",function(a){return e.updateLabel(e.getControlInputValue(a))}),o()(),l(10,"div",6)(11,"div")(12,"b"),s(13,"label:"),o(),s(14),o(),l(15,"div")(16,"b"),s(17,"border:"),o(),s(18),o(),l(19,"div")(20,"b"),s(21,"color:"),o(),s(22),o()(),l(23,"details",7)(24,"summary"),s(25,"View Code"),o(),l(26,"div",8)(27,"h3"),s(28,"ifx-status-example.ts"),o(),l(29,"pre"),b(30,"code",9),o(),l(31,"h3"),s(32,"ifx-status-example.html"),o(),l(33,"pre"),b(34,"code",10),o()()()),i&2&&(p("label",e.label)("color",e.colorOptions[e.colorIndex])("border",e.border),d(9),p("value",e.stringifyValue(e.label)),d(5),h(" ",e.stringifyValue(e.label)),d(4),h(" ",e.stringifyValue(e.border)),d(4),h(" ",e.stringifyValue(e.colorOptions[e.colorIndex])),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,Sg,O,N],encapsulation:2})};var La=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-stepper-example',
  templateUrl: './ifx-stepper-example.html',
  styleUrl: './ifx-stepper-example.scss',
  standalone: false
})
export class IfxStepperExample {

  protected activeStep = 2;
  protected readonly indicatorPositionOptions = ["left","right"];
  protected indicatorPositionIndex = 0;
  protected showStepNumber = false;
  protected readonly variantOptions = ["default","compact","vertical"];
  protected variantIndex = 0;
  protected ariaLabelText = "";
  protected ariaCurrentText = "";

  protected updateActiveStep(value: string) {
    this.activeStep = Number(value);
  }

  protected handleIndicatorPositionChange() {
    this.indicatorPositionIndex = (this.indicatorPositionIndex + 1) % this.indicatorPositionOptions.length;
  }

  protected handleShowStepNumberChange() {
    this.showStepNumber = !this.showStepNumber;
  }

  protected handleVariantChange() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
  }

  protected updateAriaLabelText(value: string) {
    this.ariaLabelText = value;
  }

  protected updateAriaCurrentText(value: string) {
    this.ariaCurrentText = value;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

  protected handleChange(event: CustomEvent) {
    console.log('ifxChange:', event);
    // Add your handler logic here
  }

}`;htmlCode=`  &lt;ifx-stepper
    [activeStep]=&quot;activeStep&quot;
    [ariaLabelText]=&quot;ariaLabelText&quot;
    [ariaCurrentText]=&quot;ariaCurrentText&quot;
    [showStepNumber]=&quot;showStepNumber&quot;
    [variant]=&quot;variantOptions[variantIndex]&quot;
    [indicatorPosition]=&quot;indicatorPositionOptions[indicatorPositionIndex]&quot;&gt;
    &lt;ifx-step&gt;Step Label 1&lt;/ifx-step&gt;
    &lt;ifx-step&gt;Step Label 2&lt;/ifx-step&gt;
    &lt;ifx-step&gt;Step Label 3&lt;/ifx-step&gt;
    &lt;ifx-step&gt;Step Label 4&lt;/ifx-step&gt;
    &lt;ifx-step&gt;Step Label 5&lt;/ifx-step&gt;
  &lt;/ifx-stepper&gt;`;activeStep=2;indicatorPositionOptions=["left","right"];indicatorPositionIndex=0;showStepNumber=!1;variantOptions=["default","compact","vertical"];variantIndex=0;ariaLabelText="";ariaCurrentText="";updateActiveStep(t){this.activeStep=Number(t)}handleIndicatorPositionChange(){this.indicatorPositionIndex=(this.indicatorPositionIndex+1)%this.indicatorPositionOptions.length}handleShowStepNumberChange(){this.showStepNumber=!this.showStepNumber}handleVariantChange(){this.variantIndex=(this.variantIndex+1)%this.variantOptions.length}updateAriaLabelText(t){this.ariaLabelText=t}updateAriaCurrentText(t){this.ariaCurrentText=t}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleChange(t){console.log("ifxChange:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-stepper-example"]],standalone:!1,decls:61,vars:17,consts:[[3,"activeStep","ariaLabelText","ariaCurrentText","showStepNumber","variant","indicatorPosition"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","activeStep","type","number",3,"ifxInput","value"],["label","ariaLabelText","type","text",3,"ifxInput","value"],["label","ariaCurrentText","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-stepper",0)(1,"ifx-step"),s(2,"Step Label 1"),o(),l(3,"ifx-step"),s(4,"Step Label 2"),o(),l(5,"ifx-step"),s(6,"Step Label 3"),o(),l(7,"ifx-step"),s(8,"Step Label 4"),o(),l(9,"ifx-step"),s(10,"Step Label 5"),o()(),l(11,"h3",1),s(12,"Controls"),o(),l(13,"div",2)(14,"ifx-button",3),m("click",function(){return e.handleIndicatorPositionChange()}),s(15,"Toggle IndicatorPosition"),o(),l(16,"ifx-button",3),m("click",function(){return e.handleShowStepNumberChange()}),s(17,"Toggle ShowStepNumber"),o(),l(18,"ifx-button",3),m("click",function(){return e.handleVariantChange()}),s(19,"Toggle Variant"),o()(),l(20,"div",4)(21,"ifx-text-field",5),m("ifxInput",function(a){return e.updateActiveStep(e.getControlInputValue(a))}),o(),l(22,"ifx-text-field",6),m("ifxInput",function(a){return e.updateAriaLabelText(e.getControlInputValue(a))}),o(),l(23,"ifx-text-field",7),m("ifxInput",function(a){return e.updateAriaCurrentText(e.getControlInputValue(a))}),o()(),l(24,"div",8)(25,"div")(26,"b"),s(27,"activeStep:"),o(),s(28),o(),l(29,"div")(30,"b"),s(31,"indicatorPosition:"),o(),s(32),o(),l(33,"div")(34,"b"),s(35,"showStepNumber:"),o(),s(36),o(),l(37,"div")(38,"b"),s(39,"variant:"),o(),s(40),o(),l(41,"div")(42,"b"),s(43,"ariaLabelText:"),o(),s(44),o(),l(45,"div")(46,"b"),s(47,"ariaCurrentText:"),o(),s(48),o()(),l(49,"details",9)(50,"summary"),s(51,"View Code"),o(),l(52,"div",10)(53,"h3"),s(54,"ifx-stepper-example.ts"),o(),l(55,"pre"),b(56,"code",11),o(),l(57,"h3"),s(58,"ifx-stepper-example.html"),o(),l(59,"pre"),b(60,"code",12),o()()()),i&2&&(p("activeStep",e.activeStep)("ariaLabelText",e.ariaLabelText)("ariaCurrentText",e.ariaCurrentText)("showStepNumber",e.showStepNumber)("variant",e.variantOptions[e.variantIndex])("indicatorPosition",e.indicatorPositionOptions[e.indicatorPositionIndex]),d(21),p("value",e.stringifyValue(e.activeStep)),d(),p("value",e.stringifyValue(e.ariaLabelText)),d(),p("value",e.stringifyValue(e.ariaCurrentText)),d(5),h(" ",e.stringifyValue(e.activeStep)),d(4),h(" ",e.stringifyValue(e.indicatorPositionOptions[e.indicatorPositionIndex])),d(4),h(" ",e.stringifyValue(e.showStepNumber)),d(4),h(" ",e.stringifyValue(e.variantOptions[e.variantIndex])),d(4),h(" ",e.stringifyValue(e.ariaLabelText)),d(4),h(" ",e.stringifyValue(e.ariaCurrentText)),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,ea,ta,O,N],encapsulation:2})};var Ra=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-stepper-example-compact',
  templateUrl: './ifx-stepper-example-compact.html',
  styleUrl: './ifx-stepper-example-compact.scss',
  standalone: false
})
export class IfxStepperCompactExample {

  protected activeStep = 2;
  protected readonly indicatorPositionOptions = ["left","right"];
  protected indicatorPositionIndex = 0;
  protected showStepNumber = false;
  protected readonly variantOptions = ["default","compact","vertical"];
  protected variantIndex = 1;
  protected ariaLabelText = "";
  protected ariaCurrentText = "";

  protected updateActiveStep(value: string) {
    this.activeStep = Number(value);
  }

  protected handleIndicatorPositionChange() {
    this.indicatorPositionIndex = (this.indicatorPositionIndex + 1) % this.indicatorPositionOptions.length;
  }

  protected handleShowStepNumberChange() {
    this.showStepNumber = !this.showStepNumber;
  }

  protected handleVariantChange() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
  }

  protected updateAriaLabelText(value: string) {
    this.ariaLabelText = value;
  }

  protected updateAriaCurrentText(value: string) {
    this.ariaCurrentText = value;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

  protected handleChange(event: CustomEvent) {
    console.log('ifxChange:', event);
    // Add your handler logic here
  }

}`;htmlCode=`  &lt;ifx-stepper
    [activeStep]=&quot;activeStep&quot;
    [ariaLabelText]=&quot;ariaLabelText&quot;
    [ariaCurrentText]=&quot;ariaCurrentText&quot;
    [indicatorPosition]=&quot;indicatorPositionOptions[indicatorPositionIndex]&quot;
    [variant]=&quot;variantOptions[variantIndex]&quot;
    [showStepNumber]=&quot;showStepNumber&quot;&gt;
    &lt;ifx-step&gt;Step Label 1&lt;/ifx-step&gt;
    &lt;ifx-step&gt;Step Label 2&lt;/ifx-step&gt;
    &lt;ifx-step&gt;Step Label 3&lt;/ifx-step&gt;
    &lt;ifx-step&gt;Step Label 4&lt;/ifx-step&gt;
    &lt;ifx-step&gt;Step Label 5&lt;/ifx-step&gt;
  &lt;/ifx-stepper&gt;`;activeStep=2;indicatorPositionOptions=["left","right"];indicatorPositionIndex=0;showStepNumber=!1;variantOptions=["default","compact","vertical"];variantIndex=1;ariaLabelText="";ariaCurrentText="";updateActiveStep(t){this.activeStep=Number(t)}handleIndicatorPositionChange(){this.indicatorPositionIndex=(this.indicatorPositionIndex+1)%this.indicatorPositionOptions.length}handleShowStepNumberChange(){this.showStepNumber=!this.showStepNumber}handleVariantChange(){this.variantIndex=(this.variantIndex+1)%this.variantOptions.length}updateAriaLabelText(t){this.ariaLabelText=t}updateAriaCurrentText(t){this.ariaCurrentText=t}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleChange(t){console.log("ifxChange:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-stepper-example-compact"]],standalone:!1,decls:61,vars:17,consts:[[3,"activeStep","ariaLabelText","ariaCurrentText","indicatorPosition","variant","showStepNumber"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","activeStep","type","number",3,"ifxInput","value"],["label","ariaLabelText","type","text",3,"ifxInput","value"],["label","ariaCurrentText","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-stepper",0)(1,"ifx-step"),s(2,"Step Label 1"),o(),l(3,"ifx-step"),s(4,"Step Label 2"),o(),l(5,"ifx-step"),s(6,"Step Label 3"),o(),l(7,"ifx-step"),s(8,"Step Label 4"),o(),l(9,"ifx-step"),s(10,"Step Label 5"),o()(),l(11,"h3",1),s(12,"Controls"),o(),l(13,"div",2)(14,"ifx-button",3),m("click",function(){return e.handleIndicatorPositionChange()}),s(15,"Toggle IndicatorPosition"),o(),l(16,"ifx-button",3),m("click",function(){return e.handleShowStepNumberChange()}),s(17,"Toggle ShowStepNumber"),o(),l(18,"ifx-button",3),m("click",function(){return e.handleVariantChange()}),s(19,"Toggle Variant"),o()(),l(20,"div",4)(21,"ifx-text-field",5),m("ifxInput",function(a){return e.updateActiveStep(e.getControlInputValue(a))}),o(),l(22,"ifx-text-field",6),m("ifxInput",function(a){return e.updateAriaLabelText(e.getControlInputValue(a))}),o(),l(23,"ifx-text-field",7),m("ifxInput",function(a){return e.updateAriaCurrentText(e.getControlInputValue(a))}),o()(),l(24,"div",8)(25,"div")(26,"b"),s(27,"activeStep:"),o(),s(28),o(),l(29,"div")(30,"b"),s(31,"indicatorPosition:"),o(),s(32),o(),l(33,"div")(34,"b"),s(35,"showStepNumber:"),o(),s(36),o(),l(37,"div")(38,"b"),s(39,"variant:"),o(),s(40),o(),l(41,"div")(42,"b"),s(43,"ariaLabelText:"),o(),s(44),o(),l(45,"div")(46,"b"),s(47,"ariaCurrentText:"),o(),s(48),o()(),l(49,"details",9)(50,"summary"),s(51,"View Code"),o(),l(52,"div",10)(53,"h3"),s(54,"ifx-stepper-example-compact.ts"),o(),l(55,"pre"),b(56,"code",11),o(),l(57,"h3"),s(58,"ifx-stepper-example-compact.html"),o(),l(59,"pre"),b(60,"code",12),o()()()),i&2&&(p("activeStep",e.activeStep)("ariaLabelText",e.ariaLabelText)("ariaCurrentText",e.ariaCurrentText)("indicatorPosition",e.indicatorPositionOptions[e.indicatorPositionIndex])("variant",e.variantOptions[e.variantIndex])("showStepNumber",e.showStepNumber),d(21),p("value",e.stringifyValue(e.activeStep)),d(),p("value",e.stringifyValue(e.ariaLabelText)),d(),p("value",e.stringifyValue(e.ariaCurrentText)),d(5),h(" ",e.stringifyValue(e.activeStep)),d(4),h(" ",e.stringifyValue(e.indicatorPositionOptions[e.indicatorPositionIndex])),d(4),h(" ",e.stringifyValue(e.showStepNumber)),d(4),h(" ",e.stringifyValue(e.variantOptions[e.variantIndex])),d(4),h(" ",e.stringifyValue(e.ariaLabelText)),d(4),h(" ",e.stringifyValue(e.ariaCurrentText)),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,ea,ta,O,N],encapsulation:2})};var Pa=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-switch-example',
  templateUrl: './ifx-switch-example.html',
  styleUrl: './ifx-switch-example.scss',
  standalone: false
})
export class IfxSwitchExample {

  protected name = "switch";
  protected checked = false;
  protected value = "on";
  protected disabled = false;

  protected updateName(value: string) {
    this.name = value;
  }

  protected handleCheckedChange() {
    this.checked = !this.checked;
  }

  protected updateValue(value: string) {
    this.value = value;
  }

  protected handleDisabledChange() {
    this.disabled = !this.disabled;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

  protected handleChange(event: CustomEvent) {
    console.log('ifxChange:', event);
    // Add your handler logic here
  }

}`;htmlCode=`  &lt;ifx-switch
    (ifxChange)=&quot;handleChange($any($event))&quot;
    [name]=&quot;name&quot;
    [value]=&quot;value&quot;
    [checked]=&quot;checked&quot;
    [disabled]=&quot;disabled&quot;&gt;Switch&lt;/ifx-switch&gt;`;name="switch";checked=!1;value="on";disabled=!1;updateName(t){this.name=t}handleCheckedChange(){this.checked=!this.checked}updateValue(t){this.value=t}handleDisabledChange(){this.disabled=!this.disabled}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleChange(t){console.log("ifxChange:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-switch-example"]],standalone:!1,decls:41,vars:12,consts:[[3,"ifxChange","name","value","checked","disabled"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","name","type","text",3,"ifxInput","value"],["label","value","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-switch",0),m("ifxChange",function(a){return e.handleChange(a)}),s(1,"Switch"),o(),l(2,"h3",1),s(3,"Controls"),o(),l(4,"div",2)(5,"ifx-button",3),m("click",function(){return e.handleCheckedChange()}),s(6,"Toggle Checked"),o(),l(7,"ifx-button",3),m("click",function(){return e.handleDisabledChange()}),s(8,"Toggle Disabled"),o()(),l(9,"div",4)(10,"ifx-text-field",5),m("ifxInput",function(a){return e.updateName(e.getControlInputValue(a))}),o(),l(11,"ifx-text-field",6),m("ifxInput",function(a){return e.updateValue(e.getControlInputValue(a))}),o()(),l(12,"div",7)(13,"div")(14,"b"),s(15,"name:"),o(),s(16),o(),l(17,"div")(18,"b"),s(19,"checked:"),o(),s(20),o(),l(21,"div")(22,"b"),s(23,"value:"),o(),s(24),o(),l(25,"div")(26,"b"),s(27,"disabled:"),o(),s(28),o()(),l(29,"details",8)(30,"summary"),s(31,"View Code"),o(),l(32,"div",9)(33,"h3"),s(34,"ifx-switch-example.ts"),o(),l(35,"pre"),b(36,"code",10),o(),l(37,"h3"),s(38,"ifx-switch-example.html"),o(),l(39,"pre"),b(40,"code",11),o()()()),i&2&&(p("name",e.name)("value",e.value)("checked",e.checked)("disabled",e.disabled),d(10),p("value",e.stringifyValue(e.name)),d(),p("value",e.stringifyValue(e.value)),d(5),h(" ",e.stringifyValue(e.name)),d(4),h(" ",e.stringifyValue(e.checked)),d(4),h(" ",e.stringifyValue(e.value)),d(4),h(" ",e.stringifyValue(e.disabled)),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,na,O,Ot,N],encapsulation:2})};var Va=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-basic-table-example',
  templateUrl: './ifx-basic-table-example.html',
  styleUrl: './ifx-basic-table-example.scss',
  standalone: false
})
export class IfxBasicTableExample {

  protected tableHeight = "auto";
  protected readonly rowHeightOptions = ["compact","default"];
  protected rowHeightIndex = 1;
  protected cols = "[{\\"headerName\\":\\"ID\\",\\"field\\":\\"id\\",\\"sortable\\":true,\\"sort\\":\\"desc\\",\\"unSortIcon\\":true},{\\"headerName\\":\\"Item\\",\\"field\\":\\"item\\",\\"sortable\\":true,\\"unSortIcon\\":true},{\\"headerName\\":\\"Price\\",\\"field\\":\\"price\\"},{\\"headerName\\":\\"Date\\",\\"field\\":\\"date\\"}]";
  protected rows = "[{\\"id\\":1,\\"item\\":\\"Item 1\\",\\"price\\":356,\\"date\\":\\"2025-05-11\\"},{\\"id\\":2,\\"item\\":\\"Item 2\\",\\"price\\":55,\\"date\\":\\"2025-03-26\\"},{\\"id\\":3,\\"item\\":\\"Item 3\\",\\"price\\":24},{\\"id\\":4,\\"item\\":\\"Item 4\\",\\"price\\":874,\\"date\\":\\"2025-04-30\\"},{\\"id\\":5,\\"item\\":\\"Item 5\\",\\"price\\":689,\\"date\\":\\"2025-09-14\\"},{\\"id\\":6,\\"item\\":\\"Item 6\\",\\"price\\":46},{\\"id\\":7,\\"item\\":\\"Item 7\\",\\"price\\":421,\\"date\\":\\"2026-07-25\\"},{\\"id\\":8,\\"item\\":\\"Item 8\\",\\"price\\":17,\\"date\\":\\"2026-06-28\\"},{\\"id\\":9,\\"item\\":\\"Item 9\\",\\"price\\":752},{\\"id\\":10,\\"item\\":\\"Item 10\\",\\"price\\":73,\\"date\\":\\"2026-01-27\\"},{\\"id\\":11,\\"item\\":\\"Item 11\\",\\"price\\":94,\\"date\\":\\"2026-10-31\\"},{\\"id\\":12,\\"item\\":\\"Item 12\\",\\"price\\":846}]";
  protected readonly variantOptions = ["default","zebra"];
  protected variantIndex = 0;

  protected updateTableHeight(value: string) {
    this.tableHeight = value;
  }

  protected handleRowHeightChange() {
    this.rowHeightIndex = (this.rowHeightIndex + 1) % this.rowHeightOptions.length;
  }

  protected updateCols(value: string) {
    this.cols = value;
  }

  protected updateRows(value: string) {
    this.rows = value;
  }

  protected handleVariantChange() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

}`;htmlCode=`  &lt;ifx-basic-table
    [cols]=&quot;cols&quot;
    [rows]=&quot;rows&quot;
    [tableHeight]=&quot;tableHeight&quot;
    [rowHeight]=&quot;rowHeightOptions[rowHeightIndex]&quot;
    [variant]=&quot;variantOptions[variantIndex]&quot;&gt;&lt;/ifx-basic-table&gt;`;tableHeight="auto";rowHeightOptions=["compact","default"];rowHeightIndex=1;cols='[{"headerName":"ID","field":"id","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Item","field":"item","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Date","field":"date"}]';rows='[{"id":1,"item":"Item 1","price":356,"date":"2025-05-11"},{"id":2,"item":"Item 2","price":55,"date":"2025-03-26"},{"id":3,"item":"Item 3","price":24},{"id":4,"item":"Item 4","price":874,"date":"2025-04-30"},{"id":5,"item":"Item 5","price":689,"date":"2025-09-14"},{"id":6,"item":"Item 6","price":46},{"id":7,"item":"Item 7","price":421,"date":"2026-07-25"},{"id":8,"item":"Item 8","price":17,"date":"2026-06-28"},{"id":9,"item":"Item 9","price":752},{"id":10,"item":"Item 10","price":73,"date":"2026-01-27"},{"id":11,"item":"Item 11","price":94,"date":"2026-10-31"},{"id":12,"item":"Item 12","price":846}]';variantOptions=["default","zebra"];variantIndex=0;updateTableHeight(t){this.tableHeight=t}handleRowHeightChange(){this.rowHeightIndex=(this.rowHeightIndex+1)%this.rowHeightOptions.length}updateCols(t){this.cols=t}updateRows(t){this.rows=t}handleVariantChange(){this.variantIndex=(this.variantIndex+1)%this.variantOptions.length}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-basic-table-example"]],standalone:!1,decls:45,vars:15,consts:[[3,"cols","rows","tableHeight","rowHeight","variant"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","tableHeight","type","text",3,"ifxInput","value"],["label","cols","type","text",3,"ifxInput","value"],["label","rows","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(b(0,"ifx-basic-table",0),l(1,"h3",1),s(2,"Controls"),o(),l(3,"div",2)(4,"ifx-button",3),m("click",function(){return e.handleRowHeightChange()}),s(5,"Toggle RowHeight"),o(),l(6,"ifx-button",3),m("click",function(){return e.handleVariantChange()}),s(7,"Toggle Variant"),o()(),l(8,"div",4)(9,"ifx-text-field",5),m("ifxInput",function(a){return e.updateTableHeight(e.getControlInputValue(a))}),o(),l(10,"ifx-text-field",6),m("ifxInput",function(a){return e.updateCols(e.getControlInputValue(a))}),o(),l(11,"ifx-text-field",7),m("ifxInput",function(a){return e.updateRows(e.getControlInputValue(a))}),o()(),l(12,"div",8)(13,"div")(14,"b"),s(15,"tableHeight:"),o(),s(16),o(),l(17,"div")(18,"b"),s(19,"rowHeight:"),o(),s(20),o(),l(21,"div")(22,"b"),s(23,"cols:"),o(),s(24),o(),l(25,"div")(26,"b"),s(27,"rows:"),o(),s(28),o(),l(29,"div")(30,"b"),s(31,"variant:"),o(),s(32),o()(),l(33,"details",9)(34,"summary"),s(35,"View Code"),o(),l(36,"div",10)(37,"h3"),s(38,"ifx-basic-table-example.ts"),o(),l(39,"pre"),b(40,"code",11),o(),l(41,"h3"),s(42,"ifx-basic-table-example.html"),o(),l(43,"pre"),b(44,"code",12),o()()()),i&2&&(p("cols",e.cols)("rows",e.rows)("tableHeight",e.tableHeight)("rowHeight",e.rowHeightOptions[e.rowHeightIndex])("variant",e.variantOptions[e.variantIndex]),d(9),p("value",e.stringifyValue(e.tableHeight)),d(),p("value",e.stringifyValue(e.cols)),d(),p("value",e.stringifyValue(e.rows)),d(5),h(" ",e.stringifyValue(e.tableHeight)),d(4),h(" ",e.stringifyValue(e.rowHeightOptions[e.rowHeightIndex])),d(4),h(" ",e.stringifyValue(e.cols)),d(4),h(" ",e.stringifyValue(e.rows)),d(4),h(" ",e.stringifyValue(e.variantOptions[e.variantIndex])),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[Gh,k,O,N],encapsulation:2})};var qa=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-table-example-defaultstate',
  templateUrl: './ifx-table-example-defaultstate.html',
  styleUrl: './ifx-table-example-defaultstate.scss',
  standalone: false
})
export class IfxTableDefaultStateExample {

  protected tableHeight = "auto";
  protected pagination = false;
  protected serverSidePagination = false;
  protected paginationItemsPerPage = "[{\\"value\\":\\"10\\",\\"selected\\":true}, {\\"value\\":\\"20\\",\\"selected\\":false}, {\\"value\\":\\"30\\",\\"selected\\":false}, {\\"value\\":\\"all\\",\\"selected\\":false}]";
  protected showLoading = false;
  protected readonly rowHeightOptions = ["compact","default"];
  protected rowHeightIndex = 1;
  protected enableSelection = false;
  protected readonly filterOrientationOptions = ["sidebar","topbar","none"];
  protected filterOrientationIndex = 2;
  protected cols = "[{\\"headerName\\":\\"ID\\",\\"field\\":\\"id\\",\\"sortable\\":true,\\"sort\\":\\"desc\\",\\"unSortIcon\\":true},{\\"headerName\\":\\"Item\\",\\"field\\":\\"item\\",\\"sortable\\":true,\\"unSortIcon\\":true},{\\"headerName\\":\\"Price\\",\\"field\\":\\"price\\"},{\\"headerName\\":\\"Date\\",\\"field\\":\\"date\\"}]";
  protected fitColumns = false;
  protected columnMinWidth = "200";
  protected columnWidth = "100";
  protected rows = "[{\\"id\\":\\"1\\",\\"item\\":\\"Item 1\\",\\"price\\":356,\\"date\\":\\"2025-06-25\\"},{\\"id\\":\\"2\\",\\"item\\":\\"Item 2\\",\\"price\\":55,\\"date\\":\\"2025-03-26\\"},{\\"id\\":\\"3\\",\\"item\\":\\"Item 3\\",\\"price\\":24},{\\"id\\":\\"4\\",\\"item\\":\\"x\\",\\"price\\":874},{\\"id\\":\\"5\\",\\"item\\":\\"x\\",\\"price\\":689},{\\"id\\":\\"6\\",\\"item\\":\\"x\\",\\"price\\":46},{\\"id\\":\\"7\\",\\"item\\":\\"Item 7\\",\\"price\\":421},{\\"id\\":\\"8\\",\\"item\\":\\"Item 8\\",\\"price\\":17},{\\"id\\":\\"9\\",\\"item\\":\\"x\\",\\"price\\":752},{\\"id\\":\\"10\\",\\"item\\":\\"Item 10\\",\\"price\\":73},{\\"id\\":\\"11\\",\\"item\\":\\"x\\",\\"price\\":94}]";
  protected readonly variantOptions = ["default","zebra"];
  protected variantIndex = 0;
  protected headline = "Matching results";
  protected headlineNumber = "0";

  protected updateTableHeight(value: string) {
    this.tableHeight = value;
  }

  protected handlePaginationChange() {
    this.pagination = !this.pagination;
  }

  protected handleServerSidePaginationChange() {
    this.serverSidePagination = !this.serverSidePagination;
  }

  protected updatePaginationItemsPerPage(value: string) {
    this.paginationItemsPerPage = value;
  }

  protected handleShowLoadingChange() {
    this.showLoading = !this.showLoading;
  }

  protected handleRowHeightChange() {
    this.rowHeightIndex = (this.rowHeightIndex + 1) % this.rowHeightOptions.length;
  }

  protected handleEnableSelectionChange() {
    this.enableSelection = !this.enableSelection;
  }

  protected handleFilterOrientationChange() {
    this.filterOrientationIndex = (this.filterOrientationIndex + 1) % this.filterOrientationOptions.length;
  }

  protected updateCols(value: string) {
    this.cols = value;
  }

  protected handleFitColumnsChange() {
    this.fitColumns = !this.fitColumns;
  }

  protected updateColumnMinWidth(value: string) {
    this.columnMinWidth = value;
  }

  protected updateColumnWidth(value: string) {
    this.columnWidth = value;
  }

  protected updateRows(value: string) {
    this.rows = value;
  }

  protected handleVariantChange() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
  }

  protected updateHeadline(value: string) {
    this.headline = value;
  }

  protected updateHeadlineNumber(value: string) {
    this.headlineNumber = value;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

  protected handleSortChange(event: CustomEvent) {
    console.log('ifxSortChange:', event);
    // Add your handler logic here
  }

}`;htmlCode=`  &lt;ifx-table
    fit-column=&quot;false&quot;
    (ifxSortChange)=&quot;handleSortChange($any($event))&quot;
    [rowHeight]=&quot;rowHeightOptions[rowHeightIndex]&quot;
    [cols]=&quot;cols&quot;
    [rows]=&quot;rows&quot;
    [tableHeight]=&quot;tableHeight&quot;
    [paginationItemsPerPage]=&quot;paginationItemsPerPage&quot;
    [filterOrientation]=&quot;filterOrientationOptions[filterOrientationIndex]&quot;
    [variant]=&quot;variantOptions[variantIndex]&quot;
    [columnMinWidth]=&quot;columnMinWidth&quot;
    [columnWidth]=&quot;columnWidth&quot;
    [headline]=&quot;headline&quot;
    [headlineNumber]=&quot;headlineNumber&quot;
    [pagination]=&quot;pagination&quot;
    [serverSidePagination]=&quot;serverSidePagination&quot;
    [showLoading]=&quot;showLoading&quot;
    [enableSelection]=&quot;enableSelection&quot;
    [fitColumns]=&quot;fitColumns&quot;&gt;&lt;/ifx-table&gt;`;tableHeight="auto";pagination=!1;serverSidePagination=!1;paginationItemsPerPage='[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}, {"value":"all","selected":false}]';showLoading=!1;rowHeightOptions=["compact","default"];rowHeightIndex=1;enableSelection=!1;filterOrientationOptions=["sidebar","topbar","none"];filterOrientationIndex=2;cols='[{"headerName":"ID","field":"id","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Item","field":"item","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Date","field":"date"}]';fitColumns=!1;columnMinWidth="200";columnWidth="100";rows='[{"id":"1","item":"Item 1","price":356,"date":"2025-06-25"},{"id":"2","item":"Item 2","price":55,"date":"2025-03-26"},{"id":"3","item":"Item 3","price":24},{"id":"4","item":"x","price":874},{"id":"5","item":"x","price":689},{"id":"6","item":"x","price":46},{"id":"7","item":"Item 7","price":421},{"id":"8","item":"Item 8","price":17},{"id":"9","item":"x","price":752},{"id":"10","item":"Item 10","price":73},{"id":"11","item":"x","price":94}]';variantOptions=["default","zebra"];variantIndex=0;headline="Matching results";headlineNumber="0";updateTableHeight(t){this.tableHeight=t}handlePaginationChange(){this.pagination=!this.pagination}handleServerSidePaginationChange(){this.serverSidePagination=!this.serverSidePagination}updatePaginationItemsPerPage(t){this.paginationItemsPerPage=t}handleShowLoadingChange(){this.showLoading=!this.showLoading}handleRowHeightChange(){this.rowHeightIndex=(this.rowHeightIndex+1)%this.rowHeightOptions.length}handleEnableSelectionChange(){this.enableSelection=!this.enableSelection}handleFilterOrientationChange(){this.filterOrientationIndex=(this.filterOrientationIndex+1)%this.filterOrientationOptions.length}updateCols(t){this.cols=t}handleFitColumnsChange(){this.fitColumns=!this.fitColumns}updateColumnMinWidth(t){this.columnMinWidth=t}updateColumnWidth(t){this.columnWidth=t}updateRows(t){this.rows=t}handleVariantChange(){this.variantIndex=(this.variantIndex+1)%this.variantOptions.length}updateHeadline(t){this.headline=t}updateHeadlineNumber(t){this.headlineNumber=t}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleSortChange(t){console.log("ifxSortChange:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-table-example-defaultstate"]],standalone:!1,decls:106,vars:42,consts:[["fit-column","false",3,"ifxSortChange","rowHeight","cols","rows","tableHeight","paginationItemsPerPage","filterOrientation","variant","columnMinWidth","columnWidth","headline","headlineNumber","pagination","serverSidePagination","showLoading","enableSelection","fitColumns"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","tableHeight","type","text",3,"ifxInput","value"],["label","paginationItemsPerPage","type","text",3,"ifxInput","value"],["label","cols","type","text",3,"ifxInput","value"],["label","columnMinWidth","type","text",3,"ifxInput","value"],["label","columnWidth","type","text",3,"ifxInput","value"],["label","rows","type","text",3,"ifxInput","value"],["label","headline","type","text",3,"ifxInput","value"],["label","headlineNumber","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-table",0),m("ifxSortChange",function(a){return e.handleSortChange(a)}),o(),l(1,"h3",1),s(2,"Controls"),o(),l(3,"div",2)(4,"ifx-button",3),m("click",function(){return e.handlePaginationChange()}),s(5,"Toggle Pagination"),o(),l(6,"ifx-button",3),m("click",function(){return e.handleServerSidePaginationChange()}),s(7,"Toggle ServerSidePagination"),o(),l(8,"ifx-button",3),m("click",function(){return e.handleShowLoadingChange()}),s(9,"Toggle ShowLoading"),o(),l(10,"ifx-button",3),m("click",function(){return e.handleRowHeightChange()}),s(11,"Toggle RowHeight"),o(),l(12,"ifx-button",3),m("click",function(){return e.handleEnableSelectionChange()}),s(13,"Toggle EnableSelection"),o(),l(14,"ifx-button",3),m("click",function(){return e.handleFilterOrientationChange()}),s(15,"Toggle FilterOrientation"),o(),l(16,"ifx-button",3),m("click",function(){return e.handleFitColumnsChange()}),s(17,"Toggle FitColumns"),o(),l(18,"ifx-button",3),m("click",function(){return e.handleVariantChange()}),s(19,"Toggle Variant"),o()(),l(20,"div",4)(21,"ifx-text-field",5),m("ifxInput",function(a){return e.updateTableHeight(e.getControlInputValue(a))}),o(),l(22,"ifx-text-field",6),m("ifxInput",function(a){return e.updatePaginationItemsPerPage(e.getControlInputValue(a))}),o(),l(23,"ifx-text-field",7),m("ifxInput",function(a){return e.updateCols(e.getControlInputValue(a))}),o(),l(24,"ifx-text-field",8),m("ifxInput",function(a){return e.updateColumnMinWidth(e.getControlInputValue(a))}),o(),l(25,"ifx-text-field",9),m("ifxInput",function(a){return e.updateColumnWidth(e.getControlInputValue(a))}),o(),l(26,"ifx-text-field",10),m("ifxInput",function(a){return e.updateRows(e.getControlInputValue(a))}),o(),l(27,"ifx-text-field",11),m("ifxInput",function(a){return e.updateHeadline(e.getControlInputValue(a))}),o(),l(28,"ifx-text-field",12),m("ifxInput",function(a){return e.updateHeadlineNumber(e.getControlInputValue(a))}),o()(),l(29,"div",13)(30,"div")(31,"b"),s(32,"tableHeight:"),o(),s(33),o(),l(34,"div")(35,"b"),s(36,"pagination:"),o(),s(37),o(),l(38,"div")(39,"b"),s(40,"serverSidePagination:"),o(),s(41),o(),l(42,"div")(43,"b"),s(44,"paginationItemsPerPage:"),o(),s(45),o(),l(46,"div")(47,"b"),s(48,"showLoading:"),o(),s(49),o(),l(50,"div")(51,"b"),s(52,"rowHeight:"),o(),s(53),o(),l(54,"div")(55,"b"),s(56,"enableSelection:"),o(),s(57),o(),l(58,"div")(59,"b"),s(60,"filterOrientation:"),o(),s(61),o(),l(62,"div")(63,"b"),s(64,"cols:"),o(),s(65),o(),l(66,"div")(67,"b"),s(68,"fitColumns:"),o(),s(69),o(),l(70,"div")(71,"b"),s(72,"columnMinWidth:"),o(),s(73),o(),l(74,"div")(75,"b"),s(76,"columnWidth:"),o(),s(77),o(),l(78,"div")(79,"b"),s(80,"rows:"),o(),s(81),o(),l(82,"div")(83,"b"),s(84,"variant:"),o(),s(85),o(),l(86,"div")(87,"b"),s(88,"headline:"),o(),s(89),o(),l(90,"div")(91,"b"),s(92,"headlineNumber:"),o(),s(93),o()(),l(94,"details",14)(95,"summary"),s(96,"View Code"),o(),l(97,"div",15)(98,"h3"),s(99,"ifx-table-example-defaultstate.ts"),o(),l(100,"pre"),b(101,"code",16),o(),l(102,"h3"),s(103,"ifx-table-example-defaultstate.html"),o(),l(104,"pre"),b(105,"code",17),o()()()),i&2&&(p("rowHeight",e.rowHeightOptions[e.rowHeightIndex])("cols",e.cols)("rows",e.rows)("tableHeight",e.tableHeight)("paginationItemsPerPage",e.paginationItemsPerPage)("filterOrientation",e.filterOrientationOptions[e.filterOrientationIndex])("variant",e.variantOptions[e.variantIndex])("columnMinWidth",e.columnMinWidth)("columnWidth",e.columnWidth)("headline",e.headline)("headlineNumber",e.headlineNumber)("pagination",e.pagination)("serverSidePagination",e.serverSidePagination)("showLoading",e.showLoading)("enableSelection",e.enableSelection)("fitColumns",e.fitColumns),d(21),p("value",e.stringifyValue(e.tableHeight)),d(),p("value",e.stringifyValue(e.paginationItemsPerPage)),d(),p("value",e.stringifyValue(e.cols)),d(),p("value",e.stringifyValue(e.columnMinWidth)),d(),p("value",e.stringifyValue(e.columnWidth)),d(),p("value",e.stringifyValue(e.rows)),d(),p("value",e.stringifyValue(e.headline)),d(),p("value",e.stringifyValue(e.headlineNumber)),d(5),h(" ",e.stringifyValue(e.tableHeight)),d(4),h(" ",e.stringifyValue(e.pagination)),d(4),h(" ",e.stringifyValue(e.serverSidePagination)),d(4),h(" ",e.stringifyValue(e.paginationItemsPerPage)),d(4),h(" ",e.stringifyValue(e.showLoading)),d(4),h(" ",e.stringifyValue(e.rowHeightOptions[e.rowHeightIndex])),d(4),h(" ",e.stringifyValue(e.enableSelection)),d(4),h(" ",e.stringifyValue(e.filterOrientationOptions[e.filterOrientationIndex])),d(4),h(" ",e.stringifyValue(e.cols)),d(4),h(" ",e.stringifyValue(e.fitColumns)),d(4),h(" ",e.stringifyValue(e.columnMinWidth)),d(4),h(" ",e.stringifyValue(e.columnWidth)),d(4),h(" ",e.stringifyValue(e.rows)),d(4),h(" ",e.stringifyValue(e.variantOptions[e.variantIndex])),d(4),h(" ",e.stringifyValue(e.headline)),d(4),h(" ",e.stringifyValue(e.headlineNumber)),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,Tg,O,N],encapsulation:2})};var Ha=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-tabs-example',
  templateUrl: './ifx-tabs-example.html',
  styleUrl: './ifx-tabs-example.scss',
  standalone: false
})
export class IfxTabsExample {

  protected readonly orientationOptions = ["horizontal","vertical"];
  protected orientationIndex = 0;
  protected readonly iconOptions = ["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];
  protected iconIndex = 0;
  protected fullWidth = false;
  protected readonly iconPositionOptions = ["left","right"];
  protected iconPositionIndex = 0;
  protected activeTabIndex = "0";
  protected header = "Tab";
  protected subline = "";
  protected disabled = false;
  protected label = "";
  protected number = "0";
  protected positionSticky = false;

  protected handleOrientationChange() {
    this.orientationIndex = (this.orientationIndex + 1) % this.orientationOptions.length;
  }

  protected handleIconChange() {
    this.iconIndex = (this.iconIndex + 1) % this.iconOptions.length;
  }

  protected handleFullWidthChange() {
    this.fullWidth = !this.fullWidth;
  }

  protected handleIconPositionChange() {
    this.iconPositionIndex = (this.iconPositionIndex + 1) % this.iconPositionOptions.length;
  }

  protected updateActiveTabIndex(value: string) {
    this.activeTabIndex = value;
  }

  protected updateHeader(value: string) {
    this.header = value;
  }

  protected updateSubline(value: string) {
    this.subline = value;
  }

  protected handleDisabledChange() {
    this.disabled = !this.disabled;
  }

  protected updateLabel(value: string) {
    this.label = value;
  }

  protected updateNumber(value: string) {
    this.number = value;
  }

  protected handlePositionStickyChange() {
    this.positionSticky = !this.positionSticky;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

  protected handleChange(event: CustomEvent) {
    console.log('ifxChange:', event);
    // Add your handler logic here
  }

  protected handleTabHeaderChange(event: CustomEvent) {
    console.log('tabHeaderChange:', event);
    // Add your handler logic here
  }

}`;htmlCode=`  &lt;ifx-tabs
    [orientation]=&quot;orientationOptions[orientationIndex]&quot;
    [activeTabIndex]=&quot;activeTabIndex&quot;
    [fullWidth]=&quot;fullWidth&quot;
    [positionSticky]=&quot;positionSticky&quot;
    [subline]=&quot;subline&quot;
    [label]=&quot;label&quot;
    [number]=&quot;number&quot;&gt;
    &lt;ifx-tab
      [header]=&quot;header&quot;
      [icon]=&quot;iconOptions[iconIndex]&quot;
      [iconPosition]=&quot;iconPositionOptions[iconPositionIndex]&quot;
      [subline]=&quot;subline&quot;
      [label]=&quot;label&quot;
      [number]=&quot;number&quot;
      [disabled]=&quot;disabled&quot;
      [positionSticky]=&quot;positionSticky&quot;&gt;Content for Tab #1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.&lt;/ifx-tab&gt;
    &lt;ifx-tab
      [header]=&quot;header&quot;
      [disabled]=&quot;disabled&quot;
      [icon]=&quot;iconOptions[iconIndex]&quot;
      [iconPosition]=&quot;iconPositionOptions[iconPositionIndex]&quot;
      [subline]=&quot;subline&quot;
      [label]=&quot;label&quot;
      [number]=&quot;number&quot;
      [positionSticky]=&quot;positionSticky&quot;&gt;Content for Tab #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.&lt;/ifx-tab&gt;
    &lt;ifx-tab
      [header]=&quot;header&quot;
      [icon]=&quot;iconOptions[iconIndex]&quot;
      [iconPosition]=&quot;iconPositionOptions[iconPositionIndex]&quot;
      [subline]=&quot;subline&quot;
      [label]=&quot;label&quot;
      [number]=&quot;number&quot;
      [disabled]=&quot;disabled&quot;
      [positionSticky]=&quot;positionSticky&quot;&gt;Content for Tab #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.&lt;/ifx-tab&gt;
  &lt;/ifx-tabs&gt;`;orientationOptions=["horizontal","vertical"];orientationIndex=0;iconOptions=["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];iconIndex=0;fullWidth=!1;iconPositionOptions=["left","right"];iconPositionIndex=0;activeTabIndex="0";header="Tab";subline="";disabled=!1;label="";number="0";positionSticky=!1;handleOrientationChange(){this.orientationIndex=(this.orientationIndex+1)%this.orientationOptions.length}handleIconChange(){this.iconIndex=(this.iconIndex+1)%this.iconOptions.length}handleFullWidthChange(){this.fullWidth=!this.fullWidth}handleIconPositionChange(){this.iconPositionIndex=(this.iconPositionIndex+1)%this.iconPositionOptions.length}updateActiveTabIndex(t){this.activeTabIndex=t}updateHeader(t){this.header=t}updateSubline(t){this.subline=t}handleDisabledChange(){this.disabled=!this.disabled}updateLabel(t){this.label=t}updateNumber(t){this.number=t}handlePositionStickyChange(){this.positionSticky=!this.positionSticky}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleChange(t){console.log("ifxChange:",t)}handleTabHeaderChange(t){console.log("tabHeaderChange:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-tabs-example"]],standalone:!1,decls:85,vars:49,consts:[[3,"orientation","activeTabIndex","fullWidth","positionSticky","subline","label","number"],[3,"header","icon","iconPosition","subline","label","number","disabled","positionSticky"],[3,"header","disabled","icon","iconPosition","subline","label","number","positionSticky"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","activeTabIndex","type","text",3,"ifxInput","value"],["label","header","type","text",3,"ifxInput","value"],["label","subline","type","text",3,"ifxInput","value"],["label","label","type","text",3,"ifxInput","value"],["label","number","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-tabs",0)(1,"ifx-tab",1),s(2,"Content for Tab #1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque."),o(),l(3,"ifx-tab",2),s(4,"Content for Tab #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque."),o(),l(5,"ifx-tab",1),s(6,"Content for Tab #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque."),o()(),l(7,"h3",3),s(8,"Controls"),o(),l(9,"div",4)(10,"ifx-button",5),m("click",function(){return e.handleOrientationChange()}),s(11,"Toggle Orientation"),o(),l(12,"ifx-button",5),m("click",function(){return e.handleIconChange()}),s(13,"Toggle Icon"),o(),l(14,"ifx-button",5),m("click",function(){return e.handleFullWidthChange()}),s(15,"Toggle FullWidth"),o(),l(16,"ifx-button",5),m("click",function(){return e.handleIconPositionChange()}),s(17,"Toggle IconPosition"),o(),l(18,"ifx-button",5),m("click",function(){return e.handleDisabledChange()}),s(19,"Toggle Disabled"),o(),l(20,"ifx-button",5),m("click",function(){return e.handlePositionStickyChange()}),s(21,"Toggle PositionSticky"),o()(),l(22,"div",6)(23,"ifx-text-field",7),m("ifxInput",function(a){return e.updateActiveTabIndex(e.getControlInputValue(a))}),o(),l(24,"ifx-text-field",8),m("ifxInput",function(a){return e.updateHeader(e.getControlInputValue(a))}),o(),l(25,"ifx-text-field",9),m("ifxInput",function(a){return e.updateSubline(e.getControlInputValue(a))}),o(),l(26,"ifx-text-field",10),m("ifxInput",function(a){return e.updateLabel(e.getControlInputValue(a))}),o(),l(27,"ifx-text-field",11),m("ifxInput",function(a){return e.updateNumber(e.getControlInputValue(a))}),o()(),l(28,"div",12)(29,"div")(30,"b"),s(31,"orientation:"),o(),s(32),o(),l(33,"div")(34,"b"),s(35,"icon:"),o(),s(36),o(),l(37,"div")(38,"b"),s(39,"fullWidth:"),o(),s(40),o(),l(41,"div")(42,"b"),s(43,"iconPosition:"),o(),s(44),o(),l(45,"div")(46,"b"),s(47,"activeTabIndex:"),o(),s(48),o(),l(49,"div")(50,"b"),s(51,"header:"),o(),s(52),o(),l(53,"div")(54,"b"),s(55,"subline:"),o(),s(56),o(),l(57,"div")(58,"b"),s(59,"disabled:"),o(),s(60),o(),l(61,"div")(62,"b"),s(63,"label:"),o(),s(64),o(),l(65,"div")(66,"b"),s(67,"number:"),o(),s(68),o(),l(69,"div")(70,"b"),s(71,"positionSticky:"),o(),s(72),o()(),l(73,"details",13)(74,"summary"),s(75,"View Code"),o(),l(76,"div",14)(77,"h3"),s(78,"ifx-tabs-example.ts"),o(),l(79,"pre"),b(80,"code",15),o(),l(81,"h3"),s(82,"ifx-tabs-example.html"),o(),l(83,"pre"),b(84,"code",16),o()()()),i&2&&(p("orientation",e.orientationOptions[e.orientationIndex])("activeTabIndex",e.activeTabIndex)("fullWidth",e.fullWidth)("positionSticky",e.positionSticky)("subline",e.subline)("label",e.label)("number",e.number),d(),p("header",e.header)("icon",e.iconOptions[e.iconIndex])("iconPosition",e.iconPositionOptions[e.iconPositionIndex])("subline",e.subline)("label",e.label)("number",e.number)("disabled",e.disabled)("positionSticky",e.positionSticky),d(2),p("header",e.header)("disabled",e.disabled)("icon",e.iconOptions[e.iconIndex])("iconPosition",e.iconPositionOptions[e.iconPositionIndex])("subline",e.subline)("label",e.label)("number",e.number)("positionSticky",e.positionSticky),d(2),p("header",e.header)("icon",e.iconOptions[e.iconIndex])("iconPosition",e.iconPositionOptions[e.iconPositionIndex])("subline",e.subline)("label",e.label)("number",e.number)("disabled",e.disabled)("positionSticky",e.positionSticky),d(18),p("value",e.stringifyValue(e.activeTabIndex)),d(),p("value",e.stringifyValue(e.header)),d(),p("value",e.stringifyValue(e.subline)),d(),p("value",e.stringifyValue(e.label)),d(),p("value",e.stringifyValue(e.number)),d(5),h(" ",e.stringifyValue(e.orientationOptions[e.orientationIndex])),d(4),h(" ",e.stringifyValue(e.iconOptions[e.iconIndex])),d(4),h(" ",e.stringifyValue(e.fullWidth)),d(4),h(" ",e.stringifyValue(e.iconPositionOptions[e.iconPositionIndex])),d(4),h(" ",e.stringifyValue(e.activeTabIndex)),d(4),h(" ",e.stringifyValue(e.header)),d(4),h(" ",e.stringifyValue(e.subline)),d(4),h(" ",e.stringifyValue(e.disabled)),d(4),h(" ",e.stringifyValue(e.label)),d(4),h(" ",e.stringifyValue(e.number)),d(4),h(" ",e.stringifyValue(e.positionSticky)),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,Dg,kg,O,N],encapsulation:2})};var ja=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-text-field-example',
  templateUrl: './ifx-text-field-example.html',
  styleUrl: './ifx-text-field-example.scss',
  standalone: false
})
export class IfxTextFieldExample {

  protected label = "Label";
  protected error = false;
  protected disabled = false;
  protected readonly sizeOptions = ["s","m"];
  protected sizeIndex = 1;
  protected readonly iconOptions = ["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];
  protected iconIndex = 0;
  protected success = false;
  protected placeholder = "Placeholder";
  protected readOnly = false;
  protected caption = "Caption";
  protected required = true;
  protected name = "text-field";
  protected showDeleteIcon = false;
  protected maxlength = 0;
  protected value = "";
  protected internalId = "text-field";
  protected autocomplete = "on";
  protected readonly typeOptions = ["text","password"];
  protected typeIndex = 0;

  protected updateLabel(value: string) {
    this.label = value;
  }

  protected handleErrorChange() {
    this.error = !this.error;
  }

  protected handleDisabledChange() {
    this.disabled = !this.disabled;
  }

  protected handleSizeChange() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected handleIconChange() {
    this.iconIndex = (this.iconIndex + 1) % this.iconOptions.length;
  }

  protected handleSuccessChange() {
    this.success = !this.success;
  }

  protected updatePlaceholder(value: string) {
    this.placeholder = value;
  }

  protected handleReadOnlyChange() {
    this.readOnly = !this.readOnly;
  }

  protected updateCaption(value: string) {
    this.caption = value;
  }

  protected handleRequiredChange() {
    this.required = !this.required;
  }

  protected updateName(value: string) {
    this.name = value;
  }

  protected handleShowDeleteIconChange() {
    this.showDeleteIcon = !this.showDeleteIcon;
  }

  protected updateMaxlength(value: string) {
    this.maxlength = Number(value);
  }

  protected updateValue(value: string) {
    this.value = value;
  }

  protected updateInternalId(value: string) {
    this.internalId = value;
  }

  protected updateAutocomplete(value: string) {
    this.autocomplete = value;
  }

  protected handleTypeChange() {
    this.typeIndex = (this.typeIndex + 1) % this.typeOptions.length;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

  protected handleInput(event: CustomEvent) {
    console.log('ifxInput:', event);
    // Add your handler logic here
  }

}`;htmlCode=`  &lt;ifx-text-field
    aria-label=&quot;text field for user input&quot;
    (ifxInput)=&quot;handleInput($any($event))&quot;
    [error]=&quot;error&quot;
    [size]=&quot;sizeOptions[sizeIndex]&quot;
    [icon]=&quot;iconOptions[iconIndex]&quot;
    [success]=&quot;success&quot;
    [placeholder]=&quot;placeholder&quot;
    [readOnly]=&quot;readOnly&quot;
    [caption]=&quot;caption&quot;
    [label]=&quot;label&quot;
    [required]=&quot;required&quot;
    [name]=&quot;name&quot;
    [showDeleteIcon]=&quot;showDeleteIcon&quot;
    [value]=&quot;value&quot;
    [autocomplete]=&quot;autocomplete&quot;
    [type]=&quot;typeOptions[typeIndex]&quot;
    [internalId]=&quot;internalId&quot;
    [disabled]=&quot;disabled&quot;
    [maxlength]=&quot;maxlength&quot;&gt;&lt;/ifx-text-field&gt;`;label="Label";error=!1;disabled=!1;sizeOptions=["s","m"];sizeIndex=1;iconOptions=["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];iconIndex=0;success=!1;placeholder="Placeholder";readOnly=!1;caption="Caption";required=!0;name="text-field";showDeleteIcon=!1;maxlength=0;value="";internalId="text-field";autocomplete="on";typeOptions=["text","password"];typeIndex=0;updateLabel(t){this.label=t}handleErrorChange(){this.error=!this.error}handleDisabledChange(){this.disabled=!this.disabled}handleSizeChange(){this.sizeIndex=(this.sizeIndex+1)%this.sizeOptions.length}handleIconChange(){this.iconIndex=(this.iconIndex+1)%this.iconOptions.length}handleSuccessChange(){this.success=!this.success}updatePlaceholder(t){this.placeholder=t}handleReadOnlyChange(){this.readOnly=!this.readOnly}updateCaption(t){this.caption=t}handleRequiredChange(){this.required=!this.required}updateName(t){this.name=t}handleShowDeleteIconChange(){this.showDeleteIcon=!this.showDeleteIcon}updateMaxlength(t){this.maxlength=Number(t)}updateValue(t){this.value=t}updateInternalId(t){this.internalId=t}updateAutocomplete(t){this.autocomplete=t}handleTypeChange(){this.typeIndex=(this.typeIndex+1)%this.typeOptions.length}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleInput(t){console.log("ifxInput:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-text-field-example"]],standalone:!1,decls:112,vars:44,consts:[["aria-label","text field for user input",3,"ifxInput","error","size","icon","success","placeholder","readOnly","caption","label","required","name","showDeleteIcon","value","autocomplete","type","internalId","disabled","maxlength"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","label","type","text",3,"ifxInput","value"],["label","placeholder","type","text",3,"ifxInput","value"],["label","caption","type","text",3,"ifxInput","value"],["label","name","type","text",3,"ifxInput","value"],["label","maxlength","type","number",3,"ifxInput","value"],["label","value","type","text",3,"ifxInput","value"],["label","internalId","type","text",3,"ifxInput","value"],["label","autocomplete","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-text-field",0),m("ifxInput",function(a){return e.handleInput(a)}),o(),l(1,"h3",1),s(2,"Controls"),o(),l(3,"div",2)(4,"ifx-button",3),m("click",function(){return e.handleErrorChange()}),s(5,"Toggle Error"),o(),l(6,"ifx-button",3),m("click",function(){return e.handleDisabledChange()}),s(7,"Toggle Disabled"),o(),l(8,"ifx-button",3),m("click",function(){return e.handleSizeChange()}),s(9,"Toggle Size"),o(),l(10,"ifx-button",3),m("click",function(){return e.handleIconChange()}),s(11,"Toggle Icon"),o(),l(12,"ifx-button",3),m("click",function(){return e.handleSuccessChange()}),s(13,"Toggle Success"),o(),l(14,"ifx-button",3),m("click",function(){return e.handleReadOnlyChange()}),s(15,"Toggle ReadOnly"),o(),l(16,"ifx-button",3),m("click",function(){return e.handleRequiredChange()}),s(17,"Toggle Required"),o(),l(18,"ifx-button",3),m("click",function(){return e.handleShowDeleteIconChange()}),s(19,"Toggle ShowDeleteIcon"),o(),l(20,"ifx-button",3),m("click",function(){return e.handleTypeChange()}),s(21,"Toggle Type"),o()(),l(22,"div",4)(23,"ifx-text-field",5),m("ifxInput",function(a){return e.updateLabel(e.getControlInputValue(a))}),o(),l(24,"ifx-text-field",6),m("ifxInput",function(a){return e.updatePlaceholder(e.getControlInputValue(a))}),o(),l(25,"ifx-text-field",7),m("ifxInput",function(a){return e.updateCaption(e.getControlInputValue(a))}),o(),l(26,"ifx-text-field",8),m("ifxInput",function(a){return e.updateName(e.getControlInputValue(a))}),o(),l(27,"ifx-text-field",9),m("ifxInput",function(a){return e.updateMaxlength(e.getControlInputValue(a))}),o(),l(28,"ifx-text-field",10),m("ifxInput",function(a){return e.updateValue(e.getControlInputValue(a))}),o(),l(29,"ifx-text-field",11),m("ifxInput",function(a){return e.updateInternalId(e.getControlInputValue(a))}),o(),l(30,"ifx-text-field",12),m("ifxInput",function(a){return e.updateAutocomplete(e.getControlInputValue(a))}),o()(),l(31,"div",13)(32,"div")(33,"b"),s(34,"label:"),o(),s(35),o(),l(36,"div")(37,"b"),s(38,"error:"),o(),s(39),o(),l(40,"div")(41,"b"),s(42,"disabled:"),o(),s(43),o(),l(44,"div")(45,"b"),s(46,"size:"),o(),s(47),o(),l(48,"div")(49,"b"),s(50,"icon:"),o(),s(51),o(),l(52,"div")(53,"b"),s(54,"success:"),o(),s(55),o(),l(56,"div")(57,"b"),s(58,"placeholder:"),o(),s(59),o(),l(60,"div")(61,"b"),s(62,"readOnly:"),o(),s(63),o(),l(64,"div")(65,"b"),s(66,"caption:"),o(),s(67),o(),l(68,"div")(69,"b"),s(70,"required:"),o(),s(71),o(),l(72,"div")(73,"b"),s(74,"name:"),o(),s(75),o(),l(76,"div")(77,"b"),s(78,"showDeleteIcon:"),o(),s(79),o(),l(80,"div")(81,"b"),s(82,"maxlength:"),o(),s(83),o(),l(84,"div")(85,"b"),s(86,"value:"),o(),s(87),o(),l(88,"div")(89,"b"),s(90,"internalId:"),o(),s(91),o(),l(92,"div")(93,"b"),s(94,"autocomplete:"),o(),s(95),o(),l(96,"div")(97,"b"),s(98,"type:"),o(),s(99),o()(),l(100,"details",14)(101,"summary"),s(102,"View Code"),o(),l(103,"div",15)(104,"h3"),s(105,"ifx-text-field-example.ts"),o(),l(106,"pre"),b(107,"code",16),o(),l(108,"h3"),s(109,"ifx-text-field-example.html"),o(),l(110,"pre"),b(111,"code",17),o()()()),i&2&&(p("error",e.error)("size",e.sizeOptions[e.sizeIndex])("icon",e.iconOptions[e.iconIndex])("success",e.success)("placeholder",e.placeholder)("readOnly",e.readOnly)("caption",e.caption)("label",e.label)("required",e.required)("name",e.name)("showDeleteIcon",e.showDeleteIcon)("value",e.value)("autocomplete",e.autocomplete)("type",e.typeOptions[e.typeIndex])("internalId",e.internalId)("disabled",e.disabled)("maxlength",e.maxlength),d(23),p("value",e.stringifyValue(e.label)),d(),p("value",e.stringifyValue(e.placeholder)),d(),p("value",e.stringifyValue(e.caption)),d(),p("value",e.stringifyValue(e.name)),d(),p("value",e.stringifyValue(e.maxlength)),d(),p("value",e.stringifyValue(e.value)),d(),p("value",e.stringifyValue(e.internalId)),d(),p("value",e.stringifyValue(e.autocomplete)),d(5),h(" ",e.stringifyValue(e.label)),d(4),h(" ",e.stringifyValue(e.error)),d(4),h(" ",e.stringifyValue(e.disabled)),d(4),h(" ",e.stringifyValue(e.sizeOptions[e.sizeIndex])),d(4),h(" ",e.stringifyValue(e.iconOptions[e.iconIndex])),d(4),h(" ",e.stringifyValue(e.success)),d(4),h(" ",e.stringifyValue(e.placeholder)),d(4),h(" ",e.stringifyValue(e.readOnly)),d(4),h(" ",e.stringifyValue(e.caption)),d(4),h(" ",e.stringifyValue(e.required)),d(4),h(" ",e.stringifyValue(e.name)),d(4),h(" ",e.stringifyValue(e.showDeleteIcon)),d(4),h(" ",e.stringifyValue(e.maxlength)),d(4),h(" ",e.stringifyValue(e.value)),d(4),h(" ",e.stringifyValue(e.internalId)),d(4),h(" ",e.stringifyValue(e.autocomplete)),d(4),h(" ",e.stringifyValue(e.typeOptions[e.typeIndex])),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,O,N],encapsulation:2})};var Ba=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-textarea-example',
  templateUrl: './ifx-textarea-example.html',
  styleUrl: './ifx-textarea-example.scss',
  standalone: false
})
export class IfxTextareaExample {

  protected caption = "Caption text, description, error notification";
  protected cols = 43;
  protected disabled = false;
  protected error = false;
  protected label = "Label Text";
  protected maxlength = "";
  protected name = "textarea";
  protected placeholder = "Placeholder";
  protected required = true;
  protected readOnly = false;
  protected readonly resizeOptions = ["both","vertical","horizontal","none"];
  protected resizeIndex = 0;
  protected rows = "5";
  protected value = "";
  protected readonly wrapOptions = ["soft","hard","off"];
  protected wrapIndex = 0;
  protected fullWidth = false;

  protected updateCaption(value: string) {
    this.caption = value;
  }

  protected updateCols(value: string) {
    this.cols = Number(value);
  }

  protected handleDisabledChange() {
    this.disabled = !this.disabled;
  }

  protected handleErrorChange() {
    this.error = !this.error;
  }

  protected updateLabel(value: string) {
    this.label = value;
  }

  protected updateMaxlength(value: string) {
    this.maxlength = value;
  }

  protected updateName(value: string) {
    this.name = value;
  }

  protected updatePlaceholder(value: string) {
    this.placeholder = value;
  }

  protected handleRequiredChange() {
    this.required = !this.required;
  }

  protected handleReadOnlyChange() {
    this.readOnly = !this.readOnly;
  }

  protected handleResizeChange() {
    this.resizeIndex = (this.resizeIndex + 1) % this.resizeOptions.length;
  }

  protected updateRows(value: string) {
    this.rows = value;
  }

  protected updateValue(value: string) {
    this.value = value;
  }

  protected handleWrapChange() {
    this.wrapIndex = (this.wrapIndex + 1) % this.wrapOptions.length;
  }

  protected handleFullWidthChange() {
    this.fullWidth = !this.fullWidth;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

  protected handleInput(event: CustomEvent) {
    console.log('ifxInput:', event);
    // Add your handler logic here
  }

}`;htmlCode=`  &lt;ifx-textarea
    (ifxInput)=&quot;handleInput($any($event))&quot;
    [caption]=&quot;caption&quot;
    [cols]=&quot;cols&quot;
    [error]=&quot;error&quot;
    [label]=&quot;label&quot;
    [maxlength]=&quot;maxlength&quot;
    [name]=&quot;name&quot;
    [placeholder]=&quot;placeholder&quot;
    [required]=&quot;required&quot;
    [readOnly]=&quot;readOnly&quot;
    [resize]=&quot;resizeOptions[resizeIndex]&quot;
    [rows]=&quot;rows&quot;
    [value]=&quot;value&quot;
    [wrap]=&quot;wrapOptions[wrapIndex]&quot;
    [fullWidth]=&quot;fullWidth&quot;
    [disabled]=&quot;disabled&quot;&gt;&lt;/ifx-textarea&gt;`;caption="Caption text, description, error notification";cols=43;disabled=!1;error=!1;label="Label Text";maxlength="";name="textarea";placeholder="Placeholder";required=!0;readOnly=!1;resizeOptions=["both","vertical","horizontal","none"];resizeIndex=0;rows="5";value="";wrapOptions=["soft","hard","off"];wrapIndex=0;fullWidth=!1;updateCaption(t){this.caption=t}updateCols(t){this.cols=Number(t)}handleDisabledChange(){this.disabled=!this.disabled}handleErrorChange(){this.error=!this.error}updateLabel(t){this.label=t}updateMaxlength(t){this.maxlength=t}updateName(t){this.name=t}updatePlaceholder(t){this.placeholder=t}handleRequiredChange(){this.required=!this.required}handleReadOnlyChange(){this.readOnly=!this.readOnly}handleResizeChange(){this.resizeIndex=(this.resizeIndex+1)%this.resizeOptions.length}updateRows(t){this.rows=t}updateValue(t){this.value=t}handleWrapChange(){this.wrapIndex=(this.wrapIndex+1)%this.wrapOptions.length}handleFullWidthChange(){this.fullWidth=!this.fullWidth}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleInput(t){console.log("ifxInput:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-textarea-example"]],standalone:!1,decls:100,vars:40,consts:[[3,"ifxInput","caption","cols","error","label","maxlength","name","placeholder","required","readOnly","resize","rows","value","wrap","fullWidth","disabled"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","caption","type","text",3,"ifxInput","value"],["label","cols","type","number",3,"ifxInput","value"],["label","label","type","text",3,"ifxInput","value"],["label","maxlength","type","text",3,"ifxInput","value"],["label","name","type","text",3,"ifxInput","value"],["label","placeholder","type","text",3,"ifxInput","value"],["label","rows","type","text",3,"ifxInput","value"],["label","value","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-textarea",0),m("ifxInput",function(a){return e.handleInput(a)}),o(),l(1,"h3",1),s(2,"Controls"),o(),l(3,"div",2)(4,"ifx-button",3),m("click",function(){return e.handleDisabledChange()}),s(5,"Toggle Disabled"),o(),l(6,"ifx-button",3),m("click",function(){return e.handleErrorChange()}),s(7,"Toggle Error"),o(),l(8,"ifx-button",3),m("click",function(){return e.handleRequiredChange()}),s(9,"Toggle Required"),o(),l(10,"ifx-button",3),m("click",function(){return e.handleReadOnlyChange()}),s(11,"Toggle ReadOnly"),o(),l(12,"ifx-button",3),m("click",function(){return e.handleResizeChange()}),s(13,"Toggle Resize"),o(),l(14,"ifx-button",3),m("click",function(){return e.handleWrapChange()}),s(15,"Toggle Wrap"),o(),l(16,"ifx-button",3),m("click",function(){return e.handleFullWidthChange()}),s(17,"Toggle FullWidth"),o()(),l(18,"div",4)(19,"ifx-text-field",5),m("ifxInput",function(a){return e.updateCaption(e.getControlInputValue(a))}),o(),l(20,"ifx-text-field",6),m("ifxInput",function(a){return e.updateCols(e.getControlInputValue(a))}),o(),l(21,"ifx-text-field",7),m("ifxInput",function(a){return e.updateLabel(e.getControlInputValue(a))}),o(),l(22,"ifx-text-field",8),m("ifxInput",function(a){return e.updateMaxlength(e.getControlInputValue(a))}),o(),l(23,"ifx-text-field",9),m("ifxInput",function(a){return e.updateName(e.getControlInputValue(a))}),o(),l(24,"ifx-text-field",10),m("ifxInput",function(a){return e.updatePlaceholder(e.getControlInputValue(a))}),o(),l(25,"ifx-text-field",11),m("ifxInput",function(a){return e.updateRows(e.getControlInputValue(a))}),o(),l(26,"ifx-text-field",12),m("ifxInput",function(a){return e.updateValue(e.getControlInputValue(a))}),o()(),l(27,"div",13)(28,"div")(29,"b"),s(30,"caption:"),o(),s(31),o(),l(32,"div")(33,"b"),s(34,"cols:"),o(),s(35),o(),l(36,"div")(37,"b"),s(38,"disabled:"),o(),s(39),o(),l(40,"div")(41,"b"),s(42,"error:"),o(),s(43),o(),l(44,"div")(45,"b"),s(46,"label:"),o(),s(47),o(),l(48,"div")(49,"b"),s(50,"maxlength:"),o(),s(51),o(),l(52,"div")(53,"b"),s(54,"name:"),o(),s(55),o(),l(56,"div")(57,"b"),s(58,"placeholder:"),o(),s(59),o(),l(60,"div")(61,"b"),s(62,"required:"),o(),s(63),o(),l(64,"div")(65,"b"),s(66,"readOnly:"),o(),s(67),o(),l(68,"div")(69,"b"),s(70,"resize:"),o(),s(71),o(),l(72,"div")(73,"b"),s(74,"rows:"),o(),s(75),o(),l(76,"div")(77,"b"),s(78,"value:"),o(),s(79),o(),l(80,"div")(81,"b"),s(82,"wrap:"),o(),s(83),o(),l(84,"div")(85,"b"),s(86,"fullWidth:"),o(),s(87),o()(),l(88,"details",14)(89,"summary"),s(90,"View Code"),o(),l(91,"div",15)(92,"h3"),s(93,"ifx-textarea-example.ts"),o(),l(94,"pre"),b(95,"code",16),o(),l(96,"h3"),s(97,"ifx-textarea-example.html"),o(),l(98,"pre"),b(99,"code",17),o()()()),i&2&&(p("caption",e.caption)("cols",e.cols)("error",e.error)("label",e.label)("maxlength",e.maxlength)("name",e.name)("placeholder",e.placeholder)("required",e.required)("readOnly",e.readOnly)("resize",e.resizeOptions[e.resizeIndex])("rows",e.rows)("value",e.value)("wrap",e.wrapOptions[e.wrapIndex])("fullWidth",e.fullWidth)("disabled",e.disabled),d(19),p("value",e.stringifyValue(e.caption)),d(),p("value",e.stringifyValue(e.cols)),d(),p("value",e.stringifyValue(e.label)),d(),p("value",e.stringifyValue(e.maxlength)),d(),p("value",e.stringifyValue(e.name)),d(),p("value",e.stringifyValue(e.placeholder)),d(),p("value",e.stringifyValue(e.rows)),d(),p("value",e.stringifyValue(e.value)),d(5),h(" ",e.stringifyValue(e.caption)),d(4),h(" ",e.stringifyValue(e.cols)),d(4),h(" ",e.stringifyValue(e.disabled)),d(4),h(" ",e.stringifyValue(e.error)),d(4),h(" ",e.stringifyValue(e.label)),d(4),h(" ",e.stringifyValue(e.maxlength)),d(4),h(" ",e.stringifyValue(e.name)),d(4),h(" ",e.stringifyValue(e.placeholder)),d(4),h(" ",e.stringifyValue(e.required)),d(4),h(" ",e.stringifyValue(e.readOnly)),d(4),h(" ",e.stringifyValue(e.resizeOptions[e.resizeIndex])),d(4),h(" ",e.stringifyValue(e.rows)),d(4),h(" ",e.stringifyValue(e.value)),d(4),h(" ",e.stringifyValue(e.wrapOptions[e.wrapIndex])),d(4),h(" ",e.stringifyValue(e.fullWidth)),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,O,ia,N],encapsulation:2})};var za=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-tooltip-example',
  templateUrl: './ifx-tooltip-example.html',
  styleUrl: './ifx-tooltip-example.scss',
  standalone: false
})
export class IfxTooltipExample {

  protected text = "Hi, I'm a tooltip";
  protected readonly iconOptions = ["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];
  protected iconIndex = 0;
  protected readonly positionOptions = ["auto","bottom-start","top-start","left","bottom-end","top-end","right","bottom","top"];
  protected positionIndex = 0;
  protected readonly variantOptions = ["compact","dismissible","extended"];
  protected variantIndex = 0;
  protected header = "Tooltip headline";
  protected ariaLabelText = "Tooltip with important information";

  protected updateText(value: string) {
    this.text = value;
  }

  protected handleIconChange() {
    this.iconIndex = (this.iconIndex + 1) % this.iconOptions.length;
  }

  protected handlePositionChange() {
    this.positionIndex = (this.positionIndex + 1) % this.positionOptions.length;
  }

  protected handleVariantChange() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
  }

  protected updateHeader(value: string) {
    this.header = value;
  }

  protected updateAriaLabelText(value: string) {
    this.ariaLabelText = value;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

}`;htmlCode=`  &lt;ifx-tooltip
    [text]=&quot;text&quot;
    [variant]=&quot;variantOptions[variantIndex]&quot;
    [position]=&quot;positionOptions[positionIndex]&quot;
    [icon]=&quot;iconOptions[iconIndex]&quot;
    [ariaLabelText]=&quot;ariaLabelText&quot;
    [header]=&quot;header&quot;&gt;I&#039;m the tooltip reference element - Please hover me&lt;/ifx-tooltip&gt;`;text="Hi, I'm a tooltip";iconOptions=["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];iconIndex=0;positionOptions=["auto","bottom-start","top-start","left","bottom-end","top-end","right","bottom","top"];positionIndex=0;variantOptions=["compact","dismissible","extended"];variantIndex=0;header="Tooltip headline";ariaLabelText="Tooltip with important information";updateText(t){this.text=t}handleIconChange(){this.iconIndex=(this.iconIndex+1)%this.iconOptions.length}handlePositionChange(){this.positionIndex=(this.positionIndex+1)%this.positionOptions.length}handleVariantChange(){this.variantIndex=(this.variantIndex+1)%this.variantOptions.length}updateHeader(t){this.header=t}updateAriaLabelText(t){this.ariaLabelText=t}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ifx-tooltip-example"]],standalone:!1,decls:52,vars:17,consts:[[3,"text","variant","position","icon","ariaLabelText","header"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","text","type","text",3,"ifxInput","value"],["label","header","type","text",3,"ifxInput","value"],["label","ariaLabelText","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-tooltip",0),s(1,"I'm the tooltip reference element - Please hover me"),o(),l(2,"h3",1),s(3,"Controls"),o(),l(4,"div",2)(5,"ifx-button",3),m("click",function(){return e.handleIconChange()}),s(6,"Toggle Icon"),o(),l(7,"ifx-button",3),m("click",function(){return e.handlePositionChange()}),s(8,"Toggle Position"),o(),l(9,"ifx-button",3),m("click",function(){return e.handleVariantChange()}),s(10,"Toggle Variant"),o()(),l(11,"div",4)(12,"ifx-text-field",5),m("ifxInput",function(a){return e.updateText(e.getControlInputValue(a))}),o(),l(13,"ifx-text-field",6),m("ifxInput",function(a){return e.updateHeader(e.getControlInputValue(a))}),o(),l(14,"ifx-text-field",7),m("ifxInput",function(a){return e.updateAriaLabelText(e.getControlInputValue(a))}),o()(),l(15,"div",8)(16,"div")(17,"b"),s(18,"text:"),o(),s(19),o(),l(20,"div")(21,"b"),s(22,"icon:"),o(),s(23),o(),l(24,"div")(25,"b"),s(26,"position:"),o(),s(27),o(),l(28,"div")(29,"b"),s(30,"variant:"),o(),s(31),o(),l(32,"div")(33,"b"),s(34,"header:"),o(),s(35),o(),l(36,"div")(37,"b"),s(38,"ariaLabelText:"),o(),s(39),o()(),l(40,"details",9)(41,"summary"),s(42,"View Code"),o(),l(43,"div",10)(44,"h3"),s(45,"ifx-tooltip-example.ts"),o(),l(46,"pre"),b(47,"code",11),o(),l(48,"h3"),s(49,"ifx-tooltip-example.html"),o(),l(50,"pre"),b(51,"code",12),o()()()),i&2&&(p("text",e.text)("variant",e.variantOptions[e.variantIndex])("position",e.positionOptions[e.positionIndex])("icon",e.iconOptions[e.iconIndex])("ariaLabelText",e.ariaLabelText)("header",e.header),d(12),p("value",e.stringifyValue(e.text)),d(),p("value",e.stringifyValue(e.header)),d(),p("value",e.stringifyValue(e.ariaLabelText)),d(5),h(" ",e.stringifyValue(e.text)),d(4),h(" ",e.stringifyValue(e.iconOptions[e.iconIndex])),d(4),h(" ",e.stringifyValue(e.positionOptions[e.positionIndex])),d(4),h(" ",e.stringifyValue(e.variantOptions[e.variantIndex])),d(4),h(" ",e.stringifyValue(e.header)),d(4),h(" ",e.stringifyValue(e.ariaLabelText)),d(8),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,O,Mg,N],encapsulation:2})};var Ua=class n{opened=!1;tsCode=`import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-example',
  standalone: false,
  templateUrl: './modal-example.html',
  styleUrl: './modal-example.scss'
})
export class ModalExample {
  opened = false;

  openModal() {
    this.opened = true;
  }

  protected handleOpen(event: any) {
    console.log('ifxOpen:', event.detail);
  }

  protected handleClose(event: any) {
    console.log('ifxClose:', event.detail);
  }
}`;htmlCode=`
  &lt;ifx-modal
    caption="Modal Title"
    [captionAriaLabel]="'Additional information for caption'"
    [closeButtonAriaLabel]="'Close modal'"
    variant="default"
    [closeOnOverlayClick]="false"
    [showCloseButton]="true"
    size="s"
    [(ngModel)]="opened"
    (ifxOpen)="handleOpen($event)"
    (ifxClose)="handleClose($event)">
    <div slot="content">
      <span>Modal content</span>
    </div>
    <div slot="buttons">
      <ifx-button variant="secondary">Cancel</ifx-button>
      <ifx-button>OK</ifx-button>
    </div>
  </ifx-modal>

  <ifx-button (click)="openModal()">Open Modal</ifx-button>`;openModal(){this.opened=!0}handleOpen(t){console.log("ifxOpen:",t.detail)}handleClose(t){console.log("ifxClose:",t.detail)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-modal-example"]],standalone:!1,decls:25,vars:7,consts:[["caption","Modal Title","variant","default","size","s",3,"ngModelChange","ifxOpen","ifxClose","captionAriaLabel","closeButtonAriaLabel","closeOnOverlayClick","showCloseButton","ngModel"],["slot","content"],["slot","buttons"],["variant","secondary"],[3,"click"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"p"),s(1,` This example demonstrates the classic Angular NgModule pattern with primitive values and two-way binding using [(ngModel)].
`),o(),l(2,"ifx-modal",0),Ze("ngModelChange",function(a){return st(e.opened,a)||(e.opened=a),a}),m("ifxOpen",function(a){return e.handleOpen(a)})("ifxClose",function(a){return e.handleClose(a)}),l(3,"div",1)(4,"span"),s(5,"Modal content"),o()(),l(6,"div",2)(7,"ifx-button",3),s(8,"Cancel"),o(),l(9,"ifx-button"),s(10,"OK"),o()()(),l(11,"ifx-button",4),m("click",function(){return e.openModal()}),s(12,"Open Modal"),o(),l(13,"details",5)(14,"summary"),s(15,"View Code"),o(),l(16,"div",6)(17,"h3"),s(18,"modal-example.ts"),o(),l(19,"pre"),b(20,"code",7),o(),l(21,"h3"),s(22,"modal-example.html"),o(),l(23,"pre"),b(24,"code",8),o()()()),i&2&&(d(2),p("captionAriaLabel","Additional information for caption")("closeButtonAriaLabel","Close modal")("closeOnOverlayClick",!1)("showCloseButton",!0),We("ngModel",e.opened),d(18),p("innerHTML",e.tsCode,_),d(4),p("innerHTML",e.htmlCode,_))},dependencies:[Wo,ji,k,fg,Ag],encapsulation:2})};var $a=class n{booleanValue=!1;textValue="";static \u0275fac=function(i){return new(i||n)};static \u0275cmp=C({type:n,selectors:[["app-ng-model-example"]],standalone:!1,decls:13,vars:6,consts:[[1,"ng-model-example"],["name","ngModelCheckbox",3,"ngModelChange","ngModel"],["name","ngModelSwitch",3,"ngModelChange","ngModel"],["name","ngModelSearchField","show-delete-icon","true","placeholder","Search...",3,"ngModelChange","ngModel"],["name","ngModelTextField","show-delete-icon","true","placeholder","Type here...",3,"ngModelChange","ngModel"],["name","ngModelTextarea","label","Message","placeholder","Write a longer message...",3,"ngModelChange","ngModel"],["name","ngModelSearchBar","is-open","true","autocomplete","on",3,"ngModelChange","ngModel"]],template:function(i,e){i&1&&(l(0,"div",0)(1,"h3"),s(2,"Boolean inputs (same ngModel)"),o(),l(3,"ifx-checkbox",1),Ze("ngModelChange",function(a){return st(e.booleanValue,a)||(e.booleanValue=a),a}),s(4," Checkbox bound via ngModel "),o(),l(5,"ifx-switch",2),Ze("ngModelChange",function(a){return st(e.booleanValue,a)||(e.booleanValue=a),a}),s(6," Switch bound via ngModel "),o(),l(7,"h3"),s(8,"Text inputs (bound to the same value)"),o(),l(9,"ifx-search-field",3),Ze("ngModelChange",function(a){return st(e.textValue,a)||(e.textValue=a),a}),o(),l(10,"ifx-text-field",4),Ze("ngModelChange",function(a){return st(e.textValue,a)||(e.textValue=a),a}),o(),l(11,"ifx-textarea",5),Ze("ngModelChange",function(a){return st(e.textValue,a)||(e.textValue=a),a}),o(),l(12,"ifx-search-bar",6),Ze("ngModelChange",function(a){return st(e.textValue,a)||(e.textValue=a),a}),o()()),i&2&&(d(3),We("ngModel",e.booleanValue),d(2),We("ngModel",e.booleanValue),d(4),We("ngModel",e.textValue),d(),We("ngModel",e.textValue),d(),We("ngModel",e.textValue),d(),We("ngModel",e.textValue))},dependencies:[Wo,ji,Fn,Ln,Ko,na,O,ia,Ot,N],styles:[".ng-model-example[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}h3[_ngcontent-%COMP%]{margin-bottom:0rem}"]})};function aI(n,t){n&1&&(l(0,"section",87)(1,"h2"),s(2,"Accordion"),o(),l(3,"div",88),b(4,"app-ifx-accordion-example"),o()())}function sI(n,t){n&1&&(l(0,"section",89)(1,"h2"),s(2,"Action List"),o(),l(3,"div",88),b(4,"app-ifx-action-list-example"),o()())}function lI(n,t){n&1&&(l(0,"section",90)(1,"h2"),s(2,"Alert"),o(),l(3,"div",88),b(4,"app-ifx-alert-example"),o()())}function dI(n,t){n&1&&(l(0,"section",91)(1,"h2"),s(2,"AI Label"),o(),l(3,"div",88),b(4,"app-ifx-ai-label-example"),o()())}function cI(n,t){n&1&&(l(0,"section",92)(1,"h2"),s(2,"Button"),o(),l(3,"div",88),b(4,"app-ifx-button-example"),o()())}function uI(n,t){n&1&&(l(0,"section",93)(1,"h2"),s(2,"Card"),o(),l(3,"div",88),b(4,"app-ifx-card-example"),o()())}function pI(n,t){n&1&&(l(0,"section",94)(1,"h2"),s(2,"Checkbox"),o(),l(3,"div",88),b(4,"app-ifx-checkbox-example"),o()())}function fI(n,t){n&1&&(l(0,"section",95)(1,"h2"),s(2,"Checkbox Group"),o(),l(3,"div",88),b(4,"app-ifx-checkbox-group-example"),o()())}function mI(n,t){n&1&&(l(0,"section",96)(1,"h2"),s(2,"Chip"),o(),l(3,"div",88),b(4,"app-ifx-chip-example"),o()())}function hI(n,t){n&1&&(l(0,"section",97)(1,"h2"),s(2,"Content Switcher"),o(),l(3,"div",88),b(4,"app-ifx-content-switcher-example"),o()())}function gI(n,t){n&1&&(l(0,"section",98)(1,"h2"),s(2,"Date Picker"),o(),l(3,"div",88),b(4,"app-ifx-date-picker-example"),o()())}function vI(n,t){n&1&&(l(0,"section",99)(1,"h2"),s(2,"Dropdown"),o(),l(3,"div",88),b(4,"app-ifx-dropdown-example"),o()())}function xI(n,t){n&1&&(l(0,"section",100)(1,"h2"),s(2,"Error Page"),o(),l(3,"div",88),b(4,"app-ifx-error-page-example"),o()())}function bI(n,t){n&1&&(l(0,"section",101)(1,"h2"),s(2,"Footer - Medium"),o(),l(3,"div",88),b(4,"app-ifx-footer-example-medium"),o()())}function yI(n,t){n&1&&(l(0,"section",102)(1,"h2"),s(2,"Icon Button"),o(),l(3,"div",88),b(4,"app-ifx-icon-button-example"),o()())}function II(n,t){n&1&&(l(0,"section",103)(1,"h2"),s(2,"Indicator"),o(),l(3,"div",88),b(4,"app-ifx-indicator-example"),o()())}function CI(n,t){n&1&&(l(0,"section",104)(1,"h2"),s(2,"Link"),o(),l(3,"div",88),b(4,"app-ifx-link-example"),o()())}function EI(n,t){n&1&&(l(0,"section",105)(1,"h2"),s(2,"Navigation/Navbar"),o(),l(3,"div",88),b(4,"app-ifx-navbar-example"),o()())}function wI(n,t){n&1&&(l(0,"section",106)(1,"h2"),s(2,"Navigation/Sidebar"),o(),l(3,"div",88),b(4,"app-ifx-sidebar-example"),o()())}function _I(n,t){n&1&&(l(0,"section",107)(1,"h2"),s(2,"Notification"),o(),l(3,"div",88),b(4,"app-ifx-notification-example"),o()())}function SI(n,t){n&1&&(l(0,"section",108)(1,"h2"),s(2,"Pagination"),o(),l(3,"div",88),b(4,"app-ifx-pagination-example"),o()())}function DI(n,t){n&1&&(l(0,"section",109)(1,"h2"),s(2,"Progress Bar"),o(),l(3,"div",88),b(4,"app-ifx-progress-bar-example"),o()())}function TI(n,t){n&1&&(l(0,"section",110)(1,"h2"),s(2,"Radio Button"),o(),l(3,"div",88),b(4,"app-ifx-radio-button-example"),o()())}function kI(n,t){n&1&&(l(0,"section",111)(1,"h2"),s(2,"Radio Button Group"),o(),l(3,"div",88),b(4,"app-ifx-radio-button-group-example"),o()())}function MI(n,t){n&1&&(l(0,"section",112)(1,"h2"),s(2,"Search Bar"),o(),l(3,"div",88),b(4,"app-ifx-search-bar-example"),o()())}function AI(n,t){n&1&&(l(0,"section",113)(1,"h2"),s(2,"Search Field"),o(),l(3,"div",88),b(4,"app-ifx-search-field-example"),o()())}function OI(n,t){n&1&&(l(0,"section",114)(1,"h2"),s(2,"Segmented Control"),o(),l(3,"div",88),b(4,"app-ifx-segmented-control-example"),o()())}function NI(n,t){n&1&&(l(0,"section",115)(1,"h2"),s(2,"Select/Single Select"),o(),l(3,"div",88),b(4,"app-ifx-select-example"),o()())}function FI(n,t){n&1&&(l(0,"section",116)(1,"h2"),s(2,"Spinner"),o(),l(3,"div",88),b(4,"app-ifx-spinner-example"),o()())}function LI(n,t){n&1&&(l(0,"section",117)(1,"h2"),s(2,"Status"),o(),l(3,"div",88),b(4,"app-ifx-status-example"),o()())}function RI(n,t){n&1&&(l(0,"section",118)(1,"h2"),s(2,"Stepper"),o(),l(3,"div",88),b(4,"app-ifx-stepper-example"),o()())}function PI(n,t){n&1&&(l(0,"section",119)(1,"h2"),s(2,"Stepper - Compact"),o(),l(3,"div",88),b(4,"app-ifx-stepper-example-compact"),o()())}function VI(n,t){n&1&&(l(0,"section",120)(1,"h2"),s(2,"Switch"),o(),l(3,"div",88),b(4,"app-ifx-switch-example"),o()())}function qI(n,t){n&1&&(l(0,"section",121)(1,"h2"),s(2,"Table (basic)"),o(),l(3,"div",88),b(4,"app-ifx-basic-table-example"),o()())}function HI(n,t){n&1&&(l(0,"section",122)(1,"h2"),s(2,"Table (advanced) - DefaultState"),o(),l(3,"div",88),b(4,"app-ifx-table-example-defaultstate"),o()())}function jI(n,t){n&1&&(l(0,"section",123)(1,"h2"),s(2,"Tabs"),o(),l(3,"div",88),b(4,"app-ifx-tabs-example"),o()())}function BI(n,t){n&1&&(l(0,"section",124)(1,"h2"),s(2,"Text Field"),o(),l(3,"div",88),b(4,"app-ifx-text-field-example"),o()())}function zI(n,t){n&1&&(l(0,"section",125)(1,"h2"),s(2,"Textarea"),o(),l(3,"div",88),b(4,"app-ifx-textarea-example"),o()())}function UI(n,t){n&1&&(l(0,"section",126)(1,"h2"),s(2,"Tooltip"),o(),l(3,"div",88),b(4,"app-ifx-tooltip-example"),o()())}function $I(n,t){n&1&&(l(0,"section",127)(1,"h2"),s(2,"Modal"),o(),l(3,"div",88),b(4,"app-modal-example"),o()())}function GI(n,t){n&1&&(l(0,"section",128)(1,"h2"),s(2,"ngModel Example"),o(),l(3,"div",88),b(4,"app-ng-model-example"),o()())}var WI=Fg.dependencies["@infineon/infineon-design-system-angular"],Ga=class n{constructor(t){this.platformId=t}platformId;title=ut("angular-module-example");version="";defaultId="ifx-accordion-example";activeId=ut(this.defaultId);ngOnInit(){if(WI.includes("workspace")?this.version="workspace":this.version=Lg,!Ad(this.platformId))return;let t=(e,r=0)=>{if(e==="all-components"){eu.default.highlightAll();return}let a=document.getElementById(e);if(a){eu.default.highlightAllUnder(a);return}r<30&&setTimeout(()=>t(e,r+1),50)},i=()=>{let e=this.getHashId();e?this.activeId.set(e):window.location.hash||(window.location.hash=`#${this.activeId()}`);let r=e||this.activeId();t(r)};i(),window.addEventListener("hashchange",i)}getHashId(){return Ad(this.platformId)&&window.location.hash?window.location.hash.substring(1):""}static \u0275fac=function(i){return new(i||n)(x(on))};static \u0275cmp=C({type:n,selectors:[["app-root"]],standalone:!1,decls:135,vars:44,consts:[["applicationName","Infineon Design System - Angular Module Example",3,"showLogoAndAppname","fixed"],["icon","block16","slot","left-item","href","","target","_self"],["href","#ifx-accordion-example"],["href","#ifx-action-list-example"],["href","#ifx-ai-label-example"],["href","#ifx-alert-example"],["href","#ifx-button-example"],["href","#ifx-card-example"],["href","#ifx-checkbox-example"],["href","#ifx-checkbox-group-example"],["href","#ifx-chip-example"],["href","#ifx-content-switcher-example"],["href","#ifx-date-picker-example"],["href","#ifx-dropdown-example"],["href","#ifx-error-page-example"],["href","#ifx-footer-example-medium"],["href","#ifx-icon-button-example"],["href","#ifx-indicator-example"],["href","#ifx-link-example"],["href","#ifx-navbar-example"],["href","#ifx-sidebar-example"],["href","#ifx-notification-example"],["href","#ifx-pagination-example"],["href","#ifx-progress-bar-example"],["href","#ifx-radio-button-example"],["href","#ifx-radio-button-group-example"],["href","#ifx-search-bar-example"],["href","#ifx-search-field-example"],["href","#ifx-segmented-control-example"],["href","#ifx-select-example"],["href","#ifx-spinner-example"],["href","#ifx-status-example"],["href","#ifx-stepper-example"],["href","#ifx-stepper-example-compact"],["href","#ifx-switch-example"],["href","#ifx-table-example-defaultstate"],["href","#ifx-basic-table-example"],["href","#ifx-tabs-example"],["href","#ifx-text-field-example"],["href","#ifx-textarea-example"],["href","#ifx-tooltip-example"],["href","#all-components","slot","left-item"],["href","#ifx-modal-example","slot","left-item"],["href","#ng-model-example","slot","left-item"],[1,"version-info"],[1,"components"],["id","ifx-accordion-example","class","component-example",4,"ngIf"],["id","ifx-action-list-example","class","component-example",4,"ngIf"],["id","ifx-alert-example","class","component-example",4,"ngIf"],["id","ifx-ai-label-example","class","component-example",4,"ngIf"],["id","ifx-button-example","class","component-example",4,"ngIf"],["id","ifx-card-example","class","component-example",4,"ngIf"],["id","ifx-checkbox-example","class","component-example",4,"ngIf"],["id","ifx-checkbox-group-example","class","component-example",4,"ngIf"],["id","ifx-chip-example","class","component-example",4,"ngIf"],["id","ifx-content-switcher-example","class","component-example",4,"ngIf"],["id","ifx-date-picker-example","class","component-example",4,"ngIf"],["id","ifx-dropdown-example","class","component-example",4,"ngIf"],["id","ifx-error-page-example","class","component-example",4,"ngIf"],["id","ifx-footer-example-medium","class","component-example",4,"ngIf"],["id","ifx-icon-button-example","class","component-example",4,"ngIf"],["id","ifx-indicator-example","class","component-example",4,"ngIf"],["id","ifx-link-example","class","component-example",4,"ngIf"],["id","ifx-navbar-example","class","component-example",4,"ngIf"],["id","ifx-sidebar-example","class","component-example",4,"ngIf"],["id","ifx-notification-example","class","component-example",4,"ngIf"],["id","ifx-pagination-example","class","component-example",4,"ngIf"],["id","ifx-progress-bar-example","class","component-example",4,"ngIf"],["id","ifx-radio-button-example","class","component-example",4,"ngIf"],["id","ifx-radio-button-group-example","class","component-example",4,"ngIf"],["id","ifx-search-bar-example","class","component-example",4,"ngIf"],["id","ifx-search-field-example","class","component-example",4,"ngIf"],["id","ifx-segmented-control-example","class","component-example",4,"ngIf"],["id","ifx-select-example","class","component-example",4,"ngIf"],["id","ifx-spinner-example","class","component-example",4,"ngIf"],["id","ifx-status-example","class","component-example",4,"ngIf"],["id","ifx-stepper-example","class","component-example",4,"ngIf"],["id","ifx-stepper-example-compact","class","component-example",4,"ngIf"],["id","ifx-switch-example","class","component-example",4,"ngIf"],["id","ifx-basic-table-example","class","component-example",4,"ngIf"],["id","ifx-table-example-defaultstate","class","component-example",4,"ngIf"],["id","ifx-tabs-example","class","component-example",4,"ngIf"],["id","ifx-text-field-example","class","component-example",4,"ngIf"],["id","ifx-textarea-example","class","component-example",4,"ngIf"],["id","ifx-tooltip-example","class","component-example",4,"ngIf"],["id","ifx-modal-example","class","component-example",4,"ngIf"],["id","ng-model-example","class","component-example",4,"ngIf"],["id","ifx-accordion-example",1,"component-example"],[1,"demo"],["id","ifx-action-list-example",1,"component-example"],["id","ifx-alert-example",1,"component-example"],["id","ifx-ai-label-example",1,"component-example"],["id","ifx-button-example",1,"component-example"],["id","ifx-card-example",1,"component-example"],["id","ifx-checkbox-example",1,"component-example"],["id","ifx-checkbox-group-example",1,"component-example"],["id","ifx-chip-example",1,"component-example"],["id","ifx-content-switcher-example",1,"component-example"],["id","ifx-date-picker-example",1,"component-example"],["id","ifx-dropdown-example",1,"component-example"],["id","ifx-error-page-example",1,"component-example"],["id","ifx-footer-example-medium",1,"component-example"],["id","ifx-icon-button-example",1,"component-example"],["id","ifx-indicator-example",1,"component-example"],["id","ifx-link-example",1,"component-example"],["id","ifx-navbar-example",1,"component-example"],["id","ifx-sidebar-example",1,"component-example"],["id","ifx-notification-example",1,"component-example"],["id","ifx-pagination-example",1,"component-example"],["id","ifx-progress-bar-example",1,"component-example"],["id","ifx-radio-button-example",1,"component-example"],["id","ifx-radio-button-group-example",1,"component-example"],["id","ifx-search-bar-example",1,"component-example"],["id","ifx-search-field-example",1,"component-example"],["id","ifx-segmented-control-example",1,"component-example"],["id","ifx-select-example",1,"component-example"],["id","ifx-spinner-example",1,"component-example"],["id","ifx-status-example",1,"component-example"],["id","ifx-stepper-example",1,"component-example"],["id","ifx-stepper-example-compact",1,"component-example"],["id","ifx-switch-example",1,"component-example"],["id","ifx-basic-table-example",1,"component-example"],["id","ifx-table-example-defaultstate",1,"component-example"],["id","ifx-tabs-example",1,"component-example"],["id","ifx-text-field-example",1,"component-example"],["id","ifx-textarea-example",1,"component-example"],["id","ifx-tooltip-example",1,"component-example"],["id","ifx-modal-example",1,"component-example"],["id","ng-model-example",1,"component-example"]],template:function(i,e){i&1&&(l(0,"ifx-navbar",0)(1,"ifx-navbar-item",1),s(2," Components A-E "),l(3,"ifx-navbar-item",2),s(4,"Accordion"),o(),l(5,"ifx-navbar-item",3),s(6,"Action List"),o(),l(7,"ifx-navbar-item",4),s(8,"AI Label"),o(),l(9,"ifx-navbar-item",5),s(10,"Alert"),o(),l(11,"ifx-navbar-item",6),s(12,"Button"),o(),l(13,"ifx-navbar-item",7),s(14,"Card"),o(),l(15,"ifx-navbar-item",8),s(16,"Checkbox"),o(),l(17,"ifx-navbar-item",9),s(18,"Checkbox Group"),o(),l(19,"ifx-navbar-item",10),s(20,"Chip"),o(),l(21,"ifx-navbar-item",11),s(22,"Content Switcher"),o(),l(23,"ifx-navbar-item",12),s(24,"Date Picker"),o(),l(25,"ifx-navbar-item",13),s(26,"Dropdown"),o(),l(27,"ifx-navbar-item",14),s(28,"Error Page"),o()(),l(29,"ifx-navbar-item",1),s(30," Components F-R "),l(31,"ifx-navbar-item",15),s(32,"Footer - Medium"),o(),l(33,"ifx-navbar-item",16),s(34,"Icon Button"),o(),l(35,"ifx-navbar-item",17),s(36,"Indicator"),o(),l(37,"ifx-navbar-item",18),s(38,"Link"),o(),l(39,"ifx-navbar-item",19),s(40,"Navigation/Navbar"),o(),l(41,"ifx-navbar-item",20),s(42,"Navigation/Sidebar"),o(),l(43,"ifx-navbar-item",21),s(44,"Notification"),o(),l(45,"ifx-navbar-item",22),s(46,"Pagination"),o(),l(47,"ifx-navbar-item",23),s(48,"Progress Bar"),o(),l(49,"ifx-navbar-item",24),s(50,"Radio Button"),o(),l(51,"ifx-navbar-item",25),s(52,"Radio Button Group"),o()(),l(53,"ifx-navbar-item",1),s(54," Components S-Z "),l(55,"ifx-navbar-item",26),s(56,"Search Bar"),o(),l(57,"ifx-navbar-item",27),s(58,"Search Field"),o(),l(59,"ifx-navbar-item",28),s(60,"Segmented Control"),o(),l(61,"ifx-navbar-item",29),s(62,"Select/Single Select"),o(),l(63,"ifx-navbar-item",30),s(64,"Spinner"),o(),l(65,"ifx-navbar-item",31),s(66,"Status"),o(),l(67,"ifx-navbar-item",32),s(68,"Stepper"),o(),l(69,"ifx-navbar-item",33),s(70,"Stepper - Compact"),o(),l(71,"ifx-navbar-item",34),s(72,"Switch"),o(),l(73,"ifx-navbar-item",35),s(74,"Table (advanced) - DefaultState"),o(),l(75,"ifx-navbar-item",36),s(76,"Table (basic)"),o(),l(77,"ifx-navbar-item",37),s(78,"Tabs"),o(),l(79,"ifx-navbar-item",38),s(80,"Text Field"),o(),l(81,"ifx-navbar-item",39),s(82,"Textarea"),o(),l(83,"ifx-navbar-item",40),s(84,"Tooltip"),o()(),l(85,"ifx-navbar-item",41),s(86,"All Components"),o(),l(87,"ifx-navbar-item",42),s(88,"Modal"),o(),l(89,"ifx-navbar-item",43),s(90,"ngModel Example"),o()(),l(91,"div",44),s(92),o(),l(93,"div",45),Ao(94,aI,5,0,"section",46)(95,sI,5,0,"section",47)(96,lI,5,0,"section",48)(97,dI,5,0,"section",49)(98,cI,5,0,"section",50)(99,uI,5,0,"section",51)(100,pI,5,0,"section",52)(101,fI,5,0,"section",53)(102,mI,5,0,"section",54)(103,hI,5,0,"section",55)(104,gI,5,0,"section",56)(105,vI,5,0,"section",57)(106,xI,5,0,"section",58)(107,bI,5,0,"section",59)(108,yI,5,0,"section",60)(109,II,5,0,"section",61)(110,CI,5,0,"section",62)(111,EI,5,0,"section",63)(112,wI,5,0,"section",64)(113,_I,5,0,"section",65)(114,SI,5,0,"section",66)(115,DI,5,0,"section",67)(116,TI,5,0,"section",68)(117,kI,5,0,"section",69)(118,MI,5,0,"section",70)(119,AI,5,0,"section",71)(120,OI,5,0,"section",72)(121,NI,5,0,"section",73)(122,FI,5,0,"section",74)(123,LI,5,0,"section",75)(124,RI,5,0,"section",76)(125,PI,5,0,"section",77)(126,VI,5,0,"section",78)(127,qI,5,0,"section",79)(128,HI,5,0,"section",80)(129,jI,5,0,"section",81)(130,BI,5,0,"section",82)(131,zI,5,0,"section",83)(132,UI,5,0,"section",84)(133,$I,5,0,"section",85)(134,GI,5,0,"section",86),o()),i&2&&(p("showLogoAndAppname",!0)("fixed",!1),d(92),h("@infineon/infineon-design-system-angular@",e.version),d(2),p("ngIf",e.activeId()==="ifx-accordion-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-action-list-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-alert-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-ai-label-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-button-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-card-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-checkbox-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-checkbox-group-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-chip-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-content-switcher-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-date-picker-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-dropdown-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-error-page-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-footer-example-medium"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-icon-button-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-indicator-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-link-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-navbar-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-sidebar-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-notification-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-pagination-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-progress-bar-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-radio-button-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-radio-button-group-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-search-bar-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-search-field-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-segmented-control-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-select-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-spinner-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-status-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-stepper-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-stepper-example-compact"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-switch-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-basic-table-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-table-example-defaultstate"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-tabs-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-text-field-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-textarea-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-tooltip-example"||e.activeId()==="all-components"),d(),p("ngIf",e.activeId()==="ifx-modal-example"),d(),p("ngIf",e.activeId()==="ng-model-example"))},dependencies:[Td,Yo,Xo,oa,aa,sa,la,da,ca,ua,pa,fa,ma,ha,ga,va,xa,ba,ya,Ia,Ca,Ea,wa,_a,Sa,Da,Ta,ka,Ma,Aa,Oa,Na,Fa,La,Ra,Pa,Va,qa,Ha,ja,Ba,za,Ua,$a],encapsulation:2})};var Wa=class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Le({type:n,bootstrap:[Ga]});static \u0275inj=De({providers:[sl()],imports:[jd,Ph,Og.forRoot()]})};Hd().bootstrapModule(Wa,{ngZoneEventCoalescing:!0}).catch(n=>console.error(n));
