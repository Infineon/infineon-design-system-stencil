function o(e){e.innerHTML=`
    <h2>Indicator</h2>

    <ifx-indicator variant="number" number="1" inverted="false"> </ifx-indicator>

    <br/><br/>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-variant">Toggle Variant</ifx-button>
      <ifx-button variant="secondary" id="toggle-inverted">Toggle Inverted</ifx-button>
    </div>

    <br/><br/>

    <div class="state">
      <div><b>Variant:</b> <span id="state-variant"></div>
      <div><b>Inverted:</b> <span id="state-inverted"></div>
    </div>
  `;const t=e.querySelector("ifx-indicator"),r=e.querySelector("#state-variant"),i=e.querySelector("#state-inverted"),n=["number","dot"];r.textContent=t.variant,i.textContent=String(t.inverted),e.querySelector("#toggle-variant").onclick=()=>{const a=(n.indexOf(t.variant)+1)%n.length;t.variant=n[a],variantState.textContent=t.variant},e.querySelector("#toggle-inverted").onclick=()=>{t.inverted=!t.inverted,inverted.textContent=String(t.inverted)}}export{o as render};
