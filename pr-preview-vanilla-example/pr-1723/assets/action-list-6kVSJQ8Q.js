function c(t){t.innerHTML=`
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

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-disabled"> Toggle Disabled </ifx-button>
    </div>

    <br>

    <div class="state">
      <div><b>Disabled:</b> <span id="state-disabled"></div>
    </div>
  `;const i=t.querySelector("ifx-action-list").querySelectorAll("ifx-action-list-item"),e=t.querySelector("#state-disabled"),l=i[0];e.textContent=String(l.disabled),t.querySelector("#toggle-disabled").onclick=()=>{i.forEach(a=>{a.disabled=!a.disabled}),e.textContent=String(i[0].disabled)}}export{c as render};
