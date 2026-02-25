import { IfxRadioButton, IfxRadioButtonGroup } from '@infineon/infineon-design-system-react';

export function IfxRadioButtonGroupExample() {
  const handleSetGroupError = (event: CustomEvent) => {
    console.log('setGroupError:', event);
    // Add your handler logic here
  };

  return (
    <>
      <IfxRadioButtonGroup
        alignment="vertical"
        groupLabelText="Group Label"
        captionText="Caption text, description, error notification">
        <IfxRadioButton
          value={0}
          size="m">
          Option 0
        </IfxRadioButton>
        <IfxRadioButton
          value={1}
          size="m">
          Option 1
        </IfxRadioButton>
        <IfxRadioButton
          value={2}
          size="m">
          Option 2
        </IfxRadioButton>
      </IfxRadioButtonGroup>
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxRadioButton, IfxRadioButtonGroup } from '@infineon/infineon-design-system-react';

export function IfxRadioButtonGroupExample() {
  const handleSetGroupError = (event: CustomEvent) => {
    console.log('setGroupError:', event);
    // Add your handler logic here
  };

  return (
      <IfxRadioButtonGroup
        alignment="vertical"
        groupLabelText="Group Label"
        captionText="Caption text, description, error notification">
        <IfxRadioButton
          value={0}
          size="m">
          Option 0
        </IfxRadioButton>
        <IfxRadioButton
          value={1}
          size="m">
          Option 1
        </IfxRadioButton>
        <IfxRadioButton
          value={2}
          size="m">
          Option 2
        </IfxRadioButton>
      </IfxRadioButtonGroup>
  );
}`;
