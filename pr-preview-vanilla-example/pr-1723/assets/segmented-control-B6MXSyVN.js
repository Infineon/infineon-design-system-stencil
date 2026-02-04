function l(t){t.innerHTML=`
    <h2>Segmented Control</h2>

    <ifx-segmented-control caption="Caption text to describe the controls" label="Group Label" size="regular" error="false" required="false">
      <ifx-segment value="Value1" icon="star-16">Label</ifx-segment>
      <ifx-segment value="Value2" icon="star-16">Label</ifx-segment>
      <ifx-segment value="Value3" icon="star-16">Label</ifx-segment>
      <ifx-segment value="Value4" icon="star-16">Label</ifx-segment>
      <ifx-segment value="Value5" icon="star-16">Label</ifx-segment>
    </ifx-segmented-control>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-error">Toggle Error</ifx-button>
    <ifx-button variant="secondary" id="toggle-required">Toggle Required</ifx-button>
    <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>

    <br><br>

    <span><b>Error:</b> <span id="state-error"></span></span><br>
    <span><b>Required:</b> <span id="state-required"></span></span><br>
    <span><b>Size:</b> <span id="state-size"></span></span><br>
  `;const e=t.querySelector("ifx-segmented-control"),n=t.querySelector("#state-error"),o=t.querySelector("#state-required"),i=t.querySelector("#state-size"),r=["regular","small"];n.textContent=String(e.error),o.textContent=String(e.required),i.textContent=e.size,t.querySelector("#toggle-error").onclick=()=>{e.error=!e.error,n.textContent=String(e.error)},t.querySelector("#toggle-required").onclick=()=>{e.required=!e.required,o.textContent=String(e.required)},t.querySelector("#toggle-size").onclick=()=>{const s=(r.indexOf(e.size)+1)%r.length;e.size=r[s],i.textContent=e.size}}export{l as render};
