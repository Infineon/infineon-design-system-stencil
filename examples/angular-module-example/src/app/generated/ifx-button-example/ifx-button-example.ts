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
    type=&quot;button&quot;
    aria-label=&quot;Button&quot;
    variant=&quot;primary&quot;
    size=&quot;m&quot;
    target=&quot;_blank&quot;
    theme=&quot;default&quot;
    full-width=&quot;false&quot;&gt;Button&lt;/ifx-button&gt;`;
}
