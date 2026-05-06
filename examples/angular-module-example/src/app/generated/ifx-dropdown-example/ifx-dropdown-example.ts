import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-dropdown-example',
  templateUrl: './ifx-dropdown-example.html',
  styleUrl: './ifx-dropdown-example.scss',
  standalone: false
})
export class IfxDropdownExample {
  protected readonly tsCode = `import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-dropdown-example',
  templateUrl: './ifx-dropdown-example.html',
  styleUrl: './ifx-dropdown-example.scss',
  standalone: false
})
export class IfxDropdownExample {

  protected readonly placementOptions = ["auto","auto-start","auto-end","top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"];
  protected placementIndex = 7;
  protected readonly sizeOptions = ["s","m"];
  protected sizeIndex = 1;
  protected disabled = false;
  protected readonly variantOptions = ["primary","secondary","tertiary"];
  protected variantIndex = 0;
  protected defaultOpen = false;
  protected noCloseOnOutsideClick = false;
  protected noCloseOnMenuClick = false;
  protected noAppendToBody = false;

  protected handlePlacementChange() {
    this.placementIndex = (this.placementIndex + 1) % this.placementOptions.length;
  }

  protected handleSizeChange() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected handleDisabledChange() {
    this.disabled = !this.disabled;
  }

  protected handleVariantChange() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
  }

  protected handleDefaultOpenChange() {
    this.defaultOpen = !this.defaultOpen;
  }

  protected handleNoCloseOnOutsideClickChange() {
    this.noCloseOnOutsideClick = !this.noCloseOnOutsideClick;
  }

  protected handleNoCloseOnMenuClickChange() {
    this.noCloseOnMenuClick = !this.noCloseOnMenuClick;
  }

  protected handleNoAppendToBodyChange() {
    this.noAppendToBody = !this.noAppendToBody;
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

  protected handleClose(event: CustomEvent) {
    console.log('ifxClose:', event);
    // Add your handler logic here
  }

  protected handleDropdown(event: CustomEvent) {
    console.log('ifxDropdown:', event);
    // Add your handler logic here
  }

  protected handleOpen(event: CustomEvent) {
    console.log('ifxOpen:', event);
    // Add your handler logic here
  }

  protected handleDropdownMenuItem(event: CustomEvent) {
    console.log('ifxDropdownMenuItem:', event);
    // Add your handler logic here
  }

  protected handleMenuSize(event: CustomEvent) {
    console.log('menuSize:', event);
    // Add your handler logic here
  }

}`;
  protected readonly htmlCode = `  &lt;ifx-dropdown
    [placement]=&quot;placementOptions[placementIndex]&quot;
    [defaultOpen]=&quot;defaultOpen&quot;
    [noCloseOnOutsideClick]=&quot;noCloseOnOutsideClick&quot;
    [noCloseOnMenuClick]=&quot;noCloseOnMenuClick&quot;
    [noAppendToBody]=&quot;noAppendToBody&quot;
    [disabled]=&quot;disabled&quot;&gt;
    &lt;ifx-dropdown-trigger-button
      (ifxClose)=&quot;handleClose(\$any(\$event))&quot;
      (ifxDropdown)=&quot;handleDropdown(\$any(\$event))&quot;
      (ifxOpen)=&quot;handleOpen(\$any(\$event))&quot;
      (ifxDropdownMenuItem)=&quot;handleDropdownMenuItem(\$any(\$event))&quot;
      (menuSize)=&quot;handleMenuSize(\$any(\$event))&quot;
      [variant]=&quot;variantOptions[variantIndex]&quot;&gt;Dropdown&lt;/ifx-dropdown-trigger-button&gt;
    &lt;ifx-dropdown-menu
      (ifxClose)=&quot;handleClose(\$any(\$event))&quot;
      (ifxDropdown)=&quot;handleDropdown(\$any(\$event))&quot;
      (ifxOpen)=&quot;handleOpen(\$any(\$event))&quot;
      (ifxDropdownMenuItem)=&quot;handleDropdownMenuItem(\$any(\$event))&quot;
      (menuSize)=&quot;handleMenuSize(\$any(\$event))&quot;
      [size]=&quot;sizeOptions[sizeIndex]&quot;&gt;
      &lt;ifx-dropdown-item
        icon=&quot;c-info-16&quot;
        target=&quot;_self&quot;
        href=&quot;&quot;
        [error]=&quot;false&quot;
        (ifxClose)=&quot;handleClose(\$any(\$event))&quot;
        (ifxDropdown)=&quot;handleDropdown(\$any(\$event))&quot;
        (ifxOpen)=&quot;handleOpen(\$any(\$event))&quot;
        (ifxDropdownMenuItem)=&quot;handleDropdownMenuItem(\$any(\$event))&quot;
        (menuSize)=&quot;handleMenuSize(\$any(\$event))&quot;&gt;Menu Item&lt;/ifx-dropdown-item&gt;
      &lt;ifx-dropdown-item
        icon=&quot;c-info-16&quot;
        target=&quot;_self&quot;
        href=&quot;&quot;
        [error]=&quot;false&quot;&gt;Menu Item&lt;/ifx-dropdown-item&gt;
      &lt;ifx-dropdown-item
        icon=&quot;c-info-16&quot;
        target=&quot;_self&quot;
        href=&quot;&quot;
        [error]=&quot;false&quot;&gt;Menu Item&lt;/ifx-dropdown-item&gt;
      &lt;ifx-dropdown-item
        icon=&quot;c-info-16&quot;
        target=&quot;_self&quot;
        href=&quot;&quot;
        [error]=&quot;false&quot;&gt;Menu Item&lt;/ifx-dropdown-item&gt;
      &lt;ifx-dropdown-item
        icon=&quot;c-info-16&quot;
        target=&quot;_self&quot;
        href=&quot;&quot;
        [error]=&quot;false&quot;&gt;Menu Item&lt;/ifx-dropdown-item&gt;
    &lt;/ifx-dropdown-menu&gt;
  &lt;/ifx-dropdown&gt;`;

  protected readonly placementOptions = ["auto","auto-start","auto-end","top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"];
  protected placementIndex = 7;
  protected readonly sizeOptions = ["s","m"];
  protected sizeIndex = 1;
  protected disabled = false;
  protected readonly variantOptions = ["primary","secondary","tertiary"];
  protected variantIndex = 0;
  protected defaultOpen = false;
  protected noCloseOnOutsideClick = false;
  protected noCloseOnMenuClick = false;
  protected noAppendToBody = false;

  protected handlePlacementChange() {
    this.placementIndex = (this.placementIndex + 1) % this.placementOptions.length;
  }

  protected handleSizeChange() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected handleDisabledChange() {
    this.disabled = !this.disabled;
  }

  protected handleVariantChange() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
  }

  protected handleDefaultOpenChange() {
    this.defaultOpen = !this.defaultOpen;
  }

  protected handleNoCloseOnOutsideClickChange() {
    this.noCloseOnOutsideClick = !this.noCloseOnOutsideClick;
  }

  protected handleNoCloseOnMenuClickChange() {
    this.noCloseOnMenuClick = !this.noCloseOnMenuClick;
  }

  protected handleNoAppendToBodyChange() {
    this.noAppendToBody = !this.noAppendToBody;
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

  protected handleClose(event: CustomEvent) {
    console.log('ifxClose:', event);
    // Add your handler logic here
  }

  protected handleDropdown(event: CustomEvent) {
    console.log('ifxDropdown:', event);
    // Add your handler logic here
  }

  protected handleOpen(event: CustomEvent) {
    console.log('ifxOpen:', event);
    // Add your handler logic here
  }

  protected handleDropdownMenuItem(event: CustomEvent) {
    console.log('ifxDropdownMenuItem:', event);
    // Add your handler logic here
  }

  protected handleMenuSize(event: CustomEvent) {
    console.log('menuSize:', event);
    // Add your handler logic here
  }

}