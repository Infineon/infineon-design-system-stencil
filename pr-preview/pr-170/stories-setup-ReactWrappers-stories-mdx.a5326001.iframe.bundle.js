/*! For license information please see stories-setup-ReactWrappers-stories-mdx.a5326001.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{"./node_modules/@mdx-js/react/lib/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return useMDXComponents}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);const MDXContext=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}},"./node_modules/@storybook/addon-docs/dist/esm/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var _blocks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/blocks/index.js");__webpack_require__.d(__webpack_exports__,"a",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.AddContext})),__webpack_require__.d(__webpack_exports__,"b",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.ArgsTable})),__webpack_require__.d(__webpack_exports__,"c",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Canvas})),__webpack_require__.d(__webpack_exports__,"d",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Description})),__webpack_require__.d(__webpack_exports__,"e",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Meta})),__webpack_require__.d(__webpack_exports__,"f",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Story}))},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(module,exports,__webpack_require__){"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/stories/setup/ReactWrappers.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),ReactWrappers_en="\n# React + Stencil\n\nReact Wrappers: Similarly to Vue, a React wrapper provides a React interface to a Stencil web component, making the web component feel more like a typical React component. This includes proper handling of props, state, and events within the context of a React application.\n\n## Installation\n\n### With NPM\n\n1. ```npm install @infineon/infineon-design-system-react```\n\n#### With Yarn\n\n1. ```yarn add @infineon/infineon-design-system-react```\n\n#### Import the module inside your entry point file.\n\n\n```import { defineCustomElements } from '@infineon/infineon-design-system-react';```\n\n```defineCustomElements(window)```\n\nIn React, there isn't a built-in mechanism to globally register components like in Vue. Therefore, components need to be imported in the file that they are being used in.\n\n#### Usage\n\n``import { IfxProgressBar, IfxSearchBar, IfxButton } from '@infineon/infineon-design-system-react';``\n\n``<IfxSearchBar onIfxChange={handleSearch} style={{ width: '100%' }} show-close-button=\"true\"></IfxSearchBar>``\n\n##### React + Javascript specific\n\nIt may be necessary to add the following to your .env file at project root:\n\n``GENERATE_SOURCEMAP=false``\n\nThis can also be achieved by updating your start script in the ``package.json`` accordingly.\n\n\n";function _createMdxContent(props){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(esm.e,{title:"Setup & installation/Framework integration/React + Stencil",parameters:{previewTabs:{canvas:{hidden:!0},"storybook/docs/panel":{hidden:!0},"usage-tab/panel":{hidden:!0}}}}),"\n",Object(jsx_runtime.jsx)(esm.d,{markdown:ReactWrappers_en})]})}function MDXContent(){var props=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},MDXLayout=Object.assign({},Object(lib.a)(),props.components).wrapper;return MDXLayout?Object(jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:Object(jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent()}var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Setup & installation/Framework integration/React + Stencil",parameters:{previewTabs:{canvas:{hidden:!0},"storybook/docs/panel":{hidden:!0},"usage-tab/panel":{hidden:!0}}},includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return react_default.a.createElement(esm.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},react_default.a.createElement(MDXContent,null))}});__webpack_exports__.default=componentMeta}}]);
//# sourceMappingURL=stories-setup-ReactWrappers-stories-mdx.a5326001.iframe.bundle.js.map