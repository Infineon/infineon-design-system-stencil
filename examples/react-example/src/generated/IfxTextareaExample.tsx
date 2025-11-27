import { IfxTextarea } from '@infineon/infineon-design-system-react';

export function IfxTextareaExample() {
  return (
    <>
      <IfxTextarea
        caption="Caption text, description, error notification"
        cols={43}
        disabled={false}
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
        fullWidth={false} />
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxTextarea } from '@infineon/infineon-design-system-react';

export function IfxTextareaExample() {
  return (
      <IfxTextarea
        caption="Caption text, description, error notification"
        cols={43}
        disabled={false}
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
        fullWidth={false} />
  );
}`;
