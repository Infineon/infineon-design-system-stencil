import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-icon-button-example',
  templateUrl: './ifx-icon-button-example.html',
  styleUrl: './ifx-icon-button-example.scss',
  standalone: false
})
export class IfxIconButtonExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-icon-button-example&#039;,
  templateUrl: &#039;./ifx-icon-button-example.html&#039;,
  styleUrl: &#039;./ifx-icon-button-example.scss&#039;,
  standalone: false
})
export class IfxIconButtonExample {}`;
  protected readonly htmlCode = `  &lt;ifx-icon-button
    href=&quot;true&quot;
    aria-label=&quot;Icon Button&quot;
    icon=&quot;{{ controlledProps[&#039;icon&#039;] }}&quot;
    variant=&quot;{{ controlledProps[&#039;variant&#039;] }}&quot;
    disabled=&quot;{{ controlledProps[&#039;disabled&#039;] }}&quot;
    size=&quot;{{ controlledProps[&#039;size&#039;] }}&quot;
    target=&quot;{{ controlledProps[&#039;target&#039;] }}&quot;
    shape=&quot;{{ controlledProps[&#039;shape&#039;] }}&quot;&gt;&lt;/ifx-icon-button&gt;`;
}
