import{r as a,c as f,h as s,H as p}from"./index-aClBrBle.js";import{g as u}from"./icons-4575d84a-Bveiqm1q.js";const d="ifx-icon{display:inline-flex;justify-content:center}ifx-icon:empty{display:none}",v=d,g=class{constructor(t){a(this,t),this.consoleError=f(this,"consoleError",7),this.icon=""}convertStringToHtml(t){const e=document.createElement("div");return e.innerHTML=t,e.firstChild}convertHtmlToObject(t){return Array.from(t.attributes,({name:o,value:n})=>({name:o,value:n})).reduce((o,n)=>(o[n.name]=n.value,o),{})}convertPathsToVnode(t){let e=[];const o=this.convertHtmlToObject(t),n=s("path",o);if(e.push(n),t.firstChild){const r=t.querySelectorAll("path"),c=t.querySelectorAll("path").length;for(let i=0;i<c;i++){let h=this.convertHtmlToObject(r[i]),l=s("path",h);e.push(l)}}return e}getSVG(t){return s("svg",{class:"inline-svg",width:this.ifxIcon.width,height:this.ifxIcon.height,xmlns:"http://www.w3.org/2000/svg",fill:this.ifxIcon.fill,viewBox:this.ifxIcon.viewBox},...t)}constructIcon(){if(this.ifxIcon){const t=this.convertStringToHtml(this.ifxIcon.svgContent),e=this.convertPathsToVnode(t);return this.getSVG(e)}else if(this.icon!==""){console.error("Icon not found!"),this.consoleError.emit(!0);return}else return}componentWillLoad(){const t=e=>e.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,(o,n)=>n);this.ifxIcon=u(t(this.icon))}render(){return s(p,{key:"e2a61df6f1c4cd236fffcf1167fb05f1e94eead4"},this.constructIcon())}};g.style=v;export{g as ifx_icon};
