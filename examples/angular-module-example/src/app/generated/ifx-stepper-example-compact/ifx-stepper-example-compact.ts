import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-stepper-example-compact',
  templateUrl: './ifx-stepper-example-compact.html',
  styleUrl: './ifx-stepper-example-compact.scss',
  standalone: false
})
export class IfxStepperCompactExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-stepper-example-compact&#039;,
  templateUrl: &#039;./ifx-stepper-example-compact.html&#039;,
  styleUrl: &#039;./ifx-stepper-example-compact.scss&#039;,
  standalone: false
})
export class IfxStepperCompactExample {
  protected handleChange(event: CustomEvent) {
    console.log(&#039;ifxChange:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-stepper
    active-step=&quot;2&quot;
    aria-label=&quot;true&quot;
    aria-current=&quot;true&quot;
    indicator-position=&quot;left&quot;
    variant=&quot;compact&quot;&gt;
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
