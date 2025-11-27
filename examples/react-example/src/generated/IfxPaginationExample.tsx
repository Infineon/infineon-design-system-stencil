import { IfxPagination } from '@infineon/infineon-design-system-react';

export function IfxPaginationExample() {
  const handlePageChange = (event: CustomEvent) => {
    console.log('ifxPageChange:', event.detail);
    // Add your handler logic here
  };

  const handleItemsPerPageChange = (event: CustomEvent) => {
    console.log('ifxItemsPerPageChange:', event.detail);
    // Add your handler logic here
  };

  return (
    <>
      <IfxPagination
        total={50}
        currentPage={1}
        showItemsPerPage={true}
        itemsPerPage={`[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}]`}
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
    console.log('ifxPageChange:', event.detail);
    // Add your handler logic here
  };

  const handleItemsPerPageChange = (event: CustomEvent) => {
    console.log('ifxItemsPerPageChange:', event.detail);
    // Add your handler logic here
  };

  return (
      <IfxPagination
        total={50}
        currentPage={1}
        showItemsPerPage={true}
        itemsPerPage={\`[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}]\`}
        onIfxPageChange={handlePageChange}
        onIfxItemsPerPageChange={handleItemsPerPageChange} />
  );
}`;
