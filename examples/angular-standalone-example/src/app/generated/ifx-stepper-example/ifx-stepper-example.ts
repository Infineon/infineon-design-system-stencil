import { IfxStep, IfxStepper } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-stepper-example',
  imports: [ IfxStep, IfxStepper ],
  templateUrl: './ifx-stepper-example.html',
  styleUrl: './ifx-stepper-example.scss'
})
export class IfxStepperExample {
  protected readonly tsCode = `import { IfxStep, IfxStepper } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-stepper-example&#039;,
  imports: [ IfxStep, IfxStepper ],
  templateUrl: &#039;./ifx-stepper-example.html&#039;,
  styleUrl: &#039;./ifx-stepper-example.scss&#039;
})
export class IfxStepperExample {
  protected handleChange(event: CustomEvent) {
    console.log(&#039;ifxChange:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-stepper
    active-step=&quot;2&quot;
    aria-label=&quot;true&quot;
    aria-current=&quot;true&quot;
    show-step-number=&quot;false&quot;
    variant=&quot;default&quot;&gt;
    &lt;ifx-step&gt;Step Label 1&lt;/ifx-step&gt;
    &lt;ifx-step&gt;Step Label 2&lt;/ifx-step&gt;
    &lt;ifx-step&gt;Step Label 3&lt;/ifx-step&gt;
    &lt;ifx-step&gt;Step Label 4&lt;/ifx-step&gt;
    &lt;ifx-step&gt;Step Label 5&lt;/ifx-step&gt;
  &lt;/ifx-stepper&gt;`;

  protected handleChange(event: CustomEvent) {
    console.log('ifxChange:', event);
    // Add your handler logic here
  }
}
