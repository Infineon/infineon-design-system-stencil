import { useState } from 'react';
import { IfxButton, IfxTable } from '@infineon/infineon-design-system-react';

export function IfxTableDefaultStateExample() {
  const [pagination, setPagination] = useState(false);
  const [serverSidePagination, setServerSidePagination] = useState(false);
  const showLoadingOptions = [true,false];
  const [showLoadingIndex, setShowLoadingIndex] = useState(1);
  const rowHeightOptions = ["compact","default"];
  const [rowHeightIndex, setRowHeightIndex] = useState(1);
  const enableSelectionOptions = [true,false];
  const [enableSelectionIndex, setEnableSelectionIndex] = useState(1);
  const filterOrientationOptions = ["sidebar","topbar","none"];
  const [filterOrientationIndex, setFilterOrientationIndex] = useState(2);
  const [fitColumns, setFitColumns] = useState(false);
  const variantOptions = ["default","zebra"];
  const [variantIndex, setVariantIndex] = useState(0);

  const togglePagination = () => setPagination((v) => !v);
  const toggleServerSidePagination = () => setServerSidePagination((v) => !v);
  const toggleShowLoading = () => setShowLoadingIndex((i) => (i + 1) % showLoadingOptions.length);
  const toggleRowHeight = () => setRowHeightIndex((i) => (i + 1) % rowHeightOptions.length);
  const toggleEnableSelection = () => setEnableSelectionIndex((i) => (i + 1) % enableSelectionOptions.length);
  const toggleFilterOrientation = () => setFilterOrientationIndex((i) => (i + 1) % filterOrientationOptions.length);
  const toggleFitColumns = () => setFitColumns((v) => !v);
  const toggleVariant = () => setVariantIndex((i) => (i + 1) % variantOptions.length);

  const controlledProps = {
    "pagination": pagination,
    "serverSidePagination": serverSidePagination,
    "showLoading": showLoadingOptions[showLoadingIndex],
    "rowHeight": rowHeightOptions[rowHeightIndex],
    "enableSelection": enableSelectionOptions[enableSelectionIndex],
    "filterOrientation": filterOrientationOptions[filterOrientationIndex],
    "fitColumns": fitColumns,
    "variant": variantOptions[variantIndex],
  } as const;
  const handleSelectionChange = (event: CustomEvent) => {
    console.log('ifxSelectionChange:', event);
    // Add your handler logic here
  };

  const handleSortChange = (event: CustomEvent) => {
    console.log('ifxSortChange:', event);
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
    ["pagination", controlledProps["pagination"]],
    ["serverSidePagination", controlledProps["serverSidePagination"]],
    ["showLoading", controlledProps["showLoading"]],
    ["rowHeight", controlledProps["rowHeight"]],
    ["enableSelection", controlledProps["enableSelection"]],
    ["filterOrientation", controlledProps["filterOrientation"]],
    ["fitColumns", controlledProps["fitColumns"]],
    ["variant", controlledProps["variant"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeString = `import { IfxTable } from '@infineon/infineon-design-system-react';

export function IfxTableExample() {
  const handleSelectionChange = (event: CustomEvent) => {
    console.log('ifxSelectionChange:', event);
    // Add your handler logic here
  };

  const handleSortChange = (event: CustomEvent) => {
    console.log('ifxSortChange:', event);
    // Add your handler logic here
  };

  return (
      <IfxTable
        tableHeight="auto"
        fitColumn={false}
        columnMinWidth={200}
        columnWidth={100}
        headline="Matching results"
        headlineNumber={0}
        paginationItemsPerPage={JSON.parse(\`[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}]\`)}
        cols={[{"headerName":"ID","field":"id","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Item","field":"item","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Date","field":"date"}]}
        rows={[{"id":"1","item":"Item 1","price":356,"date":"2025-06-25"},{"id":"2","item":"Item 2","price":55,"date":"2025-03-26"},{"id":"3","item":"Item 3","price":24},{"id":"4","item":"x","price":874},{"id":"5","item":"x","price":689},{"id":"6","item":"x","price":46},{"id":"7","item":"Item 7","price":421},{"id":"8","item":"Item 8","price":17},{"id":"9","item":"x","price":752},{"id":"10","item":"Item 10","price":73},{"id":"11","item":"x","price":94}]}
        onIfxSelectionChange={handleSelectionChange}
        onIfxSortChange={handleSortChange}
        __CONTROLLED_PROPS__ />
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);
	return (
    <>
      <IfxTable
        tableHeight="auto"
        fitColumn={false}
        columnMinWidth={200}
        columnWidth={100}
        headline="Matching results"
        headlineNumber={0}
        paginationItemsPerPage={JSON.parse(`[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}]`)}
        cols={[{"headerName":"ID","field":"id","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Item","field":"item","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Date","field":"date"}]}
        rows={[{"id":"1","item":"Item 1","price":356,"date":"2025-06-25"},{"id":"2","item":"Item 2","price":55,"date":"2025-03-26"},{"id":"3","item":"Item 3","price":24},{"id":"4","item":"x","price":874},{"id":"5","item":"x","price":689},{"id":"6","item":"x","price":46},{"id":"7","item":"Item 7","price":421},{"id":"8","item":"Item 8","price":17},{"id":"9","item":"x","price":752},{"id":"10","item":"Item 10","price":73},{"id":"11","item":"x","price":94}]}
        onIfxSelectionChange={handleSelectionChange}
        onIfxSortChange={handleSortChange}
        {...controlledProps} />
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls">
	        <IfxButton variant="secondary" onClick={togglePagination}>Toggle Pagination</IfxButton>
        <IfxButton variant="secondary" onClick={toggleServerSidePagination}>Toggle ServerSidePagination</IfxButton>
        <IfxButton variant="secondary" onClick={toggleShowLoading}>Toggle ShowLoading</IfxButton>
        <IfxButton variant="secondary" onClick={toggleRowHeight}>Toggle RowHeight</IfxButton>
        <IfxButton variant="secondary" onClick={toggleEnableSelection}>Toggle EnableSelection</IfxButton>
        <IfxButton variant="secondary" onClick={toggleFilterOrientation}>Toggle FilterOrientation</IfxButton>
        <IfxButton variant="secondary" onClick={toggleFitColumns}>Toggle FitColumns</IfxButton>
        <IfxButton variant="secondary" onClick={toggleVariant}>Toggle Variant</IfxButton>
	      </div>

	      <div className="state">
	          <div><b>pagination:</b> {String(pagination)}</div>
          <div><b>serverSidePagination:</b> {String(serverSidePagination)}</div>
          <div><b>showLoading:</b> {String(showLoadingOptions[showLoadingIndex])}</div>
          <div><b>rowHeight:</b> {String(rowHeightOptions[rowHeightIndex])}</div>
          <div><b>enableSelection:</b> {String(enableSelectionOptions[enableSelectionIndex])}</div>
          <div><b>filterOrientation:</b> {String(filterOrientationOptions[filterOrientationIndex])}</div>
          <div><b>fitColumns:</b> {String(fitColumns)}</div>
          <div><b>variant:</b> {String(variantOptions[variantIndex])}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

