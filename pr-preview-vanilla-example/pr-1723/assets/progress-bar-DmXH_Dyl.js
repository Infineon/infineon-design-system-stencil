function b(t){t.innerHTML=`
    <h2>Progress Bar</h2>

    <ifx-progress-bar value="10" size="m" show-label="true"></ifx-progress-bar>

    <br/><br/>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="update-progress">Update Progress</ifx-button>
      <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>
      <ifx-button variant="secondary" id="toggle-label">Toggle Label</ifx-button>
    </div>

    <br /><br />

    <div class="state">
      <div><b>Size:</b> <span id="state-size"></div>
      <div><b>Show Label:</b> <span id="state-label"></div>
    </div>
  `;const e=t.querySelector("ifx-progress-bar"),o=t.querySelector("#state-size"),l=t.querySelector("#state-label"),r=["s","m"],a=10;let s="";o.textContent=e.size,l.textContent=String(e.showLabel),s=e.value,t.querySelector("#toggle-size").onclick=()=>{const i=(r.indexOf(e.size)+1)%r.length;e.size=r[i],o.textContent=e.size},t.querySelector("#toggle-label").onclick=()=>{e.showLabel=!e.showLabel,l.textContent=String(e.showLabel)},t.querySelector("#update-progress").onclick=()=>{s=(s+a)%110,e.value=s}}export{b as render};
