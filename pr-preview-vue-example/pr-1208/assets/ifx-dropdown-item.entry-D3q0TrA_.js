import{r as i,c as o,h as t,g as n}from"./index-aTk1u9YA.js";const s=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.dropdown-item{text-decoration:none;color:#1D1D1D;display:flex;align-items:center;padding:8px 16px;gap:8px;font-family:var(--ifx-font-family)}.dropdown-item.hide{display:none}.dropdown-item span{color:#1D1D1D;font-size:16px;font-style:normal;font-weight:400;line-height:24px;}.dropdown-item.small span{font-size:14px}.dropdown-item:hover{cursor:pointer;background-color:#EEEDED}.dropdown-item:active{background-color:#BFBBBB}.icon{margin-right:4px}',r=s,d=class{constructor(e){i(this,e),this.ifxDropdownItem=o(this,"ifxDropdownItem",7),this.icon=void 0,this.href="",this.target="_self",this.hide=!1,this.size="l"}handleMenuSize(e){this.size=e.detail}handleEventEmission(){this.ifxDropdownItem.emit(this.el.textContent)}render(){let e=this.href?{href:this.href,target:this.target}:{};return t("a",Object.assign({key:"52dd7ffc25f407770c46f97f8251c887dcd00c98"},e,{onClick:()=>this.handleEventEmission(),class:`dropdown-item ${this.size==="s"?"small":""} ${this.hide?"hide":""}`}),this.icon&&t("ifx-icon",{class:"icon",icon:this.icon}),t("span",{key:"73d3f7a3ae1c1ba54e6e9c7a77dc271559d4713a"},t("slot",{key:"648d184b081debb9059dd3f37bc1e7a9ff3a34ec"})))}get el(){return n(this)}};d.style=r;export{d as ifx_dropdown_item};
