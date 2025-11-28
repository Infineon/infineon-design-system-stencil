import { IfxSearchBar } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-search-bar-example',
  imports: [ IfxSearchBar ],
  templateUrl: './ifx-search-bar-example.html',
  styleUrl: './ifx-search-bar-example.scss'
})
export class IfxSearchBarExample {
  protected readonly tsCode = `import { IfxSearchBar } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-search-bar-example&#039;,
  imports: [ IfxSearchBar ],
  templateUrl: &#039;./ifx-search-bar-example.html&#039;,
  styleUrl: &#039;./ifx-search-bar-example.scss&#039;
})
export class IfxSearchBarExample {
  protected handleInput(event: any) {
    console.log(&#039;ifxInput:&#039;, event.detail);
    // Add your handler logic here
  }

  protected handleOpen(event: any) {
    console.log(&#039;ifxOpen:&#039;, event.detail);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-search-bar
    is-open=&quot;true&quot;
    disabled=&quot;false&quot;
    value=&quot;true&quot;
    autocomplete=&quot;on&quot;
    (ifxInput)=&quot;handleInput(\$event)&quot;
    (ifxOpen)=&quot;handleOpen(\$event)&quot;&gt;&lt;/ifx-search-bar&gt;`;

  protected handleInput(event: any) {
    console.log('ifxInput:', event.detail);
    // Add your handler logic here
  }

  protected handleOpen(event: any) {
    console.log('ifxOpen:', event.detail);
    // Add your handler logic here
  }
}
