"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[3986],{3986:(I,r,i)=>{i.r(r),i.d(r,{ifx_icon:()=>a});var s=i(7518),l=i(9600);const a=(()=>{let h=class{constructor(t){(0,s.r)(this,t),this.consoleError=(0,s.c)(this,"consoleError",7),this.icon=""}convertStringToHtml(t){const n=document.createElement("div");return n.innerHTML=t,n.firstChild}convertHtmlToObject(t){return Array.from(t.attributes,({name:e,value:o})=>({name:e,value:o})).reduce((e,o)=>(e[o.name]=o.value,e),{})}convertPathsToVnode(t){let n=[];const e=this.convertHtmlToObject(t),o=(0,s.h)("path",e);if(n.push(o),t.firstChild){const u=t.querySelectorAll("path"),d=t.querySelectorAll("path").length;for(let c=0;c<d;c++){let p=this.convertHtmlToObject(u[c]),v=(0,s.h)("path",p);n.push(v)}}return n}getSVG(t){return(0,s.h)("svg",{class:"inline-svg",width:this.ifxIcon.width,height:this.ifxIcon.height,xmlns:"http://www.w3.org/2000/svg",fill:this.ifxIcon.fill,viewBox:this.ifxIcon.viewBox},...t)}constructIcon(){if(this.ifxIcon){const t=this.convertStringToHtml(this.ifxIcon.svgContent),n=this.convertPathsToVnode(t);return this.getSVG(n)}return""!==this.icon?(console.error("Icon not found!"),void this.consoleError.emit(!0)):void 0}componentWillLoad(){this.ifxIcon=(0,l.g)(this.icon.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,(e,o)=>o))}render(){return(0,s.h)(s.a,{key:"e2a61df6f1c4cd236fffcf1167fb05f1e94eead4"},this.constructIcon())}};return h.style="ifx-icon{display:inline-flex;justify-content:center}ifx-icon:empty{display:none}",h})()}}]);