import{r,h as e}from"./index-DVY4_rGT.js";const p=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.step-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;max-width:160px;font:400 1rem/1.5rem "Source Sans 3"}.step-wrapper.compact{gap:0;max-width:100%}.step-wrapper.compact .step-label{max-width:100%;cursor:auto;align-self:flex-start}.step-wrapper.compact.indicator-left{align-items:flex-end;text-align:right}.step-wrapper.compact.indicator-right{align-items:flex-start}.step-wrapper .step-label{max-width:144px;color:#8D8786;word-wrap:break-word}.step-wrapper .step-label.curr-label{font:600 1.25rem/1.75rem "Source Sans 3"}.step-wrapper .step-label.next-label{font:400 0.75rem/1rem "Source Sans 3"}.step-wrapper .step-label :hover{color:#8D8786}.step-wrapper.first-step .step-connector-l{height:0px}.step-wrapper.last-step .step-connector-r{height:0px}.step-wrapper.complete .step-connector-l,.step-wrapper.complete .step-connector-r,.step-wrapper.complete .step-icon{background:#0A8276}.step-wrapper.complete .step-connector-l.active,.step-wrapper.complete .step-connector-l.error,.step-wrapper.complete .step-connector-r.active,.step-wrapper.complete .step-connector-r.error,.step-wrapper.complete .step-icon.active,.step-wrapper.complete .step-icon.error{background:#8D8786}.step-wrapper.complete:not(.disabled) .step-label{cursor:pointer;color:#1D1D1D}.step-wrapper.complete:not(.disabled) .step-label :hover{color:#08665C}.step-wrapper.disabled .step-connector-l,.step-wrapper.disabled .step-connector-r,.step-wrapper.disabled .step-icon{background-color:#8D8786}.step-wrapper.disabled .step-label,.step-wrapper.disabled .step-label :hover{color:#8D8786}.step-wrapper.active .step-connector-l,.step-wrapper.active .step-connector-r,.step-wrapper.active .step-icon{background:#0A8276}.step-wrapper.active .step-connector-l.active,.step-wrapper.active .step-connector-l.error,.step-wrapper.active .step-connector-r.active,.step-wrapper.active .step-connector-r.error,.step-wrapper.active .step-icon.active,.step-wrapper.active .step-icon.error{background:#8D8786}.step-wrapper.active .step-label,.step-wrapper.active .step-label :hover{color:#1D1D1D}.step-wrapper.active.complete .step-label{cursor:auto}.step-wrapper.clickable:not(.active) .step-label{cursor:pointer}.step-wrapper.error:not(.active){color:#CD002F}.step-wrapper.error:not(.active) .step-label{color:#CD002F}.step-wrapper.error:not(.active) .step-label :hover{color:#0A8276}.step-wrapper.disabled .step-label{cursor:auto}.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-l,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-r,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-icon{background:#08665C}.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-l.active,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-l.error,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-r.active,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-r.error,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-icon.active,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-icon.error{background:#8D8786}.step-wrapper:hover.complete:not(.disabled):not(.active) .step-label{color:#08665C}.active-indic{width:16px;height:16px;border-radius:9999px;background:white}.step-icon-wrapper{display:flex;flex-direction:row;justify-content:center;align-items:center}.step-icon{width:24px;height:24px;background-color:#8D8786;border-radius:9999px;display:flex;align-items:center;justify-content:center;color:white}.step-connector-r,.step-connector-l{height:2px;width:68px;background-color:#8D8786}',a=p,s=class{constructor(t){r(this,t),this.complete=!1,this.disabled=!1,this.error=!1,this.lastStep=!1,this.stepId=1,this.stepperState={activeStep:1,showStepNumber:!1,variant:"default",indicatorPosition:"left"},this.active=void 0,this.clickable=!1}onStepChange(t){t.detail.previousActiveStep===this.stepId&&this.error&&(this.clickable=!0)}updateCurrentStep(t){this.active=t.activeStep===this.stepId}updateErrorState(){this.active&&(this.error=!1)}handleStepClick(){!this.disabled&&this.stepperState.variant==="default"&&(this.clickable||this.complete)&&this.stepperState.setActiveStep(this.stepId)}handleStepKeyDown(t){!this.disabled&&this.stepperState.variant==="default"&&(this.clickable||this.complete)&&t.key==="Enter"&&this.stepperState.setActiveStep(this.stepId)}render(){return e("div",{key:"c67638294de8fe34bbac9ea3c7a20820fe447b1e","aria-current":this.active?"step":!1,"aria-disabled":!(this.active||this.complete),class:`step-wrapper ${this.stepId===1?"first-step":""} 
                        ${this.error?"error":""}
                        ${this.stepperState.variant}
                        ${this.complete?"complete":""}
                        ${this.lastStep?"last-step":""}
                        indicator-${this.stepperState.indicatorPosition}
                        ${this.active?"active":""}
                        ${this.clickable?"clickable":""}
                        ${this.disabled?"disabled":""}`},e("div",{key:"ed313eba35ed9d7a9377bc6eb61b32e6ed5d0581",class:"step-icon-wrapper"},this.stepperState.variant==="default"&&e("span",{key:"02b7dfcd1db134c617c9249a7d08a3f276e850e3",class:"step-connector-l"}),this.stepperState.variant==="default"&&(!this.error||this.error&&this.active)&&e("div",{key:"7d04dbb2028ba17cbde20c9cb58bad4716ce0b88",class:"step-icon"},this.stepperState.showStepNumber&&!this.complete&&!this.active?this.stepId:"",this.complete&&!this.active&&e("ifx-icon",{key:"0ef5ef574f6be3b71cf733b2bbffa80757551502",icon:"check16"}),this.active&&e("span",{key:"744247e8aa5402e1e6d3207dc1b7093793bbfa56",class:"active-indic"})),this.stepperState.variant==="default"&&this.error&&!this.active&&e("ifx-icon",{key:"0365ed766f58b4a18a80e3c9d4a5e569c70d7f6c",icon:"warningf24"}),this.stepperState.variant==="default"&&e("span",{key:"7f6660f0ec9a04487f76e754554046b6bc0c8103",class:`step-connector-r ${this.active?"active":""}`})),(this.stepperState.variant==="default"||this.stepperState.variant==="compact"&&(this.active||this.stepId===this.stepperState.activeStep+1))&&e("div",{key:"6d4be1e9525297fee676bd350a35f42a44a8f6b8",tabIndex:!this.disabled&&this.complete&&!this.active?0:-1,class:`step-label ${this.stepperState.variant==="compact"?this.active?"curr-label":"next-label":""}`,onClick:()=>{this.handleStepClick()},onKeyDown:t=>{this.handleStepKeyDown(t)}},this.stepperState.variant==="default"&&e("slot",{key:"8b3328e515fc27761b99359dc0579f2af43058a2"}),this.stepperState.variant==="compact"&&!this.active?"Next: ":"",this.stepperState.variant==="compact"&&e("slot",{key:"00d0e6e3ebbc246bf338dd2b266cd0d67ea745fb"})))}static get watchers(){return{stepperState:["updateCurrentStep"],active:["updateErrorState"]}}};s.style=a;export{s as ifx_step};
