import { IfxChip, IfxChipItem } from '@infineon/infineon-design-system-react';

export function IfxChipExample() {
  const handleChange = (event: CustomEvent) => {
    console.log('ifxChange:', event);
    // Add your handler logic here
  };

  return (
    <>
      <IfxChip
        placeholder="Label"
        size="medium"
        variant="single"
        theme="outlined"
        icon=""
        readOnly={false}
        ariaLabel="Chip"
        disabled={false}
        onIfxChange={handleChange}>
        <IfxChipItem value="Item Value 1">
          Item Label 1
        </IfxChipItem>
        <IfxChipItem value="Item Value 2">
          Item Label 2
        </IfxChipItem>
        <IfxChipItem value="Item Value 3">
          Item Label 3
        </IfxChipItem>
        <IfxChipItem value="Item Value 4">
          Item Label 4
        </IfxChipItem>
      </IfxChip>
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxChip, IfxChipItem } from '@infineon/infineon-design-system-react';

export function IfxChipExample() {
  const handleChange = (event: CustomEvent) => {
    console.log('ifxChange:', event);
    // Add your handler logic here
  };

  return (
      <IfxChip
        placeholder="Label"
        size="medium"
        variant="single"
        theme="outlined"
        icon=""
        readOnly={false}
        ariaLabel="Chip"
        disabled={false}
        onIfxChange={handleChange}>
        <IfxChipItem value="Item Value 1">
          Item Label 1
        </IfxChipItem>
        <IfxChipItem value="Item Value 2">
          Item Label 2
        </IfxChipItem>
        <IfxChipItem value="Item Value 3">
          Item Label 3
        </IfxChipItem>
        <IfxChipItem value="Item Value 4">
          Item Label 4
        </IfxChipItem>
      </IfxChip>
  );
}`;
