import{r as s,h as t,g as l,c as a}from"./index-Dbu0QXeh.js";const f=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:block}.accordion-wrapper{display:flex;flex-direction:column;gap:8px;font-family:var(--ifx-font-family)}',d=f,p=class{constructor(e){s(this,e),this.autoCollapse=!1}async onItemOpen(e){if(this.autoCollapse){const i=Array.from(this.el.querySelectorAll("ifx-accordion-item"));for(const o of i){const n=o;n!==e.target&&await n.open&&(n.open=!1)}}}render(){return t("div",{key:"66c32c7150e24c4f68121e7d8892d2495fbb56ab",class:"accordion-wrapper"},t("slot",{key:"3d7a3a05197addabb7da49d2dfe4e6f0012c03b1"}))}get el(){return l(this)}};p.style=d;const h=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.accordion-item{border-radius:3px;overflow:hidden;transition:all 0.3s;font-family:var(--ifx-font-family)}.accordion-title:hover{border:1px solid #EEEDED;color:#08665C}.accordion-title{display:flex;align-items:center;padding:12px 16px;gap:12px;color:#0A8276;background-color:#FFFFFF;border:1px solid #EEEDED;cursor:pointer}.accordion-caption{font-weight:600;font-size:1.125rem}.accordion-content{gap:8px;max-height:0;overflow:hidden;transition:max-height 0.3s ease-in-out;line-height:24px;font-size:1rem;font-weight:400}.inner-content{background-color:#FFFFFF;padding:24px;word-wrap:break-word;overflow-wrap:anywhere;align-self:stretch;}.accordion-icon{font-weight:bold;display:inline-block;transition:transform 0.3s}.accordion-icon:hover{color:#08665C}.accordion-item.open .accordion-icon{transform:rotate(-180deg)}',m=h,x=class{constructor(e){s(this,e),this.ifxItemOpen=a(this,"ifxItemOpen",7),this.ifxItemClose=a(this,"ifxItemClose",7),this.caption=void 0,this.open=!1,this.initialCollapse=!0,this.internalOpen=!1}componentWillLoad(){this.internalOpen=this.open,this.initialCollapse||(this.internalOpen=!0)}componentDidLoad(){this.openAccordionItem()}componentDidUpdate(){this.openAccordionItem()}openChanged(e){this.internalOpen=e}toggleOpen(){this.internalOpen=!this.internalOpen,this.open=this.internalOpen,this.internalOpen?this.ifxItemOpen.emit({isOpen:this.internalOpen}):this.ifxItemClose.emit({isClosed:!this.internalOpen})}openAccordionItem(){this.internalOpen?this.contentEl.style.maxHeight=`${this.contentEl.scrollHeight}px`:this.contentEl.style.maxHeight="0"}handleSlotChange(e){const o=e.target.assignedNodes();o.length>0&&o.forEach(n=>{new MutationObserver((c,g)=>{for(let r of c)r.type==="childList"&&this.internalOpen&&this.openAccordionItem()}).observe(n,{attributes:!0,childList:!0,subtree:!0})}),this.internalOpen&&this.openAccordionItem()}render(){return t("div",{key:"07f1b7982c1f9d5ff86afe165cb170f38b546944","aria-label":this.caption,class:`accordion-item ${this.internalOpen?"open":""}`},t("div",{key:"1f6268a5392e0a8f772bd4ba6c34087982b16e2e",class:"accordion-title",onClick:()=>this.toggleOpen()},t("span",{key:"f05542ae5676a9e1c71da72c6594577494cabf9a",class:"accordion-icon"},t("ifx-icon",{key:"6ef259ee86a0f967e885102559668d0f22459f54",icon:"chevron-down-12"})),t("span",{key:"f62dc7583d81420c558e923d52f8932a8ebc0ca1",class:"accordion-caption"},this.caption)),t("div",{key:"381b7e40f5cc202f0697e93157883c4546fd4542",class:"accordion-content",ref:e=>this.contentEl=e},t("div",{key:"0b27bed885f8ef477ebf66510759ab041f6e4873",class:"inner-content"},t("slot",{key:"8e7293105ae43e904346cb8bf9cf5a17d092ac86",onSlotchange:e=>this.handleSlotChange(e)}))))}static get watchers(){return{open:["openChanged"]}}};x.style=m;export{p as ifx_accordion,x as ifx_accordion_item};
