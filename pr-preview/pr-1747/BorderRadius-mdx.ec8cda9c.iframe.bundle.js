(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[1793],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"../../node_modules/@storybook/addon-docs/dist/chunk-NUUEMKO5.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>DocsRenderer});var react=__webpack_require__("../../node_modules/react/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),client=__webpack_require__("../../node_modules/react-dom/client.js"),nodes=new Map;var WithCallback=({callback,children})=>{let once=react.useRef();return react.useLayoutEffect((()=>{once.current!==callback&&(once.current=callback,callback())}),[callback]),children};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let resolve=null,reject=null;return{promise:new Promise(((res,rej)=>{resolve=res,reject=rej})),resolve,reject}});var renderElement=async(node,el,rootOptions)=>{let root=await getReactRoot(el,rootOptions);if(function getIsReactActEnvironment(){return globalThis.IS_REACT_ACT_ENVIRONMENT}())return void root.render(node);let{promise,resolve}=Promise.withResolvers();return root.render(react.createElement(WithCallback,{callback:resolve},node)),promise},getReactRoot=async(el,rootOptions)=>{let root=nodes.get(el);return root||(root=client.H(el,rootOptions),nodes.set(el,root)),root},defaultComponents={code:dist.XA,a:dist.zE,...dist.Sw},ErrorBoundary=class extends react.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react.createElement(react.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=dist.kQ;return new Promise(((resolve,reject)=>{__webpack_require__.e(5231).then(__webpack_require__.bind(__webpack_require__,"../../node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>renderElement(react.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react.createElement(MDXProvider,{components},react.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(el=>{let root=nodes.get(el);root&&(root.unmount(),nodes.delete(el))})(element)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8});__webpack_require__("../../node_modules/@storybook/addon-docs/dist/chunk-PRSJUHPQ.mjs"),__webpack_require__("../../node_modules/@storybook/addon-docs/dist/chunk-NUUEMKO5.mjs"),__webpack_require__("../../node_modules/@storybook/addon-docs/dist/chunk-H6MOWX77.mjs"),__webpack_require__("storybook/internal/preview-api");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs")},"../../node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"../../node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"../../node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"../../node_modules/react-dom/client.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var m=__webpack_require__("../../node_modules/react-dom/index.js");exports.H=m.createRoot,m.hydrateRoot},"./src/stories/foundations/BorderRadius.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js");const border_radius_1px_namespaceObject=__webpack_require__.p+"static/media/border-radius-1px.05b58d1c.png",border_radius_9999px_namespaceObject=__webpack_require__.p+"static/media/border-radius-9999px.a1ae1a57.png";var dist=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){const _components={h1:"h1",h2:"h2",p:"p",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Foundations/Border radius"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"border-radius",children:"Border radius"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A fundamental aspect of our visual design. It refers to the curvature applied to the corners of elements, such as buttons, cards, or containers. It shapes the overall aesthetic and feel of our interfaces, influencing user perception and interaction."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"1px-border-radius",children:"1px Border radius"}),"\n",(0,jsx_runtime.jsx)("img",{src:border_radius_1px_namespaceObject,alt:"BorderRadius1px",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"We use a 1px border radius for all rectangular objects in our design system.\nThis includes buttons, text inputs, checkboxes, radio buttons, and other rectangular elements.\nA 1px border radius creates a slight curve at the corners of these elements, which softens their appearance and helps creating a more friendly and approachable design."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"9999px-border-radius",children:"9999px Border radius"}),"\n",(0,jsx_runtime.jsx)("img",{src:border_radius_9999px_namespaceObject,alt:"BorderRadius9999px",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"In addition to the 1px border radius, we use a 9999px border radius for certain components in our design system.\nThese components include chips, tags, toggles, and filter components.\nThis style creates a pill shape for these elements, which helps distinguish them from other rectangular elements on the page and makes them more visually appealing."})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);