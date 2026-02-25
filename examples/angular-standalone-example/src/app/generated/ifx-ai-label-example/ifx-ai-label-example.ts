import { IfxAiLabel } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-ai-label-example',
  imports: [ IfxAiLabel ],
  templateUrl: './ifx-ai-label-example.html',
  styleUrl: './ifx-ai-label-example.scss'
})
export class IfxAiLabelExample {
  protected readonly tsCode = `import { IfxAiLabel } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-ai-label-example&#039;,
  imports: [ IfxAiLabel ],
  templateUrl: &#039;./ifx-ai-label-example.html&#039;,
  styleUrl: &#039;./ifx-ai-label-example.scss&#039;
})
export class IfxAiLabelExample {}`;
  protected readonly htmlCode = `  &lt;ifx-ai-label
    divider=&quot;true&quot;
    variant=&quot;label&quot;&gt;&lt;/ifx-ai-label&gt;`;
}
