import{r as n,h as o,g as r,c as i}from"./index-79039df0.js";const a='*{font-family:"Source Sans 3"}:host{display:block}.accordion-wrapper{display:flex;flex-direction:column;gap:8px}',l=class{constructor(e){n(this,e),this.autoCollapse=!1}async onItemOpen(e){if(this.autoCollapse){const s=Array.from(this.el.querySelectorAll("ifx-accordion-item"));for(const c of s){const t=c;t!==e.target&&await t.isOpen()&&t.close()}}}render(){return o("div",{class:"accordion-wrapper"},o("slot",null))}get el(){return r(this)}};l.style=a;const p='*{font-family:"Source Sans 3"}.accordion-item{border-radius:3px;overflow:hidden;transition:all 0.3s}.accordion-title:hover{border:1px solid #EEEDED;color:#08665C}.accordion-title{display:flex;align-items:center;padding:12px 16px;gap:12px;color:#0A8276;background-color:#FFFFFF;border:1px solid #EEEDED;cursor:pointer}.accordion-caption{font-weight:600;font-size:1.125rem}.accordion-content{gap:8px;max-height:0;overflow:hidden;transition:max-height 0.3s ease-in-out;line-height:24px;font-size:1rem;font-weight:400;font-family:"Source Sans 3"}.inner-content{background-color:#FFFFFF;padding:24px;word-wrap:break-word;overflow-wrap:anywhere;align-self:stretch;}.accordion-icon{font-weight:bold;display:inline-block;transition:transform 0.3s}.accordion-icon:hover{color:#08665C}.accordion-item.open .accordion-icon{transform:rotate(-180deg)}',d=class{constructor(e){n(this,e),this.ifxItemOpen=i(this,"ifxItemOpen",7),this.ifxItemClose=i(this,"ifxItemClose",7),this.caption=void 0,this.initialCollapse=!0,this.open=!1}toggleOpen(){this.open=!this.open,this.open?this.ifxItemOpen.emit():this.ifxItemClose.emit()}openAccordionItem(){this.open?this.contentEl.style.maxHeight=`${this.contentEl.scrollHeight}px`:this.contentEl.style.maxHeight="0"}componentWillLoad(){this.initialCollapse||(this.open=!0,this.ifxItemOpen.emit())}componentDidLoad(){this.openAccordionItem()}componentDidUpdate(){this.openAccordionItem()}async close(){this.open=!1,this.ifxItemClose.emit()}async isOpen(){return this.open}render(){return o("div",{"aria-label":this.caption,class:`accordion-item ${this.open?"open":""}`},o("div",{class:"accordion-title",onClick:()=>this.toggleOpen()},o("span",{class:"accordion-icon"},o("ifx-icon",{icon:"chevron-down-12"})),o("span",{class:"accordion-caption"},this.caption)),o("div",{class:"accordion-content",ref:e=>this.contentEl=e},o("div",{class:"inner-content"},o("slot",null))))}};d.style=p;export{l as ifx_accordion,d as ifx_accordion_item};