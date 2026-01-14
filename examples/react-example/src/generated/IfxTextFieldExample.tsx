import { IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxTextFieldExample() {
  const handleInput = (event: CustomEvent) => {
    console.log('ifxInput:', event);
    // Add your handler logic here
  };

  return (
    <>
      <IfxTextField
        error={false}
        disabled={false}
        size="m"
        icon=""
        success={false}
        placeholder="Placeholder"
        readOnly={false}
        caption="Caption"
        label="Label"
        required={true}
        name="text-field"
        showDeleteIcon={false}
        value=""
        autocomplete="on"
        type="text"
        internalId="text-field"
        ariaLabel="text field for user input"
        onIfxInput={handleInput} />
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxTextFieldExample() {
  const handleInput = (event: CustomEvent) => {
    console.log('ifxInput:', event);
    // Add your handler logic here
  };

  return (
      <IfxTextField
        error={false}
        disabled={false}
        size="m"
        icon=""
        success={false}
        placeholder="Placeholder"
        readOnly={false}
        caption="Caption"
        label="Label"
        required={true}
        name="text-field"
        showDeleteIcon={false}
        value=""
        autocomplete="on"
        type="text"
        internalId="text-field"
        ariaLabel="text field for user input"
        onIfxInput={handleInput} />
  );
}`;
