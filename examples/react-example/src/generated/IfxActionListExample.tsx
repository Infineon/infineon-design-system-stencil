import { useState } from 'react';
import { IfxActionList, IfxActionListItem, IfxButton, IfxIcon } from '@infineon/infineon-design-system-react';

export function IfxActionListExample() {
  const [disabled, setDisabled] = useState(false);
  const targetOptions = ["_self","_blank","_parent","_top"];
  const [targetIndex, setTargetIndex] = useState(0);

  const toggleDisabled = () => setDisabled((v) => !v);
  const toggleTarget = () => setTargetIndex((i) => (i + 1) % targetOptions.length);

  const controlledProps = {
    "disabled": disabled,
    "target": targetOptions[targetIndex],
  } as const;
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
    ["disabled", controlledProps["disabled"]],
    ["target", controlledProps["target"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeString = `import { IfxActionList, IfxActionListItem, IfxIcon } from '@infineon/infineon-design-system-react';

export function IfxActionListExample() {
  const handleActionListItemClick = (event: CustomEvent) => {
    console.log('ifxActionListItemClick:', event);
    // Add your handler logic here
  };

  return (
      <IfxActionList
        listAriaLabel="Navigation menu"
        onIfxActionListItemClick={handleActionListItemClick}
        __CONTROLLED_PROPS__>
        <IfxActionListItem
          itemTitle="Dashboard"
          description="View your main dashboard"
          value="dashboard"
          itemAriaLabel="Navigation item">
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
	return (
    <>
      <IfxActionList
        listAriaLabel="Navigation menu"
        onIfxActionListItemClick={handleActionListItemClick}
        {...controlledProps}>
        <IfxActionListItem
          itemTitle="Dashboard"
          description="View your main dashboard"
          value="dashboard"
          itemAriaLabel="Navigation item">
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
	      <div className="controls">
	        <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={toggleTarget}>Toggle Target</IfxButton>
	      </div>

	      <div className="state">
	          <div><b>disabled:</b> {String(disabled)}</div>
          <div><b>target:</b> {String(targetOptions[targetIndex])}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

