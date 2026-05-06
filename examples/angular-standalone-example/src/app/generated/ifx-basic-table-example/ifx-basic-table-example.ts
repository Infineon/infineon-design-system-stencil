import { IfxBasicTable, IfxButton, IfxTextField } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-basic-table-example',
  imports: [ IfxBasicTable, IfxButton, IfxTextField ],
  templateUrl: './ifx-basic-table-example.html',
  styleUrl: './ifx-basic-table-example.scss'
})
export class IfxBasicTableExample {
  protected readonly tsCode = `import { IfxBasicTable, IfxButton, IfxTextField } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-basic-table-example',
  imports: [ IfxBasicTable, IfxButton, IfxTextField ],
  templateUrl: './ifx-basic-table-example.html',
  styleUrl: './ifx-basic-table-example.scss'
})
export class IfxBasicTableExample {

  protected tableHeight = "auto";
  protected readonly rowHeightOptions = ["compact","default"];
  protected rowHeightIndex = 1;
  protected cols = "[{\\"headerName\\":\\"ID\\",\\"field\\":\\"id\\",\\"sortable\\":true,\\"sort\\":\\"desc\\",\\"unSortIcon\\":true},{\\"headerName\\":\\"Item\\",\\"field\\":\\"item\\",\\"sortable\\":true,\\"unSortIcon\\":true},{\\"headerName\\":\\"Price\\",\\"field\\":\\"price\\"},{\\"headerName\\":\\"Date\\",\\"field\\":\\"date\\"}]";
  protected rows = "[{\\"id\\":1,\\"item\\":\\"Item 1\\",\\"price\\":356,\\"date\\":\\"2025-05-11\\"},{\\"id\\":2,\\"item\\":\\"Item 2\\",\\"price\\":55,\\"date\\":\\"2025-03-26\\"},{\\"id\\":3,\\"item\\":\\"Item 3\\",\\"price\\":24},{\\"id\\":4,\\"item\\":\\"Item 4\\",\\"price\\":874,\\"date\\":\\"2025-04-30\\"},{\\"id\\":5,\\"item\\":\\"Item 5\\",\\"price\\":689,\\"date\\":\\"2025-09-14\\"},{\\"id\\":6,\\"item\\":\\"Item 6\\",\\"price\\":46},{\\"id\\":7,\\"item\\":\\"Item 7\\",\\"price\\":421,\\"date\\":\\"2026-07-25\\"},{\\"id\\":8,\\"item\\":\\"Item 8\\",\\"price\\":17,\\"date\\":\\"2026-06-28\\"},{\\"id\\":9,\\"item\\":\\"Item 9\\",\\"price\\":752},{\\"id\\":10,\\"item\\":\\"Item 10\\",\\"price\\":73,\\"date\\":\\"2026-01-27\\"},{\\"id\\":11,\\"item\\":\\"Item 11\\",\\"price\\":94,\\"date\\":\\"2026-10-31\\"},{\\"id\\":12,\\"item\\":\\"Item 12\\",\\"price\\":846}]";
  protected readonly variantOptions = ["default","zebra"];
  protected variantIndex = 0;

  protected updateTableHeight(value: string) {
    this.tableHeight = value;
  }

  protected handleRowHeightChange() {
    this.rowHeightIndex = (this.rowHeightIndex + 1) % this.rowHeightOptions.length;
  }

  protected updateCols(value: string) {
    this.cols = value;
  }

  protected updateRows(value: string) {
    this.rows = value;
  }

  protected handleVariantChange() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
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

}`;
  protected readonly htmlCode = `  &lt;ifx-basic-table
    [cols]=&quot;cols&quot;
    [rows]=&quot;rows&quot;
    [tableHeight]=&quot;tableHeight&quot;
    [rowHeight]=&quot;rowHeightOptions[rowHeightIndex]&quot;
    [variant]=&quot;variantOptions[variantIndex]&quot;&gt;&lt;/ifx-basic-table&gt;`;

  protected tableHeight = "auto";
  protected readonly rowHeightOptions = ["compact","default"];
  protected rowHeightIndex = 1;
  protected cols = "[{\"headerName\":\"ID\",\"field\":\"id\",\"sortable\":true,\"sort\":\"desc\",\"unSortIcon\":true},{\"headerName\":\"Item\",\"field\":\"item\",\"sortable\":true,\"unSortIcon\":true},{\"headerName\":\"Price\",\"field\":\"price\"},{\"headerName\":\"Date\",\"field\":\"date\"}]";
  protected rows = "[{\"id\":1,\"item\":\"Item 1\",\"price\":356,\"date\":\"2025-05-11\"},{\"id\":2,\"item\":\"Item 2\",\"price\":55,\"date\":\"2025-03-26\"},{\"id\":3,\"item\":\"Item 3\",\"price\":24},{\"id\":4,\"item\":\"Item 4\",\"price\":874,\"date\":\"2025-04-30\"},{\"id\":5,\"item\":\"Item 5\",\"price\":689,\"date\":\"2025-09-14\"},{\"id\":6,\"item\":\"Item 6\",\"price\":46},{\"id\":7,\"item\":\"Item 7\",\"price\":421,\"date\":\"2026-07-25\"},{\"id\":8,\"item\":\"Item 8\",\"price\":17,\"date\":\"2026-06-28\"},{\"id\":9,\"item\":\"Item 9\",\"price\":752},{\"id\":10,\"item\":\"Item 10\",\"price\":73,\"date\":\"2026-01-27\"},{\"id\":11,\"item\":\"Item 11\",\"price\":94,\"date\":\"2026-10-31\"},{\"id\":12,\"item\":\"Item 12\",\"price\":846}]";
  protected readonly variantOptions = ["default","zebra"];
  protected variantIndex = 0;

  protected updateTableHeight(value: string) {
    this.tableHeight = value;
  }

  protected handleRowHeightChange() {
    this.rowHeightIndex = (this.rowHeightIndex + 1) % this.rowHeightOptions.length;
  }

  protected updateCols(value: string) {
    this.cols = value;
  }

  protected updateRows(value: string) {
    this.rows = value;
  }

  protected handleVariantChange() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
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

}