export function render(container) {

  container.innerHTML = `
    <h2>Date Picker</h2>

    <ifx-date-picker name="date-picker" error="false" disabled="false" size="s" success="false" value="" max="" min="" label="Label Text" caption="Caption text, description, error notification." aria-label="Date Picker" required="false" autocomplete="on" type="date"></ifx-date-picker>

    <br><br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-success">Toggle Success</ifx-button>
      <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
      <ifx-button variant="secondary" id="toggle-error">Toggle Error</ifx-button>
      <ifx-button variant="secondary" id="toggle-required">Toggle Required</ifx-button>
      <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>
      <ifx-button variant="secondary" id="toggle-type">Toggle Type</ifx-button>
    </div>

    <br>

    <div class="state">
      <div><b>Success:</b> <span id="state-success"></div>
      <div><b>Disabled:</b> <span id="state-disabled"></div>
      <div><b>Error:</b> <span id="state-error"></div>
      <div><b>Required:</b> <span id="state-required"></div>
      <div><b>Size:</b> <span id="state-size"></div>
      <div><b>Type:</b> <span id="state-type"></div>
    </div>
  `;

    const datePicker = container.querySelector('ifx-date-picker');
    const successState = container.querySelector('#state-success');
    const disabledState = container.querySelector('#state-disabled');
    const errorState = container.querySelector('#state-error');
    const requiredState = container.querySelector('#state-required');
    const sizeState = container.querySelector('#state-size');
    const typeState = container.querySelector('#state-type');

    const size = ["s", "l"];
    const type = ["date", "datetime-local"];

    successState.textContent = String(datePicker.success);
    disabledState.textContent = String(datePicker.disabled);
    errorState.textContent = String(datePicker.error);
    requiredState.textContent = String(datePicker.required);
    sizeState.textContent = datePicker.size;
    typeState.textContent = datePicker.type;

    container.querySelector('#toggle-success').onclick = () => {
      datePicker.success = !datePicker.success;
      successState.textContent = String(datePicker.success);
    }

    container.querySelector('#toggle-disabled').onclick = () => {
      datePicker.disabled = !datePicker.disabled;
      disabledState.textContent = String(datePicker.disabled);
    }

    container.querySelector('#toggle-error').onclick = () => {
      datePicker.error = !datePicker.error;
      errorState.textContent = String(datePicker.error);
    }

    container.querySelector('#toggle-required').onclick = () => {
      datePicker.required = !datePicker.required;
      requiredState.textContent = String(datePicker.required);
    }

    container.querySelector('#toggle-size').onclick = () => {
      const currentIndex = size.indexOf(datePicker.size);
      const nextIndex = (currentIndex + 1) % size.length;

      datePicker.size = size[nextIndex];
      sizeState.textContent = datePicker.size;
    }

    container.querySelector('#toggle-type').onclick = () => {
      const currentIndex = type.indexOf(datePicker.type);
      const nextIndex = (currentIndex + 1) % type.length;

      datePicker.type = type[nextIndex];
      typeState.textContent = datePicker.type;
    }
}