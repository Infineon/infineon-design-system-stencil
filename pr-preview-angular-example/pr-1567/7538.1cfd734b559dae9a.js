"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[7538],{7538:(m,o,t)=>{t.r(o),t.d(o,{ifx_breadcrumb:()=>b});var r=t(581);const b=(()=>{let n=class{constructor(e){(0,r.r)(this,e)}componentDidLoad(){this.validateBreadcrumbItemStructure(this.el.shadowRoot.firstChild)}validateBreadcrumbItemStructure(e){if(!e)return void console.error("element not found");const s=e.querySelector("slot");if(s){const d=s.assignedNodes();for(let a=0;a<d.length;a++){const c=d[a];if("IFX-BREADCRUMB-ITEM"===c.nodeName){const i=c,f=i.querySelector("ifx-breadcrumb-item-label"),u=i.querySelector("ifx-dropdown-menu");if(f.hasAttribute("url")&&u)throw new Error("ifx-breadcrumb-item cannot have both a url and a dropdown menu.")}}}}render(){return(0,r.h)("nav",{key:"82aec60bebf9a71d7cdcfc2916f91c0e36dee868","aria-label":"Page navigation breadcrumb"},(0,r.h)("ol",{key:"70bae75b26b5df4c509f16c0ab8e2b10333de8ac",class:"breadcrumb"},(0,r.h)("slot",{key:"1cb28e3640f20319349b4f6d3cb1568508d3b1ba"})))}get el(){return(0,r.g)(this)}};return n.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex}.breadcrumb{list-style:none;padding:0px;margin:0px;display:flex;flex-direction:row;font-family:var(--ifx-font-family);font-size:0.875rem;align-items:flex-start}',n})()}}]);