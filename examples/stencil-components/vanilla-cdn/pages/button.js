export function render(container) {
  const variants = ["primary", "secondary", "tertiary"];
  const themes = ["default", "danger", "inverse"];
  const sizes = ["xs", "s", "m", "l"];
  const icons = ["", "fileMpg16"];

  let variantIndex = 0;
  let themeIndex = 0;
  let sizeIndex = 2;
  let iconIndex = 0;

  let fullWidth = false;
  let disabled = false;

  container.innerHTML = `
    <h2>Button</h2>

    <ifx-button id="btn">
      <ifx-icon id="icon"></ifx-icon>
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

    <span><b>Variant:</b> <span id="variant"></span></span><br>
    <span><b>Theme:</b> <span id="theme"></span></span><br>
    <span><b>Size:</b> <span id="size"></span></span><br>
    <span><b>Full Width:</b> <span id="fullwidth"></span></span><br>
    <span><b>Disabled:</b> <span id="disabled"></span></span><br>
    <span><b>Icon:</b> <span id="icon-state"></span></span>
  `;

  const btn = container.querySelector('#btn');
  const icon = container.querySelector('#icon');

  const stateEls = {
    variant: container.querySelector('#variant'),
    theme: container.querySelector('#theme'),
    size: container.querySelector('#size'),
    fullwidth: container.querySelector('#fullwidth'),
    disabled: container.querySelector('#disabled'),
    icon: container.querySelector('#icon-state'),
  };

  function update() {
    btn.variant = variants[variantIndex];
    btn.theme = themes[themeIndex];
    btn.size = sizes[sizeIndex];
    btn.fullWidth = fullWidth;
    btn.disabled = disabled;

    icon.icon = icons[iconIndex];

    stateEls.variant.textContent = variants[variantIndex];
    stateEls.theme.textContent = themes[themeIndex];
    stateEls.size.textContent = sizes[sizeIndex];
    stateEls.fullwidth.textContent = String(fullWidth);
    stateEls.disabled.textContent = String(disabled);
    stateEls.icon.textContent = icons[iconIndex] || 'none';
  }

  container.querySelector('#toggle-variant').onclick = () => {
    variantIndex = (variantIndex + 1) % variants.length;
    update();
  };

  container.querySelector('#toggle-theme').onclick = () => {
    themeIndex = (themeIndex + 1) % themes.length;
    update();
  };

  container.querySelector('#toggle-size').onclick = () => {
    sizeIndex = (sizeIndex + 1) % sizes.length;
    update();
  };

  container.querySelector('#toggle-fullwidth').onclick = () => {
    fullWidth = !fullWidth;
    update();
  };

  container.querySelector('#toggle-disabled').onclick = () => {
    disabled = !disabled;
    update();
  };

  container.querySelector('#toggle-icon').onclick = () => {
    iconIndex = (iconIndex + 1) % icons.length;
    update();
  };

  update();
}