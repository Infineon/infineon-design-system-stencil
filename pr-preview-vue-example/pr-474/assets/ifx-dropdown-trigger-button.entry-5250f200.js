import{r as s,h as t}from"./index-ee68e9be.js";const r=":host{display:inline-block}.rotate{transition:transform 0.2s ease-in-out;transform:rotate(90deg);margin-top:0em}.icon{margin-top:0em;transition:transform 0.2s ease-in-out}",o=class{constructor(i){s(this,i),this.isOpen=!1,this.variant="solid",this.color="primary",this.size="m",this.disabled=void 0,this.hideArrow=!1}render(){return t("ifx-button",{variant:this.variant,color:this.color,size:this.size,disabled:this.disabled,class:"dropdown-trigger-button"},t("slot",null),!this.hideArrow&&t("ifx-icon",{icon:"chevron-right-12",class:`icon${this.isOpen?" rotate":""}`}))}};o.style=r;export{o as ifx_dropdown_trigger_button};
