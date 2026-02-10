export function render(container) {

  container.innerHTML = `
    <h2>Button</h2>

    <ifx-button type="button" aria-label="Button" disabled="false" variant="primary" size="m" target="_blank" theme="default"  full-width="false">
    <ifx-icon icon=""></ifx-icon>
    Button
    </ifx-button>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-variant">Toggle Variant</ifx-button>
    <ifx-button variant="secondary" id="toggle-theme">Toggle Theme</ifx-button>
    <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>
    <ifx-button variant="secondary" id="toggle-fullwidth">Toggle Full Width</ifx-button>
    <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
    <ifx-button variant="secondary" id="toggle-icon">Toggle Icon</ifx-button>

    <br><br>

    <span><b>Variant:</b> <span id="state-variant"></span></span><br>
    <span><b>Theme:</b> <span id="state-theme"></span></span><br>
    <span><b>Size:</b> <span id="state-size"></span></span><br>
    <span><b>Full Width:</b> <span id="state-fullwidth"></span></span><br>
    <span><b>Disabled:</b> <span id="state-disabled"></span></span><br>
    <span><b>Icon:</b> <span id="state-icon"></span></span>
  `;

  const button = container.querySelector('ifx-button');
  const btnIcon = button.querySelector('ifx-icon');
  const variantState = container.querySelector('#state-variant');
  const themeState = container.querySelector('#state-theme');
  const sizeState = container.querySelector('#state-size');
  const fullWidthState = container.querySelector('#state-fullwidth');
  const disabledState = container.querySelector('#state-disabled');
  const iconState = container.querySelector('#state-icon');

  const variants = ["primary", "secondary", "tertiary"];
  const themes = ["default", "danger", "inverse"];
  const sizes = ["xs", "s", "m", "l"];
  const icons = ["", "fileMpg16"];

  variantState.textContent = button.variant;
  themeState.textContent = button.theme;
  sizeState.textContent = button.size;
  fullWidthState.textContent = String(button.fullWidth);
  disabledState.textContent = String(button.disabled);
  iconState.textContent = btnIcon.icon;

  container.querySelector('#toggle-variant').onclick = () => {
    const currentIndex = variants.indexOf(button.variant);
    const nextIndex = (currentIndex + 1) % variants.length;

    button.variant = variants[nextIndex];
    variantState.textContent = button.variant;
  }

  container.querySelector('#toggle-theme').onclick = () => { 
    const currentIndex = themes.indexOf(button.theme);
    const nextIndex = (currentIndex + 1) % themes.length;

    button.theme = themes[nextIndex];
    themeState.textContent = button.theme;
  }

  container.querySelector('#toggle-size').onclick = () => {
    const currentIndex = sizes.indexOf(button.size);
    const nextIndex = (currentIndex + 1) % sizes.length;

    button.size = sizes[nextIndex];
    sizeState.textContent = button.size;
  }

  container.querySelector('#toggle-fullwidth').onclick = () => {
    button.fullWidth = !button.fullWidth;
    fullWidthState.textContent = String(button.fullWidth);
  }

  container.querySelector('#toggle-disabled').onclick = () => {
    button.disabled = !button.disabled;
    disabledState.textContent = String(button.disabled);
  }

  container.querySelector('#toggle-icon').onclick = () => {
    const currentIndex = icons.indexOf(btnIcon.icon);
    const nextIndex = (currentIndex + 1) % icons.length;

    btnIcon.icon = icons[nextIndex];
    iconState.textContent = btnIcon.icon;
  }
}