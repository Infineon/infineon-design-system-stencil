import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-progress-bar-example',
  templateUrl: './ifx-progress-bar-example.html',
  styleUrl: './ifx-progress-bar-example.scss',
  standalone: false
})
export class IfxProgressBarExample {
  protected readonly tsCode = `import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-progress-bar-example',
  templateUrl: './ifx-progress-bar-example.html',
  styleUrl: './ifx-progress-bar-example.scss',
  standalone: false
})
export class IfxProgressBarExample {

  protected value = 50;
  protected showLabel = false;
  protected readonly sizeOptions = ["s","m"];
  protected sizeIndex = 1;

  protected updateValue(value: string) {
    this.value = Number(value);
  }

  protected handleShowLabelChange() {
    this.showLabel = !this.showLabel;
  }

  protected handleSizeChange() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
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
  protected readonly htmlCode = `  &lt;ifx-progress-bar
    [value]=&quot;value&quot;
    [size]=&quot;sizeOptions[sizeIndex]&quot;
    [showLabel]=&quot;showLabel&quot;&gt;&lt;/ifx-progress-bar&gt;`;

  protected value = 50;
  protected showLabel = false;
  protected readonly sizeOptions = ["s","m"];
  protected sizeIndex = 1;

  protected updateValue(value: string) {
    this.value = Number(value);
  }

  protected handleShowLabelChange() {
    this.showLabel = !this.showLabel;
  }

  protected handleSizeChange() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
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