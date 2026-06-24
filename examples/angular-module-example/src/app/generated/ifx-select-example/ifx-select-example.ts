import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-select-example',
  templateUrl: './ifx-select-example.html',
  styleUrl: './ifx-select-example.scss',
  standalone: false
})
export class IfxSelectExample {
  protected readonly tsCode = `import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-select-example',
  templateUrl: './ifx-select-example.html',
  styleUrl: './ifx-select-example.scss',
  standalone: false
})
export class IfxSelectExample {

  protected readonly sizeOptions = ["s","m"];
  protected sizeIndex = 1;
  protected placeholder = true;
  protected placeholderValue = "Placeholder";
  protected error = false;
  protected label = "";
  protected disabled = false;
  protected caption = "";
  protected required = true;
  protected showSearch = true;
  protected showClearButton = true;
  protected searchPlaceholderValue = "Search...";
  protected options = "[{\\"value\\":\\"a\\",\\"label\\":\\"option a\\",\\"selected\\":false},{\\"value\\":\\"b\\",\\"label\\":\\"option b\\",\\"selected\\":false},{\\"value\\":\\"c\\",\\"label\\":\\"option c\\",\\"selected\\":false}]";

  protected handleSizeChange() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected handlePlaceholderChange() {
    this.placeholder = !this.placeholder;
  }

  protected updatePlaceholderValue(value: string) {
    this.placeholderValue = value;
  }

  protected handleErrorChange() {
    this.error = !this.error;
  }

  protected updateLabel(value: string) {
    this.label = value;
  }

  protected handleDisabledChange() {
    this.disabled = !this.disabled;
  }

  protected updateCaption(value: string) {
    this.caption = value;
  }

  protected handleRequiredChange() {
    this.required = !this.required;
  }

  protected handleShowSearchChange() {
    this.showSearch = !this.showSearch;
  }

  protected handleShowClearButtonChange() {
    this.showClearButton = !this.showClearButton;
  }

  protected updateSearchPlaceholderValue(value: string) {
    this.searchPlaceholderValue = value;
  }

  protected updateOptions(value: string) {
    this.options = value;
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

  protected handleSelect(event: CustomEvent) {
    console.log('ifxSelect:', event);
    // Add your handler logic here
  }

}`;
  protected readonly htmlCode = `  &lt;ifx-select
    (ifxInput)=&quot;handleInput(\$any(\$event))&quot;
    (ifxSelect)=&quot;handleSelect(\$any(\$event))&quot;
    [size]=&quot;sizeOptions[sizeIndex]&quot;
    [placeholder]=&quot;placeholder&quot;
    [showClearButton]=&quot;showClearButton&quot;
    [showSearch]=&quot;showSearch&quot;
    [searchPlaceholderValue]=&quot;searchPlaceholderValue&quot;
    [required]=&quot;required&quot;
    [label]=&quot;label&quot;
    [caption]=&quot;caption&quot;
    [placeholderValue]=&quot;placeholderValue&quot;
    [options]=&quot;options&quot;
    [error]=&quot;error&quot;
    [disabled]=&quot;disabled&quot;&gt;&lt;/ifx-select&gt;`;

  protected readonly sizeOptions = ["s","m"];
  protected sizeIndex = 1;
  protected placeholder = true;
  protected placeholderValue = "Placeholder";
  protected error = false;
  protected label = "";
  protected disabled = false;
  protected caption = "";
  protected required = true;
  protected showSearch = true;
  protected showClearButton = true;
  protected searchPlaceholderValue = "Search...";
  protected options = "[{\"value\":\"a\",\"label\":\"option a\",\"selected\":false},{\"value\":\"b\",\"label\":\"option b\",\"selected\":false},{\"value\":\"c\",\"label\":\"option c\",\"selected\":false}]";

  protected handleSizeChange() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected handlePlaceholderChange() {
    this.placeholder = !this.placeholder;
  }

  protected updatePlaceholderValue(value: string) {
    this.placeholderValue = value;
  }

  protected handleErrorChange() {
    this.error = !this.error;
  }

  protected updateLabel(value: string) {
    this.label = value;
  }

  protected handleDisabledChange() {
    this.disabled = !this.disabled;
  }

  protected updateCaption(value: string) {
    this.caption = value;
  }

  protected handleRequiredChange() {
    this.required = !this.required;
  }

  protected handleShowSearchChange() {
    this.showSearch = !this.showSearch;
  }

  protected handleShowClearButtonChange() {
    this.showClearButton = !this.showClearButton;
  }

  protected updateSearchPlaceholderValue(value: string) {
    this.searchPlaceholderValue = value;
  }

  protected updateOptions(value: string) {
    this.options = value;
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

  protected handleSelect(event: CustomEvent) {
    console.log('ifxSelect:', event);
    // Add your handler logic here
  }

}