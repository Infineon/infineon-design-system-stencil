import{r as n,c as i,h as s,g as r}from"./index-BG9zppWA.js";import{c as o}from"./popper-1604923e-BQBsAJpH.js";const l=":host{display:inline-block}",h=l,a=class{constructor(e){n(this,e),this.ifxOpen=i(this,"ifxOpen",7),this.ifxClose=i(this,"ifxClose",7),this.ifxDropdown=i(this,"ifxDropdown",7),this.placement="bottom-start",this.defaultOpen=!1,this.internalIsOpen=!1,this.noAppendToBody=!1,this.noCloseOnOutsideClick=!1,this.noCloseOnMenuClick=!1}componentWillLoad(){this.updateSlotContent(),this.watchHandlerIsOpen(this.defaultOpen,this.internalIsOpen)}watchHandlerIsOpen(e,t){e!==t&&e!==this.internalIsOpen&&(e?this.openDropdown():this.closeDropdown())}watchHandlerDisabled(e){this.trigger&&(this.trigger.disabled=e)}watchHandlerSlot(){this.updateSlotContent()}updateSlotContent(){this.trigger=this.el.querySelector("ifx-dropdown-trigger-button, ifx-dropdown-trigger"),this.trigger&&(this.trigger.disabled=this.disabled,this.trigger.removeEventListener("click",this.triggerClickHandler.bind(this)),this.trigger.addEventListener("click",this.triggerClickHandler.bind(this))),this.noAppendToBody?this.menu=this.el.querySelector("ifx-dropdown-menu"):(this.menu&&this.menu.remove(),this.menu=this.el.querySelector("ifx-dropdown-menu"),document.body.append(this.menu)),this.menu.removeEventListener("click",this.menuClickHandler.bind(this)),this.menu.addEventListener("click",this.menuClickHandler.bind(this))}menuClickHandler(){this.noCloseOnMenuClick||this.closeDropdown()}triggerClickHandler(){this.internalIsOpen?this.closeDropdown():this.openDropdown()}disconnectedCallback(){this.popperInstance&&(this.popperInstance.destroy(),this.popperInstance=null),this.menu&&this.menu.remove()}async isOpen(){return this.internalIsOpen}async closeDropdown(){this.internalIsOpen&&(this.internalIsOpen=!1,this.trigger.isOpen=!1,this.menu.isOpen=!1,this.ifxClose.emit()),this.popperInstance&&(this.popperInstance.destroy(),this.popperInstance=null)}async openDropdown(){!this.internalIsOpen&&!this.disabled&&(this.internalIsOpen=!0,this.trigger.isOpen=!0,this.menu.isOpen=!0,this.popperInstance=o(this.el,this.menu,{placement:this.placement}),this.ifxOpen.emit())}handleOutsideClick(e){const t=e.target;!this.noCloseOnOutsideClick&&!this.el.contains(t)&&!this.menu.contains(t)&&this.closeDropdown()}render(){return s("div",{key:"219177f6d008120f92de56d6e3a0b135b1150fa3","aria-label":"dropdown menu",class:"dropdown"},s("slot",{key:"c914c9bbf3476b569d90db5418c35cb0e5645a4e"}))}get el(){return r(this)}static get watchers(){return{defaultOpen:["watchHandlerIsOpen"],disabled:["watchHandlerDisabled"]}}};a.style=h;export{a as ifx_dropdown};
