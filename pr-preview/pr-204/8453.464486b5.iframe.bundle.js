"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[8453],{"./dist/esm/ifx-multi-select-input-item.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_multi_select_input_item:()=>MultiSelectInputItem});var _index_2f901f5e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-2f901f5e.js");const MultiSelectInputItem=class{constructor(hostRef){(0,_index_2f901f5e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.closed=(0,_index_2f901f5e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"closed",3),this.content=""}handleCloseButton(){this.closed.emit(this.el)}handleSelectItem(event){event.stopPropagation()}render(){return(0,_index_2f901f5e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"multiSelectInput__item-container",onClick:this.handleSelectItem.bind(this)},(0,_index_2f901f5e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"multiSelectInput__item-content"},this.content),(0,_index_2f901f5e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"multiSelectInput__item-icon"},(0,_index_2f901f5e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{onClick:this.handleCloseButton.bind(this),icon:"cross-12"})))}get el(){return(0,_index_2f901f5e_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};MultiSelectInputItem.style=":host{flex-shrink:0}.multiSelectInput__item-container{position:relative;display:flex;justify-content:space-between;align-items:center;gap:6px;border:1px solid;border-radius:4px;padding:0 8px;flex-shrink:0}.multiSelectInput__item-container .multiSelectInput__item-content{display:flex;align-items:center;flex-shrink:0}.multiSelectInput__item-container .multiSelectInput__item-icon{display:flex;align-items:center}.multiSelectInput__item-container .multiSelectInput__item-icon ifx-icon svg{width:10px}"}}]);