import{r,h as t,g as d,c as a}from"./index-Bdk08TGs.js";const l=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:block}.accordion-wrapper{display:flex;flex-direction:column;gap:8px;font-family:var(--ifx-font-family)}',f=l,p=class{constructor(e){r(this,e),this.autoCollapse=!1}async onItemOpen(e){if(this.autoCollapse){const i=Array.from(this.el.querySelectorAll("ifx-accordion-item"));for(const n of i){const o=n;o!==e.target&&await o.open&&(o.open=!1)}}}render(){return t("div",{key:"a69a6bea9d5347c0e1808d4635d458ce16614000",class:"accordion-wrapper"},t("slot",{key:"389e9039f9272a88d95aca8b83efbb754736a5dd"}))}static get delegatesFocus(){return!0}get el(){return d(this)}};p.style=f;const h=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.accordion-item{border-radius:3px;overflow:hidden;transition:all 0.3s;font-family:var(--ifx-font-family)}.accordion-title:focus{outline:none}.accordion-title:focus::after{content:"";display:block;position:absolute;top:-4px;bottom:-4px;left:-4px;right:-4px;border-radius:5px;border:2px solid #0A8276;box-sizing:border-box}.accordion-title:hover{border:1px solid #EEEDED;color:#08665C}.accordion-title{display:flex;align-items:center;position:relative;padding:12px 16px;gap:12px;color:#0A8276;background-color:#FFFFFF;border:1px solid #EEEDED;cursor:pointer;margin:4px}.accordion-caption{font-weight:600;font-size:1.125rem}.accordion-content{gap:8px;max-height:0;overflow:hidden;transition:max-height 0.3s ease-in-out;line-height:24px;font-size:1rem;font-weight:400}.inner-content{background-color:#FFFFFF;padding:24px;word-wrap:break-word;overflow-wrap:anywhere;align-self:stretch;}.accordion-icon{font-weight:bold;display:inline-block;transition:transform 0.3s}.accordion-icon:hover{color:#08665C}.accordion-item.open .accordion-icon{transform:rotate(-180deg)}',m=h,x=class{constructor(e){r(this,e),this.ifxItemOpen=a(this,"ifxItemOpen",7),this.ifxItemClose=a(this,"ifxItemClose",7),this.caption=void 0,this.open=!1,this.AriaLive=3,this.internalOpen=!1}componentWillLoad(){this.internalOpen=this.open}componentDidLoad(){this.openAccordionItem()}componentDidUpdate(){this.openAccordionItem()}openChanged(e){this.internalOpen=e}toggleOpen(){this.internalOpen=!this.internalOpen,this.open=this.internalOpen,this.internalOpen?this.ifxItemOpen.emit({isOpen:this.internalOpen}):this.ifxItemClose.emit({isClosed:!this.internalOpen})}openAccordionItem(){this.internalOpen?this.contentEl.style.maxHeight=`${this.contentEl.scrollHeight}px`:this.contentEl.style.maxHeight="0"}handleSlotChange(e){const n=e.target.assignedNodes();n.length>0&&n.forEach(o=>{new MutationObserver((c,b)=>{for(let s of c)s.type==="childList"&&this.internalOpen&&this.openAccordionItem()}).observe(o,{attributes:!0,childList:!0,subtree:!0})}),this.internalOpen&&this.openAccordionItem()}handleKeydown(e){switch(e.key){case"Enter":case" ":e.preventDefault(),this.toggleOpen();break}}render(){return t("div",{key:"1215772109c33556d626f4a7d40d6655684806a2",class:`accordion-item ${this.internalOpen?"open":""}`},t("div",{key:"30e7771bae93c213d9f95126886d7552ebe03b94",role:"button","aria-expanded":this.internalOpen,"aria-controls":"accordion-content",class:"accordion-title",onClick:()=>this.toggleOpen(),tabindex:"0"},t("span",{key:"7da5f484c41f9f01dd7eec5092ec8ad82947d481","aria-hidden":"true",role:"heading","aria-level":String(this.AriaLive),class:"accordion-icon"},t("ifx-icon",{key:"e64e478a66fd0dd2c3d3608294a6160aa4232952",icon:"chevron-down-12"})),t("span",{key:"7e1ff777da8ce68d6d5f1266512fbd05731169f5",id:"accordion-caption",class:"accordion-caption"},this.caption)),t("div",{key:"144fa8393da592e1d928b51d7b4ad48d6b06a100",id:"accordion-content",class:"accordion-content",ref:e=>this.contentEl=e,role:"region","aria-labelledby":"accordion-caption"},t("div",{key:"28702f514d9bd400499a49a3b1cd675f56d7fcad",class:"inner-content"},t("slot",{key:"e40109a457e4b1cc09c8234d5003361bb6c1c6fb",onSlotchange:e=>this.handleSlotChange(e)}))))}static get watchers(){return{open:["openChanged"]}}};x.style=m;export{p as ifx_accordion,x as ifx_accordion_item};
