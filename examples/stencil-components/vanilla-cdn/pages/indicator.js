export function render(container) {

  container.innerHTML = `
    <h2>Indicator</h2>

    <ifx-indicator variant="number" number="1" inverted="false"> </ifx-indicator>

    <br/><br/>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-variant">Toggle Variant</ifx-button>
    <ifx-button variant="secondary" id="toggle-inverted">Toggle Inverted</ifx-button>

    <br /><br />
    <span><b>Variant:</b> <span id="state-variant"></span></span><br />
    <span><b>Inverted:</b> <span id="state-inverted"></span></span><br />
  `;

  const indicator = container.querySelector('ifx-indicator');
  const stateVariant = container.querySelector('#state-variant');
  const stateInverted = container.querySelector('#state-inverted');

  const variants = ["number", "dot"];

  stateVariant.textContent = indicator.variant;
  stateInverted.textContent = String(indicator.inverted);

  container.querySelector('#toggle-variant').onclick = () => {
    const currentIndex = variants.indexOf(indicator.variant);
    const nextIndex = (currentIndex + 1) % variants.length;

    indicator.variant = variants[nextIndex];
    variantState.textContent = indicator.variant;
  }

   container.querySelector('#toggle-inverted').onclick = () => {
    indicator.inverted = !indicator.inverted;
    inverted.textContent = String(indicator.inverted);
  }
}