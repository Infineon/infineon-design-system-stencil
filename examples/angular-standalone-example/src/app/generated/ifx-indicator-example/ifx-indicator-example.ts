import { IfxButton, IfxIndicator } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-indicator-example',
  imports: [ IfxButton, IfxIndicator ],
  templateUrl: './ifx-indicator-example.html',
  styleUrl: './ifx-indicator-example.scss'
})
export class IfxIndicatorExample {
  protected readonly tsCode = `import { IfxButton, IfxIndicator } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-indicator-example',
  imports: [ IfxButton, IfxIndicator ],
  templateUrl: './ifx-indicator-example.html',
  styleUrl: './ifx-indicator-example.scss'
})
export class IfxIndicatorExample {

  protected inverted = false;

  protected handleInvertedChange() {
    this.inverted = !this.inverted;
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
  protected readonly htmlCode = `  &lt;ifx-indicator
    variant=&quot;number&quot;
    number=&quot;1&quot;
    [inverted]=&quot;inverted&quot;&gt;&lt;/ifx-indicator&gt;`;

  protected inverted = false;

  protected handleInvertedChange() {
    this.inverted = !this.inverted;
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