import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-checkbox-group-example',
  templateUrl: './ifx-checkbox-group-example.html',
  styleUrl: './ifx-checkbox-group-example.scss',
  standalone: false
})
export class IfxCheckboxGroupExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-checkbox-group-example&#039;,
  templateUrl: &#039;./ifx-checkbox-group-example.html&#039;,
  styleUrl: &#039;./ifx-checkbox-group-example.scss&#039;,
  standalone: false
})
export class IfxCheckboxGroupExample {
  protected handleSetGroupError(event: CustomEvent) {
    console.log(&#039;setGroupError:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-checkbox-group
    alignment=&quot;vertical&quot;
    group-label-text=&quot;Group Label&quot;
    caption-text=&quot;Caption text, description, error notification&quot;&gt;
    &lt;ifx-checkbox
      value=&quot;0&quot;
      size=&quot;m&quot;&gt;Option 0&lt;/ifx-checkbox&gt;
    &lt;ifx-checkbox
      value=&quot;1&quot;
      size=&quot;m&quot;&gt;Option 1&lt;/ifx-checkbox&gt;
    &lt;ifx-checkbox
      value=&quot;2&quot;
      size=&quot;m&quot;&gt;Option 2&lt;/ifx-checkbox&gt;
  &lt;/ifx-checkbox-group&gt;`;

  protected handleSetGroupError(event: CustomEvent) {
    console.log('setGroupError:', event);
    // Add your handler logic here
  }
}
