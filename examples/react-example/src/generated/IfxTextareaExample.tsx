import { useState } from 'react';
import { IfxButton, IfxTextField, IfxTextarea } from '@infineon/infineon-design-system-react';

export function IfxTextareaExample() {
  const [caption, setCaption] = useState("Caption text, description, error notification");
  const [cols, setCols] = useState(43);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);
  const [label, setLabel] = useState("Label Text");
  const [maxlength, setMaxlength] = useState("");
  const [name, setName] = useState("textarea");
  const [placeholder, setPlaceholder] = useState("Placeholder");
  const [required, setRequired] = useState(true);
  const [readOnly, setReadOnly] = useState(false);
  const resizeOptions = ["both","vertical","horizontal","none"];
  const [resizeIndex, setResizeIndex] = useState(0);
  const [rows, setRows] = useState("5");
  const [value, setValue] = useState("");
  const wrapOptions = ["soft","hard","off"];
  const [wrapIndex, setWrapIndex] = useState(0);
  const [fullWidth, setFullWidth] = useState(false);

  const handleCaptionChange = (value: string) => setCaption(value);
  const handleColsChange = (value: string) => setCols(Number(value));
  const handleDisabledChange = () => setDisabled((v) => !v);
  const handleErrorChange = () => setError((v) => !v);
  const handleLabelChange = (value: string) => setLabel(value);
  const handleMaxlengthChange = (value: string) => setMaxlength(value);
  const handleNameChange = (value: string) => setName(value);
  const handlePlaceholderChange = (value: string) => setPlaceholder(value);
  const handleRequiredChange = () => setRequired((v) => !v);
  const handleReadOnlyChange = () => setReadOnly((v) => !v);
  const handleResizeChange = () => setResizeIndex((i) => (i + 1) % resizeOptions.length);
  const handleRowsChange = (value: string) => setRows(value);
  const handleValueChange = (value: string) => setValue(value);
  const handleWrapChange = () => setWrapIndex((i) => (i + 1) % wrapOptions.length);
  const handleFullWidthChange = () => setFullWidth((v) => !v);

  const controlledProps = {
    "caption": caption,
    "cols": cols,
    "disabled": disabled,
    "error": error,
    "label": label,
    "maxlength": maxlength,
    "name": name,
    "placeholder": placeholder,
    "required": required,
    "readOnly": readOnly,
    "resize": resizeOptions[resizeIndex],
    "rows": rows,
    "value": value,
    "wrap": wrapOptions[wrapIndex],
    "fullWidth": fullWidth,
  } as Record<string, unknown>;
  const handleInput = (event: CustomEvent) => {
    console.log('ifxInput:', event);
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
    ["caption", controlledProps["caption"]],
    ["cols", controlledProps["cols"]],
    ["disabled", controlledProps["disabled"]],
    ["error", controlledProps["error"]],
    ["label", controlledProps["label"]],
    ["maxlength", controlledProps["maxlength"]],
    ["name", controlledProps["name"]],
    ["placeholder", controlledProps["placeholder"]],
    ["required", controlledProps["required"]],
    ["readOnly", controlledProps["readOnly"]],
    ["resize", controlledProps["resize"]],
    ["rows", controlledProps["rows"]],
    ["value", controlledProps["value"]],
    ["wrap", controlledProps["wrap"]],
    ["fullWidth", controlledProps["fullWidth"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeStringWithProps = `import { IfxTextarea } from '@infineon/infineon-design-system-react';

export function IfxTextareaExample() {
  const handleInput = (event: CustomEvent) => {
    console.log('ifxInput:', event);
    // Add your handler logic here
  };

  return (
      <IfxTextarea
        onIfxInput={handleInput}
        __CONTROLLED_PROPS__ />
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxTextarea
        onIfxInput={handleInput}
        {...(controlledProps as any)} />
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={handleDisabledChange}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={handleErrorChange}>Toggle Error</IfxButton>
        <IfxButton variant="secondary" onClick={handleRequiredChange}>Toggle Required</IfxButton>
        <IfxButton variant="secondary" onClick={handleReadOnlyChange}>Toggle ReadOnly</IfxButton>
        <IfxButton variant="secondary" onClick={handleResizeChange}>Toggle Resize</IfxButton>
        <IfxButton variant="secondary" onClick={handleWrapChange}>Toggle Wrap</IfxButton>
        <IfxButton variant="secondary" onClick={handleFullWidthChange}>Toggle FullWidth</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="caption" type="text" value={String(caption)} onInput={(event) => handleCaptionChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="cols" type="text" value={String(cols)} onInput={(event) => handleColsChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="label" type="text" value={String(label)} onInput={(event) => handleLabelChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="maxlength" type="text" value={String(maxlength)} onInput={(event) => handleMaxlengthChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="name" type="text" value={String(name)} onInput={(event) => handleNameChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="placeholder" type="text" value={String(placeholder)} onInput={(event) => handlePlaceholderChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="rows" type="text" value={String(rows)} onInput={(event) => handleRowsChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="value" type="text" value={String(value)} onInput={(event) => handleValueChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
	      </div>

	      <div className="state">
	          <div><b>caption:</b> {String(caption)}</div>
          <div><b>cols:</b> {String(cols)}</div>
          <div><b>disabled:</b> {String(disabled)}</div>
          <div><b>error:</b> {String(error)}</div>
          <div><b>label:</b> {String(label)}</div>
          <div><b>maxlength:</b> {String(maxlength)}</div>
          <div><b>name:</b> {String(name)}</div>
          <div><b>placeholder:</b> {String(placeholder)}</div>
          <div><b>required:</b> {String(required)}</div>
          <div><b>readOnly:</b> {String(readOnly)}</div>
          <div><b>resize:</b> {String(resizeOptions[resizeIndex])}</div>
          <div><b>rows:</b> {String(rows)}</div>
          <div><b>value:</b> {String(value)}</div>
          <div><b>wrap:</b> {String(wrapOptions[wrapIndex])}</div>
          <div><b>fullWidth:</b> {String(fullWidth)}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

