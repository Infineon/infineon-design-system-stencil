import{r as a,c as f,h as s,H as p}from"./index-BimPz98Z.js";import{g as u}from"./icons-4575d84a-Bveiqm1q.js";const v="ifx-icon{display:inline-flex;justify-content:center}ifx-icon:empty{display:none}",d=v,g=class{constructor(t){a(this,t),this.consoleError=f(this,"consoleError",7),this.icon=""}convertStringToHtml(t){const e=document.createElement("div");return e.innerHTML=t,e.firstChild}convertHtmlToObject(t){return Array.from(t.attributes,({name:o,value:n})=>({name:o,value:n})).reduce((o,n)=>(o[n.name]=n.value,o),{})}convertPathsToVnode(t){let e=[];const o=this.convertHtmlToObject(t),n=s("path",o);if(e.push(n),t.firstChild){const i=t.querySelectorAll("path"),r=t.querySelectorAll("path").length;for(let c=0;c<r;c++){let h=this.convertHtmlToObject(i[c]),l=s("path",h);e.push(l)}}return e}getSVG(t){return s("svg",{class:"inline-svg",width:this.ifxIcon.width,height:this.ifxIcon.height,xmlns:"http://www.w3.org/2000/svg",fill:this.ifxIcon.fill,viewBox:this.ifxIcon.viewBox},...t)}constructIcon(){if(this.ifxIcon){const t=this.convertStringToHtml(this.ifxIcon.svgContent),e=this.convertPathsToVnode(t);return this.getSVG(e)}else if(this.icon!==""){console.error("Icon not found!"),this.consoleError.emit(!0);return}else return}componentWillLoad(){const t=e=>e.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,(o,n)=>n);this.ifxIcon=u(t(this.icon))}render(){return s(p,{key:"91ccb22f1cc67f3d4b91fb69c37cda13c941e109"},this.constructIcon())}};g.style=d;export{g as ifx_icon};
