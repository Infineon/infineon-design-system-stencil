import { IfxAlert } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-alert-example',
  imports: [ IfxAlert ],
  templateUrl: './ifx-alert-example.html',
	styleUrl: './ifx-alert-example.scss'
})
export class IfxAlertExample {
  protected readonly tsCode = `import { IfxAlert } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-alert-example&#039;,
  imports: [ IfxAlert ],
  templateUrl: &#039;./ifx-alert-example.html&#039;,
	styleUrl: &#039;./ifx-alert-example.scss&#039;
})
export class IfxAlertExample {}`;
  protected readonly htmlCode = `  &lt;ifx-alert
    aria-live-text=&quot;assertive&quot;
    variant=&quot;primary&quot;
    icon=&quot;c-info-16&quot;
    closable=&quot;true&quot;&gt;Attention! This is an alert message — check it out!&lt;/ifx-alert&gt;`;
}
