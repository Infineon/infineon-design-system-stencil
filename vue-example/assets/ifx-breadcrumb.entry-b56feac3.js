import{r as i,h as o,g as l}from"./index-9ad23cb1.js";const d=':root{--ifx-font-family:tokens.$ifxFontFamilyBody}*{font-family:var(--ifx-font-family), sans-serif}:host{display:flex}.breadcrumb{list-style:none;padding:0px;margin:0px;display:flex;flex-direction:row;font-family:"Source Sans 3";font-size:0.875rem;align-items:flex-start}',f=class{constructor(e){i(this,e)}componentDidLoad(){const e=this.el.shadowRoot.firstChild;this.addEventListenersToHandleCustomFocusState(e)}addEventListenersToHandleCustomFocusState(e){if(!e){console.error("element not found");return}e.tabIndex=-1;const r=e.querySelector("slot");if(r){const n=r.assignedNodes();for(let s=0;s<n.length;s++){const a=n[s];if(a.nodeName==="IFX-BREADCRUMB-ITEM"){const t=a;t.hasAttribute("url")||(t.tabIndex=-1,t.addEventListener("focus",()=>{t.hasAttribute("url")&&t.blur()}))}}}}render(){return o("nav",{"aria-label":"Page navigation breadcrumb"},o("ol",{class:"breadcrumb"},o("slot",null)))}get el(){return l(this)}};f.style=d;export{f as ifx_breadcrumb};
