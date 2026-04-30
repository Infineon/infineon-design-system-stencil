import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-pagination-example',
  templateUrl: './ifx-pagination-example.html',
  styleUrl: './ifx-pagination-example.scss',
  standalone: false
})
export class IfxPaginationExample {
  protected readonly tsCode = `import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-pagination-example',
  templateUrl: './ifx-pagination-example.html',
  styleUrl: './ifx-pagination-example.scss',
  standalone: false
})
export class IfxPaginationExample {

  protected currentPage = "1";
  protected total = "50";
  protected itemsPerPage = "[{\\"value\\":\\"10\\",\\"selected\\":true}, {\\"value\\":\\"20\\",\\"selected\\":false}, {\\"value\\":\\"30\\",\\"selected\\":false}, {\\"value\\":\\"all\\",\\"selected\\":false}]";
  protected showItemsPerPage = true;
  protected itemsPerPageLabel = "Result per Pages";

  protected updateCurrentPage(value: string) {
    this.currentPage = value;
  }

  protected updateTotal(value: string) {
    this.total = value;
  }

  protected updateItemsPerPage(value: string) {
    this.itemsPerPage = value;
  }

  protected handleShowItemsPerPageChange() {
    this.showItemsPerPage = !this.showItemsPerPage;
  }

  protected updateItemsPerPageLabel(value: string) {
    this.itemsPerPageLabel = value;
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

  protected handlePageChange(event: CustomEvent) {
    console.log('ifxPageChange:', event);
    // Add your handler logic here
  }

}`;
  protected readonly htmlCode = `  &lt;ifx-pagination
    (ifxItemsPerPageChange)=&quot;handleItemsPerPageChange(\$any(\$event))&quot;
    (ifxPageChange)=&quot;handlePageChange(\$any(\$event))&quot;
    [total]=&quot;total&quot;
    [currentPage]=&quot;currentPage&quot;
    [showItemsPerPage]=&quot;showItemsPerPage&quot;
    [itemsPerPage]=&quot;itemsPerPage&quot;
    [itemsPerPageLabel]=&quot;itemsPerPageLabel&quot;&gt;&lt;/ifx-pagination&gt;`;

  protected currentPage = "1";
  protected total = "50";
  protected itemsPerPage = "[{\"value\":\"10\",\"selected\":true}, {\"value\":\"20\",\"selected\":false}, {\"value\":\"30\",\"selected\":false}, {\"value\":\"all\",\"selected\":false}]";
  protected showItemsPerPage = true;
  protected itemsPerPageLabel = "Result per Pages";

  protected updateCurrentPage(value: string) {
    this.currentPage = value;
  }

  protected updateTotal(value: string) {
    this.total = value;
  }

  protected updateItemsPerPage(value: string) {
    this.itemsPerPage = value;
  }

  protected handleShowItemsPerPageChange() {
    this.showItemsPerPage = !this.showItemsPerPage;
  }

  protected updateItemsPerPageLabel(value: string) {
    this.itemsPerPageLabel = value;
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

  protected handlePageChange(event: CustomEvent) {
    console.log('ifxPageChange:', event);
    // Add your handler logic here
  }

}