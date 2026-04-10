import { IfxAlert } from '@infineon/infineon-design-system-react';

export function IfxAlertExample() {
  return (
    <>
      <IfxAlert
        ariaLiveText="assertive"
        variant="primary"
        icon="c-info-16"
        closable={true}>
        Attention! This is an alert message — check it out!
      </IfxAlert>
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxAlert } from '@infineon/infineon-design-system-react';

export function IfxAlertExample() {
  return (
      <IfxAlert
        ariaLiveText="assertive"
        variant="primary"
        icon="c-info-16"
        closable={true}>
        Attention! This is an alert message — check it out!
      </IfxAlert>
  );
}`;
