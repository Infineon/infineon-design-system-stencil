"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[2750],{2750:(e,i,t)=>{t.r(i),t.d(i,{ifx_dropdown_menu:()=>n});var o=t(7322);const n=class{constructor(e){(0,o.r)(this,e),this.menuSize=(0,o.c)(this,"menuSize",7),this.ifxDropdownMenuItem=(0,o.c)(this,"ifxDropdownMenuItem",7),this.isOpen=!1,this.size="l",this.hideTopPadding=!1,this.filteredItems=[]}handleMenuFilter(e){const i=e.detail;this.filterDropdownItems(i)}handleDropdownItemValueEmission(e){this.ifxDropdownMenuItem.emit(e.detail)}filterDropdownItems(e){const i=Array.from(this.el.querySelectorAll("ifx-dropdown-item"));let t,o,n=e.toUpperCase();for(let d=0;d<i.length;d++)t=i[d],o=t.textContent||t.innerText,o.toUpperCase().indexOf(n)>-1?t.setAttribute("hide",!1):t.setAttribute("hide",!0)}componentWillUpdate(){this.menuSize.emit(this.size)}componentWillLoad(){this.filteredItems=Array.from(this.el.querySelectorAll("ifx-dropdown-item"));const e=this.el.querySelector("ifx-search-field"),i=this.el.querySelector("ifx-dropdown-header");this.hideTopPadding=!(!e&&!i)}render(){return(0,o.h)("div",{class:"dropdown-menu \n      ".concat(this.isOpen?"show":""," \n      ").concat(this.hideTopPadding?"hideTopPadding":"","\n      ").concat("s"===this.size?"small":"")},(0,o.h)("slot",null))}get el(){return(0,o.g)(this)}};n.style=":host{position:relative;z-index:1000}.dropdown-menu{display:none;visibility:hidden;flex-direction:column;width:224px;max-height:289px;min-width:224px;overflow-y:auto;background:#FFFFFF;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843);border:1px solid #EEEDED;padding:8px 0px}.dropdown-menu.small{max-height:266px;max-width:186px;overflow-y:auto}.dropdown-menu.hideTopPadding{padding-top:0px}.dropdown-menu.show{display:flex;visibility:visible}"}}]);
//# sourceMappingURL=2750.6f91edcf.chunk.js.map