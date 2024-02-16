"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[7587],{"./src/components/table-advanced-version/table.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{IncludesButtons:()=>IncludesButtons,Pagination:()=>Pagination,SetFilter:()=>SetFilter,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const columnDefs=[{headerName:"Make",field:"make",sortable:!0,sort:"desc",unSortIcon:!0},{headerName:"Model",field:"model",sortable:!0,unSortIcon:!0},{headerName:"Price",field:"price"},{headerName:"Age",field:"age"}],rowData=[{make:"Toyota",model:"Celica",price:35e3,age:10},{make:"Ford",model:"Mondeo",price:32e3,age:12},{make:"Porsche",model:"Boxster",price:72e3},{make:"Bmw",model:"x",price:72e3},{make:"Mercedes",model:"y",price:72e3},{make:"Ferrari",model:"z",price:72e3},{make:"Chrysler",model:"a",price:72e3},{make:"Range rover",model:"b",price:72e3},{make:"Tesla",model:"x",price:72e3},{make:"Audi",model:"3",price:72e3},{make:"Landrover",model:"x",price:72e3}],__WEBPACK_DEFAULT_EXPORT__={title:"Under Development/Table (advanced)",args:{tableHeight:"auto",pagination:!1,paginationPageSize:10,currentPage:1,rowHeight:40,showLoading:!1},argTypes:{tableHeight:{table:{type:{summary:"Options",detail:'Default: "auto"\nExample for fixed height: "400px"'}}},paginationPageSize:{description:"Results per page: minimum 10 - maximum 30",control:{type:"number",min:10,max:30,step:10}},showLoading:{options:[!0,!1],control:{type:"radio"}},rowHeight:{options:["compact","default"],control:{type:"radio"}},columnDefs:{table:{type:{summary:"Column header options",detail:'Standard columns:\nheaderName: "Model", \nfield: "model", \nsortable: true (optional),\nsort: "desc" (optional) => descending sort (show icon)\nunSortIcon: true (optional) => unsorted (show icon)\n\nSpecial columns:\nheaderName: "",\nfield: "button"\nheaderName: "",\nfield: "link"'}}},rowData:{table:{type:{summary:"Row data options",detail:'Standard row values:\nmake: "Toyota", \nmodel: "Celica", \nprice: 35000 \n\nSpecial row values (incl buttons):\nmake: "Porsche",\nmodel: "Boxster",\nprice: "72000",\nbutton: { \ndisabled: false (optional),\nvariant: "outline" (optional)\nsize: "s" (optional),\ntext: "Button"\n...other ifx-button properties\n}'}}}}},DefaultTemplate=args=>`<ifx-table \n  row-height='${args.rowHeight}'\n  cols='${JSON.stringify(args.columnDefs)}' \n  rows='${JSON.stringify(args.rowData)}'\n  table-height='${args.tableHeight}'\n  pagination='${args.pagination}'\n  pagination-page-size='${args.paginationPageSize}'>\n  </ifx-table>`,Pagination=DefaultTemplate.bind({});Pagination.args={pagination:!0,paginationPageSize:10,rowHeight:"default",columnDefs,rowData};const IncludesButtons=DefaultTemplate.bind({});IncludesButtons.args={rowHeight:"default",columnDefs:[{headerName:"Make",field:"make",sortable:!0,sort:"desc",unSortIcon:!0},{headerName:"Model",field:"model",sortable:!0,unSortIcon:!0},{headerName:"Price",field:"price"},{headerName:"Age",field:"age"},{headerName:"",field:"button"}],rowData:[{make:"Toyota",model:"Celica",price:35e3,age:10,button:"something about Toyota"},{make:"Ford",model:"Mondeo",price:32e3,age:12,button:"something about Ford"},{make:"Porsche",model:"Boxster",price:72e3,button:{disabled:!1,variant:"secondary",size:"s",target:"_blank",color:"secondary",text:"Button"}}]};const SetFilter=(args=>{let columnFilters=args.columnDefs.map((column=>{let uniqueColValues=[...new Set(args.rowData.map((row=>row[column.field])))];return{name:column.field,options:uniqueColValues.map((option=>({label:option,value:option,selected:!1})))}}));return`<ifx-table \n    row-height='${args.rowHeight}'\n    cols='${JSON.stringify(args.columnDefs)}' \n    rows='${JSON.stringify(args.rowData)}'\n    table-height='${args.tableHeight}'\n    pagination='${args.pagination}'\n    pagination-page-size='${args.paginationPageSize}'\n    <ifx-set-filter slot="set-filter" filter-name='${columnFilters[0].name}' filter-label='Text filter for: ${columnFilters[0].name}' placeholder='Placeholder' type="text"></ifx-set-filter>\n    <ifx-set-filter slot="set-filter" filter-name='${columnFilters[0].name}' filter-label='Single-select filter for: ${columnFilters[0].name}' placeholder='Placeholder' type="multi-select" options='${JSON.stringify(columnFilters[0].options)}'></ifx-set-filter>\n    <ifx-set-filter slot="set-filter" filter-name='${columnFilters[0].name}' filter-label='Multi-select filter for: ${columnFilters[0].name}' placeholder='Placeholder' type="single-select" options='${JSON.stringify(columnFilters[0].options)}'></ifx-set-filter>\n    </ifx-table>`}).bind({});SetFilter.args={rowHeight:"default",columnDefs,rowData,type:"multi-select"},Pagination.parameters={...Pagination.parameters,docs:{...Pagination.parameters?.docs,source:{originalSource:"args => `<ifx-table \n  row-height='${args.rowHeight}'\n  cols='${JSON.stringify(args.columnDefs)}' \n  rows='${JSON.stringify(args.rowData)}'\n  table-height='${args.tableHeight}'\n  pagination='${args.pagination}'\n  pagination-page-size='${args.paginationPageSize}'>\n  </ifx-table>`",...Pagination.parameters?.docs?.source}}},IncludesButtons.parameters={...IncludesButtons.parameters,docs:{...IncludesButtons.parameters?.docs,source:{originalSource:"args => `<ifx-table \n  row-height='${args.rowHeight}'\n  cols='${JSON.stringify(args.columnDefs)}' \n  rows='${JSON.stringify(args.rowData)}'\n  table-height='${args.tableHeight}'\n  pagination='${args.pagination}'\n  pagination-page-size='${args.paginationPageSize}'>\n  </ifx-table>`",...IncludesButtons.parameters?.docs?.source}}},SetFilter.parameters={...SetFilter.parameters,docs:{...SetFilter.parameters?.docs,source:{originalSource:"args => {\n  let columnFilters = args.columnDefs.map(column => {\n    let uniqueColValues = [...new Set(args.rowData.map(row => row[column.field]))];\n    return {\n      name: column.field,\n      options: uniqueColValues.map(option => {\n        return {\n          label: option,\n          value: option,\n          selected: false\n        };\n      })\n    };\n  });\n\n  // let setFilterAllCols = columnFilters.map(filter => {\n  //   return `<ifx-set-filter slot=\"set-filter\" filter-name=\"${filter.name}\" options='${JSON.stringify(filter.options)}' type=\"multi-select\"></ifx-set-filter>`;\n  // }).join(\"\");\n\n  return `<ifx-table \n    row-height='${args.rowHeight}'\n    cols='${JSON.stringify(args.columnDefs)}' \n    rows='${JSON.stringify(args.rowData)}'\n    table-height='${args.tableHeight}'\n    pagination='${args.pagination}'\n    pagination-page-size='${args.paginationPageSize}'\n    <ifx-set-filter slot=\"set-filter\" filter-name='${columnFilters[0].name}' filter-label='Text filter for: ${columnFilters[0].name}' placeholder='Placeholder' type=\"text\"></ifx-set-filter>\n    <ifx-set-filter slot=\"set-filter\" filter-name='${columnFilters[0].name}' filter-label='Single-select filter for: ${columnFilters[0].name}' placeholder='Placeholder' type=\"multi-select\" options='${JSON.stringify(columnFilters[0].options)}'></ifx-set-filter>\n    <ifx-set-filter slot=\"set-filter\" filter-name='${columnFilters[0].name}' filter-label='Multi-select filter for: ${columnFilters[0].name}' placeholder='Placeholder' type=\"single-select\" options='${JSON.stringify(columnFilters[0].options)}'></ifx-set-filter>\n    </ifx-table>`;\n}",...SetFilter.parameters?.docs?.source}}};const __namedExportsOrder=["Pagination","IncludesButtons","SetFilter"]}}]);