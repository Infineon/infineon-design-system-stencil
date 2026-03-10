import { IfxButton, IfxCheckbox } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-checkbox-example',
  imports: [ IfxButton, IfxCheckbox ],
  templateUrl: './ifx-checkbox-example.html',
	styleUrl: './ifx-checkbox-example.scss'
})
export class IfxCheckboxExample {
  protected readonly tsCode = `import { IfxButton, IfxCheckbox } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-checkbox-example&#039;,
  imports: [ IfxButton, IfxCheckbox ],
  templateUrl: &#039;./ifx-checkbox-example.html&#039;,
	styleUrl: &#039;./ifx-checkbox-example.scss&#039;
})
export class IfxCheckboxExample {
  protected handleChange(event: CustomEvent) {
    console.log(&#039;ifxChange:&#039;, event);
    // Add your handler logic here
  }

  protected handleError(event: CustomEvent) {
    console.log(&#039;ifxError:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected get htmlCode(): string {
    const controlledAttrs = [
      ["error", this.controlledProps["error"]],
      ["disabled", this.controlledProps["disabled"]],
      ["checked", this.controlledProps["checked"]],
      ["indeterminate", this.controlledProps["indeterminate"]],
      ["size", this.controlledProps["size"]],
    ]
			.map(([name, value]) => '    ' + String(name) + '=&quot;' + String(value) + '&quot;')
      .join("\n");

    return `  &lt;ifx-checkbox
    name=&quot;checkbox&quot;
    (ifxChange)=&quot;handleChange(\$any(\$event))&quot;
    (ifxError)=&quot;handleError(\$any(\$event))&quot;
    __CONTROLLED_ATTRS__&gt;Text&lt;/ifx-checkbox&gt;`.replace("__CONTROLLED_ATTRS__", controlledAttrs);
  }
  protected error = false;
  protected disabled = false;
  protected checked = false;
  protected indeterminate = false;
  protected readonly sizeOptions = ["s","m"];
  protected sizeIndex = 0;

  protected toggleError() { this.error = !this.error; }
  protected toggleDisabled() { this.disabled = !this.disabled; }
  protected toggleChecked() { this.checked = !this.checked; }
  protected toggleIndeterminate() { this.indeterminate = !this.indeterminate; }
  protected toggleSize() { this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length; }

  protected get controlledProps(): Record<string, unknown> {
    return {
      "error": this.error,
      "disabled": this.disabled,
      "checked": this.checked,
      "indeterminate": this.indeterminate,
      "size": this.sizeOptions[this.sizeIndex],
    };
  }

  protected handleChange(event: CustomEvent) {
    console.log('ifxChange:', event);
    // Add your handler logic here
  }

  protected handleError(event: CustomEvent) {
    console.log('ifxError:', event);
    // Add your handler logic here
  }
}
