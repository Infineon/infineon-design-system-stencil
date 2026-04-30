import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-table-example-defaultstate',
  templateUrl: './ifx-table-example-defaultstate.html',
  styleUrl: './ifx-table-example-defaultstate.scss',
  standalone: false
})
export class IfxTableDefaultStateExample {
  protected readonly tsCode = `import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-table-example-defaultstate',
  templateUrl: './ifx-table-example-defaultstate.html',
  styleUrl: './ifx-table-example-defaultstate.scss',
  standalone: false
})
export class IfxTableDefaultStateExample {

  protected tableHeight = "auto";
  protected pagination = false;
  protected serverSidePagination = false;
  protected paginationItemsPerPage = "[{\\"value\\":\\"10\\",\\"selected\\":true}, {\\"value\\":\\"20\\",\\"selected\\":false}, {\\"value\\":\\"30\\",\\"selected\\":false}, {\\"value\\":\\"all\\",\\"selected\\":false}]";
  protected showLoading = false;
  protected readonly rowHeightOptions = ["compact","default"];
  protected rowHeightIndex = 1;
  protected enableSelection = false;
  protected readonly filterOrientationOptions = ["sidebar","topbar","none"];
  protected filterOrientationIndex = 2;
  protected cols = "[{\\"headerName\\":\\"ID\\",\\"field\\":\\"id\\",\\"sortable\\":true,\\"sort\\":\\"desc\\",\\"unSortIcon\\":true},{\\"headerName\\":\\"Item\\",\\"field\\":\\"item\\",\\"sortable\\":true,\\"unSortIcon\\":true},{\\"headerName\\":\\"Price\\",\\"field\\":\\"price\\"},{\\"headerName\\":\\"Date\\",\\"field\\":\\"date\\"}]";
  protected fitColumns = false;
  protected columnMinWidth = "200";
  protected columnWidth = "100";
  protected rows = "[{\\"id\\":\\"1\\",\\"item\\":\\"Item 1\\",\\"price\\":356,\\"date\\":\\"2025-06-25\\"},{\\"id\\":\\"2\\",\\"item\\":\\"Item 2\\",\\"price\\":55,\\"date\\":\\"2025-03-26\\"},{\\"id\\":\\"3\\",\\"item\\":\\"Item 3\\",\\"price\\":24},{\\"id\\":\\"4\\",\\"item\\":\\"x\\",\\"price\\":874},{\\"id\\":\\"5\\",\\"item\\":\\"x\\",\\"price\\":689},{\\"id\\":\\"6\\",\\"item\\":\\"x\\",\\"price\\":46},{\\"id\\":\\"7\\",\\"item\\":\\"Item 7\\",\\"price\\":421},{\\"id\\":\\"8\\",\\"item\\":\\"Item 8\\",\\"price\\":17},{\\"id\\":\\"9\\",\\"item\\":\\"x\\",\\"price\\":752},{\\"id\\":\\"10\\",\\"item\\":\\"Item 10\\",\\"price\\":73},{\\"id\\":\\"11\\",\\"item\\":\\"x\\",\\"price\\":94}]";
  protected readonly variantOptions = ["default","zebra"];
  protected variantIndex = 0;
  protected headline = "Matching results";
  protected headlineNumber = "0";

  protected updateTableHeight(value: string) {
    this.tableHeight = value;
  }

  protected handlePaginationChange() {
    this.pagination = !this.pagination;
  }

  protected handleServerSidePaginationChange() {
    this.serverSidePagination = !this.serverSidePagination;
  }

  protected updatePaginationItemsPerPage(value: string) {
    this.paginationItemsPerPage = value;
  }

  protected handleShowLoadingChange() {
    this.showLoading = !this.showLoading;
  }

  protected handleRowHeightChange() {
    this.rowHeightIndex = (this.rowHeightIndex + 1) % this.rowHeightOptions.length;
  }

  protected handleEnableSelectionChange() {
    this.enableSelection = !this.enableSelection;
  }

  protected handleFilterOrientationChange() {
    this.filterOrientationIndex = (this.filterOrientationIndex + 1) % this.filterOrientationOptions.length;
  }

  protected updateCols(value: string) {
    this.cols = value;
  }

  protected handleFitColumnsChange() {
    this.fitColumns = !this.fitColumns;
  }

  protected updateColumnMinWidth(value: string) {
    this.columnMinWidth = value;
  }

  protected updateColumnWidth(value: string) {
    this.columnWidth = value;
  }

  protected updateRows(value: string) {
    this.rows = value;
  }

  protected handleVariantChange() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
  }

  protected updateHeadline(value: string) {
    this.headline = value;
  }

  protected updateHeadlineNumber(value: string) {
    this.headlineNumber = value;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

  protected handleSortChange(event: CustomEvent) {
    console.log('ifxSortChange:', event);
    // Add your handler logic here
  }

}`;
  protected readonly htmlCode = `  &lt;ifx-table
    fit-column=&quot;false&quot;
    (ifxSortChange)=&quot;handleSortChange(\$any(\$event))&quot;
    [rowHeight]=&quot;rowHeightOptions[rowHeightIndex]&quot;
    [cols]=&quot;cols&quot;
    [rows]=&quot;rows&quot;
    [tableHeight]=&quot;tableHeight&quot;
    [paginationItemsPerPage]=&quot;paginationItemsPerPage&quot;
    [filterOrientation]=&quot;filterOrientationOptions[filterOrientationIndex]&quot;
    [variant]=&quot;variantOptions[variantIndex]&quot;
    [columnMinWidth]=&quot;columnMinWidth&quot;
    [columnWidth]=&quot;columnWidth&quot;
    [headline]=&quot;headline&quot;
    [headlineNumber]=&quot;headlineNumber&quot;
    [pagination]=&quot;pagination&quot;
    [serverSidePagination]=&quot;serverSidePagination&quot;
    [showLoading]=&quot;showLoading&quot;
    [enableSelection]=&quot;enableSelection&quot;
    [fitColumns]=&quot;fitColumns&quot;&gt;&lt;/ifx-table&gt;`;

  protected tableHeight = "auto";
  protected pagination = false;
  protected serverSidePagination = false;
  protected paginationItemsPerPage = "[{\"value\":\"10\",\"selected\":true}, {\"value\":\"20\",\"selected\":false}, {\"value\":\"30\",\"selected\":false}, {\"value\":\"all\",\"selected\":false}]";
  protected showLoading = false;
  protected readonly rowHeightOptions = ["compact","default"];
  protected rowHeightIndex = 1;
  protected enableSelection = false;
  protected readonly filterOrientationOptions = ["sidebar","topbar","none"];
  protected filterOrientationIndex = 2;
  protected cols = "[{\"headerName\":\"ID\",\"field\":\"id\",\"sortable\":true,\"sort\":\"desc\",\"unSortIcon\":true},{\"headerName\":\"Item\",\"field\":\"item\",\"sortable\":true,\"unSortIcon\":true},{\"headerName\":\"Price\",\"field\":\"price\"},{\"headerName\":\"Date\",\"field\":\"date\"}]";
  protected fitColumns = false;
  protected columnMinWidth = "200";
  protected columnWidth = "100";
  protected rows = "[{\"id\":\"1\",\"item\":\"Item 1\",\"price\":356,\"date\":\"2025-06-25\"},{\"id\":\"2\",\"item\":\"Item 2\",\"price\":55,\"date\":\"2025-03-26\"},{\"id\":\"3\",\"item\":\"Item 3\",\"price\":24},{\"id\":\"4\",\"item\":\"x\",\"price\":874},{\"id\":\"5\",\"item\":\"x\",\"price\":689},{\"id\":\"6\",\"item\":\"x\",\"price\":46},{\"id\":\"7\",\"item\":\"Item 7\",\"price\":421},{\"id\":\"8\",\"item\":\"Item 8\",\"price\":17},{\"id\":\"9\",\"item\":\"x\",\"price\":752},{\"id\":\"10\",\"item\":\"Item 10\",\"price\":73},{\"id\":\"11\",\"item\":\"x\",\"price\":94}]";
  protected readonly variantOptions = ["default","zebra"];
  protected variantIndex = 0;
  protected headline = "Matching results";
  protected headlineNumber = "0";

  protected updateTableHeight(value: string) {
    this.tableHeight = value;
  }

  protected handlePaginationChange() {
    this.pagination = !this.pagination;
  }

  protected handleServerSidePaginationChange() {
    this.serverSidePagination = !this.serverSidePagination;
  }

  protected updatePaginationItemsPerPage(value: string) {
    this.paginationItemsPerPage = value;
  }

  protected handleShowLoadingChange() {
    this.showLoading = !this.showLoading;
  }

  protected handleRowHeightChange() {
    this.rowHeightIndex = (this.rowHeightIndex + 1) % this.rowHeightOptions.length;
  }

  protected handleEnableSelectionChange() {
    this.enableSelection = !this.enableSelection;
  }

  protected handleFilterOrientationChange() {
    this.filterOrientationIndex = (this.filterOrientationIndex + 1) % this.filterOrientationOptions.length;
  }

  protected updateCols(value: string) {
    this.cols = value;
  }

  protected handleFitColumnsChange() {
    this.fitColumns = !this.fitColumns;
  }

  protected updateColumnMinWidth(value: string) {
    this.columnMinWidth = value;
  }

  protected updateColumnWidth(value: string) {
    this.columnWidth = value;
  }

  protected updateRows(value: string) {
    this.rows = value;
  }

  protected handleVariantChange() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
  }

  protected updateHeadline(value: string) {
    this.headline = value;
  }

  protected updateHeadlineNumber(value: string) {
    this.headlineNumber = value;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

  protected handleSortChange(event: CustomEvent) {
    console.log('ifxSortChange:', event);
    // Add your handler logic here
  }

}