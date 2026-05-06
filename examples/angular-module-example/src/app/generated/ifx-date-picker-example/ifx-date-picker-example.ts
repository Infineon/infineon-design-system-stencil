import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-date-picker-example',
  templateUrl: './ifx-date-picker-example.html',
  styleUrl: './ifx-date-picker-example.scss',
  standalone: false
})
export class IfxDatePickerExample {
  protected readonly tsCode = `import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-date-picker-example',
  templateUrl: './ifx-date-picker-example.html',
  styleUrl: './ifx-date-picker-example.scss',
  standalone: false
})
export class IfxDatePickerExample {

  protected label = "Label Text";
  protected caption = "Caption text, description, error notification.";
  protected min = "";
  protected max = "";
  protected disabled = false;
  protected success = false;
  protected error = false;
  protected readonly sizeOptions = ["s","l"];
  protected sizeIndex = 0;
  protected value = "";
  protected ariaLabelText = "Date Picker";
  protected required = false;
  protected autocomplete = "on";
  protected readonly typeOptions = ["date","datetime-local"];
  protected typeIndex = 0;

  protected updateLabel(value: string) {
    this.label = value;
  }

  protected updateCaption(value: string) {
    this.caption = value;
  }

  protected updateMin(value: string) {
    this.min = value;
  }

  protected updateMax(value: string) {
    this.max = value;
  }

  protected handleDisabledChange() {
    this.disabled = !this.disabled;
  }

  protected handleSuccessChange() {
    this.success = !this.success;
  }

  protected handleErrorChange() {
    this.error = !this.error;
  }

  protected handleSizeChange() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected updateValue(value: string) {
    this.value = value;
  }

  protected updateAriaLabelText(value: string) {
    this.ariaLabelText = value;
  }

  protected handleRequiredChange() {
    this.required = !this.required;
  }

  protected updateAutocomplete(value: string) {
    this.autocomplete = value;
  }

  protected handleTypeChange() {
    this.typeIndex = (this.typeIndex + 1) % this.typeOptions.length;
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

  protected handleDate(event: CustomEvent) {
    console.log('ifxDate:', event);
    // Add your handler logic here
  }

}`;
  protected readonly htmlCode = `  &lt;ifx-date-picker
    name=&quot;date-picker&quot;
    (ifxDate)=&quot;handleDate(\$any(\$event))&quot;
    [error]=&quot;error&quot;
    [disabled]=&quot;disabled&quot;
    [size]=&quot;sizeOptions[sizeIndex]&quot;
    [success]=&quot;success&quot;
    [value]=&quot;value&quot;
    [max]=&quot;max&quot;
    [min]=&quot;min&quot;
    [label]=&quot;label&quot;
    [caption]=&quot;caption&quot;
    [ariaLabelText]=&quot;ariaLabelText&quot;
    [required]=&quot;required&quot;
    [autocomplete]=&quot;autocomplete&quot;
    [type]=&quot;typeOptions[typeIndex]&quot;&gt;&lt;/ifx-date-picker&gt;`;

  protected label = "Label Text";
  protected caption = "Caption text, description, error notification.";
  protected min = "";
  protected max = "";
  protected disabled = false;
  protected success = false;
  protected error = false;
  protected readonly sizeOptions = ["s","l"];
  protected sizeIndex = 0;
  protected value = "";
  protected ariaLabelText = "Date Picker";
  protected required = false;
  protected autocomplete = "on";
  protected readonly typeOptions = ["date","datetime-local"];
  protected typeIndex = 0;

  protected updateLabel(value: string) {
    this.label = value;
  }

  protected updateCaption(value: string) {
    this.caption = value;
  }

  protected updateMin(value: string) {
    this.min = value;
  }

  protected updateMax(value: string) {
    this.max = value;
  }

  protected handleDisabledChange() {
    this.disabled = !this.disabled;
  }

  protected handleSuccessChange() {
    this.success = !this.success;
  }

  protected handleErrorChange() {
    this.error = !this.error;
  }

  protected handleSizeChange() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected updateValue(value: string) {
    this.value = value;
  }

  protected updateAriaLabelText(value: string) {
    this.ariaLabelText = value;
  }

  protected handleRequiredChange() {
    this.required = !this.required;
  }

  protected updateAutocomplete(value: string) {
    this.autocomplete = value;
  }

  protected handleTypeChange() {
    this.typeIndex = (this.typeIndex + 1) % this.typeOptions.length;
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

  protected handleDate(event: CustomEvent) {
    console.log('ifxDate:', event);
    // Add your handler logic here
  }

}