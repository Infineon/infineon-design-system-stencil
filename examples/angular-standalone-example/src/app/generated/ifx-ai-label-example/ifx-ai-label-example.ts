import { IfxAiLabel, IfxButton } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-ai-label-example',
  imports: [ IfxAiLabel, IfxButton ],
  templateUrl: './ifx-ai-label-example.html',
	styleUrl: './ifx-ai-label-example.scss'
})
export class IfxAiLabelExample {
  protected readonly tsCode = `import { IfxAiLabel, IfxButton } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-ai-label-example&#039;,
  imports: [ IfxAiLabel, IfxButton ],
  templateUrl: &#039;./ifx-ai-label-example.html&#039;,
	styleUrl: &#039;./ifx-ai-label-example.scss&#039;
})
export class IfxAiLabelExample {}`;
  protected get htmlCode(): string {
    const controlledAttrs = [
      ["divider", this.controlledProps["divider"]],
      ["variant", this.controlledProps["variant"]],
    ]
			.map(([name, value]) => '    ' + String(name) + '=&quot;' + String(value) + '&quot;')
      .join("\n");

    return `  &lt;ifx-ai-label __CONTROLLED_ATTRS__&gt;&lt;/ifx-ai-label&gt;`.replace("__CONTROLLED_ATTRS__", controlledAttrs);
  }
  protected divider = true;
  protected readonly variantOptions = ["label","icon"];
  protected variantIndex = 0;

  protected toggleDivider() { this.divider = !this.divider; }
  protected toggleVariant() { this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length; }

  protected get controlledProps(): Record<string, unknown> {
    return {
      "divider": this.divider,
      "variant": this.variantOptions[this.variantIndex],
    };
  }
}
