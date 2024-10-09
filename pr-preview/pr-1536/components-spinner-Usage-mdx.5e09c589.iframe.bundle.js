(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[4619,2399],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"../../node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"../../node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./src/components/spinner/Usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),spinner_stories=__webpack_require__("./src/components/spinner/spinner.stories.ts");const spinner_sizes_namespaceObject=__webpack_require__.p+"static/media/spinner-sizes.6a0ae2e7.png",spinner_variant_brand_namespaceObject=__webpack_require__.p+"static/media/spinner-variant-brand.ec6a7431.png",spinner_variant_default_namespaceObject=__webpack_require__.p+"static/media/spinner-variant-default.1171364e.png";function _createMdxContent(props){const _components={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:spinner_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"spinner",children:"Spinner"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The Spinner component is used to indicate loading or processing states in the user interface. It consists of animated spinners that visually convey ongoing activity."}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["| Resources                                                                                                                |\n|--------------------------------------------------------------------------------------------------------------------------|\n| ",(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=2393-3989",rel:"nofollow",children:"Figma spinner component →"})," |"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-to-use",children:"When to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"To indicate loading or processing states when fetching data, performing operations, or waiting for content to load."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-not-to-use",children:"When not to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"When there is no active loading or processing state. Spinners should only be used when there is a need to inform users about ongoing activity."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default-spinner",children:"Default spinner"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"It is a versatile spinner suitable for various loading processes. It features rounded corners with a 1px border, providing a clean and modern appearance."}),"\n",(0,jsx_runtime.jsx)("img",{src:spinner_variant_default_namespaceObject,alt:"Spinner Default",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"brand-spinner",children:"Brand spinner"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"It is a specialized spinner designed to align with the Infineon theme. It takes inspiration from a semiconductor and is particularly suited for marketing websites, adding a touch of visual appeal."}),"\n",(0,jsx_runtime.jsx)("img",{src:spinner_variant_brand_namespaceObject,alt:"Spinner Brand",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"size",children:"Size"}),"\n",(0,jsx_runtime.jsx)("img",{src:spinner_sizes_namespaceObject,alt:"Spinner Sizes"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"40px",children:"40px"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Use it when you want to indicate to the user that the entire screen or page is being loaded."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"24px",children:"24px"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Use it to indicate loading states within individual components. Note: There is no branding spinner in this size."})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/components/spinner/spinner.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Spinner",tags:["autodocs"],args:{size:"m",variant:"default"},argTypes:{size:{description:"Size options: s (24px) and m (40px) - default: m",options:["s","m"],control:{type:"radio"}},variant:{options:["default","brand"],control:{type:"radio"}}}},Default=(args=>`<ifx-spinner variant="${args.variant}" size="${args.size}"></ifx-spinner>`).bind({});Default.argsTypes={};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `<ifx-spinner variant="${args.variant}" size="${args.size}"></ifx-spinner>`',...Default.parameters?.docs?.source}}}}}]);