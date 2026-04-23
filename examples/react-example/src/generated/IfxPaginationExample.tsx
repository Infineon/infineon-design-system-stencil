import { useState } from 'react';
import { IfxButton, IfxPagination, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxPaginationExample() {
  const [currentPage, setCurrentPage] = useState("1");
  const [total, setTotal] = useState("50");
  const [itemsPerPage, setItemsPerPage] = useState("[{\"value\":\"10\",\"selected\":true}, {\"value\":\"20\",\"selected\":false}, {\"value\":\"30\",\"selected\":false}]");
  const [showItemsPerPage, setShowItemsPerPage] = useState(true);

  const toggleCurrentPage = (value: string) => setCurrentPage(value);
  const toggleTotal = (value: string) => setTotal(value);
  const toggleItemsPerPage = (value: string) => setItemsPerPage(value);
  const toggleShowItemsPerPage = () => setShowItemsPerPage((v) => !v);

  const controlledProps = {
    "currentPage": currentPage,
    "total": total,
    "itemsPerPage": itemsPerPage,
    "showItemsPerPage": showItemsPerPage,
  } as Record<string, unknown>;
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
    ["currentPage", controlledProps["currentPage"]],
    ["total", controlledProps["total"]],
    ["itemsPerPage", controlledProps["itemsPerPage"]],
    ["showItemsPerPage", controlledProps["showItemsPerPage"]],
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
        onIfxPageChange={handlePageChange}
        onIfxItemsPerPageChange={handleItemsPerPageChange}
        __CONTROLLED_PROPS__ />
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxPagination
        total={50}
        currentPage={1}
        showItemsPerPage=""
        itemsPerPage={[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}, {"value":"all","selected":false}]}
        itemsPerPageLabel="Result per Pages"
        onIfxItemsPerPageChange={handleItemsPerPageChange}
        onIfxPageChange={handlePageChange} />
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxPagination } from '@infineon/infineon-design-system-react';

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
        total={50}
        currentPage={1}
        showItemsPerPage=""
        itemsPerPage={[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}, {"value":"all","selected":false}]}
        itemsPerPageLabel="Result per Pages"
        onIfxItemsPerPageChange={handleItemsPerPageChange}
}`;
