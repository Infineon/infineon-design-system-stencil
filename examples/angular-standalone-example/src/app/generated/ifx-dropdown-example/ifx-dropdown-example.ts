import { IfxDropdown, IfxDropdownItem, IfxDropdownMenu, IfxDropdownTriggerButton } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-dropdown-example',
  imports: [ IfxDropdown, IfxDropdownItem, IfxDropdownMenu, IfxDropdownTriggerButton ],
  templateUrl: './ifx-dropdown-example.html',
	styleUrl: './ifx-dropdown-example.scss'
})
export class IfxDropdownExample {
  protected readonly tsCode = `import { IfxDropdown, IfxDropdownItem, IfxDropdownMenu, IfxDropdownTriggerButton } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-dropdown-example&#039;,
  imports: [ IfxDropdown, IfxDropdownItem, IfxDropdownMenu, IfxDropdownTriggerButton ],
  templateUrl: &#039;./ifx-dropdown-example.html&#039;,
	styleUrl: &#039;./ifx-dropdown-example.scss&#039;
})
export class IfxDropdownExample {
  protected handleClose(event: CustomEvent) {
    console.log(&#039;ifxClose:&#039;, event);
    // Add your handler logic here
  }

  protected handleDropdown(event: CustomEvent) {
    console.log(&#039;ifxDropdown:&#039;, event);
    // Add your handler logic here
  }

  protected handleOpen(event: CustomEvent) {
    console.log(&#039;ifxOpen:&#039;, event);
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
  protected readonly htmlCode = `  &lt;ifx-dropdown
    placement=&quot;bottom-start&quot;
    [defaultOpen]=&quot;false&quot;
    [noCloseOnOutsideClick]=&quot;false&quot;
    [noCloseOnMenuClick]=&quot;false&quot;
    [noAppendToBody]=&quot;true&quot;
    [disabled]=&quot;false&quot;&gt;
    &lt;ifx-dropdown-trigger-button
      variant=&quot;primary&quot;
      (ifxClose)=&quot;handleClose(\$any(\$event))&quot;
      (ifxDropdown)=&quot;handleDropdown(\$any(\$event))&quot;
      (ifxOpen)=&quot;handleOpen(\$any(\$event))&quot;
      (ifxDropdownMenuItem)=&quot;handleDropdownMenuItem(\$any(\$event))&quot;
      (menuSize)=&quot;handleMenuSize(\$any(\$event))&quot;
      (ifxDropdownItem)=&quot;handleDropdownItem(\$any(\$event))&quot;&gt;Dropdown&lt;/ifx-dropdown-trigger-button&gt;
    &lt;ifx-dropdown-menu
      size=&quot;m&quot;
      (ifxClose)=&quot;handleClose(\$any(\$event))&quot;
      (ifxDropdown)=&quot;handleDropdown(\$any(\$event))&quot;
      (ifxOpen)=&quot;handleOpen(\$any(\$event))&quot;
      (ifxDropdownMenuItem)=&quot;handleDropdownMenuItem(\$any(\$event))&quot;
      (menuSize)=&quot;handleMenuSize(\$any(\$event))&quot;
      (ifxDropdownItem)=&quot;handleDropdownItem(\$any(\$event))&quot;&gt;
      &lt;ifx-dropdown-item
        icon=&quot;c-info-16&quot;
        target=&quot;_self&quot;
        href=&quot;&quot;
        [error]=&quot;false&quot;
        (ifxClose)=&quot;handleClose(\$any(\$event))&quot;
        (ifxDropdown)=&quot;handleDropdown(\$any(\$event))&quot;
        (ifxOpen)=&quot;handleOpen(\$any(\$event))&quot;
        (ifxDropdownMenuItem)=&quot;handleDropdownMenuItem(\$any(\$event))&quot;
        (menuSize)=&quot;handleMenuSize(\$any(\$event))&quot;
        (ifxDropdownItem)=&quot;handleDropdownItem(\$any(\$event))&quot;&gt;Menu Item&lt;/ifx-dropdown-item&gt;
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

  protected handleDropdownItem(event: CustomEvent) {
    console.log('ifxDropdownItem:', event);
    // Add your handler logic here
  }
}
