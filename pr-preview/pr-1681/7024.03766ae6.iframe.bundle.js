"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[7024],{"./dist/esm/ifx-step.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_step:()=>Step});var _index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-adb4dbd9.js");const Step=class{constructor(hostRef){(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.complete=!1,this.disabled=!1,this.error=!1,this.lastStep=!1,this.stepId=1,this.stepperState={activeStep:1,showStepNumber:!1,variant:"default",indicatorPosition:"left"},this.clickable=!1}onStepChange(event){event.detail.previousActiveStep===this.stepId&&this.error&&(this.clickable=!0)}updateCurrentStep(newStepperState){this.active=newStepperState.activeStep===this.stepId}updateErrorState(){this.active&&(this.error=!1)}handleStepClick(){this.disabled||"compact"===this.stepperState.variant||!this.clickable&&!this.complete||this.stepperState.setActiveStep(this.stepId,!0)}handleStepKeyDown(event){this.disabled||"compact"===this.stepperState.variant||!this.clickable&&!this.complete||"Enter"!==event.key||this.stepperState.setActiveStep(this.stepId,!0)}stopOnClickPropogation(event){this.disabled&&event.stopPropagation()}render(){return(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"cbee70d7f0f5c76a09d48423566bc3d485cd929a","aria-current":!!this.active&&"step","aria-disabled":!this.active&&!this.complete,onClick:e=>this.stopOnClickPropogation(e),class:`step-wrapper ${1===this.stepId?"first-step":""} \n                        ${this.error?"error":""}\n                        ${this.stepperState.variant}\n                        ${this.complete?"complete":""}\n                        ${this.lastStep?"last-step":""}\n                        indicator-${this.stepperState.indicatorPosition}\n                        ${this.active?"active":""}\n                        ${this.clickable?"clickable":""}\n                        ${this.disabled?"disabled":""}`},(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"fee2738c8478680320ec50c53a92d6e7b92a86e3",class:"step-icon-wrapper"},"compact"!==this.stepperState.variant&&(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"96aa1a741cd013b6ae17f32de2725c368ea51618",class:"step-connector-l"}),"compact"!==this.stepperState.variant&&(!this.error||this.error&&this.active)&&(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"c9c696ac8898befd165fed334c36e7f77c91aa4f",class:"step-icon"},!this.stepperState.showStepNumber||this.complete||this.active?"":this.stepId,this.complete&&!this.active&&(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"98ff6e603c94aa1a57c5f8491dcf2a17cd4a4864",icon:"check16"}),this.active&&(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"2fc5ce8a43ef62ecae07fbf25688af0b629b8e6d",class:"active-indic"})),"compact"!==this.stepperState.variant&&this.error&&!this.active&&(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"72db4eb91a114022e470d14e035c1ff4364f6f00",icon:"warningf24"}),"compact"!==this.stepperState.variant&&(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"0a215fa7c2df964b4743f0fb0b16652b92003bfa",class:"step-connector-r "+(this.active?"active":"")})),("compact"!==this.stepperState.variant||"compact"===this.stepperState.variant&&(this.active||this.stepId===this.stepperState.activeStep+1))&&(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"9b77faa804a42714b79535bfe530854c68ca6372",tabIndex:this.disabled||!this.complete||this.active?-1:0,class:"step-label "+("compact"===this.stepperState.variant?this.active?"curr-label":"next-label":""),onClick:()=>{this.handleStepClick()},onKeyDown:e=>{this.handleStepKeyDown(e)}},"compact"!==this.stepperState.variant&&(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"a84af39da90db9e59e3b614f63de9802161a0e51"}),"compact"!==this.stepperState.variant||this.active?"":"Next: ","compact"===this.stepperState.variant&&(0,_index_adb4dbd9_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"bdfaff2aed9faf5503fb89b7e2105c48d721dbe2"})))}static get watchers(){return{stepperState:["updateCurrentStep"],active:["updateErrorState"]}}};Step.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.step-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;width:100%;gap:8px;font:400 1rem/1.5rem "Source Sans 3"}.step-wrapper.vertical{flex-direction:row;gap:12px;width:unset;height:100%}.step-wrapper.vertical .step-icon-wrapper{flex-direction:column;width:unset;height:100%}.step-wrapper.compact{gap:0;max-width:100%}.step-wrapper.compact .step-label{max-width:100%;cursor:auto;align-self:flex-start}.step-wrapper.compact.indicator-left{align-items:flex-end;text-align:right}.step-wrapper.compact.indicator-right{align-items:flex-start}.step-wrapper .step-label{max-width:90%;color:#8D8786;word-wrap:break-word}.step-wrapper .step-label.curr-label{font:600 1.25rem/1.75rem "Source Sans 3"}.step-wrapper .step-label.next-label{font:400 0.75rem/1rem "Source Sans 3"}.step-wrapper .step-label :hover{color:#8D8786}.step-wrapper.first-step .step-connector-l{height:0px}.step-wrapper.last-step .step-connector-r{height:0px}.step-wrapper.vertical.first-step .step-connector-l,.step-wrapper.vertical.last-step .step-connector-r{width:0px}.step-wrapper.complete .step-connector-l,.step-wrapper.complete .step-connector-r,.step-wrapper.complete .step-icon{background:#0A8276}.step-wrapper.complete .step-connector-l.active,.step-wrapper.complete .step-connector-l.error,.step-wrapper.complete .step-connector-r.active,.step-wrapper.complete .step-connector-r.error,.step-wrapper.complete .step-icon.active,.step-wrapper.complete .step-icon.error{background:#8D8786}.step-wrapper.complete:not(.disabled) .step-label{cursor:pointer;color:#1D1D1D}.step-wrapper.complete:not(.disabled) .step-label :hover{color:#08665C}.step-wrapper.disabled .step-connector-l,.step-wrapper.disabled .step-connector-r,.step-wrapper.disabled .step-icon{background-color:#8D8786}.step-wrapper.disabled .step-label,.step-wrapper.disabled .step-label :hover{color:#8D8786}.step-wrapper.active .step-connector-l,.step-wrapper.active .step-connector-r,.step-wrapper.active .step-icon{background:#0A8276}.step-wrapper.active .step-connector-l.active,.step-wrapper.active .step-connector-l.error,.step-wrapper.active .step-connector-r.active,.step-wrapper.active .step-connector-r.error,.step-wrapper.active .step-icon.active,.step-wrapper.active .step-icon.error{background:#8D8786}.step-wrapper.active .step-label,.step-wrapper.active .step-label :hover{color:#1D1D1D}.step-wrapper.active.complete .step-label{cursor:auto}.step-wrapper.clickable:not(.active) .step-label{cursor:pointer}.step-wrapper.error:not(.active){color:#CD002F}.step-wrapper.error:not(.active) .step-label{color:#CD002F}.step-wrapper.error:not(.active) .step-label :hover{color:#0A8276}.step-wrapper.disabled .step-label{cursor:auto}.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-l,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-r,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-icon{background:#08665C}.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-l.active,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-l.error,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-r.active,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-r.error,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-icon.active,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-icon.error{background:#8D8786}.step-wrapper:hover.complete:not(.disabled):not(.active) .step-label{color:#08665C}.active-indic{width:16px;height:16px;border-radius:9999px;background:white}.step-icon-wrapper{display:flex;flex-direction:row;justify-content:center;align-items:center;width:100%}.step-icon{width:24px;height:24px;background-color:#8D8786;border-radius:9999px;display:flex;align-items:center;justify-content:center;color:white}.step-connector-r,.step-connector-l{height:2px;min-width:40px;flex-grow:1;background-color:#8D8786}.vertical .step-connector-r,.vertical .step-connector-l{height:unset;min-width:unset;width:2px;min-height:40px}'}}]);