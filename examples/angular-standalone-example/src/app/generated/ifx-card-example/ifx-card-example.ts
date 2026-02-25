import { IfxButton, IfxCard, IfxCardHeadline, IfxCardImage, IfxCardLinks, IfxCardOverline, IfxCardText } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-card-example',
  imports: [ IfxButton, IfxCard, IfxCardHeadline, IfxCardImage, IfxCardLinks, IfxCardOverline, IfxCardText ],
  templateUrl: './ifx-card-example.html',
  styleUrl: './ifx-card-example.scss'
})
export class IfxCardExample {
  protected readonly tsCode = `import { IfxButton, IfxCard, IfxCardHeadline, IfxCardImage, IfxCardLinks, IfxCardOverline, IfxCardText } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-card-example&#039;,
  imports: [ IfxButton, IfxCard, IfxCardHeadline, IfxCardImage, IfxCardLinks, IfxCardOverline, IfxCardText ],
  templateUrl: &#039;./ifx-card-example.html&#039;,
  styleUrl: &#039;./ifx-card-example.scss&#039;
})
export class IfxCardExample {}`;
  protected readonly htmlCode = `  &lt;ifx-card
    direction=&quot;vertical&quot;
    href=&quot;true&quot;
    target=&quot;_blank&quot;
    aria-label=&quot;Card&quot;&gt;
    &lt;ifx-card-image
      position=&quot;right&quot;
      src=&quot;https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg&quot;
      alt=&quot;Coffee&quot;
      slot=&quot;img&quot;&gt;&lt;/ifx-card-image&gt;
    &lt;ifx-card-overline&gt;Overline&lt;/ifx-card-overline&gt;
    &lt;ifx-card-headline&gt;Headline&lt;/ifx-card-headline&gt;
    &lt;ifx-card-text&gt;Some quick example text to build on the card title and make up the bulk of the card&#039;s content.&lt;/ifx-card-text&gt;
    &lt;ifx-card-links slot=&quot;buttons&quot;&gt;
      &lt;ifx-button variant=&quot;primary&quot;&gt;Button&lt;/ifx-button&gt;
      &lt;ifx-button variant=&quot;secondary&quot;&gt;Button&lt;/ifx-button&gt;
    &lt;/ifx-card-links&gt;
  &lt;/ifx-card&gt;`;
}
