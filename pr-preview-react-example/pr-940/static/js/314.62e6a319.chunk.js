"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[314],{314:(e,o,i)=>{i.r(o),i.d(o,{ifx_chip:()=>r});var t=i(7322);const r=class{constructor(e){(0,t.r)(this,e),this.ifxDropdownMenu=(0,t.c)(this,"ifxDropdownMenu",7),this.placeholder=void 0,this.selectedValue=""}handleOutsideClick(e){e.composedPath().includes(this.el)||this.closedMenu()}handleDropdownItemValueEmission(e){this.selectedValue=e.detail,this.ifxDropdownMenu.emit(e.detail),this.toggleMenu()}getDropdownMenu(){return this.el.querySelector("ifx-dropdown-menu")}closedMenu(){this.getDropdownMenu().isOpen=!1}toggleMenu(){let e=this.getDropdownMenu();e.isOpen=!e.isOpen,this.toggleCloseIcon()}toggleCloseIcon(){this.el.shadowRoot.querySelector(".wrapper-close-button").classList.toggle("show")}render(){return(0,t.h)("div",{"aria-value":this.selectedValue,"aria-label":"chip with a dropdown menu",class:"dropdown container"},(0,t.h)("div",{class:"wrapper",onClick:()=>this.toggleMenu()},(0,t.h)("div",{class:"wrapper-label"},this.selectedValue?this.selectedValue:this.placeholder),(0,t.h)("div",{class:"wrapper-close-button"},(0,t.h)("ifx-icon",{icon:"chevrondown12"}))),(0,t.h)("slot",{name:"menu"}))}get el(){return(0,t.g)(this)}};r.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block}.container{position:relative;font-family:var(--ifx-font-family)}.container .wrapper{display:inline-flex;flex-direction:row;align-items:center;padding:8px 16px;gap:8px;background:#FFFFFF;border:1px solid #BFBBBB;border-radius:100px}.container .wrapper:hover{cursor:pointer;border:1px solid #575352}.container .wrapper:active{border:1px solid #0A8276}.container .wrapper .wrapper-label{font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;display:flex;align-items:center;color:#1D1D1D;flex:none;order:0;flex-grow:0}.container .wrapper .wrapper-close-button ifx-icon{transition:0.3s;width:12px;height:12px}.container .wrapper .wrapper-close-button.show ifx-icon{transition:0.3s;transform:rotate(-180deg)}'}}]);
//# sourceMappingURL=314.62e6a319.chunk.js.map