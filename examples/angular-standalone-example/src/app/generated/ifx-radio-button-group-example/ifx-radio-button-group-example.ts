import { IfxButton, IfxRadioButton, IfxRadioButtonGroup } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-radio-button-group-example',
  imports: [ IfxButton, IfxRadioButton, IfxRadioButtonGroup ],
  templateUrl: './ifx-radio-button-group-example.html',
	styleUrl: './ifx-radio-button-group-example.scss'
})
export class IfxRadioButtonGroupExample {
  protected readonly tsCode = `import { IfxButton, IfxRadioButton, IfxRadioButtonGroup } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-radio-button-group-example&#039;,
  imports: [ IfxButton, IfxRadioButton, IfxRadioButtonGroup ],
  templateUrl: &#039;./ifx-radio-button-group-example.html&#039;,
	styleUrl: &#039;./ifx-radio-button-group-example.scss&#039;
})
export class IfxRadioButtonGroupExample {
  protected handleSetGroupError(event: CustomEvent) {
    console.log(&#039;setGroupError:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected get htmlCode(): string {
    const controlledAttrs = [
      ["alignment", this.controlledProps["alignment"]],
    ]
			.map(([name, value]) => '    ' + String(name) + '=&quot;' + String(value) + '&quot;')
      .join("\n");

    return `  &lt;ifx-radio-button-group
    group-label-text=&quot;Group Label&quot;
    caption-text=&quot;Caption text, description, error notification&quot;
    __CONTROLLED_ATTRS__&gt;
    &lt;ifx-radio-button
      value=&quot;0&quot;
      size=&quot;m&quot;&gt;Option 0&lt;/ifx-radio-button&gt;
    &lt;ifx-radio-button
      value=&quot;1&quot;
      size=&quot;m&quot;&gt;Option 1&lt;/ifx-radio-button&gt;
    &lt;ifx-radio-button
      value=&quot;2&quot;
      size=&quot;m&quot;&gt;Option 2&lt;/ifx-radio-button&gt;
  &lt;/ifx-radio-button-group&gt;`.replace("__CONTROLLED_ATTRS__", controlledAttrs);
  }
  protected readonly alignmentOptions = ["vertical","horizontal"];
  protected alignmentIndex = 0;

  protected toggleAlignment() { this.alignmentIndex = (this.alignmentIndex + 1) % this.alignmentOptions.length; }

  protected get controlledProps(): Record<string, unknown> {
    return {
      "alignment": this.alignmentOptions[this.alignmentIndex],
    };
  }

  protected handleSetGroupError(event: CustomEvent) {
    console.log('setGroupError:', event);
    // Add your handler logic here
  }
}
