import { IfxDatePicker } from '@infineon/infineon-design-system-react';

export function IfxDatePickerExample() {
  const handleDate = (event: CustomEvent) => {
    console.log('ifxDate:', event);
    // Add your handler logic here
  };

  return (
    <>
      <IfxDatePicker
        name="date-picker"
        error={false}
        disabled={false}
        size="s"
        success={false}
        value=""
        max=""
        min=""
        label="Label Text"
        caption="Caption text, description, error notification."
        ariaLabel="Date Picker"
        required={false}
        autocomplete="on"
        type="date"
        onIfxDate={handleDate} />
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxDatePicker } from '@infineon/infineon-design-system-react';

export function IfxDatePickerExample() {
  const handleDate = (event: CustomEvent) => {
    console.log('ifxDate:', event);
    // Add your handler logic here
  };

  return (
      <IfxDatePicker
        name="date-picker"
        error={false}
        disabled={false}
        size="s"
        success={false}
        value=""
        max=""
        min=""
        label="Label Text"
        caption="Caption text, description, error notification."
        ariaLabel="Date Picker"
        required={false}
        autocomplete="on"
        type="date"
        onIfxDate={handleDate} />
  );
}`;
