(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[5808,2473,7118],{"./src/components/navbar/Development.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_infineon_design_system_stencil_infineon_design_system_stencil_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_navbar_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/navbar/navbar.stories.ts");function _createMdxContent(props){const _components={h1:"h1",h2:"h2",...(0,_home_runner_work_infineon_design_system_stencil_infineon_design_system_stencil_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{of:_navbar_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"navbar-v-2",children:"Navbar v-2"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Tn,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.H2,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_infineon_design_system_stencil_infineon_design_system_stencil_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/components/navbar/navbar.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@infineon/infineon-icons/dist/icons.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Navbar",args:{applicationName:"Application name",hideLabel:!1,navbarItemTarget:"_blank",navbarItemHref:"",searchBarIsOpen:!1,navbarPositionFixed:!1,showLogoAndAppname:!0,logoHref:"http://google.com",logoHrefTarget:"_self",searchBarPosition:"left",hideOnMobile:!0,profileImageUrl:""},argTypes:{icon:{options:Object.values(_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_0__.P).map((i=>i.name)),control:{type:"select"}},logoHrefTarget:{description:"If not '_self' or '_blank' or '_parent', then set to '_self' by default",options:["_self","_blank","_parent"],control:{type:"radio"}},searchBarPosition:{options:["left","right"],control:{type:"radio"}}}},Default=(args=>`<ifx-navbar  show-logo-and-appname="${args.showLogoAndAppname}" application-name="${args.applicationName}" fixed="${args.fixed}" logo-href="${args.logoHref}" logo-href-target="${args.logoHrefTarget}">\n  <ifx-navbar-item icon="${args.icon}" slot="left-item" target="" href="" >\n    Menu Item 1\n    <ifx-navbar-item icon="calendar16">\n      Layer 1 Nested Item 1\n      <ifx-navbar-item>\n        Layer 2 Nested Item 2\n        <ifx-navbar-item href="http://google.com" target="_blank">Link Layer 3 Nested Item 1</ifx-navbar-item>\n        <ifx-navbar-item>Layer 3 Nested Item 2</ifx-navbar-item>\n        <ifx-navbar-item>Layer 3 Nested Item 3</ifx-navbar-item>\n        <ifx-navbar-item>Layer 3 Nested Item 4</ifx-navbar-item>\n      </ifx-navbar-item>\n      <ifx-navbar-item >Layer 2 Nested Item 3</ifx-navbar-item>\n      <ifx-navbar-item>Layer 2 Nested Item 4</ifx-navbar-item>\n      <ifx-navbar-item>Layer 2 Nested Item 5</ifx-navbar-item>\n    </ifx-navbar-item>\n\n    <ifx-navbar-item>\n      Layer 1 Nested Item 2\n      <ifx-navbar-item>Layer 2 Item 1</ifx-navbar-item>\n      <ifx-navbar-item>Layer 2 Item 2</ifx-navbar-item>\n      <ifx-navbar-item>Layer 2 Item 3</ifx-navbar-item>\n    </ifx-navbar-item>\n\n    <ifx-navbar-item>Nested Item 3</ifx-navbar-item>\n\n    <ifx-navbar-item>\n      Layer 1 Nested Item 4\n      <ifx-navbar-item>Nested Item 4</ifx-navbar-item>\n    </ifx-navbar-item>\n\n  </ifx-navbar-item>\n\n  <ifx-navbar-item href="${args.navbarItemHref}" target="${args.navbarItemTarget}" slot="left-item" icon="calendar16" show-label="${args.hideLabel}">\n    Menu Item 2\n  </ifx-navbar-item>\n\n  <ifx-navbar-item slot="left-item">\n    More\n    <ifx-navbar-item>Item1</ifx-navbar-item>\n    <ifx-navbar-item>Item2</ifx-navbar-item>\n  </ifx-navbar-item>\n\n  <ifx-search-bar slot="search-bar-${args.searchBarPosition}" is-open="${args.searchBarIsOpen}"></ifx-search-bar>\n\n  <ifx-navbar-item slot="right-item" target="_blank" href="http://google.com" hide-on-mobile="${args.hideOnMobile}" show-label="false" icon="cartf16">\n    Right Item\n  </ifx-navbar-item>\n  <ifx-navbar-item slot="right-item" hide-on-mobile="true" show-label='true' icon="airplane16">\n    Right Item\n    <ifx-navbar-item>Right Item</ifx-navbar-item>\n  </ifx-navbar-item>\n\n  <ifx-navbar-profile slot="right-item" image-url="${args.profileImageUrl}" show-label="true" href="" target="_blank">\n    User\n    <ifx-navbar-item>Item</ifx-navbar-item>\n    <ifx-navbar-item>Item</ifx-navbar-item>\n    <ifx-navbar-item>Item</ifx-navbar-item>\n    <ifx-navbar-item>Item</ifx-navbar-item>\n  </ifx-navbar-profile>\n</ifx-navbar>`).bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `<ifx-navbar  show-logo-and-appname="${args.showLogoAndAppname}" application-name="${args.applicationName}" fixed="${args.fixed}" logo-href="${args.logoHref}" logo-href-target="${args.logoHrefTarget}">\n  <ifx-navbar-item icon="${args.icon}" slot="left-item" target="" href="" >\n    Menu Item 1\n    <ifx-navbar-item icon="calendar16">\n      Layer 1 Nested Item 1\n      <ifx-navbar-item>\n        Layer 2 Nested Item 2\n        <ifx-navbar-item href="http://google.com" target="_blank">Link Layer 3 Nested Item 1</ifx-navbar-item>\n        <ifx-navbar-item>Layer 3 Nested Item 2</ifx-navbar-item>\n        <ifx-navbar-item>Layer 3 Nested Item 3</ifx-navbar-item>\n        <ifx-navbar-item>Layer 3 Nested Item 4</ifx-navbar-item>\n      </ifx-navbar-item>\n      <ifx-navbar-item >Layer 2 Nested Item 3</ifx-navbar-item>\n      <ifx-navbar-item>Layer 2 Nested Item 4</ifx-navbar-item>\n      <ifx-navbar-item>Layer 2 Nested Item 5</ifx-navbar-item>\n    </ifx-navbar-item>\n\n    <ifx-navbar-item>\n      Layer 1 Nested Item 2\n      <ifx-navbar-item>Layer 2 Item 1</ifx-navbar-item>\n      <ifx-navbar-item>Layer 2 Item 2</ifx-navbar-item>\n      <ifx-navbar-item>Layer 2 Item 3</ifx-navbar-item>\n    </ifx-navbar-item>\n\n    <ifx-navbar-item>Nested Item 3</ifx-navbar-item>\n\n    <ifx-navbar-item>\n      Layer 1 Nested Item 4\n      <ifx-navbar-item>Nested Item 4</ifx-navbar-item>\n    </ifx-navbar-item>\n\n  </ifx-navbar-item>\n\n  <ifx-navbar-item href="${args.navbarItemHref}" target="${args.navbarItemTarget}" slot="left-item" icon="calendar16" show-label="${args.hideLabel}">\n    Menu Item 2\n  </ifx-navbar-item>\n\n  <ifx-navbar-item slot="left-item">\n    More\n    <ifx-navbar-item>Item1</ifx-navbar-item>\n    <ifx-navbar-item>Item2</ifx-navbar-item>\n  </ifx-navbar-item>\n\n  <ifx-search-bar slot="search-bar-${args.searchBarPosition}" is-open="${args.searchBarIsOpen}"></ifx-search-bar>\n\n  <ifx-navbar-item slot="right-item" target="_blank" href="http://google.com" hide-on-mobile="${args.hideOnMobile}" show-label="false" icon="cartf16">\n    Right Item\n  </ifx-navbar-item>\n  <ifx-navbar-item slot="right-item" hide-on-mobile="true" show-label=\'true\' icon="airplane16">\n    Right Item\n    <ifx-navbar-item>Right Item</ifx-navbar-item>\n  </ifx-navbar-item>\n\n  <ifx-navbar-profile slot="right-item" image-url="${args.profileImageUrl}" show-label="true" href="" target="_blank">\n    User\n    <ifx-navbar-item>Item</ifx-navbar-item>\n    <ifx-navbar-item>Item</ifx-navbar-item>\n    <ifx-navbar-item>Item</ifx-navbar-item>\n    <ifx-navbar-item>Item</ifx-navbar-item>\n  </ifx-navbar-profile>\n</ifx-navbar>`',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);