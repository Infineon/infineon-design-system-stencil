import { IfxButton, IfxSearchField, IfxTextField } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-search-field-example',
  imports: [ IfxButton, IfxSearchField, IfxTextField ],
  templateUrl: './ifx-search-field-example.html',
  styleUrl: './ifx-search-field-example.scss'
})
export class IfxSearchFieldExample {
  protected readonly tsCode = `import { IfxButton, IfxSearchField, IfxTextField } from '@infineon/infineon-design-system-angular/standalone';
import { Component } from '@angular/core';
@Component({
  selector: 'app-ifx-search-field-example',
  imports: [ IfxButton, IfxSearchField, IfxTextField ],
  templateUrl: './ifx-search-field-example.html',
  styleUrl: './ifx-search-field-example.scss'
})
export class IfxSearchFieldExample {

  protected showDeleteIcon = true;
  protected disabled = false;
  protected readonly sizeOptions = ["s","m"];
  protected sizeIndex = 1;
  protected placeholder = "Search...";
  protected value = "";
  protected autocomplete = "on";
  protected showSuggestions = false;
  protected enableHistory = true;
  protected maxSuggestions = 10;
  protected maxHistoryItems = 5;
  protected historyKey = "ifx-search-history";
  protected historyHeaderText = "Recent Searches";
  protected ariaLabelText = "Search field";
  protected deleteIconAriaLabel = "Clear search";
  protected historyDeleteAriaLabel = "Remove from history";
  protected dropdownAriaLabel = "Search suggestions and history";
  protected suggestionAriaLabel = "Search suggestion";
  protected historyItemAriaLabel = "Search history item";

  protected toggleShowDeleteIcon() {
    this.showDeleteIcon = !this.showDeleteIcon;
  }

  protected toggleDisabled() {
    this.disabled = !this.disabled;
  }

  protected toggleSize() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected updatePlaceholder(value: string) {
    this.placeholder = value;
  }

  protected updateValue(value: string) {
    this.value = value;
  }

  protected updateAutocomplete(value: string) {
    this.autocomplete = value;
  }

  protected toggleShowSuggestions() {
    this.showSuggestions = !this.showSuggestions;
  }

  protected toggleEnableHistory() {
    this.enableHistory = !this.enableHistory;
  }

  protected updateMaxSuggestions(value: string) {
    this.maxSuggestions = Number(value);
  }

  protected updateMaxHistoryItems(value: string) {
    this.maxHistoryItems = Number(value);
  }

  protected updateHistoryKey(value: string) {
    this.historyKey = value;
  }

  protected updateHistoryHeaderText(value: string) {
    this.historyHeaderText = value;
  }

  protected updateAriaLabelText(value: string) {
    this.ariaLabelText = value;
  }

  protected updateDeleteIconAriaLabel(value: string) {
    this.deleteIconAriaLabel = value;
  }

  protected updateHistoryDeleteAriaLabel(value: string) {
    this.historyDeleteAriaLabel = value;
  }

  protected updateDropdownAriaLabel(value: string) {
    this.dropdownAriaLabel = value;
  }

  protected updateSuggestionAriaLabel(value: string) {
    this.suggestionAriaLabel = value;
  }

  protected updateHistoryItemAriaLabel(value: string) {
    this.historyItemAriaLabel = value;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

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

}`;
  protected readonly htmlCode = `  &lt;ifx-search-field
    (ifxBlur)=&quot;handleBlur(\$any(\$event))&quot;
    (ifxFocus)=&quot;handleFocus(\$any(\$event))&quot;
    (ifxInput)=&quot;handleInput(\$any(\$event))&quot;
    (ifxSuggestionRequested)=&quot;handleSuggestionRequested(\$any(\$event))&quot;
    (ifxSuggestionSelected)=&quot;handleSuggestionSelected(\$any(\$event))&quot;
    [size]=&quot;sizeOptions[sizeIndex]&quot;
    [disabled]=&quot;disabled&quot;
    [showDeleteIcon]=&quot;showDeleteIcon&quot;
    [showSuggestions]=&quot;showSuggestions&quot;
    [enableHistory]=&quot;enableHistory&quot;
    [maxSuggestions]=&quot;maxSuggestions&quot;
    [maxHistoryItems]=&quot;maxHistoryItems&quot;
    [historyKey]=&quot;historyKey&quot;
    [historyHeaderText]=&quot;historyHeaderText&quot;
    [value]=&quot;value&quot;
    [autocomplete]=&quot;autocomplete&quot;
    [placeholder]=&quot;placeholder&quot;
    [ariaLabelText]=&quot;ariaLabelText&quot;
    [deleteIconAriaLabel]=&quot;deleteIconAriaLabel&quot;
    [historyDeleteAriaLabel]=&quot;historyDeleteAriaLabel&quot;
    [dropdownAriaLabel]=&quot;dropdownAriaLabel&quot;
    [suggestionAriaLabel]=&quot;suggestionAriaLabel&quot;
    [historyItemAriaLabel]=&quot;historyItemAriaLabel&quot;&gt;&lt;/ifx-search-field&gt;`;

  protected showDeleteIcon = true;
  protected disabled = false;
  protected readonly sizeOptions = ["s","m"];
  protected sizeIndex = 1;
  protected placeholder = "Search...";
  protected value = "";
  protected autocomplete = "on";
  protected showSuggestions = false;
  protected enableHistory = true;
  protected maxSuggestions = 10;
  protected maxHistoryItems = 5;
  protected historyKey = "ifx-search-history";
  protected historyHeaderText = "Recent Searches";
  protected ariaLabelText = "Search field";
  protected deleteIconAriaLabel = "Clear search";
  protected historyDeleteAriaLabel = "Remove from history";
  protected dropdownAriaLabel = "Search suggestions and history";
  protected suggestionAriaLabel = "Search suggestion";
  protected historyItemAriaLabel = "Search history item";

  protected toggleShowDeleteIcon() {
    this.showDeleteIcon = !this.showDeleteIcon;
  }

  protected toggleDisabled() {
    this.disabled = !this.disabled;
  }

  protected toggleSize() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizeOptions.length;
  }

  protected updatePlaceholder(value: string) {
    this.placeholder = value;
  }

  protected updateValue(value: string) {
    this.value = value;
  }

  protected updateAutocomplete(value: string) {
    this.autocomplete = value;
  }

  protected toggleShowSuggestions() {
    this.showSuggestions = !this.showSuggestions;
  }

  protected toggleEnableHistory() {
    this.enableHistory = !this.enableHistory;
  }

  protected updateMaxSuggestions(value: string) {
    this.maxSuggestions = Number(value);
  }

  protected updateMaxHistoryItems(value: string) {
    this.maxHistoryItems = Number(value);
  }

  protected updateHistoryKey(value: string) {
    this.historyKey = value;
  }

  protected updateHistoryHeaderText(value: string) {
    this.historyHeaderText = value;
  }

  protected updateAriaLabelText(value: string) {
    this.ariaLabelText = value;
  }

  protected updateDeleteIconAriaLabel(value: string) {
    this.deleteIconAriaLabel = value;
  }

  protected updateHistoryDeleteAriaLabel(value: string) {
    this.historyDeleteAriaLabel = value;
  }

  protected updateDropdownAriaLabel(value: string) {
    this.dropdownAriaLabel = value;
  }

  protected updateSuggestionAriaLabel(value: string) {
    this.suggestionAriaLabel = value;
  }

  protected updateHistoryItemAriaLabel(value: string) {
    this.historyItemAriaLabel = value;
  }

  protected getControlInputValue(event: Event | CustomEvent): string {
    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;
    return String(target?.value ?? '');
  }

  protected stringifyValue(value: unknown): string {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

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