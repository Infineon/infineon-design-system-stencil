import { IfxErrorPage } from '@infineon/infineon-design-system-react';

export function IfxErrorPageExample() {
  return (
    <>
      <IfxErrorPage
        illustrationUrl=""
        alt={403}
        type={403}
        headline=""
        description="" />
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxErrorPage } from '@infineon/infineon-design-system-react';

export function IfxErrorPageExample() {
  return (
      <IfxErrorPage
        illustrationUrl=""
        alt={403}
        type={403}
        headline=""
        description="" />
  );
}`;
