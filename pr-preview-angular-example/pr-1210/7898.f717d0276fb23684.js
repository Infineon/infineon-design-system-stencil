"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[7898],{7898:(a,p,i)=>{i.r(p),i.d(p,{ifx_stepper:()=>r});var t=i(3415);const r=class{constructor(e){(0,t.r)(this,e),this.ifxActiveStepChange=(0,t.c)(this,"ifxActiveStepChange",7),this.showNumber=!1,this.activeStep=1,this.internalActiveStep=void 0,this.variant="default"}activeStepHandler(){this.updateActiveStep()}updateChildren(){const e=this.el.querySelectorAll("ifx-step");for(let s=0;s<e.length;s++)e[s].stepperState={activeStep:this.internalActiveStep,showNumber:this.showNumber,variant:this.variant}}addStepIdsToStepsAndCountSteps(){const e=this.el.querySelectorAll("ifx-step");e[e.length-1].lastStep=!0;for(let s=0;s<e.length;s++)e[s].stepId=s+1;this.stepsCount=e.length}updateActiveStep(){let e=Math.max(1,Math.min(this.stepsCount+("compact"!==this.variant?1:0),this.activeStep));(void 0===this.internalActiveStep||e!=this.internalActiveStep)&&this.ifxActiveStepChange.emit({activeStep:e,totalSteps:this.stepsCount}),this.internalActiveStep=e}componentWillLoad(){this.addStepIdsToStepsAndCountSteps(),this.updateActiveStep(),this.updateChildren()}componentWillUpdate(){this.updateChildren()}render(){return(0,t.h)("div",{key:"472eb2ce1bf88098b6259c014360c2eb9868f5e9",class:`stepper ${this.variant}`},"compact"===this.variant&&(0,t.h)("div",{class:"stepper-progress"},(0,t.h)("div",{class:"progress-detail"},`${Math.min(this.internalActiveStep,this.stepsCount)} of ${this.stepsCount}`)),(0,t.h)("div",{key:"62fb09550925f01fe8eb1bb8148e3c392ad7e8c5",class:"stepper-wrapper"},(0,t.h)("slot",{key:"fc108f32ca1e2cfe793a13b722d00a25c2dc155f"})))}componentDidRender(){"compact"==this.variant&&this.el.shadowRoot.querySelector(".stepper-progress").style.setProperty("--pb",this.internalActiveStep/this.stepsCount*100+"%")}get el(){return(0,t.g)(this)}static get watchers(){return{activeStep:["activeStepHandler"]}}};r.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.stepper{display:flex;align-items:center}.stepper.compact{min-width:300px;max-width:300px;justify-content:space-between;align-items:center}.stepper.compact .stepper-wrapper{align-items:flex-end;flex-direction:column;max-width:236px;min-width:236px}.stepper-wrapper{display:flex;flex-direction:row}.stepper-progress{display:flex;justify-content:center;align-items:center;font:600 0.875rem/1.25rem "Source Sans 3";width:56px;height:56px;border-radius:9999px;background:conic-gradient(#0A8276 var(--pb, 0%), #8D8786 0)}.stepper-progress .progress-detail{display:flex;justify-content:center;align-items:center;text-align:center;width:48px;height:48px;border-radius:9999px;background:white}'}}]);