import { Component, h, Host, Method, Element, Prop, State, Listen, Watch } from '@stencil/core';
import classNames from 'classnames';
import { trackComponent } from '../../global/utils/tracking';
import { isNestedInIfxComponent } from '../../global/utils/dom-utils';
import { detectFramework } from '../../global/utils/framework-detection';
import { CellPosition, createGrid, FirstDataRenderedEvent, GridApi, GridOptions } from 'ag-grid-community';
import { ButtonCellRenderer } from './buttonCellRenderer';
import { CheckboxCellRenderer } from './checkboxCellRenderer';
import { CheckboxHeaderRenderer } from './checkboxHeaderRenderer';
import { IconButtonCellRenderer } from './iconButtonCellRenderer';
import { LinkCellRenderer } from './linkCellRenderer';
import { StatusCellRenderer } from './statusCellRenderer';
import { CustomNoRowsOverlay } from './customNoRowsOverlay';
import { CustomLoadingOverlay } from './customLoadingOverlay';

@Component({
  tag: 'ifx-table',
  styleUrl: 'table.scss',
  shadow: true,
})
export class Table {
  gridOptions: GridOptions;
  gridApi: GridApi;
  @State() currentPage: number = 1;
  @Prop() cols: any;
  @Prop() rows: any;
  @Prop() buttonRendererOptions?: { onButtonClick?: (params: any, event: Event) => void };
  @Prop() iconButtonRendererOptions?: { onIconButtonClick?: (params: any, event: Event) => void };
  @Prop() checkboxRendererOptions?: { onCheckboxClick?: (params: any, event: Event) => void };
  @State() rowData: any[] = [];
  @State() colData: any[] = [];
  @State() filterOptions: { [key: string]: string[] } = {};
  @State() currentFilters = {};
  @State() uniqueKey: string;
  allRowData: any[] = [];
  @Prop() rowHeight: string = 'default';
  @Prop() tableHeight: string = 'auto';
  @Prop() pagination: boolean = true;
  @Prop() paginationItemsPerPage: string;
  @State() paginationPageSize: number = 10;
  @Prop() filterOrientation: string = 'sidebar';
  @Prop() headline: string = '';
  @State() showSidebarFilters: boolean = true;
  @State() matchingResultsCount: number = 0;
  @Prop() variant: string = 'default';
  @Prop() serverSidePagination: boolean = false;
  @Prop() serverPageChangeHandler?: (params: { page: number; pageSize: number }) => Promise<{ rows: any[]; total: number }>;
  @Prop() enableSelection: boolean = false;
  @State() selectedRows: Set<string> = new Set();
  @State() selectAll: boolean = false;
  @Prop() showLoading: boolean = false;
  private container: HTMLDivElement;
  @Element() host: HTMLElement;
  originalRowData: any[] = [];

  private internalItemsPerPage = JSON.stringify([
    { value: 10, label: '10', selected: true },
    { value: 20, label: '20', selected: false },
    { value: 30, label: '30', selected: false },
  ]);

  @Watch('rows')
  rowsChanged(_newVal: any) {
    const parsed = this.parseArrayInput<any>(this.rows);

    parsed.forEach((row, index) => {
      if (!row.__rowId) {
        row.__rowId = `row_${index}_${Date.now()}_${Math.random()}`;
      }
    });

    if (this.enableSelection) {
      parsed.forEach(row => {
        row.__checkbox = {
          disabled: false,
          checked: this.selectedRows?.has(row.__rowId) || false,
          size: 's',
          indeterminate: false,
          error: false,
        };
      });
    }
    this.currentFilters = {};
    this.currentPage = 1;
    this.originalRowData = [...parsed];
    this.allRowData = [...parsed];
    this.matchingResultsCount = this.allRowData.length;
    this.updateTableView();
    this.updateFilterOptions();
  }

  @Watch('cols')
  colsChanged(_newVal: any) {
    this.colData = this.getColData();

    if (this.gridApi) {
      this.gridApi.setGridOption('columnDefs', this.colData);
      this.gridApi.sizeColumnsToFit({
        defaultMinWidth: 100,
      });
    }

    this.updateFilterOptions();
  }

  @Listen('ifxItemsPerPageChange')
  handleResultsPerPageChange(e: CustomEvent<string>) {
    this.paginationPageSize = Number(e.detail);
    this.currentPage = 1;
    this.updateTableView();
  }

  @Listen('ifxChange')
  handleChipChange(event: CustomEvent<{ previousSelection: Array<any>; currentSelection: Array<any>; name: string }>) {
    const { name, currentSelection, previousSelection } = event.detail;
    if (currentSelection && previousSelection) {
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
  }

  @Watch('buttonRendererOptions')
  onButtonRendererOptionsChanged() {
    this.colData = this.getColData();
    if (this.gridApi) {
      this.gridApi.setGridOption('columnDefs', this.colData);
    }
  }

  @Watch('iconButtonRendererOptions')
  onIconButtonRendererOptionsChanged() {
    this.colData = this.getColData();
    if (this.gridApi) {
      this.gridApi.setGridOption('columnDefs', this.colData);
    }
  }

  @Watch('checkboxRendererOptions')
  onCheckboxRendererOptionsChanged() {
    this.colData = this.getColData();
    if (this.gridApi) {
      this.gridApi.setGridOption('columnDefs', this.colData);
    }
  }

  private parseArrayInput<T>(input: any): T[] {
    if (typeof input === 'string') {
      try {
        const parsed = JSON.parse(input);
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        console.error('Failed to parse input:', input);
        return [];
      }
    }
    if (Array.isArray(input)) return input;
    if (typeof input === 'object' && input !== null) return [input as T];
    return [];
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

  private updateHeaderCheckboxState() {
    if (this.gridApi && this.enableSelection) {
      setTimeout(() => {
        const headerCheckbox = this.container?.querySelector('.ag-header-cell[col-id="__checkbox"] ifx-checkbox') as any;
        if (headerCheckbox) {
          const allSelected = this.selectedRows.size === this.allRowData.length && this.allRowData.length > 0;
          const someSelected = this.selectedRows.size > 0 && this.selectedRows.size < this.allRowData.length;
          headerCheckbox.checked = allSelected;
          headerCheckbox.indeterminate = someSelected;
        }
      }, 0);
    }
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
        filterValues = filter.filterValues;
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

  async updateTableView() {
    if (this.serverSidePagination && this.serverPageChangeHandler) {
      const { rows, total } = await this.serverPageChangeHandler({
        page: this.currentPage,
        pageSize: this.paginationPageSize,
      });

      if (this.enableSelection) {
        rows.forEach((row, index) => {
          if (!row.__rowId) {
            row.__rowId = `row_${(this.currentPage - 1) * this.paginationPageSize + index}_${Date.now()}`;
          }
          row.__checkbox = {
            disabled: false,
            checked: this.selectedRows?.has(row.__rowId) || false,
            size: 's',
            indeterminate: false,
            error: false,
          };
        });
      }

      this.rowData = rows;
      this.matchingResultsCount = total;
      if (this.gridApi) {
        this.gridApi.setGridOption('rowData', rows);
      }
      const paginationElement = this.host.shadowRoot.querySelector('ifx-pagination');
      if (paginationElement) {
        paginationElement.setAttribute('total', total.toString());
      }
    } else {
      const startIndex = (this.currentPage - 1) * this.paginationPageSize;
      const endIndex = startIndex + this.paginationPageSize;
      const visibleRowData = this.allRowData.slice(startIndex, endIndex);

      if (this.enableSelection) {
        visibleRowData.forEach(row => {
          if (!row.__checkbox) {
            row.__checkbox = {
              disabled: false,
              checked: this.selectedRows?.has(row.__rowId) || false,
              size: 's',
              indeterminate: false,
              error: false,
            };
          } else {
            row.__checkbox.checked = this.selectedRows?.has(row.__rowId) || false;
          }
        });
      }

      this.rowData = visibleRowData;
      this.matchingResultsCount = this.allRowData.length;
      if (this.gridApi) {
        this.gridApi.setGridOption('rowData', this.rowData);
      }
    }
  }

  clearAllFilters() {
    this.currentFilters = {};
    this.allRowData = [...this.originalRowData];
  }

  @Method()
  async onBtShowLoading() {
    this.gridApi.showLoadingOverlay();
  }

  setPaginationItemsPerPage() {
    const newItemsPerPage = this.paginationItemsPerPage;
    if (newItemsPerPage) {
      this.internalItemsPerPage = this.paginationItemsPerPage;
      const itemsPerPageArray = JSON.parse(this.internalItemsPerPage);

      const selectedOption = itemsPerPageArray.find(option => option.selected);
      if (selectedOption) {
        this.paginationPageSize = Number(selectedOption.value);
      } else if (itemsPerPageArray.length > 0) {
        this.paginationPageSize = Number(itemsPerPageArray[0].value);
      }
    }
  }

  componentWillLoad() {
    this.setPaginationItemsPerPage();

    this.uniqueKey = `unique-${Math.floor(Math.random() * 1000000)}`;
    this.rowData = this.getRowData();
    this.colData = this.getColData();
    this.updateFilterOptions();

    this.gridOptions = {
      suppressCellFocus: true,
      rowHeight: this.rowHeight === 'default' ? 40 : 32,
      headerHeight: 40,
      components: {
        checkboxCellRenderer: CheckboxCellRenderer,
        checkboxHeaderRenderer: CheckboxHeaderRenderer,
        customLoadingOverlay: CustomLoadingOverlay,
        customNoRowsOverlay: CustomNoRowsOverlay,
      },
      defaultColDef: {
        resizable: true,
        autoHeight: true,
      },
      suppressDragLeaveHidesColumns: true,
      enableCellTextSelection: true,
      onFirstDataRendered: this.onFirstDataRendered.bind(this),
      columnDefs: this.colData,
      rowData: this.rowData,
      loadingOverlayComponent: CustomLoadingOverlay,
      noRowsOverlayComponent: CustomNoRowsOverlay,
      noRowsOverlayComponentParams: {
        noRowsMessageFunc: () => 'No rows found', //at: ' + new Date().toLocaleTimeString(),
      },
      icons: {
        sortAscending: '<ifx-icon icon="arrow-triangle-up-16"></ifx-icon>',
        sortDescending: '<ifx-icon icon="arrow-triangle-down-16"></ifx-icon>',
        sortUnSort: '<a class="unsort-icon-custom-color"><ifx-icon icon="arrow-triangle-vertikal-16"></ifx-icon></a>',
      },
      rowDragManaged: this.colData.some(col => col.dndSource === true) ? true : false,
      animateRows: this.colData.some(col => col.dndSource === true) ? true : false,
      navigateToNextCell: params => {
        return this.focusCellIfContainingButton(params.api, params.nextCellPosition);
      },
      tabToNextCell: params => {
        // Returning null is deprecated so we return false if the result is null (browser handles tab behavior).
        return this.focusCellIfContainingButton(params.api, params.nextCellPosition) ?? false;
      },
    };
  }

  focusCellIfContainingButton<T>(api: GridApi<T>, cellPosition: CellPosition): CellPosition | null {
    if (!cellPosition) {
      return null;
    }

    if (cellPosition.column.getColDef().field === 'button') {
      const rowNode = api.getDisplayedRowAtIndex(cellPosition.rowIndex);

      if (!rowNode) {
        // Row not yet rendered due to virtualization.
        return null;
      }

      const cellRenderers = api.getCellRendererInstances({
        rowNodes: [rowNode],
        columns: [cellPosition.column],
      });

      if (cellRenderers.length > 0) {
        const renderedContent = (cellRenderers[0] as ButtonCellRenderer)?.getGui();

        if (renderedContent) {
          const button = renderedContent.querySelector('ifx-button');

          if (button) {
            setTimeout(() => {
              // Just calling button.focus() will not work because the focus of <ifx-button> will not be
              // forwared to its child <a>-element (containing the tabindex attribute) due to shadow root.
              // We must therefore grab the <a>-element manually first and then call focus() on it.
              const focusableChild = button.shadowRoot?.querySelector<HTMLElement>('a[tabindex]');
              focusableChild?.focus();
            }, 0);
          }
        }
      }
    }

    return cellPosition;
  }

  async componentDidLoad() {
    if (this.container) {
      if (!isNestedInIfxComponent(this.host)) {
        const framework = detectFramework();
        trackComponent('ifx-table', await framework);
      }
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
    this.updateTableView();
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

  async handlePageChange(event) {
    this.currentPage = event.detail.currentPage;

    if (this.serverSidePagination && this.serverPageChangeHandler) {
      const { rows, total } = await this.serverPageChangeHandler({
        page: this.currentPage,
        pageSize: this.paginationPageSize,
      });

      this.rowData = rows;
      this.matchingResultsCount = total;

      if (this.gridApi) {
        this.gridApi.setGridOption('rowData', this.rowData);
      }

      const paginationElement = this.host.shadowRoot.querySelector('ifx-pagination');
      if (paginationElement) {
        paginationElement.setAttribute('total', total.toString());
      }
    } else {
      const startIndex = (this.currentPage - 1) * this.paginationPageSize;
      const endIndex = startIndex + this.paginationPageSize;
      const visibleRowData = this.allRowData.slice(startIndex, endIndex);
      if (this.gridApi) {
        this.gridApi.setGridOption('rowData', visibleRowData);
      }
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

  handleSelectAll = (checked: boolean) => {
    this.selectAll = checked;
    if (checked) {
      this.selectedRows = new Set(this.allRowData.map(row => row.__rowId));
    } else {
      this.selectedRows = new Set();
    }
    this.updateCheckboxStates();
    this.updateHeaderCheckboxState();
    this.emitSelectionChange();
  };

  getRowData() {
    let rows: any[] = [];
    if (this.rows === undefined || this.rows === null) {
      return rows;
    }
    if (this.isJSONParseable(this.rows)) {
      rows = [...JSON.parse(this.rows)];
    } else if (Array.isArray(this.rows) || typeof this.rows === 'object') {
      rows = [...this.rows];
    } else {
      console.error('Unexpected value for rows: ', this.rows);
    }

    rows.forEach((row, index) => {
      if (!row.__rowId) {
        row.__rowId = `row_${index}_${Date.now()}_${Math.random()}`;
      }
    });

    if (this.enableSelection) {
      rows.forEach(row => {
        row.__checkbox = {
          disabled: false,
          checked: this.selectedRows?.has(row.__rowId) || false,
          size: 's',
          indeterminate: false,
          error: false,
        };
      });
    }
    this.allRowData = rows;
    this.originalRowData = [...rows];
    this.matchingResultsCount = this.allRowData.length;
    return rows.slice(0, this.paginationPageSize);
  }

  handleRowCheckboxClick = (params: any) => {
    const clickedRowData = params.data;
    const rowId = clickedRowData.__rowId;

    const newSelectedRows = new Set(this.selectedRows);
    if (newSelectedRows.has(rowId)) {
      newSelectedRows.delete(rowId);
    } else {
      newSelectedRows.add(rowId);
    }
    this.selectedRows = newSelectedRows;
    this.selectAll = newSelectedRows.size === this.allRowData.length;
    this.updateCheckboxStates();
    this.updateHeaderCheckboxState();
    this.emitSelectionChange();
  };

  private updateCheckboxStates() {
    this.allRowData.forEach(row => {
      if (row.__checkbox) {
        row.__checkbox.checked = this.selectedRows.has(row.__rowId);
      }
    });
    if (this.gridApi) {
      this.gridApi.refreshCells({
        columns: ['__checkbox'],
        force: true,
      });
    }
  }

  private emitSelectionChange() {
    const selectedRowsData = Array.from(this.selectedRows)
      .map(rowId => {
        const row = this.allRowData.find(r => r.__rowId === rowId);
        if (!row) return null;
        const { __checkbox, __rowId, ...rowData } = row;
        return rowData;
      })
      .filter(row => row !== null);

    this.host.dispatchEvent(
      new CustomEvent('ifxSelectionChange', {
        detail: {
          selectedRows: selectedRowsData,
          selectedCount: selectedRowsData.length,
          isSelectAll: this.selectedRows.size === this.allRowData.length && this.allRowData.length > 0,
        },
        bubbles: true,
      }),
    );
  }

  getColData() {
    let cols: any[] = [];
    if (this.cols === undefined || this.cols === null) return cols;
    if (this.isJSONParseable(this.cols)) {
      cols = [...JSON.parse(this.cols)];
    } else if (Array.isArray(this.cols) || typeof this.cols === 'object') {
      cols = [...this.cols];
    } else {
      console.error('Unexpected value for cols: ', this.cols);
    }

    if (this.enableSelection) {
      const checkboxColumn = {
        headerName: '',
        field: '__checkbox',
        width: 50,
        pinned: 'left',
        cellRenderer: 'checkboxCellRenderer',
        cellRendererParams: {
          onCheckboxClick: this.handleRowCheckboxClick?.bind(this),
        },
        headerComponent: 'checkboxHeaderRenderer',
        headerComponentParams: {
          onSelectAll: this.handleSelectAll?.bind(this),
        },
        sortable: false,
        filter: false,
        resizable: false,
        valueFormatter: undefined,
        cellDataType: false,
      };
      cols.unshift(checkboxColumn);
    }

    cols.forEach(column => {
      const field = column.field?.toLowerCase() || '';
      // --- Button columns ---
      if (field.startsWith('button')) {
        column.cellRenderer = ButtonCellRenderer;
        column.valueFormatter = undefined;
        column.cellDataType = false;
        if (this.buttonRendererOptions?.onButtonClick) {
          column.cellRendererParams = {
            onButtonClick: this.buttonRendererOptions.onButtonClick,
          };
        }
      }
      // --- Checkbox columns ---
      else if (field.startsWith('checkbox')) {
        column.cellRenderer = CheckboxCellRenderer;
        column.valueFormatter = undefined;
        column.cellDataType = false;
        if (this.checkboxRendererOptions?.onCheckboxClick) {
          column.cellRendererParams = {
            onCheckboxClick: this.checkboxRendererOptions.onCheckboxClick,
          };
        }
      }
      // --- Icon Button columns ---
      else if (field.startsWith('iconbutton') || field === 'iconButton') {
        column.cellRenderer = IconButtonCellRenderer;
        column.valueFormatter = undefined;
        column.cellDataType = false;
        if (this.iconButtonRendererOptions?.onIconButtonClick) {
          column.cellRendererParams = {
            onIconButtonClick: this.iconButtonRendererOptions.onIconButtonClick,
          };
        }
      }
      // --- Status columns ---
      else if (field.startsWith('status')) {
        column.cellRenderer = StatusCellRenderer;
        column.valueFormatter = undefined;
        column.cellDataType = false;
      }
      // --- Link columns ---
      else if (field.startsWith('link')) {
        column.cellRenderer = LinkCellRenderer;
        column.valueFormatter = undefined;
        column.cellDataType = false;
      }
    });
    return cols;
  }

  onFirstDataRendered(params: FirstDataRenderedEvent) {
    params.api.sizeColumnsToFit();
  }

  handleResetButtonClick() {
    const resetEvent = new CustomEvent('ifxResetFiltersEvent', { bubbles: true, composed: true });
    window.dispatchEvent(resetEvent);

    this.clearAllFilters();
    this.updateTableView();
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
    return classNames(this.tableHeight === 'auto' && 'table-wrapper ag-root-wrapper-body', 'table-wrapper');
  }

  render() {
    let style = {};
    if (this.tableHeight !== 'auto') {
      style = {
        height: this.tableHeight,
      };
    }

    const filterClass = this.filterOrientation === 'topbar' ? 'topbar-layout' : this.filterOrientation === 'none' ? '' : 'sidebar-layout';

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
                <ifx-icon icon="cross-16"></ifx-icon>
                {this.showSidebarFilters ? 'Hide Filters' : 'Show Filters'}
              </ifx-button>
            </div>
          )}

          <div class={filterClass}>
            {this.filterOrientation === 'sidebar' && this.showSidebarFilters && (
              <div class="sidebar-container">
                <div class="filters-title-container">
                  <span class="filters-title">Filters</span>
                </div>
                <div class="set-filter-wrapper-sidebar">{(this.filterOrientation !== 'sidebar' || this.showSidebarFilters) && <slot name="sidebar-filter"></slot>}</div>
              </div>
            )}

            {this.filterOrientation !== 'none' && this.filterOrientation !== 'sidebar' && (
              <div class="set-filter-wrapper-topbar">{(this.filterOrientation !== 'sidebar' || this.showSidebarFilters) && <slot name="topbar-filter"></slot>}</div>
            )}

            <div class="table-pagination-wrapper">
              {this.filterOrientation !== 'none' && this.filterOrientation !== 'topbar' && this.showSidebarFilters && (
                <div class="filter-chips">
                  {Object.keys(this.currentFilters).map(name => {
                    const filter = this.currentFilters[name];
                    const filterValues = filter.filterValues;
                    const isMultiSelect = filter.type !== 'text';

                    return filterValues.length > 0 ? (
                      <ifx-chip placeholder={name} size="large" variant={isMultiSelect ? 'multi' : 'single'} readOnly={true} value={filterValues} key={name}>
                        {filterValues.map(filterValue => (
                          <ifx-chip-item value={filterValue} selected={true} key={filterValue}>
                            {filterValue}
                          </ifx-chip-item>
                        ))}
                      </ifx-chip>
                    ) : null;
                  })}
                </div>
              )}

              <div class="headline-wrapper">
                {this.filterOrientation !== 'none' && this.headline && (
                  <div class="matching-results-container">
                    <span class="matching-results-count">({this.matchingResultsCount})</span>
                    <span class="matching-results-text">{this.headline}</span>
                  </div>
                )}

                <div class="inner-buttons-wrapper">
                  <slot name="inner-button" />
                </div>
              </div>

              <div id="table-wrapper" class={this.getTableClassNames()}>
                <div id={`ifxTable-${this.uniqueKey}`} class={`ifx-ag-grid ${this.variant === 'zebra' ? 'zebra' : ''}`} style={style} ref={el => (this.container = el)}></div>
              </div>
              <div class="pagination-wrapper">
                {this.pagination ? (
                  <ifx-pagination
                    total={this.serverSidePagination ? this.matchingResultsCount : this.allRowData.length}
                    current-page={this.currentPage}
                    items-per-page={this.internalItemsPerPage}
                  ></ifx-pagination>
                ) : null}
              </div>
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
