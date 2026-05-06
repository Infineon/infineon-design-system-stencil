import { IfxButton, IfxCheckbox, IfxTextField } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-checkbox-example',
  imports: [ IfxButton, IfxCheckbox, IfxTextField ],
  templateUrl: './ifx-checkbox-example.html',
  styleUrl: './ifx-checkbox-example.scss'
})
export class IfxCheckboxExample {
  protected readonly tsCode = `import { IfxButton, IfxCheckbox, IfxTextField } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-checkbox-example',
  imports: [ IfxButton, IfxCheckbox, IfxTextField ],
  templateUrl: './ifx-checkbox-example.html',
  styleUrl: './ifx-checkbox-example.scss'
})
export class IfxCheckboxExample {

  protected error = false;
  protected disabled = false;
  protected checked = false;
  protected indeterminate = false;
  protected readonly sizeOptions = ["s","m"];
  protected sizeIndex = 0;
  protected name = "checkbox";

  protected handleErrorChange() {
    this.error = !this.error;
  }

  protected handleDisabledChange() {
    this.disabled = !this.disabled;
  }

  protected handleCheckedChange() {
    this.checked = !this.checked;
  }

  protected handleIndeterminateChange() {
    this.indeterminate = !this.indeterminate;
  }

  protected handleSizeChange() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected updateName(value: string) {
    this.name = value;
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
  protected readonly htmlCode = `  &lt;ifx-checkbox
    (ifxChange)=&quot;handleChange(\$any(\$event))&quot;
    (ifxError)=&quot;handleError(\$any(\$event))&quot;
    [error]=&quot;error&quot;
    [disabled]=&quot;disabled&quot;
    [checked]=&quot;checked&quot;
    [size]=&quot;sizeOptions[sizeIndex]&quot;
    [indeterminate]=&quot;indeterminate&quot;
    [name]=&quot;name&quot;&gt;Text&lt;/ifx-checkbox&gt;`;

  protected error = false;
  protected disabled = false;
  protected checked = false;
  protected indeterminate = false;
  protected readonly sizeOptions = ["s","m"];
  protected sizeIndex = 0;
  protected name = "checkbox";

  protected handleErrorChange() {
    this.error = !this.error;
  }

  protected handleDisabledChange() {
    this.disabled = !this.disabled;
  }

  protected handleCheckedChange() {
    this.checked = !this.checked;
  }

  protected handleIndeterminateChange() {
    this.indeterminate = !this.indeterminate;
  }

  protected handleSizeChange() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected updateName(value: string) {
    this.name = value;
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