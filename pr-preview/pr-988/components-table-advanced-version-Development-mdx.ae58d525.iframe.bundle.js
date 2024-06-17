/*! For license information please see components-table-advanced-version-Development-mdx.ae58d525.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[9466,4127],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/components/table-advanced-version/Development.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_infineon_design_system_stencil_infineon_design_system_stencil_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_table_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/table-advanced-version/table.stories.ts");function _createMdxContent(props){const _components={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,_home_runner_work_infineon_design_system_stencil_infineon_design_system_stencil_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{of:_table_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"table",children:"Table"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_table_stories__WEBPACK_IMPORTED_MODULE_2__.Pagination,sourceState:"shown"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.H2,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"stories",children:"Stories"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"including-pagination",children:"Including pagination"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_table_stories__WEBPACK_IMPORTED_MODULE_2__.Pagination,sourceState:"shown"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"including-custom-components",children:"Including custom components"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"It is possible to fill table cells with custom Ifx web components.\nCurrently, following components can be included:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Icon Button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Link"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Badge"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Status"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"For this, column definitions need to include the corresponding field name and be passed in the following format:\nRows that should display a button, need to have a reference to the button column and include the desired configuration of the button component."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-javascript",children:"const columnDefsWithButtonCol = [\n  { headerName: 'Model', field: 'model', sortable: true, unSortIcon: true },\n  { headerName: '', field: 'button' }\n  ...\n];\n\n\nconst rowDataWithButtonCol = [\n  {\n    make: 'Porsche', model: 'Boxster', price: 72000, button: {\n      disabled: false, (optional)\n      variant: \"secondary\", (optional)\n      size: \"s\", (optional)\n      target: \"_blank\", (optional)\n      color: \"secondary\", (optional)\n      text: \"Button\"\n      // ... you can extend this as per the properties of `ifx-button`\n    }\n  }\n];\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"button-column",children:"Button column"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_table_stories__WEBPACK_IMPORTED_MODULE_2__.IncludesButtons,sourceState:"shown"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b",{children:"Hint for Vue Developers:"}),"\nThe Radio Button component is not usable in combination with v-model. Instead, use v-bind/v-on."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-js",children:"`<ifx-table \nrow-height='${args.rowHeight}'\ncols='${JSON.stringify(args.columnDefs)}' \nrows='${JSON.stringify(args.rowData)}'>\n</ifx-table>`\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"set-filter",children:"Set filter"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_table_stories__WEBPACK_IMPORTED_MODULE_2__.SetFilter,sourceState:"shown"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Advanced filtering can be done including our set-filter component via a named slot within the table.\nThe set filter can be of type 'text', 'single-select', or 'multi-select'. An additional type to offer filtering using chips will be available in the future.\nFiltering using our select components requires an input array in the following format:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:'const options = [{\n  value: "a",\n  label: "option a",\n  selected: false\n},\n{\n  value: "b",\n  label: "option b",\n  selected: false\n},\n{\n  value: "c",\n  label: "option c",\n  selected: false\n}];\n'})})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_infineon_design_system_stencil_infineon_design_system_stencil_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/components/table-advanced-version/table.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{IncludesButtons:()=>IncludesButtons,Pagination:()=>Pagination,SetFilter:()=>SetFilter,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const columnDefs=[{headerName:"Make",field:"make",sortable:!0,sort:"desc",unSortIcon:!0},{headerName:"Model",field:"model",sortable:!0,unSortIcon:!0},{headerName:"Price",field:"price"},{headerName:"Age",field:"age"}],rowData=[{make:"Toyota",model:"Celica",price:35e3,age:10},{make:"Ford",model:"Mondeo",price:32e3,age:12},{make:"Porsche",model:"Boxster",price:72e3},{make:"Bmw",model:"x",price:72e3},{make:"Mercedes",model:"y",price:72e3},{make:"Ferrari",model:"z",price:72e3},{make:"Chrysler",model:"a",price:72e3},{make:"Range rover",model:"b",price:72e3},{make:"Tesla",model:"x",price:72e3},{make:"Audi",model:"3",price:72e3},{make:"Landrover",model:"x",price:72e3}],__WEBPACK_DEFAULT_EXPORT__={title:"Under Development/Table (advanced)",args:{tableHeight:"auto",pagination:!1,paginationPageSize:10,currentPage:1,rowHeight:40,showLoading:!1},argTypes:{tableHeight:{table:{type:{summary:"Options",detail:'Default: "auto"\nExample for fixed height: "400px"'}}},paginationPageSize:{description:"Results per page: minimum 10 - maximum 30",control:{type:"number",min:10,max:30,step:10}},showLoading:{options:[!0,!1],control:{type:"radio"}},rowHeight:{options:["compact","default"],control:{type:"radio"}},enableFiltering:{options:[!0,!1],control:{type:"radio"}},filterOrientation:{options:["sidebar","topbar"],control:{type:"radio"}},columnDefs:{table:{type:{summary:"Column header options",detail:'Standard columns:\nheaderName: "Model", \nfield: "model", \nsortable: true (optional),\nsort: "desc" (optional) => descending sort (show icon)\nunSortIcon: true (optional) => unsorted (show icon)\n\nSpecial columns:\nheaderName: "",\nfield: "button"\nheaderName: "",\nfield: "link"'}}},rowData:{table:{type:{summary:"Row data options",detail:'Standard row values:\nmake: "Toyota", \nmodel: "Celica", \nprice: 35000 \n\nSpecial row values (incl buttons):\nmake: "Porsche",\nmodel: "Boxster",\nprice: "72000",\nbutton: { \ndisabled: false (optional),\nvariant: "outline" (optional)\nsize: "s" (optional),\ntext: "Button"\n...other ifx-button properties\n}'}}}}},DefaultTemplate=args=>{let columnFilters=args.columnDefs.map((column=>{let uniqueColValues=[...new Set(args.rowData.map((row=>row[column.field])))];return{name:column.field,options:uniqueColValues.map((option=>({label:option,value:option,selected:!1})))}})),ifxTable=document.createElement("ifx-table");ifxTable.setAttribute("row-height",args.rowHeight),ifxTable.setAttribute("cols",JSON.stringify(args.columnDefs)),ifxTable.setAttribute("rows",JSON.stringify(args.rowData)),ifxTable.setAttribute("table-height",args.tableHeight),ifxTable.setAttribute("pagination",args.pagination),ifxTable.setAttribute("pagination-page-size",args.paginationPageSize),ifxTable.setAttribute("enable-filtering",args.enableFiltering),ifxTable.setAttribute("filter-orientation",args.filterOrientation);let filterTypeGroup=document.createElement("ifx-filter-type-group");filterTypeGroup.setAttribute("slot","set-filter");let filterSearch=document.createElement("ifx-filter-search");return filterSearch.setAttribute("slot","filter-search"),filterSearch.setAttribute("filter-name","search"),filterTypeGroup.appendChild(filterSearch),columnFilters.forEach(((columnFilter,_index)=>{let filterAccordion=document.createElement("ifx-filter-accordion");filterAccordion.setAttribute("slot","filter-accordion"),filterAccordion.setAttribute("filter-group-name",columnFilter.name),filterTypeGroup.appendChild(filterAccordion);let filterList=document.createElement("ifx-list");filterList.setAttribute("slot","list"),filterList.setAttribute("type","radio-button"),filterList.setAttribute("name",columnFilter.name),filterList.setAttribute("max-visible-items","6"),filterAccordion.appendChild(filterList),columnFilter.options.forEach(((option,optionIndex)=>{let listEntry=document.createElement("ifx-list-entry");listEntry.setAttribute("slot",`slot${optionIndex}`),listEntry.setAttribute("type","checkbox"),listEntry.setAttribute("label",option.label),listEntry.setAttribute("value",option.selected?"true":"false"),filterList.appendChild(listEntry)}))})),ifxTable.appendChild(filterTypeGroup),ifxTable.outerHTML},Pagination=DefaultTemplate.bind({});Pagination.args={pagination:!0,paginationPageSize:10,rowHeight:"default",columnDefs,rowData,enableFiltering:!1};const IncludesButtons=DefaultTemplate.bind({});IncludesButtons.args={rowHeight:"default",columnDefs:[{headerName:"Make",field:"make",sortable:!0,sort:"desc",unSortIcon:!0},{headerName:"Model",field:"model",sortable:!0,unSortIcon:!0},{headerName:"Price",field:"price"},{headerName:"Age",field:"age"},{headerName:"",field:"button"}],rowData:[{make:"Toyota",model:"Celica",price:35e3,age:10,button:"something about Toyota"},{make:"Ford",model:"Mondeo",price:32e3,age:12,button:"something about Ford"},{make:"Porsche",model:"Boxster",price:72e3,button:{disabled:!1,variant:"secondary",size:"s",target:"_blank",color:"secondary",text:"Button"}}],enableFiltering:!1};const SetFilter=DefaultTemplate.bind({});SetFilter.args={rowHeight:"default",columnDefs,rowData,enableFiltering:!0,filterOrientation:"topbar"},Pagination.parameters={...Pagination.parameters,docs:{...Pagination.parameters?.docs,source:{originalSource:"args => {\n  let columnFilters = args.columnDefs.map(column => {\n    let uniqueColValues = [...new Set(args.rowData.map(row => row[column.field]))];\n    return {\n      name: column.field,\n      options: uniqueColValues.map(option => {\n        return {\n          label: option,\n          value: option,\n          selected: false\n        };\n      })\n    };\n  });\n\n  // Create main table element\n  let ifxTable = document.createElement('ifx-table');\n  ifxTable.setAttribute('row-height', args.rowHeight);\n  ifxTable.setAttribute('cols', JSON.stringify(args.columnDefs));\n  ifxTable.setAttribute('rows', JSON.stringify(args.rowData));\n  ifxTable.setAttribute('table-height', args.tableHeight);\n  ifxTable.setAttribute('pagination', args.pagination);\n  ifxTable.setAttribute('pagination-page-size', args.paginationPageSize);\n  ifxTable.setAttribute('enable-filtering', args.enableFiltering);\n  ifxTable.setAttribute('filter-orientation', args.filterOrientation);\n\n  // Create filter-type-group element\n  let filterTypeGroup = document.createElement('ifx-filter-type-group');\n  filterTypeGroup.setAttribute('slot', 'set-filter');\n\n  // Create filter-search element and append to filterTypeGroup\n  let filterSearch = document.createElement('ifx-filter-search');\n  filterSearch.setAttribute('slot', 'filter-search');\n  filterSearch.setAttribute('filter-name', 'search');\n  filterTypeGroup.appendChild(filterSearch);\n\n  // // Create filter-search element and append to filterTypeGroup\n  // let filterSearch1 = document.createElement('ifx-filter-search');\n  // filterSearch.setAttribute('slot', 'filter-search');\n  // filterSearch.setAttribute('filter-name', 'search');\n  // filterTypeGroup.appendChild(filterSearch1);\n\n  // Create filter-accordion elements and append to filterTypeGroup\n  columnFilters.forEach((columnFilter, _index) => {\n    let filterAccordion = document.createElement('ifx-filter-accordion');\n    filterAccordion.setAttribute('slot', 'filter-accordion');\n    filterAccordion.setAttribute('filter-group-name', columnFilter.name);\n    filterTypeGroup.appendChild(filterAccordion);\n\n    // Create ifx-list element and append to filterAccordion\n    let filterList = document.createElement('ifx-list');\n    filterList.setAttribute('slot', 'list');\n    filterList.setAttribute('type', 'radio-button');\n    filterList.setAttribute('name', columnFilter.name);\n    filterList.setAttribute('max-visible-items', '6');\n    filterAccordion.appendChild(filterList);\n\n    // Create ifx-list-entry elements and append to filterList\n    columnFilter.options.forEach((option, optionIndex) => {\n      let listEntry = document.createElement('ifx-list-entry');\n      listEntry.setAttribute('slot', `slot${optionIndex}`);\n      listEntry.setAttribute('type', 'checkbox');\n      listEntry.setAttribute('label', option.label);\n      listEntry.setAttribute('value', option.selected ? 'true' : 'false');\n      filterList.appendChild(listEntry);\n    });\n  });\n\n  // Append filterTypeGroup to ifxTable\n  ifxTable.appendChild(filterTypeGroup);\n  return ifxTable.outerHTML;\n}",...Pagination.parameters?.docs?.source}}},IncludesButtons.parameters={...IncludesButtons.parameters,docs:{...IncludesButtons.parameters?.docs,source:{originalSource:"args => {\n  let columnFilters = args.columnDefs.map(column => {\n    let uniqueColValues = [...new Set(args.rowData.map(row => row[column.field]))];\n    return {\n      name: column.field,\n      options: uniqueColValues.map(option => {\n        return {\n          label: option,\n          value: option,\n          selected: false\n        };\n      })\n    };\n  });\n\n  // Create main table element\n  let ifxTable = document.createElement('ifx-table');\n  ifxTable.setAttribute('row-height', args.rowHeight);\n  ifxTable.setAttribute('cols', JSON.stringify(args.columnDefs));\n  ifxTable.setAttribute('rows', JSON.stringify(args.rowData));\n  ifxTable.setAttribute('table-height', args.tableHeight);\n  ifxTable.setAttribute('pagination', args.pagination);\n  ifxTable.setAttribute('pagination-page-size', args.paginationPageSize);\n  ifxTable.setAttribute('enable-filtering', args.enableFiltering);\n  ifxTable.setAttribute('filter-orientation', args.filterOrientation);\n\n  // Create filter-type-group element\n  let filterTypeGroup = document.createElement('ifx-filter-type-group');\n  filterTypeGroup.setAttribute('slot', 'set-filter');\n\n  // Create filter-search element and append to filterTypeGroup\n  let filterSearch = document.createElement('ifx-filter-search');\n  filterSearch.setAttribute('slot', 'filter-search');\n  filterSearch.setAttribute('filter-name', 'search');\n  filterTypeGroup.appendChild(filterSearch);\n\n  // // Create filter-search element and append to filterTypeGroup\n  // let filterSearch1 = document.createElement('ifx-filter-search');\n  // filterSearch.setAttribute('slot', 'filter-search');\n  // filterSearch.setAttribute('filter-name', 'search');\n  // filterTypeGroup.appendChild(filterSearch1);\n\n  // Create filter-accordion elements and append to filterTypeGroup\n  columnFilters.forEach((columnFilter, _index) => {\n    let filterAccordion = document.createElement('ifx-filter-accordion');\n    filterAccordion.setAttribute('slot', 'filter-accordion');\n    filterAccordion.setAttribute('filter-group-name', columnFilter.name);\n    filterTypeGroup.appendChild(filterAccordion);\n\n    // Create ifx-list element and append to filterAccordion\n    let filterList = document.createElement('ifx-list');\n    filterList.setAttribute('slot', 'list');\n    filterList.setAttribute('type', 'radio-button');\n    filterList.setAttribute('name', columnFilter.name);\n    filterList.setAttribute('max-visible-items', '6');\n    filterAccordion.appendChild(filterList);\n\n    // Create ifx-list-entry elements and append to filterList\n    columnFilter.options.forEach((option, optionIndex) => {\n      let listEntry = document.createElement('ifx-list-entry');\n      listEntry.setAttribute('slot', `slot${optionIndex}`);\n      listEntry.setAttribute('type', 'checkbox');\n      listEntry.setAttribute('label', option.label);\n      listEntry.setAttribute('value', option.selected ? 'true' : 'false');\n      filterList.appendChild(listEntry);\n    });\n  });\n\n  // Append filterTypeGroup to ifxTable\n  ifxTable.appendChild(filterTypeGroup);\n  return ifxTable.outerHTML;\n}",...IncludesButtons.parameters?.docs?.source}}},SetFilter.parameters={...SetFilter.parameters,docs:{...SetFilter.parameters?.docs,source:{originalSource:"args => {\n  let columnFilters = args.columnDefs.map(column => {\n    let uniqueColValues = [...new Set(args.rowData.map(row => row[column.field]))];\n    return {\n      name: column.field,\n      options: uniqueColValues.map(option => {\n        return {\n          label: option,\n          value: option,\n          selected: false\n        };\n      })\n    };\n  });\n\n  // Create main table element\n  let ifxTable = document.createElement('ifx-table');\n  ifxTable.setAttribute('row-height', args.rowHeight);\n  ifxTable.setAttribute('cols', JSON.stringify(args.columnDefs));\n  ifxTable.setAttribute('rows', JSON.stringify(args.rowData));\n  ifxTable.setAttribute('table-height', args.tableHeight);\n  ifxTable.setAttribute('pagination', args.pagination);\n  ifxTable.setAttribute('pagination-page-size', args.paginationPageSize);\n  ifxTable.setAttribute('enable-filtering', args.enableFiltering);\n  ifxTable.setAttribute('filter-orientation', args.filterOrientation);\n\n  // Create filter-type-group element\n  let filterTypeGroup = document.createElement('ifx-filter-type-group');\n  filterTypeGroup.setAttribute('slot', 'set-filter');\n\n  // Create filter-search element and append to filterTypeGroup\n  let filterSearch = document.createElement('ifx-filter-search');\n  filterSearch.setAttribute('slot', 'filter-search');\n  filterSearch.setAttribute('filter-name', 'search');\n  filterTypeGroup.appendChild(filterSearch);\n\n  // // Create filter-search element and append to filterTypeGroup\n  // let filterSearch1 = document.createElement('ifx-filter-search');\n  // filterSearch.setAttribute('slot', 'filter-search');\n  // filterSearch.setAttribute('filter-name', 'search');\n  // filterTypeGroup.appendChild(filterSearch1);\n\n  // Create filter-accordion elements and append to filterTypeGroup\n  columnFilters.forEach((columnFilter, _index) => {\n    let filterAccordion = document.createElement('ifx-filter-accordion');\n    filterAccordion.setAttribute('slot', 'filter-accordion');\n    filterAccordion.setAttribute('filter-group-name', columnFilter.name);\n    filterTypeGroup.appendChild(filterAccordion);\n\n    // Create ifx-list element and append to filterAccordion\n    let filterList = document.createElement('ifx-list');\n    filterList.setAttribute('slot', 'list');\n    filterList.setAttribute('type', 'radio-button');\n    filterList.setAttribute('name', columnFilter.name);\n    filterList.setAttribute('max-visible-items', '6');\n    filterAccordion.appendChild(filterList);\n\n    // Create ifx-list-entry elements and append to filterList\n    columnFilter.options.forEach((option, optionIndex) => {\n      let listEntry = document.createElement('ifx-list-entry');\n      listEntry.setAttribute('slot', `slot${optionIndex}`);\n      listEntry.setAttribute('type', 'checkbox');\n      listEntry.setAttribute('label', option.label);\n      listEntry.setAttribute('value', option.selected ? 'true' : 'false');\n      filterList.appendChild(listEntry);\n    });\n  });\n\n  // Append filterTypeGroup to ifxTable\n  ifxTable.appendChild(filterTypeGroup);\n  return ifxTable.outerHTML;\n}",...SetFilter.parameters?.docs?.source}}};const __namedExportsOrder=["Pagination","IncludesButtons","SetFilter"]},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);