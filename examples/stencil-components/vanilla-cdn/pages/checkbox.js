export function render(container) {
  let disabled = false;
  let error = false;

  container.innerHTML = `
    <h2>Checkbox</h2>

    <ifx-checkbox id="checkbox">Label</ifx-checkbox>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
    <ifx-button variant="secondary" id="toggle-error">Toggle Error</ifx-button>

    <br><br>

    <span><b>Disabled:</b> <span id="disabled"></span></span><br>
    <span><b>Error:</b> <span id="error"></span></span><br>
  `;

  const checkbox = container.querySelector('#checkbox');

  const stateEls = {
    disabled: container.querySelector('#disabled'),
    error: container.querySelector('#error'),
  };

  function update() {
    checkbox.disabled = disabled;
    checkbox.error = error;

    stateEls.disabled.textContent = String(disabled);
    stateEls.error.textContent = String(error);
  }

  container.querySelector('#toggle-disabled').onclick = () => {
    disabled = !disabled; update();
  };
  container.querySelector('#toggle-error').onclick = () => {
    error = !error; update();
  };

  update();
}
