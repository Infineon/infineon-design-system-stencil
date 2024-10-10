import{r as a,c as r,h as p,g as o}from"./index-BX0L_FlN.js";import"@stencil/react-output-target/runtime";const n=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.stepper{display:flex;align-items:center}.stepper.compact{justify-content:space-between;align-items:center}.stepper.compact.compact-right{flex-direction:row-reverse;text-align:left}.stepper.compact .stepper-wrapper{flex-direction:column}.stepper-wrapper{display:flex;flex-direction:row}.stepper-progress{display:flex;justify-content:center;align-items:center;font:600 0.875rem/1.25rem "Source Sans 3";min-width:56px;height:56px;border-radius:9999px;background:conic-gradient(#0A8276 var(--pb, 0%), #8D8786 0)}.stepper-progress .progress-detail{display:flex;justify-content:center;align-items:center;text-align:center;width:48px;height:48px;border-radius:9999px;background:white}',c=n,h=class{constructor(t){a(this,t),this.ifxChange=r(this,"ifxChange",7),this.activeStep=1,this.indicatorPosition="left",this.showStepNumber=!1,this.variant="default",this.stepsCount=void 0,this.shouldEmitEvent=!0}onStepChange(t){const i=this.getSteps()[t.detail.previousActiveStep-1];i&&!i.complete&&i.setAttribute("error","true")}handleActiveStep(t,e){const i=this.getSteps();if(!this.shouldEmitEvent){this.shouldEmitEvent=!0;return}if(!i[t-1].disabled)this.emitIfxChange(t,e);else if(t<e){let s=t;for(this.shouldEmitEvent=!1;s>=1&&i[s-1].disabled;)s--;s<1?this.activeStep=e:(this.emitIfxChange(s,e),this.activeStep=s)}else{let s=t;for(this.shouldEmitEvent=!1;s<=this.stepsCount&&i[s-1].disabled;)s++;s>this.stepsCount?this.activeStep=e:(this.emitIfxChange(s,e),this.activeStep=s)}}emitIfxChange(t,e){this.ifxChange.emit({activeStep:t,previousActiveStep:e,totalSteps:this.stepsCount})}getSteps(){return this.el.querySelectorAll("ifx-step")}addStepIdsToStepsAndCountSteps(){const t=this.getSteps();t[t.length-1].lastStep=!0;for(let e=0;e<t.length;e++)t[e].stepId=e+1;this.stepsCount=t.length}setActiveStep(t){this.activeStep=t}setStepsBeforeActiveToComplete(){this.getSteps().forEach((e,i)=>{i+1<this.activeStep&&(e.complete=!0)})}syncIfxSteps(){const t=this.getSteps();for(let e=0;e<t.length;e++){const i={activeStep:this.activeStep,indicatorPosition:this.indicatorPosition!=="right"?"left":"right",showStepNumber:this.showStepNumber,variant:this.variant!=="compact"?"default":"compact",setActiveStep:this.setActiveStep.bind(this)};t[e].stepperState=i}}setInitialActiveStep(){this.activeStep=Math.max(1,Math.min(this.stepsCount+(this.variant!=="compact"?1:0),this.activeStep))}componentWillLoad(){this.addStepIdsToStepsAndCountSteps(),this.setInitialActiveStep(),this.setStepsBeforeActiveToComplete()}componentDidLoad(){this.syncIfxSteps()}componentWillUpdate(){this.syncIfxSteps()}render(){return p("div",{key:"046b5af0f118eb28f3b130c76a862e3267f51aa1","aria-label":"a stepper",role:"navigation",class:`stepper ${this.variant!=="compact"?"default":"compact"} ${this.variant==="compact"?"compact-"+this.indicatorPosition:""}`},this.variant==="compact"&&p("div",{key:"046866cbd548a49e0d5327ac8ba937b5dfef4154",class:"stepper-progress"},p("div",{key:"f2bb77bdea72eecfb8f4277c4edb82c861966af7",class:"progress-detail"},`${Math.min(this.activeStep,this.stepsCount)} of ${this.stepsCount}`)),p("div",{key:"14d6d899e21994d88bebb4361eea3aec6cf575a9",class:"stepper-wrapper"},p("slot",{key:"ff39476c75e334ae6f489fbef0d179232de900f0"})))}componentDidRender(){this.variant=="compact"&&this.el.shadowRoot.querySelector(".stepper-progress").style.setProperty("--pb",`${this.activeStep/this.stepsCount*100}%`)}get el(){return o(this)}static get watchers(){return{activeStep:["handleActiveStep"]}}};h.style=c;export{h as ifx_stepper};
