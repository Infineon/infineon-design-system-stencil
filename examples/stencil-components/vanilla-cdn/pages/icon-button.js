export function render(container) {

  container.innerHTML = `
    <h2>Icon Button</h2>

    <ifx-icon-button shape="round" variant="primary" icon="c-info-16" href="" target="_blank"  size="m" disabled="false" aria-label="Icon Button">
    </ifx-icon-button>

    <br/><br/>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
    <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>
    <ifx-button variant="secondary" id="toggle-variant">Toggle Variant</ifx-button>
    <ifx-button variant="secondary" id="toggle-shape">Toggle Shape</ifx-button>

    <br/><br/>

    <span><b>Disabled:</b> <span id="state-disabled"></span></span><br>
    <span><b>Size:</b> <span id="state-size"></span></span><br>
    <span><b>Variant:</b> <span id="state-variant"></span></span><br>
    <span><b>Shape:</b> <span id="state-shape"></span></span><br>
  `;

    const iconButton = container.querySelector('ifx-icon-button');
    const disabledState = container.querySelector('#state-disabled');
    const sizeState = container.querySelector('#state-size');
    const variantState = container.querySelector('#state-variant');
    const shapeState = container.querySelector('#state-shape');

    const size = ["s", "m", "l"];
    const variant = ["primary", "secondary", "tertiary"];
    const shape = ["square", "round"];

    disabledState.textContent = String(iconButton.disabled);
    sizeState.textContent = iconButton.size;
    variantState.textContent = iconButton.variant;
    shapeState.textContent = iconButton.shape;

    container.querySelector('#toggle-disabled').onclick = () => {
      iconButton.disabled = !iconButton.disabled;
      disabledState.textContent = String(iconButton.disabled);
    }

    container.querySelector('#toggle-size').onclick = () => {
      const currentIndex = size.indexOf(iconButton.size);
      const nextIndex = (currentIndex + 1) % size.length;
      iconButton.size = size[nextIndex];
      sizeState.textContent = iconButton.size;
    }

    container.querySelector('#toggle-variant').onclick = () => {
      const currentIndex = variant.indexOf(iconButton.variant);
      const nextIndex = (currentIndex + 1) % variant.length;
      iconButton.variant = variant[nextIndex];
      variantState.textContent = iconButton.variant;
    }

    container.querySelector('#toggle-shape').onclick = () => {
      const currentIndex = shape.indexOf(iconButton.shape);
      const nextIndex = (currentIndex + 1) % shape.length;
      iconButton.shape = shape[nextIndex];
      shapeState.textContent = iconButton.shape;
    }
}