function s(e){e.innerHTML=`
    <h2>Switch</h2>

    <ifx-switch checked="false" name="switch" value="switch" disabled="false">Switch</ifx-switch>

    <br><br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
    </div>

    <br>

    <div class="state">
      <div><b>Disabled:</b> <span id="state-disabled"></div>
    </div>
  `;const t=e.querySelector("ifx-switch"),i=e.querySelector("#state-disabled");i.textContent=String(t.disabled),e.querySelector("#toggle-disabled").onclick=()=>{t.disabled=!t.disabled,i.textContent=String(t.disabled)}}export{s as render};
