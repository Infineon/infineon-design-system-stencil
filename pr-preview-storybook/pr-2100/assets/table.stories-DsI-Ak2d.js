const b=[{headerName:"Make",field:"make",sortable:!0,sort:"desc",unSortIcon:!0},{headerName:"Model",field:"model",sortable:!0,unSortIcon:!0},{headerName:"Price",field:"price"},{headerName:"Age",field:"age"}],d=[{make:"Toyota",model:"Celica",price:35e3,age:10},{make:"Ford",model:"Mondeo",price:32e3,age:12},{make:"Porsche",model:"Boxster",price:72e3},{make:"Bmw",model:"x",price:72e3},{make:"Mercedes",model:"y",price:72e3},{make:"Ferrari",model:"z",price:72e3},{make:"Chrysler",model:"a",price:72e3},{make:"Range rover",model:"b",price:72e3},{make:"Tesla",model:"x",price:72e3},{make:"Audi",model:"3",price:72e3},{make:"Landrover",model:"x",price:72e3}],v=[{make:`Toyota
 and Mazda`,model:"Celica",price:35e3,age:10},{make:"Ford",model:"Mondeo",price:32e3,age:12},{make:"Porsche",model:"Boxster",price:72e3},{make:"Bmw",model:"x",price:72e3},{make:"Mercedes",model:"y",price:72e3},{make:"Ferrari",model:"z",price:72e3},{make:"Chrysler",model:"a",price:72e3},{make:"Range rover",model:"b",price:72e3},{make:"Tesla",model:"x",price:72e3},{make:"Audi",model:"3",price:72e3},{make:"Landrover",model:"x",price:72e3}],D=[{headerName:"Make",field:"make",sortable:!0,sort:"desc",unSortIcon:!0},{headerName:"Model",field:"model",sortable:!0,unSortIcon:!0},{headerName:"Price",field:"price"},{headerName:"Age",field:"age"},{headerName:"",field:"button"}],x=[{headerName:"Make",field:"make",sortable:!0,sort:"desc",unSortIcon:!0},{headerName:"Model",field:"model",sortable:!0,unSortIcon:!0},{headerName:"Price",field:"price"},{headerName:"Age",field:"age"},{headerName:"Status",field:"status"}],N=[{headerName:"Make",field:"make",sortable:!0,sort:"desc",unSortIcon:!0},{headerName:"Model",field:"model",sortable:!0,unSortIcon:!0},{headerName:"Price",field:"price"},{headerName:"Age",field:"age"},{headerName:"Link",field:"link"}],k=[{make:"Toyota",model:"Celica",price:35e3,age:10,button:{disabled:!1,variant:"secondary",size:"s",target:"_blank",href:"https://www.w3schools.com/",theme:"default",type:"button",fullWidth:!0,text:"Toyota Button"}},{make:"Ford",model:"Mondeo",price:32e3,age:12,button:{disabled:!1,variant:"secondary",size:"s",target:"_blank",href:"https://www.w3schools.com/",theme:"default",type:"button",fullWidth:!0,text:"Ford Button"}},{make:"Porsche",model:"Boxster",price:72e3,button:{disabled:!1,variant:"secondary",size:"s",target:"_blank",href:"https://www.w3schools.com/",theme:"default",type:"button",fullWidth:!0,text:"Porsche Button"}}],C=[{make:"Toyota",model:"Celica",price:35e3,age:10,status:{label:"Available",color:"green-500",border:!0}},{make:"Ford",model:"Mondeo",price:32e3,age:12,status:{label:"Out of Stock",color:"red-500",border:!0}},{make:"Porsche",model:"Boxster",price:72e3,status:{label:"Coming Soon",color:"orange-500",border:!0}}],H=[{make:"Toyota",model:"Celica",price:35e3,age:10,link:{disabled:!1,variant:"bold",size:"s",target:"_blank",href:"https://www.google.com/",text:"Link"}},{make:"Ford",model:"Mondeo",price:32e3,age:12,link:{disabled:!1,variant:"underlined",size:"s",target:"_blank",href:"https://www.yahoo.com/",text:"Link"}},{make:"Porsche",model:"Boxster",price:72e3,link:{disabled:!1,variant:"title",size:"s",target:"_blank",href:"https://www.bing.com/",text:"Link"}}],J={title:"Components/Table (advanced)",args:{tableHeight:"auto",pagination:!1,serverSidePagination:!1,rowHeight:40,showLoading:!1,variant:"default",headline:"Matching results"},argTypes:{tableHeight:{description:"Set the height of the table.",table:{category:"ifx-table props",type:{summary:"Options",detail:`Default: "auto"
Example for fixed height: "400px"`}}},pagination:{description:"Show pagination control.",control:{type:"boolean"},table:{category:"ifx-table props",defaultValue:{summary:!0},type:{summary:"Boolean"}}},serverSidePagination:{description:"Enables server-side pagination.",control:{type:"boolean"},table:{category:"ifx-table props",defaultValue:{summary:!0},type:{summary:"Boolean"}}},paginationItemsPerPage:{description:"Sets the items per page of the table pagination",table:{category:"ifx-table props"}},showLoading:{description:"Show loading spinner.",options:[!0,!1],control:{type:"radio"},table:{category:"ifx-table props",defaultValue:{summary:!1}}},rowHeight:{description:"Set the height of the rows.",options:["compact","default"],control:{type:"radio"},table:{category:"ifx-table props",defaultValue:{summary:"default"}}},filterOrientation:{description:"Set the filter orientation.",options:["sidebar","topbar","none"],control:{type:"radio"},table:{category:"ifx-table props",defaultValue:{summary:"none"}}},columnDefs:{description:"Column header options",name:"cols",table:{category:"ifx-table props",type:{summary:"Column header options",detail:`Standard columns:
headerName: "Model", 
field: "model", 
sortable: true (optional),
sort: "desc" (optional) => descending sort (show icon)
unSortIcon: true (optional) => unsorted (show icon)

Special columns:
headerName: "",
field: "button"
headerName: "",
field: "link"`}}},rowData:{description:"Row data options",name:"rows",table:{category:"ifx-table props",type:{summary:"Row data options",detail:`Standard row values:
make: "Toyota", 
model: "Celica", 
price: 35000 

Special row values (incl buttons):
make: "Porsche",
model: "Boxster",
price: "72000",
button: { 
disabled: false (optional),
variant: "outline" (optional)
size: "s" (optional),
text: "Button"
...other ifx-button properties
}`}}},variant:{description:"Sets the variant of the table.",table:{category:"ifx-table props",defaultValue:{summary:"default"}},options:["default","zebra"],control:{type:"radio"}},headline:{description:"Sets the headline of the table.",table:{category:"ifx-table props",defaultValue:{summary:"matching results"}}}}},h=e=>{if(e.filterOrientation==="none")return`<ifx-table
    row-height="${e.rowHeight}"
    cols='${JSON.stringify(e.columnDefs)}'
    rows='${JSON.stringify(e.rowData)}'
    table-height="${e.tableHeight}"
    pagination="${e.pagination}"
    server-side-pagination="${e.serverSidePagination}"
    pagination-items-per-page='${e.paginationItemsPerPage}'
    filter-orientation="${e.filterOrientation}"
    variant='${e.variant}'>
</ifx-table>`;{const i=e.columnDefs.map(t=>{const y=[...new Set(e.rowData.map(m=>m[t.field]))].map((m,$)=>`<ifx-list-entry slot="slot${$}" label="${m}" value="false"></ifx-list-entry>`).join("");return`
      <ifx-filter-accordion slot="filter-accordion" filter-group-name="${t.field}">
        <ifx-list slot="list" type="checkbox" name="${t.field}" max-visible-items="6">
          ${y}
        </ifx-list>
      </ifx-filter-accordion>
    `}).join(""),S=e.columnDefs.map((t,w)=>{const m=[...new Set(e.rowData.map(n=>n[t.field]))].filter(n=>n!=null&&n!=="").map(n=>({value:n,label:n,selected:!1})),$=JSON.stringify(m);return`
        <ifx-set-filter slot="filter-component-${w+1}"
            options='${$}'
            filter-label='${t.headerName}'
            filter-name='${t.field}'
            type='multi-select'
            placeholder='Select ${t.headerName}'>
          </ifx-set-filter>
          `}).join(`
`),O=e.filterOrientation==="sidebar"?`<ifx-filter-type-group slot="sidebar-filter">
        <div slot="filter-search">
          <ifx-filter-search filter-orientation="sidebar" filter-name="search"></ifx-filter-search>
        </div>
        ${i}
    </ifx-filter-type-group>`:`<ifx-filter-bar slot="topbar-filter" max-shown-filters="3">
        <ifx-filter-search slot="filter-search" filter-orientation="topbar"></ifx-filter-search>
        ${S}
   </ifx-filter-bar>`;return`<ifx-table
    headline="${e.headline}"
    row-height="${e.rowHeight}"
    cols='${JSON.stringify(e.columnDefs)}'
    rows='${JSON.stringify(e.rowData)}'
    table-height="${e.tableHeight}"
    pagination="${e.pagination}"
    filter-orientation="${e.filterOrientation}">
    ${O}
</ifx-table>`}},a=h.bind({});a.args={pagination:!1,paginationItemsPerPage:'[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}]',rowHeight:"default",columnDefs:b,rowData:d,filterOrientation:"none"};const r=h.bind({});r.args={pagination:!0,paginationItemsPerPage:'[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}]',rowHeight:"default",columnDefs:b,rowData:d,filterOrientation:"none"};const o=h.bind({});o.args={pagination:!0,serverSidePagination:!0,paginationItemsPerPage:'[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}]',rowHeight:"default",columnDefs:b,rowData:d,filterOrientation:"none"};const P=e=>`
    <ifx-table
      row-height="${e.rowHeight}"
      cols='${JSON.stringify(e.columnDefs)}'
      rows='${JSON.stringify(e.rowData)}'
      table-height="${e.tableHeight}"
      pagination="${e.pagination}"
      filter-orientation="${e.filterOrientation}">
    </ifx-table>`,I=e=>`
    <ifx-table
      row-height="${e.rowHeight}"
      cols='${JSON.stringify(e.columnDefs)}'
      rows='${JSON.stringify(e.rowData)}'
      table-height="${e.tableHeight}"
      pagination="${e.pagination}"
      filter-orientation="${e.filterOrientation}">
    </ifx-table>`,T=e=>`
    <ifx-table
      row-height="${e.rowHeight}"
      cols='${JSON.stringify(e.columnDefs)}'
      rows='${JSON.stringify(e.rowData)}'
      table-height="${e.tableHeight}"
      pagination="${e.pagination}"
      filter-orientation="${e.filterOrientation}">
    </ifx-table>`,V=e=>`
    <ifx-table
      row-height="${e.rowHeight}"
      cols='${JSON.stringify(e.columnDefs)}'
      rows='${JSON.stringify(e.rowData)}'
      table-height="${e.tableHeight}"
      pagination="${e.pagination}"
      filter-orientation="${e.filterOrientation}">
    </ifx-table>`,B=e=>`
    <ifx-table
      row-height="${e.rowHeight}"
      cols='${JSON.stringify(e.columnDefs)}'
      rows='${JSON.stringify(e.rowData)}'
      table-height="${e.tableHeight}"
      pagination="${e.pagination}"
      filter-orientation="none">
      <ifx-button slot="inner-button">Button</ifx-button>
      <ifx-button slot="inner-button">Button</ifx-button>
    </ifx-table>`,l=P.bind({});l.args={rowHeight:"default",columnDefs:D,rowData:k,filterOrientation:"none",pagination:!1};const s=I.bind({});s.args={rowHeight:"default",columnDefs:x,rowData:C,filterOrientation:"none",pagination:!1};const f=T.bind({});f.args={rowHeight:"default",columnDefs:N,rowData:H,filterOrientation:"none",pagination:!1};const c=V.bind({});c.args={rowHeight:"default",columnDefs:x,rowData:v,filterOrientation:"none",pagination:!1};const p=B.bind({});p.args={rowHeight:"default",columnDefs:x,rowData:d,filterOrientation:"topbar",pagination:!1};const g=h.bind({});g.args={rowHeight:"default",columnDefs:b,rowData:d,filterOrientation:"sidebar"};const u=h.bind({});u.args={headline:"Matching results",rowHeight:"default",columnDefs:b,rowData:d,filterOrientation:"topbar"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  if (args.filterOrientation === "none") {
    const table = \`<ifx-table
    row-height="\${args.rowHeight}"
    cols='\${JSON.stringify(args.columnDefs)}'
    rows='\${JSON.stringify(args.rowData)}'
    table-height="\${args.tableHeight}"
    pagination="\${args.pagination}"
    server-side-pagination="\${args.serverSidePagination}"
    pagination-items-per-page='\${args.paginationItemsPerPage}'
    filter-orientation="\${args.filterOrientation}"
    variant='\${args.variant}'>
</ifx-table>\`;
    return table;
  } else {
    //sidebar
    const filterAccordions = args.columnDefs.map(column => {
      const uniqueColValues = [...new Set(args.rowData.map(row => row[column.field]))];
      const filterOptions = uniqueColValues.map((option, index) => {
        return \`<ifx-list-entry slot="slot\${index}" label="\${option}" value="false"></ifx-list-entry>\`;
      }).join("");
      return \`
      <ifx-filter-accordion slot="filter-accordion" filter-group-name="\${column.field}">
        <ifx-list slot="list" type="checkbox" name="\${column.field}" max-visible-items="6">
          \${filterOptions}
        </ifx-list>
      </ifx-filter-accordion>
    \`;
    }).join("");

    //topbar
    const filterComponents = args.columnDefs.map((column, index) => {
      const uniqueColValues = [...new Set(args.rowData.map(row => row[column.field]))].filter(v => v !== undefined && v !== null && v !== "");
      const options = uniqueColValues.map(option => ({
        value: option,
        label: option,
        selected: false
      }));
      const optionsString = JSON.stringify(options);
      return \`
        <ifx-set-filter slot="filter-component-\${index + 1}"
            options='\${optionsString}'
            filter-label='\${column.headerName}'
            filter-name='\${column.field}'
            type='multi-select'
            placeholder='Select \${column.headerName}'>
          </ifx-set-filter>
          \`;
    }).join("\\n");
    const filterTypeGroupComponent = args.filterOrientation === "sidebar" ? \`<ifx-filter-type-group slot="sidebar-filter">
        <div slot="filter-search">
          <ifx-filter-search filter-orientation="sidebar" filter-name="search"></ifx-filter-search>
        </div>
        \${filterAccordions}
    </ifx-filter-type-group>\` : \`<ifx-filter-bar slot="topbar-filter" max-shown-filters="3">
        <ifx-filter-search slot="filter-search" filter-orientation="topbar"></ifx-filter-search>
        \${filterComponents}
   </ifx-filter-bar>\`;
    const table = \`<ifx-table
    headline="\${args.headline}"
    row-height="\${args.rowHeight}"
    cols='\${JSON.stringify(args.columnDefs)}'
    rows='\${JSON.stringify(args.rowData)}'
    table-height="\${args.tableHeight}"
    pagination="\${args.pagination}"
    filter-orientation="\${args.filterOrientation}">
    \${filterTypeGroupComponent}
</ifx-table>\`;
    return table;
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  if (args.filterOrientation === "none") {
    const table = \`<ifx-table
    row-height="\${args.rowHeight}"
    cols='\${JSON.stringify(args.columnDefs)}'
    rows='\${JSON.stringify(args.rowData)}'
    table-height="\${args.tableHeight}"
    pagination="\${args.pagination}"
    server-side-pagination="\${args.serverSidePagination}"
    pagination-items-per-page='\${args.paginationItemsPerPage}'
    filter-orientation="\${args.filterOrientation}"
    variant='\${args.variant}'>
</ifx-table>\`;
    return table;
  } else {
    //sidebar
    const filterAccordions = args.columnDefs.map(column => {
      const uniqueColValues = [...new Set(args.rowData.map(row => row[column.field]))];
      const filterOptions = uniqueColValues.map((option, index) => {
        return \`<ifx-list-entry slot="slot\${index}" label="\${option}" value="false"></ifx-list-entry>\`;
      }).join("");
      return \`
      <ifx-filter-accordion slot="filter-accordion" filter-group-name="\${column.field}">
        <ifx-list slot="list" type="checkbox" name="\${column.field}" max-visible-items="6">
          \${filterOptions}
        </ifx-list>
      </ifx-filter-accordion>
    \`;
    }).join("");

    //topbar
    const filterComponents = args.columnDefs.map((column, index) => {
      const uniqueColValues = [...new Set(args.rowData.map(row => row[column.field]))].filter(v => v !== undefined && v !== null && v !== "");
      const options = uniqueColValues.map(option => ({
        value: option,
        label: option,
        selected: false
      }));
      const optionsString = JSON.stringify(options);
      return \`
        <ifx-set-filter slot="filter-component-\${index + 1}"
            options='\${optionsString}'
            filter-label='\${column.headerName}'
            filter-name='\${column.field}'
            type='multi-select'
            placeholder='Select \${column.headerName}'>
          </ifx-set-filter>
          \`;
    }).join("\\n");
    const filterTypeGroupComponent = args.filterOrientation === "sidebar" ? \`<ifx-filter-type-group slot="sidebar-filter">
        <div slot="filter-search">
          <ifx-filter-search filter-orientation="sidebar" filter-name="search"></ifx-filter-search>
        </div>
        \${filterAccordions}
    </ifx-filter-type-group>\` : \`<ifx-filter-bar slot="topbar-filter" max-shown-filters="3">
        <ifx-filter-search slot="filter-search" filter-orientation="topbar"></ifx-filter-search>
        \${filterComponents}
   </ifx-filter-bar>\`;
    const table = \`<ifx-table
    headline="\${args.headline}"
    row-height="\${args.rowHeight}"
    cols='\${JSON.stringify(args.columnDefs)}'
    rows='\${JSON.stringify(args.rowData)}'
    table-height="\${args.tableHeight}"
    pagination="\${args.pagination}"
    filter-orientation="\${args.filterOrientation}">
    \${filterTypeGroupComponent}
</ifx-table>\`;
    return table;
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  if (args.filterOrientation === "none") {
    const table = \`<ifx-table
    row-height="\${args.rowHeight}"
    cols='\${JSON.stringify(args.columnDefs)}'
    rows='\${JSON.stringify(args.rowData)}'
    table-height="\${args.tableHeight}"
    pagination="\${args.pagination}"
    server-side-pagination="\${args.serverSidePagination}"
    pagination-items-per-page='\${args.paginationItemsPerPage}'
    filter-orientation="\${args.filterOrientation}"
    variant='\${args.variant}'>
</ifx-table>\`;
    return table;
  } else {
    //sidebar
    const filterAccordions = args.columnDefs.map(column => {
      const uniqueColValues = [...new Set(args.rowData.map(row => row[column.field]))];
      const filterOptions = uniqueColValues.map((option, index) => {
        return \`<ifx-list-entry slot="slot\${index}" label="\${option}" value="false"></ifx-list-entry>\`;
      }).join("");
      return \`
      <ifx-filter-accordion slot="filter-accordion" filter-group-name="\${column.field}">
        <ifx-list slot="list" type="checkbox" name="\${column.field}" max-visible-items="6">
          \${filterOptions}
        </ifx-list>
      </ifx-filter-accordion>
    \`;
    }).join("");

    //topbar
    const filterComponents = args.columnDefs.map((column, index) => {
      const uniqueColValues = [...new Set(args.rowData.map(row => row[column.field]))].filter(v => v !== undefined && v !== null && v !== "");
      const options = uniqueColValues.map(option => ({
        value: option,
        label: option,
        selected: false
      }));
      const optionsString = JSON.stringify(options);
      return \`
        <ifx-set-filter slot="filter-component-\${index + 1}"
            options='\${optionsString}'
            filter-label='\${column.headerName}'
            filter-name='\${column.field}'
            type='multi-select'
            placeholder='Select \${column.headerName}'>
          </ifx-set-filter>
          \`;
    }).join("\\n");
    const filterTypeGroupComponent = args.filterOrientation === "sidebar" ? \`<ifx-filter-type-group slot="sidebar-filter">
        <div slot="filter-search">
          <ifx-filter-search filter-orientation="sidebar" filter-name="search"></ifx-filter-search>
        </div>
        \${filterAccordions}
    </ifx-filter-type-group>\` : \`<ifx-filter-bar slot="topbar-filter" max-shown-filters="3">
        <ifx-filter-search slot="filter-search" filter-orientation="topbar"></ifx-filter-search>
        \${filterComponents}
   </ifx-filter-bar>\`;
    const table = \`<ifx-table
    headline="\${args.headline}"
    row-height="\${args.rowHeight}"
    cols='\${JSON.stringify(args.columnDefs)}'
    rows='\${JSON.stringify(args.rowData)}'
    table-height="\${args.tableHeight}"
    pagination="\${args.pagination}"
    filter-orientation="\${args.filterOrientation}">
    \${filterTypeGroupComponent}
</ifx-table>\`;
    return table;
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => {
  const table = \`
    <ifx-table
      row-height="\${args.rowHeight}"
      cols='\${JSON.stringify(args.columnDefs)}'
      rows='\${JSON.stringify(args.rowData)}'
      table-height="\${args.tableHeight}"
      pagination="\${args.pagination}"
      filter-orientation="\${args.filterOrientation}">
    </ifx-table>\`;
  return table;
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  const table = \`
    <ifx-table
      row-height="\${args.rowHeight}"
      cols='\${JSON.stringify(args.columnDefs)}'
      rows='\${JSON.stringify(args.rowData)}'
      table-height="\${args.tableHeight}"
      pagination="\${args.pagination}"
      filter-orientation="\${args.filterOrientation}">
    </ifx-table>\`;
  return table;
}`,...s.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => {
  const table = \`
    <ifx-table
      row-height="\${args.rowHeight}"
      cols='\${JSON.stringify(args.columnDefs)}'
      rows='\${JSON.stringify(args.rowData)}'
      table-height="\${args.tableHeight}"
      pagination="\${args.pagination}"
      filter-orientation="\${args.filterOrientation}">
    </ifx-table>\`;
  return table;
}`,...f.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => {
  const table = \`
    <ifx-table
      row-height="\${args.rowHeight}"
      cols='\${JSON.stringify(args.columnDefs)}'
      rows='\${JSON.stringify(args.rowData)}'
      table-height="\${args.tableHeight}"
      pagination="\${args.pagination}"
      filter-orientation="\${args.filterOrientation}">
    </ifx-table>\`;
  return table;
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
  const table = \`
    <ifx-table
      row-height="\${args.rowHeight}"
      cols='\${JSON.stringify(args.columnDefs)}'
      rows='\${JSON.stringify(args.rowData)}'
      table-height="\${args.tableHeight}"
      pagination="\${args.pagination}"
      filter-orientation="none">
      <ifx-button slot="inner-button">Button</ifx-button>
      <ifx-button slot="inner-button">Button</ifx-button>
    </ifx-table>\`;
  return table;
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => {
  if (args.filterOrientation === "none") {
    const table = \`<ifx-table
    row-height="\${args.rowHeight}"
    cols='\${JSON.stringify(args.columnDefs)}'
    rows='\${JSON.stringify(args.rowData)}'
    table-height="\${args.tableHeight}"
    pagination="\${args.pagination}"
    server-side-pagination="\${args.serverSidePagination}"
    pagination-items-per-page='\${args.paginationItemsPerPage}'
    filter-orientation="\${args.filterOrientation}"
    variant='\${args.variant}'>
</ifx-table>\`;
    return table;
  } else {
    //sidebar
    const filterAccordions = args.columnDefs.map(column => {
      const uniqueColValues = [...new Set(args.rowData.map(row => row[column.field]))];
      const filterOptions = uniqueColValues.map((option, index) => {
        return \`<ifx-list-entry slot="slot\${index}" label="\${option}" value="false"></ifx-list-entry>\`;
      }).join("");
      return \`
      <ifx-filter-accordion slot="filter-accordion" filter-group-name="\${column.field}">
        <ifx-list slot="list" type="checkbox" name="\${column.field}" max-visible-items="6">
          \${filterOptions}
        </ifx-list>
      </ifx-filter-accordion>
    \`;
    }).join("");

    //topbar
    const filterComponents = args.columnDefs.map((column, index) => {
      const uniqueColValues = [...new Set(args.rowData.map(row => row[column.field]))].filter(v => v !== undefined && v !== null && v !== "");
      const options = uniqueColValues.map(option => ({
        value: option,
        label: option,
        selected: false
      }));
      const optionsString = JSON.stringify(options);
      return \`
        <ifx-set-filter slot="filter-component-\${index + 1}"
            options='\${optionsString}'
            filter-label='\${column.headerName}'
            filter-name='\${column.field}'
            type='multi-select'
            placeholder='Select \${column.headerName}'>
          </ifx-set-filter>
          \`;
    }).join("\\n");
    const filterTypeGroupComponent = args.filterOrientation === "sidebar" ? \`<ifx-filter-type-group slot="sidebar-filter">
        <div slot="filter-search">
          <ifx-filter-search filter-orientation="sidebar" filter-name="search"></ifx-filter-search>
        </div>
        \${filterAccordions}
    </ifx-filter-type-group>\` : \`<ifx-filter-bar slot="topbar-filter" max-shown-filters="3">
        <ifx-filter-search slot="filter-search" filter-orientation="topbar"></ifx-filter-search>
        \${filterComponents}
   </ifx-filter-bar>\`;
    const table = \`<ifx-table
    headline="\${args.headline}"
    row-height="\${args.rowHeight}"
    cols='\${JSON.stringify(args.columnDefs)}'
    rows='\${JSON.stringify(args.rowData)}'
    table-height="\${args.tableHeight}"
    pagination="\${args.pagination}"
    filter-orientation="\${args.filterOrientation}">
    \${filterTypeGroupComponent}
</ifx-table>\`;
    return table;
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => {
  if (args.filterOrientation === "none") {
    const table = \`<ifx-table
    row-height="\${args.rowHeight}"
    cols='\${JSON.stringify(args.columnDefs)}'
    rows='\${JSON.stringify(args.rowData)}'
    table-height="\${args.tableHeight}"
    pagination="\${args.pagination}"
    server-side-pagination="\${args.serverSidePagination}"
    pagination-items-per-page='\${args.paginationItemsPerPage}'
    filter-orientation="\${args.filterOrientation}"
    variant='\${args.variant}'>
</ifx-table>\`;
    return table;
  } else {
    //sidebar
    const filterAccordions = args.columnDefs.map(column => {
      const uniqueColValues = [...new Set(args.rowData.map(row => row[column.field]))];
      const filterOptions = uniqueColValues.map((option, index) => {
        return \`<ifx-list-entry slot="slot\${index}" label="\${option}" value="false"></ifx-list-entry>\`;
      }).join("");
      return \`
      <ifx-filter-accordion slot="filter-accordion" filter-group-name="\${column.field}">
        <ifx-list slot="list" type="checkbox" name="\${column.field}" max-visible-items="6">
          \${filterOptions}
        </ifx-list>
      </ifx-filter-accordion>
    \`;
    }).join("");

    //topbar
    const filterComponents = args.columnDefs.map((column, index) => {
      const uniqueColValues = [...new Set(args.rowData.map(row => row[column.field]))].filter(v => v !== undefined && v !== null && v !== "");
      const options = uniqueColValues.map(option => ({
        value: option,
        label: option,
        selected: false
      }));
      const optionsString = JSON.stringify(options);
      return \`
        <ifx-set-filter slot="filter-component-\${index + 1}"
            options='\${optionsString}'
            filter-label='\${column.headerName}'
            filter-name='\${column.field}'
            type='multi-select'
            placeholder='Select \${column.headerName}'>
          </ifx-set-filter>
          \`;
    }).join("\\n");
    const filterTypeGroupComponent = args.filterOrientation === "sidebar" ? \`<ifx-filter-type-group slot="sidebar-filter">
        <div slot="filter-search">
          <ifx-filter-search filter-orientation="sidebar" filter-name="search"></ifx-filter-search>
        </div>
        \${filterAccordions}
    </ifx-filter-type-group>\` : \`<ifx-filter-bar slot="topbar-filter" max-shown-filters="3">
        <ifx-filter-search slot="filter-search" filter-orientation="topbar"></ifx-filter-search>
        \${filterComponents}
   </ifx-filter-bar>\`;
    const table = \`<ifx-table
    headline="\${args.headline}"
    row-height="\${args.rowHeight}"
    cols='\${JSON.stringify(args.columnDefs)}'
    rows='\${JSON.stringify(args.rowData)}'
    table-height="\${args.tableHeight}"
    pagination="\${args.pagination}"
    filter-orientation="\${args.filterOrientation}">
    \${filterTypeGroupComponent}
</ifx-table>\`;
    return table;
  }
}`,...u.parameters?.docs?.source}}};const q=["DefaultState","Pagination","ServerSidePagination","IncludesButtons","IncludesStatus","IncludesLink","IncludesBreakingline","IncludesInnerButtons","SidebarFilter","TopbarFilter"],M=Object.freeze(Object.defineProperty({__proto__:null,DefaultState:a,IncludesBreakingline:c,IncludesButtons:l,IncludesInnerButtons:p,IncludesLink:f,IncludesStatus:s,Pagination:r,ServerSidePagination:o,SidebarFilter:g,TopbarFilter:u,__namedExportsOrder:q,default:J},Symbol.toStringTag,{value:"Module"}));export{a as D,l as I,r as P,o as S,M as T,p as a,g as b,u as c};
