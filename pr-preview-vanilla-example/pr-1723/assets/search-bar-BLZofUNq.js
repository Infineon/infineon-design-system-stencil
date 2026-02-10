function a(t){t.innerHTML=`
    <h2>Search Bar</h2>

    <ifx-search-bar is-open="true" disabled="false" value="" autocomplete="on"></ifx-search-bar>

    <br><br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
      <ifx-button variant="secondary" id="toggle-open">Toggle Open</ifx-button>
    </div>

    <br>

    <div class="state">
      <div><b>Disabled:</b> <span id="state-disabled"></div>
      <div><b>Open:</b> <span id="state-open"></div>
    </div>
  `;const e=t.querySelector("ifx-search-bar"),s=t.querySelector("#state-disabled"),i=t.querySelector("#state-open");s.textContent=String(e.disabled),i.textContent=String(e.isOpen),t.querySelector("#toggle-disabled").onclick=()=>{e.disabled=!e.disabled,s.textContent=String(e.disabled)},t.querySelector("#toggle-open").onclick=()=>{e.isOpen=!e.isOpen,i.textContent=String(e.isOpen)}}export{a as render};
