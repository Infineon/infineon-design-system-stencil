import{r as i,h as s,g as d}from"./index-BmRyuw0y.js";const c=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex}.breadcrumb{list-style:none;padding:0px;margin:0px;display:flex;flex-direction:row;font-family:var(--ifx-font-family);font-size:0.875rem;align-items:flex-start}',l=c,f=class{constructor(e){i(this,e)}componentDidLoad(){const e=this.el.shadowRoot.firstChild;this.addEventListenersToHandleCustomFocusState(e)}addEventListenersToHandleCustomFocusState(e){if(!e){console.error("element not found");return}e.tabIndex=-1;const r=e.querySelector("slot");if(r){const o=r.assignedNodes();for(let a=0;a<o.length;a++){const n=o[a];if(n.nodeName==="IFX-BREADCRUMB-ITEM"){const t=n;t.hasAttribute("url")||(t.tabIndex=-1,t.addEventListener("focus",()=>{t.hasAttribute("url")&&t.blur()}))}}}}render(){return s("nav",{key:"d02041916d262d6ce041b564c28c4796043ee909","aria-label":"Page navigation breadcrumb"},s("ol",{key:"45fcac4bdbbef7ecad1ce49a6c212eba7d6a284f",class:"breadcrumb"},s("slot",{key:"457ca56ee9aa5c01820bb3f3116610d761687b0d"})))}get el(){return d(this)}};f.style=l;export{f as ifx_breadcrumb};
