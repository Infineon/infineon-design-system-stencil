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
      ["size", this.controlledProps["size"]],
      ["showGroupLabel", this.controlledProps["showGroupLabel"]],
      ["showCaption", this.controlledProps["showCaption"]],
      ["showCaptionIcon", this.controlledProps["showCaptionIcon"]],
      ["required", this.controlledProps["required"]],
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
  protected readonly sizeOptions = ["s","m"];
  protected sizeIndex = 1;
  protected showGroupLabel = false;
  protected showCaption = false;
  protected showCaptionIcon = false;
  protected required = false;

  protected toggleAlignment() { this.alignmentIndex = (this.alignmentIndex + 1) % this.alignmentOptions.length; }
  protected toggleSize() { this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length; }
  protected toggleShowGroupLabel() { this.showGroupLabel = !this.showGroupLabel; }
  protected toggleShowCaption() { this.showCaption = !this.showCaption; }
  protected toggleShowCaptionIcon() { this.showCaptionIcon = !this.showCaptionIcon; }
  protected toggleRequired() { this.required = !this.required; }

  protected get controlledProps(): Record<string, unknown> {
    return {
      "alignment": this.alignmentOptions[this.alignmentIndex],
      "size": this.sizeOptions[this.sizeIndex],
      "showGroupLabel": this.showGroupLabel,
      "showCaption": this.showCaption,
      "showCaptionIcon": this.showCaptionIcon,
      "required": this.required,
    };
  }

  protected handleSetGroupError(event: CustomEvent) {
    console.log('setGroupError:', event);
    // Add your handler logic here
  }
}
