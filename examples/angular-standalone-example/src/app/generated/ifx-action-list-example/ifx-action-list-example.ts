import { IfxActionList, IfxActionListItem, IfxButton, IfxIcon, IfxTextField } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-action-list-example',
  imports: [ IfxActionList, IfxActionListItem, IfxButton, IfxIcon, IfxTextField ],
  templateUrl: './ifx-action-list-example.html',
  styleUrl: './ifx-action-list-example.scss'
})
export class IfxActionListExample {
  protected readonly tsCode = `import { IfxActionList, IfxActionListItem, IfxButton, IfxIcon, IfxTextField } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-action-list-example',
  imports: [ IfxActionList, IfxActionListItem, IfxButton, IfxIcon, IfxTextField ],
  templateUrl: './ifx-action-list-example.html',
  styleUrl: './ifx-action-list-example.scss'
})
export class IfxActionListExample {

  protected disabled = false;
  protected value = "";
  protected itemTitle = "Dashboard";
  protected description = "View your main dashboard";
  protected listAriaLabel = "Navigation menu";
  protected itemAriaLabel = "Navigation item";

  protected handleDisabledChange() {
    this.disabled = !this.disabled;
  }

  protected updateValue(value: string) {
    this.value = value;
  }

  protected updateItemTitle(value: string) {
    this.itemTitle = value;
  }

  protected updateDescription(value: string) {
    this.description = value;
  }

  protected updateListAriaLabel(value: string) {
    this.listAriaLabel = value;
  }

  protected updateItemAriaLabel(value: string) {
    this.itemAriaLabel = value;
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

  protected handleConsoleError(event: CustomEvent) {
    console.log('consoleError:', event);
    // Add your handler logic here
  }

}`;
  protected readonly htmlCode = `  &lt;ifx-action-list [listAriaLabel]=&quot;listAriaLabel&quot;&gt;
    &lt;ifx-action-list-item
      (ifxActionListItemClick)=&quot;handleActionListItemClick(\$any(\$event))&quot;
      (consoleError)=&quot;handleConsoleError(\$any(\$event))&quot;
      [itemTitle]=&quot;itemTitle&quot;
      [description]=&quot;description&quot;
      [value]=&quot;value&quot;
      [itemAriaLabel]=&quot;itemAriaLabel&quot;&gt;
      &lt;ifx-icon
        slot=&quot;trailing&quot;
        icon=&quot;chevron-right-16&quot;&gt;&lt;/ifx-icon&gt;
    &lt;/ifx-action-list-item&gt;
    &lt;ifx-action-list-item
      [itemTitle]=&quot;itemTitle&quot;
      [value]=&quot;value&quot;
      [itemAriaLabel]=&quot;itemAriaLabel&quot;&gt;
      &lt;ifx-icon
        slot=&quot;trailing&quot;
        icon=&quot;chevron-right-16&quot;&gt;&lt;/ifx-icon&gt;
    &lt;/ifx-action-list-item&gt;
    &lt;ifx-action-list-item
      [itemTitle]=&quot;itemTitle&quot;
      [description]=&quot;description&quot;
      [value]=&quot;value&quot;
      [disabled]=&quot;disabled&quot;
      [itemAriaLabel]=&quot;itemAriaLabel&quot;&gt;
      &lt;ifx-icon
        slot=&quot;trailing&quot;
        icon=&quot;chevron-right-16&quot;&gt;&lt;/ifx-icon&gt;
    &lt;/ifx-action-list-item&gt;
    &lt;ifx-action-list-item
      [itemTitle]=&quot;itemTitle&quot;
      [description]=&quot;description&quot;
      [value]=&quot;value&quot;
      [itemAriaLabel]=&quot;itemAriaLabel&quot;&gt;
      &lt;ifx-icon
        slot=&quot;trailing&quot;
        icon=&quot;chevron-right-16&quot;&gt;&lt;/ifx-icon&gt;
    &lt;/ifx-action-list-item&gt;
  &lt;/ifx-action-list&gt;`;

  protected disabled = false;
  protected value = "";
  protected itemTitle = "Dashboard";
  protected description = "View your main dashboard";
  protected listAriaLabel = "Navigation menu";
  protected itemAriaLabel = "Navigation item";

  protected handleDisabledChange() {
    this.disabled = !this.disabled;
  }

  protected updateValue(value: string) {
    this.value = value;
  }

  protected updateItemTitle(value: string) {
    this.itemTitle = value;
  }

  protected updateDescription(value: string) {
    this.description = value;
  }

  protected updateListAriaLabel(value: string) {
    this.listAriaLabel = value;
  }

  protected updateItemAriaLabel(value: string) {
    this.itemAriaLabel = value;
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

  protected handleConsoleError(event: CustomEvent) {
    console.log('consoleError:', event);
    // Add your handler logic here
  }

}