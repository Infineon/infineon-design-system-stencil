"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[9780],{"./dist/esm/ifx-segmented-control.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_segmented_control:()=>SegmentedControl});var _index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-b4eaf00e.js");const SegmentedControl=class{constructor(hostRef){(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxChange=(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxChange",7),this.caption="",this.label="",this.size="regular",this.selectedValue=""}onSegmentSelect(event){const{previousValue,selectedValue}=this.unselectPreviousSegment(event.detail);this.selectedValue=selectedValue,this.ifxChange.emit({previousValue,selectedValue})}unselectPreviousSegment(newSelectedIndex){let previousValue,selectedValue;return this.getSegments().forEach((control=>{control.selected&&(control.segmentIndex!==newSelectedIndex?(control.selected=!1,previousValue=control.value):selectedValue=control.value)})),{previousValue,selectedValue}}getSegments(){return this.SegmentedControl.querySelectorAll("ifx-segment")}setActiveSegment(){const segments=this.getSegments();let activeSegmentedControlFound=!1;segments.forEach(((control,idx)=>{control.segmentIndex=idx,activeSegmentedControlFound?control.selected&&(control.selected=!1):control.selected&&(activeSegmentedControlFound=!0,this.selectedValue=control.value)})),!activeSegmentedControlFound&&segments.length&&(segments[0].selected=!0,this.selectedValue=segments[0].value)}setSegmentSize(){this.getSegments().forEach((control=>{control.shadowRoot.querySelector(".segment").classList.add(`segment--${this.size}`)}))}componentDidLoad(){this.setActiveSegment()}render(){return(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"f1db16681b45767ea6de4148d7ad8668fba35498","aria-value":this.selectedValue,"aria-label":"segmented control",class:"group"},(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"70980b04bcb50110612196979b44e2d61a7bc4c8",class:"group__label"},this.label.trim()),(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"0dd8dc01db812585c2a58132d4ceb6447a16ddff",class:"group__controls"},(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"e7f95a3c415312fe790e2288391e43e4f68d3279"})),this.caption.trim()&&(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"72784a7d56a2e39cc22b329c609828be2944e6ea",class:"group__caption"},(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"dbb21f0562a130d57defcf648c12c6e00346a0dc",icon:"cinfo16"})," ",this.caption.trim()))}componentDidRender(){this.setSegmentSize()}get SegmentedControl(){return(0,_index_b4eaf00e_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};SegmentedControl.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.group{display:flex;flex-direction:column;justify-content:space-between;gap:12px}.group__label{font:400 0.75rem/1rem "Source Sans 3"}.group__label:empty{display:none}.group__controls{display:flex;flex-wrap:wrap}.group__controls ::slotted(*){margin-left:-1px;margin-top:-1px}.group__caption{display:flex;align-items:center;gap:8px;font:400 0.75rem/1rem "Source Sans 3"}'}}]);