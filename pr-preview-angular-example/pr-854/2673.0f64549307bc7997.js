"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[2673],{2673:(a,n,d)=>{d.r(n),d.d(n,{ifx_dropdown_menu:()=>l});var i=d(9279);const l=class{constructor(e){(0,i.r)(this,e),this.menuSize=(0,i.c)(this,"menuSize",7),this.ifxDropdownMenuItem=(0,i.c)(this,"ifxDropdownMenuItem",7),this.isOpen=!1,this.size="l",this.hideTopPadding=!1,this.filteredItems=[]}handleMenuFilter(e){this.filterDropdownItems(e.detail)}handleDropdownItemValueEmission(e){this.ifxDropdownMenuItem.emit(e.detail)}filterDropdownItems(e){const t=Array.from(this.el.querySelectorAll("ifx-dropdown-item"));let o,r,h=e.toUpperCase();for(let s=0;s<t.length;s++)o=t[s],r=o.textContent||o.innerText,r.toUpperCase().indexOf(h)>-1?o.setAttribute("hide",!1):o.setAttribute("hide",!0)}componentWillUpdate(){this.menuSize.emit(this.size)}componentWillLoad(){this.filteredItems=Array.from(this.el.querySelectorAll("ifx-dropdown-item"));const e=this.el.querySelector("ifx-search-field"),t=this.el.querySelector("ifx-dropdown-header");this.hideTopPadding=!(!e&&!t)}render(){return(0,i.h)("div",{class:`dropdown-menu \n      ${this.isOpen?"show":""} \n      ${this.hideTopPadding?"hideTopPadding":""}\n      ${"s"===this.size?"small":""}`},(0,i.h)("slot",null))}get el(){return(0,i.g)(this)}};l.style=":host{position:relative;z-index:1000}.dropdown-menu{display:none;visibility:hidden;flex-direction:column;width:224px;max-height:289px;min-width:224px;overflow-y:auto;background:#FFFFFF;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843);border:1px solid #EEEDED;padding:8px 0px;font-family:var(--ifx-font-family)}.dropdown-menu.small{max-height:266px;max-width:186px;overflow-y:auto}.dropdown-menu.hideTopPadding{padding-top:0px}.dropdown-menu.show{display:flex;visibility:visible}"}}]);