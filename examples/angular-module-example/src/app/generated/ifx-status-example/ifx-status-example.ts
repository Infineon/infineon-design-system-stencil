import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-status-example',
  templateUrl: './ifx-status-example.html',
  styleUrl: './ifx-status-example.scss',
  standalone: false
})
export class IfxStatusExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-status-example&#039;,
  templateUrl: &#039;./ifx-status-example.html&#039;,
  styleUrl: &#039;./ifx-status-example.scss&#039;,
  standalone: false
})
export class IfxStatusExample {}`;
  protected readonly htmlCode = `  &lt;ifx-status
    label=&quot;text&quot;
    color=&quot;orange-500&quot;
    border=&quot;true&quot;&gt;&lt;/ifx-status&gt;`;
}
