(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[3915,4735],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/components/number-indicator/Usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),number_indicator_stories=__webpack_require__("./src/components/number-indicator/number-indicator.stories.ts");const number_indicator_style_namespaceObject=__webpack_require__.p+"static/media/number-indicator-style.7aa70517.png",number_indicator_use_namespaceObject=__webpack_require__.p+"static/media/number-indicator-use.e5db1c0a.png";function _createMdxContent(props){const _components={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:number_indicator_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"number-indicator",children:"Number Indicator"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The number indicator component refers to some of our UI elements that visually represents or displays numeric information to users."}),"\n",(0,jsx_runtime.jsxs)(_components.table,{children:[(0,jsx_runtime.jsx)(_components.thead,{children:(0,jsx_runtime.jsx)(_components.tr,{children:(0,jsx_runtime.jsx)(_components.th,{children:"Resources"})})}),(0,jsx_runtime.jsx)(_components.tbody,{children:(0,jsx_runtime.jsx)(_components.tr,{children:(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=14392-7580&amp;t=aY9BfRC7bLZytmWu-4",rel:"nofollow",children:"Figma number indicator component →"})})})})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"when-to-use",children:"When to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"If you want to display the count of items in a list or container, like the number of items in a shopping cart or the unread emails in an inbox."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"If you want to inform the user about new notification e.g. messages."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"If the user has selected many options and these can no longer be displayed due to lack of space."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"when-not-to-use",children:"When not to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"If you want to use it as different style for a numbered list. Use an icon or native numbered list style instead."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:'The number indicator component can be used in different use cases. As a counter in a shopping cart, or as indicator for unseen items. The "+" affix communicates to users that there are additional selected options beyond what\'s currently visible.'}),"\n",(0,jsx_runtime.jsx)("img",{src:number_indicator_use_namespaceObject,alt:"Number Indicator Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"style",children:"Style"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The number indicator is available in two different styles: default and inverted."}),"\n",(0,jsx_runtime.jsx)("img",{src:number_indicator_style_namespaceObject,alt:"Number Indicator Style"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"../../node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"../../node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/components/number-indicator/number-indicator.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Number Indicator",tags:["autodocs"],args:{label:1,inverted:!1}},Default=(args=>`<ifx-number-indicator inverted="${args.inverted}">${args.label}</ifx-number-indicator>`).bind({});Default.argTypes={};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `<ifx-number-indicator inverted="${args.inverted}">${args.label}</ifx-number-indicator>`',...Default.parameters?.docs?.source}}}},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);