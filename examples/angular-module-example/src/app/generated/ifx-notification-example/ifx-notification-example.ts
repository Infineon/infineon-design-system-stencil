import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-notification-example',
  templateUrl: './ifx-notification-example.html',
  styleUrl: './ifx-notification-example.scss',
  standalone: false
})
export class IfxNotificationExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-notification-example&#039;,
  templateUrl: &#039;./ifx-notification-example.html&#039;,
  styleUrl: &#039;./ifx-notification-example.scss&#039;,
  standalone: false
})
export class IfxNotificationExample {}`;
  protected readonly htmlCode = `  &lt;ifx-notification
    link-text=&quot;Link&quot;
    link-href=&quot;https://www.example.com&quot;
    variant=&quot;{{ controlledProps[&#039;variant&#039;] }}&quot;
    icon=&quot;{{ controlledProps[&#039;icon&#039;] }}&quot;
    linkTarget=&quot;{{ controlledProps[&#039;linkTarget&#039;] }}&quot;&gt;Sample Notification&lt;/ifx-notification&gt;`;
}
