"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[4889],{4889:(i,r,p)=>{p.r(r),p.d(r,{ifx_step:()=>s});var e=p(3639);const s=class{constructor(t){(0,e.r)(this,t),this.complete=!1,this.error=!1,this.lastStep=!1,this.stepId=1,this.stepperState={activeStep:1,showStepNumber:!1,variant:"default",indicatorPosition:"left"},this.active=void 0,this.clickable=!1}onStepChange(t){t.detail.previousActiveStep===this.stepId&&this.error&&(this.clickable=!0)}updateCurrentStep(t){this.active=t.activeStep===this.stepId}updateErrorState(){this.active&&this.error&&(this.error=!1)}handleStepClick(){"default"===this.stepperState.variant&&(this.clickable||this.complete)&&this.stepperState.setActiveStep(this.stepId)}handleStepKeyDown(t){"default"===this.stepperState.variant&&(this.clickable||this.complete)&&"Enter"===t.key&&this.stepperState.setActiveStep(this.stepId)}render(){return(0,e.h)("div",{key:"43a19207e1268ff2d927677e8dc076261e945962","aria-current":!!this.active&&"step","aria-disabled":!(this.active||this.complete),class:`step-wrapper ${1===this.stepId?"first-step":""} \n                        ${this.error?"error":""}\n                        ${this.stepperState.variant}\n                        ${this.complete?"complete":""}\n                        ${this.lastStep?"last-step":""}\n                        indicator-${this.stepperState.indicatorPosition}\n                        ${this.active?"active":""}\n                        ${this.clickable?"clickable":""}`},(0,e.h)("div",{key:"2335c9dbf69d507d2b138de0dc388fe45b8460c8",class:"step-icon-wrapper"},"default"===this.stepperState.variant&&(0,e.h)("span",{class:"step-connector-l"}),"default"===this.stepperState.variant&&(!this.error||this.error&&this.active)&&(0,e.h)("div",{class:"step-icon"},!this.stepperState.showStepNumber||this.complete||this.active?"":this.stepId,this.complete&&!this.active&&(0,e.h)("ifx-icon",{icon:"check16"}),this.active&&(0,e.h)("span",{class:"active-indic"})),"default"===this.stepperState.variant&&this.error&&!this.active&&(0,e.h)("ifx-icon",{icon:"warningf24"}),"default"===this.stepperState.variant&&(0,e.h)("span",{class:"step-connector-r "+(this.active?"active":"")})),("default"===this.stepperState.variant||"compact"===this.stepperState.variant&&(this.active||this.stepId===this.stepperState.activeStep+1))&&(0,e.h)("div",{tabIndex:this.complete&&!this.active?0:-1,class:"step-label "+("compact"===this.stepperState.variant?this.active?"curr-label":"next-label":""),onClick:()=>{this.handleStepClick()},onKeyDown:t=>{this.handleStepKeyDown(t)}},"default"===this.stepperState.variant&&(0,e.h)("ifx-link",{variant:"underlined"},(0,e.h)("slot",null)),"compact"!==this.stepperState.variant||this.active?"":"Next: ","compact"===this.stepperState.variant&&(0,e.h)("slot",null)))}static get watchers(){return{stepperState:["updateCurrentStep"],active:["updateErrorState"]}}};s.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.step-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;max-width:160px;font:400 1rem/1.5rem "Source Sans 3"}.step-wrapper.compact{gap:0;max-width:100%}.step-wrapper.compact .step-label{max-width:100%}.step-wrapper.compact.indicator-left{align-items:flex-end;text-align:right}.step-wrapper.compact.indicator-right{align-items:flex-start}.step-wrapper.compact .step-label{cursor:auto}.step-wrapper .step-label{max-width:144px;color:#8D8786;word-wrap:break-word}.step-wrapper .step-label.curr-label{font:600 1.25rem/1.75rem "Source Sans 3"}.step-wrapper .step-label.next-label{font:400 0.75rem/1rem "Source Sans 3"}.step-wrapper.first-step .step-connector-l{height:0px}.step-wrapper.last-step .step-connector-r{height:0px}.step-wrapper.complete .step-connector-l,.step-wrapper.complete .step-connector-r,.step-wrapper.complete .step-icon,.step-wrapper.active .step-connector-l,.step-wrapper.active .step-connector-r,.step-wrapper.active .step-icon{background:#0A8276}.step-wrapper.complete .step-connector-l.active,.step-wrapper.complete .step-connector-l.error,.step-wrapper.complete .step-connector-r.active,.step-wrapper.complete .step-connector-r.error,.step-wrapper.complete .step-icon.active,.step-wrapper.complete .step-icon.error,.step-wrapper.active .step-connector-l.active,.step-wrapper.active .step-connector-l.error,.step-wrapper.active .step-connector-r.active,.step-wrapper.active .step-connector-r.error,.step-wrapper.active .step-icon.active,.step-wrapper.active .step-icon.error{background:#8D8786}.step-wrapper.complete .step-label,.step-wrapper.active .step-label{color:#1D1D1D}.step-wrapper.complete .step-label,.step-wrapper.clickable .step-label{cursor:pointer}.step-wrapper.active .step-label{cursor:auto}.step-wrapper.error:not(.active){color:#CD002F}.step-wrapper.error:not(.active) .step-label{color:#CD002F}.active-indic{width:16px;height:16px;border-radius:9999px;background:white}.step-icon-wrapper{display:flex;flex-direction:row;justify-content:center;align-items:center}.step-icon{width:24px;height:24px;background-color:#8D8786;border-radius:9999px;display:flex;align-items:center;justify-content:center;color:white}.step-connector-r,.step-connector-l{height:2px;width:68px;background-color:#8D8786}'}}]);