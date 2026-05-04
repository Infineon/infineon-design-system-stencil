import { useState } from 'react';
import { IfxButton, IfxTable, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxTableDefaultStateExample() {
  const [tableHeight, setTableHeight] = useState("auto");
  const [pagination, setPagination] = useState(false);
  const [serverSidePagination, setServerSidePagination] = useState(false);
  const [paginationItemsPerPage, setPaginationItemsPerPage] = useState("[{\"value\":\"10\",\"selected\":true}, {\"value\":\"20\",\"selected\":false}, {\"value\":\"30\",\"selected\":false}, {\"value\":\"all\",\"selected\":false}]");
  const [showLoading, setShowLoading] = useState(false);
  const rowHeightOptions = ["compact","default"];
  const [rowHeightIndex, setRowHeightIndex] = useState(1);
  const [enableSelection, setEnableSelection] = useState(false);
  const filterOrientationOptions = ["sidebar","topbar","none"];
  const [filterOrientationIndex, setFilterOrientationIndex] = useState(2);
  const [cols, setCols] = useState("[{\"headerName\":\"ID\",\"field\":\"id\",\"sortable\":true,\"sort\":\"desc\",\"unSortIcon\":true},{\"headerName\":\"Item\",\"field\":\"item\",\"sortable\":true,\"unSortIcon\":true},{\"headerName\":\"Price\",\"field\":\"price\"},{\"headerName\":\"Date\",\"field\":\"date\"}]");
  const [fitColumns, setFitColumns] = useState(false);
  const [columnMinWidth, setColumnMinWidth] = useState("200");
  const [columnWidth, setColumnWidth] = useState("100");
  const [rows, setRows] = useState("[{\"id\":\"1\",\"item\":\"Item 1\",\"price\":356,\"date\":\"2025-06-25\"},{\"id\":\"2\",\"item\":\"Item 2\",\"price\":55,\"date\":\"2025-03-26\"},{\"id\":\"3\",\"item\":\"Item 3\",\"price\":24},{\"id\":\"4\",\"item\":\"x\",\"price\":874},{\"id\":\"5\",\"item\":\"x\",\"price\":689},{\"id\":\"6\",\"item\":\"x\",\"price\":46},{\"id\":\"7\",\"item\":\"Item 7\",\"price\":421},{\"id\":\"8\",\"item\":\"Item 8\",\"price\":17},{\"id\":\"9\",\"item\":\"x\",\"price\":752},{\"id\":\"10\",\"item\":\"Item 10\",\"price\":73},{\"id\":\"11\",\"item\":\"x\",\"price\":94}]");
  const variantOptions = ["default","zebra"];
  const [variantIndex, setVariantIndex] = useState(0);
  const [headline, setHeadline] = useState("Matching results");
  const [headlineNumber, setHeadlineNumber] = useState("0");

  const handleTableHeightChange = (value: string) => setTableHeight(value);
  const handlePaginationChange = () => setPagination((v) => !v);
  const handleServerSidePaginationChange = () => setServerSidePagination((v) => !v);
  const handlePaginationItemsPerPageChange = (value: string) => setPaginationItemsPerPage(value);
  const handleShowLoadingChange = () => setShowLoading((v) => !v);
  const handleRowHeightChange = () => setRowHeightIndex((i) => (i + 1) % rowHeightOptions.length);
  const handleEnableSelectionChange = () => setEnableSelection((v) => !v);
  const handleFilterOrientationChange = () => setFilterOrientationIndex((i) => (i + 1) % filterOrientationOptions.length);
  const handleColsChange = (value: string) => setCols(value);
  const handleFitColumnsChange = () => setFitColumns((v) => !v);
  const handleColumnMinWidthChange = (value: string) => setColumnMinWidth(value);
  const handleColumnWidthChange = (value: string) => setColumnWidth(value);
  const handleRowsChange = (value: string) => setRows(value);
  const handleVariantChange = () => setVariantIndex((i) => (i + 1) % variantOptions.length);
  const handleHeadlineChange = (value: string) => setHeadline(value);
  const handleHeadlineNumberChange = (value: string) => setHeadlineNumber(value);

  const controlledProps = {
    "tableHeight": tableHeight,
    "pagination": pagination,
    "serverSidePagination": serverSidePagination,
    "paginationItemsPerPage": paginationItemsPerPage,
    "showLoading": showLoading,
    "rowHeight": rowHeightOptions[rowHeightIndex],
    "enableSelection": enableSelection,
    "filterOrientation": filterOrientationOptions[filterOrientationIndex],
    "cols": cols,
    "fitColumns": fitColumns,
    "columnMinWidth": columnMinWidth,
    "columnWidth": columnWidth,
    "rows": rows,
    "variant": variantOptions[variantIndex],
    "headline": headline,
    "headlineNumber": headlineNumber,
  } as Record<string, unknown>;
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
    ["tableHeight", controlledProps["tableHeight"]],
    ["pagination", controlledProps["pagination"]],
    ["serverSidePagination", controlledProps["serverSidePagination"]],
    ["paginationItemsPerPage", controlledProps["paginationItemsPerPage"]],
    ["showLoading", controlledProps["showLoading"]],
    ["rowHeight", controlledProps["rowHeight"]],
    ["enableSelection", controlledProps["enableSelection"]],
    ["filterOrientation", controlledProps["filterOrientation"]],
    ["cols", controlledProps["cols"]],
    ["fitColumns", controlledProps["fitColumns"]],
    ["columnMinWidth", controlledProps["columnMinWidth"]],
    ["columnWidth", controlledProps["columnWidth"]],
    ["rows", controlledProps["rows"]],
    ["variant", controlledProps["variant"]],
    ["headline", controlledProps["headline"]],
    ["headlineNumber", controlledProps["headlineNumber"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeStringWithProps = `import { IfxTable } from '@infineon/infineon-design-system-react';

export function IfxTableExample() {
  const handleSortChange = (event: CustomEvent) => {
    console.log('ifxSortChange:', event);
    // Add your handler logic here
  };

  return (
      <IfxTable
        fitColumn={false}
        onIfxSortChange={handleSortChange}
        __CONTROLLED_PROPS__ />
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxTable
        fitColumn={false}
        onIfxSortChange={handleSortChange}
        {...(controlledProps as any)} />
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={handlePaginationChange}>Toggle Pagination</IfxButton>
        <IfxButton variant="secondary" onClick={handleServerSidePaginationChange}>Toggle ServerSidePagination</IfxButton>
        <IfxButton variant="secondary" onClick={handleShowLoadingChange}>Toggle ShowLoading</IfxButton>
        <IfxButton variant="secondary" onClick={handleRowHeightChange}>Toggle RowHeight</IfxButton>
        <IfxButton variant="secondary" onClick={handleEnableSelectionChange}>Toggle EnableSelection</IfxButton>
        <IfxButton variant="secondary" onClick={handleFilterOrientationChange}>Toggle FilterOrientation</IfxButton>
        <IfxButton variant="secondary" onClick={handleFitColumnsChange}>Toggle FitColumns</IfxButton>
        <IfxButton variant="secondary" onClick={handleVariantChange}>Toggle Variant</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="tableHeight" type="text" value={String(tableHeight)} onInput={(event) => handleTableHeightChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="paginationItemsPerPage" type="text" value={String(paginationItemsPerPage)} onInput={(event) => handlePaginationItemsPerPageChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="cols" type="text" value={String(cols)} onInput={(event) => handleColsChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="columnMinWidth" type="text" value={String(columnMinWidth)} onInput={(event) => handleColumnMinWidthChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="columnWidth" type="text" value={String(columnWidth)} onInput={(event) => handleColumnWidthChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="rows" type="text" value={String(rows)} onInput={(event) => handleRowsChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="headline" type="text" value={String(headline)} onInput={(event) => handleHeadlineChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="headlineNumber" type="text" value={String(headlineNumber)} onInput={(event) => handleHeadlineNumberChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
	      </div>

	      <div className="state">
	          <div><b>tableHeight:</b> {String(tableHeight)}</div>
          <div><b>pagination:</b> {String(pagination)}</div>
          <div><b>serverSidePagination:</b> {String(serverSidePagination)}</div>
          <div><b>paginationItemsPerPage:</b> {String(paginationItemsPerPage)}</div>
          <div><b>showLoading:</b> {String(showLoading)}</div>
          <div><b>rowHeight:</b> {String(rowHeightOptions[rowHeightIndex])}</div>
          <div><b>enableSelection:</b> {String(enableSelection)}</div>
          <div><b>filterOrientation:</b> {String(filterOrientationOptions[filterOrientationIndex])}</div>
          <div><b>cols:</b> {String(cols)}</div>
          <div><b>fitColumns:</b> {String(fitColumns)}</div>
          <div><b>columnMinWidth:</b> {String(columnMinWidth)}</div>
          <div><b>columnWidth:</b> {String(columnWidth)}</div>
          <div><b>rows:</b> {String(rows)}</div>
          <div><b>variant:</b> {String(variantOptions[variantIndex])}</div>
          <div><b>headline:</b> {String(headline)}</div>
          <div><b>headlineNumber:</b> {String(headlineNumber)}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

