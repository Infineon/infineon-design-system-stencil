"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[3756],{3756:(e,t,p)=>{p.r(t),p.d(t,{ifx_step:()=>a});var r=p(7770);const a=class{constructor(e){(0,r.r)(this,e),this.complete=!1,this.error=!1,this.stepId=1,this.lastStep=!1,this.stepperState={activeStep:1,showStepNumber:!1,variant:"default",indicatorPosition:"left"},this.active=void 0}updateCurrentStep(e){this.active=e.activeStep===this.stepId}handleStepClick(){"default"===this.stepperState.variant&&this.complete&&this.stepperState.setActiveStep(this.stepId)}render(){return(0,r.h)("div",{key:"49b923a09d70e7ffbffa0eec5b9f0fed455d2dc5",class:"step-wrapper ".concat(1===this.stepId?"first-step":""," \n                        ").concat(this.error?"error":"","\n                        ").concat(this.stepperState.variant,"\n                        ").concat(this.complete?"complete":"","\n                        ").concat(this.lastStep?"last-step":"","\n                        indicator-").concat(this.stepperState.indicatorPosition,"\n                        ").concat(this.active?"active":"")},(0,r.h)("div",{key:"3fc50a2b2a42e91af9943b4939e2bddce1a54fbd",class:"step-icon-wrapper"},"default"===this.stepperState.variant&&(0,r.h)("span",{class:"step-connector-l"}),"default"===this.stepperState.variant&&(!this.error||this.error&&this.active)&&(0,r.h)("div",{class:"step-icon"},this.stepperState.showStepNumber&&(!this.complete||this.complete&&this.active)?this.stepId:"",this.complete&&!this.active&&(0,r.h)("ifx-icon",{icon:"check16"}),!this.stepperState.showStepNumber&&this.active&&(0,r.h)("span",{class:"active-indic"})),"default"===this.stepperState.variant&&this.error&&!this.active&&(0,r.h)("ifx-icon",{icon:"warningf24"}),"default"===this.stepperState.variant&&(0,r.h)("span",{class:"step-connector-r ".concat(this.active?"active":"")})),("default"===this.stepperState.variant||"compact"===this.stepperState.variant&&(this.active||this.stepId===this.stepperState.activeStep+1))&&(0,r.h)("div",{class:"step-label ".concat("compact"===this.stepperState.variant?this.active?"curr-label":"next-label":""),onClick:()=>{this.handleStepClick()}},"compact"!==this.stepperState.variant||this.active?"":"Next: ",(0,r.h)("slot",null)))}static get watchers(){return{stepperState:["updateCurrentStep"]}}};a.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.step-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;max-width:160px;font:400 1rem/1.5rem "Source Sans 3"}.step-wrapper.compact{gap:0;max-width:100%}.step-wrapper.compact .step-label{max-width:100%}.step-wrapper.compact.indicator-left{align-items:flex-end;text-align:right}.step-wrapper.compact.indicator-right{align-items:flex-start}.step-wrapper.compact .step-label{cursor:auto}.step-wrapper .step-label{max-width:144px;color:#8D8786;word-wrap:break-word}.step-wrapper .step-label.curr-label{font:600 1.25rem/1.75rem "Source Sans 3"}.step-wrapper .step-label.next-label{font:400 0.75rem/1rem "Source Sans 3"}.step-wrapper.first-step .step-connector-l{height:0px}.step-wrapper.last-step .step-connector-r{height:0px}.step-wrapper.complete .step-connector-l,.step-wrapper.complete .step-connector-r,.step-wrapper.complete .step-icon,.step-wrapper.active .step-connector-l,.step-wrapper.active .step-connector-r,.step-wrapper.active .step-icon{background:#0A8276}.step-wrapper.complete .step-connector-l.active,.step-wrapper.complete .step-connector-l.error,.step-wrapper.complete .step-connector-r.active,.step-wrapper.complete .step-connector-r.error,.step-wrapper.complete .step-icon.active,.step-wrapper.complete .step-icon.error,.step-wrapper.active .step-connector-l.active,.step-wrapper.active .step-connector-l.error,.step-wrapper.active .step-connector-r.active,.step-wrapper.active .step-connector-r.error,.step-wrapper.active .step-icon.active,.step-wrapper.active .step-icon.error{background:#8D8786}.step-wrapper.complete .step-label,.step-wrapper.active .step-label{color:#1D1D1D}.step-wrapper.error{color:#CD002F}.step-wrapper.error .step-label{color:#CD002F}.step-wrapper.complete .step-label{cursor:pointer}.active-indic{width:16px;height:16px;border-radius:9999px;background:white}.step-icon-wrapper{display:flex;flex-direction:row;justify-content:center;align-items:center}.step-icon{width:24px;height:24px;background-color:#8D8786;border-radius:9999px;display:flex;align-items:center;justify-content:center;color:white}.step-connector-r,.step-connector-l{height:2px;width:68px;background-color:#8D8786}'}}]);
//# sourceMappingURL=3756.55bcc9fd.chunk.js.map