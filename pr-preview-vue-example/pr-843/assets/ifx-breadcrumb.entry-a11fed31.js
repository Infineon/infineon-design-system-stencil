import{r as i,h as r,g as l}from"./index-bf7657fc.js";const d='*{font-family:"Source Sans 3"}:host{display:flex}.breadcrumb{list-style:none;padding:0px;margin:0px;display:flex;flex-direction:row;font-family:"Source Sans 3";font-size:0.875rem;align-items:flex-start}',c=class{constructor(e){i(this,e)}componentDidLoad(){const e=this.el.shadowRoot.firstChild;this.addEventListenersToHandleCustomFocusState(e)}addEventListenersToHandleCustomFocusState(e){if(!e){console.error("element not found");return}e.tabIndex=-1;const n=e.querySelector("slot");if(n){const o=n.assignedNodes();for(let s=0;s<o.length;s++){const a=o[s];if(a.nodeName==="IFX-BREADCRUMB-ITEM"){const t=a;t.hasAttribute("url")||(t.tabIndex=-1,t.addEventListener("focus",()=>{t.hasAttribute("url")&&t.blur()}))}}}}render(){return r("nav",{"aria-label":"Page navigation breadcrumb"},r("ol",{class:"breadcrumb"},r("slot",null)))}get el(){return l(this)}};c.style=d;export{c as ifx_breadcrumb};
