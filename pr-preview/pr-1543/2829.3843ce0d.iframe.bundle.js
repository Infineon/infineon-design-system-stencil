"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[2829],{"./dist/esm/ifx-step.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_step:()=>Step});var _index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-b5aac952.js");const Step=class{constructor(hostRef){(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.complete=!1,this.disabled=!1,this.error=!1,this.lastStep=!1,this.stepId=1,this.stepperState={activeStep:1,showStepNumber:!1,variant:"default",indicatorPosition:"left"},this.active=void 0,this.clickable=!1}onStepChange(event){event.detail.previousActiveStep===this.stepId&&this.error&&(this.clickable=!0)}updateCurrentStep(newStepperState){this.active=newStepperState.activeStep===this.stepId}updateErrorState(){this.active&&(this.error=!1)}handleStepClick(){this.disabled||"default"!==this.stepperState.variant||!this.clickable&&!this.complete||this.stepperState.setActiveStep(this.stepId)}handleStepKeyDown(event){this.disabled||"default"!==this.stepperState.variant||!this.clickable&&!this.complete||"Enter"!==event.key||this.stepperState.setActiveStep(this.stepId)}render(){return(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"e6d8d58d4c52c8b4e4d5ab57df458fd9fdb1e6e7","aria-current":!!this.active&&"step","aria-disabled":!this.active&&!this.complete,class:`step-wrapper ${1===this.stepId?"first-step":""} \n                        ${this.error?"error":""}\n                        ${this.stepperState.variant}\n                        ${this.complete?"complete":""}\n                        ${this.lastStep?"last-step":""}\n                        indicator-${this.stepperState.indicatorPosition}\n                        ${this.active?"active":""}\n                        ${this.clickable?"clickable":""}\n                        ${this.disabled?"disabled":""}`},(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"a072f3ad7f99ab674756bee27938bf747069ab7d",class:"step-icon-wrapper"},"default"===this.stepperState.variant&&(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"ad976846d1631eb6f1a62242ab6083773e44442e",class:"step-connector-l"}),"default"===this.stepperState.variant&&(!this.error||this.error&&this.active)&&(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"0556059f8719a4916bdd9f5739fdc27055da6a08",class:"step-icon"},!this.stepperState.showStepNumber||this.complete||this.active?"":this.stepId,this.complete&&!this.active&&(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"75c64cb2ad26685d1b5e10d43b2127fbd8620117",icon:"check16"}),this.active&&(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"d36d99b117b0eb50fab1a6ea7bb6ec8c1aeea144",class:"active-indic"})),"default"===this.stepperState.variant&&this.error&&!this.active&&(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{key:"4284263d6edf4eb233eb60b356fd629d9d8bbf5a",icon:"warningf24"}),"default"===this.stepperState.variant&&(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"eb7f9f8e724f70e9c8492995a69623f200bea970",class:"step-connector-r "+(this.active?"active":"")})),("default"===this.stepperState.variant||"compact"===this.stepperState.variant&&(this.active||this.stepId===this.stepperState.activeStep+1))&&(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"4a44d2d83390d276bd8ca2410641aa992a580034",tabIndex:this.disabled||!this.complete||this.active?-1:0,class:"step-label "+("compact"===this.stepperState.variant?this.active?"curr-label":"next-label":""),onClick:()=>{this.handleStepClick()},onKeyDown:e=>{this.handleStepKeyDown(e)}},"default"===this.stepperState.variant&&(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"60c5933788e4ca25d92f60beb9c18b6b65be505a"}),"compact"!==this.stepperState.variant||this.active?"":"Next: ","compact"===this.stepperState.variant&&(0,_index_b5aac952_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"90578cdff2142e9e9d1f44514b808d818c3670b9"})))}static get watchers(){return{stepperState:["updateCurrentStep"],active:["updateErrorState"]}}};Step.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.step-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;max-width:160px;font:400 1rem/1.5rem "Source Sans 3"}.step-wrapper.compact{gap:0;max-width:100%}.step-wrapper.compact .step-label{max-width:100%;cursor:auto;align-self:flex-start}.step-wrapper.compact.indicator-left{align-items:flex-end;text-align:right}.step-wrapper.compact.indicator-right{align-items:flex-start}.step-wrapper .step-label{max-width:144px;color:#8D8786;word-wrap:break-word}.step-wrapper .step-label.curr-label{font:600 1.25rem/1.75rem "Source Sans 3"}.step-wrapper .step-label.next-label{font:400 0.75rem/1rem "Source Sans 3"}.step-wrapper .step-label :hover{color:#8D8786}.step-wrapper.first-step .step-connector-l{height:0px}.step-wrapper.last-step .step-connector-r{height:0px}.step-wrapper.complete .step-connector-l,.step-wrapper.complete .step-connector-r,.step-wrapper.complete .step-icon{background:#0A8276}.step-wrapper.complete .step-connector-l.active,.step-wrapper.complete .step-connector-l.error,.step-wrapper.complete .step-connector-r.active,.step-wrapper.complete .step-connector-r.error,.step-wrapper.complete .step-icon.active,.step-wrapper.complete .step-icon.error{background:#8D8786}.step-wrapper.complete:not(.disabled) .step-label{cursor:pointer;color:#1D1D1D}.step-wrapper.complete:not(.disabled) .step-label :hover{color:#08665C}.step-wrapper.disabled .step-connector-l,.step-wrapper.disabled .step-connector-r,.step-wrapper.disabled .step-icon{background-color:#8D8786}.step-wrapper.disabled .step-label,.step-wrapper.disabled .step-label :hover{color:#8D8786}.step-wrapper.active .step-connector-l,.step-wrapper.active .step-connector-r,.step-wrapper.active .step-icon{background:#0A8276}.step-wrapper.active .step-connector-l.active,.step-wrapper.active .step-connector-l.error,.step-wrapper.active .step-connector-r.active,.step-wrapper.active .step-connector-r.error,.step-wrapper.active .step-icon.active,.step-wrapper.active .step-icon.error{background:#8D8786}.step-wrapper.active .step-label,.step-wrapper.active .step-label :hover{color:#1D1D1D}.step-wrapper.active.complete .step-label{cursor:auto}.step-wrapper.clickable:not(.active) .step-label{cursor:pointer}.step-wrapper.error:not(.active){color:#CD002F}.step-wrapper.error:not(.active) .step-label{color:#CD002F}.step-wrapper.error:not(.active) .step-label :hover{color:#0A8276}.step-wrapper.disabled .step-label{cursor:auto}.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-l,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-r,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-icon{background:#08665C}.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-l.active,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-l.error,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-r.active,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-r.error,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-icon.active,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-icon.error{background:#8D8786}.step-wrapper:hover.complete:not(.disabled):not(.active) .step-label{color:#08665C}.active-indic{width:16px;height:16px;border-radius:9999px;background:white}.step-icon-wrapper{display:flex;flex-direction:row;justify-content:center;align-items:center}.step-icon{width:24px;height:24px;background-color:#8D8786;border-radius:9999px;display:flex;align-items:center;justify-content:center;color:white}.step-connector-r,.step-connector-l{height:2px;width:68px;background-color:#8D8786}'}}]);