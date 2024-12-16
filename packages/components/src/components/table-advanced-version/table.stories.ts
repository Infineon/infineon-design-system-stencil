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

const columnDefsWithButtonCol = [
  { headerName: 'Make', field: 'make', sortable: true, sort: 'desc', unSortIcon: true },
  { headerName: 'Model', field: 'model', sortable: true, unSortIcon: true },
  { headerName: 'Price', field: 'price' },
  { headerName: 'Age', field: 'age' },
  { 
    headerName: '', 
    field: 'button',
  }
];


const rowDataWithButtonCol = [
  {
    make: 'Toyota', model: 'Celica', price: 35000, age: 10, button: {
      disabled: false,
      variant: "secondary",
      size: "s",
      target: "_blank",
      href: "https://www.w3schools.com/",
      theme: "default",
      type: "button",
      fullWidth: true,
      text: "Toyota Button"
    }
  },
  {
    make: 'Ford', model: 'Mondeo', price: 32000, age: 12, button: {
      disabled: false,
      variant: "secondary",
      size: "s",
      target: "_blank",
      href: "https://www.w3schools.com/",
      theme: "default",
      type: "button",
      fullWidth: true,
      text: "Ford Button"
    }
  },
  {
    make: 'Porsche', model: 'Boxster', price: 72000, button: {
      disabled: false,
      variant: "secondary",
      size: "s",
      target: "_blank",
      href: "https://www.w3schools.com/",
      theme: "default",
      type: "button",
      fullWidth: true,
      text: "Porsche Button"
    }
  }
];
 
export default {
  title: 'Components/Table (advanced)',
  args: {
    tableHeight: 'auto',
    pagination: false,
    paginationPageSize: 10,
    currentPage: 1,
    rowHeight: 40,
    showLoading: false,
    buttonRendererOptions: {
      onButtonClick: (params, event) => {
        console.log('Button clicked:', params, event);
      }
    }
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
    filterOrientation: {
      options: ['sidebar', 'topbar', 'none'],
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
    },
    buttonRendererOptions: {
      control: 'object',
      description: 'Options for button cell renderer, including event handlers.',
      table: {
        type: {
          summary: 'Button Renderer Options',
          detail: 'Custom event handlers and other options for the button cell renderer in the table.'
        },
      },
    },
  }
};

const DefaultTemplate = (args) => {
  const table = `
    <ifx-table
      row-height="${args.rowHeight}"
      cols='${JSON.stringify(args.columnDefs)}'
      rows='${JSON.stringify(args.rowData)}'
      table-height="${args.tableHeight}"
      pagination="${args.pagination}"
      pagination-page-size="${args.paginationPageSize}"
      filter-orientation="${args.filterOrientation}"
      button-renderer-options='${JSON.stringify(args.buttonRendererOptions)}'>
    </ifx-table>`;
  return table;
};


export const Pagination = DefaultTemplate.bind({});
Pagination.args = {
  pagination: true,
  paginationPageSize: 10,
  rowHeight: 'default',
  columnDefs: columnDefs,
  rowData: rowData,
  filterOrientation: 'none',
  buttonRendererOptions: {
    onButtonClick: (params, event) => {
      console.log('Button clicked:', params, event);
    }
  }
};


const handleButtonClick = (params, _event) => {
  console.log('Button clicked:', params.data.make);
};

const CustomCellTemplate = (args) => {
  const table = document.createElement('ifx-table');
  
  table.setAttribute('cols', JSON.stringify(args.columnDefs));
  table.setAttribute('rows', JSON.stringify(args.rowData));
  table.setAttribute('row-height', args.rowHeight);
  table.setAttribute('table-height', args.tableHeight);
  table.setAttribute('pagination', String(args.pagination));
  table.setAttribute('pagination-page-size', String(args.paginationPageSize));
  table.setAttribute('filter-orientation', args.filterOrientation);
  
  // Set the property directly (not as an attribute)
  table.buttonRendererOptions = args.buttonRendererOptions

  return table;
};



export const IncludesButtons = CustomCellTemplate.bind({});
IncludesButtons.args = {
  rowHeight: 'default',
  columnDefs: columnDefsWithButtonCol,
  rowData: rowDataWithButtonCol,
  filterOrientation: 'none',
  pagination: false,
  paginationPageSize: 10,
  buttonRendererOptions: {
    onButtonClick: handleButtonClick
  }
};

export const SidebarFilter = DefaultTemplate.bind({});
SidebarFilter.args = {
  rowHeight: 'default',
  columnDefs: columnDefs,
  rowData: rowData,
  filterOrientation: 'sidebar',
  buttonRendererOptions: {
    onButtonClick: (params, event) => {
      console.log('Button clicked:', params, event);
    }
  }
};

export const TopbarFilter = DefaultTemplate.bind({});
TopbarFilter.args = {
  rowHeight: 'default',
  columnDefs: columnDefs,
  rowData: rowData,
  filterOrientation: 'topbar',
  buttonRendererOptions: {
    onButtonClick: (params, event) => {
      console.log('Button clicked:', params, event);
    }
  }
};
