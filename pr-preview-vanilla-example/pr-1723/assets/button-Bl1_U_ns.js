function h(e){const b=["primary","secondary","tertiary"],c=["default","danger","inverse"],u=["xs","s","m","l"],g=["","fileMpg16"];let l=0,o=0,a=2,s=0,r=!1,d=!1;e.innerHTML=`
    <h2>Button</h2>

    <ifx-button id="btn">
      <ifx-icon id="icon"></ifx-icon>
      Button
    </ifx-button>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-variant">Toggle Variant</ifx-button>
    <ifx-button variant="secondary" id="toggle-theme">Toggle Theme</ifx-button>
    <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>
    <ifx-button variant="secondary" id="toggle-fullwidth">Toggle Full Width</ifx-button>
    <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
    <ifx-button variant="secondary" id="toggle-icon">Toggle Icon</ifx-button>

    <br><br>

    <span><b>Variant:</b> <span id="variant"></span></span><br>
    <span><b>Theme:</b> <span id="theme"></span></span><br>
    <span><b>Size:</b> <span id="size"></span></span><br>
    <span><b>Full Width:</b> <span id="fullwidth"></span></span><br>
    <span><b>Disabled:</b> <span id="disabled"></span></span><br>
    <span><b>Icon:</b> <span id="icon-state"></span></span>
  `;const i=e.querySelector("#btn"),f=e.querySelector("#icon"),n={variant:e.querySelector("#variant"),theme:e.querySelector("#theme"),size:e.querySelector("#size"),fullwidth:e.querySelector("#fullwidth"),disabled:e.querySelector("#disabled"),icon:e.querySelector("#icon-state")};function t(){i.variant=b[l],i.theme=c[o],i.size=u[a],i.fullWidth=r,i.disabled=d,f.icon=g[s],n.variant.textContent=b[l],n.theme.textContent=c[o],n.size.textContent=u[a],n.fullwidth.textContent=String(r),n.disabled.textContent=String(d),n.icon.textContent=g[s]||"none"}e.querySelector("#toggle-variant").onclick=()=>{l=(l+1)%b.length,t()},e.querySelector("#toggle-theme").onclick=()=>{o=(o+1)%c.length,t()},e.querySelector("#toggle-size").onclick=()=>{a=(a+1)%u.length,t()},e.querySelector("#toggle-fullwidth").onclick=()=>{r=!r,t()},e.querySelector("#toggle-disabled").onclick=()=>{d=!d,t()},e.querySelector("#toggle-icon").onclick=()=>{s=(s+1)%g.length,t()},t()}export{h as render};
