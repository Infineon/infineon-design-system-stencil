"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[1012],{"./dist/esm/ifx-filter-type-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_filter_type_group:()=>IfxFilterTypeGroup});var _index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-dc4139fb.js");const IfxFilterTypeGroup=class{constructor(hostRef){(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxSidebarFilterChange=(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxSidebarFilterChange",7),this.handleResetEvent=()=>{this.el.shadowRoot.querySelector('slot[name="filter-accordion"]').assignedElements({flatten:!0}).forEach((accordionElement=>{accordionElement.querySelectorAll("ifx-list").forEach((ifxListElement=>{ifxListElement.resetTrigger=!ifxListElement.resetTrigger}))}));this.el.shadowRoot.querySelector('slot[name="filter-search"]').assignedElements({flatten:!0}).forEach((filterSearchWrapper=>{const searchField=filterSearchWrapper.querySelector("ifx-filter-search").shadowRoot.querySelectorAll("ifx-search-field");searchField.length>0&&searchField.forEach((searchFieldElement=>{searchFieldElement.value=""}))})),this.selectedOptions=[],this.ifxSidebarFilterChange.emit(this.selectedOptions)},this.handleUpdateSidebarFilter=event=>{const{filterName}=event.detail,accordionSlot=this.el.shadowRoot.querySelector('slot[name="filter-accordion"]');(accordionSlot?accordionSlot.assignedElements({flatten:!0}):[]).forEach((accordionElement=>{accordionElement.querySelectorAll("ifx-list").forEach((ifxListElement=>{ifxListElement.getAttribute("name")===filterName&&(ifxListElement.resetTrigger=!ifxListElement.resetTrigger)}))}));const searchSlot=this.el.shadowRoot.querySelector('slot[name="filter-search"]');(searchSlot?searchSlot.assignedNodes({flatten:!0}):[]).forEach((searchElement=>{if(searchElement.nodeType===Node.ELEMENT_NODE){const searchField=searchElement.firstElementChild;searchField&&(searchField.setAttribute("value",""),searchField.dispatchEvent(new CustomEvent("ifxInput",{bubbles:!0,composed:!0,detail:""})))}}));const newSelectedOptions=this.selectedOptions.map((option=>option.filterGroupName===filterName?Object.assign(Object.assign({},option),{selectedItems:[],value:""}):option));this.selectedOptions=newSelectedOptions,this.ifxSidebarFilterChange.emit(this.selectedOptions)},this.handleAccordionChange=event=>{this.handleFilterChange(event)},this.handleSearchChange=event=>{this.handleFilterChange(event)},this.handleFilterChange=event=>{const newSelectedOptions=[...this.selectedOptions];if("ifxFilterSearchChange"===event.type){const{filterName,filterValue}=event.detail,existingOptionIndex=newSelectedOptions.findIndex((option=>"string"!=typeof option&&option.filterGroupName===filterName));-1!==existingOptionIndex?newSelectedOptions[existingOptionIndex].value=filterValue:newSelectedOptions.push({filterGroupName:filterName,value:filterValue})}else if("ifxFilterAccordionChange"===event.type){const{filterGroupName,selectedItems}=event.detail,existingOptionIndex=newSelectedOptions.findIndex((option=>option.filterGroupName===filterGroupName));-1!==existingOptionIndex?newSelectedOptions[existingOptionIndex]={filterGroupName,selectedItems}:newSelectedOptions.push({filterGroupName,selectedItems})}this.selectedOptions=newSelectedOptions,this.ifxSidebarFilterChange.emit(this.selectedOptions)},this.selectedOptions=[]}connectedCallback(){this.el.addEventListener("ifxFilterAccordionChange",this.handleAccordionChange),this.el.addEventListener("ifxFilterSearchChange",this.handleSearchChange),window.addEventListener("ifxResetFiltersEvent",this.handleResetEvent),window.addEventListener("ifxUpdateSidebarFilter",this.handleUpdateSidebarFilter)}componentWillUnload(){this.el.removeEventListener("ifxFilterAccordionChange",this.handleAccordionChange),this.el.removeEventListener("ifxFilterSearchChange",this.handleSearchChange),window.removeEventListener("ifxResetFiltersEvent",this.handleResetEvent)}render(){return(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.a,{key:"d501181f0ff9311976fda4d41b04ee2b871aa3b1"},(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"29fb80146dc2605bb3c4e95ef7944a0af6489c2e",class:"filter-type-group"},(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"c9b256944dd5c75ee893ac908e2f282c12b7613e",name:"filter-search"}),(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"a365f9582579ab4c149d0fec711113843a95a3b3",name:"filter-accordion"})))}get el(){return(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};IfxFilterTypeGroup.style=":host{display:flex}.filter-type-group{width:260px;align-items:flex-start;gap:8px}.filter-type-group>::slotted(*){margin-bottom:8px}"}}]);