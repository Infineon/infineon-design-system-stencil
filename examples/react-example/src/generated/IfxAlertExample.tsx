import { IfxAlert } from '@infineon/infineon-design-system-react';

export function IfxAlertExample() {
  const handleClose = (event: CustomEvent) => {
    console.log('ifxClose:', event);
    // Add your handler logic here
  };

  return (
    <>
      <IfxAlert
        ariaLive="assertive"
        variant="primary"
        icon="c-info-16"
        closable={true}
        onIfxClose={handleClose}>
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
  const handleClose = (event: CustomEvent) => {
    console.log('ifxClose:', event);
    // Add your handler logic here
  };

  return (
      <IfxAlert
        ariaLive="assertive"
        variant="primary"
        icon="c-info-16"
        closable={true}
        onIfxClose={handleClose}>
        Attention! This is an alert message — check it out!
      </IfxAlert>
  );
}`;
