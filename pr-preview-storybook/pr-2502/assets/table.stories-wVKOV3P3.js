import{b as n}from"./iframe-CDibF9dm.js";const i=[{headerName:"ID",field:"id",sortable:!0,sort:"desc",unSortIcon:!0},{headerName:"Item",field:"item",sortable:!0,unSortIcon:!0},{headerName:"Price",field:"price"},{headerName:"Date",field:"date"}],o=[{id:1,item:"Item 1",price:356,date:"2025-05-11"},{id:2,item:"Item 2",price:55,date:"2025-03-26"},{id:3,item:"Item 3",price:24},{id:4,item:"Item 4",price:874,date:"2025-04-30"},{id:5,item:"Item 5",price:689,date:"2025-09-14"},{id:6,item:"Item 6",price:46},{id:7,item:"Item 7",price:421,date:"2026-07-25"},{id:8,item:"Item 8",price:17,date:"2026-06-28"},{id:9,item:"Item 9",price:752},{id:10,item:"Item 10",price:73,date:"2026-01-27"},{id:11,item:"Item 11",price:94,date:"2026-10-31"},{id:12,item:"Item 12",price:846}],s={title:"Components/Table (basic)",args:{tableHeight:"auto",rowHeight:"default",variant:"default",columnValuePosition:"left"},argTypes:{tableHeight:{description:"Controls the height of the table.",table:{category:"ifx-table props",defaultValue:{summary:"auto"},type:{summary:"Options",detail:`Default: "auto"
Example for fixed height: "400px"`}}},rowHeight:{description:"Controls the height of the rows.",table:{category:"ifx-table props",defaultValue:{summary:"default"},type:{summary:"Options",detail:`Default: 40
Compact: 32
Options: 40, 32`}},options:["compact","default"],control:{type:"radio"}},cols:{description:"The array must be a string for Vanilla JavaScript, and stringified or array object for React/Vue/Angular.",table:{category:"ifx-table props",type:{summary:"Column header options",detail:`Standard columns:
headerName: "Model", 
field: "model", 
sortable: true (optional),
sort: "desc" (optional) => descending sort (show icon)
unSortIcon: true (optional) => unsorted (show icon)
resizable: false
flex: 1
minWidth: 50px
width: 100px

Special columns:
headerName: "",
field: "button"
headerName: "",
field: "link",`}}},rows:{description:"The array must be a string for Vanilla JavaScript, and stringified or array object for React/Vue/Angular.",table:{category:"ifx-table props",type:{summary:"Row data options",detail:`Standard row values:
make: "Toyota", 
model: "Celica", 
price: 35000
resizable: false
flex: 1
minWidth: 50px
width: 100px

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
}`}}},variant:{description:"Sets the variant of the table.",table:{category:"ifx-table props",defaultValue:{summary:"default"}},options:["default","zebra"],control:{type:"radio"}},columnValuePosition:{options:["left","center"],control:{type:"radio"},description:"Set the position of the column values.",table:{category:"ifx-table props",defaultValue:{summary:"left"},type:{summary:"left | center"}}}}},r=e=>n`<ifx-basic-table 
cols='${JSON.stringify(e.cols)}' 
rows='${JSON.stringify(e.rows)}'
table-height='${e.tableHeight}'
row-height='${e.rowHeight}'
variant='${e.variant}'
column-value-position='${e.columnValuePosition}'>
</ifx-basic-table>`,t=r.bind({});t.args={cols:i,rows:o,tableHeight:"auto"};const a=r.bind({});a.args={tableHeight:"400px",cols:i,rows:o};const l=["Default","FixedHeight"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"(args: any) => html`<ifx-basic-table \ncols='${JSON.stringify(args.cols)}' \nrows='${JSON.stringify(args.rows)}'\ntable-height='${args.tableHeight}'\nrow-height='${args.rowHeight}'\nvariant='${args.variant}'\ncolumn-value-position='${args.columnValuePosition}'>\n</ifx-basic-table>`",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"(args: any) => html`<ifx-basic-table \ncols='${JSON.stringify(args.cols)}' \nrows='${JSON.stringify(args.rows)}'\ntable-height='${args.tableHeight}'\nrow-height='${args.rowHeight}'\nvariant='${args.variant}'\ncolumn-value-position='${args.columnValuePosition}'>\n</ifx-basic-table>`",...a.parameters?.docs?.source}}};const d=Object.freeze(Object.defineProperty({__proto__:null,Default:t,FixedHeight:a,__namedExportsOrder:l,default:s},Symbol.toStringTag,{value:"Module"}));export{t as D,a as F,d as T};
