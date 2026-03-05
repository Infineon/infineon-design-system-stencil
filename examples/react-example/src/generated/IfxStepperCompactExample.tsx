import { useState } from 'react';
import { IfxButton, IfxStep, IfxStepper } from '@infineon/infineon-design-system-react';

export function IfxStepperCompactExample() {
  const [completeStep, setCompleteStep] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);
  const indicatorPositionOptions = ["left","right"];
  const [indicatorPositionIndex, setIndicatorPositionIndex] = useState(0);
  const [showStepNumber, setShowStepNumber] = useState(false);
  const variantOptions = ["default","compact","vertical"];
  const [variantIndex, setVariantIndex] = useState(1);

  const toggleCompleteStep = () => setCompleteStep((v) => !v);
  const toggleDisabled = () => setDisabled((v) => !v);
  const toggleError = () => setError((v) => !v);
  const toggleIndicatorPosition = () => setIndicatorPositionIndex((i) => (i + 1) % indicatorPositionOptions.length);
  const toggleShowStepNumber = () => setShowStepNumber((v) => !v);
  const toggleVariant = () => setVariantIndex((i) => (i + 1) % variantOptions.length);

  const controlledProps = {
    "completeStep": completeStep,
    "disabled": disabled,
    "error": error,
    "indicatorPosition": indicatorPositionOptions[indicatorPositionIndex],
    "showStepNumber": showStepNumber,
    "variant": variantOptions[variantIndex],
  } as const;
  const handleChange = (event: CustomEvent) => {
    console.log('ifxChange:', event);
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
    ["completeStep", controlledProps["completeStep"]],
    ["disabled", controlledProps["disabled"]],
    ["error", controlledProps["error"]],
    ["indicatorPosition", controlledProps["indicatorPosition"]],
    ["showStepNumber", controlledProps["showStepNumber"]],
    ["variant", controlledProps["variant"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeString = `import { IfxStep, IfxStepper } from '@infineon/infineon-design-system-react';

export function IfxStepperExample() {
  const handleChange = (event: CustomEvent) => {
    console.log('ifxChange:', event);
    // Add your handler logic here
  };

  return (
      <IfxStepper
        activeStep={2}
        ariaLabel=""
        ariaCurrent=""
        onIfxChange={handleChange}
        __CONTROLLED_PROPS__>
        <IfxStep>
          Step Label 1
        </IfxStep>
        <IfxStep>
          Step Label 2
        </IfxStep>
        <IfxStep>
          Step Label 3
        </IfxStep>
        <IfxStep>
          Step Label 4
        </IfxStep>
        <IfxStep>
          Step Label 5
        </IfxStep>
      </IfxStepper>
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);
	return (
    <>
      <IfxStepper
        activeStep={2}
        ariaLabel=""
        ariaCurrent=""
        onIfxChange={handleChange}
        {...controlledProps}>
        <IfxStep>
          Step Label 1
        </IfxStep>
        <IfxStep>
          Step Label 2
        </IfxStep>
        <IfxStep>
          Step Label 3
        </IfxStep>
        <IfxStep>
          Step Label 4
        </IfxStep>
        <IfxStep>
          Step Label 5
        </IfxStep>
      </IfxStepper>
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls">
	        <IfxButton variant="secondary" onClick={toggleCompleteStep}>Toggle CompleteStep</IfxButton>
        <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={toggleError}>Toggle Error</IfxButton>
        <IfxButton variant="secondary" onClick={toggleIndicatorPosition}>Toggle IndicatorPosition</IfxButton>
        <IfxButton variant="secondary" onClick={toggleShowStepNumber}>Toggle ShowStepNumber</IfxButton>
        <IfxButton variant="secondary" onClick={toggleVariant}>Toggle Variant</IfxButton>
	      </div>

	      <div className="state">
	          <div><b>completeStep:</b> {String(completeStep)}</div>
          <div><b>disabled:</b> {String(disabled)}</div>
          <div><b>error:</b> {String(error)}</div>
          <div><b>indicatorPosition:</b> {String(indicatorPositionOptions[indicatorPositionIndex])}</div>
          <div><b>showStepNumber:</b> {String(showStepNumber)}</div>
          <div><b>variant:</b> {String(variantOptions[variantIndex])}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

