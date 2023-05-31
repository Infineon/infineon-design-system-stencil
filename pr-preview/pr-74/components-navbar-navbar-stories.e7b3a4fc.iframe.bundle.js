/*! For license information please see components-navbar-navbar-stories.e7b3a4fc.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"./node_modules/@mdx-js/react/lib/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return useMDXComponents}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);const MDXContext=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}},"./node_modules/@storybook/addon-docs/dist/esm/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var _blocks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/blocks/index.js");__webpack_require__.d(__webpack_exports__,"a",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.AddContext})),__webpack_require__.d(__webpack_exports__,"b",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.ArgsTable})),__webpack_require__.d(__webpack_exports__,"c",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Canvas})),__webpack_require__.d(__webpack_exports__,"d",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Description})),__webpack_require__.d(__webpack_exports__,"e",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Meta})),__webpack_require__.d(__webpack_exports__,"f",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Story}))},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(module,exports,__webpack_require__){"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/navbar/navbar.stories.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js");__webpack_require__("./node_modules/ts-dedent/esm/index.js");function _createMdxContent(props){var _components=Object.assign({h1:"h1",h2:"h2",h3:"h3"},Object(lib.a)(),props.components);return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(_components.h1,{children:"Navbar v-1"}),"\n",Object(jsx_runtime.jsx)(_components.h2,{children:"This is version 1 of the Navbar component"}),"\n",Object(jsx_runtime.jsx)(_components.h3,{children:"Version 2 will be released soon, and it will contain the mobile-menu sidebar."}),"\n",Object(jsx_runtime.jsx)(_components.h2,{children:"Component code"}),"\n",Object(jsx_runtime.jsx)(esm.c,{columns:2,withSource:"open",withToolbar:!0,children:Object(jsx_runtime.jsx)(esm.f,{id:"components-navbar--default"})}),"\n",Object(jsx_runtime.jsx)(_components.h2,{children:"ArgsTable"}),"\n",Object(jsx_runtime.jsx)(esm.b,{story:"."})]})}var Custom_MDX_Documentation=function MDXContent(){var props=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},MDXLayout=Object.assign({},Object(lib.a)(),props.components).wrapper;return MDXLayout?Object(jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:Object(jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},Default=(__webpack_exports__.default={title:"Components/Navbar",parameters:{docs:{page:Custom_MDX_Documentation}}},function DefaultTemplate(){return'<ifx-navbar application-name="Application name">\n    <ifx-navbar-menu-item  slot="left-menu-item">Menu Item</ifx-navbar-menu-item>\n    <ifx-navbar-menu-item  slot="left-menu-item">Menu Item</ifx-navbar-menu-item>\n \n    <ifx-dropdown-menu slot="dropdown-menu">\n      <ifx-dropdown-item>Menu Item</ifx-dropdown-item>\n      <ifx-dropdown-item>Menu Item</ifx-dropdown-item>\n      <ifx-dropdown-item>Menu Item</ifx-dropdown-item>\n    </ifx-dropdown-menu>\n\n    <ifx-search-bar size="default" slot="search-bar-right" is-open="false" show-close-button="true"></ifx-search-bar>\n\n    <ifx-navbar-menu-item hide-label="false" slot="right-menu-item">Right One</ifx-navbar-menu-item>\n    <ifx-navbar-menu-item hide-label="false" slot="right-menu-item">Right Two</ifx-navbar-menu-item>\n    <ifx-navbar-menu-item hide-label="false" slot="right-menu-profile-item">Tisho</ifx-navbar-menu-item>\n  </ifx-navbar>'}.bind({}));Default.parameters=Object.assign({storySource:{source:'() =>\n  `<ifx-navbar application-name="Application name">\n    <ifx-navbar-menu-item  slot="left-menu-item">Menu Item</ifx-navbar-menu-item>\n    <ifx-navbar-menu-item  slot="left-menu-item">Menu Item</ifx-navbar-menu-item>\n \n    <ifx-dropdown-menu slot="dropdown-menu">\n      <ifx-dropdown-item>Menu Item</ifx-dropdown-item>\n      <ifx-dropdown-item>Menu Item</ifx-dropdown-item>\n      <ifx-dropdown-item>Menu Item</ifx-dropdown-item>\n    </ifx-dropdown-menu>\n\n    <ifx-search-bar size="default" slot="search-bar-right" is-open="false" show-close-button="true"></ifx-search-bar>\n\n    <ifx-navbar-menu-item hide-label="false" slot="right-menu-item">Right One</ifx-navbar-menu-item>\n    <ifx-navbar-menu-item hide-label="false" slot="right-menu-item">Right Two</ifx-navbar-menu-item>\n    <ifx-navbar-menu-item hide-label="false" slot="right-menu-profile-item">Tisho</ifx-navbar-menu-item>\n  </ifx-navbar>`'}},Default.parameters)}}]);
//# sourceMappingURL=components-navbar-navbar-stories.e7b3a4fc.iframe.bundle.js.map