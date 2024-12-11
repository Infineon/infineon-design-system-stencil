"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[4889],{4889:(i,r,p)=>{p.r(r),p.d(r,{ifx_step:()=>c});var t=p(266);const c=(()=>{let a=class{constructor(e){(0,t.r)(this,e),this.complete=!1,this.disabled=!1,this.error=!1,this.lastStep=!1,this.stepId=1,this.stepperState={activeStep:1,showStepNumber:!1,variant:"default",indicatorPosition:"left"},this.active=void 0,this.clickable=!1}onStepChange(e){e.detail.previousActiveStep===this.stepId&&this.error&&(this.clickable=!0)}updateCurrentStep(e){this.active=e.activeStep===this.stepId}updateErrorState(){this.active&&(this.error=!1)}handleStepClick(){!this.disabled&&"compact"!==this.stepperState.variant&&(this.clickable||this.complete)&&this.stepperState.setActiveStep(this.stepId,!0)}handleStepKeyDown(e){!this.disabled&&"compact"!==this.stepperState.variant&&(this.clickable||this.complete)&&"Enter"===e.key&&this.stepperState.setActiveStep(this.stepId,!0)}stopOnClickPropogation(e){this.disabled&&e.stopPropagation()}render(){return(0,t.h)("div",{key:"c8c845647b6369ad3fe1d326969fb453700a5f5c","aria-current":!!this.active&&"step","aria-disabled":!(this.active||this.complete),onClick:e=>this.stopOnClickPropogation(e),class:`step-wrapper ${1===this.stepId?"first-step":""} \n                        ${this.error?"error":""}\n                        ${this.stepperState.variant}\n                        ${this.complete?"complete":""}\n                        ${this.lastStep?"last-step":""}\n                        indicator-${this.stepperState.indicatorPosition}\n                        ${this.active?"active":""}\n                        ${this.clickable?"clickable":""}\n                        ${this.disabled?"disabled":""}`},(0,t.h)("div",{key:"3019d9b56df531149deb257eef6aaeb990dd1fb3",class:"step-icon-wrapper"},"compact"!==this.stepperState.variant&&(0,t.h)("span",{key:"be7fbbcd0bdb5bda59d0b528e2bb60b19bc2708c",class:"step-connector-l"}),"compact"!==this.stepperState.variant&&(!this.error||this.error&&this.active)&&(0,t.h)("div",{key:"49a0b2c9b09b64d0248fa36cde97c3daa3bd2cd7",class:"step-icon"},!this.stepperState.showStepNumber||this.complete||this.active?"":this.stepId,this.complete&&!this.active&&(0,t.h)("ifx-icon",{key:"447cdd5e0773ad569138b71962110195b8c3c17c",icon:"check16"}),this.active&&(0,t.h)("span",{key:"51116fcc79acb005179c179e8e5b5e5f23432808",class:"active-indic"})),"compact"!==this.stepperState.variant&&this.error&&!this.active&&(0,t.h)("ifx-icon",{key:"abae3da7c883fc6ce37742257037b99f0d4b97ab",icon:"warningf24"}),"compact"!==this.stepperState.variant&&(0,t.h)("span",{key:"1d57ea3b21619a36f07ef3608e1d206482d51234",class:"step-connector-r "+(this.active?"active":"")})),("compact"!==this.stepperState.variant||"compact"===this.stepperState.variant&&(this.active||this.stepId===this.stepperState.activeStep+1))&&(0,t.h)("div",{key:"cad82acab0da56e24293c649e5ba5559fa120a92",tabIndex:this.disabled||!this.complete||this.active?-1:0,class:"step-label "+("compact"===this.stepperState.variant?this.active?"curr-label":"next-label":""),onClick:()=>{this.handleStepClick()},onKeyDown:e=>{this.handleStepKeyDown(e)}},"compact"!==this.stepperState.variant&&(0,t.h)("slot",{key:"08ff4b25de6e4df2c127ac33aa1679cff983cd39"}),"compact"!==this.stepperState.variant||this.active?"":"Next: ","compact"===this.stepperState.variant&&(0,t.h)("slot",{key:"029007e8536edb302042d27744ef2847a14b6853"})))}static get watchers(){return{stepperState:["updateCurrentStep"],active:["updateErrorState"]}}};return a.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.step-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;width:100%;gap:8px;font:400 1rem/1.5rem "Source Sans 3"}.step-wrapper.vertical{flex-direction:row;gap:12px;width:unset;height:100%}.step-wrapper.vertical .step-icon-wrapper{flex-direction:column;width:unset;height:100%}.step-wrapper.compact{gap:0;max-width:100%}.step-wrapper.compact .step-label{max-width:100%;cursor:auto;align-self:flex-start}.step-wrapper.compact.indicator-left{align-items:flex-end;text-align:right}.step-wrapper.compact.indicator-right{align-items:flex-start}.step-wrapper .step-label{max-width:90%;color:#8D8786;word-wrap:break-word}.step-wrapper .step-label.curr-label{font:600 1.25rem/1.75rem "Source Sans 3"}.step-wrapper .step-label.next-label{font:400 0.75rem/1rem "Source Sans 3"}.step-wrapper .step-label :hover{color:#8D8786}.step-wrapper.first-step .step-connector-l{height:0px}.step-wrapper.last-step .step-connector-r{height:0px}.step-wrapper.vertical.first-step .step-connector-l,.step-wrapper.vertical.last-step .step-connector-r{width:0px}.step-wrapper.complete .step-connector-l,.step-wrapper.complete .step-connector-r,.step-wrapper.complete .step-icon{background:#0A8276}.step-wrapper.complete .step-connector-l.active,.step-wrapper.complete .step-connector-l.error,.step-wrapper.complete .step-connector-r.active,.step-wrapper.complete .step-connector-r.error,.step-wrapper.complete .step-icon.active,.step-wrapper.complete .step-icon.error{background:#8D8786}.step-wrapper.complete:not(.disabled) .step-label{cursor:pointer;color:#1D1D1D}.step-wrapper.complete:not(.disabled) .step-label :hover{color:#08665C}.step-wrapper.disabled .step-connector-l,.step-wrapper.disabled .step-connector-r,.step-wrapper.disabled .step-icon{background-color:#8D8786}.step-wrapper.disabled .step-label,.step-wrapper.disabled .step-label :hover{color:#8D8786}.step-wrapper.active .step-connector-l,.step-wrapper.active .step-connector-r,.step-wrapper.active .step-icon{background:#0A8276}.step-wrapper.active .step-connector-l.active,.step-wrapper.active .step-connector-l.error,.step-wrapper.active .step-connector-r.active,.step-wrapper.active .step-connector-r.error,.step-wrapper.active .step-icon.active,.step-wrapper.active .step-icon.error{background:#8D8786}.step-wrapper.active .step-label,.step-wrapper.active .step-label :hover{color:#1D1D1D}.step-wrapper.active.complete .step-label{cursor:auto}.step-wrapper.clickable:not(.active) .step-label{cursor:pointer}.step-wrapper.error:not(.active){color:#CD002F}.step-wrapper.error:not(.active) .step-label{color:#CD002F}.step-wrapper.error:not(.active) .step-label :hover{color:#0A8276}.step-wrapper.disabled .step-label{cursor:auto}.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-l,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-r,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-icon{background:#08665C}.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-l.active,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-l.error,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-r.active,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-r.error,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-icon.active,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-icon.error{background:#8D8786}.step-wrapper:hover.complete:not(.disabled):not(.active) .step-label{color:#08665C}.active-indic{width:16px;height:16px;border-radius:9999px;background:white}.step-icon-wrapper{display:flex;flex-direction:row;justify-content:center;align-items:center;width:100%}.step-icon{width:24px;height:24px;background-color:#8D8786;border-radius:9999px;display:flex;align-items:center;justify-content:center;color:white}.step-connector-r,.step-connector-l{height:2px;min-width:40px;flex-grow:1;background-color:#8D8786}.vertical .step-connector-r,.vertical .step-connector-l{height:unset;min-width:unset;width:2px;min-height:40px}',a})()}}]);