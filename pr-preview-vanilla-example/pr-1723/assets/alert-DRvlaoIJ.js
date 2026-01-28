function i(t){const n=["primary","success","danger","warning"];let e=0,a=!0;t.innerHTML=`
    <h2>Alert</h2>

    <ifx-alert
      id="alert"
      aria-live="assertive"
      icon="c-info-16">
      Attention! This is an alert message — check it out!
    </ifx-alert>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-variant">
      Toggle Variant
    </ifx-button>
    <ifx-button variant="secondary" id="toggle-closable">
      Toggle Closable State
    </ifx-button>

    <br><br>

    <span><b>Variant:</b> <span id="variant-state"></span></span><br>
    <span><b>Closable State:</b> <span id="closable-state"></span></span>
  `;const l=t.querySelector("#alert"),o=t.querySelector("#variant-state"),s=t.querySelector("#closable-state");function r(){l.variant=n[e],l.closable=a,o.textContent=n[e],s.textContent=String(a)}t.querySelector("#toggle-variant").onclick=()=>{e=(e+1)%n.length,r()},t.querySelector("#toggle-closable").onclick=()=>{a=!a,r()},r()}export{i as render};
