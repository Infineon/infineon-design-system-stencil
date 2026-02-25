import { IfxIndicator } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-indicator-example',
  imports: [ IfxIndicator ],
  templateUrl: './ifx-indicator-example.html',
  styleUrl: './ifx-indicator-example.scss'
})
export class IfxIndicatorExample {
  protected readonly tsCode = `import { IfxIndicator } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-indicator-example&#039;,
  imports: [ IfxIndicator ],
  templateUrl: &#039;./ifx-indicator-example.html&#039;,
  styleUrl: &#039;./ifx-indicator-example.scss&#039;
})
export class IfxIndicatorExample {}`;
  protected readonly htmlCode = `  &lt;ifx-indicator
    variant=&quot;number&quot;
    number=&quot;1&quot;
    disabled=&quot;false&quot;&gt;&lt;/ifx-indicator&gt;`;
}
