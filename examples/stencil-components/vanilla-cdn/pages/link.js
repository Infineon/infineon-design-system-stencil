export function render(container) {

  container.innerHTML = `
    <h2>Link</h2>

    <ifx-link href="" aria-label="Link" target="_blank" size="m" variant="bold" disabled="false" download=""> Link </ifx-link>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>
    <ifx-button variant="secondary" id="toggle-variant">Toggle Variant</ifx-button>
    <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>

    <br><br>

    <span><b>Size:</b> <span id="state-size"></span></span><br>
    <span><b>Variant:</b> <span id="state-variant"></span></span><br>
    <span><b>Disabled:</b> <span id="state-disabled"></span></span><br>
  `;

    const link = container.querySelector('ifx-link');
    const stateSize = container.querySelector('#state-size');
    const stateVariant = container.querySelector('#state-variant');
    const stateDisabled = container.querySelector('#state-disabled');

    const sizes = ["s", "m", "l", "xl"];
    const variants = ["underline", "bold", "title", "menu"];

    stateSize.textContent = link.size;
    stateVariant.textContent = link.variant;
    stateDisabled.textContent = String(link.disabled);

    container.querySelector('#toggle-size').onclick = () => {
      const currentIndex = sizes.indexOf(link.size);
      const nextIndex = (currentIndex + 1) % sizes.length;
      link.size = sizes[nextIndex];
      stateSize.textContent = link.size;
    }

    container.querySelector('#toggle-variant').onclick = () => {
      const currentIndex = variants.indexOf(link.variant);
      const nextIndex = (currentIndex + 1) % variants.length;
      link.variant = variants[nextIndex];
      stateVariant.textContent = link.variant;
    }

    container.querySelector('#toggle-disabled').onclick = () => {
      link.disabled = !link.disabled;
      stateDisabled.textContent = String(link.disabled);
    }
}