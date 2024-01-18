(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[5793,8768],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{aD:()=>action});var v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),preview_errors=__webpack_require__("../../node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new preview_errors.is({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler}},"./src/components/slider/slider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,WithIcons:()=>WithIcons,WithPercentageDisplay:()=>WithPercentageDisplay,WithTexts:()=>WithTexts,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@infineon/infineon-icons/dist/icons.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Slider",component:"ifx-slider",tags:["autodocs"],argTypes:{value:{control:"number"},min:{control:"number"},max:{control:"number"},showPercentage:{control:"boolean"},disabled:{control:"boolean"},leftIcon:{options:Object.values(_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_1__.c).map((i=>i.name)),control:{type:"select"}},rightIcon:{options:Object.values(_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_1__.c).map((i=>i.name)),control:{type:"select"}},leftText:{control:"text"},rightText:{control:"text"},ifxChange:{action:"ifxChange",description:"Custom event emitted on input change",table:{type:{summary:"Framework integration",detail:'React: onIfxChange={handleChange}\nVue:@ifxChange="handleChange"\nAngular:(ifxChange)="handleChange()"\nVanillaJs:.addEventListener("ifxChange", (event) => {//handle change});'}}}}},Template=args=>{const sliderElement=document.createElement("ifx-slider");return sliderElement.setAttribute("value",args.value),sliderElement.setAttribute("min",args.min),sliderElement.setAttribute("max",args.max),args.showPercentage&&sliderElement.setAttribute("show-percentage","true"),args.disabled&&sliderElement.setAttribute("disabled","true"),args.leftIcon&&sliderElement.setAttribute("left-icon",args.leftIcon),args.rightIcon&&sliderElement.setAttribute("right-icon",args.rightIcon),args.leftText&&sliderElement.setAttribute("left-text",args.leftText),args.rightText&&sliderElement.setAttribute("right-text",args.rightText),sliderElement.addEventListener("ifxChange",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxChange")),sliderElement},Default=Template.bind({});Default.args={value:50,min:0,max:100,showPercentage:!1,disabled:!1};const WithPercentageDisplay=Template.bind({});WithPercentageDisplay.args={value:50,min:0,max:100,showPercentage:!0,disabled:!1};const WithIcons=Template.bind({});WithIcons.args={...Default.args,leftIcon:"cogwheel-16",rightIcon:"cogwheel-16"};const WithTexts=Template.bind({});WithTexts.args={...Default.args,leftText:"LeftText",rightText:"RightText"};const Disabled=Template.bind({});Disabled.args={...Default.args,disabled:!0},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const sliderElement = document.createElement('ifx-slider');\n  sliderElement.setAttribute('value', args.value);\n  sliderElement.setAttribute('min', args.min);\n  sliderElement.setAttribute('max', args.max);\n  if (args.showPercentage) {\n    sliderElement.setAttribute('show-percentage', 'true');\n  }\n  if (args.disabled) {\n    sliderElement.setAttribute('disabled', 'true'); // Set disabled attribute\n  }\n  if (args.leftIcon) {\n    sliderElement.setAttribute('left-icon', args.leftIcon);\n  }\n  if (args.rightIcon) {\n    sliderElement.setAttribute('right-icon', args.rightIcon);\n  }\n  if (args.leftText) {\n    sliderElement.setAttribute('left-text', args.leftText);\n  }\n  if (args.rightText) {\n    sliderElement.setAttribute('right-text', args.rightText);\n  }\n  sliderElement.addEventListener('ifxChange', action('ifxChange'));\n  return sliderElement;\n}",...Default.parameters?.docs?.source}}},WithPercentageDisplay.parameters={...WithPercentageDisplay.parameters,docs:{...WithPercentageDisplay.parameters?.docs,source:{originalSource:"args => {\n  const sliderElement = document.createElement('ifx-slider');\n  sliderElement.setAttribute('value', args.value);\n  sliderElement.setAttribute('min', args.min);\n  sliderElement.setAttribute('max', args.max);\n  if (args.showPercentage) {\n    sliderElement.setAttribute('show-percentage', 'true');\n  }\n  if (args.disabled) {\n    sliderElement.setAttribute('disabled', 'true'); // Set disabled attribute\n  }\n  if (args.leftIcon) {\n    sliderElement.setAttribute('left-icon', args.leftIcon);\n  }\n  if (args.rightIcon) {\n    sliderElement.setAttribute('right-icon', args.rightIcon);\n  }\n  if (args.leftText) {\n    sliderElement.setAttribute('left-text', args.leftText);\n  }\n  if (args.rightText) {\n    sliderElement.setAttribute('right-text', args.rightText);\n  }\n  sliderElement.addEventListener('ifxChange', action('ifxChange'));\n  return sliderElement;\n}",...WithPercentageDisplay.parameters?.docs?.source}}},WithIcons.parameters={...WithIcons.parameters,docs:{...WithIcons.parameters?.docs,source:{originalSource:"args => {\n  const sliderElement = document.createElement('ifx-slider');\n  sliderElement.setAttribute('value', args.value);\n  sliderElement.setAttribute('min', args.min);\n  sliderElement.setAttribute('max', args.max);\n  if (args.showPercentage) {\n    sliderElement.setAttribute('show-percentage', 'true');\n  }\n  if (args.disabled) {\n    sliderElement.setAttribute('disabled', 'true'); // Set disabled attribute\n  }\n  if (args.leftIcon) {\n    sliderElement.setAttribute('left-icon', args.leftIcon);\n  }\n  if (args.rightIcon) {\n    sliderElement.setAttribute('right-icon', args.rightIcon);\n  }\n  if (args.leftText) {\n    sliderElement.setAttribute('left-text', args.leftText);\n  }\n  if (args.rightText) {\n    sliderElement.setAttribute('right-text', args.rightText);\n  }\n  sliderElement.addEventListener('ifxChange', action('ifxChange'));\n  return sliderElement;\n}",...WithIcons.parameters?.docs?.source}}},WithTexts.parameters={...WithTexts.parameters,docs:{...WithTexts.parameters?.docs,source:{originalSource:"args => {\n  const sliderElement = document.createElement('ifx-slider');\n  sliderElement.setAttribute('value', args.value);\n  sliderElement.setAttribute('min', args.min);\n  sliderElement.setAttribute('max', args.max);\n  if (args.showPercentage) {\n    sliderElement.setAttribute('show-percentage', 'true');\n  }\n  if (args.disabled) {\n    sliderElement.setAttribute('disabled', 'true'); // Set disabled attribute\n  }\n  if (args.leftIcon) {\n    sliderElement.setAttribute('left-icon', args.leftIcon);\n  }\n  if (args.rightIcon) {\n    sliderElement.setAttribute('right-icon', args.rightIcon);\n  }\n  if (args.leftText) {\n    sliderElement.setAttribute('left-text', args.leftText);\n  }\n  if (args.rightText) {\n    sliderElement.setAttribute('right-text', args.rightText);\n  }\n  sliderElement.addEventListener('ifxChange', action('ifxChange'));\n  return sliderElement;\n}",...WithTexts.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"args => {\n  const sliderElement = document.createElement('ifx-slider');\n  sliderElement.setAttribute('value', args.value);\n  sliderElement.setAttribute('min', args.min);\n  sliderElement.setAttribute('max', args.max);\n  if (args.showPercentage) {\n    sliderElement.setAttribute('show-percentage', 'true');\n  }\n  if (args.disabled) {\n    sliderElement.setAttribute('disabled', 'true'); // Set disabled attribute\n  }\n  if (args.leftIcon) {\n    sliderElement.setAttribute('left-icon', args.leftIcon);\n  }\n  if (args.rightIcon) {\n    sliderElement.setAttribute('right-icon', args.rightIcon);\n  }\n  if (args.leftText) {\n    sliderElement.setAttribute('left-text', args.leftText);\n  }\n  if (args.rightText) {\n    sliderElement.setAttribute('right-text', args.rightText);\n  }\n  sliderElement.addEventListener('ifxChange', action('ifxChange'));\n  return sliderElement;\n}",...Disabled.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithPercentageDisplay","WithIcons","WithTexts","Disabled"]},"./src/components/slider/Usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Usage});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),slider_stories=__webpack_require__("./src/components/slider/slider.stories.tsx");const range_slider_default_namespaceObject=__webpack_require__.p+"static/media/range-slider-default.4bd73a31.png",range_slider_states_namespaceObject=__webpack_require__.p+"static/media/range-slider-states.fe5b2e19.png",slider_anatomy_namespaceObject=__webpack_require__.p+"static/media/slider-anatomy.7fd96507.png",slider_default_namespaceObject=__webpack_require__.p+"static/media/slider-default.a9717c5f.png",slider_states_namespaceObject=__webpack_require__.p+"static/media/slider-states.d10afb4a.png",slider_variants_namespaceObject=__webpack_require__.p+"static/media/slider-variants.334a8326.png";function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",h4:"h4",strong:"strong",hr:"hr",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:slider_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"slider",children:"Slider"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The slider component allows users to select a value or a range of values within a specified numeric range. It provides a visual representation of a continuous scale with adjustable handles, enabling users to slide and select desired values."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-to-use",children:"When to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"When you need to allow users to select a specific value or a range of values within a defined numeric range."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"When precise control over the selected values is required, such as input ranges."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-not-to-use",children:"When not to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"If the range of values is extremely limited or has a small number of discrete options."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"If the input requires highly precise or specific numeric values."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"If the available space for the range slider component is constrained, and displaying the full range or a large number of values becomes visually challenging."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"If the numeric range is complex or non-linear, with varying intervals or irregular increments."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"types",children:"Types"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"slider-1",children:"Slider"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This variant allows users to select a single value within a specified range. It consists of a track and a draggable thumb that can be moved along the track to set the desired value."}),"\n",(0,jsx_runtime.jsx)("img",{src:slider_default_namespaceObject,alt:"Slider Default",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Depending on use cases, there are various value options which can be displayed."}),"\n",(0,jsx_runtime.jsx)("img",{src:slider_variants_namespaceObject,alt:"Slider Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"states",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:slider_states_namespaceObject,alt:"Slider States"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"range-slider",children:"Range Slider"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This variant allows users to select a range of values within a specified numeric range. It consists of a track and two draggable thumbs that can be adjusted to set the desired range."}),"\n",(0,jsx_runtime.jsx)("img",{src:range_slider_default_namespaceObject,alt:"Range Slider Default",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"states-1",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:range_slider_states_namespaceObject,alt:"Range Slider States"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"anatomy",children:"Anatomy"}),"\n",(0,jsx_runtime.jsx)("img",{src:slider_anatomy_namespaceObject,alt:"Slider Anatomy"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Label (1)"}),"\nLabels are optional but often included to provide textual representations of the minimum, maximum, or selected values on the slider. These labels are located above the slider component."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Fill (2)"}),"\nThe colored portion of the track that represents the selected amount."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Handle (3)"}),"\nThe draggable element that users can interact with to select a specific value or range on the slider. It moves along the track as the user drags it."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Track (4)"}),"\nThe horizontal bar that represents the entire range of values that the slider can span."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Range Slider (5)"}),"\nIn the range slider, the fill is the colored portion of the track that represents the selected range between the minimum and maximum values. It visually fills the space between the two handles, indicating the selected range."]}),"\n",(0,jsx_runtime.jsx)(_components.hr,{}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Check out the Figma component: ",(0,jsx_runtime.jsx)(_components.strong,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?type=design&node-id=38242-6620&mode=design",target:"_blank",rel:"nofollow noopener noreferrer",children:"Slider"})}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.hr,{})]})}const Usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);