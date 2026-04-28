import { IfxAiLabel, IfxButton } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-ai-label-example',
  imports: [ IfxAiLabel, IfxButton ],
  templateUrl: './ifx-ai-label-example.html',
  styleUrl: './ifx-ai-label-example.scss'
})
export class IfxAiLabelExample {
  protected readonly tsCode = `import { IfxAiLabel, IfxButton } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-ai-label-example',
  imports: [ IfxAiLabel, IfxButton ],
  templateUrl: './ifx-ai-label-example.html',
  styleUrl: './ifx-ai-label-example.scss'
})
export class IfxAiLabelExample {

  protected divider = true;
  protected readonly variantOptions = ["label","icon"];
  protected variantIndex = 0;

  protected toggleDivider() {
    this.divider = !this.divider;
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
  protected readonly htmlCode = `  &lt;ifx-ai-label
    [divider]=&quot;divider&quot;
    [variant]=&quot;variantOptions[variantIndex]&quot;&gt;&lt;/ifx-ai-label&gt;`;

  protected divider = true;
  protected readonly variantOptions = ["label","icon"];
  protected variantIndex = 0;

  protected toggleDivider() {
    this.divider = !this.divider;
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