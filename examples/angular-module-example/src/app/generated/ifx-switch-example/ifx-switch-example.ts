import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-switch-example',
  templateUrl: './ifx-switch-example.html',
  styleUrl: './ifx-switch-example.scss',
  standalone: false
})
export class IfxSwitchExample {
  protected readonly tsCode = `import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-switch-example',
  templateUrl: './ifx-switch-example.html',
  styleUrl: './ifx-switch-example.scss',
  standalone: false
})
export class IfxSwitchExample {

  protected label = "Switch";
  protected name = "switch";
  protected checked = false;
  protected value = "on";
  protected disabled = false;

  protected updateLabel(value: string) {
    this.label = value;
  }

  protected updateName(value: string) {
    this.name = value;
  }

  protected toggleChecked() {
    this.checked = !this.checked;
  }

  protected updateValue(value: string) {
    this.value = value;
  }

  protected toggleDisabled() {
    this.disabled = !this.disabled;
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

}`;
  protected readonly htmlCode = `  &lt;ifx-switch
    (ifxChange)=&quot;handleChange(\$any(\$event))&quot;
    [name]=&quot;name&quot;
    [value]=&quot;value&quot;
    [checked]=&quot;checked&quot;
    [disabled]=&quot;disabled&quot;&gt;
    {{ label }}
  &lt;/ifx-switch&gt;`;

  protected label = "Switch";
  protected name = "switch";
  protected checked = false;
  protected value = "on";
  protected disabled = false;

  protected updateLabel(value: string) {
    this.label = value;
  }

  protected updateName(value: string) {
    this.name = value;
  }

  protected toggleChecked() {
    this.checked = !this.checked;
  }

  protected updateValue(value: string) {
    this.value = value;
  }

  protected toggleDisabled() {
    this.disabled = !this.disabled;
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

}