import{r as i,h as t}from"./index-CIVEV-se.js";const s=":host{display:inline-block}.rotate{transition:transform 0.2s ease-in-out;transform:rotate(-180deg);margin-top:0em}.icon{margin-top:0em;transition:transform 0.2s ease-in-out}",n=s,o=class{constructor(e){i(this,e),this.isOpen=!1,this.theme="default",this.variant=void 0,this.size="m",this.disabled=void 0,this.hideArrow=!1}render(){return t("ifx-button",{key:"753cd84c34d78d945ddeb3b770ed149e8ac8682d",variant:this.variant,theme:this.theme,size:this.size,disabled:this.disabled,class:"dropdown-trigger-button"},t("slot",{key:"aaabecb9bacdbd0f41cafbe93e3e12033d7f82c7"}),!this.hideArrow&&t("ifx-icon",{key:"7d87208cf476fb5b64b8256a76d7aac2e0933579",icon:"chevron-down-12",class:`icon${this.isOpen?" rotate":""}`}))}};o.style=n;export{o as ifx_dropdown_trigger_button};
