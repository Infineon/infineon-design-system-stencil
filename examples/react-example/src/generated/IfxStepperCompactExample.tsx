import { IfxStep, IfxStepper } from '@infineon/infineon-design-system-react';

export function IfxStepperCompactExample() {
  const handleChange = (event: CustomEvent) => {
    console.log('ifxChange:', event);
    // Add your handler logic here
  };

  return (
    <>
      <IfxStepper
        activeStep={2}
        ariaLabel=""
        ariaCurrent=""
        indicatorPosition="left"
        variant="compact"
        onIfxChange={handleChange}>
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
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

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
        indicatorPosition="left"
        variant="compact"
        onIfxChange={handleChange}>
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
}`;
