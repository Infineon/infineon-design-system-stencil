import{r as f,c as a,h as i,H as p}from"./index-B44lNoLt.js";import{g as u}from"./icons-4575d84a-Bveiqm1q.js";const d="ifx-icon{display:inline-flex;justify-content:center}ifx-icon:empty{display:none}",v=d,g=class{constructor(t){f(this,t),this.consoleError=a(this,"consoleError",7),this.icon="",this.ifxIcon=void 0}convertStringToHtml(t){const e=document.createElement("div");return e.innerHTML=t,e.firstChild}convertHtmlToObject(t){return Array.from(t.attributes,({name:n,value:o})=>({name:n,value:o})).reduce((n,o)=>(n[o.name]=o.value,n),{})}convertPathsToVnode(t){let e=[];const n=this.convertHtmlToObject(t),o=i("path",n);if(e.push(o),t.firstChild){const r=t.querySelectorAll("path"),c=t.querySelectorAll("path").length;for(let s=0;s<c;s++){let h=this.convertHtmlToObject(r[s]),l=i("path",h);e.push(l)}}return e}getSVG(t){return i("svg",{class:"inline-svg",width:this.ifxIcon.width,height:this.ifxIcon.height,xmlns:"http://www.w3.org/2000/svg",fill:this.ifxIcon.fill,viewBox:this.ifxIcon.viewBox},...t)}constructIcon(){if(this.ifxIcon){const t=this.convertStringToHtml(this.ifxIcon.svgContent),e=this.convertPathsToVnode(t);return this.getSVG(e)}else if(this.icon!==""){console.error("Icon not found!"),this.consoleError.emit(!0);return}else return}componentWillLoad(){const t=e=>e.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,(n,o)=>o);this.ifxIcon=u(t(this.icon))}render(){return i(p,{key:"e2a61df6f1c4cd236fffcf1167fb05f1e94eead4"},this.constructIcon())}};g.style=v;export{g as ifx_icon};
