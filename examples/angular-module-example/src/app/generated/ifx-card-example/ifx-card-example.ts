import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-card-example',
  templateUrl: './ifx-card-example.html',
  styleUrl: './ifx-card-example.scss',
  standalone: false
})
export class IfxCardExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-card-example&#039;,
  templateUrl: &#039;./ifx-card-example.html&#039;,
  styleUrl: &#039;./ifx-card-example.scss&#039;,
  standalone: false
})
export class IfxCardExample {
  protected handleImgPosition(event: CustomEvent) {
    console.log(&#039;imgPosition:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-card
    direction=&quot;vertical&quot;
    href=&quot;&quot;
    target=&quot;_blank&quot;
    aria-label=&quot;&quot;
    aria-label-text=&quot;Card&quot;
    [fullWidth]=&quot;false&quot;&gt;
    &lt;ifx-card-image
      position=&quot;right&quot;
      src=&quot;https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg&quot;
      alt=&quot;Coffee&quot;
      slot=&quot;img&quot;
      (imgPosition)=&quot;handleImgPosition(\$any(\$event))&quot;&gt;&lt;/ifx-card-image&gt;
    &lt;ifx-card-overline (imgPosition)=&quot;handleImgPosition(\$any(\$event))&quot;&gt;Overline&lt;/ifx-card-overline&gt;
    &lt;ifx-card-headline (imgPosition)=&quot;handleImgPosition(\$any(\$event))&quot;&gt;Headline&lt;/ifx-card-headline&gt;
    &lt;ifx-card-text (imgPosition)=&quot;handleImgPosition(\$any(\$event))&quot;&gt;Some quick example text to build on the card title and make up the bulk of the card&#039;s content.&lt;/ifx-card-text&gt;
    &lt;ifx-card-links
      slot=&quot;buttons&quot;
      (imgPosition)=&quot;handleImgPosition(\$any(\$event))&quot;&gt;
      &lt;ifx-button variant=&quot;primary&quot;&gt;Button&lt;/ifx-button&gt;
      &lt;ifx-button variant=&quot;secondary&quot;&gt;Button&lt;/ifx-button&gt;
    &lt;/ifx-card-links&gt;
  &lt;/ifx-card&gt;`;

  protected handleImgPosition(event: CustomEvent) {
    console.log('imgPosition:', event);
    // Add your handler logic here
  }
}
