"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[2750],{2750:function(e,i,t){t.r(i),t.d(i,{ifx_dropdown_menu:function(){return r}});var n=t(5671),o=t(3144),d=t(1091),r=function(){function e(i){(0,n.Z)(this,e),(0,d.r)(this,i),this.menuSize=(0,d.c)(this,"menuSize",7),this.ifxDropdownMenuItem=(0,d.c)(this,"ifxDropdownMenuItem",7),this.isOpen=!1,this.size="l",this.hideTopPadding=!1,this.filteredItems=[]}return(0,o.Z)(e,[{key:"handleMenuFilter",value:function(e){var i=e.detail;this.filterDropdownItems(i)}},{key:"handleDropdownItemValueEmission",value:function(e){this.ifxDropdownMenuItem.emit(e.detail)}},{key:"filterDropdownItems",value:function(e){for(var i,t=Array.from(this.el.querySelectorAll("ifx-dropdown-item")),n=e.toUpperCase(),o=0;o<t.length;o++)((i=t[o]).textContent||i.innerText).toUpperCase().indexOf(n)>-1?i.setAttribute("hide",!1):i.setAttribute("hide",!0)}},{key:"componentWillUpdate",value:function(){this.menuSize.emit(this.size)}},{key:"componentWillLoad",value:function(){this.filteredItems=Array.from(this.el.querySelectorAll("ifx-dropdown-item"));var e=this.el.querySelector("ifx-search-field"),i=this.el.querySelector("ifx-dropdown-header");this.hideTopPadding=!(!e&&!i)}},{key:"render",value:function(){return(0,d.h)("div",{class:"dropdown-menu \n      ".concat(this.isOpen?"show":""," \n      ").concat(this.hideTopPadding?"hideTopPadding":"","\n      ").concat("s"===this.size?"small":"")},(0,d.h)("slot",null))}},{key:"el",get:function(){return(0,d.g)(this)}}]),e}();r.style=":host{z-index:9999}.dropdown-menu{display:none;visibility:hidden;flex-direction:column;width:224px;max-height:289px;min-width:224px;overflow-y:auto;background:#FFFFFF;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843);border:1px solid #EEEDED;padding:8px 0px}.dropdown-menu.small{max-height:266px;max-width:186px;overflow-y:auto}.dropdown-menu.hideTopPadding{padding-top:0px}.dropdown-menu.show{display:flex;visibility:visible}"}}]);
//# sourceMappingURL=2750.70d5644e.chunk.js.map