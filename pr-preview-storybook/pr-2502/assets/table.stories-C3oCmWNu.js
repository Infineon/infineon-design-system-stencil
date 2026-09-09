import{b as t}from"./iframe-CDibF9dm.js";const b=[{headerName:"ID",field:"id",sortable:!0,sort:"desc",unSortIcon:!0},{headerName:"Item",field:"item",sortable:!0,unSortIcon:!0},{headerName:"Price",field:"price"},{headerName:"Date",field:"date"}],d=[{id:"1",item:"Item 1",price:356,date:"2025-06-25"},{id:"2",item:"Item 2",price:55,date:"2025-03-26"},{id:"3",item:"Item 3",price:24},{id:"4",item:"x",price:874},{id:"5",item:"x",price:689},{id:"6",item:"x",price:46},{id:"7",item:"Item 7",price:421},{id:"8",item:"Item 8",price:17},{id:"9",item:"x",price:752},{id:"10",item:"Item 10",price:73},{id:"11",item:"x",price:94}],O=[{id:1,item:`Item 1
 Item 1.2
 Item 1.3`,price:356,date:"2025-06-25"},{id:2,item:"Item 2",price:55,date:"2025-03-26"},{id:3,item:"Item 3",price:24},{id:4,item:"x",price:874},{id:5,item:"x",price:689},{id:6,item:"x",price:46},{id:7,item:"Item 7",price:421},{id:8,item:"Item 8",price:17},{id:9,item:"x",price:752},{id:10,item:"Item 10",price:73},{id:11,item:`Item 11
 Item 11.2`,price:94}],I=[{headerName:"ID",field:"id",sortable:!0,sort:"desc",unSortIcon:!0},{headerName:"Item",field:"item",sortable:!0,unSortIcon:!0},{headerName:"Price",field:"price"},{headerName:"Date",field:"date"},{headerName:"",field:"button"}],w=[{headerName:"ID",field:"id",sortable:!0,sort:"desc",unSortIcon:!0},{headerName:"Item",field:"item",sortable:!0,unSortIcon:!0},{headerName:"Price",field:"price"},{headerName:"Date",field:"date"},{headerName:"Status",field:"status"}],N=[{headerName:"ID",field:"id",sortable:!0,sort:"desc",unSortIcon:!0},{headerName:"Item",field:"item",sortable:!0,unSortIcon:!0},{headerName:"Price",field:"price"},{headerName:"Date",field:"date"},{headerName:"Link",field:"link"}],C=[{id:1,item:"Item 1",price:356,date:"2025-06-25",button:{disabled:!1,variant:"secondary",size:"s",target:"_blank",href:"https://www.w3schools.com/",theme:"default",type:"button",fullWidth:!0,text:"Button"}},{id:2,item:"Item 2",price:55,date:"2025-03-26",button:{disabled:!1,variant:"secondary",size:"s",target:"_blank",href:"https://www.w3schools.com/",theme:"default",type:"button",fullWidth:!0,text:"Button"}},{id:3,item:"Item 3",price:24,button:{disabled:!1,variant:"secondary",size:"s",target:"_blank",href:"https://www.w3schools.com/",theme:"default",type:"button",fullWidth:!0,text:"Button"}}],V=[{id:1,item:"Item 1",price:356,date:"2025-06-25",status:{label:"Available",color:"green-500",border:!0}},{id:2,item:"Item 2",price:55,date:"2025-03-26",status:{label:"Out of Stock",color:"red-500",border:!0}},{id:3,item:"Item 3",price:24,status:{label:"Coming Soon",color:"orange-500",border:!0}}],H=[{id:1,item:"Item 1",price:356,date:"2025-06-25",link:{disabled:!1,variant:"bold",size:"s",target:"_blank",href:"https://www.google.com/",text:"Link"}},{id:2,item:"Item 2",price:55,date:"2025-03-26",link:{disabled:!1,variant:"underlined",size:"s",target:"_blank",href:"https://www.yahoo.com/",text:"Link"}},{id:3,item:"Item 3",price:24,link:{disabled:!1,variant:"title",size:"s",target:"_blank",href:"https://www.bing.com/",text:"Link"}}],J={title:"Components/Table (advanced)",args:{tableHeight:"auto",pagination:!0,serverSidePagination:!1,rowHeight:40,showLoading:!1,variant:"default",headline:"Matching results",headlineNumber:0,enableSelection:!1,fitColumns:!1,columnMinWidth:200,columnWidth:100,columnValuePosition:"left"},argTypes:{tableHeight:{description:"Set the height of the table.",table:{category:"ifx-table props",type:{summary:"Options",detail:`Default: "auto"
Example for fixed height: "400px"`}}},pagination:{description:"Show pagination control.",control:{type:"boolean"},table:{category:"ifx-table props",defaultValue:{summary:!0},type:{summary:"Boolean"}}},serverSidePagination:{description:"Enables server-side pagination.",control:{type:"boolean"},table:{category:"ifx-table props",defaultValue:{summary:!0},type:{summary:"Boolean"}}},paginationItemsPerPage:{description:"Sets the items per page of the table pagination",table:{category:"ifx-table props"}},showLoading:{description:"Show loading spinner.",options:[!0,!1],control:{type:"radio"},table:{category:"ifx-table props",defaultValue:{summary:!1}}},rowHeight:{description:"Set the height of the rows.",options:["compact","default"],control:{type:"radio"},table:{category:"ifx-table props",defaultValue:{summary:"default"}}},enableSelection:{description:"Enables the selection of rows via a checkbox",options:[!0,!1],control:{type:"radio"},table:{category:"ifx-table props",defaultValue:{summary:"default"}}},filterOrientation:{description:"Set the filter orientation.",options:["sidebar","topbar","none"],control:{type:"radio"},table:{category:"ifx-table props",defaultValue:{summary:"none"}}},cols:{description:"Column header options",name:"cols",table:{category:"ifx-table props",type:{summary:"Column header options",detail:`Standard columns:
headerName: "Model", 
field: "model", 
sortable: true (optional),
sort: "desc" (optional) => descending sort (show icon)
unSortIcon: true (optional) => unsorted (show icon)

Special columns:
headerName: "",
field: "button"
headerName: "",
field: "link"`}}},fitColumns:{description:"Adjusts column width to fit content",table:{category:"ifx-table props",type:{summary:"Adjusts column width to content"}}},columnMinWidth:{description:"Sets the min width of all columns. 100px by default.",table:{category:"ifx-table props",type:{summary:"Sets the min width of all columns"}}},columnWidth:{description:"Sets the width of all columns.",table:{category:"ifx-table props",type:{summary:"Sets the width of all columns"}}},rows:{description:"Row data options",name:"rows",table:{category:"ifx-table props",type:{summary:"Row data options",detail:`Standard row values:
id: 1, 
item: "Item 1", 
price: 356 

Special row values (incl buttons):
id: 2,
item: "Item 2",
price: "55",
button: { 
disabled: false (optional),
variant: "outline" (optional)
size: "s" (optional),
text: "Button"
...other ifx-button properties
}`}}},variant:{description:"Sets the variant of the table.",table:{category:"ifx-table props",defaultValue:{summary:"default"}},options:["default","zebra"],control:{type:"radio"}},headline:{description:"Sets the headline of the table.",table:{category:"ifx-table props",defaultValue:{summary:"matching results"}}},headlineNumber:{description:"Sets the number in brackets right of the headline. When null, headline number is automatically set to the number of rows",table:{category:"ifx-table props",defaultValue:{summary:"left"}}},columnValuePosition:{options:["left","center"],control:{type:"radio"},description:"Set the position of the column values.",table:{category:"ifx-table props",defaultValue:{summary:"left"},type:{summary:"left | center"}}},ifxSelectionChange:{action:"ifxSelectionChange",description:"A custom event triggered on checkbox selection",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxSelectionChange={handleInput}
Vue:@ifxSelectionChange="handleInput"
Angular:(ifxSelectionChange)="handleInput()"
VanillaJs:.addEventListener("ifxSelectionChange", (event) => {//handle input});`}}},ifxSortChange:{action:"ifxSortChange",description:"A custom event emitted on column sort change",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxSortChange={handleInput}
Vue:@ifxIfxSortChange="handleInput"
Angular:(ifxIfxSortChange)="handleInput()"
VanillaJs:.addEventListener("ifxIfxSortChange", (event) => {//handle input});`}}},showMoreFilters:{description:"Public method that toggles the Topbar Filters. Accepts true or false as arguments. Accessible from the ifx-filter-bar component",table:{category:"ifx-table public methods"}}}},$=e=>{if(e.filterOrientation==="none")return t`<ifx-table
    row-height="${e.rowHeight}"
    cols='${JSON.stringify(e.cols)}'
    rows='${JSON.stringify(e.rows)}'
    ?enable-selection="${e.enableSelection}"
    table-height="${e.tableHeight}"
    pagination="${e.pagination}"
    ?server-side-pagination="${e.serverSidePagination}"
    pagination-items-per-page='${e.paginationItemsPerPage}'
    filter-orientation="${e.filterOrientation}"
    variant='${e.variant}'
    fit-column='${e.fitColumns}'
    column-min-width='${e.columnMinWidth}'
    column-width='${e.columnWidth}'
    headline="${e.headline}"
    headline-number="${e.headlineNumber}"
    column-value-position="${e.columnValuePosition}">
</ifx-table>`;{const a=e.cols.map(n=>{const v=[...new Set(e.rows.map(h=>h[n.field]))].map((h,x)=>t`<ifx-list-entry slot="slot${x}" label="${h}" value="false"></ifx-list-entry>`);return t`
      <ifx-filter-accordion slot="filter-accordion" filter-group-name="${n.field}">
        <ifx-list slot="list" type="checkbox" name="${n.field}" max-visible-items="6">
          ${v}
        </ifx-list>
      </ifx-filter-accordion>
    `}),S=e.cols.map((n,y)=>{const h=[...new Set(e.rows.map(i=>i[n.field]))].filter(i=>i!=null&&i!=="").map(i=>({value:i,label:i,selected:!1})),x=JSON.stringify(h);return t`
        <ifx-set-filter slot="filter-component-${y+1}"
            options='${x}'
            filter-label='${n.headerName}'
            filter-name='${n.field}'
            type='multi-select'
            placeholder='Select ${n.headerName}'>
          </ifx-set-filter>
          `}),P=e.filterOrientation==="sidebar"?t`<ifx-filter-type-group slot="sidebar-filter">
        <div slot="filter-search">
          <ifx-filter-search filter-orientation="sidebar" filter-name="search"></ifx-filter-search>
        </div>
        ${a}
    </ifx-filter-type-group>`:t`<ifx-filter-bar slot="topbar-filter" max-shown-filters="3">
        <ifx-filter-search slot="filter-search" filter-orientation="topbar"></ifx-filter-search>
        ${S}
   </ifx-filter-bar>`;return t`<ifx-table
    headline="${e.headline}"
    row-height="${e.rowHeight}"
    cols='${JSON.stringify(e.cols)}'
    rows='${JSON.stringify(e.rows)}'
    table-height="${e.tableHeight}"
    pagination="${e.pagination}"
    pagination-items-per-page='${e.paginationItemsPerPage}'
    filter-orientation="${e.filterOrientation}"
    column-value-position="${e.columnValuePosition}">
    ${P}
</ifx-table>`}},o=$.bind({});o.args={pagination:!0,paginationItemsPerPage:'[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}, {"value":"all","selected":false}]',rowHeight:"default",enableSelection:!1,cols:b,rows:d,filterOrientation:"none"};const r=$.bind({});r.args={pagination:!0,paginationItemsPerPage:'[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}, {"value":"all","selected":false}]',rowHeight:"default",cols:b,rows:d,filterOrientation:"none"};const l=$.bind({});l.args={pagination:!0,serverSidePagination:!0,paginationItemsPerPage:'[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}, {"value":"all","selected":false}]',rowHeight:"default",cols:b,rows:d,filterOrientation:"none"};const k=e=>t`
    <ifx-table
      row-height="${e.rowHeight}"
      cols='${JSON.stringify(e.cols)}'
      rows='${JSON.stringify(e.rows)}'
      table-height="${e.tableHeight}"
      pagination="${e.pagination}"
      pagination-items-per-page='${e.paginationItemsPerPage}'
      filter-orientation="${e.filterOrientation}"
      column-value-position="${e.columnValuePosition}">
    </ifx-table>`,W=e=>t`
    <ifx-table
      row-height="${e.rowHeight}"
      cols='${JSON.stringify(e.cols)}'
      rows='${JSON.stringify(e.rows)}'
      table-height="${e.tableHeight}"
      pagination="${e.pagination}"
      pagination-items-per-page='${e.paginationItemsPerPage}'
      filter-orientation="${e.filterOrientation}"
      column-value-position="${e.columnValuePosition}">
    </ifx-table>`,T=e=>t`
    <ifx-table
      row-height="${e.rowHeight}"
      cols='${JSON.stringify(e.cols)}'
      rows='${JSON.stringify(e.rows)}'
      table-height="${e.tableHeight}"
      pagination="${e.pagination}"
      pagination-items-per-page='${e.paginationItemsPerPage}'
      filter-orientation="${e.filterOrientation}"
      column-value-position="${e.columnValuePosition}">
    </ifx-table>`,q=e=>t`
    <ifx-table
      row-height="${e.rowHeight}"
      cols='${JSON.stringify(e.cols)}'
      rows='${JSON.stringify(e.rows)}'
      table-height="${e.tableHeight}"
      pagination="${e.pagination}"
      pagination-items-per-page='${e.paginationItemsPerPage}'
      filter-orientation="${e.filterOrientation}"
      column-value-position="${e.columnValuePosition}">
    </ifx-table>`,B=e=>t`
    <ifx-table
      headline="${e.headline}"
      row-height="${e.rowHeight}"
      cols='${JSON.stringify(e.cols)}'
      rows='${JSON.stringify(e.rows)}'
      table-height="${e.tableHeight}"
      pagination="${e.pagination}"
      pagination-items-per-page='${e.paginationItemsPerPage}'
      filter-orientation="none"
      column-value-position="${e.columnValuePosition}">
      <ifx-button slot="inner-button-left">Button</ifx-button>
      <ifx-button slot="inner-button-right">Button</ifx-button>
    </ifx-table>`,s=k.bind({});s.args={rowHeight:"default",cols:I,rows:C,filterOrientation:"none",pagination:!0,paginationItemsPerPage:'[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}, {"value":"all","selected":false}]'};const c=W.bind({});c.args={rowHeight:"default",cols:w,rows:V,filterOrientation:"none",pagination:!0,paginationItemsPerPage:'[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}, {"value":"all","selected":false}]'};const f=T.bind({});f.args={rowHeight:"default",cols:N,rows:H,filterOrientation:"none",pagination:!0,paginationItemsPerPage:'[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}, {"value":"all","selected":false}]'};const u=q.bind({});u.args={rowHeight:"default",cols:w,rows:O,filterOrientation:"none",pagination:!0,paginationItemsPerPage:'[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}, {"value":"all","selected":false}]'};const p=B.bind({});p.args={headline:"Matching results",rowHeight:"default",cols:w,rows:d,filterOrientation:"topbar",pagination:!0,paginationItemsPerPage:'[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}, {"value":"all","selected":false}]'};const g=$.bind({});g.args={rowHeight:"default",cols:b,rows:d,filterOrientation:"sidebar",pagination:!0,paginationItemsPerPage:'[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}, {"value":"all","selected":false}]'};const m=$.bind({});m.args={headline:"Matching results",rowHeight:"default",cols:b,rows:d,filterOrientation:"topbar",pagination:!0,paginationItemsPerPage:'[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}, {"value":"all","selected":false}]'};const A=["DefaultState","Pagination","ServerSidePagination","IncludesButtons","IncludesStatus","IncludesLink","IncludesBreakingline","IncludesInnerButtons","SidebarFilter","TopbarFilter"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: any) => {
  if (args.filterOrientation === 'none') {
    const table = html\`<ifx-table
    row-height="\${args.rowHeight}"
    cols='\${JSON.stringify(args.cols)}'
    rows='\${JSON.stringify(args.rows)}'
    ?enable-selection="\${args.enableSelection}"
    table-height="\${args.tableHeight}"
    pagination="\${args.pagination}"
    ?server-side-pagination="\${args.serverSidePagination}"
    pagination-items-per-page='\${args.paginationItemsPerPage}'
    filter-orientation="\${args.filterOrientation}"
    variant='\${args.variant}'
    fit-column='\${args.fitColumns}'
    column-min-width='\${args.columnMinWidth}'
    column-width='\${args.columnWidth}'
    headline="\${args.headline}"
    headline-number="\${args.headlineNumber}"
    column-value-position="\${args.columnValuePosition}">
</ifx-table>\`;
    return table;
  } else {
    //sidebar
    const filterAccordions = args.cols.map((column: any) => {
      const uniqueColValues = [...new Set(args.rows.map((row: any) => row[column.field]))];
      const filterOptions = uniqueColValues.map((option, index) => {
        return html\`<ifx-list-entry slot="slot\${index}" label="\${option}" value="false"></ifx-list-entry>\`;
      });
      return html\`
      <ifx-filter-accordion slot="filter-accordion" filter-group-name="\${column.field}">
        <ifx-list slot="list" type="checkbox" name="\${column.field}" max-visible-items="6">
          \${filterOptions}
        </ifx-list>
      </ifx-filter-accordion>
    \`;
    });

    //topbar
    const filterComponents = args.cols.map((column: any, index: any) => {
      const uniqueColValues = [...new Set(args.rows.map((row: any) => row[column.field]))].filter(v => v !== undefined && v !== null && v !== '');
      const options = uniqueColValues.map(option => ({
        value: option,
        label: option,
        selected: false
      }));
      const optionsString = JSON.stringify(options);
      return html\`
        <ifx-set-filter slot="filter-component-\${index + 1}"
            options='\${optionsString}'
            filter-label='\${column.headerName}'
            filter-name='\${column.field}'
            type='multi-select'
            placeholder='Select \${column.headerName}'>
          </ifx-set-filter>
          \`;
    });
    const filterTypeGroupComponent = args.filterOrientation === 'sidebar' ? html\`<ifx-filter-type-group slot="sidebar-filter">
        <div slot="filter-search">
          <ifx-filter-search filter-orientation="sidebar" filter-name="search"></ifx-filter-search>
        </div>
        \${filterAccordions}
    </ifx-filter-type-group>\` : html\`<ifx-filter-bar slot="topbar-filter" max-shown-filters="3">
        <ifx-filter-search slot="filter-search" filter-orientation="topbar"></ifx-filter-search>
        \${filterComponents}
   </ifx-filter-bar>\`;
    const table = html\`<ifx-table
    headline="\${args.headline}"
    row-height="\${args.rowHeight}"
    cols='\${JSON.stringify(args.cols)}'
    rows='\${JSON.stringify(args.rows)}'
    table-height="\${args.tableHeight}"
    pagination="\${args.pagination}"
    pagination-items-per-page='\${args.paginationItemsPerPage}'
    filter-orientation="\${args.filterOrientation}"
    column-value-position="\${args.columnValuePosition}">
    \${filterTypeGroupComponent}
</ifx-table>\`;
    return table;
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: any) => {
  if (args.filterOrientation === 'none') {
    const table = html\`<ifx-table
    row-height="\${args.rowHeight}"
    cols='\${JSON.stringify(args.cols)}'
    rows='\${JSON.stringify(args.rows)}'
    ?enable-selection="\${args.enableSelection}"
    table-height="\${args.tableHeight}"
    pagination="\${args.pagination}"
    ?server-side-pagination="\${args.serverSidePagination}"
    pagination-items-per-page='\${args.paginationItemsPerPage}'
    filter-orientation="\${args.filterOrientation}"
    variant='\${args.variant}'
    fit-column='\${args.fitColumns}'
    column-min-width='\${args.columnMinWidth}'
    column-width='\${args.columnWidth}'
    headline="\${args.headline}"
    headline-number="\${args.headlineNumber}"
    column-value-position="\${args.columnValuePosition}">
</ifx-table>\`;
    return table;
  } else {
    //sidebar
    const filterAccordions = args.cols.map((column: any) => {
      const uniqueColValues = [...new Set(args.rows.map((row: any) => row[column.field]))];
      const filterOptions = uniqueColValues.map((option, index) => {
        return html\`<ifx-list-entry slot="slot\${index}" label="\${option}" value="false"></ifx-list-entry>\`;
      });
      return html\`
      <ifx-filter-accordion slot="filter-accordion" filter-group-name="\${column.field}">
        <ifx-list slot="list" type="checkbox" name="\${column.field}" max-visible-items="6">
          \${filterOptions}
        </ifx-list>
      </ifx-filter-accordion>
    \`;
    });

    //topbar
    const filterComponents = args.cols.map((column: any, index: any) => {
      const uniqueColValues = [...new Set(args.rows.map((row: any) => row[column.field]))].filter(v => v !== undefined && v !== null && v !== '');
      const options = uniqueColValues.map(option => ({
        value: option,
        label: option,
        selected: false
      }));
      const optionsString = JSON.stringify(options);
      return html\`
        <ifx-set-filter slot="filter-component-\${index + 1}"
            options='\${optionsString}'
            filter-label='\${column.headerName}'
            filter-name='\${column.field}'
            type='multi-select'
            placeholder='Select \${column.headerName}'>
          </ifx-set-filter>
          \`;
    });
    const filterTypeGroupComponent = args.filterOrientation === 'sidebar' ? html\`<ifx-filter-type-group slot="sidebar-filter">
        <div slot="filter-search">
          <ifx-filter-search filter-orientation="sidebar" filter-name="search"></ifx-filter-search>
        </div>
        \${filterAccordions}
    </ifx-filter-type-group>\` : html\`<ifx-filter-bar slot="topbar-filter" max-shown-filters="3">
        <ifx-filter-search slot="filter-search" filter-orientation="topbar"></ifx-filter-search>
        \${filterComponents}
   </ifx-filter-bar>\`;
    const table = html\`<ifx-table
    headline="\${args.headline}"
    row-height="\${args.rowHeight}"
    cols='\${JSON.stringify(args.cols)}'
    rows='\${JSON.stringify(args.rows)}'
    table-height="\${args.tableHeight}"
    pagination="\${args.pagination}"
    pagination-items-per-page='\${args.paginationItemsPerPage}'
    filter-orientation="\${args.filterOrientation}"
    column-value-position="\${args.columnValuePosition}">
    \${filterTypeGroupComponent}
</ifx-table>\`;
    return table;
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: any) => {
  if (args.filterOrientation === 'none') {
    const table = html\`<ifx-table
    row-height="\${args.rowHeight}"
    cols='\${JSON.stringify(args.cols)}'
    rows='\${JSON.stringify(args.rows)}'
    ?enable-selection="\${args.enableSelection}"
    table-height="\${args.tableHeight}"
    pagination="\${args.pagination}"
    ?server-side-pagination="\${args.serverSidePagination}"
    pagination-items-per-page='\${args.paginationItemsPerPage}'
    filter-orientation="\${args.filterOrientation}"
    variant='\${args.variant}'
    fit-column='\${args.fitColumns}'
    column-min-width='\${args.columnMinWidth}'
    column-width='\${args.columnWidth}'
    headline="\${args.headline}"
    headline-number="\${args.headlineNumber}"
    column-value-position="\${args.columnValuePosition}">
</ifx-table>\`;
    return table;
  } else {
    //sidebar
    const filterAccordions = args.cols.map((column: any) => {
      const uniqueColValues = [...new Set(args.rows.map((row: any) => row[column.field]))];
      const filterOptions = uniqueColValues.map((option, index) => {
        return html\`<ifx-list-entry slot="slot\${index}" label="\${option}" value="false"></ifx-list-entry>\`;
      });
      return html\`
      <ifx-filter-accordion slot="filter-accordion" filter-group-name="\${column.field}">
        <ifx-list slot="list" type="checkbox" name="\${column.field}" max-visible-items="6">
          \${filterOptions}
        </ifx-list>
      </ifx-filter-accordion>
    \`;
    });

    //topbar
    const filterComponents = args.cols.map((column: any, index: any) => {
      const uniqueColValues = [...new Set(args.rows.map((row: any) => row[column.field]))].filter(v => v !== undefined && v !== null && v !== '');
      const options = uniqueColValues.map(option => ({
        value: option,
        label: option,
        selected: false
      }));
      const optionsString = JSON.stringify(options);
      return html\`
        <ifx-set-filter slot="filter-component-\${index + 1}"
            options='\${optionsString}'
            filter-label='\${column.headerName}'
            filter-name='\${column.field}'
            type='multi-select'
            placeholder='Select \${column.headerName}'>
          </ifx-set-filter>
          \`;
    });
    const filterTypeGroupComponent = args.filterOrientation === 'sidebar' ? html\`<ifx-filter-type-group slot="sidebar-filter">
        <div slot="filter-search">
          <ifx-filter-search filter-orientation="sidebar" filter-name="search"></ifx-filter-search>
        </div>
        \${filterAccordions}
    </ifx-filter-type-group>\` : html\`<ifx-filter-bar slot="topbar-filter" max-shown-filters="3">
        <ifx-filter-search slot="filter-search" filter-orientation="topbar"></ifx-filter-search>
        \${filterComponents}
   </ifx-filter-bar>\`;
    const table = html\`<ifx-table
    headline="\${args.headline}"
    row-height="\${args.rowHeight}"
    cols='\${JSON.stringify(args.cols)}'
    rows='\${JSON.stringify(args.rows)}'
    table-height="\${args.tableHeight}"
    pagination="\${args.pagination}"
    pagination-items-per-page='\${args.paginationItemsPerPage}'
    filter-orientation="\${args.filterOrientation}"
    column-value-position="\${args.columnValuePosition}">
    \${filterTypeGroupComponent}
</ifx-table>\`;
    return table;
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: any) => {
  const table = html\`
    <ifx-table
      row-height="\${args.rowHeight}"
      cols='\${JSON.stringify(args.cols)}'
      rows='\${JSON.stringify(args.rows)}'
      table-height="\${args.tableHeight}"
      pagination="\${args.pagination}"
      pagination-items-per-page='\${args.paginationItemsPerPage}'
      filter-orientation="\${args.filterOrientation}"
      column-value-position="\${args.columnValuePosition}">
    </ifx-table>\`;
  return table;
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: any) => {
  const table = html\`
    <ifx-table
      row-height="\${args.rowHeight}"
      cols='\${JSON.stringify(args.cols)}'
      rows='\${JSON.stringify(args.rows)}'
      table-height="\${args.tableHeight}"
      pagination="\${args.pagination}"
      pagination-items-per-page='\${args.paginationItemsPerPage}'
      filter-orientation="\${args.filterOrientation}"
      column-value-position="\${args.columnValuePosition}">
    </ifx-table>\`;
  return table;
}`,...c.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`(args: any) => {
  const table = html\`
    <ifx-table
      row-height="\${args.rowHeight}"
      cols='\${JSON.stringify(args.cols)}'
      rows='\${JSON.stringify(args.rows)}'
      table-height="\${args.tableHeight}"
      pagination="\${args.pagination}"
      pagination-items-per-page='\${args.paginationItemsPerPage}'
      filter-orientation="\${args.filterOrientation}"
      column-value-position="\${args.columnValuePosition}">
    </ifx-table>\`;
  return table;
}`,...f.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(args: any) => {
  const table = html\`
    <ifx-table
      row-height="\${args.rowHeight}"
      cols='\${JSON.stringify(args.cols)}'
      rows='\${JSON.stringify(args.rows)}'
      table-height="\${args.tableHeight}"
      pagination="\${args.pagination}"
      pagination-items-per-page='\${args.paginationItemsPerPage}'
      filter-orientation="\${args.filterOrientation}"
      column-value-position="\${args.columnValuePosition}">
    </ifx-table>\`;
  return table;
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: any) => {
  const table = html\`
    <ifx-table
      headline="\${args.headline}"
      row-height="\${args.rowHeight}"
      cols='\${JSON.stringify(args.cols)}'
      rows='\${JSON.stringify(args.rows)}'
      table-height="\${args.tableHeight}"
      pagination="\${args.pagination}"
      pagination-items-per-page='\${args.paginationItemsPerPage}'
      filter-orientation="none"
      column-value-position="\${args.columnValuePosition}">
      <ifx-button slot="inner-button-left">Button</ifx-button>
      <ifx-button slot="inner-button-right">Button</ifx-button>
    </ifx-table>\`;
  return table;
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`(args: any) => {
  if (args.filterOrientation === 'none') {
    const table = html\`<ifx-table
    row-height="\${args.rowHeight}"
    cols='\${JSON.stringify(args.cols)}'
    rows='\${JSON.stringify(args.rows)}'
    ?enable-selection="\${args.enableSelection}"
    table-height="\${args.tableHeight}"
    pagination="\${args.pagination}"
    ?server-side-pagination="\${args.serverSidePagination}"
    pagination-items-per-page='\${args.paginationItemsPerPage}'
    filter-orientation="\${args.filterOrientation}"
    variant='\${args.variant}'
    fit-column='\${args.fitColumns}'
    column-min-width='\${args.columnMinWidth}'
    column-width='\${args.columnWidth}'
    headline="\${args.headline}"
    headline-number="\${args.headlineNumber}"
    column-value-position="\${args.columnValuePosition}">
</ifx-table>\`;
    return table;
  } else {
    //sidebar
    const filterAccordions = args.cols.map((column: any) => {
      const uniqueColValues = [...new Set(args.rows.map((row: any) => row[column.field]))];
      const filterOptions = uniqueColValues.map((option, index) => {
        return html\`<ifx-list-entry slot="slot\${index}" label="\${option}" value="false"></ifx-list-entry>\`;
      });
      return html\`
      <ifx-filter-accordion slot="filter-accordion" filter-group-name="\${column.field}">
        <ifx-list slot="list" type="checkbox" name="\${column.field}" max-visible-items="6">
          \${filterOptions}
        </ifx-list>
      </ifx-filter-accordion>
    \`;
    });

    //topbar
    const filterComponents = args.cols.map((column: any, index: any) => {
      const uniqueColValues = [...new Set(args.rows.map((row: any) => row[column.field]))].filter(v => v !== undefined && v !== null && v !== '');
      const options = uniqueColValues.map(option => ({
        value: option,
        label: option,
        selected: false
      }));
      const optionsString = JSON.stringify(options);
      return html\`
        <ifx-set-filter slot="filter-component-\${index + 1}"
            options='\${optionsString}'
            filter-label='\${column.headerName}'
            filter-name='\${column.field}'
            type='multi-select'
            placeholder='Select \${column.headerName}'>
          </ifx-set-filter>
          \`;
    });
    const filterTypeGroupComponent = args.filterOrientation === 'sidebar' ? html\`<ifx-filter-type-group slot="sidebar-filter">
        <div slot="filter-search">
          <ifx-filter-search filter-orientation="sidebar" filter-name="search"></ifx-filter-search>
        </div>
        \${filterAccordions}
    </ifx-filter-type-group>\` : html\`<ifx-filter-bar slot="topbar-filter" max-shown-filters="3">
        <ifx-filter-search slot="filter-search" filter-orientation="topbar"></ifx-filter-search>
        \${filterComponents}
   </ifx-filter-bar>\`;
    const table = html\`<ifx-table
    headline="\${args.headline}"
    row-height="\${args.rowHeight}"
    cols='\${JSON.stringify(args.cols)}'
    rows='\${JSON.stringify(args.rows)}'
    table-height="\${args.tableHeight}"
    pagination="\${args.pagination}"
    pagination-items-per-page='\${args.paginationItemsPerPage}'
    filter-orientation="\${args.filterOrientation}"
    column-value-position="\${args.columnValuePosition}">
    \${filterTypeGroupComponent}
</ifx-table>\`;
    return table;
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: any) => {
  if (args.filterOrientation === 'none') {
    const table = html\`<ifx-table
    row-height="\${args.rowHeight}"
    cols='\${JSON.stringify(args.cols)}'
    rows='\${JSON.stringify(args.rows)}'
    ?enable-selection="\${args.enableSelection}"
    table-height="\${args.tableHeight}"
    pagination="\${args.pagination}"
    ?server-side-pagination="\${args.serverSidePagination}"
    pagination-items-per-page='\${args.paginationItemsPerPage}'
    filter-orientation="\${args.filterOrientation}"
    variant='\${args.variant}'
    fit-column='\${args.fitColumns}'
    column-min-width='\${args.columnMinWidth}'
    column-width='\${args.columnWidth}'
    headline="\${args.headline}"
    headline-number="\${args.headlineNumber}"
    column-value-position="\${args.columnValuePosition}">
</ifx-table>\`;
    return table;
  } else {
    //sidebar
    const filterAccordions = args.cols.map((column: any) => {
      const uniqueColValues = [...new Set(args.rows.map((row: any) => row[column.field]))];
      const filterOptions = uniqueColValues.map((option, index) => {
        return html\`<ifx-list-entry slot="slot\${index}" label="\${option}" value="false"></ifx-list-entry>\`;
      });
      return html\`
      <ifx-filter-accordion slot="filter-accordion" filter-group-name="\${column.field}">
        <ifx-list slot="list" type="checkbox" name="\${column.field}" max-visible-items="6">
          \${filterOptions}
        </ifx-list>
      </ifx-filter-accordion>
    \`;
    });

    //topbar
    const filterComponents = args.cols.map((column: any, index: any) => {
      const uniqueColValues = [...new Set(args.rows.map((row: any) => row[column.field]))].filter(v => v !== undefined && v !== null && v !== '');
      const options = uniqueColValues.map(option => ({
        value: option,
        label: option,
        selected: false
      }));
      const optionsString = JSON.stringify(options);
      return html\`
        <ifx-set-filter slot="filter-component-\${index + 1}"
            options='\${optionsString}'
            filter-label='\${column.headerName}'
            filter-name='\${column.field}'
            type='multi-select'
            placeholder='Select \${column.headerName}'>
          </ifx-set-filter>
          \`;
    });
    const filterTypeGroupComponent = args.filterOrientation === 'sidebar' ? html\`<ifx-filter-type-group slot="sidebar-filter">
        <div slot="filter-search">
          <ifx-filter-search filter-orientation="sidebar" filter-name="search"></ifx-filter-search>
        </div>
        \${filterAccordions}
    </ifx-filter-type-group>\` : html\`<ifx-filter-bar slot="topbar-filter" max-shown-filters="3">
        <ifx-filter-search slot="filter-search" filter-orientation="topbar"></ifx-filter-search>
        \${filterComponents}
   </ifx-filter-bar>\`;
    const table = html\`<ifx-table
    headline="\${args.headline}"
    row-height="\${args.rowHeight}"
    cols='\${JSON.stringify(args.cols)}'
    rows='\${JSON.stringify(args.rows)}'
    table-height="\${args.tableHeight}"
    pagination="\${args.pagination}"
    pagination-items-per-page='\${args.paginationItemsPerPage}'
    filter-orientation="\${args.filterOrientation}"
    column-value-position="\${args.columnValuePosition}">
    \${filterTypeGroupComponent}
</ifx-table>\`;
    return table;
  }
}`,...m.parameters?.docs?.source}}};const D=Object.freeze(Object.defineProperty({__proto__:null,DefaultState:o,IncludesBreakingline:u,IncludesButtons:s,IncludesInnerButtons:p,IncludesLink:f,IncludesStatus:c,Pagination:r,ServerSidePagination:l,SidebarFilter:g,TopbarFilter:m,__namedExportsOrder:A,default:J},Symbol.toStringTag,{value:"Module"}));export{o as D,s as I,r as P,l as S,D as T,p as a,g as b,m as c};
