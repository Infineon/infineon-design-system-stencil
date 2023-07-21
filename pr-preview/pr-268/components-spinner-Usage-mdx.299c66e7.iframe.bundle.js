/*! For license information please see components-spinner-Usage-mdx.299c66e7.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[6670,4273],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/spinner/spinner.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Spinner",tags:["autodocs"],args:{size:"m",variant:"border"},argTypes:{size:{options:["s","m"],control:{type:"radio"}},variant:{options:["border","semiconductor"],control:{type:"radio"}}}},Default=(args=>`<ifx-spinner variant="${args.variant}" size="${args.size}"></ifx-spinner>`).bind({});Default.argsTypes={},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `<ifx-spinner variant="${args.variant}" size="${args.size}"></ifx-spinner>`',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/spinner/Usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),spinner_stories=__webpack_require__("./src/components/spinner/spinner.stories.ts");const spinner_sizes_namespaceObject=__webpack_require__.p+"static/media/spinner-sizes.6a0ae2e7.png",spinner_variant_brand_namespaceObject=__webpack_require__.p+"static/media/spinner-variant-brand.ec6a7431.png",spinner_variant_default_namespaceObject=__webpack_require__.p+"static/media/spinner-variant-default.1171364e.png";function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",hr:"hr",strong:"strong",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:spinner_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"spinner",children:"Spinner"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The Spinner component is used to indicate loading or processing states in the user interface. It consists of animated spinners that visually convey ongoing activity."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-to-use",children:"When to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"To indicate loading or processing states when fetching data, performing operations, or waiting for content to load."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-not-to-use",children:"When not to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"When there is no active loading or processing state. Spinners should only be used when there is a need to inform users about ongoing activity."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default-spinner",children:"Default spinner"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"It is a versatile spinner suitable for various loading processes. It features rounded corners with a 1px border, providing a clean and modern appearance."}),"\n",(0,jsx_runtime.jsx)("img",{src:spinner_variant_default_namespaceObject,alt:"Spinner Default",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"brand-spinner",children:"Brand spinner"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"It is a specialized spinner designed to align with the Infineon theme. It takes inspiration from a semiconductor and is particularly suited for marketing websites, adding a touch of visual appeal."}),"\n",(0,jsx_runtime.jsx)("img",{src:spinner_variant_brand_namespaceObject,alt:"Spinner Brand",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"size",children:"Size"}),"\n",(0,jsx_runtime.jsx)("img",{src:spinner_sizes_namespaceObject,alt:"Spinner Sizes"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"40px",children:"40px"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Use it when you want to indicate to the user that the entire screen or page is being loaded."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"24px",children:"24px"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Use it to indicate loading states within individual components. Note: There is no branding spinner in this size."}),"\n",(0,jsx_runtime.jsx)(_components.hr,{}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Check out the Figma component: ",(0,jsx_runtime.jsx)(_components.strong,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?type=design&node-id=33581-21725&mode=design&t=2lNZOOqATnlJOKBG-4",target:"_blank",rel:"nofollow noopener noreferrer",children:"Spinner"})})]}),"\n",(0,jsx_runtime.jsx)(_components.hr,{})]})}const Usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);