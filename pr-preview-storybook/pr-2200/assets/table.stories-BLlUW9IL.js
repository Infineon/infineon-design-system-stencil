import{b as t}from"./iframe-DPRjjmHm.js";const b=[{headerName:"ID",field:"id",sortable:!0,sort:"desc",unSortIcon:!0},{headerName:"Item",field:"item",sortable:!0,unSortIcon:!0},{headerName:"Price",field:"price"},{headerName:"Date",field:"date"}],g=[{id:"1",item:"Item 1",price:356,date:"2025-06-25"},{id:"2",item:"Item 2",price:55,date:"2025-03-26"},{id:"3",item:"Item 3",price:24},{id:"4",item:"x",price:874},{id:"5",item:"x",price:689},{id:"6",item:"x",price:46},{id:"7",item:"Item 7",price:421},{id:"8",item:"Item 8",price:17},{id:"9",item:"x",price:752},{id:"10",item:"Item 10",price:73},{id:"11",item:"x",price:94}],D=[{id:1,item:`Item 1
 Item 1.2
 Item 1.3`,price:356,date:"2025-06-25"},{id:2,item:"Item 2",price:55,date:"2025-03-26"},{id:3,item:"Item 3",price:24},{id:4,item:"x",price:874},{id:5,item:"x",price:689},{id:6,item:"x",price:46},{id:7,item:"Item 7",price:421},{id:8,item:"Item 8",price:17},{id:9,item:"x",price:752},{id:10,item:"Item 10",price:73},{id:11,item:`Item 11
 Item 11.2`,price:94}],N=[{headerName:"ID",field:"id",sortable:!0,sort:"desc",unSortIcon:!0},{headerName:"Item",field:"item",sortable:!0,unSortIcon:!0},{headerName:"Price",field:"price"},{headerName:"Date",field:"date"},{headerName:"",field:"button"}],w=[{headerName:"ID",field:"id",sortable:!0,sort:"desc",unSortIcon:!0},{headerName:"Item",field:"item",sortable:!0,unSortIcon:!0},{headerName:"Price",field:"price"},{headerName:"Date",field:"date"},{headerName:"Status",field:"status"}],C=[{headerName:"ID",field:"id",sortable:!0,sort:"desc",unSortIcon:!0},{headerName:"Item",field:"item",sortable:!0,unSortIcon:!0},{headerName:"Price",field:"price"},{headerName:"Date",field:"date"},{headerName:"Link",field:"link"}],I=[{id:1,item:"Item 1",price:356,date:"2025-06-25",button:{disabled:!1,variant:"secondary",size:"s",target:"_blank",href:"https://www.w3schools.com/",theme:"default",type:"button",fullWidth:!0,text:"Button"}},{id:2,item:"Item 2",price:55,date:"2025-03-26",button:{disabled:!1,variant:"secondary",size:"s",target:"_blank",href:"https://www.w3schools.com/",theme:"default",type:"button",fullWidth:!0,text:"Button"}},{id:3,item:"Item 3",price:24,button:{disabled:!1,variant:"secondary",size:"s",target:"_blank",href:"https://www.w3schools.com/",theme:"default",type:"button",fullWidth:!0,text:"Button"}}],H=[{id:1,item:"Item 1",price:356,date:"2025-06-25",status:{label:"Available",color:"green-500",border:!0}},{id:2,item:"Item 2",price:55,date:"2025-03-26",status:{label:"Out of Stock",color:"red-500",border:!0}},{id:3,item:"Item 3",price:24,status:{label:"Coming Soon",color:"orange-500",border:!0}}],J=[{id:1,item:"Item 1",price:356,date:"2025-06-25",link:{disabled:!1,variant:"bold",size:"s",target:"_blank",href:"https://www.google.com/",text:"Link"}},{id:2,item:"Item 2",price:55,date:"2025-03-26",link:{disabled:!1,variant:"underlined",size:"s",target:"_blank",href:"https://www.yahoo.com/",text:"Link"}},{id:3,item:"Item 3",price:24,link:{disabled:!1,variant:"title",size:"s",target:"_blank",href:"https://www.bing.com/",text:"Link"}}],P={title:"Components/Table (advanced)",args:{tableHeight:"auto",pagination:!1,serverSidePagination:!1,rowHeight:40,showLoading:!1,variant:"default",headline:"Matching results",headlineNumber:0,enableSelection:!1,fitColumns:!1,columnMinWidth:200,columnWidth:100},argTypes:{tableHeight:{description:"Set the height of the table.",table:{category:"ifx-table props",type:{summary:"Options",detail:`Default: "auto"
Example for fixed height: "400px"`}}},pagination:{description:"Show pagination control.",control:{type:"boolean"},table:{category:"ifx-table props",defaultValue:{summary:!0},type:{summary:"Boolean"}}},serverSidePagination:{description:"Enables server-side pagination.",control:{type:"boolean"},table:{category:"ifx-table props",defaultValue:{summary:!0},type:{summary:"Boolean"}}},paginationItemsPerPage:{description:"Sets the items per page of the table pagination",table:{category:"ifx-table props"}},showLoading:{description:"Show loading spinner.",options:[!0,!1],control:{type:"radio"},table:{category:"ifx-table props",defaultValue:{summary:!1}}},rowHeight:{description:"Set the height of the rows.",options:["compact","default"],control:{type:"radio"},table:{category:"ifx-table props",defaultValue:{summary:"default"}}},enableSelection:{description:"Enables the selection of rows via a checkbox",options:[!0,!1],control:{type:"radio"},table:{category:"ifx-table props",defaultValue:{summary:"default"}}},filterOrientation:{description:"Set the filter orientation.",options:["sidebar","topbar","none"],control:{type:"radio"},table:{category:"ifx-table props",defaultValue:{summary:"none"}}},columnDefs:{description:"Column header options",name:"cols",table:{category:"ifx-table props",type:{summary:"Column header options",detail:`Standard columns:
headerName: "Model", 
field: "model", 
sortable: true (optional),
sort: "desc" (optional) => descending sort (show icon)
unSortIcon: true (optional) => unsorted (show icon)

Special columns:
headerName: "",
field: "button"
headerName: "",
field: "link"`}}},fitColumns:{description:"Adjusts column width to fit content",table:{category:"ifx-table props",type:{summary:"Adjusts column width to content"}}},columnMinWidth:{description:"Sets the min width of all columns. 100px by default.",table:{category:"ifx-table props",type:{summary:"Sets the min width of all columns"}}},columnWidth:{description:"Sets the width of all columns.",table:{category:"ifx-table props",type:{summary:"Sets the width of all columns"}}},rowData:{description:"Row data options",name:"rows",table:{category:"ifx-table props",type:{summary:"Row data options",detail:`Standard row values:
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
}`}}},variant:{description:"Sets the variant of the table.",table:{category:"ifx-table props",defaultValue:{summary:"default"}},options:["default","zebra"],control:{type:"radio"}},headline:{description:"Sets the headline of the table.",table:{category:"ifx-table props",defaultValue:{summary:"matching results"}}},headlineNumber:{description:"Sets the number in brackets right of the headline. When null, headline number is automatically set to the number of rows",table:{category:"ifx-table props",defaultValue:{summary:"matching results"}}},ifxSelectionChange:{action:"ifxSelectionChange",description:"A custom event triggered on checkbox selection",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxSelectionChange={handleInput}
Vue:@ifxSelectionChange="handleInput"
Angular:(ifxSelectionChange)="handleInput()"
VanillaJs:.addEventListener("ifxSelectionChange", (event) => {//handle input});`}}},ifxSortChange:{action:"ifxSortChange",description:"A custom event emitted on column sort change",table:{category:"custom events",type:{summary:"Framework integration",detail:`React: onIfxSortChange={handleInput}
Vue:@ifxIfxSortChange="handleInput"
Angular:(ifxIfxSortChange)="handleInput()"
VanillaJs:.addEventListener("ifxIfxSortChange", (event) => {//handle input});`}}}}},$=e=>{if(e.filterOrientation==="none")return t`<ifx-table
    row-height="${e.rowHeight}"
    .cols='${JSON.stringify(e.columnDefs)}'
    .rows='${JSON.stringify(e.rowData)}'
    ?enable-selection="${e.enableSelection}"
    table-height="${e.tableHeight}"
    ?pagination="${e.pagination}"
    ?server-side-pagination="${e.serverSidePagination}"
    .pagination-items-per-page='${e.paginationItemsPerPage}'
    filter-orientation="${e.filterOrientation}"
    variant='${e.variant}'
    fit-column='${e.fitColumns}'
    column-min-width='${e.columnMinWidth}'
    column-width='${e.columnWidth}'
    headline="${e.headline}"
    headline-number="${e.headlineNumber}">
</ifx-table>`;{const a=e.columnDefs.map(n=>{const S=[...new Set(e.rowData.map(h=>h[n.field]))].map((h,x)=>t`<ifx-list-entry slot="slot${x}" label="${h}" value="false"></ifx-list-entry>`);return t`
      <ifx-filter-accordion slot="filter-accordion" filter-group-name="${n.field}">
        <ifx-list slot="list" type="checkbox" name="${n.field}" max-visible-items="6">
          ${S}
        </ifx-list>
      </ifx-filter-accordion>
    `}),v=e.columnDefs.map((n,y)=>{const h=[...new Set(e.rowData.map(i=>i[n.field]))].filter(i=>i!=null&&i!=="").map(i=>({value:i,label:i,selected:!1})),x=JSON.stringify(h);return t`
        <ifx-set-filter slot="filter-component-${y+1}"
            options='${x}'
            filter-label='${n.headerName}'
            filter-name='${n.field}'
            type='multi-select'
            placeholder='Select ${n.headerName}'>
          </ifx-set-filter>
          `}).join(`
`),O=e.filterOrientation==="sidebar"?t`<ifx-filter-type-group slot="sidebar-filter">
        <div slot="filter-search">
          <ifx-filter-search filter-orientation="sidebar" filter-name="search"></ifx-filter-search>
        </div>
        ${a}
    </ifx-filter-type-group>`:t`<ifx-filter-bar slot="topbar-filter" max-shown-filters="3">
        <ifx-filter-search slot="filter-search" filter-orientation="topbar"></ifx-filter-search>
        ${v}
   </ifx-filter-bar>`;return t`<ifx-table
    headline="${e.headline}"
    row-height="${e.rowHeight}"
    cols='${JSON.stringify(e.columnDefs)}'
    rows='${JSON.stringify(e.rowData)}'
    table-height="${e.tableHeight}"
    ?pagination="${e.pagination}"
    filter-orientation="${e.filterOrientation}">
    ${O}
</ifx-table>`}},r=$.bind({});r.args={pagination:!1,paginationItemsPerPage:'[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}]',rowHeight:"default",enableSelection:!1,columnDefs:b,rowData:g,filterOrientation:"none"};const o=$.bind({});o.args={pagination:!0,paginationItemsPerPage:'[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}]',rowHeight:"default",columnDefs:b,rowData:g,filterOrientation:"none"};const l=$.bind({});l.args={pagination:!0,serverSidePagination:!0,paginationItemsPerPage:'[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}]',rowHeight:"default",columnDefs:b,rowData:g,filterOrientation:"none"};const V=e=>t`
    <ifx-table
      row-height="${e.rowHeight}"
      .cols='${JSON.stringify(e.columnDefs)}'
      .rows='${JSON.stringify(e.rowData)}'
      table-height="${e.tableHeight}"
      ?pagination="${e.pagination}"
      filter-orientation="${e.filterOrientation}">
    </ifx-table>`,k=e=>t`
    <ifx-table
      row-height="${e.rowHeight}"
      .cols='${JSON.stringify(e.columnDefs)}'
      .rows='${JSON.stringify(e.rowData)}'
      table-height="${e.tableHeight}"
      ?pagination="${e.pagination}"
      filter-orientation="${e.filterOrientation}">
    </ifx-table>`,W=e=>t`
    <ifx-table
      row-height="${e.rowHeight}"
      .cols='${JSON.stringify(e.columnDefs)}'
      .rows='${JSON.stringify(e.rowData)}'
      table-height="${e.tableHeight}"
      ?pagination="${e.pagination}"
      filter-orientation="${e.filterOrientation}">
    </ifx-table>`,q=e=>t`
    <ifx-table
      row-height="${e.rowHeight}"
      .cols='${JSON.stringify(e.columnDefs)}'
      .rows='${JSON.stringify(e.rowData)}'
      table-height="${e.tableHeight}"
      ?pagination="${e.pagination}"
      filter-orientation="${e.filterOrientation}">
    </ifx-table>`,T=e=>t`
    <ifx-table
      row-height="${e.rowHeight}"
      .cols='${JSON.stringify(e.columnDefs)}'
      .rows='${JSON.stringify(e.rowData)}'
      table-height="${e.tableHeight}"
      ?pagination="${e.pagination}"
      filter-orientation="none">
      <ifx-button slot="inner-button">Button</ifx-button>
      <ifx-button slot="inner-button">Button</ifx-button>
    </ifx-table>`,s=V.bind({});s.args={rowHeight:"default",columnDefs:N,rowData:I,filterOrientation:"none",pagination:!1};const f=k.bind({});f.args={rowHeight:"default",columnDefs:w,rowData:H,filterOrientation:"none",pagination:!1};const c=W.bind({});c.args={rowHeight:"default",columnDefs:C,rowData:J,filterOrientation:"none",pagination:!1};const u=q.bind({});u.args={rowHeight:"default",columnDefs:w,rowData:D,filterOrientation:"none",pagination:!1};const m=T.bind({});m.args={rowHeight:"default",columnDefs:w,rowData:g,filterOrientation:"topbar",pagination:!1};const d=$.bind({});d.args={rowHeight:"default",columnDefs:b,rowData:g,filterOrientation:"sidebar"};const p=$.bind({});p.args={headline:"Matching results",rowHeight:"default",columnDefs:b,rowData:g,filterOrientation:"topbar"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: any) => {
  if (args.filterOrientation === 'none') {
    const table = html\`<ifx-table
    row-height="\${args.rowHeight}"
    .cols='\${JSON.stringify(args.columnDefs)}'
    .rows='\${JSON.stringify(args.rowData)}'
    ?enable-selection="\${args.enableSelection}"
    table-height="\${args.tableHeight}"
    ?pagination="\${args.pagination}"
    ?server-side-pagination="\${args.serverSidePagination}"
    .pagination-items-per-page='\${args.paginationItemsPerPage}'
    filter-orientation="\${args.filterOrientation}"
    variant='\${args.variant}'
    fit-column='\${args.fitColumns}'
    column-min-width='\${args.columnMinWidth}'
    column-width='\${args.columnWidth}'
    headline="\${args.headline}"
    headline-number="\${args.headlineNumber}">
</ifx-table>\`;
    return table;
  } else {
    //sidebar
    const filterAccordions = args.columnDefs.map((column: any) => {
      const uniqueColValues = [...new Set(args.rowData.map((row: any) => row[column.field]))];
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
    const filterComponents = args.columnDefs.map((column: any, index: any) => {
      const uniqueColValues = [...new Set(args.rowData.map((row: any) => row[column.field]))].filter(v => v !== undefined && v !== null && v !== '');
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
    }).join('\\n');
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
    cols='\${JSON.stringify(args.columnDefs)}'
    rows='\${JSON.stringify(args.rowData)}'
    table-height="\${args.tableHeight}"
    ?pagination="\${args.pagination}"
    filter-orientation="\${args.filterOrientation}">
    \${filterTypeGroupComponent}
</ifx-table>\`;
    return table;
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: any) => {
  if (args.filterOrientation === 'none') {
    const table = html\`<ifx-table
    row-height="\${args.rowHeight}"
    .cols='\${JSON.stringify(args.columnDefs)}'
    .rows='\${JSON.stringify(args.rowData)}'
    ?enable-selection="\${args.enableSelection}"
    table-height="\${args.tableHeight}"
    ?pagination="\${args.pagination}"
    ?server-side-pagination="\${args.serverSidePagination}"
    .pagination-items-per-page='\${args.paginationItemsPerPage}'
    filter-orientation="\${args.filterOrientation}"
    variant='\${args.variant}'
    fit-column='\${args.fitColumns}'
    column-min-width='\${args.columnMinWidth}'
    column-width='\${args.columnWidth}'
    headline="\${args.headline}"
    headline-number="\${args.headlineNumber}">
</ifx-table>\`;
    return table;
  } else {
    //sidebar
    const filterAccordions = args.columnDefs.map((column: any) => {
      const uniqueColValues = [...new Set(args.rowData.map((row: any) => row[column.field]))];
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
    const filterComponents = args.columnDefs.map((column: any, index: any) => {
      const uniqueColValues = [...new Set(args.rowData.map((row: any) => row[column.field]))].filter(v => v !== undefined && v !== null && v !== '');
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
    }).join('\\n');
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
    cols='\${JSON.stringify(args.columnDefs)}'
    rows='\${JSON.stringify(args.rowData)}'
    table-height="\${args.tableHeight}"
    ?pagination="\${args.pagination}"
    filter-orientation="\${args.filterOrientation}">
    \${filterTypeGroupComponent}
</ifx-table>\`;
    return table;
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: any) => {
  if (args.filterOrientation === 'none') {
    const table = html\`<ifx-table
    row-height="\${args.rowHeight}"
    .cols='\${JSON.stringify(args.columnDefs)}'
    .rows='\${JSON.stringify(args.rowData)}'
    ?enable-selection="\${args.enableSelection}"
    table-height="\${args.tableHeight}"
    ?pagination="\${args.pagination}"
    ?server-side-pagination="\${args.serverSidePagination}"
    .pagination-items-per-page='\${args.paginationItemsPerPage}'
    filter-orientation="\${args.filterOrientation}"
    variant='\${args.variant}'
    fit-column='\${args.fitColumns}'
    column-min-width='\${args.columnMinWidth}'
    column-width='\${args.columnWidth}'
    headline="\${args.headline}"
    headline-number="\${args.headlineNumber}">
</ifx-table>\`;
    return table;
  } else {
    //sidebar
    const filterAccordions = args.columnDefs.map((column: any) => {
      const uniqueColValues = [...new Set(args.rowData.map((row: any) => row[column.field]))];
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
    const filterComponents = args.columnDefs.map((column: any, index: any) => {
      const uniqueColValues = [...new Set(args.rowData.map((row: any) => row[column.field]))].filter(v => v !== undefined && v !== null && v !== '');
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
    }).join('\\n');
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
    cols='\${JSON.stringify(args.columnDefs)}'
    rows='\${JSON.stringify(args.rowData)}'
    table-height="\${args.tableHeight}"
    ?pagination="\${args.pagination}"
    filter-orientation="\${args.filterOrientation}">
    \${filterTypeGroupComponent}
</ifx-table>\`;
    return table;
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: any) => {
  const table = html\`
    <ifx-table
      row-height="\${args.rowHeight}"
      .cols='\${JSON.stringify(args.columnDefs)}'
      .rows='\${JSON.stringify(args.rowData)}'
      table-height="\${args.tableHeight}"
      ?pagination="\${args.pagination}"
      filter-orientation="\${args.filterOrientation}">
    </ifx-table>\`;
  return table;
}`,...s.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`(args: any) => {
  const table = html\`
    <ifx-table
      row-height="\${args.rowHeight}"
      .cols='\${JSON.stringify(args.columnDefs)}'
      .rows='\${JSON.stringify(args.rowData)}'
      table-height="\${args.tableHeight}"
      ?pagination="\${args.pagination}"
      filter-orientation="\${args.filterOrientation}">
    </ifx-table>\`;
  return table;
}`,...f.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: any) => {
  const table = html\`
    <ifx-table
      row-height="\${args.rowHeight}"
      .cols='\${JSON.stringify(args.columnDefs)}'
      .rows='\${JSON.stringify(args.rowData)}'
      table-height="\${args.tableHeight}"
      ?pagination="\${args.pagination}"
      filter-orientation="\${args.filterOrientation}">
    </ifx-table>\`;
  return table;
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(args: any) => {
  const table = html\`
    <ifx-table
      row-height="\${args.rowHeight}"
      .cols='\${JSON.stringify(args.columnDefs)}'
      .rows='\${JSON.stringify(args.rowData)}'
      table-height="\${args.tableHeight}"
      ?pagination="\${args.pagination}"
      filter-orientation="\${args.filterOrientation}">
    </ifx-table>\`;
  return table;
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: any) => {
  const table = html\`
    <ifx-table
      row-height="\${args.rowHeight}"
      .cols='\${JSON.stringify(args.columnDefs)}'
      .rows='\${JSON.stringify(args.rowData)}'
      table-height="\${args.tableHeight}"
      ?pagination="\${args.pagination}"
      filter-orientation="none">
      <ifx-button slot="inner-button">Button</ifx-button>
      <ifx-button slot="inner-button">Button</ifx-button>
    </ifx-table>\`;
  return table;
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: any) => {
  if (args.filterOrientation === 'none') {
    const table = html\`<ifx-table
    row-height="\${args.rowHeight}"
    .cols='\${JSON.stringify(args.columnDefs)}'
    .rows='\${JSON.stringify(args.rowData)}'
    ?enable-selection="\${args.enableSelection}"
    table-height="\${args.tableHeight}"
    ?pagination="\${args.pagination}"
    ?server-side-pagination="\${args.serverSidePagination}"
    .pagination-items-per-page='\${args.paginationItemsPerPage}'
    filter-orientation="\${args.filterOrientation}"
    variant='\${args.variant}'
    fit-column='\${args.fitColumns}'
    column-min-width='\${args.columnMinWidth}'
    column-width='\${args.columnWidth}'
    headline="\${args.headline}"
    headline-number="\${args.headlineNumber}">
</ifx-table>\`;
    return table;
  } else {
    //sidebar
    const filterAccordions = args.columnDefs.map((column: any) => {
      const uniqueColValues = [...new Set(args.rowData.map((row: any) => row[column.field]))];
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
    const filterComponents = args.columnDefs.map((column: any, index: any) => {
      const uniqueColValues = [...new Set(args.rowData.map((row: any) => row[column.field]))].filter(v => v !== undefined && v !== null && v !== '');
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
    }).join('\\n');
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
    cols='\${JSON.stringify(args.columnDefs)}'
    rows='\${JSON.stringify(args.rowData)}'
    table-height="\${args.tableHeight}"
    ?pagination="\${args.pagination}"
    filter-orientation="\${args.filterOrientation}">
    \${filterTypeGroupComponent}
</ifx-table>\`;
    return table;
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: any) => {
  if (args.filterOrientation === 'none') {
    const table = html\`<ifx-table
    row-height="\${args.rowHeight}"
    .cols='\${JSON.stringify(args.columnDefs)}'
    .rows='\${JSON.stringify(args.rowData)}'
    ?enable-selection="\${args.enableSelection}"
    table-height="\${args.tableHeight}"
    ?pagination="\${args.pagination}"
    ?server-side-pagination="\${args.serverSidePagination}"
    .pagination-items-per-page='\${args.paginationItemsPerPage}'
    filter-orientation="\${args.filterOrientation}"
    variant='\${args.variant}'
    fit-column='\${args.fitColumns}'
    column-min-width='\${args.columnMinWidth}'
    column-width='\${args.columnWidth}'
    headline="\${args.headline}"
    headline-number="\${args.headlineNumber}">
</ifx-table>\`;
    return table;
  } else {
    //sidebar
    const filterAccordions = args.columnDefs.map((column: any) => {
      const uniqueColValues = [...new Set(args.rowData.map((row: any) => row[column.field]))];
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
    const filterComponents = args.columnDefs.map((column: any, index: any) => {
      const uniqueColValues = [...new Set(args.rowData.map((row: any) => row[column.field]))].filter(v => v !== undefined && v !== null && v !== '');
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
    }).join('\\n');
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
    cols='\${JSON.stringify(args.columnDefs)}'
    rows='\${JSON.stringify(args.rowData)}'
    table-height="\${args.tableHeight}"
    ?pagination="\${args.pagination}"
    filter-orientation="\${args.filterOrientation}">
    \${filterTypeGroupComponent}
</ifx-table>\`;
    return table;
  }
}`,...p.parameters?.docs?.source}}};const B=["DefaultState","Pagination","ServerSidePagination","IncludesButtons","IncludesStatus","IncludesLink","IncludesBreakingline","IncludesInnerButtons","SidebarFilter","TopbarFilter"],_=Object.freeze(Object.defineProperty({__proto__:null,DefaultState:r,IncludesBreakingline:u,IncludesButtons:s,IncludesInnerButtons:m,IncludesLink:c,IncludesStatus:f,Pagination:o,ServerSidePagination:l,SidebarFilter:d,TopbarFilter:p,__namedExportsOrder:B,default:P},Symbol.toStringTag,{value:"Module"}));export{r as D,s as I,o as P,l as S,_ as T,m as a,d as b,p as c};
