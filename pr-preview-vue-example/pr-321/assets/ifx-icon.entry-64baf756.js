import{r as a,c as f,h as s,H as u}from"./index-016bbbaf.js";import{g as p}from"./icons-b28cef23-7f87f2a5.js";const v="ifx-icon{display:inline-flex;justify-content:center}",g=class{constructor(t){a(this,t),this.consoleError=f(this,"consoleError",7),this.icon="",this.ifxIcon=void 0}convertStringToHtml(t){const e=document.createElement("div");return e.innerHTML=t,e.firstChild}convertHtmlToObject(t){return Array.from(t.attributes,({name:o,value:n})=>({name:o,value:n})).reduce((o,n)=>(o[n.name]=n.value,o),{})}convertPathsToVnode(t){let e=[];const o=this.convertHtmlToObject(t),n=s("path",o);if(e.push(n),t.firstChild){const i=t.querySelectorAll("path"),c=t.querySelectorAll("path").length;for(let r=0;r<c;r++){let h=this.convertHtmlToObject(i[r]),l=s("path",h);e.push(l)}}return e}getSVG(t){return s("svg",{class:"inline-svg",width:this.ifxIcon.width,height:this.ifxIcon.height,xmlns:"http://www.w3.org/2000/svg",fill:this.ifxIcon.fill,viewBox:this.ifxIcon.viewBox},...t)}constructIcon(){if(this.ifxIcon){const t=this.convertStringToHtml(this.ifxIcon.svgContent),e=this.convertPathsToVnode(t),o=this.getSVG(e);return this.consoleError.emit(!1),o}else return console.error("Icon not found!"),this.consoleError.emit(!0),""}componentWillLoad(){const t=e=>e.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,(o,n)=>n);this.ifxIcon=p(t(this.icon))}render(){return s(u,null,this.constructIcon())}};g.style=v;export{g as ifx_icon};