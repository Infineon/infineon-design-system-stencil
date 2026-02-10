function o(e){e.innerHTML=`
    <h2>Link</h2>

    <ifx-link href="" aria-label="Link" target="_blank" size="m" variant="bold" disabled="false" download=""> Link </ifx-link>

    <br><br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>
      <ifx-button variant="secondary" id="toggle-variant">Toggle Variant</ifx-button>
      <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
    </div>

    <br>

    <div class="state">
      <div><b>Size:</b> <span id="state-size"></div>
      <div><b>Variant:</b> <span id="state-variant"></div>
      <div><b>Disabled:</b> <span id="state-disabled"></div>
    </div>
  `;const t=e.querySelector("ifx-link"),s=e.querySelector("#state-size"),l=e.querySelector("#state-variant"),d=e.querySelector("#state-disabled"),i=["s","m","l","xl"],n=["underline","bold","title","menu"];s.textContent=t.size,l.textContent=t.variant,d.textContent=String(t.disabled),e.querySelector("#toggle-size").onclick=()=>{const a=(i.indexOf(t.size)+1)%i.length;t.size=i[a],s.textContent=t.size},e.querySelector("#toggle-variant").onclick=()=>{const a=(n.indexOf(t.variant)+1)%n.length;t.variant=n[a],l.textContent=t.variant},e.querySelector("#toggle-disabled").onclick=()=>{t.disabled=!t.disabled,d.textContent=String(t.disabled)}}export{o as render};
