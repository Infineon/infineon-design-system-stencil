import{a as re,b as ce,d as Oh,e as Lh,f as Pn,g as Xd,n as Yd}from"./chunk-HE4UEGXP.js";var _h=Oh((sR,Qo)=>{"use strict";var ty=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};var j=(function(n){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,e={},r={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function C(w){return w instanceof a?new a(w.type,C(w.content),w.alias):Array.isArray(w)?w.map(C):w.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(C){return Object.prototype.toString.call(C).slice(8,-1)},objId:function(C){return C.__id||Object.defineProperty(C,"__id",{value:++i}),C.__id},clone:function C(w,S){S=S||{};var O,L;switch(r.util.type(w)){case"Object":if(L=r.util.objId(w),S[L])return S[L];O={},S[L]=O;for(var $ in w)w.hasOwnProperty($)&&(O[$]=C(w[$],S));return O;case"Array":return L=r.util.objId(w),S[L]?S[L]:(O=[],S[L]=O,w.forEach(function(ne,U){O[U]=C(ne,S)}),O);default:return w}},getLanguage:function(C){for(;C;){var w=t.exec(C.className);if(w)return w[1].toLowerCase();C=C.parentElement}return"none"},setLanguage:function(C,w){C.className=C.className.replace(RegExp(t,"gi"),""),C.classList.add("language-"+w)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(O){var C=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(O.stack)||[])[1];if(C){var w=document.getElementsByTagName("script");for(var S in w)if(w[S].src==C)return w[S]}return null}},isActive:function(C,w,S){for(var O="no-"+w;C;){var L=C.classList;if(L.contains(w))return!0;if(L.contains(O))return!1;C=C.parentElement}return!!S}},languages:{plain:e,plaintext:e,text:e,txt:e,extend:function(C,w){var S=r.util.clone(r.languages[C]);for(var O in w)S[O]=w[O];return S},insertBefore:function(C,w,S,O){O=O||r.languages;var L=O[C],$={};for(var ne in L)if(L.hasOwnProperty(ne)){if(ne==w)for(var U in S)S.hasOwnProperty(U)&&($[U]=S[U]);S.hasOwnProperty(ne)||($[ne]=L[ne])}var ue=O[C];return O[C]=$,r.languages.DFS(r.languages,function(he,ht){ht===ue&&he!=C&&(this[he]=$)}),$},DFS:function C(w,S,O,L){L=L||{};var $=r.util.objId;for(var ne in w)if(w.hasOwnProperty(ne)){S.call(w,ne,w[ne],O||ne);var U=w[ne],ue=r.util.type(U);ue==="Object"&&!L[$(U)]?(L[$(U)]=!0,C(U,S,null,L)):ue==="Array"&&!L[$(U)]&&(L[$(U)]=!0,C(U,S,ne,L))}}},plugins:{},highlightAll:function(C,w){r.highlightAllUnder(document,C,w)},highlightAllUnder:function(C,w,S){var O={callback:S,container:C,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",O),O.elements=Array.prototype.slice.apply(O.container.querySelectorAll(O.selector)),r.hooks.run("before-all-elements-highlight",O);for(var L=0,$;$=O.elements[L++];)r.highlightElement($,w===!0,O.callback)},highlightElement:function(C,w,S){var O=r.util.getLanguage(C),L=r.languages[O];r.util.setLanguage(C,O);var $=C.parentElement;$&&$.nodeName.toLowerCase()==="pre"&&r.util.setLanguage($,O);var ne=C.textContent,U={element:C,language:O,grammar:L,code:ne};function ue(ht){U.highlightedCode=ht,r.hooks.run("before-insert",U),U.element.innerHTML=U.highlightedCode,r.hooks.run("after-highlight",U),r.hooks.run("complete",U),S&&S.call(U.element)}if(r.hooks.run("before-sanity-check",U),$=U.element.parentElement,$&&$.nodeName.toLowerCase()==="pre"&&!$.hasAttribute("tabindex")&&$.setAttribute("tabindex","0"),!U.code){r.hooks.run("complete",U),S&&S.call(U.element);return}if(r.hooks.run("before-highlight",U),!U.grammar){ue(r.util.encode(U.code));return}if(w&&n.Worker){var he=new Worker(r.filename);he.onmessage=function(ht){ue(ht.data)},he.postMessage(JSON.stringify({language:U.language,code:U.code,immediateClose:!0}))}else ue(r.highlight(U.code,U.grammar,U.language))},highlight:function(C,w,S){var O={code:C,grammar:w,language:S};if(r.hooks.run("before-tokenize",O),!O.grammar)throw new Error('The language "'+O.language+'" has no grammar.');return O.tokens=r.tokenize(O.code,O.grammar),r.hooks.run("after-tokenize",O),a.stringify(r.util.encode(O.tokens),O.language)},tokenize:function(C,w){var S=w.rest;if(S){for(var O in S)w[O]=S[O];delete w.rest}var L=new m;return h(L,L.head,C),u(C,L,w,L.head,0),E(L)},hooks:{all:{},add:function(C,w){var S=r.hooks.all;S[C]=S[C]||[],S[C].push(w)},run:function(C,w){var S=r.hooks.all[C];if(!(!S||!S.length))for(var O=0,L;L=S[O++];)L(w)}},Token:a};n.Prism=r;function a(C,w,S,O){this.type=C,this.content=w,this.alias=S,this.length=(O||"").length|0}a.stringify=function C(w,S){if(typeof w=="string")return w;if(Array.isArray(w)){var O="";return w.forEach(function(ue){O+=C(ue,S)}),O}var L={type:w.type,content:C(w.content,S),tag:"span",classes:["token",w.type],attributes:{},language:S},$=w.alias;$&&(Array.isArray($)?Array.prototype.push.apply(L.classes,$):L.classes.push($)),r.hooks.run("wrap",L);var ne="";for(var U in L.attributes)ne+=" "+U+'="'+(L.attributes[U]||"").replace(/"/g,"&quot;")+'"';return"<"+L.tag+' class="'+L.classes.join(" ")+'"'+ne+">"+L.content+"</"+L.tag+">"};function d(C,w,S,O){C.lastIndex=w;var L=C.exec(S);if(L&&O&&L[1]){var $=L[1].length;L.index+=$,L[0]=L[0].slice($)}return L}function u(C,w,S,O,L,$){for(var ne in S)if(!(!S.hasOwnProperty(ne)||!S[ne])){var U=S[ne];U=Array.isArray(U)?U:[U];for(var ue=0;ue<U.length;++ue){if($&&$.cause==ne+","+ue)return;var he=U[ue],ht=he.inside,Gd=!!he.lookbehind,Wd=!!he.greedy,Th=he.alias;if(Wd&&!he.pattern.global){var kh=he.pattern.toString().match(/[imsuy]*$/)[0];he.pattern=RegExp(he.pattern.source,kh+"g")}for(var Zd=he.pattern||he,ve=O.next,Je=L;ve!==w.tail&&!($&&Je>=$.reach);Je+=ve.value.length,ve=ve.next){var rn=ve.value;if(w.length>C.length)return;if(!(rn instanceof a)){var Ni=1,He;if(Wd){if(He=d(Zd,Je,C,Gd),!He||He.index>=C.length)break;var Ri=He.index,Mh=He.index+He[0].length,vt=Je;for(vt+=ve.value.length;Ri>=vt;)ve=ve.next,vt+=ve.value.length;if(vt-=ve.value.length,Je=vt,ve.value instanceof a)continue;for(var Rn=ve;Rn!==w.tail&&(vt<Mh||typeof Rn.value=="string");Rn=Rn.next)Ni++,vt+=Rn.value.length;Ni--,rn=C.slice(Je,vt),He.index-=Je}else if(He=d(Zd,0,rn,Gd),!He)continue;var Ri=He.index,Pi=He[0],Ba=rn.slice(0,Ri),Jd=rn.slice(Ri+Pi.length),za=Je+rn.length;$&&za>$.reach&&($.reach=za);var Vi=ve.prev;Ba&&(Vi=h(w,Vi,Ba),Je+=Ba.length),x(w,Vi,Ni);var Ah=new a(ne,ht?r.tokenize(Pi,ht):Pi,Th,Pi);if(ve=h(w,Vi,Ah),Jd&&h(w,ve,Jd),Ni>1){var Ua={cause:ne+","+ue,reach:za};u(C,w,S,ve.prev,Je,Ua),$&&Ua.reach>$.reach&&($.reach=Ua.reach)}}}}}}function m(){var C={value:null,prev:null,next:null},w={value:null,prev:C,next:null};C.next=w,this.head=C,this.tail=w,this.length=0}function h(C,w,S){var O=w.next,L={value:S,prev:w,next:O};return w.next=L,O.prev=L,C.length++,L}function x(C,w,S){for(var O=w.next,L=0;L<S&&O!==C.tail;L++)O=O.next;w.next=O,O.prev=w,C.length-=L}function E(C){for(var w=[],S=C.head.next;S!==C.tail;)w.push(S.value),S=S.next;return w}if(!n.document)return n.addEventListener&&(r.disableWorkerMessageHandler||n.addEventListener("message",function(C){var w=JSON.parse(C.data),S=w.language,O=w.code,L=w.immediateClose;n.postMessage(r.highlight(O,r.languages[S],S)),L&&n.close()},!1)),r;var D=r.util.currentScript();D&&(r.filename=D.src,D.hasAttribute("data-manual")&&(r.manual=!0));function y(){r.manual||r.highlightAll()}if(!r.manual){var N=document.readyState;N==="loading"||N==="interactive"&&D&&D.defer?document.addEventListener("DOMContentLoaded",y):window.requestAnimationFrame?window.requestAnimationFrame(y):window.setTimeout(y,16)}return r})(ty);typeof Qo<"u"&&Qo.exports&&(Qo.exports=j);typeof global<"u"&&(global.Prism=j);j.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};j.languages.markup.tag.inside["attr-value"].inside.entity=j.languages.markup.entity;j.languages.markup.doctype.inside["internal-subset"].inside=j.languages.markup;j.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))});Object.defineProperty(j.languages.markup.tag,"addInlined",{value:function(t,i){var e={};e["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:j.languages[i]},e.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:e}};r["language-"+i]={pattern:/[\s\S]+/,inside:j.languages[i]};var a={};a[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:r},j.languages.insertBefore("markup","cdata",a)}});Object.defineProperty(j.languages.markup.tag,"addAttribute",{value:function(n,t){j.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:j.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});j.languages.html=j.languages.markup;j.languages.mathml=j.languages.markup;j.languages.svg=j.languages.markup;j.languages.xml=j.languages.extend("markup",{});j.languages.ssml=j.languages.xml;j.languages.atom=j.languages.xml;j.languages.rss=j.languages.xml;(function(n){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var i=n.languages.markup;i&&(i.tag.addInlined("style","css"),i.tag.addAttribute("style","css"))})(j);j.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};j.languages.javascript=j.languages.extend("clike",{"class-name":[j.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});j.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;j.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:j.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:j.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:j.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:j.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:j.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});j.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:j.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});j.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});j.languages.markup&&(j.languages.markup.tag.addInlined("script","javascript"),j.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));j.languages.js=j.languages.javascript;(function(){if(typeof j>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var n="Loading\u2026",t=function(D,y){return"\u2716 Error "+D+" while fetching file: "+y},i="\u2716 Error: File does not exist or is empty",e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},r="data-src-status",a="loading",d="loaded",u="failed",m="pre[data-src]:not(["+r+'="'+d+'"]):not(['+r+'="'+a+'"])';function h(D,y,N){var C=new XMLHttpRequest;C.open("GET",D,!0),C.onreadystatechange=function(){C.readyState==4&&(C.status<400&&C.responseText?y(C.responseText):C.status>=400?N(t(C.status,C.statusText)):N(i))},C.send(null)}function x(D){var y=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(D||"");if(y){var N=Number(y[1]),C=y[2],w=y[3];return C?w?[N,Number(w)]:[N,void 0]:[N,N]}}j.hooks.add("before-highlightall",function(D){D.selector+=", "+m}),j.hooks.add("before-sanity-check",function(D){var y=D.element;if(y.matches(m)){D.code="",y.setAttribute(r,a);var N=y.appendChild(document.createElement("CODE"));N.textContent=n;var C=y.getAttribute("data-src"),w=D.language;if(w==="none"){var S=(/\.(\w+)$/.exec(C)||[,"none"])[1];w=e[S]||S}j.util.setLanguage(N,w),j.util.setLanguage(y,w);var O=j.plugins.autoloader;O&&O.loadLanguages(w),h(C,function(L){y.setAttribute(r,d);var $=x(y.getAttribute("data-range"));if($){var ne=L.split(/\r\n?|\n/g),U=$[0],ue=$[1]==null?ne.length:$[1];U<0&&(U+=ne.length),U=Math.max(0,Math.min(U-1,ne.length)),ue<0&&(ue+=ne.length),ue=Math.max(0,Math.min(ue,ne.length)),L=ne.slice(U,ue).join(`
`),y.hasAttribute("data-start")||y.setAttribute("data-start",String(U+1))}N.textContent=L,j.highlightElement(N)},function(L){y.setAttribute(r,u),N.textContent=L})}}),j.plugins.fileHighlight={highlight:function(y){for(var N=(y||document).querySelectorAll(m),C=0,w;w=N[C++];)j.highlightElement(w)}};var E=!1;j.fileHighlight=function(){E||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),E=!0),j.plugins.fileHighlight.highlight.apply(this,arguments)}})()});var $a;function qi(){return $a}function Xe(n){let t=$a;return $a=n,t}var Qd=Symbol("NotFound");function on(n){return n===Qd||n?.name==="\u0275NotFound"}var xe=null,Hi=!1,Ga=1,Fh=null,Ce=Symbol("SIGNAL");function Q(n){let t=xe;return xe=n,t}function Ui(){return xe}var an={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function $i(n){if(Hi)throw new Error("");if(xe===null)return;xe.consumerOnSignalRead(n);let t=xe.producersTail;if(t!==void 0&&t.producer===n)return;let i,e=xe.recomputing;if(e&&(i=t!==void 0?t.nextProducer:xe.producers,i!==void 0&&i.producer===n)){xe.producersTail=i,i.lastReadVersion=n.version;return}let r=n.consumersTail;if(r!==void 0&&r.consumer===xe&&(!e||Rh(r,xe)))return;let a=sn(xe),d={producer:n,consumer:xe,nextProducer:i,prevConsumer:r,lastReadVersion:n.version,nextConsumer:void 0};xe.producersTail=d,t!==void 0?t.nextProducer=d:xe.producers=d,a&&nu(n,d)}function Kd(){Ga++}function Gi(n){if(!(sn(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Ga)){if(!n.producerMustRecompute(n)&&!Zi(n)){zi(n);return}n.producerRecomputeValue(n),zi(n)}}function Wa(n){if(n.consumers===void 0)return;let t=Hi;Hi=!0;try{for(let i=n.consumers;i!==void 0;i=i.nextConsumer){let e=i.consumer;e.dirty||Nh(e)}}finally{Hi=t}}function Za(){return xe?.consumerAllowSignalWrites!==!1}function Nh(n){n.dirty=!0,Wa(n),n.consumerMarkedDirty?.(n)}function zi(n){n.dirty=!1,n.lastCleanEpoch=Ga}function qn(n){return n&&eu(n),Q(n)}function eu(n){n.producersTail=void 0,n.recomputing=!0}function Wi(n,t){Q(t),n&&tu(n)}function tu(n){n.recomputing=!1;let t=n.producersTail,i=t!==void 0?t.nextProducer:n.producers;if(i!==void 0){if(sn(n))do i=Ja(i);while(i!==void 0);t!==void 0?t.nextProducer=void 0:n.producers=void 0}}function Zi(n){for(let t=n.producers;t!==void 0;t=t.nextProducer){let i=t.producer,e=t.lastReadVersion;if(e!==i.version||(Gi(i),e!==i.version))return!0}return!1}function Ji(n){if(sn(n)){let t=n.producers;for(;t!==void 0;)t=Ja(t)}n.producers=void 0,n.producersTail=void 0,n.consumers=void 0,n.consumersTail=void 0}function nu(n,t){let i=n.consumersTail,e=sn(n);if(i!==void 0?(t.nextConsumer=i.nextConsumer,i.nextConsumer=t):(t.nextConsumer=void 0,n.consumers=t),t.prevConsumer=i,n.consumersTail=t,!e)for(let r=n.producers;r!==void 0;r=r.nextProducer)nu(r.producer,r)}function Ja(n){let t=n.producer,i=n.nextProducer,e=n.nextConsumer,r=n.prevConsumer;if(n.nextConsumer=void 0,n.prevConsumer=void 0,e!==void 0?e.prevConsumer=r:t.consumersTail=r,r!==void 0)r.nextConsumer=e;else if(t.consumers=e,!sn(t)){let a=t.producers;for(;a!==void 0;)a=Ja(a)}return i}function sn(n){return n.consumerIsAlwaysLive||n.consumers!==void 0}function Xi(n){Fh?.(n)}function Rh(n,t){let i=t.producersTail;if(i!==void 0){let e=t.producers;do{if(e===n)return!0;if(e===i)break;e=e.nextProducer}while(e!==void 0)}return!1}function Yi(n,t){return Object.is(n,t)}function Qi(n,t){let i=Object.create(Ph);i.computation=n,t!==void 0&&(i.equal=t);let e=()=>{if(Gi(i),$i(i),i.value===Vn)throw i.error;return i.value};return e[Ce]=i,Xi(i),e}var ji=Symbol("UNSET"),Bi=Symbol("COMPUTING"),Vn=Symbol("ERRORED"),Ph=ce(re({},an),{value:ji,dirty:!0,error:null,equal:Yi,kind:"computed",producerMustRecompute(n){return n.value===ji||n.value===Bi},producerRecomputeValue(n){if(n.value===Bi)throw new Error("");let t=n.value;n.value=Bi;let i=qn(n),e,r=!1;try{e=n.computation(),Q(null),r=t!==ji&&t!==Vn&&e!==Vn&&n.equal(t,e)}catch(a){e=Vn,n.error=a}finally{Wi(n,i)}if(r){n.value=t;return}n.value=e,n.version++}});function Vh(){throw new Error}var iu=Vh;function ru(n){iu(n)}function Xa(n){iu=n}var qh=null;function Ya(n,t){let i=Object.create(au);i.value=n,t!==void 0&&(i.equal=t);let e=()=>ou(i);return e[Ce]=i,Xi(i),[e,d=>Ki(i,d),d=>Qa(i,d)]}function ou(n){return $i(n),n.value}function Ki(n,t){Za()||ru(n),n.equal(n.value,t)||(n.value=t,Hh(n))}function Qa(n,t){Za()||ru(n),Ki(n,t(n.value))}var au=ce(re({},an),{equal:Yi,value:void 0,kind:"signal"});function Hh(n){n.version++,Kd(),Wa(n),qh?.(n)}function oe(n){return typeof n=="function"}function er(n){let i=n(e=>{Error.call(e),e.stack=new Error().stack});return i.prototype=Object.create(Error.prototype),i.prototype.constructor=i,i}var tr=er(n=>function(i){n(this),this.message=i?`${i.length} errors occurred during unsubscription:
${i.map((e,r)=>`${r+1}) ${e.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=i});function Hn(n,t){if(n){let i=n.indexOf(t);0<=i&&n.splice(i,1)}}var ye=class n{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let t;if(!this.closed){this.closed=!0;let{_parentage:i}=this;if(i)if(this._parentage=null,Array.isArray(i))for(let a of i)a.remove(this);else i.remove(this);let{initialTeardown:e}=this;if(oe(e))try{e()}catch(a){t=a instanceof tr?a.errors:[a]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let a of r)try{su(a)}catch(d){t=t??[],d instanceof tr?t=[...t,...d.errors]:t.push(d)}}if(t)throw new tr(t)}}add(t){var i;if(t&&t!==this)if(this.closed)su(t);else{if(t instanceof n){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(i=this._finalizers)!==null&&i!==void 0?i:[]).push(t)}}_hasParent(t){let{_parentage:i}=this;return i===t||Array.isArray(i)&&i.includes(t)}_addParent(t){let{_parentage:i}=this;this._parentage=Array.isArray(i)?(i.push(t),i):i?[i,t]:t}_removeParent(t){let{_parentage:i}=this;i===t?this._parentage=null:Array.isArray(i)&&Hn(i,t)}remove(t){let{_finalizers:i}=this;i&&Hn(i,t),t instanceof n&&t._removeParent(this)}};ye.EMPTY=(()=>{let n=new ye;return n.closed=!0,n})();var Ka=ye.EMPTY;function nr(n){return n instanceof ye||n&&"closed"in n&&oe(n.remove)&&oe(n.add)&&oe(n.unsubscribe)}function su(n){oe(n)?n():n.unsubscribe()}var je={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var ln={setTimeout(n,t,...i){let{delegate:e}=ln;return e?.setTimeout?e.setTimeout(n,t,...i):setTimeout(n,t,...i)},clearTimeout(n){let{delegate:t}=ln;return(t?.clearTimeout||clearTimeout)(n)},delegate:void 0};function ir(n){ln.setTimeout(()=>{let{onUnhandledError:t}=je;if(t)t(n);else throw n})}function es(){}var lu=ts("C",void 0,void 0);function cu(n){return ts("E",void 0,n)}function du(n){return ts("N",n,void 0)}function ts(n,t,i){return{kind:n,value:t,error:i}}var At=null;function cn(n){if(je.useDeprecatedSynchronousErrorHandling){let t=!At;if(t&&(At={errorThrown:!1,error:null}),n(),t){let{errorThrown:i,error:e}=At;if(At=null,i)throw e}}else n()}function uu(n){je.useDeprecatedSynchronousErrorHandling&&At&&(At.errorThrown=!0,At.error=n)}var Ot=class extends ye{constructor(t){super(),this.isStopped=!1,t?(this.destination=t,nr(t)&&t.add(this)):this.destination=zh}static create(t,i,e){return new dn(t,i,e)}next(t){this.isStopped?is(du(t),this):this._next(t)}error(t){this.isStopped?is(cu(t),this):(this.isStopped=!0,this._error(t))}complete(){this.isStopped?is(lu,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},jh=Function.prototype.bind;function ns(n,t){return jh.call(n,t)}var rs=class{constructor(t){this.partialObserver=t}next(t){let{partialObserver:i}=this;if(i.next)try{i.next(t)}catch(e){rr(e)}}error(t){let{partialObserver:i}=this;if(i.error)try{i.error(t)}catch(e){rr(e)}else rr(t)}complete(){let{partialObserver:t}=this;if(t.complete)try{t.complete()}catch(i){rr(i)}}},dn=class extends Ot{constructor(t,i,e){super();let r;if(oe(t)||!t)r={next:t??void 0,error:i??void 0,complete:e??void 0};else{let a;this&&je.useDeprecatedNextContext?(a=Object.create(t),a.unsubscribe=()=>this.unsubscribe(),r={next:t.next&&ns(t.next,a),error:t.error&&ns(t.error,a),complete:t.complete&&ns(t.complete,a)}):r=t}this.destination=new rs(r)}};function rr(n){je.useDeprecatedSynchronousErrorHandling?uu(n):ir(n)}function Bh(n){throw n}function is(n,t){let{onStoppedNotification:i}=je;i&&ln.setTimeout(()=>i(n,t))}var zh={closed:!0,next:es,error:Bh,complete:es};var un=typeof Symbol=="function"&&Symbol.observable||"@@observable";function pu(n){return n}function fu(n){return n.length===0?pu:n.length===1?n[0]:function(i){return n.reduce((e,r)=>r(e),i)}}var fe=(()=>{class n{constructor(i){i&&(this._subscribe=i)}lift(i){let e=new n;return e.source=this,e.operator=i,e}subscribe(i,e,r){let a=$h(i)?i:new dn(i,e,r);return cn(()=>{let{operator:d,source:u}=this;a.add(d?d.call(a,u):u?this._subscribe(a):this._trySubscribe(a))}),a}_trySubscribe(i){try{return this._subscribe(i)}catch(e){i.error(e)}}forEach(i,e){return e=mu(e),new e((r,a)=>{let d=new dn({next:u=>{try{i(u)}catch(m){a(m),d.unsubscribe()}},error:a,complete:r});this.subscribe(d)})}_subscribe(i){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(i)}[un](){return this}pipe(...i){return fu(i)(this)}toPromise(i){return i=mu(i),new i((e,r)=>{let a;this.subscribe(d=>a=d,d=>r(d),()=>e(a))})}}return n.create=t=>new n(t),n})();function mu(n){var t;return(t=n??je.Promise)!==null&&t!==void 0?t:Promise}function Uh(n){return n&&oe(n.next)&&oe(n.error)&&oe(n.complete)}function $h(n){return n&&n instanceof Ot||Uh(n)&&nr(n)}function Gh(n){return oe(n?.lift)}function pn(n){return t=>{if(Gh(t))return t.lift(function(i){try{return n(i,this)}catch(e){this.error(e)}});throw new TypeError("Unable to lift unknown Observable type")}}function fn(n,t,i,e,r){return new os(n,t,i,e,r)}var os=class extends Ot{constructor(t,i,e,r,a,d){super(t),this.onFinalize=a,this.shouldUnsubscribe=d,this._next=i?function(u){try{i(u)}catch(m){t.error(m)}}:super._next,this._error=r?function(u){try{r(u)}catch(m){t.error(m)}finally{this.unsubscribe()}}:super._error,this._complete=e?function(){try{e()}catch(u){t.error(u)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:i}=this;super.unsubscribe(),!i&&((t=this.onFinalize)===null||t===void 0||t.call(this))}}};var gu=er(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var lt=(()=>{class n extends fe{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(i){let e=new or(this,this);return e.operator=i,e}_throwIfClosed(){if(this.closed)throw new gu}next(i){cn(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let e of this.currentObservers)e.next(i)}})}error(i){cn(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=i;let{observers:e}=this;for(;e.length;)e.shift().error(i)}})}complete(){cn(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:i}=this;for(;i.length;)i.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var i;return((i=this.observers)===null||i===void 0?void 0:i.length)>0}_trySubscribe(i){return this._throwIfClosed(),super._trySubscribe(i)}_subscribe(i){return this._throwIfClosed(),this._checkFinalizedStatuses(i),this._innerSubscribe(i)}_innerSubscribe(i){let{hasError:e,isStopped:r,observers:a}=this;return e||r?Ka:(this.currentObservers=null,a.push(i),new ye(()=>{this.currentObservers=null,Hn(a,i)}))}_checkFinalizedStatuses(i){let{hasError:e,thrownError:r,isStopped:a}=this;e?i.error(r):a&&i.complete()}asObservable(){let i=new fe;return i.source=this,i}}return n.create=(t,i)=>new or(t,i),n})(),or=class extends lt{constructor(t,i){super(),this.destination=t,this.source=i}next(t){var i,e;(e=(i=this.destination)===null||i===void 0?void 0:i.next)===null||e===void 0||e.call(i,t)}error(t){var i,e;(e=(i=this.destination)===null||i===void 0?void 0:i.error)===null||e===void 0||e.call(i,t)}complete(){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||i===void 0||i.call(t)}_subscribe(t){var i,e;return(e=(i=this.source)===null||i===void 0?void 0:i.subscribe(t))!==null&&e!==void 0?e:Ka}};var jn=class extends lt{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){let i=super._subscribe(t);return!i.closed&&t.next(this._value),i}getValue(){let{hasError:t,thrownError:i,_value:e}=this;if(t)throw i;return this._throwIfClosed(),e}next(t){super.next(this._value=t)}};function Wh(n){return n[n.length-1]}function hu(n){return oe(Wh(n))?n.pop():void 0}function H(n,t,i,e){var r=arguments.length,a=r<3?t:e===null?e=Object.getOwnPropertyDescriptor(t,i):e,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(n,t,i,e);else for(var u=n.length-1;u>=0;u--)(d=n[u])&&(a=(r<3?d(a):r>3?d(t,i,a):d(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}function xu(n,t,i,e){function r(a){return a instanceof i?a:new i(function(d){d(a)})}return new(i||(i=Promise))(function(a,d){function u(x){try{h(e.next(x))}catch(E){d(E)}}function m(x){try{h(e.throw(x))}catch(E){d(E)}}function h(x){x.done?a(x.value):r(x.value).then(u,m)}h((e=e.apply(n,t||[])).next())})}function vu(n){var t=typeof Symbol=="function"&&Symbol.iterator,i=t&&n[t],e=0;if(i)return i.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&e>=n.length&&(n=void 0),{value:n&&n[e++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Lt(n){return this instanceof Lt?(this.v=n,this):new Lt(n)}function bu(n,t,i){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=i.apply(n,t||[]),r,a=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),u("next"),u("throw"),u("return",d),r[Symbol.asyncIterator]=function(){return this},r;function d(y){return function(N){return Promise.resolve(N).then(y,E)}}function u(y,N){e[y]&&(r[y]=function(C){return new Promise(function(w,S){a.push([y,C,w,S])>1||m(y,C)})},N&&(r[y]=N(r[y])))}function m(y,N){try{h(e[y](N))}catch(C){D(a[0][3],C)}}function h(y){y.value instanceof Lt?Promise.resolve(y.value.v).then(x,E):D(a[0][2],y)}function x(y){m("next",y)}function E(y){m("throw",y)}function D(y,N){y(N),a.shift(),a.length&&m(a[0][0],a[0][1])}}function yu(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=n[Symbol.asyncIterator],i;return t?t.call(n):(n=typeof vu=="function"?vu(n):n[Symbol.iterator](),i={},e("next"),e("throw"),e("return"),i[Symbol.asyncIterator]=function(){return this},i);function e(a){i[a]=n[a]&&function(d){return new Promise(function(u,m){d=n[a](d),r(u,m,d.done,d.value)})}}function r(a,d,u,m){Promise.resolve(m).then(function(h){a({value:h,done:u})},d)}}var ar=n=>n&&typeof n.length=="number"&&typeof n!="function";function sr(n){return oe(n?.then)}function lr(n){return oe(n[un])}function cr(n){return Symbol.asyncIterator&&oe(n?.[Symbol.asyncIterator])}function dr(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function Zh(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var ur=Zh();function pr(n){return oe(n?.[ur])}function fr(n){return bu(this,arguments,function*(){let i=n.getReader();try{for(;;){let{value:e,done:r}=yield Lt(i.read());if(r)return yield Lt(void 0);yield yield Lt(e)}}finally{i.releaseLock()}})}function mr(n){return oe(n?.getReader)}function xt(n){if(n instanceof fe)return n;if(n!=null){if(lr(n))return Jh(n);if(ar(n))return Xh(n);if(sr(n))return Yh(n);if(cr(n))return Iu(n);if(pr(n))return Qh(n);if(mr(n))return Kh(n)}throw dr(n)}function Jh(n){return new fe(t=>{let i=n[un]();if(oe(i.subscribe))return i.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Xh(n){return new fe(t=>{for(let i=0;i<n.length&&!t.closed;i++)t.next(n[i]);t.complete()})}function Yh(n){return new fe(t=>{n.then(i=>{t.closed||(t.next(i),t.complete())},i=>t.error(i)).then(null,ir)})}function Qh(n){return new fe(t=>{for(let i of n)if(t.next(i),t.closed)return;t.complete()})}function Iu(n){return new fe(t=>{e1(n,t).catch(i=>t.error(i))})}function Kh(n){return Iu(fr(n))}function e1(n,t){var i,e,r,a;return xu(this,void 0,void 0,function*(){try{for(i=yu(n);e=yield i.next(),!e.done;){let d=e.value;if(t.next(d),t.closed)return}}catch(d){r={error:d}}finally{try{e&&!e.done&&(a=i.return)&&(yield a.call(i))}finally{if(r)throw r.error}}t.complete()})}function Ye(n,t,i,e=0,r=!1){let a=t.schedule(function(){i(),r?n.add(this.schedule(null,e)):this.unsubscribe()},e);if(n.add(a),!r)return a}function gr(n,t=0){return pn((i,e)=>{i.subscribe(fn(e,r=>Ye(e,n,()=>e.next(r),t),()=>Ye(e,n,()=>e.complete(),t),r=>Ye(e,n,()=>e.error(r),t)))})}function hr(n,t=0){return pn((i,e)=>{e.add(n.schedule(()=>i.subscribe(e),t))})}function Eu(n,t){return xt(n).pipe(hr(t),gr(t))}function Cu(n,t){return xt(n).pipe(hr(t),gr(t))}function wu(n,t){return new fe(i=>{let e=0;return t.schedule(function(){e===n.length?i.complete():(i.next(n[e++]),i.closed||this.schedule())})})}function _u(n,t){return new fe(i=>{let e;return Ye(i,t,()=>{e=n[ur](),Ye(i,t,()=>{let r,a;try{({value:r,done:a}=e.next())}catch(d){i.error(d);return}a?i.complete():i.next(r)},0,!0)}),()=>oe(e?.return)&&e.return()})}function vr(n,t){if(!n)throw new Error("Iterable cannot be null");return new fe(i=>{Ye(i,t,()=>{let e=n[Symbol.asyncIterator]();Ye(i,t,()=>{e.next().then(r=>{r.done?i.complete():i.next(r.value)})},0,!0)})})}function Du(n,t){return vr(fr(n),t)}function Su(n,t){if(n!=null){if(lr(n))return Eu(n,t);if(ar(n))return wu(n,t);if(sr(n))return Cu(n,t);if(cr(n))return vr(n,t);if(pr(n))return _u(n,t);if(mr(n))return Du(n,t)}throw dr(n)}function as(n,t){return t?Su(n,t):xt(n)}function Ft(n,t){return pn((i,e)=>{let r=0;i.subscribe(fn(e,a=>{e.next(n.call(t,a,r++))}))})}var{isArray:t1}=Array;function n1(n,t){return t1(t)?n(...t):n(t)}function Tu(n){return Ft(t=>n1(n,t))}var{isArray:i1}=Array,{getPrototypeOf:r1,prototype:o1,keys:a1}=Object;function ku(n){if(n.length===1){let t=n[0];if(i1(t))return{args:t,keys:null};if(s1(t)){let i=a1(t);return{args:i.map(e=>t[e]),keys:i}}}return{args:n,keys:null}}function s1(n){return n&&typeof n=="object"&&r1(n)===o1}function Mu(n,t){return n.reduce((i,e,r)=>(i[e]=t[r],i),{})}function ss(...n){let t=hu(n),{args:i,keys:e}=ku(n),r=new fe(a=>{let{length:d}=i;if(!d){a.complete();return}let u=new Array(d),m=d,h=d;for(let x=0;x<d;x++){let E=!1;xt(i[x]).subscribe(fn(a,D=>{E||(E=!0,h--),u[x]=D},()=>m--,void 0,()=>{(!m||!E)&&(h||a.next(e?Mu(e,u):u),a.complete())}))}});return t?r.pipe(Tu(t)):r}function Au(n){let t=Q(null);try{return n()}finally{Q(t)}}var Ir="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",W=class extends Error{code;constructor(t,i){super(Er(t,i)),this.code=t}};function l1(n){return`NG0${Math.abs(n)}`}function Er(n,t){return`${l1(n)}${t?": "+t:""}`}var Ie=globalThis;function ae(n){for(let t in n)if(n[t]===ae)return t;throw Error("")}function Fu(n,t){for(let i in t)t.hasOwnProperty(i)&&!n.hasOwnProperty(i)&&(n[i]=t[i])}function dt(n){if(typeof n=="string")return n;if(Array.isArray(n))return`[${n.map(dt).join(", ")}]`;if(n==null)return""+n;let t=n.overriddenName||n.name;if(t)return`${t}`;let i=n.toString();if(i==null)return""+i;let e=i.indexOf(`
`);return e>=0?i.slice(0,e):i}function bs(n,t){return n?t?`${n} ${t}`:n:t||""}var c1=ae({__forward_ref__:ae});function Be(n){return n.__forward_ref__=Be,n.toString=function(){return dt(this())},n}function me(n){return ys(n)?n():n}function ys(n){return typeof n=="function"&&n.hasOwnProperty(c1)&&n.__forward_ref__===Be}function se(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function we(n){return{providers:n.providers||[],imports:n.imports||[]}}function Cr(n){return d1(n,wr)}function d1(n,t){return n.hasOwnProperty(t)&&n[t]||null}function u1(n){let t=n?.[wr]??null;return t||null}function cs(n){return n&&n.hasOwnProperty(br)?n[br]:null}var wr=ae({\u0275prov:ae}),br=ae({\u0275inj:ae}),Z=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(t,i){this._desc=t,this.\u0275prov=void 0,typeof i=="number"?this.__NG_ELEMENT_ID__=i:i!==void 0&&(this.\u0275prov=se({token:this,providedIn:i.providedIn||"root",factory:i.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Is(n){return n&&!!n.\u0275providers}var Es=ae({\u0275cmp:ae}),Cs=ae({\u0275dir:ae}),ws=ae({\u0275pipe:ae}),_s=ae({\u0275mod:ae}),zn=ae({\u0275fac:ae}),jt=ae({__NG_ELEMENT_ID__:ae}),Ou=ae({__NG_ENV_ID__:ae});function _r(n){return typeof n=="string"?n:n==null?"":String(n)}function Nu(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():_r(n)}var Ru=ae({ngErrorCode:ae}),p1=ae({ngErrorMessage:ae}),f1=ae({ngTokenPath:ae});function Ds(n,t){return Pu("",-200,t)}function Dr(n,t){throw new W(-201,!1)}function Pu(n,t,i){let e=new W(t,n);return e[Ru]=t,e[p1]=n,i&&(e[f1]=i),e}function m1(n){return n[Ru]}var ds;function Vu(){return ds}function Ae(n){let t=ds;return ds=n,t}function Ss(n,t,i){let e=Cr(n);if(e&&e.providedIn=="root")return e.value===void 0?e.value=e.factory():e.value;if(i&8)return null;if(t!==void 0)return t;Dr(n,"Injector")}var g1={},Nt=g1,h1="__NG_DI_FLAG__",us=class{injector;constructor(t){this.injector=t}retrieve(t,i){let e=Rt(i)||0;try{return this.injector.get(t,e&8?null:Nt,e)}catch(r){if(on(r))return r;throw r}}};function v1(n,t=0){let i=qi();if(i===void 0)throw new W(-203,!1);if(i===null)return Ss(n,void 0,t);{let e=x1(t),r=i.retrieve(n,e);if(on(r)){if(e.optional)return null;throw r}return r}}function te(n,t=0){return(Vu()||v1)(me(n),t)}function K(n,t){return te(n,Rt(t))}function Rt(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function x1(n){return{optional:!!(n&8),host:!!(n&1),self:!!(n&2),skipSelf:!!(n&4)}}function ps(n){let t=[];for(let i=0;i<n.length;i++){let e=me(n[i]);if(Array.isArray(e)){if(e.length===0)throw new W(900,!1);let r,a=0;for(let d=0;d<e.length;d++){let u=e[d],m=b1(u);typeof m=="number"?m===-1?r=u.token:a|=m:r=u}t.push(te(r,a))}else t.push(te(e))}return t}function b1(n){return n[h1]}function Pt(n,t){let i=n.hasOwnProperty(zn);return i?n[zn]:null}function Sr(n,t){n.forEach(i=>Array.isArray(i)?Sr(i,t):t(i))}function Ts(n,t,i){t>=n.length?n.push(i):n.splice(t,0,i)}function $n(n,t){return t>=n.length-1?n.pop():n.splice(t,1)[0]}function qu(n,t){let i=[];for(let e=0;e<n;e++)i.push(t);return i}function Hu(n,t,i,e){let r=n.length;if(r==t)n.push(i,e);else if(r===1)n.push(e,n[0]),n[0]=i;else{for(r--,n.push(n[r-1],n[r]);r>t;){let a=r-2;n[r]=n[a],r--}n[t]=i,n[t+1]=e}}function ju(n,t,i){let e=gn(n,t);return e>=0?n[e|1]=i:(e=~e,Hu(n,e,t,i)),e}function Tr(n,t){let i=gn(n,t);if(i>=0)return n[i|1]}function gn(n,t){return y1(n,t,1)}function y1(n,t,i){let e=0,r=n.length>>i;for(;r!==e;){let a=e+(r-e>>1),d=n[a<<i];if(t===d)return a<<i;d>t?r=a:e=a+1}return~(r<<i)}var yt={},Oe=[],It=new Z(""),ks=new Z("",-1),Ms=new Z(""),Un=class{get(t,i=Nt){if(i===Nt){let r=Pu("",-201);throw r.name="\u0275NotFound",r}return i}};function Bu(n){return n[_s]||null}function Bt(n){return n[Es]||null}function As(n){return n[Cs]||null}function zu(n){return n[ws]||null}function kr(n){return{\u0275providers:n}}function Uu(n){return kr([{provide:It,multi:!0,useValue:n}])}function $u(...n){return{\u0275providers:Os(!0,n),\u0275fromNgModule:!0}}function Os(n,...t){let i=[],e=new Set,r,a=d=>{i.push(d)};return Sr(t,d=>{let u=d;yr(u,a,[],e)&&(r||=[],r.push(u))}),r!==void 0&&Gu(r,a),i}function Gu(n,t){for(let i=0;i<n.length;i++){let{ngModule:e,providers:r}=n[i];Ls(r,a=>{t(a,e)})}}function yr(n,t,i,e){if(n=me(n),!n)return!1;let r=null,a=cs(n),d=!a&&Bt(n);if(!a&&!d){let m=n.ngModule;if(a=cs(m),a)r=m;else return!1}else{if(d&&!d.standalone)return!1;r=n}let u=e.has(r);if(d){if(u)return!1;if(e.add(r),d.dependencies){let m=typeof d.dependencies=="function"?d.dependencies():d.dependencies;for(let h of m)yr(h,t,i,e)}}else if(a){if(a.imports!=null&&!u){e.add(r);let h;Sr(a.imports,x=>{yr(x,t,i,e)&&(h||=[],h.push(x))}),h!==void 0&&Gu(h,t)}if(!u){let h=Pt(r)||(()=>new r);t({provide:r,useFactory:h,deps:Oe},r),t({provide:Ms,useValue:r,multi:!0},r),t({provide:It,useValue:()=>te(r),multi:!0},r)}let m=a.providers;if(m!=null&&!u){let h=n;Ls(m,x=>{t(x,h)})}}else return!1;return r!==n&&n.providers!==void 0}function Ls(n,t){for(let i of n)Is(i)&&(i=i.\u0275providers),Array.isArray(i)?Ls(i,t):t(i)}var I1=ae({provide:String,useValue:ae});function Wu(n){return n!==null&&typeof n=="object"&&I1 in n}function E1(n){return!!(n&&n.useExisting)}function C1(n){return!!(n&&n.useFactory)}function Vt(n){return typeof n=="function"}function Zu(n){return!!n.useClass}var Gn=new Z(""),xr={},Lu={},ls;function Wn(){return ls===void 0&&(ls=new Un),ls}var Re=class{},qt=class extends Re{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(t,i,e,r){super(),this.parent=i,this.source=e,this.scopes=r,ms(t,d=>this.processProvider(d)),this.records.set(ks,mn(void 0,this)),r.has("environment")&&this.records.set(Re,mn(void 0,this));let a=this.records.get(Gn);a!=null&&typeof a.value=="string"&&this.scopes.add(a.value),this.injectorDefTypes=new Set(this.get(Ms,Oe,{self:!0}))}retrieve(t,i){let e=Rt(i)||0;try{return this.get(t,Nt,e)}catch(r){if(on(r))return r;throw r}}destroy(){Bn(this),this._destroyed=!0;let t=Q(null);try{for(let e of this._ngOnDestroyHooks)e.ngOnDestroy();let i=this._onDestroyHooks;this._onDestroyHooks=[];for(let e of i)e()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),Q(t)}}onDestroy(t){return Bn(this),this._onDestroyHooks.push(t),()=>this.removeOnDestroy(t)}runInContext(t){Bn(this);let i=Xe(this),e=Ae(void 0),r;try{return t()}finally{Xe(i),Ae(e)}}get(t,i=Nt,e){if(Bn(this),t.hasOwnProperty(Ou))return t[Ou](this);let r=Rt(e),a,d=Xe(this),u=Ae(void 0);try{if(!(r&4)){let h=this.records.get(t);if(h===void 0){let x=T1(t)&&Cr(t);x&&this.injectableDefInScope(x)?h=mn(fs(t),xr):h=null,this.records.set(t,h)}if(h!=null)return this.hydrate(t,h,r)}let m=r&2?Wn():this.parent;return i=r&8&&i===Nt?null:i,m.get(t,i)}catch(m){let h=m1(m);throw h===-200||h===-201?new W(h,null):m}finally{Ae(u),Xe(d)}}resolveInjectorInitializers(){let t=Q(null),i=Xe(this),e=Ae(void 0),r;try{let a=this.get(It,Oe,{self:!0});for(let d of a)d()}finally{Xe(i),Ae(e),Q(t)}}toString(){let t=[],i=this.records;for(let e of i.keys())t.push(dt(e));return`R3Injector[${t.join(", ")}]`}processProvider(t){t=me(t);let i=Vt(t)?t:me(t&&t.provide),e=_1(t);if(!Vt(t)&&t.multi===!0){let r=this.records.get(i);r||(r=mn(void 0,xr,!0),r.factory=()=>ps(r.multi),this.records.set(i,r)),i=t,r.multi.push(t)}this.records.set(i,e)}hydrate(t,i,e){let r=Q(null);try{if(i.value===Lu)throw Ds(dt(t));return i.value===xr&&(i.value=Lu,i.value=i.factory(void 0,e)),typeof i.value=="object"&&i.value&&S1(i.value)&&this._ngOnDestroyHooks.add(i.value),i.value}finally{Q(r)}}injectableDefInScope(t){if(!t.providedIn)return!1;let i=me(t.providedIn);return typeof i=="string"?i==="any"||this.scopes.has(i):this.injectorDefTypes.has(i)}removeOnDestroy(t){let i=this._onDestroyHooks.indexOf(t);i!==-1&&this._onDestroyHooks.splice(i,1)}};function fs(n){let t=Cr(n),i=t!==null?t.factory:Pt(n);if(i!==null)return i;if(n instanceof Z)throw new W(204,!1);if(n instanceof Function)return w1(n);throw new W(204,!1)}function w1(n){if(n.length>0)throw new W(204,!1);let i=u1(n);return i!==null?()=>i.factory(n):()=>new n}function _1(n){if(Wu(n))return mn(void 0,n.useValue);{let t=Fs(n);return mn(t,xr)}}function Fs(n,t,i){let e;if(Vt(n)){let r=me(n);return Pt(r)||fs(r)}else if(Wu(n))e=()=>me(n.useValue);else if(C1(n))e=()=>n.useFactory(...ps(n.deps||[]));else if(E1(n))e=(r,a)=>te(me(n.useExisting),a!==void 0&&a&8?8:void 0);else{let r=me(n&&(n.useClass||n.provide));if(D1(n))e=()=>new r(...ps(n.deps));else return Pt(r)||fs(r)}return e}function Bn(n){if(n.destroyed)throw new W(205,!1)}function mn(n,t,i=!1){return{factory:n,value:t,multi:i?[]:void 0}}function D1(n){return!!n.deps}function S1(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function T1(n){return typeof n=="function"||typeof n=="object"&&n.ngMetadataName==="InjectionToken"}function ms(n,t){for(let i of n)Array.isArray(i)?ms(i,t):i&&Is(i)?ms(i.\u0275providers,t):t(i)}function Mr(n,t){let i;n instanceof qt?(Bn(n),i=n):i=new us(n);let e,r=Xe(i),a=Ae(void 0);try{return t()}finally{Xe(r),Ae(a)}}function Ns(){return Vu()!==void 0||qi()!=null}var ze=0,ee=1,J=2,ge=3,Pe=4,Ee=5,hn=6,vn=7,_e=8,Et=9,et=10,pe=11,xn=12,Rs=13,bn=14,De=15,zt=16,Ut=17,$t=18,Zn=19,Ps=20,ct=21,Ar=22,Jn=23,Le=24,Or=25,Xn=26,be=27,Ju=1;var Ct=7,Yn=8,Qn=9,Se=10;function tt(n){return Array.isArray(n)&&typeof n[Ju]=="object"}function Ue(n){return Array.isArray(n)&&n[Ju]===!0}function Vs(n){return(n.flags&4)!==0}function wt(n){return n.componentOffset>-1}function Kn(n){return(n.flags&1)===1}function nt(n){return!!n.template}function yn(n){return(n[J]&512)!==0}function Gt(n){return(n[J]&256)===256}var Xu="svg",Yu="math";function Ve(n){for(;Array.isArray(n);)n=n[ze];return n}function qs(n,t){return Ve(t[n])}function it(n,t){return Ve(t[n.index])}function Lr(n,t){return n.data[t]}function qe(n,t){let i=t[n];return tt(i)?i:i[ze]}function Fr(n){return(n[J]&128)===128}function Qu(n){return Ue(n[ge])}function In(n,t){return t==null?null:n[t]}function Hs(n){n[Ut]=0}function js(n){n[J]&1024||(n[J]|=1024,Fr(n)&&ti(n))}function ei(n){return!!(n[J]&9216||n[Le]?.dirty)}function Nr(n){n[et].changeDetectionScheduler?.notify(8),n[J]&64&&(n[J]|=1024),ei(n)&&ti(n)}function ti(n){n[et].changeDetectionScheduler?.notify(0);let t=bt(n);for(;t!==null&&!(t[J]&8192||(t[J]|=8192,!Fr(t)));)t=bt(t)}function Bs(n,t){if(Gt(n))throw new W(911,!1);n[ct]===null&&(n[ct]=[]),n[ct].push(t)}function Ku(n,t){if(n[ct]===null)return;let i=n[ct].indexOf(t);i!==-1&&n[ct].splice(i,1)}function bt(n){let t=n[ge];return Ue(t)?t[ge]:t}function ep(n){return n[vn]??=[]}function tp(n){return n.cleanup??=[]}var ie={lFrame:gp(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var gs=!1;function np(){return ie.lFrame.elementDepthCount}function ip(){ie.lFrame.elementDepthCount++}function rp(){ie.lFrame.elementDepthCount--}function zs(){return ie.bindingsEnabled}function Us(){return ie.skipHydrationRootTNode!==null}function op(n){return ie.skipHydrationRootTNode===n}function ap(){ie.skipHydrationRootTNode=null}function le(){return ie.lFrame.lView}function Fe(){return ie.lFrame.tView}function Te(){let n=$s();for(;n!==null&&n.type===64;)n=n.parent;return n}function $s(){return ie.lFrame.currentTNode}function sp(){let n=ie.lFrame,t=n.currentTNode;return n.isParent?t:t.parent}function En(n,t){let i=ie.lFrame;i.currentTNode=n,i.isParent=t}function Gs(){return ie.lFrame.isParent}function Ws(){ie.lFrame.isParent=!1}function Zs(){return gs}function Js(n){let t=gs;return gs=n,t}function lp(n){return ie.lFrame.bindingIndex=n}function Rr(){return ie.lFrame.bindingIndex++}function cp(n){let t=ie.lFrame,i=t.bindingIndex;return t.bindingIndex=t.bindingIndex+n,i}function dp(){return ie.lFrame.inI18n}function up(n,t){let i=ie.lFrame;i.bindingIndex=i.bindingRootIndex=n,Pr(t)}function pp(){return ie.lFrame.currentDirectiveIndex}function Pr(n){ie.lFrame.currentDirectiveIndex=n}function fp(n){let t=ie.lFrame.currentDirectiveIndex;return t===-1?null:n[t]}function Xs(n){ie.lFrame.currentQueryIndex=n}function k1(n){let t=n[ee];return t.type===2?t.declTNode:t.type===1?n[Ee]:null}function Ys(n,t,i){if(i&4){let r=t,a=n;for(;r=r.parent,r===null&&!(i&1);)if(r=k1(a),r===null||(a=a[bn],r.type&10))break;if(r===null)return!1;t=r,n=a}let e=ie.lFrame=mp();return e.currentTNode=t,e.lView=n,!0}function Vr(n){let t=mp(),i=n[ee];ie.lFrame=t,t.currentTNode=i.firstChild,t.lView=n,t.tView=i,t.contextLView=n,t.bindingIndex=i.bindingStartIndex,t.inI18n=!1}function mp(){let n=ie.lFrame,t=n===null?null:n.child;return t===null?gp(n):t}function gp(n){let t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=t),t}function hp(){let n=ie.lFrame;return ie.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var Qs=hp;function qr(){let n=hp();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function Wt(){return ie.lFrame.selectedIndex}function _t(n){ie.lFrame.selectedIndex=n}function Ks(){let n=ie.lFrame;return Lr(n.tView,n.selectedIndex)}function vp(){return ie.lFrame.currentNamespace}var xp=!0;function Hr(){return xp}function jr(n){xp=n}function hs(n,t=null,i=null,e){let r=el(n,t,i,e);return r.resolveInjectorInitializers(),r}function el(n,t=null,i=null,e,r=new Set){let a=[i||Oe,$u(n)];return e=e||(typeof n=="object"?void 0:dt(n)),new qt(a,t||Wn(),e||null,r)}var Qe=class n{static THROW_IF_NOT_FOUND=Nt;static NULL=new Un;static create(t,i){if(Array.isArray(t))return hs({name:""},i,t,"");{let e=t.name??"";return hs({name:e},t.parent,t.providers,e)}}static \u0275prov=se({token:n,providedIn:"any",factory:()=>te(ks)});static __NG_ELEMENT_ID__=-1},ke=new Z(""),Zt=(()=>{class n{static __NG_ELEMENT_ID__=M1;static __NG_ENV_ID__=i=>i}return n})(),vs=class extends Zt{_lView;constructor(t){super(),this._lView=t}get destroyed(){return Gt(this._lView)}onDestroy(t){let i=this._lView;return Bs(i,t),()=>Ku(i,t)}};function M1(){return new vs(le())}var Ke=class{_console=console;handleError(t){this._console.error("ERROR",t)}},rt=new Z("",{providedIn:"root",factory:()=>{let n=K(Re),t;return i=>{n.destroyed&&!t?setTimeout(()=>{throw i}):(t??=n.get(Ke),t.handleError(i))}}}),bp={provide:It,useValue:()=>{K(Ke)},multi:!0},A1=new Z("",{providedIn:"root",factory:()=>{let n=K(ke).defaultView;if(!n)return;let t=K(rt),i=a=>{t(a.reason),a.preventDefault()},e=a=>{a.error?t(a.error):t(new Error(a.message,{cause:a})),a.preventDefault()},r=()=>{n.addEventListener("unhandledrejection",i),n.addEventListener("error",e)};typeof Zone<"u"?Zone.root.run(r):r(),K(Zt).onDestroy(()=>{n.removeEventListener("error",e),n.removeEventListener("unhandledrejection",i)})}});function tl(){return kr([Uu(()=>{K(A1)})])}function nl(n){return typeof n=="function"&&n[Ce]!==void 0}function ut(n,t){let[i,e,r]=Ya(n,t?.equal),a=i,d=a[Ce];return a.set=e,a.update=r,a.asReadonly=yp.bind(a),a}function yp(){let n=this[Ce];if(n.readonlyFn===void 0){let t=()=>this();t[Ce]=n,n.readonlyFn=t}return n.readonlyFn}function il(n){return nl(n)&&typeof n.set=="function"}var Ht=class{},Br=new Z("",{providedIn:"root",factory:()=>!1});var rl=new Z(""),ol=new Z(""),Jt=(()=>{class n{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new jn(!1);get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new fe(i=>{i.next(!1),i.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let i=this.taskId++;return this.pendingTasks.add(i),i}has(i){return this.pendingTasks.has(i)}remove(i){this.pendingTasks.delete(i),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=se({token:n,providedIn:"root",factory:()=>new n})}return n})();function ni(...n){}var al=(()=>{class n{static \u0275prov=se({token:n,providedIn:"root",factory:()=>new xs})}return n})(),xs=class{dirtyEffectCount=0;queues=new Map;add(t){this.enqueue(t),this.schedule(t)}schedule(t){t.dirty&&this.dirtyEffectCount++}remove(t){let i=t.zone,e=this.queues.get(i);e.has(t)&&(e.delete(t),t.dirty&&this.dirtyEffectCount--)}enqueue(t){let i=t.zone;this.queues.has(i)||this.queues.set(i,new Set);let e=this.queues.get(i);e.has(t)||e.add(t)}flush(){for(;this.dirtyEffectCount>0;){let t=!1;for(let[i,e]of this.queues)i===null?t||=this.flushQueue(e):t||=i.run(()=>this.flushQueue(e));t||(this.dirtyEffectCount=0)}}flushQueue(t){let i=!1;for(let e of t)e.dirty&&(this.dirtyEffectCount--,i=!0,e.run());return i}};function ui(n){return{toString:n}.toString()}function ef(n){let t=Ie.ng;if(t&&t.\u0275compilerFacade)return t.\u0275compilerFacade;throw new Error("JIT compiler unavailable")}function $1(n){return typeof n=="function"}var Yr=class{previousValue;currentValue;firstChange;constructor(t,i,e){this.previousValue=t,this.currentValue=i,this.firstChange=e}isFirstChange(){return this.firstChange}};function tf(n,t,i,e){t!==null?t.applyValueToInputSignal(t,e):n[i]=e}var po=(()=>{let n=()=>nf;return n.ngInherit=!0,n})();function nf(n){return n.type.prototype.ngOnChanges&&(n.setInput=W1),G1}function G1(){let n=of(this),t=n?.current;if(t){let i=n.previous;if(i===yt)n.previous=t;else for(let e in t)i[e]=t[e];n.current=null,this.ngOnChanges(t)}}function W1(n,t,i,e,r){let a=this.declaredInputs[e],d=of(n)||Z1(n,{previous:yt,current:null}),u=d.current||(d.current={}),m=d.previous,h=m[a];u[a]=new Yr(h&&h.currentValue,i,m===yt),tf(n,t,r,i)}var rf="__ngSimpleChanges__";function of(n){return n[rf]||null}function Z1(n,t){return n[rf]=t}var Ip=[];var de=function(n,t=null,i){for(let e=0;e<Ip.length;e++){let r=Ip[e];r(n,t,i)}};function J1(n,t,i){let{ngOnChanges:e,ngOnInit:r,ngDoCheck:a}=t.type.prototype;if(e){let d=nf(t);(i.preOrderHooks??=[]).push(n,d),(i.preOrderCheckHooks??=[]).push(n,d)}r&&(i.preOrderHooks??=[]).push(0-n,r),a&&((i.preOrderHooks??=[]).push(n,a),(i.preOrderCheckHooks??=[]).push(n,a))}function af(n,t){for(let i=t.directiveStart,e=t.directiveEnd;i<e;i++){let a=n.data[i].type.prototype,{ngAfterContentInit:d,ngAfterContentChecked:u,ngAfterViewInit:m,ngAfterViewChecked:h,ngOnDestroy:x}=a;d&&(n.contentHooks??=[]).push(-i,d),u&&((n.contentHooks??=[]).push(i,u),(n.contentCheckHooks??=[]).push(i,u)),m&&(n.viewHooks??=[]).push(-i,m),h&&((n.viewHooks??=[]).push(i,h),(n.viewCheckHooks??=[]).push(i,h)),x!=null&&(n.destroyHooks??=[]).push(i,x)}}function Zr(n,t,i){sf(n,t,3,i)}function Jr(n,t,i,e){(n[J]&3)===i&&sf(n,t,i,e)}function sl(n,t){let i=n[J];(i&3)===t&&(i&=16383,i+=1,n[J]=i)}function sf(n,t,i,e){let r=e!==void 0?n[Ut]&65535:0,a=e??-1,d=t.length-1,u=0;for(let m=r;m<d;m++)if(typeof t[m+1]=="number"){if(u=t[m],e!=null&&u>=e)break}else t[m]<0&&(n[Ut]+=65536),(u<a||a==-1)&&(X1(n,i,t,m),n[Ut]=(n[Ut]&4294901760)+m+2),m++}function Ep(n,t){de(4,n,t);let i=Q(null);try{t.call(n)}finally{Q(i),de(5,n,t)}}function X1(n,t,i,e){let r=i[e]<0,a=i[e+1],d=r?-i[e]:i[e],u=n[d];r?n[J]>>14<n[Ut]>>16&&(n[J]&3)===t&&(n[J]+=16384,Ep(u,a)):Ep(u,a)}var wn=-1,Yt=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(t,i,e,r){this.factory=t,this.name=r,this.canSeeViewProviders=i,this.injectImpl=e}};function Y1(n){return(n.flags&8)!==0}function Q1(n){return(n.flags&16)!==0}function K1(n,t,i){let e=0;for(;e<i.length;){let r=i[e];if(typeof r=="number"){if(r!==0)break;e++;let a=i[e++],d=i[e++],u=i[e++];n.setAttribute(t,d,u,a)}else{let a=r,d=i[++e];t6(a)?n.setProperty(t,a,d):n.setAttribute(t,a,d),e++}}return e}function e6(n){return n===3||n===4||n===6}function t6(n){return n.charCodeAt(0)===64}function oi(n,t){if(!(t===null||t.length===0))if(n===null||n.length===0)n=t.slice();else{let i=-1;for(let e=0;e<t.length;e++){let r=t[e];typeof r=="number"?i=r:i===0||(i===-1||i===2?Cp(n,i,r,null,t[++e]):Cp(n,i,r,null,null))}}return n}function Cp(n,t,i,e,r){let a=0,d=n.length;if(t===-1)d=-1;else for(;a<n.length;){let u=n[a++];if(typeof u=="number"){if(u===t){d=-1;break}else if(u>t){d=a-1;break}}}for(;a<n.length;){let u=n[a];if(typeof u=="number")break;if(u===i){r!==null&&(n[a+1]=r);return}a++,r!==null&&a++}d!==-1&&(n.splice(d,0,t),a=d+1),n.splice(a++,0,i),r!==null&&n.splice(a++,0,r)}function lf(n){return n!==wn}function Qr(n){return n&32767}function n6(n){return n>>16}function Kr(n,t){let i=n6(n),e=t;for(;i>0;)e=e[bn],i--;return e}var vl=!0;function wp(n){let t=vl;return vl=n,t}var i6=256,cf=i6-1,df=5,r6=0,ot={};function o6(n,t,i){let e;typeof i=="string"?e=i.charCodeAt(0)||0:i.hasOwnProperty(jt)&&(e=i[jt]),e==null&&(e=i[jt]=r6++);let r=e&cf,a=1<<r;t.data[n+(r>>df)]|=a}function eo(n,t){let i=uf(n,t);if(i!==-1)return i;let e=t[ee];e.firstCreatePass&&(n.injectorIndex=t.length,ll(e.data,n),ll(t,null),ll(e.blueprint,null));let r=jl(n,t),a=n.injectorIndex;if(lf(r)){let d=Qr(r),u=Kr(r,t),m=u[ee].data;for(let h=0;h<8;h++)t[a+h]=u[d+h]|m[d+h]}return t[a+8]=r,a}function ll(n,t){n.push(0,0,0,0,0,0,0,0,t)}function uf(n,t){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||t[n.injectorIndex+8]===null?-1:n.injectorIndex}function jl(n,t){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let i=0,e=null,r=t;for(;r!==null;){if(e=hf(r),e===null)return wn;if(i++,r=r[bn],e.injectorIndex!==-1)return e.injectorIndex|i<<16}return wn}function xl(n,t,i){o6(n,t,i)}function pf(n,t,i){if(i&8||n!==void 0)return n;Dr(t,"NodeInjector")}function ff(n,t,i,e){if(i&8&&e===void 0&&(e=null),(i&3)===0){let r=n[Et],a=Ae(void 0);try{return r?r.get(t,e,i&8):Ss(t,e,i&8)}finally{Ae(a)}}return pf(e,t,i)}function mf(n,t,i,e=0,r){if(n!==null){if(t[J]&2048&&!(e&2)){let d=d6(n,t,i,e,ot);if(d!==ot)return d}let a=gf(n,t,i,e,ot);if(a!==ot)return a}return ff(t,i,e,r)}function gf(n,t,i,e,r){let a=l6(i);if(typeof a=="function"){if(!Ys(t,n,e))return e&1?pf(r,i,e):ff(t,i,e,r);try{let d;if(d=a(e),d==null&&!(e&8))Dr(i);else return d}finally{Qs()}}else if(typeof a=="number"){let d=null,u=uf(n,t),m=wn,h=e&1?t[De][Ee]:null;for((u===-1||e&4)&&(m=u===-1?jl(n,t):t[u+8],m===wn||!Dp(e,!1)?u=-1:(d=t[ee],u=Qr(m),t=Kr(m,t)));u!==-1;){let x=t[ee];if(_p(a,u,x.data)){let E=a6(u,t,i,d,e,h);if(E!==ot)return E}m=t[u+8],m!==wn&&Dp(e,t[ee].data[u+8]===h)&&_p(a,u,t)?(d=x,u=Qr(m),t=Kr(m,t)):u=-1}}return r}function a6(n,t,i,e,r,a){let d=t[ee],u=d.data[n+8],m=e==null?wt(u)&&vl:e!=d&&(u.type&3)!==0,h=r&1&&a===u,x=s6(u,d,i,m,h);return x!==null?to(t,d,x,u,r):ot}function s6(n,t,i,e,r){let a=n.providerIndexes,d=t.data,u=a&1048575,m=n.directiveStart,h=n.directiveEnd,x=a>>20,E=e?u:u+x,D=r?u+x:h;for(let y=E;y<D;y++){let N=d[y];if(y<m&&i===N||y>=m&&N.type===i)return y}if(r){let y=d[m];if(y&&nt(y)&&y.type===i)return m}return null}function to(n,t,i,e,r){let a=n[i],d=t.data;if(a instanceof Yt){let u=a;if(u.resolving){let y=Nu(d[i]);throw Ds(y)}let m=wp(u.canSeeViewProviders);u.resolving=!0;let h=d[i].type||d[i],x,E=u.injectImpl?Ae(u.injectImpl):null,D=Ys(n,e,0);try{a=n[i]=u.factory(void 0,r,d,n,e),t.firstCreatePass&&i>=e.directiveStart&&J1(i,d[i],t)}finally{E!==null&&Ae(E),wp(m),u.resolving=!1,Qs()}}return a}function l6(n){if(typeof n=="string")return n.charCodeAt(0)||0;let t=n.hasOwnProperty(jt)?n[jt]:void 0;return typeof t=="number"?t>=0?t&cf:c6:t}function _p(n,t,i){let e=1<<n;return!!(i[t+(n>>df)]&e)}function Dp(n,t){return!(n&2)&&!(n&1&&t)}var Xt=class{_tNode;_lView;constructor(t,i){this._tNode=t,this._lView=i}get(t,i,e){return mf(this._tNode,this._lView,t,Rt(e),i)}};function c6(){return new Xt(Te(),le())}function Bl(n){return ui(()=>{let t=n.prototype.constructor,i=t[zn]||bl(t),e=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==e;){let a=r[zn]||bl(r);if(a&&a!==i)return a;r=Object.getPrototypeOf(r)}return a=>new a})}function bl(n){return ys(n)?()=>{let t=bl(me(n));return t&&t()}:Pt(n)}function d6(n,t,i,e,r){let a=n,d=t;for(;a!==null&&d!==null&&d[J]&2048&&!yn(d);){let u=gf(a,d,i,e|2,ot);if(u!==ot)return u;let m=a.parent;if(!m){let h=d[Ps];if(h){let x=h.get(i,ot,e);if(x!==ot)return x}m=hf(d),d=d[bn]}a=m}return r}function hf(n){let t=n[ee],i=t.type;return i===2?t.declTNode:i===1?n[Ee]:null}function u6(){return fo(Te(),le())}function fo(n,t){return new F(it(n,t))}var F=(()=>{class n{nativeElement;constructor(i){this.nativeElement=i}static __NG_ELEMENT_ID__=u6}return n})();function vf(n){return(n.flags&128)===128}var zl=(function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n})(zl||{}),xf=new Map,p6=0;function f6(){return p6++}function m6(n){xf.set(n[Zn],n)}function yl(n){xf.delete(n[Zn])}var Sp="__ngContext__";function _n(n,t){tt(t)?(n[Sp]=t[Zn],m6(t)):n[Sp]=t}function bf(n){return If(n[xn])}function yf(n){return If(n[Pe])}function If(n){for(;n!==null&&!Ue(n);)n=n[Pe];return n}var Il;function Ul(n){Il=n}function $l(){if(Il!==void 0)return Il;if(typeof document<"u")return document;throw new W(210,!1)}var mo=new Z("",{providedIn:"root",factory:()=>g6}),g6="ng",go=new Z(""),tn=new Z("",{providedIn:"platform",factory:()=>"unknown"});var ho=new Z("",{providedIn:"root",factory:()=>$l().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var h6="h",v6="b";var Ef=!1,Cf=new Z("",{providedIn:"root",factory:()=>Ef});var x6=(n,t,i,e)=>{};function b6(n,t,i,e){x6(n,t,i,e)}function vo(n){return(n.flags&32)===32}var y6=()=>null;function wf(n,t,i=!1){return y6(n,t,i)}function _f(n,t){let i=n.contentQueries;if(i!==null){let e=Q(null);try{for(let r=0;r<i.length;r+=2){let a=i[r],d=i[r+1];if(d!==-1){let u=n.data[d];Xs(a),u.contentQueries(2,t[d],d)}}}finally{Q(e)}}}function El(n,t,i){Xs(0);let e=Q(null);try{t(n,i)}finally{Q(e)}}function Df(n,t,i){if(Vs(t)){let e=Q(null);try{let r=t.directiveStart,a=t.directiveEnd;for(let d=r;d<a;d++){let u=n.data[d];if(u.contentQueries){let m=i[d];u.contentQueries(1,m,d)}}}finally{Q(e)}}}var pt=(function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n})(pt||{});var zr;function I6(){if(zr===void 0&&(zr=null,Ie.trustedTypes))try{zr=Ie.trustedTypes.createPolicy("angular",{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n})}catch{}return zr}function xo(n){return I6()?.createHTML(n)||n}var Ur;function E6(){if(Ur===void 0&&(Ur=null,Ie.trustedTypes))try{Ur=Ie.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n})}catch{}return Ur}function Tp(n){return E6()?.createHTML(n)||n}var no=class{changingThisBreaksApplicationSecurity;constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Ir})`}};function Gl(n){return n instanceof no?n.changingThisBreaksApplicationSecurity:n}function Sf(n,t){let i=Tf(n);if(i!=null&&i!==t){if(i==="ResourceURL"&&t==="URL")return!0;throw new Error(`Required a safe ${t}, got a ${i} (see ${Ir})`)}return i===t}function Tf(n){return n instanceof no&&n.getTypeName()||null}function C6(n){let t=new wl(n);return w6()?new Cl(t):t}var Cl=class{inertDocumentHelper;constructor(t){this.inertDocumentHelper=t}getInertBodyElement(t){t="<body><remove></remove>"+t;try{let i=new window.DOMParser().parseFromString(xo(t),"text/html").body;return i===null?this.inertDocumentHelper.getInertBodyElement(t):(i.firstChild?.remove(),i)}catch{return null}}},wl=class{defaultDoc;inertDocument;constructor(t){this.defaultDoc=t,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(t){let i=this.inertDocument.createElement("template");return i.innerHTML=xo(t),i}};function w6(){try{return!!new window.DOMParser().parseFromString(xo(""),"text/html")}catch{return!1}}var _6=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function kf(n){return n=String(n),n.match(_6)?n:"unsafe:"+n}function ft(n){let t={};for(let i of n.split(","))t[i]=!0;return t}function pi(...n){let t={};for(let i of n)for(let e in i)i.hasOwnProperty(e)&&(t[e]=!0);return t}var Mf=ft("area,br,col,hr,img,wbr"),Af=ft("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),Of=ft("rp,rt"),D6=pi(Of,Af),S6=pi(Af,ft("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),T6=pi(Of,ft("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),kp=pi(Mf,S6,T6,D6),Lf=ft("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),k6=ft("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),M6=ft("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),A6=pi(Lf,k6,M6),O6=ft("script,style,template");var _l=class{sanitizedSomething=!1;buf=[];sanitizeChildren(t){let i=t.firstChild,e=!0,r=[];for(;i;){if(i.nodeType===Node.ELEMENT_NODE?e=this.startElement(i):i.nodeType===Node.TEXT_NODE?this.chars(i.nodeValue):this.sanitizedSomething=!0,e&&i.firstChild){r.push(i),i=N6(i);continue}for(;i;){i.nodeType===Node.ELEMENT_NODE&&this.endElement(i);let a=F6(i);if(a){i=a;break}i=r.pop()}}return this.buf.join("")}startElement(t){let i=Mp(t).toLowerCase();if(!kp.hasOwnProperty(i))return this.sanitizedSomething=!0,!O6.hasOwnProperty(i);this.buf.push("<"),this.buf.push(i);let e=t.attributes;for(let r=0;r<e.length;r++){let a=e.item(r),d=a.name,u=d.toLowerCase();if(!A6.hasOwnProperty(u)){this.sanitizedSomething=!0;continue}let m=a.value;Lf[u]&&(m=kf(m)),this.buf.push(" ",d,'="',Ap(m),'"')}return this.buf.push(">"),!0}endElement(t){let i=Mp(t).toLowerCase();kp.hasOwnProperty(i)&&!Mf.hasOwnProperty(i)&&(this.buf.push("</"),this.buf.push(i),this.buf.push(">"))}chars(t){this.buf.push(Ap(t))}};function L6(n,t){return(n.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function F6(n){let t=n.nextSibling;if(t&&n!==t.previousSibling)throw Ff(t);return t}function N6(n){let t=n.firstChild;if(t&&L6(n,t))throw Ff(t);return t}function Mp(n){let t=n.nodeName;return typeof t=="string"?t:"FORM"}function Ff(n){return new Error(`Failed to sanitize html because the element is clobbered: ${n.outerHTML}`)}var R6=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,P6=/([^\#-~ |!])/g;function Ap(n){return n.replace(/&/g,"&amp;").replace(R6,function(t){let i=t.charCodeAt(0),e=t.charCodeAt(1);return"&#"+((i-55296)*1024+(e-56320)+65536)+";"}).replace(P6,function(t){return"&#"+t.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var $r;function Nf(n,t){let i=null;try{$r=$r||C6(n);let e=t?String(t):"";i=$r.getInertBodyElement(e);let r=5,a=e;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,e=a,a=i.innerHTML,i=$r.getInertBodyElement(e)}while(e!==a);let u=new _l().sanitizeChildren(Op(i)||i);return xo(u)}finally{if(i){let e=Op(i)||i;for(;e.firstChild;)e.firstChild.remove()}}}function Op(n){return"content"in n&&V6(n)?n.content:null}function V6(n){return n.nodeType===Node.ELEMENT_NODE&&n.nodeName==="TEMPLATE"}function q6(n,t){return n.createText(t)}function H6(n,t,i){n.setValue(t,i)}function Rf(n,t,i){return n.createElement(t,i)}function io(n,t,i,e,r){n.insertBefore(t,i,e,r)}function Pf(n,t,i){n.appendChild(t,i)}function Lp(n,t,i,e,r){e!==null?io(n,t,i,e,r):Pf(n,t,i)}function j6(n,t,i,e){n.removeChild(null,t,i,e)}function B6(n,t,i){n.setAttribute(t,"style",i)}function z6(n,t,i){i===""?n.removeAttribute(t,"class"):n.setAttribute(t,"class",i)}function Vf(n,t,i){let{mergedAttrs:e,classes:r,styles:a}=i;e!==null&&K1(n,t,e),r!==null&&z6(n,t,r),a!==null&&B6(n,t,a)}var Wl=(function(n){return n[n.NONE=0]="NONE",n[n.HTML=1]="HTML",n[n.STYLE=2]="STYLE",n[n.SCRIPT=3]="SCRIPT",n[n.URL=4]="URL",n[n.RESOURCE_URL=5]="RESOURCE_URL",n})(Wl||{});function _(n){let t=U6();return t?Tp(t.sanitize(Wl.HTML,n)||""):Sf(n,"HTML")?Tp(Gl(n)):Nf($l(),_r(n))}function U6(){let n=le();return n&&n[et].sanitizer}function $6(n){return n instanceof Function?n():n}function G6(n,t,i){let e=n.length;for(;;){let r=n.indexOf(t,i);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let a=t.length;if(r+a===e||n.charCodeAt(r+a)<=32)return r}i=r+1}}var qf="ng-template";function W6(n,t,i,e){let r=0;if(e){for(;r<t.length&&typeof t[r]=="string";r+=2)if(t[r]==="class"&&G6(t[r+1].toLowerCase(),i,0)!==-1)return!0}else if(Zl(n))return!1;if(r=t.indexOf(1,r),r>-1){let a;for(;++r<t.length&&typeof(a=t[r])=="string";)if(a.toLowerCase()===i)return!0}return!1}function Zl(n){return n.type===4&&n.value!==qf}function Z6(n,t,i){let e=n.type===4&&!i?qf:n.value;return t===e}function J6(n,t,i){let e=4,r=n.attrs,a=r!==null?Q6(r):0,d=!1;for(let u=0;u<t.length;u++){let m=t[u];if(typeof m=="number"){if(!d&&!$e(e)&&!$e(m))return!1;if(d&&$e(m))continue;d=!1,e=m|e&1;continue}if(!d)if(e&4){if(e=2|e&1,m!==""&&!Z6(n,m,i)||m===""&&t.length===1){if($e(e))return!1;d=!0}}else if(e&8){if(r===null||!W6(n,r,m,i)){if($e(e))return!1;d=!0}}else{let h=t[++u],x=X6(m,r,Zl(n),i);if(x===-1){if($e(e))return!1;d=!0;continue}if(h!==""){let E;if(x>a?E="":E=r[x+1].toLowerCase(),e&2&&h!==E){if($e(e))return!1;d=!0}}}}return $e(e)||d}function $e(n){return(n&1)===0}function X6(n,t,i,e){if(t===null)return-1;let r=0;if(e||!i){let a=!1;for(;r<t.length;){let d=t[r];if(d===n)return r;if(d===3||d===6)a=!0;else if(d===1||d===2){let u=t[++r];for(;typeof u=="string";)u=t[++r];continue}else{if(d===4)break;if(d===0){r+=4;continue}}r+=a?1:2}return-1}else return K6(t,n)}function Hf(n,t,i=!1){for(let e=0;e<t.length;e++)if(J6(n,t[e],i))return!0;return!1}function Y6(n){let t=n.attrs;if(t!=null){let i=t.indexOf(5);if((i&1)===0)return t[i+1]}return null}function Q6(n){for(let t=0;t<n.length;t++){let i=n[t];if(e6(i))return t}return n.length}function K6(n,t){let i=n.indexOf(4);if(i>-1)for(i++;i<n.length;){let e=n[i];if(typeof e=="number")return-1;if(e===t)return i;i++}return-1}function ev(n,t){e:for(let i=0;i<t.length;i++){let e=t[i];if(n.length===e.length){for(let r=0;r<n.length;r++)if(n[r]!==e[r])continue e;return!0}}return!1}function Fp(n,t){return n?":not("+t.trim()+")":t}function tv(n){let t=n[0],i=1,e=2,r="",a=!1;for(;i<n.length;){let d=n[i];if(typeof d=="string")if(e&2){let u=n[++i];r+="["+d+(u.length>0?'="'+u+'"':"")+"]"}else e&8?r+="."+d:e&4&&(r+=" "+d);else r!==""&&!$e(d)&&(t+=Fp(a,r),r=""),e=d,a=a||!$e(e);i++}return r!==""&&(t+=Fp(a,r)),t}function nv(n){return n.map(tv).join(",")}function iv(n){let t=[],i=[],e=1,r=2;for(;e<n.length;){let a=n[e];if(typeof a=="string")r===2?a!==""&&t.push(a,n[++e]):r===8&&i.push(a);else{if(!$e(r))break;r=a}e++}return i.length&&t.push(1,...i),t}var St={};function Jl(n,t,i,e,r,a,d,u,m,h,x){let E=be+e,D=E+r,y=rv(E,D),N=typeof h=="function"?h():h;return y[ee]={type:n,blueprint:y,template:i,queries:null,viewQuery:u,declTNode:t,data:y.slice().fill(null,E),bindingStartIndex:E,expandoStartIndex:D,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof a=="function"?a():a,pipeRegistry:typeof d=="function"?d():d,firstChild:null,schemas:m,consts:N,incompleteFirstPass:!1,ssrId:x}}function rv(n,t){let i=[];for(let e=0;e<t;e++)i.push(e<n?null:St);return i}function ov(n){let t=n.tView;return t===null||t.incompleteFirstPass?n.tView=Jl(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):t}function Xl(n,t,i,e,r,a,d,u,m,h,x){let E=t.blueprint.slice();return E[ze]=r,E[J]=e|4|128|8|64|1024,(h!==null||n&&n[J]&2048)&&(E[J]|=2048),Hs(E),E[ge]=E[bn]=n,E[_e]=i,E[et]=d||n&&n[et],E[pe]=u||n&&n[pe],E[Et]=m||n&&n[Et]||null,E[Ee]=a,E[Zn]=f6(),E[hn]=x,E[Ps]=h,E[De]=t.type==2?n[De]:E,E}function av(n,t,i){let e=it(t,n),r=ov(i),a=n[et].rendererFactory,d=Yl(n,Xl(n,r,null,jf(i),e,t,null,a.createRenderer(e,i),null,null,null));return n[t.index]=d}function jf(n){let t=16;return n.signals?t=4096:n.onPush&&(t=64),t}function Bf(n,t,i,e){if(i===0)return-1;let r=t.length;for(let a=0;a<i;a++)t.push(e),n.blueprint.push(e),n.data.push(null);return r}function Yl(n,t){return n[xn]?n[Rs][Pe]=t:n[xn]=t,n[Rs]=t,t}function c(n=1){zf(Fe(),le(),Wt()+n,!1)}function zf(n,t,i,e){if(!e)if((t[J]&3)===3){let a=n.preOrderCheckHooks;a!==null&&Zr(t,a,i)}else{let a=n.preOrderHooks;a!==null&&Jr(t,a,0,i)}_t(i)}var bo=(function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n})(bo||{});function Dl(n,t,i,e){let r=Q(null);try{let[a,d,u]=n.inputs[i],m=null;(d&bo.SignalBased)!==0&&(m=t[a][Ce]),m!==null&&m.transformFn!==void 0?e=m.transformFn(e):u!==null&&(e=u.call(t,e)),n.setInput!==null?n.setInput(t,m,e,i,a):tf(t,m,a,e)}finally{Q(r)}}var at=(function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n})(at||{}),sv;function Ql(n,t){return sv(n,t)}var Dn=new Set,Kl=(function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n})(Kl||{}),fi=new Z(""),Np=new Set;function Uf(n){Np.has(n)||(Np.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var $f=!1,Sl=class extends lt{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(t=!1){super(),this.__isAsync=t,Ns()&&(this.destroyRef=K(Zt,{optional:!0})??void 0,this.pendingTasks=K(Jt,{optional:!0})??void 0)}emit(t){let i=Q(null);try{super.next(t)}finally{Q(i)}}subscribe(t,i,e){let r=t,a=i||(()=>null),d=e;if(t&&typeof t=="object"){let m=t;r=m.next?.bind(m),a=m.error?.bind(m),d=m.complete?.bind(m)}this.__isAsync&&(a=this.wrapInTimeout(a),r&&(r=this.wrapInTimeout(r)),d&&(d=this.wrapInTimeout(d)));let u=super.subscribe({next:r,error:a,complete:d});return t instanceof ye&&t.add(u),u}wrapInTimeout(t){return i=>{let e=this.pendingTasks?.add();setTimeout(()=>{try{t(i)}finally{e!==void 0&&this.pendingTasks?.remove(e)}})}}},R=Sl;function Gf(n){let t,i;function e(){n=ni;try{i!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(i),t!==void 0&&clearTimeout(t)}catch{}}return t=setTimeout(()=>{n(),e()}),typeof requestAnimationFrame=="function"&&(i=requestAnimationFrame(()=>{n(),e()})),()=>e()}function Rp(n){return queueMicrotask(()=>n()),()=>{n=ni}}var ec="isAngularZone",ro=ec+"_ID",lv=0,T=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new R(!1);onMicrotaskEmpty=new R(!1);onStable=new R(!1);onError=new R(!1);constructor(t){let{enableLongStackTrace:i=!1,shouldCoalesceEventChangeDetection:e=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:a=$f}=t;if(typeof Zone>"u")throw new W(908,!1);Zone.assertZonePatched();let d=this;d._nesting=0,d._outer=d._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(d._inner=d._inner.fork(new Zone.TaskTrackingZoneSpec)),i&&Zone.longStackTraceZoneSpec&&(d._inner=d._inner.fork(Zone.longStackTraceZoneSpec)),d.shouldCoalesceEventChangeDetection=!r&&e,d.shouldCoalesceRunChangeDetection=r,d.callbackScheduled=!1,d.scheduleInRootZone=a,uv(d)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(ec)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new W(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new W(909,!1)}run(t,i,e){return this._inner.run(t,i,e)}runTask(t,i,e,r){let a=this._inner,d=a.scheduleEventTask("NgZoneEvent: "+r,t,cv,ni,ni);try{return a.runTask(d,i,e)}finally{a.cancelTask(d)}}runGuarded(t,i,e){return this._inner.runGuarded(t,i,e)}runOutsideAngular(t){return this._outer.run(t)}},cv={};function tc(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function dv(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function t(){Gf(()=>{n.callbackScheduled=!1,Tl(n),n.isCheckStableRunning=!0,tc(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{t()}):n._outer.run(()=>{t()}),Tl(n)}function uv(n){let t=()=>{dv(n)},i=lv++;n._inner=n._inner.fork({name:"angular",properties:{[ec]:!0,[ro]:i,[ro+i]:!0},onInvokeTask:(e,r,a,d,u,m)=>{if(pv(m))return e.invokeTask(a,d,u,m);try{return Pp(n),e.invokeTask(a,d,u,m)}finally{(n.shouldCoalesceEventChangeDetection&&d.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&t(),Vp(n)}},onInvoke:(e,r,a,d,u,m,h)=>{try{return Pp(n),e.invoke(a,d,u,m,h)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!fv(m)&&t(),Vp(n)}},onHasTask:(e,r,a,d)=>{e.hasTask(a,d),r===a&&(d.change=="microTask"?(n._hasPendingMicrotasks=d.microTask,Tl(n),tc(n)):d.change=="macroTask"&&(n.hasPendingMacrotasks=d.macroTask))},onHandleError:(e,r,a,d)=>(e.handleError(a,d),n.runOutsideAngular(()=>n.onError.emit(d)),!1)})}function Tl(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function Pp(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function Vp(n){n._nesting--,tc(n)}var ai=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new R;onMicrotaskEmpty=new R;onStable=new R;onError=new R;run(t,i,e){return t.apply(i,e)}runGuarded(t,i,e){return t.apply(i,e)}runOutsideAngular(t){return t()}runTask(t,i,e,r){return t.apply(i,e)}};function pv(n){return Wf(n,"__ignore_ng_zone__")}function fv(n){return Wf(n,"__scheduler_tick__")}function Wf(n,t){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[t]===!0}function Zf(n="zone.js",t){return n==="noop"?new ai:n==="zone.js"?new T(t):n}var Jf=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=se({token:n,providedIn:"root",factory:()=>new n})}return n})();var mv=new Z("",{providedIn:"root",factory:()=>({queue:new Set,isScheduled:!1,scheduler:null})});function Xf(n,t,i){let e=n.get(mv);if(Array.isArray(t))for(let r of t)e.queue.add(r),i?.detachedLeaveAnimationFns?.push(r);else e.queue.add(t),i?.detachedLeaveAnimationFns?.push(t);e.scheduler&&e.scheduler(n)}function gv(n,t){for(let[i,e]of t)Xf(n,e.animateFns)}function qp(n,t,i,e){let r=n?.[Xn]?.enter;t!==null&&r&&r.has(i.index)&&gv(e,r)}function Cn(n,t,i,e,r,a,d,u){if(r!=null){let m,h=!1;Ue(r)?m=r:tt(r)&&(h=!0,r=r[ze]);let x=Ve(r);n===0&&e!==null?(qp(u,e,a,i),d==null?Pf(t,e,x):io(t,e,x,d||null,!0)):n===1&&e!==null?(qp(u,e,a,i),io(t,e,x,d||null,!0)):n===2?Hp(u,a,i,E=>{j6(t,x,h,E)}):n===3&&Hp(u,a,i,()=>{t.destroyNode(x)}),m!=null&&Dv(t,n,i,m,a,e,d)}}function hv(n,t){Yf(n,t),t[ze]=null,t[Ee]=null}function vv(n,t,i,e,r,a){e[ze]=r,e[Ee]=t,yo(n,e,i,1,r,a)}function Yf(n,t){t[et].changeDetectionScheduler?.notify(9),yo(n,t,t[pe],2,null,null)}function xv(n){let t=n[xn];if(!t)return cl(n[ee],n);for(;t;){let i=null;if(tt(t))i=t[xn];else{let e=t[Se];e&&(i=e)}if(!i){for(;t&&!t[Pe]&&t!==n;)tt(t)&&cl(t[ee],t),t=t[ge];t===null&&(t=n),tt(t)&&cl(t[ee],t),i=t&&t[Pe]}t=i}}function nc(n,t){let i=n[Qn],e=i.indexOf(t);i.splice(e,1)}function Qf(n,t){if(Gt(t))return;let i=t[pe];i.destroyNode&&yo(n,t,i,3,null,null),xv(t)}function cl(n,t){if(Gt(t))return;let i=Q(null);try{t[J]&=-129,t[J]|=256,t[Le]&&Ji(t[Le]),Iv(n,t),yv(n,t),t[ee].type===1&&t[pe].destroy();let e=t[zt];if(e!==null&&Ue(t[ge])){e!==t[ge]&&nc(e,t);let r=t[$t];r!==null&&r.detachView(n)}yl(t)}finally{Q(i)}}function Hp(n,t,i,e){let r=n?.[Xn];if(r==null||r.leave==null||!r.leave.has(t.index))return e(!1);n&&Dn.add(n),Xf(i,()=>{if(r.leave&&r.leave.has(t.index)){let d=r.leave.get(t.index),u=[];if(d){for(let m=0;m<d.animateFns.length;m++){let h=d.animateFns[m],{promise:x}=h();u.push(x)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(u),bv(n,e)}else n&&Dn.delete(n),e(!1)},r)}function bv(n,t){let i=n[Xn]?.running;if(i){i.then(()=>{n[Xn].running=void 0,Dn.delete(n),t(!0)});return}t(!1)}function yv(n,t){let i=n.cleanup,e=t[vn];if(i!==null)for(let d=0;d<i.length-1;d+=2)if(typeof i[d]=="string"){let u=i[d+3];u>=0?e[u]():e[-u].unsubscribe(),d+=2}else{let u=e[i[d+1]];i[d].call(u)}e!==null&&(t[vn]=null);let r=t[ct];if(r!==null){t[ct]=null;for(let d=0;d<r.length;d++){let u=r[d];u()}}let a=t[Jn];if(a!==null){t[Jn]=null;for(let d of a)d.destroy()}}function Iv(n,t){let i;if(n!=null&&(i=n.destroyHooks)!=null)for(let e=0;e<i.length;e+=2){let r=t[i[e]];if(!(r instanceof Yt)){let a=i[e+1];if(Array.isArray(a))for(let d=0;d<a.length;d+=2){let u=r[a[d]],m=a[d+1];de(4,u,m);try{m.call(u)}finally{de(5,u,m)}}else{de(4,r,a);try{a.call(r)}finally{de(5,r,a)}}}}}function Kf(n,t,i){return Ev(n,t.parent,i)}function Ev(n,t,i){let e=t;for(;e!==null&&e.type&168;)t=e,e=t.parent;if(e===null)return i[ze];if(wt(e)){let{encapsulation:r}=n.data[e.directiveStart+e.componentOffset];if(r===pt.None||r===pt.Emulated)return null}return it(e,i)}function em(n,t,i){return wv(n,t,i)}function Cv(n,t,i){return n.type&40?it(n,i):null}var wv=Cv,jp;function ic(n,t,i,e){let r=Kf(n,e,t),a=t[pe],d=e.parent||t[Ee],u=em(d,e,t);if(r!=null)if(Array.isArray(i))for(let m=0;m<i.length;m++)Lp(a,r,i[m],u,!1);else Lp(a,r,i,u,!1);jp!==void 0&&jp(a,e,t,i,r)}function ii(n,t){if(t!==null){let i=t.type;if(i&3)return it(t,n);if(i&4)return kl(-1,n[t.index]);if(i&8){let e=t.child;if(e!==null)return ii(n,e);{let r=n[t.index];return Ue(r)?kl(-1,r):Ve(r)}}else{if(i&128)return ii(n,t.next);if(i&32)return Ql(t,n)()||Ve(n[t.index]);{let e=tm(n,t);if(e!==null){if(Array.isArray(e))return e[0];let r=bt(n[De]);return ii(r,e)}else return ii(n,t.next)}}}return null}function tm(n,t){if(t!==null){let e=n[De][Ee],r=t.projection;return e.projection[r]}return null}function kl(n,t){let i=Se+n+1;if(i<t.length){let e=t[i],r=e[ee].firstChild;if(r!==null)return ii(e,r)}return t[Ct]}function rc(n,t,i,e,r,a,d){for(;i!=null;){let u=e[Et];if(i.type===128){i=i.next;continue}let m=e[i.index],h=i.type;if(d&&t===0&&(m&&_n(Ve(m),e),i.flags|=2),!vo(i))if(h&8)rc(n,t,i.child,e,r,a,!1),Cn(t,n,u,r,m,i,a,e);else if(h&32){let x=Ql(i,e),E;for(;E=x();)Cn(t,n,u,r,E,i,a,e);Cn(t,n,u,r,m,i,a,e)}else h&16?nm(n,t,e,i,r,a):Cn(t,n,u,r,m,i,a,e);i=d?i.projectionNext:i.next}}function yo(n,t,i,e,r,a){rc(i,e,n.firstChild,t,r,a,!1)}function _v(n,t,i){let e=t[pe],r=Kf(n,i,t),a=i.parent||t[Ee],d=em(a,i,t);nm(e,0,t,i,r,d)}function nm(n,t,i,e,r,a){let d=i[De],m=d[Ee].projection[e.projection];if(Array.isArray(m))for(let h=0;h<m.length;h++){let x=m[h];Cn(t,n,i[Et],r,x,e,a,i)}else{let h=m,x=d[ge];vf(e)&&(h.flags|=128),rc(n,t,h,x,r,a,!0)}}function Dv(n,t,i,e,r,a,d){let u=e[Ct],m=Ve(e);u!==m&&Cn(t,n,i,a,u,r,d);for(let h=Se;h<e.length;h++){let x=e[h];yo(x[ee],x,n,t,a,u)}}function Sv(n,t,i,e,r){if(t)r?n.addClass(i,e):n.removeClass(i,e);else{let a=e.indexOf("-")===-1?void 0:at.DashCase;r==null?n.removeStyle(i,e,a):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),a|=at.Important),n.setStyle(i,e,r,a))}}function im(n,t,i,e,r){let a=Wt(),d=e&2;try{_t(-1),d&&t.length>be&&zf(n,t,be,!1),de(d?2:0,r,i),i(e,r)}finally{_t(a),de(d?3:1,r,i)}}function oc(n,t,i){Fv(n,t,i),(i.flags&64)===64&&Nv(n,t,i)}function ac(n,t,i=it){let e=t.localNames;if(e!==null){let r=t.index+1;for(let a=0;a<e.length;a+=2){let d=e[a+1],u=d===-1?i(t,n):n[d];n[r++]=u}}}function Tv(n,t,i,e){let a=e.get(Cf,Ef)||i===pt.ShadowDom,d=n.selectRootElement(t,a);return kv(d),d}function kv(n){Mv(n)}var Mv=()=>null;function Av(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function rm(n,t,i,e,r,a){let d=t[ee];if(sc(n,d,t,i,e)){wt(n)&&Lv(t,n.index);return}n.type&3&&(i=Av(i)),Ov(n,t,i,e,r,a)}function Ov(n,t,i,e,r,a){if(n.type&3){let d=it(n,t);e=a!=null?a(e,n.value||"",i):e,r.setProperty(d,i,e)}else n.type&12}function Lv(n,t){let i=qe(t,n);i[J]&16||(i[J]|=64)}function Fv(n,t,i){let e=i.directiveStart,r=i.directiveEnd;wt(i)&&av(t,i,n.data[e+i.componentOffset]),n.firstCreatePass||eo(i,t);let a=i.initialInputs;for(let d=e;d<r;d++){let u=n.data[d],m=to(t,n,d,i);if(_n(m,t),a!==null&&Pv(t,d-e,m,u,i,a),nt(u)){let h=qe(i.index,t);h[_e]=to(t,n,d,i)}}}function Nv(n,t,i){let e=i.directiveStart,r=i.directiveEnd,a=i.index,d=pp();try{_t(a);for(let u=e;u<r;u++){let m=n.data[u],h=t[u];Pr(u),(m.hostBindings!==null||m.hostVars!==0||m.hostAttrs!==null)&&Rv(m,h)}}finally{_t(-1),Pr(d)}}function Rv(n,t){n.hostBindings!==null&&n.hostBindings(1,t)}function om(n,t){let i=n.directiveRegistry,e=null;if(i)for(let r=0;r<i.length;r++){let a=i[r];Hf(t,a.selectors,!1)&&(e??=[],nt(a)?e.unshift(a):e.push(a))}return e}function Pv(n,t,i,e,r,a){let d=a[t];if(d!==null)for(let u=0;u<d.length;u+=2){let m=d[u],h=d[u+1];Dl(e,i,m,h)}}function Vv(n,t,i,e,r){let a=be+i,d=t[ee],u=r(d,t,n,e,i);t[a]=u,En(n,!0);let m=n.type===2;return m?(Vf(t[pe],u,n),(np()===0||Kn(n))&&_n(u,t),ip()):_n(u,t),Hr()&&(!m||!vo(n))&&ic(d,t,u,n),n}function qv(n){let t=n;return Gs()?Ws():(t=t.parent,En(t,!1)),t}function Hv(n,t){let i=n[Et];if(!i)return;let e;try{e=i.get(rt,null)}catch{e=null}e?.(t)}function sc(n,t,i,e,r){let a=n.inputs?.[e],d=n.hostDirectiveInputs?.[e],u=!1;if(d)for(let m=0;m<d.length;m+=2){let h=d[m],x=d[m+1],E=t.data[h];Dl(E,i[h],x,r),u=!0}if(a)for(let m of a){let h=i[m],x=t.data[m];Dl(x,h,e,r),u=!0}return u}function jv(n,t){let i=qe(t,n),e=i[ee];Bv(e,i);let r=i[ze];r!==null&&i[hn]===null&&(i[hn]=wf(r,i[Et])),de(18),lc(e,i,i[_e]),de(19,i[_e])}function Bv(n,t){for(let i=t.length;i<n.blueprint.length;i++)t.push(n.blueprint[i])}function lc(n,t,i){Vr(t);try{let e=n.viewQuery;e!==null&&El(1,e,i);let r=n.template;r!==null&&im(n,t,r,1,i),n.firstCreatePass&&(n.firstCreatePass=!1),t[$t]?.finishViewCreation(n),n.staticContentQueries&&_f(n,t),n.staticViewQueries&&El(2,n.viewQuery,i);let a=n.components;a!==null&&zv(t,a)}catch(e){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),e}finally{t[J]&=-5,qr()}}function zv(n,t){for(let i=0;i<t.length;i++)jv(n,t[i])}function am(n,t,i,e){let r=Q(null);try{let a=t.tView,u=n[J]&4096?4096:16,m=Xl(n,a,i,u,null,t,null,null,e?.injector??null,e?.embeddedViewInjector??null,e?.dehydratedView??null),h=n[t.index];m[zt]=h;let x=n[$t];return x!==null&&(m[$t]=x.createEmbeddedView(a)),lc(a,m,i),m}finally{Q(r)}}function Ml(n,t){return!t||t.firstChild===null||vf(n)}function si(n,t,i,e,r=!1){for(;i!==null;){if(i.type===128){i=r?i.projectionNext:i.next;continue}let a=t[i.index];a!==null&&e.push(Ve(a)),Ue(a)&&sm(a,e);let d=i.type;if(d&8)si(n,t,i.child,e);else if(d&32){let u=Ql(i,t),m;for(;m=u();)e.push(m)}else if(d&16){let u=tm(t,i);if(Array.isArray(u))e.push(...u);else{let m=bt(t[De]);si(m[ee],m,u,e,!0)}}i=r?i.projectionNext:i.next}return e}function sm(n,t){for(let i=Se;i<n.length;i++){let e=n[i],r=e[ee].firstChild;r!==null&&si(e[ee],e,r,t)}n[Ct]!==n[ze]&&t.push(n[Ct])}function lm(n){if(n[Or]!==null){for(let t of n[Or])t.impl.addSequence(t);n[Or].length=0}}var cm=[];function Uv(n){return n[Le]??$v(n)}function $v(n){let t=cm.pop()??Object.create(Wv);return t.lView=n,t}function Gv(n){n.lView[Le]!==n&&(n.lView=null,cm.push(n))}var Wv=ce(re({},an),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{ti(n.lView)},consumerOnSignalRead(){this.lView[Le]=this}});function Zv(n){let t=n[Le]??Object.create(Jv);return t.lView=n,t}var Jv=ce(re({},an),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{let t=bt(n.lView);for(;t&&!dm(t[ee]);)t=bt(t);t&&js(t)},consumerOnSignalRead(){this.lView[Le]=this}});function dm(n){return n.type!==2}function um(n){if(n[Jn]===null)return;let t=!0;for(;t;){let i=!1;for(let e of n[Jn])e.dirty&&(i=!0,e.zone===null||Zone.current===e.zone?e.run():e.zone.run(()=>e.run()));t=i&&!!(n[J]&8192)}}var Xv=100;function pm(n,t=0){let e=n[et].rendererFactory,r=!1;r||e.begin?.();try{Yv(n,t)}finally{r||e.end?.()}}function Yv(n,t){let i=Zs();try{Js(!0),Al(n,t);let e=0;for(;ei(n);){if(e===Xv)throw new W(103,!1);e++,Al(n,1)}}finally{Js(i)}}function Qv(n,t,i,e){if(Gt(t))return;let r=t[J],a=!1,d=!1;Vr(t);let u=!0,m=null,h=null;a||(dm(n)?(h=Uv(t),m=qn(h)):Ui()===null?(u=!1,h=Zv(t),m=qn(h)):t[Le]&&(Ji(t[Le]),t[Le]=null));try{Hs(t),lp(n.bindingStartIndex),i!==null&&im(n,t,i,2,e);let x=(r&3)===3;if(!a)if(x){let y=n.preOrderCheckHooks;y!==null&&Zr(t,y,null)}else{let y=n.preOrderHooks;y!==null&&Jr(t,y,0,null),sl(t,0)}if(d||Kv(t),um(t),fm(t,0),n.contentQueries!==null&&_f(n,t),!a)if(x){let y=n.contentCheckHooks;y!==null&&Zr(t,y)}else{let y=n.contentHooks;y!==null&&Jr(t,y,1),sl(t,1)}t0(n,t);let E=n.components;E!==null&&gm(t,E,0);let D=n.viewQuery;if(D!==null&&El(2,D,e),!a)if(x){let y=n.viewCheckHooks;y!==null&&Zr(t,y)}else{let y=n.viewHooks;y!==null&&Jr(t,y,2),sl(t,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),t[Ar]){for(let y of t[Ar])y();t[Ar]=null}a||(lm(t),t[J]&=-73)}catch(x){throw a||ti(t),x}finally{h!==null&&(Wi(h,m),u&&Gv(h)),qr()}}function fm(n,t){for(let i=bf(n);i!==null;i=yf(i))for(let e=Se;e<i.length;e++){let r=i[e];mm(r,t)}}function Kv(n){for(let t=bf(n);t!==null;t=yf(t)){if(!(t[J]&2))continue;let i=t[Qn];for(let e=0;e<i.length;e++){let r=i[e];js(r)}}}function e0(n,t,i){de(18);let e=qe(t,n);mm(e,i),de(19,e[_e])}function mm(n,t){Fr(n)&&Al(n,t)}function Al(n,t){let e=n[ee],r=n[J],a=n[Le],d=!!(t===0&&r&16);if(d||=!!(r&64&&t===0),d||=!!(r&1024),d||=!!(a?.dirty&&Zi(a)),d||=!1,a&&(a.dirty=!1),n[J]&=-9217,d)Qv(e,n,e.template,n[_e]);else if(r&8192){let u=Q(null);try{um(n),fm(n,1);let m=e.components;m!==null&&gm(n,m,1),lm(n)}finally{Q(u)}}}function gm(n,t,i){for(let e=0;e<t.length;e++)e0(n,t[e],i)}function t0(n,t){let i=n.hostBindingOpCodes;if(i!==null)try{for(let e=0;e<i.length;e++){let r=i[e];if(r<0)_t(~r);else{let a=r,d=i[++e],u=i[++e];up(d,a);let m=t[a];de(24,m),u(2,m),de(25,m)}}}finally{_t(-1)}}function cc(n,t){let i=Zs()?64:1088;for(n[et].changeDetectionScheduler?.notify(t);n;){n[J]|=i;let e=bt(n);if(yn(n)&&!e)return n;n=e}return null}function hm(n,t,i,e){return[n,!0,0,t,null,e,null,i,null,null]}function vm(n,t,i,e=!0){let r=t[ee];if(n0(r,t,n,i),e){let d=kl(i,n),u=t[pe],m=u.parentNode(n[Ct]);m!==null&&vv(r,n[Ee],u,t,m,d)}let a=t[hn];a!==null&&a.firstChild!==null&&(a.firstChild=null)}function Ol(n,t){if(n.length<=Se)return;let i=Se+t,e=n[i];if(e){let r=e[zt];r!==null&&r!==n&&nc(r,e),t>0&&(n[i-1][Pe]=e[Pe]);let a=$n(n,Se+t);hv(e[ee],e);let d=a[$t];d!==null&&d.detachView(a[ee]),e[ge]=null,e[Pe]=null,e[J]&=-129}return e}function n0(n,t,i,e){let r=Se+e,a=i.length;e>0&&(i[r-1][Pe]=t),e<a-Se?(t[Pe]=i[r],Ts(i,Se+e,t)):(i.push(t),t[Pe]=null),t[ge]=i;let d=t[zt];d!==null&&i!==d&&xm(d,t);let u=t[$t];u!==null&&u.insertView(n),Nr(t),t[J]|=128}function xm(n,t){let i=n[Qn],e=t[ge];if(tt(e))n[J]|=2;else{let r=e[ge][De];t[De]!==r&&(n[J]|=2)}i===null?n[Qn]=[t]:i.push(t)}var Dt=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let t=this._lView,i=t[ee];return si(i,t,i.firstChild,[])}constructor(t,i){this._lView=t,this._cdRefInjectingView=i}get context(){return this._lView[_e]}set context(t){this._lView[_e]=t}get destroyed(){return Gt(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let t=this._lView[ge];if(Ue(t)){let i=t[Yn],e=i?i.indexOf(this):-1;e>-1&&(Ol(t,e),$n(i,e))}this._attachedToViewContainer=!1}Qf(this._lView[ee],this._lView)}onDestroy(t){Bs(this._lView,t)}markForCheck(){cc(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[J]&=-129}reattach(){Nr(this._lView),this._lView[J]|=128}detectChanges(){this._lView[J]|=1024,pm(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new W(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let t=yn(this._lView),i=this._lView[zt];i!==null&&!t&&nc(i,this._lView),Yf(this._lView[ee],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new W(902,!1);this._appRef=t;let i=yn(this._lView),e=this._lView[zt];e!==null&&!i&&xm(e,this._lView),Nr(this._lView)}};var Io=(()=>{class n{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=i0;constructor(i,e,r){this._declarationLView=i,this._declarationTContainer=e,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(i,e){return this.createEmbeddedViewImpl(i,e)}createEmbeddedViewImpl(i,e,r){let a=am(this._declarationLView,this._declarationTContainer,i,{embeddedViewInjector:e,dehydratedView:r});return new Dt(a)}}return n})();function i0(){return r0(Te(),le())}function r0(n,t){return n.type&4?new Io(t,n,fo(n,t)):null}function mi(n,t,i,e,r){let a=n.data[t];if(a===null)a=o0(n,t,i,e,r),dp()&&(a.flags|=32);else if(a.type&64){a.type=i,a.value=e,a.attrs=r;let d=sp();a.injectorIndex=d===null?-1:d.injectorIndex}return En(a,!0),a}function o0(n,t,i,e,r){let a=$s(),d=Gs(),u=d?a:a&&a.parent,m=n.data[t]=s0(n,u,i,t,e,r);return a0(n,m,a,d),m}function a0(n,t,i,e){n.firstChild===null&&(n.firstChild=t),i!==null&&(e?i.child==null&&t.parent!==null&&(i.child=t):i.next===null&&(i.next=t,t.prev=i))}function s0(n,t,i,e,r,a){let d=t?t.injectorIndex:-1,u=0;return Us()&&(u|=128),{type:i,index:e,insertBeforeIndex:null,injectorIndex:d,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:u,providerIndexes:0,value:r,attrs:a,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var bD=new RegExp(`^(\\d+)*(${v6}|${h6})*(.*)`);var l0=()=>null;function Ll(n,t){return l0(n,t)}var bm=class{},Eo=class{},Fl=class{resolveComponentFactory(t){throw new W(917,!1)}},gi=class{static NULL=new Fl},Qt=class{},hi=(()=>{class n{destroyNode=null;static __NG_ELEMENT_ID__=()=>c0()}return n})();function c0(){let n=le(),t=Te(),i=qe(t.index,n);return(tt(i)?i:n)[pe]}var ym=(()=>{class n{static \u0275prov=se({token:n,providedIn:"root",factory:()=>null})}return n})();var Xr={},Nl=class{injector;parentInjector;constructor(t,i){this.injector=t,this.parentInjector=i}get(t,i,e){let r=this.injector.get(t,Xr,e);return r!==Xr||i===Xr?r:this.parentInjector.get(t,i,e)}};function Bp(n,t,i){let e=i?n.styles:null,r=i?n.classes:null,a=0;if(t!==null)for(let d=0;d<t.length;d++){let u=t[d];if(typeof u=="number")a=u;else if(a==1)r=bs(r,u);else if(a==2){let m=u,h=t[++d];e=bs(e,m+": "+h+";")}}i?n.styles=e:n.stylesWithoutHost=e,i?n.classes=r:n.classesWithoutHost=r}function v(n,t=0){let i=le();if(i===null)return te(n,t);let e=Te();return mf(e,i,me(n),t)}function Im(n,t,i,e,r){let a=e===null?null:{"":-1},d=r(n,i);if(d!==null){let u=d,m=null,h=null;for(let x of d)if(x.resolveHostDirectives!==null){[u,m,h]=x.resolveHostDirectives(d);break}p0(n,t,i,u,a,m,h)}a!==null&&e!==null&&d0(i,e,a)}function d0(n,t,i){let e=n.localNames=[];for(let r=0;r<t.length;r+=2){let a=i[t[r+1]];if(a==null)throw new W(-301,!1);e.push(t[r],a)}}function u0(n,t,i){t.componentOffset=i,(n.components??=[]).push(t.index)}function p0(n,t,i,e,r,a,d){let u=e.length,m=!1;for(let D=0;D<u;D++){let y=e[D];!m&&nt(y)&&(m=!0,u0(n,i,D)),xl(eo(i,t),n,y.type)}x0(i,n.data.length,u);for(let D=0;D<u;D++){let y=e[D];y.providersResolver&&y.providersResolver(y)}let h=!1,x=!1,E=Bf(n,t,u,null);u>0&&(i.directiveToIndex=new Map);for(let D=0;D<u;D++){let y=e[D];if(i.mergedAttrs=oi(i.mergedAttrs,y.hostAttrs),m0(n,i,t,E,y),v0(E,y,r),d!==null&&d.has(y)){let[C,w]=d.get(y);i.directiveToIndex.set(y.type,[E,C+i.directiveStart,w+i.directiveStart])}else(a===null||!a.has(y))&&i.directiveToIndex.set(y.type,E);y.contentQueries!==null&&(i.flags|=4),(y.hostBindings!==null||y.hostAttrs!==null||y.hostVars!==0)&&(i.flags|=64);let N=y.type.prototype;!h&&(N.ngOnChanges||N.ngOnInit||N.ngDoCheck)&&((n.preOrderHooks??=[]).push(i.index),h=!0),!x&&(N.ngOnChanges||N.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(i.index),x=!0),E++}f0(n,i,a)}function f0(n,t,i){for(let e=t.directiveStart;e<t.directiveEnd;e++){let r=n.data[e];if(i===null||!i.has(r))zp(0,t,r,e),zp(1,t,r,e),$p(t,e,!1);else{let a=i.get(r);Up(0,t,a,e),Up(1,t,a,e),$p(t,e,!0)}}}function zp(n,t,i,e){let r=n===0?i.inputs:i.outputs;for(let a in r)if(r.hasOwnProperty(a)){let d;n===0?d=t.inputs??={}:d=t.outputs??={},d[a]??=[],d[a].push(e),Em(t,a)}}function Up(n,t,i,e){let r=n===0?i.inputs:i.outputs;for(let a in r)if(r.hasOwnProperty(a)){let d=r[a],u;n===0?u=t.hostDirectiveInputs??={}:u=t.hostDirectiveOutputs??={},u[d]??=[],u[d].push(e,a),Em(t,d)}}function Em(n,t){t==="class"?n.flags|=8:t==="style"&&(n.flags|=16)}function $p(n,t,i){let{attrs:e,inputs:r,hostDirectiveInputs:a}=n;if(e===null||!i&&r===null||i&&a===null||Zl(n)){n.initialInputs??=[],n.initialInputs.push(null);return}let d=null,u=0;for(;u<e.length;){let m=e[u];if(m===0){u+=4;continue}else if(m===5){u+=2;continue}else if(typeof m=="number")break;if(!i&&r.hasOwnProperty(m)){let h=r[m];for(let x of h)if(x===t){d??=[],d.push(m,e[u+1]);break}}else if(i&&a.hasOwnProperty(m)){let h=a[m];for(let x=0;x<h.length;x+=2)if(h[x]===t){d??=[],d.push(h[x+1],e[u+1]);break}}u+=2}n.initialInputs??=[],n.initialInputs.push(d)}function m0(n,t,i,e,r){n.data[e]=r;let a=r.factory||(r.factory=Pt(r.type,!0)),d=new Yt(a,nt(r),v,null);n.blueprint[e]=d,i[e]=d,g0(n,t,e,Bf(n,i,r.hostVars,St),r)}function g0(n,t,i,e,r){let a=r.hostBindings;if(a){let d=n.hostBindingOpCodes;d===null&&(d=n.hostBindingOpCodes=[]);let u=~t.index;h0(d)!=u&&d.push(u),d.push(i,e,a)}}function h0(n){let t=n.length;for(;t>0;){let i=n[--t];if(typeof i=="number"&&i<0)return i}return 0}function v0(n,t,i){if(i){if(t.exportAs)for(let e=0;e<t.exportAs.length;e++)i[t.exportAs[e]]=n;nt(t)&&(i[""]=n)}}function x0(n,t,i){n.flags|=1,n.directiveStart=t,n.directiveEnd=t+i,n.providerIndexes=t}function Cm(n,t,i,e,r,a,d,u){let m=t[ee],h=m.consts,x=In(h,d),E=mi(m,n,i,e,x);return a&&Im(m,t,E,In(h,u),r),E.mergedAttrs=oi(E.mergedAttrs,E.attrs),E.attrs!==null&&Bp(E,E.attrs,!1),E.mergedAttrs!==null&&Bp(E,E.mergedAttrs,!0),m.queries!==null&&m.queries.elementStart(m,E),E}function wm(n,t){af(n,t),Vs(t)&&n.queries.elementEnd(t)}function Co(n,t,i){if(i===St)return!1;let e=n[t];return Object.is(e,i)?!1:(n[t]=i,!0)}function dl(n,t,i){return function e(r){let a=wt(n)?qe(n.index,t):t;cc(a,5);let d=t[_e],u=Gp(t,d,i,r),m=e.__ngNextListenerFn__;for(;m;)u=Gp(t,d,m,r)&&u,m=m.__ngNextListenerFn__;return u}}function Gp(n,t,i,e){let r=Q(null);try{return de(6,t,i),i(e)!==!1}catch(a){return Hv(n,a),!1}finally{de(7,t,i),Q(r)}}function b0(n,t,i,e,r,a,d,u){let m=Kn(n),h=!1,x=null;if(!e&&m&&(x=I0(t,i,a,n.index)),x!==null){let E=x.__ngLastListenerFn__||x;E.__ngNextListenerFn__=d,x.__ngLastListenerFn__=d,h=!0}else{let E=it(n,i),D=e?e(E):E;b6(i,D,a,u);let y=r.listen(D,a,u);if(!y0(a)){let N=e?C=>e(Ve(C[n.index])):n.index;_m(N,t,i,a,u,y,!1)}}return h}function y0(n){return n.startsWith("animation")||n.startsWith("transition")}function I0(n,t,i,e){let r=n.cleanup;if(r!=null)for(let a=0;a<r.length-1;a+=2){let d=r[a];if(d===i&&r[a+1]===e){let u=t[vn],m=r[a+2];return u&&u.length>m?u[m]:null}typeof d=="string"&&(a+=2)}return null}function _m(n,t,i,e,r,a,d){let u=t.firstCreatePass?tp(t):null,m=ep(i),h=m.length;m.push(r,a),u&&u.push(e,n,h,(h+1)*(d?-1:1))}function Wp(n,t,i,e,r,a){let d=t[i],u=t[ee],h=u.data[i].outputs[e],E=d[h].subscribe(a);_m(n.index,u,t,r,a,E,!0)}var Rl=Symbol("BINDING");var oo=class extends gi{ngModule;constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){let i=Bt(t);return new li(i,this.ngModule)}};function E0(n){return Object.keys(n).map(t=>{let[i,e,r]=n[t],a={propName:i,templateName:t,isSignal:(e&bo.SignalBased)!==0};return r&&(a.transform=r),a})}function C0(n){return Object.keys(n).map(t=>({propName:n[t],templateName:t}))}function w0(n,t,i){let e=t instanceof Re?t:t?.injector;return e&&n.getStandaloneInjector!==null&&(e=n.getStandaloneInjector(e)||e),e?new Nl(i,e):i}function _0(n){let t=n.get(Qt,null);if(t===null)throw new W(407,!1);let i=n.get(ym,null),e=n.get(Ht,null);return{rendererFactory:t,sanitizer:i,changeDetectionScheduler:e,ngReflect:!1}}function D0(n,t){let i=Dm(n);return Rf(t,i,i==="svg"?Xu:i==="math"?Yu:null)}function Dm(n){return(n.selectors[0][0]||"div").toLowerCase()}var li=class extends Eo{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=E0(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=C0(this.componentDef.outputs),this.cachedOutputs}constructor(t,i){super(),this.componentDef=t,this.ngModule=i,this.componentType=t.type,this.selector=nv(t.selectors),this.ngContentSelectors=t.ngContentSelectors??[],this.isBoundToModule=!!i}create(t,i,e,r,a,d){de(22);let u=Q(null);try{let m=this.componentDef,h=S0(e,m,d,a),x=w0(m,r||this.ngModule,t),E=_0(x),D=E.rendererFactory.createRenderer(null,m),y=e?Tv(D,e,m.encapsulation,x):D0(m,D),N=d?.some(Zp)||a?.some(S=>typeof S!="function"&&S.bindings.some(Zp)),C=Xl(null,h,null,512|jf(m),null,null,E,D,x,null,wf(y,x,!0));C[be]=y,Vr(C);let w=null;try{let S=Cm(be,C,2,"#host",()=>h.directiveRegistry,!0,0);Vf(D,y,S),_n(y,C),oc(h,C,S),Df(h,S,C),wm(h,S),i!==void 0&&k0(S,this.ngContentSelectors,i),w=qe(S.index,C),C[_e]=w[_e],lc(h,C,null)}catch(S){throw w!==null&&yl(w),yl(C),S}finally{de(23),qr()}return new ao(this.componentType,C,!!N)}finally{Q(u)}}};function S0(n,t,i,e){let r=n?["ng-version","20.3.19"]:iv(t.selectors[0]),a=null,d=null,u=0;if(i)for(let x of i)u+=x[Rl].requiredVars,x.create&&(x.targetIdx=0,(a??=[]).push(x)),x.update&&(x.targetIdx=0,(d??=[]).push(x));if(e)for(let x=0;x<e.length;x++){let E=e[x];if(typeof E!="function")for(let D of E.bindings){u+=D[Rl].requiredVars;let y=x+1;D.create&&(D.targetIdx=y,(a??=[]).push(D)),D.update&&(D.targetIdx=y,(d??=[]).push(D))}}let m=[t];if(e)for(let x of e){let E=typeof x=="function"?x:x.type,D=As(E);m.push(D)}return Jl(0,null,T0(a,d),1,u,m,null,null,null,[r],null)}function T0(n,t){return!n&&!t?null:i=>{if(i&1&&n)for(let e of n)e.create();if(i&2&&t)for(let e of t)e.update()}}function Zp(n){let t=n[Rl].kind;return t==="input"||t==="twoWay"}var ao=class extends bm{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(t,i,e){super(),this._rootLView=i,this._hasInputBindings=e,this._tNode=Lr(i[ee],be),this.location=fo(this._tNode,i),this.instance=qe(this._tNode.index,i)[_e],this.hostView=this.changeDetectorRef=new Dt(i,void 0),this.componentType=t}setInput(t,i){this._hasInputBindings;let e=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(t)&&Object.is(this.previousInputValues.get(t),i))return;let r=this._rootLView,a=sc(e,r[ee],r,t,i);this.previousInputValues.set(t,i);let d=qe(e.index,r);cc(d,1)}get injector(){return new Xt(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}};function k0(n,t,i){let e=n.projection=[];for(let r=0;r<t.length;r++){let a=i[r];e.push(a!=null&&a.length?Array.from(a):null)}}var wo=(()=>{class n{static __NG_ELEMENT_ID__=M0}return n})();function M0(){let n=Te();return O0(n,le())}var A0=wo,Sm=class extends A0{_lContainer;_hostTNode;_hostLView;constructor(t,i,e){super(),this._lContainer=t,this._hostTNode=i,this._hostLView=e}get element(){return fo(this._hostTNode,this._hostLView)}get injector(){return new Xt(this._hostTNode,this._hostLView)}get parentInjector(){let t=jl(this._hostTNode,this._hostLView);if(lf(t)){let i=Kr(t,this._hostLView),e=Qr(t),r=i[ee].data[e+8];return new Xt(r,i)}else return new Xt(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){let i=Jp(this._lContainer);return i!==null&&i[t]||null}get length(){return this._lContainer.length-Se}createEmbeddedView(t,i,e){let r,a;typeof e=="number"?r=e:e!=null&&(r=e.index,a=e.injector);let d=Ll(this._lContainer,t.ssrId),u=t.createEmbeddedViewImpl(i||{},a,d);return this.insertImpl(u,r,Ml(this._hostTNode,d)),u}createComponent(t,i,e,r,a,d,u){let m=t&&!$1(t),h;if(m)h=i;else{let w=i||{};h=w.index,e=w.injector,r=w.projectableNodes,a=w.environmentInjector||w.ngModuleRef,d=w.directives,u=w.bindings}let x=m?t:new li(Bt(t)),E=e||this.parentInjector;if(!a&&x.ngModule==null){let S=(m?E:this.parentInjector).get(Re,null);S&&(a=S)}let D=Bt(x.componentType??{}),y=Ll(this._lContainer,D?.id??null),N=y?.firstChild??null,C=x.create(E,r,N,a,d,u);return this.insertImpl(C.hostView,h,Ml(this._hostTNode,y)),C}insert(t,i){return this.insertImpl(t,i,!0)}insertImpl(t,i,e){let r=t._lView;if(Qu(r)){let u=this.indexOf(t);if(u!==-1)this.detach(u);else{let m=r[ge],h=new Sm(m,m[Ee],m[ge]);h.detach(h.indexOf(t))}}let a=this._adjustIndex(i),d=this._lContainer;return vm(d,r,a,e),t.attachToViewContainerRef(),Ts(ul(d),a,t),t}move(t,i){return this.insert(t,i)}indexOf(t){let i=Jp(this._lContainer);return i!==null?i.indexOf(t):-1}remove(t){let i=this._adjustIndex(t,-1),e=Ol(this._lContainer,i);e&&($n(ul(this._lContainer),i),Qf(e[ee],e))}detach(t){let i=this._adjustIndex(t,-1),e=Ol(this._lContainer,i);return e&&$n(ul(this._lContainer),i)!=null?new Dt(e):null}_adjustIndex(t,i=0){return t??this.length+i}};function Jp(n){return n[Yn]}function ul(n){return n[Yn]||(n[Yn]=[])}function O0(n,t){let i,e=t[n.index];return Ue(e)?i=e:(i=hm(e,t,null,n),t[n.index]=i,Yl(t,i)),F0(i,t,n,e),new Sm(i,n,t)}function L0(n,t){let i=n[pe],e=i.createComment(""),r=it(t,n),a=i.parentNode(r);return io(i,a,e,i.nextSibling(r),!1),e}var F0=P0,N0=()=>!1;function R0(n,t,i){return N0(n,t,i)}function P0(n,t,i,e){if(n[Ct])return;let r;i.type&8?r=Ve(e):r=L0(t,i),n[Ct]=r}function Tm(n){let t=[],i=new Map;function e(r){let a=i.get(r);if(!a){let d=n(r);i.set(r,a=d.then(u=>q0(r,u)))}return a}return so.forEach((r,a)=>{let d=[];r.templateUrl&&d.push(e(r.templateUrl).then(h=>{r.template=h}));let u=typeof r.styles=="string"?[r.styles]:r.styles||[];if(r.styles=u,r.styleUrl&&r.styleUrls?.length)throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple");if(r.styleUrls?.length){let h=r.styles.length,x=r.styleUrls;r.styleUrls.forEach((E,D)=>{u.push(""),d.push(e(E).then(y=>{u[h+D]=y,x.splice(x.indexOf(E),1),x.length==0&&(r.styleUrls=void 0)}))})}else r.styleUrl&&d.push(e(r.styleUrl).then(h=>{u.push(h),r.styleUrl=void 0}));let m=Promise.all(d).then(()=>H0(a));t.push(m)}),km(),Promise.all(t).then(()=>{})}var so=new Map,V0=new Set;function km(){let n=so;return so=new Map,n}function Mm(){return so.size===0}function q0(n,t){return typeof t=="string"?t:t.status!==void 0&&t.status!==200?Promise.reject(new W(918,!1)):t.text()}function H0(n){V0.delete(n)}var Kt=class{},Am=class{};var ci=class extends Kt{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new oo(this);constructor(t,i,e,r=!0){super(),this.ngModuleType=t,this._parent=i;let a=Bu(t);this._bootstrapComponents=$6(a.bootstrap),this._r3Injector=el(t,i,[{provide:Kt,useValue:this},{provide:gi,useValue:this.componentFactoryResolver},...e],dt(t),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(i=>i()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}},lo=class extends Am{moduleType;constructor(t){super(),this.moduleType=t}create(t){return new ci(this.moduleType,t,[])}};function Om(n,t,i){return new ci(n,t,i,!1)}var co=class extends Kt{injector;componentFactoryResolver=new oo(this);instance=null;constructor(t){super();let i=new qt([...t.providers,{provide:Kt,useValue:this},{provide:gi,useValue:this.componentFactoryResolver}],t.parent||Wn(),t.debugName,new Set(["environment"]));this.injector=i,t.runEnvironmentInitializers&&i.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(t){this.injector.onDestroy(t)}};function Lm(n,t,i=null){return new co({providers:n,parent:t,debugName:i,runEnvironmentInitializers:!0}).injector}var j0=(()=>{class n{_injector;cachedInjectors=new Map;constructor(i){this._injector=i}getOrCreateStandaloneInjector(i){if(!i.standalone)return null;if(!this.cachedInjectors.has(i)){let e=Os(!1,i.type),r=e.length>0?Lm([e],this._injector,`Standalone[${i.type.name}]`):null;this.cachedInjectors.set(i,r)}return this.cachedInjectors.get(i)}ngOnDestroy(){try{for(let i of this.cachedInjectors.values())i!==null&&i.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=se({token:n,providedIn:"environment",factory:()=>new n(te(Re))})}return n})();function I(n){return ui(()=>{let t=Fm(n),i=ce(re({},t),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===zl.OnPush,directiveDefs:null,pipeDefs:null,dependencies:t.standalone&&n.dependencies||null,getStandaloneInjector:t.standalone?r=>r.get(j0).getOrCreateStandaloneInjector(i):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||pt.Emulated,styles:n.styles||Oe,_:null,schemas:n.schemas||null,tView:null,id:""});t.standalone&&Uf("NgStandalone"),Nm(i);let e=n.dependencies;return i.directiveDefs=Xp(e,B0),i.pipeDefs=Xp(e,zu),i.id=$0(i),i})}function B0(n){return Bt(n)||As(n)}function Ne(n){return ui(()=>({type:n.type,bootstrap:n.bootstrap||Oe,declarations:n.declarations||Oe,imports:n.imports||Oe,exports:n.exports||Oe,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function z0(n,t){if(n==null)return yt;let i={};for(let e in n)if(n.hasOwnProperty(e)){let r=n[e],a,d,u,m;Array.isArray(r)?(u=r[0],a=r[1],d=r[2]??a,m=r[3]||null):(a=r,d=r,u=bo.None,m=null),i[a]=[e,u,m],t[a]=d}return i}function U0(n){if(n==null)return yt;let t={};for(let i in n)n.hasOwnProperty(i)&&(t[n[i]]=i);return t}function Me(n){return ui(()=>{let t=Fm(n);return Nm(t),t})}function Fm(n){let t={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:t,inputConfig:n.inputs||yt,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||Oe,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,inputs:z0(n.inputs,t),outputs:U0(n.outputs),debugInfo:null}}function Nm(n){n.features?.forEach(t=>t(n))}function Xp(n,t){return n?()=>{let i=typeof n=="function"?n():n,e=[];for(let r of i){let a=t(r);a!==null&&e.push(a)}return e}:null}function $0(n){let t=0,i=typeof n.consts=="function"?"":n.consts,e=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,i,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let a of e.join("|"))t=Math.imul(31,t)+a.charCodeAt(0)<<0;return t+=2147483648,"c"+t}function G0(n){return Object.getPrototypeOf(n.prototype).constructor}function Ge(n){let t=G0(n.type),i=!0,e=[n];for(;t;){let r;if(nt(n))r=t.\u0275cmp||t.\u0275dir;else{if(t.\u0275cmp)throw new W(903,!1);r=t.\u0275dir}if(r){if(i){e.push(r);let d=n;d.inputs=pl(n.inputs),d.declaredInputs=pl(n.declaredInputs),d.outputs=pl(n.outputs);let u=r.hostBindings;u&&Y0(n,u);let m=r.viewQuery,h=r.contentQueries;if(m&&J0(n,m),h&&X0(n,h),W0(n,r),Fu(n.outputs,r.outputs),nt(r)&&r.data.animation){let x=n.data;x.animation=(x.animation||[]).concat(r.data.animation)}}let a=r.features;if(a)for(let d=0;d<a.length;d++){let u=a[d];u&&u.ngInherit&&u(n),u===Ge&&(i=!1)}}t=Object.getPrototypeOf(t)}Z0(e)}function W0(n,t){for(let i in t.inputs){if(!t.inputs.hasOwnProperty(i)||n.inputs.hasOwnProperty(i))continue;let e=t.inputs[i];e!==void 0&&(n.inputs[i]=e,n.declaredInputs[i]=t.declaredInputs[i])}}function Z0(n){let t=0,i=null;for(let e=n.length-1;e>=0;e--){let r=n[e];r.hostVars=t+=r.hostVars,r.hostAttrs=oi(r.hostAttrs,i=oi(i,r.hostAttrs))}}function pl(n){return n===yt?{}:n===Oe?[]:n}function J0(n,t){let i=n.viewQuery;i?n.viewQuery=(e,r)=>{t(e,r),i(e,r)}:n.viewQuery=t}function X0(n,t){let i=n.contentQueries;i?n.contentQueries=(e,r,a)=>{t(e,r,a),i(e,r,a)}:n.contentQueries=t}function Y0(n,t){let i=n.hostBindings;i?n.hostBindings=(e,r)=>{t(e,r),i(e,r)}:n.hostBindings=t}function Rm(n,t,i,e,r,a,d,u){if(i.firstCreatePass){n.mergedAttrs=oi(n.mergedAttrs,n.attrs);let x=n.tView=Jl(2,n,r,a,d,i.directiveRegistry,i.pipeRegistry,null,i.schemas,i.consts,null);i.queries!==null&&(i.queries.template(i,n),x.queries=i.queries.embeddedTView(n))}u&&(n.flags|=u),En(n,!1);let m=ex(i,t,n,e);Hr()&&ic(i,t,m,n),_n(m,t);let h=hm(m,t,m,n);t[e+be]=h,Yl(t,h),R0(h,n,t)}function Q0(n,t,i,e,r,a,d,u,m,h,x){let E=i+be,D;return t.firstCreatePass?(D=mi(t,E,4,d||null,u||null),zs()&&Im(t,n,D,In(t.consts,h),om),af(t,D)):D=t.data[E],Rm(D,n,t,i,e,r,a,m),Kn(D)&&oc(t,n,D),h!=null&&ac(n,D,x),D}function K0(n,t,i,e,r,a,d,u,m,h,x){let E=i+be,D;if(t.firstCreatePass){if(D=mi(t,E,4,d||null,u||null),h!=null){let y=In(t.consts,h);D.localNames=[];for(let N=0;N<y.length;N+=2)D.localNames.push(y[N],-1)}}else D=t.data[E];return Rm(D,n,t,i,e,r,a,m),h!=null&&ac(n,D,x),D}function _o(n,t,i,e,r,a,d,u){let m=le(),h=Fe(),x=In(h.consts,a);return Q0(m,h,n,t,i,e,r,x,void 0,d,u),_o}var ex=tx;function tx(n,t,i,e){return jr(!0),t[pe].createComment("")}var Do=new Z(""),Tn=new Z(""),vi=(()=>{class n{_ngZone;registry;_isZoneStable=!0;_callbacks=[];_taskTrackingZone=null;_destroyRef;constructor(i,e,r){this._ngZone=i,this.registry=e,Ns()&&(this._destroyRef=K(Zt,{optional:!0})??void 0),dc||(Pm(r),r.addToWindow(e)),this._watchAngularEvents(),i.run(()=>{this._taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){let i=this._ngZone.onUnstable.subscribe({next:()=>{this._isZoneStable=!1}}),e=this._ngZone.runOutsideAngular(()=>this._ngZone.onStable.subscribe({next:()=>{T.assertNotInAngularZone(),queueMicrotask(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}}));this._destroyRef?.onDestroy(()=>{i.unsubscribe(),e.unsubscribe()})}isStable(){return this._isZoneStable&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())queueMicrotask(()=>{for(;this._callbacks.length!==0;){let i=this._callbacks.pop();clearTimeout(i.timeoutId),i.doneCb()}});else{let i=this.getPendingTasks();this._callbacks=this._callbacks.filter(e=>e.updateCb&&e.updateCb(i)?(clearTimeout(e.timeoutId),!1):!0)}}getPendingTasks(){return this._taskTrackingZone?this._taskTrackingZone.macroTasks.map(i=>({source:i.source,creationLocation:i.creationLocation,data:i.data})):[]}addCallback(i,e,r){let a=-1;e&&e>0&&(a=setTimeout(()=>{this._callbacks=this._callbacks.filter(d=>d.timeoutId!==a),i()},e)),this._callbacks.push({doneCb:i,timeoutId:a,updateCb:r})}whenStable(i,e,r){if(r&&!this._taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(i,e,r),this._runCallbacksIfReady()}registerApplication(i){this.registry.registerApplication(i,this)}unregisterApplication(i){this.registry.unregisterApplication(i)}findProviders(i,e,r){return[]}static \u0275fac=function(e){return new(e||n)(te(T),te(xi),te(Tn))};static \u0275prov=se({token:n,factory:n.\u0275fac})}return n})(),xi=(()=>{class n{_applications=new Map;registerApplication(i,e){this._applications.set(i,e)}unregisterApplication(i){this._applications.delete(i)}unregisterAllApplications(){this._applications.clear()}getTestability(i){return this._applications.get(i)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(i,e=!0){return dc?.findTestabilityInTree(this,i,e)??null}static \u0275fac=function(e){return new(e||n)};static \u0275prov=se({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})();function Pm(n){dc=n}var dc;function kn(n){return!!n&&typeof n.then=="function"}function uc(n){return!!n&&typeof n.subscribe=="function"}var So=new Z("");var pc=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((i,e)=>{this.resolve=i,this.reject=e});appInits=K(So,{optional:!0})??[];injector=K(Qe);constructor(){}runInitializers(){if(this.initialized)return;let i=[];for(let r of this.appInits){let a=Mr(this.injector,r);if(kn(a))i.push(a);else if(uc(a)){let d=new Promise((u,m)=>{a.subscribe({complete:u,error:m})});i.push(d)}}let e=()=>{this.done=!0,this.resolve()};Promise.all(i).then(()=>{e()}).catch(r=>{this.reject(r)}),i.length===0&&e(),this.initialized=!0}static \u0275fac=function(e){return new(e||n)};static \u0275prov=se({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Vm=new Z("");function qm(){Xa(()=>{let n="";throw new W(600,n)})}function Hm(n){return n.isBoundToModule}var nx=10;function fc(n,t){return Array.isArray(t)?t.reduce(fc,n):re(re({},n),t)}var Tt=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=K(rt);afterRenderManager=K(Jf);zonelessEnabled=K(Br);rootEffectScheduler=K(al);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new lt;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=K(Jt);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(Ft(i=>!i))}constructor(){K(fi,{optional:!0})}whenStable(){let i;return new Promise(e=>{i=this.isStable.subscribe({next:r=>{r&&e()}})}).finally(()=>{i.unsubscribe()})}_injector=K(Re);_rendererFactory=null;get injector(){return this._injector}bootstrap(i,e){return this.bootstrapImpl(i,e)}bootstrapImpl(i,e,r=Qe.NULL){return this._injector.get(T).run(()=>{de(10);let d=i instanceof Eo;if(!this._injector.get(pc).done){let N="";throw new W(405,N)}let m;d?m=i:m=this._injector.get(gi).resolveComponentFactory(i),this.componentTypes.push(m.componentType);let h=Hm(m)?void 0:this._injector.get(Kt),x=e||m.selector,E=m.create(r,[],x,h),D=E.location.nativeElement,y=E.injector.get(Do,null);return y?.registerApplication(D),E.onDestroy(()=>{this.detachView(E.hostView),ri(this.components,E),y?.unregisterApplication(D)}),this._loadComponent(E),de(11,E),E})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){de(12),this.tracingSnapshot!==null?this.tracingSnapshot.run(Kl.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw new W(101,!1);let i=Q(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,Q(i),this.afterTick.next(),de(13)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Qt,null,{optional:!0}));let i=0;for(;this.dirtyFlags!==0&&i++<nx;)de(14),this.synchronizeOnce(),de(15)}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let i=!1;if(this.dirtyFlags&7){let e=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!e&&!ei(r))continue;let a=e&&!this.zonelessEnabled?0:1;pm(r,a),i=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}i||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:i})=>ei(i))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(i){let e=i;this._views.push(e),e.attachToAppRef(this)}detachView(i){let e=i;ri(this._views,e),e.detachFromAppRef()}_loadComponent(i){this.attachView(i.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(i),this._injector.get(Vm,[]).forEach(r=>r(i))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(i=>i()),this._views.slice().forEach(i=>i.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(i){return this._destroyListeners.push(i),()=>ri(this._destroyListeners,i)}destroy(){if(this._destroyed)throw new W(406,!1);let i=this._injector;i.destroy&&!i.destroyed&&i.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(e){return new(e||n)};static \u0275prov=se({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function ri(n,t){let i=n.indexOf(t);i>-1&&n.splice(i,1)}var DD=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";function p(n,t,i){let e=le(),r=Rr();if(Co(e,r,t)){let a=Fe(),d=Ks();rm(d,e,n,t,e[pe],i)}return p}function Yp(n,t,i,e,r){sc(t,n,i,r?"class":"style",e)}function l(n,t,i,e){let r=le(),a=r[ee],d=n+be,u=a.firstCreatePass?Cm(d,r,2,t,om,zs(),i,e):a.data[d];if(Vv(u,r,n,t,ix),Kn(u)){let m=r[ee];oc(m,r,u),Df(m,u,r)}return e!=null&&ac(r,u),l}function o(){let n=Fe(),t=Te(),i=qv(t);return n.firstCreatePass&&wm(n,i),op(i)&&ap(),rp(),i.classesWithoutHost!=null&&Y1(i)&&Yp(n,i,le(),i.classesWithoutHost,!0),i.stylesWithoutHost!=null&&Q1(i)&&Yp(n,i,le(),i.stylesWithoutHost,!1),o}function b(n,t,i,e){return l(n,t,i,e),o(),b}var ix=(n,t,i,e,r)=>(jr(!0),Rf(t[pe],e,vp()));var bi="en-US";var rx=bi;function jm(n){typeof n=="string"&&(rx=n.toLowerCase().replace(/_/g,"-"))}function f(n,t,i){let e=le(),r=Fe(),a=Te();return Bm(r,e,e[pe],a,n,t,i),f}function Bm(n,t,i,e,r,a,d){let u=!0,m=null;if((e.type&3||d)&&(m??=dl(e,t,a),b0(e,n,t,d,i,r,a,m)&&(u=!1)),u){let h=e.outputs?.[r],x=e.hostDirectiveOutputs?.[r];if(x&&x.length)for(let E=0;E<x.length;E+=2){let D=x[E],y=x[E+1];m??=dl(e,t,a),Wp(e,t,D,y,r,m)}if(h&&h.length)for(let E of h)m??=dl(e,t,a),Wp(e,t,E,r,r,m)}}function ox(n,t){let i=null,e=Y6(n);for(let r=0;r<t.length;r++){let a=t[r];if(a==="*"){i=r;continue}if(e===null?Hf(n,a,!0):ev(e,a))return r}return i}function V(n){let t=le()[De][Ee];if(!t.projection){let i=n?n.length:1,e=t.projection=qu(i,null),r=e.slice(),a=t.child;for(;a!==null;){if(a.type!==128){let d=n?ox(a,n):0;d!==null&&(r[d]?r[d].projectionNext=a:e[d]=a,r[d]=a)}a=a.next}}}function q(n,t=0,i,e,r,a){let d=le(),u=Fe(),m=e?n+1:null;m!==null&&K0(d,u,m,e,r,a,null,i);let h=mi(u,be+n,16,null,i||null);h.projection===null&&(h.projection=t),Ws();let E=!d[hn]||Us();d[De][Ee].projection[h.projection]===null&&m!==null?ax(d,u,m):E&&!vo(h)&&_v(u,d,h)}function ax(n,t,i){let e=be+i,r=t.data[e],a=n[e],d=Ll(a,r.tView.ssrId),u=am(n,r,void 0,{dehydratedView:d});vm(a,u,0,Ml(r,d))}function Gr(n,t){return n<<17|t<<2}function en(n){return n>>17&32767}function sx(n){return(n&2)==2}function lx(n,t){return n&131071|t<<17}function Pl(n){return n|2}function Sn(n){return(n&131068)>>2}function fl(n,t){return n&-131069|t<<2}function cx(n){return(n&1)===1}function Vl(n){return n|1}function dx(n,t,i,e,r,a){let d=a?t.classBindings:t.styleBindings,u=en(d),m=Sn(d);n[e]=i;let h=!1,x;if(Array.isArray(i)){let E=i;x=E[1],(x===null||gn(E,x)>0)&&(h=!0)}else x=i;if(r)if(m!==0){let D=en(n[u+1]);n[e+1]=Gr(D,u),D!==0&&(n[D+1]=fl(n[D+1],e)),n[u+1]=lx(n[u+1],e)}else n[e+1]=Gr(u,0),u!==0&&(n[u+1]=fl(n[u+1],e)),u=e;else n[e+1]=Gr(m,0),u===0?u=e:n[m+1]=fl(n[m+1],e),m=e;h&&(n[e+1]=Pl(n[e+1])),Qp(n,x,e,!0),Qp(n,x,e,!1),ux(t,x,n,e,a),d=Gr(u,m),a?t.classBindings=d:t.styleBindings=d}function ux(n,t,i,e,r){let a=r?n.residualClasses:n.residualStyles;a!=null&&typeof t=="string"&&gn(a,t)>=0&&(i[e+1]=Vl(i[e+1]))}function Qp(n,t,i,e){let r=n[i+1],a=t===null,d=e?en(r):Sn(r),u=!1;for(;d!==0&&(u===!1||a);){let m=n[d],h=n[d+1];px(m,t)&&(u=!0,n[d+1]=e?Vl(h):Pl(h)),d=e?en(h):Sn(h)}u&&(n[i+1]=e?Pl(r):Vl(r))}function px(n,t){return n===null||t==null||(Array.isArray(n)?n[1]:n)===t?!0:Array.isArray(n)&&typeof t=="string"?gn(n,t)>=0:!1}function To(n,t){return fx(n,t,null,!0),To}function fx(n,t,i,e){let r=le(),a=Fe(),d=cp(2);if(a.firstUpdatePass&&gx(a,n,d,e),t!==St&&Co(r,d,t)){let u=a.data[Wt()];yx(a,u,r,r[pe],n,r[d+1]=Ix(t,i),e,d)}}function mx(n,t){return t>=n.expandoStartIndex}function gx(n,t,i,e){let r=n.data;if(r[i+1]===null){let a=r[Wt()],d=mx(n,i);Ex(a,e)&&t===null&&!d&&(t=!1),t=hx(r,a,t,e),dx(r,a,t,i,d,e)}}function hx(n,t,i,e){let r=fp(n),a=e?t.residualClasses:t.residualStyles;if(r===null)(e?t.classBindings:t.styleBindings)===0&&(i=ml(null,n,t,i,e),i=di(i,t.attrs,e),a=null);else{let d=t.directiveStylingLast;if(d===-1||n[d]!==r)if(i=ml(r,n,t,i,e),a===null){let m=vx(n,t,e);m!==void 0&&Array.isArray(m)&&(m=ml(null,n,t,m[1],e),m=di(m,t.attrs,e),xx(n,t,e,m))}else a=bx(n,t,e)}return a!==void 0&&(e?t.residualClasses=a:t.residualStyles=a),i}function vx(n,t,i){let e=i?t.classBindings:t.styleBindings;if(Sn(e)!==0)return n[en(e)]}function xx(n,t,i,e){let r=i?t.classBindings:t.styleBindings;n[en(r)]=e}function bx(n,t,i){let e,r=t.directiveEnd;for(let a=1+t.directiveStylingLast;a<r;a++){let d=n[a].hostAttrs;e=di(e,d,i)}return di(e,t.attrs,i)}function ml(n,t,i,e,r){let a=null,d=i.directiveEnd,u=i.directiveStylingLast;for(u===-1?u=i.directiveStart:u++;u<d&&(a=t[u],e=di(e,a.hostAttrs,r),a!==n);)u++;return n!==null&&(i.directiveStylingLast=u),e}function di(n,t,i){let e=i?1:2,r=-1;if(t!==null)for(let a=0;a<t.length;a++){let d=t[a];typeof d=="number"?r=d:r===e&&(Array.isArray(n)||(n=n===void 0?[]:["",n]),ju(n,d,i?!0:t[++a]))}return n===void 0?null:n}function yx(n,t,i,e,r,a,d,u){if(!(t.type&3))return;let m=n.data,h=m[u+1],x=cx(h)?Kp(m,t,i,r,Sn(h),d):void 0;if(!uo(x)){uo(a)||sx(h)&&(a=Kp(m,null,i,r,u,d));let E=qs(Wt(),i);Sv(e,d,E,r,a)}}function Kp(n,t,i,e,r,a){let d=t===null,u;for(;r>0;){let m=n[r],h=Array.isArray(m),x=h?m[1]:m,E=x===null,D=i[r+1];D===St&&(D=E?Oe:void 0);let y=E?Tr(D,e):x===e?D:void 0;if(h&&!uo(y)&&(y=Tr(m,e)),uo(y)&&(u=y,d))return u;let N=n[r+1];r=d?en(N):Sn(N)}if(t!==null){let m=a?t.residualClasses:t.residualStyles;m!=null&&(u=Tr(m,e))}return u}function uo(n){return n!==void 0}function Ix(n,t){return n==null||n===""||(typeof t=="string"?n=n+t:typeof n=="object"&&(n=dt(Gl(n)))),n}function Ex(n,t){return(n.flags&(t?8:16))!==0}function s(n,t=""){let i=le(),e=Fe(),r=n+be,a=e.firstCreatePass?mi(e,r,1,t,null):e.data[r],d=Cx(e,i,a,t,n);i[r]=d,Hr()&&ic(e,i,d,a),En(a,!1)}var Cx=(n,t,i,e,r)=>(jr(!0),q6(t[pe],e));function wx(n,t,i,e=""){return Co(n,Rr(),i)?t+_r(i)+e:St}function g(n,t,i){let e=le(),r=wx(e,n,t,i);return r!==St&&_x(e,Wt(),r),g}function _x(n,t,i){let e=qs(t,n);H6(n[pe],e,i)}function We(n,t,i){il(t)&&(t=t());let e=le(),r=Rr();if(Co(e,r,t)){let a=Fe(),d=Ks();rm(d,e,n,t,e[pe],i)}return We}function st(n,t){let i=il(n);return i&&n.set(t),i}function Ze(n,t){let i=le(),e=Fe(),r=Te();return Bm(e,i,i[pe],r,n,t),Ze}function Dx(n,t,i){let e=Fe();if(e.firstCreatePass){let r=nt(n);ql(i,e.data,e.blueprint,r,!0),ql(t,e.data,e.blueprint,r,!1)}}function ql(n,t,i,e,r){if(n=me(n),Array.isArray(n))for(let a=0;a<n.length;a++)ql(n[a],t,i,e,r);else{let a=Fe(),d=le(),u=Te(),m=Vt(n)?n:me(n.provide),h=Fs(n),x=u.providerIndexes&1048575,E=u.directiveStart,D=u.providerIndexes>>20;if(Vt(n)||!n.multi){let y=new Yt(h,r,v,null),N=hl(m,t,r?x:x+D,E);N===-1?(xl(eo(u,d),a,m),gl(a,n,t.length),t.push(m),u.directiveStart++,u.directiveEnd++,r&&(u.providerIndexes+=1048576),i.push(y),d.push(y)):(i[N]=y,d[N]=y)}else{let y=hl(m,t,x+D,E),N=hl(m,t,x,x+D),C=y>=0&&i[y],w=N>=0&&i[N];if(r&&!w||!r&&!C){xl(eo(u,d),a,m);let S=kx(r?Tx:Sx,i.length,r,e,h,n);!r&&w&&(i[N].providerFactory=S),gl(a,n,t.length,0),t.push(m),u.directiveStart++,u.directiveEnd++,r&&(u.providerIndexes+=1048576),i.push(S),d.push(S)}else{let S=zm(i[r?N:y],h,!r&&e);gl(a,n,y>-1?y:N,S)}!r&&e&&w&&i[N].componentProviders++}}}function gl(n,t,i,e){let r=Vt(t),a=Zu(t);if(r||a){let m=(a?me(t.useClass):t).prototype.ngOnDestroy;if(m){let h=n.destroyHooks||(n.destroyHooks=[]);if(!r&&t.multi){let x=h.indexOf(i);x===-1?h.push(i,[e,m]):h[x+1].push(e,m)}else h.push(i,m)}}}function zm(n,t,i){return i&&n.componentProviders++,n.multi.push(t)-1}function hl(n,t,i,e){for(let r=i;r<e;r++)if(t[r]===n)return r;return-1}function Sx(n,t,i,e,r){return Hl(this.multi,[])}function Tx(n,t,i,e,r){let a=this.multi,d;if(this.providerFactory){let u=this.providerFactory.componentProviders,m=to(e,e[ee],this.providerFactory.index,r);d=m.slice(0,u),Hl(a,d);for(let h=u;h<m.length;h++)d.push(m[h])}else d=[],Hl(a,d);return d}function Hl(n,t){for(let i=0;i<n.length;i++){let e=n[i];t.push(e())}return t}function kx(n,t,i,e,r,a){let d=new Yt(n,i,v,null);return d.multi=[],d.index=t,d.componentProviders=0,zm(d,r,e&&!i),d}function kt(n,t=[]){return i=>{i.providersResolver=(e,r)=>Dx(e,r?r(n):n,t)}}var Wr=null;function Um(n){Wr!==null&&(n.defaultEncapsulation!==Wr.defaultEncapsulation||n.preserveWhitespaces!==Wr.preserveWhitespaces)||(Wr=n)}var $m=new Z("");var Mx=(()=>{class n{zone=K(T);changeDetectionScheduler=K(Ht);applicationRef=K(Tt);applicationErrorHandler=K(rt);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{try{this.applicationRef.dirtyFlags|=1,this.applicationRef._tick()}catch(i){this.applicationErrorHandler(i)}})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(e){return new(e||n)};static \u0275prov=se({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Gm({ngZoneFactory:n,ignoreChangesOutsideZone:t,scheduleInRootZone:i}){return n??=()=>new T(ce(re({},mc()),{scheduleInRootZone:i})),[{provide:T,useFactory:n},{provide:It,multi:!0,useFactory:()=>{let e=K(Mx,{optional:!0});return()=>e.initialize()}},{provide:It,multi:!0,useFactory:()=>{let e=K(Ax);return()=>{e.initialize()}}},t===!0?{provide:rl,useValue:!0}:[],{provide:ol,useValue:i??$f},{provide:rt,useFactory:()=>{let e=K(T),r=K(Re),a;return d=>{e.runOutsideAngular(()=>{r.destroyed&&!a?setTimeout(()=>{throw d}):(a??=r.get(Ke),a.handleError(d))})}}}]}function mc(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var Ax=(()=>{class n{subscription=new ye;initialized=!1;zone=K(T);pendingTasks=K(Jt);initialize(){if(this.initialized)return;this.initialized=!0;let i=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(i=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{T.assertNotInAngularZone(),queueMicrotask(()=>{i!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(i),i=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{T.assertInAngularZone(),i??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(e){return new(e||n)};static \u0275prov=se({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Wm=(()=>{class n{applicationErrorHandler=K(rt);appRef=K(Tt);taskService=K(Jt);ngZone=K(T);zonelessEnabled=K(Br);tracing=K(fi,{optional:!0});disableScheduling=K(rl,{optional:!0})??!1;zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new ye;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(ro):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(K(ol,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof ai||!this.zoneIsDefined)}notify(i){if(!this.zonelessEnabled&&i===5)return;let e=!1;switch(i){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2,e=!0;break}case 12:{this.appRef.dirtyFlags|=16,e=!0;break}case 13:{this.appRef.dirtyFlags|=2,e=!0;break}case 11:{e=!0;break}default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick(e))return;let r=this.useMicrotaskScheduler?Rp:Gf;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(i){return!(this.disableScheduling&&!i||this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(ro+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let i=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(e){this.taskService.remove(i),this.applicationErrorHandler(e)}finally{this.cleanup()}this.useMicrotaskScheduler=!0,Rp(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(i)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let i=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(i)}}static \u0275fac=function(e){return new(e||n)};static \u0275prov=se({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ox(){return typeof $localize<"u"&&$localize.locale||bi}var ko=new Z("",{providedIn:"root",factory:()=>K(ko,{optional:!0,skipSelf:!0})||Ox()});function mt(n){return Au(n)}function yi(n,t){return Qi(n,t?.equal)}var Zm=class{[Ce];constructor(t){this[Ce]=t}destroy(){this[Ce].destroy()}};var Gx=new Z("");Gx.__NG_ELEMENT_ID__=n=>{let t=Te();if(t===null)throw new W(204,!1);if(t.type&2)return t.value;if(n&8)return null;throw new W(204,!1)};function Wx(n,t,i){let e=new lo(i);return Promise.resolve(e)}function Jm(n){for(let t=n.length-1;t>=0;t--)if(n[t]!==void 0)return n[t]}var Mo=new Z(""),Zx=new Z("");function Ii(n){return!n.moduleRef}function Jx(n){let t=Ii(n)?n.r3Injector:n.moduleRef.injector,i=t.get(T);return i.run(()=>{Ii(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let e=t.get(rt),r;if(i.runOutsideAngular(()=>{r=i.onError.subscribe({next:e})}),Ii(n)){let a=()=>t.destroy(),d=n.platformInjector.get(Mo);d.add(a),t.onDestroy(()=>{r.unsubscribe(),d.delete(a)})}else{let a=()=>n.moduleRef.destroy(),d=n.platformInjector.get(Mo);d.add(a),n.moduleRef.onDestroy(()=>{ri(n.allPlatformModules,n.moduleRef),r.unsubscribe(),d.delete(a)})}return Yx(e,i,()=>{let a=t.get(Jt),d=a.add(),u=t.get(pc);return u.runInitializers(),u.donePromise.then(()=>{let m=t.get(ko,bi);if(jm(m||bi),!t.get(Zx,!0))return Ii(n)?t.get(Tt):(n.allPlatformModules.push(n.moduleRef),n.moduleRef);if(Ii(n)){let x=t.get(Tt);return n.rootComponent!==void 0&&x.bootstrap(n.rootComponent),x}else return Ym?.(n.moduleRef,n.allPlatformModules),n.moduleRef}).finally(()=>{a.remove(d)})})})}var Ym;function Xm(){Ym=Xx}function Xx(n,t){let i=n.injector.get(Tt);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(e=>i.bootstrap(e));else if(n.instance.ngDoBootstrap)n.instance.ngDoBootstrap(i);else throw new W(-403,!1);t.push(n)}function Yx(n,t,i){try{let e=i();return kn(e)?e.catch(r=>{throw t.runOutsideAngular(()=>n(r)),r}):e}catch(e){throw t.runOutsideAngular(()=>n(e)),e}}var Qm=(()=>{class n{_injector;_modules=[];_destroyListeners=[];_destroyed=!1;constructor(i){this._injector=i}bootstrapModuleFactory(i,e){let r=e?.scheduleInRootZone,a=()=>Zf(e?.ngZone,ce(re({},mc({eventCoalescing:e?.ngZoneEventCoalescing,runCoalescing:e?.ngZoneRunCoalescing})),{scheduleInRootZone:r})),d=e?.ignoreChangesOutsideZone,u=[Gm({ngZoneFactory:a,ignoreChangesOutsideZone:d}),{provide:Ht,useExisting:Wm},bp],m=Om(i.moduleType,this.injector,u);return Xm(),Jx({moduleRef:m,allPlatformModules:this._modules,platformInjector:this.injector})}bootstrapModule(i,e=[]){let r=fc({},e);return Xm(),Wx(this.injector,r,i).then(a=>this.bootstrapModuleFactory(a,r))}onDestroy(i){this._destroyListeners.push(i)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new W(404,!1);this._modules.slice().forEach(e=>e.destroy()),this._destroyListeners.forEach(e=>e());let i=this._injector.get(Mo,null);i&&(i.forEach(e=>e()),i.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}static \u0275fac=function(e){return new(e||n)(te(Qe))};static \u0275prov=se({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})(),gc=null;function Qx(n){if(vc())throw new W(400,!1);qm(),gc=n;let t=n.get(Qm);return tb(n),t}function hc(n,t,i=[]){let e=`Platform: ${t}`,r=new Z(e);return(a=[])=>{let d=vc();if(!d){let u=[...i,...a,{provide:r,useValue:!0}];d=n?.(u)??Qx(Kx(u,e))}return eb(r)}}function Kx(n=[],t){return Qe.create({name:t,providers:[{provide:Gn,useValue:"platform"},{provide:Mo,useValue:new Set([()=>gc=null])},...n]})}function eb(n){let t=vc();if(!t)throw new W(-401,!1);return t}function vc(){return gc?.get(Qm)??null}function tb(n){let t=n.get(go,null);Mr(n,()=>{t?.forEach(i=>i())})}var P=(()=>{class n{static __NG_ELEMENT_ID__=nb}return n})();function nb(n){return ib(Te(),le(),(n&16)===16)}function ib(n,t,i){if(wt(n)&&!i){let e=qe(n.index,t);return new Dt(e,e)}else if(n.type&175){let e=t[De];return new Dt(e,t)}return null}var Km=hc(null,"core",[]),eg=(()=>{class n{constructor(i){}static \u0275fac=function(e){return new(e||n)(te(Tt))};static \u0275mod=Ne({type:n});static \u0275inj=we({})}return n})();function tg(n){return typeof n=="boolean"?n:n!=null&&n!=="false"}var ng=null;function gt(){return ng}function xc(n){ng??=n}var Ei=class{};var bc=(()=>{class n{_viewContainer;_context=new Ao;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(i,e){this._viewContainer=i,this._thenTemplateRef=e}set ngIf(i){this._context.$implicit=this._context.ngIf=i,this._updateView()}set ngIfThen(i){ig(i,!1),this._thenTemplateRef=i,this._thenViewRef=null,this._updateView()}set ngIfElse(i){ig(i,!1),this._elseTemplateRef=i,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(i,e){return!0}static \u0275fac=function(e){return new(e||n)(v(wo),v(Io))};static \u0275dir=Me({type:n,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return n})(),Ao=class{$implicit=null;ngIf=null};function ig(n,t){if(n&&!n.createEmbeddedView)throw new W(2020,!1)}var Ci=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=Ne({type:n});static \u0275inj=we({})}return n})();function yc(n,t){t=encodeURIComponent(t);for(let i of n.split(";")){let e=i.indexOf("="),[r,a]=e==-1?[i,""]:[i.slice(0,e),i.slice(e+1)];if(r.trim()===t)return decodeURIComponent(a)}return null}var wi=class{};var Ic="browser";function Ec(n){return n===Ic}var _i=class{_doc;constructor(t){this._doc=t}manager},Oo=(()=>{class n extends _i{constructor(i){super(i)}supports(i){return!0}addEventListener(i,e,r,a){return i.addEventListener(e,r,a),()=>this.removeEventListener(i,e,r,a)}removeEventListener(i,e,r,a){return i.removeEventListener(e,r,a)}static \u0275fac=function(e){return new(e||n)(te(ke))};static \u0275prov=se({token:n,factory:n.\u0275fac})}return n})(),Fo=new Z(""),Sc=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(i,e){this._zone=e,i.forEach(d=>{d.manager=this});let r=i.filter(d=>!(d instanceof Oo));this._plugins=r.slice().reverse();let a=i.find(d=>d instanceof Oo);a&&this._plugins.push(a)}addEventListener(i,e,r,a){return this._findPluginFor(e).addEventListener(i,e,r,a)}getZone(){return this._zone}_findPluginFor(i){let e=this._eventNameToPlugin.get(i);if(e)return e;if(e=this._plugins.find(a=>a.supports(i)),!e)throw new W(5101,!1);return this._eventNameToPlugin.set(i,e),e}static \u0275fac=function(e){return new(e||n)(te(Fo),te(T))};static \u0275prov=se({token:n,factory:n.\u0275fac})}return n})(),Cc="ng-app-id";function rg(n){for(let t of n)t.remove()}function og(n,t){let i=t.createElement("style");return i.textContent=n,i}function ab(n,t,i,e){let r=n.head?.querySelectorAll(`style[${Cc}="${t}"],link[${Cc}="${t}"]`);if(r)for(let a of r)a.removeAttribute(Cc),a instanceof HTMLLinkElement?e.set(a.href.slice(a.href.lastIndexOf("/")+1),{usage:0,elements:[a]}):a.textContent&&i.set(a.textContent,{usage:0,elements:[a]})}function _c(n,t){let i=t.createElement("link");return i.setAttribute("rel","stylesheet"),i.setAttribute("href",n),i}var Tc=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(i,e,r,a={}){this.doc=i,this.appId=e,this.nonce=r,ab(i,e,this.inline,this.external),this.hosts.add(i.head)}addStyles(i,e){for(let r of i)this.addUsage(r,this.inline,og);e?.forEach(r=>this.addUsage(r,this.external,_c))}removeStyles(i,e){for(let r of i)this.removeUsage(r,this.inline);e?.forEach(r=>this.removeUsage(r,this.external))}addUsage(i,e,r){let a=e.get(i);a?a.usage++:e.set(i,{usage:1,elements:[...this.hosts].map(d=>this.addElement(d,r(i,this.doc)))})}removeUsage(i,e){let r=e.get(i);r&&(r.usage--,r.usage<=0&&(rg(r.elements),e.delete(i)))}ngOnDestroy(){for(let[,{elements:i}]of[...this.inline,...this.external])rg(i);this.hosts.clear()}addHost(i){this.hosts.add(i);for(let[e,{elements:r}]of this.inline)r.push(this.addElement(i,og(e,this.doc)));for(let[e,{elements:r}]of this.external)r.push(this.addElement(i,_c(e,this.doc)))}removeHost(i){this.hosts.delete(i)}addElement(i,e){return this.nonce&&e.setAttribute("nonce",this.nonce),i.appendChild(e)}static \u0275fac=function(e){return new(e||n)(te(ke),te(mo),te(ho,8),te(tn))};static \u0275prov=se({token:n,factory:n.\u0275fac})}return n})(),wc={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},kc=/%COMP%/g;var sg="%COMP%",sb=`_nghost-${sg}`,lb=`_ngcontent-${sg}`,cb=!0,db=new Z("",{providedIn:"root",factory:()=>cb});function ub(n){return lb.replace(kc,n)}function pb(n){return sb.replace(kc,n)}function lg(n,t){return t.map(i=>i.replace(kc,n))}var Mc=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(i,e,r,a,d,u,m=null,h=null){this.eventManager=i,this.sharedStylesHost=e,this.appId=r,this.removeStylesOnCompDestroy=a,this.doc=d,this.ngZone=u,this.nonce=m,this.tracingService=h,this.platformIsServer=!1,this.defaultRenderer=new Di(i,d,u,this.platformIsServer,this.tracingService)}createRenderer(i,e){if(!i||!e)return this.defaultRenderer;let r=this.getOrCreateRenderer(i,e);return r instanceof Lo?r.applyToHost(i):r instanceof Si&&r.applyStyles(),r}getOrCreateRenderer(i,e){let r=this.rendererByCompId,a=r.get(e.id);if(!a){let d=this.doc,u=this.ngZone,m=this.eventManager,h=this.sharedStylesHost,x=this.removeStylesOnCompDestroy,E=this.platformIsServer,D=this.tracingService;switch(e.encapsulation){case pt.Emulated:a=new Lo(m,h,e,this.appId,x,d,u,E,D);break;case pt.ShadowDom:return new Dc(m,h,i,e,d,u,this.nonce,E,D);default:a=new Si(m,h,e,x,d,u,E,D);break}r.set(e.id,a)}return a}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(i){this.rendererByCompId.delete(i)}static \u0275fac=function(e){return new(e||n)(te(Sc),te(Tc),te(mo),te(db),te(ke),te(T),te(ho),te(fi,8))};static \u0275prov=se({token:n,factory:n.\u0275fac})}return n})(),Di=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(t,i,e,r,a){this.eventManager=t,this.doc=i,this.ngZone=e,this.platformIsServer=r,this.tracingService=a}destroy(){}destroyNode=null;createElement(t,i){return i?this.doc.createElementNS(wc[i]||i,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,i){(ag(t)?t.content:t).appendChild(i)}insertBefore(t,i,e){t&&(ag(t)?t.content:t).insertBefore(i,e)}removeChild(t,i){i.remove()}selectRootElement(t,i){let e=typeof t=="string"?this.doc.querySelector(t):t;if(!e)throw new W(-5104,!1);return i||(e.textContent=""),e}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,i,e,r){if(r){i=r+":"+i;let a=wc[r];a?t.setAttributeNS(a,i,e):t.setAttribute(i,e)}else t.setAttribute(i,e)}removeAttribute(t,i,e){if(e){let r=wc[e];r?t.removeAttributeNS(r,i):t.removeAttribute(`${e}:${i}`)}else t.removeAttribute(i)}addClass(t,i){t.classList.add(i)}removeClass(t,i){t.classList.remove(i)}setStyle(t,i,e,r){r&(at.DashCase|at.Important)?t.style.setProperty(i,e,r&at.Important?"important":""):t.style[i]=e}removeStyle(t,i,e){e&at.DashCase?t.style.removeProperty(i):t.style[i]=""}setProperty(t,i,e){t!=null&&(t[i]=e)}setValue(t,i){t.nodeValue=i}listen(t,i,e,r){if(typeof t=="string"&&(t=gt().getGlobalEventTarget(this.doc,t),!t))throw new W(5102,!1);let a=this.decoratePreventDefault(e);return this.tracingService?.wrapEventListener&&(a=this.tracingService.wrapEventListener(t,i,a)),this.eventManager.addEventListener(t,i,a,r)}decoratePreventDefault(t){return i=>{if(i==="__ngUnwrap__")return t;t(i)===!1&&i.preventDefault()}}};function ag(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Dc=class extends Di{sharedStylesHost;hostEl;shadowRoot;constructor(t,i,e,r,a,d,u,m,h){super(t,a,d,m,h),this.sharedStylesHost=i,this.hostEl=e,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let x=r.styles;x=lg(r.id,x);for(let D of x){let y=document.createElement("style");u&&y.setAttribute("nonce",u),y.textContent=D,this.shadowRoot.appendChild(y)}let E=r.getExternalStyles?.();if(E)for(let D of E){let y=_c(D,a);u&&y.setAttribute("nonce",u),this.shadowRoot.appendChild(y)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,i){return super.appendChild(this.nodeOrShadowRoot(t),i)}insertBefore(t,i,e){return super.insertBefore(this.nodeOrShadowRoot(t),i,e)}removeChild(t,i){return super.removeChild(null,i)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Si=class extends Di{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(t,i,e,r,a,d,u,m,h){super(t,a,d,u,m),this.sharedStylesHost=i,this.removeStylesOnCompDestroy=r;let x=e.styles;this.styles=h?lg(h,x):x,this.styleUrls=e.getExternalStyles?.(h)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Dn.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Lo=class extends Si{contentAttr;hostAttr;constructor(t,i,e,r,a,d,u,m,h){let x=r+"-"+e.id;super(t,i,e,a,d,u,m,h,x),this.contentAttr=ub(x),this.hostAttr=pb(x)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,i){let e=super.createElement(t,i);return super.setAttribute(e,this.contentAttr,""),e}};var No=class n extends Ei{supportsDOMEvents=!0;static makeCurrent(){xc(new n)}onAndCancel(t,i,e,r){return t.addEventListener(i,e,r),()=>{t.removeEventListener(i,e,r)}}dispatchEvent(t,i){t.dispatchEvent(i)}remove(t){t.remove()}createElement(t,i){return i=i||this.getDefaultDocument(),i.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,i){return i==="window"?window:i==="document"?t:i==="body"?t.body:null}getBaseHref(t){let i=fb();return i==null?null:mb(i)}resetBaseElement(){Ti=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return yc(document.cookie,t)}},Ti=null;function fb(){return Ti=Ti||document.head.querySelector("base"),Ti?Ti.getAttribute("href"):null}function mb(n){return new URL(n,document.baseURI).pathname}var Ro=class{addToWindow(t){Ie.getAngularTestability=(e,r=!0)=>{let a=t.findTestabilityInTree(e,r);if(a==null)throw new W(5103,!1);return a},Ie.getAllAngularTestabilities=()=>t.getAllTestabilities(),Ie.getAllAngularRootElements=()=>t.getAllRootElements();let i=e=>{let r=Ie.getAllAngularTestabilities(),a=r.length,d=function(){a--,a==0&&e()};r.forEach(u=>{u.whenStable(d)})};Ie.frameworkStabilizers||(Ie.frameworkStabilizers=[]),Ie.frameworkStabilizers.push(i)}findTestabilityInTree(t,i,e){if(i==null)return null;let r=t.getTestability(i);return r??(e?gt().isShadowRoot(i)?this.findTestabilityInTree(t,i.host,!0):this.findTestabilityInTree(t,i.parentElement,!0):null)}},gb=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(e){return new(e||n)};static \u0275prov=se({token:n,factory:n.\u0275fac})}return n})(),cg=["alt","control","meta","shift"],hb={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},vb={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},dg=(()=>{class n extends _i{constructor(i){super(i)}supports(i){return n.parseEventName(i)!=null}addEventListener(i,e,r,a){let d=n.parseEventName(e),u=n.eventCallback(d.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>gt().onAndCancel(i,d.domEventName,u,a))}static parseEventName(i){let e=i.toLowerCase().split("."),r=e.shift();if(e.length===0||!(r==="keydown"||r==="keyup"))return null;let a=n._normalizeKey(e.pop()),d="",u=e.indexOf("code");if(u>-1&&(e.splice(u,1),d="code."),cg.forEach(h=>{let x=e.indexOf(h);x>-1&&(e.splice(x,1),d+=h+".")}),d+=a,e.length!=0||a.length===0)return null;let m={};return m.domEventName=r,m.fullKey=d,m}static matchEventFullKeyCode(i,e){let r=hb[i.key]||i.key,a="";return e.indexOf("code.")>-1&&(r=i.code,a="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),cg.forEach(d=>{if(d!==r){let u=vb[d];u(i)&&(a+=d+".")}}),a+=r,a===e)}static eventCallback(i,e,r){return a=>{n.matchEventFullKeyCode(a,i)&&r.runGuarded(()=>e(a))}}static _normalizeKey(i){return i==="esc"?"escape":i}static \u0275fac=function(e){return new(e||n)(te(ke))};static \u0275prov=se({token:n,factory:n.\u0275fac})}return n})();function xb(){No.makeCurrent()}function bb(){return new Ke}function yb(){return Ul(document),document}var Ib=[{provide:tn,useValue:Ic},{provide:go,useValue:xb,multi:!0},{provide:ke,useFactory:yb}],Ac=hc(Km,"browser",Ib);var Eb=[{provide:Tn,useClass:Ro},{provide:Do,useClass:vi,deps:[T,xi,Tn]},{provide:vi,useClass:vi,deps:[T,xi,Tn]}],Cb=[{provide:Gn,useValue:"root"},{provide:Ke,useFactory:bb},{provide:Fo,useClass:Oo,multi:!0,deps:[ke]},{provide:Fo,useClass:dg,multi:!0,deps:[ke]},Mc,Tc,Sc,{provide:Qt,useExisting:Mc},{provide:wi,useClass:gb},[]],Oc=(()=>{class n{constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275mod=Ne({type:n});static \u0275inj=we({providers:[...Cb,...Eb],imports:[Ci,eg]})}return n})();var xg=(()=>{class n{_renderer;_elementRef;onChange=i=>{};onTouched=()=>{};constructor(i,e){this._renderer=i,this._elementRef=e}setProperty(i,e){this._renderer.setProperty(this._elementRef.nativeElement,i,e)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}static \u0275fac=function(e){return new(e||n)(v(hi),v(F))};static \u0275dir=Me({type:n})}return n})(),wb=(()=>{class n extends xg{static \u0275fac=(()=>{let i;return function(r){return(i||(i=Bl(n)))(r||n)}})();static \u0275dir=Me({type:n,features:[Ge]})}return n})(),On=new Z("");var _b={provide:On,useExisting:Be(()=>bg),multi:!0};function Db(){let n=gt()?gt().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var Sb=new Z(""),bg=(()=>{class n extends xg{_compositionMode;_composing=!1;constructor(i,e,r){super(i,e),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Db())}writeValue(i){let e=i??"";this.setProperty("value",e)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}static \u0275fac=function(e){return new(e||n)(v(hi),v(F),v(Sb,8))};static \u0275dir=Me({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){e&1&&f("input",function(d){return r._handleInput(d.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(d){return r._compositionEnd(d.target.value)})},standalone:!1,features:[kt([_b]),Ge]})}return n})();var Tb=new Z(""),kb=new Z("");function yg(n){return n!=null}function Ig(n){return kn(n)?as(n):n}function Eg(n){let t={};return n.forEach(i=>{t=i!=null?re(re({},t),i):t}),Object.keys(t).length===0?null:t}function Cg(n,t){return t.map(i=>i(n))}function Mb(n){return!n.validate}function wg(n){return n.map(t=>Mb(t)?t:i=>t.validate(i))}function Ab(n){if(!n)return null;let t=n.filter(yg);return t.length==0?null:function(i){return Eg(Cg(i,t))}}function _g(n){return n!=null?Ab(wg(n)):null}function Ob(n){if(!n)return null;let t=n.filter(yg);return t.length==0?null:function(i){let e=Cg(i,t).map(Ig);return ss(e).pipe(Ft(Eg))}}function Dg(n){return n!=null?Ob(wg(n)):null}function ug(n,t){return n===null?[t]:Array.isArray(n)?[...n,t]:[n,t]}function Lb(n){return n._rawValidators}function Fb(n){return n._rawAsyncValidators}function Lc(n){return n?Array.isArray(n)?n:[n]:[]}function Vo(n,t){return Array.isArray(n)?n.includes(t):n===t}function pg(n,t){let i=Lc(t);return Lc(n).forEach(r=>{Vo(i,r)||i.push(r)}),i}function fg(n,t){return Lc(t).filter(i=>!Vo(n,i))}var qo=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=_g(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=Dg(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,i){return this.control?this.control.hasError(t,i):!1}getError(t,i){return this.control?this.control.getError(t,i):null}},Fc=class extends qo{name;get formDirective(){return null}get path(){return null}},Li=class extends qo{_parent=null;name=null;valueAccessor=null},Nc=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Nb={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},PN=ce(re({},Nb),{"[class.ng-submitted]":"isSubmitted"}),jo=(()=>{class n extends Nc{constructor(i){super(i)}static \u0275fac=function(e){return new(e||n)(v(Li,2))};static \u0275dir=Me({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){e&2&&To("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[Ge]})}return n})();var ki="VALID",Po="INVALID",Mn="PENDING",Mi="DISABLED",nn=class{},Ho=class extends nn{value;source;constructor(t,i){super(),this.value=t,this.source=i}},Ai=class extends nn{pristine;source;constructor(t,i){super(),this.pristine=t,this.source=i}},Oi=class extends nn{touched;source;constructor(t,i){super(),this.touched=t,this.source=i}},An=class extends nn{status;source;constructor(t,i){super(),this.status=t,this.source=i}};var Rc=class extends nn{source;constructor(t){super(),this.source=t}};function Rb(n){return(Bo(n)?n.validators:n)||null}function Pb(n){return Array.isArray(n)?_g(n):n||null}function Vb(n,t){return(Bo(t)?t.asyncValidators:n)||null}function qb(n){return Array.isArray(n)?Dg(n):n||null}function Bo(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}var Pc=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,i){this._assignValidators(t),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return mt(this.statusReactive)}set status(t){mt(()=>this.statusReactive.set(t))}_status=yi(()=>this.statusReactive());statusReactive=ut(void 0);get valid(){return this.status===ki}get invalid(){return this.status===Po}get pending(){return this.status==Mn}get disabled(){return this.status===Mi}get enabled(){return this.status!==Mi}errors;get pristine(){return mt(this.pristineReactive)}set pristine(t){mt(()=>this.pristineReactive.set(t))}_pristine=yi(()=>this.pristineReactive());pristineReactive=ut(!0);get dirty(){return!this.pristine}get touched(){return mt(this.touchedReactive)}set touched(t){mt(()=>this.touchedReactive.set(t))}_touched=yi(()=>this.touchedReactive());touchedReactive=ut(!1);get untouched(){return!this.touched}_events=new lt;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(pg(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(pg(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(fg(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(fg(t,this._rawAsyncValidators))}hasValidator(t){return Vo(this._rawValidators,t)}hasAsyncValidator(t){return Vo(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let i=this.touched===!1;this.touched=!0;let e=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsTouched(ce(re({},t),{sourceControl:e})),i&&t.emitEvent!==!1&&this._events.next(new Oi(!0,e))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(i=>i.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(i=>i.markAllAsTouched(t))}markAsUntouched(t={}){let i=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let e=t.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:e})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,e),i&&t.emitEvent!==!1&&this._events.next(new Oi(!1,e))}markAsDirty(t={}){let i=this.pristine===!0;this.pristine=!1;let e=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsDirty(ce(re({},t),{sourceControl:e})),i&&t.emitEvent!==!1&&this._events.next(new Ai(!1,e))}markAsPristine(t={}){let i=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let e=t.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t,e),i&&t.emitEvent!==!1&&this._events.next(new Ai(!0,e))}markAsPending(t={}){this.status=Mn;let i=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new An(this.status,i)),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.markAsPending(ce(re({},t),{sourceControl:i}))}disable(t={}){let i=this._parentMarkedDirty(t.onlySelf);this.status=Mi,this.errors=null,this._forEachChild(r=>{r.disable(ce(re({},t),{onlySelf:!0}))}),this._updateValue();let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Ho(this.value,e)),this._events.next(new An(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ce(re({},t),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){let i=this._parentMarkedDirty(t.onlySelf);this.status=ki,this._forEachChild(e=>{e.enable(ce(re({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(ce(re({},t),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(e=>e(!1))}_updateAncestors(t,i){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine({},i),this._parent._updateTouched({},i))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let e=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ki||this.status===Mn)&&this._runAsyncValidator(e,t.emitEvent)}let i=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Ho(this.value,i)),this._events.next(new An(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(ce(re({},t),{sourceControl:i}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Mi:ki}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,i){if(this.asyncValidator){this.status=Mn,this._hasOwnPendingAsyncValidator={emitEvent:i!==!1,shouldHaveEmitted:t!==!1};let e=Ig(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:i,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,i={}){this.errors=t,this._updateControlsErrors(i.emitEvent!==!1,this,i.shouldHaveEmitted)}get(t){let i=t;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((e,r)=>e&&e._find(r),this)}getError(t,i){let e=i?this.get(i):this;return e&&e.errors?e.errors[t]:null}hasError(t,i){return!!this.getError(t,i)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,i,e){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||e)&&this._events.next(new An(this.status,i)),this._parent&&this._parent._updateControlsErrors(t,i,e)}_initObservables(){this.valueChanges=new R,this.statusChanges=new R}_calculateStatus(){return this._allControlsDisabled()?Mi:this.errors?Po:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Mn)?Mn:this._anyControlsHaveStatus(Po)?Po:ki}_anyControlsHaveStatus(t){return this._anyControls(i=>i.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,i){let e=!this._anyControlsDirty(),r=this.pristine!==e;this.pristine=e,this._parent&&!t.onlySelf&&this._parent._updatePristine(t,i),r&&this._events.next(new Ai(this.pristine,i))}_updateTouched(t={},i){this.touched=this._anyControlsTouched(),this._events.next(new Oi(this.touched,i)),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,i)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){Bo(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){let i=this._parent&&this._parent.dirty;return!t&&!!i&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=Pb(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=qb(this._rawAsyncValidators)}};var Sg=new Z("",{providedIn:"root",factory:()=>Vc}),Vc="always";function Hb(n,t){return[...t.path,n]}function jb(n,t,i=Vc){zb(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||i==="always")&&t.valueAccessor.setDisabledState?.(n.disabled),Ub(n,t),Gb(n,t),$b(n,t),Bb(n,t)}function mg(n,t){n.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(t)})}function Bb(n,t){if(t.valueAccessor.setDisabledState){let i=e=>{t.valueAccessor.setDisabledState(e)};n.registerOnDisabledChange(i),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(i)})}}function zb(n,t){let i=Lb(n);t.validator!==null?n.setValidators(ug(i,t.validator)):typeof i=="function"&&n.setValidators([i]);let e=Fb(n);t.asyncValidator!==null?n.setAsyncValidators(ug(e,t.asyncValidator)):typeof e=="function"&&n.setAsyncValidators([e]);let r=()=>n.updateValueAndValidity();mg(t._rawValidators,r),mg(t._rawAsyncValidators,r)}function Ub(n,t){t.valueAccessor.registerOnChange(i=>{n._pendingValue=i,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&Tg(n,t)})}function $b(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&Tg(n,t),n.updateOn!=="submit"&&n.markAsTouched()})}function Tg(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Gb(n,t){let i=(e,r)=>{t.valueAccessor.writeValue(e),r&&t.viewToModelUpdate(e)};n.registerOnChange(i),t._registerOnDestroy(()=>{n._unregisterOnChange(i)})}function Wb(n,t){if(!n.hasOwnProperty("model"))return!1;let i=n.model;return i.isFirstChange()?!0:!Object.is(t,i.currentValue)}function Zb(n){return Object.getPrototypeOf(n.constructor)===wb}function Jb(n,t){if(!t)return null;Array.isArray(t);let i,e,r;return t.forEach(a=>{a.constructor===bg?i=a:Zb(a)?e=a:r=a}),r||e||i||null}function gg(n,t){let i=n.indexOf(t);i>-1&&n.splice(i,1)}function hg(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var Xb=class extends Pc{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,i,e){super(Rb(i),Vb(e,i)),this._applyFormState(t),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Bo(i)&&(i.nonNullable||i.initialValueIsDefault)&&(hg(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,i={}){this.value=this._pendingValue=t,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(e=>e(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(t,i={}){this.setValue(t,i)}reset(t=this.defaultValue,i={}){this._applyFormState(t),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1,i?.emitEvent!==!1&&this._events.next(new Rc(this))}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){gg(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){gg(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){hg(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var Yb={provide:Li,useExisting:Be(()=>Fi)},vg=Promise.resolve(),Fi=(()=>{class n extends Li{_changeDetectorRef;callSetDisabledState;control=new Xb;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new R;constructor(i,e,r,a,d,u){super(),this._changeDetectorRef=d,this.callSetDisabledState=u,this._parent=i,this._setValidators(e),this._setAsyncValidators(r),this.valueAccessor=Jb(this,a)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let e=i.name.previousValue;this.formDirective.removeControl({name:e,path:this._getPath(e)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),Wb(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){jb(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){vg.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let e=i.isDisabled.currentValue,r=e!==0&&tg(e);vg.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?Hb(i,this._parent):[i]}static \u0275fac=function(e){return new(e||n)(v(Fc,9),v(Tb,10),v(kb,10),v(On,10),v(P,8),v(Sg,8))};static \u0275dir=Me({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[kt([Yb]),Ge,po]})}return n})();var Qb=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=Ne({type:n});static \u0275inj=we({})}return n})();var kg=(()=>{class n{static withConfig(i){return{ngModule:n,providers:[{provide:Sg,useValue:i.callSetDisabledState??Vc}]}}static \u0275fac=function(e){return new(e||n)};static \u0275mod=Ne({type:n});static \u0275inj=we({imports:[Qb]})}return n})();var Ag=(n,t)=>Pn(null,null,function*(){if(!(typeof window>"u"))return yield Xd(),Yd(JSON.parse('[["ifx-table",[[769,"ifx-table",{"cols":[8],"rows":[8],"buttonRendererOptions":[16],"iconButtonRendererOptions":[16],"checkboxRendererOptions":[16],"rowHeight":[1,"row-height"],"tableHeight":[1,"table-height"],"pagination":[4],"paginationItemsPerPage":[1,"pagination-items-per-page"],"filterOrientation":[1,"filter-orientation"],"headline":[1],"headlineNumber":[2,"headline-number"],"variant":[1],"serverSidePagination":[4,"server-side-pagination"],"serverPageChangeHandler":[16],"enableSelection":[4,"enable-selection"],"showLoading":[4,"show-loading"],"fitColumns":[4,"fit-columns"],"columnMinWidth":[2,"column-min-width"],"columnWidth":[1,"column-width"],"currentPage":[32],"rowData":[32],"colData":[32],"filterOptions":[32],"currentFilters":[32],"uniqueKey":[32],"showAllItems":[32],"paginationPageSize":[32],"showSidebarFilters":[32],"matchingResultsCount":[32],"selectedRows":[32],"selectAll":[32],"selectedRowsData":[32],"onBtShowLoading":[64]},[[0,"ifxItemsPerPageChange","handleResultsPerPageChange"],[0,"ifxChange","handleChipChange"]],{"rows":[{"rowsChanged":0}],"fitColumns":[{"onSizingOptionsChanged":0}],"columnMinWidth":[{"onSizingOptionsChanged":0}],"cols":[{"colsChanged":0}],"buttonRendererOptions":[{"onButtonRendererOptionsChanged":0}],"iconButtonRendererOptions":[{"onIconButtonRendererOptionsChanged":0}],"checkboxRendererOptions":[{"onCheckboxRendererOptionsChanged":0}]}]]],["ifx-templates-ui",[[1,"ifx-templates-ui",null,[[0,"fieldError","handleError"],[0,"toggleTemplates","filterTemplates"]]]]],["ifx-set-filter",[[513,"ifx-set-filter",{"filterName":[1,"filter-name"],"filterLabel":[1,"filter-label"],"placeholder":[1],"type":[1],"options":[1],"filterValues":[32]}]]],["ifx-file-upload",[[513,"ifx-file-upload",{"dragAndDrop":[4,"drag-and-drop"],"required":[4],"disabled":[4],"maxFileSizeMB":[2,"max-file-size-m-b"],"allowedFileTypes":[1,"allowed-file-types"],"additionalAllowedFileTypes":[1,"additional-allowed-file-types"],"allowAnyFileType":[4,"allow-any-file-type"],"allowedFileExtensions":[1,"allowed-file-extensions"],"uploadHandler":[16],"maxFiles":[6146,"max-files"],"label":[1],"labelRequiredError":[1,"label-required-error"],"labelBrowseFiles":[1,"label-browse-files"],"labelDragAndDrop":[1,"label-drag-and-drop"],"labelUploadedFilesHeading":[1,"label-uploaded-files-heading"],"labelFileTooLarge":[1,"label-file-too-large"],"labelUnsupportedFileType":[1,"label-unsupported-file-type"],"labelUploaded":[1,"label-uploaded"],"labelUploadFailed":[1,"label-upload-failed"],"labelSupportedFormatsTemplate":[1,"label-supported-formats-template"],"labelFileSingular":[1,"label-file-singular"],"labelFilePlural":[1,"label-file-plural"],"labelMaxFilesInfo":[1,"label-max-files-info"],"labelMaxFilesExceeded":[1,"label-max-files-exceeded"],"ariaLabelBrowseFiles":[1,"aria-label-browse-files"],"ariaLabelDropzone":[1,"aria-label-dropzone"],"ariaLabelFileInput":[1,"aria-label-file-input"],"ariaLabelRemoveFile":[1,"aria-label-remove-file"],"ariaLabelCancelUpload":[1,"aria-label-cancel-upload"],"ariaLabelRetryUpload":[1,"aria-label-retry-upload"],"ariaLabelUploadingStatus":[1,"aria-label-uploading-status"],"ariaLabelUploadedStatus":[1,"aria-label-uploaded-status"],"ariaLabelUploadFailedStatus":[1,"aria-label-upload-failed-status"],"isDragOver":[32],"files":[32],"uploadTasks":[32],"rejectedSizeFiles":[32],"rejectedTypeFiles":[32],"requiredError":[32],"statusMessage":[32],"injectDemoState":[64],"triggerDemoValidation":[64]}]]],["ifx-icons-preview",[[513,"ifx-icons-preview",{"iconsArray":[32],"isCopied":[32],"copiedIndex":[32],"copiedIcon":[32],"htmlTag":[32],"iconName":[32],"searchTerm":[32]}]]],["ifx-tabs",[[769,"ifx-tabs",{"orientation":[1],"activeTabIndex":[2,"active-tab-index"],"fullWidth":[4,"full-width"],"label":[1],"number":[2],"subline":[1],"positionSticky":[4,"position-sticky"],"internalOrientation":[32],"internalActiveTabIndex":[32],"tabObjects":[32],"canScrollLeft":[32],"canScrollRight":[32],"atTop":[32]},[[9,"resize","updateBorderOnWindowResize"],[0,"tabHeaderChange","handleTabHeaderChange"],[9,"scroll","handleScroll"],[0,"slotchange","onSlotChange"],[0,"keydown","handleKeyDown"]],{"activeTabIndex":[{"activeTabIndexChanged":0}]}]]],["ifx-list-entry",[[513,"ifx-list-entry",{"value":[1028],"label":[1],"type":[1]},[[0,"ifxChange","handleFilterEntryChange"]],{"value":[{"valueChanged":0}]}]]],["ifx-overview-table",[[1,"ifx-overview-table"]]],["ifx-dropdown-trigger-button",[[769,"ifx-dropdown-trigger-button",{"isOpen":[4,"is-open"],"theme":[1],"variant":[1],"size":[1],"disabled":[4],"hideArrow":[4,"hide-arrow"]}]]],["ifx-filter-accordion",[[769,"ifx-filter-accordion",{"maxVisibleItems":[2,"max-visible-items"],"filterGroupName":[1,"filter-group-name"],"expanded":[32],"count":[32],"totalItems":[32]}]]],["ifx-filter-bar",[[769,"ifx-filter-bar",{"maxShownFilters":[2,"max-shown-filters"],"selectedOptions":[32],"showAllFilters":[32],"visibleSlots":[32],"showMoreFilters":[64]}]]],["ifx-filter-search",[[513,"ifx-filter-search",{"filterName":[1,"filter-name"],"disabled":[4],"filterValue":[1025,"filter-value"],"filterKey":[1,"filter-key"],"filterOrientation":[1,"filter-orientation"],"placeholder":[1],"showDeleteIcon":[32]},[[0,"ifxInput","handleFilterSearchChange"]],{"value":[{"valueChanged":0}]}]]],["ifx-list",[[769,"ifx-list",{"name":[1],"maxVisibleItems":[2,"max-visible-items"],"type":[1],"resetTrigger":[1028,"reset-trigger"],"expanded":[32],"showMore":[32],"selectedCount":[32],"totalItems":[32],"internalResetTrigger":[32]},null,{"type":[{"handleTypeChange":0}],"resetTrigger":[{"resetTriggerChanged":0}]}]]],["ifx-modal",[[769,"ifx-modal",{"opened":[1540],"caption":[1],"captionAriaLabel":[1,"caption-aria-label"],"closeOnOverlayClick":[4,"close-on-overlay-click"],"variant":[1],"size":[1],"alertIcon":[1,"alert-icon"],"showCloseButton":[4,"show-close-button"],"closeButtonAriaLabel":[1,"close-button-aria-label"],"showModal":[32],"slotButtonsPresent":[32],"openModal":[64],"closeModal":[64]},null,{"opened":[{"openedChanged":0}]}]]],["ifx-navbar-item",[[769,"ifx-navbar-item",{"showLabel":[4,"show-label"],"icon":[1],"href":[1],"target":[1],"hideOnMobile":[4,"hide-on-mobile"],"numberIndicator":[2,"number-indicator"],"dotIndicator":[4,"dot-indicator"],"internalHref":[32],"isMenuItem":[32],"hasChildNavItems":[32],"isSidebarMenuItem":[32],"itemPosition":[32],"hideComponent":[64],"showComponent":[64],"toggleChildren":[64],"moveChildComponentsIntoSubLayerMenu":[64],"toggleFirstLayerItem":[64],"addMenuItemClass":[64],"moveChildComponentsBackIntoNavbar":[64],"returnToFirstLayer":[64],"setMenuItemPosition":[64],"setItemSideSpecifications":[64]},[[5,"mousedown","handleOutsideClick"]]]]],["ifx-search-bar",[[513,"ifx-search-bar",{"isOpen":[4,"is-open"],"disabled":[4],"value":[1025],"maxlength":[2],"autocomplete":[1],"showCloseButton":[4,"show-close-button"],"internalState":[32],"open":[64],"close":[64]},null,{"isOpen":[{"handlePropChange":0}]}]]],["ifx-sidebar-item",[[769,"ifx-sidebar-item",{"icon":[1],"href":[1],"target":[1],"numberIndicator":[2,"number-indicator"],"active":[4],"isActionItem":[4,"is-action-item"],"handleItemClick":[16],"internalHref":[32],"isExpandable":[32],"isNested":[32],"isSubMenuItem":[32],"showIcon":[32],"showIconWrapper":[32],"indicatorVariant":[32],"internalActiveState":[32],"setActiveClasses":[64],"expandMenu":[64],"isItemExpandable":[64]},[[0,"consoleError","handleConsoleError"]],{"active":[{"handleActiveChange":0}],"numberIndicator":[{"handleNumberIndicatorChange":0}]}]]],["ifx-tree-view-item",[[769,"ifx-tree-view-item",{"expanded":[1540],"initiallyExpanded":[4,"initially-expanded"],"disableItem":[4,"disable-item"],"ariaLabelText":[1,"aria-label-text"],"initiallySelected":[4,"initially-selected"],"value":[1],"hasChildren":[32],"isChecked":[32],"partialChecked":[32],"level":[32],"disableAllItems":[32],"expandAllItems":[32],"suppressExpandEvents":[32]},null,{"expanded":[{"handleExpandedChange":0}],"disableItem":[{"handleDisableItemChange":0}]}]]],["ifx-accordion-item",[[769,"ifx-accordion-item",{"caption":[1],"open":[1028],"ariaLevelNumber":[2,"aria-level-number"],"icon":[1],"internalOpen":[32]},[[0,"keydown","handleKeydown"]],{"open":[{"openChanged":0}]}]]],["ifx-ai-label",[[513,"ifx-ai-label",{"divider":[4],"variant":[1]}]]],["ifx-breadcrumb-item-label",[[769,"ifx-breadcrumb-item-label",{"icon":[1],"href":[1],"target":[1]}]]],["ifx-checkbox-group",[[769,"ifx-checkbox-group",{"alignment":[1],"size":[1],"showGroupLabel":[4,"show-group-label"],"groupLabelText":[1,"group-label-text"],"showCaption":[4,"show-caption"],"captionText":[1,"caption-text"],"showCaptionIcon":[4,"show-caption-icon"],"required":[4],"hasErrors":[32],"setGroupError":[64]},[[0,"ifxError","handleCheckboxError"]]]]],["ifx-date-picker",[[513,"ifx-date-picker",{"size":[1],"error":[4],"success":[4],"disabled":[4],"ariaLabelText":[1,"aria-label-text"],"value":[1],"type":[1],"max":[1],"min":[1],"required":[4],"label":[1],"caption":[1],"autocomplete":[1],"internalValue":[32],"clear":[64]},null,{"value":[{"handleValueChange":0}]}]]],["ifx-download",[[769,"ifx-download",{"tokens":[1]}]]],["ifx-dropdown-item",[[769,"ifx-dropdown-item",{"icon":[1],"href":[1],"target":[1],"hide":[4],"error":[4],"size":[32]},[[16,"menuSize","handleMenuSize"]]]]],["ifx-navbar",[[769,"ifx-navbar",{"applicationName":[1,"application-name"],"fixed":[4],"showLogoAndAppname":[4,"show-logo-and-appname"],"logoHref":[1,"logo-href"],"logoHrefTarget":[1,"logo-href-target"],"main":[32],"products":[32],"applications":[32],"design":[32],"support":[32],"about":[32],"hasLeftMenuItems":[32],"searchBarIsOpen":[32],"internalLogoHref":[32],"internalLogoHrefTarget":[32]},[[0,"ifxNavItem","clearFirstLayerMenu"],[0,"ifxOpen","handleSearchBarToggle"]]]]],["ifx-popover",[[769,"ifx-popover",{"popoverTitle":[1,"popover-title"],"text":[1],"position":[1],"disabled":[4],"open":[1540],"ariaLabelText":[1,"aria-label"],"popoverVisible":[32],"computedArrowPosition":[32],"show":[64],"hide":[64],"toggle":[64]},null,{"open":[{"openChanged":0}],"position":[{"positionChanged":0}]}]]],["ifx-radio-button-group",[[769,"ifx-radio-button-group",{"alignment":[1],"size":[1],"showGroupLabel":[4,"show-group-label"],"groupLabelText":[1,"group-label-text"],"showCaption":[4,"show-caption"],"captionText":[1,"caption-text"],"showCaptionIcon":[4,"show-caption-icon"],"required":[4],"hasErrors":[32],"setGroupError":[64]},[[0,"ifxError","handleRadioButtonError"]]]]],["ifx-segment",[[769,"ifx-segment",{"icon":[1],"segmentIndex":[2,"segment-index"],"selected":[1028],"value":[1]}]]],["ifx-segmented-control",[[769,"ifx-segmented-control",{"caption":[1],"label":[1],"size":[1],"required":[4],"error":[4]},[[0,"segmentSelect","onSegmentSelect"]]]]],["ifx-sidebar",[[769,"ifx-sidebar",{"applicationName":[1,"application-name"],"initialCollapse":[4,"initial-collapse"],"showFooter":[4,"show-footer"],"showHeader":[4,"show-header"],"termsOfUse":[1,"terms-of-use"],"imprint":[1],"privacyPolicy":[1,"privacy-policy"],"footerHrefTarget":[1,"footer-href-target"],"logoHref":[1,"logo-href"],"logoHrefTarget":[1,"logo-href-target"],"copyrightText":[1,"copyright-text"],"collapsible":[4],"collapsed":[4],"hideMenuLabel":[1,"hide-menu-label"],"position":[1],"internalLogoHref":[32],"internalLogoHrefTarget":[32],"currentYear":[32],"isCollapsed":[32],"internalTermsofUse":[32],"internalImprint":[32],"internalPrivacyPolicy":[32],"internalShowFooter":[32],"activeItem":[32],"toggleCollapse":[64],"collapse":[64],"expand":[64]},[[0,"ifxSidebarMenu","handleSidebarItemInteraction"],[0,"ifxSidebarNavigationItem","handleSidebarItemActivated"]],{"collapsible":[{"handleCollapsibleChange":0}],"collapsed":[{"handleCollapsedPropChange":0}]}]]],["ifx-slider",[[513,"ifx-slider",{"min":[2],"max":[2],"step":[2],"value":[2],"minValueHandle":[2,"min-value-handle"],"maxValueHandle":[2,"max-value-handle"],"disabled":[4],"showPercentage":[4,"show-percentage"],"leftIcon":[1,"left-icon"],"rightIcon":[1,"right-icon"],"leftText":[1,"left-text"],"rightText":[1,"right-text"],"type":[1],"ariaLabelText":[1,"aria-label-text"],"internalValue":[32],"percentage":[32],"internalMinValue":[32],"internalMaxValue":[32]},null,{"value":[{"valueChanged":0}],"minValueHandle":[{"minValueChanged":0}],"maxValueHandle":[{"maxValueChanged":0}]}]]],["ifx-step",[[769,"ifx-step",{"complete":[4],"disabled":[4],"error":[1028],"lastStep":[4,"last-step"],"stepId":[2,"step-id"],"stepperState":[16],"active":[32],"clickable":[32]},[[4,"ifxChange","onStepChange"]],{"stepperState":[{"updateCurrentStep":0}],"active":[{"updateErrorState":0}]}]]],["ifx-tooltip",[[769,"ifx-tooltip",{"header":[1],"text":[1],"position":[1],"ariaLabelText":[1,"aria-label-text"],"variant":[1],"icon":[1],"appendToBody":[4,"append-to-body"],"tooltipVisible":[32],"internalPosition":[32]},null,{"position":[{"positionChanged":0}]}]]],["ifx-accordion",[[785,"ifx-accordion",{"autoCollapse":[4,"auto-collapse"]},[[0,"ifxOpen","onItemOpen"]]]]],["ifx-action-list",[[769,"ifx-action-list",{"listAriaLabel":[1,"list-aria-label"]}]]],["ifx-action-list-item",[[769,"ifx-action-list-item",{"itemTitle":[1,"item-title"],"description":[1],"value":[1],"href":[1],"target":[1],"disabled":[4],"itemAriaLabel":[1,"item-aria-label"]},null,{"disabled":[{"onDisabledChange":0}]}]]],["ifx-basic-table",[[512,"ifx-basic-table",{"cols":[1],"rows":[1],"rowHeight":[1,"row-height"],"tableHeight":[1,"table-height"],"variant":[1],"gridOptions":[32],"columnDefs":[32],"rowData":[32],"uniqueKey":[32]}]]],["ifx-breadcrumb",[[257,"ifx-breadcrumb"]]],["ifx-breadcrumb-item",[[769,"ifx-breadcrumb-item",{"isLastItem":[32],"uniqueId":[32],"hasDropdownMenu":[32]},[[5,"mousedown","handleOutsideClick"],[0,"keydown","handleKeyDown"],[0,"breadcrumbMenuIconWrapper","menuWrapperEventReEmitter"]]]]],["ifx-card",[[769,"ifx-card",{"direction":[1],"href":[1],"target":[1],"ariaLabelText":[1,"aria-label-text"],"noBtns":[32],"alignment":[32],"noImg":[32],"internalHref":[32]},[[0,"imgPosition","setImgPosition"]]]]],["ifx-card-headline",[[769,"ifx-card-headline",{"direction":[32],"hasDesc":[32]}]]],["ifx-card-image",[[513,"ifx-card-image",{"src":[1],"alt":[1],"position":[1]}]]],["ifx-card-links",[[257,"ifx-card-links"]]],["ifx-card-overline",[[257,"ifx-card-overline"]]],["ifx-card-text",[[769,"ifx-card-text",{"hasBtn":[32]}]]],["ifx-content-switcher",[[769,"ifx-content-switcher",{"items":[32],"activeIndex":[32],"hoverIndex":[32],"focusIndex":[32],"dividers":[32]}]]],["ifx-content-switcher-item",[[769,"ifx-content-switcher-item",{"selected":[4],"value":[1]}]]],["ifx-dropdown",[[769,"ifx-dropdown",{"placement":[1],"defaultOpen":[4,"default-open"],"noAppendToBody":[4,"no-append-to-body"],"disabled":[4],"noCloseOnOutsideClick":[4,"no-close-on-outside-click"],"noCloseOnMenuClick":[4,"no-close-on-menu-click"],"internalIsOpen":[32],"trigger":[32],"menu":[32],"isOpen":[64],"closeDropdown":[64],"openDropdown":[64]},[[5,"mousedown","handleOutsideClick"],[4,"focusin","handleFocusOutside"],[0,"slotchange","watchHandlerSlot"]],{"defaultOpen":[{"watchHandlerIsOpen":0}],"disabled":[{"watchHandlerDisabled":0}]}]]],["ifx-dropdown-header",[[257,"ifx-dropdown-header"]]],["ifx-dropdown-menu",[[769,"ifx-dropdown-menu",{"isOpen":[4,"is-open"],"size":[1],"hideTopPadding":[32],"filteredItems":[32]},[[0,"ifxInput","handleMenuFilter"],[0,"ifxDropdownItem","handleDropdownItemValueEmission"]]]]],["ifx-dropdown-separator",[[1,"ifx-dropdown-separator"]]],["ifx-dropdown-trigger",[[769,"ifx-dropdown-trigger",{"isOpen":[4,"is-open"]}]]],["ifx-error-page",[[769,"ifx-error-page",{"illustrationUrl":[1,"illustration-url"],"imgAlt":[1,"img-alt"],"type":[1],"headline":[1],"description":[1]}]]],["ifx-filter-type-group",[[769,"ifx-filter-type-group",{"selectedOptions":[32]}]]],["ifx-footer",[[769,"ifx-footer",{"copyrightText":[1,"copyright-text"],"currentYear":[32]}]]],["ifx-footer-column",[[257,"ifx-footer-column"]]],["ifx-navbar-profile",[[769,"ifx-navbar-profile",{"showLabel":[4,"show-label"],"href":[1],"imageUrl":[1,"image-url"],"target":[1],"alt":[1],"userName":[1,"user-name"],"internalHref":[32],"isMenuItem":[32],"hasChildNavItems":[32],"internalImageUrl":[32],"hideComponent":[64],"showComponent":[64]},[[5,"mousedown","handleOutsideClick"]]]]],["ifx-sidebar-title",[[769,"ifx-sidebar-title",{"showInCollapsed":[4,"show-in-collapsed"]}]]],["ifx-status",[[513,"ifx-status",{"label":[1],"border":[4],"color":[1]}]]],["ifx-stepper",[[769,"ifx-stepper",{"activeStep":[1026,"active-step"],"indicatorPosition":[1,"indicator-position"],"showStepNumber":[4,"show-step-number"],"variant":[1],"ariaLabelText":[1,"aria-label-text"],"ariaCurrentText":[1,"aria-current-text"],"stepsCount":[32],"shouldEmitEvent":[32],"emittedByClick":[32]},[[0,"ifxChange","onStepChange"]],{"activeStep":[{"handleActiveStep":0}]}]]],["ifx-switch",[[833,"ifx-switch",{"checked":[1028],"disabled":[4],"name":[1],"value":[1],"isChecked":[64],"setChecked":[64],"toggle":[64]},null,{"checked":[{"onCheckedChange":0}]}]]],["ifx-tab",[[772,"ifx-tab",{"header":[1],"disabled":[4],"icon":[1],"iconPosition":[1,"icon-position"],"subline":[1],"label":[1],"number":[2],"positionSticky":[4,"position-sticky"]}]]],["ifx-textarea",[[577,"ifx-textarea",{"caption":[1],"cols":[2],"disabled":[4],"error":[4],"label":[1],"maxlength":[2],"name":[513],"placeholder":[1],"required":[4],"readOnly":[4,"read-only"],"resize":[1],"rows":[2],"value":[1025],"wrap":[1],"fullWidth":[513,"full-width"],"reset":[64]},null,{"value":[{"valueWatcher":0}]}]]],["ifx-tree-view",[[769,"ifx-tree-view",{"label":[1],"disableAllItems":[4,"disable-all-items"],"expandAllItems":[4,"expand-all-items"],"ariaLabelText":[1,"aria-label-text"]},null,{"expandAllItems":[{"handleExpandAllItemsChange":0}],"disableAllItems":[{"handleDisableAllItemsChange":0}]}]]],["ifx-notification",[[769,"ifx-notification",{"icon":[1],"variant":[1],"linkText":[1,"link-text"],"linkHref":[1,"link-href"],"linkTarget":[1,"link-target"]}]]],["ifx-progress-bar",[[513,"ifx-progress-bar",{"value":[2],"size":[1],"showLabel":[4,"show-label"],"internalValue":[32]},null,{"value":[{"valueChanged":0}]}]]],["ifx-radio-button",[[769,"ifx-radio-button",{"disabled":[4],"value":[1],"error":[4],"size":[513],"name":[513],"checked":[1028],"internalChecked":[32],"hasSlot":[32],"isChecked":[64]},[[0,"keydown","handleKeyDown"],[4,"change","handleExternalChange"]],{"checked":[{"handleCheckedChange":0}],"internalChecked":[{"updateFormValue":0}],"error":[{"errorChanged":0}]}]]],["ifx-icon",[[512,"ifx-icon",{"icon":[1025],"ifxIcon":[1032,"ifx-icon"],"internalIcon":[32]},null,{"icon":[{"updateIcon":0}]}]]],["ifx-multiselect_2",[[769,"ifx-multiselect",{"name":[1],"disabled":[4],"required":[4],"error":[4],"caption":[1],"label":[1],"placeholder":[1],"showSearch":[4,"show-search"],"showSelectAll":[4,"show-select-all"],"showClearButton":[4,"show-clear-button"],"showExpandCollapse":[4,"show-expand-collapse"],"noResultsMessage":[1,"no-results-message"],"showNoResultsMessage":[4,"show-no-results-message"],"searchPlaceholder":[1,"search-placeholder"],"selectAllLabel":[1,"select-all-label"],"expandLabel":[1,"expand-label"],"collapseLabel":[1,"collapse-label"],"ariaMultiSelectLabel":[1,"aria-multi-select-label"],"ariaMultiSelectLabelledBy":[1,"aria-multi-select-labelled-by"],"ariaMultiSelectDescribedBy":[1,"aria-multi-select-described-by"],"ariaSearchLabel":[1,"aria-search-label"],"ariaClearLabel":[1,"aria-clear-label"],"ariaToggleLabel":[1,"aria-toggle-label"],"ariaSelectAllLabel":[1,"aria-select-all-label"],"ariaExpandAllLabel":[1,"aria-expand-all-label"],"ariaCollapseAllLabel":[1,"aria-collapse-all-label"],"internalError":[32],"persistentSelectedOptions":[32],"dropdownOpen":[32],"dropdownFlipped":[32],"searchTerm":[32],"clearSelection":[64]},null,{"error":[{"updateInternalError":0}],"persistentSelectedOptions":[{"onSelectionChange":0}]}],[769,"ifx-multiselect-option",{"value":[1],"selected":[1540],"disabled":[1540],"indeterminate":[1540],"isExpanded":[32],"hasChildren":[32],"depth":[32],"searchTerm":[32],"isSearchActive":[32],"isSearchDisabled":[32]},[[0,"click","handleClick"],[0,"keydown","handleKeyDown"]]]]],["ifx-chip",[[769,"ifx-chip",{"placeholder":[1],"size":[1],"value":[1025],"variant":[1],"theme":[1],"readOnly":[4,"read-only"],"ariaLabelText":[1,"aria-label-text"],"disabled":[4],"icon":[1],"opened":[32],"selectedOptions":[32]},[[5,"mousedown","closeDropdownOnOutsideClick"],[0,"ifxChipItemSelect","updateSelectedOptions"]],{"value":[{"handleValueChange":0}],"readOnly":[{"handleReadOnlyChange":0}]}]]],["ifx-select",[[512,"ifx-select",{"value":[1],"name":[1],"items":[16],"choices":[1],"renderChoiceLimit":[2,"render-choice-limit"],"maxItemCount":[2,"max-item-count"],"addItems":[4,"add-items"],"removeItems":[4,"remove-items"],"removeItemButton":[4,"remove-item-button"],"editItems":[4,"edit-items"],"duplicateItemsAllowed":[4,"duplicate-items-allowed"],"delimiter":[1],"paste":[4],"showSearch":[4,"show-search"],"searchChoices":[4,"search-choices"],"searchFields":[1,"search-fields"],"searchFloor":[2,"search-floor"],"searchResultLimit":[2,"search-result-limit"],"position":[1],"resetScrollPosition":[4,"reset-scroll-position"],"shouldSort":[4,"should-sort"],"shouldSortItems":[4,"should-sort-items"],"sorter":[16],"placeholder":[8],"searchPlaceholderValue":[1,"search-placeholder-value"],"prependValue":[1,"prepend-value"],"appendValue":[1,"append-value"],"renderSelectedChoices":[1,"render-selected-choices"],"loadingText":[1,"loading-text"],"noResultsText":[1,"no-results-text"],"noChoicesText":[1,"no-choices-text"],"itemSelectText":[1,"item-select-text"],"addItemText":[1,"add-item-text"],"maxItemText":[1,"max-item-text"],"uniqueItemText":[1,"unique-item-text"],"classNames":[16],"fuseOptions":[16],"addItemFilter":[1,"add-item-filter"],"customAddItemText":[1,"custom-add-item-text"],"callbackOnInit":[16],"callbackOnCreateTemplates":[16],"valueComparer":[16],"error":[4],"label":[1],"caption":[1],"disabled":[4],"required":[4],"placeholderValue":[1,"placeholder-value"],"options":[1025],"size":[1],"showClearButton":[4,"show-clear-button"],"selectedOption":[32],"optionIsSelected":[32],"clearSelection":[64],"handleChange":[64],"highlightItem":[64],"unhighlightItem":[64],"highlightAll":[64],"unhighlightAll":[64],"removeActiveItemsByValue":[64],"removeActiveItems":[64],"removeHighlightedItems":[64],"showDropdown":[64],"hideDropdown":[64],"getValue":[64],"setValue":[64],"setChoiceByValue":[64],"setChoices":[64],"clearChoices":[64],"clearStore":[64],"clearInput":[64],"ajax":[64],"handleDeleteIcon":[64]},[[5,"mousedown","handleOutsideClick"]],{"disabled":[{"watchDisabled":0}]}]]],["ifx-spinner_2",[[513,"ifx-spinner",{"size":[1],"variant":[1],"inverted":[4],"ariaLabelText":[1,"aria-label-text"]}],[577,"ifx-text-field",{"placeholder":[1],"name":[513],"value":[1025],"error":[4],"label":[1],"icon":[1],"caption":[1],"size":[1],"required":[4],"success":[4],"disabled":[4],"readOnly":[4,"read-only"],"maxlength":[2],"showDeleteIcon":[4,"show-delete-icon"],"autocomplete":[1],"type":[1],"internalId":[1,"internal-id"],"internalType":[32],"reset":[64]},null,{"value":[{"valueWatcher":0}]}]]],["ifx-search-field",[[513,"ifx-search-field",{"value":[1025],"suggestions":[16],"showSuggestions":[4,"show-suggestions"],"maxSuggestions":[2,"max-suggestions"],"maxHistoryItems":[2,"max-history-items"],"enableHistory":[4,"enable-history"],"historyKey":[1,"history-key"],"historyHeaderText":[1,"history-header-text"],"ariaLabelText":[1,"aria-label-text"],"ariaLabelledBy":[1,"aria-labelled-by"],"ariaDescribedBy":[1,"aria-described-by"],"deleteIconAriaLabel":[1,"delete-icon-aria-label"],"historyDeleteAriaLabel":[1,"history-delete-aria-label"],"dropdownAriaLabel":[1,"dropdown-aria-label"],"suggestionAriaLabel":[1,"suggestion-aria-label"],"historyItemAriaLabel":[1,"history-item-aria-label"],"showDeleteIcon":[4,"show-delete-icon"],"disabled":[4],"size":[1],"placeholder":[1],"autocomplete":[1],"maxlength":[2],"showDeleteIconInternalState":[32],"isFocused":[32],"showDropdown":[32],"filteredSuggestions":[32],"selectedSuggestionIndex":[32],"searchHistory":[32],"clearSearchHistory":[64]},[[5,"mousedown","handleOutsideClick"],[0,"keydown","handleKeyDown"]],{"value":[{"valueWatcher":0}],"suggestions":[{"suggestionsWatcher":0}]}]]],["ifx-icon-button",[[513,"ifx-icon-button",{"variant":[1],"size":[1],"disabled":[4],"icon":[1],"href":[1],"target":[1],"shape":[1],"ariaLabelText":[1,"aria-label-text"],"internalIcon":[32],"setFocus":[64]},[[2,"click","handleClick"]],{"icon":[{"updateIcon":0}]}]]],["ifx-button",[[769,"ifx-button",{"variant":[1],"theme":[1],"size":[1],"disabled":[4],"href":[1],"target":[1],"type":[1],"fullWidth":[4,"full-width"],"ariaLabelText":[1,"aria-label-text"],"internalHref":[32],"setFocus":[64]},[[0,"keydown","handleKeyDown"],[2,"click","handleHostClick"]],{"href":[{"setInternalHref":0}]}]]],["ifx-alert_2",[[513,"ifx-template",{"name":[1],"thumbnail":[1],"repoDetails":[32],"repoUrl":[32],"showDetails":[32],"isTemplatePage":[32],"isLoading":[32],"repoError":[32],"toggleTemplate":[64]}],[769,"ifx-alert",{"variant":[1],"icon":[1],"closable":[4],"AriaLiveText":[1,"aria-live-text"],"uniqueId":[32]}]]],["ifx-checkbox",[[833,"ifx-checkbox",{"disabled":[4],"name":[1],"checked":[1028],"indeterminate":[4],"error":[4],"size":[1],"value":[1],"internalIndeterminate":[32],"isChecked":[64],"setChecked":[64],"toggleCheckedState":[64],"toggle":[64]},null,{"checked":[{"valueChanged":0}],"error":[{"errorChanged":0}],"indeterminate":[{"indeterminateChanged":0}]}]]],["ifx-chip-item_2",[[513,"ifx-pagination",{"currentPage":[2,"current-page"],"showItemsPerPage":[4,"show-items-per-page"],"total":[2],"itemsPerPage":[1,"items-per-page"],"itemsPerPageLabel":[1,"items-per-page-label"],"showAllItems":[32],"internalPage":[32],"internalItemsPerPage":[32],"numberOfPages":[32],"filteredItemsPerPage":[32],"visiblePages":[32]},[[0,"ifxSelect","setItemsPerPage"]],{"total":[{"watchTotalHandler":0}],"currentPage":[{"currentPageWatcher":0}]}],[769,"ifx-chip-item",{"value":[1],"chipState":[16],"selected":[1540]},[[16,"ifxChipItemSelect","updateItemSelection"]],{"selected":[{"validateSelected":0}]}]]],["ifx-indicator",[[513,"ifx-indicator",{"inverted":[4],"ariaLabelText":[1,"aria-label-text"],"variant":[1],"number":[2],"filteredNumber":[32]}]]],["ifx-link",[[769,"ifx-link",{"href":[1],"target":[1],"variant":[1],"size":[1],"disabled":[4],"download":[1],"ariaLabelText":[1,"aria-label-text"],"internalHref":[32],"internalTarget":[32],"internalVariant":[32]}]]]]'),t)});(function(){if(typeof window<"u"&&window.Reflect!==void 0&&window.customElements!==void 0){var n=HTMLElement;window.HTMLElement=function(){return Reflect.construct(n,[],this.constructor)},HTMLElement.prototype=n.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,n)}})();var B=["*"],Kb=(n,t)=>{let i=n.prototype;t.forEach(e=>{Object.defineProperty(i,e,{get(){return this.el[e]},set(r){this.z.runOutsideAngular(()=>this.el[e]=r)},configurable:!0})})},ey=(n,t)=>{let i=n.prototype;t.forEach(e=>{i[e]=function(){let r=arguments;return this.z.runOutsideAngular(()=>this.el[e].apply(this.el,r))}})};function z(n){return function(i){let{defineCustomElementFn:e,inputs:r,methods:a}=n;return e!==void 0&&e(),r&&Kb(i,r),a&&ey(i,a),i}}var Og=(()=>{let n=class qc{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||qc)(v(P),v(F),v(T))};static \u0275cmp=I({type:qc,selectors:[["ifx-accordion"]],inputs:{autoCollapse:"autoCollapse"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["autoCollapse"]})],n),n})(),Lg=(()=>{let n=class Hc{z;el;ifxOpen=new R;ifxClose=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Hc)(v(P),v(F),v(T))};static \u0275cmp=I({type:Hc,selectors:[["ifx-accordion-item"]],inputs:{ariaLevelNumber:"ariaLevelNumber",caption:"caption",icon:"icon",open:"open"},outputs:{ifxOpen:"ifxOpen",ifxClose:"ifxClose"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["ariaLevelNumber","caption","icon","open"]})],n),n})(),Fg=(()=>{let n=class jc{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||jc)(v(P),v(F),v(T))};static \u0275cmp=I({type:jc,selectors:[["ifx-action-list"]],inputs:{listAriaLabel:"listAriaLabel"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["listAriaLabel"]})],n),n})(),Ng=(()=>{let n=class Bc{z;el;ifxActionListItemClick=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Bc)(v(P),v(F),v(T))};static \u0275cmp=I({type:Bc,selectors:[["ifx-action-list-item"]],inputs:{description:"description",disabled:"disabled",href:"href",itemAriaLabel:"itemAriaLabel",itemTitle:"itemTitle",target:"target",value:"value"},outputs:{ifxActionListItemClick:"ifxActionListItemClick"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["description","disabled","href","itemAriaLabel","itemTitle","target","value"]})],n),n})(),Rg=(()=>{let n=class zc{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||zc)(v(P),v(F),v(T))};static \u0275cmp=I({type:zc,selectors:[["ifx-ai-label"]],inputs:{divider:"divider",variant:"variant"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["divider","variant"]})],n),n})(),Pg=(()=>{let n=class Uc{z;el;ifxClose=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Uc)(v(P),v(F),v(T))};static \u0275cmp=I({type:Uc,selectors:[["ifx-alert"]],inputs:{AriaLiveText:"AriaLiveText",closable:"closable",icon:"icon",variant:"variant"},outputs:{ifxClose:"ifxClose"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["AriaLiveText","closable","icon","variant"]})],n),n})(),Vg=(()=>{let n=class $c{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||$c)(v(P),v(F),v(T))};static \u0275cmp=I({type:$c,selectors:[["ifx-basic-table"]],inputs:{cols:"cols",rowHeight:"rowHeight",rows:"rows",tableHeight:"tableHeight",variant:"variant"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["cols","rowHeight","rows","tableHeight","variant"]})],n),n})();var k=(()=>{let n=class Gc{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Gc)(v(P),v(F),v(T))};static \u0275cmp=I({type:Gc,selectors:[["ifx-button"]],inputs:{ariaLabelText:"ariaLabelText",disabled:"disabled",fullWidth:"fullWidth",href:"href",size:"size",target:"target",theme:"theme",type:"type",variant:"variant"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["ariaLabelText","disabled","fullWidth","href","size","target","theme","type","variant"],methods:["setFocus"]})],n),n})(),qg=(()=>{let n=class Wc{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Wc)(v(P),v(F),v(T))};static \u0275cmp=I({type:Wc,selectors:[["ifx-card"]],inputs:{ariaLabelText:"ariaLabelText",direction:"direction",href:"href",target:"target"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["ariaLabelText","direction","href","target"]})],n),n})(),Hg=(()=>{let n=class Zc{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Zc)(v(P),v(F),v(T))};static \u0275cmp=I({type:Zc,selectors:[["ifx-card-headline"]],standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({})],n),n})(),jg=(()=>{let n=class Jc{z;el;imgPosition=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Jc)(v(P),v(F),v(T))};static \u0275cmp=I({type:Jc,selectors:[["ifx-card-image"]],inputs:{alt:"alt",position:"position",src:"src"},outputs:{imgPosition:"imgPosition"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["alt","position","src"]})],n),n})(),Bg=(()=>{let n=class Xc{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Xc)(v(P),v(F),v(T))};static \u0275cmp=I({type:Xc,selectors:[["ifx-card-links"]],standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({})],n),n})(),zg=(()=>{let n=class Yc{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Yc)(v(P),v(F),v(T))};static \u0275cmp=I({type:Yc,selectors:[["ifx-card-overline"]],standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({})],n),n})(),Ug=(()=>{let n=class Qc{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Qc)(v(P),v(F),v(T))};static \u0275cmp=I({type:Qc,selectors:[["ifx-card-text"]],standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({})],n),n})(),Ln=(()=>{let n=class Kc{z;el;ifxChange=new R;ifxError=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Kc)(v(P),v(F),v(T))};static \u0275cmp=I({type:Kc,selectors:[["ifx-checkbox"]],inputs:{checked:"checked",disabled:"disabled",error:"error",indeterminate:"indeterminate",name:"name",size:"size",value:"value"},outputs:{ifxChange:"ifxChange",ifxError:"ifxError"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["checked","disabled","error","indeterminate","name","size","value"],methods:["isChecked","setChecked","toggleCheckedState","toggle"]})],n),n})(),$g=(()=>{let n=class ed{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||ed)(v(P),v(F),v(T))};static \u0275cmp=I({type:ed,selectors:[["ifx-checkbox-group"]],inputs:{alignment:"alignment",captionText:"captionText",groupLabelText:"groupLabelText",required:"required",showCaption:"showCaption",showCaptionIcon:"showCaptionIcon",showGroupLabel:"showGroupLabel",size:"size"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["alignment","captionText","groupLabelText","required","showCaption","showCaptionIcon","showGroupLabel","size"],methods:["setGroupError"]})],n),n})(),Gg=(()=>{let n=class td{z;el;ifxChange=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||td)(v(P),v(F),v(T))};static \u0275cmp=I({type:td,selectors:[["ifx-chip"]],inputs:{ariaLabelText:"ariaLabelText",disabled:"disabled",icon:"icon",placeholder:"placeholder",readOnly:"readOnly",size:"size",theme:"theme",value:"value",variant:"variant"},outputs:{ifxChange:"ifxChange"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["ariaLabelText","disabled","icon","placeholder","readOnly","size","theme","value","variant"]})],n),n})(),Wg=(()=>{let n=class nd{z;el;ifxChipItemSelect=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||nd)(v(P),v(F),v(T))};static \u0275cmp=I({type:nd,selectors:[["ifx-chip-item"]],inputs:{chipState:"chipState",selected:"selected",value:"value"},outputs:{ifxChipItemSelect:"ifxChipItemSelect"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["chipState","selected","value"]})],n),n})(),Zg=(()=>{let n=class id{z;el;ifxChange=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||id)(v(P),v(F),v(T))};static \u0275cmp=I({type:id,selectors:[["ifx-content-switcher"]],outputs:{ifxChange:"ifxChange"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({})],n),n})(),Jg=(()=>{let n=class rd{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||rd)(v(P),v(F),v(T))};static \u0275cmp=I({type:rd,selectors:[["ifx-content-switcher-item"]],inputs:{selected:"selected",value:"value"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["selected","value"]})],n),n})(),Xg=(()=>{let n=class od{z;el;ifxDate=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||od)(v(P),v(F),v(T))};static \u0275cmp=I({type:od,selectors:[["ifx-date-picker"]],inputs:{ariaLabelText:"ariaLabelText",autocomplete:"autocomplete",caption:"caption",disabled:"disabled",error:"error",label:"label",max:"max",min:"min",required:"required",size:"size",success:"success",type:"type",value:"value"},outputs:{ifxDate:"ifxDate"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["ariaLabelText","autocomplete","caption","disabled","error","label","max","min","required","size","success","type","value"],methods:["clear"]})],n),n})();var Yg=(()=>{let n=class ad{z;el;ifxOpen=new R;ifxClose=new R;ifxDropdown=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||ad)(v(P),v(F),v(T))};static \u0275cmp=I({type:ad,selectors:[["ifx-dropdown"]],inputs:{defaultOpen:"defaultOpen",disabled:"disabled",noAppendToBody:"noAppendToBody",noCloseOnMenuClick:"noCloseOnMenuClick",noCloseOnOutsideClick:"noCloseOnOutsideClick",placement:"placement"},outputs:{ifxOpen:"ifxOpen",ifxClose:"ifxClose",ifxDropdown:"ifxDropdown"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["defaultOpen","disabled","noAppendToBody","noCloseOnMenuClick","noCloseOnOutsideClick","placement"],methods:["isOpen","closeDropdown","openDropdown"]})],n),n})();var Qg=(()=>{let n=class sd{z;el;ifxDropdownItem=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||sd)(v(P),v(F),v(T))};static \u0275cmp=I({type:sd,selectors:[["ifx-dropdown-item"]],inputs:{error:"error",hide:"hide",href:"href",icon:"icon",target:"target"},outputs:{ifxDropdownItem:"ifxDropdownItem"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["error","hide","href","icon","target"]})],n),n})(),Kg=(()=>{let n=class ld{z;el;menuSize=new R;ifxDropdownMenuItem=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||ld)(v(P),v(F),v(T))};static \u0275cmp=I({type:ld,selectors:[["ifx-dropdown-menu"]],inputs:{isOpen:"isOpen",size:"size"},outputs:{menuSize:"menuSize",ifxDropdownMenuItem:"ifxDropdownMenuItem"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["isOpen","size"]})],n),n})();var eh=(()=>{let n=class cd{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||cd)(v(P),v(F),v(T))};static \u0275cmp=I({type:cd,selectors:[["ifx-dropdown-trigger-button"]],inputs:{disabled:"disabled",hideArrow:"hideArrow",isOpen:"isOpen",size:"size",theme:"theme",variant:"variant"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["disabled","hideArrow","isOpen","size","theme","variant"]})],n),n})(),th=(()=>{let n=class dd{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||dd)(v(P),v(F),v(T))};static \u0275cmp=I({type:dd,selectors:[["ifx-error-page"]],inputs:{description:"description",headline:"headline",illustrationUrl:"illustrationUrl",imgAlt:"imgAlt",type:"type"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["description","headline","illustrationUrl","imgAlt","type"]})],n),n})();var nh=(()=>{let n=class ud{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||ud)(v(P),v(F),v(T))};static \u0275cmp=I({type:ud,selectors:[["ifx-footer"]],inputs:{copyrightText:"copyrightText"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["copyrightText"]})],n),n})();var Fn=(()=>{let n=class pd{z;el;consoleError=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||pd)(v(P),v(F),v(T))};static \u0275cmp=I({type:pd,selectors:[["ifx-icon"]],inputs:{icon:"icon",ifxIcon:"ifxIcon"},outputs:{consoleError:"consoleError"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["icon","ifxIcon"]})],n),n})(),ih=(()=>{let n=class fd{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||fd)(v(P),v(F),v(T))};static \u0275cmp=I({type:fd,selectors:[["ifx-icon-button"]],inputs:{ariaLabelText:"ariaLabelText",disabled:"disabled",href:"href",icon:"icon",shape:"shape",size:"size",target:"target",variant:"variant"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["ariaLabelText","disabled","href","icon","shape","size","target","variant"],methods:["setFocus"]})],n),n})();var rh=(()=>{let n=class md{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||md)(v(P),v(F),v(T))};static \u0275cmp=I({type:md,selectors:[["ifx-indicator"]],inputs:{ariaLabelText:"ariaLabelText",inverted:"inverted",number:"number",variant:"variant"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["ariaLabelText","inverted","number","variant"]})],n),n})(),zo=(()=>{let n=class gd{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||gd)(v(P),v(F),v(T))};static \u0275cmp=I({type:gd,selectors:[["ifx-link"]],inputs:{ariaLabelText:"ariaLabelText",disabled:"disabled",download:"download",href:"href",size:"size",target:"target",variant:"variant"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["ariaLabelText","disabled","download","href","size","target","variant"]})],n),n})();var oh=(()=>{let n=class hd{z;el;ifxOpen=new R;ifxClose=new R;ifxOpenedChange=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||hd)(v(P),v(F),v(T))};static \u0275cmp=I({type:hd,selectors:[["ifx-modal"]],inputs:{alertIcon:"alertIcon",caption:"caption",captionAriaLabel:"captionAriaLabel",closeButtonAriaLabel:"closeButtonAriaLabel",closeOnOverlayClick:"closeOnOverlayClick",opened:"opened",showCloseButton:"showCloseButton",size:"size",variant:"variant"},outputs:{ifxOpen:"ifxOpen",ifxClose:"ifxClose",ifxOpenedChange:"ifxOpenedChange"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["alertIcon","caption","captionAriaLabel","closeButtonAriaLabel","closeOnOverlayClick","opened","showCloseButton","size","variant"],methods:["openModal","closeModal"]})],n),n})();var Uo=(()=>{let n=class vd{z;el;ifxNavbarMobileMenuIsOpen=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||vd)(v(P),v(F),v(T))};static \u0275cmp=I({type:vd,selectors:[["ifx-navbar"]],inputs:{applicationName:"applicationName",fixed:"fixed",logoHref:"logoHref",logoHrefTarget:"logoHrefTarget",showLogoAndAppname:"showLogoAndAppname"},outputs:{ifxNavbarMobileMenuIsOpen:"ifxNavbarMobileMenuIsOpen"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["applicationName","fixed","logoHref","logoHrefTarget","showLogoAndAppname"]})],n),n})(),$o=(()=>{let n=class xd{z;el;ifxNavItem=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||xd)(v(P),v(F),v(T))};static \u0275cmp=I({type:xd,selectors:[["ifx-navbar-item"]],inputs:{dotIndicator:"dotIndicator",hideOnMobile:"hideOnMobile",href:"href",icon:"icon",numberIndicator:"numberIndicator",showLabel:"showLabel",target:"target"},outputs:{ifxNavItem:"ifxNavItem"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["dotIndicator","hideOnMobile","href","icon","numberIndicator","showLabel","target"],methods:["hideComponent","showComponent","toggleChildren","moveChildComponentsIntoSubLayerMenu","toggleFirstLayerItem","addMenuItemClass","moveChildComponentsBackIntoNavbar","returnToFirstLayer","setMenuItemPosition","setItemSideSpecifications"]})],n),n})(),ah=(()=>{let n=class bd{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||bd)(v(P),v(F),v(T))};static \u0275cmp=I({type:bd,selectors:[["ifx-navbar-profile"]],inputs:{alt:"alt",href:"href",imageUrl:"imageUrl",showLabel:"showLabel",target:"target",userName:"userName"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["alt","href","imageUrl","showLabel","target","userName"],methods:["hideComponent","showComponent"]})],n),n})(),sh=(()=>{let n=class yd{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||yd)(v(P),v(F),v(T))};static \u0275cmp=I({type:yd,selectors:[["ifx-notification"]],inputs:{icon:"icon",linkHref:"linkHref",linkTarget:"linkTarget",linkText:"linkText",variant:"variant"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["icon","linkHref","linkTarget","linkText","variant"]})],n),n})();var lh=(()=>{let n=class Id{z;el;ifxPageChange=new R;ifxItemsPerPageChange=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Id)(v(P),v(F),v(T))};static \u0275cmp=I({type:Id,selectors:[["ifx-pagination"]],inputs:{currentPage:"currentPage",itemsPerPage:"itemsPerPage",itemsPerPageLabel:"itemsPerPageLabel",showItemsPerPage:"showItemsPerPage",total:"total"},outputs:{ifxPageChange:"ifxPageChange",ifxItemsPerPageChange:"ifxItemsPerPageChange"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["currentPage","itemsPerPage","itemsPerPageLabel","showItemsPerPage","total"]})],n),n})();var ch=(()=>{let n=class Ed{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Ed)(v(P),v(F),v(T))};static \u0275cmp=I({type:Ed,selectors:[["ifx-progress-bar"]],inputs:{showLabel:"showLabel",size:"size",value:"value"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["showLabel","size","value"]})],n),n})(),Go=(()=>{let n=class Cd{z;el;ifxChange=new R;ifxError=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Cd)(v(P),v(F),v(T))};static \u0275cmp=I({type:Cd,selectors:[["ifx-radio-button"]],inputs:{checked:"checked",disabled:"disabled",error:"error",name:"name",size:"size",value:"value"},outputs:{ifxChange:"ifxChange",ifxError:"ifxError"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["checked","disabled","error","name","size","value"],methods:["isChecked"]})],n),n})(),dh=(()=>{let n=class wd{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||wd)(v(P),v(F),v(T))};static \u0275cmp=I({type:wd,selectors:[["ifx-radio-button-group"]],inputs:{alignment:"alignment",captionText:"captionText",groupLabelText:"groupLabelText",required:"required",showCaption:"showCaption",showCaptionIcon:"showCaptionIcon",showGroupLabel:"showGroupLabel",size:"size"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["alignment","captionText","groupLabelText","required","showCaption","showCaptionIcon","showGroupLabel","size"],methods:["setGroupError"]})],n),n})(),Nn=(()=>{let n=class _d{z;el;ifxInput=new R;ifxOpen=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||_d)(v(P),v(F),v(T))};static \u0275cmp=I({type:_d,selectors:[["ifx-search-bar"]],inputs:{autocomplete:"autocomplete",disabled:"disabled",isOpen:"isOpen",maxlength:"maxlength",showCloseButton:"showCloseButton",value:"value"},outputs:{ifxInput:"ifxInput",ifxOpen:"ifxOpen"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["autocomplete","disabled","isOpen","maxlength","showCloseButton","value"],methods:["open","close"]})],n),n})(),Wo=(()=>{let n=class Dd{z;el;ifxInput=new R;ifxSuggestionRequested=new R;ifxSuggestionSelected=new R;ifxFocus=new R;ifxBlur=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Dd)(v(P),v(F),v(T))};static \u0275cmp=I({type:Dd,selectors:[["ifx-search-field"]],inputs:{ariaDescribedBy:"ariaDescribedBy",ariaLabelText:"ariaLabelText",ariaLabelledBy:"ariaLabelledBy",autocomplete:"autocomplete",deleteIconAriaLabel:"deleteIconAriaLabel",disabled:"disabled",dropdownAriaLabel:"dropdownAriaLabel",enableHistory:"enableHistory",historyDeleteAriaLabel:"historyDeleteAriaLabel",historyHeaderText:"historyHeaderText",historyItemAriaLabel:"historyItemAriaLabel",historyKey:"historyKey",maxHistoryItems:"maxHistoryItems",maxSuggestions:"maxSuggestions",maxlength:"maxlength",placeholder:"placeholder",showDeleteIcon:"showDeleteIcon",showSuggestions:"showSuggestions",size:"size",suggestionAriaLabel:"suggestionAriaLabel",suggestions:"suggestions",value:"value"},outputs:{ifxInput:"ifxInput",ifxSuggestionRequested:"ifxSuggestionRequested",ifxSuggestionSelected:"ifxSuggestionSelected",ifxFocus:"ifxFocus",ifxBlur:"ifxBlur"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["ariaDescribedBy","ariaLabelText","ariaLabelledBy","autocomplete","deleteIconAriaLabel","disabled","dropdownAriaLabel","enableHistory","historyDeleteAriaLabel","historyHeaderText","historyItemAriaLabel","historyKey","maxHistoryItems","maxSuggestions","maxlength","placeholder","showDeleteIcon","showSuggestions","size","suggestionAriaLabel","suggestions","value"],methods:["clearSearchHistory"]})],n),n})(),uh=(()=>{let n=class Sd{z;el;segmentSelect=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Sd)(v(P),v(F),v(T))};static \u0275cmp=I({type:Sd,selectors:[["ifx-segment"]],inputs:{icon:"icon",segmentIndex:"segmentIndex",selected:"selected",value:"value"},outputs:{segmentSelect:"segmentSelect"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["icon","segmentIndex","selected","value"]})],n),n})(),ph=(()=>{let n=class Td{z;el;ifxChange=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Td)(v(P),v(F),v(T))};static \u0275cmp=I({type:Td,selectors:[["ifx-segmented-control"]],inputs:{caption:"caption",error:"error",label:"label",required:"required",size:"size"},outputs:{ifxChange:"ifxChange"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["caption","error","label","required","size"]})],n),n})(),fh=(()=>{let n=class kd{z;el;ifxSelect=new R;ifxInput=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||kd)(v(P),v(F),v(T))};static \u0275cmp=I({type:kd,selectors:[["ifx-select"]],inputs:{addItemFilter:"addItemFilter",addItemText:"addItemText",addItems:"addItems",appendValue:"appendValue",callbackOnCreateTemplates:"callbackOnCreateTemplates",callbackOnInit:"callbackOnInit",caption:"caption",choices:"choices",classNames:"classNames",customAddItemText:"customAddItemText",delimiter:"delimiter",disabled:"disabled",duplicateItemsAllowed:"duplicateItemsAllowed",editItems:"editItems",error:"error",fuseOptions:"fuseOptions",itemSelectText:"itemSelectText",items:"items",label:"label",loadingText:"loadingText",maxItemCount:"maxItemCount",maxItemText:"maxItemText",name:"name",noChoicesText:"noChoicesText",noResultsText:"noResultsText",options:"options",paste:"paste",placeholder:"placeholder",placeholderValue:"placeholderValue",position:"position",prependValue:"prependValue",removeItemButton:"removeItemButton",removeItems:"removeItems",renderChoiceLimit:"renderChoiceLimit",renderSelectedChoices:"renderSelectedChoices",required:"required",resetScrollPosition:"resetScrollPosition",searchChoices:"searchChoices",searchFields:"searchFields",searchFloor:"searchFloor",searchPlaceholderValue:"searchPlaceholderValue",searchResultLimit:"searchResultLimit",shouldSort:"shouldSort",shouldSortItems:"shouldSortItems",showClearButton:"showClearButton",showSearch:"showSearch",size:"size",sorter:"sorter",uniqueItemText:"uniqueItemText",value:"value",valueComparer:"valueComparer"},outputs:{ifxSelect:"ifxSelect",ifxInput:"ifxInput"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["addItemFilter","addItemText","addItems","appendValue","callbackOnCreateTemplates","callbackOnInit","caption","choices","classNames","customAddItemText","delimiter","disabled","duplicateItemsAllowed","editItems","error","fuseOptions","itemSelectText","items","label","loadingText","maxItemCount","maxItemText","name","noChoicesText","noResultsText","options","paste","placeholder","placeholderValue","position","prependValue","removeItemButton","removeItems","renderChoiceLimit","renderSelectedChoices","required","resetScrollPosition","searchChoices","searchFields","searchFloor","searchPlaceholderValue","searchResultLimit","shouldSort","shouldSortItems","showClearButton","showSearch","size","sorter","uniqueItemText","value","valueComparer"],methods:["clearSelection","handleChange","highlightItem","unhighlightItem","highlightAll","unhighlightAll","removeActiveItemsByValue","removeActiveItems","removeHighlightedItems","showDropdown","hideDropdown","getValue","setValue","setChoiceByValue","setChoices","clearChoices","clearStore","clearInput","ajax","handleDeleteIcon"]})],n),n})();var mh=(()=>{let n=class Md{z;el;ifxSidebarCollapseChange=new R;ifxSidebarLogoClick=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Md)(v(P),v(F),v(T))};static \u0275cmp=I({type:Md,selectors:[["ifx-sidebar"]],inputs:{applicationName:"applicationName",collapsed:"collapsed",collapsible:"collapsible",copyrightText:"copyrightText",footerHrefTarget:"footerHrefTarget",hideMenuLabel:"hideMenuLabel",imprint:"imprint",initialCollapse:"initialCollapse",logoHref:"logoHref",logoHrefTarget:"logoHrefTarget",position:"position",privacyPolicy:"privacyPolicy",showFooter:"showFooter",showHeader:"showHeader",termsOfUse:"termsOfUse"},outputs:{ifxSidebarCollapseChange:"ifxSidebarCollapseChange",ifxSidebarLogoClick:"ifxSidebarLogoClick"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["applicationName","collapsed","collapsible","copyrightText","footerHrefTarget","hideMenuLabel","imprint","initialCollapse","logoHref","logoHrefTarget","position","privacyPolicy","showFooter","showHeader","termsOfUse"],methods:["toggleCollapse","collapse","expand"]})],n),n})(),gh=(()=>{let n=class Ad{z;el;ifxSidebarMenu=new R;ifxSidebarNavigationItem=new R;ifxSidebarActionItem=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Ad)(v(P),v(F),v(T))};static \u0275cmp=I({type:Ad,selectors:[["ifx-sidebar-item"]],inputs:{active:"active",handleItemClick:"handleItemClick",href:"href",icon:"icon",isActionItem:"isActionItem",numberIndicator:"numberIndicator",target:"target"},outputs:{ifxSidebarMenu:"ifxSidebarMenu",ifxSidebarNavigationItem:"ifxSidebarNavigationItem",ifxSidebarActionItem:"ifxSidebarActionItem"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["active","handleItemClick","href","icon","isActionItem","numberIndicator","target"],methods:["setActiveClasses","expandMenu","isItemExpandable"]})],n),n})(),hh=(()=>{let n=class Od{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Od)(v(P),v(F),v(T))};static \u0275cmp=I({type:Od,selectors:[["ifx-sidebar-title"]],inputs:{showInCollapsed:"showInCollapsed"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["showInCollapsed"]})],n),n})();var vh=(()=>{let n=class Ld{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Ld)(v(P),v(F),v(T))};static \u0275cmp=I({type:Ld,selectors:[["ifx-spinner"]],inputs:{ariaLabelText:"ariaLabelText",inverted:"inverted",size:"size",variant:"variant"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["ariaLabelText","inverted","size","variant"]})],n),n})(),xh=(()=>{let n=class Fd{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Fd)(v(P),v(F),v(T))};static \u0275cmp=I({type:Fd,selectors:[["ifx-status"]],inputs:{border:"border",color:"color",label:"label"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["border","color","label"]})],n),n})(),Zo=(()=>{let n=class Nd{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Nd)(v(P),v(F),v(T))};static \u0275cmp=I({type:Nd,selectors:[["ifx-step"]],inputs:{complete:"complete",disabled:"disabled",error:"error",lastStep:"lastStep",stepId:"stepId",stepperState:"stepperState"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["complete","disabled","error","lastStep","stepId","stepperState"]})],n),n})(),Jo=(()=>{let n=class Rd{z;el;ifxChange=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Rd)(v(P),v(F),v(T))};static \u0275cmp=I({type:Rd,selectors:[["ifx-stepper"]],inputs:{activeStep:"activeStep",ariaCurrentText:"ariaCurrentText",ariaLabelText:"ariaLabelText",indicatorPosition:"indicatorPosition",showStepNumber:"showStepNumber",variant:"variant"},outputs:{ifxChange:"ifxChange"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["activeStep","ariaCurrentText","ariaLabelText","indicatorPosition","showStepNumber","variant"]})],n),n})(),Xo=(()=>{let n=class Pd{z;el;ifxChange=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Pd)(v(P),v(F),v(T))};static \u0275cmp=I({type:Pd,selectors:[["ifx-switch"]],inputs:{checked:"checked",disabled:"disabled",name:"name",value:"value"},outputs:{ifxChange:"ifxChange"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["checked","disabled","name","value"],methods:["isChecked","setChecked","toggle"]})],n),n})(),bh=(()=>{let n=class Vd{z;el;tabHeaderChange=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Vd)(v(P),v(F),v(T))};static \u0275cmp=I({type:Vd,selectors:[["ifx-tab"]],inputs:{disabled:"disabled",header:"header",icon:"icon",iconPosition:"iconPosition",label:"label",number:"number",positionSticky:"positionSticky",subline:"subline"},outputs:{tabHeaderChange:"tabHeaderChange"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["disabled","header","icon","iconPosition","label","number","positionSticky","subline"]})],n),n})(),yh=(()=>{let n=class qd{z;el;ifxSortChange=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||qd)(v(P),v(F),v(T))};static \u0275cmp=I({type:qd,selectors:[["ifx-table"]],inputs:{buttonRendererOptions:"buttonRendererOptions",checkboxRendererOptions:"checkboxRendererOptions",cols:"cols",columnMinWidth:"columnMinWidth",columnWidth:"columnWidth",enableSelection:"enableSelection",filterOrientation:"filterOrientation",fitColumns:"fitColumns",headline:"headline",headlineNumber:"headlineNumber",iconButtonRendererOptions:"iconButtonRendererOptions",pagination:"pagination",paginationItemsPerPage:"paginationItemsPerPage",rowHeight:"rowHeight",rows:"rows",serverPageChangeHandler:"serverPageChangeHandler",serverSidePagination:"serverSidePagination",showLoading:"showLoading",tableHeight:"tableHeight",variant:"variant"},outputs:{ifxSortChange:"ifxSortChange"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["buttonRendererOptions","checkboxRendererOptions","cols","columnMinWidth","columnWidth","enableSelection","filterOrientation","fitColumns","headline","headlineNumber","iconButtonRendererOptions","pagination","paginationItemsPerPage","rowHeight","rows","serverPageChangeHandler","serverSidePagination","showLoading","tableHeight","variant"],methods:["onBtShowLoading"]})],n),n})(),Ih=(()=>{let n=class Hd{z;el;ifxChange=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Hd)(v(P),v(F),v(T))};static \u0275cmp=I({type:Hd,selectors:[["ifx-tabs"]],inputs:{activeTabIndex:"activeTabIndex",fullWidth:"fullWidth",label:"label",number:"number",orientation:"orientation",positionSticky:"positionSticky",subline:"subline"},outputs:{ifxChange:"ifxChange"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["activeTabIndex","fullWidth","label","number","orientation","positionSticky","subline"]})],n),n})();var M=(()=>{let n=class jd{z;el;ifxInput=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||jd)(v(P),v(F),v(T))};static \u0275cmp=I({type:jd,selectors:[["ifx-text-field"]],inputs:{autocomplete:"autocomplete",caption:"caption",disabled:"disabled",error:"error",icon:"icon",internalId:"internalId",label:"label",maxlength:"maxlength",name:"name",placeholder:"placeholder",readOnly:"readOnly",required:"required",showDeleteIcon:"showDeleteIcon",size:"size",success:"success",type:"type",value:"value"},outputs:{ifxInput:"ifxInput"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["autocomplete","caption","disabled","error","icon","internalId","label","maxlength","name","placeholder","readOnly","required","showDeleteIcon","size","success","type","value"],methods:["reset"]})],n),n})(),Yo=(()=>{let n=class Bd{z;el;ifxInput=new R;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||Bd)(v(P),v(F),v(T))};static \u0275cmp=I({type:Bd,selectors:[["ifx-textarea"]],inputs:{caption:"caption",cols:"cols",disabled:"disabled",error:"error",fullWidth:"fullWidth",label:"label",maxlength:"maxlength",name:"name",placeholder:"placeholder",readOnly:"readOnly",required:"required",resize:"resize",rows:"rows",value:"value",wrap:"wrap"},outputs:{ifxInput:"ifxInput"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["caption","cols","disabled","error","fullWidth","label","maxlength","name","placeholder","readOnly","required","resize","rows","value","wrap"],methods:["reset"]})],n),n})(),Eh=(()=>{let n=class zd{z;el;constructor(i,e,r){this.z=r,i.detach(),this.el=e.nativeElement}static \u0275fac=function(e){return new(e||zd)(v(P),v(F),v(T))};static \u0275cmp=I({type:zd,selectors:[["ifx-tooltip"]],inputs:{appendToBody:"appendToBody",ariaLabelText:"ariaLabelText",header:"header",icon:"icon",position:"position",text:"text",variant:"variant"},standalone:!1,ngContentSelectors:B,decls:1,vars:0,template:function(e,r){e&1&&(V(),q(0))},encapsulation:2,changeDetection:0})};return n=H([z({inputs:["appendToBody","ariaLabelText","header","icon","position","text","variant"]})],n),n})();var Ud=(()=>{class n{el;onChange=()=>{};onTouched=()=>{};lastValue;constructor(i){this.el=i}writeValue(i){this.el.nativeElement.value=this.lastValue=i??""}handleChangeEvent(i){i!==this.lastValue&&(this.lastValue=i,this.onChange(i))}_handleBlurEvent(){this.onTouched()}registerOnChange(i){this.onChange=i}registerOnTouched(i){this.onTouched=i}setDisabledState(i){this.el.nativeElement.disabled=i}static \u0275fac=function(e){return new(e||n)(v(F))};static \u0275dir=Me({type:n,hostBindings:function(e,r){e&1&&f("focusout",function(){return r._handleBlurEvent()})}})}return n})(),Mt=(()=>{class n extends Ud{constructor(i){super(i)}writeValue(i){this.el.nativeElement.checked=this.lastValue=i??!1}static \u0275fac=function(e){return new(e||n)(v(F))};static \u0275dir=Me({type:n,selectors:[["ifx-switch"],["ifx-checkbox"]],hostBindings:function(e,r){e&1&&f("ifxChange",function(d){return r.handleChangeEvent(d.target==null?null:d.target.checked)})},standalone:!1,features:[kt([{provide:On,useExisting:Be(()=>n),multi:!0}]),Ge]})}return n})(),A=(()=>{class n extends Ud{constructor(i){super(i)}static \u0275fac=function(e){return new(e||n)(v(F))};static \u0275dir=Me({type:n,selectors:[["ifx-search-field"],["ifx-search-bar"],["ifx-text-field"],["ifx-textarea"]],hostBindings:function(e,r){e&1&&f("ifxInput",function(d){return r.handleChangeEvent(d.target==null?null:d.target.value)})},standalone:!1,features:[kt([{provide:On,useExisting:Be(()=>n),multi:!0}]),Ge]})}return n})(),Ch=(()=>{class n extends Ud{constructor(i){super(i)}writeValue(i){this.el.nativeElement.opened=this.lastValue=i??!1}static \u0275fac=function(e){return new(e||n)(v(F))};static \u0275dir=Me({type:n,selectors:[["ifx-modal","ngModel",""],["ifx-modal","formControl",""],["ifx-modal","formControlName",""]],hostBindings:function(e,r){e&1&&f("ifxOpenedChange",function(d){return r.handleChangeEvent(d.target==null?null:d.target.opened)})},standalone:!1,features:[kt([{provide:On,useExisting:Be(()=>n),multi:!0}]),Ge]})}return n})(),wh=(()=>{class n{static forRoot(){return{ngModule:n,providers:[{provide:So,useFactory:()=>Ag,multi:!0,deps:[ke,T]}]}}static \u0275fac=function(e){return new(e||n)};static \u0275mod=Ne({type:n});static \u0275inj=we({imports:[Ci]})}return n})();var $d=Lh(_h());Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(t,i){var e={};e["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[i]},e.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:e}};r["language-"+i]={pattern:/[\s\S]+/,inside:Prism.languages[i]};var a={};a[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:r},Prism.languages.insertBefore("markup","cdata",a)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(n,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;(function(n){n.languages.typescript=n.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),n.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete n.languages.typescript.parameter,delete n.languages.typescript["literal-property"];var t=n.languages.extend("typescript",{});delete t["class-name"],n.languages.typescript["class-name"].inside=t,n.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),n.languages.ts=n.languages.typescript})(Prism);var Dh={name:"angular-module-example",version:"39.26.0",scripts:{ng:"ng",dev:"wireit",build:"ng build",preview:"pnpx serve dist/angular-module-example/browser -p 4004","cicd-update-version":`sed -i 's/"workspace:\\*"/"'$PACKAGE_VERSION'"/' package.json`},private:!0,author:"Pfaff Fabian <fabian.pfaff@infineon.com>",license:"MIT",dependencies:{"@angular/common":"^20.3.0","@angular/compiler":"^20.3.0","@angular/core":"^20.3.0","@angular/forms":"^20.3.0","@angular/platform-browser":"^20.3.0","@angular/platform-server":"^20.3.0","@angular/router":"^20.3.0","@angular/ssr":"^20.3.7","@infineon/infineon-design-system-angular":"39.27.0--canary.2213.25049119606.0",express:"^5.1.0",prismjs:"^1.30.0",rxjs:"~7.8.0",tslib:"^2.3.0","zone.js":"~0.15.0"},devDependencies:{"@angular/build":"^20.3.7","@angular/cli":"^20.3.7","@angular/compiler-cli":"^20.3.0","@types/express":"^5.0.1","@types/node":"^20.17.19","@types/prismjs":"^1.26.5",typescript:"~5.9.2"},wireit:{dev:{command:"ng serve --port 3004",service:!0,dependencies:[{script:"../../packages/wrapper-angular:dev",cascade:!1}]}}};var Sh="39.27.0--canary.2213.25049119606.0";var Ko=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-accordion-example',
  templateUrl: './ifx-accordion-example.html',
  styleUrl: './ifx-accordion-example.scss',
  standalone: false
})
export class IfxAccordionExample {

  protected ariaLevelNumber = 3;
  protected autoCollapse = false;
  protected readonly iconOptions = ["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];
  protected iconIndex = 0;

  protected updateAriaLevelNumber(value: string) {
    this.ariaLevelNumber = Number(value);
  }

  protected toggleAutoCollapse() {
    this.autoCollapse = !this.autoCollapse;
  }

  protected toggleIcon() {
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
      (ifxClose)=&quot;handleClose($any($event))&quot;
      (ifxOpen)=&quot;handleOpen($any($event))&quot;
      [ariaLevelNumber]=&quot;ariaLevelNumber&quot;
      [icon]=&quot;iconOptions[iconIndex]&quot;&gt;Content for Initial Item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.&lt;/ifx-accordion-item&gt;
    &lt;ifx-accordion-item
      caption=&quot;Label&quot;
      [open]=&quot;false&quot;
      [ariaLevelNumber]=&quot;ariaLevelNumber&quot;
      [icon]=&quot;iconOptions[iconIndex]&quot;&gt;Content for Item #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.&lt;/ifx-accordion-item&gt;
    &lt;ifx-accordion-item
      caption=&quot;Label&quot;
      [open]=&quot;false&quot;
      [ariaLevelNumber]=&quot;ariaLevelNumber&quot;
      [icon]=&quot;iconOptions[iconIndex]&quot;&gt;Content for Item #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.&lt;/ifx-accordion-item&gt;
  &lt;/ifx-accordion&gt;`;ariaLevelNumber=3;autoCollapse=!1;iconOptions=["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];iconIndex=0;updateAriaLevelNumber(t){this.ariaLevelNumber=Number(t)}toggleAutoCollapse(){this.autoCollapse=!this.autoCollapse}toggleIcon(){this.iconIndex=(this.iconIndex+1)%this.iconOptions.length}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleClose(t){console.log("ifxClose:",t)}handleOpen(t){console.log("ifxOpen:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-accordion-example"]],standalone:!1,decls:41,vars:16,consts:[[3,"autoCollapse"],["caption","Label",3,"ifxClose","ifxOpen","open","ariaLevelNumber","icon"],["caption","Label",3,"open","ariaLevelNumber","icon"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","ariaLevelNumber","type","number",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-accordion",0)(1,"ifx-accordion-item",1),f("ifxClose",function(a){return e.handleClose(a)})("ifxOpen",function(a){return e.handleOpen(a)}),s(2,"Content for Initial Item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque."),o(),l(3,"ifx-accordion-item",2),s(4,"Content for Item #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque."),o(),l(5,"ifx-accordion-item",2),s(6,"Content for Item #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque."),o()(),l(7,"h3",3),s(8,"Controls"),o(),l(9,"div",4)(10,"ifx-button",5),f("click",function(){return e.toggleAutoCollapse()}),s(11,"Toggle AutoCollapse"),o(),l(12,"ifx-button",5),f("click",function(){return e.toggleIcon()}),s(13,"Toggle Icon"),o()(),l(14,"div",6)(15,"ifx-text-field",7),f("ifxInput",function(a){return e.updateAriaLevelNumber(e.getControlInputValue(a))}),o()(),l(16,"div",8)(17,"div")(18,"b"),s(19,"ariaLevelNumber:"),o(),s(20),o(),l(21,"div")(22,"b"),s(23,"autoCollapse:"),o(),s(24),o(),l(25,"div")(26,"b"),s(27,"icon:"),o(),s(28),o()(),l(29,"details",9)(30,"summary"),s(31,"View Code"),o(),l(32,"div",10)(33,"h3"),s(34,"ifx-accordion-example.ts"),o(),l(35,"pre"),b(36,"code",11),o(),l(37,"h3"),s(38,"ifx-accordion-example.html"),o(),l(39,"pre"),b(40,"code",12),o()()()),i&2&&(p("autoCollapse",e.autoCollapse),c(),p("open",!0)("ariaLevelNumber",e.ariaLevelNumber)("icon",e.iconOptions[e.iconIndex]),c(2),p("open",!1)("ariaLevelNumber",e.ariaLevelNumber)("icon",e.iconOptions[e.iconIndex]),c(2),p("open",!1)("ariaLevelNumber",e.ariaLevelNumber)("icon",e.iconOptions[e.iconIndex]),c(10),p("value",e.stringifyValue(e.ariaLevelNumber)),c(5),g(" ",e.stringifyValue(e.ariaLevelNumber)),c(4),g(" ",e.stringifyValue(e.autoCollapse)),c(4),g(" ",e.stringifyValue(e.iconOptions[e.iconIndex])),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[Og,Lg,k,M,A],encapsulation:2})};var ea=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-action-list-example',
  templateUrl: './ifx-action-list-example.html',
  styleUrl: './ifx-action-list-example.scss',
  standalone: false
})
export class IfxActionListExample {

  protected disabled = false;
  protected value = "";
  protected itemTitle = "Dashboard";
  protected description = "View your main dashboard";
  protected listAriaLabel = "Navigation menu";
  protected itemAriaLabel = "Navigation item";

  protected toggleDisabled() {
    this.disabled = !this.disabled;
  }

  protected updateValue(value: string) {
    this.value = value;
  }

  protected updateItemTitle(value: string) {
    this.itemTitle = value;
  }

  protected updateDescription(value: string) {
    this.description = value;
  }

  protected updateListAriaLabel(value: string) {
    this.listAriaLabel = value;
  }

  protected updateItemAriaLabel(value: string) {
    this.itemAriaLabel = value;
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

  protected handleConsoleError(event: CustomEvent) {
    console.log('consoleError:', event);
    // Add your handler logic here
  }

}`;htmlCode=`  &lt;ifx-action-list [listAriaLabel]=&quot;listAriaLabel&quot;&gt;
    &lt;ifx-action-list-item
      (ifxActionListItemClick)=&quot;handleActionListItemClick($any($event))&quot;
      (consoleError)=&quot;handleConsoleError($any($event))&quot;
      [itemTitle]=&quot;itemTitle&quot;
      [description]=&quot;description&quot;
      [value]=&quot;value&quot;
      [itemAriaLabel]=&quot;itemAriaLabel&quot;&gt;
      &lt;ifx-icon
        slot=&quot;trailing&quot;
        icon=&quot;chevron-right-16&quot;&gt;&lt;/ifx-icon&gt;
    &lt;/ifx-action-list-item&gt;
    &lt;ifx-action-list-item
      [itemTitle]=&quot;itemTitle&quot;
      [value]=&quot;value&quot;
      [itemAriaLabel]=&quot;itemAriaLabel&quot;&gt;
      &lt;ifx-icon
        slot=&quot;trailing&quot;
        icon=&quot;chevron-right-16&quot;&gt;&lt;/ifx-icon&gt;
    &lt;/ifx-action-list-item&gt;
    &lt;ifx-action-list-item
      [itemTitle]=&quot;itemTitle&quot;
      [description]=&quot;description&quot;
      [value]=&quot;value&quot;
      [disabled]=&quot;disabled&quot;
      [itemAriaLabel]=&quot;itemAriaLabel&quot;&gt;
      &lt;ifx-icon
        slot=&quot;trailing&quot;
        icon=&quot;chevron-right-16&quot;&gt;&lt;/ifx-icon&gt;
    &lt;/ifx-action-list-item&gt;
    &lt;ifx-action-list-item
      [itemTitle]=&quot;itemTitle&quot;
      [description]=&quot;description&quot;
      [value]=&quot;value&quot;
      [itemAriaLabel]=&quot;itemAriaLabel&quot;&gt;
      &lt;ifx-icon
        slot=&quot;trailing&quot;
        icon=&quot;chevron-right-16&quot;&gt;&lt;/ifx-icon&gt;
    &lt;/ifx-action-list-item&gt;
  &lt;/ifx-action-list&gt;`;disabled=!1;value="";itemTitle="Dashboard";description="View your main dashboard";listAriaLabel="Navigation menu";itemAriaLabel="Navigation item";toggleDisabled(){this.disabled=!this.disabled}updateValue(t){this.value=t}updateItemTitle(t){this.itemTitle=t}updateDescription(t){this.description=t}updateListAriaLabel(t){this.listAriaLabel=t}updateItemAriaLabel(t){this.itemAriaLabel=t}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleActionListItemClick(t){console.log("ifxActionListItemClick:",t)}handleConsoleError(t){console.log("consoleError:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-action-list-example"]],standalone:!1,decls:57,vars:30,consts:[[3,"listAriaLabel"],[3,"ifxActionListItemClick","consoleError","itemTitle","description","value","itemAriaLabel"],["slot","trailing","icon","chevron-right-16"],[3,"itemTitle","value","itemAriaLabel"],[3,"itemTitle","description","value","disabled","itemAriaLabel"],[3,"itemTitle","description","value","itemAriaLabel"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","value","type","text",3,"ifxInput","value"],["label","itemTitle","type","text",3,"ifxInput","value"],["label","description","type","text",3,"ifxInput","value"],["label","listAriaLabel","type","text",3,"ifxInput","value"],["label","itemAriaLabel","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-action-list",0)(1,"ifx-action-list-item",1),f("ifxActionListItemClick",function(a){return e.handleActionListItemClick(a)})("consoleError",function(a){return e.handleConsoleError(a)}),b(2,"ifx-icon",2),o(),l(3,"ifx-action-list-item",3),b(4,"ifx-icon",2),o(),l(5,"ifx-action-list-item",4),b(6,"ifx-icon",2),o(),l(7,"ifx-action-list-item",5),b(8,"ifx-icon",2),o()(),l(9,"h3",6),s(10,"Controls"),o(),l(11,"div",7)(12,"ifx-button",8),f("click",function(){return e.toggleDisabled()}),s(13,"Toggle Disabled"),o()(),l(14,"div",9)(15,"ifx-text-field",10),f("ifxInput",function(a){return e.updateValue(e.getControlInputValue(a))}),o(),l(16,"ifx-text-field",11),f("ifxInput",function(a){return e.updateItemTitle(e.getControlInputValue(a))}),o(),l(17,"ifx-text-field",12),f("ifxInput",function(a){return e.updateDescription(e.getControlInputValue(a))}),o(),l(18,"ifx-text-field",13),f("ifxInput",function(a){return e.updateListAriaLabel(e.getControlInputValue(a))}),o(),l(19,"ifx-text-field",14),f("ifxInput",function(a){return e.updateItemAriaLabel(e.getControlInputValue(a))}),o()(),l(20,"div",15)(21,"div")(22,"b"),s(23,"disabled:"),o(),s(24),o(),l(25,"div")(26,"b"),s(27,"value:"),o(),s(28),o(),l(29,"div")(30,"b"),s(31,"itemTitle:"),o(),s(32),o(),l(33,"div")(34,"b"),s(35,"description:"),o(),s(36),o(),l(37,"div")(38,"b"),s(39,"listAriaLabel:"),o(),s(40),o(),l(41,"div")(42,"b"),s(43,"itemAriaLabel:"),o(),s(44),o()(),l(45,"details",16)(46,"summary"),s(47,"View Code"),o(),l(48,"div",17)(49,"h3"),s(50,"ifx-action-list-example.ts"),o(),l(51,"pre"),b(52,"code",18),o(),l(53,"h3"),s(54,"ifx-action-list-example.html"),o(),l(55,"pre"),b(56,"code",19),o()()()),i&2&&(p("listAriaLabel",e.listAriaLabel),c(),p("itemTitle",e.itemTitle)("description",e.description)("value",e.value)("itemAriaLabel",e.itemAriaLabel),c(2),p("itemTitle",e.itemTitle)("value",e.value)("itemAriaLabel",e.itemAriaLabel),c(2),p("itemTitle",e.itemTitle)("description",e.description)("value",e.value)("disabled",e.disabled)("itemAriaLabel",e.itemAriaLabel),c(2),p("itemTitle",e.itemTitle)("description",e.description)("value",e.value)("itemAriaLabel",e.itemAriaLabel),c(8),p("value",e.stringifyValue(e.value)),c(),p("value",e.stringifyValue(e.itemTitle)),c(),p("value",e.stringifyValue(e.description)),c(),p("value",e.stringifyValue(e.listAriaLabel)),c(),p("value",e.stringifyValue(e.itemAriaLabel)),c(5),g(" ",e.stringifyValue(e.disabled)),c(4),g(" ",e.stringifyValue(e.value)),c(4),g(" ",e.stringifyValue(e.itemTitle)),c(4),g(" ",e.stringifyValue(e.description)),c(4),g(" ",e.stringifyValue(e.listAriaLabel)),c(4),g(" ",e.stringifyValue(e.itemAriaLabel)),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[Fg,Ng,k,Fn,M,A],encapsulation:2})};var ta=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-alert-example',
  templateUrl: './ifx-alert-example.html',
  styleUrl: './ifx-alert-example.scss',
  standalone: false
})
export class IfxAlertExample {

  protected label = "Attention! This is an alert message \u2014 check it out!";
  protected readonly variantOptions = ["primary","success","danger","warning"];
  protected variantIndex = 0;
  protected readonly iconOptions = ["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];
  protected iconIndex = 0;
  protected closable = true;

  protected updateLabel(value: string) {
    this.label = value;
  }

  protected toggleVariant() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
  }

  protected toggleIcon() {
    this.iconIndex = (this.iconIndex + 1) % this.iconOptions.length;
  }

  protected toggleClosable() {
    this.closable = !this.closable;
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
    aria-live-text=&quot;assertive&quot;
    (ifxClose)=&quot;handleClose($any($event))&quot;
    [variant]=&quot;variantOptions[variantIndex]&quot;
    [icon]=&quot;iconOptions[iconIndex]&quot;
    [closable]=&quot;closable&quot;&gt;
    {{ label }}
  &lt;/ifx-alert&gt;`;label="Attention! This is an alert message \u2014 check it out!";variantOptions=["primary","success","danger","warning"];variantIndex=0;iconOptions=["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];iconIndex=0;closable=!0;updateLabel(t){this.label=t}toggleVariant(){this.variantIndex=(this.variantIndex+1)%this.variantOptions.length}toggleIcon(){this.iconIndex=(this.iconIndex+1)%this.iconOptions.length}toggleClosable(){this.closable=!this.closable}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleClose(t){console.log("ifxClose:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-alert-example"]],standalone:!1,decls:42,vars:11,consts:[["aria-live-text","assertive",3,"ifxClose","variant","icon","closable"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","label","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-alert",0),f("ifxClose",function(a){return e.handleClose(a)}),s(1),o(),l(2,"h3",1),s(3,"Controls"),o(),l(4,"div",2)(5,"ifx-button",3),f("click",function(){return e.toggleVariant()}),s(6,"Toggle Variant"),o(),l(7,"ifx-button",3),f("click",function(){return e.toggleIcon()}),s(8,"Toggle Icon"),o(),l(9,"ifx-button",3),f("click",function(){return e.toggleClosable()}),s(10,"Toggle Closable"),o()(),l(11,"div",4)(12,"ifx-text-field",5),f("ifxInput",function(a){return e.updateLabel(e.getControlInputValue(a))}),o()(),l(13,"div",6)(14,"div")(15,"b"),s(16,"label:"),o(),s(17),o(),l(18,"div")(19,"b"),s(20,"variant:"),o(),s(21),o(),l(22,"div")(23,"b"),s(24,"icon:"),o(),s(25),o(),l(26,"div")(27,"b"),s(28,"closable:"),o(),s(29),o()(),l(30,"details",7)(31,"summary"),s(32,"View Code"),o(),l(33,"div",8)(34,"h3"),s(35,"ifx-alert-example.ts"),o(),l(36,"pre"),b(37,"code",9),o(),l(38,"h3"),s(39,"ifx-alert-example.html"),o(),l(40,"pre"),b(41,"code",10),o()()()),i&2&&(p("variant",e.variantOptions[e.variantIndex])("icon",e.iconOptions[e.iconIndex])("closable",e.closable),c(),g(" ",e.label," "),c(11),p("value",e.stringifyValue(e.label)),c(5),g(" ",e.stringifyValue(e.label)),c(4),g(" ",e.stringifyValue(e.variantOptions[e.variantIndex])),c(4),g(" ",e.stringifyValue(e.iconOptions[e.iconIndex])),c(4),g(" ",e.stringifyValue(e.closable)),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[Pg,k,M,A],encapsulation:2})};var na=class n{tsCode=`import { Component } from '@angular/core';
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

  protected toggleDivider() {
    this.divider = !this.divider;
  }

  protected toggleVariant() {
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
    [variant]=&quot;variantOptions[variantIndex]&quot;&gt;&lt;/ifx-ai-label&gt;`;divider=!0;variantOptions=["label","icon"];variantIndex=0;toggleDivider(){this.divider=!this.divider}toggleVariant(){this.variantIndex=(this.variantIndex+1)%this.variantOptions.length}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-ai-label-example"]],standalone:!1,decls:29,vars:6,consts:[[3,"divider","variant"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(b(0,"ifx-ai-label",0),l(1,"h3",1),s(2,"Controls"),o(),l(3,"div",2)(4,"ifx-button",3),f("click",function(){return e.toggleDivider()}),s(5,"Toggle Divider"),o(),l(6,"ifx-button",3),f("click",function(){return e.toggleVariant()}),s(7,"Toggle Variant"),o()(),l(8,"div",4)(9,"div")(10,"b"),s(11,"divider:"),o(),s(12),o(),l(13,"div")(14,"b"),s(15,"variant:"),o(),s(16),o()(),l(17,"details",5)(18,"summary"),s(19,"View Code"),o(),l(20,"div",6)(21,"h3"),s(22,"ifx-ai-label-example.ts"),o(),l(23,"pre"),b(24,"code",7),o(),l(25,"h3"),s(26,"ifx-ai-label-example.html"),o(),l(27,"pre"),b(28,"code",8),o()()()),i&2&&(p("divider",e.divider)("variant",e.variantOptions[e.variantIndex]),c(12),g(" ",e.stringifyValue(e.divider)),c(4),g(" ",e.stringifyValue(e.variantOptions[e.variantIndex])),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[Rg,k],encapsulation:2})};var ia=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-button-example',
  templateUrl: './ifx-button-example.html',
  styleUrl: './ifx-button-example.scss',
  standalone: false
})
export class IfxButtonExample {

  protected label = "Button";
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
  protected href = false;
  protected readonly targetOptions = ["_blank","_self","_parent"];
  protected targetIndex = 0;

  protected updateLabel(value: string) {
    this.label = value;
  }

  protected toggleVariant() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
  }

  protected updateAriaLabelText(value: string) {
    this.ariaLabelText = value;
  }

  protected toggleTheme() {
    this.themeIndex = (this.themeIndex + 1) % this.themeOptions.length;
  }

  protected toggleType() {
    this.typeIndex = (this.typeIndex + 1) % this.typeOptions.length;
  }

  protected toggleSize() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected toggleFullWidth() {
    this.fullWidth = !this.fullWidth;
  }

  protected toggleDisabled() {
    this.disabled = !this.disabled;
  }

  protected toggleHref() {
    this.href = !this.href;
  }

  protected toggleTarget() {
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
    {{ label }}
  &lt;/ifx-button&gt;`;label="Button";variantOptions=["primary","secondary","tertiary"];variantIndex=0;ariaLabelText="Button";themeOptions=["default","danger","inverse"];themeIndex=0;typeOptions=["button","submit","reset"];typeIndex=0;sizeOptions=["xs","s","m","l"];sizeIndex=2;fullWidth=!1;disabled=!1;href=!1;targetOptions=["_blank","_self","_parent"];targetIndex=0;updateLabel(t){this.label=t}toggleVariant(){this.variantIndex=(this.variantIndex+1)%this.variantOptions.length}updateAriaLabelText(t){this.ariaLabelText=t}toggleTheme(){this.themeIndex=(this.themeIndex+1)%this.themeOptions.length}toggleType(){this.typeIndex=(this.typeIndex+1)%this.typeOptions.length}toggleSize(){this.sizeIndex=(this.sizeIndex+1)%this.sizeOptions.length}toggleFullWidth(){this.fullWidth=!this.fullWidth}toggleDisabled(){this.disabled=!this.disabled}toggleHref(){this.href=!this.href}toggleTarget(){this.targetIndex=(this.targetIndex+1)%this.targetOptions.length}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-button-example"]],standalone:!1,decls:77,vars:24,consts:[[3,"type","ariaLabelText","variant","size","target","theme","fullWidth","disabled","href"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","label","type","text",3,"ifxInput","value"],["label","ariaLabelText","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-button",0),s(1),o(),l(2,"h3",1),s(3,"Controls"),o(),l(4,"div",2)(5,"ifx-button",3),f("click",function(){return e.toggleVariant()}),s(6,"Toggle Variant"),o(),l(7,"ifx-button",3),f("click",function(){return e.toggleTheme()}),s(8,"Toggle Theme"),o(),l(9,"ifx-button",3),f("click",function(){return e.toggleType()}),s(10,"Toggle Type"),o(),l(11,"ifx-button",3),f("click",function(){return e.toggleSize()}),s(12,"Toggle Size"),o(),l(13,"ifx-button",3),f("click",function(){return e.toggleFullWidth()}),s(14,"Toggle FullWidth"),o(),l(15,"ifx-button",3),f("click",function(){return e.toggleDisabled()}),s(16,"Toggle Disabled"),o(),l(17,"ifx-button",3),f("click",function(){return e.toggleHref()}),s(18,"Toggle Href"),o(),l(19,"ifx-button",3),f("click",function(){return e.toggleTarget()}),s(20,"Toggle Target"),o()(),l(21,"div",4)(22,"ifx-text-field",5),f("ifxInput",function(a){return e.updateLabel(e.getControlInputValue(a))}),o(),l(23,"ifx-text-field",6),f("ifxInput",function(a){return e.updateAriaLabelText(e.getControlInputValue(a))}),o()(),l(24,"div",7)(25,"div")(26,"b"),s(27,"label:"),o(),s(28),o(),l(29,"div")(30,"b"),s(31,"variant:"),o(),s(32),o(),l(33,"div")(34,"b"),s(35,"ariaLabelText:"),o(),s(36),o(),l(37,"div")(38,"b"),s(39,"theme:"),o(),s(40),o(),l(41,"div")(42,"b"),s(43,"type:"),o(),s(44),o(),l(45,"div")(46,"b"),s(47,"size:"),o(),s(48),o(),l(49,"div")(50,"b"),s(51,"fullWidth:"),o(),s(52),o(),l(53,"div")(54,"b"),s(55,"disabled:"),o(),s(56),o(),l(57,"div")(58,"b"),s(59,"href:"),o(),s(60),o(),l(61,"div")(62,"b"),s(63,"target:"),o(),s(64),o()(),l(65,"details",8)(66,"summary"),s(67,"View Code"),o(),l(68,"div",9)(69,"h3"),s(70,"ifx-button-example.ts"),o(),l(71,"pre"),b(72,"code",10),o(),l(73,"h3"),s(74,"ifx-button-example.html"),o(),l(75,"pre"),b(76,"code",11),o()()()),i&2&&(p("type",e.typeOptions[e.typeIndex])("ariaLabelText",e.ariaLabelText)("variant",e.variantOptions[e.variantIndex])("size",e.sizeOptions[e.sizeIndex])("target",e.targetOptions[e.targetIndex])("theme",e.themeOptions[e.themeIndex])("fullWidth",e.fullWidth)("disabled",e.disabled)("href",e.href),c(),g(" ",e.label," "),c(21),p("value",e.stringifyValue(e.label)),c(),p("value",e.stringifyValue(e.ariaLabelText)),c(5),g(" ",e.stringifyValue(e.label)),c(4),g(" ",e.stringifyValue(e.variantOptions[e.variantIndex])),c(4),g(" ",e.stringifyValue(e.ariaLabelText)),c(4),g(" ",e.stringifyValue(e.themeOptions[e.themeIndex])),c(4),g(" ",e.stringifyValue(e.typeOptions[e.typeIndex])),c(4),g(" ",e.stringifyValue(e.sizeOptions[e.sizeIndex])),c(4),g(" ",e.stringifyValue(e.fullWidth)),c(4),g(" ",e.stringifyValue(e.disabled)),c(4),g(" ",e.stringifyValue(e.href)),c(4),g(" ",e.stringifyValue(e.targetOptions[e.targetIndex])),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,M,A],encapsulation:2})};var ra=class n{tsCode=`import { Component } from '@angular/core';
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

  protected toggleDirection() {
    this.directionIndex = (this.directionIndex + 1) % this.directionOptions.length;
  }

  protected updateAriaLabelText(value: string) {
    this.ariaLabelText = value;
  }

  protected togglePosition() {
    this.positionIndex = (this.positionIndex + 1) % this.positionOptions.length;
  }

  protected updateHref(value: string) {
    this.href = value;
  }

  protected toggleTarget() {
    this.targetIndex = (this.targetIndex + 1) % this.targetOptions.length;
  }

  protected updateSrc(value: string) {
    this.src = value;
  }

  protected updateAlt(value: string) {
    this.alt = value;
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
    [ariaLabelText]=&quot;ariaLabelText&quot;&gt;
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
  &lt;/ifx-card&gt;`;directionOptions=["horizontal","vertical"];directionIndex=1;ariaLabelText="Card";positionOptions=["left","right"];positionIndex=1;href="";targetOptions=["_blank","_self","_parent"];targetIndex=0;src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg";alt="Coffee";toggleDirection(){this.directionIndex=(this.directionIndex+1)%this.directionOptions.length}updateAriaLabelText(t){this.ariaLabelText=t}togglePosition(){this.positionIndex=(this.positionIndex+1)%this.positionOptions.length}updateHref(t){this.href=t}toggleTarget(){this.targetIndex=(this.targetIndex+1)%this.targetOptions.length}updateSrc(t){this.src=t}updateAlt(t){this.alt=t}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleImgPosition(t){console.log("imgPosition:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-card-example"]],standalone:!1,decls:68,vars:20,consts:[["aria-label","",3,"direction","href","target","ariaLabelText"],["slot","img",3,"imgPosition","position","src","alt"],[3,"imgPosition"],["slot","buttons",3,"imgPosition"],["variant","primary"],["variant","secondary"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","ariaLabelText","type","text",3,"ifxInput","value"],["label","href","type","text",3,"ifxInput","value"],["label","src","type","text",3,"ifxInput","value"],["label","alt","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-card",0)(1,"ifx-card-image",1),f("imgPosition",function(a){return e.handleImgPosition(a)}),o(),l(2,"ifx-card-overline",2),f("imgPosition",function(a){return e.handleImgPosition(a)}),s(3,"Overline"),o(),l(4,"ifx-card-headline",2),f("imgPosition",function(a){return e.handleImgPosition(a)}),s(5,"Headline"),o(),l(6,"ifx-card-text",2),f("imgPosition",function(a){return e.handleImgPosition(a)}),s(7,"Some quick example text to build on the card title and make up the bulk of the card's content."),o(),l(8,"ifx-card-links",3),f("imgPosition",function(a){return e.handleImgPosition(a)}),l(9,"ifx-button",4),s(10,"Button"),o(),l(11,"ifx-button",5),s(12,"Button"),o()()(),l(13,"h3",6),s(14,"Controls"),o(),l(15,"div",7)(16,"ifx-button",8),f("click",function(){return e.toggleDirection()}),s(17,"Toggle Direction"),o(),l(18,"ifx-button",8),f("click",function(){return e.togglePosition()}),s(19,"Toggle Position"),o(),l(20,"ifx-button",8),f("click",function(){return e.toggleTarget()}),s(21,"Toggle Target"),o()(),l(22,"div",9)(23,"ifx-text-field",10),f("ifxInput",function(a){return e.updateAriaLabelText(e.getControlInputValue(a))}),o(),l(24,"ifx-text-field",11),f("ifxInput",function(a){return e.updateHref(e.getControlInputValue(a))}),o(),l(25,"ifx-text-field",12),f("ifxInput",function(a){return e.updateSrc(e.getControlInputValue(a))}),o(),l(26,"ifx-text-field",13),f("ifxInput",function(a){return e.updateAlt(e.getControlInputValue(a))}),o()(),l(27,"div",14)(28,"div")(29,"b"),s(30,"direction:"),o(),s(31),o(),l(32,"div")(33,"b"),s(34,"ariaLabelText:"),o(),s(35),o(),l(36,"div")(37,"b"),s(38,"position:"),o(),s(39),o(),l(40,"div")(41,"b"),s(42,"href:"),o(),s(43),o(),l(44,"div")(45,"b"),s(46,"target:"),o(),s(47),o(),l(48,"div")(49,"b"),s(50,"src:"),o(),s(51),o(),l(52,"div")(53,"b"),s(54,"alt:"),o(),s(55),o()(),l(56,"details",15)(57,"summary"),s(58,"View Code"),o(),l(59,"div",16)(60,"h3"),s(61,"ifx-card-example.ts"),o(),l(62,"pre"),b(63,"code",17),o(),l(64,"h3"),s(65,"ifx-card-example.html"),o(),l(66,"pre"),b(67,"code",18),o()()()),i&2&&(p("direction",e.directionOptions[e.directionIndex])("href",e.href)("target",e.targetOptions[e.targetIndex])("ariaLabelText",e.ariaLabelText),c(),p("position",e.positionOptions[e.positionIndex])("src",e.src)("alt",e.alt),c(22),p("value",e.stringifyValue(e.ariaLabelText)),c(),p("value",e.stringifyValue(e.href)),c(),p("value",e.stringifyValue(e.src)),c(),p("value",e.stringifyValue(e.alt)),c(5),g(" ",e.stringifyValue(e.directionOptions[e.directionIndex])),c(4),g(" ",e.stringifyValue(e.ariaLabelText)),c(4),g(" ",e.stringifyValue(e.positionOptions[e.positionIndex])),c(4),g(" ",e.stringifyValue(e.href)),c(4),g(" ",e.stringifyValue(e.targetOptions[e.targetIndex])),c(4),g(" ",e.stringifyValue(e.src)),c(4),g(" ",e.stringifyValue(e.alt)),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,qg,Hg,jg,Bg,zg,Ug,M,A],encapsulation:2})};var oa=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-checkbox-example',
  templateUrl: './ifx-checkbox-example.html',
  styleUrl: './ifx-checkbox-example.scss',
  standalone: false
})
export class IfxCheckboxExample {

  protected label = "Text";
  protected error = false;
  protected disabled = false;
  protected checked = false;
  protected indeterminate = false;
  protected readonly sizeOptions = ["s","m"];
  protected sizeIndex = 0;
  protected name = "checkbox";

  protected updateLabel(value: string) {
    this.label = value;
  }

  protected toggleError() {
    this.error = !this.error;
  }

  protected toggleDisabled() {
    this.disabled = !this.disabled;
  }

  protected toggleChecked() {
    this.checked = !this.checked;
  }

  protected toggleIndeterminate() {
    this.indeterminate = !this.indeterminate;
  }

  protected toggleSize() {
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
    [name]=&quot;name&quot;&gt;
    {{ label }}
  &lt;/ifx-checkbox&gt;`;label="Text";error=!1;disabled=!1;checked=!1;indeterminate=!1;sizeOptions=["s","m"];sizeIndex=0;name="checkbox";updateLabel(t){this.label=t}toggleError(){this.error=!this.error}toggleDisabled(){this.disabled=!this.disabled}toggleChecked(){this.checked=!this.checked}toggleIndeterminate(){this.indeterminate=!this.indeterminate}toggleSize(){this.sizeIndex=(this.sizeIndex+1)%this.sizeOptions.length}updateName(t){this.name=t}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleChange(t){console.log("ifxChange:",t)}handleError(t){console.log("ifxError:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-checkbox-example"]],standalone:!1,decls:59,vars:18,consts:[[3,"ifxChange","ifxError","error","disabled","checked","size","indeterminate","name"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","label","type","text",3,"ifxInput","value"],["label","name","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-checkbox",0),f("ifxChange",function(a){return e.handleChange(a)})("ifxError",function(a){return e.handleError(a)}),s(1),o(),l(2,"h3",1),s(3,"Controls"),o(),l(4,"div",2)(5,"ifx-button",3),f("click",function(){return e.toggleError()}),s(6,"Toggle Error"),o(),l(7,"ifx-button",3),f("click",function(){return e.toggleDisabled()}),s(8,"Toggle Disabled"),o(),l(9,"ifx-button",3),f("click",function(){return e.toggleChecked()}),s(10,"Toggle Checked"),o(),l(11,"ifx-button",3),f("click",function(){return e.toggleIndeterminate()}),s(12,"Toggle Indeterminate"),o(),l(13,"ifx-button",3),f("click",function(){return e.toggleSize()}),s(14,"Toggle Size"),o()(),l(15,"div",4)(16,"ifx-text-field",5),f("ifxInput",function(a){return e.updateLabel(e.getControlInputValue(a))}),o(),l(17,"ifx-text-field",6),f("ifxInput",function(a){return e.updateName(e.getControlInputValue(a))}),o()(),l(18,"div",7)(19,"div")(20,"b"),s(21,"label:"),o(),s(22),o(),l(23,"div")(24,"b"),s(25,"error:"),o(),s(26),o(),l(27,"div")(28,"b"),s(29,"disabled:"),o(),s(30),o(),l(31,"div")(32,"b"),s(33,"checked:"),o(),s(34),o(),l(35,"div")(36,"b"),s(37,"indeterminate:"),o(),s(38),o(),l(39,"div")(40,"b"),s(41,"size:"),o(),s(42),o(),l(43,"div")(44,"b"),s(45,"name:"),o(),s(46),o()(),l(47,"details",8)(48,"summary"),s(49,"View Code"),o(),l(50,"div",9)(51,"h3"),s(52,"ifx-checkbox-example.ts"),o(),l(53,"pre"),b(54,"code",10),o(),l(55,"h3"),s(56,"ifx-checkbox-example.html"),o(),l(57,"pre"),b(58,"code",11),o()()()),i&2&&(p("error",e.error)("disabled",e.disabled)("checked",e.checked)("size",e.sizeOptions[e.sizeIndex])("indeterminate",e.indeterminate)("name",e.name),c(),g(" ",e.label," "),c(15),p("value",e.stringifyValue(e.label)),c(),p("value",e.stringifyValue(e.name)),c(5),g(" ",e.stringifyValue(e.label)),c(4),g(" ",e.stringifyValue(e.error)),c(4),g(" ",e.stringifyValue(e.disabled)),c(4),g(" ",e.stringifyValue(e.checked)),c(4),g(" ",e.stringifyValue(e.indeterminate)),c(4),g(" ",e.stringifyValue(e.sizeOptions[e.sizeIndex])),c(4),g(" ",e.stringifyValue(e.name)),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,Ln,M,Mt,A],encapsulation:2})};var aa=class n{tsCode=`import { Component } from '@angular/core';
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

  protected toggleAlignment() {
    this.alignmentIndex = (this.alignmentIndex + 1) % this.alignmentOptions.length;
  }

  protected toggleSize() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected toggleShowGroupLabel() {
    this.showGroupLabel = !this.showGroupLabel;
  }

  protected updateGroupLabelText(value: string) {
    this.groupLabelText = value;
  }

  protected toggleShowCaption() {
    this.showCaption = !this.showCaption;
  }

  protected updateCaptionText(value: string) {
    this.captionText = value;
  }

  protected toggleShowCaptionIcon() {
    this.showCaptionIcon = !this.showCaptionIcon;
  }

  protected toggleRequired() {
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
  &lt;/ifx-checkbox-group&gt;`;alignmentOptions=["vertical","horizontal"];alignmentIndex=0;sizeOptions=["s","m"];sizeIndex=1;showGroupLabel=!1;groupLabelText="Group Label";showCaption=!1;captionText="Caption text, description, error notification";showCaptionIcon=!1;required=!1;toggleAlignment(){this.alignmentIndex=(this.alignmentIndex+1)%this.alignmentOptions.length}toggleSize(){this.sizeIndex=(this.sizeIndex+1)%this.sizeOptions.length}toggleShowGroupLabel(){this.showGroupLabel=!this.showGroupLabel}updateGroupLabelText(t){this.groupLabelText=t}toggleShowCaption(){this.showCaption=!this.showCaption}updateCaptionText(t){this.captionText=t}toggleShowCaptionIcon(){this.showCaptionIcon=!this.showCaptionIcon}toggleRequired(){this.required=!this.required}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleChange(t){console.log("ifxChange:",t)}handleError(t){console.log("ifxError:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-checkbox-group-example"]],standalone:!1,decls:70,vars:23,consts:[[3,"alignment","groupLabelText","captionText","size","showGroupLabel","showCaption","showCaptionIcon","required"],["value","0",3,"size"],["value","1",3,"size"],["value","2",3,"size"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","groupLabelText","type","text",3,"ifxInput","value"],["label","captionText","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-checkbox-group",0)(1,"ifx-checkbox",1),s(2,"Option 0"),o(),l(3,"ifx-checkbox",2),s(4,"Option 1"),o(),l(5,"ifx-checkbox",3),s(6,"Option 2"),o()(),l(7,"h3",4),s(8,"Controls"),o(),l(9,"div",5)(10,"ifx-button",6),f("click",function(){return e.toggleAlignment()}),s(11,"Toggle Alignment"),o(),l(12,"ifx-button",6),f("click",function(){return e.toggleSize()}),s(13,"Toggle Size"),o(),l(14,"ifx-button",6),f("click",function(){return e.toggleShowGroupLabel()}),s(15,"Toggle ShowGroupLabel"),o(),l(16,"ifx-button",6),f("click",function(){return e.toggleShowCaption()}),s(17,"Toggle ShowCaption"),o(),l(18,"ifx-button",6),f("click",function(){return e.toggleShowCaptionIcon()}),s(19,"Toggle ShowCaptionIcon"),o(),l(20,"ifx-button",6),f("click",function(){return e.toggleRequired()}),s(21,"Toggle Required"),o()(),l(22,"div",7)(23,"ifx-text-field",8),f("ifxInput",function(a){return e.updateGroupLabelText(e.getControlInputValue(a))}),o(),l(24,"ifx-text-field",9),f("ifxInput",function(a){return e.updateCaptionText(e.getControlInputValue(a))}),o()(),l(25,"div",10)(26,"div")(27,"b"),s(28,"alignment:"),o(),s(29),o(),l(30,"div")(31,"b"),s(32,"size:"),o(),s(33),o(),l(34,"div")(35,"b"),s(36,"showGroupLabel:"),o(),s(37),o(),l(38,"div")(39,"b"),s(40,"groupLabelText:"),o(),s(41),o(),l(42,"div")(43,"b"),s(44,"showCaption:"),o(),s(45),o(),l(46,"div")(47,"b"),s(48,"captionText:"),o(),s(49),o(),l(50,"div")(51,"b"),s(52,"showCaptionIcon:"),o(),s(53),o(),l(54,"div")(55,"b"),s(56,"required:"),o(),s(57),o()(),l(58,"details",11)(59,"summary"),s(60,"View Code"),o(),l(61,"div",12)(62,"h3"),s(63,"ifx-checkbox-group-example.ts"),o(),l(64,"pre"),b(65,"code",13),o(),l(66,"h3"),s(67,"ifx-checkbox-group-example.html"),o(),l(68,"pre"),b(69,"code",14),o()()()),i&2&&(p("alignment",e.alignmentOptions[e.alignmentIndex])("groupLabelText",e.groupLabelText)("captionText",e.captionText)("size",e.sizeOptions[e.sizeIndex])("showGroupLabel",e.showGroupLabel)("showCaption",e.showCaption)("showCaptionIcon",e.showCaptionIcon)("required",e.required),c(),p("size",e.sizeOptions[e.sizeIndex]),c(2),p("size",e.sizeOptions[e.sizeIndex]),c(2),p("size",e.sizeOptions[e.sizeIndex]),c(18),p("value",e.stringifyValue(e.groupLabelText)),c(),p("value",e.stringifyValue(e.captionText)),c(5),g(" ",e.stringifyValue(e.alignmentOptions[e.alignmentIndex])),c(4),g(" ",e.stringifyValue(e.sizeOptions[e.sizeIndex])),c(4),g(" ",e.stringifyValue(e.showGroupLabel)),c(4),g(" ",e.stringifyValue(e.groupLabelText)),c(4),g(" ",e.stringifyValue(e.showCaption)),c(4),g(" ",e.stringifyValue(e.captionText)),c(4),g(" ",e.stringifyValue(e.showCaptionIcon)),c(4),g(" ",e.stringifyValue(e.required)),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,Ln,$g,M,Mt,A],encapsulation:2})};var sa=class n{tsCode=`import { Component } from '@angular/core';
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

  protected toggleSize() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected toggleVariant() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
  }

  protected toggleTheme() {
    this.themeIndex = (this.themeIndex + 1) % this.themeOptions.length;
  }

  protected toggleReadOnly() {
    this.readOnly = !this.readOnly;
  }

  protected toggleIcon() {
    this.iconIndex = (this.iconIndex + 1) % this.iconOptions.length;
  }

  protected toggleDisabled() {
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
    [disabled]=&quot;disabled&quot;
    [value]=&quot;value&quot;&gt;
    &lt;ifx-chip-item
      (ifxChange)=&quot;handleChange($any($event))&quot;
      (ifxChipItemSelect)=&quot;handleChipItemSelect($any($event))&quot;
      [value]=&quot;value&quot;&gt;Item Label 1&lt;/ifx-chip-item&gt;
    &lt;ifx-chip-item [value]=&quot;value&quot;&gt;Item Label 2&lt;/ifx-chip-item&gt;
    &lt;ifx-chip-item [value]=&quot;value&quot;&gt;Item Label 3&lt;/ifx-chip-item&gt;
    &lt;ifx-chip-item [value]=&quot;value&quot;&gt;Item Label 4&lt;/ifx-chip-item&gt;
  &lt;/ifx-chip&gt;`;placeholder="Label";sizeOptions=["small","medium","large"];sizeIndex=1;variantOptions=["single","multi"];variantIndex=0;themeOptions=["outlined","filled-light","filled-dark"];themeIndex=0;readOnly=!1;iconOptions=["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];iconIndex=0;disabled=!1;value="Item Value";updatePlaceholder(t){this.placeholder=t}toggleSize(){this.sizeIndex=(this.sizeIndex+1)%this.sizeOptions.length}toggleVariant(){this.variantIndex=(this.variantIndex+1)%this.variantOptions.length}toggleTheme(){this.themeIndex=(this.themeIndex+1)%this.themeOptions.length}toggleReadOnly(){this.readOnly=!this.readOnly}toggleIcon(){this.iconIndex=(this.iconIndex+1)%this.iconOptions.length}toggleDisabled(){this.disabled=!this.disabled}updateValue(t){this.value=t}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleChange(t){console.log("ifxChange:",t)}handleChipItemSelect(t){console.log("ifxChipItemSelect:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-chip-example"]],standalone:!1,decls:72,vars:24,consts:[["aria-label","Chip",3,"placeholder","size","variant","theme","icon","readOnly","disabled","value"],[3,"ifxChange","ifxChipItemSelect","value"],[3,"value"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","placeholder","type","text",3,"ifxInput","value"],["label","value","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-chip",0)(1,"ifx-chip-item",1),f("ifxChange",function(a){return e.handleChange(a)})("ifxChipItemSelect",function(a){return e.handleChipItemSelect(a)}),s(2,"Item Label 1"),o(),l(3,"ifx-chip-item",2),s(4,"Item Label 2"),o(),l(5,"ifx-chip-item",2),s(6,"Item Label 3"),o(),l(7,"ifx-chip-item",2),s(8,"Item Label 4"),o()(),l(9,"h3",3),s(10,"Controls"),o(),l(11,"div",4)(12,"ifx-button",5),f("click",function(){return e.toggleSize()}),s(13,"Toggle Size"),o(),l(14,"ifx-button",5),f("click",function(){return e.toggleVariant()}),s(15,"Toggle Variant"),o(),l(16,"ifx-button",5),f("click",function(){return e.toggleTheme()}),s(17,"Toggle Theme"),o(),l(18,"ifx-button",5),f("click",function(){return e.toggleReadOnly()}),s(19,"Toggle ReadOnly"),o(),l(20,"ifx-button",5),f("click",function(){return e.toggleIcon()}),s(21,"Toggle Icon"),o(),l(22,"ifx-button",5),f("click",function(){return e.toggleDisabled()}),s(23,"Toggle Disabled"),o()(),l(24,"div",6)(25,"ifx-text-field",7),f("ifxInput",function(a){return e.updatePlaceholder(e.getControlInputValue(a))}),o(),l(26,"ifx-text-field",8),f("ifxInput",function(a){return e.updateValue(e.getControlInputValue(a))}),o()(),l(27,"div",9)(28,"div")(29,"b"),s(30,"placeholder:"),o(),s(31),o(),l(32,"div")(33,"b"),s(34,"size:"),o(),s(35),o(),l(36,"div")(37,"b"),s(38,"variant:"),o(),s(39),o(),l(40,"div")(41,"b"),s(42,"theme:"),o(),s(43),o(),l(44,"div")(45,"b"),s(46,"readOnly:"),o(),s(47),o(),l(48,"div")(49,"b"),s(50,"icon:"),o(),s(51),o(),l(52,"div")(53,"b"),s(54,"disabled:"),o(),s(55),o(),l(56,"div")(57,"b"),s(58,"value:"),o(),s(59),o()(),l(60,"details",10)(61,"summary"),s(62,"View Code"),o(),l(63,"div",11)(64,"h3"),s(65,"ifx-chip-example.ts"),o(),l(66,"pre"),b(67,"code",12),o(),l(68,"h3"),s(69,"ifx-chip-example.html"),o(),l(70,"pre"),b(71,"code",13),o()()()),i&2&&(p("placeholder",e.placeholder)("size",e.sizeOptions[e.sizeIndex])("variant",e.variantOptions[e.variantIndex])("theme",e.themeOptions[e.themeIndex])("icon",e.iconOptions[e.iconIndex])("readOnly",e.readOnly)("disabled",e.disabled)("value",e.value),c(),p("value",e.value),c(2),p("value",e.value),c(2),p("value",e.value),c(2),p("value",e.value),c(18),p("value",e.stringifyValue(e.placeholder)),c(),p("value",e.stringifyValue(e.value)),c(5),g(" ",e.stringifyValue(e.placeholder)),c(4),g(" ",e.stringifyValue(e.sizeOptions[e.sizeIndex])),c(4),g(" ",e.stringifyValue(e.variantOptions[e.variantIndex])),c(4),g(" ",e.stringifyValue(e.themeOptions[e.themeIndex])),c(4),g(" ",e.stringifyValue(e.readOnly)),c(4),g(" ",e.stringifyValue(e.iconOptions[e.iconIndex])),c(4),g(" ",e.stringifyValue(e.disabled)),c(4),g(" ",e.stringifyValue(e.value)),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,Gg,Wg,M,A],encapsulation:2})};var la=class n{tsCode=`import { Component } from '@angular/core';
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

  protected toggleIcon() {
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

  protected handleConsoleError(event: CustomEvent) {
    console.log('consoleError:', event);
    // Add your handler logic here
  }

}`;htmlCode=`  &lt;ifx-content-switcher&gt;
    &lt;ifx-content-switcher-item
      (ifxChange)=&quot;handleChange($any($event))&quot;
      (consoleError)=&quot;handleConsoleError($any($event))&quot;
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
  &lt;/ifx-content-switcher&gt;`;value="item";iconOptions=["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];iconIndex=0;updateValue(t){this.value=t}toggleIcon(){this.iconIndex=(this.iconIndex+1)%this.iconOptions.length}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleChange(t){console.log("ifxChange:",t)}handleConsoleError(t){console.log("consoleError:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-content-switcher-example"]],standalone:!1,decls:37,vars:13,consts:[[3,"ifxChange","consoleError","value"],[3,"icon"],[3,"value"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","value","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-content-switcher")(1,"ifx-content-switcher-item",0),f("ifxChange",function(a){return e.handleChange(a)})("consoleError",function(a){return e.handleConsoleError(a)}),b(2,"ifx-icon",1),o(),l(3,"ifx-content-switcher-item",2),b(4,"ifx-icon",1),o(),l(5,"ifx-content-switcher-item",2),b(6,"ifx-icon",1),o(),l(7,"ifx-content-switcher-item",2),b(8,"ifx-icon",1),o()(),l(9,"h3",3),s(10,"Controls"),o(),l(11,"div",4)(12,"ifx-button",5),f("click",function(){return e.toggleIcon()}),s(13,"Toggle Icon"),o()(),l(14,"div",6)(15,"ifx-text-field",7),f("ifxInput",function(a){return e.updateValue(e.getControlInputValue(a))}),o()(),l(16,"div",8)(17,"div")(18,"b"),s(19,"value:"),o(),s(20),o(),l(21,"div")(22,"b"),s(23,"icon:"),o(),s(24),o()(),l(25,"details",9)(26,"summary"),s(27,"View Code"),o(),l(28,"div",10)(29,"h3"),s(30,"ifx-content-switcher-example.ts"),o(),l(31,"pre"),b(32,"code",11),o(),l(33,"h3"),s(34,"ifx-content-switcher-example.html"),o(),l(35,"pre"),b(36,"code",12),o()()()),i&2&&(c(),p("value",e.value),c(),p("icon",e.iconOptions[e.iconIndex]),c(),p("value",e.value),c(),p("icon",e.iconOptions[e.iconIndex]),c(),p("value",e.value),c(),p("icon",e.iconOptions[e.iconIndex]),c(),p("value",e.value),c(),p("icon",e.iconOptions[e.iconIndex]),c(7),p("value",e.stringifyValue(e.value)),c(5),g(" ",e.stringifyValue(e.value)),c(4),g(" ",e.stringifyValue(e.iconOptions[e.iconIndex])),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,Zg,Jg,Fn,M,A],encapsulation:2})};var ca=class n{tsCode=`import { Component } from '@angular/core';
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

  protected toggleDisabled() {
    this.disabled = !this.disabled;
  }

  protected toggleSuccess() {
    this.success = !this.success;
  }

  protected toggleError() {
    this.error = !this.error;
  }

  protected toggleSize() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected updateValue(value: string) {
    this.value = value;
  }

  protected updateAriaLabelText(value: string) {
    this.ariaLabelText = value;
  }

  protected toggleRequired() {
    this.required = !this.required;
  }

  protected updateAutocomplete(value: string) {
    this.autocomplete = value;
  }

  protected toggleType() {
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
    [type]=&quot;typeOptions[typeIndex]&quot;&gt;&lt;/ifx-date-picker&gt;`;label="Label Text";caption="Caption text, description, error notification.";min="";max="";disabled=!1;success=!1;error=!1;sizeOptions=["s","l"];sizeIndex=0;value="";ariaLabelText="Date Picker";required=!1;autocomplete="on";typeOptions=["date","datetime-local"];typeIndex=0;updateLabel(t){this.label=t}updateCaption(t){this.caption=t}updateMin(t){this.min=t}updateMax(t){this.max=t}toggleDisabled(){this.disabled=!this.disabled}toggleSuccess(){this.success=!this.success}toggleError(){this.error=!this.error}toggleSize(){this.sizeIndex=(this.sizeIndex+1)%this.sizeOptions.length}updateValue(t){this.value=t}updateAriaLabelText(t){this.ariaLabelText=t}toggleRequired(){this.required=!this.required}updateAutocomplete(t){this.autocomplete=t}toggleType(){this.typeIndex=(this.typeIndex+1)%this.typeOptions.length}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleDate(t){console.log("ifxDate:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-date-picker-example"]],standalone:!1,decls:89,vars:35,consts:[["name","date-picker",3,"ifxDate","error","disabled","size","success","value","max","min","label","caption","ariaLabelText","required","autocomplete","type"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","label","type","text",3,"ifxInput","value"],["label","caption","type","text",3,"ifxInput","value"],["label","min","type","text",3,"ifxInput","value"],["label","max","type","text",3,"ifxInput","value"],["label","value","type","text",3,"ifxInput","value"],["label","ariaLabelText","type","text",3,"ifxInput","value"],["label","autocomplete","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-date-picker",0),f("ifxDate",function(a){return e.handleDate(a)}),o(),l(1,"h3",1),s(2,"Controls"),o(),l(3,"div",2)(4,"ifx-button",3),f("click",function(){return e.toggleDisabled()}),s(5,"Toggle Disabled"),o(),l(6,"ifx-button",3),f("click",function(){return e.toggleSuccess()}),s(7,"Toggle Success"),o(),l(8,"ifx-button",3),f("click",function(){return e.toggleError()}),s(9,"Toggle Error"),o(),l(10,"ifx-button",3),f("click",function(){return e.toggleSize()}),s(11,"Toggle Size"),o(),l(12,"ifx-button",3),f("click",function(){return e.toggleRequired()}),s(13,"Toggle Required"),o(),l(14,"ifx-button",3),f("click",function(){return e.toggleType()}),s(15,"Toggle Type"),o()(),l(16,"div",4)(17,"ifx-text-field",5),f("ifxInput",function(a){return e.updateLabel(e.getControlInputValue(a))}),o(),l(18,"ifx-text-field",6),f("ifxInput",function(a){return e.updateCaption(e.getControlInputValue(a))}),o(),l(19,"ifx-text-field",7),f("ifxInput",function(a){return e.updateMin(e.getControlInputValue(a))}),o(),l(20,"ifx-text-field",8),f("ifxInput",function(a){return e.updateMax(e.getControlInputValue(a))}),o(),l(21,"ifx-text-field",9),f("ifxInput",function(a){return e.updateValue(e.getControlInputValue(a))}),o(),l(22,"ifx-text-field",10),f("ifxInput",function(a){return e.updateAriaLabelText(e.getControlInputValue(a))}),o(),l(23,"ifx-text-field",11),f("ifxInput",function(a){return e.updateAutocomplete(e.getControlInputValue(a))}),o()(),l(24,"div",12)(25,"div")(26,"b"),s(27,"label:"),o(),s(28),o(),l(29,"div")(30,"b"),s(31,"caption:"),o(),s(32),o(),l(33,"div")(34,"b"),s(35,"min:"),o(),s(36),o(),l(37,"div")(38,"b"),s(39,"max:"),o(),s(40),o(),l(41,"div")(42,"b"),s(43,"disabled:"),o(),s(44),o(),l(45,"div")(46,"b"),s(47,"success:"),o(),s(48),o(),l(49,"div")(50,"b"),s(51,"error:"),o(),s(52),o(),l(53,"div")(54,"b"),s(55,"size:"),o(),s(56),o(),l(57,"div")(58,"b"),s(59,"value:"),o(),s(60),o(),l(61,"div")(62,"b"),s(63,"ariaLabelText:"),o(),s(64),o(),l(65,"div")(66,"b"),s(67,"required:"),o(),s(68),o(),l(69,"div")(70,"b"),s(71,"autocomplete:"),o(),s(72),o(),l(73,"div")(74,"b"),s(75,"type:"),o(),s(76),o()(),l(77,"details",13)(78,"summary"),s(79,"View Code"),o(),l(80,"div",14)(81,"h3"),s(82,"ifx-date-picker-example.ts"),o(),l(83,"pre"),b(84,"code",15),o(),l(85,"h3"),s(86,"ifx-date-picker-example.html"),o(),l(87,"pre"),b(88,"code",16),o()()()),i&2&&(p("error",e.error)("disabled",e.disabled)("size",e.sizeOptions[e.sizeIndex])("success",e.success)("value",e.value)("max",e.max)("min",e.min)("label",e.label)("caption",e.caption)("ariaLabelText",e.ariaLabelText)("required",e.required)("autocomplete",e.autocomplete)("type",e.typeOptions[e.typeIndex]),c(17),p("value",e.stringifyValue(e.label)),c(),p("value",e.stringifyValue(e.caption)),c(),p("value",e.stringifyValue(e.min)),c(),p("value",e.stringifyValue(e.max)),c(),p("value",e.stringifyValue(e.value)),c(),p("value",e.stringifyValue(e.ariaLabelText)),c(),p("value",e.stringifyValue(e.autocomplete)),c(5),g(" ",e.stringifyValue(e.label)),c(4),g(" ",e.stringifyValue(e.caption)),c(4),g(" ",e.stringifyValue(e.min)),c(4),g(" ",e.stringifyValue(e.max)),c(4),g(" ",e.stringifyValue(e.disabled)),c(4),g(" ",e.stringifyValue(e.success)),c(4),g(" ",e.stringifyValue(e.error)),c(4),g(" ",e.stringifyValue(e.sizeOptions[e.sizeIndex])),c(4),g(" ",e.stringifyValue(e.value)),c(4),g(" ",e.stringifyValue(e.ariaLabelText)),c(4),g(" ",e.stringifyValue(e.required)),c(4),g(" ",e.stringifyValue(e.autocomplete)),c(4),g(" ",e.stringifyValue(e.typeOptions[e.typeIndex])),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,Xg,M,A],encapsulation:2})};var da=class n{tsCode=`import { Component } from '@angular/core';
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
  protected readonly targetOptions = ["_self","_blank"];
  protected targetIndex = 0;
  protected href = "";
  protected readonly iconOptions = ["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];
  protected iconIndex = 0;
  protected error = false;
  protected defaultOpen = false;
  protected noCloseOnOutsideClick = false;
  protected noCloseOnMenuClick = false;
  protected noAppendToBody = false;

  protected togglePlacement() {
    this.placementIndex = (this.placementIndex + 1) % this.placementOptions.length;
  }

  protected toggleSize() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected toggleDisabled() {
    this.disabled = !this.disabled;
  }

  protected toggleVariant() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
  }

  protected toggleTarget() {
    this.targetIndex = (this.targetIndex + 1) % this.targetOptions.length;
  }

  protected updateHref(value: string) {
    this.href = value;
  }

  protected toggleIcon() {
    this.iconIndex = (this.iconIndex + 1) % this.iconOptions.length;
  }

  protected toggleError() {
    this.error = !this.error;
  }

  protected toggleDefaultOpen() {
    this.defaultOpen = !this.defaultOpen;
  }

  protected toggleNoCloseOnOutsideClick() {
    this.noCloseOnOutsideClick = !this.noCloseOnOutsideClick;
  }

  protected toggleNoCloseOnMenuClick() {
    this.noCloseOnMenuClick = !this.noCloseOnMenuClick;
  }

  protected toggleNoAppendToBody() {
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

  protected handleDropdownItem(event: CustomEvent) {
    console.log('ifxDropdownItem:', event);
    // Add your handler logic here
  }

}`;htmlCode=`  &lt;ifx-dropdown
    [placement]=&quot;placementOptions[placementIndex]&quot;
    [disabled]=&quot;disabled&quot;
    [defaultOpen]=&quot;defaultOpen&quot;
    [noCloseOnOutsideClick]=&quot;noCloseOnOutsideClick&quot;
    [noCloseOnMenuClick]=&quot;noCloseOnMenuClick&quot;
    [noAppendToBody]=&quot;noAppendToBody&quot;&gt;
    &lt;ifx-dropdown-trigger-button
      (ifxClose)=&quot;handleClose($any($event))&quot;
      (ifxDropdown)=&quot;handleDropdown($any($event))&quot;
      (ifxOpen)=&quot;handleOpen($any($event))&quot;
      (ifxDropdownMenuItem)=&quot;handleDropdownMenuItem($any($event))&quot;
      (menuSize)=&quot;handleMenuSize($any($event))&quot;
      (ifxDropdownItem)=&quot;handleDropdownItem($any($event))&quot;
      [variant]=&quot;variantOptions[variantIndex]&quot;&gt;Dropdown&lt;/ifx-dropdown-trigger-button&gt;
    &lt;ifx-dropdown-menu
      (ifxClose)=&quot;handleClose($any($event))&quot;
      (ifxDropdown)=&quot;handleDropdown($any($event))&quot;
      (ifxOpen)=&quot;handleOpen($any($event))&quot;
      (ifxDropdownMenuItem)=&quot;handleDropdownMenuItem($any($event))&quot;
      (menuSize)=&quot;handleMenuSize($any($event))&quot;
      (ifxDropdownItem)=&quot;handleDropdownItem($any($event))&quot;
      [size]=&quot;sizeOptions[sizeIndex]&quot;&gt;
      &lt;ifx-dropdown-item
        (ifxClose)=&quot;handleClose($any($event))&quot;
        (ifxDropdown)=&quot;handleDropdown($any($event))&quot;
        (ifxOpen)=&quot;handleOpen($any($event))&quot;
        (ifxDropdownMenuItem)=&quot;handleDropdownMenuItem($any($event))&quot;
        (menuSize)=&quot;handleMenuSize($any($event))&quot;
        (ifxDropdownItem)=&quot;handleDropdownItem($any($event))&quot;
        [icon]=&quot;iconOptions[iconIndex]&quot;
        [target]=&quot;targetOptions[targetIndex]&quot;
        [href]=&quot;href&quot;
        [error]=&quot;error&quot;&gt;Menu Item&lt;/ifx-dropdown-item&gt;
      &lt;ifx-dropdown-item
        [icon]=&quot;iconOptions[iconIndex]&quot;
        [target]=&quot;targetOptions[targetIndex]&quot;
        [href]=&quot;href&quot;
        [error]=&quot;error&quot;&gt;Menu Item&lt;/ifx-dropdown-item&gt;
      &lt;ifx-dropdown-item
        [icon]=&quot;iconOptions[iconIndex]&quot;
        [target]=&quot;targetOptions[targetIndex]&quot;
        [href]=&quot;href&quot;
        [error]=&quot;error&quot;&gt;Menu Item&lt;/ifx-dropdown-item&gt;
      &lt;ifx-dropdown-item
        [icon]=&quot;iconOptions[iconIndex]&quot;
        [target]=&quot;targetOptions[targetIndex]&quot;
        [href]=&quot;href&quot;
        [error]=&quot;error&quot;&gt;Menu Item&lt;/ifx-dropdown-item&gt;
      &lt;ifx-dropdown-item
        [icon]=&quot;iconOptions[iconIndex]&quot;
        [target]=&quot;targetOptions[targetIndex]&quot;
        [href]=&quot;href&quot;
        [error]=&quot;error&quot;&gt;Menu Item&lt;/ifx-dropdown-item&gt;
    &lt;/ifx-dropdown-menu&gt;
  &lt;/ifx-dropdown&gt;`;placementOptions=["auto","auto-start","auto-end","top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"];placementIndex=7;sizeOptions=["s","m"];sizeIndex=1;disabled=!1;variantOptions=["primary","secondary","tertiary"];variantIndex=0;targetOptions=["_self","_blank"];targetIndex=0;href="";iconOptions=["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];iconIndex=0;error=!1;defaultOpen=!1;noCloseOnOutsideClick=!1;noCloseOnMenuClick=!1;noAppendToBody=!1;togglePlacement(){this.placementIndex=(this.placementIndex+1)%this.placementOptions.length}toggleSize(){this.sizeIndex=(this.sizeIndex+1)%this.sizeOptions.length}toggleDisabled(){this.disabled=!this.disabled}toggleVariant(){this.variantIndex=(this.variantIndex+1)%this.variantOptions.length}toggleTarget(){this.targetIndex=(this.targetIndex+1)%this.targetOptions.length}updateHref(t){this.href=t}toggleIcon(){this.iconIndex=(this.iconIndex+1)%this.iconOptions.length}toggleError(){this.error=!this.error}toggleDefaultOpen(){this.defaultOpen=!this.defaultOpen}toggleNoCloseOnOutsideClick(){this.noCloseOnOutsideClick=!this.noCloseOnOutsideClick}toggleNoCloseOnMenuClick(){this.noCloseOnMenuClick=!this.noCloseOnMenuClick}toggleNoAppendToBody(){this.noAppendToBody=!this.noAppendToBody}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleClose(t){console.log("ifxClose:",t)}handleDropdown(t){console.log("ifxDropdown:",t)}handleOpen(t){console.log("ifxOpen:",t)}handleDropdownMenuItem(t){console.log("ifxDropdownMenuItem:",t)}handleMenuSize(t){console.log("menuSize:",t)}handleDropdownItem(t){console.log("ifxDropdownItem:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-dropdown-example"]],standalone:!1,decls:102,vars:43,consts:[[3,"placement","disabled","defaultOpen","noCloseOnOutsideClick","noCloseOnMenuClick","noAppendToBody"],[3,"ifxClose","ifxDropdown","ifxOpen","ifxDropdownMenuItem","menuSize","ifxDropdownItem","variant"],[3,"ifxClose","ifxDropdown","ifxOpen","ifxDropdownMenuItem","menuSize","ifxDropdownItem","size"],[3,"ifxClose","ifxDropdown","ifxOpen","ifxDropdownMenuItem","menuSize","ifxDropdownItem","icon","target","href","error"],[3,"icon","target","href","error"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","href","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-dropdown",0)(1,"ifx-dropdown-trigger-button",1),f("ifxClose",function(a){return e.handleClose(a)})("ifxDropdown",function(a){return e.handleDropdown(a)})("ifxOpen",function(a){return e.handleOpen(a)})("ifxDropdownMenuItem",function(a){return e.handleDropdownMenuItem(a)})("menuSize",function(a){return e.handleMenuSize(a)})("ifxDropdownItem",function(a){return e.handleDropdownItem(a)}),s(2,"Dropdown"),o(),l(3,"ifx-dropdown-menu",2),f("ifxClose",function(a){return e.handleClose(a)})("ifxDropdown",function(a){return e.handleDropdown(a)})("ifxOpen",function(a){return e.handleOpen(a)})("ifxDropdownMenuItem",function(a){return e.handleDropdownMenuItem(a)})("menuSize",function(a){return e.handleMenuSize(a)})("ifxDropdownItem",function(a){return e.handleDropdownItem(a)}),l(4,"ifx-dropdown-item",3),f("ifxClose",function(a){return e.handleClose(a)})("ifxDropdown",function(a){return e.handleDropdown(a)})("ifxOpen",function(a){return e.handleOpen(a)})("ifxDropdownMenuItem",function(a){return e.handleDropdownMenuItem(a)})("menuSize",function(a){return e.handleMenuSize(a)})("ifxDropdownItem",function(a){return e.handleDropdownItem(a)}),s(5,"Menu Item"),o(),l(6,"ifx-dropdown-item",4),s(7,"Menu Item"),o(),l(8,"ifx-dropdown-item",4),s(9,"Menu Item"),o(),l(10,"ifx-dropdown-item",4),s(11,"Menu Item"),o(),l(12,"ifx-dropdown-item",4),s(13,"Menu Item"),o()()(),l(14,"h3",5),s(15,"Controls"),o(),l(16,"div",6)(17,"ifx-button",7),f("click",function(){return e.togglePlacement()}),s(18,"Toggle Placement"),o(),l(19,"ifx-button",7),f("click",function(){return e.toggleSize()}),s(20,"Toggle Size"),o(),l(21,"ifx-button",7),f("click",function(){return e.toggleDisabled()}),s(22,"Toggle Disabled"),o(),l(23,"ifx-button",7),f("click",function(){return e.toggleVariant()}),s(24,"Toggle Variant"),o(),l(25,"ifx-button",7),f("click",function(){return e.toggleTarget()}),s(26,"Toggle Target"),o(),l(27,"ifx-button",7),f("click",function(){return e.toggleIcon()}),s(28,"Toggle Icon"),o(),l(29,"ifx-button",7),f("click",function(){return e.toggleError()}),s(30,"Toggle Error"),o(),l(31,"ifx-button",7),f("click",function(){return e.toggleDefaultOpen()}),s(32,"Toggle DefaultOpen"),o(),l(33,"ifx-button",7),f("click",function(){return e.toggleNoCloseOnOutsideClick()}),s(34,"Toggle NoCloseOnOutsideClick"),o(),l(35,"ifx-button",7),f("click",function(){return e.toggleNoCloseOnMenuClick()}),s(36,"Toggle NoCloseOnMenuClick"),o(),l(37,"ifx-button",7),f("click",function(){return e.toggleNoAppendToBody()}),s(38,"Toggle NoAppendToBody"),o()(),l(39,"div",8)(40,"ifx-text-field",9),f("ifxInput",function(a){return e.updateHref(e.getControlInputValue(a))}),o()(),l(41,"div",10)(42,"div")(43,"b"),s(44,"placement:"),o(),s(45),o(),l(46,"div")(47,"b"),s(48,"size:"),o(),s(49),o(),l(50,"div")(51,"b"),s(52,"disabled:"),o(),s(53),o(),l(54,"div")(55,"b"),s(56,"variant:"),o(),s(57),o(),l(58,"div")(59,"b"),s(60,"target:"),o(),s(61),o(),l(62,"div")(63,"b"),s(64,"href:"),o(),s(65),o(),l(66,"div")(67,"b"),s(68,"icon:"),o(),s(69),o(),l(70,"div")(71,"b"),s(72,"error:"),o(),s(73),o(),l(74,"div")(75,"b"),s(76,"defaultOpen:"),o(),s(77),o(),l(78,"div")(79,"b"),s(80,"noCloseOnOutsideClick:"),o(),s(81),o(),l(82,"div")(83,"b"),s(84,"noCloseOnMenuClick:"),o(),s(85),o(),l(86,"div")(87,"b"),s(88,"noAppendToBody:"),o(),s(89),o()(),l(90,"details",11)(91,"summary"),s(92,"View Code"),o(),l(93,"div",12)(94,"h3"),s(95,"ifx-dropdown-example.ts"),o(),l(96,"pre"),b(97,"code",13),o(),l(98,"h3"),s(99,"ifx-dropdown-example.html"),o(),l(100,"pre"),b(101,"code",14),o()()()),i&2&&(p("placement",e.placementOptions[e.placementIndex])("disabled",e.disabled)("defaultOpen",e.defaultOpen)("noCloseOnOutsideClick",e.noCloseOnOutsideClick)("noCloseOnMenuClick",e.noCloseOnMenuClick)("noAppendToBody",e.noAppendToBody),c(),p("variant",e.variantOptions[e.variantIndex]),c(2),p("size",e.sizeOptions[e.sizeIndex]),c(),p("icon",e.iconOptions[e.iconIndex])("target",e.targetOptions[e.targetIndex])("href",e.href)("error",e.error),c(2),p("icon",e.iconOptions[e.iconIndex])("target",e.targetOptions[e.targetIndex])("href",e.href)("error",e.error),c(2),p("icon",e.iconOptions[e.iconIndex])("target",e.targetOptions[e.targetIndex])("href",e.href)("error",e.error),c(2),p("icon",e.iconOptions[e.iconIndex])("target",e.targetOptions[e.targetIndex])("href",e.href)("error",e.error),c(2),p("icon",e.iconOptions[e.iconIndex])("target",e.targetOptions[e.targetIndex])("href",e.href)("error",e.error),c(28),p("value",e.stringifyValue(e.href)),c(5),g(" ",e.stringifyValue(e.placementOptions[e.placementIndex])),c(4),g(" ",e.stringifyValue(e.sizeOptions[e.sizeIndex])),c(4),g(" ",e.stringifyValue(e.disabled)),c(4),g(" ",e.stringifyValue(e.variantOptions[e.variantIndex])),c(4),g(" ",e.stringifyValue(e.targetOptions[e.targetIndex])),c(4),g(" ",e.stringifyValue(e.href)),c(4),g(" ",e.stringifyValue(e.iconOptions[e.iconIndex])),c(4),g(" ",e.stringifyValue(e.error)),c(4),g(" ",e.stringifyValue(e.defaultOpen)),c(4),g(" ",e.stringifyValue(e.noCloseOnOutsideClick)),c(4),g(" ",e.stringifyValue(e.noCloseOnMenuClick)),c(4),g(" ",e.stringifyValue(e.noAppendToBody)),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,Yg,Qg,Kg,eh,M,A],encapsulation:2})};var ua=class n{tsCode=`import { Component } from '@angular/core';
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

  protected toggleType() {
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
  &lt;/ifx-error-page&gt;`;typeOptions=["403","404","503","maintenance"];typeIndex=0;illustrationUrl="";imgAlt="";headline="";description="";toggleType(){this.typeIndex=(this.typeIndex+1)%this.typeOptions.length}updateIllustrationUrl(t){this.illustrationUrl=t}updateImgAlt(t){this.imgAlt=t}updateHeadline(t){this.headline=t}updateDescription(t){this.description=t}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-error-page-example"]],standalone:!1,decls:50,vars:18,consts:[[3,"imgAlt","type","headline","description","illustrationUrl"],["slot","button"],["variant","primary",3,"fullWidth"],["variant","secondary",3,"fullWidth"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","illustrationUrl","type","text",3,"ifxInput","value"],["label","imgAlt","type","text",3,"ifxInput","value"],["label","headline","type","text",3,"ifxInput","value"],["label","description","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-error-page",0)(1,"div",1)(2,"ifx-button",2),s(3,"Go to homepage"),o()(),l(4,"div",1)(5,"ifx-button",3),s(6,"Get support"),o()()(),l(7,"h3",4),s(8,"Controls"),o(),l(9,"div",5)(10,"ifx-button",6),f("click",function(){return e.toggleType()}),s(11,"Toggle Type"),o()(),l(12,"div",7)(13,"ifx-text-field",8),f("ifxInput",function(a){return e.updateIllustrationUrl(e.getControlInputValue(a))}),o(),l(14,"ifx-text-field",9),f("ifxInput",function(a){return e.updateImgAlt(e.getControlInputValue(a))}),o(),l(15,"ifx-text-field",10),f("ifxInput",function(a){return e.updateHeadline(e.getControlInputValue(a))}),o(),l(16,"ifx-text-field",11),f("ifxInput",function(a){return e.updateDescription(e.getControlInputValue(a))}),o()(),l(17,"div",12)(18,"div")(19,"b"),s(20,"type:"),o(),s(21),o(),l(22,"div")(23,"b"),s(24,"illustrationUrl:"),o(),s(25),o(),l(26,"div")(27,"b"),s(28,"imgAlt:"),o(),s(29),o(),l(30,"div")(31,"b"),s(32,"headline:"),o(),s(33),o(),l(34,"div")(35,"b"),s(36,"description:"),o(),s(37),o()(),l(38,"details",13)(39,"summary"),s(40,"View Code"),o(),l(41,"div",14)(42,"h3"),s(43,"ifx-error-page-example.ts"),o(),l(44,"pre"),b(45,"code",15),o(),l(46,"h3"),s(47,"ifx-error-page-example.html"),o(),l(48,"pre"),b(49,"code",16),o()()()),i&2&&(p("imgAlt",e.imgAlt)("type",e.typeOptions[e.typeIndex])("headline",e.headline)("description",e.description)("illustrationUrl",e.illustrationUrl),c(2),p("fullWidth",!0),c(3),p("fullWidth",!0),c(8),p("value",e.stringifyValue(e.illustrationUrl)),c(),p("value",e.stringifyValue(e.imgAlt)),c(),p("value",e.stringifyValue(e.headline)),c(),p("value",e.stringifyValue(e.description)),c(5),g(" ",e.stringifyValue(e.typeOptions[e.typeIndex])),c(4),g(" ",e.stringifyValue(e.illustrationUrl)),c(4),g(" ",e.stringifyValue(e.imgAlt)),c(4),g(" ",e.stringifyValue(e.headline)),c(4),g(" ",e.stringifyValue(e.description)),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,th,M,A],encapsulation:2})};var pa=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-footer-example-medium',
  templateUrl: './ifx-footer-example-medium.html',
  styleUrl: './ifx-footer-example-medium.scss',
  standalone: false
})
export class IfxFooterMediumExample {

  protected copyrightText = "\xA9 1999 - 2026 Infineon Technologies AG";
  protected readonly iconOptions = ["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];
  protected iconIndex = 0;
  protected href = "http://infineon.com";

  protected updateCopyrightText(value: string) {
    this.copyrightText = value;
  }

  protected toggleIcon() {
    this.iconIndex = (this.iconIndex + 1) % this.iconOptions.length;
  }

  protected updateHref(value: string) {
    this.href = value;
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

  protected handleConsoleError(event: CustomEvent) {
    console.log('consoleError:', event);
    // Add your handler logic here
  }

}`;htmlCode=`  &lt;ifx-footer [copyrightText]=&quot;copyrightText&quot;&gt;
    &lt;div
      slot=&quot;socials&quot;
      (consoleError)=&quot;handleConsoleError($any($event))&quot;&gt;
      &lt;ifx-link
        variant=&quot;title&quot;
        aria-label=&quot;Follow us on Facebook&quot;
        (consoleError)=&quot;handleConsoleError($any($event))&quot;
        [href]=&quot;href&quot;&gt;
        &lt;ifx-icon [icon]=&quot;iconOptions[iconIndex]&quot;&gt;&lt;/ifx-icon&gt;
      &lt;/ifx-link&gt;
      &lt;ifx-link
        variant=&quot;title&quot;
        aria-label=&quot;Follow us on Youtube&quot;
        [href]=&quot;href&quot;&gt;
        &lt;ifx-icon [icon]=&quot;iconOptions[iconIndex]&quot;&gt;&lt;/ifx-icon&gt;
      &lt;/ifx-link&gt;
      &lt;ifx-link
        variant=&quot;title&quot;
        aria-label=&quot;Follow us on Instagram&quot;
        [href]=&quot;href&quot;&gt;
        &lt;ifx-icon [icon]=&quot;iconOptions[iconIndex]&quot;&gt;&lt;/ifx-icon&gt;
      &lt;/ifx-link&gt;
      &lt;ifx-link
        variant=&quot;title&quot;
        aria-label=&quot;Follow us on LinkedIn&quot;
        [href]=&quot;href&quot;&gt;
        &lt;ifx-icon [icon]=&quot;iconOptions[iconIndex]&quot;&gt;&lt;/ifx-icon&gt;
      &lt;/ifx-link&gt;
      &lt;ifx-link
        variant=&quot;title&quot;
        aria-label=&quot;Follow us on Xing&quot;
        [href]=&quot;href&quot;&gt;
        &lt;ifx-icon [icon]=&quot;iconOptions[iconIndex]&quot;&gt;&lt;/ifx-icon&gt;
      &lt;/ifx-link&gt;
    &lt;/div&gt;
    &lt;div slot=&quot;info&quot;&gt;
      &lt;ifx-link
        variant=&quot;menu&quot;
        target=&quot;_blank&quot;
        [href]=&quot;href&quot;&gt;Terms&lt;/ifx-link&gt;
      &lt;ifx-link
        variant=&quot;menu&quot;
        target=&quot;_blank&quot;
        [href]=&quot;href&quot;&gt;Imprint&lt;/ifx-link&gt;
      &lt;ifx-link
        variant=&quot;menu&quot;
        target=&quot;_blank&quot;
        [href]=&quot;href&quot;&gt;Privacy policy&lt;/ifx-link&gt;
      &lt;ifx-link
        variant=&quot;menu&quot;
        target=&quot;_blank&quot;
        [href]=&quot;href&quot;&gt;Glossary&lt;/ifx-link&gt;
    &lt;/div&gt;
  &lt;/ifx-footer&gt;`;copyrightText="\xA9 1999 - 2026 Infineon Technologies AG";iconOptions=["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];iconIndex=0;href="http://infineon.com";updateCopyrightText(t){this.copyrightText=t}toggleIcon(){this.iconIndex=(this.iconIndex+1)%this.iconOptions.length}updateHref(t){this.href=t}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleConsoleError(t){console.log("consoleError:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-footer-example-medium"]],standalone:!1,decls:54,vars:22,consts:[[3,"copyrightText"],["slot","socials",3,"consoleError"],["variant","title","aria-label","Follow us on Facebook",3,"consoleError","href"],[3,"icon"],["variant","title","aria-label","Follow us on Youtube",3,"href"],["variant","title","aria-label","Follow us on Instagram",3,"href"],["variant","title","aria-label","Follow us on LinkedIn",3,"href"],["variant","title","aria-label","Follow us on Xing",3,"href"],["slot","info"],["variant","menu","target","_blank",3,"href"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","copyrightText","type","text",3,"ifxInput","value"],["label","href","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-footer",0)(1,"div",1),f("consoleError",function(a){return e.handleConsoleError(a)}),l(2,"ifx-link",2),f("consoleError",function(a){return e.handleConsoleError(a)}),b(3,"ifx-icon",3),o(),l(4,"ifx-link",4),b(5,"ifx-icon",3),o(),l(6,"ifx-link",5),b(7,"ifx-icon",3),o(),l(8,"ifx-link",6),b(9,"ifx-icon",3),o(),l(10,"ifx-link",7),b(11,"ifx-icon",3),o()(),l(12,"div",8)(13,"ifx-link",9),s(14,"Terms"),o(),l(15,"ifx-link",9),s(16,"Imprint"),o(),l(17,"ifx-link",9),s(18,"Privacy policy"),o(),l(19,"ifx-link",9),s(20,"Glossary"),o()()(),l(21,"h3",10),s(22,"Controls"),o(),l(23,"div",11)(24,"ifx-button",12),f("click",function(){return e.toggleIcon()}),s(25,"Toggle Icon"),o()(),l(26,"div",13)(27,"ifx-text-field",14),f("ifxInput",function(a){return e.updateCopyrightText(e.getControlInputValue(a))}),o(),l(28,"ifx-text-field",15),f("ifxInput",function(a){return e.updateHref(e.getControlInputValue(a))}),o()(),l(29,"div",16)(30,"div")(31,"b"),s(32,"copyrightText:"),o(),s(33),o(),l(34,"div")(35,"b"),s(36,"icon:"),o(),s(37),o(),l(38,"div")(39,"b"),s(40,"href:"),o(),s(41),o()(),l(42,"details",17)(43,"summary"),s(44,"View Code"),o(),l(45,"div",18)(46,"h3"),s(47,"ifx-footer-example-medium.ts"),o(),l(48,"pre"),b(49,"code",19),o(),l(50,"h3"),s(51,"ifx-footer-example-medium.html"),o(),l(52,"pre"),b(53,"code",20),o()()()),i&2&&(p("copyrightText",e.copyrightText),c(2),p("href",e.href),c(),p("icon",e.iconOptions[e.iconIndex]),c(),p("href",e.href),c(),p("icon",e.iconOptions[e.iconIndex]),c(),p("href",e.href),c(),p("icon",e.iconOptions[e.iconIndex]),c(),p("href",e.href),c(),p("icon",e.iconOptions[e.iconIndex]),c(),p("href",e.href),c(),p("icon",e.iconOptions[e.iconIndex]),c(2),p("href",e.href),c(2),p("href",e.href),c(2),p("href",e.href),c(2),p("href",e.href),c(8),p("value",e.stringifyValue(e.copyrightText)),c(),p("value",e.stringifyValue(e.href)),c(5),g(" ",e.stringifyValue(e.copyrightText)),c(4),g(" ",e.stringifyValue(e.iconOptions[e.iconIndex])),c(4),g(" ",e.stringifyValue(e.href)),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,nh,Fn,zo,M,A],encapsulation:2})};var fa=class n{tsCode=`import { Component } from '@angular/core';
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

  protected toggleIcon() {
    this.iconIndex = (this.iconIndex + 1) % this.iconOptions.length;
  }

  protected toggleVariant() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
  }

  protected toggleDisabled() {
    this.disabled = !this.disabled;
  }

  protected updateHref(value: string) {
    this.href = value;
  }

  protected toggleSize() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected toggleTarget() {
    this.targetIndex = (this.targetIndex + 1) % this.targetOptions.length;
  }

  protected toggleShape() {
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
    [disabled]=&quot;disabled&quot;&gt;&lt;/ifx-icon-button&gt;`;iconOptions=["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];iconIndex=0;variantOptions=["primary","secondary","tertiary"];variantIndex=0;disabled=!1;href="";sizeOptions=["xs","s","m","l"];sizeIndex=2;targetOptions=["_blank","_self","_parent"];targetIndex=0;shapeOptions=["round","square"];shapeIndex=0;ariaLabelText="Icon Button";toggleIcon(){this.iconIndex=(this.iconIndex+1)%this.iconOptions.length}toggleVariant(){this.variantIndex=(this.variantIndex+1)%this.variantOptions.length}toggleDisabled(){this.disabled=!this.disabled}updateHref(t){this.href=t}toggleSize(){this.sizeIndex=(this.sizeIndex+1)%this.sizeOptions.length}toggleTarget(){this.targetIndex=(this.targetIndex+1)%this.targetOptions.length}toggleShape(){this.shapeIndex=(this.shapeIndex+1)%this.shapeOptions.length}updateAriaLabelText(t){this.ariaLabelText=t}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-icon-button-example"]],standalone:!1,decls:64,vars:20,consts:[[3,"shape","variant","icon","href","target","size","ariaLabelText","disabled"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","href","type","text",3,"ifxInput","value"],["label","ariaLabelText","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(b(0,"ifx-icon-button",0),l(1,"h3",1),s(2,"Controls"),o(),l(3,"div",2)(4,"ifx-button",3),f("click",function(){return e.toggleIcon()}),s(5,"Toggle Icon"),o(),l(6,"ifx-button",3),f("click",function(){return e.toggleVariant()}),s(7,"Toggle Variant"),o(),l(8,"ifx-button",3),f("click",function(){return e.toggleDisabled()}),s(9,"Toggle Disabled"),o(),l(10,"ifx-button",3),f("click",function(){return e.toggleSize()}),s(11,"Toggle Size"),o(),l(12,"ifx-button",3),f("click",function(){return e.toggleTarget()}),s(13,"Toggle Target"),o(),l(14,"ifx-button",3),f("click",function(){return e.toggleShape()}),s(15,"Toggle Shape"),o()(),l(16,"div",4)(17,"ifx-text-field",5),f("ifxInput",function(a){return e.updateHref(e.getControlInputValue(a))}),o(),l(18,"ifx-text-field",6),f("ifxInput",function(a){return e.updateAriaLabelText(e.getControlInputValue(a))}),o()(),l(19,"div",7)(20,"div")(21,"b"),s(22,"icon:"),o(),s(23),o(),l(24,"div")(25,"b"),s(26,"variant:"),o(),s(27),o(),l(28,"div")(29,"b"),s(30,"disabled:"),o(),s(31),o(),l(32,"div")(33,"b"),s(34,"href:"),o(),s(35),o(),l(36,"div")(37,"b"),s(38,"size:"),o(),s(39),o(),l(40,"div")(41,"b"),s(42,"target:"),o(),s(43),o(),l(44,"div")(45,"b"),s(46,"shape:"),o(),s(47),o(),l(48,"div")(49,"b"),s(50,"ariaLabelText:"),o(),s(51),o()(),l(52,"details",8)(53,"summary"),s(54,"View Code"),o(),l(55,"div",9)(56,"h3"),s(57,"ifx-icon-button-example.ts"),o(),l(58,"pre"),b(59,"code",10),o(),l(60,"h3"),s(61,"ifx-icon-button-example.html"),o(),l(62,"pre"),b(63,"code",11),o()()()),i&2&&(p("shape",e.shapeOptions[e.shapeIndex])("variant",e.variantOptions[e.variantIndex])("icon",e.iconOptions[e.iconIndex])("href",e.href)("target",e.targetOptions[e.targetIndex])("size",e.sizeOptions[e.sizeIndex])("ariaLabelText",e.ariaLabelText)("disabled",e.disabled),c(17),p("value",e.stringifyValue(e.href)),c(),p("value",e.stringifyValue(e.ariaLabelText)),c(5),g(" ",e.stringifyValue(e.iconOptions[e.iconIndex])),c(4),g(" ",e.stringifyValue(e.variantOptions[e.variantIndex])),c(4),g(" ",e.stringifyValue(e.disabled)),c(4),g(" ",e.stringifyValue(e.href)),c(4),g(" ",e.stringifyValue(e.sizeOptions[e.sizeIndex])),c(4),g(" ",e.stringifyValue(e.targetOptions[e.targetIndex])),c(4),g(" ",e.stringifyValue(e.shapeOptions[e.shapeIndex])),c(4),g(" ",e.stringifyValue(e.ariaLabelText)),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,ih,M,A],encapsulation:2})};var ma=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-indicator-example',
  templateUrl: './ifx-indicator-example.html',
  styleUrl: './ifx-indicator-example.scss',
  standalone: false
})
export class IfxIndicatorExample {

  protected readonly variantOptions = ["number","dot"];
  protected variantIndex = 0;
  protected number = "1";
  protected inverted = false;

  protected toggleVariant() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
  }

  protected updateNumber(value: string) {
    this.number = value;
  }

  protected toggleInverted() {
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
    [variant]=&quot;variantOptions[variantIndex]&quot;
    [number]=&quot;number&quot;
    [inverted]=&quot;inverted&quot;&gt;&lt;/ifx-indicator&gt;`;variantOptions=["number","dot"];variantIndex=0;number="1";inverted=!1;toggleVariant(){this.variantIndex=(this.variantIndex+1)%this.variantOptions.length}updateNumber(t){this.number=t}toggleInverted(){this.inverted=!this.inverted}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-indicator-example"]],standalone:!1,decls:35,vars:9,consts:[[3,"variant","number","inverted"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","number","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(b(0,"ifx-indicator",0),l(1,"h3",1),s(2,"Controls"),o(),l(3,"div",2)(4,"ifx-button",3),f("click",function(){return e.toggleVariant()}),s(5,"Toggle Variant"),o(),l(6,"ifx-button",3),f("click",function(){return e.toggleInverted()}),s(7,"Toggle Inverted"),o()(),l(8,"div",4)(9,"ifx-text-field",5),f("ifxInput",function(a){return e.updateNumber(e.getControlInputValue(a))}),o()(),l(10,"div",6)(11,"div")(12,"b"),s(13,"variant:"),o(),s(14),o(),l(15,"div")(16,"b"),s(17,"number:"),o(),s(18),o(),l(19,"div")(20,"b"),s(21,"inverted:"),o(),s(22),o()(),l(23,"details",7)(24,"summary"),s(25,"View Code"),o(),l(26,"div",8)(27,"h3"),s(28,"ifx-indicator-example.ts"),o(),l(29,"pre"),b(30,"code",9),o(),l(31,"h3"),s(32,"ifx-indicator-example.html"),o(),l(33,"pre"),b(34,"code",10),o()()()),i&2&&(p("variant",e.variantOptions[e.variantIndex])("number",e.number)("inverted",e.inverted),c(9),p("value",e.stringifyValue(e.number)),c(5),g(" ",e.stringifyValue(e.variantOptions[e.variantIndex])),c(4),g(" ",e.stringifyValue(e.number)),c(4),g(" ",e.stringifyValue(e.inverted)),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,rh,M,A],encapsulation:2})};var ga=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-link-example',
  templateUrl: './ifx-link-example.html',
  styleUrl: './ifx-link-example.scss',
  standalone: false
})
export class IfxLinkExample {

  protected label = "Link";
  protected href = "";
  protected readonly targetOptions = ["_blank","_self","_parent"];
  protected targetIndex = 0;
  protected disabled = false;
  protected download = "";
  protected readonly sizeOptions = ["s","m","l","xl"];
  protected sizeIndex = 1;
  protected readonly variantOptions = ["bold","underlined","title","menu"];
  protected variantIndex = 0;

  protected updateLabel(value: string) {
    this.label = value;
  }

  protected updateHref(value: string) {
    this.href = value;
  }

  protected toggleTarget() {
    this.targetIndex = (this.targetIndex + 1) % this.targetOptions.length;
  }

  protected toggleDisabled() {
    this.disabled = !this.disabled;
  }

  protected updateDownload(value: string) {
    this.download = value;
  }

  protected toggleSize() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected toggleVariant() {
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
    [disabled]=&quot;disabled&quot;&gt;
    {{ label }}
  &lt;/ifx-link&gt;`;label="Link";href="";targetOptions=["_blank","_self","_parent"];targetIndex=0;disabled=!1;download="";sizeOptions=["s","m","l","xl"];sizeIndex=1;variantOptions=["bold","underlined","title","menu"];variantIndex=0;updateLabel(t){this.label=t}updateHref(t){this.href=t}toggleTarget(){this.targetIndex=(this.targetIndex+1)%this.targetOptions.length}toggleDisabled(){this.disabled=!this.disabled}updateDownload(t){this.download=t}toggleSize(){this.sizeIndex=(this.sizeIndex+1)%this.sizeOptions.length}toggleVariant(){this.variantIndex=(this.variantIndex+1)%this.variantOptions.length}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-link-example"]],standalone:!1,decls:58,vars:19,consts:[["aria-label","Link",3,"href","target","size","variant","download","disabled"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","label","type","text",3,"ifxInput","value"],["label","href","type","text",3,"ifxInput","value"],["label","download","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-link",0),s(1),o(),l(2,"h3",1),s(3,"Controls"),o(),l(4,"div",2)(5,"ifx-button",3),f("click",function(){return e.toggleTarget()}),s(6,"Toggle Target"),o(),l(7,"ifx-button",3),f("click",function(){return e.toggleDisabled()}),s(8,"Toggle Disabled"),o(),l(9,"ifx-button",3),f("click",function(){return e.toggleSize()}),s(10,"Toggle Size"),o(),l(11,"ifx-button",3),f("click",function(){return e.toggleVariant()}),s(12,"Toggle Variant"),o()(),l(13,"div",4)(14,"ifx-text-field",5),f("ifxInput",function(a){return e.updateLabel(e.getControlInputValue(a))}),o(),l(15,"ifx-text-field",6),f("ifxInput",function(a){return e.updateHref(e.getControlInputValue(a))}),o(),l(16,"ifx-text-field",7),f("ifxInput",function(a){return e.updateDownload(e.getControlInputValue(a))}),o()(),l(17,"div",8)(18,"div")(19,"b"),s(20,"label:"),o(),s(21),o(),l(22,"div")(23,"b"),s(24,"href:"),o(),s(25),o(),l(26,"div")(27,"b"),s(28,"target:"),o(),s(29),o(),l(30,"div")(31,"b"),s(32,"disabled:"),o(),s(33),o(),l(34,"div")(35,"b"),s(36,"download:"),o(),s(37),o(),l(38,"div")(39,"b"),s(40,"size:"),o(),s(41),o(),l(42,"div")(43,"b"),s(44,"variant:"),o(),s(45),o()(),l(46,"details",9)(47,"summary"),s(48,"View Code"),o(),l(49,"div",10)(50,"h3"),s(51,"ifx-link-example.ts"),o(),l(52,"pre"),b(53,"code",11),o(),l(54,"h3"),s(55,"ifx-link-example.html"),o(),l(56,"pre"),b(57,"code",12),o()()()),i&2&&(p("href",e.href)("target",e.targetOptions[e.targetIndex])("size",e.sizeOptions[e.sizeIndex])("variant",e.variantOptions[e.variantIndex])("download",e.download)("disabled",e.disabled),c(),g(" ",e.label," "),c(13),p("value",e.stringifyValue(e.label)),c(),p("value",e.stringifyValue(e.href)),c(),p("value",e.stringifyValue(e.download)),c(5),g(" ",e.stringifyValue(e.label)),c(4),g(" ",e.stringifyValue(e.href)),c(4),g(" ",e.stringifyValue(e.targetOptions[e.targetIndex])),c(4),g(" ",e.stringifyValue(e.disabled)),c(4),g(" ",e.stringifyValue(e.download)),c(4),g(" ",e.stringifyValue(e.sizeOptions[e.sizeIndex])),c(4),g(" ",e.stringifyValue(e.variantOptions[e.variantIndex])),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,zo,M,A],encapsulation:2})};var ha=class n{tsCode=`import { Component } from '@angular/core';
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

  protected toggleShowLogoAndAppname() {
    this.showLogoAndAppname = !this.showLogoAndAppname;
  }

  protected updateLogoHref(value: string) {
    this.logoHref = value;
  }

  protected toggleLogoHrefTarget() {
    this.logoHrefTargetIndex = (this.logoHrefTargetIndex + 1) % this.logoHrefTargetOptions.length;
  }

  protected updateNumberIndicator(value: string) {
    this.numberIndicator = Number(value);
  }

  protected toggleDotIndicator() {
    this.dotIndicator = !this.dotIndicator;
  }

  protected toggleHideOnMobile() {
    this.hideOnMobile = !this.hideOnMobile;
  }

  protected updateHref(value: string) {
    this.href = value;
  }

  protected toggleTarget() {
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
      [hideOnMobile]=&quot;hideOnMobile&quot;&gt;
      &lt;ifx-navbar-item icon=&quot;&quot;&gt;
        &lt;ifx-navbar-item&gt;
          &lt;ifx-navbar-item
            [href]=&quot;href&quot;
            [target]=&quot;targetOptions[targetIndex]&quot;&gt;Link Layer 3 Nested Item 1&lt;/ifx-navbar-item&gt;
          &lt;ifx-navbar-item&gt;Layer 3 Nested Item 2&lt;/ifx-navbar-item&gt;
          &lt;ifx-navbar-item&gt;Layer 3 Nested Item 3&lt;/ifx-navbar-item&gt;
          &lt;ifx-navbar-item&gt;Layer 3 Nested Item 4&lt;/ifx-navbar-item&gt;
        &lt;/ifx-navbar-item&gt;
        &lt;ifx-navbar-item&gt;Layer 2 Nested Item 3&lt;/ifx-navbar-item&gt;
        &lt;ifx-navbar-item&gt;Layer 2 Nested Item 4&lt;/ifx-navbar-item&gt;
        &lt;ifx-navbar-item&gt;Layer 2 Nested Item 5&lt;/ifx-navbar-item&gt;
      &lt;/ifx-navbar-item&gt;
      &lt;ifx-navbar-item&gt;
        &lt;ifx-navbar-item&gt;Layer 2 Item 1&lt;/ifx-navbar-item&gt;
        &lt;ifx-navbar-item&gt;Layer 2 Item 2&lt;/ifx-navbar-item&gt;
        &lt;ifx-navbar-item&gt;Layer 2 Item 3&lt;/ifx-navbar-item&gt;
      &lt;/ifx-navbar-item&gt;
      &lt;ifx-navbar-item&gt;Nested Item 3&lt;/ifx-navbar-item&gt;
      &lt;ifx-navbar-item&gt;
        &lt;ifx-navbar-item&gt;Nested Item 4&lt;/ifx-navbar-item&gt;
      &lt;/ifx-navbar-item&gt;
    &lt;/ifx-navbar-item&gt;
    &lt;ifx-navbar-item
      slot=&quot;left-item&quot;
      icon=&quot;&quot;
      [showLabel]=&quot;true&quot;
      [href]=&quot;href&quot;
      [target]=&quot;targetOptions[targetIndex]&quot;&gt;Menu Item&lt;/ifx-navbar-item&gt;
    &lt;ifx-navbar-item slot=&quot;left-item&quot;&gt;
      &lt;ifx-navbar-item&gt;Item1&lt;/ifx-navbar-item&gt;
      &lt;ifx-navbar-item&gt;Item2&lt;/ifx-navbar-item&gt;
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
      [hideOnMobile]=&quot;hideOnMobile&quot;&gt;&lt;/ifx-navbar-item&gt;
    &lt;ifx-navbar-item
      slot=&quot;right-item&quot;
      [showLabel]=&quot;false&quot;
      icon=&quot;image-16&quot;
      [dotIndicator]=&quot;dotIndicator&quot;
      [hideOnMobile]=&quot;hideOnMobile&quot;&gt;&lt;/ifx-navbar-item&gt;
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
  &lt;/ifx-navbar&gt;`;applicationName="Application name";showLogoAndAppname=!0;logoHref="http://google.com";logoHrefTargetOptions=["_self","_blank","_parent"];logoHrefTargetIndex=0;numberIndicator=0;dotIndicator=!1;hideOnMobile=!0;href="http://google.com";targetOptions=["_self"];targetIndex=0;alt="profile image";userName="";updateApplicationName(t){this.applicationName=t}toggleShowLogoAndAppname(){this.showLogoAndAppname=!this.showLogoAndAppname}updateLogoHref(t){this.logoHref=t}toggleLogoHrefTarget(){this.logoHrefTargetIndex=(this.logoHrefTargetIndex+1)%this.logoHrefTargetOptions.length}updateNumberIndicator(t){this.numberIndicator=Number(t)}toggleDotIndicator(){this.dotIndicator=!this.dotIndicator}toggleHideOnMobile(){this.hideOnMobile=!this.hideOnMobile}updateHref(t){this.href=t}toggleTarget(){this.targetIndex=(this.targetIndex+1)%this.targetOptions.length}updateAlt(t){this.alt=t}updateUserName(t){this.userName=t}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleNavbarMobileMenuIsOpen(t){console.log("ifxNavbarMobileMenuIsOpen:",t)}handleNavItem(t){console.log("ifxNavItem:",t)}handleInput(t){console.log("ifxInput:",t)}handleOpen(t){console.log("ifxOpen:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-navbar-example"]],standalone:!1,decls:118,vars:46,consts:[[3,"fixed","showLogoAndAppname","applicationName","logoHref","logoHrefTarget"],["icon","","slot","left-item",3,"ifxNavbarMobileMenuIsOpen","ifxNavItem","ifxInput","ifxOpen","target","href","hideOnMobile"],["icon",""],[3,"href","target"],["slot","left-item","icon","",3,"showLabel","href","target"],["slot","left-item"],["slot","search-bar-left",3,"isOpen"],["slot","right-item","icon","image-16",3,"showLabel","numberIndicator","target","href","hideOnMobile"],["slot","right-item","icon","image-16",3,"showLabel","dotIndicator","hideOnMobile"],["slot","right-item","image-url","",3,"ifxNavbarMobileMenuIsOpen","ifxNavItem","ifxInput","ifxOpen","showLabel","userName","href","target","alt"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","applicationName","type","text",3,"ifxInput","value"],["label","logoHref","type","text",3,"ifxInput","value"],["label","numberIndicator","type","number",3,"ifxInput","value"],["label","href","type","text",3,"ifxInput","value"],["label","alt","type","text",3,"ifxInput","value"],["label","userName","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-navbar",0)(1,"ifx-navbar-item",1),f("ifxNavbarMobileMenuIsOpen",function(a){return e.handleNavbarMobileMenuIsOpen(a)})("ifxNavItem",function(a){return e.handleNavItem(a)})("ifxInput",function(a){return e.handleInput(a)})("ifxOpen",function(a){return e.handleOpen(a)}),l(2,"ifx-navbar-item",2)(3,"ifx-navbar-item")(4,"ifx-navbar-item",3),s(5,"Link Layer 3 Nested Item 1"),o(),l(6,"ifx-navbar-item"),s(7,"Layer 3 Nested Item 2"),o(),l(8,"ifx-navbar-item"),s(9,"Layer 3 Nested Item 3"),o(),l(10,"ifx-navbar-item"),s(11,"Layer 3 Nested Item 4"),o()(),l(12,"ifx-navbar-item"),s(13,"Layer 2 Nested Item 3"),o(),l(14,"ifx-navbar-item"),s(15,"Layer 2 Nested Item 4"),o(),l(16,"ifx-navbar-item"),s(17,"Layer 2 Nested Item 5"),o()(),l(18,"ifx-navbar-item")(19,"ifx-navbar-item"),s(20,"Layer 2 Item 1"),o(),l(21,"ifx-navbar-item"),s(22,"Layer 2 Item 2"),o(),l(23,"ifx-navbar-item"),s(24,"Layer 2 Item 3"),o()(),l(25,"ifx-navbar-item"),s(26,"Nested Item 3"),o(),l(27,"ifx-navbar-item")(28,"ifx-navbar-item"),s(29,"Nested Item 4"),o()()(),l(30,"ifx-navbar-item",4),s(31,"Menu Item"),o(),l(32,"ifx-navbar-item",5)(33,"ifx-navbar-item"),s(34,"Item1"),o(),l(35,"ifx-navbar-item"),s(36,"Item2"),o()(),b(37,"ifx-search-bar",6)(38,"ifx-navbar-item",7)(39,"ifx-navbar-item",8),l(40,"ifx-navbar-profile",9),f("ifxNavbarMobileMenuIsOpen",function(a){return e.handleNavbarMobileMenuIsOpen(a)})("ifxNavItem",function(a){return e.handleNavItem(a)})("ifxInput",function(a){return e.handleInput(a)})("ifxOpen",function(a){return e.handleOpen(a)}),o()(),l(41,"h3",10),s(42,"Controls"),o(),l(43,"div",11)(44,"ifx-button",12),f("click",function(){return e.toggleShowLogoAndAppname()}),s(45,"Toggle ShowLogoAndAppname"),o(),l(46,"ifx-button",12),f("click",function(){return e.toggleLogoHrefTarget()}),s(47,"Toggle LogoHrefTarget"),o(),l(48,"ifx-button",12),f("click",function(){return e.toggleDotIndicator()}),s(49,"Toggle DotIndicator"),o(),l(50,"ifx-button",12),f("click",function(){return e.toggleHideOnMobile()}),s(51,"Toggle HideOnMobile"),o(),l(52,"ifx-button",12),f("click",function(){return e.toggleTarget()}),s(53,"Toggle Target"),o()(),l(54,"div",13)(55,"ifx-text-field",14),f("ifxInput",function(a){return e.updateApplicationName(e.getControlInputValue(a))}),o(),l(56,"ifx-text-field",15),f("ifxInput",function(a){return e.updateLogoHref(e.getControlInputValue(a))}),o(),l(57,"ifx-text-field",16),f("ifxInput",function(a){return e.updateNumberIndicator(e.getControlInputValue(a))}),o(),l(58,"ifx-text-field",17),f("ifxInput",function(a){return e.updateHref(e.getControlInputValue(a))}),o(),l(59,"ifx-text-field",18),f("ifxInput",function(a){return e.updateAlt(e.getControlInputValue(a))}),o(),l(60,"ifx-text-field",19),f("ifxInput",function(a){return e.updateUserName(e.getControlInputValue(a))}),o()(),l(61,"div",20)(62,"div")(63,"b"),s(64,"applicationName:"),o(),s(65),o(),l(66,"div")(67,"b"),s(68,"showLogoAndAppname:"),o(),s(69),o(),l(70,"div")(71,"b"),s(72,"logoHref:"),o(),s(73),o(),l(74,"div")(75,"b"),s(76,"logoHrefTarget:"),o(),s(77),o(),l(78,"div")(79,"b"),s(80,"numberIndicator:"),o(),s(81),o(),l(82,"div")(83,"b"),s(84,"dotIndicator:"),o(),s(85),o(),l(86,"div")(87,"b"),s(88,"hideOnMobile:"),o(),s(89),o(),l(90,"div")(91,"b"),s(92,"href:"),o(),s(93),o(),l(94,"div")(95,"b"),s(96,"target:"),o(),s(97),o(),l(98,"div")(99,"b"),s(100,"alt:"),o(),s(101),o(),l(102,"div")(103,"b"),s(104,"userName:"),o(),s(105),o()(),l(106,"details",21)(107,"summary"),s(108,"View Code"),o(),l(109,"div",22)(110,"h3"),s(111,"ifx-navbar-example.ts"),o(),l(112,"pre"),b(113,"code",23),o(),l(114,"h3"),s(115,"ifx-navbar-example.html"),o(),l(116,"pre"),b(117,"code",24),o()()()),i&2&&(p("fixed",!1)("showLogoAndAppname",e.showLogoAndAppname)("applicationName",e.applicationName)("logoHref",e.logoHref)("logoHrefTarget",e.logoHrefTargetOptions[e.logoHrefTargetIndex]),c(),p("target",e.targetOptions[e.targetIndex])("href",e.href)("hideOnMobile",e.hideOnMobile),c(3),p("href",e.href)("target",e.targetOptions[e.targetIndex]),c(26),p("showLabel",!0)("href",e.href)("target",e.targetOptions[e.targetIndex]),c(7),p("isOpen",!1),c(),p("showLabel",!1)("numberIndicator",e.numberIndicator)("target",e.targetOptions[e.targetIndex])("href",e.href)("hideOnMobile",e.hideOnMobile),c(),p("showLabel",!1)("dotIndicator",e.dotIndicator)("hideOnMobile",e.hideOnMobile),c(),p("showLabel",!0)("userName",e.userName)("href",e.href)("target",e.targetOptions[e.targetIndex])("alt",e.alt),c(15),p("value",e.stringifyValue(e.applicationName)),c(),p("value",e.stringifyValue(e.logoHref)),c(),p("value",e.stringifyValue(e.numberIndicator)),c(),p("value",e.stringifyValue(e.href)),c(),p("value",e.stringifyValue(e.alt)),c(),p("value",e.stringifyValue(e.userName)),c(5),g(" ",e.stringifyValue(e.applicationName)),c(4),g(" ",e.stringifyValue(e.showLogoAndAppname)),c(4),g(" ",e.stringifyValue(e.logoHref)),c(4),g(" ",e.stringifyValue(e.logoHrefTargetOptions[e.logoHrefTargetIndex])),c(4),g(" ",e.stringifyValue(e.numberIndicator)),c(4),g(" ",e.stringifyValue(e.dotIndicator)),c(4),g(" ",e.stringifyValue(e.hideOnMobile)),c(4),g(" ",e.stringifyValue(e.href)),c(4),g(" ",e.stringifyValue(e.targetOptions[e.targetIndex])),c(4),g(" ",e.stringifyValue(e.alt)),c(4),g(" ",e.stringifyValue(e.userName)),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,Uo,$o,ah,Nn,M,A],encapsulation:2})};var va=class n{tsCode=`import { Component } from '@angular/core';
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

  protected toggleShowHeader() {
    this.showHeader = !this.showHeader;
  }

  protected toggleShowFooter() {
    this.showFooter = !this.showFooter;
  }

  protected toggleInitialCollapse() {
    this.initialCollapse = !this.initialCollapse;
  }

  protected toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }

  protected toggleCollapsible() {
    this.collapsible = !this.collapsible;
  }

  protected togglePosition() {
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

  protected toggleIcon() {
    this.iconIndex = (this.iconIndex + 1) % this.iconOptions.length;
  }

  protected updateHideMenuLabel(value: string) {
    this.hideMenuLabel = value;
  }

  protected updateLogoHref(value: string) {
    this.logoHref = value;
  }

  protected toggleLogoHrefTarget() {
    this.logoHrefTargetIndex = (this.logoHrefTargetIndex + 1) % this.logoHrefTargetOptions.length;
  }

  protected toggleFooterHrefTarget() {
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
  &lt;/ifx-sidebar&gt;`;applicationName="Application Name";showHeader=!0;showFooter=!0;initialCollapse=!0;collapsed=!1;collapsible=!1;positionOptions=["left","right"];positionIndex=0;imprint="https://yourwebsite.com/imprint";termsOfUse="https://yourwebsite.com/terms";privacyPolicy="https://yourwebsite.com/privacy-policy";copyrightText="\xA9 1999 - 2026 Infineon Technologies AG";iconOptions=["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];iconIndex=0;hideMenuLabel="Hide Menu";logoHref="http://google.com";logoHrefTargetOptions=["_self","_blank","_parent"];logoHrefTargetIndex=0;footerHrefTargetOptions=["_self","_blank","_parent"];footerHrefTargetIndex=1;updateApplicationName(t){this.applicationName=t}toggleShowHeader(){this.showHeader=!this.showHeader}toggleShowFooter(){this.showFooter=!this.showFooter}toggleInitialCollapse(){this.initialCollapse=!this.initialCollapse}toggleCollapsed(){this.collapsed=!this.collapsed}toggleCollapsible(){this.collapsible=!this.collapsible}togglePosition(){this.positionIndex=(this.positionIndex+1)%this.positionOptions.length}updateImprint(t){this.imprint=t}updateTermsOfUse(t){this.termsOfUse=t}updatePrivacyPolicy(t){this.privacyPolicy=t}updateCopyrightText(t){this.copyrightText=t}toggleIcon(){this.iconIndex=(this.iconIndex+1)%this.iconOptions.length}updateHideMenuLabel(t){this.hideMenuLabel=t}updateLogoHref(t){this.logoHref=t}toggleLogoHrefTarget(){this.logoHrefTargetIndex=(this.logoHrefTargetIndex+1)%this.logoHrefTargetOptions.length}toggleFooterHrefTarget(){this.footerHrefTargetIndex=(this.footerHrefTargetIndex+1)%this.footerHrefTargetOptions.length}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleSidebarCollapseChange(t){console.log("ifxSidebarCollapseChange:",t)}handleSidebarLogoClick(t){console.log("ifxSidebarLogoClick:",t)}handleSidebarActionItem(t){console.log("ifxSidebarActionItem:",t)}handleSidebarMenu(t){console.log("ifxSidebarMenu:",t)}handleSidebarNavigationItem(t){console.log("ifxSidebarNavigationItem:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-sidebar-example"]],standalone:!1,decls:137,vars:56,consts:[["footer-target","_blank",3,"applicationName","collapsible","collapsed","showHeader","showFooter","initialCollapse","termsOfUse","imprint","privacyPolicy","copyrightText","position","logoHref","logoHrefTarget","hideMenuLabel","footerHrefTarget"],[3,"ifxSidebarCollapseChange","ifxSidebarLogoClick","ifxSidebarActionItem","ifxSidebarMenu","ifxSidebarNavigationItem"],["href","https://google.com","target","_blank",3,"ifxSidebarCollapseChange","ifxSidebarLogoClick","ifxSidebarActionItem","ifxSidebarMenu","ifxSidebarNavigationItem","icon"],["href","https://google.com","target","_blank",3,"icon"],[3,"icon"],[3,"active","icon"],["href","https://google.com","target","_self","number-indicator","","isactionitem","false",3,"active","icon"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","applicationName","type","text",3,"ifxInput","value"],["label","imprint","type","text",3,"ifxInput","value"],["label","termsOfUse","type","text",3,"ifxInput","value"],["label","privacyPolicy","type","text",3,"ifxInput","value"],["label","copyrightText","type","text",3,"ifxInput","value"],["label","hideMenuLabel","type","text",3,"ifxInput","value"],["label","logoHref","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-sidebar",0)(1,"ifx-sidebar-title",1),f("ifxSidebarCollapseChange",function(a){return e.handleSidebarCollapseChange(a)})("ifxSidebarLogoClick",function(a){return e.handleSidebarLogoClick(a)})("ifxSidebarActionItem",function(a){return e.handleSidebarActionItem(a)})("ifxSidebarMenu",function(a){return e.handleSidebarMenu(a)})("ifxSidebarNavigationItem",function(a){return e.handleSidebarNavigationItem(a)}),s(2,"Menu Items"),o(),l(3,"ifx-sidebar-item",2),f("ifxSidebarCollapseChange",function(a){return e.handleSidebarCollapseChange(a)})("ifxSidebarLogoClick",function(a){return e.handleSidebarLogoClick(a)})("ifxSidebarActionItem",function(a){return e.handleSidebarActionItem(a)})("ifxSidebarMenu",function(a){return e.handleSidebarMenu(a)})("ifxSidebarNavigationItem",function(a){return e.handleSidebarNavigationItem(a)}),s(4,"Menu Item"),o(),l(5,"ifx-sidebar-item",3),s(6,"Menu Item"),o(),l(7,"ifx-sidebar-item",3),s(8,"Menu Item"),o(),l(9,"ifx-sidebar-item",3),s(10,"Menu Item"),o(),l(11,"ifx-sidebar-item",4)(12,"ifx-sidebar-item",3),s(13,"Menu Item"),o(),l(14,"ifx-sidebar-item",4)(15,"ifx-sidebar-item",4),s(16,"Sub menu item"),o(),l(17,"ifx-sidebar-item",5),s(18,"Sub menu item"),o(),l(19,"ifx-sidebar-item",4),s(20,"Sub menu item"),o()(),l(21,"ifx-sidebar-item",3),s(22,"Menu Item"),o(),l(23,"ifx-sidebar-item",3),s(24,"Menu Item"),o()(),l(25,"ifx-sidebar-title"),s(26,"Items group"),o(),l(27,"ifx-sidebar-item",6),s(28,"Item 1"),o(),l(29,"ifx-sidebar-item",3),s(30,"Item 2"),o()(),l(31,"h3",7),s(32,"Controls"),o(),l(33,"div",8)(34,"ifx-button",9),f("click",function(){return e.toggleShowHeader()}),s(35,"Toggle ShowHeader"),o(),l(36,"ifx-button",9),f("click",function(){return e.toggleShowFooter()}),s(37,"Toggle ShowFooter"),o(),l(38,"ifx-button",9),f("click",function(){return e.toggleInitialCollapse()}),s(39,"Toggle InitialCollapse"),o(),l(40,"ifx-button",9),f("click",function(){return e.toggleCollapsed()}),s(41,"Toggle Collapsed"),o(),l(42,"ifx-button",9),f("click",function(){return e.toggleCollapsible()}),s(43,"Toggle Collapsible"),o(),l(44,"ifx-button",9),f("click",function(){return e.togglePosition()}),s(45,"Toggle Position"),o(),l(46,"ifx-button",9),f("click",function(){return e.toggleIcon()}),s(47,"Toggle Icon"),o(),l(48,"ifx-button",9),f("click",function(){return e.toggleLogoHrefTarget()}),s(49,"Toggle LogoHrefTarget"),o(),l(50,"ifx-button",9),f("click",function(){return e.toggleFooterHrefTarget()}),s(51,"Toggle FooterHrefTarget"),o()(),l(52,"div",10)(53,"ifx-text-field",11),f("ifxInput",function(a){return e.updateApplicationName(e.getControlInputValue(a))}),o(),l(54,"ifx-text-field",12),f("ifxInput",function(a){return e.updateImprint(e.getControlInputValue(a))}),o(),l(55,"ifx-text-field",13),f("ifxInput",function(a){return e.updateTermsOfUse(e.getControlInputValue(a))}),o(),l(56,"ifx-text-field",14),f("ifxInput",function(a){return e.updatePrivacyPolicy(e.getControlInputValue(a))}),o(),l(57,"ifx-text-field",15),f("ifxInput",function(a){return e.updateCopyrightText(e.getControlInputValue(a))}),o(),l(58,"ifx-text-field",16),f("ifxInput",function(a){return e.updateHideMenuLabel(e.getControlInputValue(a))}),o(),l(59,"ifx-text-field",17),f("ifxInput",function(a){return e.updateLogoHref(e.getControlInputValue(a))}),o()(),l(60,"div",18)(61,"div")(62,"b"),s(63,"applicationName:"),o(),s(64),o(),l(65,"div")(66,"b"),s(67,"showHeader:"),o(),s(68),o(),l(69,"div")(70,"b"),s(71,"showFooter:"),o(),s(72),o(),l(73,"div")(74,"b"),s(75,"initialCollapse:"),o(),s(76),o(),l(77,"div")(78,"b"),s(79,"collapsed:"),o(),s(80),o(),l(81,"div")(82,"b"),s(83,"collapsible:"),o(),s(84),o(),l(85,"div")(86,"b"),s(87,"position:"),o(),s(88),o(),l(89,"div")(90,"b"),s(91,"imprint:"),o(),s(92),o(),l(93,"div")(94,"b"),s(95,"termsOfUse:"),o(),s(96),o(),l(97,"div")(98,"b"),s(99,"privacyPolicy:"),o(),s(100),o(),l(101,"div")(102,"b"),s(103,"copyrightText:"),o(),s(104),o(),l(105,"div")(106,"b"),s(107,"icon:"),o(),s(108),o(),l(109,"div")(110,"b"),s(111,"hideMenuLabel:"),o(),s(112),o(),l(113,"div")(114,"b"),s(115,"logoHref:"),o(),s(116),o(),l(117,"div")(118,"b"),s(119,"logoHrefTarget:"),o(),s(120),o(),l(121,"div")(122,"b"),s(123,"footerHrefTarget:"),o(),s(124),o()(),l(125,"details",19)(126,"summary"),s(127,"View Code"),o(),l(128,"div",20)(129,"h3"),s(130,"ifx-sidebar-example.ts"),o(),l(131,"pre"),b(132,"code",21),o(),l(133,"h3"),s(134,"ifx-sidebar-example.html"),o(),l(135,"pre"),b(136,"code",22),o()()()),i&2&&(p("applicationName",e.applicationName)("collapsible",e.collapsible)("collapsed",e.collapsed)("showHeader",e.showHeader)("showFooter",e.showFooter)("initialCollapse",e.initialCollapse)("termsOfUse",e.termsOfUse)("imprint",e.imprint)("privacyPolicy",e.privacyPolicy)("copyrightText",e.copyrightText)("position",e.positionOptions[e.positionIndex])("logoHref",e.logoHref)("logoHrefTarget",e.logoHrefTargetOptions[e.logoHrefTargetIndex])("hideMenuLabel",e.hideMenuLabel)("footerHrefTarget",e.footerHrefTargetOptions[e.footerHrefTargetIndex]),c(3),p("icon",e.iconOptions[e.iconIndex]),c(2),p("icon",e.iconOptions[e.iconIndex]),c(2),p("icon",e.iconOptions[e.iconIndex]),c(2),p("icon",e.iconOptions[e.iconIndex]),c(2),p("icon",e.iconOptions[e.iconIndex]),c(),p("icon",e.iconOptions[e.iconIndex]),c(2),p("icon",e.iconOptions[e.iconIndex]),c(),p("icon",e.iconOptions[e.iconIndex]),c(2),p("active",!0)("icon",e.iconOptions[e.iconIndex]),c(2),p("icon",e.iconOptions[e.iconIndex]),c(2),p("icon",e.iconOptions[e.iconIndex]),c(2),p("icon",e.iconOptions[e.iconIndex]),c(4),p("active",!1)("icon",e.iconOptions[e.iconIndex]),c(2),p("icon",e.iconOptions[e.iconIndex]),c(24),p("value",e.stringifyValue(e.applicationName)),c(),p("value",e.stringifyValue(e.imprint)),c(),p("value",e.stringifyValue(e.termsOfUse)),c(),p("value",e.stringifyValue(e.privacyPolicy)),c(),p("value",e.stringifyValue(e.copyrightText)),c(),p("value",e.stringifyValue(e.hideMenuLabel)),c(),p("value",e.stringifyValue(e.logoHref)),c(5),g(" ",e.stringifyValue(e.applicationName)),c(4),g(" ",e.stringifyValue(e.showHeader)),c(4),g(" ",e.stringifyValue(e.showFooter)),c(4),g(" ",e.stringifyValue(e.initialCollapse)),c(4),g(" ",e.stringifyValue(e.collapsed)),c(4),g(" ",e.stringifyValue(e.collapsible)),c(4),g(" ",e.stringifyValue(e.positionOptions[e.positionIndex])),c(4),g(" ",e.stringifyValue(e.imprint)),c(4),g(" ",e.stringifyValue(e.termsOfUse)),c(4),g(" ",e.stringifyValue(e.privacyPolicy)),c(4),g(" ",e.stringifyValue(e.copyrightText)),c(4),g(" ",e.stringifyValue(e.iconOptions[e.iconIndex])),c(4),g(" ",e.stringifyValue(e.hideMenuLabel)),c(4),g(" ",e.stringifyValue(e.logoHref)),c(4),g(" ",e.stringifyValue(e.logoHrefTargetOptions[e.logoHrefTargetIndex])),c(4),g(" ",e.stringifyValue(e.footerHrefTargetOptions[e.footerHrefTargetIndex])),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,mh,gh,hh,M,A],encapsulation:2})};var xa=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-notification-example',
  templateUrl: './ifx-notification-example.html',
  styleUrl: './ifx-notification-example.scss',
  standalone: false
})
export class IfxNotificationExample {

  protected label = "Sample Notification";
  protected readonly variantOptions = ["success","locked","error","neutral"];
  protected variantIndex = 0;
  protected readonly iconOptions = ["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];
  protected iconIndex = 0;
  protected linkText = "Link";
  protected linkHref = "https://www.example.com";
  protected readonly linkTargetOptions = ["_blank","_self","_parent"];
  protected linkTargetIndex = 0;

  protected updateLabel(value: string) {
    this.label = value;
  }

  protected toggleVariant() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
  }

  protected toggleIcon() {
    this.iconIndex = (this.iconIndex + 1) % this.iconOptions.length;
  }

  protected updateLinkText(value: string) {
    this.linkText = value;
  }

  protected updateLinkHref(value: string) {
    this.linkHref = value;
  }

  protected toggleLinkTarget() {
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
    [linkTarget]=&quot;linkTargetOptions[linkTargetIndex]&quot;&gt;
    {{ label }}
  &lt;/ifx-notification&gt;`;label="Sample Notification";variantOptions=["success","locked","error","neutral"];variantIndex=0;iconOptions=["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];iconIndex=0;linkText="Link";linkHref="https://www.example.com";linkTargetOptions=["_blank","_self","_parent"];linkTargetIndex=0;updateLabel(t){this.label=t}toggleVariant(){this.variantIndex=(this.variantIndex+1)%this.variantOptions.length}toggleIcon(){this.iconIndex=(this.iconIndex+1)%this.iconOptions.length}updateLinkText(t){this.linkText=t}updateLinkHref(t){this.linkHref=t}toggleLinkTarget(){this.linkTargetIndex=(this.linkTargetIndex+1)%this.linkTargetOptions.length}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-notification-example"]],standalone:!1,decls:52,vars:17,consts:[[3,"icon","variant","linkText","linkHref","linkTarget"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","label","type","text",3,"ifxInput","value"],["label","linkText","type","text",3,"ifxInput","value"],["label","linkHref","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-notification",0),s(1),o(),l(2,"h3",1),s(3,"Controls"),o(),l(4,"div",2)(5,"ifx-button",3),f("click",function(){return e.toggleVariant()}),s(6,"Toggle Variant"),o(),l(7,"ifx-button",3),f("click",function(){return e.toggleIcon()}),s(8,"Toggle Icon"),o(),l(9,"ifx-button",3),f("click",function(){return e.toggleLinkTarget()}),s(10,"Toggle LinkTarget"),o()(),l(11,"div",4)(12,"ifx-text-field",5),f("ifxInput",function(a){return e.updateLabel(e.getControlInputValue(a))}),o(),l(13,"ifx-text-field",6),f("ifxInput",function(a){return e.updateLinkText(e.getControlInputValue(a))}),o(),l(14,"ifx-text-field",7),f("ifxInput",function(a){return e.updateLinkHref(e.getControlInputValue(a))}),o()(),l(15,"div",8)(16,"div")(17,"b"),s(18,"label:"),o(),s(19),o(),l(20,"div")(21,"b"),s(22,"variant:"),o(),s(23),o(),l(24,"div")(25,"b"),s(26,"icon:"),o(),s(27),o(),l(28,"div")(29,"b"),s(30,"linkText:"),o(),s(31),o(),l(32,"div")(33,"b"),s(34,"linkHref:"),o(),s(35),o(),l(36,"div")(37,"b"),s(38,"linkTarget:"),o(),s(39),o()(),l(40,"details",9)(41,"summary"),s(42,"View Code"),o(),l(43,"div",10)(44,"h3"),s(45,"ifx-notification-example.ts"),o(),l(46,"pre"),b(47,"code",11),o(),l(48,"h3"),s(49,"ifx-notification-example.html"),o(),l(50,"pre"),b(51,"code",12),o()()()),i&2&&(p("icon",e.iconOptions[e.iconIndex])("variant",e.variantOptions[e.variantIndex])("linkText",e.linkText)("linkHref",e.linkHref)("linkTarget",e.linkTargetOptions[e.linkTargetIndex]),c(),g(" ",e.label," "),c(11),p("value",e.stringifyValue(e.label)),c(),p("value",e.stringifyValue(e.linkText)),c(),p("value",e.stringifyValue(e.linkHref)),c(5),g(" ",e.stringifyValue(e.label)),c(4),g(" ",e.stringifyValue(e.variantOptions[e.variantIndex])),c(4),g(" ",e.stringifyValue(e.iconOptions[e.iconIndex])),c(4),g(" ",e.stringifyValue(e.linkText)),c(4),g(" ",e.stringifyValue(e.linkHref)),c(4),g(" ",e.stringifyValue(e.linkTargetOptions[e.linkTargetIndex])),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,sh,M,A],encapsulation:2})};var ba=class n{tsCode=`import { Component } from '@angular/core';
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

  protected toggleShowItemsPerPage() {
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
    [itemsPerPageLabel]=&quot;itemsPerPageLabel&quot;&gt;&lt;/ifx-pagination&gt;`;currentPage="1";total="50";itemsPerPage='[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}, {"value":"all","selected":false}]';showItemsPerPage=!0;itemsPerPageLabel="Result per Pages";updateCurrentPage(t){this.currentPage=t}updateTotal(t){this.total=t}updateItemsPerPage(t){this.itemsPerPage=t}toggleShowItemsPerPage(){this.showItemsPerPage=!this.showItemsPerPage}updateItemsPerPageLabel(t){this.itemsPerPageLabel=t}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleItemsPerPageChange(t){console.log("ifxItemsPerPageChange:",t)}handlePageChange(t){console.log("ifxPageChange:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-pagination-example"]],standalone:!1,decls:44,vars:16,consts:[[3,"ifxItemsPerPageChange","ifxPageChange","total","currentPage","showItemsPerPage","itemsPerPage","itemsPerPageLabel"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","currentPage","type","text",3,"ifxInput","value"],["label","total","type","text",3,"ifxInput","value"],["label","itemsPerPage","type","text",3,"ifxInput","value"],["label","itemsPerPageLabel","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-pagination",0),f("ifxItemsPerPageChange",function(a){return e.handleItemsPerPageChange(a)})("ifxPageChange",function(a){return e.handlePageChange(a)}),o(),l(1,"h3",1),s(2,"Controls"),o(),l(3,"div",2)(4,"ifx-button",3),f("click",function(){return e.toggleShowItemsPerPage()}),s(5,"Toggle ShowItemsPerPage"),o()(),l(6,"div",4)(7,"ifx-text-field",5),f("ifxInput",function(a){return e.updateCurrentPage(e.getControlInputValue(a))}),o(),l(8,"ifx-text-field",6),f("ifxInput",function(a){return e.updateTotal(e.getControlInputValue(a))}),o(),l(9,"ifx-text-field",7),f("ifxInput",function(a){return e.updateItemsPerPage(e.getControlInputValue(a))}),o(),l(10,"ifx-text-field",8),f("ifxInput",function(a){return e.updateItemsPerPageLabel(e.getControlInputValue(a))}),o()(),l(11,"div",9)(12,"div")(13,"b"),s(14,"currentPage:"),o(),s(15),o(),l(16,"div")(17,"b"),s(18,"total:"),o(),s(19),o(),l(20,"div")(21,"b"),s(22,"itemsPerPage:"),o(),s(23),o(),l(24,"div")(25,"b"),s(26,"showItemsPerPage:"),o(),s(27),o(),l(28,"div")(29,"b"),s(30,"itemsPerPageLabel:"),o(),s(31),o()(),l(32,"details",10)(33,"summary"),s(34,"View Code"),o(),l(35,"div",11)(36,"h3"),s(37,"ifx-pagination-example.ts"),o(),l(38,"pre"),b(39,"code",12),o(),l(40,"h3"),s(41,"ifx-pagination-example.html"),o(),l(42,"pre"),b(43,"code",13),o()()()),i&2&&(p("total",e.total)("currentPage",e.currentPage)("showItemsPerPage",e.showItemsPerPage)("itemsPerPage",e.itemsPerPage)("itemsPerPageLabel",e.itemsPerPageLabel),c(7),p("value",e.stringifyValue(e.currentPage)),c(),p("value",e.stringifyValue(e.total)),c(),p("value",e.stringifyValue(e.itemsPerPage)),c(),p("value",e.stringifyValue(e.itemsPerPageLabel)),c(5),g(" ",e.stringifyValue(e.currentPage)),c(4),g(" ",e.stringifyValue(e.total)),c(4),g(" ",e.stringifyValue(e.itemsPerPage)),c(4),g(" ",e.stringifyValue(e.showItemsPerPage)),c(4),g(" ",e.stringifyValue(e.itemsPerPageLabel)),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,lh,M,A],encapsulation:2})};var ya=class n{tsCode=`import { Component } from '@angular/core';
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

  protected toggleShowLabel() {
    this.showLabel = !this.showLabel;
  }

  protected toggleSize() {
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
    [showLabel]=&quot;showLabel&quot;&gt;&lt;/ifx-progress-bar&gt;`;value=50;showLabel=!1;sizeOptions=["s","m"];sizeIndex=1;updateValue(t){this.value=Number(t)}toggleShowLabel(){this.showLabel=!this.showLabel}toggleSize(){this.sizeIndex=(this.sizeIndex+1)%this.sizeOptions.length}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-progress-bar-example"]],standalone:!1,decls:35,vars:9,consts:[[3,"value","size","showLabel"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","value","type","number",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(b(0,"ifx-progress-bar",0),l(1,"h3",1),s(2,"Controls"),o(),l(3,"div",2)(4,"ifx-button",3),f("click",function(){return e.toggleShowLabel()}),s(5,"Toggle ShowLabel"),o(),l(6,"ifx-button",3),f("click",function(){return e.toggleSize()}),s(7,"Toggle Size"),o()(),l(8,"div",4)(9,"ifx-text-field",5),f("ifxInput",function(a){return e.updateValue(e.getControlInputValue(a))}),o()(),l(10,"div",6)(11,"div")(12,"b"),s(13,"value:"),o(),s(14),o(),l(15,"div")(16,"b"),s(17,"showLabel:"),o(),s(18),o(),l(19,"div")(20,"b"),s(21,"size:"),o(),s(22),o()(),l(23,"details",7)(24,"summary"),s(25,"View Code"),o(),l(26,"div",8)(27,"h3"),s(28,"ifx-progress-bar-example.ts"),o(),l(29,"pre"),b(30,"code",9),o(),l(31,"h3"),s(32,"ifx-progress-bar-example.html"),o(),l(33,"pre"),b(34,"code",10),o()()()),i&2&&(p("value",e.value)("size",e.sizeOptions[e.sizeIndex])("showLabel",e.showLabel),c(9),p("value",e.stringifyValue(e.value)),c(5),g(" ",e.stringifyValue(e.value)),c(4),g(" ",e.stringifyValue(e.showLabel)),c(4),g(" ",e.stringifyValue(e.sizeOptions[e.sizeIndex])),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,ch,M,A],encapsulation:2})};var Ia=class n{tsCode=`import { Component } from '@angular/core';
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
  protected label = "Text";
  protected readonly sizeOptions = ["s","m"];
  protected sizeIndex = 0;
  protected name = "radio-button";
  protected value = "radio";

  protected toggleError() {
    this.error = !this.error;
  }

  protected toggleDisabled() {
    this.disabled = !this.disabled;
  }

  protected toggleChecked() {
    this.checked = !this.checked;
  }

  protected updateLabel(value: string) {
    this.label = value;
  }

  protected toggleSize() {
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
    [checked]=&quot;checked&quot;&gt;
    {{ label }}
  &lt;/ifx-radio-button&gt;`;error=!1;disabled=!1;checked=!1;label="Text";sizeOptions=["s","m"];sizeIndex=0;name="radio-button";value="radio";toggleError(){this.error=!this.error}toggleDisabled(){this.disabled=!this.disabled}toggleChecked(){this.checked=!this.checked}updateLabel(t){this.label=t}toggleSize(){this.sizeIndex=(this.sizeIndex+1)%this.sizeOptions.length}updateName(t){this.name=t}updateValue(t){this.value=t}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleChange(t){console.log("ifxChange:",t)}handleError(t){console.log("ifxError:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-radio-button-example"]],standalone:!1,decls:58,vars:19,consts:[[3,"ifxChange","ifxError","size","name","value","error","disabled","checked"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","label","type","text",3,"ifxInput","value"],["label","name","type","text",3,"ifxInput","value"],["label","value","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-radio-button",0),f("ifxChange",function(a){return e.handleChange(a)})("ifxError",function(a){return e.handleError(a)}),s(1),o(),l(2,"h3",1),s(3,"Controls"),o(),l(4,"div",2)(5,"ifx-button",3),f("click",function(){return e.toggleError()}),s(6,"Toggle Error"),o(),l(7,"ifx-button",3),f("click",function(){return e.toggleDisabled()}),s(8,"Toggle Disabled"),o(),l(9,"ifx-button",3),f("click",function(){return e.toggleChecked()}),s(10,"Toggle Checked"),o(),l(11,"ifx-button",3),f("click",function(){return e.toggleSize()}),s(12,"Toggle Size"),o()(),l(13,"div",4)(14,"ifx-text-field",5),f("ifxInput",function(a){return e.updateLabel(e.getControlInputValue(a))}),o(),l(15,"ifx-text-field",6),f("ifxInput",function(a){return e.updateName(e.getControlInputValue(a))}),o(),l(16,"ifx-text-field",7),f("ifxInput",function(a){return e.updateValue(e.getControlInputValue(a))}),o()(),l(17,"div",8)(18,"div")(19,"b"),s(20,"error:"),o(),s(21),o(),l(22,"div")(23,"b"),s(24,"disabled:"),o(),s(25),o(),l(26,"div")(27,"b"),s(28,"checked:"),o(),s(29),o(),l(30,"div")(31,"b"),s(32,"label:"),o(),s(33),o(),l(34,"div")(35,"b"),s(36,"size:"),o(),s(37),o(),l(38,"div")(39,"b"),s(40,"name:"),o(),s(41),o(),l(42,"div")(43,"b"),s(44,"value:"),o(),s(45),o()(),l(46,"details",9)(47,"summary"),s(48,"View Code"),o(),l(49,"div",10)(50,"h3"),s(51,"ifx-radio-button-example.ts"),o(),l(52,"pre"),b(53,"code",11),o(),l(54,"h3"),s(55,"ifx-radio-button-example.html"),o(),l(56,"pre"),b(57,"code",12),o()()()),i&2&&(p("size",e.sizeOptions[e.sizeIndex])("name",e.name)("value",e.value)("error",e.error)("disabled",e.disabled)("checked",e.checked),c(),g(" ",e.label," "),c(13),p("value",e.stringifyValue(e.label)),c(),p("value",e.stringifyValue(e.name)),c(),p("value",e.stringifyValue(e.value)),c(5),g(" ",e.stringifyValue(e.error)),c(4),g(" ",e.stringifyValue(e.disabled)),c(4),g(" ",e.stringifyValue(e.checked)),c(4),g(" ",e.stringifyValue(e.label)),c(4),g(" ",e.stringifyValue(e.sizeOptions[e.sizeIndex])),c(4),g(" ",e.stringifyValue(e.name)),c(4),g(" ",e.stringifyValue(e.value)),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,Go,M,A],encapsulation:2})};var Ea=class n{tsCode=`import { Component } from '@angular/core';
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

  protected toggleAlignment() {
    this.alignmentIndex = (this.alignmentIndex + 1) % this.alignmentOptions.length;
  }

  protected toggleSize() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected toggleShowGroupLabel() {
    this.showGroupLabel = !this.showGroupLabel;
  }

  protected updateGroupLabelText(value: string) {
    this.groupLabelText = value;
  }

  protected toggleShowCaption() {
    this.showCaption = !this.showCaption;
  }

  protected updateCaptionText(value: string) {
    this.captionText = value;
  }

  protected toggleShowCaptionIcon() {
    this.showCaptionIcon = !this.showCaptionIcon;
  }

  protected toggleRequired() {
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
  &lt;/ifx-radio-button-group&gt;`;alignmentOptions=["vertical","horizontal"];alignmentIndex=0;sizeOptions=["s","m"];sizeIndex=1;showGroupLabel=!1;groupLabelText="Group Label";showCaption=!1;captionText="Caption text, description, error notification";showCaptionIcon=!1;required=!1;toggleAlignment(){this.alignmentIndex=(this.alignmentIndex+1)%this.alignmentOptions.length}toggleSize(){this.sizeIndex=(this.sizeIndex+1)%this.sizeOptions.length}toggleShowGroupLabel(){this.showGroupLabel=!this.showGroupLabel}updateGroupLabelText(t){this.groupLabelText=t}toggleShowCaption(){this.showCaption=!this.showCaption}updateCaptionText(t){this.captionText=t}toggleShowCaptionIcon(){this.showCaptionIcon=!this.showCaptionIcon}toggleRequired(){this.required=!this.required}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleChange(t){console.log("ifxChange:",t)}handleError(t){console.log("ifxError:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-radio-button-group-example"]],standalone:!1,decls:70,vars:23,consts:[[3,"alignment","groupLabelText","captionText","size","showGroupLabel","showCaption","showCaptionIcon","required"],["value","0",3,"size"],["value","1",3,"size"],["value","2",3,"size"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","groupLabelText","type","text",3,"ifxInput","value"],["label","captionText","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-radio-button-group",0)(1,"ifx-radio-button",1),s(2,"Option 0"),o(),l(3,"ifx-radio-button",2),s(4,"Option 1"),o(),l(5,"ifx-radio-button",3),s(6,"Option 2"),o()(),l(7,"h3",4),s(8,"Controls"),o(),l(9,"div",5)(10,"ifx-button",6),f("click",function(){return e.toggleAlignment()}),s(11,"Toggle Alignment"),o(),l(12,"ifx-button",6),f("click",function(){return e.toggleSize()}),s(13,"Toggle Size"),o(),l(14,"ifx-button",6),f("click",function(){return e.toggleShowGroupLabel()}),s(15,"Toggle ShowGroupLabel"),o(),l(16,"ifx-button",6),f("click",function(){return e.toggleShowCaption()}),s(17,"Toggle ShowCaption"),o(),l(18,"ifx-button",6),f("click",function(){return e.toggleShowCaptionIcon()}),s(19,"Toggle ShowCaptionIcon"),o(),l(20,"ifx-button",6),f("click",function(){return e.toggleRequired()}),s(21,"Toggle Required"),o()(),l(22,"div",7)(23,"ifx-text-field",8),f("ifxInput",function(a){return e.updateGroupLabelText(e.getControlInputValue(a))}),o(),l(24,"ifx-text-field",9),f("ifxInput",function(a){return e.updateCaptionText(e.getControlInputValue(a))}),o()(),l(25,"div",10)(26,"div")(27,"b"),s(28,"alignment:"),o(),s(29),o(),l(30,"div")(31,"b"),s(32,"size:"),o(),s(33),o(),l(34,"div")(35,"b"),s(36,"showGroupLabel:"),o(),s(37),o(),l(38,"div")(39,"b"),s(40,"groupLabelText:"),o(),s(41),o(),l(42,"div")(43,"b"),s(44,"showCaption:"),o(),s(45),o(),l(46,"div")(47,"b"),s(48,"captionText:"),o(),s(49),o(),l(50,"div")(51,"b"),s(52,"showCaptionIcon:"),o(),s(53),o(),l(54,"div")(55,"b"),s(56,"required:"),o(),s(57),o()(),l(58,"details",11)(59,"summary"),s(60,"View Code"),o(),l(61,"div",12)(62,"h3"),s(63,"ifx-radio-button-group-example.ts"),o(),l(64,"pre"),b(65,"code",13),o(),l(66,"h3"),s(67,"ifx-radio-button-group-example.html"),o(),l(68,"pre"),b(69,"code",14),o()()()),i&2&&(p("alignment",e.alignmentOptions[e.alignmentIndex])("groupLabelText",e.groupLabelText)("captionText",e.captionText)("size",e.sizeOptions[e.sizeIndex])("showGroupLabel",e.showGroupLabel)("showCaption",e.showCaption)("showCaptionIcon",e.showCaptionIcon)("required",e.required),c(),p("size",e.sizeOptions[e.sizeIndex]),c(2),p("size",e.sizeOptions[e.sizeIndex]),c(2),p("size",e.sizeOptions[e.sizeIndex]),c(18),p("value",e.stringifyValue(e.groupLabelText)),c(),p("value",e.stringifyValue(e.captionText)),c(5),g(" ",e.stringifyValue(e.alignmentOptions[e.alignmentIndex])),c(4),g(" ",e.stringifyValue(e.sizeOptions[e.sizeIndex])),c(4),g(" ",e.stringifyValue(e.showGroupLabel)),c(4),g(" ",e.stringifyValue(e.groupLabelText)),c(4),g(" ",e.stringifyValue(e.showCaption)),c(4),g(" ",e.stringifyValue(e.captionText)),c(4),g(" ",e.stringifyValue(e.showCaptionIcon)),c(4),g(" ",e.stringifyValue(e.required)),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,Go,dh,M,A],encapsulation:2})};var Ca=class n{tsCode=`import { Component } from '@angular/core';
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
  protected showCloseButton = true;

  protected toggleIsOpen() {
    this.isOpen = !this.isOpen;
  }

  protected toggleDisabled() {
    this.disabled = !this.disabled;
  }

  protected updateValue(value: string) {
    this.value = value;
  }

  protected updateAutocomplete(value: string) {
    this.autocomplete = value;
  }

  protected toggleShowCloseButton() {
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
    [autocomplete]=&quot;autocomplete&quot;&gt;&lt;/ifx-search-bar&gt;`;isOpen=!0;disabled=!1;value="";autocomplete="on";showCloseButton=!0;toggleIsOpen(){this.isOpen=!this.isOpen}toggleDisabled(){this.disabled=!this.disabled}updateValue(t){this.value=t}updateAutocomplete(t){this.autocomplete=t}toggleShowCloseButton(){this.showCloseButton=!this.showCloseButton}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleInput(t){console.log("ifxInput:",t)}handleOpen(t){console.log("ifxOpen:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-search-bar-example"]],standalone:!1,decls:46,vars:14,consts:[[3,"ifxInput","ifxOpen","isOpen","disabled","value","showCloseButton","autocomplete"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","value","type","text",3,"ifxInput","value"],["label","autocomplete","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-search-bar",0),f("ifxInput",function(a){return e.handleInput(a)})("ifxOpen",function(a){return e.handleOpen(a)}),o(),l(1,"h3",1),s(2,"Controls"),o(),l(3,"div",2)(4,"ifx-button",3),f("click",function(){return e.toggleIsOpen()}),s(5,"Toggle IsOpen"),o(),l(6,"ifx-button",3),f("click",function(){return e.toggleDisabled()}),s(7,"Toggle Disabled"),o(),l(8,"ifx-button",3),f("click",function(){return e.toggleShowCloseButton()}),s(9,"Toggle ShowCloseButton"),o()(),l(10,"div",4)(11,"ifx-text-field",5),f("ifxInput",function(a){return e.updateValue(e.getControlInputValue(a))}),o(),l(12,"ifx-text-field",6),f("ifxInput",function(a){return e.updateAutocomplete(e.getControlInputValue(a))}),o()(),l(13,"div",7)(14,"div")(15,"b"),s(16,"isOpen:"),o(),s(17),o(),l(18,"div")(19,"b"),s(20,"disabled:"),o(),s(21),o(),l(22,"div")(23,"b"),s(24,"value:"),o(),s(25),o(),l(26,"div")(27,"b"),s(28,"autocomplete:"),o(),s(29),o(),l(30,"div")(31,"b"),s(32,"showCloseButton:"),o(),s(33),o()(),l(34,"details",8)(35,"summary"),s(36,"View Code"),o(),l(37,"div",9)(38,"h3"),s(39,"ifx-search-bar-example.ts"),o(),l(40,"pre"),b(41,"code",10),o(),l(42,"h3"),s(43,"ifx-search-bar-example.html"),o(),l(44,"pre"),b(45,"code",11),o()()()),i&2&&(p("isOpen",e.isOpen)("disabled",e.disabled)("value",e.value)("showCloseButton",e.showCloseButton)("autocomplete",e.autocomplete),c(11),p("value",e.stringifyValue(e.value)),c(),p("value",e.stringifyValue(e.autocomplete)),c(5),g(" ",e.stringifyValue(e.isOpen)),c(4),g(" ",e.stringifyValue(e.disabled)),c(4),g(" ",e.stringifyValue(e.value)),c(4),g(" ",e.stringifyValue(e.autocomplete)),c(4),g(" ",e.stringifyValue(e.showCloseButton)),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,Nn,M,A],encapsulation:2})};var wa=class n{tsCode=`import { Component } from '@angular/core';
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

  protected toggleShowDeleteIcon() {
    this.showDeleteIcon = !this.showDeleteIcon;
  }

  protected toggleDisabled() {
    this.disabled = !this.disabled;
  }

  protected toggleSize() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected updatePlaceholder(value: string) {
    this.placeholder = value;
  }

  protected updateValue(value: string) {
    this.value = value;
  }

  protected updateAutocomplete(value: string) {
    this.autocomplete = value;
  }

  protected toggleShowSuggestions() {
    this.showSuggestions = !this.showSuggestions;
  }

  protected toggleEnableHistory() {
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
    [disabled]=&quot;disabled&quot;
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
    [historyItemAriaLabel]=&quot;historyItemAriaLabel&quot;&gt;&lt;/ifx-search-field&gt;`;showDeleteIcon=!0;disabled=!1;sizeOptions=["s","m"];sizeIndex=1;placeholder="Search...";value="";autocomplete="on";showSuggestions=!1;enableHistory=!0;maxSuggestions=10;maxHistoryItems=5;historyKey="ifx-search-history";historyHeaderText="Recent Searches";ariaLabelText="Search field";deleteIconAriaLabel="Clear search";historyDeleteAriaLabel="Remove from history";dropdownAriaLabel="Search suggestions and history";suggestionAriaLabel="Search suggestion";historyItemAriaLabel="Search history item";toggleShowDeleteIcon(){this.showDeleteIcon=!this.showDeleteIcon}toggleDisabled(){this.disabled=!this.disabled}toggleSize(){this.sizeIndex=(this.sizeIndex+1)%this.sizeOptions.length}updatePlaceholder(t){this.placeholder=t}updateValue(t){this.value=t}updateAutocomplete(t){this.autocomplete=t}toggleShowSuggestions(){this.showSuggestions=!this.showSuggestions}toggleEnableHistory(){this.enableHistory=!this.enableHistory}updateMaxSuggestions(t){this.maxSuggestions=Number(t)}updateMaxHistoryItems(t){this.maxHistoryItems=Number(t)}updateHistoryKey(t){this.historyKey=t}updateHistoryHeaderText(t){this.historyHeaderText=t}updateAriaLabelText(t){this.ariaLabelText=t}updateDeleteIconAriaLabel(t){this.deleteIconAriaLabel=t}updateHistoryDeleteAriaLabel(t){this.historyDeleteAriaLabel=t}updateDropdownAriaLabel(t){this.dropdownAriaLabel=t}updateSuggestionAriaLabel(t){this.suggestionAriaLabel=t}updateHistoryItemAriaLabel(t){this.historyItemAriaLabel=t}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleBlur(t){console.log("ifxBlur:",t)}handleFocus(t){console.log("ifxFocus:",t)}handleInput(t){console.log("ifxInput:",t)}handleSuggestionRequested(t){console.log("ifxSuggestionRequested:",t)}handleSuggestionSelected(t){console.log("ifxSuggestionSelected:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-search-field-example"]],standalone:!1,decls:113,vars:51,consts:[[3,"ifxBlur","ifxFocus","ifxInput","ifxSuggestionRequested","ifxSuggestionSelected","size","disabled","showDeleteIcon","showSuggestions","enableHistory","maxSuggestions","maxHistoryItems","historyKey","historyHeaderText","value","autocomplete","placeholder","ariaLabelText","deleteIconAriaLabel","historyDeleteAriaLabel","dropdownAriaLabel","suggestionAriaLabel","historyItemAriaLabel"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","placeholder","type","text",3,"ifxInput","value"],["label","value","type","text",3,"ifxInput","value"],["label","autocomplete","type","text",3,"ifxInput","value"],["label","maxSuggestions","type","number",3,"ifxInput","value"],["label","maxHistoryItems","type","number",3,"ifxInput","value"],["label","historyKey","type","text",3,"ifxInput","value"],["label","historyHeaderText","type","text",3,"ifxInput","value"],["label","ariaLabelText","type","text",3,"ifxInput","value"],["label","deleteIconAriaLabel","type","text",3,"ifxInput","value"],["label","historyDeleteAriaLabel","type","text",3,"ifxInput","value"],["label","dropdownAriaLabel","type","text",3,"ifxInput","value"],["label","suggestionAriaLabel","type","text",3,"ifxInput","value"],["label","historyItemAriaLabel","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-search-field",0),f("ifxBlur",function(a){return e.handleBlur(a)})("ifxFocus",function(a){return e.handleFocus(a)})("ifxInput",function(a){return e.handleInput(a)})("ifxSuggestionRequested",function(a){return e.handleSuggestionRequested(a)})("ifxSuggestionSelected",function(a){return e.handleSuggestionSelected(a)}),o(),l(1,"h3",1),s(2,"Controls"),o(),l(3,"div",2)(4,"ifx-button",3),f("click",function(){return e.toggleShowDeleteIcon()}),s(5,"Toggle ShowDeleteIcon"),o(),l(6,"ifx-button",3),f("click",function(){return e.toggleDisabled()}),s(7,"Toggle Disabled"),o(),l(8,"ifx-button",3),f("click",function(){return e.toggleSize()}),s(9,"Toggle Size"),o(),l(10,"ifx-button",3),f("click",function(){return e.toggleShowSuggestions()}),s(11,"Toggle ShowSuggestions"),o(),l(12,"ifx-button",3),f("click",function(){return e.toggleEnableHistory()}),s(13,"Toggle EnableHistory"),o()(),l(14,"div",4)(15,"ifx-text-field",5),f("ifxInput",function(a){return e.updatePlaceholder(e.getControlInputValue(a))}),o(),l(16,"ifx-text-field",6),f("ifxInput",function(a){return e.updateValue(e.getControlInputValue(a))}),o(),l(17,"ifx-text-field",7),f("ifxInput",function(a){return e.updateAutocomplete(e.getControlInputValue(a))}),o(),l(18,"ifx-text-field",8),f("ifxInput",function(a){return e.updateMaxSuggestions(e.getControlInputValue(a))}),o(),l(19,"ifx-text-field",9),f("ifxInput",function(a){return e.updateMaxHistoryItems(e.getControlInputValue(a))}),o(),l(20,"ifx-text-field",10),f("ifxInput",function(a){return e.updateHistoryKey(e.getControlInputValue(a))}),o(),l(21,"ifx-text-field",11),f("ifxInput",function(a){return e.updateHistoryHeaderText(e.getControlInputValue(a))}),o(),l(22,"ifx-text-field",12),f("ifxInput",function(a){return e.updateAriaLabelText(e.getControlInputValue(a))}),o(),l(23,"ifx-text-field",13),f("ifxInput",function(a){return e.updateDeleteIconAriaLabel(e.getControlInputValue(a))}),o(),l(24,"ifx-text-field",14),f("ifxInput",function(a){return e.updateHistoryDeleteAriaLabel(e.getControlInputValue(a))}),o(),l(25,"ifx-text-field",15),f("ifxInput",function(a){return e.updateDropdownAriaLabel(e.getControlInputValue(a))}),o(),l(26,"ifx-text-field",16),f("ifxInput",function(a){return e.updateSuggestionAriaLabel(e.getControlInputValue(a))}),o(),l(27,"ifx-text-field",17),f("ifxInput",function(a){return e.updateHistoryItemAriaLabel(e.getControlInputValue(a))}),o()(),l(28,"div",18)(29,"div")(30,"b"),s(31,"showDeleteIcon:"),o(),s(32),o(),l(33,"div")(34,"b"),s(35,"disabled:"),o(),s(36),o(),l(37,"div")(38,"b"),s(39,"size:"),o(),s(40),o(),l(41,"div")(42,"b"),s(43,"placeholder:"),o(),s(44),o(),l(45,"div")(46,"b"),s(47,"value:"),o(),s(48),o(),l(49,"div")(50,"b"),s(51,"autocomplete:"),o(),s(52),o(),l(53,"div")(54,"b"),s(55,"showSuggestions:"),o(),s(56),o(),l(57,"div")(58,"b"),s(59,"enableHistory:"),o(),s(60),o(),l(61,"div")(62,"b"),s(63,"maxSuggestions:"),o(),s(64),o(),l(65,"div")(66,"b"),s(67,"maxHistoryItems:"),o(),s(68),o(),l(69,"div")(70,"b"),s(71,"historyKey:"),o(),s(72),o(),l(73,"div")(74,"b"),s(75,"historyHeaderText:"),o(),s(76),o(),l(77,"div")(78,"b"),s(79,"ariaLabelText:"),o(),s(80),o(),l(81,"div")(82,"b"),s(83,"deleteIconAriaLabel:"),o(),s(84),o(),l(85,"div")(86,"b"),s(87,"historyDeleteAriaLabel:"),o(),s(88),o(),l(89,"div")(90,"b"),s(91,"dropdownAriaLabel:"),o(),s(92),o(),l(93,"div")(94,"b"),s(95,"suggestionAriaLabel:"),o(),s(96),o(),l(97,"div")(98,"b"),s(99,"historyItemAriaLabel:"),o(),s(100),o()(),l(101,"details",19)(102,"summary"),s(103,"View Code"),o(),l(104,"div",20)(105,"h3"),s(106,"ifx-search-field-example.ts"),o(),l(107,"pre"),b(108,"code",21),o(),l(109,"h3"),s(110,"ifx-search-field-example.html"),o(),l(111,"pre"),b(112,"code",22),o()()()),i&2&&(p("size",e.sizeOptions[e.sizeIndex])("disabled",e.disabled)("showDeleteIcon",e.showDeleteIcon)("showSuggestions",e.showSuggestions)("enableHistory",e.enableHistory)("maxSuggestions",e.maxSuggestions)("maxHistoryItems",e.maxHistoryItems)("historyKey",e.historyKey)("historyHeaderText",e.historyHeaderText)("value",e.value)("autocomplete",e.autocomplete)("placeholder",e.placeholder)("ariaLabelText",e.ariaLabelText)("deleteIconAriaLabel",e.deleteIconAriaLabel)("historyDeleteAriaLabel",e.historyDeleteAriaLabel)("dropdownAriaLabel",e.dropdownAriaLabel)("suggestionAriaLabel",e.suggestionAriaLabel)("historyItemAriaLabel",e.historyItemAriaLabel),c(15),p("value",e.stringifyValue(e.placeholder)),c(),p("value",e.stringifyValue(e.value)),c(),p("value",e.stringifyValue(e.autocomplete)),c(),p("value",e.stringifyValue(e.maxSuggestions)),c(),p("value",e.stringifyValue(e.maxHistoryItems)),c(),p("value",e.stringifyValue(e.historyKey)),c(),p("value",e.stringifyValue(e.historyHeaderText)),c(),p("value",e.stringifyValue(e.ariaLabelText)),c(),p("value",e.stringifyValue(e.deleteIconAriaLabel)),c(),p("value",e.stringifyValue(e.historyDeleteAriaLabel)),c(),p("value",e.stringifyValue(e.dropdownAriaLabel)),c(),p("value",e.stringifyValue(e.suggestionAriaLabel)),c(),p("value",e.stringifyValue(e.historyItemAriaLabel)),c(5),g(" ",e.stringifyValue(e.showDeleteIcon)),c(4),g(" ",e.stringifyValue(e.disabled)),c(4),g(" ",e.stringifyValue(e.sizeOptions[e.sizeIndex])),c(4),g(" ",e.stringifyValue(e.placeholder)),c(4),g(" ",e.stringifyValue(e.value)),c(4),g(" ",e.stringifyValue(e.autocomplete)),c(4),g(" ",e.stringifyValue(e.showSuggestions)),c(4),g(" ",e.stringifyValue(e.enableHistory)),c(4),g(" ",e.stringifyValue(e.maxSuggestions)),c(4),g(" ",e.stringifyValue(e.maxHistoryItems)),c(4),g(" ",e.stringifyValue(e.historyKey)),c(4),g(" ",e.stringifyValue(e.historyHeaderText)),c(4),g(" ",e.stringifyValue(e.ariaLabelText)),c(4),g(" ",e.stringifyValue(e.deleteIconAriaLabel)),c(4),g(" ",e.stringifyValue(e.historyDeleteAriaLabel)),c(4),g(" ",e.stringifyValue(e.dropdownAriaLabel)),c(4),g(" ",e.stringifyValue(e.suggestionAriaLabel)),c(4),g(" ",e.stringifyValue(e.historyItemAriaLabel)),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,Wo,M,A],encapsulation:2})};var _a=class n{tsCode=`import { Component } from '@angular/core';
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

  protected toggleSize() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected toggleIcon() {
    this.iconIndex = (this.iconIndex + 1) % this.iconOptions.length;
  }

  protected updateValue(value: string) {
    this.value = value;
  }

  protected toggleError() {
    this.error = !this.error;
  }

  protected toggleRequired() {
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
  &lt;/ifx-segmented-control&gt;`;caption="Caption text to describe the controls";label="Group Label";sizeOptions=["regular","small"];sizeIndex=0;iconOptions=["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];iconIndex=0;value="Value";error=!1;required=!1;updateCaption(t){this.caption=t}updateLabel(t){this.label=t}toggleSize(){this.sizeIndex=(this.sizeIndex+1)%this.sizeOptions.length}toggleIcon(){this.iconIndex=(this.iconIndex+1)%this.iconOptions.length}updateValue(t){this.value=t}toggleError(){this.error=!this.error}toggleRequired(){this.required=!this.required}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleChange(t){console.log("ifxChange:",t)}handleSegmentSelect(t){console.log("segmentSelect:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-segmented-control-example"]],standalone:!1,decls:62,vars:27,consts:[[3,"caption","label","size","error","required"],[3,"value","icon"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","caption","type","text",3,"ifxInput","value"],["label","label","type","text",3,"ifxInput","value"],["label","value","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-segmented-control",0),b(1,"ifx-segment",1)(2,"ifx-segment",1)(3,"ifx-segment",1)(4,"ifx-segment",1)(5,"ifx-segment",1),o(),l(6,"h3",2),s(7,"Controls"),o(),l(8,"div",3)(9,"ifx-button",4),f("click",function(){return e.toggleSize()}),s(10,"Toggle Size"),o(),l(11,"ifx-button",4),f("click",function(){return e.toggleIcon()}),s(12,"Toggle Icon"),o(),l(13,"ifx-button",4),f("click",function(){return e.toggleError()}),s(14,"Toggle Error"),o(),l(15,"ifx-button",4),f("click",function(){return e.toggleRequired()}),s(16,"Toggle Required"),o()(),l(17,"div",5)(18,"ifx-text-field",6),f("ifxInput",function(a){return e.updateCaption(e.getControlInputValue(a))}),o(),l(19,"ifx-text-field",7),f("ifxInput",function(a){return e.updateLabel(e.getControlInputValue(a))}),o(),l(20,"ifx-text-field",8),f("ifxInput",function(a){return e.updateValue(e.getControlInputValue(a))}),o()(),l(21,"div",9)(22,"div")(23,"b"),s(24,"caption:"),o(),s(25),o(),l(26,"div")(27,"b"),s(28,"label:"),o(),s(29),o(),l(30,"div")(31,"b"),s(32,"size:"),o(),s(33),o(),l(34,"div")(35,"b"),s(36,"icon:"),o(),s(37),o(),l(38,"div")(39,"b"),s(40,"value:"),o(),s(41),o(),l(42,"div")(43,"b"),s(44,"error:"),o(),s(45),o(),l(46,"div")(47,"b"),s(48,"required:"),o(),s(49),o()(),l(50,"details",10)(51,"summary"),s(52,"View Code"),o(),l(53,"div",11)(54,"h3"),s(55,"ifx-segmented-control-example.ts"),o(),l(56,"pre"),b(57,"code",12),o(),l(58,"h3"),s(59,"ifx-segmented-control-example.html"),o(),l(60,"pre"),b(61,"code",13),o()()()),i&2&&(p("caption",e.caption)("label",e.label)("size",e.sizeOptions[e.sizeIndex])("error",e.error)("required",e.required),c(),p("value",e.value)("icon",e.iconOptions[e.iconIndex]),c(),p("value",e.value)("icon",e.iconOptions[e.iconIndex]),c(),p("value",e.value)("icon",e.iconOptions[e.iconIndex]),c(),p("value",e.value)("icon",e.iconOptions[e.iconIndex]),c(),p("value",e.value)("icon",e.iconOptions[e.iconIndex]),c(13),p("value",e.stringifyValue(e.caption)),c(),p("value",e.stringifyValue(e.label)),c(),p("value",e.stringifyValue(e.value)),c(5),g(" ",e.stringifyValue(e.caption)),c(4),g(" ",e.stringifyValue(e.label)),c(4),g(" ",e.stringifyValue(e.sizeOptions[e.sizeIndex])),c(4),g(" ",e.stringifyValue(e.iconOptions[e.iconIndex])),c(4),g(" ",e.stringifyValue(e.value)),c(4),g(" ",e.stringifyValue(e.error)),c(4),g(" ",e.stringifyValue(e.required)),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,uh,ph,M,A],encapsulation:2})};var Da=class n{tsCode=`import { Component } from '@angular/core';
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

  protected toggleSize() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected togglePlaceholder() {
    this.placeholder = !this.placeholder;
  }

  protected updatePlaceholderValue(value: string) {
    this.placeholderValue = value;
  }

  protected toggleError() {
    this.error = !this.error;
  }

  protected updateLabel(value: string) {
    this.label = value;
  }

  protected toggleDisabled() {
    this.disabled = !this.disabled;
  }

  protected updateCaption(value: string) {
    this.caption = value;
  }

  protected toggleRequired() {
    this.required = !this.required;
  }

  protected toggleShowSearch() {
    this.showSearch = !this.showSearch;
  }

  protected toggleShowClearButton() {
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
    [disabled]=&quot;disabled&quot;&gt;&lt;/ifx-select&gt;`;sizeOptions=["s","m"];sizeIndex=1;placeholder=!0;placeholderValue="Placeholder";error=!1;label="";disabled=!1;caption="";required=!0;showSearch=!0;showClearButton=!0;searchPlaceholderValue="Search...";options='[{"value":"a","label":"option a","selected":false},{"value":"b","label":"option b","selected":false},{"value":"c","label":"option c","selected":false}]';toggleSize(){this.sizeIndex=(this.sizeIndex+1)%this.sizeOptions.length}togglePlaceholder(){this.placeholder=!this.placeholder}updatePlaceholderValue(t){this.placeholderValue=t}toggleError(){this.error=!this.error}updateLabel(t){this.label=t}toggleDisabled(){this.disabled=!this.disabled}updateCaption(t){this.caption=t}toggleRequired(){this.required=!this.required}toggleShowSearch(){this.showSearch=!this.showSearch}toggleShowClearButton(){this.showClearButton=!this.showClearButton}updateSearchPlaceholderValue(t){this.searchPlaceholderValue=t}updateOptions(t){this.options=t}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleInput(t){console.log("ifxInput:",t)}handleSelect(t){console.log("ifxSelect:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-select-example"]],standalone:!1,decls:85,vars:31,consts:[[3,"ifxInput","ifxSelect","size","placeholder","showClearButton","showSearch","searchPlaceholderValue","required","label","caption","placeholderValue","options","error","disabled"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","placeholderValue","type","text",3,"ifxInput","value"],["label","label","type","text",3,"ifxInput","value"],["label","caption","type","text",3,"ifxInput","value"],["label","searchPlaceholderValue","type","text",3,"ifxInput","value"],["label","options","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-select",0),f("ifxInput",function(a){return e.handleInput(a)})("ifxSelect",function(a){return e.handleSelect(a)}),o(),l(1,"h3",1),s(2,"Controls"),o(),l(3,"div",2)(4,"ifx-button",3),f("click",function(){return e.toggleSize()}),s(5,"Toggle Size"),o(),l(6,"ifx-button",3),f("click",function(){return e.togglePlaceholder()}),s(7,"Toggle Placeholder"),o(),l(8,"ifx-button",3),f("click",function(){return e.toggleError()}),s(9,"Toggle Error"),o(),l(10,"ifx-button",3),f("click",function(){return e.toggleDisabled()}),s(11,"Toggle Disabled"),o(),l(12,"ifx-button",3),f("click",function(){return e.toggleRequired()}),s(13,"Toggle Required"),o(),l(14,"ifx-button",3),f("click",function(){return e.toggleShowSearch()}),s(15,"Toggle ShowSearch"),o(),l(16,"ifx-button",3),f("click",function(){return e.toggleShowClearButton()}),s(17,"Toggle ShowClearButton"),o()(),l(18,"div",4)(19,"ifx-text-field",5),f("ifxInput",function(a){return e.updatePlaceholderValue(e.getControlInputValue(a))}),o(),l(20,"ifx-text-field",6),f("ifxInput",function(a){return e.updateLabel(e.getControlInputValue(a))}),o(),l(21,"ifx-text-field",7),f("ifxInput",function(a){return e.updateCaption(e.getControlInputValue(a))}),o(),l(22,"ifx-text-field",8),f("ifxInput",function(a){return e.updateSearchPlaceholderValue(e.getControlInputValue(a))}),o(),l(23,"ifx-text-field",9),f("ifxInput",function(a){return e.updateOptions(e.getControlInputValue(a))}),o()(),l(24,"div",10)(25,"div")(26,"b"),s(27,"size:"),o(),s(28),o(),l(29,"div")(30,"b"),s(31,"placeholder:"),o(),s(32),o(),l(33,"div")(34,"b"),s(35,"placeholderValue:"),o(),s(36),o(),l(37,"div")(38,"b"),s(39,"error:"),o(),s(40),o(),l(41,"div")(42,"b"),s(43,"label:"),o(),s(44),o(),l(45,"div")(46,"b"),s(47,"disabled:"),o(),s(48),o(),l(49,"div")(50,"b"),s(51,"caption:"),o(),s(52),o(),l(53,"div")(54,"b"),s(55,"required:"),o(),s(56),o(),l(57,"div")(58,"b"),s(59,"showSearch:"),o(),s(60),o(),l(61,"div")(62,"b"),s(63,"showClearButton:"),o(),s(64),o(),l(65,"div")(66,"b"),s(67,"searchPlaceholderValue:"),o(),s(68),o(),l(69,"div")(70,"b"),s(71,"options:"),o(),s(72),o()(),l(73,"details",11)(74,"summary"),s(75,"View Code"),o(),l(76,"div",12)(77,"h3"),s(78,"ifx-select-example.ts"),o(),l(79,"pre"),b(80,"code",13),o(),l(81,"h3"),s(82,"ifx-select-example.html"),o(),l(83,"pre"),b(84,"code",14),o()()()),i&2&&(p("size",e.sizeOptions[e.sizeIndex])("placeholder",e.placeholder)("showClearButton",e.showClearButton)("showSearch",e.showSearch)("searchPlaceholderValue",e.searchPlaceholderValue)("required",e.required)("label",e.label)("caption",e.caption)("placeholderValue",e.placeholderValue)("options",e.options)("error",e.error)("disabled",e.disabled),c(19),p("value",e.stringifyValue(e.placeholderValue)),c(),p("value",e.stringifyValue(e.label)),c(),p("value",e.stringifyValue(e.caption)),c(),p("value",e.stringifyValue(e.searchPlaceholderValue)),c(),p("value",e.stringifyValue(e.options)),c(5),g(" ",e.stringifyValue(e.sizeOptions[e.sizeIndex])),c(4),g(" ",e.stringifyValue(e.placeholder)),c(4),g(" ",e.stringifyValue(e.placeholderValue)),c(4),g(" ",e.stringifyValue(e.error)),c(4),g(" ",e.stringifyValue(e.label)),c(4),g(" ",e.stringifyValue(e.disabled)),c(4),g(" ",e.stringifyValue(e.caption)),c(4),g(" ",e.stringifyValue(e.required)),c(4),g(" ",e.stringifyValue(e.showSearch)),c(4),g(" ",e.stringifyValue(e.showClearButton)),c(4),g(" ",e.stringifyValue(e.searchPlaceholderValue)),c(4),g(" ",e.stringifyValue(e.options)),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,fh,M,A],encapsulation:2})};var Sa=class n{tsCode=`import { Component } from '@angular/core';
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

  protected toggleSize() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected toggleVariant() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
  }

  protected toggleInverted() {
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
    [inverted]=&quot;inverted&quot;&gt;&lt;/ifx-spinner&gt;`;sizeOptions=["s","m"];sizeIndex=1;variantOptions=["default","brand"];variantIndex=0;inverted=!1;ariaLabelText="";toggleSize(){this.sizeIndex=(this.sizeIndex+1)%this.sizeOptions.length}toggleVariant(){this.variantIndex=(this.variantIndex+1)%this.variantOptions.length}toggleInverted(){this.inverted=!this.inverted}updateAriaLabelText(t){this.ariaLabelText=t}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-spinner-example"]],standalone:!1,decls:41,vars:11,consts:[[3,"ariaLabelText","variant","size","inverted"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","ariaLabelText","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(b(0,"ifx-spinner",0),l(1,"h3",1),s(2,"Controls"),o(),l(3,"div",2)(4,"ifx-button",3),f("click",function(){return e.toggleSize()}),s(5,"Toggle Size"),o(),l(6,"ifx-button",3),f("click",function(){return e.toggleVariant()}),s(7,"Toggle Variant"),o(),l(8,"ifx-button",3),f("click",function(){return e.toggleInverted()}),s(9,"Toggle Inverted"),o()(),l(10,"div",4)(11,"ifx-text-field",5),f("ifxInput",function(a){return e.updateAriaLabelText(e.getControlInputValue(a))}),o()(),l(12,"div",6)(13,"div")(14,"b"),s(15,"size:"),o(),s(16),o(),l(17,"div")(18,"b"),s(19,"variant:"),o(),s(20),o(),l(21,"div")(22,"b"),s(23,"inverted:"),o(),s(24),o(),l(25,"div")(26,"b"),s(27,"ariaLabelText:"),o(),s(28),o()(),l(29,"details",7)(30,"summary"),s(31,"View Code"),o(),l(32,"div",8)(33,"h3"),s(34,"ifx-spinner-example.ts"),o(),l(35,"pre"),b(36,"code",9),o(),l(37,"h3"),s(38,"ifx-spinner-example.html"),o(),l(39,"pre"),b(40,"code",10),o()()()),i&2&&(p("ariaLabelText",e.ariaLabelText)("variant",e.variantOptions[e.variantIndex])("size",e.sizeOptions[e.sizeIndex])("inverted",e.inverted),c(11),p("value",e.stringifyValue(e.ariaLabelText)),c(5),g(" ",e.stringifyValue(e.sizeOptions[e.sizeIndex])),c(4),g(" ",e.stringifyValue(e.variantOptions[e.variantIndex])),c(4),g(" ",e.stringifyValue(e.inverted)),c(4),g(" ",e.stringifyValue(e.ariaLabelText)),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,vh,M,A],encapsulation:2})};var Ta=class n{tsCode=`import { Component } from '@angular/core';
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

  protected toggleBorder() {
    this.border = !this.border;
  }

  protected toggleColor() {
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
    [border]=&quot;border&quot;&gt;&lt;/ifx-status&gt;`;label="text";border=!0;colorOptions=["engineering-100","engineering-200","engineering-300","engineering-400","engineering-500","engineering-600","ocean-100","ocean-200","ocean-300","ocean-400","ocean-500","ocean-600","ocean-700","red-500","red-600","red-700","orange-500","green-500","lawn-400","lawn-500","lawn-700","berry-400","berry-500","sun-400","sun-500","sand-400","sand-500"];colorIndex=16;updateLabel(t){this.label=t}toggleBorder(){this.border=!this.border}toggleColor(){this.colorIndex=(this.colorIndex+1)%this.colorOptions.length}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-status-example"]],standalone:!1,decls:35,vars:9,consts:[[3,"label","color","border"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","label","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(b(0,"ifx-status",0),l(1,"h3",1),s(2,"Controls"),o(),l(3,"div",2)(4,"ifx-button",3),f("click",function(){return e.toggleBorder()}),s(5,"Toggle Border"),o(),l(6,"ifx-button",3),f("click",function(){return e.toggleColor()}),s(7,"Toggle Color"),o()(),l(8,"div",4)(9,"ifx-text-field",5),f("ifxInput",function(a){return e.updateLabel(e.getControlInputValue(a))}),o()(),l(10,"div",6)(11,"div")(12,"b"),s(13,"label:"),o(),s(14),o(),l(15,"div")(16,"b"),s(17,"border:"),o(),s(18),o(),l(19,"div")(20,"b"),s(21,"color:"),o(),s(22),o()(),l(23,"details",7)(24,"summary"),s(25,"View Code"),o(),l(26,"div",8)(27,"h3"),s(28,"ifx-status-example.ts"),o(),l(29,"pre"),b(30,"code",9),o(),l(31,"h3"),s(32,"ifx-status-example.html"),o(),l(33,"pre"),b(34,"code",10),o()()()),i&2&&(p("label",e.label)("color",e.colorOptions[e.colorIndex])("border",e.border),c(9),p("value",e.stringifyValue(e.label)),c(5),g(" ",e.stringifyValue(e.label)),c(4),g(" ",e.stringifyValue(e.border)),c(4),g(" ",e.stringifyValue(e.colorOptions[e.colorIndex])),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,xh,M,A],encapsulation:2})};var ka=class n{tsCode=`import { Component } from '@angular/core';
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

  protected toggleIndicatorPosition() {
    this.indicatorPositionIndex = (this.indicatorPositionIndex + 1) % this.indicatorPositionOptions.length;
  }

  protected toggleShowStepNumber() {
    this.showStepNumber = !this.showStepNumber;
  }

  protected toggleVariant() {
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
  &lt;/ifx-stepper&gt;`;activeStep=2;indicatorPositionOptions=["left","right"];indicatorPositionIndex=0;showStepNumber=!1;variantOptions=["default","compact","vertical"];variantIndex=0;ariaLabelText="";ariaCurrentText="";updateActiveStep(t){this.activeStep=Number(t)}toggleIndicatorPosition(){this.indicatorPositionIndex=(this.indicatorPositionIndex+1)%this.indicatorPositionOptions.length}toggleShowStepNumber(){this.showStepNumber=!this.showStepNumber}toggleVariant(){this.variantIndex=(this.variantIndex+1)%this.variantOptions.length}updateAriaLabelText(t){this.ariaLabelText=t}updateAriaCurrentText(t){this.ariaCurrentText=t}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleChange(t){console.log("ifxChange:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-stepper-example"]],standalone:!1,decls:61,vars:17,consts:[[3,"activeStep","ariaLabelText","ariaCurrentText","showStepNumber","variant","indicatorPosition"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","activeStep","type","number",3,"ifxInput","value"],["label","ariaLabelText","type","text",3,"ifxInput","value"],["label","ariaCurrentText","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-stepper",0)(1,"ifx-step"),s(2,"Step Label 1"),o(),l(3,"ifx-step"),s(4,"Step Label 2"),o(),l(5,"ifx-step"),s(6,"Step Label 3"),o(),l(7,"ifx-step"),s(8,"Step Label 4"),o(),l(9,"ifx-step"),s(10,"Step Label 5"),o()(),l(11,"h3",1),s(12,"Controls"),o(),l(13,"div",2)(14,"ifx-button",3),f("click",function(){return e.toggleIndicatorPosition()}),s(15,"Toggle IndicatorPosition"),o(),l(16,"ifx-button",3),f("click",function(){return e.toggleShowStepNumber()}),s(17,"Toggle ShowStepNumber"),o(),l(18,"ifx-button",3),f("click",function(){return e.toggleVariant()}),s(19,"Toggle Variant"),o()(),l(20,"div",4)(21,"ifx-text-field",5),f("ifxInput",function(a){return e.updateActiveStep(e.getControlInputValue(a))}),o(),l(22,"ifx-text-field",6),f("ifxInput",function(a){return e.updateAriaLabelText(e.getControlInputValue(a))}),o(),l(23,"ifx-text-field",7),f("ifxInput",function(a){return e.updateAriaCurrentText(e.getControlInputValue(a))}),o()(),l(24,"div",8)(25,"div")(26,"b"),s(27,"activeStep:"),o(),s(28),o(),l(29,"div")(30,"b"),s(31,"indicatorPosition:"),o(),s(32),o(),l(33,"div")(34,"b"),s(35,"showStepNumber:"),o(),s(36),o(),l(37,"div")(38,"b"),s(39,"variant:"),o(),s(40),o(),l(41,"div")(42,"b"),s(43,"ariaLabelText:"),o(),s(44),o(),l(45,"div")(46,"b"),s(47,"ariaCurrentText:"),o(),s(48),o()(),l(49,"details",9)(50,"summary"),s(51,"View Code"),o(),l(52,"div",10)(53,"h3"),s(54,"ifx-stepper-example.ts"),o(),l(55,"pre"),b(56,"code",11),o(),l(57,"h3"),s(58,"ifx-stepper-example.html"),o(),l(59,"pre"),b(60,"code",12),o()()()),i&2&&(p("activeStep",e.activeStep)("ariaLabelText",e.ariaLabelText)("ariaCurrentText",e.ariaCurrentText)("showStepNumber",e.showStepNumber)("variant",e.variantOptions[e.variantIndex])("indicatorPosition",e.indicatorPositionOptions[e.indicatorPositionIndex]),c(21),p("value",e.stringifyValue(e.activeStep)),c(),p("value",e.stringifyValue(e.ariaLabelText)),c(),p("value",e.stringifyValue(e.ariaCurrentText)),c(5),g(" ",e.stringifyValue(e.activeStep)),c(4),g(" ",e.stringifyValue(e.indicatorPositionOptions[e.indicatorPositionIndex])),c(4),g(" ",e.stringifyValue(e.showStepNumber)),c(4),g(" ",e.stringifyValue(e.variantOptions[e.variantIndex])),c(4),g(" ",e.stringifyValue(e.ariaLabelText)),c(4),g(" ",e.stringifyValue(e.ariaCurrentText)),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,Zo,Jo,M,A],encapsulation:2})};var Ma=class n{tsCode=`import { Component } from '@angular/core';
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

  protected toggleIndicatorPosition() {
    this.indicatorPositionIndex = (this.indicatorPositionIndex + 1) % this.indicatorPositionOptions.length;
  }

  protected toggleShowStepNumber() {
    this.showStepNumber = !this.showStepNumber;
  }

  protected toggleVariant() {
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
  &lt;/ifx-stepper&gt;`;activeStep=2;indicatorPositionOptions=["left","right"];indicatorPositionIndex=0;showStepNumber=!1;variantOptions=["default","compact","vertical"];variantIndex=1;ariaLabelText="";ariaCurrentText="";updateActiveStep(t){this.activeStep=Number(t)}toggleIndicatorPosition(){this.indicatorPositionIndex=(this.indicatorPositionIndex+1)%this.indicatorPositionOptions.length}toggleShowStepNumber(){this.showStepNumber=!this.showStepNumber}toggleVariant(){this.variantIndex=(this.variantIndex+1)%this.variantOptions.length}updateAriaLabelText(t){this.ariaLabelText=t}updateAriaCurrentText(t){this.ariaCurrentText=t}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleChange(t){console.log("ifxChange:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-stepper-example-compact"]],standalone:!1,decls:61,vars:17,consts:[[3,"activeStep","ariaLabelText","ariaCurrentText","indicatorPosition","variant","showStepNumber"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","activeStep","type","number",3,"ifxInput","value"],["label","ariaLabelText","type","text",3,"ifxInput","value"],["label","ariaCurrentText","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-stepper",0)(1,"ifx-step"),s(2,"Step Label 1"),o(),l(3,"ifx-step"),s(4,"Step Label 2"),o(),l(5,"ifx-step"),s(6,"Step Label 3"),o(),l(7,"ifx-step"),s(8,"Step Label 4"),o(),l(9,"ifx-step"),s(10,"Step Label 5"),o()(),l(11,"h3",1),s(12,"Controls"),o(),l(13,"div",2)(14,"ifx-button",3),f("click",function(){return e.toggleIndicatorPosition()}),s(15,"Toggle IndicatorPosition"),o(),l(16,"ifx-button",3),f("click",function(){return e.toggleShowStepNumber()}),s(17,"Toggle ShowStepNumber"),o(),l(18,"ifx-button",3),f("click",function(){return e.toggleVariant()}),s(19,"Toggle Variant"),o()(),l(20,"div",4)(21,"ifx-text-field",5),f("ifxInput",function(a){return e.updateActiveStep(e.getControlInputValue(a))}),o(),l(22,"ifx-text-field",6),f("ifxInput",function(a){return e.updateAriaLabelText(e.getControlInputValue(a))}),o(),l(23,"ifx-text-field",7),f("ifxInput",function(a){return e.updateAriaCurrentText(e.getControlInputValue(a))}),o()(),l(24,"div",8)(25,"div")(26,"b"),s(27,"activeStep:"),o(),s(28),o(),l(29,"div")(30,"b"),s(31,"indicatorPosition:"),o(),s(32),o(),l(33,"div")(34,"b"),s(35,"showStepNumber:"),o(),s(36),o(),l(37,"div")(38,"b"),s(39,"variant:"),o(),s(40),o(),l(41,"div")(42,"b"),s(43,"ariaLabelText:"),o(),s(44),o(),l(45,"div")(46,"b"),s(47,"ariaCurrentText:"),o(),s(48),o()(),l(49,"details",9)(50,"summary"),s(51,"View Code"),o(),l(52,"div",10)(53,"h3"),s(54,"ifx-stepper-example-compact.ts"),o(),l(55,"pre"),b(56,"code",11),o(),l(57,"h3"),s(58,"ifx-stepper-example-compact.html"),o(),l(59,"pre"),b(60,"code",12),o()()()),i&2&&(p("activeStep",e.activeStep)("ariaLabelText",e.ariaLabelText)("ariaCurrentText",e.ariaCurrentText)("indicatorPosition",e.indicatorPositionOptions[e.indicatorPositionIndex])("variant",e.variantOptions[e.variantIndex])("showStepNumber",e.showStepNumber),c(21),p("value",e.stringifyValue(e.activeStep)),c(),p("value",e.stringifyValue(e.ariaLabelText)),c(),p("value",e.stringifyValue(e.ariaCurrentText)),c(5),g(" ",e.stringifyValue(e.activeStep)),c(4),g(" ",e.stringifyValue(e.indicatorPositionOptions[e.indicatorPositionIndex])),c(4),g(" ",e.stringifyValue(e.showStepNumber)),c(4),g(" ",e.stringifyValue(e.variantOptions[e.variantIndex])),c(4),g(" ",e.stringifyValue(e.ariaLabelText)),c(4),g(" ",e.stringifyValue(e.ariaCurrentText)),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,Zo,Jo,M,A],encapsulation:2})};var Aa=class n{tsCode=`import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-switch-example',
  templateUrl: './ifx-switch-example.html',
  styleUrl: './ifx-switch-example.scss',
  standalone: false
})
export class IfxSwitchExample {

  protected label = "Switch";
  protected name = "switch";
  protected checked = false;
  protected value = "on";
  protected disabled = false;

  protected updateLabel(value: string) {
    this.label = value;
  }

  protected updateName(value: string) {
    this.name = value;
  }

  protected toggleChecked() {
    this.checked = !this.checked;
  }

  protected updateValue(value: string) {
    this.value = value;
  }

  protected toggleDisabled() {
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
    [disabled]=&quot;disabled&quot;&gt;
    {{ label }}
  &lt;/ifx-switch&gt;`;label="Switch";name="switch";checked=!1;value="on";disabled=!1;updateLabel(t){this.label=t}updateName(t){this.name=t}toggleChecked(){this.checked=!this.checked}updateValue(t){this.value=t}toggleDisabled(){this.disabled=!this.disabled}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleChange(t){console.log("ifxChange:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-switch-example"]],standalone:!1,decls:46,vars:15,consts:[[3,"ifxChange","name","value","checked","disabled"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","label","type","text",3,"ifxInput","value"],["label","name","type","text",3,"ifxInput","value"],["label","value","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-switch",0),f("ifxChange",function(a){return e.handleChange(a)}),s(1),o(),l(2,"h3",1),s(3,"Controls"),o(),l(4,"div",2)(5,"ifx-button",3),f("click",function(){return e.toggleChecked()}),s(6,"Toggle Checked"),o(),l(7,"ifx-button",3),f("click",function(){return e.toggleDisabled()}),s(8,"Toggle Disabled"),o()(),l(9,"div",4)(10,"ifx-text-field",5),f("ifxInput",function(a){return e.updateLabel(e.getControlInputValue(a))}),o(),l(11,"ifx-text-field",6),f("ifxInput",function(a){return e.updateName(e.getControlInputValue(a))}),o(),l(12,"ifx-text-field",7),f("ifxInput",function(a){return e.updateValue(e.getControlInputValue(a))}),o()(),l(13,"div",8)(14,"div")(15,"b"),s(16,"label:"),o(),s(17),o(),l(18,"div")(19,"b"),s(20,"name:"),o(),s(21),o(),l(22,"div")(23,"b"),s(24,"checked:"),o(),s(25),o(),l(26,"div")(27,"b"),s(28,"value:"),o(),s(29),o(),l(30,"div")(31,"b"),s(32,"disabled:"),o(),s(33),o()(),l(34,"details",9)(35,"summary"),s(36,"View Code"),o(),l(37,"div",10)(38,"h3"),s(39,"ifx-switch-example.ts"),o(),l(40,"pre"),b(41,"code",11),o(),l(42,"h3"),s(43,"ifx-switch-example.html"),o(),l(44,"pre"),b(45,"code",12),o()()()),i&2&&(p("name",e.name)("value",e.value)("checked",e.checked)("disabled",e.disabled),c(),g(" ",e.label," "),c(9),p("value",e.stringifyValue(e.label)),c(),p("value",e.stringifyValue(e.name)),c(),p("value",e.stringifyValue(e.value)),c(5),g(" ",e.stringifyValue(e.label)),c(4),g(" ",e.stringifyValue(e.name)),c(4),g(" ",e.stringifyValue(e.checked)),c(4),g(" ",e.stringifyValue(e.value)),c(4),g(" ",e.stringifyValue(e.disabled)),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,Xo,M,Mt,A],encapsulation:2})};var Oa=class n{tsCode=`import { Component } from '@angular/core';
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

  protected toggleRowHeight() {
    this.rowHeightIndex = (this.rowHeightIndex + 1) % this.rowHeightOptions.length;
  }

  protected updateCols(value: string) {
    this.cols = value;
  }

  protected updateRows(value: string) {
    this.rows = value;
  }

  protected toggleVariant() {
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
    [tableHeight]=&quot;tableHeight&quot;
    [rowHeight]=&quot;rowHeightOptions[rowHeightIndex]&quot;
    [variant]=&quot;variantOptions[variantIndex]&quot;
    [cols]=&quot;cols&quot;
    [rows]=&quot;rows&quot;&gt;&lt;/ifx-basic-table&gt;`;tableHeight="auto";rowHeightOptions=["compact","default"];rowHeightIndex=1;cols='[{"headerName":"ID","field":"id","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Item","field":"item","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Date","field":"date"}]';rows='[{"id":1,"item":"Item 1","price":356,"date":"2025-05-11"},{"id":2,"item":"Item 2","price":55,"date":"2025-03-26"},{"id":3,"item":"Item 3","price":24},{"id":4,"item":"Item 4","price":874,"date":"2025-04-30"},{"id":5,"item":"Item 5","price":689,"date":"2025-09-14"},{"id":6,"item":"Item 6","price":46},{"id":7,"item":"Item 7","price":421,"date":"2026-07-25"},{"id":8,"item":"Item 8","price":17,"date":"2026-06-28"},{"id":9,"item":"Item 9","price":752},{"id":10,"item":"Item 10","price":73,"date":"2026-01-27"},{"id":11,"item":"Item 11","price":94,"date":"2026-10-31"},{"id":12,"item":"Item 12","price":846}]';variantOptions=["default","zebra"];variantIndex=0;updateTableHeight(t){this.tableHeight=t}toggleRowHeight(){this.rowHeightIndex=(this.rowHeightIndex+1)%this.rowHeightOptions.length}updateCols(t){this.cols=t}updateRows(t){this.rows=t}toggleVariant(){this.variantIndex=(this.variantIndex+1)%this.variantOptions.length}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-basic-table-example"]],standalone:!1,decls:45,vars:15,consts:[[3,"tableHeight","rowHeight","variant","cols","rows"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","tableHeight","type","text",3,"ifxInput","value"],["label","cols","type","text",3,"ifxInput","value"],["label","rows","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(b(0,"ifx-basic-table",0),l(1,"h3",1),s(2,"Controls"),o(),l(3,"div",2)(4,"ifx-button",3),f("click",function(){return e.toggleRowHeight()}),s(5,"Toggle RowHeight"),o(),l(6,"ifx-button",3),f("click",function(){return e.toggleVariant()}),s(7,"Toggle Variant"),o()(),l(8,"div",4)(9,"ifx-text-field",5),f("ifxInput",function(a){return e.updateTableHeight(e.getControlInputValue(a))}),o(),l(10,"ifx-text-field",6),f("ifxInput",function(a){return e.updateCols(e.getControlInputValue(a))}),o(),l(11,"ifx-text-field",7),f("ifxInput",function(a){return e.updateRows(e.getControlInputValue(a))}),o()(),l(12,"div",8)(13,"div")(14,"b"),s(15,"tableHeight:"),o(),s(16),o(),l(17,"div")(18,"b"),s(19,"rowHeight:"),o(),s(20),o(),l(21,"div")(22,"b"),s(23,"cols:"),o(),s(24),o(),l(25,"div")(26,"b"),s(27,"rows:"),o(),s(28),o(),l(29,"div")(30,"b"),s(31,"variant:"),o(),s(32),o()(),l(33,"details",9)(34,"summary"),s(35,"View Code"),o(),l(36,"div",10)(37,"h3"),s(38,"ifx-basic-table-example.ts"),o(),l(39,"pre"),b(40,"code",11),o(),l(41,"h3"),s(42,"ifx-basic-table-example.html"),o(),l(43,"pre"),b(44,"code",12),o()()()),i&2&&(p("tableHeight",e.tableHeight)("rowHeight",e.rowHeightOptions[e.rowHeightIndex])("variant",e.variantOptions[e.variantIndex])("cols",e.cols)("rows",e.rows),c(9),p("value",e.stringifyValue(e.tableHeight)),c(),p("value",e.stringifyValue(e.cols)),c(),p("value",e.stringifyValue(e.rows)),c(5),g(" ",e.stringifyValue(e.tableHeight)),c(4),g(" ",e.stringifyValue(e.rowHeightOptions[e.rowHeightIndex])),c(4),g(" ",e.stringifyValue(e.cols)),c(4),g(" ",e.stringifyValue(e.rows)),c(4),g(" ",e.stringifyValue(e.variantOptions[e.variantIndex])),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[Vg,k,M,A],encapsulation:2})};var La=class n{tsCode=`import { Component } from '@angular/core';
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

  protected togglePagination() {
    this.pagination = !this.pagination;
  }

  protected toggleServerSidePagination() {
    this.serverSidePagination = !this.serverSidePagination;
  }

  protected updatePaginationItemsPerPage(value: string) {
    this.paginationItemsPerPage = value;
  }

  protected toggleShowLoading() {
    this.showLoading = !this.showLoading;
  }

  protected toggleRowHeight() {
    this.rowHeightIndex = (this.rowHeightIndex + 1) % this.rowHeightOptions.length;
  }

  protected toggleEnableSelection() {
    this.enableSelection = !this.enableSelection;
  }

  protected toggleFilterOrientation() {
    this.filterOrientationIndex = (this.filterOrientationIndex + 1) % this.filterOrientationOptions.length;
  }

  protected updateCols(value: string) {
    this.cols = value;
  }

  protected toggleFitColumns() {
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

  protected toggleVariant() {
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
    [tableHeight]=&quot;tableHeight&quot;
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
    [fitColumns]=&quot;fitColumns&quot;
    [paginationItemsPerPage]=&quot;paginationItemsPerPage&quot;
    [cols]=&quot;cols&quot;
    [rows]=&quot;rows&quot;&gt;&lt;/ifx-table&gt;`;tableHeight="auto";pagination=!1;serverSidePagination=!1;paginationItemsPerPage='[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}, {"value":"all","selected":false}]';showLoading=!1;rowHeightOptions=["compact","default"];rowHeightIndex=1;enableSelection=!1;filterOrientationOptions=["sidebar","topbar","none"];filterOrientationIndex=2;cols='[{"headerName":"ID","field":"id","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Item","field":"item","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Date","field":"date"}]';fitColumns=!1;columnMinWidth="200";columnWidth="100";rows='[{"id":"1","item":"Item 1","price":356,"date":"2025-06-25"},{"id":"2","item":"Item 2","price":55,"date":"2025-03-26"},{"id":"3","item":"Item 3","price":24},{"id":"4","item":"x","price":874},{"id":"5","item":"x","price":689},{"id":"6","item":"x","price":46},{"id":"7","item":"Item 7","price":421},{"id":"8","item":"Item 8","price":17},{"id":"9","item":"x","price":752},{"id":"10","item":"Item 10","price":73},{"id":"11","item":"x","price":94}]';variantOptions=["default","zebra"];variantIndex=0;headline="Matching results";headlineNumber="0";updateTableHeight(t){this.tableHeight=t}togglePagination(){this.pagination=!this.pagination}toggleServerSidePagination(){this.serverSidePagination=!this.serverSidePagination}updatePaginationItemsPerPage(t){this.paginationItemsPerPage=t}toggleShowLoading(){this.showLoading=!this.showLoading}toggleRowHeight(){this.rowHeightIndex=(this.rowHeightIndex+1)%this.rowHeightOptions.length}toggleEnableSelection(){this.enableSelection=!this.enableSelection}toggleFilterOrientation(){this.filterOrientationIndex=(this.filterOrientationIndex+1)%this.filterOrientationOptions.length}updateCols(t){this.cols=t}toggleFitColumns(){this.fitColumns=!this.fitColumns}updateColumnMinWidth(t){this.columnMinWidth=t}updateColumnWidth(t){this.columnWidth=t}updateRows(t){this.rows=t}toggleVariant(){this.variantIndex=(this.variantIndex+1)%this.variantOptions.length}updateHeadline(t){this.headline=t}updateHeadlineNumber(t){this.headlineNumber=t}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleSortChange(t){console.log("ifxSortChange:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-table-example-defaultstate"]],standalone:!1,decls:106,vars:42,consts:[["fit-column","false",3,"ifxSortChange","rowHeight","tableHeight","filterOrientation","variant","columnMinWidth","columnWidth","headline","headlineNumber","pagination","serverSidePagination","showLoading","enableSelection","fitColumns","paginationItemsPerPage","cols","rows"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","tableHeight","type","text",3,"ifxInput","value"],["label","paginationItemsPerPage","type","text",3,"ifxInput","value"],["label","cols","type","text",3,"ifxInput","value"],["label","columnMinWidth","type","text",3,"ifxInput","value"],["label","columnWidth","type","text",3,"ifxInput","value"],["label","rows","type","text",3,"ifxInput","value"],["label","headline","type","text",3,"ifxInput","value"],["label","headlineNumber","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-table",0),f("ifxSortChange",function(a){return e.handleSortChange(a)}),o(),l(1,"h3",1),s(2,"Controls"),o(),l(3,"div",2)(4,"ifx-button",3),f("click",function(){return e.togglePagination()}),s(5,"Toggle Pagination"),o(),l(6,"ifx-button",3),f("click",function(){return e.toggleServerSidePagination()}),s(7,"Toggle ServerSidePagination"),o(),l(8,"ifx-button",3),f("click",function(){return e.toggleShowLoading()}),s(9,"Toggle ShowLoading"),o(),l(10,"ifx-button",3),f("click",function(){return e.toggleRowHeight()}),s(11,"Toggle RowHeight"),o(),l(12,"ifx-button",3),f("click",function(){return e.toggleEnableSelection()}),s(13,"Toggle EnableSelection"),o(),l(14,"ifx-button",3),f("click",function(){return e.toggleFilterOrientation()}),s(15,"Toggle FilterOrientation"),o(),l(16,"ifx-button",3),f("click",function(){return e.toggleFitColumns()}),s(17,"Toggle FitColumns"),o(),l(18,"ifx-button",3),f("click",function(){return e.toggleVariant()}),s(19,"Toggle Variant"),o()(),l(20,"div",4)(21,"ifx-text-field",5),f("ifxInput",function(a){return e.updateTableHeight(e.getControlInputValue(a))}),o(),l(22,"ifx-text-field",6),f("ifxInput",function(a){return e.updatePaginationItemsPerPage(e.getControlInputValue(a))}),o(),l(23,"ifx-text-field",7),f("ifxInput",function(a){return e.updateCols(e.getControlInputValue(a))}),o(),l(24,"ifx-text-field",8),f("ifxInput",function(a){return e.updateColumnMinWidth(e.getControlInputValue(a))}),o(),l(25,"ifx-text-field",9),f("ifxInput",function(a){return e.updateColumnWidth(e.getControlInputValue(a))}),o(),l(26,"ifx-text-field",10),f("ifxInput",function(a){return e.updateRows(e.getControlInputValue(a))}),o(),l(27,"ifx-text-field",11),f("ifxInput",function(a){return e.updateHeadline(e.getControlInputValue(a))}),o(),l(28,"ifx-text-field",12),f("ifxInput",function(a){return e.updateHeadlineNumber(e.getControlInputValue(a))}),o()(),l(29,"div",13)(30,"div")(31,"b"),s(32,"tableHeight:"),o(),s(33),o(),l(34,"div")(35,"b"),s(36,"pagination:"),o(),s(37),o(),l(38,"div")(39,"b"),s(40,"serverSidePagination:"),o(),s(41),o(),l(42,"div")(43,"b"),s(44,"paginationItemsPerPage:"),o(),s(45),o(),l(46,"div")(47,"b"),s(48,"showLoading:"),o(),s(49),o(),l(50,"div")(51,"b"),s(52,"rowHeight:"),o(),s(53),o(),l(54,"div")(55,"b"),s(56,"enableSelection:"),o(),s(57),o(),l(58,"div")(59,"b"),s(60,"filterOrientation:"),o(),s(61),o(),l(62,"div")(63,"b"),s(64,"cols:"),o(),s(65),o(),l(66,"div")(67,"b"),s(68,"fitColumns:"),o(),s(69),o(),l(70,"div")(71,"b"),s(72,"columnMinWidth:"),o(),s(73),o(),l(74,"div")(75,"b"),s(76,"columnWidth:"),o(),s(77),o(),l(78,"div")(79,"b"),s(80,"rows:"),o(),s(81),o(),l(82,"div")(83,"b"),s(84,"variant:"),o(),s(85),o(),l(86,"div")(87,"b"),s(88,"headline:"),o(),s(89),o(),l(90,"div")(91,"b"),s(92,"headlineNumber:"),o(),s(93),o()(),l(94,"details",14)(95,"summary"),s(96,"View Code"),o(),l(97,"div",15)(98,"h3"),s(99,"ifx-table-example-defaultstate.ts"),o(),l(100,"pre"),b(101,"code",16),o(),l(102,"h3"),s(103,"ifx-table-example-defaultstate.html"),o(),l(104,"pre"),b(105,"code",17),o()()()),i&2&&(p("rowHeight",e.rowHeightOptions[e.rowHeightIndex])("tableHeight",e.tableHeight)("filterOrientation",e.filterOrientationOptions[e.filterOrientationIndex])("variant",e.variantOptions[e.variantIndex])("columnMinWidth",e.columnMinWidth)("columnWidth",e.columnWidth)("headline",e.headline)("headlineNumber",e.headlineNumber)("pagination",e.pagination)("serverSidePagination",e.serverSidePagination)("showLoading",e.showLoading)("enableSelection",e.enableSelection)("fitColumns",e.fitColumns)("paginationItemsPerPage",e.paginationItemsPerPage)("cols",e.cols)("rows",e.rows),c(21),p("value",e.stringifyValue(e.tableHeight)),c(),p("value",e.stringifyValue(e.paginationItemsPerPage)),c(),p("value",e.stringifyValue(e.cols)),c(),p("value",e.stringifyValue(e.columnMinWidth)),c(),p("value",e.stringifyValue(e.columnWidth)),c(),p("value",e.stringifyValue(e.rows)),c(),p("value",e.stringifyValue(e.headline)),c(),p("value",e.stringifyValue(e.headlineNumber)),c(5),g(" ",e.stringifyValue(e.tableHeight)),c(4),g(" ",e.stringifyValue(e.pagination)),c(4),g(" ",e.stringifyValue(e.serverSidePagination)),c(4),g(" ",e.stringifyValue(e.paginationItemsPerPage)),c(4),g(" ",e.stringifyValue(e.showLoading)),c(4),g(" ",e.stringifyValue(e.rowHeightOptions[e.rowHeightIndex])),c(4),g(" ",e.stringifyValue(e.enableSelection)),c(4),g(" ",e.stringifyValue(e.filterOrientationOptions[e.filterOrientationIndex])),c(4),g(" ",e.stringifyValue(e.cols)),c(4),g(" ",e.stringifyValue(e.fitColumns)),c(4),g(" ",e.stringifyValue(e.columnMinWidth)),c(4),g(" ",e.stringifyValue(e.columnWidth)),c(4),g(" ",e.stringifyValue(e.rows)),c(4),g(" ",e.stringifyValue(e.variantOptions[e.variantIndex])),c(4),g(" ",e.stringifyValue(e.headline)),c(4),g(" ",e.stringifyValue(e.headlineNumber)),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,yh,M,A],encapsulation:2})};var Fa=class n{tsCode=`import { Component } from '@angular/core';
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

  protected toggleOrientation() {
    this.orientationIndex = (this.orientationIndex + 1) % this.orientationOptions.length;
  }

  protected toggleIcon() {
    this.iconIndex = (this.iconIndex + 1) % this.iconOptions.length;
  }

  protected toggleFullWidth() {
    this.fullWidth = !this.fullWidth;
  }

  protected toggleIconPosition() {
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

  protected toggleDisabled() {
    this.disabled = !this.disabled;
  }

  protected updateLabel(value: string) {
    this.label = value;
  }

  protected updateNumber(value: string) {
    this.number = value;
  }

  protected togglePositionSticky() {
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
      [number]=&quot;number&quot;&gt;Content for Tab #1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.&lt;/ifx-tab&gt;
    &lt;ifx-tab
      [header]=&quot;header&quot;
      [disabled]=&quot;disabled&quot;
      [icon]=&quot;iconOptions[iconIndex]&quot;
      [iconPosition]=&quot;iconPositionOptions[iconPositionIndex]&quot;
      [subline]=&quot;subline&quot;
      [label]=&quot;label&quot;
      [number]=&quot;number&quot;&gt;Content for Tab #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.&lt;/ifx-tab&gt;
    &lt;ifx-tab
      [header]=&quot;header&quot;
      [icon]=&quot;iconOptions[iconIndex]&quot;
      [iconPosition]=&quot;iconPositionOptions[iconPositionIndex]&quot;
      [subline]=&quot;subline&quot;
      [label]=&quot;label&quot;
      [number]=&quot;number&quot;&gt;Content for Tab #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.&lt;/ifx-tab&gt;
  &lt;/ifx-tabs&gt;`;orientationOptions=["horizontal","vertical"];orientationIndex=0;iconOptions=["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];iconIndex=0;fullWidth=!1;iconPositionOptions=["left","right"];iconPositionIndex=0;activeTabIndex="0";header="Tab";subline="";disabled=!1;label="";number="0";positionSticky=!1;toggleOrientation(){this.orientationIndex=(this.orientationIndex+1)%this.orientationOptions.length}toggleIcon(){this.iconIndex=(this.iconIndex+1)%this.iconOptions.length}toggleFullWidth(){this.fullWidth=!this.fullWidth}toggleIconPosition(){this.iconPositionIndex=(this.iconPositionIndex+1)%this.iconPositionOptions.length}updateActiveTabIndex(t){this.activeTabIndex=t}updateHeader(t){this.header=t}updateSubline(t){this.subline=t}toggleDisabled(){this.disabled=!this.disabled}updateLabel(t){this.label=t}updateNumber(t){this.number=t}togglePositionSticky(){this.positionSticky=!this.positionSticky}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleChange(t){console.log("ifxChange:",t)}handleTabHeaderChange(t){console.log("tabHeaderChange:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-tabs-example"]],standalone:!1,decls:85,vars:44,consts:[[3,"orientation","activeTabIndex","fullWidth","positionSticky","subline","label","number"],[3,"header","icon","iconPosition","subline","label","number"],[3,"header","disabled","icon","iconPosition","subline","label","number"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","activeTabIndex","type","text",3,"ifxInput","value"],["label","header","type","text",3,"ifxInput","value"],["label","subline","type","text",3,"ifxInput","value"],["label","label","type","text",3,"ifxInput","value"],["label","number","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-tabs",0)(1,"ifx-tab",1),s(2,"Content for Tab #1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque."),o(),l(3,"ifx-tab",2),s(4,"Content for Tab #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque."),o(),l(5,"ifx-tab",1),s(6,"Content for Tab #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque."),o()(),l(7,"h3",3),s(8,"Controls"),o(),l(9,"div",4)(10,"ifx-button",5),f("click",function(){return e.toggleOrientation()}),s(11,"Toggle Orientation"),o(),l(12,"ifx-button",5),f("click",function(){return e.toggleIcon()}),s(13,"Toggle Icon"),o(),l(14,"ifx-button",5),f("click",function(){return e.toggleFullWidth()}),s(15,"Toggle FullWidth"),o(),l(16,"ifx-button",5),f("click",function(){return e.toggleIconPosition()}),s(17,"Toggle IconPosition"),o(),l(18,"ifx-button",5),f("click",function(){return e.toggleDisabled()}),s(19,"Toggle Disabled"),o(),l(20,"ifx-button",5),f("click",function(){return e.togglePositionSticky()}),s(21,"Toggle PositionSticky"),o()(),l(22,"div",6)(23,"ifx-text-field",7),f("ifxInput",function(a){return e.updateActiveTabIndex(e.getControlInputValue(a))}),o(),l(24,"ifx-text-field",8),f("ifxInput",function(a){return e.updateHeader(e.getControlInputValue(a))}),o(),l(25,"ifx-text-field",9),f("ifxInput",function(a){return e.updateSubline(e.getControlInputValue(a))}),o(),l(26,"ifx-text-field",10),f("ifxInput",function(a){return e.updateLabel(e.getControlInputValue(a))}),o(),l(27,"ifx-text-field",11),f("ifxInput",function(a){return e.updateNumber(e.getControlInputValue(a))}),o()(),l(28,"div",12)(29,"div")(30,"b"),s(31,"orientation:"),o(),s(32),o(),l(33,"div")(34,"b"),s(35,"icon:"),o(),s(36),o(),l(37,"div")(38,"b"),s(39,"fullWidth:"),o(),s(40),o(),l(41,"div")(42,"b"),s(43,"iconPosition:"),o(),s(44),o(),l(45,"div")(46,"b"),s(47,"activeTabIndex:"),o(),s(48),o(),l(49,"div")(50,"b"),s(51,"header:"),o(),s(52),o(),l(53,"div")(54,"b"),s(55,"subline:"),o(),s(56),o(),l(57,"div")(58,"b"),s(59,"disabled:"),o(),s(60),o(),l(61,"div")(62,"b"),s(63,"label:"),o(),s(64),o(),l(65,"div")(66,"b"),s(67,"number:"),o(),s(68),o(),l(69,"div")(70,"b"),s(71,"positionSticky:"),o(),s(72),o()(),l(73,"details",13)(74,"summary"),s(75,"View Code"),o(),l(76,"div",14)(77,"h3"),s(78,"ifx-tabs-example.ts"),o(),l(79,"pre"),b(80,"code",15),o(),l(81,"h3"),s(82,"ifx-tabs-example.html"),o(),l(83,"pre"),b(84,"code",16),o()()()),i&2&&(p("orientation",e.orientationOptions[e.orientationIndex])("activeTabIndex",e.activeTabIndex)("fullWidth",e.fullWidth)("positionSticky",e.positionSticky)("subline",e.subline)("label",e.label)("number",e.number),c(),p("header",e.header)("icon",e.iconOptions[e.iconIndex])("iconPosition",e.iconPositionOptions[e.iconPositionIndex])("subline",e.subline)("label",e.label)("number",e.number),c(2),p("header",e.header)("disabled",e.disabled)("icon",e.iconOptions[e.iconIndex])("iconPosition",e.iconPositionOptions[e.iconPositionIndex])("subline",e.subline)("label",e.label)("number",e.number),c(2),p("header",e.header)("icon",e.iconOptions[e.iconIndex])("iconPosition",e.iconPositionOptions[e.iconPositionIndex])("subline",e.subline)("label",e.label)("number",e.number),c(18),p("value",e.stringifyValue(e.activeTabIndex)),c(),p("value",e.stringifyValue(e.header)),c(),p("value",e.stringifyValue(e.subline)),c(),p("value",e.stringifyValue(e.label)),c(),p("value",e.stringifyValue(e.number)),c(5),g(" ",e.stringifyValue(e.orientationOptions[e.orientationIndex])),c(4),g(" ",e.stringifyValue(e.iconOptions[e.iconIndex])),c(4),g(" ",e.stringifyValue(e.fullWidth)),c(4),g(" ",e.stringifyValue(e.iconPositionOptions[e.iconPositionIndex])),c(4),g(" ",e.stringifyValue(e.activeTabIndex)),c(4),g(" ",e.stringifyValue(e.header)),c(4),g(" ",e.stringifyValue(e.subline)),c(4),g(" ",e.stringifyValue(e.disabled)),c(4),g(" ",e.stringifyValue(e.label)),c(4),g(" ",e.stringifyValue(e.number)),c(4),g(" ",e.stringifyValue(e.positionSticky)),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,bh,Ih,M,A],encapsulation:2})};var Na=class n{tsCode=`import { Component } from '@angular/core';
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

  protected toggleError() {
    this.error = !this.error;
  }

  protected toggleDisabled() {
    this.disabled = !this.disabled;
  }

  protected toggleSize() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected toggleIcon() {
    this.iconIndex = (this.iconIndex + 1) % this.iconOptions.length;
  }

  protected toggleSuccess() {
    this.success = !this.success;
  }

  protected updatePlaceholder(value: string) {
    this.placeholder = value;
  }

  protected toggleReadOnly() {
    this.readOnly = !this.readOnly;
  }

  protected updateCaption(value: string) {
    this.caption = value;
  }

  protected toggleRequired() {
    this.required = !this.required;
  }

  protected updateName(value: string) {
    this.name = value;
  }

  protected toggleShowDeleteIcon() {
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

  protected toggleType() {
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
    [disabled]=&quot;disabled&quot;
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
    [maxlength]=&quot;maxlength&quot;&gt;&lt;/ifx-text-field&gt;`;label="Label";error=!1;disabled=!1;sizeOptions=["s","m"];sizeIndex=1;iconOptions=["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];iconIndex=0;success=!1;placeholder="Placeholder";readOnly=!1;caption="Caption";required=!0;name="text-field";showDeleteIcon=!1;maxlength=0;value="";internalId="text-field";autocomplete="on";typeOptions=["text","password"];typeIndex=0;updateLabel(t){this.label=t}toggleError(){this.error=!this.error}toggleDisabled(){this.disabled=!this.disabled}toggleSize(){this.sizeIndex=(this.sizeIndex+1)%this.sizeOptions.length}toggleIcon(){this.iconIndex=(this.iconIndex+1)%this.iconOptions.length}toggleSuccess(){this.success=!this.success}updatePlaceholder(t){this.placeholder=t}toggleReadOnly(){this.readOnly=!this.readOnly}updateCaption(t){this.caption=t}toggleRequired(){this.required=!this.required}updateName(t){this.name=t}toggleShowDeleteIcon(){this.showDeleteIcon=!this.showDeleteIcon}updateMaxlength(t){this.maxlength=Number(t)}updateValue(t){this.value=t}updateInternalId(t){this.internalId=t}updateAutocomplete(t){this.autocomplete=t}toggleType(){this.typeIndex=(this.typeIndex+1)%this.typeOptions.length}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleInput(t){console.log("ifxInput:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-text-field-example"]],standalone:!1,decls:112,vars:44,consts:[["aria-label","text field for user input",3,"ifxInput","error","disabled","size","icon","success","placeholder","readOnly","caption","label","required","name","showDeleteIcon","value","autocomplete","type","internalId","maxlength"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","label","type","text",3,"ifxInput","value"],["label","placeholder","type","text",3,"ifxInput","value"],["label","caption","type","text",3,"ifxInput","value"],["label","name","type","text",3,"ifxInput","value"],["label","maxlength","type","number",3,"ifxInput","value"],["label","value","type","text",3,"ifxInput","value"],["label","internalId","type","text",3,"ifxInput","value"],["label","autocomplete","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-text-field",0),f("ifxInput",function(a){return e.handleInput(a)}),o(),l(1,"h3",1),s(2,"Controls"),o(),l(3,"div",2)(4,"ifx-button",3),f("click",function(){return e.toggleError()}),s(5,"Toggle Error"),o(),l(6,"ifx-button",3),f("click",function(){return e.toggleDisabled()}),s(7,"Toggle Disabled"),o(),l(8,"ifx-button",3),f("click",function(){return e.toggleSize()}),s(9,"Toggle Size"),o(),l(10,"ifx-button",3),f("click",function(){return e.toggleIcon()}),s(11,"Toggle Icon"),o(),l(12,"ifx-button",3),f("click",function(){return e.toggleSuccess()}),s(13,"Toggle Success"),o(),l(14,"ifx-button",3),f("click",function(){return e.toggleReadOnly()}),s(15,"Toggle ReadOnly"),o(),l(16,"ifx-button",3),f("click",function(){return e.toggleRequired()}),s(17,"Toggle Required"),o(),l(18,"ifx-button",3),f("click",function(){return e.toggleShowDeleteIcon()}),s(19,"Toggle ShowDeleteIcon"),o(),l(20,"ifx-button",3),f("click",function(){return e.toggleType()}),s(21,"Toggle Type"),o()(),l(22,"div",4)(23,"ifx-text-field",5),f("ifxInput",function(a){return e.updateLabel(e.getControlInputValue(a))}),o(),l(24,"ifx-text-field",6),f("ifxInput",function(a){return e.updatePlaceholder(e.getControlInputValue(a))}),o(),l(25,"ifx-text-field",7),f("ifxInput",function(a){return e.updateCaption(e.getControlInputValue(a))}),o(),l(26,"ifx-text-field",8),f("ifxInput",function(a){return e.updateName(e.getControlInputValue(a))}),o(),l(27,"ifx-text-field",9),f("ifxInput",function(a){return e.updateMaxlength(e.getControlInputValue(a))}),o(),l(28,"ifx-text-field",10),f("ifxInput",function(a){return e.updateValue(e.getControlInputValue(a))}),o(),l(29,"ifx-text-field",11),f("ifxInput",function(a){return e.updateInternalId(e.getControlInputValue(a))}),o(),l(30,"ifx-text-field",12),f("ifxInput",function(a){return e.updateAutocomplete(e.getControlInputValue(a))}),o()(),l(31,"div",13)(32,"div")(33,"b"),s(34,"label:"),o(),s(35),o(),l(36,"div")(37,"b"),s(38,"error:"),o(),s(39),o(),l(40,"div")(41,"b"),s(42,"disabled:"),o(),s(43),o(),l(44,"div")(45,"b"),s(46,"size:"),o(),s(47),o(),l(48,"div")(49,"b"),s(50,"icon:"),o(),s(51),o(),l(52,"div")(53,"b"),s(54,"success:"),o(),s(55),o(),l(56,"div")(57,"b"),s(58,"placeholder:"),o(),s(59),o(),l(60,"div")(61,"b"),s(62,"readOnly:"),o(),s(63),o(),l(64,"div")(65,"b"),s(66,"caption:"),o(),s(67),o(),l(68,"div")(69,"b"),s(70,"required:"),o(),s(71),o(),l(72,"div")(73,"b"),s(74,"name:"),o(),s(75),o(),l(76,"div")(77,"b"),s(78,"showDeleteIcon:"),o(),s(79),o(),l(80,"div")(81,"b"),s(82,"maxlength:"),o(),s(83),o(),l(84,"div")(85,"b"),s(86,"value:"),o(),s(87),o(),l(88,"div")(89,"b"),s(90,"internalId:"),o(),s(91),o(),l(92,"div")(93,"b"),s(94,"autocomplete:"),o(),s(95),o(),l(96,"div")(97,"b"),s(98,"type:"),o(),s(99),o()(),l(100,"details",14)(101,"summary"),s(102,"View Code"),o(),l(103,"div",15)(104,"h3"),s(105,"ifx-text-field-example.ts"),o(),l(106,"pre"),b(107,"code",16),o(),l(108,"h3"),s(109,"ifx-text-field-example.html"),o(),l(110,"pre"),b(111,"code",17),o()()()),i&2&&(p("error",e.error)("disabled",e.disabled)("size",e.sizeOptions[e.sizeIndex])("icon",e.iconOptions[e.iconIndex])("success",e.success)("placeholder",e.placeholder)("readOnly",e.readOnly)("caption",e.caption)("label",e.label)("required",e.required)("name",e.name)("showDeleteIcon",e.showDeleteIcon)("value",e.value)("autocomplete",e.autocomplete)("type",e.typeOptions[e.typeIndex])("internalId",e.internalId)("maxlength",e.maxlength),c(23),p("value",e.stringifyValue(e.label)),c(),p("value",e.stringifyValue(e.placeholder)),c(),p("value",e.stringifyValue(e.caption)),c(),p("value",e.stringifyValue(e.name)),c(),p("value",e.stringifyValue(e.maxlength)),c(),p("value",e.stringifyValue(e.value)),c(),p("value",e.stringifyValue(e.internalId)),c(),p("value",e.stringifyValue(e.autocomplete)),c(5),g(" ",e.stringifyValue(e.label)),c(4),g(" ",e.stringifyValue(e.error)),c(4),g(" ",e.stringifyValue(e.disabled)),c(4),g(" ",e.stringifyValue(e.sizeOptions[e.sizeIndex])),c(4),g(" ",e.stringifyValue(e.iconOptions[e.iconIndex])),c(4),g(" ",e.stringifyValue(e.success)),c(4),g(" ",e.stringifyValue(e.placeholder)),c(4),g(" ",e.stringifyValue(e.readOnly)),c(4),g(" ",e.stringifyValue(e.caption)),c(4),g(" ",e.stringifyValue(e.required)),c(4),g(" ",e.stringifyValue(e.name)),c(4),g(" ",e.stringifyValue(e.showDeleteIcon)),c(4),g(" ",e.stringifyValue(e.maxlength)),c(4),g(" ",e.stringifyValue(e.value)),c(4),g(" ",e.stringifyValue(e.internalId)),c(4),g(" ",e.stringifyValue(e.autocomplete)),c(4),g(" ",e.stringifyValue(e.typeOptions[e.typeIndex])),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,M,A],encapsulation:2})};var Ra=class n{tsCode=`import { Component } from '@angular/core';
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

  protected toggleDisabled() {
    this.disabled = !this.disabled;
  }

  protected toggleError() {
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

  protected toggleRequired() {
    this.required = !this.required;
  }

  protected toggleReadOnly() {
    this.readOnly = !this.readOnly;
  }

  protected toggleResize() {
    this.resizeIndex = (this.resizeIndex + 1) % this.resizeOptions.length;
  }

  protected updateRows(value: string) {
    this.rows = value;
  }

  protected updateValue(value: string) {
    this.value = value;
  }

  protected toggleWrap() {
    this.wrapIndex = (this.wrapIndex + 1) % this.wrapOptions.length;
  }

  protected toggleFullWidth() {
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
    [disabled]=&quot;disabled&quot;
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
    [fullWidth]=&quot;fullWidth&quot;&gt;&lt;/ifx-textarea&gt;`;caption="Caption text, description, error notification";cols=43;disabled=!1;error=!1;label="Label Text";maxlength="";name="textarea";placeholder="Placeholder";required=!0;readOnly=!1;resizeOptions=["both","vertical","horizontal","none"];resizeIndex=0;rows="5";value="";wrapOptions=["soft","hard","off"];wrapIndex=0;fullWidth=!1;updateCaption(t){this.caption=t}updateCols(t){this.cols=Number(t)}toggleDisabled(){this.disabled=!this.disabled}toggleError(){this.error=!this.error}updateLabel(t){this.label=t}updateMaxlength(t){this.maxlength=t}updateName(t){this.name=t}updatePlaceholder(t){this.placeholder=t}toggleRequired(){this.required=!this.required}toggleReadOnly(){this.readOnly=!this.readOnly}toggleResize(){this.resizeIndex=(this.resizeIndex+1)%this.resizeOptions.length}updateRows(t){this.rows=t}updateValue(t){this.value=t}toggleWrap(){this.wrapIndex=(this.wrapIndex+1)%this.wrapOptions.length}toggleFullWidth(){this.fullWidth=!this.fullWidth}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}handleInput(t){console.log("ifxInput:",t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-textarea-example"]],standalone:!1,decls:100,vars:40,consts:[[3,"ifxInput","caption","cols","disabled","error","label","maxlength","name","placeholder","required","readOnly","resize","rows","value","wrap","fullWidth"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","caption","type","text",3,"ifxInput","value"],["label","cols","type","number",3,"ifxInput","value"],["label","label","type","text",3,"ifxInput","value"],["label","maxlength","type","text",3,"ifxInput","value"],["label","name","type","text",3,"ifxInput","value"],["label","placeholder","type","text",3,"ifxInput","value"],["label","rows","type","text",3,"ifxInput","value"],["label","value","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-textarea",0),f("ifxInput",function(a){return e.handleInput(a)}),o(),l(1,"h3",1),s(2,"Controls"),o(),l(3,"div",2)(4,"ifx-button",3),f("click",function(){return e.toggleDisabled()}),s(5,"Toggle Disabled"),o(),l(6,"ifx-button",3),f("click",function(){return e.toggleError()}),s(7,"Toggle Error"),o(),l(8,"ifx-button",3),f("click",function(){return e.toggleRequired()}),s(9,"Toggle Required"),o(),l(10,"ifx-button",3),f("click",function(){return e.toggleReadOnly()}),s(11,"Toggle ReadOnly"),o(),l(12,"ifx-button",3),f("click",function(){return e.toggleResize()}),s(13,"Toggle Resize"),o(),l(14,"ifx-button",3),f("click",function(){return e.toggleWrap()}),s(15,"Toggle Wrap"),o(),l(16,"ifx-button",3),f("click",function(){return e.toggleFullWidth()}),s(17,"Toggle FullWidth"),o()(),l(18,"div",4)(19,"ifx-text-field",5),f("ifxInput",function(a){return e.updateCaption(e.getControlInputValue(a))}),o(),l(20,"ifx-text-field",6),f("ifxInput",function(a){return e.updateCols(e.getControlInputValue(a))}),o(),l(21,"ifx-text-field",7),f("ifxInput",function(a){return e.updateLabel(e.getControlInputValue(a))}),o(),l(22,"ifx-text-field",8),f("ifxInput",function(a){return e.updateMaxlength(e.getControlInputValue(a))}),o(),l(23,"ifx-text-field",9),f("ifxInput",function(a){return e.updateName(e.getControlInputValue(a))}),o(),l(24,"ifx-text-field",10),f("ifxInput",function(a){return e.updatePlaceholder(e.getControlInputValue(a))}),o(),l(25,"ifx-text-field",11),f("ifxInput",function(a){return e.updateRows(e.getControlInputValue(a))}),o(),l(26,"ifx-text-field",12),f("ifxInput",function(a){return e.updateValue(e.getControlInputValue(a))}),o()(),l(27,"div",13)(28,"div")(29,"b"),s(30,"caption:"),o(),s(31),o(),l(32,"div")(33,"b"),s(34,"cols:"),o(),s(35),o(),l(36,"div")(37,"b"),s(38,"disabled:"),o(),s(39),o(),l(40,"div")(41,"b"),s(42,"error:"),o(),s(43),o(),l(44,"div")(45,"b"),s(46,"label:"),o(),s(47),o(),l(48,"div")(49,"b"),s(50,"maxlength:"),o(),s(51),o(),l(52,"div")(53,"b"),s(54,"name:"),o(),s(55),o(),l(56,"div")(57,"b"),s(58,"placeholder:"),o(),s(59),o(),l(60,"div")(61,"b"),s(62,"required:"),o(),s(63),o(),l(64,"div")(65,"b"),s(66,"readOnly:"),o(),s(67),o(),l(68,"div")(69,"b"),s(70,"resize:"),o(),s(71),o(),l(72,"div")(73,"b"),s(74,"rows:"),o(),s(75),o(),l(76,"div")(77,"b"),s(78,"value:"),o(),s(79),o(),l(80,"div")(81,"b"),s(82,"wrap:"),o(),s(83),o(),l(84,"div")(85,"b"),s(86,"fullWidth:"),o(),s(87),o()(),l(88,"details",14)(89,"summary"),s(90,"View Code"),o(),l(91,"div",15)(92,"h3"),s(93,"ifx-textarea-example.ts"),o(),l(94,"pre"),b(95,"code",16),o(),l(96,"h3"),s(97,"ifx-textarea-example.html"),o(),l(98,"pre"),b(99,"code",17),o()()()),i&2&&(p("caption",e.caption)("cols",e.cols)("disabled",e.disabled)("error",e.error)("label",e.label)("maxlength",e.maxlength)("name",e.name)("placeholder",e.placeholder)("required",e.required)("readOnly",e.readOnly)("resize",e.resizeOptions[e.resizeIndex])("rows",e.rows)("value",e.value)("wrap",e.wrapOptions[e.wrapIndex])("fullWidth",e.fullWidth),c(19),p("value",e.stringifyValue(e.caption)),c(),p("value",e.stringifyValue(e.cols)),c(),p("value",e.stringifyValue(e.label)),c(),p("value",e.stringifyValue(e.maxlength)),c(),p("value",e.stringifyValue(e.name)),c(),p("value",e.stringifyValue(e.placeholder)),c(),p("value",e.stringifyValue(e.rows)),c(),p("value",e.stringifyValue(e.value)),c(5),g(" ",e.stringifyValue(e.caption)),c(4),g(" ",e.stringifyValue(e.cols)),c(4),g(" ",e.stringifyValue(e.disabled)),c(4),g(" ",e.stringifyValue(e.error)),c(4),g(" ",e.stringifyValue(e.label)),c(4),g(" ",e.stringifyValue(e.maxlength)),c(4),g(" ",e.stringifyValue(e.name)),c(4),g(" ",e.stringifyValue(e.placeholder)),c(4),g(" ",e.stringifyValue(e.required)),c(4),g(" ",e.stringifyValue(e.readOnly)),c(4),g(" ",e.stringifyValue(e.resizeOptions[e.resizeIndex])),c(4),g(" ",e.stringifyValue(e.rows)),c(4),g(" ",e.stringifyValue(e.value)),c(4),g(" ",e.stringifyValue(e.wrapOptions[e.wrapIndex])),c(4),g(" ",e.stringifyValue(e.fullWidth)),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,M,Yo,A],encapsulation:2})};var Pa=class n{tsCode=`import { Component } from '@angular/core';
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

  protected toggleIcon() {
    this.iconIndex = (this.iconIndex + 1) % this.iconOptions.length;
  }

  protected togglePosition() {
    this.positionIndex = (this.positionIndex + 1) % this.positionOptions.length;
  }

  protected toggleVariant() {
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
    [header]=&quot;header&quot;&gt;I&#039;m the tooltip reference element - Please hover me&lt;/ifx-tooltip&gt;`;text="Hi, I'm a tooltip";iconOptions=["cartF16","ids16","addressBook16","advanced16","ai16","airplane16","antenna16","apartmentBuilding16","applications16","archive16","arrowDown16","arrowLeft16","arrowRight16","arrowTriangleDiagonal16","arrowTriangleDown16","arrowTriangleHorizontal16","arrowTriangleLeft16","arrowTriangleRight16","arrowTriangleUp16","arrowTriangleVertikal16","arrowUp16","assembledProduct16","attachment16","audioDescription16","availability16","award16","ban16","barGraph16","barGraphLinear16","barGraphX16","barcode16","batteryCharging16","beginner16","bell16","bellF16","bellX16","bike16","binoculars16","block16","blocks16","bluetooth16","board16","book16","bookBookmark16","bookOpen16","bookmark16","bookmarkF16","box16","braille16","briefcase16","bug16","bulletList16","cAdd16","cAddF16","cCheck16","cCheckF16","cDelete16","cDeleteF16","cInfo16","cInfoF16","cQuestion16","cQuestionF16","cRemove16","cRemoveF16","cWarning16","cWarningF16","calculator16","calendar16","calendarCheck16","calendarHeart16","calendarPlus16","camera16","car16","carLights16","card16","cart16","changeStatus16","charging16","chart16","chat16","check16","checkList16","checkedOutOther16","checkedOutYou16","chemistry16","chevronDown16","chevronLeft16","chevronRight16","chevronUp16","chip16","chipAi16","chipDip16","chips16","chocolateMenu16","chocolateMenuActive16","clipboard16","clipboardCheck16","clipboardMedical16","clock16","cloud16","cloudUploadDownload16","coach16","code16","cogwheel16","coins16","comment16","community16","configure16","contact16","copy16","copyright16","cornerArrowDownRight16","cross16","cssGidEuResidencePermit16","curvedArrowLeft16","curvedArrowRight16","cutlery16","dashboard16","database16","delete16","deleteForever16","deleteText16","desk16","desktop16","desktopScreen16","dot16","doubleChevronDown16","doubleChevronLeft16","doubleChevronRight16","doubleChevronUp16","download16","downloadCheck16","downloadPlus16","dragArrows16","dragIndicator16","duplicate16","eid16","editor16","elearning16","enlarge16","euc16","facebook","factory16","fairyWand16","feedbackSupport16","file16","fileAac16","fileAvi16","fileCss16","fileCsv16","fileDoc16","fileDocx16","fileEps16","fileExe16","fileGif16","fileHtml16","fileJpg16","fileJs16","fileJson16","fileMkv16","fileMov16","fileMp316","fileMp416","fileMpg16","fileOtf16","filePdf16","filePng16","filePpt16","filePptx16","fileRar16","fileRtf16","fileSap16","fileSql16","fileStp16","fileSvg16","fileText16","fileTxt16","fileVdf16","fileVdn16","fileVnd16","fileXlsx16","fileXml16","fileZip16","filter16","filterActive16","finance16","firewall16","flag16","flagF16","floppyDisk16","floppyDisks16","folder16","folderAdd16","folderEmpty16","folderOpen16","folderRemove16","fruitCrate16","gallery16","genericDiode16","github","glasses16","globe16","google","graduation16","grid16","gridLayout16","group16","gym16","halogenFree16","handshake16","happyBaby16","hashMark16","heading116","heading216","heading316","heading416","heading516","heading616","headset16","hide16","highReliablity16","history16","home16","hospital16","hospitalBed16","hourglass16","hyperlink16","image16","inbox16","instagram","insurance16","intermediate16","isolator16","key16","language16","laptop16","launch16","layers16","layout16","leadFree16","leaf16","license16","lifebuoy16","lightEmittingDiode16","lineGraph16","link16","linkedin","list16","listCheck16","listEdit16","listPlus16","listUser16","lock16","lockF16","logistics16","logout16","mail16","mapPin16","maximize16","medal16","mediaEject16","mediaPause16","mediaPlay16","mediaRecord16","mediaStop16","megaphone16","menu16","menuLeft16","menuRight16","microcontroller16","microcontrollerErase16","microcontrollerProgram16","microcontrollerSave16","microcontrollerVerify16","microphone16","minus16","mobileChat16","module16","money16","moon16","moonFilled16","more16","mouseCursor16","mouseCursorPointer16","mouseCursorText16","multiLineGraph16","myHr16","network16","orderedList16","organigram16","package16","paragraphs16","park16","passport16","pen16","people16","phone16","phoneCall16","pin16","pinF16","plus16","poll16","power16","preferences16","present16","preview16","printer16","procurement16","project16","protection16","qrCode16","qualified16","questionMark16","quote16","rateDown16","rateUp16","refresh16","reload16","reply16","restore16","roboticArm16","rocket16","rss16","sWarning16","sad16","sample16","satelite16","scale16","scissors16","search16","send16","server16","share16","shield16","shieldSettings16","show16","shuffle16","sidebarLeft16","sidebarRight16","simulation16","skipToBeginning16","skipToEnd16","smartphone16","smile16","snow16","software16","solution16","sound16","speaker16","splitView16","staircaseGraph16","star16","starF16","streetView16","stroller16","subscript16","superscript16","swapHorizontal16","swapVertical16","table16","tableX16","tag16","team16","technology16","temperature16","textBold16","textColor16","textItalic16","thumbDown16","thumbUp16","tool16","training16","tram16","transceiver16","translation16","treeStructure16","trendDown16","trendUp16","ungroup16","unlink16","unlocked16","unorderedList16","upload16","usb16","usbRemove16","usbToggle16","user16","userAdd16","userAdded16","userPin16","userRemove16","verified16","video16","videoCam16","videoCamX16","viewReplacement16","volumeDown16","volumeMute16","volumeUp16","wafer16","warning16","warningCritical16","warningCriticalF16","warningF16","waves16","webinar16","webpage16","wechat","weibo","wheelchair16","wifi16","windows16","xing","youku","youtube","zhihu","zoomIn16","zoomOut16"];iconIndex=0;positionOptions=["auto","bottom-start","top-start","left","bottom-end","top-end","right","bottom","top"];positionIndex=0;variantOptions=["compact","dismissible","extended"];variantIndex=0;header="Tooltip headline";ariaLabelText="Tooltip with important information";updateText(t){this.text=t}toggleIcon(){this.iconIndex=(this.iconIndex+1)%this.iconOptions.length}togglePosition(){this.positionIndex=(this.positionIndex+1)%this.positionOptions.length}toggleVariant(){this.variantIndex=(this.variantIndex+1)%this.variantOptions.length}updateHeader(t){this.header=t}updateAriaLabelText(t){this.ariaLabelText=t}getControlInputValue(t){let i=t.target;return String(i?.value??"")}stringifyValue(t){if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="object")try{return JSON.stringify(t)}catch{return String(t)}return String(t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ifx-tooltip-example"]],standalone:!1,decls:52,vars:17,consts:[[3,"text","variant","position","icon","ariaLabelText","header"],[1,"controls-title"],[1,"controls","controls-toggle"],["variant","secondary",3,"click"],[1,"controls","controls-input"],["label","text","type","text",3,"ifxInput","value"],["label","header","type","text",3,"ifxInput","value"],["label","ariaLabelText","type","text",3,"ifxInput","value"],[1,"state"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"ifx-tooltip",0),s(1,"I'm the tooltip reference element - Please hover me"),o(),l(2,"h3",1),s(3,"Controls"),o(),l(4,"div",2)(5,"ifx-button",3),f("click",function(){return e.toggleIcon()}),s(6,"Toggle Icon"),o(),l(7,"ifx-button",3),f("click",function(){return e.togglePosition()}),s(8,"Toggle Position"),o(),l(9,"ifx-button",3),f("click",function(){return e.toggleVariant()}),s(10,"Toggle Variant"),o()(),l(11,"div",4)(12,"ifx-text-field",5),f("ifxInput",function(a){return e.updateText(e.getControlInputValue(a))}),o(),l(13,"ifx-text-field",6),f("ifxInput",function(a){return e.updateHeader(e.getControlInputValue(a))}),o(),l(14,"ifx-text-field",7),f("ifxInput",function(a){return e.updateAriaLabelText(e.getControlInputValue(a))}),o()(),l(15,"div",8)(16,"div")(17,"b"),s(18,"text:"),o(),s(19),o(),l(20,"div")(21,"b"),s(22,"icon:"),o(),s(23),o(),l(24,"div")(25,"b"),s(26,"position:"),o(),s(27),o(),l(28,"div")(29,"b"),s(30,"variant:"),o(),s(31),o(),l(32,"div")(33,"b"),s(34,"header:"),o(),s(35),o(),l(36,"div")(37,"b"),s(38,"ariaLabelText:"),o(),s(39),o()(),l(40,"details",9)(41,"summary"),s(42,"View Code"),o(),l(43,"div",10)(44,"h3"),s(45,"ifx-tooltip-example.ts"),o(),l(46,"pre"),b(47,"code",11),o(),l(48,"h3"),s(49,"ifx-tooltip-example.html"),o(),l(50,"pre"),b(51,"code",12),o()()()),i&2&&(p("text",e.text)("variant",e.variantOptions[e.variantIndex])("position",e.positionOptions[e.positionIndex])("icon",e.iconOptions[e.iconIndex])("ariaLabelText",e.ariaLabelText)("header",e.header),c(12),p("value",e.stringifyValue(e.text)),c(),p("value",e.stringifyValue(e.header)),c(),p("value",e.stringifyValue(e.ariaLabelText)),c(5),g(" ",e.stringifyValue(e.text)),c(4),g(" ",e.stringifyValue(e.iconOptions[e.iconIndex])),c(4),g(" ",e.stringifyValue(e.positionOptions[e.positionIndex])),c(4),g(" ",e.stringifyValue(e.variantOptions[e.variantIndex])),c(4),g(" ",e.stringifyValue(e.header)),c(4),g(" ",e.stringifyValue(e.ariaLabelText)),c(8),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[k,M,Eh,A],encapsulation:2})};var Va=class n{opened=!1;tsCode=`import { Component } from '@angular/core';

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

  <ifx-button (click)="openModal()">Open Modal</ifx-button>`;openModal(){this.opened=!0}handleOpen(t){console.log("ifxOpen:",t.detail)}handleClose(t){console.log("ifxClose:",t.detail)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-modal-example"]],standalone:!1,decls:25,vars:7,consts:[["caption","Modal Title","variant","default","size","s",3,"ngModelChange","ifxOpen","ifxClose","captionAriaLabel","closeButtonAriaLabel","closeOnOverlayClick","showCloseButton","ngModel"],["slot","content"],["slot","buttons"],["variant","secondary"],[3,"click"],[1,"code-details"],[1,"code-blocks"],[1,"language-typescript",3,"innerHTML"],[1,"language-markup",3,"innerHTML"]],template:function(i,e){i&1&&(l(0,"p"),s(1,` This example demonstrates the classic Angular NgModule pattern with primitive values and two-way binding using [(ngModel)].
`),o(),l(2,"ifx-modal",0),Ze("ngModelChange",function(a){return st(e.opened,a)||(e.opened=a),a}),f("ifxOpen",function(a){return e.handleOpen(a)})("ifxClose",function(a){return e.handleClose(a)}),l(3,"div",1)(4,"span"),s(5,"Modal content"),o()(),l(6,"div",2)(7,"ifx-button",3),s(8,"Cancel"),o(),l(9,"ifx-button"),s(10,"OK"),o()()(),l(11,"ifx-button",4),f("click",function(){return e.openModal()}),s(12,"Open Modal"),o(),l(13,"details",5)(14,"summary"),s(15,"View Code"),o(),l(16,"div",6)(17,"h3"),s(18,"modal-example.ts"),o(),l(19,"pre"),b(20,"code",7),o(),l(21,"h3"),s(22,"modal-example.html"),o(),l(23,"pre"),b(24,"code",8),o()()()),i&2&&(c(2),p("captionAriaLabel","Additional information for caption")("closeButtonAriaLabel","Close modal")("closeOnOverlayClick",!1)("showCloseButton",!0),We("ngModel",e.opened),c(18),p("innerHTML",e.tsCode,_),c(4),p("innerHTML",e.htmlCode,_))},dependencies:[jo,Fi,k,oh,Ch],encapsulation:2})};var qa=class n{booleanValue=!1;textValue="";static \u0275fac=function(i){return new(i||n)};static \u0275cmp=I({type:n,selectors:[["app-ng-model-example"]],standalone:!1,decls:13,vars:6,consts:[[1,"ng-model-example"],["name","ngModelCheckbox",3,"ngModelChange","ngModel"],["name","ngModelSwitch",3,"ngModelChange","ngModel"],["name","ngModelSearchField","show-delete-icon","true","placeholder","Search...",3,"ngModelChange","ngModel"],["name","ngModelTextField","show-delete-icon","true","placeholder","Type here...",3,"ngModelChange","ngModel"],["name","ngModelTextarea","label","Message","placeholder","Write a longer message...",3,"ngModelChange","ngModel"],["name","ngModelSearchBar","is-open","true","autocomplete","on",3,"ngModelChange","ngModel"]],template:function(i,e){i&1&&(l(0,"div",0)(1,"h3"),s(2,"Boolean inputs (same ngModel)"),o(),l(3,"ifx-checkbox",1),Ze("ngModelChange",function(a){return st(e.booleanValue,a)||(e.booleanValue=a),a}),s(4," Checkbox bound via ngModel "),o(),l(5,"ifx-switch",2),Ze("ngModelChange",function(a){return st(e.booleanValue,a)||(e.booleanValue=a),a}),s(6," Switch bound via ngModel "),o(),l(7,"h3"),s(8,"Text inputs (bound to the same value)"),o(),l(9,"ifx-search-field",3),Ze("ngModelChange",function(a){return st(e.textValue,a)||(e.textValue=a),a}),o(),l(10,"ifx-text-field",4),Ze("ngModelChange",function(a){return st(e.textValue,a)||(e.textValue=a),a}),o(),l(11,"ifx-textarea",5),Ze("ngModelChange",function(a){return st(e.textValue,a)||(e.textValue=a),a}),o(),l(12,"ifx-search-bar",6),Ze("ngModelChange",function(a){return st(e.textValue,a)||(e.textValue=a),a}),o()()),i&2&&(c(3),We("ngModel",e.booleanValue),c(2),We("ngModel",e.booleanValue),c(4),We("ngModel",e.textValue),c(),We("ngModel",e.textValue),c(),We("ngModel",e.textValue),c(),We("ngModel",e.textValue))},dependencies:[jo,Fi,Ln,Nn,Wo,Xo,M,Yo,Mt,A],styles:[".ng-model-example[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}h3[_ngcontent-%COMP%]{margin-bottom:0rem}"]})};function $y(n,t){n&1&&(l(0,"section",87)(1,"h2"),s(2,"Accordion"),o(),l(3,"div",88),b(4,"app-ifx-accordion-example"),o()())}function Gy(n,t){n&1&&(l(0,"section",89)(1,"h2"),s(2,"Action List"),o(),l(3,"div",88),b(4,"app-ifx-action-list-example"),o()())}function Wy(n,t){n&1&&(l(0,"section",90)(1,"h2"),s(2,"Alert"),o(),l(3,"div",88),b(4,"app-ifx-alert-example"),o()())}function Zy(n,t){n&1&&(l(0,"section",91)(1,"h2"),s(2,"AI Label"),o(),l(3,"div",88),b(4,"app-ifx-ai-label-example"),o()())}function Jy(n,t){n&1&&(l(0,"section",92)(1,"h2"),s(2,"Button"),o(),l(3,"div",88),b(4,"app-ifx-button-example"),o()())}function Xy(n,t){n&1&&(l(0,"section",93)(1,"h2"),s(2,"Card"),o(),l(3,"div",88),b(4,"app-ifx-card-example"),o()())}function Yy(n,t){n&1&&(l(0,"section",94)(1,"h2"),s(2,"Checkbox"),o(),l(3,"div",88),b(4,"app-ifx-checkbox-example"),o()())}function Qy(n,t){n&1&&(l(0,"section",95)(1,"h2"),s(2,"Checkbox Group"),o(),l(3,"div",88),b(4,"app-ifx-checkbox-group-example"),o()())}function Ky(n,t){n&1&&(l(0,"section",96)(1,"h2"),s(2,"Chip"),o(),l(3,"div",88),b(4,"app-ifx-chip-example"),o()())}function eI(n,t){n&1&&(l(0,"section",97)(1,"h2"),s(2,"Content Switcher"),o(),l(3,"div",88),b(4,"app-ifx-content-switcher-example"),o()())}function tI(n,t){n&1&&(l(0,"section",98)(1,"h2"),s(2,"Date Picker"),o(),l(3,"div",88),b(4,"app-ifx-date-picker-example"),o()())}function nI(n,t){n&1&&(l(0,"section",99)(1,"h2"),s(2,"Dropdown"),o(),l(3,"div",88),b(4,"app-ifx-dropdown-example"),o()())}function iI(n,t){n&1&&(l(0,"section",100)(1,"h2"),s(2,"Error Page"),o(),l(3,"div",88),b(4,"app-ifx-error-page-example"),o()())}function rI(n,t){n&1&&(l(0,"section",101)(1,"h2"),s(2,"Footer - Medium"),o(),l(3,"div",88),b(4,"app-ifx-footer-example-medium"),o()())}function oI(n,t){n&1&&(l(0,"section",102)(1,"h2"),s(2,"Icon Button"),o(),l(3,"div",88),b(4,"app-ifx-icon-button-example"),o()())}function aI(n,t){n&1&&(l(0,"section",103)(1,"h2"),s(2,"Indicator"),o(),l(3,"div",88),b(4,"app-ifx-indicator-example"),o()())}function sI(n,t){n&1&&(l(0,"section",104)(1,"h2"),s(2,"Link"),o(),l(3,"div",88),b(4,"app-ifx-link-example"),o()())}function lI(n,t){n&1&&(l(0,"section",105)(1,"h2"),s(2,"Navigation/Navbar"),o(),l(3,"div",88),b(4,"app-ifx-navbar-example"),o()())}function cI(n,t){n&1&&(l(0,"section",106)(1,"h2"),s(2,"Navigation/Sidebar"),o(),l(3,"div",88),b(4,"app-ifx-sidebar-example"),o()())}function dI(n,t){n&1&&(l(0,"section",107)(1,"h2"),s(2,"Notification"),o(),l(3,"div",88),b(4,"app-ifx-notification-example"),o()())}function uI(n,t){n&1&&(l(0,"section",108)(1,"h2"),s(2,"Pagination"),o(),l(3,"div",88),b(4,"app-ifx-pagination-example"),o()())}function pI(n,t){n&1&&(l(0,"section",109)(1,"h2"),s(2,"Progress Bar"),o(),l(3,"div",88),b(4,"app-ifx-progress-bar-example"),o()())}function fI(n,t){n&1&&(l(0,"section",110)(1,"h2"),s(2,"Radio Button"),o(),l(3,"div",88),b(4,"app-ifx-radio-button-example"),o()())}function mI(n,t){n&1&&(l(0,"section",111)(1,"h2"),s(2,"Radio Button Group"),o(),l(3,"div",88),b(4,"app-ifx-radio-button-group-example"),o()())}function gI(n,t){n&1&&(l(0,"section",112)(1,"h2"),s(2,"Search Bar"),o(),l(3,"div",88),b(4,"app-ifx-search-bar-example"),o()())}function hI(n,t){n&1&&(l(0,"section",113)(1,"h2"),s(2,"Search Field"),o(),l(3,"div",88),b(4,"app-ifx-search-field-example"),o()())}function vI(n,t){n&1&&(l(0,"section",114)(1,"h2"),s(2,"Segmented Control"),o(),l(3,"div",88),b(4,"app-ifx-segmented-control-example"),o()())}function xI(n,t){n&1&&(l(0,"section",115)(1,"h2"),s(2,"Select/Single Select"),o(),l(3,"div",88),b(4,"app-ifx-select-example"),o()())}function bI(n,t){n&1&&(l(0,"section",116)(1,"h2"),s(2,"Spinner"),o(),l(3,"div",88),b(4,"app-ifx-spinner-example"),o()())}function yI(n,t){n&1&&(l(0,"section",117)(1,"h2"),s(2,"Status"),o(),l(3,"div",88),b(4,"app-ifx-status-example"),o()())}function II(n,t){n&1&&(l(0,"section",118)(1,"h2"),s(2,"Stepper"),o(),l(3,"div",88),b(4,"app-ifx-stepper-example"),o()())}function EI(n,t){n&1&&(l(0,"section",119)(1,"h2"),s(2,"Stepper - Compact"),o(),l(3,"div",88),b(4,"app-ifx-stepper-example-compact"),o()())}function CI(n,t){n&1&&(l(0,"section",120)(1,"h2"),s(2,"Switch"),o(),l(3,"div",88),b(4,"app-ifx-switch-example"),o()())}function wI(n,t){n&1&&(l(0,"section",121)(1,"h2"),s(2,"Table (basic)"),o(),l(3,"div",88),b(4,"app-ifx-basic-table-example"),o()())}function _I(n,t){n&1&&(l(0,"section",122)(1,"h2"),s(2,"Table (advanced) - DefaultState"),o(),l(3,"div",88),b(4,"app-ifx-table-example-defaultstate"),o()())}function DI(n,t){n&1&&(l(0,"section",123)(1,"h2"),s(2,"Tabs"),o(),l(3,"div",88),b(4,"app-ifx-tabs-example"),o()())}function SI(n,t){n&1&&(l(0,"section",124)(1,"h2"),s(2,"Text Field"),o(),l(3,"div",88),b(4,"app-ifx-text-field-example"),o()())}function TI(n,t){n&1&&(l(0,"section",125)(1,"h2"),s(2,"Textarea"),o(),l(3,"div",88),b(4,"app-ifx-textarea-example"),o()())}function kI(n,t){n&1&&(l(0,"section",126)(1,"h2"),s(2,"Tooltip"),o(),l(3,"div",88),b(4,"app-ifx-tooltip-example"),o()())}function MI(n,t){n&1&&(l(0,"section",127)(1,"h2"),s(2,"Modal"),o(),l(3,"div",88),b(4,"app-modal-example"),o()())}function AI(n,t){n&1&&(l(0,"section",128)(1,"h2"),s(2,"ngModel Example"),o(),l(3,"div",88),b(4,"app-ng-model-example"),o()())}var OI=Dh.dependencies["@infineon/infineon-design-system-angular"],Ha=class n{constructor(t){this.platformId=t}platformId;title=ut("angular-module-example");version="";defaultId="ifx-accordion-example";activeId=ut(this.defaultId);ngOnInit(){if(OI.includes("workspace")?this.version="workspace":this.version=Sh,!Ec(this.platformId))return;let t=(e,r=0)=>{if(e==="all-components"){$d.default.highlightAll();return}let a=document.getElementById(e);if(a){$d.default.highlightAllUnder(a);return}r<30&&setTimeout(()=>t(e,r+1),50)},i=()=>{let e=this.getHashId();e?this.activeId.set(e):window.location.hash||(window.location.hash=`#${this.activeId()}`);let r=e||this.activeId();t(r)};i(),window.addEventListener("hashchange",i)}getHashId(){return Ec(this.platformId)&&window.location.hash?window.location.hash.substring(1):""}static \u0275fac=function(i){return new(i||n)(v(tn))};static \u0275cmp=I({type:n,selectors:[["app-root"]],standalone:!1,decls:135,vars:44,consts:[["applicationName","Infineon Design System - Angular Module Example",3,"showLogoAndAppname","fixed"],["icon","block16","slot","left-item","href","","target","_self"],["href","#ifx-accordion-example"],["href","#ifx-action-list-example"],["href","#ifx-ai-label-example"],["href","#ifx-alert-example"],["href","#ifx-button-example"],["href","#ifx-card-example"],["href","#ifx-checkbox-example"],["href","#ifx-checkbox-group-example"],["href","#ifx-chip-example"],["href","#ifx-content-switcher-example"],["href","#ifx-date-picker-example"],["href","#ifx-dropdown-example"],["href","#ifx-error-page-example"],["href","#ifx-footer-example-medium"],["href","#ifx-icon-button-example"],["href","#ifx-indicator-example"],["href","#ifx-link-example"],["href","#ifx-navbar-example"],["href","#ifx-sidebar-example"],["href","#ifx-notification-example"],["href","#ifx-pagination-example"],["href","#ifx-progress-bar-example"],["href","#ifx-radio-button-example"],["href","#ifx-radio-button-group-example"],["href","#ifx-search-bar-example"],["href","#ifx-search-field-example"],["href","#ifx-segmented-control-example"],["href","#ifx-select-example"],["href","#ifx-spinner-example"],["href","#ifx-status-example"],["href","#ifx-stepper-example"],["href","#ifx-stepper-example-compact"],["href","#ifx-switch-example"],["href","#ifx-table-example-defaultstate"],["href","#ifx-basic-table-example"],["href","#ifx-tabs-example"],["href","#ifx-text-field-example"],["href","#ifx-textarea-example"],["href","#ifx-tooltip-example"],["href","#all-components","slot","left-item"],["href","#ifx-modal-example","slot","left-item"],["href","#ng-model-example","slot","left-item"],[1,"version-info"],[1,"components"],["id","ifx-accordion-example","class","component-example",4,"ngIf"],["id","ifx-action-list-example","class","component-example",4,"ngIf"],["id","ifx-alert-example","class","component-example",4,"ngIf"],["id","ifx-ai-label-example","class","component-example",4,"ngIf"],["id","ifx-button-example","class","component-example",4,"ngIf"],["id","ifx-card-example","class","component-example",4,"ngIf"],["id","ifx-checkbox-example","class","component-example",4,"ngIf"],["id","ifx-checkbox-group-example","class","component-example",4,"ngIf"],["id","ifx-chip-example","class","component-example",4,"ngIf"],["id","ifx-content-switcher-example","class","component-example",4,"ngIf"],["id","ifx-date-picker-example","class","component-example",4,"ngIf"],["id","ifx-dropdown-example","class","component-example",4,"ngIf"],["id","ifx-error-page-example","class","component-example",4,"ngIf"],["id","ifx-footer-example-medium","class","component-example",4,"ngIf"],["id","ifx-icon-button-example","class","component-example",4,"ngIf"],["id","ifx-indicator-example","class","component-example",4,"ngIf"],["id","ifx-link-example","class","component-example",4,"ngIf"],["id","ifx-navbar-example","class","component-example",4,"ngIf"],["id","ifx-sidebar-example","class","component-example",4,"ngIf"],["id","ifx-notification-example","class","component-example",4,"ngIf"],["id","ifx-pagination-example","class","component-example",4,"ngIf"],["id","ifx-progress-bar-example","class","component-example",4,"ngIf"],["id","ifx-radio-button-example","class","component-example",4,"ngIf"],["id","ifx-radio-button-group-example","class","component-example",4,"ngIf"],["id","ifx-search-bar-example","class","component-example",4,"ngIf"],["id","ifx-search-field-example","class","component-example",4,"ngIf"],["id","ifx-segmented-control-example","class","component-example",4,"ngIf"],["id","ifx-select-example","class","component-example",4,"ngIf"],["id","ifx-spinner-example","class","component-example",4,"ngIf"],["id","ifx-status-example","class","component-example",4,"ngIf"],["id","ifx-stepper-example","class","component-example",4,"ngIf"],["id","ifx-stepper-example-compact","class","component-example",4,"ngIf"],["id","ifx-switch-example","class","component-example",4,"ngIf"],["id","ifx-basic-table-example","class","component-example",4,"ngIf"],["id","ifx-table-example-defaultstate","class","component-example",4,"ngIf"],["id","ifx-tabs-example","class","component-example",4,"ngIf"],["id","ifx-text-field-example","class","component-example",4,"ngIf"],["id","ifx-textarea-example","class","component-example",4,"ngIf"],["id","ifx-tooltip-example","class","component-example",4,"ngIf"],["id","ifx-modal-example","class","component-example",4,"ngIf"],["id","ng-model-example","class","component-example",4,"ngIf"],["id","ifx-accordion-example",1,"component-example"],[1,"demo"],["id","ifx-action-list-example",1,"component-example"],["id","ifx-alert-example",1,"component-example"],["id","ifx-ai-label-example",1,"component-example"],["id","ifx-button-example",1,"component-example"],["id","ifx-card-example",1,"component-example"],["id","ifx-checkbox-example",1,"component-example"],["id","ifx-checkbox-group-example",1,"component-example"],["id","ifx-chip-example",1,"component-example"],["id","ifx-content-switcher-example",1,"component-example"],["id","ifx-date-picker-example",1,"component-example"],["id","ifx-dropdown-example",1,"component-example"],["id","ifx-error-page-example",1,"component-example"],["id","ifx-footer-example-medium",1,"component-example"],["id","ifx-icon-button-example",1,"component-example"],["id","ifx-indicator-example",1,"component-example"],["id","ifx-link-example",1,"component-example"],["id","ifx-navbar-example",1,"component-example"],["id","ifx-sidebar-example",1,"component-example"],["id","ifx-notification-example",1,"component-example"],["id","ifx-pagination-example",1,"component-example"],["id","ifx-progress-bar-example",1,"component-example"],["id","ifx-radio-button-example",1,"component-example"],["id","ifx-radio-button-group-example",1,"component-example"],["id","ifx-search-bar-example",1,"component-example"],["id","ifx-search-field-example",1,"component-example"],["id","ifx-segmented-control-example",1,"component-example"],["id","ifx-select-example",1,"component-example"],["id","ifx-spinner-example",1,"component-example"],["id","ifx-status-example",1,"component-example"],["id","ifx-stepper-example",1,"component-example"],["id","ifx-stepper-example-compact",1,"component-example"],["id","ifx-switch-example",1,"component-example"],["id","ifx-basic-table-example",1,"component-example"],["id","ifx-table-example-defaultstate",1,"component-example"],["id","ifx-tabs-example",1,"component-example"],["id","ifx-text-field-example",1,"component-example"],["id","ifx-textarea-example",1,"component-example"],["id","ifx-tooltip-example",1,"component-example"],["id","ifx-modal-example",1,"component-example"],["id","ng-model-example",1,"component-example"]],template:function(i,e){i&1&&(l(0,"ifx-navbar",0)(1,"ifx-navbar-item",1),s(2," Components A-E "),l(3,"ifx-navbar-item",2),s(4,"Accordion"),o(),l(5,"ifx-navbar-item",3),s(6,"Action List"),o(),l(7,"ifx-navbar-item",4),s(8,"AI Label"),o(),l(9,"ifx-navbar-item",5),s(10,"Alert"),o(),l(11,"ifx-navbar-item",6),s(12,"Button"),o(),l(13,"ifx-navbar-item",7),s(14,"Card"),o(),l(15,"ifx-navbar-item",8),s(16,"Checkbox"),o(),l(17,"ifx-navbar-item",9),s(18,"Checkbox Group"),o(),l(19,"ifx-navbar-item",10),s(20,"Chip"),o(),l(21,"ifx-navbar-item",11),s(22,"Content Switcher"),o(),l(23,"ifx-navbar-item",12),s(24,"Date Picker"),o(),l(25,"ifx-navbar-item",13),s(26,"Dropdown"),o(),l(27,"ifx-navbar-item",14),s(28,"Error Page"),o()(),l(29,"ifx-navbar-item",1),s(30," Components F-R "),l(31,"ifx-navbar-item",15),s(32,"Footer - Medium"),o(),l(33,"ifx-navbar-item",16),s(34,"Icon Button"),o(),l(35,"ifx-navbar-item",17),s(36,"Indicator"),o(),l(37,"ifx-navbar-item",18),s(38,"Link"),o(),l(39,"ifx-navbar-item",19),s(40,"Navigation/Navbar"),o(),l(41,"ifx-navbar-item",20),s(42,"Navigation/Sidebar"),o(),l(43,"ifx-navbar-item",21),s(44,"Notification"),o(),l(45,"ifx-navbar-item",22),s(46,"Pagination"),o(),l(47,"ifx-navbar-item",23),s(48,"Progress Bar"),o(),l(49,"ifx-navbar-item",24),s(50,"Radio Button"),o(),l(51,"ifx-navbar-item",25),s(52,"Radio Button Group"),o()(),l(53,"ifx-navbar-item",1),s(54," Components S-Z "),l(55,"ifx-navbar-item",26),s(56,"Search Bar"),o(),l(57,"ifx-navbar-item",27),s(58,"Search Field"),o(),l(59,"ifx-navbar-item",28),s(60,"Segmented Control"),o(),l(61,"ifx-navbar-item",29),s(62,"Select/Single Select"),o(),l(63,"ifx-navbar-item",30),s(64,"Spinner"),o(),l(65,"ifx-navbar-item",31),s(66,"Status"),o(),l(67,"ifx-navbar-item",32),s(68,"Stepper"),o(),l(69,"ifx-navbar-item",33),s(70,"Stepper - Compact"),o(),l(71,"ifx-navbar-item",34),s(72,"Switch"),o(),l(73,"ifx-navbar-item",35),s(74,"Table (advanced) - DefaultState"),o(),l(75,"ifx-navbar-item",36),s(76,"Table (basic)"),o(),l(77,"ifx-navbar-item",37),s(78,"Tabs"),o(),l(79,"ifx-navbar-item",38),s(80,"Text Field"),o(),l(81,"ifx-navbar-item",39),s(82,"Textarea"),o(),l(83,"ifx-navbar-item",40),s(84,"Tooltip"),o()(),l(85,"ifx-navbar-item",41),s(86,"All Components"),o(),l(87,"ifx-navbar-item",42),s(88,"Modal"),o(),l(89,"ifx-navbar-item",43),s(90,"ngModel Example"),o()(),l(91,"div",44),s(92),o(),l(93,"div",45),_o(94,$y,5,0,"section",46)(95,Gy,5,0,"section",47)(96,Wy,5,0,"section",48)(97,Zy,5,0,"section",49)(98,Jy,5,0,"section",50)(99,Xy,5,0,"section",51)(100,Yy,5,0,"section",52)(101,Qy,5,0,"section",53)(102,Ky,5,0,"section",54)(103,eI,5,0,"section",55)(104,tI,5,0,"section",56)(105,nI,5,0,"section",57)(106,iI,5,0,"section",58)(107,rI,5,0,"section",59)(108,oI,5,0,"section",60)(109,aI,5,0,"section",61)(110,sI,5,0,"section",62)(111,lI,5,0,"section",63)(112,cI,5,0,"section",64)(113,dI,5,0,"section",65)(114,uI,5,0,"section",66)(115,pI,5,0,"section",67)(116,fI,5,0,"section",68)(117,mI,5,0,"section",69)(118,gI,5,0,"section",70)(119,hI,5,0,"section",71)(120,vI,5,0,"section",72)(121,xI,5,0,"section",73)(122,bI,5,0,"section",74)(123,yI,5,0,"section",75)(124,II,5,0,"section",76)(125,EI,5,0,"section",77)(126,CI,5,0,"section",78)(127,wI,5,0,"section",79)(128,_I,5,0,"section",80)(129,DI,5,0,"section",81)(130,SI,5,0,"section",82)(131,TI,5,0,"section",83)(132,kI,5,0,"section",84)(133,MI,5,0,"section",85)(134,AI,5,0,"section",86),o()),i&2&&(p("showLogoAndAppname",!0)("fixed",!1),c(92),g("@infineon/infineon-design-system-angular@",e.version),c(2),p("ngIf",e.activeId()==="ifx-accordion-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-action-list-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-alert-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-ai-label-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-button-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-card-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-checkbox-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-checkbox-group-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-chip-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-content-switcher-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-date-picker-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-dropdown-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-error-page-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-footer-example-medium"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-icon-button-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-indicator-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-link-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-navbar-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-sidebar-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-notification-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-pagination-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-progress-bar-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-radio-button-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-radio-button-group-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-search-bar-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-search-field-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-segmented-control-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-select-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-spinner-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-status-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-stepper-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-stepper-example-compact"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-switch-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-basic-table-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-table-example-defaultstate"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-tabs-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-text-field-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-textarea-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-tooltip-example"||e.activeId()==="all-components"),c(),p("ngIf",e.activeId()==="ifx-modal-example"),c(),p("ngIf",e.activeId()==="ng-model-example"))},dependencies:[bc,Uo,$o,Ko,ea,ta,na,ia,ra,oa,aa,sa,la,ca,da,ua,pa,fa,ma,ga,ha,va,xa,ba,ya,Ia,Ea,Ca,wa,_a,Da,Sa,Ta,ka,Ma,Aa,Oa,La,Fa,Na,Ra,Pa,Va,qa],encapsulation:2})};var ja=class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Ne({type:n,bootstrap:[Ha]});static \u0275inj=we({providers:[tl()],imports:[Oc,kg,wh.forRoot()]})};Ac().bootstrapModule(ja,{ngZoneEventCoalescing:!0}).catch(n=>console.error(n));
