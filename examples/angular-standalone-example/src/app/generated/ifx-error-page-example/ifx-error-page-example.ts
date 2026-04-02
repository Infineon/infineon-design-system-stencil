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
    alt=&quot;&quot;
    type=&quot;403&quot;
    headline=&quot;&quot;
    description=&quot;&quot;&gt;&lt;/ifx-error-page&gt;`;
}
