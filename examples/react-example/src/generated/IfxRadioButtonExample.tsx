import { IfxRadioButton } from '@infineon/infineon-design-system-react';

export function IfxRadioButtonExample() {
  const handleChange = (event: CustomEvent) => {
    console.log('ifxChange:', event);
    // Add your handler logic here
  };

  const handleError = (event: CustomEvent) => {
    console.log('ifxError:', event);
    // Add your handler logic here
  };

  return (
    <>
      <IfxRadioButton
        size="s"
        name="radio-button"
        value="radio"
        onIfxChange={handleChange}
        onIfxError={handleError}>
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
  const handleChange = (event: CustomEvent) => {
    console.log('ifxChange:', event);
    // Add your handler logic here
  };

  const handleError = (event: CustomEvent) => {
    console.log('ifxError:', event);
    // Add your handler logic here
  };

  return (
      <IfxRadioButton
        size="s"
        name="radio-button"
        value="radio"
        onIfxChange={handleChange}
        onIfxError={handleError}>
        Text
      </IfxRadioButton>
  );
}`;
