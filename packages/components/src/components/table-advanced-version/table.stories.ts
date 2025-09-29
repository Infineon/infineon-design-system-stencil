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

const rowDataWithBreakingLine = [
  { make: 'Toyota\n and Mazda', model: 'Celica', price: 35000, age: 10 },
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

const columnDefsWithStatusCol = [
  { headerName: 'Make', field: 'make', sortable: true, sort: 'desc', unSortIcon: true },
  { headerName: 'Model', field: 'model', sortable: true, unSortIcon: true },
  { headerName: 'Price', field: 'price' },
  { headerName: 'Age', field: 'age' },
  {
    headerName: 'Status',
    field: 'status',
  }
];

const columnDefsWithLinkCol = [
  { headerName: 'Make', field: 'make', sortable: true, sort: 'desc', unSortIcon: true },
  { headerName: 'Model', field: 'model', sortable: true, unSortIcon: true },
  { headerName: 'Price', field: 'price' },
  { headerName: 'Age', field: 'age' },
  {
    headerName: 'Link',
    field: 'link',
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
const rowDataWithStatusCol = [
  {
    make: 'Toyota', model: 'Celica', price: 35000, age: 10, status: {
      label: "Available",
      color: "green-500",
      border: true
    }
  },
  {
    make: 'Ford', model: 'Mondeo', price: 32000, age: 12, status: {
      label: "Out of Stock",
      color: "red-500",
      border: true
    }
  },
  {
    make: 'Porsche', model: 'Boxster', price: 72000, status: {
      label: "Coming Soon",
      color: "orange-500",
      border: true
    }
  }
];

const rowDataWithLinkCol = [
  {
    make: 'Toyota', model: 'Celica', price: 35000, age: 10, link: {
      disabled: false,
      variant: "bold",
      size: "s",
      target: "_blank",
      href: "https://www.google.com/",
      text: "Link"
    }
  },
  {
    make: 'Ford', model: 'Mondeo', price: 32000, age: 12, link: {
      disabled: false,
      variant: "underlined",
      size: "s",
      target: "_blank",
      href: "https://www.yahoo.com/",
      text: "Link"
    }
  },
  {
    make: 'Porsche', model: 'Boxster', price: 72000, link: {
      disabled: false,
      variant: "title",
      size: "s",
      target: "_blank",
      href: "https://www.bing.com/",
      text: "Link"
    }
  }
];

export default {
  title: 'Components/Table (advanced)',
  args: {
    tableHeight: 'auto',
    pagination: false,
    serverSidePagination: false,
    rowHeight: 40,
    showLoading: false,
    variant: 'default'
  },
  argTypes: {
    tableHeight: {
      description: 'Set the height of the table.',
      table: {
        category: 'ifx-table props',
        type: {
          summary: 'Options',
          detail: 'Default: "auto"\nExample for fixed height: "400px"',
        }
      },
    },
    pagination: {
      description: 'Show pagination control.',
      control: { type: 'boolean' },
      table: {
        category: 'ifx-table props',
        defaultValue: {
          summary: true
        },
        type: {
          summary: 'Boolean',
        },
      },
    },
    serverSidePagination: {
      description: 'Enables server-side pagination.',
      control: { type: 'boolean' },
      table: {
        category: 'ifx-table props',
        defaultValue: {
          summary: true
        },
        type: {
          summary: 'Boolean',
        },
      },
    },
      paginationItemsPerPage: {
      description: 'Sets the items per page of the table pagination',
      table: {
        category: 'ifx-table props',
      },
    },
    showLoading: {
      description: 'Show loading spinner.',
      options: [true, false],
      control: { type: 'radio' },
      table: {
        category: 'ifx-table props',
        defaultValue: {
          summary: false
        },
      },
    },
    rowHeight: {
      description: 'Set the height of the rows.',
      options: ['compact', 'default'],
      control: { type: 'radio' },
      table: {
        category: 'ifx-table props',
        defaultValue: {
          summary: 'default'
        },
      },
    },
    filterOrientation: {
      description: 'Set the filter orientation.',
      options: ['sidebar', 'topbar', 'none'],
      control: { type: 'radio' },
      table: {
        category: 'ifx-table props',
        defaultValue: {
          summary: 'none'
        },
      },
    },
    columnDefs: {
      description: 'Column header options',
      name: 'cols',
      table: {
        category: 'ifx-table props',
        type: {
          summary: 'Column header options',
          detail: 'Standard columns:\nheaderName: "Model", \nfield: "model", \nsortable: true (optional),\nsort: "desc" (optional) => descending sort (show icon)\nunSortIcon: true (optional) => unsorted (show icon)\n\nSpecial columns:\nheaderName: "",\nfield: "button"\nheaderName: "",\nfield: "link"',
        },
      },
    },
    rowData: {
      description: 'Row data options',
      name: 'rows',
      table: {
        category: 'ifx-table props',
        type: {
          summary: 'Row data options',
          detail: 'Standard row values:\nmake: "Toyota", \nmodel: "Celica", \nprice: 35000 \n\nSpecial row values (incl buttons):\nmake: "Porsche",\nmodel: "Boxster",\nprice: "72000",\nbutton: { \ndisabled: false (optional),\nvariant: "outline" (optional)\nsize: "s" (optional),\ntext: "Button"\n...other ifx-button properties\n}',
        },
      },
    },
    variant: {
      description: 'Sets the variant of the table.',
      table: {
        category: 'ifx-table props',
        defaultValue: { summary: 'default' },
      },
      options: ['default', 'zebra'],
      control: { type: 'radio' },
    },
  }
};



const DefaultTemplate = (args) => {
  if (args.filterOrientation === 'none') {
    const table = `<ifx-table
    row-height="${args.rowHeight}"
    cols='${JSON.stringify(args.columnDefs)}'
    rows='${JSON.stringify(args.rowData)}'
    table-height="${args.tableHeight}"
    pagination="${args.pagination}"
    server-side-pagination="${args.serverSidePagination}"
    pagination-items-per-page='${args.paginationItemsPerPage}'
    filter-orientation="${args.filterOrientation}"
    variant='${args.variant}'>
</ifx-table>`;
    return table;
  } else {
    //sidebar
    const filterAccordions = args.columnDefs.map(column => {
      const uniqueColValues = [...new Set(args.rowData.map(row => row[column.field]))];
      const filterOptions = uniqueColValues.map((option, index) => {
        return `<ifx-list-entry slot="slot${index}" label="${option}" value="false"></ifx-list-entry>`;
      }).join('');

      return `
      <ifx-filter-accordion slot="filter-accordion" filter-group-name="${column.field}">
        <ifx-list slot="list" type="checkbox" name="${column.field}" max-visible-items="6">
          ${filterOptions}
        </ifx-list>
      </ifx-filter-accordion>
    `;
    }).join('');

    //topbar
    const filterComponents = args.columnDefs.map((column, index) => {
      const uniqueColValues = [...new Set(args.rowData.map(row => row[column.field]))].filter(v => v !== undefined && v !== null && v !== '');
      const options = uniqueColValues.map(option => ({
        value: option,
        label: option,
        selected: false
      }));

      const optionsString = JSON.stringify(options);

      return `
        <ifx-set-filter slot="filter-component-${index + 1}"
            options='${optionsString}'
            filter-label='${column.headerName}'
            filter-name='${column.field}'
            type='multi-select'
            placeholder='Select ${column.headerName}'>
          </ifx-set-filter>
          `;
    }).join('\n');



    const filterTypeGroupComponent = args.filterOrientation === 'sidebar'
      ? `<ifx-filter-type-group slot="sidebar-filter">
        <div slot="filter-search">
          <ifx-filter-search filter-orientation="sidebar" filter-name="search"></ifx-filter-search>
        </div>
        ${filterAccordions}
    </ifx-filter-type-group>`
      :
      `<ifx-filter-bar slot="topbar-filter" max-shown-filters="3">
        <ifx-filter-search slot="filter-search" filter-orientation="topbar"></ifx-filter-search>
        ${filterComponents}
   </ifx-filter-bar>`;

    const table = `<ifx-table
    row-height="${args.rowHeight}"
    cols='${JSON.stringify(args.columnDefs)}'
    rows='${JSON.stringify(args.rowData)}'
    table-height="${args.tableHeight}"
    pagination="${args.pagination}"
    filter-orientation="${args.filterOrientation}">
    ${filterTypeGroupComponent}
</ifx-table>`;

    return table;
  }
};


export const DefaultState = DefaultTemplate.bind({});
DefaultState.args = {
  pagination: false,
  paginationItemsPerPage: '[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}]',
  rowHeight: 'default',
  columnDefs: columnDefs,
  rowData: rowData,
  filterOrientation: 'none',
};


export const Pagination = DefaultTemplate.bind({});
Pagination.args = {
  pagination: true,
  paginationItemsPerPage: '[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}]',
  rowHeight: 'default',
  columnDefs: columnDefs,
  rowData: rowData,
  filterOrientation: 'none',
};

export const ServerSidePagination = DefaultTemplate.bind({});
ServerSidePagination.args = {
  pagination: true,
  serverSidePagination: true,
  paginationItemsPerPage: '[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}]',
  rowHeight: 'default',
  columnDefs: columnDefs,
  rowData: rowData,
  filterOrientation: 'none',
};


const CustomCellTemplate = (args) => {
  const table = `
    <ifx-table
      row-height="${args.rowHeight}"
      cols='${JSON.stringify(args.columnDefs)}'
      rows='${JSON.stringify(args.rowData)}'
      table-height="${args.tableHeight}"
      pagination="${args.pagination}"
      filter-orientation="${args.filterOrientation}">
    </ifx-table>`;
  return table;
};

const CustomStatusCellTemplate = (args) => {
  const table = `
    <ifx-table
      row-height="${args.rowHeight}"
      cols='${JSON.stringify(args.columnDefs)}'
      rows='${JSON.stringify(args.rowData)}'
      table-height="${args.tableHeight}"
      pagination="${args.pagination}"
      filter-orientation="${args.filterOrientation}">
    </ifx-table>`;
  return table;
};

const CustomLinkCellTemplate = (args) => {
  const table = `
    <ifx-table
      row-height="${args.rowHeight}"
      cols='${JSON.stringify(args.columnDefs)}'
      rows='${JSON.stringify(args.rowData)}'
      table-height="${args.tableHeight}"
      pagination="${args.pagination}"
      filter-orientation="${args.filterOrientation}">
    </ifx-table>`;
  return table;
};

const BreakingLineTemplate = (args) => {
  const table = `
    <ifx-table
      row-height="${args.rowHeight}"
      cols='${JSON.stringify(args.columnDefs)}'
      rows='${JSON.stringify(args.rowData)}'
      table-height="${args.tableHeight}"
      pagination="${args.pagination}"
      filter-orientation="${args.filterOrientation}">
    </ifx-table>`;
  return table;
};

const InnerButtonsTemplate = (args) => {
  const table = `
    <ifx-table
      row-height="${args.rowHeight}"
      cols='${JSON.stringify(args.columnDefs)}'
      rows='${JSON.stringify(args.rowData)}'
      table-height="${args.tableHeight}"
      pagination="${args.pagination}"
      filter-orientation="none">
      <ifx-button slot="inner-button">Button</ifx-button>
      <ifx-button slot="inner-button">Button</ifx-button>
    </ifx-table>`;
  return table;
};

export const IncludesButtons = CustomCellTemplate.bind({});
IncludesButtons.args = {
  rowHeight: 'default',
  columnDefs: columnDefsWithButtonCol,
  rowData: rowDataWithButtonCol,
  filterOrientation: 'none',
  pagination: false,
};

export const IncludesStatus = CustomStatusCellTemplate.bind({});
IncludesStatus.args = {
  rowHeight: 'default',
  columnDefs: columnDefsWithStatusCol,
  rowData: rowDataWithStatusCol,
  filterOrientation: 'none',
  pagination: false,
};

export const IncludesLink = CustomLinkCellTemplate.bind({});
IncludesLink.args = {
  rowHeight: 'default',
  columnDefs: columnDefsWithLinkCol,
  rowData: rowDataWithLinkCol,
  filterOrientation: 'none',
  pagination: false,
};

export const IncludesBreakingline = BreakingLineTemplate.bind({});
IncludesBreakingline.args = {
  rowHeight: 'default',
  columnDefs: columnDefsWithStatusCol,
  rowData: rowDataWithBreakingLine,
  filterOrientation: 'none',
  pagination: false,
};

export const IncludesInnerButtons = InnerButtonsTemplate.bind({});
IncludesInnerButtons.args = {
  rowHeight: 'default',
  columnDefs: columnDefsWithStatusCol,
  rowData: rowData,
  filterOrientation: 'topbar',
  pagination: false,
};

export const SidebarFilter = DefaultTemplate.bind({});
SidebarFilter.args = {
  rowHeight: 'default',
  columnDefs: columnDefs,
  rowData: rowData,
  filterOrientation: 'sidebar',
};

export const TopbarFilter = DefaultTemplate.bind({});
TopbarFilter.args = {
  rowHeight: 'default',
  columnDefs: columnDefs,
  rowData: rowData,
  filterOrientation: 'topbar',
};
