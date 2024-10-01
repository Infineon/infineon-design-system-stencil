(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[7424,6905],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/components/tabs/Usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),tabs_stories=__webpack_require__("./src/components/tabs/tabs.stories.ts");const tabs_anatomy_namespaceObject=__webpack_require__.p+"static/media/tabs-anatomy.5c03eaf9.png",tabs_desktop_horizontal_namespaceObject=__webpack_require__.p+"static/media/tabs-desktop-horizontal.465096b9.png",tabs_desktop_vertical_namespaceObject=__webpack_require__.p+"static/media/tabs-desktop-vertical.a28a5342.png",tabs_mobile_horizontal_namespaceObject=__webpack_require__.p+"static/media/tabs-mobile-horizontal.da8319db.png",tabs_states_namespaceObject=__webpack_require__.p+"static/media/tabs-states.707be23c.png",tabs_size_namespaceObject=__webpack_require__.p+"static/media/tabs-size.aafb1f6e.png",tabs_mouse_interaction_namespaceObject=__webpack_require__.p+"static/media/tabs-mouse-interaction.f4440876.png";function _createMdxContent(props){const _components={a:"a",br:"br",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:tabs_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"tabs",children:"Tabs"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The tab component guides the user step-by-step through the user interface and allows them to access more specific content without overwhelming them with all the available options at once."}),"\n",(0,jsx_runtime.jsxs)(_components.table,{children:[(0,jsx_runtime.jsx)(_components.thead,{children:(0,jsx_runtime.jsx)(_components.tr,{children:(0,jsx_runtime.jsx)(_components.th,{children:"Resources"})})}),(0,jsx_runtime.jsx)(_components.tbody,{children:(0,jsx_runtime.jsx)(_components.tr,{children:(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=2434-3008",rel:"nofollow",children:"Figma tabs component →"})})})})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-to-use",children:"When to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"If you have a significant amount of content organized into distinct sections or categories and you want to provide users with a structured way to navigate through them."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-not-to-use",children:"When not to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"If your interface has only a small amount of content that doesn't require a hierarchical navigation structure."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"If the navigation hierarchy is shallow or flat, and the content sections or categories are easily scannable or accessible without the need for tabs."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"If the available screen space is extremely limited and cannot accommodate the content navigation component without compromising the overall user experience."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"anatomy",children:"Anatomy"}),"\n",(0,jsx_runtime.jsx)("img",{src:tabs_anatomy_namespaceObject,alt:"Tabs Anatomy"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Selected Tab Item (1)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","As default the first tab item should be selected."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Tab Item (2)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The unselected state of a tab navigation."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Tab Container (3)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The parent element that holds all the individual tab items and the content area associated with each tab."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Content Area(4)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The content area is the part where the actual content related to the active tab is displayed. When a user clicks on a tab, the content area updates to show the corresponding content associated with that tab."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"horizontal",children:"Horizontal"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This variant is intended for use in layouts with a horizontal orientation. Each tab represents a specific section or content, and users can click on them to switch between the different sections seamlessly."}),"\n",(0,jsx_runtime.jsx)("img",{src:tabs_desktop_horizontal_namespaceObject,alt:"Tabs Desktop Horizontal"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"vertical",children:"Vertical"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This variant is designed for use in layouts with a vertical orientation. In this variant, the tabs are stacked vertically, typically on the left of the content area. Users can click on each tab to navigate to the respective content or section."}),"\n",(0,jsx_runtime.jsx)("img",{src:tabs_desktop_vertical_namespaceObject,alt:"Tabs Desktop Vertical"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"mobile",children:"Mobile"}),"\n",(0,jsx_runtime.jsx)("img",{src:tabs_mobile_horizontal_namespaceObject,alt:"Tabs Mobile Use",width:"50%"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"For mobile devices, it is recommended to use the horizontal tab variant exclusively."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"The small size should be used."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"If the tabs become too long for mobile screens, they can be wiped."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"size",children:"Size"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Only one size is available for the vertical tab variant, which should primarily be used for desktop and not for mobile. The vertical tab variant can be used for all viewports."}),"\n",(0,jsx_runtime.jsx)("img",{src:tabs_size_namespaceObject,alt:"Tabs Size"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"mouse-interaction",children:"Mouse Interaction"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The whole tab item area should be clickable."}),"\n",(0,jsx_runtime.jsx)("img",{src:tabs_mouse_interaction_namespaceObject,alt:"Tabs Mouse Interaction"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"state",children:"State"}),"\n",(0,jsx_runtime.jsx)("img",{src:tabs_states_namespaceObject,alt:"Tabs States"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"../../node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"../../node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/components/tabs/tabs.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs");const tabHeaders=[{header:"tab a",disabled:!1},{header:"tab b",disabled:!0},{header:"tab c",disabled:!1}],__WEBPACK_DEFAULT_EXPORT__={title:"Components/Tabs",tags:["autodocs"],component:"ifx-tabs",argTypes:{amountOfTabs:{name:"Amount of Tabs",control:"number"},orientation:{name:"Orientation",options:["horizontal","vertical"],control:{type:"radio"}},icon:{name:"Show icon",control:{type:"boolean"}},iconPosition:{name:"Icon position",options:["left","right"],control:{type:"radio"},if:{arg:"icon",eq:!0}},activeTabIndex:{name:"Active tab index",description:"Set a tab as active by providing the index (tab can not be disabled)"},ifxTabChange:{action:"ifxTabChange",description:"Custom event emitted on tab index change, containing the current (currentTab) and the previous tab (previousTab)",table:{type:{summary:"Framework integration",detail:'React: onIfxTabChange={handleChange}\nVue:@ifxTabChange="handleChange"\nAngular:(ifxTabChange)="handleChange()"\nVanillaJs:.addEventListener("ifxTabChange", (event) => {//handle change});'}}}}},Template=args=>{const tabsElement=document.createElement("ifx-tabs");tabsElement.setAttribute("orientation",args.orientation),tabsElement.setAttribute("active-tab-index",args.activeTabIndex),tabsElement.addEventListener("ifxTabChange",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("ifxTabChange"));for(let i=0;i<args.amountOfTabs;i++){const tabContent=document.createElement("ifx-tab");tabContent.setAttribute("header",tabHeaders[i].header),tabContent.setAttribute("disabled",tabHeaders[i].disabled.toString()),args.icon&&(tabContent.setAttribute("icon","c-check-16"),tabContent.setAttribute("icon-position",args.iconPosition)),tabContent.innerHTML=`\n        Content for Tab #${i+1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n    `,tabsElement.append(tabContent)}return tabsElement},Default=Template.bind({});Default.args={amountOfTabs:3,orientation:"horizontal",activeTabIndex:0,icon:!1,iconPosition:"left"};const Disabled=Template.bind({});Disabled.args={amountOfTabs:3,orientation:"horizontal",activeTabIndex:2};const __namedExportsOrder=["Default","Disabled"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const tabsElement = document.createElement('ifx-tabs') as HTMLIfxTabsElement;\n  tabsElement.setAttribute('orientation', args.orientation);\n  tabsElement.setAttribute('active-tab-index', args.activeTabIndex);\n  tabsElement.addEventListener('ifxTabChange', action(`ifxTabChange`));\n  for (let i = 0; i < args.amountOfTabs; i++) {\n    const tabContent = document.createElement('ifx-tab');\n    tabContent.setAttribute('header', tabHeaders[i].header);\n    tabContent.setAttribute('disabled', tabHeaders[i].disabled.toString());\n    if (args.icon) {\n      tabContent.setAttribute('icon', 'c-check-16');\n      tabContent.setAttribute('icon-position', args.iconPosition);\n    }\n    tabContent.innerHTML = `\n        Content for Tab #${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n    `;\n    tabsElement.append(tabContent);\n  }\n  return tabsElement;\n}",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"args => {\n  const tabsElement = document.createElement('ifx-tabs') as HTMLIfxTabsElement;\n  tabsElement.setAttribute('orientation', args.orientation);\n  tabsElement.setAttribute('active-tab-index', args.activeTabIndex);\n  tabsElement.addEventListener('ifxTabChange', action(`ifxTabChange`));\n  for (let i = 0; i < args.amountOfTabs; i++) {\n    const tabContent = document.createElement('ifx-tab');\n    tabContent.setAttribute('header', tabHeaders[i].header);\n    tabContent.setAttribute('disabled', tabHeaders[i].disabled.toString());\n    if (args.icon) {\n      tabContent.setAttribute('icon', 'c-check-16');\n      tabContent.setAttribute('icon-position', args.iconPosition);\n    }\n    tabContent.innerHTML = `\n        Content for Tab #${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n    `;\n    tabsElement.append(tabContent);\n  }\n  return tabsElement;\n}",...Disabled.parameters?.docs?.source}}}},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);