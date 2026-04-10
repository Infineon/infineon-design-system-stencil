import { IfxSearchField } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-search-field-example',
  imports: [ IfxSearchField ],
  templateUrl: './ifx-search-field-example.html',
	styleUrl: './ifx-search-field-example.scss'
})
export class IfxSearchFieldExample {
  protected readonly tsCode = `import { IfxSearchField } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-search-field-example&#039;,
  imports: [ IfxSearchField ],
  templateUrl: &#039;./ifx-search-field-example.html&#039;,
	styleUrl: &#039;./ifx-search-field-example.scss&#039;
})
export class IfxSearchFieldExample {}`;
  protected readonly htmlCode = `  &lt;ifx-search-field
    size=&quot;m&quot;
    show-delete-icon=&quot;true&quot;
    show-suggestions=&quot;false&quot;
    enable-history=&quot;true&quot;
    max-suggestions=&quot;10&quot;
    max-history-items=&quot;5&quot;
    history-key=&quot;ifx-search-history&quot;
    history-header-text=&quot;Recent Searches&quot;
    value=&quot;&quot;
    autocomplete=&quot;on&quot;
    placeholder=&quot;Search...&quot;
    aria-label-text=&quot;Search field&quot;
    delete-icon-aria-label=&quot;Clear search&quot;
    history-delete-aria-label=&quot;Remove from history&quot;
    dropdown-aria-label=&quot;Search suggestions and history&quot;
    suggestion-aria-label=&quot;Search suggestion&quot;
    history-item-aria-label=&quot;Search history item&quot;&gt;&lt;/ifx-search-field&gt;`;
}
