"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[1317,2792],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),__defProp=Object.defineProperty,ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!globalThis?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}var preview_exports={};((target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})})(preview_exports,{argsEnhancers:()=>argsEnhancers,loaders:()=>loaders});var isInInitialArgs=(name,initialArgs)=>typeof initialArgs[name]>"u"&&!(name in initialArgs),argsEnhancers=[context=>{let{initialArgs,argTypes,parameters:{actions:actions2}}=context;return actions2?.disable||!argTypes?{}:Object.entries(argTypes).filter((([name,argType])=>!!argType.action)).reduce(((acc,[name,argType])=>(isInInitialArgs(name,initialArgs)&&(acc[name]=action("string"==typeof argType.action?argType.action:name)),acc)),{})},context=>{let{initialArgs,argTypes,id,parameters:{actions:actions2}}=context;if(!actions2||actions2.disable||!actions2.argTypesRegex||!argTypes)return{};let argTypesRegex=new RegExp(actions2.argTypesRegex);return Object.entries(argTypes).filter((([name])=>!!argTypesRegex.test(name))).reduce(((acc,[name,argType])=>(isInInitialArgs(name,initialArgs)&&(acc[name]=action(name,{implicit:!0,id})),acc)),{})}],subscribed=!1,loaders=[context=>{let{parameters:{actions:actions2}}=context;if(!actions2?.disable&&!subscribed&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in external_STORYBOOK_MODULE_GLOBAL_.global&&"function"==typeof external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_TEST_ON_MOCK_CALL__){(0,external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_TEST_ON_MOCK_CALL__)(((mock,args)=>{let name=mock.getMockName();"spy"!==name&&(!/^next\/.*::/.test(name)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some((prefix=>name.startsWith(prefix))))&&action(name)(args)})),subscribed=!0}}]},"./src/components/radio-button/radio-button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Radio Button",args:{label:"Text",error:!1,disabled:!1,checked:!1,size:"s",name:"radio-button",value:"radio"},argTypes:{error:{description:"Indicates whether the radio button is in an error state.",control:"boolean",table:{category:"ifx-radio-button props",defaultValue:{summary:!1}}},disabled:{description:"Disables the radio button.",control:"boolean",table:{category:"ifx-radio-button props",defaultValue:{summary:!1}}},checked:{description:"Determines whether the radio button is selected by default.",control:"boolean",table:{category:"ifx-radio-button props",defaultValue:{summary:!1}}},label:{name:"Label of Radio Button",description:"Set the label displayed next to *<ifx-radio-button>*.",table:{category:"story controls"}},size:{description:"Specifies the size of the radio button. Options: s (20px) and m (24px).",control:"radio",options:["s","m"],table:{category:"ifx-radio-button props",defaultValue:{summary:"s"},type:{summary:"s | m"}}},name:{description:"Name of the element, that is used as reference when a form is submitted.",table:{category:"ifx-radio-button props"}},value:{description:"The value that gets submitted, when the radio button is checked.",table:{category:"ifx-radio-button props"}},ifxChange:{description:"Custom event emitted when radio button checked and unchecked.",action:"ifxChange",table:{category:"custom events",type:{summary:"Framework integration",detail:'React: onIfxChange={handleChange}\nVue:@ifxChange="handleChange"\nAngular:(ifxChange)="handleChange()"\nVanillaJs:.addEventListener("ifxChange", (event) => {//handle change});'}}},ifxError:{description:"Custom event emitted when radio button is in error state.",action:"ifxError",table:{category:"custom events",type:{summary:"Framework integration",detail:'React: onIfxError={handleError}\nVue:@ifxError="handleError"\nAngular:(ifxError)="handleError()"\nVanillaJs:.addEventListener("ifxError", (event) => {//handle error});'}}}}},Default=(args=>{const element=document.createElement("ifx-radio-button");return element.setAttribute("error",args.error),element.setAttribute("disabled",args.disabled),element.setAttribute("checked",args.checked),element.setAttribute("size",args.size),element.setAttribute("name",args.name),element.setAttribute("value",args.value),element.appendChild(document.createTextNode(args.label)),element.addEventListener("ifxChange",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("ifxChange")),element.addEventListener("ifxError",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("ifxError")),element}).bind({}),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  // Create the radio button element\n  const element = document.createElement('ifx-radio-button');\n\n  // Set the attributes\n  element.setAttribute('error', args.error);\n  element.setAttribute('disabled', args.disabled);\n  element.setAttribute('checked', args.checked);\n  element.setAttribute('size', args.size);\n  element.setAttribute('name', args.name);\n  element.setAttribute('value', args.value);\n\n  // Add the label as a text node\n  element.appendChild(document.createTextNode(args.label));\n\n  // Add the event listener\n  element.addEventListener('ifxChange', action('ifxChange'));\n  element.addEventListener('ifxError', action('ifxError'));\n\n  // Return the element\n  return element;\n}",...Default.parameters?.docs?.source}}}}}]);