import { IfxMultiselect, IfxMultiselectGroup, IfxMultiselectOption } from '@infineon/infineon-design-system-react';

export function IfxMultiselectGroupedExample() {
  const handleOpen = (event: CustomEvent) => {
    console.log('ifxOpen:', event);
    // Add your handler logic here
  };

  const handleSelect = (event: CustomEvent) => {
    console.log('ifxSelect:', event);
    // Add your handler logic here
  };

  return (
    <>
      <IfxMultiselect
        label="KPIs"
        placeholder="Select KPIs..."
        name="multiselect"
        disabled={false}
        readOnly={false}
        required={true}
        showSearch={true}
        showSelectAll={true}
        showExpandCollapse={true}
        error={false}
        caption=""
        showClearButton={true}
        noResultsMessage="No results found."
        showNoResultsMessage={true}
        searchPlaceholder="Search"
        selectAllLabel="Select all"
        expandLabel="Expand"
        collapseLabel="Collapse"
        ariaMultiSelectLabel="Multi-select dropdown"
        ariaMultiSelectLabelledBy=""
        ariaMultiSelectDescribedBy=""
        ariaSearchLabel="Search options"
        ariaClearLabel="Clear all selections"
        ariaToggleLabel="Toggle dropdown"
        ariaSelectAllLabel="Select all options"
        ariaExpandAllLabel="Expand all categories"
        ariaCollapseAllLabel="Collapse all categories"
        onIfxOpen={handleOpen}
        onIfxSelect={handleSelect}>
        <IfxMultiselectGroup label="Revenue">
          <IfxMultiselectOption value="revenue-total">
            Total revenue
          </IfxMultiselectOption>
          <IfxMultiselectOption value="revenue-region">
            Revenue by region
          </IfxMultiselectOption>
        </IfxMultiselectGroup>
        <IfxMultiselectGroup label="Costs">
          <IfxMultiselectOption value="costs-total">
            Total costs
          </IfxMultiselectOption>
          <IfxMultiselectOption value="costs-category">
            Costs by category
          </IfxMultiselectOption>
        </IfxMultiselectGroup>
      </IfxMultiselect>
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxMultiselect, IfxMultiselectGroup, IfxMultiselectOption } from '@infineon/infineon-design-system-react';

export function IfxMultiselectExample() {
  const handleOpen = (event: CustomEvent) => {
    console.log('ifxOpen:', event);
    // Add your handler logic here
  };

  const handleSelect = (event: CustomEvent) => {
    console.log('ifxSelect:', event);
    // Add your handler logic here
  };

  return (
      <IfxMultiselect
        label="KPIs"
        placeholder="Select KPIs..."
        name="multiselect"
        disabled={false}
        readOnly={false}
        required={true}
        showSearch={true}
        showSelectAll={true}
        showExpandCollapse={true}
        error={false}
        caption=""
        showClearButton={true}
        noResultsMessage="No results found."
        showNoResultsMessage={true}
        searchPlaceholder="Search"
        selectAllLabel="Select all"
        expandLabel="Expand"
        collapseLabel="Collapse"
        ariaMultiSelectLabel="Multi-select dropdown"
        ariaMultiSelectLabelledBy=""
        ariaMultiSelectDescribedBy=""
        ariaSearchLabel="Search options"
        ariaClearLabel="Clear all selections"
        ariaToggleLabel="Toggle dropdown"
        ariaSelectAllLabel="Select all options"
        ariaExpandAllLabel="Expand all categories"
        ariaCollapseAllLabel="Collapse all categories"
        onIfxOpen={handleOpen}
        onIfxSelect={handleSelect}>
        <IfxMultiselectGroup label="Revenue">
          <IfxMultiselectOption value="revenue-total">
            Total revenue
          </IfxMultiselectOption>
          <IfxMultiselectOption value="revenue-region">
            Revenue by region
          </IfxMultiselectOption>
        </IfxMultiselectGroup>
        <IfxMultiselectGroup label="Costs">
          <IfxMultiselectOption value="costs-total">
            Total costs
          </IfxMultiselectOption>
          <IfxMultiselectOption value="costs-category">
            Costs by category
          </IfxMultiselectOption>
        </IfxMultiselectGroup>
      </IfxMultiselect>
  );
}`;
