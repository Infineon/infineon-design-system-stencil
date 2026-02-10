function a(t){t.innerHTML=`
        <h2>Radio Button</h2>

        <ifx-radio-button size="s" name="radio-button" value="radio" error="false" disabled="false">Text</ifx-radio-button>

        <br><br>

        <h3 class="controls-title">Controls</h3>
            <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
            <ifx-button variant="secondary" id="toggle-error">Toggle Error</ifx-button>
            <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>
        </div>

        <br><br>

        <div class="state">
            <div><b>Disabled:</b> <span id="state-disabled"></div>
            <div><b>Error:</b> <span id="state-error"></div>
            <div><b>Size:</b> <span id="state-size"></div>
        </div>
    `;const e=t.querySelector("ifx-radio-button"),o=t.querySelector("#state-disabled"),i=t.querySelector("#state-error"),s=t.querySelector("#state-size"),r=["s","m"];o.textContent=String(e.disabled),i.textContent=String(e.error),s.textContent=e.size,t.querySelector("#toggle-disabled").onclick=()=>{e.disabled=!e.disabled,o.textContent=String(e.disabled)},t.querySelector("#toggle-error").onclick=()=>{e.error=!e.error,i.textContent=String(e.error)},t.querySelector("#toggle-size").onclick=()=>{const d=(r.indexOf(e.size)+1)%r.length;e.size=r[d],s.textContent=e.size}}export{a as render};
