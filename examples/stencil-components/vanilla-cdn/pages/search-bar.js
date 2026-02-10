export function render(container) {

  container.innerHTML = `
    <h2>Search Bar</h2>

    <ifx-search-bar is-open="true" disabled="false" value="" autocomplete="on"></ifx-search-bar>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
    <ifx-button variant="secondary" id="toggle-open">Toggle Open</ifx-button>

    <br><br>

    <span><b>Disabled:</b> <span id="state-disabled"></span></span><br>
    <span><b>Open:</b> <span id="state-open"></span></span><br>
  `;

    const searchBar = container.querySelector('ifx-search-bar');
    const disabledState = container.querySelector('#state-disabled');
    const openState = container.querySelector('#state-open');

    disabledState.textContent = String(searchBar.disabled);
    openState.textContent = String(searchBar.isOpen);

    container.querySelector('#toggle-disabled').onclick = () => {
      searchBar.disabled = !searchBar.disabled;
      disabledState.textContent = String(searchBar.disabled);
    }

    container.querySelector('#toggle-open').onclick = () => {
      searchBar.isOpen = !searchBar.isOpen;
      openState.textContent = String(searchBar.isOpen);
    }
}