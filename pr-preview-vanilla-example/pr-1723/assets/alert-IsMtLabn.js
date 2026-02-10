function o(e){e.innerHTML=`
    <h2>Alert</h2>

    <ifx-alert aria-live="assertive" variant="primary" icon="c-info-16" closable="true">Attention! This is an alert message — check it out!</ifx-alert>

    <br><br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-variant"> Toggle Variant </ifx-button>
      <ifx-button variant="secondary" id="toggle-closable"> Toggle Closable State </ifx-button>
    </div>

    <br>

    <div class="state">
      <div><b>Variant:</b> <span id="state-variant"></div>
      <div><b>Closable:</b> <span id="state-closable"></div>
    </div>
  `;const t=e.querySelector("ifx-alert"),n=e.querySelector("#state-variant"),r=e.querySelector("#state-closable"),a=["primary","success","warning","danger"];n.textContent=t.variant,r.textContent=String(t.closable),e.querySelector("#toggle-variant").onclick=()=>{const l=(a.indexOf(t.variant)+1)%a.length;t.variant=a[l],n.textContent=t.variant},e.querySelector("#toggle-closable").onclick=()=>{t.closable=!t.closable,r.textContent=String(t.closable)}}export{o as render};
