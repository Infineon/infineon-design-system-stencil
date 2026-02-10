export function render(container) {

  container.innerHTML = `
    <h2>Search Field</h2>

    <ifx-search-field size="m" disabled="false" show-delete-icon="true" show-suggestions="false" enable-history="true" max-suggestions="10" max-history-items="5" history-key="ifx-search-history" history-header-text="Recent Searches" value="" autocomplete="on" placeholder="Search..." aria-label="Search field" delete-icon-aria-label="Clear search" history-delete-aria-label="Remove from history" dropdown-aria-label="Search suggestions and history" suggestion-aria-label="Search suggestion" history-item-aria-label="Search history item"></ifx-search-field>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
    <ifx-button variant="secondary" id="toggle-delete">Toggle Delete Icon</ifx-button>
    <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>

    <br><br>

    <span><b>Disabled:</b> <span id="state-disabled"></span></span><br>
    <span><b>Show Delete Icon:</b> <span id="state-delete-icon"></span></span><br>
    <span><b>Size:</b> <span id="state-size"></span></span><br>
  `;
  
    const searchField = container.querySelector('ifx-search-field');
    const disabledState = container.querySelector('#state-disabled');
    const deleteIconState = container.querySelector('#state-delete-icon');
    const sizeState = container.querySelector('#state-size');

    const sizes = ["s", "m"];

    disabledState.textContent = String(searchField.disabled);
    deleteIconState.textContent = String(searchField.showDeleteIcon);
    sizeState.textContent = searchField.size;

    container.querySelector('#toggle-disabled').onclick = () => {
      searchField.disabled = !searchField.disabled;
      disabledState.textContent = String(searchField.disabled);
    }

    container.querySelector('#toggle-delete').onclick = () => {
      searchField.showDeleteIcon = !searchField.showDeleteIcon;
      deleteIconState.textContent = String(searchField.showDeleteIcon);
    }

    container.querySelector('#toggle-size').onclick = () => {
      const currentIndex = sizes.indexOf(searchField.size);
      const nextIndex = (currentIndex + 1) % sizes.length;

      searchField.size = sizes[nextIndex];
      sizeState.textContent = searchField.size;
    }
}