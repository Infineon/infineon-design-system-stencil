"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[3986],{3986:(I,r,c)=>{c.r(r),c.d(r,{ifx_icon:()=>a});var i=c(266),l=c(9600);const a=(()=>{let h=class{constructor(t){(0,i.r)(this,t),this.consoleError=(0,i.c)(this,"consoleError",7),this.icon="",this.ifxIcon=void 0}convertStringToHtml(t){const n=document.createElement("div");return n.innerHTML=t,n.firstChild}convertHtmlToObject(t){return Array.from(t.attributes,({name:e,value:o})=>({name:e,value:o})).reduce((e,o)=>(e[o.name]=o.value,e),{})}convertPathsToVnode(t){let n=[];const e=this.convertHtmlToObject(t),o=(0,i.h)("path",e);if(n.push(o),t.firstChild){const u=t.querySelectorAll("path"),d=t.querySelectorAll("path").length;for(let s=0;s<d;s++){let p=this.convertHtmlToObject(u[s]),v=(0,i.h)("path",p);n.push(v)}}return n}getSVG(t){return(0,i.h)("svg",{class:"inline-svg",width:this.ifxIcon.width,height:this.ifxIcon.height,xmlns:"http://www.w3.org/2000/svg",fill:this.ifxIcon.fill,viewBox:this.ifxIcon.viewBox},...t)}constructIcon(){if(this.ifxIcon){const t=this.convertStringToHtml(this.ifxIcon.svgContent),n=this.convertPathsToVnode(t);return this.getSVG(n)}return""!==this.icon?(console.error("Icon not found!"),void this.consoleError.emit(!0)):void 0}componentWillLoad(){this.ifxIcon=(0,l.g)(this.icon.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,(e,o)=>o))}render(){return(0,i.h)(i.a,{key:"91ccb22f1cc67f3d4b91fb69c37cda13c941e109"},this.constructIcon())}};return h.style="ifx-icon{display:inline-flex;justify-content:center}ifx-icon:empty{display:none}",h})()}}]);