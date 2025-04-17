"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[9724],{"./dist/esm/ifx-accordion_2.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_accordion:()=>Accordion,ifx_accordion_item:()=>IfxAccordionItem});var _index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-c77e25a0.js");const Accordion=class{constructor(hostRef){(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.autoCollapse=!1}async onItemOpen(event){if(this.autoCollapse){const items=Array.from(this.el.querySelectorAll("ifx-accordion-item"));for(const item of items){const itemElement=item;itemElement!==event.target&&await itemElement.open&&(itemElement.open=!1)}}}render(){return(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"663e6aac2f3002d3898856b854dbfd96d9519a68",class:"accordion-wrapper"},(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"0f54044bc1e0d2860ccd3096ee2711eb0a1cb927"}))}static get delegatesFocus(){return!0}get el(){return(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};Accordion.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:block}.accordion-wrapper{display:flex;flex-direction:column;gap:8px;font-family:var(--ifx-font-family)}';const IfxAccordionItem=class{constructor(hostRef){(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxOpen=(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxOpen",7),this.ifxClose=(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxClose",7),this.open=!1,this.AriaLevel=3,this.internalOpen=!1}componentWillLoad(){this.internalOpen=this.open}componentDidLoad(){this.openAccordionItem()}componentDidUpdate(){this.openAccordionItem()}openChanged(newValue){this.internalOpen=newValue}toggleOpen(){this.internalOpen=!this.internalOpen,this.open=this.internalOpen,this.internalOpen?this.ifxOpen.emit({isOpen:this.internalOpen}):this.ifxClose.emit({isClosed:!this.internalOpen})}openAccordionItem(){this.internalOpen?this.contentEl.style.maxHeight=`${this.contentEl.scrollHeight}px`:this.contentEl.style.maxHeight="0"}handleSlotChange(e){const nodes=e.target.assignedNodes();nodes.length>0&&nodes.forEach((node=>{new MutationObserver(((mutationsList,_)=>{for(let mutation of mutationsList)"childList"===mutation.type&&this.internalOpen&&this.openAccordionItem()})).observe(node,{attributes:!0,childList:!0,subtree:!0})})),this.internalOpen&&this.openAccordionItem()}handleKeydown(ev){if(ev.composedPath().includes(this.titleEl))switch(ev.key){case"Enter":case" ":ev.preventDefault(),this.toggleOpen()}}render(){return(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"7d6ed35b5c84e3dbfe0cc42f74408ab4655a61d2",class:"accordion-item "+(this.internalOpen?"open":"")},(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"19350af96518b086d24cfb653ba8c41ce9a8d4e8",role:"button","aria-expanded":this.internalOpen,"aria-controls":"accordion-content",class:"accordion-title",onClick:()=>this.toggleOpen(),tabindex:"0",ref:el=>this.titleEl=el},(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"56d40596ed604a5c24274dbde190802dd000e801","aria-hidden":"true",role:"heading","aria-level":String(this.AriaLevel),class:"accordion-icon"},(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"c93ace2e23cc1b9d5e50f8ea3e6a4e3b6c65e811",icon:"chevron-down-12"})),(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"9ac2410b6c4e9f9918ec7ca7370470c744a2cf6b",id:"accordion-caption",class:"accordion-caption"},this.caption)),(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"a8a9058e232dcaae9aaa0ebf43a4f3fba958136a",id:"accordion-content",class:"accordion-content",ref:el=>this.contentEl=el,role:"region","aria-labelledby":"accordion-caption"},(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"81c6d61ccae983dae7ffeff557fa7e51fd10ab77",class:"inner-content"},(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"54ddfcf9375576b2118822057f17ddd765e2ca47",onSlotchange:e=>this.handleSlotChange(e)}))))}get el(){return(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{open:["openChanged"]}}};IfxAccordionItem.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.accordion-item{border-radius:3px;overflow:hidden;transition:all 0.3s;font-family:var(--ifx-font-family)}.accordion-title:focus{outline:none}.accordion-title:focus::after{content:"";display:block;position:absolute;top:-4px;bottom:-4px;left:-4px;right:-4px;border-radius:5px;border:2px solid #0A8276;box-sizing:border-box}.accordion-title:hover{border:1px solid #EEEDED;color:#08665C}.accordion-title{display:flex;align-items:center;position:relative;padding:12px 16px;gap:12px;color:#0A8276;background-color:#FFFFFF;border:1px solid #EEEDED;cursor:pointer;margin:4px}.accordion-caption{font-weight:600;font-size:1.125rem}.accordion-content{gap:8px;max-height:0;overflow:hidden;transition:max-height 0.3s ease-in-out;line-height:24px;font-size:1rem;font-weight:400}.inner-content{background-color:#FFFFFF;padding:24px;word-wrap:break-word;overflow-wrap:anywhere;align-self:stretch;}.accordion-icon{font-weight:bold;display:inline-block;transition:transform 0.3s}.accordion-icon:hover{color:#08665C}.accordion-item.open .accordion-icon{transform:rotate(-180deg)}'}}]);