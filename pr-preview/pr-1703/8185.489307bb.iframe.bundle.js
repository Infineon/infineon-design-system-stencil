"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[8185],{"./dist/esm/ifx-progress-bar.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_progress_bar:()=>ProgressBar});var _index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-f6e95f3d.js");const ProgressBar=class{constructor(hostRef){(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.value=0,this.showLabel=!1}valueChanged(newValue,oldValue){newValue!==oldValue&&(this.internalValue=newValue)}componentWillLoad(){this.internalValue=this.value}render(){return(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"08f1b959803b48ce212fcabd9bd1daf8987ebb8d","aria-label":"a progress bar","aria-value":this.value,class:`progress-bar ${this.size}`},(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"6e4c7d9c69c917c0986c6793a86894f7f94e0681",class:"progress",style:{width:`${this.internalValue}%`}},this.showLabel&&"s"!==this.size&&0!==this.internalValue&&(0,_index_f6e95f3d_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"88e5e1d3fb79ec93262b38ddec839002281de965",class:"label"},`${this.internalValue}%`)))}static get watchers(){return{value:["valueChanged"]}}};ProgressBar.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:flex;width:100%}.progress-bar{height:16px;bottom:0;right:0;top:0;left:0;display:flex;height:20px;border-radius:1px;width:100%;overflow:hidden;background-color:#EEEDED;font-family:var(--ifx-font-family, sans-serif)}.progress-bar.s{height:4px}.progress-bar .label{font-style:normal;font-size:0.875rem;font-weight:400;line-height:1.25rem;color:#FFFFFF}.progress-bar .progress{display:flex;align-items:center;justify-content:center;min-width:fit-content;height:100%;background-color:#0A8276;transition:width 0.2s ease}'}}]);