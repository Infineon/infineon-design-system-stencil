"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[3151],{3151:(t,e,s)=>{s.r(e),s.d(e,{ifx_breadcrumb:()=>r});var a=s(1597);const r=class{constructor(t){(0,a.r)(this,t)}componentDidLoad(){const t=this.el.shadowRoot.firstChild;this.addEventListenersToHandleCustomFocusState(t)}addEventListenersToHandleCustomFocusState(t){if(!t)return void console.error("element not found");t.tabIndex=-1;const e=t.querySelector("slot");if(e){const t=e.assignedNodes();for(let e=0;e<t.length;e++){const s=t[e];if("IFX-BREADCRUMB-ITEM"===s.nodeName){const t=s;t.hasAttribute("url")||(t.tabIndex=-1,t.addEventListener("focus",(()=>{t.hasAttribute("url")&&t.blur()})))}}}}render(){return(0,a.h)("nav",{"aria-label":"Page navigation breadcrumb"},(0,a.h)("ol",{class:"breadcrumb"},(0,a.h)("slot",null)))}get el(){return(0,a.g)(this)}};r.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex}.breadcrumb{list-style:none;padding:0px;margin:0px;display:flex;flex-direction:row;font-family:var(--ifx-font-family);font-size:0.875rem;align-items:flex-start}'}}]);
//# sourceMappingURL=3151.7fd85c66.chunk.js.map