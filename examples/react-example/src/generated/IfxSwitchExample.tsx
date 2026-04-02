import { IfxSwitch } from '@infineon/infineon-design-system-react';

export function IfxSwitchExample() {
  return (
    <>
      <IfxSwitch
        name="switch"
        value="on">
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
  return (
      <IfxSwitch
        name="switch"
        value="on">
        Switch
      </IfxSwitch>
  );
}`;
