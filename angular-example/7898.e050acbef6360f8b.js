"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[7898],{7898:(o,r,p)=>{p.r(r),p.d(r,{ifx_stepper:()=>c});var s=p(9046);const c=(()=>{let n=class{constructor(t){(0,s.r)(this,t),this.ifxChange=(0,s.c)(this,"ifxChange",7),this.activeStep=1,this.indicatorPosition="left",this.showStepNumber=!1,this.variant="default",this.internalActiveStep=void 0,this.stepsCount=void 0}onStepChange(t){const i=this.getSteps()[t.detail.previousActiveStep-1];i&&!i.complete&&i.setAttribute("error","true")}handleActiveStep(){this.updateActiveStep()}getSteps(){return this.el.querySelectorAll("ifx-step")}addStepIdsToStepsAndCountSteps(){const t=this.getSteps();t[t.length-1].lastStep=!0;for(let e=0;e<t.length;e++)t[e].stepId=e+1;this.stepsCount=t.length}setActiveStep(t){this.updateActiveStep(t)}setStepsBeforeActiveToComplete(){this.getSteps().forEach((e,i)=>{i+1<this.activeStep&&(e.complete=!0)})}syncIfxSteps(){const t=this.getSteps();for(let e=0;e<t.length;e++){const i={activeStep:this.internalActiveStep,indicatorPosition:"right"!==this.indicatorPosition?"left":"right",showStepNumber:this.showStepNumber,variant:"compact"!==this.variant?"default":"compact",setActiveStep:this.setActiveStep.bind(this)};t[e].stepperState=i}}updateActiveStep(t=null){let e=t||Math.max(1,Math.min(this.stepsCount+("compact"!==this.variant?1:0),this.activeStep));e!=this.internalActiveStep&&void 0!==this.internalActiveStep&&this.ifxChange.emit({activeStep:e,previousActiveStep:this.internalActiveStep,totalSteps:this.stepsCount}),this.internalActiveStep=e,this.activeStep=e}componentWillLoad(){this.addStepIdsToStepsAndCountSteps(),this.updateActiveStep(),this.setStepsBeforeActiveToComplete()}componentDidLoad(){this.syncIfxSteps()}componentWillUpdate(){this.syncIfxSteps()}render(){return(0,s.h)("div",{key:"048fe4f844000b0c4a66f2b93854a7649e1cb4bc","aria-label":"a stepper",role:"navigation",class:`stepper ${"compact"!==this.variant?"default":"compact"} ${"compact"===this.variant?"compact-"+this.indicatorPosition:""}`},"compact"===this.variant&&(0,s.h)("div",{key:"cfc2a0e94dd7fc795fcd3f2d0d3df0568c0d046e",class:"stepper-progress"},(0,s.h)("div",{key:"395d0932662ce1195d9647682757f0c54d71d16e",class:"progress-detail"},`${Math.min(this.internalActiveStep,this.stepsCount)} of ${this.stepsCount}`)),(0,s.h)("div",{key:"9a0d7d4b30093a8dafc2c526b43d84c1aeb9f123",class:"stepper-wrapper"},(0,s.h)("slot",{key:"84088f97fa9fc497c77e8f2ec61e3a0cc9f1ea86"})))}componentDidRender(){"compact"==this.variant&&this.el.shadowRoot.querySelector(".stepper-progress").style.setProperty("--pb",this.internalActiveStep/this.stepsCount*100+"%")}get el(){return(0,s.g)(this)}static get watchers(){return{activeStep:["handleActiveStep"]}}};return n.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.stepper{display:flex;align-items:center}.stepper.compact{justify-content:space-between;align-items:center}.stepper.compact.compact-right{flex-direction:row-reverse;text-align:left}.stepper.compact .stepper-wrapper{flex-direction:column}.stepper-wrapper{display:flex;flex-direction:row}.stepper-progress{display:flex;justify-content:center;align-items:center;font:600 0.875rem/1.25rem "Source Sans 3";min-width:56px;height:56px;border-radius:9999px;background:conic-gradient(#0A8276 var(--pb, 0%), #8D8786 0)}.stepper-progress .progress-detail{display:flex;justify-content:center;align-items:center;text-align:center;width:48px;height:48px;border-radius:9999px;background:white}',n})()}}]);