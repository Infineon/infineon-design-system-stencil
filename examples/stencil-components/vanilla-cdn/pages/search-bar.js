export function render(container) {

  container.innerHTML = `
    <h2>Search Bar</h2>

    <ifx-search-bar is-open="true" disabled="false" value="" autocomplete="on"></ifx-search-bar>

    <br><br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
      <ifx-button variant="secondary" id="toggle-open">Toggle Open</ifx-button>
    </div>

    <br>

    <div class="state">
      <div><b>Disabled:</b> <span id="state-disabled"></div>
      <div><b>Open:</b> <span id="state-open"></div>
    </div>
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