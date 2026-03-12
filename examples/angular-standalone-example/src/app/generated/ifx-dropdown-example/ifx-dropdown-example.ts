import { IfxButton, IfxDropdown, IfxDropdownItem, IfxDropdownMenu, IfxDropdownTriggerButton } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-dropdown-example',
  imports: [ IfxButton, IfxDropdown, IfxDropdownItem, IfxDropdownMenu, IfxDropdownTriggerButton ],
  templateUrl: './ifx-dropdown-example.html',
	styleUrl: './ifx-dropdown-example.scss'
})
export class IfxDropdownExample {
  protected readonly tsCode = `import { IfxButton, IfxDropdown, IfxDropdownItem, IfxDropdownMenu, IfxDropdownTriggerButton } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-dropdown-example&#039;,
  imports: [ IfxButton, IfxDropdown, IfxDropdownItem, IfxDropdownMenu, IfxDropdownTriggerButton ],
  templateUrl: &#039;./ifx-dropdown-example.html&#039;,
	styleUrl: &#039;./ifx-dropdown-example.scss&#039;
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
<<<<<<< HEAD
  protected get htmlCode(): string {
    const controlledAttrs = [
      ["placement", this.controlledProps["placement"]],
      ["disabled", this.controlledProps["disabled"]],
      ["defaultOpen", this.controlledProps["defaultOpen"]],
      ["noCloseOnOutsideClick", this.controlledProps["noCloseOnOutsideClick"]],
      ["noCloseOnMenuClick", this.controlledProps["noCloseOnMenuClick"]],
      ["noAppendToBody", this.controlledProps["noAppendToBody"]],
    ]
			.map(([name, value]) => '    ' + String(name) + '=&quot;' + String(value) + '&quot;')
      .join("\n");

    return `  &lt;ifx-dropdown __CONTROLLED_ATTRS__&gt;
=======
  protected readonly htmlCode = `  &lt;ifx-dropdown
    placement=&quot;bottom-start&quot;
    [defaultOpen]=&quot;false&quot;
    [noCloseOnOutsideClick]=&quot;false&quot;
    [noCloseOnMenuClick]=&quot;false&quot;
    [noAppendToBody]=&quot;false&quot;
    [disabled]=&quot;false&quot;&gt;
>>>>>>> master
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
  &lt;/ifx-dropdown&gt;`.replace("__CONTROLLED_ATTRS__", controlledAttrs);
  }
  protected readonly placementOptions = ["auto","auto-start","auto-end","top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"];
  protected placementIndex = 7;
  protected disabled = false;
  protected defaultOpen = false;
  protected noCloseOnOutsideClick = false;
  protected noCloseOnMenuClick = false;
  protected noAppendToBody = false;

  protected togglePlacement() { this.placementIndex = (this.placementIndex + 1) % this.placementOptions.length; }
  protected toggleDisabled() { this.disabled = !this.disabled; }
  protected toggleDefaultOpen() { this.defaultOpen = !this.defaultOpen; }
  protected toggleNoCloseOnOutsideClick() { this.noCloseOnOutsideClick = !this.noCloseOnOutsideClick; }
  protected toggleNoCloseOnMenuClick() { this.noCloseOnMenuClick = !this.noCloseOnMenuClick; }
  protected toggleNoAppendToBody() { this.noAppendToBody = !this.noAppendToBody; }

  protected get controlledProps(): Record<string, unknown> {
    return {
      "placement": this.placementOptions[this.placementIndex],
      "disabled": this.disabled,
      "defaultOpen": this.defaultOpen,
      "noCloseOnOutsideClick": this.noCloseOnOutsideClick,
      "noCloseOnMenuClick": this.noCloseOnMenuClick,
      "noAppendToBody": this.noAppendToBody,
    };
  }

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
