"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[5014],{5014:function(t,n,e){e.r(n),e.d(n,{ifx_icon:function(){return u}});var i=e(2982),o=e(5671),r=e(3144),c=e(929),s=e(6947),u=function(){function t(n){(0,o.Z)(this,t),(0,c.r)(this,n),this.consoleError=(0,c.c)(this,"consoleError",7),this.icon="",this.ifxIcon=void 0}return(0,r.Z)(t,[{key:"convertStringToHtml",value:function(t){var n=document.createElement("div");return n.innerHTML=t,n.firstChild}},{key:"convertHtmlToObject",value:function(t){return Array.from(t.attributes,(function(t){return{name:t.name,value:t.value}})).reduce((function(t,n){return t[n.name]=n.value,t}),{})}},{key:"convertPathsToVnode",value:function(t){var n=[],e=this.convertHtmlToObject(t),i=(0,c.h)("path",e);if(n.push(i),t.firstChild)for(var o=t.querySelectorAll("path"),r=t.querySelectorAll("path").length,s=0;s<r;s++){var u=this.convertHtmlToObject(o[s]),l=(0,c.h)("path",u);n.push(l)}return n}},{key:"getSVG",value:function(t){return c.h.apply(void 0,["svg",{class:"inline-svg",width:this.ifxIcon.width,height:this.ifxIcon.height,xmlns:"http://www.w3.org/2000/svg",fill:this.ifxIcon.fill,viewBox:this.ifxIcon.viewBox}].concat((0,i.Z)(t)))}},{key:"constructIcon",value:function(){if(this.ifxIcon){var t=this.convertStringToHtml(this.ifxIcon.svgContent),n=this.convertPathsToVnode(t),e=this.getSVG(n);return this.consoleError.emit(!1),e}return console.error("Icon not found!"),this.consoleError.emit(!0),""}},{key:"componentWillLoad",value:function(){this.ifxIcon=(0,s.g)(this.icon.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,(function(t,n){return n})))}},{key:"render",value:function(){return(0,c.h)(c.a,null,this.constructIcon())}}]),t}();u.style="ifx-icon{display:inline-flex;justify-content:center}ifx-icon:empty{display:none}"}}]);
//# sourceMappingURL=5014.96bff88d.chunk.js.map