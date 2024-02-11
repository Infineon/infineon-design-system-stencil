import { Component, h, Host, Method, Element, Prop, State, Watch } from '@stencil/core';

import { createGrid, FirstDataRenderedEvent, GridApi, GridOptions, RowDataUpdatedEvent } from 'ag-grid-community';
import { ButtonCellRenderer } from './buttonCellRenderer';
import { CustomNoRowsOverlay } from './customNoRowsOverlay';
import { CustomLoadingOverlay } from './customLoadingOverlay';


@Component({
  tag: 'ifx-table',
  styleUrl: 'table.scss',
  shadow: true
})
export class Table {
  @State() gridOptions: GridOptions;
  @State() gridApi: GridApi;
  @Prop() cols: any[] | string;
  @Prop() rows: any[] | string;
  @Prop() columnDefs: any[] = [];
  @Prop() rowData: any[] = [];
  // Store all row data separately
  allRowData: any[] = [];
  @Prop() rowHeight: string = 'default'; //default or compact
  @Prop() tableHeight: string = 'auto';
  @Prop() pagination: boolean = false;
  @Prop() paginationPageSize: number = 2;
  @Prop() showLoading: boolean = false;
  private container: HTMLDivElement;
  @Element() host: HTMLElement;



  @Watch('showLoading')
  watchHandler(newValue: boolean, oldValue: boolean) {
    console.log('loadin');
    if (newValue !== oldValue) {
      if (newValue === true) {
        this.gridApi!.showLoadingOverlay();
      } else {
        this.gridApi!.hideOverlay();
      }
    }
  }

  @Method()
  async onBtShowLoading() {
    this.gridApi.showLoadingOverlay();
  }


  getRowData() {
    let rows: any[] = [];
    if (typeof this.rows === 'string') {
      try {
        rows = JSON.parse(this.rows);
      } catch (err) {
        console.error('Failed to parse input:', err);
      }
    } else if ((Array.isArray(this.rows) || typeof this.rows === 'object')) {
      rows = this.rows;

    } else {
      console.error('Unexpected value for rows: ', this.rows);
    }
    // Save all row data separately
    this.allRowData = rows;

    // Initial page of row data
    return rows.slice(0, this.paginationPageSize);
  }

  getColData() {
    let cols: any[] = [];

    if (typeof this.cols === 'string') {
      try {
        cols = JSON.parse(this.cols);
      } catch (err) {
        console.error('Failed to parse input:', err);
      }
    } else if ((Array.isArray(this.cols) || typeof this.cols === 'object')) {
      cols = this.cols;

    } else {
      console.error('Unexpected value for cols: ', this.cols);
    }
    return cols;
  }

  componentWillLoad() {
    console.log("component will load")
    this.setButtonRenderer();

    this.gridOptions = {
      rowHeight: this.rowHeight === 'default' ? 40 : 32,
      headerHeight: 40,
      defaultColDef: {
        resizable: true,
      },
      suppressDragLeaveHidesColumns: true,
      onFirstDataRendered: this.onFirstDataRendered,
      columnDefs: this.getColData(),
      rowData: this.getRowData(),
      onRowDataUpdated: (event: RowDataUpdatedEvent) => {
        console.log("row data updated ", event.type);
        // updateRowCount(event.api.getDisplayedRowCount());
      },
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
      // pagination: this.pagination,
      // paginationPageSize: this.paginationPageSize,
    };

  }


  onFirstDataRendered(params: FirstDataRenderedEvent) {
    params.api.sizeColumnsToFit();
  }



  componentWillUpdate() {
    if (this.gridApi) {
      this.gridApi.setGridOption('columnDefs', this.getColData());
      // this.gridApi.setGridOption('rowData', this.getRowData());
    }
  }


  componentDidLoad() {
    console.log("first load")
    if (this.container) {
      this.gridApi = createGrid(this.container, this.gridOptions);
      if (this.gridApi) {
        this.gridApi.sizeColumnsToFit({
          defaultMinWidth: 100,
        });
        this.gridApi.setGridOption('columnDefs', this.getColData());
        this.gridApi.setGridOption('rowData', this.getRowData());

        const paginationElement = this.host.shadowRoot.querySelector('ifx-pagination');
        // set pagination page size (manually)
        if (paginationElement) {
          paginationElement.addEventListener('ifxPageChange', (event) => this.handlePageChange(event));
        }
      }
    }
  }

  disconnectedCallback() {
    const paginationElement = this.host.shadowRoot.querySelector('ifx-pagination');
    if (paginationElement) {
      paginationElement.removeEventListener('ifxPageChange', this.handlePageChange);
    }
  }


  handlePageChange(event) {
    console.log("handle page change ", event.detail)
    const newPage = event.detail.currentPage;
    const startIndex = (newPage - 1) * this.paginationPageSize;
    const endIndex = startIndex + this.paginationPageSize;
    const visibleRowData = this.allRowData.slice(startIndex, endIndex);

    this.gridApi.setGridOption('rowData', visibleRowData);
  }



  render() {
    // if (this.gridOptions.rowDragManaged) {
    //   // console.log("draggable table render")
    // }
    const style = {
      '--table-height': this.tableHeight
    };

    return (
      <Host style={style}>
        <div class='ifx-ag-grid' ref={(el) => this.container = el}>
        </div>
        <ifx-pagination total={50} current-page="1"></ifx-pagination>
      </Host>
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
