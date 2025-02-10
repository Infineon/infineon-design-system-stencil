"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[3499],{"./dist/esm/ifx-set-filter.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_set_filter:()=>SetFilter});var _index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-adb4dbd9.js");const SetFilter=class{constructor(hostRef){(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxFilterSelect=(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxFilterSelect",7),this.type="text",this.filterValues=[]}handleTextInputChange(event){const value=event.target.value;this.ifxFilterSelect.emit({filterName:this.filterName,filterValues:[value],type:this.type})}handleSingleSelectChange(event){const value=event.detail.value;this.ifxFilterSelect.emit({filterName:this.filterName,filterValues:[value],type:this.type})}handleMultiselectOptionChange(event){this.filterValues=event.detail,this.ifxFilterSelect.emit({filterName:this.filterName,filterValues:this.filterValues,type:this.type})}render(){switch(this.type){case"text":return(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-text-field",{error:!1,disabled:!1,placeholder:this.placeholder,onIfxInput:event=>this.handleTextInputChange(event)},this.filterLabel);case"single-select":return(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-select",{placeholder:"true","search-enabled":"true","search-placeholder-value":"Search...",onIfxSelect:event=>this.handleSingleSelectChange(event),"ifx-placeholder-value":this.placeholder,"ifx-label":this.filterLabel,"ifx-options":this.options});case"multi-select":return(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-multiselect",{label:this.filterLabel,placeholder:this.placeholder,options:this.options,onIfxSelect:event=>this.handleMultiselectOptionChange(event)});default:return null}}};SetFilter.style=""}}]);