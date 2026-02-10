function l(o){o.innerHTML=`
    <h2>Tooltip</h2>

    <ifx-tooltip text="Hi, I'm a tooltip" variant="compact" position="auto" icon="c-info-16" aria-label="Tooltip with important information">I'm the tooltip reference element - Please hover me</ifx-tooltip>

    <br><br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-variant">Toggle Variant</ifx-button>
      <ifx-button variant="secondary" id="toggle-position">Toggle Position</ifx-button>
    </div>

    <br>

    <div class="state">
      <div><b>Variant:</b> <span id="state-variant"></div>
      <div><b>Position:</b> <span id="state-position"></div>
    </div>
  `;const t=o.querySelector("ifx-tooltip"),e=o.querySelector("#state-variant"),a=o.querySelector("#state-position"),i=["compact","dismissible","extended"],r=["auto","bottom-start","top-start","left","bottom-end","top-end","right","bottom","top"];e.textContent=t.variant,a.textContent=t.position,o.querySelector("#toggle-variant").onclick=()=>{const n=(i.indexOf(t.variant)+1)%i.length;t.variant=i[n],e.textContent=t.variant},o.querySelector("#toggle-position").onclick=()=>{const n=(i.indexOf(t.position)+1)%r.length;t.position=r[n],a.textContent=t.position}}export{l as render};
