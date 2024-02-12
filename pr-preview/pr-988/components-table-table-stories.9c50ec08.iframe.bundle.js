"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[6517],{"./src/components/table/table.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{IncludesButtons:()=>IncludesButtons,Pagination:()=>Pagination,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Under Development/Table (advanced)",args:{tableHeight:"auto",pagination:!1,paginationPageSize:10,currentPage:1,rowHeight:40,showLoading:!1},argTypes:{tableHeight:{table:{type:{summary:"Options",detail:'Default: "auto"\nExample for fixed height: "400px"'}}},paginationPageSize:{description:"Results per page: minimum 10 - maximum 30",control:{type:"number",min:10,max:30,step:10}},showLoading:{options:[!0,!1],control:{type:"radio"}},rowHeight:{options:["compact","default"],control:{type:"radio"}},columnDefs:{table:{type:{summary:"Column header options",detail:'Standard columns:\nheaderName: "Model", \nfield: "model", \nsortable: true (optional),\nsort: "desc" (optional) => descending sort (show icon)\nunSortIcon: true (optional) => unsorted (show icon)\n\nSpecial columns:\nheaderName: "",\nfield: "button"\nheaderName: "",\nfield: "link"'}}},rowData:{table:{type:{summary:"Row data options",detail:'Standard row values:\nmake: "Toyota", \nmodel: "Celica", \nprice: 35000 \n\nSpecial row values (incl buttons):\nmake: "Porsche",\nmodel: "Boxster",\nprice: "72000",\nbutton: { \ndisabled: false (optional),\nvariant: "outline" (optional)\nsize: "s" (optional),\ntext: "Button"\n...other ifx-button properties\n}'}}}}},DefaultTemplate=args=>`<ifx-table \n  id='my-table'\n  row-height='${args.rowHeight}'\n  cols='${JSON.stringify(args.columnDefs)}' \n  rows='${JSON.stringify(args.rowData)}'\n  table-height='${args.tableHeight}'\n  pagination='${args.pagination}'\n  pagination-page-size='${args.paginationPageSize}'>\n  </ifx-table>`,Pagination=DefaultTemplate.bind({});Pagination.args={pagination:!0,paginationPageSize:10,rowHeight:"default",columnDefs:[{headerName:"Make",field:"make",sortable:!0,sort:"desc",unSortIcon:!0},{headerName:"Model",field:"model",sortable:!0,unSortIcon:!0},{headerName:"Price",field:"price"},{headerName:"Age",field:"age"}],rowData:[{make:"Toyota",model:"Celica",price:35e3,age:10},{make:"Ford",model:"Mondeo",price:32e3,age:12},{make:"Porsche",model:"Boxster",price:72e3},{make:"Bmw",model:"x",price:72e3},{make:"Mercedes",model:"y",price:72e3},{make:"Ferrari",model:"z",price:72e3},{make:"Chrysler",model:"a",price:72e3},{make:"Range rover",model:"b",price:72e3},{make:"Tesla",model:"x",price:72e3},{make:"Audi",model:"3",price:72e3},{make:"Landrover",model:"x",price:72e3}]};const IncludesButtons=DefaultTemplate.bind({});IncludesButtons.args={rowHeight:"default",columnDefs:[{headerName:"Make",field:"make",sortable:!0,sort:"desc",unSortIcon:!0},{headerName:"Model",field:"model",sortable:!0,unSortIcon:!0},{headerName:"Price",field:"price"},{headerName:"Age",field:"age"},{headerName:"",field:"button"}],rowData:[{make:"Toyota",model:"Celica",price:35e3,age:10,button:"something about Toyota"},{make:"Ford",model:"Mondeo",price:32e3,age:12,button:"something about Ford"},{make:"Porsche",model:"Boxster",price:72e3,button:{disabled:!1,variant:"secondary",size:"s",target:"_blank",color:"secondary",text:"Button"}}]},Pagination.parameters={...Pagination.parameters,docs:{...Pagination.parameters?.docs,source:{originalSource:"args => `<ifx-table \n  id='my-table'\n  row-height='${args.rowHeight}'\n  cols='${JSON.stringify(args.columnDefs)}' \n  rows='${JSON.stringify(args.rowData)}'\n  table-height='${args.tableHeight}'\n  pagination='${args.pagination}'\n  pagination-page-size='${args.paginationPageSize}'>\n  </ifx-table>`",...Pagination.parameters?.docs?.source}}},IncludesButtons.parameters={...IncludesButtons.parameters,docs:{...IncludesButtons.parameters?.docs,source:{originalSource:"args => `<ifx-table \n  id='my-table'\n  row-height='${args.rowHeight}'\n  cols='${JSON.stringify(args.columnDefs)}' \n  rows='${JSON.stringify(args.rowData)}'\n  table-height='${args.tableHeight}'\n  pagination='${args.pagination}'\n  pagination-page-size='${args.paginationPageSize}'>\n  </ifx-table>`",...IncludesButtons.parameters?.docs?.source}}};const __namedExportsOrder=["Pagination","IncludesButtons"]}}]);