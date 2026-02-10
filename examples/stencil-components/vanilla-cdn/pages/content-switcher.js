export function render(container) {

    container.innerHTML = `
    <h2>Content Switcher</h2>

    <ifx-content-switcher><ifx-content-switcher-item value="item 1">
      <ifx-icon icon="applications-16"></ifx-icon> Item 1
    </ifx-content-switcher-item><ifx-content-switcher-item value="item 2">
      <ifx-icon icon="applications-16"></ifx-icon> Item 2
    </ifx-content-switcher-item><ifx-content-switcher-item value="item 3">
      <ifx-icon icon="applications-16"></ifx-icon> Item 3
    </ifx-content-switcher-item><ifx-content-switcher-item value="item 4">
      <ifx-icon icon="applications-16"></ifx-icon> Item 4
    </ifx-content-switcher-item></ifx-content-switcher>

    `;
}