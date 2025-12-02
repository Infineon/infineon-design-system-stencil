import { IfxSearchField } from '@infineon/infineon-design-system-react';

export function IfxSearchFieldExample() {
  const handleInput = (event: CustomEvent) => {
    console.log('ifxInput:', event);
    // Add your handler logic here
  };

  const handleSuggestionRequested = (event: CustomEvent) => {
    console.log('ifxSuggestionRequested:', event);
    // Add your handler logic here
  };

  const handleSuggestionSelected = (event: CustomEvent) => {
    console.log('ifxSuggestionSelected:', event);
    // Add your handler logic here
  };

  const handleFocus = (event: CustomEvent) => {
    console.log('ifxFocus:', event);
    // Add your handler logic here
  };

  const handleBlur = (event: CustomEvent) => {
    console.log('ifxBlur:', event);
    // Add your handler logic here
  };

  return (
    <>
      <IfxSearchField
        size="m"
        disabled={false}
        showDeleteIcon={true}
        showSuggestions={false}
        enableHistory={true}
        maxSuggestions={10}
        maxHistoryItems={5}
        historyKey="ifx-search-history"
        historyHeaderText="Recent Searches"
        value=""
        autocomplete="on"
        placeholder="Search..."
        ariaLabel="Search field"
        deleteIconAriaLabel="Clear search"
        historyDeleteAriaLabel="Remove from history"
        dropdownAriaLabel="Search suggestions and history"
        suggestionAriaLabel="Search suggestion"
        historyItemAriaLabel="Search history item"
        onIfxInput={handleInput}
        onIfxSuggestionRequested={handleSuggestionRequested}
        onIfxSuggestionSelected={handleSuggestionSelected}
        onIfxFocus={handleFocus}
        onIfxBlur={handleBlur} />
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxSearchField } from '@infineon/infineon-design-system-react';

export function IfxSearchFieldExample() {
  const handleInput = (event: CustomEvent) => {
    console.log('ifxInput:', event);
    // Add your handler logic here
  };

  const handleSuggestionRequested = (event: CustomEvent) => {
    console.log('ifxSuggestionRequested:', event);
    // Add your handler logic here
  };

  const handleSuggestionSelected = (event: CustomEvent) => {
    console.log('ifxSuggestionSelected:', event);
    // Add your handler logic here
  };

  const handleFocus = (event: CustomEvent) => {
    console.log('ifxFocus:', event);
    // Add your handler logic here
  };

  const handleBlur = (event: CustomEvent) => {
    console.log('ifxBlur:', event);
    // Add your handler logic here
  };

  return (
      <IfxSearchField
        size="m"
        disabled={false}
        showDeleteIcon={true}
        showSuggestions={false}
        enableHistory={true}
        maxSuggestions={10}
        maxHistoryItems={5}
        historyKey="ifx-search-history"
        historyHeaderText="Recent Searches"
        value=""
        autocomplete="on"
        placeholder="Search..."
        ariaLabel="Search field"
        deleteIconAriaLabel="Clear search"
        historyDeleteAriaLabel="Remove from history"
        dropdownAriaLabel="Search suggestions and history"
        suggestionAriaLabel="Search suggestion"
        historyItemAriaLabel="Search history item"
        onIfxInput={handleInput}
        onIfxSuggestionRequested={handleSuggestionRequested}
        onIfxSuggestionSelected={handleSuggestionSelected}
        onIfxFocus={handleFocus}
        onIfxBlur={handleBlur} />
  );
}`;
