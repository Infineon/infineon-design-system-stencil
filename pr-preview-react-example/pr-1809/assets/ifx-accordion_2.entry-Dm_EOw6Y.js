import{r as c,h as t,g as r,c as a}from"./index-DETYcGP0.js";const d=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:block}.accordion-wrapper{display:flex;flex-direction:column;gap:8px;font-family:var(--ifx-font-family)}',f=d,p=class{constructor(e){c(this,e),this.autoCollapse=!1}async onItemOpen(e){if(this.autoCollapse){const i=Array.from(this.el.querySelectorAll("ifx-accordion-item"));for(const n of i){const o=n;o!==e.target&&await o.open&&(o.open=!1)}}}render(){return t("div",{key:"663e6aac2f3002d3898856b854dbfd96d9519a68",class:"accordion-wrapper"},t("slot",{key:"0f54044bc1e0d2860ccd3096ee2711eb0a1cb927"}))}static get delegatesFocus(){return!0}get el(){return r(this)}};p.style=f;const h=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.accordion-item{border-radius:3px;overflow:hidden;transition:all 0.3s;font-family:var(--ifx-font-family)}.accordion-title:focus{outline:none}.accordion-title:focus::after{content:"";display:block;position:absolute;top:-4px;bottom:-4px;left:-4px;right:-4px;border-radius:5px;border:2px solid #0A8276;box-sizing:border-box}.accordion-title:hover{border:1px solid #EEEDED;color:#08665C}.accordion-title{display:flex;align-items:center;position:relative;padding:12px 16px;gap:12px;color:#0A8276;background-color:#FFFFFF;border:1px solid #EEEDED;cursor:pointer;margin:4px}.accordion-caption{font-weight:600;font-size:1.125rem}.accordion-content{gap:8px;max-height:0;overflow:hidden;transition:max-height 0.3s ease-in-out;line-height:24px;font-size:1rem;font-weight:400}.inner-content{background-color:#FFFFFF;padding:24px;word-wrap:break-word;overflow-wrap:anywhere;align-self:stretch;}.accordion-icon{font-weight:bold;display:inline-block;transition:transform 0.3s}.accordion-icon:hover{color:#08665C}.accordion-item.open .accordion-icon{transform:rotate(-180deg)}',m=h,x=class{constructor(e){c(this,e),this.ifxOpen=a(this,"ifxOpen",7),this.ifxClose=a(this,"ifxClose",7),this.open=!1,this.AriaLevel=3,this.internalOpen=!1}componentWillLoad(){this.internalOpen=this.open}componentDidLoad(){this.openAccordionItem()}componentDidUpdate(){this.openAccordionItem()}openChanged(e){this.internalOpen=e}toggleOpen(){this.internalOpen=!this.internalOpen,this.open=this.internalOpen,this.internalOpen?this.ifxOpen.emit({isOpen:this.internalOpen}):this.ifxClose.emit({isClosed:!this.internalOpen})}openAccordionItem(){this.internalOpen?this.contentEl.style.maxHeight=`${this.contentEl.scrollHeight}px`:this.contentEl.style.maxHeight="0"}handleSlotChange(e){const n=e.target.assignedNodes();n.length>0&&n.forEach(o=>{new MutationObserver((s,g)=>{for(let l of s)l.type==="childList"&&this.internalOpen&&this.openAccordionItem()}).observe(o,{attributes:!0,childList:!0,subtree:!0})}),this.internalOpen&&this.openAccordionItem()}handleKeydown(e){if(e.composedPath().includes(this.titleEl))switch(e.key){case"Enter":case" ":e.preventDefault(),this.toggleOpen();break}}render(){return t("div",{key:"7d6ed35b5c84e3dbfe0cc42f74408ab4655a61d2",class:`accordion-item ${this.internalOpen?"open":""}`},t("div",{key:"19350af96518b086d24cfb653ba8c41ce9a8d4e8",role:"button","aria-expanded":this.internalOpen,"aria-controls":"accordion-content",class:"accordion-title",onClick:()=>this.toggleOpen(),tabindex:"0",ref:e=>this.titleEl=e},t("span",{key:"56d40596ed604a5c24274dbde190802dd000e801","aria-hidden":"true",role:"heading","aria-level":String(this.AriaLevel),class:"accordion-icon"},t("ifx-icon",{key:"c93ace2e23cc1b9d5e50f8ea3e6a4e3b6c65e811",icon:"chevron-down-12"})),t("span",{key:"9ac2410b6c4e9f9918ec7ca7370470c744a2cf6b",id:"accordion-caption",class:"accordion-caption"},this.caption)),t("div",{key:"a8a9058e232dcaae9aaa0ebf43a4f3fba958136a",id:"accordion-content",class:"accordion-content",ref:e=>this.contentEl=e,role:"region","aria-labelledby":"accordion-caption"},t("div",{key:"81c6d61ccae983dae7ffeff557fa7e51fd10ab77",class:"inner-content"},t("slot",{key:"54ddfcf9375576b2118822057f17ddd765e2ca47",onSlotchange:e=>this.handleSlotChange(e)}))))}get el(){return r(this)}static get watchers(){return{open:["openChanged"]}}};x.style=m;export{p as ifx_accordion,x as ifx_accordion_item};
