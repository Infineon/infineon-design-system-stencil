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
export class IfxSearchBarExample {}`;
  protected readonly htmlCode = `  &lt;ifx-search-bar
    is-open=&quot;true&quot;
    disabled=&quot;false&quot;
    value=&quot;&quot;
    autocomplete=&quot;on&quot;&gt;&lt;/ifx-search-bar&gt;`;
}
