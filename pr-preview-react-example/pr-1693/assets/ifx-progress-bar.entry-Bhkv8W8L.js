import{r,h as s}from"./index-CcQaIP_L.js";const t=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex;width:100%}.progress-bar{height:16px;bottom:0;right:0;top:0;left:0;display:flex;height:20px;border-radius:1px;width:100%;overflow:hidden;background-color:#EEEDED;font-family:var(--ifx-font-family, sans-serif)}.progress-bar.s{height:4px}.progress-bar .label{font-style:normal;font-size:0.875rem;font-weight:400;line-height:1.25rem;color:#FFFFFF}.progress-bar .progress{display:flex;align-items:center;justify-content:center;min-width:fit-content;height:100%;background-color:#0A8276;transition:width 0.2s ease}',i=t,o=class{constructor(e){r(this,e),this.value=0,this.showLabel=!1}valueChanged(e,a){e!==a&&(this.internalValue=e)}componentWillLoad(){this.internalValue=this.value}render(){return s("div",{key:"e4ba3d7984ad1444c1e07edbfb7623a5471c059e","aria-label":"a progress bar","aria-value":this.value,class:`progress-bar ${this.size}`},s("div",{key:"995d64992f539dae4deae9dfcdc04a93f9c3b255",class:"progress",style:{width:`${this.internalValue}%`}},this.showLabel&&this.size!=="s"&&this.internalValue!==0&&s("span",{key:"f7cc21c3da249ef83d26d43fac35aa6efe69a425",class:"label"},`${this.internalValue}%`)))}static get watchers(){return{value:["valueChanged"]}}};o.style=i;export{o as ifx_progress_bar};
