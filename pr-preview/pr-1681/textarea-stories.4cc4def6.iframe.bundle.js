"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[9229,2792],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/components/textarea/textarea.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Textarea",tags:["autodocs"],args:{caption:"Caption text, description, error notification",cols:43,disabled:!1,error:!1,label:"Label Text",maxlength:void 0,name:"textarea",placeholder:"Placeholder",readOnly:!1,resize:"both",rows:5,value:"",wrap:"soft"},argTypes:{caption:{description:"Set the caption text of textarea.",table:{category:"ifx-textarea props"}},cols:{description:"Set the visible width of the textarea control.",control:{type:"number",min:0},table:{category:"ifx-textarea props",defaultValue:{summary:2}}},disabled:{description:"Disables the user interaction when set to true.",table:{category:"ifx-textarea props",defaultValue:{summary:!1}}},error:{description:"Set the component to error state.",table:{category:"ifx-textarea props",defaultValue:{summary:!1}}},label:{description:"Set the label of textarea component.",table:{category:"ifx-textarea props"}},maxlength:{description:"Set the maximum string length user can enter.",type:"number",table:{category:"ifx-textarea props"}},name:{description:"The name of the control. Useful for form handling.",table:{category:"ifx-textarea props",defaultValue:{summary:"ifx-textarea-[n]"}}},placeholder:{description:"Set the placeholder text of textarea.",table:{category:"ifx-textarea props"}},readOnly:{name:"read-only",description:"Text cannot be edited when set to true.\n \n*Note: It is different from disabled prop, control is focusable in readOnly mode unlike disabled.*",table:{category:"ifx-textarea props",defaultValue:{summary:"false"}}},resize:{description:"Sets whether the textarea is resizable, and if so, in which directions.",control:"radio",options:["both","vertical","horizontal","none"],table:{category:"ifx-textarea props",defaultValue:{summary:"none"}}},rows:{description:"Set the number of visible text lines for the textrarea control.",table:{category:"ifx-textarea props",defaultValue:{summary:2}}},value:{description:"Current value of the textarea.",table:{category:"ifx-textarea props"}},wrap:{description:"Indicates how the control should wrap the value for form submission.",control:"radio",options:["soft","hard","off"],table:{category:"ifx-textarea props",defaultValue:{summary:"soft"}}},ifxInput:{description:"A custom event *ifxInput* is emitted immediately after the value of *<ifx-textarea>* changes.",table:{category:"custom events",type:{summary:"Framework integration",detail:'\nReact: onIfxInput={handleInput}\nVue: @ifxInput="handleInput"\nAngular: (ifxInput)="handleInput()"\nVanillaJs: .addEventListener("ifxInput", (event) => {/*handle input*/});'}}}}},Default=(args=>{const wrapper=document.createElement("div");wrapper.innerHTML=`\n<ifx-textarea \n    caption="${args.caption}"\n    cols="${args.cols}"\n    disabled="${args.disabled}"\n    error="${args.error}"\n    label="${args.label}"\n    maxlength="${args.maxlength}"\n    name="${args.name}"\n    placeholder="${args.placeholder}"\n    read-only="${args.readOnly}"\n    resize="${args.resize}"\n    rows="${args.rows}"\n    value="${args.value}"\n    wrap="${args.wrap}"\n/>\n`;const textarea=wrapper.querySelector("ifx-textarea");return textarea.addEventListener("ifxInput",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("ifxInput")),textarea}).bind({}),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  const wrapper = document.createElement(\'div\');\n  wrapper.innerHTML = `\n<ifx-textarea \n    caption="${args.caption}"\n    cols="${args.cols}"\n    disabled="${args.disabled}"\n    error="${args.error}"\n    label="${args.label}"\n    maxlength="${args.maxlength}"\n    name="${args.name}"\n    placeholder="${args.placeholder}"\n    read-only="${args.readOnly}"\n    resize="${args.resize}"\n    rows="${args.rows}"\n    value="${args.value}"\n    wrap="${args.wrap}"\n/>\n`;\n  const textarea = wrapper.querySelector(\'ifx-textarea\');\n  textarea.addEventListener(\'ifxInput\', action(\'ifxInput\'));\n  return textarea;\n}',...Default.parameters?.docs?.source}}}}}]);