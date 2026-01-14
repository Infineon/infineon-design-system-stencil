import { IfxSelect } from '@infineon/infineon-design-system-react';

export function IfxSelectExample() {
  const handleSelect = (event: CustomEvent) => {
    console.log('ifxSelect:', event);
    // Add your handler logic here
  };

  const handleInput = (event: CustomEvent) => {
    console.log('ifxInput:', event);
    // Add your handler logic here
  };

  return (
    <>
      <IfxSelect
        size="m"
        placeholder={true}
        showClearButton={true}
        showSearch={true}
        searchPlaceholderValue="Search..."
        disabled={false}
        required={true}
        error={false}
        label=""
        caption=""
        placeholderValue="Placeholder"
        options={`[{"value":"a","label":"option a","selected":false},{"value":"b","label":"option b","selected":false},{"value":"c","label":"option c","selected":false}]`}
        onIfxSelect={handleSelect}
        onIfxInput={handleInput} />
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxSelect } from '@infineon/infineon-design-system-react';

export function IfxSelectExample() {
  const handleSelect = (event: CustomEvent) => {
    console.log('ifxSelect:', event);
    // Add your handler logic here
  };

  const handleInput = (event: CustomEvent) => {
    console.log('ifxInput:', event);
    // Add your handler logic here
  };

  return (
      <IfxSelect
        size="m"
        placeholder={true}
        showClearButton={true}
        showSearch={true}
        searchPlaceholderValue="Search..."
        disabled={false}
        required={true}
        error={false}
        label=""
        caption=""
        placeholderValue="Placeholder"
        options={\`[{"value":"a","label":"option a","selected":false},{"value":"b","label":"option b","selected":false},{"value":"c","label":"option c","selected":false}]\`}
        onIfxSelect={handleSelect}
        onIfxInput={handleInput} />
  );
}`;
