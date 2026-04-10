import { IfxCheckbox, IfxCheckboxGroup } from '@infineon/infineon-design-system-react';

export function IfxCheckboxGroupExample() {
  return (
    <>
      <IfxCheckboxGroup
        alignment="vertical"
        groupLabelText="Group Label"
        captionText="Caption text, description, error notification">
        <IfxCheckbox
          value={0}
          size="m">
          Option 0
        </IfxCheckbox>
        <IfxCheckbox
          value={1}
          size="m">
          Option 1
        </IfxCheckbox>
        <IfxCheckbox
          value={2}
          size="m">
          Option 2
        </IfxCheckbox>
      </IfxCheckboxGroup>
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxCheckbox, IfxCheckboxGroup } from '@infineon/infineon-design-system-react';

export function IfxCheckboxGroupExample() {
  return (
      <IfxCheckboxGroup
        alignment="vertical"
        groupLabelText="Group Label"
        captionText="Caption text, description, error notification">
        <IfxCheckbox
          value={0}
          size="m">
          Option 0
        </IfxCheckbox>
        <IfxCheckbox
          value={1}
          size="m">
          Option 1
        </IfxCheckbox>
        <IfxCheckbox
          value={2}
          size="m">
          Option 2
        </IfxCheckbox>
      </IfxCheckboxGroup>
  );
}`;
