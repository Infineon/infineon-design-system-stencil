import { Component, h, Host, Method, Element, Prop, State } from '@stencil/core';
import classNames from 'classnames';

import { createGrid, FirstDataRenderedEvent, GridApi, GridOptions } from 'ag-grid-community';
import { ButtonCellRenderer } from './buttonCellRenderer';
import { CustomNoRowsOverlay } from './customNoRowsOverlay';
import { CustomLoadingOverlay } from './customLoadingOverlay';


@Component({
  tag: 'ifx-table',
  styleUrl: 'table.scss',
  shadow: true
})
export class Table {
  gridOptions: GridOptions;
  gridApi: GridApi;
  @State() currentPage: number = 1;
  @Prop() cols: any[] | string;
  @Prop() rows: any[] | string;
  allRowData: any[] = [];
  @Prop() rowHeight: string = 'default';
  @Prop() tableHeight: string = 'auto';
  @Prop() pagination: boolean = true;
  @Prop() paginationPageSize: number = 10;
  @Prop() showLoading: boolean = false;
  private container: HTMLDivElement;
  @Element() host: HTMLElement;
  colData: any[];
  rowData: any[];



  @Method()
  async onBtShowLoading() {
    this.gridApi.showLoadingOverlay();
  }

  componentWillLoad() {
    this.rowData = this.getRowData();
    this.colData = this.getColData();

    this.gridOptions = {
      rowHeight: this.rowHeight === 'default' ? 40 : 32,
      headerHeight: 40,
      defaultColDef: {
        resizable: true,
      },
      suppressDragLeaveHidesColumns: true,
      onFirstDataRendered: this.onFirstDataRendered.bind(this),
      columnDefs: this.colData,
      rowData: this.rowData,
      loadingOverlayComponent: CustomLoadingOverlay,
      noRowsOverlayComponent: CustomNoRowsOverlay,
      noRowsOverlayComponentParams: {
        noRowsMessageFunc: () =>
          'No rows found' //at: ' + new Date().toLocaleTimeString(),
      },
      icons: {
        sortAscending: '<ifx-icon icon="arrowtriangleup16"></ifx-icon>',
        sortDescending: '<ifx-icon icon="arrowtriangledown16"></ifx-icon>',
        sortUnSort: '<a class="unsort-icon-custom-color"><ifx-icon icon="arrowtrianglevertikal16"></ifx-icon></a>'
      },
      rowDragManaged: this.colData.some(col => col.dndSource === true) ? true : false,
      animateRows: this.colData.some(col => col.dndSource === true) ? true : false,
    };
  }

  componentDidRender() {

    if (this.gridApi) {
      this.gridApi.setGridOption('columnDefs', this.colData);
    }
  }

  componentDidLoad() {
    if (this.container) {
      this.gridApi = createGrid(this.container, this.gridOptions);
      if (this.gridApi) {
        this.gridApi.sizeColumnsToFit({
          defaultMinWidth: 100,
        });
        this.gridApi.setGridOption('columnDefs', this.colData);
        this.gridApi.setGridOption('rowData', this.rowData);

        if (this.pagination) {
          const paginationElement = this.host.shadowRoot.querySelector('ifx-pagination');
          if (paginationElement) {
            paginationElement.addEventListener('ifxPageChange', this.handlePageChange.bind(this));
          }
        }
      }
    }
  }

  componentWillUnmount() {
    if (this.pagination) {
      const paginationElement = this.host.shadowRoot.querySelector('ifx-pagination');
      if (paginationElement) {
        paginationElement.removeEventListener('ifxPageChange', this.handlePageChange.bind(this));
      }
    }
  }

  handlePageChange(event) {
    this.currentPage = event.detail.currentPage;
    const startIndex = (this.currentPage - 1) * this.paginationPageSize;
    const endIndex = startIndex + this.paginationPageSize;
    const visibleRowData = this.allRowData.slice(startIndex, endIndex);

    this.gridApi.setGridOption('rowData', visibleRowData);
  }

  getRowData() {
    let rows: any[] = [];

    // If this.rows is undefined or null, log a warning and return an empty array
    if (this.rows === undefined || this.rows === null) {
      console.warn('rows is undefined or null');
      return rows;
    }

    if (typeof this.rows === 'string') {
      try {
        rows = JSON.parse(this.rows);
      } catch (err) {
        console.error('Failed to parse rows input:', this.rows, err);
      }
    } else if (Array.isArray(this.rows) || typeof this.rows === 'object') {
      rows = this.rows;
    } else {
      console.error('Unexpected value for rows: ', this.rows);
    }

    this.allRowData = rows;
    return rows.slice(0, this.paginationPageSize);
  }


  getColData() {
    let cols: any[] = [];

    // If this.cols is undefined or null, log a warning and return an empty array
    if (this.cols === undefined || this.cols === null) {
      console.warn('cols is undefined or null');
      return cols;
    }

    if (typeof this.cols === 'string') {
      try {
        cols = JSON.parse(this.cols);
      } catch (err) {
        console.error('Failed to parse cols input:', this.cols, err);
      }
    } else if (Array.isArray(this.cols) || typeof this.cols === 'object') {
      cols = this.cols;
    } else {
      console.error('Unexpected value for cols: ', this.cols);
    }

    let buttonColumn = cols.find(column => column.field === 'button');
    if (buttonColumn) {
      buttonColumn.cellRenderer = ButtonCellRenderer;
    }

    return cols;
  }



  onFirstDataRendered(params: FirstDataRenderedEvent) {
    params.api.sizeColumnsToFit();
  }



  disconnectedCallback() {
    if (this.pagination) {
      const paginationElement = this.host.shadowRoot.querySelector('ifx-pagination');
      if (paginationElement) {
        paginationElement.removeEventListener('ifxPageChange', this.handlePageChange);
      }
    }
  }


  getClassNames() {
    return classNames(
      this.tableHeight === 'auto' && 'ifx-table-wrapper ag-root-wrapper-body',
      'ifx-table-wrapper',
    );
  }


  render() {
    // if (this.gridOptions.rowDragManaged) {
    //   // console.log("draggable table render")
    // }
    let style = {};
    if (this.tableHeight !== 'auto') {
      style = {
        'height': this.tableHeight
      };
    }
    return (
      <Host >
        <div id="ifx-table-wrapper" class={this.getClassNames()}>
          <div class='ifx-ag-grid' style={style} ref={(el) => this.container = el}>
          </div>
        </div>
        {this.pagination ? <ifx-pagination total={this.allRowData.length} current-page={this.currentPage}></ifx-pagination> : null}
      </Host>
    )
  }


  hasButtonCol(): boolean {
    return this.getColData().some(column => column.field === 'button');
  }





  // setIconButtonRenderer() {
  //   const iconButtonColumn = this.getColData().find(column => column.field === 'iconButton');
  //   if (iconButtonColumn) {
  //     iconButtonColumn.cellRenderer = IconButtonCellRenderer;
  //   }
  // }

  // setLinkRenderer() {
  //   const linkColumn = this.getColData().find(column => column.field === 'link');
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
