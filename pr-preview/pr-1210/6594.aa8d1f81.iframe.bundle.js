"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[6594],{"./dist/esm/ifx-filter-search.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_filter_search:()=>FilterSearch});var _index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-77e9cc30.js");const FilterSearch=class{constructor(hostRef){(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxFilterSearchChange=(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxFilterSearchChange",7),this.filterName=void 0,this.disabled=!1,this.filterValue=void 0}valueChanged(newValue){this.host.setAttribute("value",newValue.toString())}handleFilterSearchChange(event){this.filterValue=event.detail,this.ifxFilterSearchChange.emit({filterName:this.filterName,filterValue:this.filterValue})}render(){return(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"6dc51b042dbb8f6db94cb50201a9d3ba85bab528",class:"filter-search-wrapper"},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"2b8441c143f088a1fc11e06ac3782f7add6075e6",class:"filter-name"},this.filterName),(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-search-field",{key:"14ab3e3dce99c81b607186f82539294d17bef0db",disabled:this.disabled,value:this.filterValue}))}get host(){return(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{value:["valueChanged"]}}};FilterSearch.style=".filter-search-wrapper{display:flex;padding:12px 16px 16px 16px;flex-direction:column;align-items:flex-start;align-self:stretch;gap:4px;font-family:var(--ifx-font-family);background:#EEEDED}.filter-name{font-size:1rem;line-height:1.5rem;font-weight:600}"}}]);