function g(t){t.innerHTML=`
    <h2>Textarea</h2>

    <ifx-textarea caption="Caption text, description, error notification" cols="43" disabled="false" error="false" label="Label Text" name="textarea" placeholder="Placeholder" required="true" read-only="false" resize="both" rows="5" value="" wrap="soft" full-width="false"></ifx-textarea>
    <br><br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
      <ifx-button variant="secondary" id="toggle-error">Toggle Error</ifx-button>
      <ifx-button variant="secondary" id="toggle-readOnly">Toggle Read Only</ifx-button>
      <ifx-button variant="secondary" id="toggle-resize">Toggle Resize</ifx-button>
      <ifx-button variant="secondary" id="toggle-fullWidth">Toggle Full Width</ifx-button>
      <ifx-button variant="secondary" id="toggle-required">Toggle Required</ifx-button>
    </div>

    <br>

    <div class="state">
      <div><b>Disabled:</b> <span id="state-disabled"></div>
      <div><b>Error:</b> <span id="state-error"></div>
      <div><b>Read Only:</b> <span id="state-readOnly"></div>
      <div><b>Resize:</b> <span id="state-resize"></div>
      <div><b>Full Width:</b> <span id="state-fullWidth"></div>
      <div><b>Required:</b> <span id="state-required"></div>
    </div>
  `;const e=t.querySelector("ifx-textarea"),l=t.querySelector("#state-disabled"),o=t.querySelector("#state-error"),d=t.querySelector("#state-readOnly"),n=t.querySelector("#state-resize"),a=t.querySelector("#state-fullWidth"),s=t.querySelector("#state-required"),r=["both","vertical","horizontal","none"];l.textContent=String(e.disabled),o.textContent=String(e.error),d.textContent=String(e.readOnly),n.textContent=e.resize,a.textContent=e.getAttribute("full-width"),s.textContent=String(e.required),t.querySelector("#toggle-disabled").onclick=()=>{e.disabled=!e.disabled,l.textContent=String(e.disabled)},t.querySelector("#toggle-error").onclick=()=>{e.error=!e.error,o.textContent=String(e.error)},t.querySelector("#toggle-readOnly").onclick=()=>{e.readOnly=!e.readOnly,d.textContent=String(e.readOnly)},t.querySelector("#toggle-resize").onclick=()=>{const u=(r.indexOf(e.resize)+1)%r.length;e.resize=r[u],n.textContent=e.resize},t.querySelector("#toggle-fullWidth").onclick=()=>{const i=e.getAttribute("full-width")==="true";e.setAttribute("full-width",String(!i)),a.textContent=String(!i)},t.querySelector("#toggle-required").onclick=()=>{e.required=!e.required,s.textContent=String(e.required)}}export{g as render};
