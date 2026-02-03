export function render(container) {

  container.innerHTML = `
    <h2>Action List</h2>

    <ifx-action-list list-aria-label="Interactive list with checkboxes">
      <ifx-action-list-item item-title="Enable notifications" description="Receive notifications for important updates" value="notifications" item-aria-label="Interactive item">
        <ifx-checkbox slot="leading" checked="false"></ifx-checkbox>
      </ifx-action-list-item>

      <ifx-action-list-item item-title="Auto-save documents" description="Automatically save your work" value="autosave" item-aria-label="Interactive item">
        <ifx-checkbox slot="leading" checked="false"></ifx-checkbox>
      </ifx-action-list-item>

      <ifx-action-list-item item-title="Enable backups" description="Create automatic backups" value="backups" item-aria-label="Interactive item">
        <ifx-checkbox slot="leading" checked="false"></ifx-checkbox>
      </ifx-action-list-item>
    </ifx-action-list>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-disabled"> Toggle Disabled </ifx-button>

    <br><br>

    <span><b>Disabled:</b> <span id="state-disabled"></span></span>
  `;

  const actionList = container.querySelector('ifx-action-list');
  const actionListItems = actionList.querySelectorAll('ifx-action-list-item');
  const disabledState = container.querySelector('#state-disabled');

  const item = actionListItems[0];
  disabledState.textContent = String(item.disabled);

  container.querySelector('#toggle-disabled').onclick = () => {
    actionListItems.forEach(item => {
      item.disabled = !item.disabled;
    });
    disabledState.textContent = String(actionListItems[0].disabled);
  }
}