"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[6594],{"./dist/esm/ifx-filter-search.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_filter_search:()=>FilterSearch});var _index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-77e9cc30.js");const FilterSearch=class{constructor(hostRef){(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxFilterSearchChange=(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxFilterSearchChange",7),this.filterName=void 0,this.disabled=!1,this.filterValue=void 0,this.filterKey=void 0,this.showDeleteIcon=!1}valueChanged(newValue){this.host.setAttribute("value",newValue.toString())}handleFilterSearchChange(event){this.filterValue=event.detail,this.showDeleteIcon=""!==this.filterValue,this.ifxFilterSearchChange.emit({filterName:this.filterName,filterValue:this.filterValue,filterKey:this.filterKey})}render(){return(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"a85454194067d1922ce2aa9eb19dd061f7040874",class:"filter-search-wrapper"},(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"7f6c47dfd1a9450831c0784ce853a0a196e10f28",class:"filter-name"},this.filterName),(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-search-field",{key:"777e4aed437ca795d73a3f65e095c713366fc0ae","show-delete-icon":this.showDeleteIcon,disabled:this.disabled,value:this.filterValue}))}get host(){return(0,_index_77e9cc30_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{value:["valueChanged"]}}};FilterSearch.style=".filter-search-wrapper{display:flex;padding:12px 16px 16px 16px;flex-direction:column;align-items:flex-start;align-self:stretch;gap:4px;font-family:var(--ifx-font-family);background:#EEEDED}.filter-name{font-size:1rem;line-height:1.5rem;font-weight:600}"}}]);