"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[6195],{6195:(t,e,o)=>{o.r(e),o.d(e,{ifx_icon:()=>r});var n=o(5714),i=o(9599);const r=class{constructor(t){(0,n.r)(this,t),this.consoleError=(0,n.c)(this,"consoleError",7),this.icon="",this.ifxIcon=void 0}convertStringToHtml(t){const e=document.createElement("div");return e.innerHTML=t,e.firstChild}convertHtmlToObject(t){return Array.from(t.attributes,(t=>{let{name:e,value:o}=t;return{name:e,value:o}})).reduce(((t,e)=>(t[e.name]=e.value,t)),{})}convertPathsToVnode(t){let e=[];const o=this.convertHtmlToObject(t),i=(0,n.h)("path",o);if(e.push(i),t.firstChild){const o=t.querySelectorAll("path"),i=t.querySelectorAll("path").length;for(let t=0;t<i;t++){let i=this.convertHtmlToObject(o[t]),r=(0,n.h)("path",i);e.push(r)}}return e}getSVG(t){return(0,n.h)("svg",{class:"inline-svg",width:this.ifxIcon.width,height:this.ifxIcon.height,xmlns:"http://www.w3.org/2000/svg",fill:this.ifxIcon.fill,viewBox:this.ifxIcon.viewBox},...t)}constructIcon(){if(this.ifxIcon){const t=this.convertStringToHtml(this.ifxIcon.svgContent),e=this.convertPathsToVnode(t),o=this.getSVG(e);return this.consoleError.emit(!1),o}return""!==this.icon?(console.error("Icon not found!"),void this.consoleError.emit(!0)):void 0}componentWillLoad(){this.ifxIcon=(0,i.g)(this.icon.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,((t,e)=>e)))}render(){return(0,n.h)(n.a,{key:"d583b48df1a2fb9209ee398eade5aa998b349696"},this.constructIcon())}};r.style="ifx-icon{display:inline-flex;justify-content:center}ifx-icon:empty{display:none}"}}]);
//# sourceMappingURL=6195.20ae47eb.chunk.js.map