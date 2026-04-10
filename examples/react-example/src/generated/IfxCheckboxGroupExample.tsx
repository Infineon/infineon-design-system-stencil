import { IfxCheckbox, IfxCheckboxGroup } from '@infineon/infineon-design-system-react';

export function IfxCheckboxGroupExample() {
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
      <IfxCheckboxGroup
        alignment="vertical"
        groupLabelText="Group Label"
        captionText="Caption text, description, error notification"
        size="m"
        showGroupLabel={false}
        showCaption={false}
        showCaptionIcon={false}
        required={false}>
        <IfxCheckbox
          value={0}
          size="m"
          onIfxChange={handleChange}
          onIfxError={handleError}>
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
  const handleChange = (event: CustomEvent) => {
    console.log('ifxChange:', event);
    // Add your handler logic here
  };

  const handleError = (event: CustomEvent) => {
    console.log('ifxError:', event);
    // Add your handler logic here
  };

  return (
      <IfxCheckboxGroup
        alignment="vertical"
        groupLabelText="Group Label"
        captionText="Caption text, description, error notification"
        size="m"
        showGroupLabel={false}
        showCaption={false}
        showCaptionIcon={false}
        required={false}>
        <IfxCheckbox
          value={0}
          size="m"
          onIfxChange={handleChange}
          onIfxError={handleError}>
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
