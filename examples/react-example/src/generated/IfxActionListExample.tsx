import { useState } from 'react';
import { IfxActionList, IfxActionListItem, IfxButton, IfxIcon, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxActionListExample() {
  const [disabled, setDisabled] = useState(false);
  const [href, setHref] = useState("");
  const targetOptions = ["_self","_blank","_parent","_top"];
  const [targetIndex, setTargetIndex] = useState(0);
  const [value, setValue] = useState("");
  const [itemTitle, setItemTitle] = useState("Dashboard");
  const [description, setDescription] = useState("View your main dashboard");
  const [listAriaLabel, setListAriaLabel] = useState("Navigation menu");
  const [itemAriaLabel, setItemAriaLabel] = useState("Navigation item");

  const handleDisabledChange = () => setDisabled((v) => !v);
  const handleHrefChange = (value: string) => setHref(value);
  const handleTargetChange = () => setTargetIndex((i) => (i + 1) % targetOptions.length);
  const handleValueChange = (value: string) => setValue(value);
  const handleItemTitleChange = (value: string) => setItemTitle(value);
  const handleDescriptionChange = (value: string) => setDescription(value);
  const handleListAriaLabelChange = (value: string) => setListAriaLabel(value);
  const handleItemAriaLabelChange = (value: string) => setItemAriaLabel(value);

  const controlledProps = {
    "disabled": disabled,
    "href": href,
    "target": targetOptions[targetIndex],
    "value": value,
    "itemTitle": itemTitle,
    "description": description,
    "listAriaLabel": listAriaLabel,
    "itemAriaLabel": itemAriaLabel,
  } as Record<string, unknown>;
  const handleActionListItemClick = (event: CustomEvent) => {
    console.log('ifxActionListItemClick:', event);
    // Add your handler logic here
  };

  const handleConsoleError = (event: CustomEvent) => {
    console.log('consoleError:', event);
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
    ["disabled", controlledProps["disabled"]],
    ["href", controlledProps["href"]],
    ["target", controlledProps["target"]],
    ["value", controlledProps["value"]],
    ["itemTitle", controlledProps["itemTitle"]],
    ["description", controlledProps["description"]],
    ["listAriaLabel", controlledProps["listAriaLabel"]],
    ["itemAriaLabel", controlledProps["itemAriaLabel"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeStringWithProps = `import { IfxActionList, IfxActionListItem, IfxIcon } from '@infineon/infineon-design-system-react';

export function IfxActionListExample() {
  const handleActionListItemClick = (event: CustomEvent) => {
    console.log('ifxActionListItemClick:', event);
    // Add your handler logic here
  };

  const handleConsoleError = (event: CustomEvent) => {
    console.log('consoleError:', event);
    // Add your handler logic here
  };

  return (
      <IfxActionList __CONTROLLED_PROPS__>
        <IfxActionListItem
          itemTitle="Dashboard"
          description="View your main dashboard"
          value="dashboard"
          itemAriaLabel="Navigation item"
          onIfxActionListItemClick={handleActionListItemClick}>
          <IfxIcon
            slot="trailing"
            icon="chevron-right-16"
            onConsoleError={handleConsoleError} />
        </IfxActionListItem>
        <IfxActionListItem
          itemTitle="Settings"
          value="settings"
          itemAriaLabel="Navigation item">
          <IfxIcon
            slot="trailing"
            icon="chevron-right-16" />
        </IfxActionListItem>
        <IfxActionListItem
          itemTitle="Profile"
          description="Manage your profile information"
          value="profile"
          disabled={true}
          itemAriaLabel="Navigation item">
          <IfxIcon
            slot="trailing"
            icon="chevron-right-16" />
        </IfxActionListItem>
        <IfxActionListItem
          itemTitle="Advanced Analytics and Reporting Dashboard with Extended Functionality"
          description="This comprehensive analytics dashboard provides detailed insights into user behavior and system performance metrics."
          value="analytics"
          itemAriaLabel="Navigation item">
          <IfxIcon
            slot="trailing"
            icon="chevron-right-16" />
        </IfxActionListItem>
      </IfxActionList>
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxActionList {...(controlledProps as any)}>
        <IfxActionListItem
          itemTitle="Dashboard"
          description="View your main dashboard"
          value="dashboard"
          itemAriaLabel="Navigation item"
          onIfxActionListItemClick={handleActionListItemClick}>
          <IfxIcon
            slot="trailing"
            icon="chevron-right-16"
            onConsoleError={handleConsoleError} />
        </IfxActionListItem>
        <IfxActionListItem
          itemTitle="Settings"
          value="settings"
          itemAriaLabel="Navigation item">
          <IfxIcon
            slot="trailing"
            icon="chevron-right-16" />
        </IfxActionListItem>
        <IfxActionListItem
          itemTitle="Profile"
          description="Manage your profile information"
          value="profile"
          disabled={true}
          itemAriaLabel="Navigation item">
          <IfxIcon
            slot="trailing"
            icon="chevron-right-16" />
        </IfxActionListItem>
        <IfxActionListItem
          itemTitle="Advanced Analytics and Reporting Dashboard with Extended Functionality"
          description="This comprehensive analytics dashboard provides detailed insights into user behavior and system performance metrics."
          value="analytics"
          itemAriaLabel="Navigation item">
          <IfxIcon
            slot="trailing"
            icon="chevron-right-16" />
        </IfxActionListItem>
      </IfxActionList>
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={handleDisabledChange}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={handleTargetChange}>Toggle Target</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="href" type="text" value={String(href)} onInput={(event) => handleHrefChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="value" type="text" value={String(value)} onInput={(event) => handleValueChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="itemTitle" type="text" value={String(itemTitle)} onInput={(event) => handleItemTitleChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="description" type="text" value={String(description)} onInput={(event) => handleDescriptionChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="listAriaLabel" type="text" value={String(listAriaLabel)} onInput={(event) => handleListAriaLabelChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="itemAriaLabel" type="text" value={String(itemAriaLabel)} onInput={(event) => handleItemAriaLabelChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
	      </div>

	      <div className="state">
	          <div><b>disabled:</b> {String(disabled)}</div>
          <div><b>href:</b> {String(href)}</div>
          <div><b>target:</b> {String(targetOptions[targetIndex])}</div>
          <div><b>value:</b> {String(value)}</div>
          <div><b>itemTitle:</b> {String(itemTitle)}</div>
          <div><b>description:</b> {String(description)}</div>
          <div><b>listAriaLabel:</b> {String(listAriaLabel)}</div>
          <div><b>itemAriaLabel:</b> {String(itemAriaLabel)}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

