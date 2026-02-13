export function render(container) {

  container.innerHTML = `
    <h2>Switch</h2>

    <ifx-switch checked="false" name="switch" value="switch" disabled="false">Switch</ifx-switch>

    <br><br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
    </div>

    <br>

    <div class="state">
      <div><b>Disabled:</b> <span id="state-disabled"></div>
    </div>
  `;

    const switchElement = container.querySelector('ifx-switch');
    const disabledState = container.querySelector('#state-disabled');

    disabledState.textContent = String(switchElement.disabled);

    container.querySelector('#toggle-disabled').onclick = () => {
      switchElement.disabled = !switchElement.disabled;
      disabledState.textContent = String(switchElement.disabled);
    }
}