import{r as p,c as r,h as i,g as a}from"./index-CEVAesCa.js";const n=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.stepper{display:flex;align-items:center}.stepper.compact{justify-content:space-between;align-items:center}.stepper.compact.compact-right{flex-direction:row-reverse;text-align:left}.stepper.compact .stepper-wrapper{flex-direction:column}.stepper-wrapper{display:flex;flex-direction:row}.stepper-progress{display:flex;justify-content:center;align-items:center;font:600 0.875rem/1.25rem "Source Sans 3";min-width:56px;height:56px;border-radius:9999px;background:conic-gradient(#0A8276 var(--pb, 0%), #8D8786 0)}.stepper-progress .progress-detail{display:flex;justify-content:center;align-items:center;text-align:center;width:48px;height:48px;border-radius:9999px;background:white}',c=n,o=class{constructor(t){p(this,t),this.ifxChange=r(this,"ifxChange",7),this.activeStep=1,this.indicatorPosition="left",this.showStepNumber=!1,this.variant="default",this.internalActiveStep=void 0,this.stepsCount=void 0}onStepChange(t){const s=this.getSteps()[t.detail.previousActiveStep-1];s&&!s.complete&&s.setAttribute("error","true")}handleActiveStep(){this.updateActiveStep()}addStepIdsToStepsAndCountSteps(){const t=this.getSteps();t[t.length-1].lastStep=!0;for(let e=0;e<t.length;e++)t[e].stepId=e+1;this.stepsCount=t.length}getSteps(){return this.el.querySelectorAll("ifx-step")}setActiveStep(t){this.updateActiveStep(t)}setStepsBeforeActiveToComplete(){this.getSteps().forEach((e,s)=>{s+1<this.activeStep&&(e.complete=!0)})}syncIfxSteps(){const t=this.getSteps();for(let e=0;e<t.length;e++){const s={activeStep:this.internalActiveStep,indicatorPosition:this.indicatorPosition!=="right"?"left":"right",showStepNumber:this.showStepNumber,variant:this.variant!=="compact"?"default":"compact",setActiveStep:this.setActiveStep.bind(this)};t[e].stepperState=s}}updateActiveStep(t=null){let e=t||Math.max(1,Math.min(this.stepsCount+(this.variant!=="compact"?1:0),this.activeStep));e!=this.internalActiveStep&&this.internalActiveStep!==void 0&&this.ifxChange.emit({activeStep:e,previousActiveStep:this.internalActiveStep,totalSteps:this.stepsCount}),this.internalActiveStep=e,this.activeStep=e}componentWillLoad(){this.addStepIdsToStepsAndCountSteps(),this.updateActiveStep(),this.setStepsBeforeActiveToComplete(),this.syncIfxSteps()}componentWillUpdate(){this.syncIfxSteps()}render(){return i("div",{key:"61ca5584dc70ffffdcdbf5545467cac0a5fc0186","aria-label":"a stepper",role:"navigation",class:`stepper ${this.variant!=="compact"?"default":"compact"} ${this.variant==="compact"?"compact-"+this.indicatorPosition:""}`},this.variant==="compact"&&i("div",{key:"95fa8fd75f35c68dbef9f44242689171577996d7",class:"stepper-progress"},i("div",{key:"7b883f881a775bfedefd3f5fae18c33be4a1cebb",class:"progress-detail"},`${Math.min(this.internalActiveStep,this.stepsCount)} of ${this.stepsCount}`)),i("div",{key:"9439b1da7e9b1a5fa82d1a7eddd418a41dd52087",class:"stepper-wrapper"},i("slot",{key:"66cf922d6fc71bb53ecc17f8512a7a90dedc6d5a"})))}componentDidRender(){this.variant=="compact"&&this.el.shadowRoot.querySelector(".stepper-progress").style.setProperty("--pb",`${this.internalActiveStep/this.stepsCount*100}%`)}get el(){return a(this)}static get watchers(){return{activeStep:["handleActiveStep"]}}};o.style=c;export{o as ifx_stepper};
