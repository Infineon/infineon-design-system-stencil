"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[5544],{5544:(e,t,i)=>{i.r(t),i.d(t,{ifx_dropdown:()=>r});var n=i(7322),s=i(844);const r=class{constructor(e){(0,n.r)(this,e),this.ifxOpen=(0,n.c)(this,"ifxOpen",7),this.ifxClose=(0,n.c)(this,"ifxClose",7),this.ifxDropdown=(0,n.c)(this,"ifxDropdown",7),this.placement="bottom-start",this.defaultOpen=!1,this.internalIsOpen=!1,this.noAppendToBody=!1,this.disabled=void 0,this.noCloseOnOutsideClick=!1,this.noCloseOnMenuClick=!1,this.trigger=void 0,this.menu=void 0}componentWillLoad(){this.updateSlotContent(),this.watchHandlerIsOpen(this.defaultOpen,this.internalIsOpen)}watchHandlerIsOpen(e,t){e!==t&&e!==this.internalIsOpen&&(e?this.openDropdown():this.closeDropdown())}watchHandlerDisabled(e){this.trigger&&(this.trigger.disabled=e)}watchHandlerSlot(){this.updateSlotContent()}updateSlotContent(){this.trigger=this.el.querySelector("ifx-dropdown-trigger-button, ifx-dropdown-trigger"),this.trigger&&(this.trigger.disabled=this.disabled,this.trigger.removeEventListener("click",this.triggerClickHandler.bind(this)),this.trigger.addEventListener("click",this.triggerClickHandler.bind(this))),this.noAppendToBody?this.menu=this.el.querySelector("ifx-dropdown-menu"):(this.menu&&this.menu.remove(),this.menu=this.el.querySelector("ifx-dropdown-menu"),document.body.append(this.menu)),this.menu.removeEventListener("click",this.menuClickHandler.bind(this)),this.menu.addEventListener("click",this.menuClickHandler.bind(this))}menuClickHandler(){this.noCloseOnMenuClick||this.closeDropdown()}triggerClickHandler(){this.internalIsOpen?this.closeDropdown():this.openDropdown()}disconnectedCallback(){this.popperInstance&&(this.popperInstance.destroy(),this.popperInstance=null),this.menu&&this.menu.remove()}async isOpen(){return this.internalIsOpen}async closeDropdown(){this.internalIsOpen&&(this.internalIsOpen=!1,this.trigger.isOpen=!1,this.menu.isOpen=!1,this.ifxClose.emit()),this.popperInstance&&(this.popperInstance.destroy(),this.popperInstance=null)}async openDropdown(){this.internalIsOpen||this.disabled||(this.internalIsOpen=!0,this.trigger.isOpen=!0,this.menu.isOpen=!0,this.popperInstance=(0,s.c)(this.el,this.menu,{placement:this.placement}),this.ifxOpen.emit())}handleOutsideClick(e){const t=e.target;this.noCloseOnOutsideClick||this.el.contains(t)||this.menu.contains(t)||this.closeDropdown()}render(){return(0,n.h)("div",{"aria-label":"dropdown menu",class:"dropdown"},(0,n.h)("slot",null))}get el(){return(0,n.g)(this)}static get watchers(){return{defaultOpen:["watchHandlerIsOpen"],disabled:["watchHandlerDisabled"]}}};r.style=":host{display:inline-block}"}}]);
//# sourceMappingURL=5544.aafcfa26.chunk.js.map