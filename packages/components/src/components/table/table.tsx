import { Component, h, State } from '@stencil/core';
import { Grid, GridOptions } from 'ag-grid-community';

@Component({
  tag: 'ifx-table',
  styleUrl: 'table.scss',
  shadow: false // Keeping the shadow DOM off for simplicity
})
export class Table {

  @State() gridOptions: GridOptions;
  // private gridAPI;
  // private gridColumnAPI;

  componentWillLoad() {
    this.gridOptions = {
      columnDefs: [
        { headerName: 'Make', field: 'make' },
        { headerName: 'Model', field: 'model' },
        { headerName: 'Price', field: 'price' }
      ],
      rowData: [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxster', price: 72000 }
      ]
    };
  }

  componentDidLoad() {
    new Grid(document.getElementById('myGrid'), this.gridOptions);
    if (this.gridOptions.api) {
      this.gridOptions.api.sizeColumnsToFit();
    }
  }

  render() {
    return (
      <div id="myGrid" class="ag-theme-alpine" style={{ height: '400px', width: '100%' }}></div>
    );
  }
}
