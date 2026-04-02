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
export class IfxSearchBarExample {}`;
  protected readonly htmlCode = `  &lt;ifx-search-bar
    is-open=&quot;true&quot;
    disabled=&quot;false&quot;
    value=&quot;&quot;
    autocomplete=&quot;on&quot;&gt;&lt;/ifx-search-bar&gt;`;
}
