import { IfxIndicator } from '@infineon/infineon-design-system-angular/standalone';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-ifx-indicator-example',
  imports: [ IfxIndicator ],
  templateUrl: './ifx-indicator-example.html',
  styleUrl: './ifx-indicator-example.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IfxIndicatorExample {
  protected readonly tsCode = `import { IfxIndicator } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component, CUSTOM_ELEMENTS_SCHEMA } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-indicator-example&#039;,
  imports: [ IfxIndicator ],
  templateUrl: &#039;./ifx-indicator-example.html&#039;,
  styleUrl: &#039;./ifx-indicator-example.scss&#039;,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IfxIndicatorExample {}`;
  protected readonly htmlCode = `  &lt;ifx-indicator
    variant=&quot;number&quot;
    number=&quot;1&quot;
    inverted=&quot;false&quot;&gt;&lt;/ifx-indicator&gt;`;
}
