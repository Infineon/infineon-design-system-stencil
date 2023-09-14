/*! For license information please see components-table-basic-version-Development-mdx.538ea105.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[7095,7177],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/table-basic-version/table.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,FixedHeight:()=>FixedHeight,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const columnDefs=[{headerName:"Make",field:"make",sortable:!0,sort:"desc",unSortIcon:!0},{headerName:"Model",field:"model",sortable:!0,unSortIcon:!0},{headerName:"Price",field:"price"},{headerName:"Age",field:"age"}],rowData=[{make:"Toyota",model:"Celica",price:35e3,age:10},{make:"Ford",model:"Mondeo",price:32e3,age:12},{make:"Porsche",model:"Boxster",price:72e3}],__WEBPACK_DEFAULT_EXPORT__={title:"Components/Table (basic)",args:{tableHeight:"auto",rowHeight:40},argTypes:{tableHeight:{table:{type:{summary:"Options",detail:'Default: "auto"\nExample for fixed height: "400px"'}}},rowHeight:{options:["compact","default"],control:{type:"radio"}},columnDefs:{table:{type:{summary:"Column header options",detail:'Standard columns:\nheaderName: "Model", \nfield: "model", \nsortable: true (optional),\nsort: "desc" (optional) => descending sort (show icon)\nunSortIcon: true (optional) => unsorted (show icon)\n\nSpecial columns:\nheaderName: "",\nfield: "button"\nheaderName: "",\nfield: "link"'}}},rowData:{table:{type:{summary:"Row data options",detail:'Standard row values:\nmake: "Toyota", \nmodel: "Celica", \nprice: 35000 \n\nSpecial row values (incl buttons):\nmake: "Porsche",\nmodel: "Boxster",\nprice: "72000",\nbutton: { \ndisabled: false (optional),\nvariant: "outline" (optional)\nsize: "s" (optional),\ntext: "Button"\n...other ifx-button properties\n}'}}}}},DefaultTemplate=args=>`<ifx-basic-table \nrow-height='${args.rowHeight}'\ncols='${JSON.stringify(args.columnDefs)}' \nrows='${JSON.stringify(args.rowData)}'\ntable-height='${args.tableHeight}'>\n</ifx-basic-table>`,Default=DefaultTemplate.bind({});Default.args={rowHeight:"default",columnDefs,rowData};const FixedHeight=DefaultTemplate.bind({});FixedHeight.args={tableHeight:"400px",rowHeight:"default",columnDefs,rowData},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => `<ifx-basic-table \nrow-height='${args.rowHeight}'\ncols='${JSON.stringify(args.columnDefs)}' \nrows='${JSON.stringify(args.rowData)}'\ntable-height='${args.tableHeight}'>\n</ifx-basic-table>`",...Default.parameters?.docs?.source}}},FixedHeight.parameters={...FixedHeight.parameters,docs:{...FixedHeight.parameters?.docs,source:{originalSource:"args => `<ifx-basic-table \nrow-height='${args.rowHeight}'\ncols='${JSON.stringify(args.columnDefs)}' \nrows='${JSON.stringify(args.rowData)}'\ntable-height='${args.tableHeight}'>\n</ifx-basic-table>`",...FixedHeight.parameters?.docs?.source}}};const __namedExportsOrder=["Default","FixedHeight"]},"./src/components/table-basic-version/Development.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_infineon_design_system_stencil_infineon_design_system_stencil_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_table_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/table-basic-version/table.stories.ts");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",h3:"h3"},(0,_home_runner_work_infineon_design_system_stencil_infineon_design_system_stencil_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_table_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"table",children:"Table"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_table_stories__WEBPACK_IMPORTED_MODULE_2__.Default,sourceState:"shown"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"stories",children:"Stories"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_table_stories__WEBPACK_IMPORTED_MODULE_2__.Default,sourceState:"shown"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"fixed-table-height",children:"Fixed table height"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_table_stories__WEBPACK_IMPORTED_MODULE_2__.FixedHeight,sourceState:"shown"})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_infineon_design_system_stencil_infineon_design_system_stencil_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);