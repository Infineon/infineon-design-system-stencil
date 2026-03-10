import { IfxButton, IfxIndicator } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-indicator-example',
  imports: [ IfxButton, IfxIndicator ],
  templateUrl: './ifx-indicator-example.html',
	styleUrl: './ifx-indicator-example.scss'
})
export class IfxIndicatorExample {
  protected readonly tsCode = `import { IfxButton, IfxIndicator } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-indicator-example&#039;,
  imports: [ IfxButton, IfxIndicator ],
  templateUrl: &#039;./ifx-indicator-example.html&#039;,
	styleUrl: &#039;./ifx-indicator-example.scss&#039;
})
export class IfxIndicatorExample {}`;
  protected get htmlCode(): string {
    const controlledAttrs = [
      ["variant", this.controlledProps["variant"]],
      ["inverted", this.controlledProps["inverted"]],
    ]
			.map(([name, value]) => '    ' + String(name) + '=&quot;' + String(value) + '&quot;')
      .join("\n");

    return `  &lt;ifx-indicator
    number=&quot;1&quot;
    __CONTROLLED_ATTRS__&gt;&lt;/ifx-indicator&gt;`.replace("__CONTROLLED_ATTRS__", controlledAttrs);
  }
  protected readonly variantOptions = ["number","dot"];
  protected variantIndex = 0;
  protected inverted = false;

  protected toggleVariant() { this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length; }
  protected toggleInverted() { this.inverted = !this.inverted; }

  protected get controlledProps(): Record<string, unknown> {
    return {
      "variant": this.variantOptions[this.variantIndex],
      "inverted": this.inverted,
    };
  }
}
