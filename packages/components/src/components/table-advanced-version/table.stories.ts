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
  { make: 'Porsche', model: 'Boxster', price: 72000 },
  { make: 'Bmw', model: 'x', price: 72000 },
  { make: 'Mercedes', model: 'y', price: 72000 },
  { make: 'Ferrari', model: 'z', price: 72000 },
  { make: 'Chrysler', model: 'a', price: 72000 },
  { make: 'Range rover', model: 'b', price: 72000 },
  { make: 'Tesla', model: 'x', price: 72000 },
  { make: 'Audi', model: '3', price: 72000 },
  { make: 'Landrover', model: 'x', price: 72000 },


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
      variant: "secondary",
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
  title: 'Under Development/Table (advanced)',
  // tags: ['autodocs'],
  args: {
    tableHeight: 'auto',
    pagination: false,
    paginationPageSize: 10,
    currentPage: 1,
    rowHeight: 40,
    showLoading: false,
  },
  argTypes: {
    tableHeight: {
      table: {
        type: {
          summary: 'Options',
          detail: 'Default: "auto"\nExample for fixed height: "400px"',
        }
      },
    },
    paginationPageSize: {
      description: "Results per page: minimum 10 - maximum 30",
      control: { type: 'number', min: 10, max: 30, step: 10 }
    },
    showLoading: {
      options: [true, false],
      control: { type: 'radio' },
    },
    rowHeight: {
      options: ['compact', 'default'],
      control: { type: 'radio' },
    },
    enableFiltering: {
      options: [true, false],
      control: { type: 'radio' },
    },
    filterOrientation: {
      options: ['sideBar', 'topBar'],
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




const DefaultTemplate = (args) => {
  let columnFilters = args.columnDefs.map(column => {
    let uniqueColValues = [...new Set(args.rowData.map(row => row[column.field]))];
    return {
      name: column.field,
      options: uniqueColValues.map(option => {
        return { label: option, value: option, selected: false };
      })
    };
  });

  // Create main table element
  let ifxTable = document.createElement('ifx-table');
  ifxTable.setAttribute('row-height', args.rowHeight);
  ifxTable.setAttribute('cols', JSON.stringify(args.columnDefs));
  ifxTable.setAttribute('rows', JSON.stringify(args.rowData));
  ifxTable.setAttribute('table-height', args.tableHeight);
  ifxTable.setAttribute('pagination', args.pagination);
  ifxTable.setAttribute('pagination-page-size', args.paginationPageSize);
  ifxTable.setAttribute('enable-filtering', args.enableFiltering);
  ifxTable.setAttribute('filter-orientation', args.filterOrientation);


  // Create set-filter elements and append to main table element
  columnFilters.forEach((columnFilter, index) => {
    let filterType;
    switch (index) {
      case 0:
        filterType = 'single-select';
        break;
      case 1:
        filterType = 'multi-select';
        break;
      default:
        filterType = 'text';
    }
    let ifxSetFilter = document.createElement('ifx-set-filter');
    ifxSetFilter.setAttribute('slot', 'set-filter');
    ifxSetFilter.setAttribute('filter-name', columnFilter.name);
    ifxSetFilter.setAttribute('filter-label', `${filterType} filter for: ${columnFilter.name}`);
    ifxSetFilter.setAttribute('placeholder', 'Placeholder');
    ifxSetFilter.setAttribute('type', filterType);
    if (['single-select', 'multi-select'].includes(filterType)) {
      ifxSetFilter.setAttribute('options', JSON.stringify(columnFilter.options));
    }
    ifxTable.appendChild(ifxSetFilter);
  });

  return ifxTable.outerHTML;
}

export const Pagination = DefaultTemplate.bind({});
Pagination.args = {
  pagination: true,
  paginationPageSize: 10,
  rowHeight: 'default',
  columnDefs: columnDefs,
  rowData: rowData,
  enableFiltering: false,
};


export const IncludesButtons = DefaultTemplate.bind({});
IncludesButtons.args = {
  rowHeight: 'default',
  columnDefs: columnDefsWithButtonCol,
  rowData: rowDataWithButtonCol,
  enableFiltering: false,
};


export const SetFilter = DefaultTemplate.bind({});
SetFilter.args = {
  rowHeight: 'default',
  columnDefs: columnDefs,
  rowData: rowData,
  enableFiltering: true,
  filterOrientation: 'topBar'
};


// export const DragAndDrop = DefaultTemplate.bind({});
// DragAndDrop.args = {
//   columnDefs: columnDefsDragAndDrop,
//   rowData: getRowDataDragAndDrop(),
// };