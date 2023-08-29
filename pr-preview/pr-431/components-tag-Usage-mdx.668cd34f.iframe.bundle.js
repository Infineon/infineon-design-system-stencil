/*! For license information please see components-tag-Usage-mdx.668cd34f.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[567,9967],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/tag/tag.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Tag",tags:["autodocs"],args:{label:"Tag label"}},Default=(args=>`<ifx-tag>${args.label}</ifx-tag>`).bind({});Default.argTypes={},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => `<ifx-tag>${args.label}</ifx-tag>`",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/tag/Usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Usage});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),tag_stories=__webpack_require__("./src/components/tag/tag.stories.ts");const tag_anatomy_namespaceObject=__webpack_require__.p+"static/media/tag-anatomy.7c4d8572.png",tag_alignment_namespaceObject=__webpack_require__.p+"static/media/tag-alignment.db7ea070.png",tag_states_namespaceObject=__webpack_require__.p+"static/media/tag-states.d7c034ac.png",tag_wraping_namespaceObject=__webpack_require__.p+"static/media/tag-wraping.cddf641b.png";function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",br:"br",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:tag_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"tag",children:"Tag"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Utilize tags to enable users to group, arrange, or sift through information. Often containing keywords or metadata, tags offer swift entry into distinct categories, bolstering content organization and aiding in navigation."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-to-use",children:"When to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"When you have a variety of content items that can be grouped into specific categories or topics."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"When users need to narrow down content based on certain criteria, such as filtering products"}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"When content needs to be associated with keywords or topics for better organization and discoverability."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-not-to-use",children:"When not to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"If your application doesn't involve a significant amount of content or data that needs categorization, tags might introduce unnecessary complexity."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"When your content naturally has a clear and simple hierarchy without the need for additional categorization or organization."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"anatomy",children:"Anatomy"}),"\n",(0,jsx_runtime.jsx)("img",{src:tag_anatomy_namespaceObject,alt:"Tag Anatomy",width:"50%"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Tag Container (1)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The outer container element holds the entire tag component. It provides a visual frame for the tag and can include styling to differentiate tags from other elements."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Tag Icon (2)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Icons can be used as a leading thumbnail, particularly in use cases where they indicate filtered types within a search query."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Tag Label (3)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The main content of the tag component. It displays the label associated with the tag. Tag label text should be 20 characters or fewer."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"grouping-tags",children:"Grouping Tags"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Grouping content using tags helps users easily identify and differentiate between different topics, subjects, or categories. When grouping tags, it may happen that the tags wrap into the next line."}),"\n",(0,jsx_runtime.jsx)("img",{src:tag_wraping_namespaceObject,alt:"Tag Ground and Wraping",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"tag-alignment",children:"Tag Alignment"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Depending on the layout, it is possible to align the tag group left-aligned or centred."}),"\n",(0,jsx_runtime.jsx)("img",{src:tag_alignment_namespaceObject,alt:"Tag Alignment"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"states",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:tag_states_namespaceObject,alt:"Tag States"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["*** Check out the Figma component: ",(0,jsx_runtime.jsx)(_components.strong,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?type=design&node-id=23621-13779&mode=design&t=Uw3fwZdQW62P8kSV-4",target:"_blank",rel:"nofollow noopener noreferrer",children:"Tag"})})]})]})}const Usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);