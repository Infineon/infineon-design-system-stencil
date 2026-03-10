import { IfxButton, IfxSelect } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-select-example',
  imports: [ IfxButton, IfxSelect ],
  templateUrl: './ifx-select-example.html',
	styleUrl: './ifx-select-example.scss'
})
export class IfxSelectExample {
  protected readonly tsCode = `import { IfxButton, IfxSelect } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-select-example&#039;,
  imports: [ IfxButton, IfxSelect ],
  templateUrl: &#039;./ifx-select-example.html&#039;,
	styleUrl: &#039;./ifx-select-example.scss&#039;
})
export class IfxSelectExample {
  protected handleSelect(event: CustomEvent) {
    console.log(&#039;ifxSelect:&#039;, event);
    // Add your handler logic here
  }

  protected handleInput(event: CustomEvent) {
    console.log(&#039;ifxInput:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected get htmlCode(): string {
    const controlledAttrs = [
      ["size", this.controlledProps["size"]],
      ["placeholder", this.controlledProps["placeholder"]],
      ["error", this.controlledProps["error"]],
      ["disabled", this.controlledProps["disabled"]],
      ["required", this.controlledProps["required"]],
      ["showSearch", this.controlledProps["showSearch"]],
      ["showClearButton", this.controlledProps["showClearButton"]],
    ]
			.map(([name, value]) => '    ' + String(name) + '=&quot;' + String(value) + '&quot;')
      .join("\n");

    return `  &lt;ifx-select
    search-placeholder-value=&quot;Search...&quot;
    label=&quot;true&quot;
    caption=&quot;true&quot;
    placeholder-value=&quot;Placeholder&quot;
    options=&#039;[{&quot;value&quot;:&quot;a&quot;,&quot;label&quot;:&quot;option a&quot;,&quot;selected&quot;:false},{&quot;value&quot;:&quot;b&quot;,&quot;label&quot;:&quot;option b&quot;,&quot;selected&quot;:false},{&quot;value&quot;:&quot;c&quot;,&quot;label&quot;:&quot;option c&quot;,&quot;selected&quot;:false}]&#039;
    (ifxSelect)=&quot;handleSelect(\$any(\$event))&quot;
    (ifxInput)=&quot;handleInput(\$any(\$event))&quot;
    __CONTROLLED_ATTRS__&gt;&lt;/ifx-select&gt;`.replace("__CONTROLLED_ATTRS__", controlledAttrs);
  }
  protected readonly sizeOptions = ["s","m"];
  protected sizeIndex = 1;
  protected placeholder = true;
  protected error = false;
  protected disabled = false;
  protected required = true;
  protected showSearch = true;
  protected showClearButton = true;

  protected toggleSize() { this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length; }
  protected togglePlaceholder() { this.placeholder = !this.placeholder; }
  protected toggleError() { this.error = !this.error; }
  protected toggleDisabled() { this.disabled = !this.disabled; }
  protected toggleRequired() { this.required = !this.required; }
  protected toggleShowSearch() { this.showSearch = !this.showSearch; }
  protected toggleShowClearButton() { this.showClearButton = !this.showClearButton; }

  protected get controlledProps(): Record<string, unknown> {
    return {
      "size": this.sizeOptions[this.sizeIndex],
      "placeholder": this.placeholder,
      "error": this.error,
      "disabled": this.disabled,
      "required": this.required,
      "showSearch": this.showSearch,
      "showClearButton": this.showClearButton,
    };
  }

  protected handleSelect(event: CustomEvent) {
    console.log('ifxSelect:', event);
    // Add your handler logic here
  }

  protected handleInput(event: CustomEvent) {
    console.log('ifxInput:', event);
    // Add your handler logic here
  }
}
