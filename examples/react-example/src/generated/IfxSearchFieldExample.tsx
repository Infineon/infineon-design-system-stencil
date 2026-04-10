import { IfxSearchField } from '@infineon/infineon-design-system-react';

export function IfxSearchFieldExample() {
  return (
    <>
      <IfxSearchField
        size="m"
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
        ariaLabelText="Search field"
        deleteIconAriaLabel="Clear search"
        historyDeleteAriaLabel="Remove from history"
        dropdownAriaLabel="Search suggestions and history"
        suggestionAriaLabel="Search suggestion"
        historyItemAriaLabel="Search history item" />
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxSearchField } from '@infineon/infineon-design-system-react';

export function IfxSearchFieldExample() {
  return (
      <IfxSearchField
        size="m"
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
        ariaLabelText="Search field"
        deleteIconAriaLabel="Clear search"
        historyDeleteAriaLabel="Remove from history"
        dropdownAriaLabel="Search suggestions and history"
        suggestionAriaLabel="Search suggestion"
        historyItemAriaLabel="Search history item" />
  );
}`;
