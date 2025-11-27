import { IfxSwitch } from '@infineon/infineon-design-system-react';

export function IfxSwitchExample() {
  const handleChange = (event: CustomEvent) => {
    console.log('ifxChange:', event.detail);
    // Add your handler logic here
  };

  return (
    <>
      <IfxSwitch
        checked={false}
        name="switch"
        value="switch"
        disabled={false}
        onIfxChange={handleChange}>
        Switch
      </IfxSwitch>
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxSwitch } from '@infineon/infineon-design-system-react';

export function IfxSwitchExample() {
  const handleChange = (event: CustomEvent) => {
    console.log('ifxChange:', event.detail);
    // Add your handler logic here
  };

  return (
      <IfxSwitch
        checked={false}
        name="switch"
        value="switch"
        disabled={false}
        onIfxChange={handleChange}>
        Switch
      </IfxSwitch>
  );
}`;
