"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[9584],{"./dist/esm/ifx-progress-bar.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_progress_bar:()=>ProgressBar});var _index_f0ed321b_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-f0ed321b.js");const ProgressBar=class{constructor(hostRef){(0,_index_f0ed321b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.value=0,this.label="",this.size=void 0,this.showLabel=!1,this.internalValue=void 0}valueChanged(newValue,oldValue){newValue!==oldValue&&(this.internalValue=newValue)}componentWillLoad(){this.internalValue=this.value}render(){return(0,_index_f0ed321b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"4fe4914480b360a5d5d92cef651de6f2538625ef","aria-label":"a progress bar","aria-value":this.value,class:`progress-bar ${this.size}`},(0,_index_f0ed321b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"562525b783303c0e27b245fea1b73c26dde111f7",class:"progress",style:{width:`${this.internalValue}%`}},this.showLabel&&"s"!==this.size&&(0,_index_f0ed321b_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"label"},`${this.internalValue}%`)))}static get watchers(){return{value:["valueChanged"]}}};ProgressBar.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex;width:100%}.progress-bar{height:16px;bottom:0;right:0;top:0;left:0;display:flex;height:16px;border-radius:1px;width:100%;overflow:hidden;background-color:#EEEDED;font-family:var(--ifx-font-family, sans-serif)}.progress-bar .label{height:17px;border-radius:1px 0px 0px 1px}.progress-bar.s{height:4px}.progress-bar .progress{height:100%;background-color:#0A8276;position:relative;transition:width 0.2s ease}.progress-bar .progress:after{content:"";background-color:#EEEDED;height:100%;position:absolute}.progress-bar .label{display:flex;align-items:center;justify-content:center;position:absolute;font-style:normal;font-size:0.875rem;font-weight:400;line-height:1.25rem;color:#FFFFFF;top:0;bottom:0;left:0;right:0}'}}]);