function d(e){let r=!1,o=!1;e.innerHTML=`
    <h2>Checkbox</h2>

    <ifx-checkbox id="checkbox">Label</ifx-checkbox>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
    <ifx-button variant="secondary" id="toggle-error">Toggle Error</ifx-button>

    <br><br>

    <span><b>Disabled:</b> <span id="disabled"></span></span><br>
    <span><b>Error:</b> <span id="error"></span></span><br>
  `;const l=e.querySelector("#checkbox"),b={disabled:e.querySelector("#disabled"),error:e.querySelector("#error")};function t(){l.disabled=r,l.error=o,b.disabled.textContent=String(r),b.error.textContent=String(o)}e.querySelector("#toggle-disabled").onclick=()=>{r=!r,t()},e.querySelector("#toggle-error").onclick=()=>{o=!o,t()},t()}export{d as render};
