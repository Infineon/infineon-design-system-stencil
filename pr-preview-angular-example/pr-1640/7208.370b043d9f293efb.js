"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[7208],{7208:(x,s,t)=>{t.r(s),t.d(s,{ifx_accordion:()=>f,ifx_accordion_item:()=>p});var l=t(6330),n=t(6821);const f=(()=>{let o=class{constructor(e){(0,n.r)(this,e),this.autoCollapse=!1}onItemOpen(e){var r=this;return(0,l.A)(function*(){if(r.autoCollapse){const i=Array.from(r.el.querySelectorAll("ifx-accordion-item"));for(const a of i){const c=a;c!==e.target&&(yield c.open)&&(c.open=!1)}}})()}render(){return(0,n.h)("div",{key:"663e6aac2f3002d3898856b854dbfd96d9519a68",class:"accordion-wrapper"},(0,n.h)("slot",{key:"0f54044bc1e0d2860ccd3096ee2711eb0a1cb927"}))}static get delegatesFocus(){return!0}get el(){return(0,n.g)(this)}};return o.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:block}.accordion-wrapper{display:flex;flex-direction:column;gap:8px;font-family:var(--ifx-font-family)}',o})(),p=(()=>{let o=class{constructor(e){(0,n.r)(this,e),this.ifxOpen=(0,n.c)(this,"ifxOpen",7),this.ifxClose=(0,n.c)(this,"ifxClose",7),this.open=!1,this.AriaLevel=3,this.internalOpen=!1}componentWillLoad(){this.internalOpen=this.open}componentDidLoad(){this.openAccordionItem()}componentDidUpdate(){this.openAccordionItem()}openChanged(e){this.internalOpen=e}toggleOpen(){this.internalOpen=!this.internalOpen,this.open=this.internalOpen,this.internalOpen?this.ifxOpen.emit({isOpen:this.internalOpen}):this.ifxClose.emit({isClosed:!this.internalOpen})}openAccordionItem(){this.contentEl.style.maxHeight=this.internalOpen?`${this.contentEl.scrollHeight}px`:"0"}handleSlotChange(e){const i=e.target.assignedNodes();i.length>0&&i.forEach(a=>{new MutationObserver((m,y)=>{for(let b of m)"childList"===b.type&&this.internalOpen&&this.openAccordionItem()}).observe(a,{attributes:!0,childList:!0,subtree:!0})}),this.internalOpen&&this.openAccordionItem()}handleKeydown(e){switch(e.key){case"Enter":case" ":e.preventDefault(),this.toggleOpen()}}render(){return(0,n.h)("div",{key:"90b42fe0fdc59bcb707cdbd345d457a651cadd34",class:"accordion-item "+(this.internalOpen?"open":"")},(0,n.h)("div",{key:"691f906ddcf27924b85cb06a7cd1d469bed4b57d",role:"button","aria-expanded":this.internalOpen,"aria-controls":"accordion-content",class:"accordion-title",onClick:()=>this.toggleOpen(),tabindex:"0"},(0,n.h)("span",{key:"5a83c087659f68747176e3bc26d6653b4db9dcaf","aria-hidden":"true",role:"heading","aria-level":String(this.AriaLevel),class:"accordion-icon"},(0,n.h)("ifx-icon",{key:"050e89939de98c6e22b6a0563ebc7213e7204b0f",icon:"chevron-down-12"})),(0,n.h)("span",{key:"960c0ba799af03b588ac53dd5ef4b3071e2f83f4",id:"accordion-caption",class:"accordion-caption"},this.caption)),(0,n.h)("div",{key:"64a83fedce2c9b0b9a5c65a7fbcd3b76e156dd56",id:"accordion-content",class:"accordion-content",ref:e=>this.contentEl=e,role:"region","aria-labelledby":"accordion-caption"},(0,n.h)("div",{key:"59033c70e0ac0990cd7bdf60e131d2091339b314",class:"inner-content"},(0,n.h)("slot",{key:"a73b3a5b932c9e71275dd4735142cd4fc222e404",onSlotchange:e=>this.handleSlotChange(e)}))))}static get watchers(){return{open:["openChanged"]}}};return o.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.accordion-item{border-radius:3px;overflow:hidden;transition:all 0.3s;font-family:var(--ifx-font-family)}.accordion-title:focus{outline:none}.accordion-title:focus::after{content:"";display:block;position:absolute;top:-4px;bottom:-4px;left:-4px;right:-4px;border-radius:5px;border:2px solid #0A8276;box-sizing:border-box}.accordion-title:hover{border:1px solid #EEEDED;color:#08665C}.accordion-title{display:flex;align-items:center;position:relative;padding:12px 16px;gap:12px;color:#0A8276;background-color:#FFFFFF;border:1px solid #EEEDED;cursor:pointer;margin:4px}.accordion-caption{font-weight:600;font-size:1.125rem}.accordion-content{gap:8px;max-height:0;overflow:hidden;transition:max-height 0.3s ease-in-out;line-height:24px;font-size:1rem;font-weight:400}.inner-content{background-color:#FFFFFF;padding:24px;word-wrap:break-word;overflow-wrap:anywhere;align-self:stretch;}.accordion-icon{font-weight:bold;display:inline-block;transition:transform 0.3s}.accordion-icon:hover{color:#08665C}.accordion-item.open .accordion-icon{transform:rotate(-180deg)}',o})()}}]);