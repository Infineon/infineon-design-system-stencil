import{r,h as e}from"./index-D3LhnoPL.js";const a=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.step-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;max-width:160px;font:400 1rem/1.5rem "Source Sans 3"}.step-wrapper.compact{gap:0;max-width:100%}.step-wrapper.compact .step-label{max-width:100%}.step-wrapper.compact.indicator-left{align-items:flex-end;text-align:right}.step-wrapper.compact.indicator-right{align-items:flex-start}.step-wrapper.compact .step-label{cursor:auto}.step-wrapper .step-label{max-width:144px;color:#8D8786;word-wrap:break-word}.step-wrapper .step-label.curr-label{font:600 1.25rem/1.75rem "Source Sans 3"}.step-wrapper .step-label.next-label{font:400 0.75rem/1rem "Source Sans 3"}.step-wrapper.first-step .step-connector-l{height:0px}.step-wrapper.last-step .step-connector-r{height:0px}.step-wrapper.complete .step-connector-l,.step-wrapper.complete .step-connector-r,.step-wrapper.complete .step-icon,.step-wrapper.active .step-connector-l,.step-wrapper.active .step-connector-r,.step-wrapper.active .step-icon{background:#0A8276}.step-wrapper.complete .step-connector-l.active,.step-wrapper.complete .step-connector-l.error,.step-wrapper.complete .step-connector-r.active,.step-wrapper.complete .step-connector-r.error,.step-wrapper.complete .step-icon.active,.step-wrapper.complete .step-icon.error,.step-wrapper.active .step-connector-l.active,.step-wrapper.active .step-connector-l.error,.step-wrapper.active .step-connector-r.active,.step-wrapper.active .step-connector-r.error,.step-wrapper.active .step-icon.active,.step-wrapper.active .step-icon.error{background:#8D8786}.step-wrapper.complete .step-label,.step-wrapper.active .step-label{color:#1D1D1D}.step-wrapper.complete .step-label,.step-wrapper.clickable .step-label{cursor:pointer}.step-wrapper.active .step-label{cursor:auto}.step-wrapper.error:not(.active){color:#CD002F}.step-wrapper.error:not(.active) .step-label{color:#CD002F}.active-indic{width:16px;height:16px;border-radius:9999px;background:white}.step-icon-wrapper{display:flex;flex-direction:row;justify-content:center;align-items:center}.step-icon{width:24px;height:24px;background-color:#8D8786;border-radius:9999px;display:flex;align-items:center;justify-content:center;color:white}.step-connector-r,.step-connector-l{height:2px;width:68px;background-color:#8D8786}',p=a,s=class{constructor(t){r(this,t),this.complete=!1,this.error=!1,this.lastStep=!1,this.stepId=1,this.stepperState={activeStep:1,showStepNumber:!1,variant:"default",indicatorPosition:"left"},this.active=void 0,this.clickable=!1}onStepChange(t){t.detail.previousActiveStep===this.stepId&&this.error&&(this.clickable=!0)}updateCurrentStep(t){this.active=t.activeStep===this.stepId}updateErrorState(){this.active&&this.error&&(this.error=!1)}handleStepClick(){this.stepperState.variant==="default"&&(this.clickable||this.complete)&&this.stepperState.setActiveStep(this.stepId)}handleStepKeyDown(t){this.stepperState.variant==="default"&&(this.clickable||this.complete)&&t.key==="Enter"&&this.stepperState.setActiveStep(this.stepId)}render(){return e("div",{key:"65d16a15dffb0f272993f09da0c911ae3a2417c4","aria-current":this.active?"step":!1,"aria-disabled":!(this.active||this.complete),class:`step-wrapper ${this.stepId===1?"first-step":""} 
                        ${this.error?"error":""}
                        ${this.stepperState.variant}
                        ${this.complete?"complete":""}
                        ${this.lastStep?"last-step":""}
                        indicator-${this.stepperState.indicatorPosition}
                        ${this.active?"active":""}
                        ${this.clickable?"clickable":""}`},e("div",{key:"65b06a33be95d12fe24a9b3bd60d97039a52d809",class:"step-icon-wrapper"},this.stepperState.variant==="default"&&e("span",{key:"06975d3adbaf6a5137a743708343d9a8baf5ab71",class:"step-connector-l"}),this.stepperState.variant==="default"&&(!this.error||this.error&&this.active)&&e("div",{key:"6570c3b7b2e2b8431c740e46f470f74f969470c3",class:"step-icon"},this.stepperState.showStepNumber&&!this.complete&&!this.active?this.stepId:"",this.complete&&!this.active&&e("ifx-icon",{key:"c31b756c9642bd231de6dd67079713c7962a0e8a",icon:"check16"}),this.active&&e("span",{key:"ea5a94002ea2df2a06024cac0b02941cd4652c3f",class:"active-indic"})),this.stepperState.variant==="default"&&this.error&&!this.active&&e("ifx-icon",{key:"88482a69b4ce1362e205ee8b2177ffe972f32911",icon:"warningf24"}),this.stepperState.variant==="default"&&e("span",{key:"9adce82b5fb4d8b5cd3bf20389c199ac54171689",class:`step-connector-r ${this.active?"active":""}`})),(this.stepperState.variant==="default"||this.stepperState.variant==="compact"&&(this.active||this.stepId===this.stepperState.activeStep+1))&&e("div",{key:"2bc6875f4028916e387790bd51163634576bdfa7",tabIndex:this.complete&&!this.active?0:-1,class:`step-label ${this.stepperState.variant==="compact"?this.active?"curr-label":"next-label":""}`,onClick:()=>{this.handleStepClick()},onKeyDown:t=>{this.handleStepKeyDown(t)}},this.stepperState.variant==="default"&&e("ifx-link",{key:"34b7aedc5512c39baf40c143f15894971cf90f67",variant:"underlined"},e("slot",{key:"822d04025e96dafaa21f83cc0071c1638bab3b50"})),this.stepperState.variant==="compact"&&!this.active?"Next: ":"",this.stepperState.variant==="compact"&&e("slot",{key:"1e19225c6de2660ec9d94d1feaf5962bf7697b7e"})))}static get watchers(){return{stepperState:["updateCurrentStep"],active:["updateErrorState"]}}};s.style=p;export{s as ifx_step};
