"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[7113],{7113:(n,t,o)=>{o.r(t),o.d(t,{ifx_accordion:()=>i,ifx_accordion_item:()=>a});var e=o(3739);const i=class{constructor(n){(0,e.r)(this,n),this.autoCollapse=!1}async onItemOpen(n){if(this.autoCollapse){const t=Array.from(this.el.querySelectorAll("ifx-accordion-item"));for(const o of t){const t=o;t!==n.target&&await t.open&&(t.open=!1)}}}render(){return(0,e.h)("div",{class:"accordion-wrapper"},(0,e.h)("slot",null))}get el(){return(0,e.g)(this)}};i.style='*{font-family:"Source Sans 3"}:host{display:block}.accordion-wrapper{display:flex;flex-direction:column;gap:8px}';const a=class{constructor(n){(0,e.r)(this,n),this.ifxItemOpen=(0,e.c)(this,"ifxItemOpen",7),this.ifxItemClose=(0,e.c)(this,"ifxItemClose",7),this.caption=void 0,this.open=!1,this.initialCollapse=!0,this.internalOpen=!1}componentWillLoad(){this.internalOpen=this.open,this.initialCollapse||(this.internalOpen=!0)}componentDidLoad(){this.openAccordionItem()}componentDidUpdate(){this.openAccordionItem()}openChanged(n){this.internalOpen=n}toggleOpen(){this.internalOpen=!this.internalOpen,this.open=this.internalOpen,this.internalOpen?this.ifxItemOpen.emit({isOpen:this.internalOpen}):this.ifxItemClose.emit({isClosed:!this.internalOpen})}openAccordionItem(){this.internalOpen?this.contentEl.style.maxHeight="".concat(this.contentEl.scrollHeight,"px"):this.contentEl.style.maxHeight="0"}handleSlotChange(){this.internalOpen&&this.openAccordionItem()}render(){return(0,e.h)("div",{"aria-label":this.caption,class:"accordion-item ".concat(this.internalOpen?"open":"")},(0,e.h)("div",{class:"accordion-title",onClick:()=>this.toggleOpen()},(0,e.h)("span",{class:"accordion-icon"},(0,e.h)("ifx-icon",{icon:"chevron-down-12"})),(0,e.h)("span",{class:"accordion-caption"},this.caption)),(0,e.h)("div",{class:"accordion-content",ref:n=>this.contentEl=n},(0,e.h)("div",{class:"inner-content"},(0,e.h)("slot",{onSlotchange:()=>this.handleSlotChange()}))))}static get watchers(){return{open:["openChanged"]}}};a.style='*{font-family:"Source Sans 3"}.accordion-item{border-radius:3px;overflow:hidden;transition:all 0.3s}.accordion-title:hover{border:1px solid #EEEDED;color:#08665C}.accordion-title{display:flex;align-items:center;padding:12px 16px;gap:12px;color:#0A8276;background-color:#FFFFFF;border:1px solid #EEEDED;cursor:pointer}.accordion-caption{font-weight:600;font-size:1.125rem}.accordion-content{gap:8px;max-height:0;overflow:hidden;transition:max-height 0.3s ease-in-out;line-height:24px;font-size:1rem;font-weight:400;font-family:"Source Sans 3"}.inner-content{background-color:#FFFFFF;padding:24px;word-wrap:break-word;overflow-wrap:anywhere;align-self:stretch;}.accordion-icon{font-weight:bold;display:inline-block;transition:transform 0.3s}.accordion-icon:hover{color:#08665C}.accordion-item.open .accordion-icon{transform:rotate(-180deg)}'}}]);
//# sourceMappingURL=7113.3289cf7a.chunk.js.map