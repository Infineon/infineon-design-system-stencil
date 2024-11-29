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
];

export default {
  title: 'Components/Table (basic)',
  // tags: ['autodocs'],
  args: {
    tableHeight: 'auto',
    rowHeight: 40,
  },
  argTypes: {
    tableHeight: {
      table: {
        type: {
          summary: 'Options',
          detail: 'Default: "auto"\nExample for fixed height: "400px"',
        },
      },
    },
    rowHeight: {
      options: ['compact', 'default'],
      control: { type: 'radio' },
    },
    cols: {
      table: {
        type: {
          summary: 'Column header options',
          detail:
            'Standard columns:\nheaderName: "Model", \nfield: "model", \nsortable: true (optional),\nsort: "desc" (optional) => descending sort (show icon)\nunSortIcon: true (optional) => unsorted (show icon)\n\nSpecial columns:\nheaderName: "",\nfield: "button"\nheaderName: "",\nfield: "link"',
        },
      },
    },
    rows: {
      table: {
        type: {
          summary: 'Row data options',
          detail:
            'Standard row values:\nmake: "Toyota", \nmodel: "Celica", \nprice: 35000 \n\nSpecial row values (incl buttons):\nmake: "Porsche",\nmodel: "Boxster",\nprice: "72000",\nbutton: { \ndisabled: false (optional),\nvariant: "outline" (optional)\nsize: "s" (optional),\ntext: "Button"\n...other ifx-button properties\n}',
        },
      },
    },
  },
};

const DefaultTemplate = args => `<ifx-basic-table 
cols='${JSON.stringify(args.cols)}' 
rows='${JSON.stringify(args.rows)}'
table-height='${args.tableHeight}'>
</ifx-basic-table>`;

export const Default = DefaultTemplate.bind({});
Default.args = {
  cols: cols,
  rows: rows,
};

export const FixedHeight = DefaultTemplate.bind({});
FixedHeight.args = {
  tableHeight: '400px',
  cols: cols,
  rows: rows,
};
