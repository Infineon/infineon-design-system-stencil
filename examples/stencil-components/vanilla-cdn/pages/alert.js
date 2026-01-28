export function render(container) {
  const variants = ["primary", "success", "danger", "warning"];
  let variantIndex = 0;
  let closable = true;

  container.innerHTML = `
    <h2>Alert</h2>

    <ifx-alert
      id="alert"
      aria-live="assertive"
      icon="c-info-16">
      Attention! This is an alert message — check it out!
    </ifx-alert>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-variant">
      Toggle Variant
    </ifx-button>
    <ifx-button variant="secondary" id="toggle-closable">
      Toggle Closable State
    </ifx-button>

    <br><br>

    <span><b>Variant:</b> <span id="variant-state"></span></span><br>
    <span><b>Closable State:</b> <span id="closable-state"></span></span>
  `;

  const alert = container.querySelector('#alert');
  const variantState = container.querySelector('#variant-state');
  const closableState = container.querySelector('#closable-state');

  function update() {
    alert.variant = variants[variantIndex];
    alert.closable = closable;

    variantState.textContent = variants[variantIndex];
    closableState.textContent = String(closable);
  }

  container.querySelector('#toggle-variant').onclick = () => {
    variantIndex = (variantIndex + 1) % variants.length;
    update();
  };

  container.querySelector('#toggle-closable').onclick = () => {
    closable = !closable;
    update();
  };

  update();
}