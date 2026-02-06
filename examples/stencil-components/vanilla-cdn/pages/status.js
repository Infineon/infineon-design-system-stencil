export function render(container) {

    container.innerHTML = `
    <h2>Status</h2>

    <ifx-status label="text" color="ocean-500" border="true"></ifx-status>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-border">Toggle Border</ifx-button>
    <ifx-dropdown placement="bottom-start" id="color-dropdown">
        <ifx-dropdown-trigger-button variant="secondary">
            Change Color
        </ifx-dropdown-trigger-button>
        <ifx-dropdown-menu size="s">
            <ifx-dropdown-item data-color="green-500">green-500</ifx-dropdown-item>
            <ifx-dropdown-item data-color="orange-500">orange-500</ifx-dropdown-item>
            <ifx-dropdown-item data-color="ocean-500">ocean-500</ifx-dropdown-item>
            <ifx-dropdown-item data-color="red-500">red-500</ifx-dropdown-item>
            <ifx-dropdown-item data-color="lawn-500">lawn-500</ifx-dropdown-item>
            <ifx-dropdown-item data-color="berry-500">berry-500</ifx-dropdown-item>
        </ifx-dropdown-menu>
    </ifx-dropdown>
    <br><br>

    <span><b>Border:</b> <span id="state-border"></span></span><br>
  `;

    const status = container.querySelector('ifx-status');
    const borderState = container.querySelector('#state-border');

    borderState.textContent = String(status.border);

    container.querySelector('#toggle-border').onclick = () => {
        status.border = !status.border;
        borderState.textContent = String(status.border);
    }

    const colorDropdown = container.querySelector('#color-dropdown');
    const dropdownItems = colorDropdown.querySelectorAll('ifx-dropdown-item');

    dropdownItems.forEach(item => {
        item.onclick = () => {
            const selectedColor = item.getAttribute('data-color');
            status.color = selectedColor;
        }
    });
}