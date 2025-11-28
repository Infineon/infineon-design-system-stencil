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
  protected handleInput(event: any) {
    console.log(&#039;ifxInput:&#039;, event.detail);
    // Add your handler logic here
  }

  protected handleSuggestionRequested(event: any) {
    console.log(&#039;ifxSuggestionRequested:&#039;, event.detail);
    // Add your handler logic here
  }

  protected handleSuggestionSelected(event: any) {
    console.log(&#039;ifxSuggestionSelected:&#039;, event.detail);
    // Add your handler logic here
  }

  protected handleFocus(event: any) {
    console.log(&#039;ifxFocus:&#039;, event.detail);
    // Add your handler logic here
  }

  protected handleBlur(event: any) {
    console.log(&#039;ifxBlur:&#039;, event.detail);
    // Add your handler logic here
  }
}`;
  protected readonly htmlCode = `  &lt;ifx-search-field
    size=&quot;m&quot;
    disabled=&quot;false&quot;
    show-delete-icon=&quot;true&quot;
    show-suggestions=&quot;false&quot;
    enable-history=&quot;true&quot;
    max-suggestions=&quot;10&quot;
    max-history-items=&quot;5&quot;
    history-key=&quot;ifx-search-history&quot;
    history-header-text=&quot;Recent Searches&quot;
    value=&quot;true&quot;
    autocomplete=&quot;on&quot;
    placeholder=&quot;Search...&quot;
    aria-label=&quot;Search field&quot;
    delete-icon-aria-label=&quot;Clear search&quot;
    history-delete-aria-label=&quot;Remove from history&quot;
    dropdown-aria-label=&quot;Search suggestions and history&quot;
    suggestion-aria-label=&quot;Search suggestion&quot;
    history-item-aria-label=&quot;Search history item&quot;
    (ifxInput)=&quot;handleInput(\$event)&quot;
    (ifxSuggestionRequested)=&quot;handleSuggestionRequested(\$event)&quot;
    (ifxSuggestionSelected)=&quot;handleSuggestionSelected(\$event)&quot;
    (ifxFocus)=&quot;handleFocus(\$event)&quot;
    (ifxBlur)=&quot;handleBlur(\$event)&quot;&gt;&lt;/ifx-search-field&gt;`;

  protected handleInput(event: any) {
    console.log('ifxInput:', event.detail);
    // Add your handler logic here
  }

  protected handleSuggestionRequested(event: any) {
    console.log('ifxSuggestionRequested:', event.detail);
    // Add your handler logic here
  }

  protected handleSuggestionSelected(event: any) {
    console.log('ifxSuggestionSelected:', event.detail);
    // Add your handler logic here
  }

  protected handleFocus(event: any) {
    console.log('ifxFocus:', event.detail);
    // Add your handler logic here
  }

  protected handleBlur(event: any) {
    console.log('ifxBlur:', event.detail);
    // Add your handler logic here
  }
}
