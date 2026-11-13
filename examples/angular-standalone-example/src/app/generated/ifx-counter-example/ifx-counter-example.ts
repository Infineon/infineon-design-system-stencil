import { IfxCounter } from '@infineon/design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-counter-example',
  imports: [ IfxCounter ],
  templateUrl: './ifx-counter-example.html',
	styleUrl: './ifx-counter-example.scss'
})
export class IfxCounterExample {
  protected readonly tsCode = `import { IfxCounter } from &#039;@infineon/design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-counter-example&#039;,
  imports: [ IfxCounter ],
  templateUrl: &#039;./ifx-counter-example.html&#039;,
	styleUrl: &#039;./ifx-counter-example.scss&#039;
})
export class IfxCounterExample {
  protected handleChange(event: CustomEvent) {
    console.log(&#039;ifxChange:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-counter
    name=&quot;&quot;
    value=&quot;0&quot;
    (ifxChange)=&quot;handleChange(\$any(\$event))&quot;&gt;&lt;/ifx-counter&gt;`;

  protected handleChange(event: CustomEvent) {
    console.log('ifxChange:', event);
    // Add your handler logic here
  }
}
