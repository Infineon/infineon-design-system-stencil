import { IfxStatus } from '@infineon/infineon-design-system-angular/standalone';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-ifx-status-example',
  imports: [ IfxStatus ],
  templateUrl: './ifx-status-example.html',
  styleUrl: './ifx-status-example.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IfxStatusExample {
  protected readonly tsCode = `import { IfxStatus } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component, CUSTOM_ELEMENTS_SCHEMA } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-status-example&#039;,
  imports: [ IfxStatus ],
  templateUrl: &#039;./ifx-status-example.html&#039;,
  styleUrl: &#039;./ifx-status-example.scss&#039;,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IfxStatusExample {}`;
  protected readonly htmlCode = `  &lt;ifx-status
    label=&quot;text&quot;
    color=&quot;orange-500&quot;
    border=&quot;true&quot;&gt;&lt;/ifx-status&gt;`;
}
