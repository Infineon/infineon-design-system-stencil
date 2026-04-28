import { IfxButton, IfxLink, IfxTextField } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-link-example',
  imports: [ IfxButton, IfxLink, IfxTextField ],
  templateUrl: './ifx-link-example.html',
  styleUrl: './ifx-link-example.scss'
})
export class IfxLinkExample {
  protected readonly tsCode = `import { IfxButton, IfxLink, IfxTextField } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-link-example',
  imports: [ IfxButton, IfxLink, IfxTextField ],
  templateUrl: './ifx-link-example.html',
  styleUrl: './ifx-link-example.scss'
})
export class IfxLinkExample {

  protected label = "Link";
  protected href = "";
  protected readonly targetOptions = ["_blank","_self","_parent"];
  protected targetIndex = 0;
  protected disabled = false;
  protected download = "";
  protected readonly sizeOptions = ["s","m","l","xl"];
  protected sizeIndex = 1;
  protected readonly variantOptions = ["bold","underlined","title","menu"];
  protected variantIndex = 0;

  protected updateLabel(value: string) {
    this.label = value;
  }

  protected updateHref(value: string) {
    this.href = value;
  }

  protected toggleTarget() {
    this.targetIndex = (this.targetIndex + 1) % this.targetOptions.length;
  }

  protected toggleDisabled() {
    this.disabled = !this.disabled;
  }

  protected updateDownload(value: string) {
    this.download = value;
  }

  protected toggleSize() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected toggleVariant() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
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
  protected readonly htmlCode = `  &lt;ifx-link
    aria-label=&quot;Link&quot;
    [href]=&quot;href&quot;
    [target]=&quot;targetOptions[targetIndex]&quot;
    [size]=&quot;sizeOptions[sizeIndex]&quot;
    [variant]=&quot;variantOptions[variantIndex]&quot;
    [download]=&quot;download&quot;
    [disabled]=&quot;disabled&quot;&gt;
    {{ label }}
  &lt;/ifx-link&gt;`;

  protected label = "Link";
  protected href = "";
  protected readonly targetOptions = ["_blank","_self","_parent"];
  protected targetIndex = 0;
  protected disabled = false;
  protected download = "";
  protected readonly sizeOptions = ["s","m","l","xl"];
  protected sizeIndex = 1;
  protected readonly variantOptions = ["bold","underlined","title","menu"];
  protected variantIndex = 0;

  protected updateLabel(value: string) {
    this.label = value;
  }

  protected updateHref(value: string) {
    this.href = value;
  }

  protected toggleTarget() {
    this.targetIndex = (this.targetIndex + 1) % this.targetOptions.length;
  }

  protected toggleDisabled() {
    this.disabled = !this.disabled;
  }

  protected updateDownload(value: string) {
    this.download = value;
  }

  protected toggleSize() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected toggleVariant() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
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