import{r as e,h as t,H as i,g as n}from"./index-4cc1c242.js";import{c as o}from"./index-661c2409-85b2c879.js";const a="",r=class{constructor(s){e(this,s),this.variant=void 0,this.color=void 0,this.size=void 0,this.disabled=void 0,this.icon=void 0,this.href=void 0,this.target="_self",this.shape="round"}async setFocus(){this.focusableElement.focus()}componentWillLoad(){this.shape===""&&(this.shape="round")}render(){return t(i,null,this.href?t("a",{ref:s=>this.focusableElement=s,class:this.getClassNames(),href:this.disabled?void 0:this.href,target:this.target,rel:this.target==="_blank"?"noopener noreferrer":void 0},t("ifx-icon",{icon:this.icon})):t("button",{class:this.getClassNames(),type:"button"},t("ifx-icon",{icon:this.icon})))}getVariantClass(){return`${this.variant}`=="outline"?`outline-${this.color}`:`${this.variant}`=="outline-text"?`${this.color}-outline-text`:`${this.color}`}getSizeClass(){return`${this.size}`=="s"?"s":""}getClassNames(){return o("btn icon-button",`btn-${this.shape}`,this.size&&`btn-${this.getSizeClass()}`,`btn-${this.getVariantClass()}`,this.disabled?"disabled":"")}get el(){return n(this)}};r.style=a;export{r as ifx_icon_button};
