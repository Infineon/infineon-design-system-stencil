import { useState } from 'react';
import { IfxButton, IfxStep, IfxStepper, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxStepperExample() {
  const [activeStep, setActiveStep] = useState(2);
  const [completeStep, setCompleteStep] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);
  const indicatorPositionOptions = ["left","right"];
  const [indicatorPositionIndex, setIndicatorPositionIndex] = useState(0);
  const [showStepNumber, setShowStepNumber] = useState(false);
  const variantOptions = ["default","compact","vertical"];
  const [variantIndex, setVariantIndex] = useState(0);
  const [ariaLabelText, setAriaLabelText] = useState("");
  const [ariaCurrentText, setAriaCurrentText] = useState("");

  const handleActiveStepChange = (value: string) => setActiveStep(Number(value));
  const handleCompleteStepChange = () => setCompleteStep((v) => !v);
  const handleDisabledChange = () => setDisabled((v) => !v);
  const handleErrorChange = () => setError((v) => !v);
  const handleIndicatorPositionChange = () => setIndicatorPositionIndex((i) => (i + 1) % indicatorPositionOptions.length);
  const handleShowStepNumberChange = () => setShowStepNumber((v) => !v);
  const handleVariantChange = () => setVariantIndex((i) => (i + 1) % variantOptions.length);
  const handleAriaLabelTextChange = (value: string) => setAriaLabelText(value);
  const handleAriaCurrentTextChange = (value: string) => setAriaCurrentText(value);

  const controlledProps = {
    "activeStep": activeStep,
    "completeStep": completeStep,
    "disabled": disabled,
    "error": error,
    "indicatorPosition": indicatorPositionOptions[indicatorPositionIndex],
    "showStepNumber": showStepNumber,
    "variant": variantOptions[variantIndex],
    "ariaLabelText": ariaLabelText,
    "ariaCurrentText": ariaCurrentText,
  } as Record<string, unknown>;
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
    ["activeStep", controlledProps["activeStep"]],
    ["completeStep", controlledProps["completeStep"]],
    ["disabled", controlledProps["disabled"]],
    ["error", controlledProps["error"]],
    ["indicatorPosition", controlledProps["indicatorPosition"]],
    ["showStepNumber", controlledProps["showStepNumber"]],
    ["variant", controlledProps["variant"]],
    ["ariaLabelText", controlledProps["ariaLabelText"]],
    ["ariaCurrentText", controlledProps["ariaCurrentText"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeStringWithProps = `import { IfxStep, IfxStepper } from '@infineon/infineon-design-system-react';

export function IfxStepperExample() {
  const handleChange = (event: CustomEvent) => {
    console.log('ifxChange:', event);
    // Add your handler logic here
  };

  return (
      <IfxStepper
        onIfxChange={handleChange}
        activeStep={String(controlledProps.activeStep ?? "2")}
        indicatorPosition={String(controlledProps.indicatorPosition ?? "left")}
        showStepNumber={String(controlledProps.showStepNumber ?? "false")}
        variant={String(controlledProps.variant ?? "default")}
        __CONTROLLED_PROPS__>
        <IfxStep
          completeStep={String(controlledProps.completeStep ?? "false")}
          disabled={String(controlledProps.disabled ?? "false")}
          error={String(controlledProps.error ?? "false")}>
          Step Label 1
        </IfxStep>
        <IfxStep
          completeStep={String(controlledProps.completeStep ?? "false")}
          disabled={String(controlledProps.disabled ?? "false")}
          error={String(controlledProps.error ?? "false")}>
          Step Label 2
        </IfxStep>
        <IfxStep
          completeStep={String(controlledProps.completeStep ?? "false")}
          disabled={String(controlledProps.disabled ?? "false")}
          error={String(controlledProps.error ?? "false")}>
          Step Label 3
        </IfxStep>
        <IfxStep
          completeStep={String(controlledProps.completeStep ?? "false")}
          disabled={String(controlledProps.disabled ?? "false")}
          error={String(controlledProps.error ?? "false")}>
          Step Label 4
        </IfxStep>
        <IfxStep
          completeStep={String(controlledProps.completeStep ?? "false")}
          disabled={String(controlledProps.disabled ?? "false")}
          error={String(controlledProps.error ?? "false")}>
          Step Label 5
        </IfxStep>
      </IfxStepper>
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxStepper
        onIfxChange={handleChange}
        activeStep={String(controlledProps.activeStep ?? "2")}
        indicatorPosition={String(controlledProps.indicatorPosition ?? "left")}
        showStepNumber={String(controlledProps.showStepNumber ?? "false")}
        variant={String(controlledProps.variant ?? "default")}
        {...(controlledProps as any)}>
        <IfxStep
          completeStep={String(controlledProps.completeStep ?? "false")}
          disabled={String(controlledProps.disabled ?? "false")}
          error={String(controlledProps.error ?? "false")}>
          Step Label 1
        </IfxStep>
        <IfxStep
          completeStep={String(controlledProps.completeStep ?? "false")}
          disabled={String(controlledProps.disabled ?? "false")}
          error={String(controlledProps.error ?? "false")}>
          Step Label 2
        </IfxStep>
        <IfxStep
          completeStep={String(controlledProps.completeStep ?? "false")}
          disabled={String(controlledProps.disabled ?? "false")}
          error={String(controlledProps.error ?? "false")}>
          Step Label 3
        </IfxStep>
        <IfxStep
          completeStep={String(controlledProps.completeStep ?? "false")}
          disabled={String(controlledProps.disabled ?? "false")}
          error={String(controlledProps.error ?? "false")}>
          Step Label 4
        </IfxStep>
        <IfxStep
          completeStep={String(controlledProps.completeStep ?? "false")}
          disabled={String(controlledProps.disabled ?? "false")}
          error={String(controlledProps.error ?? "false")}>
          Step Label 5
        </IfxStep>
      </IfxStepper>
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={handleCompleteStepChange}>Toggle CompleteStep</IfxButton>
        <IfxButton variant="secondary" onClick={handleDisabledChange}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={handleErrorChange}>Toggle Error</IfxButton>
        <IfxButton variant="secondary" onClick={handleIndicatorPositionChange}>Toggle IndicatorPosition</IfxButton>
        <IfxButton variant="secondary" onClick={handleShowStepNumberChange}>Toggle ShowStepNumber</IfxButton>
        <IfxButton variant="secondary" onClick={handleVariantChange}>Toggle Variant</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="activeStep" type="text" value={String(activeStep)} onInput={(event) => handleActiveStepChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="ariaLabelText" type="text" value={String(ariaLabelText)} onInput={(event) => handleAriaLabelTextChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="ariaCurrentText" type="text" value={String(ariaCurrentText)} onInput={(event) => handleAriaCurrentTextChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
	      </div>

	      <div className="state">
	          <div><b>activeStep:</b> {String(activeStep)}</div>
          <div><b>completeStep:</b> {String(completeStep)}</div>
          <div><b>disabled:</b> {String(disabled)}</div>
          <div><b>error:</b> {String(error)}</div>
          <div><b>indicatorPosition:</b> {String(indicatorPositionOptions[indicatorPositionIndex])}</div>
          <div><b>showStepNumber:</b> {String(showStepNumber)}</div>
          <div><b>variant:</b> {String(variantOptions[variantIndex])}</div>
          <div><b>ariaLabelText:</b> {String(ariaLabelText)}</div>
          <div><b>ariaCurrentText:</b> {String(ariaCurrentText)}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

