"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[5565],{"./dist/esm/ifx-segmented-control-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_segmented_control_group:()=>SegmentedControlGroup});var _index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-3655ed9e.js");const SegmentedControlGroup=class{constructor(hostRef){(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxChange=(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxChange",7),this.caption="",this.groupLabel="",this.size="regular",this.selectedValue=void 0}onSegmentSelect(event){this.selectedValue!==event.detail&&this.ifxChange.emit({previousValue:this.selectedValue,selectedValue:event.detail})}handleValueChange(){this.setActiveSegment()}getSegmentedControls(){return this.segmentedControlGroup.querySelectorAll("ifx-segmented-control")}setActiveSegment(){this.getSegmentedControls().forEach((control=>{control.value===this.selectedValue?control.shadowRoot.querySelector(".control").classList.add("control--selected"):control.shadowRoot.querySelector(".control").classList.remove("control--selected")}))}setSegmentedControlSize(){this.getSegmentedControls().forEach((control=>{control.shadowRoot.querySelector(".control").classList.add(`control--${this.size}`)}))}componentDidLoad(){this.setActiveSegment()}render(){return(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"a45ca09ea8bb404c73046042754acb0c6f028e76","aria-value":this.selectedValue,"aria-label":"segmented controls",class:"group"},(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"9503005192a227b7da09d79a5727255aeadac4c0",class:"group__label"},this.groupLabel.trim()),(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"6e945bdb50fded0e7b0bc37a2b6271adbf4756ac",class:"group__controls"},(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"dc2a096f6419ea3a092e534123b340b9f4aab7a7"})),this.caption.trim()&&(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"d15858ccccd03b160a1b8564579d9d6f31ebee84",class:"group__caption"},(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"fb1b535641a1d85eaad9f8def7fdad7f5e02da60",icon:"cinfo16"})," ",this.caption.trim()))}componentDidRender(){this.setSegmentedControlSize()}get segmentedControlGroup(){return(0,_index_3655ed9e_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{selectedValue:["handleValueChange"]}}};SegmentedControlGroup.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.group{display:flex;flex-direction:column;justify-content:space-between;gap:12px}.group__label{font:400 0.75rem/1rem "Source Sans 3"}.group__label:empty{display:none}.group__controls{display:flex;flex-wrap:wrap;gap:1px;padding:1px;outline:1px solid #BFBBBB;border-radius:1px;width:fit-content;background-color:#BFBBBB}.group__caption{display:flex;align-items:center;gap:8px;font:400 0.75rem/1rem "Source Sans 3"}'}}]);