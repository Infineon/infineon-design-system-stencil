export function render(container) {

    container.innerHTML = `
    <h2>Pagination</h2>

    <ifx-pagination total="50" current-page="1" show-items-per-page="true" items-per-page='[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}]'></ifx-pagination>

    <br/><br/>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-showItems">Toggle Show Items per Page</ifx-button>
    </div>

    <br /><br />

    <div class="state">
      <div><b>Show Items per Page:</b> <span id="state-showItems"></div>
    </div>
  `;

    const pagination = container.querySelector('ifx-pagination');
    const stateShowItems = container.querySelector('#state-showItems');

    stateShowItems.textContent = String(pagination.showItemsPerPage);

    container.querySelector('#toggle-showItems').onclick = () => {
      pagination.showItemsPerPage = !pagination.showItemsPerPage;
      stateShowItems.textContent = String(pagination.showItemsPerPage);
    }
}