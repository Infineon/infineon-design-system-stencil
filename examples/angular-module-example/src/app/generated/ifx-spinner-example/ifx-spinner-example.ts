import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-spinner-example',
  templateUrl: './ifx-spinner-example.html',
  styleUrl: './ifx-spinner-example.scss',
  standalone: false
})
export class IfxSpinnerExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-spinner-example&#039;,
  templateUrl: &#039;./ifx-spinner-example.html&#039;,
  styleUrl: &#039;./ifx-spinner-example.scss&#039;,
  standalone: false
})
export class IfxSpinnerExample {}`;
  protected readonly htmlCode = `  &lt;ifx-spinner
    aria-label=&quot;true&quot;
    size=&quot;{{ controlledProps[&#039;size&#039;] }}&quot;
    variant=&quot;{{ controlledProps[&#039;variant&#039;] }}&quot;
    inverted=&quot;{{ controlledProps[&#039;inverted&#039;] }}&quot;&gt;&lt;/ifx-spinner&gt;`;
}
