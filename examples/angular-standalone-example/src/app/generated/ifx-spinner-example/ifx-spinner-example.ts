import { IfxButton, IfxSpinner } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-spinner-example',
  imports: [ IfxButton, IfxSpinner ],
  templateUrl: './ifx-spinner-example.html',
	styleUrl: './ifx-spinner-example.scss'
})
export class IfxSpinnerExample {
  protected readonly tsCode = `import { IfxButton, IfxSpinner } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-spinner-example&#039;,
  imports: [ IfxButton, IfxSpinner ],
  templateUrl: &#039;./ifx-spinner-example.html&#039;,
	styleUrl: &#039;./ifx-spinner-example.scss&#039;
})
export class IfxSpinnerExample {}`;
  protected get htmlCode(): string {
    const controlledAttrs = [
      ["size", this.controlledProps["size"]],
      ["variant", this.controlledProps["variant"]],
      ["inverted", this.controlledProps["inverted"]],
    ]
			.map(([name, value]) => '    ' + String(name) + '=&quot;' + String(value) + '&quot;')
      .join("\n");

    return `  &lt;ifx-spinner
    aria-label=&quot;true&quot;
    __CONTROLLED_ATTRS__&gt;&lt;/ifx-spinner&gt;`.replace("__CONTROLLED_ATTRS__", controlledAttrs);
  }
  protected readonly sizeOptions = ["s","m"];
  protected sizeIndex = 1;
  protected readonly variantOptions = ["default","brand"];
  protected variantIndex = 0;
  protected inverted = false;

  protected toggleSize() { this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length; }
  protected toggleVariant() { this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length; }
  protected toggleInverted() { this.inverted = !this.inverted; }

  protected get controlledProps(): Record<string, unknown> {
    return {
      "size": this.sizeOptions[this.sizeIndex],
      "variant": this.variantOptions[this.variantIndex],
      "inverted": this.inverted,
    };
  }
}
