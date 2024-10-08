import { Component, h, Host, Method, Element, Prop, State, Listen } from '@stencil/core';
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
  @Prop() cols: any;
  @Prop() rows: any;
  @State() rowData: any[] = [];
  @State() colData: any[] = [];
  @State() filterOptions: { [key: string]: string[] } = {};
  @State() currentFilters = {};
  @State() uniqueKey: string;
  allRowData: any[] = [];
  @Prop() rowHeight: string = 'default';
  @Prop() tableHeight: string = 'auto';
  @Prop() pagination: boolean = true;
  @Prop() paginationPageSize: number = 10;
  @Prop() filterOrientation: string = 'sidebar'; // topbar / none
  @State() showSidebarFilters: boolean = true;
  @State() matchingResultsCount: number = 0;

  @Prop() showLoading: boolean = false;
  private container: HTMLDivElement;
  @Element() host: HTMLElement;
  originalRowData: any[] = [];

  @Listen('ifxChipChange')
  handleChipChange(event: CustomEvent<{ previousSelection: Array<any>, currentSelection: Array<any>, name: string }>) {
    const { name, currentSelection } = event.detail;

    // Clone the current filters state
    const updatedFilters = { ...this.currentFilters };

    if (currentSelection.length === 0) {
      // If there are no selections for this filter, delete the filter
      delete updatedFilters[name];

      // Emit event with specific filter name
      const customEvent = new CustomEvent('ifxUpdateSidebarFilter', { detail: { filterName: name }, bubbles: true, composed: true });
      this.host.dispatchEvent(customEvent);
    } else {
      // Otherwise, update the filter values with the current selection
      updatedFilters[name].filterValues = currentSelection.map(selection => selection.value);
    }

    // Update the component's filters
    this.currentFilters = updatedFilters;

    // Ensure table data is updated
    this.allRowData = this.applyAllFilters(this.originalRowData, this.currentFilters);
    this.updateTableView();
  }



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

  handleSidebarFilterChange(event: CustomEvent) {
    const filterGroups = event.detail;
    const updatedFilters = {};

    filterGroups.forEach(filterGroup => {
      const filterName = filterGroup.filterGroupName;
      let filterValues;
      let type;

      if (filterGroup.selectedItems && filterGroup.selectedItems.length > 0) {
        filterValues = filterGroup.selectedItems.map(item => item.label);
        type = 'multi-select';
      } else if (filterGroup.value) {
        filterValues = [filterGroup.value];
        type = 'text';
      } else {
        filterValues = [];
      }

      if (!(filterValues.length === 0 || (filterValues.length === 1 && type === 'text' && filterValues[0] === ''))) {
        updatedFilters[filterName] = { filterValues, type };
      }
    });

    this.allRowData = this.applyAllFilters(this.originalRowData, updatedFilters);
    this.updateTableView();
    this.currentFilters = updatedFilters;
  }


  handleTopbarFilterChange(event: CustomEvent) {
    const filters = event.detail;

    // Start by resetting the filter conditions to a blank object
    this.currentFilters = {};

    // Loop through each filter group provided in the event detail
    filters.forEach(filter => {
      const filterName = filter.filterName;
      let filterValues;

      let type = filter.type;

      if (type === 'text') {
        // Search/Text filter
        filterValues = filter.filterValues
      } else {
        // Multi-select/Single-Select
        filterValues = filter.filterValues.map(item => item.label);
      }

      // If there are no filter values, or the filter is a text filter with an empty value, remove the filter
      if (!(filterValues.length === 0 || (filterValues.length === 1 && type === 'text' && filterValues[0] === ''))) {
        // Add or update the filter in the currentFilters object
        this.currentFilters[filterName] = { filterValues, type };
      }
    });


    // Now that the currentFilters object has been updated, apply all filters to the data
    this.allRowData = this.applyAllFilters(this.originalRowData, this.currentFilters);

    // After filtering, update the table view with the new filtered data
    this.updateTableView();
  }


  applyAllFilters(data, filters) {
    return data.filter(row => {
      for (const filterName in filters) {
        const filterInfo = filters[filterName];
        let selectedValues = (filterInfo.filterValues || []).map(value => {
          if (typeof value === 'string') {
            return value.toLowerCase();
          } else if (typeof value === 'number' || typeof value === 'boolean') {
            return value.toString();
          }
          return '';
        });

        // For text filters, check if row values start with any of the selectedValues
        if (filterInfo.type === 'text') {
          let textFilterMatched = false;
          for (let property in row) {
            if (row.hasOwnProperty(property)) {
              let rowValue = row[property] != null ? String(row[property]).toLowerCase() : '';
              if (selectedValues.some(filterValue => rowValue.startsWith(filterValue))) {
                textFilterMatched = true;
                break;
              }
            }
          }
          if (!textFilterMatched) return false;
        }
        // For multi-select filters, this remains unchanged
        else if (filterInfo.type === 'multi-select') {
          let rowValue = row[filterName] != null ? String(row[filterName]).toLowerCase() : '';
          // Check if 'undefined' is a selected value and include rows with empty values in that case
          let includesUndefined = selectedValues.includes('undefined');
          if (!selectedValues.includes(rowValue) && !(includesUndefined && rowValue === '')) {
            return false;
          }
        }
      }
      return true;
    });
  }



  updateTableView() {
    // Calculate the slice of data to display based on pagination
    const startIndex = (this.currentPage - 1) * this.paginationPageSize;
    const endIndex = startIndex + this.paginationPageSize;
    const visibleRowData = this.allRowData.slice(startIndex, endIndex);

    // Update the row data in the table
    this.rowData = visibleRowData;
    this.gridApi.setGridOption('rowData', this.rowData);

    // Update matching results count
    this.matchingResultsCount = this.allRowData.length;
  }


  clearAllFilters() {
    this.currentFilters = {};
    this.allRowData = [...this.originalRowData];
  }




  @Method()
  async onBtShowLoading() {
    this.gridApi.showLoadingOverlay();
  }

  componentWillLoad() {
    this.uniqueKey = `unique-${Math.floor(Math.random() * 1000000)}`;

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
        const sidebarFilterElements = this.host.querySelectorAll('ifx-filter-type-group');
        // Add an event listener to each SetFilter component
        sidebarFilterElements.forEach(sidebarFilterElement => {
          sidebarFilterElement.addEventListener('ifxSidebarFilterChange', this.handleSidebarFilterChange.bind(this));
        });
        const topbarFilterElements = this.host.querySelectorAll('ifx-filter-bar');
        // Add an event listener to each SetFilter component
        topbarFilterElements.forEach(topbarFilterElement => {
          topbarFilterElement.addEventListener('ifxTopbarFilterChange', this.handleTopbarFilterChange.bind(this));
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
    const sidebarFilters = this.host.shadowRoot.querySelectorAll('ifx-filter-type-group');
    // Remove the event listener from each SetFilter component
    sidebarFilters.forEach(sidebarFilter => {
      sidebarFilter.removeEventListener('ifxSidebarFilterChange', this.handleSidebarFilterChange.bind(this));
    });
    const topbarFilters = this.host.shadowRoot.querySelectorAll('ifx-filter-type-group');
    // Remove the event listener from each SetFilter component
    topbarFilters.forEach(topbarFilter => {
      topbarFilter.removeEventListener('ifxTopbarFilterChange', this.handleTopbarFilterChange.bind(this));
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

  isJSONParseable(str) {
    try {
      JSON.parse(str);
      return true;
    } catch (e) {
      return false;
    }
  }


  getRowData() {
    let rows: any[] = [];
    if (this.rows === undefined || this.rows === null) {
      return rows;
    }

    if (this.isJSONParseable(this.rows)) {
      rows = [...JSON.parse(this.rows)];
    }
    else if (Array.isArray(this.rows) || typeof this.rows === 'object') {
      rows = [...this.rows];
    }
    else {
      console.error('Unexpected value for rows: ', this.rows);
    }

    this.allRowData = rows;
    this.originalRowData = [...rows]; // Deep copy the original data
    this.matchingResultsCount = this.allRowData.length;

    return rows.slice(0, this.paginationPageSize);
  }


  getColData() {
    let cols: any[] = [];
    if (this.cols === undefined || this.cols === null) {
      return cols;
    }

    if (this.isJSONParseable(this.cols)) {
      cols = [...JSON.parse(this.cols)];
    } else if (Array.isArray(this.cols) || typeof this.cols === 'object') {
      cols = [...this.cols];
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

  handleResetButtonClick() {
    const resetEvent = new CustomEvent('ifxResetFiltersEvent', { bubbles: true, composed: true });
    window.dispatchEvent(resetEvent); // Dispatch from the window object

    this.clearAllFilters();
    this.updateTableView();  // Update table view with the original data
  }


  disconnectedCallback() {
    if (this.pagination) {
      const paginationElement = this.host.shadowRoot.querySelector('ifx-pagination');
      if (paginationElement) {
        paginationElement.removeEventListener('ifxPageChange', this.handlePageChange);
      }
    }

    const resetButton = this.host.shadowRoot.querySelector('#reset-filters-button');
    if (resetButton) {
      resetButton.removeEventListener('click', this.handleResetButtonClick.bind(this));
    }
  }



  getTableClassNames() {
    return classNames(
      this.tableHeight === 'auto' && 'table-wrapper ag-root-wrapper-body',
      'table-wrapper',
    );
  }


  render() {
    let style = {};
    if (this.tableHeight !== 'auto') {
      style = {
        'height': this.tableHeight
      };
    }
    const filterClass = this.filterOrientation === 'topbar' ? 'topbar-layout' : 'sidebar-layout';
    return (
      <Host>
        <div class="table-container">
          {this.filterOrientation === 'sidebar' && (
            <div class="sidebar-btn">
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
            {this.filterOrientation === 'sidebar' && this.showSidebarFilters && (
              <div class="sidebar-container">
                <div class="filters-title-container">
                  <span class="filters-title">Filters</span>
                </div>
                <div class="set-filter-wrapper-sidebar">
                  {(this.filterOrientation !== 'sidebar' || this.showSidebarFilters) && (
                    <slot name="sidebar-filter"></slot>
                  )}
                </div>
              </div>
            )}

            {this.filterOrientation !== 'none' && this.filterOrientation !== 'sidebar' && (
              <div class="set-filter-wrapper-topbar">
                {(this.filterOrientation !== 'sidebar' || this.showSidebarFilters) && (
                  <slot name="topbar-filter"></slot>
                )}
              </div>
            )}

            <div class="table-pagination-wrapper">
              <div class="filter-chips">
                {this.filterOrientation !== 'none' && this.filterOrientation !== 'topbar' && this.showSidebarFilters && (
                  Object.keys(this.currentFilters).map(name => {
                    const filter = this.currentFilters[name];
                    const filterValues = filter.filterValues;
                    const isMultiSelect = filter.type !== 'text';

                    return filterValues.length > 0 ? (
                      <ifx-chip
                        placeholder={name}
                        size="large"
                        variant={isMultiSelect ? "multi" : "single"}
                        readOnly={true}
                        value={filterValues} // Ensure value prop is set
                        key={name}
                      >
                        {filterValues.map(filterValue => (
                          <ifx-chip-item value={filterValue} selected={true} key={filterValue}>
                            {filterValue}
                          </ifx-chip-item>
                        ))}
                      </ifx-chip>
                    ) : null;
                  })
                )}

                {this.filterOrientation !== 'none' && this.filterOrientation === 'sidebar' && this.showSidebarFilters && Object.keys(this.currentFilters).length > 0 && (
                  <ifx-button type="button" disabled={false} variant="tertiary" size="m" target="_blank" theme="default" full-width="false" onClick={() => this.handleResetButtonClick()}
                  >
                    <ifx-icon icon="curved-arrow-left-16"></ifx-icon>Reset all
                  </ifx-button>
                )}
              </div>

              {this.filterOrientation !== 'none' && (
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
                <div id={`ifxTable-${this.uniqueKey}`} class='ifx-ag-grid' style={style} ref={(el) => this.container = el}>
                </div>
              </div>
              {this.pagination ? <ifx-pagination total={this.allRowData.length} current-page={this.currentPage}></ifx-pagination> : null}
            </div>
          </div>
        </div>
      </Host>
    );
  }


  hasButtonCol(): boolean {
    return this.getColData().some(column => column.field === 'button');
  }

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
