import{r as c,h as t,g as d,c as a}from"./index-CUTtscpp.js";import"@stencil/react-output-target/runtime";const l=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:block}.accordion-wrapper{display:flex;flex-direction:column;gap:8px;font-family:var(--ifx-font-family)}',f=l,p=class{constructor(e){c(this,e),this.autoCollapse=!1}async onItemOpen(e){if(this.autoCollapse){const i=Array.from(this.el.querySelectorAll("ifx-accordion-item"));for(const o of i){const n=o;n!==e.target&&await n.open&&(n.open=!1)}}}render(){return t("div",{key:"975256f6d34c36f5eecdcedab9c4f05227336626",class:"accordion-wrapper"},t("slot",{key:"10cf4057057d95596240cc83fb3f6d9c1fe3e4e2"}))}get el(){return d(this)}};p.style=f;const h=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.accordion-item{border-radius:3px;overflow:hidden;transition:all 0.3s;font-family:var(--ifx-font-family)}.accordion-title:hover{border:1px solid #EEEDED;color:#08665C}.accordion-title{display:flex;align-items:center;padding:12px 16px;gap:12px;color:#0A8276;background-color:#FFFFFF;border:1px solid #EEEDED;cursor:pointer}.accordion-caption{font-weight:600;font-size:1.125rem}.accordion-content{gap:8px;max-height:0;overflow:hidden;transition:max-height 0.3s ease-in-out;line-height:24px;font-size:1rem;font-weight:400}.inner-content{background-color:#FFFFFF;padding:24px;word-wrap:break-word;overflow-wrap:anywhere;align-self:stretch;}.accordion-icon{font-weight:bold;display:inline-block;transition:transform 0.3s}.accordion-icon:hover{color:#08665C}.accordion-item.open .accordion-icon{transform:rotate(-180deg)}',m=h,b=class{constructor(e){c(this,e),this.ifxItemOpen=a(this,"ifxItemOpen",7),this.ifxItemClose=a(this,"ifxItemClose",7),this.caption=void 0,this.open=!1,this.internalOpen=!1}componentWillLoad(){this.internalOpen=this.open}componentDidLoad(){this.openAccordionItem()}componentDidUpdate(){this.openAccordionItem()}openChanged(e){this.internalOpen=e}toggleOpen(){this.internalOpen=!this.internalOpen,this.open=this.internalOpen,this.internalOpen?this.ifxItemOpen.emit({isOpen:this.internalOpen}):this.ifxItemClose.emit({isClosed:!this.internalOpen})}openAccordionItem(){this.internalOpen?this.contentEl.style.maxHeight=`${this.contentEl.scrollHeight}px`:this.contentEl.style.maxHeight="0"}handleSlotChange(e){const o=e.target.assignedNodes();o.length>0&&o.forEach(n=>{new MutationObserver((s,g)=>{for(let r of s)r.type==="childList"&&this.internalOpen&&this.openAccordionItem()}).observe(n,{attributes:!0,childList:!0,subtree:!0})}),this.internalOpen&&this.openAccordionItem()}render(){return t("div",{key:"8a00fbd5a75a5d678202b4409a2fd9382936988a","aria-label":this.caption,class:`accordion-item ${this.internalOpen?"open":""}`},t("div",{key:"a76c610becb27539a8df14a8964a1021acf2f611",class:"accordion-title",onClick:()=>this.toggleOpen()},t("span",{key:"e289fd189d3d8c97c9b00eb82fd83f4e5cfc1d43",class:"accordion-icon"},t("ifx-icon",{key:"0e29fb651391bbfed635d031cda2e34de91b0948",icon:"chevron-down-12"})),t("span",{key:"a21844dfd518a3bbcd1b17cbe7c0933a93e37d07",class:"accordion-caption"},this.caption)),t("div",{key:"9ccb86d0d6a47e4b3e9dd652e3ddfe82bb416078",class:"accordion-content",ref:e=>this.contentEl=e},t("div",{key:"061dceb1ae9429f2b6f684a85b0ffe9d84baa4b8",class:"inner-content"},t("slot",{key:"af3640dd4056d7cd45d5d6b9d59b5479b8cb3ddc",onSlotchange:e=>this.handleSlotChange(e)}))))}static get watchers(){return{open:["openChanged"]}}};b.style=m;export{p as ifx_accordion,b as ifx_accordion_item};
