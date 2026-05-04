import { IfxButton, IfxNavbar, IfxNavbarItem, IfxNavbarProfile, IfxSearchBar, IfxTextField } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-navbar-example',
  imports: [ IfxButton, IfxNavbar, IfxNavbarItem, IfxNavbarProfile, IfxSearchBar, IfxTextField ],
  templateUrl: './ifx-navbar-example.html',
  styleUrl: './ifx-navbar-example.scss'
})
export class IfxNavbarExample {
  protected readonly tsCode = `import { IfxButton, IfxNavbar, IfxNavbarItem, IfxNavbarProfile, IfxSearchBar, IfxTextField } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-navbar-example',
  imports: [ IfxButton, IfxNavbar, IfxNavbarItem, IfxNavbarProfile, IfxSearchBar, IfxTextField ],
  templateUrl: './ifx-navbar-example.html',
  styleUrl: './ifx-navbar-example.scss'
})
export class IfxNavbarExample {

  protected applicationName = "Application name";
  protected showLogoAndAppname = true;
  protected logoHref = "http://google.com";
  protected readonly logoHrefTargetOptions = ["_self","_blank","_parent"];
  protected logoHrefTargetIndex = 0;

  protected updateApplicationName(value: string) {
    this.applicationName = value;
  }

  protected handleShowLogoAndAppnameChange() {
    this.showLogoAndAppname = !this.showLogoAndAppname;
  }

  protected updateLogoHref(value: string) {
    this.logoHref = value;
  }

  protected handleLogoHrefTargetChange() {
    this.logoHrefTargetIndex = (this.logoHrefTargetIndex + 1) % this.logoHrefTargetOptions.length;
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

  protected handleNavbarMobileMenuIsOpen(event: CustomEvent) {
    console.log('ifxNavbarMobileMenuIsOpen:', event);
    // Add your handler logic here
  }

  protected handleNavItem(event: CustomEvent) {
    console.log('ifxNavItem:', event);
    // Add your handler logic here
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
  protected readonly htmlCode = `  &lt;ifx-navbar
    [fixed]=&quot;false&quot;
    [showLogoAndAppname]=&quot;showLogoAndAppname&quot;
    [applicationName]=&quot;applicationName&quot;
    [logoHref]=&quot;logoHref&quot;
    [logoHrefTarget]=&quot;logoHrefTargetOptions[logoHrefTargetIndex]&quot;&gt;
    &lt;ifx-navbar-item
      icon=&quot;&quot;
      slot=&quot;left-item&quot;
      target=&quot;_self&quot;
      href=&quot;&quot;
      [hideOnMobile]=&quot;true&quot;
      (ifxNavbarMobileMenuIsOpen)=&quot;handleNavbarMobileMenuIsOpen(\$any(\$event))&quot;
      (ifxNavItem)=&quot;handleNavItem(\$any(\$event))&quot;
      (ifxInput)=&quot;handleInput(\$any(\$event))&quot;
      (ifxOpen)=&quot;handleOpen(\$any(\$event))&quot;&gt;
      &lt;ifx-navbar-item icon=&quot;&quot;&gt;
        &lt;ifx-navbar-item&gt;
          &lt;ifx-navbar-item
            href=&quot;http://google.com&quot;
            target=&quot;_blank&quot;&gt;Link Layer 3 Nested Item 1&lt;/ifx-navbar-item&gt;
          &lt;ifx-navbar-item&gt;Layer 3 Nested Item 2&lt;/ifx-navbar-item&gt;
          &lt;ifx-navbar-item&gt;Layer 3 Nested Item 3&lt;/ifx-navbar-item&gt;
          &lt;ifx-navbar-item&gt;Layer 3 Nested Item 4&lt;/ifx-navbar-item&gt;
        &lt;/ifx-navbar-item&gt;
        &lt;ifx-navbar-item&gt;Layer 2 Nested Item 3&lt;/ifx-navbar-item&gt;
        &lt;ifx-navbar-item&gt;Layer 2 Nested Item 4&lt;/ifx-navbar-item&gt;
        &lt;ifx-navbar-item&gt;Layer 2 Nested Item 5&lt;/ifx-navbar-item&gt;
      &lt;/ifx-navbar-item&gt;
      &lt;ifx-navbar-item&gt;
        &lt;ifx-navbar-item&gt;Layer 2 Item 1&lt;/ifx-navbar-item&gt;
        &lt;ifx-navbar-item&gt;Layer 2 Item 2&lt;/ifx-navbar-item&gt;
        &lt;ifx-navbar-item&gt;Layer 2 Item 3&lt;/ifx-navbar-item&gt;
      &lt;/ifx-navbar-item&gt;
      &lt;ifx-navbar-item&gt;Nested Item 3&lt;/ifx-navbar-item&gt;
      &lt;ifx-navbar-item&gt;
        &lt;ifx-navbar-item&gt;Nested Item 4&lt;/ifx-navbar-item&gt;
      &lt;/ifx-navbar-item&gt;
    &lt;/ifx-navbar-item&gt;
    &lt;ifx-navbar-item
      href=&quot;&quot;
      target=&quot;_self&quot;
      slot=&quot;left-item&quot;
      icon=&quot;&quot;
      [showLabel]=&quot;true&quot;&gt;Menu Item&lt;/ifx-navbar-item&gt;
    &lt;ifx-navbar-item slot=&quot;left-item&quot;&gt;
      &lt;ifx-navbar-item&gt;Item1&lt;/ifx-navbar-item&gt;
      &lt;ifx-navbar-item&gt;Item2&lt;/ifx-navbar-item&gt;
    &lt;/ifx-navbar-item&gt;
    &lt;ifx-search-bar
      slot=&quot;search-bar-left&quot;
      [isOpen]=&quot;false&quot;&gt;&lt;/ifx-search-bar&gt;
    &lt;ifx-navbar-item
      number-indicator=&quot;&quot;
      slot=&quot;right-item&quot;
      target=&quot;_blank&quot;
      href=&quot;http://google.com&quot;
      [hideOnMobile]=&quot;true&quot;
      [showLabel]=&quot;false&quot;
      icon=&quot;image-16&quot;&gt;&lt;/ifx-navbar-item&gt;
    &lt;ifx-navbar-item
      [dotIndicator]=&quot;false&quot;
      slot=&quot;right-item&quot;
      [hideOnMobile]=&quot;true&quot;
      [showLabel]=&quot;false&quot;
      icon=&quot;image-16&quot;&gt;&lt;/ifx-navbar-item&gt;
    &lt;ifx-navbar-profile
      user-name=&quot;&quot;
      slot=&quot;right-item&quot;
      image-url=&quot;&quot;
      [showLabel]=&quot;true&quot;
      href=&quot;&quot;
      target=&quot;_self&quot;
      alt=&quot;profile image&quot;
      (ifxNavbarMobileMenuIsOpen)=&quot;handleNavbarMobileMenuIsOpen(\$any(\$event))&quot;
      (ifxNavItem)=&quot;handleNavItem(\$any(\$event))&quot;
      (ifxInput)=&quot;handleInput(\$any(\$event))&quot;
      (ifxOpen)=&quot;handleOpen(\$any(\$event))&quot;&gt;&lt;/ifx-navbar-profile&gt;
  &lt;/ifx-navbar&gt;`;

  protected applicationName = "Application name";
  protected showLogoAndAppname = true;
  protected logoHref = "http://google.com";
  protected readonly logoHrefTargetOptions = ["_self","_blank","_parent"];
  protected logoHrefTargetIndex = 0;

  protected updateApplicationName(value: string) {
    this.applicationName = value;
  }

  protected handleShowLogoAndAppnameChange() {
    this.showLogoAndAppname = !this.showLogoAndAppname;
  }

  protected updateLogoHref(value: string) {
    this.logoHref = value;
  }

  protected handleLogoHrefTargetChange() {
    this.logoHrefTargetIndex = (this.logoHrefTargetIndex + 1) % this.logoHrefTargetOptions.length;
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

  protected handleNavbarMobileMenuIsOpen(event: CustomEvent) {
    console.log('ifxNavbarMobileMenuIsOpen:', event);
    // Add your handler logic here
  }

  protected handleNavItem(event: CustomEvent) {
    console.log('ifxNavItem:', event);
    // Add your handler logic here
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