const o=[{headerName:"Make",field:"make",sortable:!0,sort:"desc",unSortIcon:!0},{headerName:"Model",field:"model",sortable:!0,unSortIcon:!0},{headerName:"Price",field:"price"},{headerName:"Age",field:"age"}],r=[{make:"Toyota",model:"Celica",price:35e3,age:10},{make:"Ford",model:"Mondeo",price:32e3,age:12},{make:"Porsche",model:"Boxster",price:72e3},{make:"Toyota",model:"Celica",price:37e3,age:8},{make:"Ford",model:"Mondeo",price:34e3,age:10},{make:"Porsche",model:"Boxster",price:72e3},{make:"Toyota",model:"Celica",price:38e3,age:7},{make:"Ford",model:"Mondeo",price:36e3,age:8},{make:"Porsche",model:"Boxster",price:72e3},{make:"Toyota",model:"Celica",price:39e3,age:2},{make:"Ford",model:"Mondeo",price:38e3,age:6},{make:"Porsche",model:"Boxster",price:72e3}],s={title:"Components/Table (basic)",args:{tableHeight:"auto",rowHeight:"default",variant:"default"},argTypes:{tableHeight:{description:"Controls the height of the table.",table:{category:"ifx-table props",defaultValue:{summary:"auto"},type:{summary:"Options",detail:`Default: "auto"
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
}`}}},variant:{description:"Sets the variant of the table.",table:{category:"ifx-table props",defaultValue:{summary:"default"}},options:["default","zebra"],control:{type:"radio"}}}},i=t=>`<ifx-basic-table 
cols='${JSON.stringify(t.cols)}' 
rows='${JSON.stringify(t.rows)}'
table-height='${t.tableHeight}'
row-height='${t.rowHeight}'
variant='${t.variant}'>
</ifx-basic-table>`,e=i.bind({});e.args={cols:o,rows:r,tableHeight:"auto"};const a=i.bind({});a.args={tableHeight:"400px",cols:o,rows:r};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"args => `<ifx-basic-table \ncols='${JSON.stringify(args.cols)}' \nrows='${JSON.stringify(args.rows)}'\ntable-height='${args.tableHeight}'\nrow-height='${args.rowHeight}'\nvariant='${args.variant}'>\n</ifx-basic-table>`",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"args => `<ifx-basic-table \ncols='${JSON.stringify(args.cols)}' \nrows='${JSON.stringify(args.rows)}'\ntable-height='${args.tableHeight}'\nrow-height='${args.rowHeight}'\nvariant='${args.variant}'>\n</ifx-basic-table>`",...a.parameters?.docs?.source}}};const n=["Default","FixedHeight"],l=Object.freeze(Object.defineProperty({__proto__:null,Default:e,FixedHeight:a,__namedExportsOrder:n,default:s},Symbol.toStringTag,{value:"Module"}));export{e as D,a as F,l as T};
