import{r,c as o,h as s}from"./index-6fe8e799.js";const a='.progress-bar{height:16px;border-radius:1px;bottom:0;right:0;top:0;left:0}.progress-bar .label{height:17px;border-radius:1px 0px 0px 1px}.progress-bar.s{height:4px}.progress-bar .progress{height:100%;background-color:#0A8276;position:relative}.progress-bar .progress:after{content:"";background-color:#EEEDED;height:100%;position:absolute}.progress-bar .label{display:flex;align-items:center;justify-content:center;position:absolute;font-style:normal;font-weight:400;font-size:14px;line-height:20px;font-family:"Source Sans Pro";color:#fff;top:0;bottom:0;left:0;right:0}',i=class{constructor(e){r(this,e),this.ifxChange=o(this,"ifxChange",7),this.value=0,this.label="",this.size=void 0,this.showLabel=!1}onValueChanged(e){const t=new CustomEvent("ifx-change",{bubbles:!0,composed:!0,detail:e});this.ifxChange.emit(t)}render(){return s("div",{class:`progress-bar ${this.size}`},s("div",{class:"progress",style:{width:`${this.value}%`}},this.showLabel&&this.size!=="s"&&s("span",{class:"label"},`${this.value}%`)))}static get watchers(){return{value:["onValueChanged"]}}};i.style=a;export{i as ifx_progress_bar};
