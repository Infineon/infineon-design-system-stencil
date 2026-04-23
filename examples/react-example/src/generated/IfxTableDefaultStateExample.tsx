import { useState } from 'react';
import { IfxButton, IfxTable, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxTableDefaultStateExample() {
  const handleSortChange = (event: CustomEvent) => {
    console.log('ifxSortChange:', event);
    // Add your handler logic here
  };

  return (
    <>
      <IfxTable
        rowHeight="default"
        cols={[{"headerName":"ID","field":"id","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Item","field":"item","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Date","field":"date"}]}
        rows={[{"id":"1","item":"Item 1","price":356,"date":"2025-06-25"},{"id":"2","item":"Item 2","price":55,"date":"2025-03-26"},{"id":"3","item":"Item 3","price":24},{"id":"4","item":"x","price":874},{"id":"5","item":"x","price":689},{"id":"6","item":"x","price":46},{"id":"7","item":"Item 7","price":421},{"id":"8","item":"Item 8","price":17},{"id":"9","item":"x","price":752},{"id":"10","item":"Item 10","price":73},{"id":"11","item":"x","price":94}]}
        tableHeight="auto"
        paginationItemsPerPage={[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}, {"value":"all","selected":false}]}
        filterOrientation="none"
        variant="default"
        fitColumn={false}
        columnMinWidth={200}
        columnWidth={100}
        headline="Matching results"
        headlineNumber={0}
        pagination={false}
        serverSidePagination={false}
        showLoading={false}
        enableSelection={false}
        fitColumns={false}
        onIfxSortChange={handleSortChange} />
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

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
        rowHeight="default"
        cols={[{"headerName":"ID","field":"id","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Item","field":"item","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Date","field":"date"}]}
        rows={[{"id":"1","item":"Item 1","price":356,"date":"2025-06-25"},{"id":"2","item":"Item 2","price":55,"date":"2025-03-26"},{"id":"3","item":"Item 3","price":24},{"id":"4","item":"x","price":874},{"id":"5","item":"x","price":689},{"id":"6","item":"x","price":46},{"id":"7","item":"Item 7","price":421},{"id":"8","item":"Item 8","price":17},{"id":"9","item":"x","price":752},{"id":"10","item":"Item 10","price":73},{"id":"11","item":"x","price":94}]}
        tableHeight="auto"
        paginationItemsPerPage={[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}, {"value":"all","selected":false}]}
        filterOrientation="none"
        variant="default"
        fitColumn={false}
        columnMinWidth={200}
        columnWidth={100}
        headline="Matching results"
        headlineNumber={0}
        pagination={false}
        serverSidePagination={false}
        showLoading={false}
        enableSelection={false}
        fitColumns={false}
        onIfxSortChange={handleSortChange} />
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxTable
        fitColumn={false}
        onIfxSelectionChange={handleSelectionChange}
        onIfxSortChange={handleSortChange}
        {...(controlledProps as any)} />
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={togglePagination}>Toggle Pagination</IfxButton>
        <IfxButton variant="secondary" onClick={toggleServerSidePagination}>Toggle ServerSidePagination</IfxButton>
        <IfxButton variant="secondary" onClick={toggleShowLoading}>Toggle ShowLoading</IfxButton>
        <IfxButton variant="secondary" onClick={toggleRowHeight}>Toggle RowHeight</IfxButton>
        <IfxButton variant="secondary" onClick={toggleEnableSelection}>Toggle EnableSelection</IfxButton>
        <IfxButton variant="secondary" onClick={toggleFilterOrientation}>Toggle FilterOrientation</IfxButton>
        <IfxButton variant="secondary" onClick={toggleFitColumns}>Toggle FitColumns</IfxButton>
        <IfxButton variant="secondary" onClick={toggleVariant}>Toggle Variant</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="tableHeight" type="text" value={String(tableHeight)} onInput={(event) => toggleTableHeight(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="paginationItemsPerPage" type="text" value={String(paginationItemsPerPage)} onInput={(event) => togglePaginationItemsPerPage(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="cols" type="text" value={String(cols)} onInput={(event) => toggleCols(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="columnMinWidth" type="text" value={String(columnMinWidth)} onInput={(event) => toggleColumnMinWidth(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="columnWidth" type="text" value={String(columnWidth)} onInput={(event) => toggleColumnWidth(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="rows" type="text" value={String(rows)} onInput={(event) => toggleRows(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="headline" type="text" value={String(headline)} onInput={(event) => toggleHeadline(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="headlineNumber" type="text" value={String(headlineNumber)} onInput={(event) => toggleHeadlineNumber(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
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

