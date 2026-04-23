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
  const [ifxInput, setIfxInput] = useState("");

  const toggleCaption = (value: string) => setCaption(value);
  const toggleCols = (value: string) => setCols(Number(value));
  const toggleDisabled = () => setDisabled((v) => !v);
  const toggleError = () => setError((v) => !v);
  const toggleLabel = (value: string) => setLabel(value);
  const toggleMaxlength = (value: string) => setMaxlength(value);
  const toggleName = (value: string) => setName(value);
  const togglePlaceholder = (value: string) => setPlaceholder(value);
  const toggleRequired = () => setRequired((v) => !v);
  const toggleReadOnly = () => setReadOnly((v) => !v);
  const toggleResize = () => setResizeIndex((i) => (i + 1) % resizeOptions.length);
  const toggleRows = (value: string) => setRows(value);
  const toggleValue = (value: string) => setValue(value);
  const toggleWrap = () => setWrapIndex((i) => (i + 1) % wrapOptions.length);
  const toggleFullWidth = () => setFullWidth((v) => !v);
  const toggleIfxInput = (value: string) => setIfxInput(value);

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
    "ifxInput": ifxInput,
  } as Record<string, unknown>;
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
    ["ifxInput", controlledProps["ifxInput"]],
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
      <IfxTextarea __CONTROLLED_PROPS__ />
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxTextarea
        caption="Caption text, description, error notification"
        cols={43}
        error={false}
        label="Label Text"
        name="textarea"
        placeholder="Placeholder"
        required={true}
        readOnly={false}
        resize="both"
        rows={5}
        value=""
        wrap="soft"
        fullWidth={false}
        disabled={false}
        onIfxInput={handleInput} />
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxTextarea } from '@infineon/infineon-design-system-react';

export function IfxTextareaExample() {
  const handleInput = (event: CustomEvent) => {
    console.log('ifxInput:', event);
    // Add your handler logic here
  };

  return (
      <IfxTextarea
        caption="Caption text, description, error notification"
        cols={43}
        error={false}
        label="Label Text"
        name="textarea"
        placeholder="Placeholder"
        required={true}
        readOnly={false}
        resize="both"
        rows={5}
        value=""
        wrap="soft"
        fullWidth={false}
        disabled={false}
        onIfxInput={handleInput} />
  );
}`;
