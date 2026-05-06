import { useState } from 'react';
import { IfxActionList, IfxActionListItem, IfxIcon, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxActionListExample() {
  const [listAriaLabel, setListAriaLabel] = useState("Navigation menu");

  const handleListAriaLabelChange = (value: string) => setListAriaLabel(value);

  const controlledProps = {
    "listAriaLabel": listAriaLabel,
  } as Record<string, unknown>;
  const handleActionListItemClick = (event: CustomEvent) => {
    console.log('ifxActionListItemClick:', event);
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
    ["listAriaLabel", controlledProps["listAriaLabel"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeStringWithProps = `import { IfxActionList, IfxActionListItem, IfxIcon } from '@infineon/infineon-design-system-react';

export function IfxActionListExample() {
  const handleActionListItemClick = (event: CustomEvent) => {
    console.log('ifxActionListItemClick:', event);
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
            icon="chevron-right-16" />
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
            icon="chevron-right-16" />
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
	      
	      <div className="controls controls-input">
        <IfxTextField label="listAriaLabel" type="text" value={String(listAriaLabel)} onInput={(event) => handleListAriaLabelChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
	      </div>

	      <div className="state">
	          <div><b>listAriaLabel:</b> {String(listAriaLabel)}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

