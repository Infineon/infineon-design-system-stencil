import { IfxSearchBar } from '@infineon/infineon-design-system-react';

export function IfxSearchBarExample() {
  return (
    <>
      <IfxSearchBar
        isOpen={true}
        disabled={false}
        value=""
        autocomplete="on" />
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxSearchBar } from '@infineon/infineon-design-system-react';

export function IfxSearchBarExample() {
  return (
      <IfxSearchBar
        isOpen={true}
        disabled={false}
        value=""
        autocomplete="on" />
  );
}`;
