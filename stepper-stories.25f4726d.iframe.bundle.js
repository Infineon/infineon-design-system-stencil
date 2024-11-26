"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[4674],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/components/stepper/stepper.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Compact:()=>Compact,Default:()=>Default,Vertical:()=>Vertical,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Stepper",args:{activeStep:2,amountOfSteps:5,errorStep:0,disabled:!1,indicatorPosition:"left",showStepNumber:!1,variant:"default"},argTypes:{activeStep:{control:{type:"number",min:1},description:"Indicates the current active step",table:{defaultValue:{summary:1}}},amountOfSteps:{name:"Amount of steps",control:"number",description:"Indicates the number of steps in stepper in a story"},completeStep:{name:"complete",description:"A boolean prop to mark a step complete.<br>Usage:",table:{defaultValue:{summary:!1},type:{summary:"<ifx-step complete=true> </ifx-step>"}}},disabled:{name:"disabled",control:"boolean",description:"A boolean prop to make the step unclickable:",table:{defaultValue:{summary:!1},type:{summary:"<ifx-step disabled=true> </ifx-step>"}},if:{arg:"variant",eq:"default"}},errorStep:{name:"error",control:"number",description:"Specified step number indicates to have an error",table:{defaultValue:{summary:!1}}},indicatorPosition:{control:"radio",defaultValue:{summary:"left"},description:"Allows to swap the progross bar and steps' label",options:["left","right"],if:{arg:"variant",eq:"compact"}},showStepNumber:{control:"boolean",defaultValue:{summary:"false"},description:"Shows the step number when set true",if:{arg:"variant",eq:"default"}},variant:{options:["default","compact","vertical"],defaultValue:{summary:"default"},description:"Allows to switch between default and compact variant",control:"radio"},ifxChange:{action:"ifxChange",description:"A custom event emitted when active step changes",table:{type:{summary:"Framework integration",detail:'\nReact: onIfxChange={handleChange}\nVue:@ifxChange="handleChange"\nAngular:(ifxChange)="handleChange()"\nVanillaJs:.addEventListener("ifxChange", (event) => {//handle change});'}}}}},Template=args=>{const wrapper=document.createElement("div");wrapper.innerHTML=`\n<ifx-stepper \nactive-step=${args.activeStep} \n${"compact"===args.variant?`indicator-position=${args.indicatorPosition}`:""} \n${"default"===args.variant?`show-step-number=${args.showStepNumber}`:""} \nvariant=${args.variant}>\n    ${Array.from({length:args.amountOfSteps},((_,stepId)=>{const step=document.createElement("ifx-step");return step.innerHTML=`Step Label ${stepId+1}`,args.errorStep===stepId+1&&step.setAttribute("error","true"),args.disabled&&step.setAttribute("disabled","true"),step.outerHTML})).join("\n    ")}\n</ifx-stepper>`;const stepper=wrapper.querySelector("ifx-stepper");return stepper.addEventListener("ifxChange",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("ifxChange")),stepper},Default=Template.bind({});Default.args={variant:"default"};const Compact=Template.bind({});Compact.args={variant:"compact"};const Vertical=Template.bind({});Vertical.args={variant:"vertical"};const __namedExportsOrder=["Default","Compact","Vertical"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const wrapper = document.createElement('div');\n  wrapper.innerHTML = `\n<ifx-stepper \nactive-step=${args.activeStep} \n${args.variant === 'compact' ? `indicator-position=${args.indicatorPosition}` : ''} \n${args.variant === 'default' ? `show-step-number=${args.showStepNumber}` : ''} \nvariant=${args.variant}>\n    ${(() => {\n    return Array.from({\n      length: args.amountOfSteps\n    }, (_, stepId) => {\n      const step = document.createElement('ifx-step');\n      step.innerHTML = `Step Label ${stepId + 1}`;\n      if (args.errorStep === stepId + 1) step.setAttribute('error', 'true');\n      if (args.disabled) step.setAttribute('disabled', 'true');\n      return step.outerHTML;\n    }).join(`\\n    `);\n  })()}\n</ifx-stepper>`;\n  const stepper = wrapper.querySelector('ifx-stepper');\n  stepper.addEventListener('ifxChange', action('ifxChange'));\n  return stepper;\n}",...Default.parameters?.docs?.source}}},Compact.parameters={...Compact.parameters,docs:{...Compact.parameters?.docs,source:{originalSource:"args => {\n  const wrapper = document.createElement('div');\n  wrapper.innerHTML = `\n<ifx-stepper \nactive-step=${args.activeStep} \n${args.variant === 'compact' ? `indicator-position=${args.indicatorPosition}` : ''} \n${args.variant === 'default' ? `show-step-number=${args.showStepNumber}` : ''} \nvariant=${args.variant}>\n    ${(() => {\n    return Array.from({\n      length: args.amountOfSteps\n    }, (_, stepId) => {\n      const step = document.createElement('ifx-step');\n      step.innerHTML = `Step Label ${stepId + 1}`;\n      if (args.errorStep === stepId + 1) step.setAttribute('error', 'true');\n      if (args.disabled) step.setAttribute('disabled', 'true');\n      return step.outerHTML;\n    }).join(`\\n    `);\n  })()}\n</ifx-stepper>`;\n  const stepper = wrapper.querySelector('ifx-stepper');\n  stepper.addEventListener('ifxChange', action('ifxChange'));\n  return stepper;\n}",...Compact.parameters?.docs?.source}}},Vertical.parameters={...Vertical.parameters,docs:{...Vertical.parameters?.docs,source:{originalSource:"args => {\n  const wrapper = document.createElement('div');\n  wrapper.innerHTML = `\n<ifx-stepper \nactive-step=${args.activeStep} \n${args.variant === 'compact' ? `indicator-position=${args.indicatorPosition}` : ''} \n${args.variant === 'default' ? `show-step-number=${args.showStepNumber}` : ''} \nvariant=${args.variant}>\n    ${(() => {\n    return Array.from({\n      length: args.amountOfSteps\n    }, (_, stepId) => {\n      const step = document.createElement('ifx-step');\n      step.innerHTML = `Step Label ${stepId + 1}`;\n      if (args.errorStep === stepId + 1) step.setAttribute('error', 'true');\n      if (args.disabled) step.setAttribute('disabled', 'true');\n      return step.outerHTML;\n    }).join(`\\n    `);\n  })()}\n</ifx-stepper>`;\n  const stepper = wrapper.querySelector('ifx-stepper');\n  stepper.addEventListener('ifxChange', action('ifxChange'));\n  return stepper;\n}",...Vertical.parameters?.docs?.source}}}}}]);