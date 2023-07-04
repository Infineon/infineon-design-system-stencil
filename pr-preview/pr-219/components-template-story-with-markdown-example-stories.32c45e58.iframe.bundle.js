/*! For license information please see components-template-story-with-markdown-example-stories.32c45e58.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[6457],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/template-story-with-markdown/example.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,Secondary:()=>Secondary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>example_stories});var example_stories_namespaceObject={};__webpack_require__.r(example_stories_namespaceObject),__webpack_require__.d(example_stories_namespaceObject,{Primary:()=>Primary,Secondary:()=>Secondary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>example_stories});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const coffee_unsplash_namespaceObject=__webpack_require__.p+"static/media/coffee_unsplash.8c5af421.jpg";function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:example_stories_namespaceObject.primary}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"story-template-with-markdown--assets",children:"Story template with markdown + assets"}),"\n",(0,jsx_runtime.jsx)("img",{src:coffee_unsplash_namespaceObject,alt:"Coffee"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et blandit ligula. Maecenas eleifend lobortis tempor. Integer non eros eu dolor facilisis suscipit in eget massa. Praesent turpis elit, placerat quis ullamcorper ac, laoreet non elit. Morbi sed sollicitudin erat, eget mattis nibh. Maecenas posuere justo sapien, non tincidunt tellus condimentum sit amet. Vestibulum iaculis quam ex. Cras bibendum ut sem eget gravida. Cras porta, nisl non molestie porta, arcu lectus maximus purus, et ultrices ex nunc et erat. Praesent tempor maximus augue a tempor. Vestibulum at ex lorem. Donec pretium auctor erat vel condimentum. Maecenas porttitor, metus eu gravida tristique, lacus lorem faucibus arcu, eget vehicula quam nisl vel ante."}),"\n",(0,jsx_runtime.jsx)(dist.sq,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.ZX,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"stories",children:"Stories"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"primary",children:"Primary"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Duis consectetur erat non elit malesuada finibus ac luctus nisl. Pellentesque volutpat tempus eleifend. Sed et magna eu lectus cursus blandit. Vivamus maximus urna ut lectus dictum, in iaculis velit fermentum. Phasellus placerat lorem sed nunc feugiat convallis. Etiam tristique faucibus arcu. Quisque commodo, elit et aliquam rhoncus, augue libero rutrum velit, non volutpat ligula arcu et erat. Fusce vehicula imperdiet lobortis."}),"\n",(0,jsx_runtime.jsx)(dist.oG,{of:Primary}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"secondary",children:"Secondary"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Morbi molestie nisi libero. Morbi quis sodales orci. Integer in nibh molestie, eleifend purus accumsan, consectetur ligula. Nunc finibus diam porta, convallis nulla varius, gravida tellus. Maecenas at urna efficitur, vestibulum ipsum eget, porttitor turpis. Nulla lacinia orci rutrum erat volutpat, vel semper ipsum lacinia. Ut nec mi nec nunc rutrum varius."}),"\n",(0,jsx_runtime.jsx)(dist.oG,{of:Secondary})]})}const example_stories={title:"Documentation/Story template",parameters:{docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},canvas:{sourceState:"shown"}}},args:{label:"Button",variant:"solid",color:"primary",type:"button",size:"m",disabled:!1,icon:"",position:"left",href:"",target:"_blank"},argTypes:{variant:{options:["solid","outline","outline-text"],control:{type:"radio"}},color:{options:["primary","secondary","success","danger","warning"],control:{type:"radio"}},type:{options:["submit","button"],control:{type:"radio"}},size:{options:["s","m"],control:{type:"radio"}},position:{options:["left","right"],control:{type:"radio"}},target:{options:["_blank","_self","_parent"],control:{type:"radio"}}}},DefaultTemplate=args=>`<ifx-example type="${args.type}" variant="${args.variant}" icon="${args.icon}" position="${args.position}" href="${args.href}" target="${args.target}" color="${args.color}" size="${args.size}" disabled="${args.disabled}">\n  ${args.label}\n  </ifx-example>`,Primary=DefaultTemplate.bind({}),Secondary=DefaultTemplate.bind({});Secondary.args={color:"secondary"},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'args => `<ifx-example type="${args.type}" variant="${args.variant}" icon="${args.icon}" position="${args.position}" href="${args.href}" target="${args.target}" color="${args.color}" size="${args.size}" disabled="${args.disabled}">\n  ${args.label}\n  </ifx-example>`',...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:'args => `<ifx-example type="${args.type}" variant="${args.variant}" icon="${args.icon}" position="${args.position}" href="${args.href}" target="${args.target}" color="${args.color}" size="${args.size}" disabled="${args.disabled}">\n  ${args.label}\n  </ifx-example>`',...Secondary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Secondary"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);