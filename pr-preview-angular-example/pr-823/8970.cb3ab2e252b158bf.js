"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[8970],{8970:(f,s,n)=>{n.r(s),n.d(s,{ifx_accordion:()=>c,ifx_accordion_item:()=>r});var i=n(4795),o=n(4004);const c=class{constructor(e){(0,o.r)(this,e),this.autoCollapse=!1}onItemOpen(e){var a=this;return(0,i.Z)(function*(){if(a.autoCollapse){const h=Array.from(a.el.querySelectorAll("ifx-accordion-item"));for(const p of h){const t=p;t!==e.target&&(yield t.isOpen())&&t.close()}}})()}render(){return(0,o.h)("div",{class:"accordion-wrapper"},(0,o.h)("slot",null))}get el(){return(0,o.g)(this)}};c.style='*{font-family:"Source Sans 3"}:host{display:block}.accordion-wrapper{display:flex;flex-direction:column;gap:8px}';const r=class{constructor(e){(0,o.r)(this,e),this.ifxItemOpen=(0,o.c)(this,"ifxItemOpen",7),this.ifxItemClose=(0,o.c)(this,"ifxItemClose",7),this.caption=void 0,this.initialCollapse=!0,this.open=!1}toggleOpen(){this.open=!this.open,this.open?this.ifxItemOpen.emit():this.ifxItemClose.emit()}openAccordionItem(){this.contentEl.style.maxHeight=this.open?`${this.contentEl.scrollHeight}px`:"0"}componentWillLoad(){this.initialCollapse||(this.open=!0,this.ifxItemOpen.emit())}componentDidLoad(){this.openAccordionItem()}componentDidUpdate(){this.openAccordionItem()}close(){var e=this;return(0,i.Z)(function*(){e.open=!1,e.ifxItemClose.emit()})()}isOpen(){var e=this;return(0,i.Z)(function*(){return e.open})()}handleSlotChange(){this.open&&this.openAccordionItem()}render(){return(0,o.h)("div",{"aria-label":this.caption,class:"accordion-item "+(this.open?"open":"")},(0,o.h)("div",{class:"accordion-title",onClick:()=>this.toggleOpen()},(0,o.h)("span",{class:"accordion-icon"},(0,o.h)("ifx-icon",{icon:"chevron-down-12"})),(0,o.h)("span",{class:"accordion-caption"},this.caption)),(0,o.h)("div",{class:"accordion-content",ref:e=>this.contentEl=e},(0,o.h)("div",{class:"inner-content"},(0,o.h)("slot",{onSlotchange:()=>this.handleSlotChange()}))))}};r.style='*{font-family:"Source Sans 3"}.accordion-item{border-radius:3px;overflow:hidden;transition:all 0.3s}.accordion-title:hover{border:1px solid #EEEDED;color:#08665C}.accordion-title{display:flex;align-items:center;padding:12px 16px;gap:12px;color:#0A8276;background-color:#FFFFFF;border:1px solid #EEEDED;cursor:pointer}.accordion-caption{font-weight:600;font-size:1.125rem}.accordion-content{gap:8px;max-height:0;overflow:hidden;transition:max-height 0.3s ease-in-out;line-height:24px;font-size:1rem;font-weight:400;font-family:"Source Sans 3"}.inner-content{background-color:#FFFFFF;padding:24px;word-wrap:break-word;overflow-wrap:anywhere;align-self:stretch;}.accordion-icon{font-weight:bold;display:inline-block;transition:transform 0.3s}.accordion-icon:hover{color:#08665C}.accordion-item.open .accordion-icon{transform:rotate(-180deg)}'}}]);