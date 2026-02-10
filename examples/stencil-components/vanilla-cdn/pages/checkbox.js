export function render(container) {

  container.innerHTML = `
    <h2>Checkbox</h2>

    <ifx-checkbox error="false" disabled="false" checked="false" size="s" indeterminate="false" name="checkbox">Text</ifx-checkbox>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
    <ifx-button variant="secondary" id="toggle-error">Toggle Error</ifx-button>

    <br><br>

    <span><b>Disabled:</b> <span id="state-disabled"></span></span><br>
    <span><b>Error:</b> <span id="state-error"></span></span><br>
  `;

  const checkbox = container.querySelector('ifx-checkbox');
  const disabledState = container.querySelector('#state-disabled');
  const errorState = container.querySelector('#state-error');

  disabledState.textContent = String(checkbox.disabled);
  errorState.textContent = String(checkbox.error);

  container.querySelector('#toggle-disabled').onclick = () => {
    checkbox.disabled = !checkbox.disabled;
    disabledState.textContent = String(checkbox.disabled);
  }

  container.querySelector('#toggle-error').onclick = () => {
    checkbox.error = !checkbox.error;
    errorState.textContent = String(checkbox.error);
  }

}
