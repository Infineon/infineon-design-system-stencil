function f(e){e.innerHTML=`
    <h2>Button</h2>

    <ifx-button type="button" aria-label="Button" disabled="false" variant="primary" size="m" target="_blank" theme="default"  full-width="false">
    <ifx-icon icon=""></ifx-icon>
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

    <span><b>Variant:</b> <span id="state-variant"></span></span><br>
    <span><b>Theme:</b> <span id="state-theme"></span></span><br>
    <span><b>Size:</b> <span id="state-size"></span></span><br>
    <span><b>Full Width:</b> <span id="state-fullwidth"></span></span><br>
    <span><b>Disabled:</b> <span id="state-disabled"></span></span><br>
    <span><b>Icon:</b> <span id="state-icon"></span></span>
  `;const t=e.querySelector("ifx-button"),i=t.querySelector("ifx-icon"),d=e.querySelector("#state-variant"),c=e.querySelector("#state-theme"),u=e.querySelector("#state-size"),b=e.querySelector("#state-fullwidth"),x=e.querySelector("#state-disabled"),g=e.querySelector("#state-icon"),o=["primary","secondary","tertiary"],a=["default","danger","inverse"],s=["xs","s","m","l"],l=["","fileMpg16"];d.textContent=t.variant,c.textContent=t.theme,u.textContent=t.size,b.textContent=String(t.fullWidth),x.textContent=String(t.disabled),g.textContent=i.icon,e.querySelector("#toggle-variant").onclick=()=>{const n=(o.indexOf(t.variant)+1)%o.length;t.variant=o[n],d.textContent=t.variant},e.querySelector("#toggle-theme").onclick=()=>{const n=(a.indexOf(t.theme)+1)%a.length;t.theme=a[n],c.textContent=t.theme},e.querySelector("#toggle-size").onclick=()=>{const n=(s.indexOf(t.size)+1)%s.length;t.size=s[n],u.textContent=t.size},e.querySelector("#toggle-fullwidth").onclick=()=>{t.fullWidth=!t.fullWidth,b.textContent=String(t.fullWidth)},e.querySelector("#toggle-disabled").onclick=()=>{t.disabled=!t.disabled,x.textContent=String(t.disabled)},e.querySelector("#toggle-icon").onclick=()=>{const n=(l.indexOf(i.icon)+1)%l.length;i.icon=l[n],g.textContent=i.icon}}export{f as render};
