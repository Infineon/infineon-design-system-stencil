import{r as t,h as s}from"./index-dhloGxO7.js";const a=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex;width:100%}.progress-bar{height:16px;bottom:0;right:0;top:0;left:0;display:flex;height:20px;border-radius:1px;width:100%;overflow:hidden;background-color:#EEEDED;font-family:var(--ifx-font-family, sans-serif)}.progress-bar.s{height:4px}.progress-bar .label{font-style:normal;font-size:0.875rem;font-weight:400;line-height:1.25rem;color:#FFFFFF}.progress-bar .progress{display:flex;align-items:center;justify-content:center;min-width:fit-content;height:100%;background-color:#0A8276;transition:width 0.2s ease}',i=a,o=class{constructor(e){t(this,e),this.value=0,this.showLabel=!1}valueChanged(e,r){e!==r&&(this.internalValue=e)}componentWillLoad(){this.internalValue=this.value}render(){return s("div",{key:"9357496a783f4b3e1b044ab4d706ee83e443dd58","aria-label":"a progress bar","aria-value":this.value,class:`progress-bar ${this.size}`},s("div",{key:"29fd4c791396b927456b4fc514fdbada0d03bc7f",class:"progress",style:{width:`${this.internalValue}%`}},this.showLabel&&this.size!=="s"&&this.internalValue!==0&&s("span",{key:"945e380d7991c53930f1b3ebc396cfec1bc06d31",class:"label"},`${this.internalValue}%`)))}static get watchers(){return{value:["valueChanged"]}}};o.style=i;export{o as ifx_progress_bar};
