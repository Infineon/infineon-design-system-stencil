import { IfxBasicTable } from '@infineon/infineon-design-system-react';

export function IfxBasicTableExample() {
  return (
    <>
      <IfxBasicTable
        cols={JSON.parse(`[{"headerName":"ID","field":"id","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Item","field":"item","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Date","field":"date"}]`)}
        rows={JSON.parse(`[{"id":1,"item":"Item 1","price":356,"date":"2025-05-11"},{"id":2,"item":"Item 2","price":55,"date":"2025-03-26"},{"id":3,"item":"Item 3","price":24},{"id":4,"item":"Item 4","price":874,"date":"2025-04-30"},{"id":5,"item":"Item 5","price":689,"date":"2025-09-14"},{"id":6,"item":"Item 6","price":46},{"id":7,"item":"Item 7","price":421,"date":"2026-07-25"},{"id":8,"item":"Item 8","price":17,"date":"2026-06-28"},{"id":9,"item":"Item 9","price":752},{"id":10,"item":"Item 10","price":73,"date":"2026-01-27"},{"id":11,"item":"Item 11","price":94,"date":"2026-10-31"},{"id":12,"item":"Item 12","price":846}]`)}
        tableHeight="auto"
        rowHeight="default"
        variant="default" />
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxBasicTable } from '@infineon/infineon-design-system-react';

export function IfxBasicTableExample() {
  return (
      <IfxBasicTable
        cols={JSON.parse(\`[{"headerName":"ID","field":"id","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Item","field":"item","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Date","field":"date"}]\`)}
        rows={JSON.parse(\`[{"id":1,"item":"Item 1","price":356,"date":"2025-05-11"},{"id":2,"item":"Item 2","price":55,"date":"2025-03-26"},{"id":3,"item":"Item 3","price":24},{"id":4,"item":"Item 4","price":874,"date":"2025-04-30"},{"id":5,"item":"Item 5","price":689,"date":"2025-09-14"},{"id":6,"item":"Item 6","price":46},{"id":7,"item":"Item 7","price":421,"date":"2026-07-25"},{"id":8,"item":"Item 8","price":17,"date":"2026-06-28"},{"id":9,"item":"Item 9","price":752},{"id":10,"item":"Item 10","price":73,"date":"2026-01-27"},{"id":11,"item":"Item 11","price":94,"date":"2026-10-31"},{"id":12,"item":"Item 12","price":846}]\`)}
        tableHeight="auto"
        rowHeight="default"
        variant="default" />
  );
}`;
