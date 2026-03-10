import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-text-field-example',
  templateUrl: './ifx-text-field-example.html',
  styleUrl: './ifx-text-field-example.scss',
  standalone: false
})
export class IfxTextFieldExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-text-field-example&#039;,
  templateUrl: &#039;./ifx-text-field-example.html&#039;,
  styleUrl: &#039;./ifx-text-field-example.scss&#039;,
  standalone: false
})
export class IfxTextFieldExample {
  protected handleInput(event: CustomEvent) {
    console.log(&#039;ifxInput:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-text-field
    placeholder=&quot;Placeholder&quot;
    caption=&quot;Caption&quot;
    label=&quot;Label&quot;
    name=&quot;text-field&quot;
    value=&quot;true&quot;
    autocomplete=&quot;on&quot;
    internal-id=&quot;text-field&quot;
    aria-label=&quot;text field for user input&quot;
    maxlength=&quot;true&quot;
    (ifxInput)=&quot;handleInput(\$any(\$event))&quot;
    error=&quot;{{ controlledProps[&#039;error&#039;] }}&quot;
    disabled=&quot;{{ controlledProps[&#039;disabled&#039;] }}&quot;
    size=&quot;{{ controlledProps[&#039;size&#039;] }}&quot;
    icon=&quot;{{ controlledProps[&#039;icon&#039;] }}&quot;
    success=&quot;{{ controlledProps[&#039;success&#039;] }}&quot;
    readOnly=&quot;{{ controlledProps[&#039;readOnly&#039;] }}&quot;
    required=&quot;{{ controlledProps[&#039;required&#039;] }}&quot;
    showDeleteIcon=&quot;{{ controlledProps[&#039;showDeleteIcon&#039;] }}&quot;
    type=&quot;{{ controlledProps[&#039;type&#039;] }}&quot;&gt;&lt;/ifx-text-field&gt;`;

  protected handleInput(event: CustomEvent) {
    console.log('ifxInput:', event);
    // Add your handler logic here
  }
}
