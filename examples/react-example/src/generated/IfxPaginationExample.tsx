import { IfxPagination } from '@infineon/infineon-design-system-react';

export function IfxPaginationExample() {
  const handlePageChange = (event: CustomEvent) => {
    console.log('ifxPageChange:', event);
    // Add your handler logic here
  };

  const handleItemsPerPageChange = (event: CustomEvent) => {
    console.log('ifxItemsPerPageChange:', event);
    // Add your handler logic here
  };

  return (
    <>
      <IfxPagination
        total={50}
        currentPage={1}
        showItemsPerPage=""
        itemsPerPage={JSON.parse(`[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}]`)}
        onIfxPageChange={handlePageChange}
        onIfxItemsPerPageChange={handleItemsPerPageChange} />
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxPagination } from '@infineon/infineon-design-system-react';

export function IfxPaginationExample() {
  const handlePageChange = (event: CustomEvent) => {
    console.log('ifxPageChange:', event);
    // Add your handler logic here
  };

  const handleItemsPerPageChange = (event: CustomEvent) => {
    console.log('ifxItemsPerPageChange:', event);
    // Add your handler logic here
  };

  return (
      <IfxPagination
        total={50}
        currentPage={1}
        showItemsPerPage=""
        itemsPerPage={JSON.parse(\`[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}]\`)}
        onIfxPageChange={handlePageChange}
        onIfxItemsPerPageChange={handleItemsPerPageChange} />
  );
}`;
