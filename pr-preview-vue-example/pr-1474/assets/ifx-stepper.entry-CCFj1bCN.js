import{r as p,c as r,h as i,g as a}from"./index-CoR0X1h7.js";const n=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.stepper{display:flex;align-items:center}.stepper.compact{justify-content:space-between;align-items:center}.stepper.compact.compact-right{flex-direction:row-reverse;text-align:left}.stepper.compact .stepper-wrapper{flex-direction:column}.stepper-wrapper{display:flex;flex-direction:row}.stepper-progress{display:flex;justify-content:center;align-items:center;font:600 0.875rem/1.25rem "Source Sans 3";min-width:56px;height:56px;border-radius:9999px;background:conic-gradient(#0A8276 var(--pb, 0%), #8D8786 0)}.stepper-progress .progress-detail{display:flex;justify-content:center;align-items:center;text-align:center;width:48px;height:48px;border-radius:9999px;background:white}',c=n,o=class{constructor(t){p(this,t),this.ifxChange=r(this,"ifxChange",7),this.activeStep=1,this.indicatorPosition="left",this.showStepNumber=!1,this.variant="default",this.internalActiveStep=void 0,this.stepsCount=void 0}onStepChange(t){const s=this.getSteps()[t.detail.previousActiveStep-1];s&&!s.complete&&s.setAttribute("error","true")}handleActiveStep(){this.updateActiveStep()}getSteps(){return this.el.querySelectorAll("ifx-step")}addStepIdsToStepsAndCountSteps(){const t=this.getSteps();t[t.length-1].lastStep=!0;for(let e=0;e<t.length;e++)t[e].stepId=e+1;this.stepsCount=t.length}setActiveStep(t){this.updateActiveStep(t)}setStepsBeforeActiveToComplete(){this.getSteps().forEach((e,s)=>{s+1<this.activeStep&&(e.complete=!0)})}syncIfxSteps(){const t=this.getSteps();for(let e=0;e<t.length;e++){const s={activeStep:this.internalActiveStep,indicatorPosition:this.indicatorPosition!=="right"?"left":"right",showStepNumber:this.showStepNumber,variant:this.variant!=="compact"?"default":"compact",setActiveStep:this.setActiveStep.bind(this)};t[e].stepperState=s}}updateActiveStep(t=null){let e=t||Math.max(1,Math.min(this.stepsCount+(this.variant!=="compact"?1:0),this.activeStep));e!=this.internalActiveStep&&this.internalActiveStep!==void 0&&this.ifxChange.emit({activeStep:e,previousActiveStep:this.internalActiveStep,totalSteps:this.stepsCount}),this.internalActiveStep=e,this.activeStep=e}componentWillLoad(){this.addStepIdsToStepsAndCountSteps(),this.updateActiveStep(),this.setStepsBeforeActiveToComplete()}componentDidLoad(){this.syncIfxSteps()}componentWillUpdate(){this.syncIfxSteps()}render(){return i("div",{key:"b0304b4862c65341dc9aa4f137803f3c6fe724a5","aria-label":"a stepper",role:"navigation",class:`stepper ${this.variant!=="compact"?"default":"compact"} ${this.variant==="compact"?"compact-"+this.indicatorPosition:""}`},this.variant==="compact"&&i("div",{key:"6bdf26972cfb94274209847be9ae3db8d5b06b83",class:"stepper-progress"},i("div",{key:"59a53ff46550fafcac735c54c1df9667ce42b38e",class:"progress-detail"},`${Math.min(this.internalActiveStep,this.stepsCount)} of ${this.stepsCount}`)),i("div",{key:"5249345306fc9a1fa4db11da15d894c433e296bf",class:"stepper-wrapper"},i("slot",{key:"b1da18fb63ee6d8520461ba8843adaa0159488d8"})))}componentDidRender(){this.variant=="compact"&&this.el.shadowRoot.querySelector(".stepper-progress").style.setProperty("--pb",`${this.internalActiveStep/this.stepsCount*100}%`)}get el(){return a(this)}static get watchers(){return{activeStep:["handleActiveStep"]}}};o.style=c;export{o as ifx_stepper};
