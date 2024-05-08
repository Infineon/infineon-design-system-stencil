/*! For license information please see components-sidebar-Usage-mdx.c95c365c.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[4915,9504],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/sidebar/sidebar.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Sidebar",tags:["autodocs"],args:{icon:!0,applicationName:"Application Name"},argTypes:{}},Default=(args=>`<ifx-sidebar application-name="${args.applicationName}">\n  <ifx-sidebar-item href="http://google.com" target="_blank" icon="${args.icon?"image-16":""}">Item One</ifx-sidebar-item>\n  <ifx-sidebar-item href="http://google.com" target="_blank" icon="${args.icon?"image-16":""}">Item Two</ifx-sidebar-item>\n  <ifx-sidebar-item href="http://google.com" target="_blank" icon="${args.icon?"image-16":""}">Item Three</ifx-sidebar-item>\n  <ifx-sidebar-item href="http://google.com" target="_blank" icon="${args.icon?"image-16":""}">Item Four</ifx-sidebar-item>\n</ifx-sidebar>`).bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `<ifx-sidebar application-name="${args.applicationName}">\n  <ifx-sidebar-item href="http://google.com" target="_blank" icon="${args.icon ? \'image-16\' : ""}">Item One</ifx-sidebar-item>\n  <ifx-sidebar-item href="http://google.com" target="_blank" icon="${args.icon ? \'image-16\' : ""}">Item Two</ifx-sidebar-item>\n  <ifx-sidebar-item href="http://google.com" target="_blank" icon="${args.icon ? \'image-16\' : ""}">Item Three</ifx-sidebar-item>\n  <ifx-sidebar-item href="http://google.com" target="_blank" icon="${args.icon ? \'image-16\' : ""}">Item Four</ifx-sidebar-item>\n</ifx-sidebar>`',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/sidebar/Usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Usage});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),sidebar_stories=__webpack_require__("./src/components/sidebar/sidebar.stories.ts");const sidebar_anatomy_namespaceObject=__webpack_require__.p+"static/media/sidebar-anatomy.34b73d40.png",sidebar_expanded_anatomy_namespaceObject=__webpack_require__.p+"static/media/sidebar-expanded-anatomy.5cc0ec2f.png";function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",br:"br",hr:"hr",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:sidebar_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"sidebar",children:"Sidebar"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"For dashboards or similar functional application we provide a different and usually common variant of navigation. The sidebar gives users an easy access to different sections."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"anatomy-of-default-sidebar",children:"Anatomy of default sidebar"}),"\n",(0,jsx_runtime.jsx)("img",{src:sidebar_anatomy_namespaceObject,alt:"Sidebar Anatomy"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Logo (1)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The header always starts with the brand logo."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Application name (2)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The application name is always shown below the brand logo."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Main Menu item list (3)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","To navigate through different sections and pages. It is possible to attach a supportive icon before the menu item-labels."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Divider (4)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","To visually cluster different sub menus or to differentiate the sticky footer from the rest above."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Cluster Title (5)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","This menu item opens another subordinate menu. It is always denoted with a chevron-down icon to the right. The cluster title has always a divider above. Do not use any icons before this menu item."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Footer (6)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The footer at the bottom can be displayed optionally. The text links within the footer are displayed in one line and wrapped if they become too long. A dividing line at the top indicates the margin of the footer."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Search field (7)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","If needed the search field can be displayed inside the sidebar's navigation bar."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Secondary navigation (8)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Crucial functions can be placed here. Please pay attention to the placement by priority."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Border (9)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","A 1px border indicates the bottom edge of the navigation bar and the right edge of the sidebar at anytime."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Number Indicator (10)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Informs the user about the amount of unseen content inside the menu item's page."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"anatomy-of-expanded-sidebar-navigation",children:"Anatomy of expanded sidebar navigation"}),"\n",(0,jsx_runtime.jsx)("img",{src:sidebar_expanded_anatomy_namespaceObject,alt:"Sidebar Expanded Anatomy"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Subordinated menu (1)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Opens a subordinated menu when you click on the referenced cluster title. It is possible to attach a supportive icon before the menu item-labels."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Hidden overflow footer(2)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","When the content in the sidebar gets too big than the further overflow is clipped."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Scroll bar (3)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","A scroll bar appears as the sidebar's height increases."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Expanded menu item (4)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The chevron-up icon indicates that the menu item is expanded."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Intended subordinate menu (5)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Shows another subordinate menu in an intended style. Avoid using icons in this menu-depth. Up to here the maximum available menu-depth is reached."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Navigation bar (6)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Can be displayed optionally. If displayed the navigation bar is sticky."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Hidden overflow header (7)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","As with the footer, if the content in the sidebar becomes too large, the further overflow is clipped."]}),"\n",(0,jsx_runtime.jsx)(_components.hr,{}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Check out the Figma component: ",(0,jsx_runtime.jsx)(_components.strong,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?type=design&node-id=25183-14486&mode=design&t=VGECa2WmCtxIWNLe-4",target:"_blank",rel:"nofollow noopener noreferrer",children:"Sidebar"})})]}),"\n",(0,jsx_runtime.jsx)(_components.hr,{})]})}const Usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);