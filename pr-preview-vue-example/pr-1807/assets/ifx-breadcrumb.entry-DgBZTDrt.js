import{r as c,h as t,g as f}from"./index-CRVdAhSC.js";const l=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex}.breadcrumb{list-style:none;padding:0px;margin:0px;display:flex;flex-direction:row;font-family:var(--ifx-font-family);font-size:0.875rem;align-items:flex-start}',m=l,b=class{constructor(e){c(this,e)}componentDidLoad(){const e=this.el.shadowRoot.firstChild;this.validateBreadcrumbItemStructure(e)}validateBreadcrumbItemStructure(e){if(!e){console.error("element not found");return}const a=e.querySelector("slot");if(a){const o=a.assignedNodes();for(let r=0;r<o.length;r++){const n=o[r];if(n.nodeName==="IFX-BREADCRUMB-ITEM"){const s=n,d=s.querySelector("ifx-breadcrumb-item-label"),i=s.querySelector("ifx-dropdown-menu");if(d.hasAttribute("href")&&i)throw new Error("ifx-breadcrumb-item cannot have both a href and a dropdown menu.")}}}}render(){return t("nav",{key:"3d01af951d4a6a396545eb9cf26454cbe2b31ed0","aria-label":"Page navigation breadcrumb"},t("ol",{key:"95ae08a0de7099ecd7c3aa963c1bf9952918ecda",class:"breadcrumb"},t("slot",{key:"e9fed255fa08b28c8974498d329df69b1e92edf5"})))}get el(){return f(this)}};b.style=m;export{b as ifx_breadcrumb};
