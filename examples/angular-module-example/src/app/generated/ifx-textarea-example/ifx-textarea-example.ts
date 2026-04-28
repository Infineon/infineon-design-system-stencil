import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-textarea-example',
  templateUrl: './ifx-textarea-example.html',
  styleUrl: './ifx-textarea-example.scss',
  standalone: false
})
export class IfxTextareaExample {
  protected readonly tsCode = `import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-textarea-example',
  templateUrl: './ifx-textarea-example.html',
  styleUrl: './ifx-textarea-example.scss',
  standalone: false
})
export class IfxTextareaExample {

  protected caption = "Caption text, description, error notification";
  protected cols = 43;
  protected disabled = false;
  protected error = false;
  protected label = "Label Text";
  protected maxlength = "";
  protected name = "textarea";
  protected placeholder = "Placeholder";
  protected required = true;
  protected readOnly = false;
  protected readonly resizeOptions = ["both","vertical","horizontal","none"];
  protected resizeIndex = 0;
  protected rows = "5";
  protected value = "";
  protected readonly wrapOptions = ["soft","hard","off"];
  protected wrapIndex = 0;
  protected fullWidth = false;

  protected updateCaption(value: string) {
    this.caption = value;
  }

  protected updateCols(value: string) {
    this.cols = Number(value);
  }

  protected toggleDisabled() {
    this.disabled = !this.disabled;
  }

  protected toggleError() {
    this.error = !this.error;
  }

  protected updateLabel(value: string) {
    this.label = value;
  }

  protected updateMaxlength(value: string) {
    this.maxlength = value;
  }

  protected updateName(value: string) {
    this.name = value;
  }

  protected updatePlaceholder(value: string) {
    this.placeholder = value;
  }

  protected toggleRequired() {
    this.required = !this.required;
  }

  protected toggleReadOnly() {
    this.readOnly = !this.readOnly;
  }

  protected toggleResize() {
    this.resizeIndex = (this.resizeIndex + 1) % this.resizeOptions.length;
  }

  protected updateRows(value: string) {
    this.rows = value;
  }

  protected updateValue(value: string) {
    this.value = value;
  }

  protected toggleWrap() {
    this.wrapIndex = (this.wrapIndex + 1) % this.wrapOptions.length;
  }

  protected toggleFullWidth() {
    this.fullWidth = !this.fullWidth;
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

  protected handleInput(event: CustomEvent) {
    console.log('ifxInput:', event);
    // Add your handler logic here
  }

}`;
  protected readonly htmlCode = `  &lt;ifx-textarea
    (ifxInput)=&quot;handleInput(\$any(\$event))&quot;
    [caption]=&quot;caption&quot;
    [cols]=&quot;cols&quot;
    [disabled]=&quot;disabled&quot;
    [error]=&quot;error&quot;
    [label]=&quot;label&quot;
    [maxlength]=&quot;maxlength&quot;
    [name]=&quot;name&quot;
    [placeholder]=&quot;placeholder&quot;
    [required]=&quot;required&quot;
    [readOnly]=&quot;readOnly&quot;
    [resize]=&quot;resizeOptions[resizeIndex]&quot;
    [rows]=&quot;rows&quot;
    [value]=&quot;value&quot;
    [wrap]=&quot;wrapOptions[wrapIndex]&quot;
    [fullWidth]=&quot;fullWidth&quot;&gt;&lt;/ifx-textarea&gt;`;

  protected caption = "Caption text, description, error notification";
  protected cols = 43;
  protected disabled = false;
  protected error = false;
  protected label = "Label Text";
  protected maxlength = "";
  protected name = "textarea";
  protected placeholder = "Placeholder";
  protected required = true;
  protected readOnly = false;
  protected readonly resizeOptions = ["both","vertical","horizontal","none"];
  protected resizeIndex = 0;
  protected rows = "5";
  protected value = "";
  protected readonly wrapOptions = ["soft","hard","off"];
  protected wrapIndex = 0;
  protected fullWidth = false;

  protected updateCaption(value: string) {
    this.caption = value;
  }

  protected updateCols(value: string) {
    this.cols = Number(value);
  }

  protected toggleDisabled() {
    this.disabled = !this.disabled;
  }

  protected toggleError() {
    this.error = !this.error;
  }

  protected updateLabel(value: string) {
    this.label = value;
  }

  protected updateMaxlength(value: string) {
    this.maxlength = value;
  }

  protected updateName(value: string) {
    this.name = value;
  }

  protected updatePlaceholder(value: string) {
    this.placeholder = value;
  }

  protected toggleRequired() {
    this.required = !this.required;
  }

  protected toggleReadOnly() {
    this.readOnly = !this.readOnly;
  }

  protected toggleResize() {
    this.resizeIndex = (this.resizeIndex + 1) % this.resizeOptions.length;
  }

  protected updateRows(value: string) {
    this.rows = value;
  }

  protected updateValue(value: string) {
    this.value = value;
  }

  protected toggleWrap() {
    this.wrapIndex = (this.wrapIndex + 1) % this.wrapOptions.length;
  }

  protected toggleFullWidth() {
    this.fullWidth = !this.fullWidth;
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

  protected handleInput(event: CustomEvent) {
    console.log('ifxInput:', event);
    // Add your handler logic here
  }

}