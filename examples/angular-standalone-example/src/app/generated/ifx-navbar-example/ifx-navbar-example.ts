import { IfxNavbar, IfxNavbarItem, IfxNavbarProfile, IfxSearchBar } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-navbar-example',
  imports: [ IfxNavbar, IfxNavbarItem, IfxNavbarProfile, IfxSearchBar ],
  templateUrl: './ifx-navbar-example.html',
  styleUrl: './ifx-navbar-example.scss'
})
export class IfxNavbarExample {
  protected readonly tsCode = `import { IfxNavbar, IfxNavbarItem, IfxNavbarProfile, IfxSearchBar } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-navbar-example&#039;,
  imports: [ IfxNavbar, IfxNavbarItem, IfxNavbarProfile, IfxSearchBar ],
  templateUrl: &#039;./ifx-navbar-example.html&#039;,
  styleUrl: &#039;./ifx-navbar-example.scss&#039;
})
export class IfxNavbarExample {}`;
  protected readonly htmlCode = `  &lt;ifx-navbar
    show-logo-and-appname=&quot;true&quot;
    application-name=&quot;Application name&quot;
    fixed=&quot;false&quot;
    logo-href=&quot;http://google.com&quot;
    logo-href-target=&quot;_self&quot;&gt;
    &lt;ifx-navbar-item
      icon=&quot;true&quot;
      slot=&quot;left-item&quot;
      target=&quot;_self&quot;
      href=&quot;true&quot;
      hide-on-mobile=&quot;true&quot;&gt;
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
      hide-on-mobile=&quot;true&quot;
      show-label=&quot;false&quot;
      icon=&quot;image-16&quot;&gt;&lt;/ifx-navbar-item&gt;
    &lt;ifx-navbar-item
      dot-indicator=&quot;false&quot;
      slot=&quot;right-item&quot;
      hide-on-mobile=&quot;true&quot;
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
  &lt;/ifx-navbar&gt;`;
}
