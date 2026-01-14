import { IfxSpinner } from '@infineon/infineon-design-system-react';

export function IfxSpinnerExample() {
  return (
    <>
      <IfxSpinner
        ariaLabel=""
        variant="default"
        size="m"
        inverted={false} />
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxSpinner } from '@infineon/infineon-design-system-react';

export function IfxSpinnerExample() {
  return (
      <IfxSpinner
        ariaLabel=""
        variant="default"
        size="m"
        inverted={false} />
  );
}`;
