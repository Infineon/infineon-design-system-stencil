import{r as i,c as o,h as t,g as n}from"./index-BZzd9WRv.js";const s=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.dropdown-item{text-decoration:none;color:#1D1D1D;display:flex;align-items:center;padding:8px 16px;gap:8px;font-family:var(--ifx-font-family)}.dropdown-item.hide{display:none}.dropdown-item span{color:#1D1D1D;font-size:16px;font-style:normal;font-weight:400;line-height:24px;}.dropdown-item.small span{font-size:14px}.dropdown-item:hover{cursor:pointer;background-color:#EEEDED}.dropdown-item:active{background-color:#BFBBBB}.icon{margin-right:4px}',r=s,a=class{constructor(e){i(this,e),this.ifxDropdownItem=o(this,"ifxDropdownItem",7),this.href="",this.target="_self",this.hide=!1,this.size="l"}handleMenuSize(e){this.size=e.detail}handleEventEmission(){this.ifxDropdownItem.emit(this.el.textContent)}render(){let e=this.href?{href:this.href,target:this.target}:{};return t("a",Object.assign({key:"4ef5a3e4b163c7010a4a9b35224af903f166f170"},e,{onClick:()=>this.handleEventEmission(),class:`dropdown-item ${this.size==="s"?"small":""} ${this.hide?"hide":""}`}),this.icon&&t("ifx-icon",{key:"1426e1b684f50c722d3b1050133c62e595814253",class:"icon",icon:this.icon}),t("span",{key:"171b469a19c363806630e383d02c526a95d232f7"},t("slot",{key:"e8af940e507f5fcba88c3848c3aaa1ca656489ce"})))}get el(){return n(this)}};a.style=r;export{a as ifx_dropdown_item};
