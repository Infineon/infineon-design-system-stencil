"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[4152],{4152:(u,s,d)=>{d.r(s),d.d(s,{ifx_dropdown_menu:()=>p});var i=d(4138);const p=(()=>{let r=class{constructor(e){(0,i.r)(this,e),this.menuSize=(0,i.c)(this,"menuSize",7),this.ifxDropdownMenuItem=(0,i.c)(this,"ifxDropdownMenuItem",7),this.isOpen=!1,this.size="l",this.hideTopPadding=!1,this.filteredItems=[]}handleMenuFilter(e){this.filterDropdownItems(e.detail)}handleDropdownItemValueEmission(e){this.ifxDropdownMenuItem.emit(e.detail)}filterDropdownItems(e){const t=Array.from(this.el.querySelectorAll("ifx-dropdown-item"));let o,l,h=e.toUpperCase();for(let n=0;n<t.length;n++)o=t[n],l=o.textContent||o.innerText,l.toUpperCase().indexOf(h)>-1?o.setAttribute("hide",!1):o.setAttribute("hide",!0)}componentWillUpdate(){this.menuSize.emit(this.size)}componentWillLoad(){this.filteredItems=Array.from(this.el.querySelectorAll("ifx-dropdown-item"));const e=this.el.querySelector("ifx-search-field"),t=this.el.querySelector("ifx-dropdown-header");this.hideTopPadding=!(!e&&!t)}render(){return(0,i.h)("div",{key:"6604ba596a0da542ae0d68c217c25a7951d0cfde",class:`dropdown-menu \n      ${this.isOpen?"show":""} \n      ${this.hideTopPadding?"hideTopPadding":""}\n      ${"s"===this.size?"small":""}`},(0,i.h)("slot",{key:"0fceab1c429ec43ce2c25e28703c120fee46c9d6"}))}get el(){return(0,i.g)(this)}};return r.style=":host{position:relative;z-index:1000}.dropdown-menu{display:none;visibility:hidden;flex-direction:column;width:224px;max-height:289px;min-width:224px;overflow-y:auto;background:#FFFFFF;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843);border:1px solid #EEEDED;padding:8px 0px;font-family:var(--ifx-font-family)}.dropdown-menu.small{max-height:266px;max-width:186px;overflow-y:auto}.dropdown-menu.hideTopPadding{padding-top:0px}.dropdown-menu.show{display:flex;visibility:visible;position:absolute}",r})()}}]);