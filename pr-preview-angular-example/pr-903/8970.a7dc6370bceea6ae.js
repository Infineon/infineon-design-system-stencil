"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[8970],{8970:(f,t,i)=>{i.r(t),i.d(t,{ifx_accordion:()=>s,ifx_accordion_item:()=>r});var c=i(4795),n=i(4004);const s=class{constructor(e){(0,n.r)(this,e),this.autoCollapse=!1}onItemOpen(e){var a=this;return(0,c.Z)(function*(){if(a.autoCollapse){const d=Array.from(a.el.querySelectorAll("ifx-accordion-item"));for(const p of d){const o=p;o!==e.target&&(yield o.open)&&(o.open=!1)}}})()}render(){return(0,n.h)("div",{class:"accordion-wrapper"},(0,n.h)("slot",null))}get el(){return(0,n.g)(this)}};s.style=":root{--ifx-font-family:tokens.$ifxFontFamilyBody}*{font-family:var(--ifx-font-family), sans-serif}:host{display:block}.accordion-wrapper{display:flex;flex-direction:column;gap:8px}";const r=class{constructor(e){(0,n.r)(this,e),this.ifxItemOpen=(0,n.c)(this,"ifxItemOpen",7),this.ifxItemClose=(0,n.c)(this,"ifxItemClose",7),this.caption=void 0,this.open=!1,this.initialCollapse=!0,this.internalOpen=!1}componentWillLoad(){this.internalOpen=this.open,this.initialCollapse||(this.internalOpen=!0)}componentDidLoad(){this.openAccordionItem()}componentDidUpdate(){this.openAccordionItem()}openChanged(e){this.internalOpen=e}toggleOpen(){this.internalOpen=!this.internalOpen,this.open=this.internalOpen,this.internalOpen?this.ifxItemOpen.emit({isOpen:this.internalOpen}):this.ifxItemClose.emit({isClosed:!this.internalOpen})}openAccordionItem(){this.contentEl.style.maxHeight=this.internalOpen?`${this.contentEl.scrollHeight}px`:"0"}handleSlotChange(){this.internalOpen&&this.openAccordionItem()}render(){return(0,n.h)("div",{"aria-label":this.caption,class:"accordion-item "+(this.internalOpen?"open":"")},(0,n.h)("div",{class:"accordion-title",onClick:()=>this.toggleOpen()},(0,n.h)("span",{class:"accordion-icon"},(0,n.h)("ifx-icon",{icon:"chevron-down-12"})),(0,n.h)("span",{class:"accordion-caption"},this.caption)),(0,n.h)("div",{class:"accordion-content",ref:e=>this.contentEl=e},(0,n.h)("div",{class:"inner-content"},(0,n.h)("slot",{onSlotchange:()=>this.handleSlotChange()}))))}static get watchers(){return{open:["openChanged"]}}};r.style=':root{--ifx-font-family:tokens.$ifxFontFamilyBody}*{font-family:var(--ifx-font-family), sans-serif}.accordion-item{border-radius:3px;overflow:hidden;transition:all 0.3s}.accordion-title:hover{border:1px solid #EEEDED;color:#08665C}.accordion-title{display:flex;align-items:center;padding:12px 16px;gap:12px;color:#0A8276;background-color:#FFFFFF;border:1px solid #EEEDED;cursor:pointer}.accordion-caption{font-weight:600;font-size:1.125rem}.accordion-content{gap:8px;max-height:0;overflow:hidden;transition:max-height 0.3s ease-in-out;line-height:24px;font-size:1rem;font-weight:400;font-family:"Source Sans 3"}.inner-content{background-color:#FFFFFF;padding:24px;word-wrap:break-word;overflow-wrap:anywhere;align-self:stretch;}.accordion-icon{font-weight:bold;display:inline-block;transition:transform 0.3s}.accordion-icon:hover{color:#08665C}.accordion-item.open .accordion-icon{transform:rotate(-180deg)}'}}]);