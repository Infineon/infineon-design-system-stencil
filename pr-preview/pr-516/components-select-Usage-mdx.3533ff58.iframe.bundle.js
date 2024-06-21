/*! For license information please see components-select-Usage-mdx.3533ff58.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[4015],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/select/Usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Usage});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js");const select_combo_box_states_namespaceObject=__webpack_require__.p+"static/media/select-combo-box-states.1a54806c.png",select_sizes_namespaceObject=__webpack_require__.p+"static/media/select-sizes.d13f5824.png",select_field_anatomy_namespaceObject=__webpack_require__.p+"static/media/select-field-anatomy.62cbd590.png",select_field_mouse_interaction_namespaceObject=__webpack_require__.p+"static/media/select-field-mouse-interaction.c8d0a5b9.png",select_single_options_states_namespaceObject=__webpack_require__.p+"static/media/select-single-options-states.6a91ef31.png",select_single_states_namespaceObject=__webpack_require__.p+"static/media/select-single-states.f91fc2e4.png",select_multi_partial_namespaceObject=__webpack_require__.p+"static/media/select-multi-partial.3b5d3678.png",select_multi_options_states_namespaceObject=__webpack_require__.p+"static/media/select-multi-options-states.071c742a.png",select_multi_states_namespaceObject=__webpack_require__.p+"static/media/select-multi-states.a79bd726.png";function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",br:"br",h4:"h4",blockquote:"blockquote",hr:"hr",a:"a"},(0,lib.ah)(),props.components),{Meta}=_components;return Meta||function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}("Meta",!0),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Meta,{title:"Components/Select/Usage"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"select",children:"Select"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The select component provides users with the ability to choose one or multiple options from a predefined list in a dropdown format. It offers different variations, including select, multi select, and combo box, to cater to various selection needs."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-to-use",children:"When to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"When users need to choose one or multiple options from a predefined list, using a select field."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-not-to-use",children:"When not to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"When users want to navigate to a different page or section. Use a submenu component instead."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"If you have large datasets it can become overwhelming. Instead use filter components or paginated table lists."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"select-field",children:"Select Field"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The select field looks similar to the text field, but has an icon on the right indicating a dropdown function."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"anatomy",children:"Anatomy"}),"\n",(0,jsx_runtime.jsx)("img",{src:select_field_anatomy_namespaceObject,alt:"Select Field Anatomy"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Label (1)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Use a label to describe the purpose of the select field to the user."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Required field (2)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Mark a select field as required when the information is necessary for the user to proceed with a specific action, such as submitting a form. It is indicated with an asterisk (*) next to the label."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Field (3)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The container where a user can click or tap."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Dropdown Arrow (4)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The dropdown arrow is a visual indicator (chevron-down), that appears on the right side of the select field. It suggests to users that they can click or tap on the field to reveal the available options."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Icon (5)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","In some scenarios it can be useful to use an icon before the placeholder."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Placeholder text (6)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Placeholder text is the text that is displayed inside the select field before the user select any option inside the menu. Use it to provide an example or to give users an idea of the type of information they can select."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Optional field (7)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Mark a text field as optional when the information entered into the text field is not necessary for the user to proceed with a specific action."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Caption text (8)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Use caption text to provide additional context or information about the select field. It can be used to provide examples or instructions for selecting an option. When the dropdown menu appears, the caption text is behind it."]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"mouse-interaction",children:"Mouse interaction"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Users can interact with the Select Field in different ways. To open the dropdown list they can either click on the visible options or on the dropdown arrow. They can also click on the reset icon to reset the entries with one click. All options in the list will be unchecked."}),"\n",(0,jsx_runtime.jsx)("img",{src:select_field_mouse_interaction_namespaceObject,alt:"Select Field Mouse Interaction"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"single-select",children:"Single Select"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The single select variation allows users to choose only one option from a list of choices. The selected option is displayed within the closed select field."}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"states",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:select_single_states_namespaceObject,alt:"Select Single States"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"multi-select",children:"Multi Select"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The multi select variation enables users to select multiple options simultaneously from a list of choices. It presents a dropdown menu with checkboxes next to each option. Users can make their selections by checking the desired options. The selected options are displayed within the closed select field."}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"states-1",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:select_multi_states_namespaceObject,alt:"Select Multi States"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"combo-box",children:"Combo Box"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The combo box variation combines a text field with a dropdown menu. Users can select options from the dropdown or input custom values in the text field. This variation is suitable when users may need to choose from existing options or provide their own input. Only one option can be selected."}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"states-2",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:select_combo_box_states_namespaceObject,alt:"Select Combo Box States"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"select-option-items",children:"Select Option Items"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"For the select field the are only two option items for the option list available."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"single-select-1",children:"Single Select"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"When a user can choose only one option, a single select option item is the right one. By selecting an option, it is highlighted with our brand color and checkmark icon."}),"\n",(0,jsx_runtime.jsxs)(_components.blockquote,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:"The same option items are also used for the Combo Box variant."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"states-3",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:select_single_options_states_namespaceObject,alt:"Select Single Options States"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"multi-select-1",children:"Multi Select"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"When a user can choose multiple options, a multi select option item is the right one. Here the user is shown a list of checkboxes that he can select."}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"states-4",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:select_multi_options_states_namespaceObject,alt:"Select Multi Options States"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"partial-checkbox",children:"Partial Checkbox"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"In the multi-select item there are two ways to show the user a list of checkboxes. Besides the simple one, you can also show a nested list. This can be, for example, a product family that contains several products. It is important that only the nested checkbox (level 2) is shown in the select field. The root checkbox (Level 1) is only used for orientation and is not displayed in the Select Field."}),"\n",(0,jsx_runtime.jsx)("img",{src:select_multi_partial_namespaceObject,alt:"Select Multi Partial"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Multi Select - Level 1 (1)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Users can click this checkbox to select all child checkbox options at once. Alternatively, users can select individual child checkbox options. As long as not all child checkbox options are selected, the parent checkbox is displayed as partial."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Multi Select - Level 2 (2)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Selected child options are also displayed in the select field and separated by a comma. Only as many options are displayed as space is available. All other options are truncated with ellipsis."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"size",children:"Size"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"There are two select field sizes: 36px and 40px. This will give you more flexibility in structuring layouts due to e.g. different button heights. It's important to maintain uniform field height while combining form elements on a single page."}),"\n",(0,jsx_runtime.jsx)("img",{src:select_sizes_namespaceObject,alt:"Select Size"}),"\n",(0,jsx_runtime.jsx)(_components.hr,{}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Check out the Figma component: ",(0,jsx_runtime.jsx)(_components.strong,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?type=design&node-id=14251-8194&mode=design&t=UQ0Dm7ueLiXMURK1-4",target:"_blank",rel:"nofollow noopener noreferrer",children:"Select"})})]}),"\n",(0,jsx_runtime.jsx)(_components.hr,{})]})}const Usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/cjs/react.production.min.js":(__unused_webpack_module,exports)=>{var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a,this.context=b,this.refs=D,this.updater=e||B}function F(){}function G(a,b,e){this.props=a,this.context=b,this.refs=D,this.updater=e||B}E.prototype.isReactComponent={},E.prototype.setState=function(a,b){if("object"!=typeof a&&"function"!=typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")},E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")},F.prototype=E.prototype;var H=G.prototype=new F;H.constructor=G,C(H,E.prototype),H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}function O(a){return"object"==typeof a&&null!==a&&a.$$typeof===l}var P=/\/+/g;function Q(a,b){return"object"==typeof a&&null!==a&&null!=a.key?function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,(function(a){return b[a]}))}(""+a.key):b.toString(36)}function R(a,b,e,d,c){var k=typeof a;"undefined"!==k&&"boolean"!==k||(a=null);var h=!1;if(null===a)h=!0;else switch(k){case"string":case"number":h=!0;break;case"object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return c=c(h=a),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",(function(a){return a}))):null!=c&&(O(c)&&(c=function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;if(h=0,d=""===d?".":d+":",I(a))for(var g=0;g<a.length;g++){var f=d+Q(k=a[g],g);h+=R(k,b,e,f,c)}else if(f=function A(a){return null===a||"object"!=typeof a?null:"function"==typeof(a=z&&a[z]||a["@@iterator"])?a:null}(a),"function"==typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)h+=R(k=k.value,b,e,f=d+Q(k,g++),c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}function S(a,b,e){if(null==a)return a;var d=[],c=0;return R(a,d,"","",(function(a){return b.call(e,a,c++)})),d}function T(a){if(-1===a._status){var b=a._result;(b=b()).then((function(b){0!==a._status&&-1!==a._status||(a._status=1,a._result=b)}),(function(b){0!==a._status&&-1!==a._status||(a._status=2,a._result=b)})),-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result}var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};exports.Children={map:S,forEach:function(a,b,e){S(a,(function(){b.apply(this,arguments)}),e)},count:function(a){var b=0;return S(a,(function(){b++})),b},toArray:function(a){return S(a,(function(a){return a}))||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}},exports.Component=E,exports.Fragment=p,exports.Profiler=r,exports.PureComponent=G,exports.StrictMode=q,exports.Suspense=w,exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W,exports.cloneElement=function(a,b,e){if(null==a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){if(void 0!==b.ref&&(k=b.ref,h=K.current),void 0!==b.key&&(c=""+b.key),a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}},exports.createContext=function(a){return(a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:t,_context:a},a.Consumer=a},exports.createElement=M,exports.createFactory=function(a){var b=M.bind(null,a);return b.type=a,b},exports.createRef=function(){return{current:null}},exports.forwardRef=function(a){return{$$typeof:v,render:a}},exports.isValidElement=O,exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}},exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}},exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}},exports.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},exports.useCallback=function(a,b){return U.current.useCallback(a,b)},exports.useContext=function(a){return U.current.useContext(a)},exports.useDebugValue=function(){},exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)},exports.useEffect=function(a,b){return U.current.useEffect(a,b)},exports.useId=function(){return U.current.useId()},exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)},exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)},exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)},exports.useMemo=function(a,b){return U.current.useMemo(a,b)},exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)},exports.useRef=function(a){return U.current.useRef(a)},exports.useState=function(a){return U.current.useState(a)},exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)},exports.useTransition=function(){return U.current.useTransition()},exports.version="18.2.0"},"../../node_modules/react/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/react/cjs/react.production.min.js")},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);