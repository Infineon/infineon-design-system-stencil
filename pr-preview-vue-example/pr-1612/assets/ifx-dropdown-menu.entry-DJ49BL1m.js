import{r as l,c as n,h as s,g as a}from"./index-CYRe0wqi.js";const p=":host{position:relative;z-index:1000}.dropdown-menu{display:none;visibility:hidden;flex-direction:column;width:224px;max-height:289px;min-width:224px;overflow-y:auto;background:#FFFFFF;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843);border:1px solid #EEEDED;padding:8px 0px;font-family:var(--ifx-font-family)}.dropdown-menu.small{max-height:266px;max-width:186px;overflow-y:auto}.dropdown-menu.hideTopPadding{padding-top:0px}.dropdown-menu.show{display:flex;visibility:visible}",h=p,m=class{constructor(e){l(this,e),this.menuSize=n(this,"menuSize",7),this.ifxDropdownMenuItem=n(this,"ifxDropdownMenuItem",7),this.isOpen=!1,this.size="l",this.hideTopPadding=!1,this.filteredItems=[]}handleMenuFilter(e){const t=e.detail;this.filterDropdownItems(t)}handleDropdownItemValueEmission(e){this.ifxDropdownMenuItem.emit(e.detail)}filterDropdownItems(e){const t=Array.from(this.el.querySelectorAll("ifx-dropdown-item"));let i,d,r=e.toUpperCase();for(let o=0;o<t.length;o++)i=t[o],d=i.textContent||i.innerText,d.toUpperCase().indexOf(r)>-1?i.setAttribute("hide",!1):i.setAttribute("hide",!0)}componentWillUpdate(){this.menuSize.emit(this.size)}componentWillLoad(){this.filteredItems=Array.from(this.el.querySelectorAll("ifx-dropdown-item"));const e=this.el.querySelector("ifx-search-field"),t=this.el.querySelector("ifx-dropdown-header");e||t?this.hideTopPadding=!0:this.hideTopPadding=!1}render(){return s("div",{key:"6a0875682a7dbdf9734794347bd64148b4f2c8b5",class:`dropdown-menu 
      ${this.isOpen?"show":""} 
      ${this.hideTopPadding?"hideTopPadding":""}
      ${this.size==="s"?"small":""}`},s("slot",{key:"0a89ee2b042f28395f977172d003575b1d080611"}))}get el(){return a(this)}};m.style=h;export{m as ifx_dropdown_menu};
