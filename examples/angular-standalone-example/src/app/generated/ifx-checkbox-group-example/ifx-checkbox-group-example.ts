import { IfxButton, IfxCheckbox, IfxCheckboxGroup } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-checkbox-group-example',
  imports: [ IfxButton, IfxCheckbox, IfxCheckboxGroup ],
  templateUrl: './ifx-checkbox-group-example.html',
	styleUrl: './ifx-checkbox-group-example.scss'
})
export class IfxCheckboxGroupExample {
  protected readonly tsCode = `import { IfxButton, IfxCheckbox, IfxCheckboxGroup } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-checkbox-group-example&#039;,
  imports: [ IfxButton, IfxCheckbox, IfxCheckboxGroup ],
  templateUrl: &#039;./ifx-checkbox-group-example.html&#039;,
	styleUrl: &#039;./ifx-checkbox-group-example.scss&#039;
})
export class IfxCheckboxGroupExample {
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

    return `  &lt;ifx-checkbox-group
    group-label-text=&quot;Group Label&quot;
    caption-text=&quot;Caption text, description, error notification&quot;
    __CONTROLLED_ATTRS__&gt;
    &lt;ifx-checkbox
      value=&quot;0&quot;
      size=&quot;m&quot;&gt;Option 0&lt;/ifx-checkbox&gt;
    &lt;ifx-checkbox
      value=&quot;1&quot;
      size=&quot;m&quot;&gt;Option 1&lt;/ifx-checkbox&gt;
    &lt;ifx-checkbox
      value=&quot;2&quot;
      size=&quot;m&quot;&gt;Option 2&lt;/ifx-checkbox&gt;
  &lt;/ifx-checkbox-group&gt;`.replace("__CONTROLLED_ATTRS__", controlledAttrs);
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
