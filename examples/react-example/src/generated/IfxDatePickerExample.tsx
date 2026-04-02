import { IfxDatePicker } from '@infineon/infineon-design-system-react';

export function IfxDatePickerExample() {
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
        ariaLabelText="Date Picker"
        required={false}
        autocomplete="on"
        type="date" />
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxDatePicker } from '@infineon/infineon-design-system-react';

export function IfxDatePickerExample() {
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
        ariaLabelText="Date Picker"
        required={false}
        autocomplete="on"
        type="date" />
  );
}`;
