"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[6131],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("@storybook/core-events/preview-errors"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/components/icon/infineonIconStencil.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@infineon/infineon-icons/dist/icons.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Icon",tags:["autodocs"],args:{icon:"c-check-16"},argTypes:{icon:{options:Object.values(_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_0__.P).map((i=>i.name)),control:{type:"select"}},consoleError:{action:"consoleError",description:"Custom event emitted when icon is invalid",table:{type:{summary:"Framework integration",detail:'React: onConsoleError={handleChange}\nVue:@consoleError="handleChange"\nAngular:(consoleError)="handleChange()"\nVanillaJs:.addEventListener("consoleError", (event) => {//handle change});'}}}}},Default=(({icon})=>{const ifxIcon=document.createElement("ifx-icon");return ifxIcon.setAttribute("icon",icon),ifxIcon.addEventListener("consoleError",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("consoleError")),ifxIcon}).bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  icon\n}) => {\n  const ifxIcon = document.createElement('ifx-icon');\n  ifxIcon.setAttribute('icon', icon);\n  ifxIcon.addEventListener('consoleError', action('consoleError'));\n  return ifxIcon;\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);