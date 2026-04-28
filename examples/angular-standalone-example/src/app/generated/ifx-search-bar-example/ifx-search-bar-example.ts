import { IfxButton, IfxSearchBar, IfxTextField } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-search-bar-example',
  imports: [ IfxButton, IfxSearchBar, IfxTextField ],
  templateUrl: './ifx-search-bar-example.html',
  styleUrl: './ifx-search-bar-example.scss'
})
export class IfxSearchBarExample {
  protected readonly tsCode = `import { IfxButton, IfxSearchBar, IfxTextField } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-search-bar-example',
  imports: [ IfxButton, IfxSearchBar, IfxTextField ],
  templateUrl: './ifx-search-bar-example.html',
  styleUrl: './ifx-search-bar-example.scss'
})
export class IfxSearchBarExample {

  protected isOpen = true;
  protected disabled = false;
  protected value = "";
  protected autocomplete = "on";
  protected showCloseButton = true;

  protected toggleIsOpen() {
    this.isOpen = !this.isOpen;
  }

  protected toggleDisabled() {
    this.disabled = !this.disabled;
  }

  protected updateValue(value: string) {
    this.value = value;
  }

  protected updateAutocomplete(value: string) {
    this.autocomplete = value;
  }

  protected toggleShowCloseButton() {
    this.showCloseButton = !this.showCloseButton;
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

  protected handleOpen(event: CustomEvent) {
    console.log('ifxOpen:', event);
    // Add your handler logic here
  }

}`;
  protected readonly htmlCode = `  &lt;ifx-search-bar
    (ifxInput)=&quot;handleInput(\$any(\$event))&quot;
    (ifxOpen)=&quot;handleOpen(\$any(\$event))&quot;
    [isOpen]=&quot;isOpen&quot;
    [disabled]=&quot;disabled&quot;
    [value]=&quot;value&quot;
    [showCloseButton]=&quot;showCloseButton&quot;
    [autocomplete]=&quot;autocomplete&quot;&gt;&lt;/ifx-search-bar&gt;`;

  protected isOpen = true;
  protected disabled = false;
  protected value = "";
  protected autocomplete = "on";
  protected showCloseButton = true;

  protected toggleIsOpen() {
    this.isOpen = !this.isOpen;
  }

  protected toggleDisabled() {
    this.disabled = !this.disabled;
  }

  protected updateValue(value: string) {
    this.value = value;
  }

  protected updateAutocomplete(value: string) {
    this.autocomplete = value;
  }

  protected toggleShowCloseButton() {
    this.showCloseButton = !this.showCloseButton;
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

  protected handleOpen(event: CustomEvent) {
    console.log('ifxOpen:', event);
    // Add your handler logic here
  }

}