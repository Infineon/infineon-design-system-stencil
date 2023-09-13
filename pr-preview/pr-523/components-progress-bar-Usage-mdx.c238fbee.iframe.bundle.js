/*! For license information please see components-progress-bar-Usage-mdx.c238fbee.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[6926,8928],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/progress-bar/progress-bar.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Small:()=>Small,WithLabel:()=>WithLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Progress Bar",tags:["autodocs"],args:{size:"m",percentage:50,showLabel:!1},argTypes:{percentage:{control:{type:"range",min:0,max:100}},size:{description:"Size options: s (36px) and m (40px) - default: m",options:["s","m"],control:{type:"radio"}}}},Template=args=>{const wrapper=document.createElement("div");return wrapper.innerHTML=`\n    <ifx-progress-bar\n      value="${args.percentage}"\n      size="${args.size}"\n      show-label="${args.showLabel}"\n    ></ifx-progress-bar>\n  `,wrapper.innerHTML},Default=Template.bind({});Default.args={size:"m",percentage:50,showLabel:!1};const Small=Template.bind({});Small.args={percentage:75,size:"s"};const WithLabel=Template.bind({});WithLabel.args={percentage:25,showLabel:!0},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  const wrapper = document.createElement(\'div\');\n  wrapper.innerHTML = `\n    <ifx-progress-bar\n      value="${args.percentage}"\n      size="${args.size}"\n      show-label="${args.showLabel}"\n    ></ifx-progress-bar>\n  `;\n  return wrapper.innerHTML;\n}',...Default.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'args => {\n  const wrapper = document.createElement(\'div\');\n  wrapper.innerHTML = `\n    <ifx-progress-bar\n      value="${args.percentage}"\n      size="${args.size}"\n      show-label="${args.showLabel}"\n    ></ifx-progress-bar>\n  `;\n  return wrapper.innerHTML;\n}',...Small.parameters?.docs?.source}}},WithLabel.parameters={...WithLabel.parameters,docs:{...WithLabel.parameters?.docs,source:{originalSource:'args => {\n  const wrapper = document.createElement(\'div\');\n  wrapper.innerHTML = `\n    <ifx-progress-bar\n      value="${args.percentage}"\n      size="${args.size}"\n      show-label="${args.showLabel}"\n    ></ifx-progress-bar>\n  `;\n  return wrapper.innerHTML;\n}',...WithLabel.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Small","WithLabel"]},"./src/components/progress-bar/Usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Usage});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),progress_bar_stories=__webpack_require__("./src/components/progress-bar/progress-bar.stories.ts");const progressbar_4px_namespaceObject=__webpack_require__.p+"static/media/progressbar-4px.072833c0.png",progressbar_20px_namespaceObject=__webpack_require__.p+"static/media/progressbar-20px.79cf6365.png",progressbar_anatomy_namespaceObject=__webpack_require__.p+"static/media/progressbar-anatomy.d701eb05.png";function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",br:"br",hr:"hr",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:progress_bar_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"progress-bar",children:"Progress Bar"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The Progress bar is a control element that visually represents the progress of a job or task. It provides feedback to users about the completion status of a process, such as installation or loading."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-to-use",children:"When to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"When you need to visually represent the progress or completion status of a task or process."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"To show continuous progress, where the progress bar moves continuously until the task is completed."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"When you want to provide users with additional numerical information about the progress."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-not-to-use",children:"When not to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"When there is no relevant task or process that needs to be visually represented to the user."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"If the progress is not measurable or if the progress does not have a clear endpoint."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"If the progress you are trying to convey is better represented through alternative means, such as a spinner or alert messages"}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"anatomy",children:"Anatomy"}),"\n",(0,jsx_runtime.jsx)("img",{src:progressbar_anatomy_namespaceObject,alt:"Progress Bar Anatomy"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Fill (1)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Shows the current progress of the bar."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Value (2)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Can be displayed to give additional %-information."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Track (3)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The horizontal bar that represents the entire progress range."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"size",children:"Size"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"There are two different sizes of the progress bar available: 4px and 20px."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"20px",children:"20px"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This is the default size for the progress bar, suitable for most use cases where a normal visual presence is desired."}),"\n",(0,jsx_runtime.jsx)("img",{src:progressbar_20px_namespaceObject,alt:"Progress Bar Size 20px"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"4px",children:"4px"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This size is ideal for situations where space is limited or a more compact representation of the progress bar is needed."}),"\n",(0,jsx_runtime.jsx)("img",{src:progressbar_4px_namespaceObject,alt:"Progress Bar Size 4px"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"progress-behavior",children:"Progress behavior"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Implement a technical solution so the progress bar always starts at ",(0,jsx_runtime.jsx)(_components.strong,{children:"2% of its maximum progress (instead of 0%)"}),".  Avoid starting at 0% as it can be frustrating for the user if progress really takes a few seconds to start."]}),"\n",(0,jsx_runtime.jsx)(_components.hr,{}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Check out the Figma component: ",(0,jsx_runtime.jsx)(_components.strong,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?type=design&node-id=37224-10014&mode=design&t=15iRXx0cf6GC1SMq-4",target:"_blank",rel:"nofollow noopener noreferrer",children:"Progress Bar"})})]}),"\n",(0,jsx_runtime.jsx)(_components.hr,{})]})}const Usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);