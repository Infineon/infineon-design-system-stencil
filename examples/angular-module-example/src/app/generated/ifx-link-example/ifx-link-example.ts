import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-link-example',
  templateUrl: './ifx-link-example.html',
  styleUrl: './ifx-link-example.scss',
  standalone: false
})
export class IfxLinkExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-link-example&#039;,
  templateUrl: &#039;./ifx-link-example.html&#039;,
  styleUrl: &#039;./ifx-link-example.scss&#039;,
  standalone: false
})
export class IfxLinkExample {}`;
  protected readonly htmlCode = `  &lt;ifx-link
    href=&quot;true&quot;
    aria-label=&quot;Link&quot;
    target=&quot;_blank&quot;
    size=&quot;m&quot;
    variant=&quot;bold&quot;
    download=&quot;true&quot;&gt;Link&lt;/ifx-link&gt;`;
}
