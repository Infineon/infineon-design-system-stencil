import { IfxAiLabel } from '@infineon/infineon-design-system-react';

export function IfxAiLabelExample() {
  return (
    <>
      <IfxAiLabel
        divider={true}
        variant="label" />
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxAiLabel } from '@infineon/infineon-design-system-react';

export function IfxAiLabelExample() {
  return (
      <IfxAiLabel
        divider={true}
        variant="label" />
  );
}`;
