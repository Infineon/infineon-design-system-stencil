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

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>
    <ifx-button variant="secondary" id="toggle-variant">Toggle Variant</ifx-button>
    <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
    <ifx-button variant="secondary" id="toggle-readOnly">Toggle Read Only</ifx-button>
    <ifx-button variant="secondary" id="toggle-theme">Toggle Theme</ifx-button>

    <br><br>

    <span><b>Size:</b> <span id="state-size"></span></span><br>
    <span><b>Variant:</b> <span id="state-variant"></span></span><br>
    <span><b>Disabled:</b> <span id="state-disabled"></span></span><br>
    <span><b>Read Only:</b> <span id="state-readOnly"></span></span><br>
    <span><b>Theme:</b> <span id="state-theme"></span></span><br>
  `;

    const chip = container.querySelector('ifx-chip');
    const sizeState = container.querySelector('#state-size');
    const variantState = container.querySelector('#state-variant');
    const disabledState = container.querySelector('#state-disabled');
    const readOnlyState = container.querySelector('#state-readOnly');
    const themeState = container.querySelector('#state-theme');

    sizeState.textContent = chip.size;
    variantState.textContent = chip.variant;
    disabledState.textContent = String(chip.disabled);
    readOnlyState.textContent = String(chip.readOnly);
    themeState.textContent = chip.theme;

    container.querySelector('#toggle-size').onclick = () => {
        chip.size = chip.size === 'medium' ? 'small' : 'medium';
        sizeState.textContent = chip.size;
    }

    container.querySelector('#toggle-variant').onclick = () => {
        chip.variant = chip.variant === 'single' ? 'multiple' : 'single';
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
        chip.theme = chip.theme === 'outlined' ? 'filled' : 'outlined';
        themeState.textContent = chip.theme;
    }
}