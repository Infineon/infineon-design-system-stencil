import { html } from "lit";

const columnDefs = [
  { headerName: 'ID', field: 'id', sortable: true, sort: 'desc', unSortIcon: true },
  { headerName: 'Item', field: 'item', sortable: true, unSortIcon: true },
  { headerName: 'Price', field: 'price' },
  { headerName: 'Date', field: 'date' },
];

const rowData = [
  { id: '1', item: 'Item 1', price: 356, date: '2025-06-25' },
  { id: '2', item: 'Item 2', price: 55, date: '2025-03-26' },
  { id: '3', item: 'Item 3', price: 24 },
  { id: '4', item: 'x', price: 874 },
  { id: '5', item: 'x', price: 689 },
  { id: '6', item: 'x', price: 46 },
  { id: '7', item: 'Item 7', price: 421 },
  { id: '8', item: 'Item 8', price: 17 },
  { id: '9', item: 'x', price: 752 },
  { id: '10', item: 'Item 10', price: 73 },
  { id: '11', item: 'x', price: 94 },
];

const rowDataWithBreakingLine = [
  { id: 1, item: 'Item 1\n Item 1.2\n Item 1.3', price: 356, date: '2025-06-25' },
  { id: 2, item: 'Item 2', price: 55, date: '2025-03-26' },
  { id: 3, item: 'Item 3', price: 24 },
  { id: 4, item: 'x', price: 874 },
  { id: 5, item: 'x', price: 689 },
  { id: 6, item: 'x', price: 46 },
  { id: 7, item: 'Item 7', price: 421 },
  { id: 8, item: 'Item 8', price: 17 },
  { id: 9, item: 'x', price: 752 },
  { id: 10, item: 'Item 10', price: 73 },
  { id: 11, item: 'Item 11\n Item 11.2', price: 94 },
];

const columnDefsWithButtonCol = [
  { headerName: 'ID', field: 'id', sortable: true, sort: 'desc', unSortIcon: true },
  { headerName: 'Item', field: 'item', sortable: true, unSortIcon: true },
  { headerName: 'Price', field: 'price' },
  { headerName: 'Date', field: 'date' },
  {
    headerName: '',
    field: 'button',
  },
];

const columnDefsWithStatusCol = [
  { headerName: 'ID', field: 'id', sortable: true, sort: 'desc', unSortIcon: true },
  { headerName: 'Item', field: 'item', sortable: true, unSortIcon: true },
  { headerName: 'Price', field: 'price' },
  { headerName: 'Date', field: 'date' },
  {
    headerName: 'Status',
    field: 'status',
  },
];

const columnDefsWithLinkCol = [
  { headerName: 'ID', field: 'id', sortable: true, sort: 'desc', unSortIcon: true },
  { headerName: 'Item', field: 'item', sortable: true, unSortIcon: true },
  { headerName: 'Price', field: 'price' },
  { headerName: 'Date', field: 'date' },
  {
    headerName: 'Link',
    field: 'link',
  },
];

const rowDataWithButtonCol = [
  {
    id: 1,
    item: 'Item 1',
    price: 356,
    date: '2025-06-25',
    button: {
      disabled: false,
      variant: 'secondary',
      size: 's',
      target: '_blank',
      href: 'https://www.w3schools.com/',
      theme: 'default',
      type: 'button',
      fullWidth: true,
      text: 'Button',
    },
  },
  {
    id: 2,
    item: 'Item 2',
    price: 55,
    date: '2025-03-26',
    button: {
      disabled: false,
      variant: 'secondary',
      size: 's',
      target: '_blank',
      href: 'https://www.w3schools.com/',
      theme: 'default',
      type: 'button',
      fullWidth: true,
      text: 'Button',
    },
  },
  {
    id: 3,
    item: 'Item 3',
    price: 24,
    button: {
      disabled: false,
      variant: 'secondary',
      size: 's',
      target: '_blank',
      href: 'https://www.w3schools.com/',
      theme: 'default',
      type: 'button',
      fullWidth: true,
      text: 'Button',
    },
  },
];
const rowDataWithStatusCol = [
  {
    id: 1,
    item: 'Item 1',
    price: 356,
    date: '2025-06-25',
    status: {
      label: 'Available',
      color: 'green-500',
      border: true,
    },
  },
  {
    id: 2,
    item: 'Item 2',
    price: 55,
    date: '2025-03-26',
    status: {
      label: 'Out of Stock',
      color: 'red-500',
      border: true,
    },
  },
  {
    id: 3,
    item: 'Item 3',
    price: 24,
    status: {
      label: 'Coming Soon',
      color: 'orange-500',
      border: true,
    },
  },
];

const rowDataWithLinkCol = [
  {
    id: 1,
    item: 'Item 1',
    price: 356,
    date: '2025-06-25',
    link: {
      disabled: false,
      variant: 'bold',
      size: 's',
      target: '_blank',
      href: 'https://www.google.com/',
      text: 'Link',
    },
  },
  {
    id: 2,
    item: 'Item 2',
    price: 55,
    date: '2025-03-26',
    link: {
      disabled: false,
      variant: 'underlined',
      size: 's',
      target: '_blank',
      href: 'https://www.yahoo.com/',
      text: 'Link',
    },
  },
  {
    id: 3,
    item: 'Item 3',
    price: 24,
    link: {
      disabled: false,
      variant: 'title',
      size: 's',
      target: '_blank',
      href: 'https://www.bing.com/',
      text: 'Link',
    },
  },
];

export default {
  title: 'Components/Table (advanced)',
  args: {
    tableHeight: 'auto',
    pagination: false,
    serverSidePagination: false,
    rowHeight: 40,
    showLoading: false,
    variant: 'default',
    headline: 'Matching results',
    enableSelection: false,
    fitColumns: false,
    columnMinWidth: 200,
    columnWidth: 100
  },
  argTypes: {
    tableHeight: {
      description: 'Set the height of the table.',
      table: {
        category: 'ifx-table props',
        type: {
          summary: 'Options',
          detail: 'Default: "auto"\nExample for fixed height: "400px"',
        },
      },
    },
    pagination: {
      description: 'Show pagination control.',
      control: { type: 'boolean' },
      table: {
        category: 'ifx-table props',
        defaultValue: {
          summary: true,
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
          summary: true,
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
          summary: false,
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
          summary: 'default',
        },
      },
    },
    enableSelection: {
      description: 'Enables the selection of rows via a checkbox',
      options: [true, false],
      control: { type: 'radio' },
      table: {
        category: 'ifx-table props',
        defaultValue: {
          summary: 'default',
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
          summary: 'none',
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
          detail:
            'Standard columns:\nheaderName: "Model", \nfield: "model", \nsortable: true (optional),\nsort: "desc" (optional) => descending sort (show icon)\nunSortIcon: true (optional) => unsorted (show icon)\n\nSpecial columns:\nheaderName: "",\nfield: "button"\nheaderName: "",\nfield: "link"',
        },
      },
    },
    fitColumns: {
      description: 'Adjusts column width to fit content',
      table: {
        category: 'ifx-table props',
        type: {
          summary: 'Adjusts column width to content',
        },
      },
    },
    columnMinWidth: {
      description: 'Sets the min width of all columns. 100px by default.',
      table: {
        category: 'ifx-table props',
        type: {
          summary: 'Sets the min width of all columns',
        },
      },
    },
    columnWidth: {
      description: 'Sets the width of all columns.',
      table: {
        category: 'ifx-table props',
        type: {
          summary: 'Sets the width of all columns',
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
          detail:
            'Standard row values:\nid: 1, \nitem: "Item 1", \nprice: 356 \n\nSpecial row values (incl buttons):\nid: 2,\nitem: "Item 2",\nprice: "55",\nbutton: { \ndisabled: false (optional),\nvariant: "outline" (optional)\nsize: "s" (optional),\ntext: "Button"\n...other ifx-button properties\n}',
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

    headline: {
      description: 'Sets the headline of the table.',
      table: {
        category: 'ifx-table props',
        defaultValue: { summary: 'matching results' },
      },
    },

    ifxSelectionChange: {
      action: 'ifxSelectionChange',
      description: 'A custom event triggered on checkbox selection',
      table: {
        category: 'custom events',
        type: {
          summary: 'Framework integration',
          detail:
            'React: onIfxSelectionChange={handleInput}\nVue:@ifxSelectionChange="handleInput"\nAngular:(ifxSelectionChange)="handleInput()"\nVanillaJs:.addEventListener("ifxSelectionChange", (event) => {//handle input});',
        },
      },
    },

    ifxSortChange: {
      action: 'ifxSortChange',
      description: 'A custom event emitted on column sort change',
      table: {
        category: 'custom events',
        type: {
          summary: 'Framework integration',
          detail:
            'React: onIfxSortChange={handleInput}\nVue:@ifxIfxSortChange="handleInput"\nAngular:(ifxIfxSortChange)="handleInput()"\nVanillaJs:.addEventListener("ifxIfxSortChange", (event) => {//handle input});',
        },
      },
    },
  },
};

const DefaultTemplate = args => {
  if (args.filterOrientation === 'none') {
    const table = html`<ifx-table
    row-height="${args.rowHeight}"
    .cols='${JSON.stringify(args.columnDefs)}'
    .rows='${JSON.stringify(args.rowData)}'
    ?enable-selection="${args.enableSelection}"
    table-height="${args.tableHeight}"
    ?pagination="${args.pagination}"
    ?server-side-pagination="${args.serverSidePagination}"
    .pagination-items-per-page='${args.paginationItemsPerPage}'
    filter-orientation="${args.filterOrientation}"
    variant='${args.variant}'
    fit-column='${args.fitColumns}'
    column-min-width='${args.columnMinWidth}'
    column-width='${args.columnWidth}'>
</ifx-table>`;
    return table;
  } else {
    //sidebar
    const filterAccordions = args.columnDefs
      .map(column => {
        const uniqueColValues = [...new Set(args.rowData.map(row => row[column.field]))];
        const filterOptions = uniqueColValues
          .map((option, index) => {
            return html`<ifx-list-entry slot="slot${index}" label="${option}" value="false"></ifx-list-entry>`;
          });

        return html`
      <ifx-filter-accordion slot="filter-accordion" filter-group-name="${column.field}">
        <ifx-list slot="list" type="checkbox" name="${column.field}" max-visible-items="6">
          ${filterOptions}
        </ifx-list>
      </ifx-filter-accordion>
    `;
      });

    //topbar
    const filterComponents = args.columnDefs
      .map((column, index) => {
        const uniqueColValues = [...new Set(args.rowData.map(row => row[column.field]))].filter(v => v !== undefined && v !== null && v !== '');
        const options = uniqueColValues.map(option => ({
          value: option,
          label: option,
          selected: false,
        }));

        const optionsString = JSON.stringify(options);

        return html`
        <ifx-set-filter slot="filter-component-${index + 1}"
            options='${optionsString}'
            filter-label='${column.headerName}'
            filter-name='${column.field}'
            type='multi-select'
            placeholder='Select ${column.headerName}'>
          </ifx-set-filter>
          `;
      })
      .join('\n');

    const filterTypeGroupComponent =
      args.filterOrientation === 'sidebar'
        ? html`<ifx-filter-type-group slot="sidebar-filter">
        <div slot="filter-search">
          <ifx-filter-search filter-orientation="sidebar" filter-name="search"></ifx-filter-search>
        </div>
        ${filterAccordions}
    </ifx-filter-type-group>`
        : html`<ifx-filter-bar slot="topbar-filter" max-shown-filters="3">
        <ifx-filter-search slot="filter-search" filter-orientation="topbar"></ifx-filter-search>
        ${filterComponents}
   </ifx-filter-bar>`;

    const table = html`<ifx-table
    headline="${args.headline}"
    row-height="${args.rowHeight}"
    cols='${JSON.stringify(args.columnDefs)}'
    rows='${JSON.stringify(args.rowData)}'
    table-height="${args.tableHeight}"
    ?pagination="${args.pagination}"
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
  enableSelection: false,
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

const CustomCellTemplate = args => {
  const table = html`
    <ifx-table
      row-height="${args.rowHeight}"
      .cols='${JSON.stringify(args.columnDefs)}'
      .rows='${JSON.stringify(args.rowData)}'
      table-height="${args.tableHeight}"
      ?pagination="${args.pagination}"
      filter-orientation="${args.filterOrientation}">
    </ifx-table>`;
  return table;
};

const CustomStatusCellTemplate = args => {
  const table = html`
    <ifx-table
      row-height="${args.rowHeight}"
      .cols='${JSON.stringify(args.columnDefs)}'
      .rows='${JSON.stringify(args.rowData)}'
      table-height="${args.tableHeight}"
      ?pagination="${args.pagination}"
      filter-orientation="${args.filterOrientation}">
    </ifx-table>`;
  return table;
};

const CustomLinkCellTemplate = args => {
  const table = html`
    <ifx-table
      row-height="${args.rowHeight}"
      .cols='${JSON.stringify(args.columnDefs)}'
      .rows='${JSON.stringify(args.rowData)}'
      table-height="${args.tableHeight}"
      ?pagination="${args.pagination}"
      filter-orientation="${args.filterOrientation}">
    </ifx-table>`;
  return table;
};

const BreakingLineTemplate = args => {
  const table = html`
    <ifx-table
      row-height="${args.rowHeight}"
      .cols='${JSON.stringify(args.columnDefs)}'
      .rows='${JSON.stringify(args.rowData)}'
      table-height="${args.tableHeight}"
      ?pagination="${args.pagination}"
      filter-orientation="${args.filterOrientation}">
    </ifx-table>`;
  return table;
};

const InnerButtonsTemplate = args => {
  const table = html`
    <ifx-table
      row-height="${args.rowHeight}"
      .cols='${JSON.stringify(args.columnDefs)}'
      .rows='${JSON.stringify(args.rowData)}'
      table-height="${args.tableHeight}"
      ?pagination="${args.pagination}"
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
  headline: 'Matching results',
  rowHeight: 'default',
  columnDefs: columnDefs,
  rowData: rowData,
  filterOrientation: 'topbar',
};
