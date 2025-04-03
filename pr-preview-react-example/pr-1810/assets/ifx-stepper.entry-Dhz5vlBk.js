import{r as a,c as r,h as p,g as c}from"./index-DLgGBwj2.js";const n=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.stepper{display:flex;align-items:center}.stepper.compact{align-items:center;gap:8px}.stepper.compact.compact-right{flex-direction:row-reverse;text-align:left}.stepper.compact .stepper-wrapper{width:unset;flex-direction:column}.stepper.vertical{height:100%}.stepper.vertical .stepper-wrapper{flex-direction:column;width:unset;height:100%}.stepper-wrapper{display:flex;flex-direction:row;width:100%}.stepper-wrapper ::slotted(*){display:flex;flex:1;justify-content:flex-start}.stepper-progress{display:flex;justify-content:center;align-items:center;font:600 0.875rem/1.25rem "Source Sans 3";min-width:56px;height:56px;border-radius:9999px;background:conic-gradient(#0A8276 var(--pb, 0%), #8D8786 0)}.stepper-progress .progress-detail{display:flex;justify-content:center;align-items:center;text-align:center;width:48px;height:48px;border-radius:9999px;background:white}',o=n,h=class{constructor(t){a(this,t),this.ifxChange=r(this,"ifxChange",7),this.activeStep=1,this.indicatorPosition="left",this.showStepNumber=!1,this.variant="default",this.shouldEmitEvent=!0,this.emittedByClick=!1}onStepChange(t){const i=this.getSteps()[t.detail.previousActiveStep-1];i&&!i.complete&&i.setAttribute("error","true")}handleActiveStep(t,e){const i=this.getSteps();if(!this.shouldEmitEvent){this.shouldEmitEvent=!0;return}if(i[t-1])if(!i[t-1].disabled)this.emitIfxChange(t,e);else if(t<e){let s=t;for(this.shouldEmitEvent=!1;s>=1&&i[s-1].disabled;)s--;s<1?this.activeStep=e:(this.emitIfxChange(s,e),this.activeStep=s)}else{let s=t;for(this.shouldEmitEvent=!1;s<=this.stepsCount&&i[s-1].disabled;)s++;s>this.stepsCount?this.activeStep=e:(this.emitIfxChange(s,e),this.activeStep=s)}}emitIfxChange(t,e){this.ifxChange.emit({activeStep:t,previousActiveStep:e,totalSteps:this.stepsCount,emittedByClick:this.emittedByClick}),this.emittedByClick=!1}getSteps(){return this.el.querySelectorAll("ifx-step")}addStepIdsToStepsAndCountSteps(){const t=this.getSteps();t[t.length-1].lastStep=!0;for(let e=0;e<t.length;e++)t[e].stepId=e+1;this.stepsCount=t.length}setActiveStep(t,e=!1){this.emittedByClick=e,this.activeStep=t}setStepsBeforeActiveToComplete(){this.getSteps().forEach((e,i)=>{i+1<this.activeStep&&(e.complete=!0)})}syncIfxSteps(){const t=this.getSteps();for(let e=0;e<t.length;e++){const i={activeStep:this.activeStep,indicatorPosition:this.indicatorPosition!=="right"?"left":"right",showStepNumber:this.showStepNumber,variant:this.variant!=="compact"&&this.variant!=="vertical"?"default":this.variant,setActiveStep:this.setActiveStep.bind(this)};t[e].stepperState=i}}setInitialActiveStep(){this.activeStep=Math.max(1,Math.min(this.stepsCount+(this.variant!=="compact"?1:0),this.activeStep))}componentWillLoad(){this.addStepIdsToStepsAndCountSteps(),this.setInitialActiveStep(),this.setStepsBeforeActiveToComplete()}componentDidLoad(){this.syncIfxSteps()}componentWillUpdate(){this.syncIfxSteps()}render(){return p("div",{key:"797f8d8dcc699cfedf33c1a03d73d92fa452789e","aria-label":"a stepper",role:"navigation",class:`stepper ${this.variant!=="compact"&&this.variant!=="vertical"?"default":this.variant} ${this.variant==="compact"?"compact-"+this.indicatorPosition:""}`},this.variant==="compact"&&p("div",{key:"809a1220c3920494be1e8ad0894d2e4eaf586823",class:"stepper-progress"},p("div",{key:"ca02c1f0c34d24363f030b828d6d9807140687fe",class:"progress-detail"},`${Math.min(this.activeStep,this.stepsCount)} of ${this.stepsCount}`)),p("div",{key:"dbed479b177e2535fcdf3ef7f5b1be04b6839074",class:"stepper-wrapper"},p("slot",{key:"ad74e85e68cb12d1737066d07274e00b04db7077"})))}componentDidRender(){this.variant=="compact"&&this.el.shadowRoot.querySelector(".stepper-progress").style.setProperty("--pb",`${this.activeStep/this.stepsCount*100}%`)}get el(){return c(this)}static get watchers(){return{activeStep:["handleActiveStep"]}}};h.style=o;export{h as ifx_stepper};
