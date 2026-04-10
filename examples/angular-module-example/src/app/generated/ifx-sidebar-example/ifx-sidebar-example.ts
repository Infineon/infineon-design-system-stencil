import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-sidebar-example',
  templateUrl: './ifx-sidebar-example.html',
  styleUrl: './ifx-sidebar-example.scss',
  standalone: false
})
export class IfxSidebarExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-sidebar-example&#039;,
  templateUrl: &#039;./ifx-sidebar-example.html&#039;,
  styleUrl: &#039;./ifx-sidebar-example.scss&#039;,
  standalone: false
})
export class IfxSidebarExample {}`;
  protected readonly htmlCode = `  &lt;ifx-sidebar
    application-name=&quot;Application Name&quot;
    collapsible=&quot;false&quot;
    collapsed=&quot;false&quot;
    show-header=&quot;true&quot;
    show-footer=&quot;true&quot;
    initial-collapse=&quot;true&quot;
    terms-of-use=&quot;https://yourwebsite.com/terms&quot;
    imprint=&quot;https://yourwebsite.com/imprint&quot;
    privacy-policy=&quot;https://yourwebsite.com/privacy-policy&quot;
    copyright-text=&quot;© 1999 - 2026 Infineon Technologies AG&quot;
    position=&quot;left&quot;&gt;
    &lt;ifx-sidebar-title&gt;Menu Items&lt;/ifx-sidebar-title&gt;
    &lt;ifx-sidebar-item
      href=&quot;https://google.com&quot;
      target=&quot;_blank&quot;
      icon=&quot;image-16&quot;&gt;Menu Item&lt;/ifx-sidebar-item&gt;
    &lt;ifx-sidebar-item
      href=&quot;https://google.com&quot;
      target=&quot;_blank&quot;
      icon=&quot;image-16&quot;&gt;Menu Item&lt;/ifx-sidebar-item&gt;
    &lt;ifx-sidebar-item
      href=&quot;https://google.com&quot;
      target=&quot;_blank&quot;
      icon=&quot;image-16&quot;&gt;Menu Item&lt;/ifx-sidebar-item&gt;
    &lt;ifx-sidebar-item
      href=&quot;https://google.com&quot;
      target=&quot;_blank&quot;
      icon=&quot;image-16&quot;&gt;Menu Item&lt;/ifx-sidebar-item&gt;
    &lt;ifx-sidebar-item&gt;
      &lt;ifx-sidebar-item
        href=&quot;https://google.com&quot;
        target=&quot;_blank&quot;
        icon=&quot;image-16&quot;&gt;Menu Item&lt;/ifx-sidebar-item&gt;
      &lt;ifx-sidebar-item icon=&quot;image-16&quot;&gt;
        &lt;ifx-sidebar-item&gt;Sub menu item&lt;/ifx-sidebar-item&gt;
        &lt;ifx-sidebar-item active=&quot;true&quot;&gt;Sub menu item&lt;/ifx-sidebar-item&gt;
        &lt;ifx-sidebar-item&gt;Sub menu item&lt;/ifx-sidebar-item&gt;
      &lt;/ifx-sidebar-item&gt;
      &lt;ifx-sidebar-item
        href=&quot;https://google.com&quot;
        target=&quot;_blank&quot;&gt;Menu Item&lt;/ifx-sidebar-item&gt;
      &lt;ifx-sidebar-item
        href=&quot;https://google.com&quot;
        target=&quot;_blank&quot;&gt;Menu Item&lt;/ifx-sidebar-item&gt;
    &lt;/ifx-sidebar-item&gt;
    &lt;ifx-sidebar-title&gt;Items group&lt;/ifx-sidebar-title&gt;
    &lt;ifx-sidebar-item
      href=&quot;https://google.com&quot;
      target=&quot;_self&quot;
      icon=&quot;image-16&quot;
      number-indicator=&quot;&quot;
      isactionitem=&quot;false&quot;
      active=&quot;false&quot;&gt;Item 1&lt;/ifx-sidebar-item&gt;
    &lt;ifx-sidebar-item
      href=&quot;https://google.com&quot;
      target=&quot;_blank&quot;
      icon=&quot;image-16&quot;&gt;Item 2&lt;/ifx-sidebar-item&gt;
  &lt;/ifx-sidebar&gt;`;
}
