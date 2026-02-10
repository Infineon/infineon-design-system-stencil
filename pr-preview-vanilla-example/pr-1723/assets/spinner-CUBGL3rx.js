function v(e){e.innerHTML=`
    <h2>Spinner</h2>

    <ifx-spinner aria-label="" variant="default" size="m" inverted="false"></ifx-spinner>

    <br><br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-variant">Toggle Variant</ifx-button>
      <ifx-button variant="secondary" id="toggle-inverted">Toggle Inverted</ifx-button>
      <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>
    </div>

    <br>

    <div class="state">
      <div><b>Variant:</b> <span id="state-variant"></div>
      <div><b>Inverted:</b> <span id="state-inverted"></div>
      <div><b>Size:</b> <span id="state-size"></div>
    </div>
  `;const t=e.querySelector("ifx-spinner"),a=e.querySelector("#state-variant"),s=e.querySelector("#state-inverted"),o=e.querySelector("#state-size"),n=["default","brand"],i=["s","m"];a.textContent=t.variant,s.textContent=String(t.inverted),o.textContent=t.size,e.querySelector("#toggle-variant").onclick=()=>{const r=(n.indexOf(t.variant)+1)%n.length;t.variant=n[r],a.textContent=t.variant},e.querySelector("#toggle-inverted").onclick=()=>{t.inverted=!t.inverted,s.textContent=String(t.inverted)},e.querySelector("#toggle-size").onclick=()=>{const r=(i.indexOf(t.size)+1)%i.length;t.size=i[r],o.textContent=t.size}}export{v as render};
