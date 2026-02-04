import { IfxNotification } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-notification-example',
  imports: [ IfxNotification ],
  templateUrl: './ifx-notification-example.html',
  styleUrl: './ifx-notification-example.scss'
})
export class IfxNotificationExample {
  protected readonly tsCode = `import { IfxNotification } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-notification-example&#039;,
  imports: [ IfxNotification ],
  templateUrl: &#039;./ifx-notification-example.html&#039;,
  styleUrl: &#039;./ifx-notification-example.scss&#039;
})
export class IfxNotificationExample {}`;
  protected readonly htmlCode = `  &lt;ifx-notification
    icon=&quot;c-check-16&quot;
    variant=&quot;success&quot;
    link-text=&quot;Link&quot;
    link-href=&quot;https://www.example.com&quot;
    link-target=&quot;_blank&quot;&gt;Sample Notification&lt;/ifx-notification&gt;`;
}
