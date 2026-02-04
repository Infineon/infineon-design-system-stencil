function b(e){e.innerHTML=`
    <h2>Icon Button</h2>

    <ifx-icon-button shape="round" variant="primary" icon="c-info-16" href="" target="_blank"  size="m" disabled="false" aria-label="Icon Button">
    </ifx-icon-button>

    <br/><br/>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
    <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>
    <ifx-button variant="secondary" id="toggle-variant">Toggle Variant</ifx-button>
    <ifx-button variant="secondary" id="toggle-shape">Toggle Shape</ifx-button>

    <br/><br/>

    <span><b>Disabled:</b> <span id="state-disabled"></span></span><br>
    <span><b>Size:</b> <span id="state-size"></span></span><br>
    <span><b>Variant:</b> <span id="state-variant"></span></span><br>
    <span><b>Shape:</b> <span id="state-shape"></span></span><br>
  `;const t=e.querySelector("ifx-icon-button"),o=e.querySelector("#state-disabled"),r=e.querySelector("#state-size"),d=e.querySelector("#state-variant"),l=e.querySelector("#state-shape"),a=["s","m","l"],s=["primary","secondary","tertiary"],i=["square","round"];o.textContent=String(t.disabled),r.textContent=t.size,d.textContent=t.variant,l.textContent=t.shape,e.querySelector("#toggle-disabled").onclick=()=>{t.disabled=!t.disabled,o.textContent=String(t.disabled)},e.querySelector("#toggle-size").onclick=()=>{const n=(a.indexOf(t.size)+1)%a.length;t.size=a[n],r.textContent=t.size},e.querySelector("#toggle-variant").onclick=()=>{const n=(s.indexOf(t.variant)+1)%s.length;t.variant=s[n],d.textContent=t.variant},e.querySelector("#toggle-shape").onclick=()=>{const n=(i.indexOf(t.shape)+1)%i.length;t.shape=i[n],l.textContent=t.shape}}export{b as render};
