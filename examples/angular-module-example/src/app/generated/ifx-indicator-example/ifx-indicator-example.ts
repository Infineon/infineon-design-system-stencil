import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-indicator-example',
  templateUrl: './ifx-indicator-example.html',
  styleUrl: './ifx-indicator-example.scss',
  standalone: false
})
export class IfxIndicatorExample {
  protected readonly tsCode = `import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-indicator-example',
  templateUrl: './ifx-indicator-example.html',
  styleUrl: './ifx-indicator-example.scss',
  standalone: false
})
export class IfxIndicatorExample {

  protected readonly variantOptions = ["number","dot"];
  protected variantIndex = 0;
  protected number = "1";
  protected inverted = false;

  protected toggleVariant() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
  }

  protected updateNumber(value: string) {
    this.number = value;
  }

  protected toggleInverted() {
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
    [variant]=&quot;variantOptions[variantIndex]&quot;
    [number]=&quot;number&quot;
    [inverted]=&quot;inverted&quot;&gt;&lt;/ifx-indicator&gt;`;

  protected readonly variantOptions = ["number","dot"];
  protected variantIndex = 0;
  protected number = "1";
  protected inverted = false;

  protected toggleVariant() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
  }

  protected updateNumber(value: string) {
    this.number = value;
  }

  protected toggleInverted() {
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