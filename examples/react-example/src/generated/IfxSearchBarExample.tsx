import { useState } from 'react';
import { IfxButton, IfxSearchBar } from '@infineon/infineon-design-system-react';

export function IfxSearchBarExample() {
  const [isOpen, setIsOpen] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const toggleIsOpen = () => setIsOpen((v) => !v);
  const toggleDisabled = () => setDisabled((v) => !v);

  const controlledProps = {
    "isOpen": isOpen,
    "disabled": disabled,
  } as const;
  const handleInput = (event: CustomEvent) => {
    console.log('ifxInput:', event);
    // Add your handler logic here
  };

  const handleOpen = (event: CustomEvent) => {
    console.log('ifxOpen:', event);
    // Add your handler logic here
  };

  const formatPropValueForCode = (value: unknown): string => {
		if (typeof value === "boolean") return `{${value}}`;
		if (typeof value === "number") return `{${value}}`;
		if (value === null) return "{null}";
		if (Array.isArray(value) || (typeof value === "object" && value !== null)) {
			return `{${JSON.stringify(value)}}`;
		}
		const escaped = String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
		return `"${escaped}"`;
	};

	const controlledPropsCode = [
    ["isOpen", controlledProps["isOpen"]],
    ["disabled", controlledProps["disabled"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

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
        value=""
        autocomplete="on"
        onIfxInput={handleInput}
        onIfxOpen={handleOpen}
        __CONTROLLED_PROPS__ />
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);
	return (
    <>
      <IfxSearchBar
        value=""
        autocomplete="on"
        onIfxInput={handleInput}
        onIfxOpen={handleOpen}
        {...controlledProps} />
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls">
	        <IfxButton variant="secondary" onClick={toggleIsOpen}>Toggle IsOpen</IfxButton>
        <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
	      </div>

	      <div className="state">
	          <div><b>isOpen:</b> {String(isOpen)}</div>
          <div><b>disabled:</b> {String(disabled)}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

