function u(t){t.innerHTML=`
    <h2>Chip</h2>

    <ifx-chip placeholder="Label" size="medium" variant="single" theme="outlined" icon="" read-only="false" aria-label="Chip" disabled="false">
        <ifx-chip-item value="Item Value 1">Item Label 1</ifx-chip-item>
        <ifx-chip-item value="Item Value 2">Item Label 2</ifx-chip-item>
        <ifx-chip-item value="Item Value 3">Item Label 3</ifx-chip-item>
        <ifx-chip-item value="Item Value 4">Item Label 4</ifx-chip-item>
    </ifx-chip>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>
    <ifx-button variant="secondary" id="toggle-variant">Toggle Variant</ifx-button>
    <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
    <ifx-button variant="secondary" id="toggle-readOnly">Toggle Read Only</ifx-button>
    <ifx-button variant="secondary" id="toggle-theme">Toggle Theme</ifx-button>
    <ifx-button variant="secondary" id="toggle-icon">Toggle Icon</ifx-button>

    <br><br>

    <span><b>Size:</b> <span id="state-size"></span></span><br>
    <span><b>Variant:</b> <span id="state-variant"></span></span><br>
    <span><b>Disabled:</b> <span id="state-disabled"></span></span><br>
    <span><b>Read Only:</b> <span id="state-readOnly"></span></span><br>
    <span><b>Theme:</b> <span id="state-theme"></span></span><br>
    <span><b>Icon:</b> <span id="state-icon"></span></span>
  `;const e=t.querySelector("ifx-chip"),r=t.querySelector("#state-size"),d=t.querySelector("#state-variant"),c=t.querySelector("#state-disabled"),x=t.querySelector("#state-readOnly"),b=t.querySelector("#state-theme"),g=t.querySelector("#state-icon"),i=["small","medium","large"],a=["single","multi"],l=["outlined","filled-light","filled-dark"],o=["","windows16"];r.textContent=e.size,d.textContent=e.variant,c.textContent=String(e.disabled),x.textContent=String(e.readOnly),b.textContent=e.theme,g.textContent=e.icon,t.querySelector("#toggle-size").onclick=()=>{const n=(i.indexOf(e.size)+1)%i.length;e.size=i[n],r.textContent=e.size},t.querySelector("#toggle-variant").onclick=()=>{const n=(a.indexOf(e.variant)+1)%a.length;e.variant=a[n],d.textContent=e.variant},t.querySelector("#toggle-disabled").onclick=()=>{e.disabled=!e.disabled,c.textContent=String(e.disabled)},t.querySelector("#toggle-readOnly").onclick=()=>{e.readOnly=!e.readOnly,x.textContent=String(e.readOnly)},t.querySelector("#toggle-theme").onclick=()=>{const n=(l.indexOf(e.theme)+1)%l.length;e.theme=l[n],b.textContent=e.theme},t.querySelector("#toggle-icon").onclick=()=>{const n=(o.indexOf(e.icon)+1)%o.length;e.icon=o[n],g.textContent=e.icon}}export{u as render};
