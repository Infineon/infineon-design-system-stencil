function a(t){t.innerHTML=`
    <h2>Segmented Control</h2>

    <ifx-segmented-control caption="Caption text to describe the controls" label="Group Label" size="regular" error="false" required="false">
      <ifx-segment value="Value1" icon="star-16">Label</ifx-segment>
      <ifx-segment value="Value2" icon="star-16">Label</ifx-segment>
      <ifx-segment value="Value3" icon="star-16">Label</ifx-segment>
      <ifx-segment value="Value4" icon="star-16">Label</ifx-segment>
      <ifx-segment value="Value5" icon="star-16">Label</ifx-segment>
    </ifx-segmented-control>

    <br><br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-error">Toggle Error</ifx-button>
      <ifx-button variant="secondary" id="toggle-required">Toggle Required</ifx-button>
      <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>
    </div>

    <br>

    <div class="state">
      <div><b>Error:</b> <span id="state-error"></div>
      <div><b>Required:</b> <span id="state-required"></div>
      <div><b>Size:</b> <span id="state-size"></div>
    >/div>
  `;const e=t.querySelector("ifx-segmented-control"),i=t.querySelector("#state-error"),o=t.querySelector("#state-required"),n=t.querySelector("#state-size"),r=["regular","small"];i.textContent=String(e.error),o.textContent=String(e.required),n.textContent=e.size,t.querySelector("#toggle-error").onclick=()=>{e.error=!e.error,i.textContent=String(e.error)},t.querySelector("#toggle-required").onclick=()=>{e.required=!e.required,o.textContent=String(e.required)},t.querySelector("#toggle-size").onclick=()=>{const s=(r.indexOf(e.size)+1)%r.length;e.size=r[s],n.textContent=e.size}}export{a as render};
