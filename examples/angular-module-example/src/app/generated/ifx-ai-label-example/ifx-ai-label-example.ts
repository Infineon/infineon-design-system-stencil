import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-ai-label-example',
  templateUrl: './ifx-ai-label-example.html',
  styleUrl: './ifx-ai-label-example.scss',
  standalone: false
})
export class IfxAiLabelExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-ai-label-example&#039;,
  templateUrl: &#039;./ifx-ai-label-example.html&#039;,
  styleUrl: &#039;./ifx-ai-label-example.scss&#039;,
  standalone: false
})
export class IfxAiLabelExample {}`;
  protected readonly htmlCode = `  &lt;ifx-ai-label
    divider=&quot;{{ controlledProps[&#039;divider&#039;] }}&quot;
    variant=&quot;{{ controlledProps[&#039;variant&#039;] }}&quot;&gt;&lt;/ifx-ai-label&gt;`;
}
