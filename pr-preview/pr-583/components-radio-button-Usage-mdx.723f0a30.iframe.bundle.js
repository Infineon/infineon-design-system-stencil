/*! For license information please see components-radio-button-Usage-mdx.723f0a30.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[4956,7175],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD});var chunk_AY7I2SME=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./src/components/radio-button/radio-button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Radio Button",args:{error:!1,disabled:!1,value:!1,size:"s",label:"Text"},argTypes:{onIfxChange:{description:"Custom event emitted when radio button checked and unchecked",table:{type:{summary:"Framework integration",detail:'React: onIfxChange={handleChange}\nVue:@ifxChange="handleChange"\nAngular:(ifxChange)="handleChange()"\nVanillaJs:.addEventListener("ifxChange", (event) => {//handle change});'}},action:"ifxChange"},size:{description:"Size options: s (20px) and m (24px) - default: s",options:["s","m"],control:{type:"radio"}}}},Default=(args=>{const element=document.createElement("ifx-radio-button");return element.setAttribute("error",args.error),element.setAttribute("disabled",args.disabled),element.setAttribute("value",args.value),element.setAttribute("size",args.size),element.appendChild(document.createTextNode(args.label)),element.addEventListener("ifxChange",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxChange")),element}).bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  // Create the radio button element\n  const element = document.createElement('ifx-radio-button');\n\n  // Set the attributes\n  element.setAttribute('error', args.error);\n  element.setAttribute('disabled', args.disabled);\n  element.setAttribute('value', args.value);\n  element.setAttribute('size', args.size);\n\n  // Add the label as a text node\n  element.appendChild(document.createTextNode(args.label));\n\n  // Add the event listener\n  element.addEventListener('ifxChange', action('ifxChange'));\n\n  // Return the element\n  return element;\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/radio-button/Usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Usage});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),radio_button_stories=__webpack_require__("./src/components/radio-button/radio-button.stories.ts");const radio_button_sizes_namespaceObject=__webpack_require__.p+"static/media/radio-button-sizes.f27e6189.png",radio_button_anatomy_namespaceObject=__webpack_require__.p+"static/media/radio-button-anatomy.e24ac4bb.png",radio_button_group_block_namespaceObject=__webpack_require__.p+"static/media/radio-button-group-block.a443741a.png",radio_button_group_inline_namespaceObject=__webpack_require__.p+"static/media/radio-button-group-inline.d8d9de82.png",radio_button_states_namespaceObject=__webpack_require__.p+"static/media/radio-button-states.b8ff1c9b.png",radio_button_mouse_interaction_namespaceObject=__webpack_require__.p+"static/media/radio-button-mouse-interaction.f2690741.png",radio_button_overflow_text_namespaceObject=__webpack_require__.p+"static/media/radio-button-overflow-text.981ffef6.png";function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",br:"br",hr:"hr",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:radio_button_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"radio-button",children:"Radio Button"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The radio component is used to allow users to select a single option from a predefined list. It represents a mutually exclusive choice, where only one option can be selected at a time."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-to-use",children:"When to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"When you want to provide users with the ability to select a single option from a list."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"When the options are mutually exclusive, and selecting one option automatically deselects the others."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-not-to-use",children:"When not to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"When multiple selections are allowed. In such cases, checkboxes are more appropriate."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"If the options are independent and not mutually exclusive, checkboxes should be used instead."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"anatomy",children:"Anatomy"}),"\n",(0,jsx_runtime.jsx)("img",{src:radio_button_anatomy_namespaceObject,alt:"Radio Button anatomy",width:"50%"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Radio Button input (1)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","A radio button indicating the appropriate state. By default an option is selected. In some UX cases it is also possible to let the state unselected."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Radio Button label (2)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Provides an information you want to select or unselect."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"size",children:"Size"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The radio button component in our design system is available in two different sizes: 20px and 24px. These sizes are designed to provide flexibility and meet various design requirements."}),"\n",(0,jsx_runtime.jsx)("img",{src:radio_button_sizes_namespaceObject,alt:"Radio Button sizes"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"grouping-radio-buttons",children:"Grouping radio buttons"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Deciding whether to place radio buttons in an inline or block layout depends on the specific context and requirements of your user interface."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"inline",children:"Inline"}),"\n",(0,jsx_runtime.jsx)("img",{src:radio_button_group_inline_namespaceObject,alt:"Radio Button grouping inline",width:"50%"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"Use to save space when you have limited screen real estate or need to place other elements alongside the radio buttons."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Use when the options in your radio button group have short labels, an inline layout can provide a more compact and visually streamlined presentation."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Use to visually group related options or indicate that they belong to the same category."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"block",children:"Block"}),"\n",(0,jsx_runtime.jsx)("img",{src:radio_button_group_block_namespaceObject,alt:"Radio Button grouping block",width:"50%"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"Use for long radio button labels."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Use to easily scan and compare the options from top to bottom."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Use to visually separate radio button options."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"mouse-interaction",children:"Mouse interaction"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"To select the radio button, users have two options: they can either directly click on the radio button or click on the label."}),"\n",(0,jsx_runtime.jsx)("img",{src:radio_button_mouse_interaction_namespaceObject,alt:"Radio Button mouse interaction",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overflow-content",children:"Overflow content"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"When the content associated with a radio button option is too long or exceeds the available space, it can lead to an overflow scenario. In that case the long labels may wrap to a second line."}),"\n",(0,jsx_runtime.jsx)("img",{src:radio_button_overflow_text_namespaceObject,alt:"Radio Button overflow content",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"states",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:radio_button_states_namespaceObject,alt:"Radio Button states"}),"\n",(0,jsx_runtime.jsx)(_components.hr,{}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Check out the Figma component: ",(0,jsx_runtime.jsx)(_components.strong,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?type=design&node-id=38242-6770&mode=design",target:"_blank",rel:"nofollow noopener noreferrer",children:"Radio Button"})})]}),"\n",(0,jsx_runtime.jsx)(_components.hr,{})]})}const Usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);