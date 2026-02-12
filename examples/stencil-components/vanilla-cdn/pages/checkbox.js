export function render(container) {

  container.innerHTML = `
    <h2>Checkbox</h2>

    <ifx-checkbox error="false" disabled="false" checked="false" size="s" indeterminate="false" name="checkbox">Text</ifx-checkbox>

    <br><br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
    <ifx-button variant="secondary" id="toggle-error">Toggle Error</ifx-button>

    <br>

    <div class="state">
      <div><b>Disabled:</b> <span id="state-disabled"></div></div><br>
    <div><b>Error:</b> <span id="state-error"></div></div><br>
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
