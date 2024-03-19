"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[7177],{"./src/components/table-basic-version/table.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,FixedHeight:()=>FixedHeight,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const columnDefs=[{headerName:"Make",field:"make",sortable:!0,sort:"desc",unSortIcon:!0},{headerName:"Model",field:"model",sortable:!0,unSortIcon:!0},{headerName:"Price",field:"price"},{headerName:"Age",field:"age"}],rowData=[{make:"Toyota",model:"Celica",price:35e3,age:10},{make:"Ford",model:"Mondeo",price:32e3,age:12},{make:"Porsche",model:"Boxster",price:72e3}],__WEBPACK_DEFAULT_EXPORT__={title:"Components/Table (basic)",args:{tableHeight:"auto",rowHeight:40},argTypes:{tableHeight:{table:{type:{summary:"Options",detail:'Default: "auto"\nExample for fixed height: "400px"'}}},rowHeight:{options:["compact","default"],control:{type:"radio"}},columnDefs:{table:{type:{summary:"Column header options",detail:'Standard columns:\nheaderName: "Model", \nfield: "model", \nsortable: true (optional),\nsort: "desc" (optional) => descending sort (show icon)\nunSortIcon: true (optional) => unsorted (show icon)\n\nSpecial columns:\nheaderName: "",\nfield: "button"\nheaderName: "",\nfield: "link"'}}},rowData:{table:{type:{summary:"Row data options",detail:'Standard row values:\nmake: "Toyota", \nmodel: "Celica", \nprice: 35000 \n\nSpecial row values (incl buttons):\nmake: "Porsche",\nmodel: "Boxster",\nprice: "72000",\nbutton: { \ndisabled: false (optional),\nvariant: "outline" (optional)\nsize: "s" (optional),\ntext: "Button"\n...other ifx-button properties\n}'}}}}},DefaultTemplate=args=>`<ifx-basic-table \nrow-height='${args.rowHeight}'\ncols='${JSON.stringify(args.columnDefs)}' \nrows='${JSON.stringify(args.rowData)}'\ntable-height='${args.tableHeight}'>\n</ifx-basic-table>`,Default=DefaultTemplate.bind({});Default.args={rowHeight:"default",columnDefs,rowData};const FixedHeight=DefaultTemplate.bind({});FixedHeight.args={tableHeight:"400px",rowHeight:"default",columnDefs,rowData},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => `<ifx-basic-table \nrow-height='${args.rowHeight}'\ncols='${JSON.stringify(args.columnDefs)}' \nrows='${JSON.stringify(args.rowData)}'\ntable-height='${args.tableHeight}'>\n</ifx-basic-table>`",...Default.parameters?.docs?.source}}},FixedHeight.parameters={...FixedHeight.parameters,docs:{...FixedHeight.parameters?.docs,source:{originalSource:"args => `<ifx-basic-table \nrow-height='${args.rowHeight}'\ncols='${JSON.stringify(args.columnDefs)}' \nrows='${JSON.stringify(args.rowData)}'\ntable-height='${args.tableHeight}'>\n</ifx-basic-table>`",...FixedHeight.parameters?.docs?.source}}};const __namedExportsOrder=["Default","FixedHeight"]}}]);