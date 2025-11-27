import { IfxBasicTable } from '@infineon/infineon-design-system-react';

export function IfxBasicTableExample() {
  return (
    <>
      <IfxBasicTable
        cols={`[{"headerName":"Make","field":"make","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Model","field":"model","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Age","field":"age"}]`}
        rows={`[{"make":"Toyota","model":"Celica","price":35000,"age":10},{"make":"Ford","model":"Mondeo","price":32000,"age":12},{"make":"Porsche","model":"Boxster","price":72000},{"make":"Toyota","model":"Celica","price":37000,"age":8},{"make":"Ford","model":"Mondeo","price":34000,"age":10},{"make":"Porsche","model":"Boxster","price":72000},{"make":"Toyota","model":"Celica","price":38000,"age":7},{"make":"Ford","model":"Mondeo","price":36000,"age":8},{"make":"Porsche","model":"Boxster","price":72000},{"make":"Toyota","model":"Celica","price":39000,"age":2},{"make":"Ford","model":"Mondeo","price":38000,"age":6},{"make":"Porsche","model":"Boxster","price":72000}]`}
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
        cols={\`[{"headerName":"Make","field":"make","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Model","field":"model","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Age","field":"age"}]\`}
        rows={\`[{"make":"Toyota","model":"Celica","price":35000,"age":10},{"make":"Ford","model":"Mondeo","price":32000,"age":12},{"make":"Porsche","model":"Boxster","price":72000},{"make":"Toyota","model":"Celica","price":37000,"age":8},{"make":"Ford","model":"Mondeo","price":34000,"age":10},{"make":"Porsche","model":"Boxster","price":72000},{"make":"Toyota","model":"Celica","price":38000,"age":7},{"make":"Ford","model":"Mondeo","price":36000,"age":8},{"make":"Porsche","model":"Boxster","price":72000},{"make":"Toyota","model":"Celica","price":39000,"age":2},{"make":"Ford","model":"Mondeo","price":38000,"age":6},{"make":"Porsche","model":"Boxster","price":72000}]\`}
        tableHeight="auto"
        rowHeight="default"
        variant="default" />
  );
}`;
