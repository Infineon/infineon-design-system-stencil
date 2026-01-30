const{action:c}=__STORYBOOK_MODULE_ACTIONS__,l={title:"Components/Stepper",args:{amountOfSteps:5,activeStep:2,disabled:!1,indicatorPosition:"left",showStepNumber:!1,variant:"default",error:!1,completeStep:!1,ariaLabel:"",ariaCurrent:""},argTypes:{activeStep:{control:{type:"number",min:1},description:"Indicates the current active step.",table:{category:"ifx-stepper props",defaultValue:{summary:2}}},amountOfSteps:{name:"Amount of Steps",control:"number",description:"Indicates the number of steps in stepper in a story.",table:{category:"story controls",defaultValue:{summary:5}}},completeStep:{name:"complete",description:"A boolean prop to mark one or more steps as complete.<br>Usage:",control:"boolean",table:{category:"ifx-step props",defaultValue:{summary:!1},type:{summary:"boolean"}}},disabled:{name:"disabled",control:"boolean",description:"A boolean prop to make one or more steps unclickable.",table:{category:"ifx-step props",defaultValue:{summary:!1},type:{summary:"<ifx-step disabled=true> </ifx-step>"}},if:{arg:"variant",eq:"default"}},error:{control:"boolean",description:"Sets the error state for a step.",table:{category:"ifx-step props",type:{summary:"boolean"}}},indicatorPosition:{control:"radio",defaultValue:{summary:"left"},description:"Allows to swap the progress bar and steps' label.",options:["left","right"],if:{arg:"variant",eq:"compact"},table:{category:"ifx-stepper props"}},showStepNumber:{control:"boolean",defaultValue:{summary:"false"},description:"Shows the step number when set true.",if:{arg:"variant",eq:"default"},table:{category:"ifx-stepper props"}},variant:{options:["default","compact","vertical"],defaultValue:{summary:"default"},description:"Allows to switch between default and compact variant.",control:"radio",table:{category:"ifx-stepper props",type:{summary:"default | compact | vertical"}}},ariaLabel:{description:"Aria label of the Stepper.",control:"text",table:{category:"ARIA Labels",defaultValue:{summary:""},type:{summary:"string"}}},ariaCurrent:{description:"Aria current of the Stepper.",control:"text",table:{category:"ARIA Labels",defaultValue:{summary:""},type:{summary:"string"}}},ifxChange:{action:"ifxChange",description:"A custom event emitted when active step changes.",table:{category:"custom events",type:{summary:"Framework integration",detail:`
React: onIfxChange={handleChange}
Vue:@ifxChange="handleChange"
Angular:(ifxChange)="handleChange()"
VanillaJs:.addEventListener("ifxChange", (event) => {//handle change});`}}}}},o=e=>{const p=document.createElement("div");p.innerHTML=`
<ifx-stepper 
active-step=${e.activeStep} 
aria-label="${e.ariaLabel}"
aria-current="${e.ariaCurrent}"
${e.variant==="compact"?`indicator-position=${e.indicatorPosition}`:""} 
${e.variant==="default"?`show-step-number=${e.showStepNumber}`:""} 
variant=${e.variant}>
    ${Array.from({length:e.amountOfSteps},(d,s)=>{const n=document.createElement("ifx-step");return n.innerHTML=`Step Label ${s+1}`,e.disabled&&s===0&&n.setAttribute("disabled","true"),e.error&&s===0&&n.setAttribute("error","true"),e.completeStep&&s===2&&n.setAttribute("complete",e.completeStep),n.outerHTML}).join(`
    `)}
</ifx-stepper>`;const i=p.querySelector("ifx-stepper");return i.addEventListener("ifxChange",c("ifxChange")),i},t=o.bind({});t.args={variant:"default"};const r=o.bind({});r.args={variant:"compact"};const a=o.bind({});a.args={variant:"vertical"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = \`
<ifx-stepper 
active-step=\${args.activeStep} 
aria-label="\${args.ariaLabel}"
aria-current="\${args.ariaCurrent}"
\${args.variant === "compact" ? \`indicator-position=\${args.indicatorPosition}\` : ""} 
\${args.variant === "default" ? \`show-step-number=\${args.showStepNumber}\` : ""} 
variant=\${args.variant}>
    \${(() => {
    return Array.from({
      length: args.amountOfSteps
    }, (_, stepId) => {
      const step = document.createElement("ifx-step");
      step.innerHTML = \`Step Label \${stepId + 1}\`;
      if (args.disabled && stepId === 0) {
        step.setAttribute("disabled", "true");
      }
      if (args.error && stepId === 0) {
        step.setAttribute("error", "true");
      }
      if (args.completeStep && stepId === 2) {
        step.setAttribute("complete", args.completeStep);
      }
      return step.outerHTML;
    }).join(\`\\n    \`);
  })()}
</ifx-stepper>\`;
  const stepper = wrapper.querySelector("ifx-stepper");
  stepper.addEventListener("ifxChange", action("ifxChange"));
  return stepper;
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = \`
<ifx-stepper 
active-step=\${args.activeStep} 
aria-label="\${args.ariaLabel}"
aria-current="\${args.ariaCurrent}"
\${args.variant === "compact" ? \`indicator-position=\${args.indicatorPosition}\` : ""} 
\${args.variant === "default" ? \`show-step-number=\${args.showStepNumber}\` : ""} 
variant=\${args.variant}>
    \${(() => {
    return Array.from({
      length: args.amountOfSteps
    }, (_, stepId) => {
      const step = document.createElement("ifx-step");
      step.innerHTML = \`Step Label \${stepId + 1}\`;
      if (args.disabled && stepId === 0) {
        step.setAttribute("disabled", "true");
      }
      if (args.error && stepId === 0) {
        step.setAttribute("error", "true");
      }
      if (args.completeStep && stepId === 2) {
        step.setAttribute("complete", args.completeStep);
      }
      return step.outerHTML;
    }).join(\`\\n    \`);
  })()}
</ifx-stepper>\`;
  const stepper = wrapper.querySelector("ifx-stepper");
  stepper.addEventListener("ifxChange", action("ifxChange"));
  return stepper;
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = \`
<ifx-stepper 
active-step=\${args.activeStep} 
aria-label="\${args.ariaLabel}"
aria-current="\${args.ariaCurrent}"
\${args.variant === "compact" ? \`indicator-position=\${args.indicatorPosition}\` : ""} 
\${args.variant === "default" ? \`show-step-number=\${args.showStepNumber}\` : ""} 
variant=\${args.variant}>
    \${(() => {
    return Array.from({
      length: args.amountOfSteps
    }, (_, stepId) => {
      const step = document.createElement("ifx-step");
      step.innerHTML = \`Step Label \${stepId + 1}\`;
      if (args.disabled && stepId === 0) {
        step.setAttribute("disabled", "true");
      }
      if (args.error && stepId === 0) {
        step.setAttribute("error", "true");
      }
      if (args.completeStep && stepId === 2) {
        step.setAttribute("complete", args.completeStep);
      }
      return step.outerHTML;
    }).join(\`\\n    \`);
  })()}
</ifx-stepper>\`;
  const stepper = wrapper.querySelector("ifx-stepper");
  stepper.addEventListener("ifxChange", action("ifxChange"));
  return stepper;
}`,...a.parameters?.docs?.source}}};const u=["Default","Compact","Vertical"],m=Object.freeze(Object.defineProperty({__proto__:null,Compact:r,Default:t,Vertical:a,__namedExportsOrder:u,default:l},Symbol.toStringTag,{value:"Module"}));export{r as C,m as S,a as V};
