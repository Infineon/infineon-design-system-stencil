import { IfxButton, IfxStatus, IfxTextField } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-status-example',
  imports: [ IfxButton, IfxStatus, IfxTextField ],
  templateUrl: './ifx-status-example.html',
  styleUrl: './ifx-status-example.scss'
})
export class IfxStatusExample {
  protected readonly tsCode = `import { IfxButton, IfxStatus, IfxTextField } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-status-example',
  imports: [ IfxButton, IfxStatus, IfxTextField ],
  templateUrl: './ifx-status-example.html',
  styleUrl: './ifx-status-example.scss'
})
export class IfxStatusExample {

  protected label = "text";
  protected border = true;
  protected readonly colorOptions = ["engineering-100","engineering-200","engineering-300","engineering-400","engineering-500","engineering-600","ocean-100","ocean-200","ocean-300","ocean-400","ocean-500","ocean-600","ocean-700","red-500","red-600","red-700","orange-500","green-500","lawn-400","lawn-500","lawn-700","berry-400","berry-500","sun-400","sun-500","sand-400","sand-500"];
  protected colorIndex = 16;

  protected updateLabel(value: string) {
    this.label = value;
  }

  protected handleBorderChange() {
    this.border = !this.border;
  }

  protected handleColorChange() {
    this.colorIndex = (this.colorIndex + 1) % this.colorOptions.length;
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
  protected readonly htmlCode = `  &lt;ifx-status
    [label]=&quot;label&quot;
    [color]=&quot;colorOptions[colorIndex]&quot;
    [border]=&quot;border&quot;&gt;&lt;/ifx-status&gt;`;

  protected label = "text";
  protected border = true;
  protected readonly colorOptions = ["engineering-100","engineering-200","engineering-300","engineering-400","engineering-500","engineering-600","ocean-100","ocean-200","ocean-300","ocean-400","ocean-500","ocean-600","ocean-700","red-500","red-600","red-700","orange-500","green-500","lawn-400","lawn-500","lawn-700","berry-400","berry-500","sun-400","sun-500","sand-400","sand-500"];
  protected colorIndex = 16;

  protected updateLabel(value: string) {
    this.label = value;
  }

  protected handleBorderChange() {
    this.border = !this.border;
  }

  protected handleColorChange() {
    this.colorIndex = (this.colorIndex + 1) % this.colorOptions.length;
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