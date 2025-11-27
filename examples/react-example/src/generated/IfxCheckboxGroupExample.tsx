import { IfxCheckbox, IfxCheckboxGroup } from '@infineon/infineon-design-system-react';

export function IfxCheckboxGroupExample() {
  const handleSetGroupError = (event: CustomEvent) => {
    console.log('setGroupError:', event.detail);
    // Add your handler logic here
  };

  return (
    <>
      <IfxCheckboxGroup
        alignment="vertical"
        showGroupLabel={false}
        groupLabelText="Group Label"
        showCaption={false}
        captionText="Caption text, description, error notification"
        showCaptionIcon={false}
        required={false}>
        <IfxCheckbox
          value={0}
          disabled={false}
          checked={false}
          size="m"
          indeterminate={false}
          error={false}>
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
  const handleSetGroupError = (event: CustomEvent) => {
    console.log('setGroupError:', event.detail);
    // Add your handler logic here
  };

  return (
      <IfxCheckboxGroup
        alignment="vertical"
        showGroupLabel={false}
        groupLabelText="Group Label"
        showCaption={false}
        captionText="Caption text, description, error notification"
        showCaptionIcon={false}
        required={false}>
        <IfxCheckbox
          value={0}
          disabled={false}
          checked={false}
          size="m"
          indeterminate={false}
          error={false}>
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
