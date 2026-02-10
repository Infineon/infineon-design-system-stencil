export function render(container) {

  container.innerHTML = `
    <h2>Text Field</h2>

    <ifx-text-field error="false" disabled="false" size="m" icon="" success="false" placeholder="Placeholder" read-only="false" caption="Caption" label="Label" required="false" name="text-field" show-delete-icon="false" value="" autocomplete="on" type="text" internal-id="text-field" aria-label="text field for user input"></ifx-text-field>

    <br><br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-error">Toggle Error</ifx-button>
      <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
      <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>
      <ifx-button variant="secondary" id="toggle-success">Toggle Success</ifx-button>
      <ifx-button variant="secondary" id="toggle-readOnly">Toggle Read Only</ifx-button>
      <ifx-button variant="secondary" id="toggle-required">Toggle Required</ifx-button>
      <ifx-button variant="secondary" id="toggle-deleteIcon">Toggle Delete Icon</ifx-button>
      <ifx-button variant="secondary" id="toggle-icon">Toggle Icon</ifx-button>
    </div>
    <br>

    <div class="state">
      <div><b>Error:</b> <span id="state-error"></div>
      <div><b>Disabled:</b> <span id="state-disabled"></div>
      <div><b>Size:</b> <span id="state-size"></div>
      <div><b>Success:</b> <span id="state-success"></div>
      <div><b>Read Only:</b> <span id="state-readOnly"></div>
      <div><b>Required:</b> <span id="state-required"></div>
      <div><b>Delete Icon:</b> <span id="state-deleteIcon"></div>
      <div><b>Icon:</b> <span id="state-icon"></div>
    </div>
  `;

    const textField = container.querySelector('ifx-text-field');
    const errorState = container.querySelector('#state-error');
    const disabledState = container.querySelector('#state-disabled');
    const sizeState = container.querySelector('#state-size');
    const successState = container.querySelector('#state-success');
    const readOnlyState = container.querySelector('#state-readOnly');
    const requiredState = container.querySelector('#state-required');
    const deleteIconState = container.querySelector('#state-deleteIcon');
    const iconState = container.querySelector('#state-icon');

    const sizes = ['s', 'm'];
    const icons = ['', 'calendar-16'];

    errorState.textContent = String(textField.error);
    disabledState.textContent = String(textField.disabled);
    sizeState.textContent = textField.size;
    successState.textContent = String(textField.success);
    readOnlyState.textContent = String(textField.readOnly);
    requiredState.textContent = String(textField.required);
    deleteIconState.textContent = String(textField.showDeleteIcon);
    iconState.textContent = textField.icon;

    container.querySelector('#toggle-error').onclick = () => {
        textField.error = !textField.error;
        errorState.textContent = String(textField.error);
    }

    container.querySelector('#toggle-disabled').onclick = () => {
        textField.disabled = !textField.disabled;
        disabledState.textContent = String(textField.disabled);
    }

    container.querySelector('#toggle-size').onclick = () => {
        const currentIndex = sizes.indexOf(textField.size);
        const nextIndex = (currentIndex + 1) % sizes.length;
        textField.size = sizes[nextIndex];
        sizeState.textContent = textField.size;
    }

    container.querySelector('#toggle-success').onclick = () => {
        textField.success = !textField.success;
        successState.textContent = String(textField.success);
    }

    container.querySelector('#toggle-readOnly').onclick = () => {
        textField.readOnly = !textField.readOnly;
        readOnlyState.textContent = String(textField.readOnly);
    }

    container.querySelector('#toggle-required').onclick = () => {
        textField.required = !textField.required;
        requiredState.textContent = String(textField.required);
    }

    container.querySelector('#toggle-deleteIcon').onclick = () => {
        textField.showDeleteIcon = !textField.showDeleteIcon;
        deleteIconState.textContent = String(textField.showDeleteIcon);
    }

    container.querySelector('#toggle-icon').onclick = () => {
        const currentIndex = icons.indexOf(textField.icon);
        const nextIndex = (currentIndex + 1) % icons.length;
        textField.icon = icons[nextIndex];
        iconState.textContent = textField.icon;
    }
}