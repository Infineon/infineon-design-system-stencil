/*! For license information please see stories-foundations-States-mdx.25846fd8.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[9828],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>DocsRenderer});var react=__webpack_require__("../../node_modules/react/index.js"),client=__webpack_require__("../../node_modules/react-dom/client.js"),nodes=new Map,WithCallback=({callback,children})=>{let once=(0,react.useRef)();return(0,react.useLayoutEffect)((()=>{once.current!==callback&&(once.current=callback,callback())}),[callback]),children},getReactRoot=async el=>{let root=nodes.get(el);return root||(root=client.createRoot(el),nodes.set(el,root)),root},dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:dist.XA,a:dist.zE,...dist.Sw},ErrorBoundary=class extends react.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react.createElement(react.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=dist.kQ;return new Promise(((resolve,reject)=>{__webpack_require__.e(5231).then(__webpack_require__.bind(__webpack_require__,"../../node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(async(node,el)=>{let root=await getReactRoot(el);return new Promise((resolve=>{root.render(react.createElement(WithCallback,{callback:()=>resolve(null)},node))}))})(react.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react.createElement(MDXProvider,{components},react.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{((el,shouldUseNewRootApi)=>{let root=nodes.get(el);root&&(root.unmount(),nodes.delete(el))})(element)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.W8});__webpack_require__("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs"),__webpack_require__("../../node_modules/@storybook/addon-docs/dist/chunk-GN5PWX3D.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs")},"./src/stories/foundations/States.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/index.mjs");const state_default_namespaceObject=__webpack_require__.p+"static/media/state-default.2f794e10.png",state_hover_namespaceObject=__webpack_require__.p+"static/media/state-hover.c33dfdeb.png",state_pressed_namespaceObject=__webpack_require__.p+"static/media/state-pressed.feec4c56.png",state_active_namespaceObject=__webpack_require__.p+"static/media/state-active.568045b5.png",state_checked_namespaceObject=__webpack_require__.p+"static/media/state-checked.0a3ce3e9.png",state_selected_namespaceObject=__webpack_require__.p+"static/media/state-selected.7d05e354.png",state_focus_namespaceObject=__webpack_require__.p+"static/media/state-focus.e11d1be4.png",state_disabled_namespaceObject=__webpack_require__.p+"static/media/state-disabled.809d4ac4.png",state_error_namespaceObject=__webpack_require__.p+"static/media/state-error.14d09218.png";function _createMdxContent(props){const _components={blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Foundations/States"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"states",children:"States"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"States are micro-interactions in UI elements, that add value to your product by giving the user a feedback and improve the user experience. States refer to the different forms an element can take, based on the context that it is being used in."}),"\n",(0,jsx_runtime.jsxs)(_components.blockquote,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:"Some components may not feature all states mentioned here. For detailed information on the available states and options of a specific component, refer to the documentation page dedicated to that component."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"types",children:"Types"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This is the standard state of a component when it is first rendered, representing its base appearance and functionality."}),"\n",(0,jsx_runtime.jsx)("img",{width:"50%",src:state_default_namespaceObject,alt:"Default State"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"hover",children:"Hover"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Activated when the user hovers their cursor over a component, indicating its interactive nature."}),"\n",(0,jsx_runtime.jsx)("img",{width:"50%",src:state_hover_namespaceObject,alt:"Hover State"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"pressed",children:"Pressed"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Occurs when a component is clicked or tapped, providing immediate visual feedback to the user."}),"\n",(0,jsx_runtime.jsx)("img",{width:"50%",src:state_pressed_namespaceObject,alt:"Pressed State"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"active",children:"Active"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Triggered when a component is actively engaged by the user, such as when clicking on a button or input field."}),"\n",(0,jsx_runtime.jsx)("img",{width:"50%",src:state_active_namespaceObject,alt:"Active State"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"checked",children:"Checked"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Applied to checkboxes, radio buttons, or switch switches to indicate that the option has been selected or activated."}),"\n",(0,jsx_runtime.jsx)("img",{width:"50%",src:state_checked_namespaceObject,alt:"Checked State"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"selected",children:"Selected"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Used to highlight items that have been chosen or are currently in focus within a group of selectable elements."}),"\n",(0,jsx_runtime.jsx)("img",{width:"50%",src:state_selected_namespaceObject,alt:"Selected State"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"keyboard-focus",children:"Keyboard focus"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Keyboard focus begins when a user interacts, illuminating an item as it's navigated through using a keyboard."}),"\n",(0,jsx_runtime.jsx)("img",{width:"50%",src:state_focus_namespaceObject,alt:"Focus State"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Utilized to indicate that an element is present but currently inactive or unavailable for interaction."}),"\n",(0,jsx_runtime.jsx)("img",{width:"50%",src:state_disabled_namespaceObject,alt:"Disabled State"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"error",children:"Error"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Utilized to alert users when something has gone wrong or when their input is invalid."}),"\n",(0,jsx_runtime.jsx)("img",{width:"50%",src:state_error_namespaceObject,alt:"Error State"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"../../node_modules/react-dom/client.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var m=__webpack_require__("../../node_modules/react-dom/index.js");exports.createRoot=m.createRoot,exports.hydrateRoot=m.hydrateRoot},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);