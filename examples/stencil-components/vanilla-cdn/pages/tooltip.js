export function render(container) {

  container.innerHTML = `
    <h2>Tooltip</h2>

    <ifx-tooltip text="Hi, I'm a tooltip" variant="compact" position="auto" icon="c-info-16" aria-label="Tooltip with important information">I'm the tooltip reference element - Please hover me</ifx-tooltip>

    <br><br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-variant">Toggle Variant</ifx-button>
      <ifx-button variant="secondary" id="toggle-position">Toggle Position</ifx-button>
    </div>

    <br>

    <div class="state">
      <div><b>Variant:</b> <span id="state-variant"></div>
      <div><b>Position:</b> <span id="state-position"></div>
    </div>
  `;

  const tooltip = container.querySelector('ifx-tooltip');
  const variantState = container.querySelector('#state-variant');
  const positionState = container.querySelector('#state-position');

  const variants = ["compact", "dismissible", "extended"];
  const positions = ["auto", "bottom-start", "top-start", "left", "bottom-end", "top-end", "right", "bottom", "top"];

  variantState.textContent = tooltip.variant;
  positionState.textContent = tooltip.position;

  container.querySelector('#toggle-variant').onclick = () => {
    const currentIndex = variants.indexOf(tooltip.variant);
    const nextIndex = (currentIndex + 1) % variants.length;

    tooltip.variant = variants[nextIndex];
    variantState.textContent = tooltip.variant;
  }

  container.querySelector('#toggle-position').onclick = () => {
    const currentIndex = variants.indexOf(tooltip.position);
    const nextIndex = (currentIndex + 1) % positions.length;

    tooltip.position = positions[nextIndex];
    positionState.textContent = tooltip.position;
  }
}