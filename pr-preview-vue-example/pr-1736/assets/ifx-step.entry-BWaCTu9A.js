import{r,h as t}from"./index-Dk5zcvI1.js";const p=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.step-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;width:100%;gap:8px;font:400 1rem/1.5rem "Source Sans 3"}.step-wrapper.vertical{flex-direction:row;gap:12px;width:unset;height:100%}.step-wrapper.vertical .step-icon-wrapper{flex-direction:column;width:unset;height:100%}.step-wrapper.compact{gap:0;max-width:100%}.step-wrapper.compact .step-label{max-width:100%;cursor:auto;align-self:flex-start}.step-wrapper.compact.indicator-left{align-items:flex-end;text-align:right}.step-wrapper.compact.indicator-right{align-items:flex-start}.step-wrapper .step-label{max-width:90%;color:#8D8786;word-wrap:break-word}.step-wrapper .step-label.curr-label{font:600 1.25rem/1.75rem "Source Sans 3"}.step-wrapper .step-label.next-label{font:400 0.75rem/1rem "Source Sans 3"}.step-wrapper .step-label :hover{color:#8D8786}.step-wrapper.first-step .step-connector-l{height:0px}.step-wrapper.last-step .step-connector-r{height:0px}.step-wrapper.vertical.first-step .step-connector-l,.step-wrapper.vertical.last-step .step-connector-r{width:0px}.step-wrapper.complete .step-connector-l,.step-wrapper.complete .step-connector-r,.step-wrapper.complete .step-icon{background:#0A8276}.step-wrapper.complete .step-connector-l.active,.step-wrapper.complete .step-connector-l.error,.step-wrapper.complete .step-connector-r.active,.step-wrapper.complete .step-connector-r.error,.step-wrapper.complete .step-icon.active,.step-wrapper.complete .step-icon.error{background:#8D8786}.step-wrapper.complete:not(.disabled) .step-label{cursor:pointer;color:#1D1D1D}.step-wrapper.complete:not(.disabled) .step-label :hover{color:#08665C}.step-wrapper.disabled .step-connector-l,.step-wrapper.disabled .step-connector-r,.step-wrapper.disabled .step-icon{background-color:#8D8786}.step-wrapper.disabled .step-label,.step-wrapper.disabled .step-label :hover{color:#8D8786}.step-wrapper.active .step-connector-l,.step-wrapper.active .step-connector-r,.step-wrapper.active .step-icon{background:#0A8276}.step-wrapper.active .step-connector-l.active,.step-wrapper.active .step-connector-l.error,.step-wrapper.active .step-connector-r.active,.step-wrapper.active .step-connector-r.error,.step-wrapper.active .step-icon.active,.step-wrapper.active .step-icon.error{background:#8D8786}.step-wrapper.active .step-label,.step-wrapper.active .step-label :hover{color:#1D1D1D}.step-wrapper.active.complete .step-label{cursor:auto}.step-wrapper.clickable:not(.active) .step-label{cursor:pointer}.step-wrapper.error:not(.active){color:#CD002F}.step-wrapper.error:not(.active) .step-label{color:#CD002F}.step-wrapper.error:not(.active) .step-label :hover{color:#0A8276}.step-wrapper.disabled .step-label{cursor:auto}.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-l,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-r,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-icon{background:#08665C}.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-l.active,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-l.error,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-r.active,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-r.error,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-icon.active,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-icon.error{background:#8D8786}.step-wrapper:hover.complete:not(.disabled):not(.active) .step-label{color:#08665C}.active-indic{width:16px;height:16px;border-radius:9999px;background:white}.step-icon-wrapper{display:flex;flex-direction:row;justify-content:center;align-items:center;width:100%}.step-icon{width:24px;height:24px;background-color:#8D8786;border-radius:9999px;display:flex;align-items:center;justify-content:center;color:white}.step-connector-r,.step-connector-l{height:2px;min-width:40px;flex-grow:1;background-color:#8D8786}.vertical .step-connector-r,.vertical .step-connector-l{height:unset;min-width:unset;width:2px;min-height:40px}',a=p,s=class{constructor(e){r(this,e),this.complete=!1,this.disabled=!1,this.error=!1,this.lastStep=!1,this.stepId=1,this.stepperState={activeStep:1,showStepNumber:!1,variant:"default",indicatorPosition:"left"},this.clickable=!1}onStepChange(e){e.detail.previousActiveStep===this.stepId&&this.error&&(this.clickable=!0)}updateCurrentStep(e){this.active=e.activeStep===this.stepId}updateErrorState(){this.active&&(this.error=!1)}handleStepClick(){!this.disabled&&this.stepperState.variant!=="compact"&&(this.clickable||this.complete)&&this.stepperState.setActiveStep(this.stepId,!0)}handleStepKeyDown(e){!this.disabled&&this.stepperState.variant!=="compact"&&(this.clickable||this.complete)&&e.key==="Enter"&&this.stepperState.setActiveStep(this.stepId,!0)}stopOnClickPropogation(e){this.disabled&&e.stopPropagation()}render(){return t("div",{key:"89bf8ebdda8d27e4d64eb115375f101e6bd63a47","aria-current":this.active?"step":!1,"aria-disabled":!(this.active||this.complete),onClick:e=>this.stopOnClickPropogation(e),class:`step-wrapper ${this.stepId===1?"first-step":""} 
                        ${this.error?"error":""}
                        ${this.stepperState.variant}
                        ${this.complete?"complete":""}
                        ${this.lastStep?"last-step":""}
                        indicator-${this.stepperState.indicatorPosition}
                        ${this.active?"active":""}
                        ${this.clickable?"clickable":""}
                        ${this.disabled?"disabled":""}`},t("div",{key:"7d132907a091474aab641783df974ef713d2e082",class:"step-icon-wrapper"},this.stepperState.variant!=="compact"&&t("span",{key:"addc3091c2c1bff1f15bff47b688b41503ac0170",class:"step-connector-l"}),this.stepperState.variant!=="compact"&&(!this.error||this.error&&this.active)&&t("div",{key:"36ea1c2447f4d1315c67c1d7c55c008ada016eb7",class:"step-icon"},this.stepperState.showStepNumber&&!this.complete&&!this.active?this.stepId:"",this.complete&&!this.active&&t("ifx-icon",{key:"7f9cd53a08acdb8a91c636a033d4728159857533",icon:"check16"}),this.active&&t("span",{key:"fd7461691611746decffa1f53a6d7c5d3401e267",class:"active-indic"})),this.stepperState.variant!=="compact"&&this.error&&!this.active&&t("ifx-icon",{key:"47b3af98bab586eb434a8161fe1b3954268aa7ab",icon:"warningf24"}),this.stepperState.variant!=="compact"&&t("span",{key:"1e67448a5a81c2dfb049ac20f0dd353dd83e3ab6",class:`step-connector-r ${this.active?"active":""}`})),(this.stepperState.variant!=="compact"||this.stepperState.variant==="compact"&&(this.active||this.stepId===this.stepperState.activeStep+1))&&t("div",{key:"fc375ac7341cdae182d5cdb32e03a7ca93dd10aa",tabIndex:!this.disabled&&this.complete&&!this.active?0:-1,class:`step-label ${this.stepperState.variant==="compact"?this.active?"curr-label":"next-label":""}`,onClick:()=>{this.handleStepClick()},onKeyDown:e=>{this.handleStepKeyDown(e)}},this.stepperState.variant!=="compact"&&t("slot",{key:"40fc3dfa9690e41aa522857c67e07765f68251dc"}),this.stepperState.variant==="compact"&&!this.active?"Next: ":"",this.stepperState.variant==="compact"&&t("slot",{key:"5d43cd127b2a67b63d976084ef8265d048c27b2a"})))}static get watchers(){return{stepperState:["updateCurrentStep"],active:["updateErrorState"]}}};s.style=a;export{s as ifx_step};
