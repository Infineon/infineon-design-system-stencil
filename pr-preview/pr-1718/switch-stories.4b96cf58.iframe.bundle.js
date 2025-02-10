"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[1367,2792],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/components/switch/switch.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Switch",tags:["autodocs"],args:{label:"Switch",checked:!1,name:"switch",value:"switch",disabled:!1},argTypes:{label:{name:"Label of Switch",description:"Set the label of *<ifx-switch>*.",table:{category:"story controls"}},name:{description:"Name of the element, that is used as reference when a form is submitted.",table:{category:"ifx-switch props",type:{summary:"string"}}},checked:{name:"checked",description:"Set the checked state of the switch.",table:{category:"ifx-switch props",defaultValue:{summary:"false"},type:{summary:"boolean"}}},value:{description:"The value that gets submitted, when the radio button is checked.",table:{category:"ifx-switch props",type:{summary:"string"}}},disabled:{description:"The value that gets submitted, when the radio button is checked.",table:{category:"ifx-switch props",defaultValue:{summary:"false"},type:{summary:"boolean"}}},ifxChange:{description:"Custom event emitted on change.",table:{category:"custom events",type:{summary:"Framework integration",detail:'React: onIfxChange={handleChange}\nVue:@ifxChange="handleChange"\nAngular:(ifxChange)="handleChange()"\nVanillaJs:.addEventListener("ifxChange", (event) => {//handle change});'}},action:"ifxChange"}}},Default=(args=>{const element=document.createElement("ifx-switch");element.setAttribute("checked",args.checked),element.setAttribute("name",args.name),element.setAttribute("value",args.value),element.setAttribute("disabled",args.disabled),element.addEventListener("ifxChange",(event=>{const customEvent=event,newValue=customEvent.detail;(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("ifxChange")(customEvent),args.value=newValue}));const slotContent=document.createTextNode(args.label);return element.appendChild(slotContent),element}).bind({}),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const element = document.createElement('ifx-switch') as HTMLIfxSwitchElement;\n\n  // Set the attributes\n  element.setAttribute('checked', args.checked);\n  element.setAttribute('name', args.name);\n  element.setAttribute('value', args.value);\n  element.setAttribute('disabled', args.disabled);\n\n  // Add the event listener\n  // element.addEventListener('ifxChange', action('ifxChange'));\n  // Inside your story, add an event listener for the custom event\n  element.addEventListener('ifxChange', (event: Event) => {\n    const customEvent = event as CustomEvent;\n    const newValue = customEvent.detail;\n    action('ifxChange')(customEvent);\n    args.value = newValue;\n  });\n  const slotContent = document.createTextNode(args.label);\n  element.appendChild(slotContent);\n  return element;\n}",...Default.parameters?.docs?.source}}}}}]);