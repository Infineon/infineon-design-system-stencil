function c(t){let i=!1;t.innerHTML=`
    <h2>Action List</h2>

    <ifx-action-list id="action-list" list-aria-label="Interactive list with checkboxes">
      <ifx-action-list-item
        item-title="Enable notifications"
        description="Receive notifications for important updates"
      >
        <ifx-checkbox slot="leading"></ifx-checkbox>
      </ifx-action-list-item>

      <ifx-action-list-item
        item-title="Auto-save documents"
        description="Automatically save your work"
      >
        <ifx-checkbox slot="leading"></ifx-checkbox>
      </ifx-action-list-item>

      <ifx-action-list-item
        item-title="Enable backups"
        description="Create automatic backups"
      >
        <ifx-checkbox slot="leading"></ifx-checkbox>
      </ifx-action-list-item>
    </ifx-action-list>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-disabled">
      Toggle Disabled
    </ifx-button>

    <br><br>

    <span><b>Disabled:</b> <span id="state"></span></span>
  `;const o=t.querySelectorAll("ifx-action-list-item"),a=t.querySelector("#state"),s=t.querySelector("#toggle-disabled");function e(){o.forEach(n=>{n.disabled=i}),a.textContent=String(i)}s.addEventListener("click",()=>{i=!i,e()}),e()}export{c as render};
