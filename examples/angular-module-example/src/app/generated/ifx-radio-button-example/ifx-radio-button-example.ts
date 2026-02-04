import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-radio-button-example',
  templateUrl: './ifx-radio-button-example.html',
  styleUrl: './ifx-radio-button-example.scss',
  standalone: false
})
export class IfxRadioButtonExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-radio-button-example&#039;,
  templateUrl: &#039;./ifx-radio-button-example.html&#039;,
  styleUrl: &#039;./ifx-radio-button-example.scss&#039;,
  standalone: false
})
export class IfxRadioButtonExample {
  protected handleChange(event: CustomEvent) {
    console.log(&#039;ifxChange:&#039;, event);
    // Add your handler logic here
  }

  protected handleError(event: CustomEvent) {
    console.log(&#039;ifxError:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-radio-button
    size=&quot;s&quot;
    name=&quot;radio-button&quot;
    value=&quot;radio&quot;
    (ifxChange)=&quot;handleChange(\$any(\$event))&quot;
    (ifxError)=&quot;handleError(\$any(\$event))&quot;&gt;Text&lt;/ifx-radio-button&gt;`;

  protected handleChange(event: CustomEvent) {
    console.log('ifxChange:', event);
    // Add your handler logic here
  }

  protected handleError(event: CustomEvent) {
    console.log('ifxError:', event);
    // Add your handler logic here
  }
}
