import { IfxIconButton } from '@infineon/infineon-design-system-react';

export function IfxIconButtonExample() {
  return (
    <>
      <IfxIconButton
        shape="round"
        variant="primary"
        icon="c-info-16"
        href=""
        target="_blank"
        size="m"
        ariaLabel="Icon Button" />
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxIconButton } from '@infineon/infineon-design-system-react';

export function IfxIconButtonExample() {
  return (
      <IfxIconButton
        shape="round"
        variant="primary"
        icon="c-info-16"
        href=""
        target="_blank"
        size="m"
        ariaLabel="Icon Button" />
  );
}`;
