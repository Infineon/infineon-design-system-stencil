import { IfxTable } from '@infineon/infineon-design-system-react';

export function IfxTableDefaultStateExample() {
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
        filterOrientation="none"
        variant="default"
        fitColumn={false}
        columnMinWidth={200}
        columnWidth={100}
        headline="Matching results"
        headlineNumber={0}
        pagination={false}
        serverSidePagination={false}
        showLoading={false}
        enableSelection={false}
        fitColumns={false}
        paginationItemsPerPage={JSON.parse(`[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}]`)}
        cols={[{"headerName":"ID","field":"id","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Item","field":"item","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Date","field":"date"}]}
        rows={[{"id":"1","item":"Item 1","price":356,"date":"2025-06-25"},{"id":"2","item":"Item 2","price":55,"date":"2025-03-26"},{"id":"3","item":"Item 3","price":24},{"id":"4","item":"x","price":874},{"id":"5","item":"x","price":689},{"id":"6","item":"x","price":46},{"id":"7","item":"Item 7","price":421},{"id":"8","item":"Item 8","price":17},{"id":"9","item":"x","price":752},{"id":"10","item":"Item 10","price":73},{"id":"11","item":"x","price":94}]}
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
        filterOrientation="none"
        variant="default"
        fitColumn={false}
        columnMinWidth={200}
        columnWidth={100}
        headline="Matching results"
        headlineNumber={0}
        pagination={false}
        serverSidePagination={false}
        showLoading={false}
        enableSelection={false}
        fitColumns={false}
        paginationItemsPerPage={JSON.parse(\`[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}]\`)}
        cols={[{"headerName":"ID","field":"id","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Item","field":"item","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Date","field":"date"}]}
        rows={[{"id":"1","item":"Item 1","price":356,"date":"2025-06-25"},{"id":"2","item":"Item 2","price":55,"date":"2025-03-26"},{"id":"3","item":"Item 3","price":24},{"id":"4","item":"x","price":874},{"id":"5","item":"x","price":689},{"id":"6","item":"x","price":46},{"id":"7","item":"Item 7","price":421},{"id":"8","item":"Item 8","price":17},{"id":"9","item":"x","price":752},{"id":"10","item":"Item 10","price":73},{"id":"11","item":"x","price":94}]}
        onIfxSelectionChange={handleSelectionChange}
        onIfxSortChange={handleSortChange} />
  );
}`;
