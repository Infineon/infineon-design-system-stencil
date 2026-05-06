import { useState } from 'react';
import { IfxAccordion, IfxAccordionItem, IfxButton, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxAccordionExample() {
  const [ariaLevelNumber, setAriaLevelNumber] = useState(3);
  const [autoCollapse, setAutoCollapse] = useState(false);

  const handleAriaLevelNumberChange = (value: string) => setAriaLevelNumber(Number(value));
  const handleAutoCollapseChange = () => setAutoCollapse((v) => !v);

  const controlledProps = {
    "ariaLevelNumber": ariaLevelNumber,
    "autoCollapse": autoCollapse,
  } as Record<string, unknown>;
  const handleClose = (event: CustomEvent) => {
    console.log('ifxClose:', event);
    // Add your handler logic here
  };

  const handleOpen = (event: CustomEvent) => {
    console.log('ifxOpen:', event);
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
    ["ariaLevelNumber", controlledProps["ariaLevelNumber"]],
    ["autoCollapse", controlledProps["autoCollapse"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeStringWithProps = `import { IfxAccordion, IfxAccordionItem } from '@infineon/infineon-design-system-react';

export function IfxAccordionExample() {
  const handleClose = (event: CustomEvent) => {
    console.log('ifxClose:', event);
    // Add your handler logic here
  };

  const handleOpen = (event: CustomEvent) => {
    console.log('ifxOpen:', event);
    // Add your handler logic here
  };

  return (
      <IfxAccordion
        autoCollapse={String(controlledProps.autoCollapse ?? "false")}
        __CONTROLLED_PROPS__>
        <IfxAccordionItem
          caption="Label"
          open={true}
          icon=""
          onIfxClose={handleClose}
          onIfxOpen={handleOpen}
          ariaLevelNumber={String(controlledProps.ariaLevelNumber ?? "3")}>
          Content for Initial Item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        </IfxAccordionItem>
        <IfxAccordionItem
          caption="Label"
          open={false}
          icon=""
          ariaLevelNumber={String(controlledProps.ariaLevelNumber ?? "3")}>
          Content for Item #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        </IfxAccordionItem>
        <IfxAccordionItem
          caption="Label"
          open={false}
          icon=""
          ariaLevelNumber={String(controlledProps.ariaLevelNumber ?? "3")}>
          Content for Item #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        </IfxAccordionItem>
      </IfxAccordion>
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxAccordion
        autoCollapse={String(controlledProps.autoCollapse ?? "false")}
        {...(controlledProps as any)}>
        <IfxAccordionItem
          caption="Label"
          open={true}
          icon=""
          onIfxClose={handleClose}
          onIfxOpen={handleOpen}
          ariaLevelNumber={String(controlledProps.ariaLevelNumber ?? "3")}>
          Content for Initial Item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        </IfxAccordionItem>
        <IfxAccordionItem
          caption="Label"
          open={false}
          icon=""
          ariaLevelNumber={String(controlledProps.ariaLevelNumber ?? "3")}>
          Content for Item #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        </IfxAccordionItem>
        <IfxAccordionItem
          caption="Label"
          open={false}
          icon=""
          ariaLevelNumber={String(controlledProps.ariaLevelNumber ?? "3")}>
          Content for Item #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        </IfxAccordionItem>
      </IfxAccordion>
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={handleAutoCollapseChange}>Toggle AutoCollapse</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="ariaLevelNumber" type="text" value={String(ariaLevelNumber)} onInput={(event) => handleAriaLevelNumberChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
	      </div>

	      <div className="state">
	          <div><b>ariaLevelNumber:</b> {String(ariaLevelNumber)}</div>
          <div><b>autoCollapse:</b> {String(autoCollapse)}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

