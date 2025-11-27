import { IfxDropdown, IfxDropdownItem, IfxDropdownMenu, IfxDropdownTriggerButton } from '@infineon/infineon-design-system-angular/standalone';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-ifx-dropdown-example',
  imports: [ IfxDropdown, IfxDropdownItem, IfxDropdownMenu, IfxDropdownTriggerButton ],
  templateUrl: './ifx-dropdown-example.html',
  styleUrl: './ifx-dropdown-example.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IfxDropdownExample {
  protected readonly tsCode = `import { IfxDropdown, IfxDropdownItem, IfxDropdownMenu, IfxDropdownTriggerButton } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component, CUSTOM_ELEMENTS_SCHEMA } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-dropdown-example&#039;,
  imports: [ IfxDropdown, IfxDropdownItem, IfxDropdownMenu, IfxDropdownTriggerButton ],
  templateUrl: &#039;./ifx-dropdown-example.html&#039;,
  styleUrl: &#039;./ifx-dropdown-example.scss&#039;,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IfxDropdownExample {
  protected handleOpen(event: any) {
    console.log(&#039;ifxOpen:&#039;, event.detail);
    // Add your handler logic here
  }

  protected handleClose(event: any) {
    console.log(&#039;ifxClose:&#039;, event.detail);
    // Add your handler logic here
  }

  protected handleDropdownMenuItem(event: any) {
    console.log(&#039;ifxDropdownMenuItem:&#039;, event.detail);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;div
    (ifxOpen)=&quot;handleOpen(\$event)&quot;
    (ifxClose)=&quot;handleClose(\$event)&quot;
    (ifxDropdownMenuItem)=&quot;handleDropdownMenuItem(\$event)&quot;&gt;
    &lt;ifx-dropdown
      placement=&quot;bottom-start&quot;
      disabled=&quot;false&quot;
      default-open=&quot;false&quot;
      no-close-on-outside-click=&quot;false&quot;
      no-close-on-menu-click=&quot;false&quot;
      no-append-to-body=&quot;false&quot;&gt;
      &lt;ifx-dropdown-trigger-button
        variant=&quot;primary&quot;
        (ifxOpen)=&quot;handleOpen(\$event)&quot;
        (ifxClose)=&quot;handleClose(\$event)&quot;
        (ifxDropdownMenuItem)=&quot;handleDropdownMenuItem(\$event)&quot;&gt;
        Dropdown
      &lt;/ifx-dropdown-trigger-button&gt;
      &lt;ifx-dropdown-menu
        size=&quot;m&quot;
        (ifxOpen)=&quot;handleOpen(\$event)&quot;
        (ifxClose)=&quot;handleClose(\$event)&quot;
        (ifxDropdownMenuItem)=&quot;handleDropdownMenuItem(\$event)&quot;&gt;
        &lt;ifx-dropdown-item
          icon=&quot;c-info-16&quot;
          target=&quot;_self&quot;
          href=&quot;true&quot;
          (ifxOpen)=&quot;handleOpen(\$event)&quot;
          (ifxClose)=&quot;handleClose(\$event)&quot;
          (ifxDropdownMenuItem)=&quot;handleDropdownMenuItem(\$event)&quot;&gt;
          Menu Item
        &lt;/ifx-dropdown-item&gt;
        &lt;ifx-dropdown-item
          icon=&quot;c-info-16&quot;
          target=&quot;_self&quot;
          href=&quot;true&quot;&gt;
          Menu Item
        &lt;/ifx-dropdown-item&gt;
        &lt;ifx-dropdown-item
          icon=&quot;c-info-16&quot;
          target=&quot;_self&quot;
          href=&quot;true&quot;&gt;
          Menu Item
        &lt;/ifx-dropdown-item&gt;
        &lt;ifx-dropdown-item
          icon=&quot;c-info-16&quot;
          target=&quot;_self&quot;
          href=&quot;true&quot;&gt;
          Menu Item
        &lt;/ifx-dropdown-item&gt;
        &lt;ifx-dropdown-item
          icon=&quot;c-info-16&quot;
          target=&quot;_self&quot;
          href=&quot;true&quot;&gt;
          Menu Item
        &lt;/ifx-dropdown-item&gt;
      &lt;/ifx-dropdown-menu&gt;
    &lt;/ifx-dropdown&gt;
  &lt;/div&gt;`;

  protected handleOpen(event: any) {
    console.log('ifxOpen:', event.detail);
    // Add your handler logic here
  }

  protected handleClose(event: any) {
    console.log('ifxClose:', event.detail);
    // Add your handler logic here
  }

  protected handleDropdownMenuItem(event: any) {
    console.log('ifxDropdownMenuItem:', event.detail);
    // Add your handler logic here
  }
}
