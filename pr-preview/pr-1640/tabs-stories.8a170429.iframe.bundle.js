"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[3259],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/components/tabs/tabs.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@infineon/infineon-icons/dist/icons.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Tabs",tags:["autodocs"],component:"ifx-tabs",args:{amountOfTabs:3,orientation:"horizontal",icon:"",header:"Tab",disabled:!1},argTypes:{amountOfTabs:{name:"Amount of Tabs",control:"number",description:"Set the number of tabs.",table:{category:"story controls",type:{summary:"number"}}},orientation:{options:["horizontal","vertical"],control:{type:"radio"},description:"Set the orientation of the tabs.",table:{category:"ifx-tabs props",defaultValue:{summary:"horizontal"},type:{summary:"horizontal | vertical"}}},icon:{name:"icon",control:{type:"select"},options:["none",...Object.values(_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_1__.P).map((i=>i.name))],description:'Set the icon of the tab. Choose "none" to display no icon.',table:{category:"ifx-tab props",defaultValue:{summary:""},type:{summary:"string"}}},fullWidth:{name:"Full width",control:{type:"boolean"},description:"Adds flex: 1 to the ifx-tab child components, thus making them occupy the full width of their parent"},iconPosition:{options:["left","right"],control:{type:"radio"},description:"Set the position of the icon.",table:{category:"ifx-tab props",defaultValue:{summary:"left"},type:{summary:"left | right"}}},activeTabIndex:{description:"Set the tab as active by providing the index (tab can not be disabled).",table:{category:"ifx-tabs props",defaultValue:{summary:"0"},type:{summary:"number"}}},header:{control:"text",description:"Set the header of the tab.",table:{defaultValue:{summary:"Tab"},category:"ifx-tab props",type:{summary:"string"}}},disabled:{control:"boolean",description:"Set the tab to disabled. In the storybook, the second tab will be disabled.",table:{category:"ifx-tab props",defaultValue:{summary:"false"}}},ifxTabChange:{action:"ifxTabChange",description:"Custom event emitted on tab index change, containing the current (currentTab) and the previous tab (previousTab).",table:{category:"custom events",type:{summary:"Framework integration",detail:'React: onIfxTabChange={handleChange}\nVue:@ifxTabChange="handleChange"\nAngular:(ifxTabChange)="handleChange()"\nVanillaJs:.addEventListener("ifxTabChange", (event) => {//handle change});'}}}}},Default=(args=>{const tabsElement=document.createElement("ifx-tabs");tabsElement.setAttribute("orientation",args.orientation),tabsElement.setAttribute("active-tab-index",args.activeTabIndex),tabsElement.setAttribute("full-width",args.fullWidth),tabsElement.addEventListener("ifxTabChange",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("ifxTabChange"));for(let i=0;i<args.amountOfTabs;i++){const tabContent=document.createElement("ifx-tab");tabContent.setAttribute("header",`${args.header} ${i+1}`),1==i&&tabContent.setAttribute("disabled",args.disabled);var icon="none"===args.icon?"":args.icon;tabContent.setAttribute("icon",icon),tabContent.setAttribute("icon-position",args.iconPosition),tabContent.innerHTML=`\n        Content for Tab #${i+1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n    `,tabsElement.append(tabContent)}return tabsElement}).bind({});Default.args={amountOfTabs:3,orientation:"horizontal",activeTabIndex:0,icon:"",iconPosition:"left",header:"Tab",disabled:!1};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const tabsElement = document.createElement('ifx-tabs') as HTMLIfxTabsElement;\n  tabsElement.setAttribute('orientation', args.orientation);\n  tabsElement.setAttribute('active-tab-index', args.activeTabIndex);\n  tabsElement.setAttribute('full-width', args.fullWidth);\n  tabsElement.addEventListener('ifxTabChange', action(`ifxTabChange`));\n  for (let i = 0; i < args.amountOfTabs; i++) {\n    const tabContent = document.createElement('ifx-tab');\n    tabContent.setAttribute('header', `${args.header} ${i + 1}`);\n    if (i == 1) {\n      tabContent.setAttribute('disabled', args.disabled);\n    }\n    var icon = args.icon === 'none' ? '' : args.icon;\n    tabContent.setAttribute('icon', icon);\n    tabContent.setAttribute('icon-position', args.iconPosition);\n    tabContent.innerHTML = `\n        Content for Tab #${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n    `;\n    tabsElement.append(tabContent);\n  }\n  return tabsElement;\n}",...Default.parameters?.docs?.source}}}}}]);