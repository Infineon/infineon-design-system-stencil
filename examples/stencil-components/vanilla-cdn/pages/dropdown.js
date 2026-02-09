export function render(container) {

  container.innerHTML = `
    <h2>Dropdown</h2>

    <div>
      <ifx-dropdown placement="bottom-start" disabled="false" default-open="false" no-close-on-outside-click="false" no-close-on-menu-click="false" no-append-to-body="false">

      <ifx-dropdown-trigger-button variant="primary">
        Dropdown
      </ifx-dropdown-trigger-button>

      <ifx-dropdown-menu size="m">
        <ifx-dropdown-item icon="c-info-16" target="_self" href="" error="false">Menu Item</ifx-dropdown-item>
        <ifx-dropdown-item icon="c-info-16" target="_self" href="" error="false">Menu Item</ifx-dropdown-item>
        <ifx-dropdown-item icon="c-info-16" target="_self" href="" error="false">Menu Item</ifx-dropdown-item>
        <ifx-dropdown-item icon="c-info-16" target="_self" href="" error="false">Menu Item</ifx-dropdown-item>
        <ifx-dropdown-item icon="c-info-16" target="_self" href="" error="false">Menu Item</ifx-dropdown-item>
      </ifx-dropdown-menu>
      </ifx-dropdown>
    </div>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
    <ifx-button variant="secondary" id="toggle-size-of-items">Toggle Size of Dropdown Items</ifx-button>
    <ifx-button variant="secondary" id="toggle-variant">Toggle variant</ifx-button>
    <ifx-button variant="secondary" id="toggle-placement">Toggle Placement</ifx-button>
    <ifx-button variant="secondary" id="toggle-noClose-outsideClick">Toggle No Close on Outside Click</ifx-button>
    <ifx-button variant="secondary" id="toggle-noClose-menuClick">Toggle No Close on Menu Click</ifx-button>

    <br><br>
    <span><b>Disabled:</b> <span id="state-disabled"></span></span><br>
    <span><b>Size of Dropdown Items:</b> <span id="state-size-of-items"></span></span><br>
    <span><b>Variant:</b> <span id="state-variant"></span></span><br>
    <span><b>Placement:</b> <span id="state-placement"></span></span><br>
    <span><b>No Close on Outside Click:</b> <span id="state-noClose-outsideClick"></span></span><br>
    <span><b>No Close on Menu Click:</b> <span id="state-noClose-menuClick"></span></span><br>
  `;

  const dropdown = container.querySelector('ifx-dropdown');
  const dropdownMenu = container.querySelector('ifx-dropdown-menu');
  const dropdownTrigger = container.querySelector('ifx-dropdown-trigger-button');
  const disabledState = container.querySelector('#state-disabled');
  const sizeOfItemsState = container.querySelector('#state-size-of-items');
  const variantState = container.querySelector('#state-variant');
  const placementState = container.querySelector('#state-placement');
  const noCloseOutsideClickState = container.querySelector('#state-noClose-outsideClick');
  const noCloseMenuClickState = container.querySelector('#state-noClose-menuClick');

  const sizes = ["s", "m"];
  const variants = ["primary", "secondary", "tertiary"];
  const placements = ["bottom-start", "auto", "auto-start", "auto-end", "top-start", "top", "top-end", "bottom", "bottom-end", "right-start", "right", "right-end", "left-start", "left", "left-end"];

  disabledState.textContent = String(dropdown.disabled);
  sizeOfItemsState.textContent = dropdownMenu.size;
  variantState.textContent = dropdownTrigger.variant;
  placementState.textContent = dropdown.placement;
  noCloseOutsideClickState.textContent = String(dropdown.noCloseOnOutsideClick);
  noCloseMenuClickState.textContent = String(dropdown.noCloseOnMenuClick);

  container.querySelector('#toggle-disabled').onclick = () => {
    dropdown.disabled = !dropdown.disabled;
    disabledState.textContent = String(dropdown.disabled);
  }

  container.querySelector('#toggle-size-of-items').onclick = () => {
    const currentIndex = sizes.indexOf(dropdownMenu.size);
    const nextIndex = (currentIndex + 1) % sizes.length;

    dropdownMenu.size = sizes[nextIndex];
    sizeOfItemsState.textContent = dropdownMenu.size;
  }

  container.querySelector('#toggle-variant').onclick = () => {
    const currentIndex = variants.indexOf(dropdownTrigger.variant);
    const nextIndex = (currentIndex + 1) % variants.length;

    dropdownTrigger.variant = variants[nextIndex];
    variantState.textContent = dropdownTrigger.variant;
  }

  container.querySelector('#toggle-placement').onclick = () => {
    const currentIndex = placements.indexOf(dropdown.placement);
    const nextIndex = (currentIndex + 1) % placements.length;

    dropdown.placement = placements[nextIndex];
    placementState.textContent = dropdown.placement;
  }

  container.querySelector('#toggle-noClose-outsideClick').onclick = () => {
    dropdown.noCloseOnOutsideClick = !dropdown.noCloseOnOutsideClick;
    noCloseOutsideClickState.textContent = String(dropdown.noCloseOnOutsideClick);
  }

  container.querySelector('#toggle-noClose-menuClick').onclick = () => {
    dropdown.noCloseOnMenuClick = !dropdown.noCloseOnMenuClick;
    noCloseMenuClickState.textContent = String(dropdown.noCloseOnMenuClick);
  }
}