import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-dropdown-example',
  templateUrl: './ifx-dropdown-example.html',
  styleUrl: './ifx-dropdown-example.scss',
  standalone: false
})
export class IfxDropdownExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-dropdown-example&#039;,
  templateUrl: &#039;./ifx-dropdown-example.html&#039;,
  styleUrl: &#039;./ifx-dropdown-example.scss&#039;,
  standalone: false
})
export class IfxDropdownExample {
  protected handleOpen(event: CustomEvent) {
    console.log(&#039;ifxOpen:&#039;, event);
    // Add your handler logic here
  }

  protected handleClose(event: CustomEvent) {
    console.log(&#039;ifxClose:&#039;, event);
    // Add your handler logic here
  }

  protected handleDropdownMenuItem(event: CustomEvent) {
    console.log(&#039;ifxDropdownMenuItem:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-dropdown
    placement=&quot;{{ controlledProps[&#039;placement&#039;] }}&quot;
    disabled=&quot;{{ controlledProps[&#039;disabled&#039;] }}&quot;
    defaultOpen=&quot;{{ controlledProps[&#039;defaultOpen&#039;] }}&quot;
    noCloseOnOutsideClick=&quot;{{ controlledProps[&#039;noCloseOnOutsideClick&#039;] }}&quot;
    noCloseOnMenuClick=&quot;{{ controlledProps[&#039;noCloseOnMenuClick&#039;] }}&quot;
    noAppendToBody=&quot;{{ controlledProps[&#039;noAppendToBody&#039;] }}&quot;&gt;
    &lt;ifx-dropdown-trigger-button
      variant=&quot;primary&quot;
      (ifxOpen)=&quot;handleOpen(\$any(\$event))&quot;
      (ifxClose)=&quot;handleClose(\$any(\$event))&quot;
      (ifxDropdownMenuItem)=&quot;handleDropdownMenuItem(\$any(\$event))&quot;&gt;Dropdown&lt;/ifx-dropdown-trigger-button&gt;
    &lt;ifx-dropdown-menu
      size=&quot;m&quot;
      (ifxOpen)=&quot;handleOpen(\$any(\$event))&quot;
      (ifxClose)=&quot;handleClose(\$any(\$event))&quot;
      (ifxDropdownMenuItem)=&quot;handleDropdownMenuItem(\$any(\$event))&quot;&gt;
      &lt;ifx-dropdown-item
        icon=&quot;c-info-16&quot;
        target=&quot;_self&quot;
        href=&quot;true&quot;
        [error]=&quot;false&quot;
        (ifxOpen)=&quot;handleOpen(\$any(\$event))&quot;
        (ifxClose)=&quot;handleClose(\$any(\$event))&quot;
        (ifxDropdownMenuItem)=&quot;handleDropdownMenuItem(\$any(\$event))&quot;&gt;Menu Item&lt;/ifx-dropdown-item&gt;
      &lt;ifx-dropdown-item
        icon=&quot;c-info-16&quot;
        target=&quot;_self&quot;
        href=&quot;true&quot;
        [error]=&quot;false&quot;&gt;Menu Item&lt;/ifx-dropdown-item&gt;
      &lt;ifx-dropdown-item
        icon=&quot;c-info-16&quot;
        target=&quot;_self&quot;
        href=&quot;true&quot;
        [error]=&quot;false&quot;&gt;Menu Item&lt;/ifx-dropdown-item&gt;
      &lt;ifx-dropdown-item
        icon=&quot;c-info-16&quot;
        target=&quot;_self&quot;
        href=&quot;true&quot;
        [error]=&quot;false&quot;&gt;Menu Item&lt;/ifx-dropdown-item&gt;
      &lt;ifx-dropdown-item
        icon=&quot;c-info-16&quot;
        target=&quot;_self&quot;
        href=&quot;true&quot;
        [error]=&quot;false&quot;&gt;Menu Item&lt;/ifx-dropdown-item&gt;
    &lt;/ifx-dropdown-menu&gt;
  &lt;/ifx-dropdown&gt;`;

  protected handleOpen(event: CustomEvent) {
    console.log('ifxOpen:', event);
    // Add your handler logic here
  }

  protected handleClose(event: CustomEvent) {
    console.log('ifxClose:', event);
    // Add your handler logic here
  }

  protected handleDropdownMenuItem(event: CustomEvent) {
    console.log('ifxDropdownMenuItem:', event);
    // Add your handler logic here
  }
}
