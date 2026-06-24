import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-radio-button-example',
  templateUrl: './ifx-radio-button-example.html',
  styleUrl: './ifx-radio-button-example.scss',
  standalone: false
})
export class IfxRadioButtonExample {
  protected readonly tsCode = `import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-radio-button-example',
  templateUrl: './ifx-radio-button-example.html',
  styleUrl: './ifx-radio-button-example.scss',
  standalone: false
})
export class IfxRadioButtonExample {

  protected error = false;
  protected disabled = false;
  protected checked = false;
  protected readonly sizeOptions = ["s","m"];
  protected sizeIndex = 0;
  protected name = "radio-button";
  protected value = "radio";

  protected handleErrorChange() {
    this.error = !this.error;
  }

  protected handleDisabledChange() {
    this.disabled = !this.disabled;
  }

  protected handleCheckedChange() {
    this.checked = !this.checked;
  }

  protected handleSizeChange() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected updateName(value: string) {
    this.name = value;
  }

  protected updateValue(value: string) {
    this.value = value;
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

  protected handleChange(event: CustomEvent) {
    console.log('ifxChange:', event);
    // Add your handler logic here
  }

  protected handleError(event: CustomEvent) {
    console.log('ifxError:', event);
    // Add your handler logic here
  }

}`;
  protected readonly htmlCode = `  &lt;ifx-radio-button
    (ifxChange)=&quot;handleChange(\$any(\$event))&quot;
    (ifxError)=&quot;handleError(\$any(\$event))&quot;
    [size]=&quot;sizeOptions[sizeIndex]&quot;
    [name]=&quot;name&quot;
    [value]=&quot;value&quot;
    [error]=&quot;error&quot;
    [disabled]=&quot;disabled&quot;
    [checked]=&quot;checked&quot;&gt;Text&lt;/ifx-radio-button&gt;`;

  protected error = false;
  protected disabled = false;
  protected checked = false;
  protected readonly sizeOptions = ["s","m"];
  protected sizeIndex = 0;
  protected name = "radio-button";
  protected value = "radio";

  protected handleErrorChange() {
    this.error = !this.error;
  }

  protected handleDisabledChange() {
    this.disabled = !this.disabled;
  }

  protected handleCheckedChange() {
    this.checked = !this.checked;
  }

  protected handleSizeChange() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected updateName(value: string) {
    this.name = value;
  }

  protected updateValue(value: string) {
    this.value = value;
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

  protected handleChange(event: CustomEvent) {
    console.log('ifxChange:', event);
    // Add your handler logic here
  }

  protected handleError(event: CustomEvent) {
    console.log('ifxError:', event);
    // Add your handler logic here
  }

}