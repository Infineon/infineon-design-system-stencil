import{r,h as t}from"./index-DbMIOHs9.js";const p=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.step-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;width:100%;gap:8px;font:400 1rem/1.5rem "Source Sans 3"}.step-wrapper.vertical{flex-direction:row;gap:12px;width:unset;height:100%}.step-wrapper.vertical .step-icon-wrapper{flex-direction:column;width:unset;height:100%}.step-wrapper.compact{gap:0;max-width:100%}.step-wrapper.compact .step-label{max-width:100%;cursor:auto;align-self:flex-start}.step-wrapper.compact.indicator-left{align-items:flex-end;text-align:right}.step-wrapper.compact.indicator-right{align-items:flex-start}.step-wrapper .step-label{max-width:90%;color:#8D8786;word-wrap:break-word}.step-wrapper .step-label.curr-label{font:600 1.25rem/1.75rem "Source Sans 3"}.step-wrapper .step-label.next-label{font:400 0.75rem/1rem "Source Sans 3"}.step-wrapper .step-label :hover{color:#8D8786}.step-wrapper.first-step .step-connector-l{height:0px}.step-wrapper.last-step .step-connector-r{height:0px}.step-wrapper.vertical.first-step .step-connector-l,.step-wrapper.vertical.last-step .step-connector-r{width:0px}.step-wrapper.complete .step-connector-l,.step-wrapper.complete .step-connector-r,.step-wrapper.complete .step-icon{background:#0A8276}.step-wrapper.complete .step-connector-l.active,.step-wrapper.complete .step-connector-l.error,.step-wrapper.complete .step-connector-r.active,.step-wrapper.complete .step-connector-r.error,.step-wrapper.complete .step-icon.active,.step-wrapper.complete .step-icon.error{background:#8D8786}.step-wrapper.complete:not(.disabled) .step-label{cursor:pointer;color:#1D1D1D}.step-wrapper.complete:not(.disabled) .step-label :hover{color:#08665C}.step-wrapper.disabled .step-connector-l,.step-wrapper.disabled .step-connector-r,.step-wrapper.disabled .step-icon{background-color:#8D8786}.step-wrapper.disabled .step-label,.step-wrapper.disabled .step-label :hover{color:#8D8786}.step-wrapper.active .step-connector-l,.step-wrapper.active .step-connector-r,.step-wrapper.active .step-icon{background:#0A8276}.step-wrapper.active .step-connector-l.active,.step-wrapper.active .step-connector-l.error,.step-wrapper.active .step-connector-r.active,.step-wrapper.active .step-connector-r.error,.step-wrapper.active .step-icon.active,.step-wrapper.active .step-icon.error{background:#8D8786}.step-wrapper.active .step-label,.step-wrapper.active .step-label :hover{color:#1D1D1D}.step-wrapper.active.complete .step-label{cursor:auto}.step-wrapper.clickable:not(.active) .step-label{cursor:pointer}.step-wrapper.error:not(.active){color:#CD002F}.step-wrapper.error:not(.active) .step-label{color:#CD002F}.step-wrapper.error:not(.active) .step-label :hover{color:#0A8276}.step-wrapper.disabled .step-label{cursor:auto}.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-l,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-r,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-icon{background:#08665C}.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-l.active,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-l.error,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-r.active,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-connector-r.error,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-icon.active,.step-wrapper:hover.complete:not(.disabled):not(.active) .step-icon.error{background:#8D8786}.step-wrapper:hover.complete:not(.disabled):not(.active) .step-label{color:#08665C}.active-indic{width:16px;height:16px;border-radius:9999px;background:white}.step-icon-wrapper{display:flex;flex-direction:row;justify-content:center;align-items:center;width:100%}.step-icon{width:24px;height:24px;background-color:#8D8786;border-radius:9999px;display:flex;align-items:center;justify-content:center;color:white}.step-connector-r,.step-connector-l{height:2px;min-width:40px;flex-grow:1;background-color:#8D8786}.vertical .step-connector-r,.vertical .step-connector-l{height:unset;min-width:unset;width:2px;min-height:40px}',a=p,s=class{constructor(e){r(this,e),this.complete=!1,this.disabled=!1,this.error=!1,this.lastStep=!1,this.stepId=1,this.stepperState={activeStep:1,showStepNumber:!1,variant:"default",indicatorPosition:"left"},this.clickable=!1}onStepChange(e){e.detail.previousActiveStep===this.stepId&&this.error&&(this.clickable=!0)}updateCurrentStep(e){this.active=e.activeStep===this.stepId}updateErrorState(){this.active&&(this.error=!1)}handleStepClick(){!this.disabled&&this.stepperState.variant!=="compact"&&(this.clickable||this.complete)&&this.stepperState.setActiveStep(this.stepId,!0)}handleStepKeyDown(e){!this.disabled&&this.stepperState.variant!=="compact"&&(this.clickable||this.complete)&&e.key==="Enter"&&this.stepperState.setActiveStep(this.stepId,!0)}stopOnClickPropogation(e){this.disabled&&e.stopPropagation()}render(){return t("div",{key:"925e6b06172fc6b6576d7b8b7306d9de36ea4560","aria-current":this.active?"step":!1,"aria-disabled":!(this.active||this.complete),onClick:e=>this.stopOnClickPropogation(e),class:`step-wrapper ${this.stepId===1?"first-step":""} 
                        ${this.error?"error":""}
                        ${this.stepperState.variant}
                        ${this.complete?"complete":""}
                        ${this.lastStep?"last-step":""}
                        indicator-${this.stepperState.indicatorPosition}
                        ${this.active?"active":""}
                        ${this.clickable?"clickable":""}
                        ${this.disabled?"disabled":""}`},t("div",{key:"2dc7d44a955791c966a55c6d670f76bacdb775da",class:"step-icon-wrapper"},this.stepperState.variant!=="compact"&&t("span",{key:"5058cf86d85cadb0d095fe11b0064c2ccff9c8c8",class:"step-connector-l"}),this.stepperState.variant!=="compact"&&(!this.error||this.error&&this.active)&&t("div",{key:"00f6e392d71882be03be90041d8dd2b9d7f40ca9",class:"step-icon"},this.stepperState.showStepNumber&&!this.complete&&!this.active?this.stepId:"",this.complete&&!this.active&&t("ifx-icon",{key:"09ba89006b6d827d6979884bd6103946519a1faf",icon:"check16"}),this.active&&t("span",{key:"d6c39396f50e4c0823a1ef2768445e1a14c14e14",class:"active-indic"})),this.stepperState.variant!=="compact"&&this.error&&!this.active&&t("ifx-icon",{key:"6da9cf7c09fa7c7fcfd9e126cbf4874e5f40a2e2",icon:"warningf24"}),this.stepperState.variant!=="compact"&&t("span",{key:"adeb9666136b01922591bbc8d4650b683f9bb5b6",class:`step-connector-r ${this.active?"active":""}`})),(this.stepperState.variant!=="compact"||this.stepperState.variant==="compact"&&(this.active||this.stepId===this.stepperState.activeStep+1))&&t("div",{key:"ddc5d16dad728d310aa8a8fe2079c43f18422982",tabIndex:!this.disabled&&this.complete&&!this.active?0:-1,class:`step-label ${this.stepperState.variant==="compact"?this.active?"curr-label":"next-label":""}`,onClick:()=>{this.handleStepClick()},onKeyDown:e=>{this.handleStepKeyDown(e)}},this.stepperState.variant!=="compact"&&t("slot",{key:"0f8d96f76f768883e890670daba9dd63d2a536de"}),this.stepperState.variant==="compact"&&!this.active?"Next: ":"",this.stepperState.variant==="compact"&&t("slot",{key:"3cd6ca35c9bb4acddcc047bbec353d82749efb9d"})))}static get watchers(){return{stepperState:["updateCurrentStep"],active:["updateErrorState"]}}};s.style=a;export{s as ifx_step};
