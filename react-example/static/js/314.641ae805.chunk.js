"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[314],{314:function(e,n,t){t.r(n),t.d(n,{ifx_chip:function(){return s}});var o=t(5671),i=t(3144),r=t(2458),s=function(){function e(n){(0,o.Z)(this,e),(0,r.r)(this,n),this.ifxDropdownMenu=(0,r.c)(this,"ifxDropdownMenu",7),this.placeholder=void 0,this.selectedValue=""}return(0,i.Z)(e,[{key:"handleOutsideClick",value:function(e){e.composedPath().includes(this.el)||this.closedMenu()}},{key:"handleDropdownItemValueEmission",value:function(e){this.selectedValue=e.detail,this.ifxDropdownMenu.emit(e.detail),this.toggleMenu()}},{key:"getDropdownMenu",value:function(){return this.el.querySelector("ifx-dropdown-menu")}},{key:"closedMenu",value:function(){this.getDropdownMenu().isOpen=!1}},{key:"toggleMenu",value:function(){var e=this.getDropdownMenu();e.isOpen=!e.isOpen,this.toggleCloseIcon()}},{key:"toggleCloseIcon",value:function(){this.el.shadowRoot.querySelector(".wrapper-close-button").classList.toggle("show")}},{key:"render",value:function(){var e=this;return(0,r.h)("div",{class:"dropdown container"},(0,r.h)("div",{class:"wrapper",onClick:function(){return e.toggleMenu()}},(0,r.h)("div",{class:"wrapper-label"},this.selectedValue?this.selectedValue:this.placeholder),(0,r.h)("div",{class:"wrapper-close-button"},(0,r.h)("ifx-icon",{icon:"chevrondown12"}))),(0,r.h)("slot",{name:"menu"}))}},{key:"el",get:function(){return(0,r.g)(this)}}]),e}();s.style='*{font-family:"Source Sans 3"}:host{display:inline-block}.container{position:relative}.container .wrapper{display:inline-flex;flex-direction:row;align-items:center;padding:8px 16px;gap:8px;background:#FFFFFF;border:1px solid #BFBBBB;border-radius:100px}.container .wrapper:hover{cursor:pointer;border:1px solid #575352}.container .wrapper:active{border:1px solid #0A8276}.container .wrapper .wrapper-label{font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;display:flex;align-items:center;color:#1D1D1D;flex:none;order:0;flex-grow:0}.container .wrapper .wrapper-close-button ifx-icon{transition:0.3s;width:12px;height:12px}.container .wrapper .wrapper-close-button.show ifx-icon{transition:0.3s;transform:rotate(-180deg)}'}}]);
//# sourceMappingURL=314.641ae805.chunk.js.map