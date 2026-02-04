function g(e){e.innerHTML=`
    <h2>Slider</h2>

    <h3>Default</h3>
    <ifx-slider value="50" min="0" max="100" step="1" min-value-handle="undefined" max-value-handle="undefined" type="single" disabled="false" aria-label="undefined" show-percentage="true"></ifx-slider>

    <h3>With Icons</h3>
    <ifx-slider value="50" min="0" max="100" step="1" min-value-handle="undefined" max-value-handle="undefined" type="single" disabled="false" aria-label="undefined" show-percentage="true" left-icon="cogwheel-16" right-icon="cogwheel-16"></ifx-slider>

    <h3>With Texts</h3>
    <ifx-slider value="50" min="0" max="100" step="1" min-value-handle="undefined" max-value-handle="undefined" type="single" disabled="false" aria-label="undefined" show-percentage="true" left-text="LeftText" right-text="RightText"></ifx-slider>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-percentage">Toggle Percentage</ifx-button>
    <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
    <ifx-button variant="secondary" id="toggle-type">Toggle Type</ifx-button>

    <br><br>

    <span><b>Percentage:</b> <span id="state-percentage"></span></span><br>
    <span><b>Disabled:</b> <span id="state-disabled"></span></span><br>
    <span><b>Type:</b> <span id="state-type"></span></span><br>
  `;const n=e.querySelectorAll("ifx-slider"),i=e.querySelector("#state-percentage"),d=e.querySelector("#state-disabled"),s=e.querySelector("#state-type"),a=["single","double"],l=n[0];i.textContent=String(l.showPercentage),d.textContent=String(l.disabled),s.textContent=l.type,e.querySelector("#toggle-percentage").onclick=()=>{n.forEach(t=>{t.showPercentage=!t.showPercentage}),i.textContent=String(n[0].showPercentage)},e.querySelector("#toggle-disabled").onclick=()=>{n.forEach(t=>{t.disabled=!t.disabled}),d.textContent=String(n[0].disabled)},e.querySelector("#toggle-type").onclick=()=>{n.forEach(t=>{const r=(a.indexOf(t.type)+1)%a.length;t.type=a[r]}),s.textContent=n[0].type}}export{g as render};
