import { IfxIndicator } from '@infineon/infineon-design-system-react';

export function IfxIndicatorExample() {
  return (
    <>
      <IfxIndicator
        variant="number"
        number={1} />
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxIndicator } from '@infineon/infineon-design-system-react';

export function IfxIndicatorExample() {
  return (
      <IfxIndicator
        variant="number"
        number={1} />
  );
}`;
