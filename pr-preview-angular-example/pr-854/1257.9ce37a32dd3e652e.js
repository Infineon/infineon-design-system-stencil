"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[1257],{1257:(n,r,i)=>{i.r(r),i.d(r,{ifx_stepper:()=>p});var s=i(9279);const p=class{constructor(e){(0,s.r)(this,e),this.showNumber=!1,this.activeStep=1,this.variant="default"}updateChildren(){const e=this.el.querySelectorAll("ifx-step");for(let t=0;t<e.length;t++)e[t].stepperState={activeStep:this.activeStep,showNumber:this.showNumber,variant:this.variant}}componentWillLoad(){const e=this.el.querySelectorAll("ifx-step");e[e.length-1].lastStep=!0;for(let t=0;t<e.length;t++)e[t].stepId=t+1;this.activeStep=Math.max(1,Math.min(e.length+1,this.activeStep)),this.stepsCount=e.length,this.updateChildren()}componentWillUpdate(){this.updateChildren()}render(){return(0,s.h)("div",{class:`stepper ${this.variant}`},"compact"===this.variant&&(0,s.h)("div",{class:"stepper-progress"},(0,s.h)("div",{class:"progress-detail"},`${this.activeStep} of ${this.stepsCount}`)),(0,s.h)("div",{class:"stepper-wrapper"},(0,s.h)("slot",null)))}componentDidRender(){"compact"==this.variant&&this.el.shadowRoot.querySelector(".stepper-progress").style.setProperty("--pb",this.activeStep/this.stepsCount*100+"%")}get el(){return(0,s.g)(this)}};p.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}.stepper{display:flex;align-items:center}.stepper.compact{min-width:300px;max-width:300px;justify-content:space-between;align-items:center}.stepper.compact .stepper-wrapper{align-items:flex-end;flex-direction:column;max-width:236px;min-width:236px}.stepper-wrapper{display:flex;flex-direction:row}.stepper-progress{display:flex;justify-content:center;align-items:center;font:600 0.875rem/1.25rem "Source Sans 3";width:56px;height:56px;border-radius:9999px;background:conic-gradient(#0A8276 var(--pb, 0%), #8D8786 0);transition:all 5000ms ease-in-out}.stepper-progress .progress-detail{display:flex;justify-content:center;align-items:center;text-align:center;width:48px;height:48px;border-radius:9999px;background:white}'}}]);