import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-alert-example',
  templateUrl: './ifx-alert-example.html',
  styleUrl: './ifx-alert-example.scss',
  standalone: false
})
export class IfxAlertExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-alert-example&#039;,
  templateUrl: &#039;./ifx-alert-example.html&#039;,
  styleUrl: &#039;./ifx-alert-example.scss&#039;,
  standalone: false
})
export class IfxAlertExample {}`;
  protected readonly htmlCode = `  &lt;ifx-alert
    aria-live-text=&quot;assertive&quot;
    variant=&quot;primary&quot;
    icon=&quot;c-info-16&quot;
    closable=&quot;true&quot;&gt;Attention! This is an alert message — check it out!&lt;/ifx-alert&gt;`;
}
