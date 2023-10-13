/*! For license information please see components-search-field-Usage-mdx.c8eaad4e.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[1686,3370],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD});var chunk_AY7I2SME=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./src/components/search-field/search-field.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Search Field",tags:["autodocs"],args:{showDeleteIcon:!0,disabled:!1,size:"m"},argTypes:{size:{description:"Size options: s (36px) and m (40px) - default: m",options:["s","m"],control:{type:"radio"}},onIfxInput:{action:"ifxInput",description:"Custom event emitted on input",table:{type:{summary:"Framework integration",detail:'React: onIfxInput={handleInput}\nVue:@ifxInput="handleInput"\nAngular:(ifxInput)="handleInput()"\nVanillaJs:.addEventListener("ifxInput", (event) => {//handle input});'}}}}},Default=(({disabled,size,showDeleteIcon})=>{const element=document.createElement("ifx-search-field");return element.setAttribute("size",size),element.setAttribute("disabled",disabled),element.setAttribute("show-delete-icon",showDeleteIcon),element.addEventListener("ifxInput",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxInput")),element}).bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  disabled,\n  size,\n  showDeleteIcon\n}) => {\n  const element = document.createElement('ifx-search-field');\n  element.setAttribute('size', size);\n  element.setAttribute('disabled', disabled);\n  element.setAttribute('show-delete-icon', showDeleteIcon);\n  element.addEventListener('ifxInput', action('ifxInput'));\n  return element;\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/search-field/Usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Usage});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),search_field_stories=__webpack_require__("./src/components/search-field/search-field.stories.ts");const search_field_anatomy_namespaceObject=__webpack_require__.p+"static/media/search-field-anatomy.f0157d0b.png",search_field_states_namespaceObject=__webpack_require__.p+"static/media/search-field-states.7176a86b.png",search_field_sizes_namespaceObject=__webpack_require__.p+"static/media/search-field-sizes.ecd87239.png";function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",br:"br",hr:"hr",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:search_field_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"search-field",children:"Search Field"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The search field component is a fundamental element of our design system that allows users to enter search queries to retrieve relevant information from a dataset or database. It enables users to find and filter content efficiently."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-to-use",children:"When to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"When your application contains a large amount of content, such as products, articles, or data, and users may need to find specific items quickly."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"When navigation within your application involves multiple layers or categories, a search field can act as a time-saving alternative to browsing."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-not-to-use",children:"When not to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"When your content or data is minimal and easily navigable."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"anatomy",children:"Anatomy"}),"\n",(0,jsx_runtime.jsx)("img",{src:search_field_anatomy_namespaceObject,alt:"Search Field Anatomy"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Field (1)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The input field allows users to enter search queries."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Search Icon (2)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The search icon signifies the search action."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Search Label (3)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","A label provides clarity about what the search field is for. It tells users explicitly that this is a search input, reducing any potential confusion."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Clear Icon (4)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The clear icon lets users quickly clear the search input field."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"states",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:search_field_states_namespaceObject,alt:"Search Field States"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"size",children:"Size"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"There are two search field sizes: 36px and 40px. This will give you more flexibility in structuring layouts due to e.g. different button heights. It's important to maintain uniform field height while combining form elements on a single page."}),"\n",(0,jsx_runtime.jsx)("img",{src:search_field_sizes_namespaceObject,alt:"Search Field Sizes"}),"\n",(0,jsx_runtime.jsx)(_components.hr,{}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Check out the Figma component: ",(0,jsx_runtime.jsx)(_components.strong,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?type=design&node-id=14251-8185&mode=design&t=donPtR9Uh27HrGsQ-4",target:"_blank",rel:"nofollow noopener noreferrer",children:"Search Field"})})]}),"\n",(0,jsx_runtime.jsx)(_components.hr,{})]})}const Usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);