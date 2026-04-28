import { IfxButton, IfxStep, IfxStepper, IfxTextField } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-stepper-example-compact',
  imports: [ IfxButton, IfxStep, IfxStepper, IfxTextField ],
  templateUrl: './ifx-stepper-example-compact.html',
  styleUrl: './ifx-stepper-example-compact.scss'
})
export class IfxStepperCompactExample {
  protected readonly tsCode = `import { IfxButton, IfxStep, IfxStepper, IfxTextField } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-stepper-example-compact',
  imports: [ IfxButton, IfxStep, IfxStepper, IfxTextField ],
  templateUrl: './ifx-stepper-example-compact.html',
  styleUrl: './ifx-stepper-example-compact.scss'
})
export class IfxStepperCompactExample {

  protected activeStep = 2;
  protected readonly indicatorPositionOptions = ["left","right"];
  protected indicatorPositionIndex = 0;
  protected showStepNumber = false;
  protected readonly variantOptions = ["default","compact","vertical"];
  protected variantIndex = 1;
  protected ariaLabelText = "";
  protected ariaCurrentText = "";

  protected updateActiveStep(value: string) {
    this.activeStep = Number(value);
  }

  protected toggleIndicatorPosition() {
    this.indicatorPositionIndex = (this.indicatorPositionIndex + 1) % this.indicatorPositionOptions.length;
  }

  protected toggleShowStepNumber() {
    this.showStepNumber = !this.showStepNumber;
  }

  protected toggleVariant() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
  }

  protected updateAriaLabelText(value: string) {
    this.ariaLabelText = value;
  }

  protected updateAriaCurrentText(value: string) {
    this.ariaCurrentText = value;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

  protected handleChange(event: CustomEvent) {
    console.log('ifxChange:', event);
    // Add your handler logic here
  }

}`;
  protected readonly htmlCode = `  &lt;ifx-stepper
    [activeStep]=&quot;activeStep&quot;
    [ariaLabelText]=&quot;ariaLabelText&quot;
    [ariaCurrentText]=&quot;ariaCurrentText&quot;
    [indicatorPosition]=&quot;indicatorPositionOptions[indicatorPositionIndex]&quot;
    [variant]=&quot;variantOptions[variantIndex]&quot;
    [showStepNumber]=&quot;showStepNumber&quot;&gt;
    &lt;ifx-step&gt;Step Label 1&lt;/ifx-step&gt;
    &lt;ifx-step&gt;Step Label 2&lt;/ifx-step&gt;
    &lt;ifx-step&gt;Step Label 3&lt;/ifx-step&gt;
    &lt;ifx-step&gt;Step Label 4&lt;/ifx-step&gt;
    &lt;ifx-step&gt;Step Label 5&lt;/ifx-step&gt;
  &lt;/ifx-stepper&gt;`;

  protected activeStep = 2;
  protected readonly indicatorPositionOptions = ["left","right"];
  protected indicatorPositionIndex = 0;
  protected showStepNumber = false;
  protected readonly variantOptions = ["default","compact","vertical"];
  protected variantIndex = 1;
  protected ariaLabelText = "";
  protected ariaCurrentText = "";

  protected updateActiveStep(value: string) {
    this.activeStep = Number(value);
  }

  protected toggleIndicatorPosition() {
    this.indicatorPositionIndex = (this.indicatorPositionIndex + 1) % this.indicatorPositionOptions.length;
  }

  protected toggleShowStepNumber() {
    this.showStepNumber = !this.showStepNumber;
  }

  protected toggleVariant() {
    this.variantIndex = (this.variantIndex + 1) % this.variantOptions.length;
  }

  protected updateAriaLabelText(value: string) {
    this.ariaLabelText = value;
  }

  protected updateAriaCurrentText(value: string) {
    this.ariaCurrentText = value;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

  protected handleChange(event: CustomEvent) {
    console.log('ifxChange:', event);
    // Add your handler logic here
  }

}