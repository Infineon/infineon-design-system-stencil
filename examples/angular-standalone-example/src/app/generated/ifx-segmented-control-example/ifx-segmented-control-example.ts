import { IfxButton, IfxSegment, IfxSegmentedControl } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-segmented-control-example',
  imports: [ IfxButton, IfxSegment, IfxSegmentedControl ],
  templateUrl: './ifx-segmented-control-example.html',
	styleUrl: './ifx-segmented-control-example.scss'
})
export class IfxSegmentedControlExample {
  protected readonly tsCode = `import { IfxButton, IfxSegment, IfxSegmentedControl } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-segmented-control-example&#039;,
  imports: [ IfxButton, IfxSegment, IfxSegmentedControl ],
  templateUrl: &#039;./ifx-segmented-control-example.html&#039;,
	styleUrl: &#039;./ifx-segmented-control-example.scss&#039;
})
export class IfxSegmentedControlExample {}`;
  protected get htmlCode(): string {
    const controlledAttrs = [
      ["size", this.controlledProps["size"]],
      ["error", this.controlledProps["error"]],
      ["required", this.controlledProps["required"]],
    ]
			.map(([name, value]) => '    ' + String(name) + '=&quot;' + String(value) + '&quot;')
      .join("\n");

    return `  &lt;ifx-segmented-control
    caption=&quot;Caption text to describe the controls&quot;
    label=&quot;Group Label&quot;
    __CONTROLLED_ATTRS__&gt;
    &lt;ifx-segment
      value=&quot;Value1&quot;
      icon=&quot;star-16&quot;&gt;&lt;/ifx-segment&gt;
    &lt;ifx-segment
      value=&quot;Value2&quot;
      icon=&quot;star-16&quot;&gt;&lt;/ifx-segment&gt;
    &lt;ifx-segment
      value=&quot;Value3&quot;
      icon=&quot;star-16&quot;&gt;&lt;/ifx-segment&gt;
    &lt;ifx-segment
      value=&quot;Value4&quot;
      icon=&quot;star-16&quot;&gt;&lt;/ifx-segment&gt;
    &lt;ifx-segment
      value=&quot;Value5&quot;
      icon=&quot;star-16&quot;&gt;&lt;/ifx-segment&gt;
  &lt;/ifx-segmented-control&gt;`.replace("__CONTROLLED_ATTRS__", controlledAttrs);
  }
  protected readonly sizeOptions = ["regular","small"];
  protected sizeIndex = 0;
  protected error = false;
  protected required = false;

  protected toggleSize() { this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length; }
  protected toggleError() { this.error = !this.error; }
  protected toggleRequired() { this.required = !this.required; }

  protected get controlledProps(): Record<string, unknown> {
    return {
      "size": this.sizeOptions[this.sizeIndex],
      "error": this.error,
      "required": this.required,
    };
  }
}
