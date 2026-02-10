export function render(container) {

  container.innerHTML = `
    <h2>Spinner</h2>

    <ifx-spinner aria-label="" variant="default" size="m" inverted="false"></ifx-spinner>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-variant">Toggle Variant</ifx-button>
    <ifx-button variant="secondary" id="toggle-inverted">Toggle Inverted</ifx-button>
    <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>

    <br><br>

    <span><b>Variant:</b> <span id="state-variant"></span></span><br>
    <span><b>Inverted:</b> <span id="state-inverted"></span></span><br>
    <span><b>Size:</b> <span id="state-size"></span></span><br>
  `;

    const spinner = container.querySelector('ifx-spinner');
    const variantState = container.querySelector('#state-variant');
    const invertedState = container.querySelector('#state-inverted');
    const sizeState = container.querySelector('#state-size');

    const variants = ["default", "brand"];
    const sizes = ["s", "m"];

    variantState.textContent = spinner.variant;
    invertedState.textContent = String(spinner.inverted);
    sizeState.textContent = spinner.size;

    container.querySelector('#toggle-variant').onclick = () => {
      const currentIndex = variants.indexOf(spinner.variant);
      const nextIndex = (currentIndex + 1) % variants.length;
      spinner.variant = variants[nextIndex];
      variantState.textContent = spinner.variant;
    }

    container.querySelector('#toggle-inverted').onclick = () => {
      spinner.inverted = !spinner.inverted;
      invertedState.textContent = String(spinner.inverted);
    }

    container.querySelector('#toggle-size').onclick = () => {
      const currentIndex = sizes.indexOf(spinner.size);
      const nextIndex = (currentIndex + 1) % sizes.length;
      spinner.size = sizes[nextIndex];
      sizeState.textContent = spinner.size;
    }
}