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
  const getControlInputValue = (event: {
    detail?: unknown;
    target?: { value?: unknown } | null;
  }): string => {
    const detail = event.detail;

    if (typeof detail === "string" || typeof detail === "number") {
      return String(detail);
    }

    if (detail && typeof detail === "object" && "value" in detail) {
      return String((detail as { value?: unknown }).value ?? "");
    }

    return String(event.target?.value ?? "");
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
  const handlePageChange = (event: CustomEvent) => {
    console.log('ifxPageChange:', event);
    // Add your handler logic here
  };

  return (
      <IfxPagination
        onIfxItemsPerPageChange={handleItemsPerPageChange}
        onIfxPageChange={handlePageChange}
        currentPage={String(controlledProps.currentPage ?? "1")}
        total={String(controlledProps.total ?? "50")}
        itemsPerPage={String(controlledProps.itemsPerPage ?? "[{\\"value\\":\\"10\\",\\"selected\\":true}, {\\"value\\":\\"20\\",\\"selected\\":false}, {\\"value\\":\\"30\\",\\"selected\\":false}, {\\"value\\":\\"all\\",\\"selected\\":false}]")}
        showItemsPerPage={String(controlledProps.showItemsPerPage ?? "true")}
        itemsPerPageLabel={String(controlledProps.itemsPerPageLabel ?? "Result per Pages")}
        __CONTROLLED_PROPS__ />
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxPagination
        onIfxItemsPerPageChange={handleItemsPerPageChange}
        onIfxPageChange={handlePageChange}
        currentPage={String(controlledProps.currentPage ?? "1")}
        total={String(controlledProps.total ?? "50")}
        itemsPerPage={String(controlledProps.itemsPerPage ?? "[{\"value\":\"10\",\"selected\":true}, {\"value\":\"20\",\"selected\":false}, {\"value\":\"30\",\"selected\":false}, {\"value\":\"all\",\"selected\":false}]")}
        showItemsPerPage={String(controlledProps.showItemsPerPage ?? "true")}
        itemsPerPageLabel={String(controlledProps.itemsPerPageLabel ?? "Result per Pages")}
        {...(controlledProps as any)} />
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={handleShowItemsPerPageChange}>Toggle ShowItemsPerPage</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="currentPage" type="text" value={String(currentPage)} onIfxInput={(event) => handleCurrentPageChange(getControlInputValue(event))} />
        <IfxTextField label="total" type="text" value={String(total)} onIfxInput={(event) => handleTotalChange(getControlInputValue(event))} />
        <IfxTextField label="itemsPerPage" type="text" value={String(itemsPerPage)} onIfxInput={(event) => handleItemsPerPageChange(getControlInputValue(event))} />
        <IfxTextField label="itemsPerPageLabel" type="text" value={String(itemsPerPageLabel)} onIfxInput={(event) => handleItemsPerPageLabelChange(getControlInputValue(event))} />
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

