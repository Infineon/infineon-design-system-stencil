"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[8931],{"./dist/esm/ifx-segmented-control.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_segmented_control:()=>SegmentedControl});var _index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-dc4139fb.js");const SegmentedControl=class{constructor(hostRef){(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxChange=(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxChange",7),this.selectedValue="",this.caption="",this.label="",this.size="regular"}onSegmentSelect(event){const{previousValue,selectedValue}=this.unselectPreviousSegment(event.detail);this.selectedValue=selectedValue,this.ifxChange.emit({previousValue,selectedValue})}unselectPreviousSegment(newSelectedIndex){let previousValue,selectedValue;return this.getSegments().forEach((control=>{control.selected&&(control.segmentIndex!==newSelectedIndex?(control.selected=!1,previousValue=control.value):selectedValue=control.value)})),{previousValue,selectedValue}}getSegments(){return this.SegmentedControl.querySelectorAll("ifx-segment")}setActiveSegment(){const segments=this.getSegments();let activeSegmentedControlFound=!1;segments.forEach(((control,idx)=>{control.segmentIndex=idx,activeSegmentedControlFound?control.selected&&(control.selected=!1):control.selected&&(activeSegmentedControlFound=!0,this.selectedValue=control.value)})),!activeSegmentedControlFound&&segments.length&&(segments[0].selected=!0,this.selectedValue=segments[0].value)}setSegmentSize(){this.getSegments().forEach((control=>{control.shadowRoot.querySelector(".segment").classList.add(`segment--${this.size}`)}))}componentDidLoad(){this.setActiveSegment()}render(){return(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"9fb656fefd8b61e7c563ac77a20a303d40c6f146","aria-value":this.selectedValue,"aria-label":"segmented control",class:"group"},(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"de4f8bf1f2404f106ff180167bf4c79abd2b165b",class:"group__label"},this.label.trim()),(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"e110c6c98b981142df08e7dda574b2d3e102a19d",class:"group__controls"},(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"3dd13439a68201c2f42104c4853b371c669e18df"})),this.caption.trim()&&(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"946fe774c7cf3f9642447b9a8cb0e258d3f9d493",class:"group__caption"},(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"39f21a9eae4961da05f38d6930bcc373671e9794",icon:"cinfo16"})," ",this.caption.trim()))}componentDidRender(){this.setSegmentSize()}get SegmentedControl(){return(0,_index_dc4139fb_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};SegmentedControl.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.group{display:flex;flex-direction:column;justify-content:space-between;gap:12px}.group__label{font:400 0.75rem/1rem "Source Sans 3"}.group__label:empty{display:none}.group__controls{display:flex;flex-wrap:wrap}.group__controls ::slotted(*){margin-left:-1px;margin-top:-1px}.group__caption{display:flex;align-items:center;gap:8px;font:400 0.75rem/1rem "Source Sans 3"}'}}]);