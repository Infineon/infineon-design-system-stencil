//default
const columnDefs = [
  { headerName: 'Make', field: 'make', sortable: true, sort: 'desc', unSortIcon: true },
  { headerName: 'Model', field: 'model', sortable: true, unSortIcon: true },
  { headerName: 'Price', field: 'price' },
  { headerName: 'Age', field: 'age' }

];
const rowData = [
  { make: 'Toyota', model: 'Celica', price: 35000, age: 10 },
  { make: 'Ford', model: 'Mondeo', price: 32000, age: 12 },
  { make: 'Porsche', model: 'Boxster', price: 72000 }
];

//table with button col
const columnDefsWithButtonCol = [
  { headerName: 'Make', field: 'make', sortable: true, sort: 'desc', unSortIcon: true },
  { headerName: 'Model', field: 'model', sortable: true, unSortIcon: true },
  { headerName: 'Price', field: 'price' },
  { headerName: 'Age', field: 'age' },
  { headerName: '', field: 'button' }
];

const rowDataWithButtonCol = [
  {
    make: 'Toyota', model: 'Celica', price: 35000, age: 10, button: 'something about Toyota'
  },
  { make: 'Ford', model: 'Mondeo', price: 32000, age: 12, button: 'something about Ford' },
  {
    make: 'Porsche', model: 'Boxster', price: 72000, button: {
      disabled: false,
      variant: "outline",
      size: "s",
      target: "_blank",
      color: "secondary",
      text: "Button"
      // ... you can extend this as per the properties of `ifx-button`
    }
  }
];

//other example
// const columnDefsDragAndDrop = [
//   { valueGetter: '"Drag"', dndSource: true },
//   { field: 'id' },
//   { field: 'color' },
//   { field: 'value1' },
//   { field: 'value2' },
// ];

// var rowIdSequence = 100;
// function getRowDataDragAndDrop() {
//   var rowDataDragAndDrop = [];
//   [
//     'Red',
//     'Green',
//     'Blue',
//     'Red',
//     'Green',
//     'Blue',
//     'Red',
//     'Green',
//     'Blue',
//   ].forEach(function (color) {
//     var newDataItem = {
//       id: rowIdSequence++,
//       color: color,
//       value1: Math.floor(Math.random() * 100),
//       value2: Math.floor(Math.random() * 100),
//     };
//     rowDataDragAndDrop.push(newDataItem);
//   });
//   return rowDataDragAndDrop;
// }


export default {
  title: 'Components/Table',
  tags: ['autodocs'],
  args: {
    rowHeight: 40,
  },
  argTypes: {
    rowHeight: {
      options: ['compact', 'default'],
      control: { type: 'radio' },
    },
    columnDefs: {
      table: {
        type: {
          summary: 'Column header options',
          detail: 'Standard columns:\nheaderName: "Model", \nfield: "model", \nsortable: true (optional),\nsort: "desc" (optional) => descending sort (show icon)\nunSortIcon: true (optional) => unsorted (show icon)\n\nSpecial columns:\nheaderName: "",\nfield: "button"\nheaderName: "",\nfield: "link"',
        },
      },
    },
    rowData: {
      table: {
        type: {
          summary: 'Row data options',
          detail: 'Standard row values:\nmake: "Toyota", \nmodel: "Celica", \nprice: 35000 \n\nSpecial row values (incl buttons):\nmake: "Porsche",\nmodel: "Boxster",\nprice: "72000",\nbutton: { \ndisabled: false (optional),\nvariant: "outline" (optional)\nsize: "s" (optional),\ntext: "Button"\n...other ifx-button properties\n}',
        },
      },
    }
  }
};


const DefaultTemplate = (args) => `<ifx-table 
row-height='${args.rowHeight}'
cols='${JSON.stringify(args.columnDefs)}' 
rows='${JSON.stringify(args.rowData)}'>
</ifx-table>`;

export const Default = DefaultTemplate.bind({});
Default.args = {
  rowHeight: 'default',
  columnDefs: columnDefs,
  rowData: rowData,
};



export const IncludesButtons = DefaultTemplate.bind({});
IncludesButtons.args = {
  rowHeight: 'default',
  columnDefs: columnDefsWithButtonCol,
  rowData: rowDataWithButtonCol,
};


// export const DragAndDrop = DefaultTemplate.bind({});
// DragAndDrop.args = {
//   columnDefs: columnDefsDragAndDrop,
//   rowData: getRowDataDragAndDrop(),
// };