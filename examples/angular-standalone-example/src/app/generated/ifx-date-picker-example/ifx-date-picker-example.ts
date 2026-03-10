import { IfxButton, IfxDatePicker } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-date-picker-example',
  imports: [ IfxButton, IfxDatePicker ],
  templateUrl: './ifx-date-picker-example.html',
	styleUrl: './ifx-date-picker-example.scss'
})
export class IfxDatePickerExample {
  protected readonly tsCode = `import { IfxButton, IfxDatePicker } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-date-picker-example&#039;,
  imports: [ IfxButton, IfxDatePicker ],
  templateUrl: &#039;./ifx-date-picker-example.html&#039;,
	styleUrl: &#039;./ifx-date-picker-example.scss&#039;
})
export class IfxDatePickerExample {
  protected handleDate(event: CustomEvent) {
    console.log(&#039;ifxDate:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected get htmlCode(): string {
    const controlledAttrs = [
      ["disabled", this.controlledProps["disabled"]],
      ["success", this.controlledProps["success"]],
      ["error", this.controlledProps["error"]],
      ["size", this.controlledProps["size"]],
      ["required", this.controlledProps["required"]],
      ["type", this.controlledProps["type"]],
    ]
			.map(([name, value]) => '    ' + String(name) + '=&quot;' + String(value) + '&quot;')
      .join("\n");

    return `  &lt;ifx-date-picker
    name=&quot;date-picker&quot;
    value=&quot;true&quot;
    max=&quot;true&quot;
    min=&quot;true&quot;
    label=&quot;Label Text&quot;
    caption=&quot;Caption text, description, error notification.&quot;
    aria-label-text=&quot;Date Picker&quot;
    autocomplete=&quot;on&quot;
    (ifxDate)=&quot;handleDate(\$any(\$event))&quot;
    __CONTROLLED_ATTRS__&gt;&lt;/ifx-date-picker&gt;`.replace("__CONTROLLED_ATTRS__", controlledAttrs);
  }
  protected disabled = false;
  protected success = false;
  protected error = false;
  protected readonly sizeOptions = ["s","l"];
  protected sizeIndex = 0;
  protected required = false;
  protected readonly typeOptions = ["date","datetime-local"];
  protected typeIndex = 0;

  protected toggleDisabled() { this.disabled = !this.disabled; }
  protected toggleSuccess() { this.success = !this.success; }
  protected toggleError() { this.error = !this.error; }
  protected toggleSize() { this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length; }
  protected toggleRequired() { this.required = !this.required; }
  protected toggleType() { this.typeIndex = (this.typeIndex + 1) % this.typeOptions.length; }

  protected get controlledProps(): Record<string, unknown> {
    return {
      "disabled": this.disabled,
      "success": this.success,
      "error": this.error,
      "size": this.sizeOptions[this.sizeIndex],
      "required": this.required,
      "type": this.typeOptions[this.typeIndex],
    };
  }

  protected handleDate(event: CustomEvent) {
    console.log('ifxDate:', event);
    // Add your handler logic here
  }
}
