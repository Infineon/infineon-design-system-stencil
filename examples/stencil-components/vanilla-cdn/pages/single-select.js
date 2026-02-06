export function render(container) {

    container.innerHTML = `
    <h2>Single Select</h2>

    <ifx-select 
      size='m'
      placeholder='true'
      show-clear-button='true'
      show-search='true'
      search-placeholder-value='Search...'
      disabled='false'
      required='true'
      error='false'
      label='Label'
      caption='Caption'
      placeholder-value='Placeholder'
      options='[{"value":"a","label":"option a","selected":false},{"value":"b","label":"option b","selected":false},{"value":"c","label":"option c","selected":false}]' >
    </ifx-select>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>
    <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
    <ifx-button variant="secondary" id="toggle-required">Toggle Required</ifx-button>
    <ifx-button variant="secondary" id="toggle-error">Toggle Error</ifx-button>
    <ifx-button variant="secondary" id="toggle-search">Toggle Search</ifx-button>
    <ifx-button variant="secondary" id="toggle-clear">Toggle Clear Button</ifx-button>

    <br><br>

    <span><b>Size:</b> <span id="state-size"></span></span><br>
    <span><b>Disabled:</b> <span id="state-disabled"></span></span><br>
    <span><b>Required:</b> <span id="state-required"></span></span><br>
    <span><b>Error:</b> <span id="state-error"></span></span><br>
    <span><b>Show Search:</b> <span id="state-search"></span></span><br>
    <span><b>Show Clear Button:</b> <span id="state-clear"></span></span><br>
  `;

    const singleSelect = container.querySelector('ifx-select');
    const sizeState = container.querySelector('#state-size');
    const disabledState = container.querySelector('#state-disabled');
    const requiredState = container.querySelector('#state-required');
    const errorState = container.querySelector('#state-error');
    const searchState = container.querySelector('#state-search');
    const clearState = container.querySelector('#state-clear');

    const sizes = ['m', 's'];

    sizeState.textContent = singleSelect.size;
    disabledState.textContent = String(singleSelect.disabled);
    requiredState.textContent = String(singleSelect.required);
    errorState.textContent = String(singleSelect.error);
    searchState.textContent = String(singleSelect.showSearch);
    clearState.textContent = String(singleSelect.showClearButton);

    container.querySelector('#toggle-size').onclick = () => {
      const currentIndex = sizes.indexOf(singleSelect.size);
      const nextIndex = (currentIndex + 1) % sizes.length;
      singleSelect.size = sizes[nextIndex];
      sizeState.textContent = singleSelect.size;
    }

    container.querySelector('#toggle-disabled').onclick = () => {
      singleSelect.disabled = !singleSelect.disabled;
      disabledState.textContent = String(singleSelect.disabled);
    }

    container.querySelector('#toggle-required').onclick = () => {
      singleSelect.required = !singleSelect.required;
      requiredState.textContent = String(singleSelect.required);
    }

    container.querySelector('#toggle-error').onclick = () => {
      singleSelect.error = !singleSelect.error;
      errorState.textContent = String(singleSelect.error);
    }

    container.querySelector('#toggle-search').onclick = () => {
      singleSelect.showSearch = !singleSelect.showSearch;
      searchState.textContent = String(singleSelect.showSearch);
    }

    container.querySelector('#toggle-clear').onclick = () => {
      singleSelect.showClearButton = !singleSelect.showClearButton;
      clearState.textContent = String(singleSelect.showClearButton);
    }
}