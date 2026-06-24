import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-action-list-example',
  templateUrl: './ifx-action-list-example.html',
  styleUrl: './ifx-action-list-example.scss',
  standalone: false
})
export class IfxActionListExample {
  protected readonly tsCode = `import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-action-list-example',
  templateUrl: './ifx-action-list-example.html',
  styleUrl: './ifx-action-list-example.scss',
  standalone: false
})
export class IfxActionListExample {

  protected listAriaLabel = "Navigation menu";

  protected updateListAriaLabel(value: string) {
    this.listAriaLabel = value;
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

  protected handleActionListItemClick(event: CustomEvent) {
    console.log('ifxActionListItemClick:', event);
    // Add your handler logic here
  }

}`;
  protected readonly htmlCode = `  &lt;ifx-action-list [listAriaLabel]=&quot;listAriaLabel&quot;&gt;
    &lt;ifx-action-list-item
      item-title=&quot;Dashboard&quot;
      description=&quot;View your main dashboard&quot;
      value=&quot;dashboard&quot;
      item-aria-label=&quot;Navigation item&quot;
      (ifxActionListItemClick)=&quot;handleActionListItemClick(\$any(\$event))&quot;&gt;
      &lt;ifx-icon
        slot=&quot;trailing&quot;
        icon=&quot;chevron-right-16&quot;&gt;&lt;/ifx-icon&gt;
    &lt;/ifx-action-list-item&gt;
    &lt;ifx-action-list-item
      item-title=&quot;Settings&quot;
      value=&quot;settings&quot;
      item-aria-label=&quot;Navigation item&quot;&gt;
      &lt;ifx-icon
        slot=&quot;trailing&quot;
        icon=&quot;chevron-right-16&quot;&gt;&lt;/ifx-icon&gt;
    &lt;/ifx-action-list-item&gt;
    &lt;ifx-action-list-item
      item-title=&quot;Profile&quot;
      description=&quot;Manage your profile information&quot;
      value=&quot;profile&quot;
      [disabled]=&quot;true&quot;
      item-aria-label=&quot;Navigation item&quot;&gt;
      &lt;ifx-icon
        slot=&quot;trailing&quot;
        icon=&quot;chevron-right-16&quot;&gt;&lt;/ifx-icon&gt;
    &lt;/ifx-action-list-item&gt;
    &lt;ifx-action-list-item
      item-title=&quot;Advanced Analytics and Reporting Dashboard with Extended Functionality&quot;
      description=&quot;This comprehensive analytics dashboard provides detailed insights into user behavior and system performance metrics.&quot;
      value=&quot;analytics&quot;
      item-aria-label=&quot;Navigation item&quot;&gt;
      &lt;ifx-icon
        slot=&quot;trailing&quot;
        icon=&quot;chevron-right-16&quot;&gt;&lt;/ifx-icon&gt;
    &lt;/ifx-action-list-item&gt;
  &lt;/ifx-action-list&gt;`;

  protected listAriaLabel = "Navigation menu";

  protected updateListAriaLabel(value: string) {
    this.listAriaLabel = value;
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

  protected handleActionListItemClick(event: CustomEvent) {
    console.log('ifxActionListItemClick:', event);
    // Add your handler logic here
  }

}