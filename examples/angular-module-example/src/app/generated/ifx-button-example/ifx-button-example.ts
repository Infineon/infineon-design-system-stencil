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
    [fullWidth]=&quot;false&quot;
    [disabled]=&quot;false&quot;
    [href]=&quot;false&quot;&gt;
    &lt;ifx-icon [style.display]=&quot;controlledProps[&#039;icon&#039;] &amp;&amp; ((controlledProps[&#039;iconPosition&#039;] || &#039;left&#039;) === &#039;left&#039;) ? &#039;&#039; : &#039;none&#039;&quot; icon=&quot;{{ controlledProps[&#039;icon&#039;] }}&quot;&gt;&lt;/ifx-icon&gt;
    Button
    &lt;ifx-icon [style.display]=&quot;controlledProps[&#039;icon&#039;] &amp;&amp; ((controlledProps[&#039;iconPosition&#039;] || &#039;left&#039;) === &#039;right&#039;) ? &#039;&#039; : &#039;none&#039;&quot; icon=&quot;{{ controlledProps[&#039;icon&#039;] }}&quot;&gt;&lt;/ifx-icon&gt;
  &lt;/ifx-button&gt;`;
}
