import { IfxSearchBar } from '@infineon/infineon-design-system-react';

export function IfxSearchBarExample() {
  const handleInput = (event: CustomEvent) => {
    console.log('ifxInput:', event);
    // Add your handler logic here
  };

  const handleOpen = (event: CustomEvent) => {
    console.log('ifxOpen:', event);
    // Add your handler logic here
  };

  return (
    <>
      <IfxSearchBar
        isOpen={true}
        disabled={false}
        value=""
        autocomplete="on"
        onIfxInput={handleInput}
        onIfxOpen={handleOpen} />
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxSearchBar } from '@infineon/infineon-design-system-react';

export function IfxSearchBarExample() {
  const handleInput = (event: CustomEvent) => {
    console.log('ifxInput:', event);
    // Add your handler logic here
  };

  const handleOpen = (event: CustomEvent) => {
    console.log('ifxOpen:', event);
    // Add your handler logic here
  };

  return (
      <IfxSearchBar
        isOpen={true}
        disabled={false}
        value=""
        autocomplete="on"
        onIfxInput={handleInput}
        onIfxOpen={handleOpen} />
  );
}`;
