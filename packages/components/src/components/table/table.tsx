import { Component, h, Prop, State } from '@stencil/core';
import { FirstDataRenderedEvent, Grid, GridOptions } from 'ag-grid-community';
import { ButtonCellRenderer } from './buttonCellRenderer';


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
  @Prop() rowHeight: string = 'default'; //default or compact
  @Prop() uniqueKey: string;
  @Prop() tableHeight: string = 'auto';
  @Prop() pagination: boolean = false;
  @Prop() paginationPageSize: number = 10;



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
    this.setButtonRenderer();


    this.gridOptions = {
      rowHeight: this.rowHeight === 'default' ? 40 : 32,
      headerHeight: 40,
      defaultColDef: {
        resizable: true,
      },
      suppressDragLeaveHidesColumns: true,
      onFirstDataRendered: this.onFirstDataRendered,
      columnDefs: this.columnDefs,
      rowData: this.rowData,
      icons: {
        sortAscending: '<ifx-icon icon="arrowtriangleup16"></ifx-icon>',
        sortDescending: '<ifx-icon icon="arrowtriangledown16"></ifx-icon>',
        sortUnSort: '<a class="unsort-icon-custom-color"><ifx-icon icon="arrowtrianglevertikal16"></ifx-icon></a>'
      },
      rowDragManaged: this.columnDefs.some(col => col.dndSource === true) ? true : false,
      animateRows: this.columnDefs.some(col => col.dndSource === true) ? true : false,
      pagination: this.pagination,
      paginationPageSize: this.paginationPageSize,
    };

  }


  onFirstDataRendered(params: FirstDataRenderedEvent) {
    params.api.sizeColumnsToFit();
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
    new Grid(document.getElementById(`ifxTable-${this.uniqueKey}`), this.gridOptions);
    if (this.gridOptions.api) {
      this.gridOptions.api.sizeColumnsToFit();
    }
  }


  render() {
    // if (this.gridOptions.rowDragManaged) {
    //   // console.log("draggable table render")
    // }
    return (
      <div id="grid-wrapper" class={{ 'auto-height': this.tableHeight === 'auto' ? true : false }}>

        <div id={`ifxTable-${this.uniqueKey}`} class="ag-theme-alpine" style={{
          'height': `${this.tableHeight}`, width: '100%'
        }}></div >
      </div >
    );


  }


  hasButtonCol(): boolean {
    return this.columnDefs.some(column => column.field === 'button');
  }



  setButtonRenderer() {
    const buttonColumn = this.columnDefs.find(column => column.field === 'button');
    if (buttonColumn) {
      buttonColumn.cellRenderer = ButtonCellRenderer;
    }
  }

  // setIconButtonRenderer() {
  //   const iconButtonColumn = this.columnDefs.find(column => column.field === 'iconButton');
  //   if (iconButtonColumn) {
  //     iconButtonColumn.cellRenderer = IconButtonCellRenderer;
  //   }
  // }

  // setLinkRenderer() {
  //   const linkColumn = this.columnDefs.find(column => column.field === 'link');
  //   if (linkColumn) {
  //     linkColumn.cellRenderer = LinkCellRenderer;
  //   }
  // }



  onDragOver(event) {
    var dragSupported = event.dataTransfer.length;

    if (dragSupported) {
      event.dataTransfer.dropEffect = 'move';
    }

    event.preventDefault();
  }

  onDrop(event) {
    var jsonData = event.dataTransfer.getData('application/json');

    var eJsonRow = document.createElement('div');
    eJsonRow.classList.add('json-row');
    eJsonRow.innerText = jsonData;

    var eJsonDisplay = document.querySelector('#eJsonDisplay');

    eJsonDisplay.appendChild(eJsonRow);
    event.preventDefault();
  }

}
