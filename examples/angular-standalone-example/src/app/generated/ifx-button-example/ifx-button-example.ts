import { IfxButton } from '@infineon/infineon-design-system-angular/standalone';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-ifx-button-example',
  imports: [ IfxButton ],
  templateUrl: './ifx-button-example.html',
  styleUrl: './ifx-button-example.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IfxButtonExample {
  protected readonly tsCode = `import { IfxButton } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component, CUSTOM_ELEMENTS_SCHEMA } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-button-example&#039;,
  imports: [ IfxButton ],
  templateUrl: &#039;./ifx-button-example.html&#039;,
  styleUrl: &#039;./ifx-button-example.scss&#039;,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IfxButtonExample {}`;
  protected readonly htmlCode = `  &lt;ifx-button
    type=&quot;button&quot;
    aria-label=&quot;Button&quot;
    disabled=&quot;false&quot;
    variant=&quot;primary&quot;
    size=&quot;m&quot;
    target=&quot;_blank&quot;
    theme=&quot;default&quot;
    full-width=&quot;false&quot;&gt;
    Button
  &lt;/ifx-button&gt;`;
}
