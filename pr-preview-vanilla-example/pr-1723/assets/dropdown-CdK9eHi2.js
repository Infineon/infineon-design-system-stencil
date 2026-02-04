function x(e){e.innerHTML=`
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

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
    <ifx-button variant="secondary" id="toggle-size-of-items">Toggle Size of Dropdown Items</ifx-button>
    <ifx-button variant="secondary" id="toggle-variant">Toggle variant</ifx-button>
    <ifx-button variant="secondary" id="toggle-placement">Toggle Placement</ifx-button>
    <ifx-button variant="secondary" id="toggle-noClose-outsideClick">Toggle No Close on Outside Click</ifx-button>
    <ifx-button variant="secondary" id="toggle-noClose-menuClick">Toggle No Close on Menu Click</ifx-button>

    <br><br>
    <span><b>Disabled:</b> <span id="state-disabled"></span></span><br>
    <span><b>Size of Dropdown Items:</b> <span id="state-size-of-items"></span></span><br>
    <span><b>Variant:</b> <span id="state-variant"></span></span><br>
    <span><b>Placement:</b> <span id="state-placement"></span></span><br>
    <span><b>No Close on Outside Click:</b> <span id="state-noClose-outsideClick"></span></span><br>
    <span><b>No Close on Menu Click:</b> <span id="state-noClose-menuClick"></span></span><br>
  `;const t=e.querySelector("ifx-dropdown"),o=e.querySelector("ifx-dropdown-menu"),i=e.querySelector("ifx-dropdown-trigger-button"),a=e.querySelector("#state-disabled"),d=e.querySelector("#state-size-of-items"),c=e.querySelector("#state-variant"),u=e.querySelector("#state-placement"),f=e.querySelector("#state-noClose-outsideClick"),p=e.querySelector("#state-noClose-menuClick"),s=["s","m"],r=["primary","secondary","tertiary"],l=["bottom-start","auto","auto-start","auto-end","top-start","top","top-end","bottom","bottom-end","right-start","right","right-end","left-start","left","left-end"];a.textContent=String(t.disabled),d.textContent=o.size,c.textContent=i.variant,u.textContent=t.placement,f.textContent=String(t.noCloseOnOutsideClick),p.textContent=String(t.noCloseOnMenuClick),e.querySelector("#toggle-disabled").onclick=()=>{t.disabled=!t.disabled,a.textContent=String(t.disabled)},e.querySelector("#toggle-size-of-items").onclick=()=>{const n=(s.indexOf(o.size)+1)%s.length;o.size=s[n],d.textContent=o.size},e.querySelector("#toggle-variant").onclick=()=>{const n=(r.indexOf(i.variant)+1)%r.length;i.variant=r[n],c.textContent=i.variant},e.querySelector("#toggle-placement").onclick=()=>{const n=(l.indexOf(t.placement)+1)%l.length;t.placement=l[n],u.textContent=t.placement},e.querySelector("#toggle-noClose-outsideClick").onclick=()=>{t.noCloseOnOutsideClick=!t.noCloseOnOutsideClick,f.textContent=String(t.noCloseOnOutsideClick)},e.querySelector("#toggle-noClose-menuClick").onclick=()=>{t.noCloseOnMenuClick=!t.noCloseOnMenuClick,p.textContent=String(t.noCloseOnMenuClick)}}export{x as render};
