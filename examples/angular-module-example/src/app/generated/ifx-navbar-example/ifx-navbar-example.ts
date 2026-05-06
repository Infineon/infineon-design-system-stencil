import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-navbar-example',
  templateUrl: './ifx-navbar-example.html',
  styleUrl: './ifx-navbar-example.scss',
  standalone: false
})
export class IfxNavbarExample {
  protected readonly tsCode = `import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-navbar-example',
  templateUrl: './ifx-navbar-example.html',
  styleUrl: './ifx-navbar-example.scss',
  standalone: false
})
export class IfxNavbarExample {

  protected applicationName = "Application name";
  protected showLogoAndAppname = true;
  protected logoHref = "http://google.com";
  protected readonly logoHrefTargetOptions = ["_self","_blank","_parent"];
  protected logoHrefTargetIndex = 0;
  protected numberIndicator = 0;
  protected dotIndicator = false;
  protected hideOnMobile = true;
  protected href = "http://google.com";
  protected readonly targetOptions = ["_self"];
  protected targetIndex = 0;
  protected alt = "profile image";
  protected userName = "";

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

  protected updateNumberIndicator(value: string) {
    this.numberIndicator = Number(value);
  }

  protected handleDotIndicatorChange() {
    this.dotIndicator = !this.dotIndicator;
  }

  protected handleHideOnMobileChange() {
    this.hideOnMobile = !this.hideOnMobile;
  }

  protected updateHref(value: string) {
    this.href = value;
  }

  protected handleTargetChange() {
    this.targetIndex = (this.targetIndex + 1) % this.targetOptions.length;
  }

  protected updateAlt(value: string) {
    this.alt = value;
  }

  protected updateUserName(value: string) {
    this.userName = value;
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
      (ifxNavbarMobileMenuIsOpen)=&quot;handleNavbarMobileMenuIsOpen(\$any(\$event))&quot;
      (ifxNavItem)=&quot;handleNavItem(\$any(\$event))&quot;
      (ifxInput)=&quot;handleInput(\$any(\$event))&quot;
      (ifxOpen)=&quot;handleOpen(\$any(\$event))&quot;
      [target]=&quot;targetOptions[targetIndex]&quot;
      [href]=&quot;href&quot;
      [hideOnMobile]=&quot;hideOnMobile&quot;
      [numberIndicator]=&quot;numberIndicator&quot;
      [dotIndicator]=&quot;dotIndicator&quot;&gt;
      &lt;ifx-navbar-item
        icon=&quot;&quot;
        [numberIndicator]=&quot;numberIndicator&quot;
        [dotIndicator]=&quot;dotIndicator&quot;
        [hideOnMobile]=&quot;hideOnMobile&quot;&gt;
        &lt;ifx-navbar-item
          [numberIndicator]=&quot;numberIndicator&quot;
          [dotIndicator]=&quot;dotIndicator&quot;
          [hideOnMobile]=&quot;hideOnMobile&quot;&gt;
          &lt;ifx-navbar-item
            [href]=&quot;href&quot;
            [target]=&quot;targetOptions[targetIndex]&quot;
            [numberIndicator]=&quot;numberIndicator&quot;
            [dotIndicator]=&quot;dotIndicator&quot;
            [hideOnMobile]=&quot;hideOnMobile&quot;&gt;Link Layer 3 Nested Item 1&lt;/ifx-navbar-item&gt;
          &lt;ifx-navbar-item
            [numberIndicator]=&quot;numberIndicator&quot;
            [dotIndicator]=&quot;dotIndicator&quot;
            [hideOnMobile]=&quot;hideOnMobile&quot;&gt;Layer 3 Nested Item 2&lt;/ifx-navbar-item&gt;
          &lt;ifx-navbar-item
            [numberIndicator]=&quot;numberIndicator&quot;
            [dotIndicator]=&quot;dotIndicator&quot;
            [hideOnMobile]=&quot;hideOnMobile&quot;&gt;Layer 3 Nested Item 3&lt;/ifx-navbar-item&gt;
          &lt;ifx-navbar-item
            [numberIndicator]=&quot;numberIndicator&quot;
            [dotIndicator]=&quot;dotIndicator&quot;
            [hideOnMobile]=&quot;hideOnMobile&quot;&gt;Layer 3 Nested Item 4&lt;/ifx-navbar-item&gt;
        &lt;/ifx-navbar-item&gt;
        &lt;ifx-navbar-item
          [numberIndicator]=&quot;numberIndicator&quot;
          [dotIndicator]=&quot;dotIndicator&quot;
          [hideOnMobile]=&quot;hideOnMobile&quot;&gt;Layer 2 Nested Item 3&lt;/ifx-navbar-item&gt;
        &lt;ifx-navbar-item
          [numberIndicator]=&quot;numberIndicator&quot;
          [dotIndicator]=&quot;dotIndicator&quot;
          [hideOnMobile]=&quot;hideOnMobile&quot;&gt;Layer 2 Nested Item 4&lt;/ifx-navbar-item&gt;
        &lt;ifx-navbar-item
          [numberIndicator]=&quot;numberIndicator&quot;
          [dotIndicator]=&quot;dotIndicator&quot;
          [hideOnMobile]=&quot;hideOnMobile&quot;&gt;Layer 2 Nested Item 5&lt;/ifx-navbar-item&gt;
      &lt;/ifx-navbar-item&gt;
      &lt;ifx-navbar-item
        [numberIndicator]=&quot;numberIndicator&quot;
        [dotIndicator]=&quot;dotIndicator&quot;
        [hideOnMobile]=&quot;hideOnMobile&quot;&gt;
        &lt;ifx-navbar-item
          [numberIndicator]=&quot;numberIndicator&quot;
          [dotIndicator]=&quot;dotIndicator&quot;
          [hideOnMobile]=&quot;hideOnMobile&quot;&gt;Layer 2 Item 1&lt;/ifx-navbar-item&gt;
        &lt;ifx-navbar-item
          [numberIndicator]=&quot;numberIndicator&quot;
          [dotIndicator]=&quot;dotIndicator&quot;
          [hideOnMobile]=&quot;hideOnMobile&quot;&gt;Layer 2 Item 2&lt;/ifx-navbar-item&gt;
        &lt;ifx-navbar-item
          [numberIndicator]=&quot;numberIndicator&quot;
          [dotIndicator]=&quot;dotIndicator&quot;
          [hideOnMobile]=&quot;hideOnMobile&quot;&gt;Layer 2 Item 3&lt;/ifx-navbar-item&gt;
      &lt;/ifx-navbar-item&gt;
      &lt;ifx-navbar-item
        [numberIndicator]=&quot;numberIndicator&quot;
        [dotIndicator]=&quot;dotIndicator&quot;
        [hideOnMobile]=&quot;hideOnMobile&quot;&gt;Nested Item 3&lt;/ifx-navbar-item&gt;
      &lt;ifx-navbar-item
        [numberIndicator]=&quot;numberIndicator&quot;
        [dotIndicator]=&quot;dotIndicator&quot;
        [hideOnMobile]=&quot;hideOnMobile&quot;&gt;
        &lt;ifx-navbar-item
          [numberIndicator]=&quot;numberIndicator&quot;
          [dotIndicator]=&quot;dotIndicator&quot;
          [hideOnMobile]=&quot;hideOnMobile&quot;&gt;Nested Item 4&lt;/ifx-navbar-item&gt;
      &lt;/ifx-navbar-item&gt;
    &lt;/ifx-navbar-item&gt;
    &lt;ifx-navbar-item
      slot=&quot;left-item&quot;
      icon=&quot;&quot;
      [showLabel]=&quot;true&quot;
      [href]=&quot;href&quot;
      [target]=&quot;targetOptions[targetIndex]&quot;
      [numberIndicator]=&quot;numberIndicator&quot;
      [dotIndicator]=&quot;dotIndicator&quot;
      [hideOnMobile]=&quot;hideOnMobile&quot;&gt;Menu Item&lt;/ifx-navbar-item&gt;
    &lt;ifx-navbar-item
      slot=&quot;left-item&quot;
      [numberIndicator]=&quot;numberIndicator&quot;
      [dotIndicator]=&quot;dotIndicator&quot;
      [hideOnMobile]=&quot;hideOnMobile&quot;&gt;
      &lt;ifx-navbar-item
        [numberIndicator]=&quot;numberIndicator&quot;
        [dotIndicator]=&quot;dotIndicator&quot;
        [hideOnMobile]=&quot;hideOnMobile&quot;&gt;Item1&lt;/ifx-navbar-item&gt;
      &lt;ifx-navbar-item
        [numberIndicator]=&quot;numberIndicator&quot;
        [dotIndicator]=&quot;dotIndicator&quot;
        [hideOnMobile]=&quot;hideOnMobile&quot;&gt;Item2&lt;/ifx-navbar-item&gt;
    &lt;/ifx-navbar-item&gt;
    &lt;ifx-search-bar
      slot=&quot;search-bar-left&quot;
      [isOpen]=&quot;false&quot;&gt;&lt;/ifx-search-bar&gt;
    &lt;ifx-navbar-item
      slot=&quot;right-item&quot;
      [showLabel]=&quot;false&quot;
      icon=&quot;image-16&quot;
      [numberIndicator]=&quot;numberIndicator&quot;
      [target]=&quot;targetOptions[targetIndex]&quot;
      [href]=&quot;href&quot;
      [hideOnMobile]=&quot;hideOnMobile&quot;
      [dotIndicator]=&quot;dotIndicator&quot;&gt;&lt;/ifx-navbar-item&gt;
    &lt;ifx-navbar-item
      slot=&quot;right-item&quot;
      [showLabel]=&quot;false&quot;
      icon=&quot;image-16&quot;
      [dotIndicator]=&quot;dotIndicator&quot;
      [hideOnMobile]=&quot;hideOnMobile&quot;
      [numberIndicator]=&quot;numberIndicator&quot;&gt;&lt;/ifx-navbar-item&gt;
    &lt;ifx-navbar-profile
      slot=&quot;right-item&quot;
      image-url=&quot;&quot;
      [showLabel]=&quot;true&quot;
      (ifxNavbarMobileMenuIsOpen)=&quot;handleNavbarMobileMenuIsOpen(\$any(\$event))&quot;
      (ifxNavItem)=&quot;handleNavItem(\$any(\$event))&quot;
      (ifxInput)=&quot;handleInput(\$any(\$event))&quot;
      (ifxOpen)=&quot;handleOpen(\$any(\$event))&quot;
      [userName]=&quot;userName&quot;
      [href]=&quot;href&quot;
      [target]=&quot;targetOptions[targetIndex]&quot;
      [alt]=&quot;alt&quot;&gt;&lt;/ifx-navbar-profile&gt;
  &lt;/ifx-navbar&gt;`;

  protected applicationName = "Application name";
  protected showLogoAndAppname = true;
  protected logoHref = "http://google.com";
  protected readonly logoHrefTargetOptions = ["_self","_blank","_parent"];
  protected logoHrefTargetIndex = 0;
  protected numberIndicator = 0;
  protected dotIndicator = false;
  protected hideOnMobile = true;
  protected href = "http://google.com";
  protected readonly targetOptions = ["_self"];
  protected targetIndex = 0;
  protected alt = "profile image";
  protected userName = "";

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

  protected updateNumberIndicator(value: string) {
    this.numberIndicator = Number(value);
  }

  protected handleDotIndicatorChange() {
    this.dotIndicator = !this.dotIndicator;
  }

  protected handleHideOnMobileChange() {
    this.hideOnMobile = !this.hideOnMobile;
  }

  protected updateHref(value: string) {
    this.href = value;
  }

  protected handleTargetChange() {
    this.targetIndex = (this.targetIndex + 1) % this.targetOptions.length;
  }

  protected updateAlt(value: string) {
    this.alt = value;
  }

  protected updateUserName(value: string) {
    this.userName = value;
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