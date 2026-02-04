function s(e){e.innerHTML=`
    <h2>Spinner</h2>

    <ifx-switch checked="false" name="switch" value="switch" disabled="false">Switch</ifx-switch>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>

    <br><br>

    <span><b>Disabled:</b> <span id="state-disabled"></span></span>
  `;const t=e.querySelector("ifx-switch"),i=e.querySelector("#state-disabled");i.textContent=String(t.disabled),e.querySelector("#toggle-disabled").onclick=()=>{t.disabled=!t.disabled,i.textContent=String(t.disabled)}}export{s as render};
