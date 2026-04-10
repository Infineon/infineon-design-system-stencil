import { IfxTextField } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-text-field-example',
  imports: [ IfxTextField ],
  templateUrl: './ifx-text-field-example.html',
	styleUrl: './ifx-text-field-example.scss'
})
export class IfxTextFieldExample {
  protected readonly tsCode = `import { IfxTextField } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-text-field-example&#039;,
  imports: [ IfxTextField ],
  templateUrl: &#039;./ifx-text-field-example.html&#039;,
	styleUrl: &#039;./ifx-text-field-example.scss&#039;
})
export class IfxTextFieldExample {
  protected handleInput(event: CustomEvent) {
    console.log(&#039;ifxInput:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-text-field
    [error]=&quot;false&quot;
    size=&quot;m&quot;
    icon=&quot;&quot;
    [success]=&quot;false&quot;
    placeholder=&quot;Placeholder&quot;
    [readOnly]=&quot;false&quot;
    caption=&quot;Caption&quot;
    label=&quot;Label&quot;
    [required]=&quot;true&quot;
    name=&quot;text-field&quot;
    [showDeleteIcon]=&quot;false&quot;
    value=&quot;&quot;
    autocomplete=&quot;on&quot;
    type=&quot;text&quot;
    internal-id=&quot;text-field&quot;
    aria-label=&quot;text field for user input&quot;
    [disabled]=&quot;false&quot;
    maxlength=&quot;&quot;
    (ifxInput)=&quot;handleInput(\$any(\$event))&quot;&gt;&lt;/ifx-text-field&gt;`;

  protected handleInput(event: CustomEvent) {
    console.log('ifxInput:', event);
    // Add your handler logic here
  }
}
