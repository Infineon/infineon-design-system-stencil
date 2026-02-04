function b(t){t.innerHTML=`
    <h2>Date Picker</h2>

    <ifx-date-picker name="date-picker" error="false" disabled="false" size="s" success="false" value="" max="" min="" label="Label Text" caption="Caption text, description, error notification." aria-label="Date Picker" required="false" autocomplete="on" type="date"></ifx-date-picker>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-success">Toggle Success</ifx-button>
    <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
    <ifx-button variant="secondary" id="toggle-error">Toggle Error</ifx-button>
    <ifx-button variant="secondary" id="toggle-required">Toggle Required</ifx-button>
    <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>
    <ifx-button variant="secondary" id="toggle-type">Toggle Type</ifx-button>

    <br><br>

    <span><b>Success:</b> <span id="state-success"></span></span><br>
    <span><b>Disabled:</b> <span id="state-disabled"></span></span><br>
    <span><b>Error:</b> <span id="state-error"></span></span><br>
    <span><b>Required:</b> <span id="state-required"></span></span><br>
    <span><b>Size:</b> <span id="state-size"></span></span><br>
    <span><b>Type:</b> <span id="state-type"></span></span><br>
  `;const e=t.querySelector("ifx-date-picker"),o=t.querySelector("#state-success"),i=t.querySelector("#state-disabled"),a=t.querySelector("#state-error"),c=t.querySelector("#state-required"),d=t.querySelector("#state-size"),l=t.querySelector("#state-type"),r=["s","l"],s=["date","datetime-local"];o.textContent=String(e.success),i.textContent=String(e.disabled),a.textContent=String(e.error),c.textContent=String(e.required),d.textContent=e.size,l.textContent=e.type,t.querySelector("#toggle-success").onclick=()=>{e.success=!e.success,o.textContent=String(e.success)},t.querySelector("#toggle-disabled").onclick=()=>{e.disabled=!e.disabled,i.textContent=String(e.disabled)},t.querySelector("#toggle-error").onclick=()=>{e.error=!e.error,a.textContent=String(e.error)},t.querySelector("#toggle-required").onclick=()=>{e.required=!e.required,c.textContent=String(e.required)},t.querySelector("#toggle-size").onclick=()=>{const n=(r.indexOf(e.size)+1)%r.length;e.size=r[n],d.textContent=e.size},t.querySelector("#toggle-type").onclick=()=>{const n=(s.indexOf(e.type)+1)%s.length;e.type=s[n],l.textContent=e.type}}export{b as render};
