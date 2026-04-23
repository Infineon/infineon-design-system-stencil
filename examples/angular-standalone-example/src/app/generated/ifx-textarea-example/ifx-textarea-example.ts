import { IfxTextarea } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-textarea-example',
  imports: [ IfxTextarea ],
  templateUrl: './ifx-textarea-example.html',
	styleUrl: './ifx-textarea-example.scss'
})
export class IfxTextareaExample {
  protected readonly tsCode = `import { IfxButton, IfxTextarea } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-textarea-example&#039;,
  imports: [ IfxTextarea ],
  templateUrl: &#039;./ifx-textarea-example.html&#039;,
	styleUrl: &#039;./ifx-textarea-example.scss&#039;
})
export class IfxTextareaExample {
  protected handleInput(event: CustomEvent) {
    console.log(&#039;ifxInput:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-textarea
    caption=&quot;Caption text, description, error notification&quot;
    cols=&quot;43&quot;
    [error]=&quot;false&quot;
    label=&quot;Label Text&quot;
    name=&quot;textarea&quot;
    placeholder=&quot;Placeholder&quot;
    [required]=&quot;true&quot;
    [readOnly]=&quot;false&quot;
    resize=&quot;both&quot;
    rows=&quot;5&quot;
    value=&quot;&quot;
    wrap=&quot;soft&quot;
    full-width=&quot;false&quot;
    [disabled]=&quot;false&quot;
    (ifxInput)=&quot;handleInput(\$any(\$event))&quot;&gt;&lt;/ifx-textarea&gt;`;

  protected handleInput(event: CustomEvent) {
    console.log('ifxInput:', event);
    // Add your handler logic here
  }
}
