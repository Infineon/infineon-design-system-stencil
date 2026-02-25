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
    disabled=&quot;false&quot;
    error=&quot;false&quot;
    label=&quot;Label Text&quot;
    name=&quot;textarea&quot;
    placeholder=&quot;Placeholder&quot;
    required=&quot;true&quot;
    read-only=&quot;false&quot;
    resize=&quot;both&quot;
    rows=&quot;5&quot;
    value=&quot;true&quot;
    wrap=&quot;soft&quot;
    full-width=&quot;false&quot;&gt;&lt;/ifx-textarea&gt;`;
}
