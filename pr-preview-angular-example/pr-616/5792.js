"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[5792],{5792:(o,r,t)=>{t.r(r),t.d(r,{ifx_progress_bar:()=>i});var e=t(4134);const i=class{constructor(s){(0,e.r)(this,s),this.value=0,this.label="",this.size=void 0,this.showLabel=!1,this.internalValue=void 0}valueChanged(s,l){s!==l&&(this.internalValue=s)}componentWillLoad(){this.internalValue=this.value}render(){return(0,e.h)("div",{class:`progress-bar ${this.size}`},(0,e.h)("div",{class:"progress",style:{width:`${this.internalValue}%`}},this.showLabel&&"s"!==this.size&&(0,e.h)("span",{class:"label"},`${this.internalValue}%`)))}static get watchers(){return{value:["valueChanged"]}}};i.style=':host{display:flex;width:100%}.progress-bar{height:16px;bottom:0;right:0;top:0;left:0;display:flex;height:16px;border-radius:1px;width:100%;overflow:hidden}.progress-bar .label{height:17px;border-radius:1px 0px 0px 1px}.progress-bar.s{height:4px}.progress-bar .progress{height:100%;background-color:#0A8276;position:relative}.progress-bar .progress:after{content:"";background-color:#EEEDED;height:100%;position:absolute}.progress-bar .label{display:flex;align-items:center;justify-content:center;position:absolute;font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.25rem;font-family:"Source Sans 3";color:#FFFFFF;top:0;bottom:0;left:0;right:0}'}}]);