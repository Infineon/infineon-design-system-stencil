import{r as n,h as t}from"./index-a6ad7336.js";const r='*{font-family:"Source Sans 3"}.navbar__menu-item{text-decoration:none;color:#1D1D1D;display:flex;align-items:center;padding:8px 16px;gap:8px}.navbar__menu-item.hide{display:none}.navbar__menu-item span{color:#1D1D1D;font-family:Source Sans 3;font-size:16px;font-style:normal;font-weight:400;line-height:24px;}.navbar__menu-item:hover{cursor:pointer;background-color:#EEEDED}.navbar__menu-item:active{background-color:#BFBBBB}.icon{margin-right:4px}',a=class{constructor(e){n(this,e),this.href="",this.target="_self",this.hide=!1}render(){let e=this.href?{href:this.href,target:this.target}:{};return t("a",Object.assign({},e,{class:`navbar__menu-item  ${this.hide?"hide":""}`}),t("span",null,t("slot",null)))}};a.style=r;export{a as ifx_navbar_menu_item};