import{r as i,c as o,h as t,g as n}from"./index-Dj0YYJHY.js";const s=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.dropdown-item{text-decoration:none;color:#1D1D1D;display:flex;align-items:center;padding:8px 16px;gap:8px;font-family:var(--ifx-font-family)}.dropdown-item.hide{display:none}.dropdown-item span{color:#1D1D1D;font-size:16px;font-style:normal;font-weight:400;line-height:24px;}.dropdown-item.small span{font-size:14px}.dropdown-item:hover{cursor:pointer;background-color:#EEEDED}.dropdown-item:active{background-color:#BFBBBB}.icon{margin-right:4px}',a=s,r=class{constructor(e){i(this,e),this.ifxDropdownItem=o(this,"ifxDropdownItem",7),this.icon=void 0,this.href="",this.target="_self",this.hide=!1,this.size="l"}handleMenuSize(e){this.size=e.detail}handleEventEmission(){this.ifxDropdownItem.emit(this.el.textContent)}render(){let e=this.href?{href:this.href,target:this.target}:{};return t("a",Object.assign({key:"3c7e061f9508b493bd785551a4f7a0c4d4d28089"},e,{onClick:()=>this.handleEventEmission(),class:`dropdown-item ${this.size==="s"?"small":""} ${this.hide?"hide":""}`}),this.icon&&t("ifx-icon",{key:"91743f629c462d98aab8ca751093da0eb1accc4c",class:"icon",icon:this.icon}),t("span",{key:"832a9090c808cca9432ee38303f086f5ff5b7670"},t("slot",{key:"cc910ad035b750195b38278391a334dd1aa451ea"})))}get el(){return n(this)}};r.style=a;export{r as ifx_dropdown_item};
