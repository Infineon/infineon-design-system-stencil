(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[3790,6921],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"../../node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"../../node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./src/components/table-basic-version/Usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),table_stories=__webpack_require__("./src/components/table-basic-version/table.stories.ts");const table_cell_button_items_namespaceObject=__webpack_require__.p+"static/media/table-cell-button-items.244139f9.png",table_cell_checkbox_items_namespaceObject=__webpack_require__.p+"static/media/table-cell-checkbox-items.38fdb498.png",table_cell_status_items_namespaceObject=__webpack_require__.p+"static/media/table-cell-status-items.3879f56c.png",table_cell_text_items_namespaceObject=__webpack_require__.p+"static/media/table-cell-text-items.0fffc6f2.png",table_cell_tree_items_namespaceObject=__webpack_require__.p+"static/media/table-cell-tree-items.a0a3bdc2.png",table_example_compact_namespaceObject=(__webpack_require__.p,__webpack_require__.p+"static/media/table-example-compact.d138f635.png"),table_example_default_namespaceObject=__webpack_require__.p+"static/media/table-example-default.6f9fb7fa.png",table_header_template_items_namespaceObject=__webpack_require__.p+"static/media/table-header-template-items.d79f6dfe.png",table_header_sorting_items_namespaceObject=__webpack_require__.p+"static/media/table-header-sorting-items.944e9dd1.png",table_header_content_logic_namespaceObject=__webpack_require__.p+"static/media/table-header-content-logic.5b8da00e.png",table_header_column_action_reorder_namespaceObject=__webpack_require__.p+"static/media/table-header-column-action-reorder.6fc3c8ee.png",table_header_column_action_resize_namespaceObject=__webpack_require__.p+"static/media/table-header-column-action-resize.8128375a.png";function _createMdxContent(props){const _components={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:table_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"table",children:"Table"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The table component is a crucial element within our design system, designed to display tabular data in a structured and user-friendly manner. It enhances consistency and usability across our products by providing a standardized way to present data."}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["| Resources                                                                                                              |\n|------------------------------------------------------------------------------------------------------------------------|\n| ",(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=2436-3945",rel:"nofollow",children:"Figma table component →"})," |"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-to-use",children:"When to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"If you want to display data in rows and columns, such as lists, grids, or matrices."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"When users need to compare values across different categories or entities."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"If you want to present a relatively large amount of data in a compact manner."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"headers",children:"Headers"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Headers define the columns of the table and provide context for the data presented. Each header represents a different attribute or piece of information related to the dataset. There is a set of maximum 10 header columns available."}),"\n",(0,jsx_runtime.jsx)("img",{src:table_header_template_items_namespaceObject,alt:"Table Header Items"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"rows",children:"Rows"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Rows contain the actual data entries. Each row corresponds to a unique item, record, or data point. The data within a row aligns with the headers, making it easy to read and comprehend."}),"\n",(0,jsx_runtime.jsx)("img",{src:table_header_content_logic_namespaceObject,alt:"Table Header Content Logic"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cells",children:"Cells"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Cells are the individual units within a row. They align with a specific header and contain the data relevant to that column."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"text--text-links",children:"Text & Text Links"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The basis of a table is the presentation of information in the form of text. The DDS offers both left and right aligned text cells. For pure numbers or prices, the right-aligned variant should be used."}),"\n",(0,jsx_runtime.jsx)("img",{src:table_cell_text_items_namespaceObject,alt:"Table Cell Text Items"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"button--icon-button",children:"Button & Icon Button"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:'If a table should offer the user further possibilities for interaction, buttons can be used. A button should be used for primary actions such as "Buy" and icon buttons for secondary actions like "PDF Download" or "More".'}),"\n",(0,jsx_runtime.jsx)("img",{src:table_cell_button_items_namespaceObject,alt:"Table Cell Button Items"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"tree-navigation",children:"Tree Navigation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A tree navigation offers the possibility to nest more complex data rows and the user the possibility to expand and collapse them. The DDS offers tree navigation up to the third level."}),"\n",(0,jsx_runtime.jsx)("img",{src:table_cell_tree_items_namespaceObject,alt:"Table Cell Tree Items",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"checkbox",children:"Checkbox"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"If it is a question of selecting certain rows in a table in order to carry out a type of batch processing, for example, the DDS offers the checkbox cell."}),"\n",(0,jsx_runtime.jsx)("img",{src:table_cell_checkbox_items_namespaceObject,alt:"Table Cell Checkbox Items",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"status",children:"Status"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"If you want to highlight the status of processes to enhance the user's understanding of the content. In those cases use the status cell."}),"\n",(0,jsx_runtime.jsx)("img",{src:table_cell_status_items_namespaceObject,alt:"Table Cell Status Items",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"layout",children:"Layout"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Two layout variants are available. The default and the compact variant."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"To display a table generously with more white space, the DDS offers this default variant."}),"\n",(0,jsx_runtime.jsx)("img",{src:table_example_default_namespaceObject,alt:"Table Example Default"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"compact",children:"Compact"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"When it comes to show a lot of data in a table, you can end up with a very long table. In such cases, the compact table variant is the best option."}),"\n",(0,jsx_runtime.jsx)("img",{src:table_example_compact_namespaceObject,alt:"Table Example Compact"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"table-actions",children:"Table Actions"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"sorting",children:"Sorting"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Our table component supports sorting columns in ascending or descending order, facilitating quick data analysis. Additionally, users can often filter data directly within the table, enhancing data manipulation capabilities."}),"\n",(0,jsx_runtime.jsx)("img",{src:table_header_sorting_items_namespaceObject,alt:"Table Sorting Items"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"reorder",children:"Reorder"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Users have different preferences and workflows. Allowing them to reorder columns lets them tailor the table layout to suit their specific needs."}),"\n",(0,jsx_runtime.jsx)("img",{src:table_header_column_action_reorder_namespaceObject,alt:"Table Column Reorder"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"resize",children:"Resize"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Resizing columns enables users to adjust the width of columns to fit the content they contain. This ensures that data is displayed more clearly and is easier to read, reducing the need for horizontal scrolling."}),"\n",(0,jsx_runtime.jsx)("img",{src:table_header_column_action_resize_namespaceObject,alt:"Table Column Resize"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/components/table-basic-version/table.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,FixedHeight:()=>FixedHeight,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const columnDefs=[{headerName:"Make",field:"make",sortable:!0,sort:"desc",unSortIcon:!0},{headerName:"Model",field:"model",sortable:!0,unSortIcon:!0},{headerName:"Price",field:"price"},{headerName:"Age",field:"age"}],rowData=[{make:"Toyota",model:"Celica",price:35e3,age:10},{make:"Ford",model:"Mondeo",price:32e3,age:12},{make:"Porsche",model:"Boxster",price:72e3}],__WEBPACK_DEFAULT_EXPORT__={title:"Components/Table (basic)",args:{tableHeight:"auto",rowHeight:40},argTypes:{tableHeight:{table:{type:{summary:"Options",detail:'Default: "auto"\nExample for fixed height: "400px"'}}},rowHeight:{options:["compact","default"],control:{type:"radio"}},columnDefs:{table:{type:{summary:"Column header options",detail:'Standard columns:\nheaderName: "Model", \nfield: "model", \nsortable: true (optional),\nsort: "desc" (optional) => descending sort (show icon)\nunSortIcon: true (optional) => unsorted (show icon)\n\nSpecial columns:\nheaderName: "",\nfield: "button"\nheaderName: "",\nfield: "link"'}}},rowData:{table:{type:{summary:"Row data options",detail:'Standard row values:\nmake: "Toyota", \nmodel: "Celica", \nprice: 35000 \n\nSpecial row values (incl buttons):\nmake: "Porsche",\nmodel: "Boxster",\nprice: "72000",\nbutton: { \ndisabled: false (optional),\nvariant: "outline" (optional)\nsize: "s" (optional),\ntext: "Button"\n...other ifx-button properties\n}'}}}}},DefaultTemplate=args=>`<ifx-basic-table \nrow-height='${args.rowHeight}'\ncols='${JSON.stringify(args.columnDefs)}' \nrows='${JSON.stringify(args.rowData)}'\ntable-height='${args.tableHeight}'>\n</ifx-basic-table>`,Default=DefaultTemplate.bind({});Default.args={rowHeight:"default",columnDefs,rowData};const FixedHeight=DefaultTemplate.bind({});FixedHeight.args={tableHeight:"400px",rowHeight:"default",columnDefs,rowData};const __namedExportsOrder=["Default","FixedHeight"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => `<ifx-basic-table \nrow-height='${args.rowHeight}'\ncols='${JSON.stringify(args.columnDefs)}' \nrows='${JSON.stringify(args.rowData)}'\ntable-height='${args.tableHeight}'>\n</ifx-basic-table>`",...Default.parameters?.docs?.source}}},FixedHeight.parameters={...FixedHeight.parameters,docs:{...FixedHeight.parameters?.docs,source:{originalSource:"args => `<ifx-basic-table \nrow-height='${args.rowHeight}'\ncols='${JSON.stringify(args.columnDefs)}' \nrows='${JSON.stringify(args.rowData)}'\ntable-height='${args.tableHeight}'>\n</ifx-basic-table>`",...FixedHeight.parameters?.docs?.source}}}}}]);