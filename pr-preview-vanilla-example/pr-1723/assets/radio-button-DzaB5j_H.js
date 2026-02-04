function d(t){t.innerHTML=`
        <h2>Radio Button</h2>

        <ifx-radio-button size="s" name="radio-button" value="radio" error="false" disabled="false">Text</ifx-radio-button>

        <br><br>

        <h3 style="text-decoration: underline;">Controls</h3>
        <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
        <ifx-button variant="secondary" id="toggle-error">Toggle Error</ifx-button>
        <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>

        <br><br>

        <span><b>Disabled:</b> <span id="state-disabled"></span></span><br>
        <span><b>Error:</b> <span id="state-error"></span></span><br>
        <span><b>Size:</b> <span id="state-size"></span></span><br>
    `;const e=t.querySelector("ifx-radio-button"),o=t.querySelector("#state-disabled"),n=t.querySelector("#state-error"),s=t.querySelector("#state-size"),r=["s","m"];o.textContent=String(e.disabled),n.textContent=String(e.error),s.textContent=e.size,t.querySelector("#toggle-disabled").onclick=()=>{e.disabled=!e.disabled,o.textContent=String(e.disabled)},t.querySelector("#toggle-error").onclick=()=>{e.error=!e.error,n.textContent=String(e.error)},t.querySelector("#toggle-size").onclick=()=>{const i=(r.indexOf(e.size)+1)%r.length;e.size=r[i],s.textContent=e.size}}export{d as render};
