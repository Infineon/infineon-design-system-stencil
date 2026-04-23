import { useState } from 'react';
import { IfxButton, IfxSelect, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxSelectExample() {
  const sizeOptions = ["s","m"];
  const [sizeIndex, setSizeIndex] = useState(1);
  const [placeholder, setPlaceholder] = useState(true);
  const [placeholderValue, setPlaceholderValue] = useState("Placeholder");
  const [error, setError] = useState(false);
  const [label, setLabel] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [caption, setCaption] = useState("");
  const [required, setRequired] = useState(true);
  const [showSearch, setShowSearch] = useState(true);
  const [showClearButton, setShowClearButton] = useState(true);
  const [searchPlaceholderValue, setSearchPlaceholderValue] = useState("Search...");
  const [options, setOptions] = useState("[{\"value\":\"a\",\"label\":\"option a\",\"selected\":false},{\"value\":\"b\",\"label\":\"option b\",\"selected\":false},{\"value\":\"c\",\"label\":\"option c\",\"selected\":false}]");
  const [clearSelection, setClearSelection] = useState("");

  const toggleSize = () => setSizeIndex((i) => (i + 1) % sizeOptions.length);
  const togglePlaceholder = () => setPlaceholder((v) => !v);
  const togglePlaceholderValue = (value: string) => setPlaceholderValue(value);
  const toggleError = () => setError((v) => !v);
  const toggleLabel = (value: string) => setLabel(value);
  const toggleDisabled = () => setDisabled((v) => !v);
  const toggleCaption = (value: string) => setCaption(value);
  const toggleRequired = () => setRequired((v) => !v);
  const toggleShowSearch = () => setShowSearch((v) => !v);
  const toggleShowClearButton = () => setShowClearButton((v) => !v);
  const toggleSearchPlaceholderValue = (value: string) => setSearchPlaceholderValue(value);
  const toggleOptions = (value: string) => setOptions(value);
  const toggleClearSelection = (value: string) => setClearSelection(value);

  const controlledProps = {
    "size": sizeOptions[sizeIndex],
    "placeholder": placeholder,
    "placeholderValue": placeholderValue,
    "error": error,
    "label": label,
    "disabled": disabled,
    "caption": caption,
    "required": required,
    "showSearch": showSearch,
    "showClearButton": showClearButton,
    "searchPlaceholderValue": searchPlaceholderValue,
    "options": options,
    "clearSelection": clearSelection,
  } as Record<string, unknown>;
  const handleSelect = (event: CustomEvent) => {
    console.log('ifxSelect:', event);
    // Add your handler logic here
  };

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
    ["size", controlledProps["size"]],
    ["placeholder", controlledProps["placeholder"]],
    ["placeholderValue", controlledProps["placeholderValue"]],
    ["error", controlledProps["error"]],
    ["label", controlledProps["label"]],
    ["disabled", controlledProps["disabled"]],
    ["caption", controlledProps["caption"]],
    ["required", controlledProps["required"]],
    ["showSearch", controlledProps["showSearch"]],
    ["showClearButton", controlledProps["showClearButton"]],
    ["searchPlaceholderValue", controlledProps["searchPlaceholderValue"]],
    ["options", controlledProps["options"]],
    ["clearSelection", controlledProps["clearSelection"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeStringWithProps = `import { IfxSelect } from '@infineon/infineon-design-system-react';

export function IfxSelectExample() {
  const handleInput = (event: CustomEvent) => {
    console.log('ifxInput:', event);
    // Add your handler logic here
  };

  const handleSelect = (event: CustomEvent) => {
    console.log('ifxSelect:', event);
    // Add your handler logic here
  };

  return (
      <IfxSelect
        onIfxSelect={handleSelect}
        onIfxInput={handleInput}
        __CONTROLLED_PROPS__ />
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxSelect
        size="m"
        placeholder={true}
        showClearButton=""
        showSearch=""
        searchPlaceholderValue="Search..."
        required=""
        label=""
        caption=""
        placeholderValue="Placeholder"
        options={[{"value":"a","label":"option a","selected":false},{"value":"b","label":"option b","selected":false},{"value":"c","label":"option c","selected":false}]}
        error={false}
        disabled={false}
        onIfxInput={handleInput}
        onIfxSelect={handleSelect} />
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxSelect } from '@infineon/infineon-design-system-react';

export function IfxSelectExample() {
  const handleInput = (event: CustomEvent) => {
    console.log('ifxInput:', event);
    // Add your handler logic here
  };

  const handleSelect = (event: CustomEvent) => {
    console.log('ifxSelect:', event);
    // Add your handler logic here
  };

  return (
      <IfxSelect
        size="m"
        placeholder={true}
        showClearButton=""
        showSearch=""
        searchPlaceholderValue="Search..."
        required=""
        label=""
        caption=""
        placeholderValue="Placeholder"
        options={[{"value":"a","label":"option a","selected":false},{"value":"b","label":"option b","selected":false},{"value":"c","label":"option c","selected":false}]}
        error={false}
        disabled={false}
        onIfxInput={handleInput}
        onIfxSelect={handleSelect} />
  );
}`;
