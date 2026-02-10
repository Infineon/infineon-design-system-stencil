function c(e){e.innerHTML=`
    <h2>Slider</h2>

    <h3>Default</h3>
    <div class="controls">
      <ifx-slider value="50" min="0" max="100" step="1" min-value-handle="undefined" max-value-handle="undefined" type="single" disabled="false" aria-label="undefined" show-percentage="true"></ifx-slider>

    <h3>With Icons</h3>
    <div class="controls">
      <ifx-slider value="50" min="0" max="100" step="1" min-value-handle="undefined" max-value-handle="undefined" type="single" disabled="false" aria-label="undefined" show-percentage="true" left-icon="cogwheel-16" right-icon="cogwheel-16"></ifx-slider>

    <h3>With Texts</h3>
    <div class="controls">
      <ifx-slider value="50" min="0" max="100" step="1" min-value-handle="undefined" max-value-handle="undefined" type="single" disabled="false" aria-label="undefined" show-percentage="true" left-text="LeftText" right-text="RightText"></ifx-slider>

    <br><br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-percentage">Toggle Percentage</ifx-button>
      <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
      <ifx-button variant="secondary" id="toggle-type">Toggle Type</ifx-button>
    </div>

    <br>

    <div class="state">
      <div><b>Percentage:</b> <span id="state-percentage"></div>
      <div><b>Disabled:</b> <span id="state-disabled"></div>
      <div><b>Type:</b> <span id="state-type"></div>
    </div>
  `;const n=e.querySelectorAll("ifx-slider"),a=e.querySelector("#state-percentage"),d=e.querySelector("#state-disabled"),s=e.querySelector("#state-type"),l=["single","double"],i=n[0];a.textContent=String(i.showPercentage),d.textContent=String(i.disabled),s.textContent=i.type,e.querySelector("#toggle-percentage").onclick=()=>{n.forEach(t=>{t.showPercentage=!t.showPercentage}),a.textContent=String(n[0].showPercentage)},e.querySelector("#toggle-disabled").onclick=()=>{n.forEach(t=>{t.disabled=!t.disabled}),d.textContent=String(n[0].disabled)},e.querySelector("#toggle-type").onclick=()=>{n.forEach(t=>{const r=(l.indexOf(t.type)+1)%l.length;t.type=l[r]}),s.textContent=n[0].type}}export{c as render};
