"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[7898],{7898:(h,r,a)=>{a.r(r),a.d(r,{ifx_stepper:()=>o});var p=a(2916);const o=(()=>{let c=class{constructor(t){(0,p.r)(this,t),this.ifxChange=(0,p.c)(this,"ifxChange",7),this.activeStep=1,this.indicatorPosition="left",this.showStepNumber=!1,this.variant="default",this.shouldEmitEvent=!0,this.emittedByClick=!1}onStepChange(t){const i=this.getSteps()[t.detail.previousActiveStep-1];i&&!i.complete&&i.setAttribute("error","true")}handleActiveStep(t,e){const i=this.getSteps();if(this.shouldEmitEvent)if(i[t-1].disabled)if(t<e){let s=t;for(this.shouldEmitEvent=!1;s>=1&&i[s-1].disabled;)s--;s<1?this.activeStep=e:(this.emitIfxChange(s,e),this.activeStep=s)}else{let s=t;for(this.shouldEmitEvent=!1;s<=this.stepsCount&&i[s-1].disabled;)s++;s>this.stepsCount?this.activeStep=e:(this.emitIfxChange(s,e),this.activeStep=s)}else this.emitIfxChange(t,e);else this.shouldEmitEvent=!0}emitIfxChange(t,e){this.ifxChange.emit({activeStep:t,previousActiveStep:e,totalSteps:this.stepsCount,emittedByClick:this.emittedByClick}),this.emittedByClick=!1}getSteps(){return this.el.querySelectorAll("ifx-step")}addStepIdsToStepsAndCountSteps(){const t=this.getSteps();t[t.length-1].lastStep=!0;for(let e=0;e<t.length;e++)t[e].stepId=e+1;this.stepsCount=t.length}setActiveStep(t,e=!1){this.emittedByClick=e,this.activeStep=t}setStepsBeforeActiveToComplete(){this.getSteps().forEach((e,i)=>{i+1<this.activeStep&&(e.complete=!0)})}syncIfxSteps(){const t=this.getSteps();for(let e=0;e<t.length;e++){const i={activeStep:this.activeStep,indicatorPosition:"right"!==this.indicatorPosition?"left":"right",showStepNumber:this.showStepNumber,variant:"compact"!==this.variant&&"vertical"!==this.variant?"default":this.variant,setActiveStep:this.setActiveStep.bind(this)};t[e].stepperState=i}}setInitialActiveStep(){this.activeStep=Math.max(1,Math.min(this.stepsCount+("compact"!==this.variant?1:0),this.activeStep))}componentWillLoad(){this.addStepIdsToStepsAndCountSteps(),this.setInitialActiveStep(),this.setStepsBeforeActiveToComplete()}componentDidLoad(){this.syncIfxSteps()}componentWillUpdate(){this.syncIfxSteps()}render(){return(0,p.h)("div",{key:"126ad20b9d0522b3904ccdefa7f0e54a0bd68e41","aria-label":"a stepper",role:"navigation",class:`stepper ${"compact"!==this.variant&&"vertical"!==this.variant?"default":this.variant} ${"compact"===this.variant?"compact-"+this.indicatorPosition:""}`},"compact"===this.variant&&(0,p.h)("div",{key:"6b19ef3f8d03c267269c3a1ae50534df4b35f44c",class:"stepper-progress"},(0,p.h)("div",{key:"4a3b106590ff11ed82bc50df48f8018f8e83caba",class:"progress-detail"},`${Math.min(this.activeStep,this.stepsCount)} of ${this.stepsCount}`)),(0,p.h)("div",{key:"7e27ac45d89e00f080e298bc0681b64cb33c1039",class:"stepper-wrapper"},(0,p.h)("slot",{key:"1f168942e091e9cbe96466deda03b6949b6ff015"})))}componentDidRender(){"compact"==this.variant&&this.el.shadowRoot.querySelector(".stepper-progress").style.setProperty("--pb",this.activeStep/this.stepsCount*100+"%")}get el(){return(0,p.g)(this)}static get watchers(){return{activeStep:["handleActiveStep"]}}};return c.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.stepper{display:flex;align-items:center}.stepper.compact{justify-content:space-between;align-items:center}.stepper.compact.compact-right{flex-direction:row-reverse;text-align:left}.stepper.compact .stepper-wrapper{width:unset;flex-direction:column}.stepper.vertical{height:100%}.stepper.vertical .stepper-wrapper{flex-direction:column;width:unset;height:100%}.stepper-wrapper{display:flex;flex-direction:row;width:100%}.stepper-wrapper ::slotted(*){display:flex;flex:1;justify-content:flex-start}.stepper-progress{display:flex;justify-content:center;align-items:center;font:600 0.875rem/1.25rem "Source Sans 3";min-width:56px;height:56px;border-radius:9999px;background:conic-gradient(#0A8276 var(--pb, 0%), #8D8786 0)}.stepper-progress .progress-detail{display:flex;justify-content:center;align-items:center;text-align:center;width:48px;height:48px;border-radius:9999px;background:white}',c})()}}]);