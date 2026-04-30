import { useState } from 'react';
import { IfxButton, IfxPagination, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxPaginationExample() {
  const [currentPage, setCurrentPage] = useState("1");
  const [total, setTotal] = useState("50");
  const [itemsPerPage, setItemsPerPage] = useState("[{\"value\":\"10\",\"selected\":true}, {\"value\":\"20\",\"selected\":false}, {\"value\":\"30\",\"selected\":false}, {\"value\":\"all\",\"selected\":false}]");
  const [showItemsPerPage, setShowItemsPerPage] = useState(true);
  const [itemsPerPageLabel, setItemsPerPageLabel] = useState("Result per Pages");

  const handleCurrentPageChange = (value: string) => setCurrentPage(value);
  const handleTotalChange = (value: string) => setTotal(value);
  const handleItemsPerPageChange = (value: string) => setItemsPerPage(value);
  const handleShowItemsPerPageChange = () => setShowItemsPerPage((v) => !v);
  const handleItemsPerPageLabelChange = (value: string) => setItemsPerPageLabel(value);

  const controlledProps = {
    "currentPage": currentPage,
    "total": total,
    "itemsPerPage": itemsPerPage,
    "showItemsPerPage": showItemsPerPage,
    "itemsPerPageLabel": itemsPerPageLabel,
  } as Record<string, unknown>;
  const handleItemsPerPageChange = (event: CustomEvent) => {
    console.log('ifxItemsPerPageChange:', event);
    // Add your handler logic here
  };

  const handlePageChange = (event: CustomEvent) => {
    console.log('ifxPageChange:', event);
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
    ["currentPage", controlledProps["currentPage"]],
    ["total", controlledProps["total"]],
    ["itemsPerPage", controlledProps["itemsPerPage"]],
    ["showItemsPerPage", controlledProps["showItemsPerPage"]],
    ["itemsPerPageLabel", controlledProps["itemsPerPageLabel"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeStringWithProps = `import { IfxPagination } from '@infineon/infineon-design-system-react';

export function IfxPaginationExample() {
  const handleItemsPerPageChange = (event: CustomEvent) => {
    console.log('ifxItemsPerPageChange:', event);
    // Add your handler logic here
  };

  const handlePageChange = (event: CustomEvent) => {
    console.log('ifxPageChange:', event);
    // Add your handler logic here
  };

  return (
      <IfxPagination
        onIfxItemsPerPageChange={handleItemsPerPageChange}
        onIfxPageChange={handlePageChange}
        __CONTROLLED_PROPS__ />
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxPagination
        onIfxItemsPerPageChange={handleItemsPerPageChange}
        onIfxPageChange={handlePageChange}
        {...(controlledProps as any)} />
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={handleShowItemsPerPageChange}>Toggle ShowItemsPerPage</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="currentPage" type="text" value={String(currentPage)} onInput={(event) => handleCurrentPageChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="total" type="text" value={String(total)} onInput={(event) => handleTotalChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="itemsPerPage" type="text" value={String(itemsPerPage)} onInput={(event) => handleItemsPerPageChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="itemsPerPageLabel" type="text" value={String(itemsPerPageLabel)} onInput={(event) => handleItemsPerPageLabelChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
	      </div>

	      <div className="state">
	          <div><b>currentPage:</b> {String(currentPage)}</div>
          <div><b>total:</b> {String(total)}</div>
          <div><b>itemsPerPage:</b> {String(itemsPerPage)}</div>
          <div><b>showItemsPerPage:</b> {String(showItemsPerPage)}</div>
          <div><b>itemsPerPageLabel:</b> {String(itemsPerPageLabel)}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

