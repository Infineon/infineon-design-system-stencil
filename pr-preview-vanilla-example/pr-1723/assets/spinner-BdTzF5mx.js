function l(t){t.innerHTML=`
    <h2>Spinner</h2>

    <ifx-spinner aria-label="" variant="default" size="m" inverted="false"></ifx-spinner>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-variant">Toggle Variant</ifx-button>
    <ifx-button variant="secondary" id="toggle-inverted">Toggle Inverted</ifx-button>
    <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>

    <br><br>

    <span><b>Variant:</b> <span id="state-variant"></span></span><br>
    <span><b>Inverted:</b> <span id="state-inverted"></span></span><br>
    <span><b>Size:</b> <span id="state-size"></span></span><br>
  `;const e=t.querySelector("ifx-spinner"),a=t.querySelector("#state-variant"),s=t.querySelector("#state-inverted"),o=t.querySelector("#state-size"),n=["default","brand"],r=["s","m"];a.textContent=e.variant,s.textContent=String(e.inverted),o.textContent=e.size,t.querySelector("#toggle-variant").onclick=()=>{const i=(n.indexOf(e.variant)+1)%n.length;e.variant=n[i],a.textContent=e.variant},t.querySelector("#toggle-inverted").onclick=()=>{e.inverted=!e.inverted,s.textContent=String(e.inverted)},t.querySelector("#toggle-size").onclick=()=>{const i=(r.indexOf(e.size)+1)%r.length;e.size=r[i],o.textContent=e.size}}export{l as render};
