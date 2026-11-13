import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-breadcrumb-example',
  templateUrl: './ifx-breadcrumb-example.html',
  styleUrl: './ifx-breadcrumb-example.scss',
  standalone: false
})
export class IfxBreadcrumbExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-breadcrumb-example&#039;,
  templateUrl: &#039;./ifx-breadcrumb-example.html&#039;,
  styleUrl: &#039;./ifx-breadcrumb-example.scss&#039;,
  standalone: false
})
export class IfxBreadcrumbExample {
  protected handleBreadcrumbMenuIconWrapper(event: CustomEvent) {
    console.log(&#039;breadcrumbMenuIconWrapper:&#039;, event);
    // Add your handler logic here
  }

  protected handleDropdownMenuItem(event: CustomEvent) {
    console.log(&#039;ifxDropdownMenuItem:&#039;, event);
    // Add your handler logic here
  }

  protected handleMenuSize(event: CustomEvent) {
    console.log(&#039;menuSize:&#039;, event);
    // Add your handler logic here
  }

  protected handleDropdownItem(event: CustomEvent) {
    console.log(&#039;ifxDropdownItem:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-breadcrumb&gt;
    &lt;ifx-breadcrumb-item&gt;
      &lt;ifx-breadcrumb-item-label
        slot=&quot;label&quot;
        icon=&quot;&quot;
        target=&quot;_self&quot;
        (breadcrumbMenuIconWrapper)=&quot;handleBreadcrumbMenuIconWrapper(\$any(\$event))&quot;&gt;Breadcrumb 1&lt;/ifx-breadcrumb-item-label&gt;
      &lt;ifx-dropdown-menu
        (ifxDropdownMenuItem)=&quot;handleDropdownMenuItem(\$any(\$event))&quot;
        (menuSize)=&quot;handleMenuSize(\$any(\$event))&quot;&gt;
        &lt;ifx-dropdown-item
          href=&quot;http://google.com&quot;
          (ifxDropdownItem)=&quot;handleDropdownItem(\$any(\$event))&quot;&gt;Google&lt;/ifx-dropdown-item&gt;
        &lt;ifx-dropdown-item href=&quot;http://bing.com&quot;&gt;Bing&lt;/ifx-dropdown-item&gt;
        &lt;ifx-dropdown-item href=&quot;http://yahoo.com&quot;&gt;Yahoo&lt;/ifx-dropdown-item&gt;
        &lt;ifx-dropdown-item href=&quot;http://naver.com&quot;&gt;Naver&lt;/ifx-dropdown-item&gt;
      &lt;/ifx-dropdown-menu&gt;
    &lt;/ifx-breadcrumb-item&gt;
    &lt;ifx-breadcrumb-item&gt;
      &lt;ifx-breadcrumb-item-label
        slot=&quot;label&quot;
        icon=&quot;&quot;
        target=&quot;_self&quot;&gt;Breadcrumb 2&lt;/ifx-breadcrumb-item-label&gt;
      &lt;ifx-dropdown-menu&gt;
        &lt;ifx-dropdown-item href=&quot;http://google.com&quot;&gt;Google&lt;/ifx-dropdown-item&gt;
        &lt;ifx-dropdown-item href=&quot;http://bing.com&quot;&gt;Bing&lt;/ifx-dropdown-item&gt;
        &lt;ifx-dropdown-item href=&quot;http://yahoo.com&quot;&gt;Yahoo&lt;/ifx-dropdown-item&gt;
        &lt;ifx-dropdown-item href=&quot;http://naver.com&quot;&gt;Naver&lt;/ifx-dropdown-item&gt;
      &lt;/ifx-dropdown-menu&gt;
    &lt;/ifx-breadcrumb-item&gt;
    &lt;ifx-breadcrumb-item&gt;
      &lt;ifx-breadcrumb-item-label
        slot=&quot;label&quot;
        icon=&quot;&quot;
        href=&quot;http://yahoo.com&quot;
        target=&quot;_self&quot;&gt;Breadcrumb 3&lt;/ifx-breadcrumb-item-label&gt;
    &lt;/ifx-breadcrumb-item&gt;
  &lt;/ifx-breadcrumb&gt;`;

  protected handleBreadcrumbMenuIconWrapper(event: CustomEvent) {
    console.log('breadcrumbMenuIconWrapper:', event);
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

  protected handleDropdownItem(event: CustomEvent) {
    console.log('ifxDropdownItem:', event);
    // Add your handler logic here
  }
}
