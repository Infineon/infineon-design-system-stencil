function i(r){r.innerHTML=`
    <h2>Checkbox</h2>

    <ifx-checkbox error="false" disabled="false" checked="false" size="s" indeterminate="false" name="checkbox">Text</ifx-checkbox>

    <br><br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
    <ifx-button variant="secondary" id="toggle-error">Toggle Error</ifx-button>

    <br>

    <div class="state">
      <div><b>Disabled:</b> <span id="state-disabled"></div></div><br>
    <div><b>Error:</b> <span id="state-error"></div></div><br>
  `;const e=r.querySelector("ifx-checkbox"),t=r.querySelector("#state-disabled"),o=r.querySelector("#state-error");t.textContent=String(e.disabled),o.textContent=String(e.error),r.querySelector("#toggle-disabled").onclick=()=>{e.disabled=!e.disabled,t.textContent=String(e.disabled)},r.querySelector("#toggle-error").onclick=()=>{e.error=!e.error,o.textContent=String(e.error)}}export{i as render};
