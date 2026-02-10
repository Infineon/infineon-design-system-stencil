function b(e){e.innerHTML=`
    <h2>Icon Button</h2>

    <ifx-icon-button shape="round" variant="primary" icon="c-info-16" href="" target="_blank"  size="m" disabled="false" aria-label="Icon Button">
    </ifx-icon-button>

    <br/><br/>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
      <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>
      <ifx-button variant="secondary" id="toggle-variant">Toggle Variant</ifx-button>
      <ifx-button variant="secondary" id="toggle-shape">Toggle Shape</ifx-button>
    </div>

    <br/><br/>

    <div class="state">
      <div><b>Disabled:</b> <span id="state-disabled"></div>
      <div><b>Size:</b> <span id="state-size"></div>
      <div><b>Variant:</b> <span id="state-variant"></div>
      <div><b>Shape:</b> <span id="state-shape"></div>
    </div>
  `;const t=e.querySelector("ifx-icon-button"),o=e.querySelector("#state-disabled"),r=e.querySelector("#state-size"),d=e.querySelector("#state-variant"),l=e.querySelector("#state-shape"),i=["s","m","l"],a=["primary","secondary","tertiary"],s=["square","round"];o.textContent=String(t.disabled),r.textContent=t.size,d.textContent=t.variant,l.textContent=t.shape,e.querySelector("#toggle-disabled").onclick=()=>{t.disabled=!t.disabled,o.textContent=String(t.disabled)},e.querySelector("#toggle-size").onclick=()=>{const n=(i.indexOf(t.size)+1)%i.length;t.size=i[n],r.textContent=t.size},e.querySelector("#toggle-variant").onclick=()=>{const n=(a.indexOf(t.variant)+1)%a.length;t.variant=a[n],d.textContent=t.variant},e.querySelector("#toggle-shape").onclick=()=>{const n=(s.indexOf(t.shape)+1)%s.length;t.shape=s[n],l.textContent=t.shape}}export{b as render};
