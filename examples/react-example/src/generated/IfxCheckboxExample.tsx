import { IfxCheckbox } from '@infineon/infineon-design-system-react';

export function IfxCheckboxExample() {
  return (
    <>
      <IfxCheckbox
        error={false}
        disabled={false}
        checked={false}
        size="s"
        indeterminate={false}
        name="checkbox">
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
  return (
      <IfxCheckbox
        error={false}
        disabled={false}
        checked={false}
        size="s"
        indeterminate={false}
        name="checkbox">
        Text
      </IfxCheckbox>
  );
}`;
