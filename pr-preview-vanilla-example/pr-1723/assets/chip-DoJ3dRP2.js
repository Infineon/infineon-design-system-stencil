function b(t){t.innerHTML=`
    <h2>Chip</h2>

    <ifx-chip placeholder="Label" size="medium" variant="single" theme="outlined" icon="" read-only="false" aria-label="Chip" disabled="false">
        <ifx-chip-item value="Item Value 1">Item Label 1</ifx-chip-item>
        <ifx-chip-item value="Item Value 2">Item Label 2</ifx-chip-item>
        <ifx-chip-item value="Item Value 3">Item Label 3</ifx-chip-item>
        <ifx-chip-item value="Item Value 4">Item Label 4</ifx-chip-item>
    </ifx-chip>

    <br><br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>
      <ifx-button variant="secondary" id="toggle-variant">Toggle Variant</ifx-button>
      <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
      <ifx-button variant="secondary" id="toggle-readOnly">Toggle Read Only</ifx-button>
      <ifx-button variant="secondary" id="toggle-theme">Toggle Theme</ifx-button>
      <ifx-button variant="secondary" id="toggle-icon">Toggle Icon</ifx-button>
    </div>

    <br>

    <div class="state">
      <div><b>Size:</b> <span id="state-size"></div>
      <div><b>Variant:</b> <span id="state-variant"></div>
      <div><b>Disabled:</b> <span id="state-disabled"></div>
      <div><b>Read Only:</b> <span id="state-readOnly"></div>
      <div><b>Theme:</b> <span id="state-theme"></div>
      <div><b>Icon:</b> <span id="state-icon"></div>
    </div>
  `;const e=t.querySelector("ifx-chip"),s=t.querySelector("#state-size"),r=t.querySelector("#state-variant"),c=t.querySelector("#state-disabled"),x=t.querySelector("#state-readOnly"),g=t.querySelector("#state-theme"),u=t.querySelector("#state-icon"),n=["small","medium","large"],a=["single","multi"],l=["outlined","filled-light","filled-dark"],o=["","windows16"];s.textContent=e.size,r.textContent=e.variant,c.textContent=String(e.disabled),x.textContent=String(e.readOnly),g.textContent=e.theme,u.textContent=e.icon,t.querySelector("#toggle-size").onclick=()=>{const i=(n.indexOf(e.size)+1)%n.length;e.size=n[i],s.textContent=e.size},t.querySelector("#toggle-variant").onclick=()=>{const i=(a.indexOf(e.variant)+1)%a.length;e.variant=a[i],r.textContent=e.variant},t.querySelector("#toggle-disabled").onclick=()=>{e.disabled=!e.disabled,c.textContent=String(e.disabled)},t.querySelector("#toggle-readOnly").onclick=()=>{e.readOnly=!e.readOnly,x.textContent=String(e.readOnly)},t.querySelector("#toggle-theme").onclick=()=>{const i=(l.indexOf(e.theme)+1)%l.length;e.theme=l[i],g.textContent=e.theme},t.querySelector("#toggle-icon").onclick=()=>{const i=(o.indexOf(e.icon)+1)%o.length;e.icon=o[i],u.textContent=e.icon}}export{b as render};
