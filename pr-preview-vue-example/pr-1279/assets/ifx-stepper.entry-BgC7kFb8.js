import{r as i,c as p,h as s,g as r}from"./index-DVFZl2YZ.js";const a=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.stepper{display:flex;align-items:center}.stepper.compact{min-width:300px;max-width:300px;justify-content:space-between;align-items:center}.stepper.compact .stepper-wrapper{align-items:flex-end;flex-direction:column;max-width:236px;min-width:236px}.stepper-wrapper{display:flex;flex-direction:row}.stepper-progress{display:flex;justify-content:center;align-items:center;font:600 0.875rem/1.25rem "Source Sans 3";width:56px;height:56px;border-radius:9999px;background:conic-gradient(#0A8276 var(--pb, 0%), #8D8786 0)}.stepper-progress .progress-detail{display:flex;justify-content:center;align-items:center;text-align:center;width:48px;height:48px;border-radius:9999px;background:white}',n=a,c=class{constructor(t){i(this,t),this.ifxActiveStepChange=p(this,"ifxActiveStepChange",7),this.showNumber=!1,this.activeStep=1,this.internalActiveStep=void 0,this.variant="default"}activeStepHandler(){this.updateActiveStep()}updateChildren(){const t=this.el.querySelectorAll("ifx-step");for(let e=0;e<t.length;e++)t[e].stepperState={activeStep:this.internalActiveStep,showNumber:this.showNumber,variant:this.variant}}addStepIdsToStepsAndCountSteps(){const t=this.el.querySelectorAll("ifx-step");t[t.length-1].lastStep=!0;for(let e=0;e<t.length;e++)t[e].stepId=e+1;this.stepsCount=t.length}updateActiveStep(){let t=Math.max(1,Math.min(this.stepsCount+(this.variant!=="compact"?1:0),this.activeStep));(this.internalActiveStep===void 0||t!=this.internalActiveStep)&&this.ifxActiveStepChange.emit({activeStep:t,totalSteps:this.stepsCount}),this.internalActiveStep=t}componentWillLoad(){this.addStepIdsToStepsAndCountSteps(),this.updateActiveStep(),this.updateChildren()}componentWillUpdate(){this.updateChildren()}render(){return s("div",{key:"f59ba6a15440518d5a1d51b9eae347745a5f3c51",class:`stepper ${this.variant}`},this.variant==="compact"&&s("div",{class:"stepper-progress"},s("div",{class:"progress-detail"},`${Math.min(this.internalActiveStep,this.stepsCount)} of ${this.stepsCount}`)),s("div",{key:"90b46a300b957464f60445d97ae6b0052f4b3197",class:"stepper-wrapper"},s("slot",{key:"9a9c511d4c1df24e841d267058c8199605da9cc5"})))}componentDidRender(){this.variant=="compact"&&this.el.shadowRoot.querySelector(".stepper-progress").style.setProperty("--pb",`${this.internalActiveStep/this.stepsCount*100}%`)}get el(){return r(this)}static get watchers(){return{activeStep:["activeStepHandler"]}}};c.style=n;export{c as ifx_stepper};
