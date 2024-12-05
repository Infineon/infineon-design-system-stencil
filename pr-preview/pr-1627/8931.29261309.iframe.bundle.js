"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[8931],{"./dist/esm/ifx-segmented-control.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_segmented_control:()=>SegmentedControl});var _index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-fc6a5751.js");const SegmentedControl=class{constructor(hostRef){(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxChange=(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxChange",7),this.selectedValue="",this.caption="",this.label="",this.size="regular"}onSegmentSelect(event){const{previousValue,selectedValue}=this.unselectPreviousSegment(event.detail);this.selectedValue=selectedValue,this.ifxChange.emit({previousValue,selectedValue})}unselectPreviousSegment(newSelectedIndex){let previousValue,selectedValue;return this.getSegments().forEach((control=>{control.selected&&(control.segmentIndex!==newSelectedIndex?(control.selected=!1,previousValue=control.value):selectedValue=control.value)})),{previousValue,selectedValue}}getSegments(){return this.SegmentedControl.querySelectorAll("ifx-segment")}setActiveSegment(){const segments=this.getSegments();let activeSegmentedControlFound=!1;segments.forEach(((control,idx)=>{control.segmentIndex=idx,activeSegmentedControlFound?control.selected&&(control.selected=!1):control.selected&&(activeSegmentedControlFound=!0,this.selectedValue=control.value)})),!activeSegmentedControlFound&&segments.length&&(segments[0].selected=!0,this.selectedValue=segments[0].value)}setSegmentSize(){this.getSegments().forEach((control=>{control.shadowRoot.querySelector(".segment").classList.add(`segment--${this.size}`)}))}componentDidLoad(){this.setActiveSegment()}render(){return(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"42d423ccf53e16757603b95584926e01ef05b9fe","aria-value":this.selectedValue,"aria-label":"segmented control",class:"group"},(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"261921695c16c88d62564383590d3fa2c249a5f7",class:"group__label"},this.label.trim()),(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"5acd2baa0945e9bfbb38feb4112d4cc7e1093c1c",class:"group__controls"},(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"2bb4ded58d002a67122eafb10c7f1969b8824822"})),this.caption.trim()&&(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"efc69ec956cf953c8fe07a46058b31158e2c2224",class:"group__caption"},(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"b25e0f621f8eee2874c27eb5219c0367ba0da401",icon:"cinfo16"})," ",this.caption.trim()))}componentDidRender(){this.setSegmentSize()}get SegmentedControl(){return(0,_index_fc6a5751_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};SegmentedControl.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.group{display:flex;flex-direction:column;justify-content:space-between;gap:12px}.group__label{font:400 0.75rem/1rem "Source Sans 3"}.group__label:empty{display:none}.group__controls{display:flex;flex-wrap:wrap}.group__controls ::slotted(*){margin-left:-1px;margin-top:-1px}.group__caption{display:flex;align-items:center;gap:8px;font:400 0.75rem/1rem "Source Sans 3"}'}}]);