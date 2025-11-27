import { IfxProgressBar } from '@infineon/infineon-design-system-react';

export function IfxProgressBarExample() {
  return (
    <>
      <IfxProgressBar
        value={50}
        size="m"
        showLabel={false} />
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxProgressBar } from '@infineon/infineon-design-system-react';

export function IfxProgressBarExample() {
  return (
      <IfxProgressBar
        value={50}
        size="m"
        showLabel={false} />
  );
}`;
