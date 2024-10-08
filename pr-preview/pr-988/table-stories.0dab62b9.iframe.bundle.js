"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[5977],{"./src/components/table-advanced-version/table.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{IncludesButtons:()=>IncludesButtons,Pagination:()=>Pagination,SidebarFilter:()=>SidebarFilter,TopbarFilter:()=>TopbarFilter,default:()=>__WEBPACK_DEFAULT_EXPORT__});const columnDefs=[{headerName:"Make",field:"make",sortable:!0,sort:"desc",unSortIcon:!0},{headerName:"Model",field:"model",sortable:!0,unSortIcon:!0},{headerName:"Price",field:"price"},{headerName:"Age",field:"age"}],rowData=[{make:"Toyota",model:"Celica",price:35e3,age:10},{make:"Ford",model:"Mondeo",price:32e3,age:12},{make:"Porsche",model:"Boxster",price:72e3},{make:"Bmw",model:"x",price:72e3},{make:"Mercedes",model:"y",price:72e3},{make:"Ferrari",model:"z",price:72e3},{make:"Chrysler",model:"a",price:72e3},{make:"Range rover",model:"b",price:72e3},{make:"Tesla",model:"x",price:72e3},{make:"Audi",model:"3",price:72e3},{make:"Landrover",model:"x",price:72e3}],__WEBPACK_DEFAULT_EXPORT__={title:"Under Development/Table (advanced)",args:{tableHeight:"auto",pagination:!1,paginationPageSize:10,currentPage:1,rowHeight:40,showLoading:!1},argTypes:{tableHeight:{table:{type:{summary:"Options",detail:'Default: "auto"\nExample for fixed height: "400px"'}}},paginationPageSize:{description:"Results per page: minimum 10 - maximum 30",control:{type:"number",min:10,max:30,step:10}},showLoading:{options:[!0,!1],control:{type:"radio"}},rowHeight:{options:["compact","default"],control:{type:"radio"}},filterOrientation:{options:["sidebar","topbar","none"],control:{type:"radio"}},columnDefs:{table:{type:{summary:"Column header options",detail:'Standard columns:\nheaderName: "Model", \nfield: "model", \nsortable: true (optional),\nsort: "desc" (optional) => descending sort (show icon)\nunSortIcon: true (optional) => unsorted (show icon)\n\nSpecial columns:\nheaderName: "",\nfield: "button"\nheaderName: "",\nfield: "link"'}}},rowData:{table:{type:{summary:"Row data options",detail:'Standard row values:\nmake: "Toyota", \nmodel: "Celica", \nprice: 35000 \n\nSpecial row values (incl buttons):\nmake: "Porsche",\nmodel: "Boxster",\nprice: "72000",\nbutton: { \ndisabled: false (optional),\nvariant: "outline" (optional)\nsize: "s" (optional),\ntext: "Button"\n...other ifx-button properties\n}'}}}}},DefaultTemplate=args=>{if("none"===args.filterOrientation){return`<ifx-table\n    row-height="${args.rowHeight}"\n    cols='${JSON.stringify(args.columnDefs)}'\n    rows='${JSON.stringify(args.rowData)}'\n    table-height="${args.tableHeight}"\n    pagination="${args.pagination}"\n    pagination-page-size="${args.paginationPageSize}"\n    filter-orientation="${args.filterOrientation}">\n</ifx-table>`}{const filterAccordions=args.columnDefs.map((column=>{const filterOptions=[...new Set(args.rowData.map((row=>row[column.field])))].map(((option,index)=>`<ifx-list-entry slot="slot${index}" label="${option}" value="false"></ifx-list-entry>`)).join("");return`\n      <ifx-filter-accordion slot="filter-accordion" filter-group-name="${column.field}">\n        <ifx-list slot="list" type="checkbox" name="${column.field}" max-visible-items="6">\n          ${filterOptions}\n        </ifx-list>\n      </ifx-filter-accordion>\n    `})).join(""),filterComponents=args.columnDefs.map(((column,index)=>{const options=[...new Set(args.rowData.map((row=>row[column.field])))].map((option=>({value:option,label:option,selected:!1})));return`\n        <ifx-set-filter slot="filter-component-${index+1}"\n            options='${JSON.stringify(options)}' \n            filter-label='${column.headerName}'\n            filter-name='${column.field}'\n            type='multi-select'\n            search-enabled='true'>\n          </ifx-set-filter>\n          `})).join("\n"),filterTypeGroupComponent="sidebar"===args.filterOrientation?`<ifx-filter-type-group slot="sidebar-filter">\n        <div slot="filter-search">\n          <ifx-filter-search filter-orientation="sidebar" filter-name="search"></ifx-filter-search>\n        </div>\n        ${filterAccordions}\n    </ifx-filter-type-group>`:`<ifx-filter-bar slot="topbar-filter" max-shown-filters="3">\n        <ifx-filter-search slot="filter-search" filter-orientation="topbar"></ifx-filter-search>\n        ${filterComponents}\n   </ifx-filter-bar>`;return`<ifx-table\n    row-height="${args.rowHeight}"\n    cols='${JSON.stringify(args.columnDefs)}'\n    rows='${JSON.stringify(args.rowData)}'\n    table-height="${args.tableHeight}"\n    pagination="${args.pagination}"\n    pagination-page-size="${args.paginationPageSize}"\n    filter-orientation="${args.filterOrientation}">\n    ${filterTypeGroupComponent}\n</ifx-table>`}},Pagination=DefaultTemplate.bind({});Pagination.args={pagination:!0,paginationPageSize:10,rowHeight:"default",columnDefs,rowData,filterOrientation:"none"};const IncludesButtons=DefaultTemplate.bind({});IncludesButtons.args={rowHeight:"default",columnDefs:[{headerName:"Make",field:"make",sortable:!0,sort:"desc",unSortIcon:!0},{headerName:"Model",field:"model",sortable:!0,unSortIcon:!0},{headerName:"Price",field:"price"},{headerName:"Age",field:"age"},{headerName:"",field:"button"}],rowData:[{make:"Toyota",model:"Celica",price:35e3,age:10,button:"something about Toyota"},{make:"Ford",model:"Mondeo",price:32e3,age:12,button:"something about Ford"},{make:"Porsche",model:"Boxster",price:72e3,button:{disabled:!1,variant:"secondary",size:"s",target:"_blank",color:"secondary",text:"Button"}}],filterOrientation:"none"};const SidebarFilter=DefaultTemplate.bind({});SidebarFilter.args={rowHeight:"default",columnDefs,rowData,filterOrientation:"sidebar"};const TopbarFilter=DefaultTemplate.bind({});TopbarFilter.args={rowHeight:"default",columnDefs,rowData,filterOrientation:"topbar"},Pagination.parameters={...Pagination.parameters,docs:{...Pagination.parameters?.docs,source:{originalSource:'args => {\n  if (args.filterOrientation === \'none\') {\n    const table = `<ifx-table\n    row-height="${args.rowHeight}"\n    cols=\'${JSON.stringify(args.columnDefs)}\'\n    rows=\'${JSON.stringify(args.rowData)}\'\n    table-height="${args.tableHeight}"\n    pagination="${args.pagination}"\n    pagination-page-size="${args.paginationPageSize}"\n    filter-orientation="${args.filterOrientation}">\n</ifx-table>`;\n    return table;\n  } else {\n    //sidebar\n    const filterAccordions = args.columnDefs.map(column => {\n      const uniqueColValues = [...new Set(args.rowData.map(row => row[column.field]))];\n      const filterOptions = uniqueColValues.map((option, index) => {\n        return `<ifx-list-entry slot="slot${index}" label="${option}" value="false"></ifx-list-entry>`;\n      }).join(\'\');\n      return `\n      <ifx-filter-accordion slot="filter-accordion" filter-group-name="${column.field}">\n        <ifx-list slot="list" type="checkbox" name="${column.field}" max-visible-items="6">\n          ${filterOptions}\n        </ifx-list>\n      </ifx-filter-accordion>\n    `;\n    }).join(\'\');\n\n    //topbar\n    const filterComponents = args.columnDefs.map((column, index) => {\n      const uniqueColValues = [...new Set(args.rowData.map(row => row[column.field]))];\n      const options = uniqueColValues.map(option => ({\n        value: option,\n        label: option,\n        selected: false\n      }));\n\n      // Directly use JSON.stringify without replacing quotes\n      const optionsString = JSON.stringify(options);\n      return `\n        <ifx-set-filter slot="filter-component-${index + 1}"\n            options=\'${optionsString}\' \n            filter-label=\'${column.headerName}\'\n            filter-name=\'${column.field}\'\n            type=\'multi-select\'\n            search-enabled=\'true\'>\n          </ifx-set-filter>\n          `;\n    }).join(\'\\n\');\n    const filterTypeGroupComponent = args.filterOrientation === \'sidebar\' ? `<ifx-filter-type-group slot="sidebar-filter">\n        <div slot="filter-search">\n          <ifx-filter-search filter-orientation="sidebar" filter-name="search"></ifx-filter-search>\n        </div>\n        ${filterAccordions}\n    </ifx-filter-type-group>` : `<ifx-filter-bar slot="topbar-filter" max-shown-filters="3">\n        <ifx-filter-search slot="filter-search" filter-orientation="topbar"></ifx-filter-search>\n        ${filterComponents}\n   </ifx-filter-bar>`;\n    const table = `<ifx-table\n    row-height="${args.rowHeight}"\n    cols=\'${JSON.stringify(args.columnDefs)}\'\n    rows=\'${JSON.stringify(args.rowData)}\'\n    table-height="${args.tableHeight}"\n    pagination="${args.pagination}"\n    pagination-page-size="${args.paginationPageSize}"\n    filter-orientation="${args.filterOrientation}">\n    ${filterTypeGroupComponent}\n</ifx-table>`;\n    return table;\n  }\n}',...Pagination.parameters?.docs?.source}}},IncludesButtons.parameters={...IncludesButtons.parameters,docs:{...IncludesButtons.parameters?.docs,source:{originalSource:'args => {\n  if (args.filterOrientation === \'none\') {\n    const table = `<ifx-table\n    row-height="${args.rowHeight}"\n    cols=\'${JSON.stringify(args.columnDefs)}\'\n    rows=\'${JSON.stringify(args.rowData)}\'\n    table-height="${args.tableHeight}"\n    pagination="${args.pagination}"\n    pagination-page-size="${args.paginationPageSize}"\n    filter-orientation="${args.filterOrientation}">\n</ifx-table>`;\n    return table;\n  } else {\n    //sidebar\n    const filterAccordions = args.columnDefs.map(column => {\n      const uniqueColValues = [...new Set(args.rowData.map(row => row[column.field]))];\n      const filterOptions = uniqueColValues.map((option, index) => {\n        return `<ifx-list-entry slot="slot${index}" label="${option}" value="false"></ifx-list-entry>`;\n      }).join(\'\');\n      return `\n      <ifx-filter-accordion slot="filter-accordion" filter-group-name="${column.field}">\n        <ifx-list slot="list" type="checkbox" name="${column.field}" max-visible-items="6">\n          ${filterOptions}\n        </ifx-list>\n      </ifx-filter-accordion>\n    `;\n    }).join(\'\');\n\n    //topbar\n    const filterComponents = args.columnDefs.map((column, index) => {\n      const uniqueColValues = [...new Set(args.rowData.map(row => row[column.field]))];\n      const options = uniqueColValues.map(option => ({\n        value: option,\n        label: option,\n        selected: false\n      }));\n\n      // Directly use JSON.stringify without replacing quotes\n      const optionsString = JSON.stringify(options);\n      return `\n        <ifx-set-filter slot="filter-component-${index + 1}"\n            options=\'${optionsString}\' \n            filter-label=\'${column.headerName}\'\n            filter-name=\'${column.field}\'\n            type=\'multi-select\'\n            search-enabled=\'true\'>\n          </ifx-set-filter>\n          `;\n    }).join(\'\\n\');\n    const filterTypeGroupComponent = args.filterOrientation === \'sidebar\' ? `<ifx-filter-type-group slot="sidebar-filter">\n        <div slot="filter-search">\n          <ifx-filter-search filter-orientation="sidebar" filter-name="search"></ifx-filter-search>\n        </div>\n        ${filterAccordions}\n    </ifx-filter-type-group>` : `<ifx-filter-bar slot="topbar-filter" max-shown-filters="3">\n        <ifx-filter-search slot="filter-search" filter-orientation="topbar"></ifx-filter-search>\n        ${filterComponents}\n   </ifx-filter-bar>`;\n    const table = `<ifx-table\n    row-height="${args.rowHeight}"\n    cols=\'${JSON.stringify(args.columnDefs)}\'\n    rows=\'${JSON.stringify(args.rowData)}\'\n    table-height="${args.tableHeight}"\n    pagination="${args.pagination}"\n    pagination-page-size="${args.paginationPageSize}"\n    filter-orientation="${args.filterOrientation}">\n    ${filterTypeGroupComponent}\n</ifx-table>`;\n    return table;\n  }\n}',...IncludesButtons.parameters?.docs?.source}}},SidebarFilter.parameters={...SidebarFilter.parameters,docs:{...SidebarFilter.parameters?.docs,source:{originalSource:'args => {\n  if (args.filterOrientation === \'none\') {\n    const table = `<ifx-table\n    row-height="${args.rowHeight}"\n    cols=\'${JSON.stringify(args.columnDefs)}\'\n    rows=\'${JSON.stringify(args.rowData)}\'\n    table-height="${args.tableHeight}"\n    pagination="${args.pagination}"\n    pagination-page-size="${args.paginationPageSize}"\n    filter-orientation="${args.filterOrientation}">\n</ifx-table>`;\n    return table;\n  } else {\n    //sidebar\n    const filterAccordions = args.columnDefs.map(column => {\n      const uniqueColValues = [...new Set(args.rowData.map(row => row[column.field]))];\n      const filterOptions = uniqueColValues.map((option, index) => {\n        return `<ifx-list-entry slot="slot${index}" label="${option}" value="false"></ifx-list-entry>`;\n      }).join(\'\');\n      return `\n      <ifx-filter-accordion slot="filter-accordion" filter-group-name="${column.field}">\n        <ifx-list slot="list" type="checkbox" name="${column.field}" max-visible-items="6">\n          ${filterOptions}\n        </ifx-list>\n      </ifx-filter-accordion>\n    `;\n    }).join(\'\');\n\n    //topbar\n    const filterComponents = args.columnDefs.map((column, index) => {\n      const uniqueColValues = [...new Set(args.rowData.map(row => row[column.field]))];\n      const options = uniqueColValues.map(option => ({\n        value: option,\n        label: option,\n        selected: false\n      }));\n\n      // Directly use JSON.stringify without replacing quotes\n      const optionsString = JSON.stringify(options);\n      return `\n        <ifx-set-filter slot="filter-component-${index + 1}"\n            options=\'${optionsString}\' \n            filter-label=\'${column.headerName}\'\n            filter-name=\'${column.field}\'\n            type=\'multi-select\'\n            search-enabled=\'true\'>\n          </ifx-set-filter>\n          `;\n    }).join(\'\\n\');\n    const filterTypeGroupComponent = args.filterOrientation === \'sidebar\' ? `<ifx-filter-type-group slot="sidebar-filter">\n        <div slot="filter-search">\n          <ifx-filter-search filter-orientation="sidebar" filter-name="search"></ifx-filter-search>\n        </div>\n        ${filterAccordions}\n    </ifx-filter-type-group>` : `<ifx-filter-bar slot="topbar-filter" max-shown-filters="3">\n        <ifx-filter-search slot="filter-search" filter-orientation="topbar"></ifx-filter-search>\n        ${filterComponents}\n   </ifx-filter-bar>`;\n    const table = `<ifx-table\n    row-height="${args.rowHeight}"\n    cols=\'${JSON.stringify(args.columnDefs)}\'\n    rows=\'${JSON.stringify(args.rowData)}\'\n    table-height="${args.tableHeight}"\n    pagination="${args.pagination}"\n    pagination-page-size="${args.paginationPageSize}"\n    filter-orientation="${args.filterOrientation}">\n    ${filterTypeGroupComponent}\n</ifx-table>`;\n    return table;\n  }\n}',...SidebarFilter.parameters?.docs?.source}}},TopbarFilter.parameters={...TopbarFilter.parameters,docs:{...TopbarFilter.parameters?.docs,source:{originalSource:'args => {\n  if (args.filterOrientation === \'none\') {\n    const table = `<ifx-table\n    row-height="${args.rowHeight}"\n    cols=\'${JSON.stringify(args.columnDefs)}\'\n    rows=\'${JSON.stringify(args.rowData)}\'\n    table-height="${args.tableHeight}"\n    pagination="${args.pagination}"\n    pagination-page-size="${args.paginationPageSize}"\n    filter-orientation="${args.filterOrientation}">\n</ifx-table>`;\n    return table;\n  } else {\n    //sidebar\n    const filterAccordions = args.columnDefs.map(column => {\n      const uniqueColValues = [...new Set(args.rowData.map(row => row[column.field]))];\n      const filterOptions = uniqueColValues.map((option, index) => {\n        return `<ifx-list-entry slot="slot${index}" label="${option}" value="false"></ifx-list-entry>`;\n      }).join(\'\');\n      return `\n      <ifx-filter-accordion slot="filter-accordion" filter-group-name="${column.field}">\n        <ifx-list slot="list" type="checkbox" name="${column.field}" max-visible-items="6">\n          ${filterOptions}\n        </ifx-list>\n      </ifx-filter-accordion>\n    `;\n    }).join(\'\');\n\n    //topbar\n    const filterComponents = args.columnDefs.map((column, index) => {\n      const uniqueColValues = [...new Set(args.rowData.map(row => row[column.field]))];\n      const options = uniqueColValues.map(option => ({\n        value: option,\n        label: option,\n        selected: false\n      }));\n\n      // Directly use JSON.stringify without replacing quotes\n      const optionsString = JSON.stringify(options);\n      return `\n        <ifx-set-filter slot="filter-component-${index + 1}"\n            options=\'${optionsString}\' \n            filter-label=\'${column.headerName}\'\n            filter-name=\'${column.field}\'\n            type=\'multi-select\'\n            search-enabled=\'true\'>\n          </ifx-set-filter>\n          `;\n    }).join(\'\\n\');\n    const filterTypeGroupComponent = args.filterOrientation === \'sidebar\' ? `<ifx-filter-type-group slot="sidebar-filter">\n        <div slot="filter-search">\n          <ifx-filter-search filter-orientation="sidebar" filter-name="search"></ifx-filter-search>\n        </div>\n        ${filterAccordions}\n    </ifx-filter-type-group>` : `<ifx-filter-bar slot="topbar-filter" max-shown-filters="3">\n        <ifx-filter-search slot="filter-search" filter-orientation="topbar"></ifx-filter-search>\n        ${filterComponents}\n   </ifx-filter-bar>`;\n    const table = `<ifx-table\n    row-height="${args.rowHeight}"\n    cols=\'${JSON.stringify(args.columnDefs)}\'\n    rows=\'${JSON.stringify(args.rowData)}\'\n    table-height="${args.tableHeight}"\n    pagination="${args.pagination}"\n    pagination-page-size="${args.paginationPageSize}"\n    filter-orientation="${args.filterOrientation}">\n    ${filterTypeGroupComponent}\n</ifx-table>`;\n    return table;\n  }\n}',...TopbarFilter.parameters?.docs?.source}}}},"./src/components/table-basic-version/table.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,FixedHeight:()=>FixedHeight,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const columnDefs=[{headerName:"Make",field:"make",sortable:!0,sort:"desc",unSortIcon:!0},{headerName:"Model",field:"model",sortable:!0,unSortIcon:!0},{headerName:"Price",field:"price"},{headerName:"Age",field:"age"}],rowData=[{make:"Toyota",model:"Celica",price:35e3,age:10},{make:"Ford",model:"Mondeo",price:32e3,age:12},{make:"Porsche",model:"Boxster",price:72e3}],__WEBPACK_DEFAULT_EXPORT__={title:"Components/Table (basic)",args:{tableHeight:"auto",rowHeight:40},argTypes:{tableHeight:{table:{type:{summary:"Options",detail:'Default: "auto"\nExample for fixed height: "400px"'}}},rowHeight:{options:["compact","default"],control:{type:"radio"}},columnDefs:{table:{type:{summary:"Column header options",detail:'Standard columns:\nheaderName: "Model", \nfield: "model", \nsortable: true (optional),\nsort: "desc" (optional) => descending sort (show icon)\nunSortIcon: true (optional) => unsorted (show icon)\n\nSpecial columns:\nheaderName: "",\nfield: "button"\nheaderName: "",\nfield: "link"'}}},rowData:{table:{type:{summary:"Row data options",detail:'Standard row values:\nmake: "Toyota", \nmodel: "Celica", \nprice: 35000 \n\nSpecial row values (incl buttons):\nmake: "Porsche",\nmodel: "Boxster",\nprice: "72000",\nbutton: { \ndisabled: false (optional),\nvariant: "outline" (optional)\nsize: "s" (optional),\ntext: "Button"\n...other ifx-button properties\n}'}}}}},DefaultTemplate=args=>`<ifx-basic-table \ncols='${JSON.stringify(args.columnDefs)}' \nrows='${JSON.stringify(args.rowData)}'\ntable-height='${args.tableHeight}'>\n</ifx-basic-table>`,Default=DefaultTemplate.bind({});Default.args={columnDefs,rowData};const FixedHeight=DefaultTemplate.bind({});FixedHeight.args={tableHeight:"400px",columnDefs,rowData};const __namedExportsOrder=["Default","FixedHeight"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => `<ifx-basic-table \ncols='${JSON.stringify(args.columnDefs)}' \nrows='${JSON.stringify(args.rowData)}'\ntable-height='${args.tableHeight}'>\n</ifx-basic-table>`",...Default.parameters?.docs?.source}}},FixedHeight.parameters={...FixedHeight.parameters,docs:{...FixedHeight.parameters?.docs,source:{originalSource:"args => `<ifx-basic-table \ncols='${JSON.stringify(args.columnDefs)}' \nrows='${JSON.stringify(args.rowData)}'\ntable-height='${args.tableHeight}'>\n</ifx-basic-table>`",...FixedHeight.parameters?.docs?.source}}}}}]);