const columnDefs = [
  { headerName: 'Make', field: 'make', sortable: true, sort: 'desc' },
  { headerName: 'Model', field: 'model', sortable: true, unSortIcon: true },
  { headerName: 'Price', field: 'price', }
];
const rowData = [
  { make: 'Toyota', model: 'Celica', price: 35000 },
  { make: 'Ford', model: 'Mondeo', price: 32000 },
  { make: 'Porsche', model: 'Boxster', price: 72000 }
];


export default {
  title: 'Components/Table',
  tags: ['autodocs'],
  args: {
  },
  argTypes: {
    columnDefs: {
      table: {
        type: {
          summary: 'Column header options',
          detail: 'headerName: "Model", \nfield: "model", \nsortable: true, \nunSortIcon: true => show sort icon',
        },
      },
    }
  }
};


const DefaultTemplate = (args) => `<ifx-table 
cols='${JSON.stringify(args.columnDefs)}' 
rows='${JSON.stringify(args.rowData)}'>
</ifx-table>`;

export const Default = DefaultTemplate.bind({});
Default.args = {
  columnDefs: columnDefs,
  rowData: rowData,
}
