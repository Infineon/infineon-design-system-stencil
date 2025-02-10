"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[7024],{"./dist/esm/ifx-step.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_step:()=>Step});var _index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-adb4dbd9.js");const Step=class{constructor(hostRef){(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.complete=!1,this.disabled=!1,this.error=!1,this.lastStep=!1,this.stepId=1,this.stepperState={activeStep:1,showStepNumber:!1,variant:"default",indicatorPosition:"left"},this.clickable=!1}onStepChange(event){event.detail.previousActiveStep===this.stepId&&this.error&&(this.clickable=!0)}updateCurrentStep(newStepperState){this.active=newStepperState.activeStep===this.stepId}updateErrorState(){this.active&&(this.error=!1)}handleStepClick(){this.disabled||"compact"===this.stepperState.variant||!this.clickable&&!this.complete||this.stepperState.setActiveStep(this.stepId,!0)}handleStepKeyDown(event){this.disabled||"compact"===this.stepperState.variant||!this.clickable&&!this.complete||"Enter"!==event.key||this.stepperState.setActiveStep(this.stepId,!0)}stopOnClickPropogation(event){this.disabled&&event.stopPropagation()}render(){return(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"9bec08d1c4384419d833dce0c8d569da151c1c99","aria-current":!!this.active&&"step","aria-disabled":!this.active&&!this.complete,onClick:e=>this.stopOnClickPropogation(e),class:`step-wrapper ${1===this.stepId?"first-step":""} \n                        ${this.error?"error":""}\n                        ${this.stepperState.variant}\n                        ${this.complete?"complete":""}\n                        ${this.lastStep?"last-step":""}\n                        indicator-${this.stepperState.indicatorPosition}\n                        ${this.active?"active":""}\n                        ${this.clickable?"clickable":""}\n                        ${this.disabled?"disabled":""}`},(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"8e7ac36b9befc86925d246c82fd0a3fc6b2d610a",class:"step-icon-wrapper"},"compact"!==this.stepperState.variant&&(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"0f45ee02f78561bacab88156f7e722ae77865a5d",class:"step-connector-l"}),"compact"!==this.stepperState.variant&&(!this.error||this.error&&this.active)&&(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"72cf042174bee53e234c401ee01b987ccd104365",class:"step-icon"},!this.stepperState.showStepNumber||this.complete||this.active?"":this.stepId,this.complete&&!this.active&&(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"dd5fea2b7e02ccb0d00c0d411eb193a18a2a3119",icon:"check16"}),this.active&&(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"b3e67ff3e974d853d0aaa05cc227fa57dce06d3b",class:"active-indic"})),"compact"!==this.stepperState.variant&&this.error&&!this.active&&(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"14cfb2b3b0c1fada1fa5e9817ede6c9de161df4f",icon:"warningf24"}),"compact"!==this.stepperState.variant&&(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"ba1cc86995aa9461e58fcaac9e40ec1c2fc8d811",class:"step-connector-r "+(this.active?"active":"")})),("compact"!==this.stepperState.variant||"compact"===this.stepperState.variant&&(this.active||this.stepId===this.stepperState.activeStep+1))&&(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"cb433be92c598a228898ce55645c9da91d063935",tabIndex:this.disabled||!this.complete||this.active?-1:0,class:"step-label "+("compact"===this.stepperState.variant?this.active?"curr-label":"next-label":""),onClick:()=>{this.handleStepClick()},onKeyDown:e=>{this.handleStepKeyDown(e)}},"compact"!==this.stepperState.variant&&(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"30802380d8e7bd7c7fb7aa478c06660bc6047d27"}),"compact"!==this.stepperState.variant||this.active?"":"Next: ","compact"===this.stepperState.variant&&(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"11f41e62813e9dc4a8c52a9805d000fc88da29fa"})))}static get watchers(){return{stepperState:["updateCurrentStep"],active:["updateErrorState"]}}};Step.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.step-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;width:100%;gap:8px;font:400 1rem/1.5rem "Source Sans 3"}.step-wrapper.vertical{flex-direction:row;gap:12px;width:unset;height:100%}.step-wrapper.vertical .step-icon-wrapper{flex-direction:column;width:unset;height:100%}.step-wrapper.compact{gap:0;max-width:100%}.step-wrapper.compact .step-label{max-width:100%;cursor:auto;align-self:flex-start}.step-wrapper.compact.indicator-left{align-items:flex-end;text-align:right}.step-wrapper.compact.indicator-right{align-items:flex-start}.step-wrapper .step-label{max-width:90%;color:#8D8786;word-wrap:break-word}.step-wrapper .step-label.curr-label{font:600 1.25rem/1.75rem "Source Sans 3"}.step-wrapper .step-label.next-label{font:400 0.75rem/1rem "Source Sans 3"}.step-wrapper .step-label :hover{color:#8D8786}.step-wrapper.first-step .step-connector-l{height:0px}.step-wrapper.last-step .step-connector-r{height:0px}.step-wrapper.vertical.first-step .step-connector-l,.step-wrapper.vertical.last-step .step-connector-r{width:0px}.step-wrapper.complete .step-connector-l,.step-wrapper.complete .step-connector-r,.step-wrapper.complete .step-icon{background:#0A8276}.step-wrapper.complete .step-connector-l.active,.step-wrapper.complete .step-connector-l.error,.step-wrapper.complete .step-connector-r.active,.step-wrapper.complete .step-connector-r.error,.step-wrapper.complete .step-icon.active,.step-wrapper.complete .step-icon.error{background:#8D8786}.step-wrapper.complete:not(.disabled) .step-label{cursor:pointer;color:#1D1D1D}.step-wrapper.complete:not(.disabled) .step-label :hover{color:#08665C}.step-wrapper.disabled .step-connector-l,.step-wrapper.disabled .step-connector-r,.step-wrapper.disabled .step-icon{background-color:#8D8786}.step-wrapper.disabled .step-label,.step-wrapper.disabled .step-label :hover{color:#8D8786}.step-wrapper.active .step-connector-l,.step-wrapper.active .step-connector-r,.step-wrapper.active .step-icon{background:#0A8276}.step-wrapper.active .step-connector-l.active,.step-wrapper.active .step-connector-l.error,.step-wrapper.active .step-connector-r.active,.step-wrapper.active .step-connector-r.error,.step-wrapper.active .step-icon.active,.step-wrapper.active .step-icon.error{background:#8D8786}.step-wrapper.active .step-label,.step-wrapper.active .step-label :hover{color:#1D1D1D}.step-wrapper.active.complete .step-label{cursor:auto}.step-wrapper.clickable:not(.active) .step-label{cursor:pointer}.step-wrapper.error:not(.active){color:#CD002F}.step-wrapper.error:not(.active) .step-label{color:#CD002F}.step-wrapper.error:not(.active) .step-label :hover{color:#0A8276}.step-wrapper.disabled .step-label{cursor:auto}.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-l,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-r,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-icon{background:#08665C}.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-l.active,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-l.error,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-r.active,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-r.error,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-icon.active,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-icon.error{background:#8D8786}.step-wrapper:hover.complete:not(.disabled):not(.active) .step-label{color:#08665C}.active-indic{width:16px;height:16px;border-radius:9999px;background:white}.step-icon-wrapper{display:flex;flex-direction:row;justify-content:center;align-items:center;width:100%}.step-icon{width:24px;height:24px;background-color:#8D8786;border-radius:9999px;display:flex;align-items:center;justify-content:center;color:white}.step-connector-r,.step-connector-l{height:2px;min-width:40px;flex-grow:1;background-color:#8D8786}.vertical .step-connector-r,.vertical .step-connector-l{height:unset;min-width:unset;width:2px;min-height:40px}'}}]);