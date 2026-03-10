import { useState } from 'react';
import { IfxBasicTable, IfxButton } from '@infineon/infineon-design-system-react';

export function IfxBasicTableExample() {
  const rowHeightOptions = ["compact","default"];
  const [rowHeightIndex, setRowHeightIndex] = useState(1);
  const variantOptions = ["default","zebra"];
  const [variantIndex, setVariantIndex] = useState(0);

  const toggleRowHeight = () => setRowHeightIndex((i) => (i + 1) % rowHeightOptions.length);
  const toggleVariant = () => setVariantIndex((i) => (i + 1) % variantOptions.length);

  const controlledProps = {
    "rowHeight": rowHeightOptions[rowHeightIndex],
    "variant": variantOptions[variantIndex],
  } as const;
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
    ["rowHeight", controlledProps["rowHeight"]],
    ["variant", controlledProps["variant"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeString = `import { IfxBasicTable } from '@infineon/infineon-design-system-react';

export function IfxBasicTableExample() {
  return (
      <IfxBasicTable
        tableHeight="auto"
        cols={[{"headerName":"ID","field":"id","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Item","field":"item","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Date","field":"date"}]}
        rows={[{"id":1,"item":"Item 1","price":356,"date":"2025-05-11"},{"id":2,"item":"Item 2","price":55,"date":"2025-03-26"},{"id":3,"item":"Item 3","price":24},{"id":4,"item":"Item 4","price":874,"date":"2025-04-30"},{"id":5,"item":"Item 5","price":689,"date":"2025-09-14"},{"id":6,"item":"Item 6","price":46},{"id":7,"item":"Item 7","price":421,"date":"2026-07-25"},{"id":8,"item":"Item 8","price":17,"date":"2026-06-28"},{"id":9,"item":"Item 9","price":752},{"id":10,"item":"Item 10","price":73,"date":"2026-01-27"},{"id":11,"item":"Item 11","price":94,"date":"2026-10-31"},{"id":12,"item":"Item 12","price":846}]}
        __CONTROLLED_PROPS__ />
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);
	return (
    <>
      <IfxBasicTable
        tableHeight="auto"
        cols={[{"headerName":"ID","field":"id","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Item","field":"item","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Date","field":"date"}]}
        rows={[{"id":1,"item":"Item 1","price":356,"date":"2025-05-11"},{"id":2,"item":"Item 2","price":55,"date":"2025-03-26"},{"id":3,"item":"Item 3","price":24},{"id":4,"item":"Item 4","price":874,"date":"2025-04-30"},{"id":5,"item":"Item 5","price":689,"date":"2025-09-14"},{"id":6,"item":"Item 6","price":46},{"id":7,"item":"Item 7","price":421,"date":"2026-07-25"},{"id":8,"item":"Item 8","price":17,"date":"2026-06-28"},{"id":9,"item":"Item 9","price":752},{"id":10,"item":"Item 10","price":73,"date":"2026-01-27"},{"id":11,"item":"Item 11","price":94,"date":"2026-10-31"},{"id":12,"item":"Item 12","price":846}]}
        {...controlledProps} />
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls">
	        <IfxButton variant="secondary" onClick={toggleRowHeight}>Toggle RowHeight</IfxButton>
        <IfxButton variant="secondary" onClick={toggleVariant}>Toggle Variant</IfxButton>
	      </div>

	      <div className="state">
	          <div><b>rowHeight:</b> {String(rowHeightOptions[rowHeightIndex])}</div>
          <div><b>variant:</b> {String(variantOptions[variantIndex])}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

