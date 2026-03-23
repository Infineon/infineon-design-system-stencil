import { IfxErrorPage } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-error-page-example',
  imports: [ IfxErrorPage ],
  templateUrl: './ifx-error-page-example.html',
	styleUrl: './ifx-error-page-example.scss'
})
export class IfxErrorPageExample {
  protected readonly tsCode = `import { IfxErrorPage } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-error-page-example&#039;,
  imports: [ IfxErrorPage ],
  templateUrl: &#039;./ifx-error-page-example.html&#039;,
	styleUrl: &#039;./ifx-error-page-example.scss&#039;
})
export class IfxErrorPageExample {}`;
  protected readonly htmlCode = `  &lt;ifx-error-page
    illustration-url=&quot;true&quot;
    alt=&quot;ERROR 404&quot;
    type=&quot;ERROR 404&quot;
    headline=&quot;The requested page cannot be found&quot;
    description=&quot;The page you requested does not exist. Please check the URL entered or use the navigation to find what you are looking for.&quot;&gt;
    &lt;h1&gt;cenas&lt;/h1&gt;
  &lt;/ifx-error-page&gt;`;
}
