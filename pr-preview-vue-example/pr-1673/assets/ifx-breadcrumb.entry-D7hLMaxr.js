import{r as d,h as t,g as l}from"./index-DXPBYoE1.js";const b=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex}.breadcrumb{list-style:none;padding:0px;margin:0px;display:flex;flex-direction:row;font-family:var(--ifx-font-family);font-size:0.875rem;align-items:flex-start}',f=b,m=class{constructor(e){d(this,e)}componentDidLoad(){const e=this.el.shadowRoot.firstChild;this.validateBreadcrumbItemStructure(e)}validateBreadcrumbItemStructure(e){if(!e){console.error("element not found");return}const a=e.querySelector("slot");if(a){const o=a.assignedNodes();for(let r=0;r<o.length;r++){const n=o[r];if(n.nodeName==="IFX-BREADCRUMB-ITEM"){const s=n,c=s.querySelector("ifx-breadcrumb-item-label"),i=s.querySelector("ifx-dropdown-menu");if(c.hasAttribute("url")&&i)throw new Error("ifx-breadcrumb-item cannot have both a url and a dropdown menu.")}}}}render(){return t("nav",{key:"82aec60bebf9a71d7cdcfc2916f91c0e36dee868","aria-label":"Page navigation breadcrumb"},t("ol",{key:"70bae75b26b5df4c509f16c0ab8e2b10333de8ac",class:"breadcrumb"},t("slot",{key:"1cb28e3640f20319349b4f6d3cb1568508d3b1ba"})))}get el(){return l(this)}};m.style=f;export{m as ifx_breadcrumb};
