import{r as i,c as o,h as t,g as n}from"./index-DB3IbFp1.js";const s=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.dropdown-item{text-decoration:none;color:#1D1D1D;display:flex;align-items:center;padding:8px 16px;gap:8px;font-family:var(--ifx-font-family)}.dropdown-item.hide{display:none}.dropdown-item span{color:#1D1D1D;font-size:16px;font-style:normal;font-weight:400;line-height:24px;}.dropdown-item.small span{font-size:14px}.dropdown-item:hover{cursor:pointer;background-color:#EEEDED}.dropdown-item:active{background-color:#BFBBBB}.icon{margin-right:4px}',r=s,a=class{constructor(e){i(this,e),this.ifxDropdownItem=o(this,"ifxDropdownItem",7),this.href="",this.target="_self",this.hide=!1,this.size="l"}handleMenuSize(e){this.size=e.detail}handleEventEmission(){this.ifxDropdownItem.emit(this.el.textContent)}render(){let e=this.href?{href:this.href,target:this.target}:{};return t("a",Object.assign({key:"5ec61a932268bd6bc279546d2718347deec616f7"},e,{onClick:()=>this.handleEventEmission(),class:`dropdown-item ${this.size==="s"?"small":""} ${this.hide?"hide":""}`}),this.icon&&t("ifx-icon",{key:"f8644bd37348ec718f54657faaf912d48b2b696d",class:"icon",icon:this.icon}),t("span",{key:"c3643953f6fcf084a3d033df50b79bc8de562640"},t("slot",{key:"624c93095768745e9af06b60f7a7f5fcdbe0d05e"})))}get el(){return n(this)}};a.style=r;export{a as ifx_dropdown_item};
