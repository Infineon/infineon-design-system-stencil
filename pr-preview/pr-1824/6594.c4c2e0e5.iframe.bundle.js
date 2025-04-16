"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[6594],{"./dist/esm/ifx-filter-search.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_filter_search:()=>FilterSearch});var _index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-c77e25a0.js");const FilterSearch=class{constructor(hostRef){(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxFilterSearchChange=(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxFilterSearchChange",7),this.disabled=!1,this.showDeleteIcon=!1,this.filterOrientation="sidebar"}valueChanged(newValue){this.host.setAttribute("value",newValue.toString())}handleFilterSearchChange(event){const existingFilter=this.host.parentElement.querySelector(`ifx-filter-search[filter-name="${this.filterName}"]`);if(existingFilter&&existingFilter!==this.host)throw new Error(`A search filter with the name '${this.filterName}' already exists.`);this.filterValue=event.detail,this.showDeleteIcon=""!==this.filterValue,this.ifxFilterSearchChange.emit({filterName:this.filterName,filterValue:this.filterValue,filterKey:this.filterKey})}render(){return(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"57ca68c06d592927ca36802f54ffa360a229920e",class:""+("sidebar"===this.filterOrientation?"sidebar-filter-search-wrapper":"topbar-filter-search-wrapper")},(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"e8ae19b08b54cea64c6593b6386a21f1238c71ad",class:"filter-name"},this.filterName),(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-search-field",{key:"fc321359859e5d3de5b62eb32fa6c564db7ded5b",placeholder:this.placeholder,"show-delete-icon":this.showDeleteIcon,disabled:this.disabled,value:this.filterValue}))}get host(){return(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{value:["valueChanged"]}}};FilterSearch.style=".sidebar-filter-search-wrapper{display:flex;padding:12px 16px 16px 16px;flex-direction:column;align-items:flex-start;align-self:stretch;gap:4px;font-family:var(--ifx-font-family);background:#EEEDED}.topbar-filter-search-wrapper{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch;gap:4px;font-family:var(--ifx-font-family)}.topbar-filter-search-wrapper ifx-search-field{width:100%;}.filter-name{font-size:1rem;line-height:1.5rem;font-weight:600}"}}]);