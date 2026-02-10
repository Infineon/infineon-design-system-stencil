function a(o){o.innerHTML=`
    <h2>Status</h2>

    <ifx-status label="text" color="ocean-500" border="true"></ifx-status>

    <br><br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-border">Toggle Border</ifx-button>
      <ifx-dropdown placement="bottom-start" id="color-dropdown">
        <ifx-dropdown-trigger-button variant="secondary">
          Change Color
        </ifx-dropdown-trigger-button>
        <ifx-dropdown-menu size="s">
          <ifx-dropdown-item data-color="green-500">green-500</ifx-dropdown-item>
          <ifx-dropdown-item data-color="orange-500">orange-500</ifx-dropdown-item>
          <ifx-dropdown-item data-color="ocean-500">ocean-500</ifx-dropdown-item>
          <ifx-dropdown-item data-color="red-500">red-500</ifx-dropdown-item>
          <ifx-dropdown-item data-color="lawn-500">lawn-500</ifx-dropdown-item>
          <ifx-dropdown-item data-color="berry-500">berry-500</ifx-dropdown-item>
        </ifx-dropdown-menu>
      </ifx-dropdown>
    </div>

    <br>

    <div class="state">
      <div><b>Border:</b> <span id="state-border"></div>
    </div>
  `;const r=o.querySelector("ifx-status"),t=o.querySelector("#state-border");t.textContent=String(r.border),o.querySelector("#toggle-border").onclick=()=>{r.border=!r.border,t.textContent=String(r.border)},o.querySelector("#color-dropdown").querySelectorAll("ifx-dropdown-item").forEach(e=>{e.onclick=()=>{const d=e.getAttribute("data-color");r.color=d}})}export{a as render};
