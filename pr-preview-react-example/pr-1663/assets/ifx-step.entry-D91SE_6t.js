import{r,h as t}from"./index-CvcL_z3I.js";const p=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.step-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;width:100%;gap:8px;font:400 1rem/1.5rem "Source Sans 3"}.step-wrapper.vertical{flex-direction:row;gap:12px;width:unset;height:100%}.step-wrapper.vertical .step-icon-wrapper{flex-direction:column;width:unset;height:100%}.step-wrapper.compact{gap:0;max-width:100%}.step-wrapper.compact .step-label{max-width:100%;cursor:auto;align-self:flex-start}.step-wrapper.compact.indicator-left{align-items:flex-end;text-align:right}.step-wrapper.compact.indicator-right{align-items:flex-start}.step-wrapper .step-label{max-width:90%;color:#8D8786;word-wrap:break-word}.step-wrapper .step-label.curr-label{font:600 1.25rem/1.75rem "Source Sans 3"}.step-wrapper .step-label.next-label{font:400 0.75rem/1rem "Source Sans 3"}.step-wrapper .step-label :hover{color:#8D8786}.step-wrapper.first-step .step-connector-l{height:0px}.step-wrapper.last-step .step-connector-r{height:0px}.step-wrapper.vertical.first-step .step-connector-l,.step-wrapper.vertical.last-step .step-connector-r{width:0px}.step-wrapper.complete .step-connector-l,.step-wrapper.complete .step-connector-r,.step-wrapper.complete .step-icon{background:#0A8276}.step-wrapper.complete .step-connector-l.active,.step-wrapper.complete .step-connector-l.error,.step-wrapper.complete .step-connector-r.active,.step-wrapper.complete .step-connector-r.error,.step-wrapper.complete .step-icon.active,.step-wrapper.complete .step-icon.error{background:#8D8786}.step-wrapper.complete:not(.disabled) .step-label{cursor:pointer;color:#1D1D1D}.step-wrapper.complete:not(.disabled) .step-label :hover{color:#08665C}.step-wrapper.disabled .step-connector-l,.step-wrapper.disabled .step-connector-r,.step-wrapper.disabled .step-icon{background-color:#8D8786}.step-wrapper.disabled .step-label,.step-wrapper.disabled .step-label :hover{color:#8D8786}.step-wrapper.active .step-connector-l,.step-wrapper.active .step-connector-r,.step-wrapper.active .step-icon{background:#0A8276}.step-wrapper.active .step-connector-l.active,.step-wrapper.active .step-connector-l.error,.step-wrapper.active .step-connector-r.active,.step-wrapper.active .step-connector-r.error,.step-wrapper.active .step-icon.active,.step-wrapper.active .step-icon.error{background:#8D8786}.step-wrapper.active .step-label,.step-wrapper.active .step-label :hover{color:#1D1D1D}.step-wrapper.active.complete .step-label{cursor:auto}.step-wrapper.clickable:not(.active) .step-label{cursor:pointer}.step-wrapper.error:not(.active){color:#CD002F}.step-wrapper.error:not(.active) .step-label{color:#CD002F}.step-wrapper.error:not(.active) .step-label :hover{color:#0A8276}.step-wrapper.disabled .step-label{cursor:auto}.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-l,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-r,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-icon{background:#08665C}.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-l.active,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-l.error,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-r.active,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-r.error,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-icon.active,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-icon.error{background:#8D8786}.step-wrapper:hover.complete:not(.disabled):not(.active) .step-label{color:#08665C}.active-indic{width:16px;height:16px;border-radius:9999px;background:white}.step-icon-wrapper{display:flex;flex-direction:row;justify-content:center;align-items:center;width:100%}.step-icon{width:24px;height:24px;background-color:#8D8786;border-radius:9999px;display:flex;align-items:center;justify-content:center;color:white}.step-connector-r,.step-connector-l{height:2px;min-width:40px;flex-grow:1;background-color:#8D8786}.vertical .step-connector-r,.vertical .step-connector-l{height:unset;min-width:unset;width:2px;min-height:40px}',a=p,s=class{constructor(e){r(this,e),this.complete=!1,this.disabled=!1,this.error=!1,this.lastStep=!1,this.stepId=1,this.stepperState={activeStep:1,showStepNumber:!1,variant:"default",indicatorPosition:"left"},this.active=void 0,this.clickable=!1}onStepChange(e){e.detail.previousActiveStep===this.stepId&&this.error&&(this.clickable=!0)}updateCurrentStep(e){this.active=e.activeStep===this.stepId}updateErrorState(){this.active&&(this.error=!1)}handleStepClick(){!this.disabled&&this.stepperState.variant!=="compact"&&(this.clickable||this.complete)&&this.stepperState.setActiveStep(this.stepId,!0)}handleStepKeyDown(e){!this.disabled&&this.stepperState.variant!=="compact"&&(this.clickable||this.complete)&&e.key==="Enter"&&this.stepperState.setActiveStep(this.stepId,!0)}stopOnClickPropogation(e){this.disabled&&e.stopPropagation()}render(){return t("div",{key:"f811f73051339e459e5b3e8b2c808874b1b10ea9","aria-current":this.active?"step":!1,"aria-disabled":!(this.active||this.complete),onClick:e=>this.stopOnClickPropogation(e),class:`step-wrapper ${this.stepId===1?"first-step":""} 
                        ${this.error?"error":""}
                        ${this.stepperState.variant}
                        ${this.complete?"complete":""}
                        ${this.lastStep?"last-step":""}
                        indicator-${this.stepperState.indicatorPosition}
                        ${this.active?"active":""}
                        ${this.clickable?"clickable":""}
                        ${this.disabled?"disabled":""}`},t("div",{key:"2f237e3543d9a65ccaa722d43934560f8c0c6a29",class:"step-icon-wrapper"},this.stepperState.variant!=="compact"&&t("span",{key:"d5be70693ae61126845412a1ae919d81cc16dd0a",class:"step-connector-l"}),this.stepperState.variant!=="compact"&&(!this.error||this.error&&this.active)&&t("div",{key:"6fee4e214c21761f24ba9b2a113368b4b086e5d0",class:"step-icon"},this.stepperState.showStepNumber&&!this.complete&&!this.active?this.stepId:"",this.complete&&!this.active&&t("ifx-icon",{key:"e6e8aa2938c443da65655418b4718ab5f1534116",icon:"check16"}),this.active&&t("span",{key:"36c5708b9872ef0742c062c3475421819b5a6942",class:"active-indic"})),this.stepperState.variant!=="compact"&&this.error&&!this.active&&t("ifx-icon",{key:"083e478b3acf9da5f74291be63d5ceec8f63fcf9",icon:"warningf24"}),this.stepperState.variant!=="compact"&&t("span",{key:"a4b4dd719be8a309d5adf6c229428115ed4a189e",class:`step-connector-r ${this.active?"active":""}`})),(this.stepperState.variant!=="compact"||this.stepperState.variant==="compact"&&(this.active||this.stepId===this.stepperState.activeStep+1))&&t("div",{key:"38ab0d35f35090fc408ecb8fc26221d1c6fc5d26",tabIndex:!this.disabled&&this.complete&&!this.active?0:-1,class:`step-label ${this.stepperState.variant==="compact"?this.active?"curr-label":"next-label":""}`,onClick:()=>{this.handleStepClick()},onKeyDown:e=>{this.handleStepKeyDown(e)}},this.stepperState.variant!=="compact"&&t("slot",{key:"af0c3cde7247fc38da13cc38b6f0287f62c87688"}),this.stepperState.variant==="compact"&&!this.active?"Next: ":"",this.stepperState.variant==="compact"&&t("slot",{key:"b6807a0ca71455d51eb73e1ec0c065e2e0a9d233"})))}static get watchers(){return{stepperState:["updateCurrentStep"],active:["updateErrorState"]}}};s.style=a;export{s as ifx_step};
