"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[6195],{6195:(t,e,n)=>{n.r(e),n.d(e,{ifx_icon:()=>i});var o=n(7770),r=n(243);const i=class{constructor(t){(0,o.r)(this,t),this.consoleError=(0,o.c)(this,"consoleError",7),this.icon="",this.ifxIcon=void 0}convertStringToHtml(t){const e=document.createElement("div");return e.innerHTML=t,e.firstChild}convertHtmlToObject(t){return Array.from(t.attributes,(t=>{let{name:e,value:n}=t;return{name:e,value:n}})).reduce(((t,e)=>(t[e.name]=e.value,t)),{})}convertPathsToVnode(t){let e=[];const n=this.convertHtmlToObject(t),r=(0,o.h)("path",n);if(e.push(r),t.firstChild){const n=t.querySelectorAll("path"),r=t.querySelectorAll("path").length;for(let t=0;t<r;t++){let r=this.convertHtmlToObject(n[t]),i=(0,o.h)("path",r);e.push(i)}}return e}getSVG(t){return(0,o.h)("svg",{class:"inline-svg",width:this.ifxIcon.width,height:this.ifxIcon.height,xmlns:"http://www.w3.org/2000/svg",fill:this.ifxIcon.fill,viewBox:this.ifxIcon.viewBox},...t)}constructIcon(){if(this.ifxIcon){const t=this.convertStringToHtml(this.ifxIcon.svgContent),e=this.convertPathsToVnode(t),n=this.getSVG(e);return this.consoleError.emit(!1),n}return console.error("Icon not found!"),this.consoleError.emit(!0),""}componentWillLoad(){this.ifxIcon=(0,r.g)(this.icon.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,((t,e)=>e)))}render(){return(0,o.h)(o.a,{key:"c60ef7ae43cc8be719209063607f74e826023a2b"},this.constructIcon())}};i.style="ifx-icon{display:inline-flex;justify-content:center}ifx-icon:empty{display:none}"}}]);
//# sourceMappingURL=6195.1b4aa222.chunk.js.map