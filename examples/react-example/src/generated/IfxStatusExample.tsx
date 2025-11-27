import { IfxStatus } from '@infineon/infineon-design-system-react';

export function IfxStatusExample() {
  return (
    <>
      <IfxStatus
        label="text"
        color="orange-500"
        border={true} />
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxStatus } from '@infineon/infineon-design-system-react';

export function IfxStatusExample() {
  return (
      <IfxStatus
        label="text"
        color="orange-500"
        border={true} />
  );
}`;
