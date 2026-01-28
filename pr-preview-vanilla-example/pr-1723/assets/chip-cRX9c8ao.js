function b(e){const d=["small","large"],r=["single","multi"],c=["outlined","filled-light","filled-dark"],g=["","windows16"];let l=0,a=0,o=!1,s=!1;e.innerHTML=`
    <h2>Chip</h2>

    <ifx-chip placeholder="Label" id="chip">
      <ifx-chip-item>Item 1</ifx-chip-item>
      <ifx-chip-item>Item 2</ifx-chip-item>
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

    <span><b>Size:</b> <span id="size"></span></span><br>
    <span><b>Variant:</b> <span id="variant"></span></span><br>
    <span><b>Disabled:</b> <span id="disabled"></span></span><br>
    <span><b>Read Only:</b> <span id="readOnly"></span></span><br>
    <span><b>Theme:</b> <span id="theme"></span></span><br>
    <span><b>Icon:</b> <span id="icon"></span></span>
  `;const n=e.querySelector("#chip"),i={size:e.querySelector("#size"),variant:e.querySelector("#variant"),disabled:e.querySelector("#disabled"),readOnly:e.querySelector("#readOnly"),theme:e.querySelector("#theme"),icon:e.querySelector("#icon-state")};function t(){n.size=d[l],n.variant=r[a],n.disabled=o,n.readOnly=s,n.theme=c[themeIndex],n.icon=g[iconIndex],i.size.textContent=d[l],i.variant.textContent=r[a],i.disabled.textContent=String(o),i.readOnly.textContent=String(s),i.theme.textContent=c[themeIndex],i.icon.textContent=g[iconIndex]||"none"}e.querySelector("#toggle-size").onclick=()=>{l=(l+1)%d.length,t()},e.querySelector("#toggle-variant").onclick=()=>{a=(a+1)%r.length,t()},e.querySelector("#toggle-disabled").onclick=()=>{o=!o,t()},e.querySelector("#toggle-readOnly").onclick=()=>{s=!s,t()},e.querySelector("#toggle-theme").onclick=()=>{themeIndex=(themeIndex+1)%c.length,t()},e.querySelector("#toggle-icon").onclick=()=>{iconIndex=(iconIndex+1)%g.length,t()},t()}export{b as render};
