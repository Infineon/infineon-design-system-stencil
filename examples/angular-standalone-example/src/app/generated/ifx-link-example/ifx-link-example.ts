import { IfxLink } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-link-example',
  imports: [ IfxLink ],
  templateUrl: './ifx-link-example.html',
  styleUrl: './ifx-link-example.scss'
})
export class IfxLinkExample {
  protected readonly tsCode = `import { IfxLink } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-link-example&#039;,
  imports: [ IfxLink ],
  templateUrl: &#039;./ifx-link-example.html&#039;,
  styleUrl: &#039;./ifx-link-example.scss&#039;
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
