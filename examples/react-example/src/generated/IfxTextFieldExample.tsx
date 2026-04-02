import { IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxTextFieldExample() {
  return (
    <>
      <IfxTextField
        error={false}
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
        ariaLabel="text field for user input" />
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxTextFieldExample() {
  return (
      <IfxTextField
        error={false}
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
        ariaLabel="text field for user input" />
  );
}`;
