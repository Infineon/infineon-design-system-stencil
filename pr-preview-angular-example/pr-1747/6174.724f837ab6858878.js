"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[6174],{6174:(p,r,t)=>{t.r(r),t.d(r,{ifx_dropdown:()=>a});var s=t(6330),n=t(1797),l=t(124);const a=(()=>{let o=class{constructor(e){(0,n.r)(this,e),this.ifxOpen=(0,n.c)(this,"ifxOpen",7),this.ifxClose=(0,n.c)(this,"ifxClose",7),this.ifxDropdown=(0,n.c)(this,"ifxDropdown",7),this.placement="bottom-start",this.defaultOpen=!1,this.internalIsOpen=!1,this.noAppendToBody=!1,this.noCloseOnOutsideClick=!1,this.noCloseOnMenuClick=!1}componentWillLoad(){this.updateSlotContent(),this.watchHandlerIsOpen(this.defaultOpen,this.internalIsOpen)}watchHandlerIsOpen(e,i){e!==i&&e!==this.internalIsOpen&&(e?this.openDropdown():this.closeDropdown())}watchHandlerDisabled(e){this.trigger&&(this.trigger.disabled=e)}watchHandlerSlot(){this.updateSlotContent()}updateSlotContent(){this.trigger=this.el.querySelector("ifx-dropdown-trigger-button, ifx-dropdown-trigger"),this.trigger&&(this.trigger.disabled=this.disabled,this.trigger.removeEventListener("click",this.triggerClickHandler.bind(this)),this.trigger.addEventListener("click",this.triggerClickHandler.bind(this))),this.noAppendToBody?this.menu=this.el.querySelector("ifx-dropdown-menu"):(this.menu&&this.menu.remove(),this.menu=this.el.querySelector("ifx-dropdown-menu"),document.body.append(this.menu)),this.menu.removeEventListener("click",this.menuClickHandler.bind(this)),this.menu.addEventListener("click",this.menuClickHandler.bind(this))}menuClickHandler(){this.noCloseOnMenuClick||this.closeDropdown()}triggerClickHandler(){this.internalIsOpen?this.closeDropdown():this.openDropdown()}disconnectedCallback(){this.popperInstance&&(this.popperInstance.destroy(),this.popperInstance=null),this.menu&&this.menu.remove()}isOpen(){var e=this;return(0,s.A)(function*(){return e.internalIsOpen})()}closeDropdown(){var e=this;return(0,s.A)(function*(){e.internalIsOpen&&(e.internalIsOpen=!1,e.trigger.isOpen=!1,e.menu.isOpen=!1,e.ifxClose.emit()),e.popperInstance&&(e.popperInstance.destroy(),e.popperInstance=null)})()}openDropdown(){var e=this;return(0,s.A)(function*(){!e.internalIsOpen&&!e.disabled&&(e.internalIsOpen=!0,e.trigger.isOpen=!0,e.menu.isOpen=!0,e.popperInstance=(0,l.c)(e.el,e.menu,{placement:e.placement}),e.ifxOpen.emit())})()}handleOutsideClick(e){const i=e.target;!this.noCloseOnOutsideClick&&!this.el.contains(i)&&!this.menu.contains(i)&&this.closeDropdown()}render(){return(0,n.h)("div",{key:"dde0f96abe23abe5c133f4b7aa8d16082e412eb5","aria-label":"dropdown menu",class:"dropdown"},(0,n.h)("slot",{key:"f930fdf305e1092e6aa9a2ab8cc0e7a8fe74b926"}))}get el(){return(0,n.g)(this)}static get watchers(){return{defaultOpen:["watchHandlerIsOpen"],disabled:["watchHandlerDisabled"]}}};return o.style=":host{display:inline-block}",o})()}}]);