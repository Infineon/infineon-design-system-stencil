import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-button-example',
  templateUrl: './ifx-button-example.html',
  styleUrl: './ifx-button-example.scss',
  standalone: false
})
export class IfxButtonExample {
  protected readonly tsCode = `import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-button-example',
  templateUrl: './ifx-button-example.html',
  styleUrl: './ifx-button-example.scss',
  standalone: false
})
export class IfxButtonExample {

  protected label = "Button";
  protected readonly variantOptions = ["primary","secondary","tertiary"];
  protected variantIndex = 0;
  protected ariaLabelText = "Button";
  protected readonly themeOptions = ["default","danger","inverse"];
  protected themeIndex = 0;
  protected readonly typeOptions = ["button","submit","reset"];
  protected typeIndex = 0;
  protected readonly sizeOptions = ["xs","s","m","l"];
  protected sizeIndex = 2;
  protected fullWidth = false;
  protected disabled = false;
  protected href = false;
  protected readonly targetOptions = ["_blank","_self","_parent"];
  protected targetIndex = 0;

  protected updateLabel(value: string) {
    this.label = value;
  }

  protected toggleVariant() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
  }

  protected updateAriaLabelText(value: string) {
    this.ariaLabelText = value;
  }

  protected toggleTheme() {
    this.themeIndex = (this.themeIndex + 1) % this.themeOptions.length;
  }

  protected toggleType() {
    this.typeIndex = (this.typeIndex + 1) % this.typeOptions.length;
  }

  protected toggleSize() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected toggleFullWidth() {
    this.fullWidth = !this.fullWidth;
  }

  protected toggleDisabled() {
    this.disabled = !this.disabled;
  }

  protected toggleHref() {
    this.href = !this.href;
  }

  protected toggleTarget() {
    this.targetIndex = (this.targetIndex + 1) % this.targetOptions.length;
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
  protected readonly htmlCode = `  &lt;ifx-button
    [type]=&quot;typeOptions[typeIndex]&quot;
    [ariaLabelText]=&quot;ariaLabelText&quot;
    [variant]=&quot;variantOptions[variantIndex]&quot;
    [size]=&quot;sizeOptions[sizeIndex]&quot;
    [target]=&quot;targetOptions[targetIndex]&quot;
    [theme]=&quot;themeOptions[themeIndex]&quot;
    [fullWidth]=&quot;fullWidth&quot;
    [disabled]=&quot;disabled&quot;
    [href]=&quot;href&quot;&gt;
    {{ label }}
  &lt;/ifx-button&gt;`;

  protected label = "Button";
  protected readonly variantOptions = ["primary","secondary","tertiary"];
  protected variantIndex = 0;
  protected ariaLabelText = "Button";
  protected readonly themeOptions = ["default","danger","inverse"];
  protected themeIndex = 0;
  protected readonly typeOptions = ["button","submit","reset"];
  protected typeIndex = 0;
  protected readonly sizeOptions = ["xs","s","m","l"];
  protected sizeIndex = 2;
  protected fullWidth = false;
  protected disabled = false;
  protected href = false;
  protected readonly targetOptions = ["_blank","_self","_parent"];
  protected targetIndex = 0;

  protected updateLabel(value: string) {
    this.label = value;
  }

  protected toggleVariant() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
  }

  protected updateAriaLabelText(value: string) {
    this.ariaLabelText = value;
  }

  protected toggleTheme() {
    this.themeIndex = (this.themeIndex + 1) % this.themeOptions.length;
  }

  protected toggleType() {
    this.typeIndex = (this.typeIndex + 1) % this.typeOptions.length;
  }

  protected toggleSize() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected toggleFullWidth() {
    this.fullWidth = !this.fullWidth;
  }

  protected toggleDisabled() {
    this.disabled = !this.disabled;
  }

  protected toggleHref() {
    this.href = !this.href;
  }

  protected toggleTarget() {
    this.targetIndex = (this.targetIndex + 1) % this.targetOptions.length;
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