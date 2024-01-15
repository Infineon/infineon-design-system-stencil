import{r as o,h as n,g as r,c as e}from"./index-2be53189.js";const c=":root{--ifx-font-family:tokens.$ifxFontFamilyBody}*{font-family:var(--ifx-font-family), sans-serif}:host{display:block}.accordion-wrapper{display:flex;flex-direction:column;gap:8px}",l=class{constructor(t){o(this,t),this.autoCollapse=!1}async onItemOpen(t){if(this.autoCollapse){const s=Array.from(this.el.querySelectorAll("ifx-accordion-item"));for(const a of s){const i=a;i!==t.target&&await i.open&&(i.open=!1)}}}render(){return n("div",{class:"accordion-wrapper"},n("slot",null))}get el(){return r(this)}};l.style=c;const p=':root{--ifx-font-family:tokens.$ifxFontFamilyBody}*{font-family:var(--ifx-font-family), sans-serif}.accordion-item{border-radius:3px;overflow:hidden;transition:all 0.3s}.accordion-title:hover{border:1px solid #EEEDED;color:#08665C}.accordion-title{display:flex;align-items:center;padding:12px 16px;gap:12px;color:#0A8276;background-color:#FFFFFF;border:1px solid #EEEDED;cursor:pointer}.accordion-caption{font-weight:600;font-size:1.125rem}.accordion-content{gap:8px;max-height:0;overflow:hidden;transition:max-height 0.3s ease-in-out;line-height:24px;font-size:1rem;font-weight:400;font-family:"Source Sans 3"}.inner-content{background-color:#FFFFFF;padding:24px;word-wrap:break-word;overflow-wrap:anywhere;align-self:stretch;}.accordion-icon{font-weight:bold;display:inline-block;transition:transform 0.3s}.accordion-icon:hover{color:#08665C}.accordion-item.open .accordion-icon{transform:rotate(-180deg)}',d=class{constructor(t){o(this,t),this.ifxItemOpen=e(this,"ifxItemOpen",7),this.ifxItemClose=e(this,"ifxItemClose",7),this.caption=void 0,this.open=!1,this.initialCollapse=!0,this.internalOpen=!1}componentWillLoad(){this.internalOpen=this.open,this.initialCollapse||(this.internalOpen=!0)}componentDidLoad(){this.openAccordionItem()}componentDidUpdate(){this.openAccordionItem()}openChanged(t){this.internalOpen=t}toggleOpen(){this.internalOpen=!this.internalOpen,this.open=this.internalOpen,this.internalOpen?this.ifxItemOpen.emit({isOpen:this.internalOpen}):this.ifxItemClose.emit({isClosed:!this.internalOpen})}openAccordionItem(){this.internalOpen?this.contentEl.style.maxHeight=`${this.contentEl.scrollHeight}px`:this.contentEl.style.maxHeight="0"}handleSlotChange(){this.internalOpen&&this.openAccordionItem()}render(){return n("div",{"aria-label":this.caption,class:`accordion-item ${this.internalOpen?"open":""}`},n("div",{class:"accordion-title",onClick:()=>this.toggleOpen()},n("span",{class:"accordion-icon"},n("ifx-icon",{icon:"chevron-down-12"})),n("span",{class:"accordion-caption"},this.caption)),n("div",{class:"accordion-content",ref:t=>this.contentEl=t},n("div",{class:"inner-content"},n("slot",{onSlotchange:()=>this.handleSlotChange()}))))}static get watchers(){return{open:["openChanged"]}}};d.style=p;export{l as ifx_accordion,d as ifx_accordion_item};
