import { IfxRadioButton } from '@infineon/infineon-design-system-react';

export function IfxRadioButtonExample() {
  return (
    <>
      <IfxRadioButton
        size="s"
        name="radio-button"
        value="radio">
        Text
      </IfxRadioButton>
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxRadioButton } from '@infineon/infineon-design-system-react';

export function IfxRadioButtonExample() {
  return (
      <IfxRadioButton
        size="s"
        name="radio-button"
        value="radio">
        Text
      </IfxRadioButton>
  );
}`;
