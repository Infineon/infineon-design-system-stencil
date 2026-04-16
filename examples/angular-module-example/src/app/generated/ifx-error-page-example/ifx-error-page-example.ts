import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-error-page-example',
  templateUrl: './ifx-error-page-example.html',
  styleUrl: './ifx-error-page-example.scss',
  standalone: false
})
export class IfxErrorPageExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-error-page-example&#039;,
  templateUrl: &#039;./ifx-error-page-example.html&#039;,
  styleUrl: &#039;./ifx-error-page-example.scss&#039;,
  standalone: false
})
export class IfxErrorPageExample {}`;
  protected readonly htmlCode = `  &lt;ifx-error-page
    img-alt=&quot;&quot;
    type=&quot;403&quot;
    headline=&quot;&quot;
    description=&quot;&quot;
    illustration-url=&quot;&quot;&gt;
    &lt;div slot=&quot;button&quot;&gt;
      &lt;ifx-button
        variant=&quot;primary&quot;
        [fullWidth]=&quot;true&quot;&gt;Go to homepage&lt;/ifx-button&gt;
    &lt;/div&gt;
    &lt;div slot=&quot;button&quot;&gt;
      &lt;ifx-button
        variant=&quot;secondary&quot;
        [fullWidth]=&quot;true&quot;&gt;Get support&lt;/ifx-button&gt;
    &lt;/div&gt;
  &lt;/ifx-error-page&gt;`;
}
