import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-search-bar-example',
  templateUrl: './ifx-search-bar-example.html',
  styleUrl: './ifx-search-bar-example.scss',
  standalone: false
})
export class IfxSearchBarExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-search-bar-example&#039;,
  templateUrl: &#039;./ifx-search-bar-example.html&#039;,
  styleUrl: &#039;./ifx-search-bar-example.scss&#039;,
  standalone: false
})
export class IfxSearchBarExample {
  protected handleInput(event: CustomEvent) {
    console.log(&#039;ifxInput:&#039;, event);
    // Add your handler logic here
  }

  protected handleOpen(event: CustomEvent) {
    console.log(&#039;ifxOpen:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-search-bar
    is-open=&quot;true&quot;
    disabled=&quot;false&quot;
    value=&quot;true&quot;
    autocomplete=&quot;on&quot;
    (ifxInput)=&quot;handleInput(\$any(\$event))&quot;
    (ifxOpen)=&quot;handleOpen(\$any(\$event))&quot;&gt;&lt;/ifx-search-bar&gt;`;

  protected handleInput(event: CustomEvent) {
    console.log('ifxInput:', event);
    // Add your handler logic here
  }

  protected handleOpen(event: CustomEvent) {
    console.log('ifxOpen:', event);
    // Add your handler logic here
  }
}
