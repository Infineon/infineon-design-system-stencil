function d(e){e.innerHTML=`
    <h2>Indicator</h2>

    <ifx-indicator variant="number" number="1" inverted="false"> </ifx-indicator>

    <br/><br/>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-variant">Toggle Variant</ifx-button>
    <ifx-button variant="secondary" id="toggle-inverted">Toggle Inverted</ifx-button>

    <br /><br />
    <span><b>Variant:</b> <span id="state-variant"></span></span><br />
    <span><b>Inverted:</b> <span id="state-inverted"></span></span><br />
  `;const t=e.querySelector("ifx-indicator"),r=e.querySelector("#state-variant"),a=e.querySelector("#state-inverted"),n=["number","dot"];r.textContent=t.variant,a.textContent=String(t.inverted),e.querySelector("#toggle-variant").onclick=()=>{const i=(n.indexOf(t.variant)+1)%n.length;t.variant=n[i],variantState.textContent=t.variant},e.querySelector("#toggle-inverted").onclick=()=>{t.inverted=!t.inverted,inverted.textContent=String(t.inverted)}}export{d as render};
