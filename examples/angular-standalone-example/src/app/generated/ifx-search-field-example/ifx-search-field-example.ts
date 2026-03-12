import { IfxButton, IfxSearchField } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifx-search-field-example',
  imports: [ IfxButton, IfxSearchField ],
  templateUrl: './ifx-search-field-example.html',
	styleUrl: './ifx-search-field-example.scss'
})
export class IfxSearchFieldExample {
  protected readonly tsCode = `import { IfxButton, IfxSearchField } from &#039;@infineon/infineon-design-system-angular/standalone&#039;;
import { Component } from &#039;@angular/core&#039;;

@Component({
  selector: &#039;app-ifx-search-field-example&#039;,
  imports: [ IfxButton, IfxSearchField ],
  templateUrl: &#039;./ifx-search-field-example.html&#039;,
	styleUrl: &#039;./ifx-search-field-example.scss&#039;
})
export class IfxSearchFieldExample {
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

  protected handleFocus(event: CustomEvent) {
    console.log(&#039;ifxFocus:&#039;, event);
    // Add your handler logic here
  }

  protected handleBlur(event: CustomEvent) {
    console.log(&#039;ifxBlur:&#039;, event);
    // Add your handler logic here
  }
}`;
  protected get htmlCode(): string {
    const controlledAttrs = [
      ["showDeleteIcon", this.controlledProps["showDeleteIcon"]],
      ["disabled", this.controlledProps["disabled"]],
      ["size", this.controlledProps["size"]],
      ["showSuggestions", this.controlledProps["showSuggestions"]],
      ["enableHistory", this.controlledProps["enableHistory"]],
    ]
			.map(([name, value]) => '    ' + String(name) + '=&quot;' + String(value) + '&quot;')
      .join("\n");

    return `  &lt;ifx-search-field
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
    (ifxInput)=&quot;handleInput(\$any(\$event))&quot;
    (ifxSuggestionRequested)=&quot;handleSuggestionRequested(\$any(\$event))&quot;
    (ifxSuggestionSelected)=&quot;handleSuggestionSelected(\$any(\$event))&quot;
    (ifxFocus)=&quot;handleFocus(\$any(\$event))&quot;
    (ifxBlur)=&quot;handleBlur(\$any(\$event))&quot;
    __CONTROLLED_ATTRS__&gt;&lt;/ifx-search-field&gt;`.replace("__CONTROLLED_ATTRS__", controlledAttrs);
  }
  protected showDeleteIcon = true;
  protected disabled = false;
  protected readonly sizeOptions = ["s","m"];
  protected sizeIndex = 1;
  protected showSuggestions = false;
  protected enableHistory = true;

  protected toggleShowDeleteIcon() { this.showDeleteIcon = !this.showDeleteIcon; }
  protected toggleDisabled() { this.disabled = !this.disabled; }
  protected toggleSize() { this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length; }
  protected toggleShowSuggestions() { this.showSuggestions = !this.showSuggestions; }
  protected toggleEnableHistory() { this.enableHistory = !this.enableHistory; }

  protected get controlledProps(): Record<string, unknown> {
    return {
      "showDeleteIcon": this.showDeleteIcon,
      "disabled": this.disabled,
      "size": this.sizeOptions[this.sizeIndex],
      "showSuggestions": this.showSuggestions,
      "enableHistory": this.enableHistory,
    };
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

  protected handleFocus(event: CustomEvent) {
    console.log('ifxFocus:', event);
    // Add your handler logic here
  }

  protected handleBlur(event: CustomEvent) {
    console.log('ifxBlur:', event);
    // Add your handler logic here
  }
}
