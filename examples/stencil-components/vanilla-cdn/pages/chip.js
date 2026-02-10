export function render(container) {

  container.innerHTML = `
    <h2>Chip</h2>

    <ifx-chip placeholder="Label" size="medium" variant="single" theme="outlined" icon="" read-only="false" aria-label="Chip" disabled="false">
        <ifx-chip-item value="Item Value 1">Item Label 1</ifx-chip-item>
        <ifx-chip-item value="Item Value 2">Item Label 2</ifx-chip-item>
        <ifx-chip-item value="Item Value 3">Item Label 3</ifx-chip-item>
        <ifx-chip-item value="Item Value 4">Item Label 4</ifx-chip-item>
    </ifx-chip>

    <br><br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>
      <ifx-button variant="secondary" id="toggle-variant">Toggle Variant</ifx-button>
      <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
      <ifx-button variant="secondary" id="toggle-readOnly">Toggle Read Only</ifx-button>
      <ifx-button variant="secondary" id="toggle-theme">Toggle Theme</ifx-button>
      <ifx-button variant="secondary" id="toggle-icon">Toggle Icon</ifx-button>
    </div>

    <br>

    <div class="state">
      <div><b>Size:</b> <span id="state-size"></div>
      <div><b>Variant:</b> <span id="state-variant"></div>
      <div><b>Disabled:</b> <span id="state-disabled"></div>
      <div><b>Read Only:</b> <span id="state-readOnly"></div>
      <div><b>Theme:</b> <span id="state-theme"></div>
      <div><b>Icon:</b> <span id="state-icon"></div>
    </div>
  `;

  const chip = container.querySelector('ifx-chip');;
  const sizeState = container.querySelector('#state-size');
  const variantState = container.querySelector('#state-variant');
  const disabledState = container.querySelector('#state-disabled');
  const readOnlyState = container.querySelector('#state-readOnly');
  const themeState = container.querySelector('#state-theme');
  const iconState = container.querySelector('#state-icon');

  const sizes = ["small", "medium", "large"];
  const variants = ["single", "multi"];
  const themes = ["outlined", "filled-light", "filled-dark"];
  const icons = ["", "windows16"];

  sizeState.textContent = chip.size;
  variantState.textContent = chip.variant;
  disabledState.textContent = String(chip.disabled);
  readOnlyState.textContent = String(chip.readOnly);
  themeState.textContent = chip.theme;
  iconState.textContent = chip.icon;

  container.querySelector('#toggle-size').onclick = () => {
    const currentIndex = sizes.indexOf(chip.size);
    const nextIndex = (currentIndex + 1) % sizes.length;

    chip.size = sizes[nextIndex];
    sizeState.textContent = chip.size;
  }

  container.querySelector('#toggle-variant').onclick = () => {
    const currentIndex = variants.indexOf(chip.variant);
    const nextIndex = (currentIndex + 1) % variants.length;

    chip.variant = variants[nextIndex];
    variantState.textContent = chip.variant;
  }

  container.querySelector('#toggle-disabled').onclick = () => {
    chip.disabled = !chip.disabled;
    disabledState.textContent = String(chip.disabled);
  }

  container.querySelector('#toggle-readOnly').onclick = () => {
    chip.readOnly = !chip.readOnly;
    readOnlyState.textContent = String(chip.readOnly);
  }

  container.querySelector('#toggle-theme').onclick = () => {
    const currentIndex = themes.indexOf(chip.theme);
    const nextIndex = (currentIndex + 1) % themes.length;

    chip.theme = themes[nextIndex];
    themeState.textContent = chip.theme;
  }

  container.querySelector('#toggle-icon').onclick = () => {
    const currentIndex = icons.indexOf(chip.icon);
    const nextIndex = (currentIndex + 1) % icons.length;

    chip.icon = icons[nextIndex];
    iconState.textContent = chip.icon;
  }
}