function f(e){e.innerHTML=`
    <h2>Button</h2>

    <ifx-button type="button" aria-label="Button" disabled="false" variant="primary" size="m" target="_blank" theme="default"  full-width="false">
    <ifx-icon icon=""></ifx-icon>
    Button
    </ifx-button>

    <br><br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-variant">Toggle Variant</ifx-button>
      <ifx-button variant="secondary" id="toggle-theme">Toggle Theme</ifx-button>
      <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>
      <ifx-button variant="secondary" id="toggle-fullwidth">Toggle Full Width</ifx-button>
      <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
      <ifx-button variant="secondary" id="toggle-icon">Toggle Icon</ifx-button>
    </div>

    <br>

    <div class="state">
      <div><b>Variant:</b> <span id="state-variant"></div>
      <div><b>Theme:</b> <span id="state-theme"></div>
      <div><b>Size:</b> <span id="state-size"></div>
      <div><b>Full Width:</b> <span id="state-fullwidth"></div>
      <div><b>Disabled:</b> <span id="state-disabled"></div>
      <div><b>Icon:</b> <span id="state-icon"></div>
    </div>
  `;const t=e.querySelector("ifx-button"),i=t.querySelector("ifx-icon"),r=e.querySelector("#state-variant"),c=e.querySelector("#state-theme"),u=e.querySelector("#state-size"),x=e.querySelector("#state-fullwidth"),b=e.querySelector("#state-disabled"),g=e.querySelector("#state-icon"),o=["primary","secondary","tertiary"],l=["default","danger","inverse"],d=["xs","s","m","l"],s=["","fileMpg16"];r.textContent=t.variant,c.textContent=t.theme,u.textContent=t.size,x.textContent=String(t.fullWidth),b.textContent=String(t.disabled),g.textContent=i.icon,e.querySelector("#toggle-variant").onclick=()=>{const n=(o.indexOf(t.variant)+1)%o.length;t.variant=o[n],r.textContent=t.variant},e.querySelector("#toggle-theme").onclick=()=>{const n=(l.indexOf(t.theme)+1)%l.length;t.theme=l[n],c.textContent=t.theme},e.querySelector("#toggle-size").onclick=()=>{const n=(d.indexOf(t.size)+1)%d.length;t.size=d[n],u.textContent=t.size},e.querySelector("#toggle-fullwidth").onclick=()=>{t.fullWidth=!t.fullWidth,x.textContent=String(t.fullWidth)},e.querySelector("#toggle-disabled").onclick=()=>{t.disabled=!t.disabled,b.textContent=String(t.disabled)},e.querySelector("#toggle-icon").onclick=()=>{const n=(s.indexOf(i.icon)+1)%s.length;i.icon=s[n],g.textContent=i.icon}}export{f as render};
