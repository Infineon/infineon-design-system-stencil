export function render(container) {
    const sizes = ["small", "large"];
    const variants = ["single", "multi"];
    const themes = ["outlined", "filled-light", "filled-dark"];
    const icons = ["", "windows16"];

    let sizeIndex = 0;
    let variantIndex = 0;
    let disabled = false;
    let readOnly = false;

    container.innerHTML = `
    <h2>Chip</h2>

    <ifx-chip placeholder="Label" id="chip">
      <ifx-chip-item>Item 1</ifx-chip-item>
      <ifx-chip-item>Item 2</ifx-chip-item>
    </ifx-chip>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>
    <ifx-button variant="secondary" id="toggle-variant">Toggle Variant</ifx-button>
    <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
    <ifx-button variant="secondary" id="toggle-readOnly">Toggle Read Only</ifx-button>
    <ifx-button variant="secondary" id="toggle-theme">Toggle Theme</ifx-button>
    <ifx-button variant="secondary" id="toggle-icon">Toggle Icon</ifx-button>

    <br><br>

    <span><b>Size:</b> <span id="size"></span></span><br>
    <span><b>Variant:</b> <span id="variant"></span></span><br>
    <span><b>Disabled:</b> <span id="disabled"></span></span><br>
    <span><b>Read Only:</b> <span id="readOnly"></span></span><br>
    <span><b>Theme:</b> <span id="theme"></span></span><br>
    <span><b>Icon:</b> <span id="icon"></span></span>
  `;

    const chip = container.querySelector("#chip");

    const stateEls = {
        size: container.querySelector("#size"),
        variant: container.querySelector("#variant"),
        disabled: container.querySelector("#disabled"),
        readOnly: container.querySelector("#readOnly"),
        theme: container.querySelector("#theme"),
        icon: container.querySelector("#icon-state"),
    };

    function update() {
        chip.size = sizes[sizeIndex];
        chip.variant = variants[variantIndex];
        chip.disabled = disabled;
        chip.readOnly = readOnly;
        chip.theme = themes[themeIndex];
        chip.icon = icons[iconIndex];

        stateEls.size.textContent = sizes[sizeIndex];
        stateEls.variant.textContent = variants[variantIndex];
        stateEls.disabled.textContent = String(disabled);
        stateEls.readOnly.textContent = String(readOnly);
        stateEls.theme.textContent = themes[themeIndex];
        stateEls.icon.textContent = icons[iconIndex] || "none";
    }

    container.querySelector("#toggle-size").onclick = () => {
        sizeIndex = (sizeIndex + 1) % sizes.length;
        update();
    };

    container.querySelector("#toggle-variant").onclick = () => {
        variantIndex = (variantIndex + 1) % variants.length;
        update();
    };

    container.querySelector("#toggle-disabled").onclick = () => {
        disabled = !disabled;
        update();
    };

    container.querySelector("#toggle-readOnly").onclick = () => {
        readOnly = !readOnly;
        update();
    };

    container.querySelector("#toggle-theme").onclick = () => {
        themeIndex = (themeIndex + 1) % themes.length;
        update();
    };

    container.querySelector("#toggle-icon").onclick = () => {
        iconIndex = (iconIndex + 1) % icons.length;
        update();
    };

    update();
}