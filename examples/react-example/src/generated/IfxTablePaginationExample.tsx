import { IfxTable } from '@infineon/infineon-design-system-react';

export function IfxTablePaginationExample() {
  const handleSelectionChange = (event: CustomEvent) => {
    console.log('ifxSelectionChange:', event);
    // Add your handler logic here
  };

  const handleSortChange = (event: CustomEvent) => {
    console.log('ifxSortChange:', event);
    // Add your handler logic here
  };

  return (
    <>
      <IfxTable
        rowHeight="default"
        tableHeight="auto"
        pagination=""
        filterOrientation="none"
        variant="default"
        onIfxSelectionChange={handleSelectionChange}
        onIfxSortChange={handleSortChange} />
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxTable } from '@infineon/infineon-design-system-react';

export function IfxTableExample() {
  const handleSelectionChange = (event: CustomEvent) => {
    console.log('ifxSelectionChange:', event);
    // Add your handler logic here
  };

  const handleSortChange = (event: CustomEvent) => {
    console.log('ifxSortChange:', event);
    // Add your handler logic here
  };

  return (
      <IfxTable
        rowHeight="default"
        tableHeight="auto"
        pagination=""
        filterOrientation="none"
        variant="default"
        onIfxSelectionChange={handleSelectionChange}
        onIfxSortChange={handleSortChange} />
  );
}`;
