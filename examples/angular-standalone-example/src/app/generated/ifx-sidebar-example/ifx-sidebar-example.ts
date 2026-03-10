import { IfxButton, IfxSidebar, IfxSidebarItem, IfxSidebarTitle } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-sidebar-example',
  imports: [ IfxButton, IfxSidebar, IfxSidebarItem, IfxSidebarTitle ],
  templateUrl: './ifx-sidebar-example.html',
	styleUrl: './ifx-sidebar-example.scss'
})
export class IfxSidebarExample {
  protected readonly tsCode = `import { IfxButton, IfxSidebar, IfxSidebarItem, IfxSidebarTitle } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-sidebar-example&#039;,
  imports: [ IfxButton, IfxSidebar, IfxSidebarItem, IfxSidebarTitle ],
  templateUrl: &#039;./ifx-sidebar-example.html&#039;,
	styleUrl: &#039;./ifx-sidebar-example.scss&#039;
})
export class IfxSidebarExample {
  protected handleSidebarNavigationItem(event: CustomEvent) {
    console.log(&#039;ifxSidebarNavigationItem:&#039;, event);
    // Add your handler logic here
  }

  protected handleSidebarActionItem(event: CustomEvent) {
    console.log(&#039;ifxSidebarActionItem:&#039;, event);
    // Add your handler logic here
  }

  protected handleSidebarMenu(event: CustomEvent) {
    console.log(&#039;ifxSidebarMenu:&#039;, event);
    // Add your handler logic here
  }

  protected handleSidebarCollapseChange(event: CustomEvent) {
    console.log(&#039;ifxSidebarCollapseChange:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected get htmlCode(): string {
    const controlledAttrs = [
      ["showHeader", this.controlledProps["showHeader"]],
      ["showFooter", this.controlledProps["showFooter"]],
      ["initialCollapse", this.controlledProps["initialCollapse"]],
      ["collapsed", this.controlledProps["collapsed"]],
      ["collapsible", this.controlledProps["collapsible"]],
    ]
			.map(([name, value]) => '    ' + String(name) + '=&quot;' + String(value) + '&quot;')
      .join("\n");

    return `  &lt;ifx-sidebar
    application-name=&quot;Application Name&quot;
    terms-of-use=&quot;https://yourwebsite.com/terms&quot;
    imprint=&quot;https://yourwebsite.com/imprint&quot;
    privacy-policy=&quot;https://yourwebsite.com/privacy-policy&quot;
    copyright-text=&quot;© 1999 - 2026 Infineon Technologies AG&quot;
    __CONTROLLED_ATTRS__&gt;
    &lt;ifx-sidebar-title
      (ifxSidebarNavigationItem)=&quot;handleSidebarNavigationItem(\$any(\$event))&quot;
      (ifxSidebarActionItem)=&quot;handleSidebarActionItem(\$any(\$event))&quot;
      (ifxSidebarMenu)=&quot;handleSidebarMenu(\$any(\$event))&quot;
      (ifxSidebarCollapseChange)=&quot;handleSidebarCollapseChange(\$any(\$event))&quot;&gt;Menu Items&lt;/ifx-sidebar-title&gt;
    &lt;ifx-sidebar-item
      href=&quot;https://google.com&quot;
      target=&quot;_blank&quot;
      icon=&quot;image-16&quot;
      (ifxSidebarNavigationItem)=&quot;handleSidebarNavigationItem(\$any(\$event))&quot;
      (ifxSidebarActionItem)=&quot;handleSidebarActionItem(\$any(\$event))&quot;
      (ifxSidebarMenu)=&quot;handleSidebarMenu(\$any(\$event))&quot;
      (ifxSidebarCollapseChange)=&quot;handleSidebarCollapseChange(\$any(\$event))&quot;&gt;Menu Item&lt;/ifx-sidebar-item&gt;
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
      number-indicator=&quot;true&quot;
      isactionitem=&quot;false&quot;
      active=&quot;false&quot;&gt;Item 1&lt;/ifx-sidebar-item&gt;
    &lt;ifx-sidebar-item
      href=&quot;https://google.com&quot;
      target=&quot;_blank&quot;
      icon=&quot;image-16&quot;&gt;Item 2&lt;/ifx-sidebar-item&gt;
  &lt;/ifx-sidebar&gt;`.replace("__CONTROLLED_ATTRS__", controlledAttrs);
  }
  protected showHeader = true;
  protected showFooter = true;
  protected initialCollapse = true;
  protected collapsed = false;
  protected collapsible = false;

  protected toggleShowHeader() { this.showHeader = !this.showHeader; }
  protected toggleShowFooter() { this.showFooter = !this.showFooter; }
  protected toggleInitialCollapse() { this.initialCollapse = !this.initialCollapse; }
  protected toggleCollapsed() { this.collapsed = !this.collapsed; }
  protected toggleCollapsible() { this.collapsible = !this.collapsible; }

  protected get controlledProps(): Record<string, unknown> {
    return {
      "showHeader": this.showHeader,
      "showFooter": this.showFooter,
      "initialCollapse": this.initialCollapse,
      "collapsed": this.collapsed,
      "collapsible": this.collapsible,
    };
  }

  protected handleSidebarNavigationItem(event: CustomEvent) {
    console.log('ifxSidebarNavigationItem:', event);
    // Add your handler logic here
  }

  protected handleSidebarActionItem(event: CustomEvent) {
    console.log('ifxSidebarActionItem:', event);
    // Add your handler logic here
  }

  protected handleSidebarMenu(event: CustomEvent) {
    console.log('ifxSidebarMenu:', event);
    // Add your handler logic here
  }

  protected handleSidebarCollapseChange(event: CustomEvent) {
    console.log('ifxSidebarCollapseChange:', event);
    // Add your handler logic here
  }
}
