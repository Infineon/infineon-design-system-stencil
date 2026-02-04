function d(e){e.innerHTML=`
    <h2>Link</h2>

    <ifx-link href="" aria-label="Link" target="_blank" size="m" variant="bold" disabled="false" download=""> Link </ifx-link>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>
    <ifx-button variant="secondary" id="toggle-variant">Toggle Variant</ifx-button>
    <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>

    <br><br>

    <span><b>Size:</b> <span id="state-size"></span></span><br>
    <span><b>Variant:</b> <span id="state-variant"></span></span><br>
    <span><b>Disabled:</b> <span id="state-disabled"></span></span><br>
  `;const t=e.querySelector("ifx-link"),s=e.querySelector("#state-size"),r=e.querySelector("#state-variant"),l=e.querySelector("#state-disabled"),n=["s","m","l","xl"],i=["underline","bold","title","menu"];s.textContent=t.size,r.textContent=t.variant,l.textContent=String(t.disabled),e.querySelector("#toggle-size").onclick=()=>{const a=(n.indexOf(t.size)+1)%n.length;t.size=n[a],s.textContent=t.size},e.querySelector("#toggle-variant").onclick=()=>{const a=(i.indexOf(t.variant)+1)%i.length;t.variant=i[a],r.textContent=t.variant},e.querySelector("#toggle-disabled").onclick=()=>{t.disabled=!t.disabled,l.textContent=String(t.disabled)}}export{d as render};
