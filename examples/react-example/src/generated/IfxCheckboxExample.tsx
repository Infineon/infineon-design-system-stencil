import { IfxCheckbox } from '@infineon/infineon-design-system-react';

export function IfxCheckboxExample() {
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
      <IfxCheckbox
        error={false}
        disabled={false}
        checked={false}
        size="s"
        indeterminate={false}
        name="checkbox"
        onIfxChange={handleChange}
        onIfxError={handleError}>
        Text
      </IfxCheckbox>
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxCheckbox } from '@infineon/infineon-design-system-react';

export function IfxCheckboxExample() {
  const handleChange = (event: CustomEvent) => {
    console.log('ifxChange:', event);
    // Add your handler logic here
  };

  const handleError = (event: CustomEvent) => {
    console.log('ifxError:', event);
    // Add your handler logic here
  };

  return (
      <IfxCheckbox
        error={false}
        disabled={false}
        checked={false}
        size="s"
        indeterminate={false}
        name="checkbox"
        onIfxChange={handleChange}
        onIfxError={handleError}>
        Text
      </IfxCheckbox>
  );
}`;
