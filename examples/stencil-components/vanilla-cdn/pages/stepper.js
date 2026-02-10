export function render(container) {

  container.innerHTML = `
    <h2>Stepper</h2>

    <ifx-stepper active-step="3" aria-label="" aria-current="" showStepNumber="true" variant="default">
      <ifx-step disabled="false">Step Label 1</ifx-step>
      <ifx-step error="false">Step Label 2</ifx-step>
      <ifx-step>Step Label 3</ifx-step>
      <ifx-step complete="false">Step Label 4</ifx-step>
      <ifx-step>Step Label 5</ifx-step>
    </ifx-stepper>

    <br><br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-stepNumber">Toggle Step Number</ifx-button>
      <ifx-button variant="secondary" id="toggle-variant">Toggle Variant</ifx-button>
      <ifx-button variant="secondary" id="toggle-error">Toggle Error for Step 2</ifx-button>
      <ifx-button variant="secondary" id="toggle-disable">Toggle Disable for Step 1</ifx-button>
      <ifx-button variant="secondary" id="toggle-complet">Toggle Complete for Step 4</ifx-button>
    </div>

    <br>

    <div class="state">
      <div><b>Step Number:</b> <span id="state-stepNumber"></div>
      <div><b>Variant:</b> <span id="state-variant"></div>
      <div><b>Step Error:</b> <span id="state-stepError"></div>
      <div><b>Step Disable:</b> <span id="state-stepDisabled"></div>
      <div><b>Step Complete:</b> <span id="state-stepComplete"></div>
    </div>
`;

    const stepper = container.querySelector('ifx-stepper');
    const steps = stepper.querySelectorAll('ifx-step');
    const stepNumberState = container.querySelector('#state-stepNumber');
    const variantState = container.querySelector('#state-variant');
    const stepErrorState = container.querySelector('#state-stepError');
    const stepDisabledState = container.querySelector('#state-stepDisabled');
    const stepCompleteState = container.querySelector('#state-stepComplete');

    const variants = ["default", "compact", "vertical"];

    stepNumberState.textContent = String(stepper.showStepNumber);
    variantState.textContent = stepper.variant;
    stepErrorState.textContent = String(steps[1].error);
    stepDisabledState.textContent = String(steps[0].disabled);
    stepCompleteState.textContent = String(steps[3].complete);

    container.querySelector('#toggle-stepNumber').onclick = () => {
      stepper.showStepNumber = !stepper.showStepNumber;
      stepNumberState.textContent = String(stepper.showStepNumber);
    }

    container.querySelector('#toggle-variant').onclick = () => {
      const currentIndex = variants.indexOf(stepper.variant);
      const nextIndex = (currentIndex + 1) % variants.length;
      stepper.variant = variants[nextIndex];
      variantState.textContent = stepper.variant;
    }

    container.querySelector('#toggle-error').onclick = () => {
      steps[1].error = !steps[1].error;
      stepErrorState.textContent = String(steps[1].error);
    }

    container.querySelector('#toggle-disable').onclick = () => {
      steps[0].disabled = !steps[0].disabled;
      stepDisabledState.textContent = String(steps[0].disabled);
    }

    container.querySelector('#toggle-complet').onclick = () => {
      steps[3].complete = !steps[3].complete;
      stepCompleteState.textContent = String(steps[3].complete);
    }
}