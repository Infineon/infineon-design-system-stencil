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
  @State() rowData: any[] = [];
  @State() colData: any[] = [];
  @State() filterOptions: { [key: string]: string[] } = {};
  @State() currentFilters = {};

  allRowData: any[] = [];
  @Prop() rowHeight: string = 'default';
  @Prop() tableHeight: string = 'auto';
  @Prop() pagination: boolean = true;
  @Prop() paginationPageSize: number = 10;
  @Prop() filterOrientation: string = 'topbar'; // sidebar
  @State() showSidebarFilters: boolean = true;
  @State() matchingResultsCount: number = 0;

  @Prop() enableFiltering: boolean = true;
  @Prop() showLoading: boolean = false;
  private container: HTMLDivElement;
  @Element() host: HTMLElement;
  originalRowData: any[] = [];


  toggleSidebarFilters() {
    this.showSidebarFilters = !this.showSidebarFilters;
  }


  updateFilterOptions() {
    const options = {};
    for (let col of this.colData) {
      options[col.field] = [...new Set(this.rowData.map(row => row[col.field]))];
    }
    this.filterOptions = options;
  }


  handleFilterChange(event: CustomEvent) {
    const { filterName, filterValues, type } = event.detail;
    const selectedValues = filterValues.map(option => option?.value || option);
    if (selectedValues.length === 0 || (selectedValues.length === 1 && type === 'text' && selectedValues[0] === '')) {
      delete this.currentFilters[filterName];
    } else {
      this.currentFilters = {
        ...this.currentFilters, [filterName]: { filterValues: selectedValues, type: type }
      }
    }

    this.allRowData = [...this.originalRowData];

    this.filterData();

    const startIndex = (this.currentPage - 1) * this.paginationPageSize;
    const endIndex = startIndex + this.paginationPageSize;
    const visibleRowData = this.allRowData.slice(startIndex, endIndex);

    this.rowData = visibleRowData;

    this.gridApi.setGridOption('rowData', this.rowData);

    // Update matching results count
    this.matchingResultsCount = this.allRowData.length;

  }


  clearAllFilters() {
    this.currentFilters = {};
    this.allRowData = [...this.originalRowData];
    // If necessary, reset the grid/view to its initial state here
  }



  filterData() {
    let filteredData = [...this.allRowData];

    for (let filterName in this.currentFilters) {
      let selectedValues = this.currentFilters[filterName].filterValues;
      let filterType = this.currentFilters[filterName].type;

      filteredData = this.filterByType(filteredData, filterName, selectedValues, filterType);
    }

    this.allRowData = filteredData;
  }

  filterByType(data, filterName, selectedValues, filterType) {
    return data.filter(row => {
      // Fetch the value from the row and convert it to a string for comparison
      let rowValue = String(row[filterName]).toLowerCase();

      switch (filterType) {
        case 'multi-select':
        case 'single-select':
          // Check if the selectedValues (should be an array) includes the rowValue
          return selectedValues.some(value => String(value).toLowerCase() === rowValue);

        case 'text':
          // Check if any of the selectedValues start with the rowValue
          return selectedValues.some(value => rowValue.startsWith(String(value).toLowerCase()));

        default:
          // Fallback case
          return selectedValues.includes(rowValue);
      }
    });
  }




  @Method()
  async onBtShowLoading() {
    this.gridApi.showLoadingOverlay();
  }

  componentWillLoad() {
    this.rowData = this.getRowData();
    this.colData = this.getColData();
    this.updateFilterOptions();

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
        const setFilterElements = this.host.querySelectorAll('ifx-set-filter');
        // Add an event listener to each SetFilter component
        setFilterElements.forEach(setFilterElement => {
          setFilterElement.addEventListener('ifxFilterChange', this.handleFilterChange.bind(this));
        });
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
    const setFilterElements = this.host.shadowRoot.querySelectorAll('ifx-set-filter');
    // Remove the event listener from each SetFilter component
    setFilterElements.forEach(setFilterElement => {
      setFilterElement.removeEventListener('ifxFilterChange', this.handleFilterChange.bind(this));
    });
  }

  handlePageChange(event) {
    this.currentPage = event.detail.currentPage;
    const startIndex = (this.currentPage - 1) * this.paginationPageSize;
    const endIndex = startIndex + this.paginationPageSize;
    const visibleRowData = this.allRowData.slice(startIndex, endIndex);
    // Update the data in the grid
    if (this.gridApi) {
      this.gridApi.setGridOption('rowData', visibleRowData);
    }
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
    this.originalRowData = [...rows]; // Deep copy the original data
    this.matchingResultsCount = this.allRowData.length;

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



  getTableClassNames() {
    return classNames(
      this.tableHeight === 'auto' && 'table-wrapper ag-root-wrapper-body',
      'table-wrapper',
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
    const filterClass = this.filterOrientation === 'topBar' ? 'topBar-layout' : 'sideBar-layout';

    return (
      <Host >
        <div class="table-container">
          {this.enableFiltering && this.filterOrientation === 'sideBar' && (
            <div class="sideBar-btn">
              <ifx-button
                type="button"
                disabled={false}
                variant="secondary"
                size="m"
                target="_blank"
                theme="default"
                full-width="false"
                onClick={() => this.toggleSidebarFilters()}
              >
                <ifx-icon icon="cross-12"></ifx-icon>{this.showSidebarFilters ? 'Hide Filters' : 'Show Filters'}
              </ifx-button>
            </div>
          )}

          <div class={filterClass}>
            <div class="sidebar-container">
              {this.enableFiltering && this.showSidebarFilters && this.filterOrientation === 'sideBar' && (
                <div class="filters-title-container">
                  <span class="filters-title">Filters</span>
                </div>
              )}


              {this.enableFiltering && this.filterOrientation === 'sideBar' && (
                <div class="set-filter-wrapper-sidebar">
                  {(this.filterOrientation !== 'sideBar' || this.showSidebarFilters) && (
                    <slot name="set-filter"></slot>
                  )}
                </div>
              )}
            </div>

            {this.enableFiltering && this.filterOrientation !== 'sideBar' && (
              <div class="set-filter-wrapper-topbar">
                {(this.filterOrientation !== 'sideBar' || this.showSidebarFilters) && (
                  <slot name="set-filter"></slot>
                )}
              </div>
            )}

            <div class="table-pagination-wrapper">
              <div class="filter-chips">
                {this.enableFiltering && this.filterOrientation === 'sideBar' && this.showSidebarFilters && (
                  Object.keys(this.currentFilters).map(filterName => (
                    <ifx-chip placeholder={filterName}>
                      <ifx-dropdown-menu size="m" slot="menu">
                        {this.currentFilters[filterName].filterValues.map(filterValue => (
                          <ifx-dropdown-item icon="" target="_self" href="">
                            {filterValue}
                          </ifx-dropdown-item>
                        ))}
                      </ifx-dropdown-menu>
                    </ifx-chip>
                  ))
                )}
              </div>

              {((this.enableFiltering && this.filterOrientation === 'sideBar') || this.filterOrientation === 'topBar') && (
                <div class="matching-results-container">
                  <span class="matching-results-count">
                    {this.matchingResultsCount}
                  </span>
                  <span class="matching-results-text">
                    matching results
                  </span>
                </div>
              )}

              <div id="table-wrapper" class={this.getTableClassNames()}>
                <div class='ifx-ag-grid' style={style} ref={(el) => this.container = el}>
                </div>
              </div>
              {this.pagination ? <ifx-pagination total={this.allRowData.length} current-page={this.currentPage}></ifx-pagination> : null}
            </div>
          </div>
        </div>
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
