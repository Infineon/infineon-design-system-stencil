import{r,h as s}from"./index-D2z5bvvL.js";const t=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex;width:100%}.progress-bar{height:16px;bottom:0;right:0;top:0;left:0;display:flex;height:20px;border-radius:1px;width:100%;overflow:hidden;background-color:#EEEDED;font-family:var(--ifx-font-family, sans-serif)}.progress-bar.s{height:4px}.progress-bar .label{font-style:normal;font-size:0.875rem;font-weight:400;line-height:1.25rem;color:#FFFFFF}.progress-bar .progress{display:flex;align-items:center;justify-content:center;min-width:fit-content;height:100%;background-color:#0A8276;transition:width 0.2s ease}',i=t,o=class{constructor(e){r(this,e),this.value=0,this.showLabel=!1}valueChanged(e,a){e!==a&&(this.internalValue=e)}componentWillLoad(){this.internalValue=this.value}render(){return s("div",{key:"3f68729d3447897fb8b0d6ac8e5cfa4b4d1bbd0e","aria-label":"a progress bar","aria-value":this.value,class:`progress-bar ${this.size}`},s("div",{key:"86abff96eb8a1260c96e6736f90fe4e79e2a5a03",class:"progress",style:{width:`${this.internalValue}%`}},this.showLabel&&this.size!=="s"&&this.internalValue!==0&&s("span",{key:"55d35acd3cc70a2b0a1f9058569f1a0a7751990e",class:"label"},`${this.internalValue}%`)))}static get watchers(){return{value:["valueChanged"]}}};o.style=i;export{o as ifx_progress_bar};
