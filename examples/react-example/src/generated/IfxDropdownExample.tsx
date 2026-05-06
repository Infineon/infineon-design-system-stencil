import { useState } from 'react';
import { IfxButton, IfxDropdown, IfxDropdownItem, IfxDropdownMenu, IfxDropdownTriggerButton } from '@infineon/infineon-design-system-react';

export function IfxDropdownExample() {
  const placementOptions = ["auto","auto-start","auto-end","top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"];
  const [placementIndex, setPlacementIndex] = useState(7);
  const sizeOptions = ["s","m"];
  const [sizeIndex, setSizeIndex] = useState(1);
  const [disabled, setDisabled] = useState(false);
  const variantOptions = ["primary","secondary","tertiary"];
  const [variantIndex, setVariantIndex] = useState(0);
  const [defaultOpen, setDefaultOpen] = useState(false);
  const [noCloseOnOutsideClick, setNoCloseOnOutsideClick] = useState(false);
  const [noCloseOnMenuClick, setNoCloseOnMenuClick] = useState(false);
  const [noAppendToBody, setNoAppendToBody] = useState(false);

  const handlePlacementChange = () => setPlacementIndex((i) => (i + 1) % placementOptions.length);
  const handleSizeChange = () => setSizeIndex((i) => (i + 1) % sizeOptions.length);
  const handleDisabledChange = () => setDisabled((v) => !v);
  const handleVariantChange = () => setVariantIndex((i) => (i + 1) % variantOptions.length);
  const handleDefaultOpenChange = () => setDefaultOpen((v) => !v);
  const handleNoCloseOnOutsideClickChange = () => setNoCloseOnOutsideClick((v) => !v);
  const handleNoCloseOnMenuClickChange = () => setNoCloseOnMenuClick((v) => !v);
  const handleNoAppendToBodyChange = () => setNoAppendToBody((v) => !v);

  const controlledProps = {
    "placement": placementOptions[placementIndex],
    "size": sizeOptions[sizeIndex],
    "disabled": disabled,
    "variant": variantOptions[variantIndex],
    "defaultOpen": defaultOpen,
    "noCloseOnOutsideClick": noCloseOnOutsideClick,
    "noCloseOnMenuClick": noCloseOnMenuClick,
    "noAppendToBody": noAppendToBody,
  } as Record<string, unknown>;
  const handleClose = (event: CustomEvent) => {
    console.log('ifxClose:', event);
    // Add your handler logic here
  };

  const handleDropdown = (event: CustomEvent) => {
    console.log('ifxDropdown:', event);
    // Add your handler logic here
  };

  const handleOpen = (event: CustomEvent) => {
    console.log('ifxOpen:', event);
    // Add your handler logic here
  };

  const handleDropdownMenuItem = (event: CustomEvent) => {
    console.log('ifxDropdownMenuItem:', event);
    // Add your handler logic here
  };

  const handleMenuSize = (event: CustomEvent) => {
    console.log('menuSize:', event);
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
    ["placement", controlledProps["placement"]],
    ["size", controlledProps["size"]],
    ["disabled", controlledProps["disabled"]],
    ["variant", controlledProps["variant"]],
    ["defaultOpen", controlledProps["defaultOpen"]],
    ["noCloseOnOutsideClick", controlledProps["noCloseOnOutsideClick"]],
    ["noCloseOnMenuClick", controlledProps["noCloseOnMenuClick"]],
    ["noAppendToBody", controlledProps["noAppendToBody"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeStringWithProps = `import { IfxDropdown, IfxDropdownItem, IfxDropdownMenu, IfxDropdownTriggerButton } from '@infineon/infineon-design-system-react';

export function IfxDropdownExample() {
  const handleClose = (event: CustomEvent) => {
    console.log('ifxClose:', event);
    // Add your handler logic here
  };

  const handleDropdown = (event: CustomEvent) => {
    console.log('ifxDropdown:', event);
    // Add your handler logic here
  };

  const handleOpen = (event: CustomEvent) => {
    console.log('ifxOpen:', event);
    // Add your handler logic here
  };

  const handleDropdownMenuItem = (event: CustomEvent) => {
    console.log('ifxDropdownMenuItem:', event);
    // Add your handler logic here
  };

  const handleMenuSize = (event: CustomEvent) => {
    console.log('menuSize:', event);
    // Add your handler logic here
  };

  return (
      <IfxDropdown
        onIfxClose={handleClose}
        onIfxDropdown={handleDropdown}
        onIfxOpen={handleOpen}
        placement={String(controlledProps.placement ?? "bottom-start")}
        disabled={String(controlledProps.disabled ?? "false")}
        defaultOpen={String(controlledProps.defaultOpen ?? "false")}
        noCloseOnOutsideClick={String(controlledProps.noCloseOnOutsideClick ?? "false")}
        noCloseOnMenuClick={String(controlledProps.noCloseOnMenuClick ?? "false")}
        noAppendToBody={String(controlledProps.noAppendToBody ?? "false")}
        __CONTROLLED_PROPS__>
        <IfxDropdownTriggerButton variant={String(controlledProps.variant ?? "primary")}>
          Dropdown
        </IfxDropdownTriggerButton>
        <IfxDropdownMenu
          onIfxDropdownMenuItem={handleDropdownMenuItem}
          onMenuSize={handleMenuSize}
          size={String(controlledProps.size ?? "m")}>
          <IfxDropdownItem
            icon="c-info-16"
            target="_self"
            href=""
            error={false}>
            Menu Item
          </IfxDropdownItem>
          <IfxDropdownItem
            icon="c-info-16"
            target="_self"
            href=""
            error={false}>
            Menu Item
          </IfxDropdownItem>
          <IfxDropdownItem
            icon="c-info-16"
            target="_self"
            href=""
            error={false}>
            Menu Item
          </IfxDropdownItem>
          <IfxDropdownItem
            icon="c-info-16"
            target="_self"
            href=""
            error={false}>
            Menu Item
          </IfxDropdownItem>
          <IfxDropdownItem
            icon="c-info-16"
            target="_self"
            href=""
            error={false}>
            Menu Item
          </IfxDropdownItem>
        </IfxDropdownMenu>
      </IfxDropdown>
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxDropdown
        onIfxClose={handleClose}
        onIfxDropdown={handleDropdown}
        onIfxOpen={handleOpen}
        placement={String(controlledProps.placement ?? "bottom-start")}
        disabled={String(controlledProps.disabled ?? "false")}
        defaultOpen={String(controlledProps.defaultOpen ?? "false")}
        noCloseOnOutsideClick={String(controlledProps.noCloseOnOutsideClick ?? "false")}
        noCloseOnMenuClick={String(controlledProps.noCloseOnMenuClick ?? "false")}
        noAppendToBody={String(controlledProps.noAppendToBody ?? "false")}
        {...(controlledProps as any)}>
        <IfxDropdownTriggerButton variant={String(controlledProps.variant ?? "primary")}>
          Dropdown
        </IfxDropdownTriggerButton>
        <IfxDropdownMenu
          onIfxDropdownMenuItem={handleDropdownMenuItem}
          onMenuSize={handleMenuSize}
          size={String(controlledProps.size ?? "m")}>
          <IfxDropdownItem
            icon="c-info-16"
            target="_self"
            href=""
            error={false}>
            Menu Item
          </IfxDropdownItem>
          <IfxDropdownItem
            icon="c-info-16"
            target="_self"
            href=""
            error={false}>
            Menu Item
          </IfxDropdownItem>
          <IfxDropdownItem
            icon="c-info-16"
            target="_self"
            href=""
            error={false}>
            Menu Item
          </IfxDropdownItem>
          <IfxDropdownItem
            icon="c-info-16"
            target="_self"
            href=""
            error={false}>
            Menu Item
          </IfxDropdownItem>
          <IfxDropdownItem
            icon="c-info-16"
            target="_self"
            href=""
            error={false}>
            Menu Item
          </IfxDropdownItem>
        </IfxDropdownMenu>
      </IfxDropdown>
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={handlePlacementChange}>Toggle Placement</IfxButton>
        <IfxButton variant="secondary" onClick={handleSizeChange}>Toggle Size</IfxButton>
        <IfxButton variant="secondary" onClick={handleDisabledChange}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={handleVariantChange}>Toggle Variant</IfxButton>
        <IfxButton variant="secondary" onClick={handleDefaultOpenChange}>Toggle DefaultOpen</IfxButton>
        <IfxButton variant="secondary" onClick={handleNoCloseOnOutsideClickChange}>Toggle NoCloseOnOutsideClick</IfxButton>
        <IfxButton variant="secondary" onClick={handleNoCloseOnMenuClickChange}>Toggle NoCloseOnMenuClick</IfxButton>
        <IfxButton variant="secondary" onClick={handleNoAppendToBodyChange}>Toggle NoAppendToBody</IfxButton>
	      </div>
	      

	      <div className="state">
	          <div><b>placement:</b> {String(placementOptions[placementIndex])}</div>
          <div><b>size:</b> {String(sizeOptions[sizeIndex])}</div>
          <div><b>disabled:</b> {String(disabled)}</div>
          <div><b>variant:</b> {String(variantOptions[variantIndex])}</div>
          <div><b>defaultOpen:</b> {String(defaultOpen)}</div>
          <div><b>noCloseOnOutsideClick:</b> {String(noCloseOnOutsideClick)}</div>
          <div><b>noCloseOnMenuClick:</b> {String(noCloseOnMenuClick)}</div>
          <div><b>noAppendToBody:</b> {String(noAppendToBody)}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

