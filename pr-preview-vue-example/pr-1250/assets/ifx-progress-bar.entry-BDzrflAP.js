import{r as t,h as s}from"./index-Dbu0QXeh.js";const a=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex;width:100%}.progress-bar{height:16px;bottom:0;right:0;top:0;left:0;display:flex;height:16px;border-radius:1px;width:100%;overflow:hidden;background-color:#EEEDED;font-family:var(--ifx-font-family, sans-serif)}.progress-bar .label{height:17px;border-radius:1px 0px 0px 1px}.progress-bar.s{height:4px}.progress-bar .progress{height:100%;background-color:#0A8276;position:relative;transition:width 0.2s ease}.progress-bar .progress:after{content:"";background-color:#EEEDED;height:100%;position:absolute}.progress-bar .label{display:flex;align-items:center;justify-content:center;position:absolute;font-style:normal;font-size:0.875rem;font-weight:400;line-height:1.25rem;color:#FFFFFF;top:0;bottom:0;left:0;right:0}',i=a,o=class{constructor(e){t(this,e),this.value=0,this.label="",this.size=void 0,this.showLabel=!1,this.internalValue=void 0}valueChanged(e,r){e!==r&&(this.internalValue=e)}componentWillLoad(){this.internalValue=this.value}render(){return s("div",{key:"73976c49290e3ae90a2508682f2d8e635074a1bf","aria-label":"a progress bar","aria-value":this.value,class:`progress-bar ${this.size}`},s("div",{key:"f2783125c3fc1c496ec0c11e45ad6795878398f9",class:"progress",style:{width:`${this.internalValue===0?0:Math.max(2,this.internalValue)}%`}},this.showLabel&&this.size!=="s"&&this.internalValue!==0&&s("span",{class:"label"},`${this.internalValue}%`)))}static get watchers(){return{value:["valueChanged"]}}};o.style=i;export{o as ifx_progress_bar};
