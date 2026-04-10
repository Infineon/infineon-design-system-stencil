import { IfxSelect } from '@infineon/infineon-design-system-react';

export function IfxSelectExample() {
  return (
    <>
      <IfxSelect
        size="m"
        placeholder={true}
        showClearButton=""
        showSearch=""
        searchPlaceholderValue="Search..."
        required=""
        label=""
        caption=""
        placeholderValue="Placeholder"
        options={[{"value":"a","label":"option a","selected":false},{"value":"b","label":"option b","selected":false},{"value":"c","label":"option c","selected":false}]} />
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxSelect } from '@infineon/infineon-design-system-react';

export function IfxSelectExample() {
  return (
      <IfxSelect
        size="m"
        placeholder={true}
        showClearButton=""
        showSearch=""
        searchPlaceholderValue="Search..."
        required=""
        label=""
        caption=""
        placeholderValue="Placeholder"
        options={[{"value":"a","label":"option a","selected":false},{"value":"b","label":"option b","selected":false},{"value":"c","label":"option c","selected":false}]} />
  );
}`;
