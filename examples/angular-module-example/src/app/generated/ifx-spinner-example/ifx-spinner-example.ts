import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-spinner-example',
  templateUrl: './ifx-spinner-example.html',
  styleUrl: './ifx-spinner-example.scss',
  standalone: false
})
export class IfxSpinnerExample {
  protected readonly tsCode = `import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-spinner-example',
  templateUrl: './ifx-spinner-example.html',
  styleUrl: './ifx-spinner-example.scss',
  standalone: false
})
export class IfxSpinnerExample {

  protected readonly sizeOptions = ["s","m"];
  protected sizeIndex = 1;
  protected readonly variantOptions = ["default","brand"];
  protected variantIndex = 0;
  protected inverted = false;
  protected ariaLabelText = "";

  protected toggleSize() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected toggleVariant() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
  }

  protected toggleInverted() {
    this.inverted = !this.inverted;
  }

  protected updateAriaLabelText(value: string) {
    this.ariaLabelText = value;
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
  protected readonly htmlCode = `  &lt;ifx-spinner
    [ariaLabelText]=&quot;ariaLabelText&quot;
    [variant]=&quot;variantOptions[variantIndex]&quot;
    [size]=&quot;sizeOptions[sizeIndex]&quot;
    [inverted]=&quot;inverted&quot;&gt;&lt;/ifx-spinner&gt;`;

  protected readonly sizeOptions = ["s","m"];
  protected sizeIndex = 1;
  protected readonly variantOptions = ["default","brand"];
  protected variantIndex = 0;
  protected inverted = false;
  protected ariaLabelText = "";

  protected toggleSize() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected toggleVariant() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
  }

  protected toggleInverted() {
    this.inverted = !this.inverted;
  }

  protected updateAriaLabelText(value: string) {
    this.ariaLabelText = value;
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