import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-button-example',
  templateUrl: './ifx-button-example.html',
  styleUrl: './ifx-button-example.scss',
  standalone: false
})
export class IfxButtonExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-button-example&#039;,
  templateUrl: &#039;./ifx-button-example.html&#039;,
  styleUrl: &#039;./ifx-button-example.scss&#039;,
  standalone: false
})
export class IfxButtonExample {}`;
  protected readonly htmlCode = `  &lt;ifx-button
    aria-label=&quot;Button&quot;
    variant=&quot;{{ controlledProps[&#039;variant&#039;] }}&quot;
    theme=&quot;{{ controlledProps[&#039;theme&#039;] }}&quot;
    type=&quot;{{ controlledProps[&#039;type&#039;] }}&quot;
    size=&quot;{{ controlledProps[&#039;size&#039;] }}&quot;
    fullWidth=&quot;{{ controlledProps[&#039;fullWidth&#039;] }}&quot;
    disabled=&quot;{{ controlledProps[&#039;disabled&#039;] }}&quot;
    href=&quot;{{ controlledProps[&#039;href&#039;] }}&quot;
    target=&quot;{{ controlledProps[&#039;target&#039;] }}&quot;&gt;Button&lt;/ifx-button&gt;`;
}
