import { IfxButton, IfxTextarea } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-textarea-example',
  imports: [ IfxButton, IfxTextarea ],
  templateUrl: './ifx-textarea-example.html',
	styleUrl: './ifx-textarea-example.scss'
})
export class IfxTextareaExample {
  protected readonly tsCode = `import { IfxButton, IfxTextarea } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-textarea-example&#039;,
  imports: [ IfxButton, IfxTextarea ],
  templateUrl: &#039;./ifx-textarea-example.html&#039;,
	styleUrl: &#039;./ifx-textarea-example.scss&#039;
})
export class IfxTextareaExample {}`;
  protected get htmlCode(): string {
    const controlledAttrs = [
      ["disabled", this.controlledProps["disabled"]],
      ["error", this.controlledProps["error"]],
      ["required", this.controlledProps["required"]],
      ["readOnly", this.controlledProps["readOnly"]],
      ["resize", this.controlledProps["resize"]],
      ["wrap", this.controlledProps["wrap"]],
      ["fullWidth", this.controlledProps["fullWidth"]],
    ]
			.map(([name, value]) => '    ' + String(name) + '=&quot;' + String(value) + '&quot;')
      .join("\n");

    return `  &lt;ifx-textarea
    caption=&quot;Caption text, description, error notification&quot;
    cols=&quot;43&quot;
    label=&quot;Label Text&quot;
    name=&quot;textarea&quot;
    placeholder=&quot;Placeholder&quot;
    rows=&quot;5&quot;
    value=&quot;true&quot;
    __CONTROLLED_ATTRS__&gt;&lt;/ifx-textarea&gt;`.replace("__CONTROLLED_ATTRS__", controlledAttrs);
  }
  protected disabled = false;
  protected error = false;
  protected required = true;
  protected readOnly = false;
  protected readonly resizeOptions = ["both","vertical","horizontal","none"];
  protected resizeIndex = 0;
  protected readonly wrapOptions = ["soft","hard","off"];
  protected wrapIndex = 0;
  protected fullWidth = false;

  protected toggleDisabled() { this.disabled = !this.disabled; }
  protected toggleError() { this.error = !this.error; }
  protected toggleRequired() { this.required = !this.required; }
  protected toggleReadOnly() { this.readOnly = !this.readOnly; }
  protected toggleResize() { this.resizeIndex = (this.resizeIndex + 1) % this.resizeOptions.length; }
  protected toggleWrap() { this.wrapIndex = (this.wrapIndex + 1) % this.wrapOptions.length; }
  protected toggleFullWidth() { this.fullWidth = !this.fullWidth; }

  protected get controlledProps(): Record<string, unknown> {
    return {
      "disabled": this.disabled,
      "error": this.error,
      "required": this.required,
      "readOnly": this.readOnly,
      "resize": this.resizeOptions[this.resizeIndex],
      "wrap": this.wrapOptions[this.wrapIndex],
      "fullWidth": this.fullWidth,
    };
  }
}
