import { useState } from 'react';
import { IfxStepper, IfxStep, IfxButton } from '@infineon/infineon-design-system-react';

function Stepper() {
  const [showStepNumber, setShowStepNumber] = useState(false);

  const [variantIndex, setVariantIndex] = useState(0);
  const variants = ['default', 'compact'];

  const [stepError, setStepError] = useState(false);
  const [stepDisable, setStepDisable] = useState(false);
  const [stepComplete, setStepComplete] = useState(false);

  const toggleStepNumber = () => {
    setShowStepNumber((prev) => !prev);
  };

  const toggleVariant = () => {
    setVariantIndex((index) => (index + 1) % variants.length);
  };

  const toggleStepError = () => {
    setStepError((prev) => !prev);
  };

  const toggleStepDisable = () => {
    setStepDisable((prev) => !prev);
  };

  const toggleStepComplete = () => {
    setStepComplete((prev) => !prev);
  };

  return (
    <div className="component">
      <h2>Stepper</h2>

      <IfxStepper activeStep="3" showStepNumber={showStepNumber} variant={variants[variantIndex]}>
        <IfxStep disabled={stepDisable}>Step Label 1</IfxStep>
        <IfxStep error={stepError}>Step Label 2</IfxStep>
        <IfxStep>Step Label 3</IfxStep>
        <IfxStep complete={stepComplete}>Step Label 4</IfxStep>
        <IfxStep>Step Label 5</IfxStep>
      </IfxStepper>

      <br />
      <br />
      <h3 style={{ textDecoration: 'underline' }}>Controls</h3>
      <IfxButton variant="secondary" onClick={toggleStepNumber}>Toggle Step Number</IfxButton>
      <IfxButton variant="secondary" onClick={toggleVariant}>Toggle Variant</IfxButton>
      <IfxButton variant="secondary" onClick={toggleStepError}>Toggle Error for Step 2</IfxButton>
      <IfxButton variant="secondary" onClick={toggleStepDisable}>Toggle Disable for Step 1</IfxButton>
      <IfxButton variant="secondary" onClick={toggleStepComplete}>Toggle Complete for Step 4</IfxButton>
      <br />
      <br />
      <span><b>Step Number:</b> {String(showStepNumber)}</span><br />
      <span><b>Variant:</b> {variants[variantIndex]}</span><br />
      <span><b>Step Error:</b> {String(stepError)}</span><br />
      <span><b>Step Disable:</b> {String(stepDisable)}</span><br />
      <span><b>Step Complete:</b> {String(stepComplete)}</span><br />
    </div>
  );
}

export default Stepper;