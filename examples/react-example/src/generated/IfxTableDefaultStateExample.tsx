import { IfxTable } from '@infineon/infineon-design-system-react';

export function IfxTableDefaultStateExample() {
  return (
    <>
      <IfxTable
        rowHeight="default"
        cols={[{"headerName":"ID","field":"id","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Item","field":"item","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Date","field":"date"}]}
        rows={[{"id":"1","item":"Item 1","price":356,"date":"2025-06-25"},{"id":"2","item":"Item 2","price":55,"date":"2025-03-26"},{"id":"3","item":"Item 3","price":24},{"id":"4","item":"x","price":874},{"id":"5","item":"x","price":689},{"id":"6","item":"x","price":46},{"id":"7","item":"Item 7","price":421},{"id":"8","item":"Item 8","price":17},{"id":"9","item":"x","price":752},{"id":"10","item":"Item 10","price":73},{"id":"11","item":"x","price":94}]}
        tableHeight="auto"
        paginationItemsPerPage={[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}, {"value":"all","selected":false}]}
        filterOrientation="none"
        variant="default"
        fitColumn={false}
        columnMinWidth={200}
        columnWidth={100}
        headline="Matching results"
        headlineNumber={0} />
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxTable } from '@infineon/infineon-design-system-react';

export function IfxTableExample() {
  return (
      <IfxTable
        rowHeight="default"
        cols={[{"headerName":"ID","field":"id","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Item","field":"item","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Date","field":"date"}]}
        rows={[{"id":"1","item":"Item 1","price":356,"date":"2025-06-25"},{"id":"2","item":"Item 2","price":55,"date":"2025-03-26"},{"id":"3","item":"Item 3","price":24},{"id":"4","item":"x","price":874},{"id":"5","item":"x","price":689},{"id":"6","item":"x","price":46},{"id":"7","item":"Item 7","price":421},{"id":"8","item":"Item 8","price":17},{"id":"9","item":"x","price":752},{"id":"10","item":"Item 10","price":73},{"id":"11","item":"x","price":94}]}
        tableHeight="auto"
        paginationItemsPerPage={[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}, {"value":"all","selected":false}]}
        filterOrientation="none"
        variant="default"
        fitColumn={false}
        columnMinWidth={200}
        columnWidth={100}
        headline="Matching results"
        headlineNumber={0} />
  );
}`;
