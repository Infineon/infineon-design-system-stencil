"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[1726],{"./dist/esm/ifx-stepper.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_stepper:()=>Stepper});var _index_57b5c220_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-57b5c220.js");const Stepper=class{constructor(hostRef){(0,_index_57b5c220_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxChange=(0,_index_57b5c220_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxChange",7),this.activeStep=1,this.indicatorPosition="left",this.showStepNumber=!1,this.variant="default",this.stepsCount=void 0,this.shouldEmitEvent=!0,this.emittedByClick=!1}onStepChange(event){const previousActiveStep=this.getSteps()[event.detail.previousActiveStep-1];previousActiveStep&&!previousActiveStep.complete&&previousActiveStep.setAttribute("error","true")}handleActiveStep(newStep,oldStep){const steps=this.getSteps();if(this.shouldEmitEvent)if(steps[newStep-1].disabled)if(newStep<oldStep){let i=newStep;for(this.shouldEmitEvent=!1;i>=1&&steps[i-1].disabled;)i--;i<1?this.activeStep=oldStep:(this.emitIfxChange(i,oldStep),this.activeStep=i)}else{let i=newStep;for(this.shouldEmitEvent=!1;i<=this.stepsCount&&steps[i-1].disabled;)i++;i>this.stepsCount?this.activeStep=oldStep:(this.emitIfxChange(i,oldStep),this.activeStep=i)}else this.emitIfxChange(newStep,oldStep);else this.shouldEmitEvent=!0}emitIfxChange(activeStep,previousActiveStep){this.ifxChange.emit({activeStep,previousActiveStep,totalSteps:this.stepsCount,emittedByClick:this.emittedByClick}),this.emittedByClick=!1}getSteps(){return this.el.querySelectorAll("ifx-step")}addStepIdsToStepsAndCountSteps(){const steps=this.getSteps();steps[steps.length-1].lastStep=!0;for(let i=0;i<steps.length;i++)steps[i].stepId=i+1;this.stepsCount=steps.length}setActiveStep(stepId,setByClick=!1){this.emittedByClick=setByClick,this.activeStep=stepId}setStepsBeforeActiveToComplete(){this.getSteps().forEach(((step,stepId)=>{stepId+1<this.activeStep&&(step.complete=!0)}))}syncIfxSteps(){const steps=this.getSteps();for(let i=0;i<steps.length;i++){const stepperState={activeStep:this.activeStep,indicatorPosition:"right"!==this.indicatorPosition?"left":"right",showStepNumber:this.showStepNumber,variant:"compact"!==this.variant?"default":"compact",setActiveStep:this.setActiveStep.bind(this)};steps[i].stepperState=stepperState}}setInitialActiveStep(){this.activeStep=Math.max(1,Math.min(this.stepsCount+("compact"!==this.variant?1:0),this.activeStep))}componentWillLoad(){this.addStepIdsToStepsAndCountSteps(),this.setInitialActiveStep(),this.setStepsBeforeActiveToComplete()}componentDidLoad(){this.syncIfxSteps()}componentWillUpdate(){this.syncIfxSteps()}render(){return(0,_index_57b5c220_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"e7a1ed924ab241c3e40b14c4a5ee4e53e3efa30d","aria-label":"a stepper",role:"navigation",class:`stepper ${"compact"!==this.variant?"default":"compact"} ${"compact"===this.variant?"compact-"+this.indicatorPosition:""}`},"compact"===this.variant&&(0,_index_57b5c220_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"9cf474c8651a68fdbee64fa822327c499b3939fa",class:"stepper-progress"},(0,_index_57b5c220_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"c4968158ca097b7c48085ff410a425d9285e4c63",class:"progress-detail"},`${Math.min(this.activeStep,this.stepsCount)} of ${this.stepsCount}`)),(0,_index_57b5c220_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"d9aabfca35a6feb4c9f743712cd9a809ac60098e",class:"stepper-wrapper"},(0,_index_57b5c220_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"cf3c70ea111ddd20d64eaeb86b9632dd38e9a7e8"})))}componentDidRender(){if("compact"==this.variant){this.el.shadowRoot.querySelector(".stepper-progress").style.setProperty("--pb",this.activeStep/this.stepsCount*100+"%")}}get el(){return(0,_index_57b5c220_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{activeStep:["handleActiveStep"]}}};Stepper.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.stepper{display:flex;align-items:center}.stepper.compact{justify-content:space-between;align-items:center}.stepper.compact.compact-right{flex-direction:row-reverse;text-align:left}.stepper.compact .stepper-wrapper{flex-direction:column}.stepper-wrapper{display:flex;flex-direction:row}.stepper-progress{display:flex;justify-content:center;align-items:center;font:600 0.875rem/1.25rem "Source Sans 3";min-width:56px;height:56px;border-radius:9999px;background:conic-gradient(#0A8276 var(--pb, 0%), #8D8786 0)}.stepper-progress .progress-detail{display:flex;justify-content:center;align-items:center;text-align:center;width:48px;height:48px;border-radius:9999px;background:white}'}}]);