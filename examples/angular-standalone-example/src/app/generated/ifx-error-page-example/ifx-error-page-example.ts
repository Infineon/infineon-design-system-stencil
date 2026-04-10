import { IfxButton, IfxErrorPage } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-error-page-example',
  imports: [ IfxButton, IfxErrorPage ],
  templateUrl: './ifx-error-page-example.html',
	styleUrl: './ifx-error-page-example.scss'
})
export class IfxErrorPageExample {
  protected readonly tsCode = `import { IfxButton, IfxErrorPage } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-error-page-example&#039;,
  imports: [ IfxButton, IfxErrorPage ],
  templateUrl: &#039;./ifx-error-page-example.html&#039;,
	styleUrl: &#039;./ifx-error-page-example.scss&#039;
})
export class IfxErrorPageExample {}`;
  protected readonly htmlCode = `  &lt;ifx-error-page
    alt=&quot;&quot;
    type=&quot;403&quot;
    headline=&quot;&quot;
    description=&quot;&quot;&gt;
    &lt;div slot=&quot;button&quot;&gt;
      &lt;ifx-button
        slot=&quot;button&quot;
        variant=&quot;primary&quot;
        full-width=&quot;true&quot;&gt;Button Custom 1&lt;/ifx-button&gt;
    &lt;/div&gt;
    &lt;div slot=&quot;button&quot;&gt;
      &lt;ifx-button
        slot=&quot;button&quot;
        variant=&quot;secondary&quot;
        full-width=&quot;true&quot;&gt;Button Custom 2&lt;/ifx-button&gt;
    &lt;/div&gt;
  &lt;/ifx-error-page&gt;`;
}
