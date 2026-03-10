import { IfxButton, IfxStep, IfxStepper } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-stepper-example-compact',
  imports: [ IfxButton, IfxStep, IfxStepper ],
  templateUrl: './ifx-stepper-example-compact.html',
	styleUrl: './ifx-stepper-example-compact.scss'
})
export class IfxStepperCompactExample {
  protected readonly tsCode = `import { IfxButton, IfxStep, IfxStepper } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-stepper-example-compact&#039;,
  imports: [ IfxButton, IfxStep, IfxStepper ],
  templateUrl: &#039;./ifx-stepper-example-compact.html&#039;,
	styleUrl: &#039;./ifx-stepper-example-compact.scss&#039;
})
export class IfxStepperCompactExample {
  protected handleChange(event: CustomEvent) {
    console.log(&#039;ifxChange:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected get htmlCode(): string {
    const controlledAttrs = [
      ["indicatorPosition", this.controlledProps["indicatorPosition"]],
      ["showStepNumber", this.controlledProps["showStepNumber"]],
      ["variant", this.controlledProps["variant"]],
    ]
			.map(([name, value]) => '    ' + String(name) + '=&quot;' + String(value) + '&quot;')
      .join("\n");

    return `  &lt;ifx-stepper
    active-step=&quot;2&quot;
    aria-label=&quot;true&quot;
    aria-current=&quot;true&quot;
    __CONTROLLED_ATTRS__&gt;
    &lt;ifx-step&gt;Step Label 1&lt;/ifx-step&gt;
    &lt;ifx-step&gt;Step Label 2&lt;/ifx-step&gt;
    &lt;ifx-step&gt;Step Label 3&lt;/ifx-step&gt;
    &lt;ifx-step&gt;Step Label 4&lt;/ifx-step&gt;
    &lt;ifx-step&gt;Step Label 5&lt;/ifx-step&gt;
  &lt;/ifx-stepper&gt;`.replace("__CONTROLLED_ATTRS__", controlledAttrs);
  }
  protected readonly indicatorPositionOptions = ["left","right"];
  protected indicatorPositionIndex = 0;
  protected showStepNumber = false;
  protected readonly variantOptions = ["default","compact","vertical"];
  protected variantIndex = 1;

  protected toggleIndicatorPosition() { this.indicatorPositionIndex = (this.indicatorPositionIndex + 1) % this.indicatorPositionOptions.length; }
  protected toggleShowStepNumber() { this.showStepNumber = !this.showStepNumber; }
  protected toggleVariant() { this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length; }

  protected get controlledProps(): Record<string, unknown> {
    return {
      "indicatorPosition": this.indicatorPositionOptions[this.indicatorPositionIndex],
      "showStepNumber": this.showStepNumber,
      "variant": this.variantOptions[this.variantIndex],
    };
  }

  protected handleChange(event: CustomEvent) {
    console.log('ifxChange:', event);
    // Add your handler logic here
  }
}
