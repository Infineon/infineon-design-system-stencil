import{r as i,h as s,g as d}from"./index-FIQE5aGx.js";const f=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex}.breadcrumb{list-style:none;padding:0px;margin:0px;display:flex;flex-direction:row;font-family:var(--ifx-font-family);font-size:0.875rem;align-items:flex-start}',l=f,c=class{constructor(e){i(this,e)}componentDidLoad(){const e=this.el.shadowRoot.firstChild;this.addEventListenersToHandleCustomFocusState(e)}addEventListenersToHandleCustomFocusState(e){if(!e){console.error("element not found");return}e.tabIndex=-1;const r=e.querySelector("slot");if(r){const o=r.assignedNodes();for(let a=0;a<o.length;a++){const n=o[a];if(n.nodeName==="IFX-BREADCRUMB-ITEM"){const t=n;t.hasAttribute("url")||(t.tabIndex=-1,t.addEventListener("focus",()=>{t.hasAttribute("url")&&t.blur()}))}}}}render(){return s("nav",{key:"7cdc043825f62833c63057def24fb084ae674fa8","aria-label":"Page navigation breadcrumb"},s("ol",{key:"ea640b384498bb155e24b3d8d0f54462596af557",class:"breadcrumb"},s("slot",{key:"59aa1d9f13c574b9a7dcbc1a8948d5e84337728a"})))}get el(){return d(this)}};c.style=l;export{c as ifx_breadcrumb};