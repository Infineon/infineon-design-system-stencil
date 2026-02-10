function b(t){t.innerHTML=`
    <h2>Text Field</h2>

    <ifx-text-field error="false" disabled="false" size="m" icon="" success="false" placeholder="Placeholder" read-only="false" caption="Caption" label="Label" required="false" name="text-field" show-delete-icon="false" value="" autocomplete="on" type="text" internal-id="text-field" aria-label="text field for user input"></ifx-text-field>

    <br><br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-error">Toggle Error</ifx-button>
      <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
      <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>
      <ifx-button variant="secondary" id="toggle-success">Toggle Success</ifx-button>
      <ifx-button variant="secondary" id="toggle-readOnly">Toggle Read Only</ifx-button>
      <ifx-button variant="secondary" id="toggle-required">Toggle Required</ifx-button>
      <ifx-button variant="secondary" id="toggle-deleteIcon">Toggle Delete Icon</ifx-button>
      <ifx-button variant="secondary" id="toggle-icon">Toggle Icon</ifx-button>
    </div>
    <br>

    <div class="state">
      <div><b>Error:</b> <span id="state-error"></div>
      <div><b>Disabled:</b> <span id="state-disabled"></div>
      <div><b>Size:</b> <span id="state-size"></div>
      <div><b>Success:</b> <span id="state-success"></div>
      <div><b>Read Only:</b> <span id="state-readOnly"></div>
      <div><b>Required:</b> <span id="state-required"></div>
      <div><b>Delete Icon:</b> <span id="state-deleteIcon"></div>
      <div><b>Icon:</b> <span id="state-icon"></div>
    </div>
  `;const e=t.querySelector("ifx-text-field"),i=t.querySelector("#state-error"),s=t.querySelector("#state-disabled"),l=t.querySelector("#state-size"),d=t.querySelector("#state-success"),c=t.querySelector("#state-readOnly"),a=t.querySelector("#state-required"),u=t.querySelector("#state-deleteIcon"),g=t.querySelector("#state-icon"),o=["s","m"],n=["","calendar-16"];i.textContent=String(e.error),s.textContent=String(e.disabled),l.textContent=e.size,d.textContent=String(e.success),c.textContent=String(e.readOnly),a.textContent=String(e.required),u.textContent=String(e.showDeleteIcon),g.textContent=e.icon,t.querySelector("#toggle-error").onclick=()=>{e.error=!e.error,i.textContent=String(e.error)},t.querySelector("#toggle-disabled").onclick=()=>{e.disabled=!e.disabled,s.textContent=String(e.disabled)},t.querySelector("#toggle-size").onclick=()=>{const r=(o.indexOf(e.size)+1)%o.length;e.size=o[r],l.textContent=e.size},t.querySelector("#toggle-success").onclick=()=>{e.success=!e.success,d.textContent=String(e.success)},t.querySelector("#toggle-readOnly").onclick=()=>{e.readOnly=!e.readOnly,c.textContent=String(e.readOnly)},t.querySelector("#toggle-required").onclick=()=>{e.required=!e.required,a.textContent=String(e.required)},t.querySelector("#toggle-deleteIcon").onclick=()=>{e.showDeleteIcon=!e.showDeleteIcon,u.textContent=String(e.showDeleteIcon)},t.querySelector("#toggle-icon").onclick=()=>{const r=(n.indexOf(e.icon)+1)%n.length;e.icon=n[r],g.textContent=e.icon}}export{b as render};
