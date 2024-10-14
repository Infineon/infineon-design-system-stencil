"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[8793],{"./dist/esm/ifx-filter-bar.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_filter_bar:()=>FilterBar});var _index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-b5aac952.js");const FilterBar=class{constructor(hostRef){(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxTopbarFilterChange=(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxTopbarFilterChange",7),this.handleMoreFiltersClick=()=>{this.showAllFilters=!0,this.updateVisibleSlots()},this.handleResetEvent=()=>{var _a;const filterSearchSlot=null===(_a=this.el.shadowRoot)||void 0===_a?void 0:_a.querySelector('slot[name="filter-search"]');if(filterSearchSlot instanceof HTMLSlotElement){filterSearchSlot.assignedElements({flatten:!0}).forEach((filterSearchWrapper=>{const searchField=filterSearchWrapper.querySelector("ifx-filter-search").shadowRoot.querySelectorAll("ifx-search-field");searchField.length>0&&searchField.forEach((searchFieldElement=>{searchFieldElement.value=""}))}))}this.selectedOptions=[],this.ifxTopbarFilterChange.emit(this.selectedOptions)},this.handleSearchChange=event=>{this.handleTopbarFilterChange(event)},this.handleFilterSelect=event=>{this.handleTopbarFilterChange(event)},this.handleTopbarFilterChange=event=>{const newSelectedOptions=[...this.selectedOptions];if("ifxFilterSearchChange"===event.type){const{filterName,filterValue}=event.detail,existingOptionIndex=newSelectedOptions.findIndex((option=>option.filterName===filterName));-1!==existingOptionIndex?newSelectedOptions[existingOptionIndex].filterValues=[filterValue]:newSelectedOptions.push({filterName,filterValues:[filterValue],type:"text"})}else if("ifxFilterSelect"===event.type){const{filterName,filterValues,type}=event.detail,existingOptionIndex=newSelectedOptions.findIndex((option=>option.filterName===filterName));-1!==existingOptionIndex?(newSelectedOptions[existingOptionIndex].filterValues=filterValues,newSelectedOptions[existingOptionIndex].type=type):newSelectedOptions.push({filterName,filterValues,type})}this.selectedOptions=newSelectedOptions,this.ifxTopbarFilterChange.emit(this.selectedOptions)},this.selectedOptions=[],this.showAllFilters=!1,this.maxShownFilters=4,this.visibleSlots=void 0,this.showMoreFiltersButton=!0}connectedCallback(){this.el.addEventListener("ifxFilterSelect",this.handleTopbarFilterChange),this.el.addEventListener("ifxFilterSearchChange",this.handleSearchChange),window.addEventListener("ifxResetFiltersEvent",this.handleResetEvent)}componentWillUnload(){this.el.removeEventListener("ifxFilterSelect",this.handleTopbarFilterChange),this.el.removeEventListener("ifxFilterSearchChange",this.handleSearchChange),window.removeEventListener("ifxResetFiltersEvent",this.handleResetEvent)}componentDidLoad(){this.updateVisibleSlots()}updateVisibleSlots(){this.visibleSlots=this.showAllFilters?Number.MAX_SAFE_INTEGER:this.maxShownFilters}render(){const safeVisibleSlots=Math.max(0,this.visibleSlots),actualNumberOfComponents=this.el.querySelectorAll("ifx-set-filter").length,slotsToShow=Math.min(safeVisibleSlots,actualNumberOfComponents,Number.MAX_SAFE_INTEGER),slots=Array.from({length:slotsToShow},((_,i)=>(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"filter-slot-wrapper"},(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:`filter-component-${i+1}`}))));return(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.a,{key:"60d1cd481024163687b4f29c380cd6d66e88cc14"},(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"0fa8f582c2b7717556b8bb194f065980ff1489e8",class:"search-container"},(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"1ced834dc8dda1f5b4c849435f390ef5969cf343",name:"filter-search"})," "),(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"987902e495ef3b1c34b2e081dbb6244155972523",class:"components-container"},slots.length>0?slots:(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"filter-component"}),this.showMoreFiltersButton&&!this.showAllFilters&&(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"fbb062ca131ac0bee430f57a6033e61604f94254",class:"more-filters-wrapper",onClick:this.handleMoreFiltersClick},(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-button",{key:"5833c615ce06c998b6beffe16771e5c219125d4c",type:"button",disabled:!1,variant:"tertiary",size:"m",target:"_blank",theme:"default","full-width":"false"},(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"46d5e48607d9fc1a4fd5e9033e2a3ee2d1e6b7dd",icon:"filter-16"}),"More filters"))))}get el(){return(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};FilterBar.style=":host{display:block;width:100%}.search-container{display:flex;width:calc(100% - 48px);padding-left:24px;padding-right:24px;flex-direction:row;align-items:flex-start;margin-bottom:16px}.components-container{display:flex;width:calc(100% - 48px);padding-left:24px;padding-right:24px;flex-direction:row;align-items:flex-end;align-content:flex-end;flex-wrap:wrap;gap:16px}.filter-slot-wrapper{flex-grow:1;flex-basis:100%;max-width:100%}@media (max-width: 1024px){.more-filters-wrapper{order:3;width:100%;display:flex;justify-content:center;padding-top:16px;}}@media (min-width: 720px) and (max-width: 1024px){.filter-slot-wrapper{flex-basis:calc((100% - 16px) / 2);max-width:calc((100% - 16px) / 2)}}@media (min-width: 1025px){.filter-slot-wrapper{flex-basis:auto;max-width:200px}::slotted([slot=filter-search]){max-width:828px}}::slotted([slot=filter-search]){flex-grow:1;flex-basis:100%;width:100%}"}}]);