"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[8931],{"./dist/esm/ifx-segmented-control.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_segmented_control:()=>SegmentedControl});var _index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-c77e25a0.js");const SegmentedControl=class{constructor(hostRef){(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxChange=(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxChange",7),this.caption="",this.label="",this.size="regular",this.selectedValue=""}onSegmentSelect(event){const{previousValue,selectedValue}=this.unselectPreviousSegment(event.detail);this.selectedValue=selectedValue,this.ifxChange.emit({previousValue,selectedValue})}unselectPreviousSegment(newSelectedIndex){let previousValue,selectedValue;return this.getSegments().forEach((control=>{control.selected&&(control.segmentIndex!==newSelectedIndex?(control.selected=!1,previousValue=control.value):selectedValue=control.value)})),{previousValue,selectedValue}}getSegments(){return this.SegmentedControl.querySelectorAll("ifx-segment")}setActiveSegment(){const segments=this.getSegments();let activeSegmentedControlFound=!1;segments.forEach(((control,idx)=>{control.segmentIndex=idx,activeSegmentedControlFound?control.selected&&(control.selected=!1):control.selected&&(activeSegmentedControlFound=!0,this.selectedValue=control.value)})),!activeSegmentedControlFound&&segments.length&&(segments[0].selected=!0,this.selectedValue=segments[0].value)}setSegmentSize(){this.getSegments().forEach((control=>{control.shadowRoot.querySelector(".segment").classList.add(`segment--${this.size}`)}))}componentDidLoad(){this.setActiveSegment()}render(){return(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"a88cbd45c79867e92a6f521e37ec07b603783925","aria-value":this.selectedValue,"aria-label":"segmented control",class:"group"},(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"59d4a06dcf05290714f6debe80ff8b723f49b1ad",class:"group__label"},this.label.trim()),(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"ab2ea99cbb68237acadb0cb02397025aa8065686",class:"group__controls"},(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"f029e1999e4102adef822c334fa5de6045ec15ae"})),this.caption.trim()&&(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"0cd3c610e7fc38c664b47467547ec0b954a97e96",class:"group__caption"},(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"3608411e811c84bd601d8d5fdf5f1175c2fb15fa",icon:"cinfo16"})," ",this.caption.trim()))}componentDidRender(){this.setSegmentSize()}get SegmentedControl(){return(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};SegmentedControl.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.group{display:flex;flex-direction:column;justify-content:space-between;gap:12px}.group__label{font:400 0.75rem/1rem "Source Sans 3"}.group__label:empty{display:none}.group__controls{display:flex;flex-wrap:wrap}.group__controls ::slotted(*){margin-left:-1px;margin-top:-1px}.group__caption{display:flex;align-items:center;gap:8px;font:400 0.75rem/1rem "Source Sans 3"}'}}]);