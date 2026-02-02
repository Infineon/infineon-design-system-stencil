import { IfxIconButton } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-icon-button-example',
  imports: [ IfxIconButton ],
  templateUrl: './ifx-icon-button-example.html',
  styleUrl: './ifx-icon-button-example.scss'
})
export class IfxIconButtonExample {
  protected readonly tsCode = `import { IfxIconButton } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-icon-button-example&#039;,
  imports: [ IfxIconButton ],
  templateUrl: &#039;./ifx-icon-button-example.html&#039;,
  styleUrl: &#039;./ifx-icon-button-example.scss&#039;
})
export class IfxIconButtonExample {}`;
  protected readonly htmlCode = `  &lt;ifx-icon-button
    shape=&quot;round&quot;
    variant=&quot;primary&quot;
    icon=&quot;c-info-16&quot;
    href=&quot;true&quot;
    target=&quot;_blank&quot;
    size=&quot;m&quot;
    aria-label=&quot;Icon Button&quot;&gt;&lt;/ifx-icon-button&gt;`;
}
