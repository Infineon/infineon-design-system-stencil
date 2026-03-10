import { IfxButton, IfxNavbar, IfxNavbarItem, IfxNavbarProfile, IfxSearchBar } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-navbar-example',
  imports: [ IfxButton, IfxNavbar, IfxNavbarItem, IfxNavbarProfile, IfxSearchBar ],
  templateUrl: './ifx-navbar-example.html',
	styleUrl: './ifx-navbar-example.scss'
})
export class IfxNavbarExample {
  protected readonly tsCode = `import { IfxButton, IfxNavbar, IfxNavbarItem, IfxNavbarProfile, IfxSearchBar } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-navbar-example&#039;,
  imports: [ IfxButton, IfxNavbar, IfxNavbarItem, IfxNavbarProfile, IfxSearchBar ],
  templateUrl: &#039;./ifx-navbar-example.html&#039;,
	styleUrl: &#039;./ifx-navbar-example.scss&#039;
})
export class IfxNavbarExample {}`;
  protected get htmlCode(): string {
    const controlledAttrs = [
      ["showLogoAndAppname", this.controlledProps["showLogoAndAppname"]],
      ["logoHrefTarget", this.controlledProps["logoHrefTarget"]],
    ]
			.map(([name, value]) => '    ' + String(name) + '=&quot;' + String(value) + '&quot;')
      .join("\n");

    return `  &lt;ifx-navbar
    application-name=&quot;Application name&quot;
    fixed=&quot;false&quot;
    logo-href=&quot;http://google.com&quot;
    __CONTROLLED_ATTRS__&gt;
    &lt;ifx-navbar-item
      icon=&quot;true&quot;
      slot=&quot;left-item&quot;
      target=&quot;_self&quot;
      href=&quot;true&quot;
      [hideOnMobile]=&quot;true&quot;&gt;
      &lt;ifx-navbar-item icon=&quot;true&quot;&gt;
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
      href=&quot;true&quot;
      target=&quot;_self&quot;
      slot=&quot;left-item&quot;
      icon=&quot;true&quot;
      show-label=&quot;true&quot;&gt;Menu Item&lt;/ifx-navbar-item&gt;
    &lt;ifx-navbar-item slot=&quot;left-item&quot;&gt;
      &lt;ifx-navbar-item&gt;Item1&lt;/ifx-navbar-item&gt;
      &lt;ifx-navbar-item&gt;Item2&lt;/ifx-navbar-item&gt;
    &lt;/ifx-navbar-item&gt;
    &lt;ifx-search-bar slot=&quot;search-bar-left&quot;&gt;&lt;/ifx-search-bar&gt;
    &lt;ifx-navbar-item
      number-indicator=&quot;true&quot;
      slot=&quot;right-item&quot;
      target=&quot;_blank&quot;
      href=&quot;http://google.com&quot;
      [hideOnMobile]=&quot;true&quot;
      show-label=&quot;false&quot;
      icon=&quot;image-16&quot;&gt;&lt;/ifx-navbar-item&gt;
    &lt;ifx-navbar-item
      [dotIndicator]=&quot;false&quot;
      slot=&quot;right-item&quot;
      [hideOnMobile]=&quot;true&quot;
      show-label=&quot;false&quot;
      icon=&quot;image-16&quot;&gt;&lt;/ifx-navbar-item&gt;
    &lt;ifx-navbar-profile
      user-name=&quot;true&quot;
      slot=&quot;right-item&quot;
      image-url=&quot;true&quot;
      show-label=&quot;true&quot;
      href=&quot;true&quot;
      target=&quot;_self&quot;
      alt=&quot;profile image&quot;&gt;&lt;/ifx-navbar-profile&gt;
  &lt;/ifx-navbar&gt;`.replace("__CONTROLLED_ATTRS__", controlledAttrs);
  }
  protected showLogoAndAppname = true;
  protected readonly logoHrefTargetOptions = ["_self","_blank","_parent"];
  protected logoHrefTargetIndex = 0;

  protected toggleShowLogoAndAppname() { this.showLogoAndAppname = !this.showLogoAndAppname; }
  protected toggleLogoHrefTarget() { this.logoHrefTargetIndex = (this.logoHrefTargetIndex + 1) % this.logoHrefTargetOptions.length; }

  protected get controlledProps(): Record<string, unknown> {
    return {
      "showLogoAndAppname": this.showLogoAndAppname,
      "logoHrefTarget": this.logoHrefTargetOptions[this.logoHrefTargetIndex],
    };
  }
}
