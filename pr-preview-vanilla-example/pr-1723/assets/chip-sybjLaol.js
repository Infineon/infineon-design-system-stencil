function c(e){const o=["small","large"],b=["single","multi"],g=["outlined","filled-light","filled-dark"];let l=0,a=0,r=0,s=!1,d=!1;e.innerHTML=`
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

    <br><br>

    <span><b>Size:</b> <span id="size"></span></span><br>
    <span><b>Variant:</b> <span id="variant"></span></span><br>
    <span><b>Disabled:</b> <span id="disabled"></span></span><br>
    <span><b>Read Only:</b> <span id="readOnly"></span></span><br>
    <span><b>Theme:</b> <span id="theme"></span></span><br>
  `;const i=e.querySelector("#chip"),n={size:e.querySelector("#size"),variant:e.querySelector("#variant"),disabled:e.querySelector("#disabled"),readOnly:e.querySelector("#readOnly"),theme:e.querySelector("#theme")};function t(){i.size=o[l],i.variant=b[a],i.disabled=s,i.readOnly=d,i.theme=g[r],n.size.textContent=o[l],n.variant.textContent=b[a],n.disabled.textContent=String(s),n.readOnly.textContent=String(d),n.theme.textContent=g[r]}e.querySelector("#toggle-size").onclick=()=>{l=(l+1)%o.length,t()},e.querySelector("#toggle-variant").onclick=()=>{a=(a+1)%b.length,t()},e.querySelector("#toggle-disabled").onclick=()=>{s=!s,t()},e.querySelector("#toggle-readOnly").onclick=()=>{d=!d,t()},e.querySelector("#toggle-theme").onclick=()=>{r=(r+1)%g.length,t()},t()}export{c as render};
