function g(t){t.innerHTML=`
    <h2>Date Picker</h2>

    <ifx-date-picker name="date-picker" error="false" disabled="false" size="s" success="false" value="" max="" min="" label="Label Text" caption="Caption text, description, error notification." aria-label="Date Picker" required="false" autocomplete="on" type="date"></ifx-date-picker>

    <br><br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-success">Toggle Success</ifx-button>
      <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
      <ifx-button variant="secondary" id="toggle-error">Toggle Error</ifx-button>
      <ifx-button variant="secondary" id="toggle-required">Toggle Required</ifx-button>
      <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>
      <ifx-button variant="secondary" id="toggle-type">Toggle Type</ifx-button>
    </div>

    <br>

    <div class="state">
      <div><b>Success:</b> <span id="state-success"></div>
      <div><b>Disabled:</b> <span id="state-disabled"></div>
      <div><b>Error:</b> <span id="state-error"></div>
      <div><b>Required:</b> <span id="state-required"></div>
      <div><b>Size:</b> <span id="state-size"></div>
      <div><b>Type:</b> <span id="state-type"></div>
    </div>
  `;const e=t.querySelector("ifx-date-picker"),o=t.querySelector("#state-success"),n=t.querySelector("#state-disabled"),d=t.querySelector("#state-error"),c=t.querySelector("#state-required"),a=t.querySelector("#state-size"),l=t.querySelector("#state-type"),r=["s","l"],s=["date","datetime-local"];o.textContent=String(e.success),n.textContent=String(e.disabled),d.textContent=String(e.error),c.textContent=String(e.required),a.textContent=e.size,l.textContent=e.type,t.querySelector("#toggle-success").onclick=()=>{e.success=!e.success,o.textContent=String(e.success)},t.querySelector("#toggle-disabled").onclick=()=>{e.disabled=!e.disabled,n.textContent=String(e.disabled)},t.querySelector("#toggle-error").onclick=()=>{e.error=!e.error,d.textContent=String(e.error)},t.querySelector("#toggle-required").onclick=()=>{e.required=!e.required,c.textContent=String(e.required)},t.querySelector("#toggle-size").onclick=()=>{const i=(r.indexOf(e.size)+1)%r.length;e.size=r[i],a.textContent=e.size},t.querySelector("#toggle-type").onclick=()=>{const i=(s.indexOf(e.type)+1)%s.length;e.type=s[i],l.textContent=e.type}}export{g as render};
