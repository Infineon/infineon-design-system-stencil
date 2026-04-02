import { IfxStep, IfxStepper } from '@infineon/infineon-design-system-react';

export function IfxStepperExample() {
  return (
    <>
      <IfxStepper
        activeStep={2}
        ariaLabelText=""
        ariaCurrentText=""
        showStepNumber={false}
        variant="default">
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
  return (
      <IfxStepper
        activeStep={2}
        ariaLabelText=""
        ariaCurrentText=""
        showStepNumber={false}
        variant="default">
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
