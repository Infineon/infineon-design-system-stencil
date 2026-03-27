import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-search-field-example',
  templateUrl: './ifx-search-field-example.html',
  styleUrl: './ifx-search-field-example.scss',
  standalone: false
})
export class IfxSearchFieldExample {
  protected readonly tsCode = `import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-search-field-example&#039;,
  templateUrl: &#039;./ifx-search-field-example.html&#039;,
  styleUrl: &#039;./ifx-search-field-example.scss&#039;,
  standalone: false
})
export class IfxSearchFieldExample {
  protected handleBlur(event: CustomEvent) {
    console.log(&#039;ifxBlur:&#039;, event);
    // Add your handler logic here
  }

  protected handleFocus(event: CustomEvent) {
    console.log(&#039;ifxFocus:&#039;, event);
    // Add your handler logic here
  }

  protected handleInput(event: CustomEvent) {
    console.log(&#039;ifxInput:&#039;, event);
    // Add your handler logic here
  }

  protected handleSuggestionRequested(event: CustomEvent) {
    console.log(&#039;ifxSuggestionRequested:&#039;, event);
    // Add your handler logic here
  }

  protected handleSuggestionSelected(event: CustomEvent) {
    console.log(&#039;ifxSuggestionSelected:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-search-field
    size=&quot;m&quot;
    [showDeleteIcon]=&quot;true&quot;
    [showSuggestions]=&quot;false&quot;
    [enableHistory]=&quot;true&quot;
    max-suggestions=&quot;10&quot;
    max-history-items=&quot;5&quot;
    history-key=&quot;ifx-search-history&quot;
    history-header-text=&quot;Recent Searches&quot;
    autocomplete=&quot;on&quot;
    placeholder=&quot;Search...&quot;
    aria-label-text=&quot;Search field&quot;
    delete-icon-aria-label=&quot;Clear search&quot;
    history-delete-aria-label=&quot;Remove from history&quot;
    dropdown-aria-label=&quot;Search suggestions and history&quot;
    suggestion-aria-label=&quot;Search suggestion&quot;
    history-item-aria-label=&quot;Search history item&quot;
    [disabled]=&quot;false&quot;
    (ifxBlur)=&quot;handleBlur(\$any(\$event))&quot;
    (ifxFocus)=&quot;handleFocus(\$any(\$event))&quot;
    (ifxInput)=&quot;handleInput(\$any(\$event))&quot;
    (ifxSuggestionRequested)=&quot;handleSuggestionRequested(\$any(\$event))&quot;
    (ifxSuggestionSelected)=&quot;handleSuggestionSelected(\$any(\$event))&quot;&gt;&lt;/ifx-search-field&gt;`;

  protected handleBlur(event: CustomEvent) {
    console.log('ifxBlur:', event);
    // Add your handler logic here
  }

  protected handleFocus(event: CustomEvent) {
    console.log('ifxFocus:', event);
    // Add your handler logic here
  }

  protected handleInput(event: CustomEvent) {
    console.log('ifxInput:', event);
    // Add your handler logic here
  }

  protected handleSuggestionRequested(event: CustomEvent) {
    console.log('ifxSuggestionRequested:', event);
    // Add your handler logic here
  }

  protected handleSuggestionSelected(event: CustomEvent) {
    console.log('ifxSuggestionSelected:', event);
    // Add your handler logic here
  }
}
