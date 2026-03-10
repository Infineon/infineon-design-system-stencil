import { IfxButton, IfxSearchBar } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-search-bar-example',
  imports: [ IfxButton, IfxSearchBar ],
  templateUrl: './ifx-search-bar-example.html',
	styleUrl: './ifx-search-bar-example.scss'
})
export class IfxSearchBarExample {
  protected readonly tsCode = `import { IfxButton, IfxSearchBar } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-search-bar-example&#039;,
  imports: [ IfxButton, IfxSearchBar ],
  templateUrl: &#039;./ifx-search-bar-example.html&#039;,
	styleUrl: &#039;./ifx-search-bar-example.scss&#039;
})
export class IfxSearchBarExample {
  protected handleInput(event: CustomEvent) {
    console.log(&#039;ifxInput:&#039;, event);
    // Add your handler logic here
  }

  protected handleOpen(event: CustomEvent) {
    console.log(&#039;ifxOpen:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected get htmlCode(): string {
    const controlledAttrs = [
      ["isOpen", this.controlledProps["isOpen"]],
      ["disabled", this.controlledProps["disabled"]],
    ]
			.map(([name, value]) => '    ' + String(name) + '=&quot;' + String(value) + '&quot;')
      .join("\n");

    return `  &lt;ifx-search-bar
    value=&quot;true&quot;
    autocomplete=&quot;on&quot;
    (ifxInput)=&quot;handleInput(\$any(\$event))&quot;
    (ifxOpen)=&quot;handleOpen(\$any(\$event))&quot;
    __CONTROLLED_ATTRS__&gt;&lt;/ifx-search-bar&gt;`.replace("__CONTROLLED_ATTRS__", controlledAttrs);
  }
  protected isOpen = true;
  protected disabled = false;

  protected toggleIsOpen() { this.isOpen = !this.isOpen; }
  protected toggleDisabled() { this.disabled = !this.disabled; }

  protected get controlledProps(): Record<string, unknown> {
    return {
      "isOpen": this.isOpen,
      "disabled": this.disabled,
    };
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
