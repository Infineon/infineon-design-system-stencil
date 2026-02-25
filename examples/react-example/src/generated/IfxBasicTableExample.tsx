import { IfxBasicTable } from '@infineon/infineon-design-system-react';

export function IfxBasicTableExample() {
  return (
    <>
      <IfxBasicTable
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
        tableHeight="auto"
        rowHeight="default"
        variant="default" />
  );
}`;
