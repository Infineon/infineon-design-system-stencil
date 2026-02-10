export function render(container) {

  container.innerHTML = `
    <h2>Alert</h2>

    <ifx-alert aria-live="assertive" variant="primary" icon="c-info-16" closable="true">Attention! This is an alert message — check it out!</ifx-alert>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-variant"> Toggle Variant </ifx-button>
    <ifx-button variant="secondary" id="toggle-closable"> Toggle Closable State </ifx-button>

    <br><br>

    <span><b>Variant:</b> <span id="state-variant"></span></span><br>
    <span><b>Closable:</b> <span id="state-closable"></span></span>
  `;

  const alert = container.querySelector('ifx-alert');
  const variantState = container.querySelector('#state-variant');
  const closableState = container.querySelector('#state-closable');

  const variants = ["primary", "success", "warning", "danger"];

  variantState.textContent = alert.variant;
  closableState.textContent = String(alert.closable);

  container.querySelector('#toggle-variant').onclick = () => {
    const currentIndex = variants.indexOf(alert.variant);
    const nextIndex = (currentIndex + 1) % variants.length;

    alert.variant = variants[nextIndex];
    variantState.textContent = alert.variant;
  }

  container.querySelector('#toggle-closable').onclick = () => {
    alert.closable = !alert.closable;
    closableState.textContent = String(alert.closable);
  }
}