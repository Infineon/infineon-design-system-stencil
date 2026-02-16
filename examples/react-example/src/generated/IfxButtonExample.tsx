import { IfxButton } from '@infineon/infineon-design-system-react';

export function IfxButtonExample() {
  return (
    <>
      <IfxButton
        type="button"
        ariaLabel="Button"
        variant="primary"
        size="m"
        target="_blank"
        theme="default"
        fullWidth={false}>
        Button
      </IfxButton>
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxButton } from '@infineon/infineon-design-system-react';

export function IfxButtonExample() {
  return (
      <IfxButton
        type="button"
        ariaLabel="Button"
        variant="primary"
        size="m"
        target="_blank"
        theme="default"
        fullWidth={false}>
        Button
      </IfxButton>
  );
}`;
