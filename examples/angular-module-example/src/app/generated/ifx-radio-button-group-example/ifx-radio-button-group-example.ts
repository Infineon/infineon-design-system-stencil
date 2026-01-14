import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-radio-button-group-example',
  templateUrl: './ifx-radio-button-group-example.html',
  styleUrl: './ifx-radio-button-group-example.scss',
  standalone: false
})
export class IfxRadioButtonGroupExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-radio-button-group-example&#039;,
  templateUrl: &#039;./ifx-radio-button-group-example.html&#039;,
  styleUrl: &#039;./ifx-radio-button-group-example.scss&#039;,
  standalone: false
})
export class IfxRadioButtonGroupExample {
  protected handleSetGroupError(event: CustomEvent) {
    console.log(&#039;setGroupError:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-radio-button-group
    alignment=&quot;vertical&quot;
    show-group-label=&quot;false&quot;
    group-label-text=&quot;Group Label&quot;
    show-caption=&quot;false&quot;
    caption-text=&quot;Caption text, description, error notification&quot;
    show-caption-icon=&quot;false&quot;
    required=&quot;false&quot;&gt;
    &lt;ifx-radio-button
      value=&quot;0&quot;
      disabled=&quot;false&quot;
      checked=&quot;false&quot;
      error=&quot;false&quot;
      size=&quot;m&quot;&gt;
      Option 0
    &lt;/ifx-radio-button&gt;
    &lt;ifx-radio-button
      value=&quot;1&quot;
      size=&quot;m&quot;&gt;
      Option 1
    &lt;/ifx-radio-button&gt;
    &lt;ifx-radio-button
      value=&quot;2&quot;
      size=&quot;m&quot;&gt;
      Option 2
    &lt;/ifx-radio-button&gt;
  &lt;/ifx-radio-button-group&gt;`;

  protected handleSetGroupError(event: CustomEvent) {
    console.log('setGroupError:', event);
    // Add your handler logic here
  }
}
