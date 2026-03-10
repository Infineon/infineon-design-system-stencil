import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-textarea-example',
  templateUrl: './ifx-textarea-example.html',
  styleUrl: './ifx-textarea-example.scss',
  standalone: false
})
export class IfxTextareaExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-textarea-example&#039;,
  templateUrl: &#039;./ifx-textarea-example.html&#039;,
  styleUrl: &#039;./ifx-textarea-example.scss&#039;,
  standalone: false
})
export class IfxTextareaExample {}`;
  protected readonly htmlCode = `  &lt;ifx-textarea
    caption=&quot;Caption text, description, error notification&quot;
    cols=&quot;43&quot;
    label=&quot;Label Text&quot;
    name=&quot;textarea&quot;
    placeholder=&quot;Placeholder&quot;
    rows=&quot;5&quot;
    value=&quot;true&quot;
    disabled=&quot;{{ controlledProps[&#039;disabled&#039;] }}&quot;
    error=&quot;{{ controlledProps[&#039;error&#039;] }}&quot;
    required=&quot;{{ controlledProps[&#039;required&#039;] }}&quot;
    readOnly=&quot;{{ controlledProps[&#039;readOnly&#039;] }}&quot;
    resize=&quot;{{ controlledProps[&#039;resize&#039;] }}&quot;
    wrap=&quot;{{ controlledProps[&#039;wrap&#039;] }}&quot;
    fullWidth=&quot;{{ controlledProps[&#039;fullWidth&#039;] }}&quot;&gt;&lt;/ifx-textarea&gt;`;
}
