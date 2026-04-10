import { IfxTextarea } from '@infineon/infineon-design-system-react';

export function IfxTextareaExample() {
  const handleInput = (event: CustomEvent) => {
    console.log('ifxInput:', event);
    // Add your handler logic here
  };

  return (
    <>
      <IfxTextarea
        caption="Caption text, description, error notification"
        cols={43}
        error={false}
        label="Label Text"
        name="textarea"
        placeholder="Placeholder"
        required={true}
        readOnly={false}
        resize="both"
        rows={5}
        value=""
        wrap="soft"
        fullWidth={false}
        disabled={false}
        onIfxInput={handleInput} />
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxTextarea } from '@infineon/infineon-design-system-react';

export function IfxTextareaExample() {
  const handleInput = (event: CustomEvent) => {
    console.log('ifxInput:', event);
    // Add your handler logic here
  };

  return (
      <IfxTextarea
        caption="Caption text, description, error notification"
        cols={43}
        error={false}
        label="Label Text"
        name="textarea"
        placeholder="Placeholder"
        required={true}
        readOnly={false}
        resize="both"
        rows={5}
        value=""
        wrap="soft"
        fullWidth={false}
        disabled={false}
        onIfxInput={handleInput} />
  );
}`;
