"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[6594],{"./dist/esm/ifx-filter-search.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_filter_search:()=>FilterSearch});var _index_7d0f8b3b_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-7d0f8b3b.js");const FilterSearch=class{constructor(hostRef){(0,_index_7d0f8b3b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxFilterSearchChange=(0,_index_7d0f8b3b_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxFilterSearchChange",7),this.filterName=void 0,this.disabled=!1,this.filterValue=void 0,this.filterKey=void 0,this.showDeleteIcon=!1,this.filterOrientation="sidebar",this.placeholder=void 0}valueChanged(newValue){this.host.setAttribute("value",newValue.toString())}handleFilterSearchChange(event){const existingFilter=this.host.parentElement.querySelector(`ifx-filter-search[filter-name="${this.filterName}"]`);if(existingFilter&&existingFilter!==this.host)throw new Error(`A search filter with the name '${this.filterName}' already exists.`);this.filterValue=event.detail,this.showDeleteIcon=""!==this.filterValue,this.ifxFilterSearchChange.emit({filterName:this.filterName,filterValue:this.filterValue,filterKey:this.filterKey})}render(){return(0,_index_7d0f8b3b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"671b3f59739ce187951dcd6a21415403ab402da1",class:""+("sidebar"===this.filterOrientation?"sidebar-filter-search-wrapper":"topbar-filter-search-wrapper")},(0,_index_7d0f8b3b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"1d0904065fdb509bc7ecbc74b3a4e9604654ed1c",class:"filter-name"},this.filterName),(0,_index_7d0f8b3b_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-search-field",{key:"b9e192c79bbf9665edbf5ebd6759e576dbad3e35",placeholder:this.placeholder,"show-delete-icon":this.showDeleteIcon,disabled:this.disabled,value:this.filterValue}))}get host(){return(0,_index_7d0f8b3b_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{value:["valueChanged"]}}};FilterSearch.style=".sidebar-filter-search-wrapper{display:flex;padding:12px 16px 16px 16px;flex-direction:column;align-items:flex-start;align-self:stretch;gap:4px;font-family:var(--ifx-font-family);background:#EEEDED}.topbar-filter-search-wrapper{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch;gap:4px;font-family:var(--ifx-font-family)}.topbar-filter-search-wrapper ifx-search-field{width:100%;}.filter-name{font-size:1rem;line-height:1.5rem;font-weight:600}"}}]);