(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[2293,4243],{"./src/components/tooltip/Usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),tooltip_stories=__webpack_require__("./src/components/tooltip/tooltip.stories.ts");const tooltip_anatomy_namespaceObject=__webpack_require__.p+"static/media/tooltip-anatomy.07dd960d.png",tooltip_compact_namespaceObject=__webpack_require__.p+"static/media/tooltip-compact.3d914867.png",tooltip_dismissible_namespaceObject=__webpack_require__.p+"static/media/tooltip-dismissible.6ac3cad0.png",tooltip_extended_namespaceObject=__webpack_require__.p+"static/media/tooltip-extended.7a00f24e.png",tooltip_direction_namespaceObject=__webpack_require__.p+"static/media/tooltip-direction.37ec6076.png";function _createMdxContent(props){const _components={a:"a",br:"br",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:tooltip_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"tooltip",children:"Tooltip"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The Tooltip is a text label that appears when users interact with an element, offering additional information or describing its function. Tooltips are triggered on hover or focus, and automatically disappear after a short duration. They are always positioned near the associated element, providing context and enhancing the user experience."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-to-use",children:"When to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"When you want to provide users with additional information or describe the function of an element."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"To enhance the user experience and provide contextual guidance."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"For elements that require brief, descriptive text to assist users in understanding their purpose or functionality."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"For interactive elements such as buttons, links, or icons to provide users with relevant information when interacting with those elements."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-not-to-use",children:"When not to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"When the additional information provided is lengthy or requires extensive reading."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"When there is complex content or multiple pieces of information."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"For non-interactive elements or elements that do not have relevant information to display."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"anatomy",children:"Anatomy"}),"\n",(0,jsx_runtime.jsx)("img",{src:tooltip_anatomy_namespaceObject,alt:"Tooltip Anatomy"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Tooltip title (1)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Displays a short descriptive title."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Tooltip text (2)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Longer text content that for example clarify the purpose or function of a UI element."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Direction (3)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","If needed, different directions are available to align with any use case."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Dismiss (4)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","A close icon to allow users to dismiss the tooltip if they choose to do so."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Icon (5)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","An icon can be displayed to improve the tooltips' message."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"compact",children:"Compact"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This variant contains only text, providing a concise and minimalistic tooltip for displaying brief information or descriptions."}),"\n",(0,jsx_runtime.jsx)("img",{src:tooltip_compact_namespaceObject,alt:"Tooltip Compact",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"dismissible",children:"Dismissible"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This variant includes a dismiss icon, allowing users to manually dismiss the tooltip if needed. It is useful when the tooltip content requires users to read or interact with it for a longer duration, and automatic disappearance may not be suitable."}),"\n",(0,jsx_runtime.jsx)("img",{src:tooltip_dismissible_namespaceObject,alt:"Tooltip Dismissible",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"extended",children:"Extended"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This variant combines an icon placed on the left side with text on the right side. It is helpful when the tooltip content is associated with a specific action or has a visual representation conveyed by the icon. It has no dismiss icon."}),"\n",(0,jsx_runtime.jsx)("img",{src:tooltip_extended_namespaceObject,alt:"Tooltip Extended",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"directions",children:"Directions"}),"\n",(0,jsx_runtime.jsx)("img",{src:tooltip_direction_namespaceObject,alt:"Tooltip Direction"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"trigger-delay",children:"Trigger delay"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Tooltips should appear after a short delay when the user hovers their cursor over or interacts with an UI element. This delay should be in the range of 300 milliseconds."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"display-duration",children:"Display duration"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Once a tooltip appears, it should remain visible for long enough to allow users to read and comprehend the information. Depending on the variant of the tooltip, it should remain visible for about 3 to 5 seconds after it appears. The dismissible variant should remain visible for at least 5 seconds."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"mouse-movement",children:"Mouse movement"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The tooltip disappear immediately when the user moves their cursor away from the triggering element. This behavior prevents the tooltip from obstructing the user's view as they continue navigating the interface."}),"\n",(0,jsx_runtime.jsx)(_components.hr,{}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Check out the Figma component: ",(0,jsx_runtime.jsx)(_components.strong,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?type=design&node-id=22542-15403&mode=design&t=15iRXx0cf6GC1SMq-4",rel:"nofollow",children:"Tooltip"})})]}),"\n",(0,jsx_runtime.jsx)(_components.hr,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/components/tooltip/tooltip.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@infineon/infineon-icons/dist/icons.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Tooltip",tags:["autodocs"],args:{header:"Tooltip headline",text:"Hi, I'm a tooltip",position:"auto",variant:"compact",icon:"c-info-24"},argTypes:{icon:{options:Object.values(_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_0__.P).map((i=>i.name)),control:{type:"select"}},position:{options:["auto","bottom-start","top-start","left","bottom-end","top-end","right","bottom","top"],control:{type:"radio"}},variant:{options:["compact","dismissible","extended"],control:{type:"radio"}},header:{control:"text",if:{arg:"variant",neq:"compact"}}}},Default=(({header,text,variant,position,icon})=>{const element=document.createElement("ifx-tooltip");return"dismissible"!==variant&&"extended"!==variant||element.setAttribute("header",header),element.setAttribute("text",text),element.setAttribute("variant","extended"===variant?"extended":variant),element.setAttribute("position",position),element.setAttribute("icon",icon),element.textContent="I'm the tooltip reference element - Please hover me",element}).bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  header,\n  text,\n  variant,\n  position,\n  icon\n}) => {\n  const element = document.createElement('ifx-tooltip');\n  if (variant === 'dismissible' || variant === 'extended') {\n    element.setAttribute('header', header);\n  }\n  element.setAttribute('text', text);\n  element.setAttribute('variant', variant === 'extended' ? 'extended' : variant);\n  element.setAttribute('position', position);\n  element.setAttribute('icon', icon);\n  element.textContent = \"I'm the tooltip reference element - Please hover me\"; // Set content for the reference element\n\n  return element;\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);