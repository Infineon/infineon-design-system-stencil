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
    group-label-text=&quot;Group Label&quot;
    caption-text=&quot;Caption text, description, error notification&quot;
    alignment=&quot;{{ controlledProps[&#039;alignment&#039;] }}&quot;
    size=&quot;{{ controlledProps[&#039;size&#039;] }}&quot;
    showGroupLabel=&quot;{{ controlledProps[&#039;showGroupLabel&#039;] }}&quot;
    showCaption=&quot;{{ controlledProps[&#039;showCaption&#039;] }}&quot;
    showCaptionIcon=&quot;{{ controlledProps[&#039;showCaptionIcon&#039;] }}&quot;
    required=&quot;{{ controlledProps[&#039;required&#039;] }}&quot;&gt;
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
