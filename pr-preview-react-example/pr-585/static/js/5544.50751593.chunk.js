"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[5544],{5544:function(e,t,n){n.r(t),n.d(t,{ifx_dropdown:function(){return h}});var i=n(4165),s=n(5861),r=n(5671),o=n(3144),a=n(929),l=n(844),h=function(){function e(t){(0,r.Z)(this,e),(0,a.r)(this,t),this.ifxOpen=(0,a.c)(this,"ifxOpen",7),this.ifxClose=(0,a.c)(this,"ifxClose",7),this.ifxDropdown=(0,a.c)(this,"ifxDropdown",7),this.placement="bottom-start",this.defaultOpen=!1,this.internalIsOpen=!1,this.noAppendToBody=!1,this.disabled=void 0,this.noCloseOnOutsideClick=!1,this.noCloseOnMenuClick=!1,this.trigger=void 0,this.menu=void 0}return(0,o.Z)(e,[{key:"componentWillLoad",value:function(){this.updateSlotContent(),this.watchHandlerIsOpen(this.defaultOpen,this.internalIsOpen)}},{key:"watchHandlerIsOpen",value:function(e,t){e!==t&&e!==this.internalIsOpen&&(e?this.openDropdown():this.closeDropdown())}},{key:"watchHandlerDisabled",value:function(e){this.trigger&&(this.trigger.disabled=e)}},{key:"watchHandlerSlot",value:function(){this.updateSlotContent()}},{key:"updateSlotContent",value:function(){this.trigger=this.el.querySelector("ifx-dropdown-trigger-button, ifx-dropdown-trigger"),this.trigger&&(this.trigger.disabled=this.disabled,this.trigger.removeEventListener("click",this.triggerClickHandler.bind(this)),this.trigger.addEventListener("click",this.triggerClickHandler.bind(this))),this.noAppendToBody?this.menu=this.el.querySelector("ifx-dropdown-menu"):(this.menu&&this.menu.remove(),this.menu=this.el.querySelector("ifx-dropdown-menu"),document.body.append(this.menu)),this.menu.removeEventListener("click",this.menuClickHandler.bind(this)),this.menu.addEventListener("click",this.menuClickHandler.bind(this))}},{key:"menuClickHandler",value:function(){this.noCloseOnMenuClick||this.closeDropdown()}},{key:"triggerClickHandler",value:function(){this.internalIsOpen?this.closeDropdown():this.openDropdown()}},{key:"disconnectedCallback",value:function(){this.popperInstance&&(this.popperInstance.destroy(),this.popperInstance=null),this.menu&&this.menu.remove()}},{key:"isOpen",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.internalIsOpen);case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"closeDropdown",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.internalIsOpen&&(this.internalIsOpen=!1,this.trigger.isOpen=!1,this.menu.isOpen=!1,this.ifxClose.emit()),this.popperInstance&&(this.popperInstance.destroy(),this.popperInstance=null);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openDropdown",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.internalIsOpen||this.disabled||(this.internalIsOpen=!0,this.trigger.isOpen=!0,this.menu.isOpen=!0,this.popperInstance=(0,l.c)(this.el,this.menu,{placement:this.placement}),this.ifxOpen.emit());case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleOutsideClick",value:function(e){var t=e.target;this.noCloseOnOutsideClick||this.el.contains(t)||this.menu.contains(t)||this.closeDropdown()}},{key:"render",value:function(){return(0,a.h)("div",{class:"dropdown"},(0,a.h)("slot",null))}},{key:"el",get:function(){return(0,a.g)(this)}}],[{key:"watchers",get:function(){return{defaultOpen:["watchHandlerIsOpen"],disabled:["watchHandlerDisabled"]}}}]),e}();h.style=":host{display:inline-block}"}}]);
//# sourceMappingURL=5544.50751593.chunk.js.map