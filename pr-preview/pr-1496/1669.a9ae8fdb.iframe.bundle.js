"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[1669],{"./dist/esm/ifx-chip.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_chip:()=>Chip});var _index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-3655ed9e.js");const Chip=class{constructor(hostRef){(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxChipChange=(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxChipChange",7),this.placeholder="",this.size="large",this.value=void 0,this.variant="single",this.readOnly=!1,this.opened=!1,this.selectedOptions=[]}handleReadOnlyChange(newValue){newValue&&(this.opened=!1)}closeDropdownOnOutsideClick(event){const path=event.composedPath(),chipWrapper=this.chip.shadowRoot.querySelector(".chip__wrapper"),chipDropdown=this.chip.shadowRoot.querySelector(".chip__dropdown");path.includes(chipDropdown)||path.includes(chipWrapper)||!this.opened||this.toggleDropdownMenu()}updateSelectedOptions(event){const eventDetail=event.detail,previousSelection=this.selectedOptions;if("multi"!==this.variant){if(eventDetail.selected){this.opened=!1;this.getChipItems().forEach((chipItem=>{chipItem.selected&&chipItem!==event.target&&(chipItem.chipState=Object.assign(Object.assign({},chipItem.chipState),{emitIfxChipItemSelect:!1}),chipItem.selected=!1)})),this.selectedOptions=[eventDetail]}else this.selectedOptions=[];this.value=this.selectedOptions[0]?this.selectedOptions[0].value:void 0}else eventDetail.selected?this.selectedOptions=[...this.selectedOptions,eventDetail]:this.selectedOptions=this.selectedOptions.filter((option=>option.key!==eventDetail.key)),this.value=this.selectedOptions.map((option=>option.value));eventDetail.emitIfxChipChange&&this.ifxChipChange.emit({previousSelection,currentSelection:this.selectedOptions})}getChipItems(){return this.chip.querySelectorAll("ifx-chip-item")}getSelectedOptions(){return this.selectedOptions.slice(0,2).map((option=>option.label)).join(", ")}toggleDropdownMenu(){this.readOnly||(this.opened=!this.opened)}handleUnselectButtonClick(event){event.stopPropagation(),this.opened=!1;let itemGotUnselected=!1;if(this.getChipItems().forEach((chipItem=>{chipItem.selected&&(itemGotUnselected=!0,chipItem.chipState=Object.assign(Object.assign({},chipItem.chipState),{emitIfxChipItemSelect:!1}),chipItem.selected=!1)})),itemGotUnselected){const previousSelection=this.selectedOptions;this.selectedOptions=[],this.value=[],this.ifxChipChange.emit({previousSelection,currentSelection:[]})}}handleWrapperClick(){this.readOnly||this.toggleDropdownMenu()}handleWrapperKeyDown(event){this.readOnly&&("Space"!==event.code&&"Enter"!==event.code||this.toggleDropdownMenu())}syncChipState(){const chipItems=this.getChipItems();let key=0;chipItems.forEach((chipItem=>{chipItem.chipState={emitIfxChipItemSelect:!0,size:"small"===this.size?"small":"large",variant:"multi"===this.variant?"multi":"single",key:key++}}))}componentWillLoad(){this.syncChipState()}render(){return(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"7e6b2afd1a1eb7968a203e01a458207b04fb3713","aria-value":this.getSelectedOptions(),"aria-label":"chip with a dropdown menu",class:"chip"},(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"69346e62d029e851439135352cc71565083ecac8",class:`chip__wrapper chip__wrapper--${"small"===this.size?"small":"large"}\n                  chip__wrapper--${"multi"===this.variant?"multi":"single"}\n                  ${this.opened&&!this.readOnly?"chip__wrapper--opened":""}\n                  ${this.selectedOptions.length?"chip__wrapper--selected":""}`,tabIndex:0,onClick:this.readOnly?void 0:()=>{this.handleWrapperClick()},onKeyDown:this.readOnly?void 0:e=>{this.handleWrapperKeyDown(e)}},(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"fef37c95b41ec04bb5accd7883b52a22cfe3037e",class:"wrapper__label"},0===this.selectedOptions.length&&`${this.placeholder}`,0!==this.selectedOptions.length&&"multi"===this.variant&&""!==this.placeholder&&`${this.placeholder}:`,0!==this.selectedOptions.length&&(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"c88ecc2459c480ef094b8b79ae872e089aed8a6a",class:"label__selected-options"},this.getSelectedOptions()),this.selectedOptions.length>2&&(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-number-indicator",{key:"5af2b443478616b4bf243e35326c490b1dd62ffd"},"  ","+"+(this.selectedOptions.length-2)," ")),!this.readOnly&&("multi"!==this.variant||"multi"===this.variant&&0===this.selectedOptions.length)&&(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"de5359322ff2e74d8c878efbb46d63a877fdea7a",class:"wrapper__open-button"},(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:1,icon:"chevrondown16"})),this.selectedOptions.length>=1&&"multi"===this.variant&&(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"780fa3017b74c63411eb824ce087b66176aab5fd",class:"wrapper__unselect-button",onClick:e=>{this.handleUnselectButtonClick(e)}},(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:2,icon:"cross16"}))),this.opened&&!this.readOnly&&(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"0f6a30b0bccd30143e5548eacb7376df42f9cfbc",class:"chip__dropdown"},(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"4a05a7df2908c200959ee2dd54b24893060a7186"})))}get chip(){return(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{readOnly:["handleReadOnlyChange"]}}};Chip.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-block}.chip{position:relative}.chip__wrapper{display:inline-flex;align-items:center;justify-content:center;gap:8px;box-sizing:border-box;border:1px solid #BFBBBB;border-radius:9999px;background:#FFFFFF;cursor:pointer;transition:border 100ms ease;font:400 0.875rem/1.25rem "Source Sans 3"}.chip__wrapper:hover,.chip__wrapper:focus-visible{outline:none;border:1px solid #575352}.chip__wrapper.chip__wrapper--small{padding:4px 12px}.chip__wrapper.chip__wrapper--large{padding:8px 16px}.chip__wrapper.chip__wrapper--opened{border:1px solid #0A8276}.chip__wrapper.chip__wrapper--opened .wrapper__open-button{transform:rotate(-180deg)}.chip__wrapper.chip__wrapper--selected{outline:3px solid #0A8276;outline-offset:-3px;color:#0A8276}.chip__wrapper.chip__wrapper--selected:hover,.chip__wrapper.chip__wrapper--selected:focus-visible{outline:3px solid #08665C;color:#08665C}.wrapper__label{display:inline-flex;align-items:center;gap:4px;font:400 0.875rem/1.25rem "Source Sans 3"}.wrapper__label .label__selected-options{font:600 0.875rem/1.25rem "Source Sans 3"}.wrapper__open-button{display:flex;align-items:center;transition:all 300ms ease}.wrapper__unselect-button{display:flex;align-items:center}.chip__dropdown{position:absolute;z-index:1;box-shadow:0px 6px 9px 0px rgba(29, 29, 29, 0.1019607843);border:1px solid #EEEDED;border-radius:1px;padding:8px 0;min-width:222px;background-color:#FFFFFF}'}}]);