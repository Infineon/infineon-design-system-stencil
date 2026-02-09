function x(t){t.innerHTML=`
    <h2>Text Field</h2>

    <ifx-text-field error="false" disabled="false" size="m" icon="" success="false" placeholder="Placeholder" read-only="false" caption="Caption" label="Label" required="false" name="text-field" show-delete-icon="false" value="" autocomplete="on" type="text" internal-id="text-field" aria-label="text field for user input"></ifx-text-field>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-error">Toggle Error</ifx-button>
    <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
    <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>
    <ifx-button variant="secondary" id="toggle-success">Toggle Success</ifx-button>
    <ifx-button variant="secondary" id="toggle-readOnly">Toggle Read Only</ifx-button>
    <ifx-button variant="secondary" id="toggle-required">Toggle Required</ifx-button>
    <ifx-button variant="secondary" id="toggle-deleteIcon">Toggle Delete Icon</ifx-button>
    <ifx-button variant="secondary" id="toggle-icon">Toggle Icon</ifx-button>

    <br><br>

    <span><b>Error:</b> <span id="state-error"></span></span><br>
    <span><b>Disabled:</b> <span id="state-disabled"></span></span><br>
    <span><b>Size:</b> <span id="state-size"></span></span><br>
    <span><b>Success:</b> <span id="state-success"></span></span><br>
    <span><b>Read Only:</b> <span id="state-readOnly"></span></span><br>
    <span><b>Required:</b> <span id="state-required"></span></span><br>
    <span><b>Delete Icon:</b> <span id="state-deleteIcon"></span></span><br>
    <span><b>Icon:</b> <span id="state-icon"></span></span><br>
  `;const e=t.querySelector("ifx-text-field"),o=t.querySelector("#state-error"),l=t.querySelector("#state-disabled"),i=t.querySelector("#state-size"),a=t.querySelector("#state-success"),c=t.querySelector("#state-readOnly"),d=t.querySelector("#state-required"),u=t.querySelector("#state-deleteIcon"),g=t.querySelector("#state-icon"),n=["s","m"],r=["","calendar-16"];o.textContent=String(e.error),l.textContent=String(e.disabled),i.textContent=e.size,a.textContent=String(e.success),c.textContent=String(e.readOnly),d.textContent=String(e.required),u.textContent=String(e.showDeleteIcon),g.textContent=e.icon,t.querySelector("#toggle-error").onclick=()=>{e.error=!e.error,o.textContent=String(e.error)},t.querySelector("#toggle-disabled").onclick=()=>{e.disabled=!e.disabled,l.textContent=String(e.disabled)},t.querySelector("#toggle-size").onclick=()=>{const s=(n.indexOf(e.size)+1)%n.length;e.size=n[s],i.textContent=e.size},t.querySelector("#toggle-success").onclick=()=>{e.success=!e.success,a.textContent=String(e.success)},t.querySelector("#toggle-readOnly").onclick=()=>{e.readOnly=!e.readOnly,c.textContent=String(e.readOnly)},t.querySelector("#toggle-required").onclick=()=>{e.required=!e.required,d.textContent=String(e.required)},t.querySelector("#toggle-deleteIcon").onclick=()=>{e.showDeleteIcon=!e.showDeleteIcon,u.textContent=String(e.showDeleteIcon)},t.querySelector("#toggle-icon").onclick=()=>{const s=(r.indexOf(e.icon)+1)%r.length;e.icon=r[s],g.textContent=e.icon}}export{x as render};
