import { IfxSelect, IfxSelectOption } from '@infineon/infineon-design-system-react';

export function IfxSelectExample() {
  const handleInput = (event: CustomEvent) => {
    console.log('ifxInput:', event);
    // Add your handler logic here
  };

  const handleOpen = (event: CustomEvent) => {
    console.log('ifxOpen:', event);
    // Add your handler logic here
  };

  const handleSelect = (event: CustomEvent) => {
    console.log('ifxSelect:', event);
    // Add your handler logic here
  };

  return (
    <>
      <IfxSelect
        size="m"
        placeholder=""
        showClearButton=""
        showSearch=""
        searchPlaceholderValue="Search..."
        label=""
        caption=""
        placeholderValue="Placeholder"
        ariaSelectLabel="Select"
        ariaSearchLabel="Search options"
        ariaClearLabel="Clear selection"
        ariaSelectLabelledBy=""
        ariaSelectDescribedBy=""
        error={false}
        disabled={false}
        readOnly={false}
        required={false}
        onIfxInput={handleInput}
        onIfxOpen={handleOpen}
        onIfxSelect={handleSelect}>
        <IfxSelectOption value="a">
          Option A
        </IfxSelectOption>
        <IfxSelectOption value="b">
          Option B
        </IfxSelectOption>
        <IfxSelectOption value="c">
          Option C
        </IfxSelectOption>
        <IfxSelectOption
          value="d"
          disabled="">
          Option D (disabled)
        </IfxSelectOption>
      </IfxSelect>
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxSelect, IfxSelectOption } from '@infineon/infineon-design-system-react';

export function IfxSelectExample() {
  const handleInput = (event: CustomEvent) => {
    console.log('ifxInput:', event);
    // Add your handler logic here
  };

  const handleOpen = (event: CustomEvent) => {
    console.log('ifxOpen:', event);
    // Add your handler logic here
  };

  const handleSelect = (event: CustomEvent) => {
    console.log('ifxSelect:', event);
    // Add your handler logic here
  };

  return (
      <IfxSelect
        size="m"
        placeholder=""
        showClearButton=""
        showSearch=""
        searchPlaceholderValue="Search..."
        label=""
        caption=""
        placeholderValue="Placeholder"
        ariaSelectLabel="Select"
        ariaSearchLabel="Search options"
        ariaClearLabel="Clear selection"
        ariaSelectLabelledBy=""
        ariaSelectDescribedBy=""
        error={false}
        disabled={false}
        readOnly={false}
        required={false}
        onIfxInput={handleInput}
        onIfxOpen={handleOpen}
        onIfxSelect={handleSelect}>
        <IfxSelectOption value="a">
          Option A
        </IfxSelectOption>
        <IfxSelectOption value="b">
          Option B
        </IfxSelectOption>
        <IfxSelectOption value="c">
          Option C
        </IfxSelectOption>
        <IfxSelectOption
          value="d"
          disabled="">
          Option D (disabled)
        </IfxSelectOption>
      </IfxSelect>
  );
}`;
