"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[4382],{"./dist/esm/ifx-list-entry.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_list_entry:()=>ListEntry});var _index_1de2e181_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-1de2e181.js");const ListEntry=class{constructor(hostRef){(0,_index_1de2e181_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxListEntryChange=(0,_index_1de2e181_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxListEntryChange",7),this.value=void 0,this.label=void 0,this.type=void 0}valueChanged(newValue){newValue?this.host.setAttribute("value","true"):this.host.removeAttribute("value")}handleFilterEntryChange(event){this.value=event.detail,this.ifxListEntryChange.emit({label:this.label,value:this.value,type:this.type})}render(){return(0,_index_1de2e181_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"3d00b78b20bd9c9311cca2abab0d0a424485c24a",class:"wrapper"},"checkbox"===this.type?(0,_index_1de2e181_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"list-entry"},(0,_index_1de2e181_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-checkbox",{size:"s",value:this.value},this.label)):(0,_index_1de2e181_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"list-entry"},(0,_index_1de2e181_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-radio-button",{size:"s",value:this.value},this.label)))}get host(){return(0,_index_1de2e181_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{value:["valueChanged"]}}};ListEntry.style=".list-entry{display:flex;align-items:center;margin-top:8px;align-self:stretch}"}}]);