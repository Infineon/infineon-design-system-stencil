import{r as c,h as o,g as l,c as a}from"./index-CeWrZWUy.js";const d=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:block}.accordion-wrapper{display:flex;flex-direction:column;gap:8px;font-family:var(--ifx-font-family)}',f=d,p=class{constructor(e){c(this,e),this.autoCollapse=!1}async onItemOpen(e){if(this.autoCollapse){const i=Array.from(this.el.querySelectorAll("ifx-accordion-item"));for(const n of i){const t=n;t!==e.target&&await t.open&&(t.open=!1)}}}render(){return o("div",{key:"663e6aac2f3002d3898856b854dbfd96d9519a68",class:"accordion-wrapper"},o("slot",{key:"0f54044bc1e0d2860ccd3096ee2711eb0a1cb927"}))}static get delegatesFocus(){return!0}get el(){return l(this)}};p.style=f;const h=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.accordion-item{border-radius:3px;overflow:hidden;transition:all 0.3s;font-family:var(--ifx-font-family)}.accordion-title:focus{outline:none}.accordion-title:focus::after{content:"";display:block;position:absolute;top:-4px;bottom:-4px;left:-4px;right:-4px;border-radius:5px;border:2px solid #0A8276;box-sizing:border-box}.accordion-title:hover{border:1px solid #EEEDED;color:#08665C}.accordion-title{display:flex;align-items:center;position:relative;padding:12px 16px;gap:12px;color:#0A8276;background-color:#FFFFFF;border:1px solid #EEEDED;cursor:pointer;margin:4px}.accordion-caption{font-weight:600;font-size:1.125rem}.accordion-content{gap:8px;max-height:0;overflow:hidden;transition:max-height 0.3s ease-in-out;line-height:24px;font-size:1rem;font-weight:400}.inner-content{background-color:#FFFFFF;padding:24px;word-wrap:break-word;overflow-wrap:anywhere;align-self:stretch;}.accordion-icon{font-weight:bold;display:inline-block;transition:transform 0.3s}.accordion-icon:hover{color:#08665C}.accordion-item.open .accordion-icon{transform:rotate(-180deg)}',b=h,m=class{constructor(e){c(this,e),this.ifxOpen=a(this,"ifxOpen",7),this.ifxClose=a(this,"ifxClose",7),this.open=!1,this.AriaLevel=3,this.internalOpen=!1}componentWillLoad(){this.internalOpen=this.open}componentDidLoad(){this.openAccordionItem()}componentDidUpdate(){this.openAccordionItem()}openChanged(e){this.internalOpen=e}toggleOpen(){this.internalOpen=!this.internalOpen,this.open=this.internalOpen,this.internalOpen?this.ifxOpen.emit({isOpen:this.internalOpen}):this.ifxClose.emit({isClosed:!this.internalOpen})}openAccordionItem(){this.internalOpen?this.contentEl.style.maxHeight=`${this.contentEl.scrollHeight}px`:this.contentEl.style.maxHeight="0"}handleSlotChange(e){const n=e.target.assignedNodes();n.length>0&&n.forEach(t=>{new MutationObserver((r,g)=>{for(let s of r)s.type==="childList"&&this.internalOpen&&this.openAccordionItem()}).observe(t,{attributes:!0,childList:!0,subtree:!0})}),this.internalOpen&&this.openAccordionItem()}handleKeydown(e){switch(e.key){case"Enter":case" ":e.preventDefault(),this.toggleOpen();break}}render(){return o("div",{key:"90b42fe0fdc59bcb707cdbd345d457a651cadd34",class:`accordion-item ${this.internalOpen?"open":""}`},o("div",{key:"691f906ddcf27924b85cb06a7cd1d469bed4b57d",role:"button","aria-expanded":this.internalOpen,"aria-controls":"accordion-content",class:"accordion-title",onClick:()=>this.toggleOpen(),tabindex:"0"},o("span",{key:"5a83c087659f68747176e3bc26d6653b4db9dcaf","aria-hidden":"true",role:"heading","aria-level":String(this.AriaLevel),class:"accordion-icon"},o("ifx-icon",{key:"050e89939de98c6e22b6a0563ebc7213e7204b0f",icon:"chevron-down-12"})),o("span",{key:"960c0ba799af03b588ac53dd5ef4b3071e2f83f4",id:"accordion-caption",class:"accordion-caption"},this.caption)),o("div",{key:"64a83fedce2c9b0b9a5c65a7fbcd3b76e156dd56",id:"accordion-content",class:"accordion-content",ref:e=>this.contentEl=e,role:"region","aria-labelledby":"accordion-caption"},o("div",{key:"59033c70e0ac0990cd7bdf60e131d2091339b314",class:"inner-content"},o("slot",{key:"a73b3a5b932c9e71275dd4735142cd4fc222e404",onSlotchange:e=>this.handleSlotChange(e)}))))}static get watchers(){return{open:["openChanged"]}}};m.style=b;export{p as ifx_accordion,m as ifx_accordion_item};
