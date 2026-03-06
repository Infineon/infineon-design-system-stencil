import { useState } from 'react';
import { IfxButton, IfxPagination } from '@infineon/infineon-design-system-react';

export function IfxPaginationExample() {
  const [showItemsPerPage, setShowItemsPerPage] = useState(true);

  const toggleShowItemsPerPage = () => setShowItemsPerPage((v) => !v);

  const controlledProps = {
    "showItemsPerPage": showItemsPerPage,
  } as const;
  const handlePageChange = (event: CustomEvent) => {
    console.log('ifxPageChange:', event);
    // Add your handler logic here
  };

  const handleItemsPerPageChange = (event: CustomEvent) => {
    console.log('ifxItemsPerPageChange:', event);
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
    ["showItemsPerPage", controlledProps["showItemsPerPage"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeString = `import { IfxPagination } from '@infineon/infineon-design-system-react';

export function IfxPaginationExample() {
  const handlePageChange = (event: CustomEvent) => {
    console.log('ifxPageChange:', event);
    // Add your handler logic here
  };

  const handleItemsPerPageChange = (event: CustomEvent) => {
    console.log('ifxItemsPerPageChange:', event);
    // Add your handler logic here
  };

  return (
      <IfxPagination
        total={50}
        currentPage={1}
        itemsPerPage={JSON.parse(\`[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}]\`)}
        onIfxPageChange={handlePageChange}
        onIfxItemsPerPageChange={handleItemsPerPageChange}
        __CONTROLLED_PROPS__ />
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);
	return (
    <>
      <IfxPagination
        total={50}
        currentPage={1}
        itemsPerPage={JSON.parse(`[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}]`)}
        onIfxPageChange={handlePageChange}
        onIfxItemsPerPageChange={handleItemsPerPageChange}
        {...controlledProps} />
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls">
	        <IfxButton variant="secondary" onClick={toggleShowItemsPerPage}>Toggle ShowItemsPerPage</IfxButton>
	      </div>

	      <div className="state">
	          <div><b>showItemsPerPage:</b> {String(showItemsPerPage)}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

