import{r as i,c as o,h as e,g as n}from"./index-C3LO7PHl.js";const s=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.dropdown-item{text-decoration:none;color:#1D1D1D;display:flex;align-items:center;padding:8px 16px;gap:8px;font-family:var(--ifx-font-family)}.dropdown-item.hide{display:none}.dropdown-item span{color:#1D1D1D;font-size:16px;font-style:normal;font-weight:400;line-height:24px;}.dropdown-item.small span{font-size:14px}.dropdown-item:hover{cursor:pointer;background-color:#EEEDED}.dropdown-item:active{background-color:#BFBBBB}.icon{margin-right:4px}',r=s,a=class{constructor(t){i(this,t),this.ifxDropdownItem=o(this,"ifxDropdownItem",7),this.href="",this.target="_self",this.hide=!1,this.size="l"}handleMenuSize(t){this.size=t.detail}handleEventEmission(){this.ifxDropdownItem.emit(this.el.textContent)}render(){let t=this.href?{href:this.href,target:this.target}:{};return e("a",Object.assign({key:"d1c6f3cbd4554b1018770258e8f47419edc02352"},t,{onClick:()=>this.handleEventEmission(),class:`dropdown-item ${this.size==="s"?"small":""} ${this.hide?"hide":""}`}),this.icon&&e("ifx-icon",{key:"b814d88ad14f00b04357b5549ae5a5b24adc1b6b",class:"icon",icon:this.icon}),e("span",{key:"49587568db0c0a4f76f9fad0873a6072a698c8ad"},e("slot",{key:"ccfdb428ffa6d9053c0ff9dc3b6b39469e09f208"})))}get el(){return n(this)}};a.style=r;export{a as ifx_dropdown_item};
