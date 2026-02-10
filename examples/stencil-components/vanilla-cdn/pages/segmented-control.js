export function render(container) {

  container.innerHTML = `
    <h2>Segmented Control</h2>

    <ifx-segmented-control caption="Caption text to describe the controls" label="Group Label" size="regular" error="false" required="false">
      <ifx-segment value="Value1" icon="star-16">Label</ifx-segment>
      <ifx-segment value="Value2" icon="star-16">Label</ifx-segment>
      <ifx-segment value="Value3" icon="star-16">Label</ifx-segment>
      <ifx-segment value="Value4" icon="star-16">Label</ifx-segment>
      <ifx-segment value="Value5" icon="star-16">Label</ifx-segment>
    </ifx-segmented-control>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-error">Toggle Error</ifx-button>
    <ifx-button variant="secondary" id="toggle-required">Toggle Required</ifx-button>
    <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>

    <br><br>

    <span><b>Error:</b> <span id="state-error"></span></span><br>
    <span><b>Required:</b> <span id="state-required"></span></span><br>
    <span><b>Size:</b> <span id="state-size"></span></span><br>
  `;

    const segmentedControl = container.querySelector('ifx-segmented-control');
    const errorState = container.querySelector('#state-error');
    const requiredState = container.querySelector('#state-required');
    const sizeState = container.querySelector('#state-size');

    const sizes = ["regular", "small"];

    errorState.textContent = String(segmentedControl.error);
    requiredState.textContent = String(segmentedControl.required);
    sizeState.textContent = segmentedControl.size;

    container.querySelector('#toggle-error').onclick = () => {
      segmentedControl.error = !segmentedControl.error;
      errorState.textContent = String(segmentedControl.error);
    }

    container.querySelector('#toggle-required').onclick = () => {
      segmentedControl.required = !segmentedControl.required;
      requiredState.textContent = String(segmentedControl.required);
    }

    container.querySelector('#toggle-size').onclick = () => {
      const currentIndex = sizes.indexOf(segmentedControl.size);
      const nextIndex = (currentIndex + 1) % sizes.length;

      segmentedControl.size = sizes[nextIndex];
      sizeState.textContent = segmentedControl.size;
    }
}