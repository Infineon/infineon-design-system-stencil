"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[3610],{"./dist/esm/ifx-segment.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_segment:()=>Segment});var _index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-c77e25a0.js");const Segment=class{constructor(hostRef){(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.segmentSelect=(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"segmentSelect",5),this.selected=!1}handleSegmentClick(){this.selected||(this.selected=!0,this.segmentSelect.emit(this.segmentIndex))}handleSegmentKeyDown(event){if("Enter"===event.code||"Space"===event.code){if(this.selected)return;this.selected=!0,this.segmentSelect.emit(this.segmentIndex)}}render(){return(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"e99e1a35e80b8d05a075416b97264c79feb1c43d",class:"segment "+(this.selected?"segment--selected":""),tabIndex:0,onClick:()=>{this.handleSegmentClick()},onKeyDown:e=>{this.handleSegmentKeyDown(e)}},(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"5575b532732b647992d3cae14fe7ef82e91f9557",icon:this.icon})," ",(0,_index_c77e25a0_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"479048280a0c85b6581eb6640190719508900f55"}))}};Segment.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.segment{display:flex;align-items:center;justify-content:center;gap:8px;position:relative;border:1px solid #BFBBBB;border-radius:1px;padding:0 8px 0 8px;height:34px;background-color:#FFFFFF;transition:all 100ms ease;transition-property:color, background;font:600 0.875rem/1.25rem "Source Sans 3"}.segment:focus-visible{color:#FFFFFF;background-color:#0A8276}.segment:hover{color:#FFFFFF;background-color:#08665C;cursor:pointer}.segment:active{background-color:#06534B}.segment.segment--selected{color:#FFFFFF;background-color:#0A8276}.segment.segment--small{height:30px}.segment::after{position:absolute;top:0;left:0;width:100%;height:100%;outline:1px solid #BFBBBB;border-radius:1px;content:""}'}}]);