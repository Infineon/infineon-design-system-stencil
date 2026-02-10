function o(t){t.innerHTML=`
    <h2>Notification</h2>

    <ifx-notification 
      icon = "c-check-16"
      variant="neutral" 
      link-text="Link" 
      link-href="https://www.example.com"
      link-target="_blank">
      Sample Notification
    </ifx-notification>

    <br/><br/>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-variant">Toggle Variant</ifx-button>
    </div>

    <br /><br />

    <div class="state">
      <div><b>Variant:</b> <span id="state-variant"></div>
    </div>
  `;const n=t.querySelector("ifx-notification"),a=t.querySelector("#state-variant"),i=["neutral","success","locked","error"];a.textContent=n.variant,t.querySelector("#toggle-variant").onclick=()=>{const e=(i.indexOf(n.variant)+1)%i.length;n.variant=i[e],a.textContent=n.variant}}export{o as render};
