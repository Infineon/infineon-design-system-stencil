function C(e){e.innerHTML=`
    <h2>Dropdown</h2>

    <div>
      <ifx-dropdown placement="bottom-start" disabled="false" default-open="false" no-close-on-outside-click="false" no-close-on-menu-click="false" no-append-to-body="false">

      <ifx-dropdown-trigger-button variant="primary">
        Dropdown
      </ifx-dropdown-trigger-button>

      <ifx-dropdown-menu size="m">
        <ifx-dropdown-item icon="c-info-16" target="_self" href="" error="false">Menu Item</ifx-dropdown-item>
        <ifx-dropdown-item icon="c-info-16" target="_self" href="" error="false">Menu Item</ifx-dropdown-item>
        <ifx-dropdown-item icon="c-info-16" target="_self" href="" error="false">Menu Item</ifx-dropdown-item>
        <ifx-dropdown-item icon="c-info-16" target="_self" href="" error="false">Menu Item</ifx-dropdown-item>
        <ifx-dropdown-item icon="c-info-16" target="_self" href="" error="false">Menu Item</ifx-dropdown-item>
      </ifx-dropdown-menu>
      </ifx-dropdown>
    </div>

    <br><br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
      <ifx-button variant="secondary" id="toggle-size-of-items">Toggle Size of Dropdown Items</ifx-button>
      <ifx-button variant="secondary" id="toggle-variant">Toggle variant</ifx-button>
      <ifx-button variant="secondary" id="toggle-placement">Toggle Placement</ifx-button>
      <ifx-button variant="secondary" id="toggle-noClose-outsideClick">Toggle No Close on Outside Click</ifx-button>
      <ifx-button variant="secondary" id="toggle-noClose-menuClick">Toggle No Close on Menu Click</ifx-button>
    </div>

    <br>

    <div class="state">
      <div><b>Disabled:</b> <span id="state-disabled"></div>
      <div><b>Size of Dropdown Items:</b> <span id="state-size-of-items"></div>
      <div><b>Variant:</b> <span id="state-variant"></div>
      <div><b>Placement:</b> <span id="state-placement"></div>
      <div><b>No Close on Outside Click:</b> <span id="state-noClose-outsideClick"></div>
      <div><b>No Close on Menu Click:</b> <span id="state-noClose-menuClick"></div>
    </div>
  `;const t=e.querySelector("ifx-dropdown"),n=e.querySelector("ifx-dropdown-menu"),i=e.querySelector("ifx-dropdown-trigger-button"),d=e.querySelector("#state-disabled"),a=e.querySelector("#state-size-of-items"),c=e.querySelector("#state-variant"),u=e.querySelector("#state-placement"),f=e.querySelector("#state-noClose-outsideClick"),g=e.querySelector("#state-noClose-menuClick"),s=["s","m"],r=["primary","secondary","tertiary"],l=["bottom-start","auto","auto-start","auto-end","top-start","top","top-end","bottom","bottom-end","right-start","right","right-end","left-start","left","left-end"];d.textContent=String(t.disabled),a.textContent=n.size,c.textContent=i.variant,u.textContent=t.placement,f.textContent=String(t.noCloseOnOutsideClick),g.textContent=String(t.noCloseOnMenuClick),e.querySelector("#toggle-disabled").onclick=()=>{t.disabled=!t.disabled,d.textContent=String(t.disabled)},e.querySelector("#toggle-size-of-items").onclick=()=>{const o=(s.indexOf(n.size)+1)%s.length;n.size=s[o],a.textContent=n.size},e.querySelector("#toggle-variant").onclick=()=>{const o=(r.indexOf(i.variant)+1)%r.length;i.variant=r[o],c.textContent=i.variant},e.querySelector("#toggle-placement").onclick=()=>{const o=(l.indexOf(t.placement)+1)%l.length;t.placement=l[o],u.textContent=t.placement},e.querySelector("#toggle-noClose-outsideClick").onclick=()=>{t.noCloseOnOutsideClick=!t.noCloseOnOutsideClick,f.textContent=String(t.noCloseOnOutsideClick)},e.querySelector("#toggle-noClose-menuClick").onclick=()=>{t.noCloseOnMenuClick=!t.noCloseOnMenuClick,g.textContent=String(t.noCloseOnMenuClick)}}export{C as render};
