"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[7898],{7898:(h,r,a)=>{a.r(r),a.d(r,{ifx_stepper:()=>o});var p=a(581);const o=(()=>{let c=class{constructor(t){(0,p.r)(this,t),this.ifxChange=(0,p.c)(this,"ifxChange",7),this.activeStep=1,this.indicatorPosition="left",this.showStepNumber=!1,this.variant="default",this.stepsCount=void 0,this.shouldEmitEvent=!0,this.emittedByClick=!1}onStepChange(t){const i=this.getSteps()[t.detail.previousActiveStep-1];i&&!i.complete&&i.setAttribute("error","true")}handleActiveStep(t,e){const i=this.getSteps();if(this.shouldEmitEvent)if(i[t-1].disabled)if(t<e){let s=t;for(this.shouldEmitEvent=!1;s>=1&&i[s-1].disabled;)s--;s<1?this.activeStep=e:(this.emitIfxChange(s,e),this.activeStep=s)}else{let s=t;for(this.shouldEmitEvent=!1;s<=this.stepsCount&&i[s-1].disabled;)s++;s>this.stepsCount?this.activeStep=e:(this.emitIfxChange(s,e),this.activeStep=s)}else this.emitIfxChange(t,e);else this.shouldEmitEvent=!0}emitIfxChange(t,e){this.ifxChange.emit({activeStep:t,previousActiveStep:e,totalSteps:this.stepsCount,emittedByClick:this.emittedByClick}),this.emittedByClick=!1}getSteps(){return this.el.querySelectorAll("ifx-step")}addStepIdsToStepsAndCountSteps(){const t=this.getSteps();t[t.length-1].lastStep=!0;for(let e=0;e<t.length;e++)t[e].stepId=e+1;this.stepsCount=t.length}setActiveStep(t,e=!1){this.emittedByClick=e,this.activeStep=t}setStepsBeforeActiveToComplete(){this.getSteps().forEach((e,i)=>{i+1<this.activeStep&&(e.complete=!0)})}syncIfxSteps(){const t=this.getSteps();for(let e=0;e<t.length;e++){const i={activeStep:this.activeStep,indicatorPosition:"right"!==this.indicatorPosition?"left":"right",showStepNumber:this.showStepNumber,variant:"compact"!==this.variant?"default":"compact",setActiveStep:this.setActiveStep.bind(this)};t[e].stepperState=i}}setInitialActiveStep(){this.activeStep=Math.max(1,Math.min(this.stepsCount+("compact"!==this.variant?1:0),this.activeStep))}componentWillLoad(){this.addStepIdsToStepsAndCountSteps(),this.setInitialActiveStep(),this.setStepsBeforeActiveToComplete()}componentDidLoad(){this.syncIfxSteps()}componentWillUpdate(){this.syncIfxSteps()}render(){return(0,p.h)("div",{key:"e7a1ed924ab241c3e40b14c4a5ee4e53e3efa30d","aria-label":"a stepper",role:"navigation",class:`stepper ${"compact"!==this.variant?"default":"compact"} ${"compact"===this.variant?"compact-"+this.indicatorPosition:""}`},"compact"===this.variant&&(0,p.h)("div",{key:"9cf474c8651a68fdbee64fa822327c499b3939fa",class:"stepper-progress"},(0,p.h)("div",{key:"c4968158ca097b7c48085ff410a425d9285e4c63",class:"progress-detail"},`${Math.min(this.activeStep,this.stepsCount)} of ${this.stepsCount}`)),(0,p.h)("div",{key:"d9aabfca35a6feb4c9f743712cd9a809ac60098e",class:"stepper-wrapper"},(0,p.h)("slot",{key:"cf3c70ea111ddd20d64eaeb86b9632dd38e9a7e8"})))}componentDidRender(){"compact"==this.variant&&this.el.shadowRoot.querySelector(".stepper-progress").style.setProperty("--pb",this.activeStep/this.stepsCount*100+"%")}get el(){return(0,p.g)(this)}static get watchers(){return{activeStep:["handleActiveStep"]}}};return c.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.stepper{display:flex;align-items:center}.stepper.compact{justify-content:space-between;align-items:center}.stepper.compact.compact-right{flex-direction:row-reverse;text-align:left}.stepper.compact .stepper-wrapper{flex-direction:column}.stepper-wrapper{display:flex;flex-direction:row}.stepper-progress{display:flex;justify-content:center;align-items:center;font:600 0.875rem/1.25rem "Source Sans 3";min-width:56px;height:56px;border-radius:9999px;background:conic-gradient(#0A8276 var(--pb, 0%), #8D8786 0)}.stepper-progress .progress-detail{display:flex;justify-content:center;align-items:center;text-align:center;width:48px;height:48px;border-radius:9999px;background:white}',c})()}}]);