import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-indicator-example',
  templateUrl: './ifx-indicator-example.html',
  styleUrl: './ifx-indicator-example.scss',
  standalone: false
})
export class IfxIndicatorExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-indicator-example&#039;,
  templateUrl: &#039;./ifx-indicator-example.html&#039;,
  styleUrl: &#039;./ifx-indicator-example.scss&#039;,
  standalone: false
})
export class IfxIndicatorExample {}`;
  protected readonly htmlCode = `  &lt;ifx-indicator
    variant=&quot;number&quot;
    number=&quot;1&quot;&gt;&lt;/ifx-indicator&gt;`;
}
