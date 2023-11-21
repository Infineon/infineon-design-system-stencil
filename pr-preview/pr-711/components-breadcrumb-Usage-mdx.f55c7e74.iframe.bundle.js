/*! For license information please see components-breadcrumb-Usage-mdx.f55c7e74.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[8831,9248],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD});var chunk_AY7I2SME=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./src/components/breadcrumb/Usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Usage});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),breadcrumb_stories=__webpack_require__("./src/components/breadcrumb/breadcrumb.stories.ts");const breadcrumb_anatomy_namespaceObject=__webpack_require__.p+"static/media/breadcrumb-anatomy.88f99b20.png",breadcrumb_mouse_interaction_namespaceObject=__webpack_require__.p+"static/media/breadcrumb-mouse-interaction.9d9b75d8.png",breadcrumb_positioning_desktop_namespaceObject=(__webpack_require__.p,__webpack_require__.p+"static/media/breadcrumb-positioning-desktop.5c56a8e5.png"),breadcrumb_positioning_mobile_namespaceObject=__webpack_require__.p+"static/media/breadcrumb-positioning-mobile.be98b97e.png";function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",br:"br",hr:"hr",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:breadcrumb_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"breadcrumb",children:"Breadcrumb"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Breadcrumbs are a navigational aid that provides users with a hierarchical trail of links, allowing them to understand their current location within a website or application."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-to-use",children:"When to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"When your website or application has a hierarchical structure, such as categories, subcategories, and pages."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"If users need to navigate through multiple levels to access specific information."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-not-to-use",children:"When not to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"If your website has a simple and shallow structure with only a few levels."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"anatomy",children:"Anatomy"}),"\n",(0,jsx_runtime.jsx)("img",{src:breadcrumb_anatomy_namespaceObject,alt:"Breadcrumb Anatomy"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Parent Link (1)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Guides users to the parent-level page."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Separator (2)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","A visual divider that separates each breadcrumb element."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Dropdown Icon (3)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Serves as an indicator for a dropdown menu."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Current Page (4)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Shows which page the user is currently on."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"positioning",children:"Positioning"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The breadcrumb navigation is displayed under the navigation bar and is aligned with the grid or the brand logo."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"desktop",children:"Desktop"}),"\n",(0,jsx_runtime.jsx)("img",{src:breadcrumb_positioning_desktop_namespaceObject,alt:"Breadcrumb Position Desktop"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"mobile",children:"Mobile"}),"\n",(0,jsx_runtime.jsx)("img",{src:breadcrumb_positioning_mobile_namespaceObject,alt:"Breadcrumb Position Mobile"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"mouse-interaction",children:"Mouse interaction"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Every single breadcrumb link is clickable. The page the user is currently on is not clickable. This page is characterised by the fact that it does not have an underlined style. The click area corresponds to the text width and line height. Dropdown icons have a separate link area."}),"\n",(0,jsx_runtime.jsx)("img",{src:breadcrumb_mouse_interaction_namespaceObject,alt:"Breadcrumb Mouse Interaction"}),"\n",(0,jsx_runtime.jsx)(_components.hr,{}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Check out the Figma component: ",(0,jsx_runtime.jsx)(_components.strong,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?type=design&node-id=21410-15356&mode=design&t=Uw3fwZdQW62P8kSV-4",target:"_blank",rel:"nofollow noopener noreferrer",children:"Breadcrumb"})})]}),"\n",(0,jsx_runtime.jsx)(_components.hr,{})]})}const Usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/breadcrumb/breadcrumb.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Breadcrumb",tags:["autodocs"],args:{icon:!1},argTypes:{ifxDropdownMenuItem:{action:"ifxDropdownMenuItem",description:"Custom event emitted when an item is selected",table:{type:{summary:"Framework integration",detail:'React: onIfxDropdownMenuItem={handleChange}\nVue:@ifxDropdownMenuItem="handleChange"\nAngular:(ifxDropdownMenuItem)="handleChange()"\nVanillaJs:.addEventListener("ifxDropdownMenuItem", (event) => {//handle change});'}}}}},Default=(args=>{const wrapper=document.createElement("div");wrapper.innerHTML=`<ifx-breadcrumb>\n  <ifx-breadcrumb-item>\n    <ifx-breadcrumb-item-label slot="label" icon="${args.icon?"c-info-16":""}">Breadcrumb 1</ifx-breadcrumb-item-label>\n    <ifx-dropdown-menu>\n      <ifx-dropdown-item url="http://google.com">Google</ifx-dropdown-item>\n      <ifx-dropdown-item url="http://bing.com">Bing</ifx-dropdown-item>\n      <ifx-dropdown-item url="http://yahoo.com">Yahoo</ifx-dropdown-item>\n      <ifx-dropdown-item url="http://naver.com">Naver</ifx-dropdown-item>\n    </ifx-dropdown-menu>\n  </ifx-breadcrumb-item>\n\n  <ifx-breadcrumb-item>\n    <ifx-breadcrumb-item-label slot="label" icon="${args.icon?"c-info-16":""}">Breadcrumb 2</ifx-breadcrumb-item-label>\n    <ifx-dropdown-menu>\n    <ifx-dropdown-item url="http://google.com">Google</ifx-dropdown-item>\n    <ifx-dropdown-item url="http://bing.com">Bing</ifx-dropdown-item>\n    <ifx-dropdown-item url="http://yahoo.com">Yahoo</ifx-dropdown-item>\n    <ifx-dropdown-item url="http://naver.com">Naver</ifx-dropdown-item>\n    </ifx-dropdown-menu>\n  </ifx-breadcrumb-item>\n\n  <ifx-breadcrumb-item>\n    <ifx-breadcrumb-item-label slot="label" icon="${args.icon?"c-info-16":""}" url="http://google.com">Breadcrumb 3</ifx-breadcrumb-item-label>\n  </ifx-breadcrumb-item>\n</ifx-breadcrumb>`;return wrapper.querySelector("ifx-breadcrumb").querySelectorAll("ifx-breadcrumb-item").forEach((breadcrumbItem=>{const dropdownMenu=breadcrumbItem.querySelector("ifx-dropdown-menu");dropdownMenu?.addEventListener("ifxDropdownMenuItem",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxDropdownMenuItem"))})),wrapper}).bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  const wrapper = document.createElement(\'div\');\n  wrapper.innerHTML = `<ifx-breadcrumb>\n  <ifx-breadcrumb-item>\n    <ifx-breadcrumb-item-label slot="label" icon="${args.icon ? \'c-info-16\' : ""}">Breadcrumb 1</ifx-breadcrumb-item-label>\n    <ifx-dropdown-menu>\n      <ifx-dropdown-item url="http://google.com">Google</ifx-dropdown-item>\n      <ifx-dropdown-item url="http://bing.com">Bing</ifx-dropdown-item>\n      <ifx-dropdown-item url="http://yahoo.com">Yahoo</ifx-dropdown-item>\n      <ifx-dropdown-item url="http://naver.com">Naver</ifx-dropdown-item>\n    </ifx-dropdown-menu>\n  </ifx-breadcrumb-item>\n\n  <ifx-breadcrumb-item>\n    <ifx-breadcrumb-item-label slot="label" icon="${args.icon ? \'c-info-16\' : ""}">Breadcrumb 2</ifx-breadcrumb-item-label>\n    <ifx-dropdown-menu>\n    <ifx-dropdown-item url="http://google.com">Google</ifx-dropdown-item>\n    <ifx-dropdown-item url="http://bing.com">Bing</ifx-dropdown-item>\n    <ifx-dropdown-item url="http://yahoo.com">Yahoo</ifx-dropdown-item>\n    <ifx-dropdown-item url="http://naver.com">Naver</ifx-dropdown-item>\n    </ifx-dropdown-menu>\n  </ifx-breadcrumb-item>\n\n  <ifx-breadcrumb-item>\n    <ifx-breadcrumb-item-label slot="label" icon="${args.icon ? \'c-info-16\' : ""}" url="http://google.com">Breadcrumb 3</ifx-breadcrumb-item-label>\n  </ifx-breadcrumb-item>\n</ifx-breadcrumb>`;\n  const breadcrumb = (wrapper.querySelector(\'ifx-breadcrumb\') as HTMLElement);\n  // Loop through each breadcrumb item and attach event listeners to its dropdown menu\n  const breadcrumbItems = breadcrumb.querySelectorAll(\'ifx-breadcrumb-item\');\n  breadcrumbItems.forEach(breadcrumbItem => {\n    const dropdownMenu = breadcrumbItem.querySelector(\'ifx-dropdown-menu\');\n    dropdownMenu?.addEventListener(\'ifxDropdownMenuItem\', action(\'ifxDropdownMenuItem\'));\n  });\n  return wrapper;\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);