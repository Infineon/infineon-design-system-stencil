//default
const cols = [
  { headerName: 'Make', field: 'make', sortable: true, sort: 'desc', unSortIcon: true },
  { headerName: 'Model', field: 'model', sortable: true, unSortIcon: true },
  { headerName: 'Price', field: 'price' },
  { headerName: 'Age', field: 'age' },
];
const rows = [
  { make: 'Toyota', model: 'Celica', price: 35000, age: 10 },
  { make: 'Ford', model: 'Mondeo', price: 32000, age: 12 },
  { make: 'Porsche', model: 'Boxster', price: 72000 },
  { make: 'Toyota', model: 'Celica', price: 37000, age: 8 },
  { make: 'Ford', model: 'Mondeo', price: 34000, age: 10 },
  { make: 'Porsche', model: 'Boxster', price: 72000 },
  { make: 'Toyota', model: 'Celica', price: 38000, age: 7 },
  { make: 'Ford', model: 'Mondeo', price: 36000, age: 8 },
  { make: 'Porsche', model: 'Boxster', price: 72000 },
  { make: 'Toyota', model: 'Celica', price: 39000, age: 2 },
  { make: 'Ford', model: 'Mondeo', price: 38000, age: 6 },
  { make: 'Porsche', model: 'Boxster', price: 72000 },
];

export default {
  title: 'Components/Table (basic)',
  // tags: ['autodocs'],
  args: {
    tableHeight: 'auto',
    rowHeight: 'default',
    variant: 'default'
  },
  argTypes: {
    tableHeight: {
      description: 'Controls the height of the table.',
      table: {
        category: 'ifx-table props',
        defaultValue: { summary: 'auto' },
        type: {
          summary: 'Options',
          detail: 'Default: "auto"\nExample for fixed height: "400px"',
        },
      },
    },
    rowHeight: {
      description: 'Controls the height of the rows.',
      table: {
        category: 'ifx-table props',
        defaultValue: { summary: 'default' },
        type: {
          summary: 'Options',
          detail: 'Default: 40\nCompact: 32\nOptions: 40, 32',
        },
      },
      options: ['compact', 'default'],
      control: { type: 'radio' },
    },
    cols: {
      description: 'The array must be a string for Vanilla JavaScript, and stringified or array object for React/Vue/Angular.',
      table: {
        category: 'ifx-table props',
        type: {
          summary: 'Column header options',
          detail:
            'Standard columns:\nheaderName: "Model", \nfield: "model", \nsortable: true (optional),\nsort: "desc" (optional) => descending sort (show icon)\nunSortIcon: true (optional) => unsorted (show icon)\nresizable: false\nflex: 1\nminWidth: 50px\nwidth: 100px\n\nSpecial columns:\nheaderName: "",\nfield: "button"\nheaderName: "",\nfield: "link",',
        },
      },
    },
    rows: {
      description: 'The array must be a string for Vanilla JavaScript, and stringified or array object for React/Vue/Angular.',
      table: {
        category: 'ifx-table props',
        type: {
          summary: 'Row data options',
          detail:
            'Standard row values:\nmake: "Toyota", \nmodel: "Celica", \nprice: 35000\nresizable: false\nflex: 1\nminWidth: 50px\nwidth: 100px\n\nSpecial row values (incl buttons):\nmake: "Porsche",\nmodel: "Boxster",\nprice: "72000",\nbutton: { \ndisabled: false (optional),\nvariant: "outline" (optional)\nsize: "s" (optional),\ntext: "Button"\n...other ifx-button properties\n}',
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
  },
};

const DefaultTemplate = args => `<ifx-basic-table 
cols='${JSON.stringify(args.cols)}' 
rows='${JSON.stringify(args.rows)}'
table-height='${args.tableHeight}'
row-height='${args.rowHeight}'
variant='${args.variant}'>
</ifx-basic-table>`;

export const Default = DefaultTemplate.bind({});
Default.args = {
  cols: cols,
  rows: rows,
  tableHeight: 'auto',
};

export const FixedHeight = DefaultTemplate.bind({});
FixedHeight.args = {
  tableHeight: '400px',
  cols: cols,
  rows: rows,
};
