import{r,h as s}from"./index-Bv40tCEP.js";const t=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex;width:100%}.progress-bar{height:16px;bottom:0;right:0;top:0;left:0;display:flex;height:20px;border-radius:1px;width:100%;overflow:hidden;background-color:#EEEDED;font-family:var(--ifx-font-family, sans-serif)}.progress-bar.s{height:4px}.progress-bar .label{font-style:normal;font-size:0.875rem;font-weight:400;line-height:1.25rem;color:#FFFFFF}.progress-bar .progress{display:flex;align-items:center;justify-content:center;min-width:fit-content;height:100%;background-color:#0A8276;transition:width 0.2s ease}',i=t,l=class{constructor(e){r(this,e),this.value=0,this.size=void 0,this.showLabel=!1,this.internalValue=void 0}valueChanged(e,a){e!==a&&(this.internalValue=e)}componentWillLoad(){this.internalValue=this.value}render(){return s("div",{key:"0ff795929756b1595746d14884de3a3d867cd1a3","aria-label":"a progress bar","aria-value":this.value,class:`progress-bar ${this.size}`},s("div",{key:"07a41eb8ad3b9a7447ff267c844585c386f9a0fd",class:"progress",style:{width:`${this.internalValue}%`}},this.showLabel&&this.size!=="s"&&this.internalValue!==0&&s("span",{key:"e5f1e82c316f7cf7a35ae1f7c85a16c4a7fd7236",class:"label"},`${this.internalValue}%`)))}static get watchers(){return{value:["valueChanged"]}}};l.style=i;export{l as ifx_progress_bar};
