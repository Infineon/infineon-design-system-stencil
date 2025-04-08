import { Component, h, Element, Host, Prop, State } from '@stencil/core';
import { createGrid, FirstDataRenderedEvent, GridApi, GridOptions } from 'ag-grid-community';
import { CustomNoRowsOverlay } from './customNoRowsOverlay';
import { CustomLoadingOverlay } from './customLoadingOverlay';
import classNames from 'classnames';

@Component({
  tag: 'ifx-basic-table',
  styleUrl: 'table.scss',
  shadow: false // only works with shadowdom off because we are using an external library
})
export class Table {
  @State() gridOptions: GridOptions;
  @Prop() cols: any[] | string;
  @Prop() rows: any[] | string;
  @State() columnDefs: any[] = [];
  @State() rowData: any[] = [];
  @Prop() rowHeight: string = 'default';
  @Prop() tableHeight: string = 'auto';
  @Prop() variant: string = 'default'
  @State() uniqueKey: string;
  @Element() host: HTMLElement;
  
  private container: HTMLDivElement;
  private gridApi: GridApi; 
  private gridInitialized = false;

  componentWillLoad() {
    this.uniqueKey = `unique-${Math.floor(Math.random() * 1000000)}`;
    this.setColsAndRows(); //needed?
    this.setGridOptions();
  }

  setGridOptions() {
    this.gridOptions = {
      rowHeight: this.rowHeight === 'default' ? 40 : 32,
      headerHeight: 40,
      defaultColDef: {
        resizable: true,
      },
      suppressCellFocus: true,
      enableCellTextSelection: true,
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
        sortUnSort: '<a class="unsort-icon-custom-color"><ifx-icon icon="arrowtrianglevertikal16"></ifx-icon></a>',
      },
      rowDragManaged: this.columnDefs.some((col) => col.dndSource === true) ? true : false,
      animateRows: this.columnDefs.some((col) => col.dndSource === true) ? true : false,
    };
  }

  setColsAndRows() {
    if (typeof this.rows === 'string' && typeof this.cols === 'string') {
      try {
        if(this.cols) {
          this.columnDefs = JSON.parse(this.cols);
        }
        if(this.rows) {
          this.rowData = JSON.parse(this.rows);
        }
      } catch (err) {
        console.error('Failed to parse input:', err);
      }
    } else if ((Array.isArray(this.rows) || typeof this.rows === 'object') && (Array.isArray(this.cols) || typeof this.cols === 'object')) {
      this.columnDefs = this.cols;
      this.rowData = this.rows;
    } else {
      console.error('Unexpected value for cols and rows:', this.rows, this.cols);
    }
  }

  getRowData() {
    let rows: any[] = [];
    if (typeof this.rows === 'string') {
      try {
        if(this.rows) {
          rows = JSON.parse(this.rows);
        }
      } catch (err) {
        console.error('Failed to parse input:', err);
      }
    } else if (Array.isArray(this.rows) || typeof this.rows === 'object') {
      rows = this.rows;
    } else {
      console.error('Unexpected value for rows: ', this.rows);
    }

    return rows;
  }

  getColData() {
    let cols: any[] = [];

    if (typeof this.cols === 'string') {
      try {
        if(this.cols) { 
          cols = JSON.parse(this.cols);
        }
      } catch (err) {
        console.error('Failed to parse input:', err);
      }
    } else if (Array.isArray(this.cols) || typeof this.cols === 'object') {
      cols = this.cols;
    } else {
      console.error('Unexpected value for cols: ', this.cols);
    }
    return cols;
  }

  onFirstDataRendered(params: FirstDataRenderedEvent) {
    params.api.sizeColumnsToFit();
  }

  componentWillUpdate() {
    this.setColsAndRows();
    this.gridOptions.columnDefs = this.columnDefs;
    this.gridOptions.rowData = this.rowData;
    if (this.gridApi) {
      this.gridApi.setGridOption('rowData', this.rowData);
      this.gridApi.setGridOption('columnDefs', this.columnDefs);
    }
  }

  componentDidLoad() {
    if (this.container && !this.gridInitialized) {
      this.gridApi = createGrid(this.container, this.gridOptions);
      if (this.gridApi) {
        this.gridApi.sizeColumnsToFit({
          defaultMinWidth: 100,
        });
        this.gridApi.setGridOption('columnDefs', this.getColData());
        this.gridApi.setGridOption('rowData', this.getRowData());
        this.gridInitialized = true; 
      }
    }
  }

  getClassNames() {
    return classNames(
      this.tableHeight === 'auto' && 'table-wrapper ag-root-wrapper-body',
      'table-wrapper',
    );
  }

  getTableStyle() {
    if (this.tableHeight !== 'auto') {
      return {
        height: this.tableHeight,
      };
    }
    return {};
  }

  render() {
    return (
      <Host>
        <div id="table-wrapper" class={this.getClassNames()}>
          <div id={`ifxTable-${this.uniqueKey}`} class={`ifx-ag-grid ${this.variant === 'zebra' ? 'zebra' : ""}`} style={this.getTableStyle()} ref={(el) => (this.container = el)}></div>
        </div>
      </Host>
    );
  }
}
