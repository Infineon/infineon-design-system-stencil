import { Component, h, Prop, State } from '@stencil/core';
import { createGrid, FirstDataRenderedEvent, GridApi, GridOptions } from 'ag-grid-community';
import { CustomNoRowsOverlay } from './customNoRowsOverlay';
import { CustomLoadingOverlay } from './customLoadingOverlay';


@Component({
  tag: 'ifx-basic-table',
  styleUrl: 'table.scss',
  shadow: false // only works with shadowdom off because we are using an external library
})
export class Table {
  @State() gridOptions: GridOptions;
  @State() gridApi: GridApi;
  @Prop() cols: any[] | string;
  @Prop() rows: any[] | string;
  @Prop() columnDefs: any[] = [];
  @Prop() rowData: any[] = [];
  @Prop() rowHeight: string = 'default'; //default or compact
  @Prop() uniqueKey: string;
  @Prop() tableHeight: string = 'auto';




  componentWillLoad() {
    this.uniqueKey = `unique-${Math.floor(Math.random() * 1000000)}`;
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
      rowHeight: this.rowHeight === 'default' ? 40 : 32,
      headerHeight: 40,
      defaultColDef: {
        resizable: true,
      },
      autoSizeStrategy: {
        type: 'fitGridWidth',
        defaultMinWidth: 100,

      },
      suppressCellFocus: true,
      suppressDragLeaveHidesColumns: true,
      suppressRowHoverHighlight: true,
      onFirstDataRendered: this.onFirstDataRendered,
      columnDefs: this.columnDefs,
      rowData: this.rowData,
      loadingOverlayComponent: CustomLoadingOverlay,
      noRowsOverlayComponent: CustomNoRowsOverlay,
      noRowsOverlayComponentParams: {
        noRowsMessageFunc: () =>
          'No rows found at: ' + new Date().toLocaleTimeString(),
      },

      icons: {
        sortAscending: '<ifx-icon icon="arrowtriangleup16"></ifx-icon>',
        sortDescending: '<ifx-icon icon="arrowtriangledown16"></ifx-icon>',
        sortUnSort: '<a class="unsort-icon-custom-color"><ifx-icon icon="arrowtrianglevertikal16"></ifx-icon></a>'
      },
      rowDragManaged: this.columnDefs.some(col => col.dndSource === true) ? true : false,
      animateRows: this.columnDefs.some(col => col.dndSource === true) ? true : false,
    };

  }



  onFirstDataRendered(params: FirstDataRenderedEvent) {
    params.api.sizeColumnsToFit();
  }

  componentWillUpdate() {
    this.gridOptions.columnDefs = this.columnDefs;
    this.gridOptions.rowData = this.rowData;
    if (this.gridApi) {
      this.gridApi.setGridOption('rowData', this.rowData);
      this.gridApi.setGridOption('columnDefs', this.columnDefs);
    }
  }

  componentDidLoad() {
    this.gridApi = createGrid(document.getElementById(`ifxTable-${this.uniqueKey}`), this.gridOptions);
    if (this.gridApi) {
      this.gridApi.sizeColumnsToFit({
        defaultMinWidth: 100,
      });
    }
  }


  render() {
    return (
      <div id="grid-wrapper" class={{ 'auto-height': this.tableHeight === 'auto' ? true : false }}>
        <div id={`ifxTable-${this.uniqueKey}`} class="ifx-ag-grid ag-theme-alpine" style={{
          'height': `${this.tableHeight}`, width: '100%'
        }}></div >
      </div >
    );


  }
}
