function b(t){t.innerHTML=`
    <h2>Textarea</h2>

    <ifx-textarea caption="Caption text, description, error notification" cols="43" disabled="false" error="false" label="Label Text" maxlength="undefined" name="textarea" placeholder="Placeholder" required="true" read-only="false" resize="both" rows="5" value="" wrap="soft"></ifx-textarea>
    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
    <ifx-button variant="secondary" id="toggle-error">Toggle Error</ifx-button>
    <ifx-button variant="secondary" id="toggle-readOnly">Toggle Read Only</ifx-button>
    <ifx-button variant="secondary" id="toggle-resize">Toggle Resize</ifx-button>
    <ifx-button variant="secondary" id="toggle-required">Toggle Required</ifx-button>

    <br><br>

    <span><b>Disabled:</b> <span id="state-disabled"></span></span><br>
    <span><b>Error:</b> <span id="state-error"></span></span><br>
    <span><b>Read Only:</b> <span id="state-readOnly"></span></span><br>
    <span><b>Resize:</b> <span id="state-resize"></span></span><br>
    <span><b>Required:</b> <span id="state-required"></span></span><br>
  `;const e=t.querySelector("ifx-textarea"),n=t.querySelector("#state-disabled"),a=t.querySelector("#state-error"),o=t.querySelector("#state-readOnly"),i=t.querySelector("#state-resize"),s=t.querySelector("#state-required"),r=["both","vertical","horizontal","none"];n.textContent=String(e.disabled),a.textContent=String(e.error),o.textContent=String(e.readOnly),i.textContent=e.resize,s.textContent=String(e.required),t.querySelector("#toggle-disabled").onclick=()=>{e.disabled=!e.disabled,n.textContent=String(e.disabled)},t.querySelector("#toggle-error").onclick=()=>{e.error=!e.error,a.textContent=String(e.error)},t.querySelector("#toggle-readOnly").onclick=()=>{e.readOnly=!e.readOnly,o.textContent=String(e.readOnly)},t.querySelector("#toggle-resize").onclick=()=>{const l=(r.indexOf(e.resize)+1)%r.length;e.resize=r[l],i.textContent=e.resize},t.querySelector("#toggle-required").onclick=()=>{e.required=!e.required,s.textContent=String(e.required)}}export{b as render};
