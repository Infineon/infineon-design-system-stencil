import { IfxCounter } from '@infineon/design-system-react';

export function IfxCounterExample() {
  const handleChange = (event: CustomEvent) => {
    console.log('ifxChange:', event);
    // Add your handler logic here
  };

  return (
    <>
      <IfxCounter
        name=""
        value={0}
        onIfxChange={handleChange} />
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxCounter } from '@infineon/design-system-react';

export function IfxCounterExample() {
  const handleChange = (event: CustomEvent) => {
    console.log('ifxChange:', event);
    // Add your handler logic here
  };

  return (
      <IfxCounter
        name=""
        value={0}
        onIfxChange={handleChange} />
  );
}`;
