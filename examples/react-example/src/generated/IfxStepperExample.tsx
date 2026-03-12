import { useState } from 'react';
import { IfxButton, IfxStep, IfxStepper, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxStepperExample() {
  const [activeStep, setActiveStep] = useState(2);
  const [amountOfSteps, setAmountOfSteps] = useState(5);
  const [completeStep, setCompleteStep] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);
  const indicatorPositionOptions = ["left","right"];
  const [indicatorPositionIndex, setIndicatorPositionIndex] = useState(0);
  const [showStepNumber, setShowStepNumber] = useState(false);
  const variantOptions = ["default","compact","vertical"];
  const [variantIndex, setVariantIndex] = useState(0);
  const [ariaLabel, setAriaLabel] = useState("");
  const [ariaCurrent, setAriaCurrent] = useState("");

  const toggleActiveStep = (value: string) => setActiveStep(Number(value));
  const toggleAmountOfSteps = (value: string) => setAmountOfSteps(Number(value));
  const toggleCompleteStep = () => setCompleteStep((v) => !v);
  const toggleDisabled = () => setDisabled((v) => !v);
  const toggleError = () => setError((v) => !v);
  const toggleIndicatorPosition = () => setIndicatorPositionIndex((i) => (i + 1) % indicatorPositionOptions.length);
  const toggleShowStepNumber = () => setShowStepNumber((v) => !v);
  const toggleVariant = () => setVariantIndex((i) => (i + 1) % variantOptions.length);
  const toggleAriaLabel = (value: string) => setAriaLabel(value);
  const toggleAriaCurrent = (value: string) => setAriaCurrent(value);

  const controlledProps = {
    "activeStep": activeStep,
    "amountOfSteps": amountOfSteps,
    "completeStep": completeStep,
    "disabled": disabled,
    "error": error,
    "indicatorPosition": indicatorPositionOptions[indicatorPositionIndex],
    "showStepNumber": showStepNumber,
    "variant": variantOptions[variantIndex],
    "ariaLabel": ariaLabel,
    "ariaCurrent": ariaCurrent,
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
    ["amountOfSteps", controlledProps["amountOfSteps"]],
    ["completeStep", controlledProps["completeStep"]],
    ["disabled", controlledProps["disabled"]],
    ["error", controlledProps["error"]],
    ["indicatorPosition", controlledProps["indicatorPosition"]],
    ["showStepNumber", controlledProps["showStepNumber"]],
    ["variant", controlledProps["variant"]],
    ["ariaLabel", controlledProps["ariaLabel"]],
    ["ariaCurrent", controlledProps["ariaCurrent"]],
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

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxStepper
        onIfxChange={handleChange}
        {...(controlledProps as any)}>
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
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={toggleCompleteStep}>Toggle CompleteStep</IfxButton>
        <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={toggleError}>Toggle Error</IfxButton>
        <IfxButton variant="secondary" onClick={toggleIndicatorPosition}>Toggle IndicatorPosition</IfxButton>
        <IfxButton variant="secondary" onClick={toggleShowStepNumber}>Toggle ShowStepNumber</IfxButton>
        <IfxButton variant="secondary" onClick={toggleVariant}>Toggle Variant</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="activeStep" type="text" value={String(activeStep)} onInput={(event) => toggleActiveStep(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="amountOfSteps" type="text" value={String(amountOfSteps)} onInput={(event) => toggleAmountOfSteps(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="ariaLabel" type="text" value={String(ariaLabel)} onInput={(event) => toggleAriaLabel(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="ariaCurrent" type="text" value={String(ariaCurrent)} onInput={(event) => toggleAriaCurrent(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
	      </div>

	      <div className="state">
	          <div><b>activeStep:</b> {String(activeStep)}</div>
          <div><b>amountOfSteps:</b> {String(amountOfSteps)}</div>
          <div><b>completeStep:</b> {String(completeStep)}</div>
          <div><b>disabled:</b> {String(disabled)}</div>
          <div><b>error:</b> {String(error)}</div>
          <div><b>indicatorPosition:</b> {String(indicatorPositionOptions[indicatorPositionIndex])}</div>
          <div><b>showStepNumber:</b> {String(showStepNumber)}</div>
          <div><b>variant:</b> {String(variantOptions[variantIndex])}</div>
          <div><b>ariaLabel:</b> {String(ariaLabel)}</div>
          <div><b>ariaCurrent:</b> {String(ariaCurrent)}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

