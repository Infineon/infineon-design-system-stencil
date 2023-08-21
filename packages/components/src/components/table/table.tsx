import { Component, h, Prop, State } from '@stencil/core';
import { Grid, GridOptions } from 'ag-grid-community';


@Component({
  tag: 'ifx-table',
  styleUrl: 'table.scss',
  shadow: false // only works with shadowdom off because we are using an external library
})
export class Table {
  @State() gridOptions: GridOptions;
  @Prop() cols: any[] | string;
  @Prop() rows: any[] | string;
  @Prop() columnDefs: any[] = [];
  @Prop() rowData: any[] = [];

  componentWillLoad() {
    if (typeof this.rows === 'string' && typeof this.cols === 'string') {
      try {
        this.columnDefs = JSON.parse(this.cols);
        this.rowData = JSON.parse(this.rows);
      } catch (err) {
        console.error('Failed to parse input:', err);
      }
    } else if ((Array.isArray(this.rows) || typeof this.rows === 'object') && (Array.isArray(this.cols) || typeof this.cols === 'object')) {
      this.columnDefs = this.cols;
      this.rowData = this.rows;

    } else {
      console.error('Unexpected value for cols and rows:', this.rows, this.cols);
    }



    this.gridOptions = {
      columnDefs: this.columnDefs,
      rowData: this.rowData,
      icons: {
        sortAscending: '<ifx-icon icon="arrowtriangleup16"></ifx-icon>',
        sortDescending: '<ifx-icon icon="arrowtriangledown16"></ifx-icon>',
        sortUnSort: '<ifx-icon icon="arrowtrianglevertikal16"></ifx-icon>'
      }
    };

  }


  componentWillUpdate() {
    this.gridOptions.columnDefs = this.columnDefs;
    this.gridOptions.rowData = this.rowData;
    if (this.gridOptions.api) {
      this.gridOptions.api.setRowData(this.rowData);
      this.gridOptions.api.setColumnDefs(this.columnDefs);
    }
  }

  componentDidLoad() {
    new Grid(document.getElementById('ifxTable'), this.gridOptions);
    if (this.gridOptions.api) {
      this.gridOptions.api.sizeColumnsToFit();
    }
  }


  render() {
    return (
      <div id="ifxTable" class="ag-theme-alpine" style={{ height: '400px', width: '100%' }}></div>
    );
  }
}
