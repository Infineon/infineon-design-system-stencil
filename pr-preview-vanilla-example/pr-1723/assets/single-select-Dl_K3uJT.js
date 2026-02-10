function u(t){t.innerHTML=`
    <h2>Single Select</h2>

    <ifx-select 
      size='m'
      placeholder='true'
      show-clear-button='true'
      show-search='true'
      search-placeholder-value='Search...'
      disabled='false'
      required='true'
      error='false'
      label='Label'
      caption='Caption'
      placeholder-value='Placeholder'
      options='[{"value":"a","label":"option a","selected":false},{"value":"b","label":"option b","selected":false},{"value":"c","label":"option c","selected":false}]' >
    </ifx-select>

    <br><br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>
      <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
      <ifx-button variant="secondary" id="toggle-required">Toggle Required</ifx-button>
      <ifx-button variant="secondary" id="toggle-error">Toggle Error</ifx-button>
      <ifx-button variant="secondary" id="toggle-search">Toggle Search</ifx-button>
      <ifx-button variant="secondary" id="toggle-clear">Toggle Clear Button</ifx-button>
    </div>

    <br>

    <div class="state">
      <div><b>Size:</b> <span id="state-size"></div>
      <div><b>Disabled:</b> <span id="state-disabled"></div>
      <div><b>Required:</b> <span id="state-required"></div>
      <div><b>Error:</b> <span id="state-error"></div>
      <div><b>Show Search:</b> <span id="state-search"></div>
      <div><b>Show Clear Button:</b> <span id="state-clear"></div>
    </div>
  `;const e=t.querySelector("ifx-select"),o=t.querySelector("#state-size"),l=t.querySelector("#state-disabled"),i=t.querySelector("#state-required"),s=t.querySelector("#state-error"),a=t.querySelector("#state-search"),n=t.querySelector("#state-clear"),r=["m","s"];o.textContent=e.size,l.textContent=String(e.disabled),i.textContent=String(e.required),s.textContent=String(e.error),a.textContent=String(e.showSearch),n.textContent=String(e.showClearButton),t.querySelector("#toggle-size").onclick=()=>{const d=(r.indexOf(e.size)+1)%r.length;e.size=r[d],o.textContent=e.size},t.querySelector("#toggle-disabled").onclick=()=>{e.disabled=!e.disabled,l.textContent=String(e.disabled)},t.querySelector("#toggle-required").onclick=()=>{e.required=!e.required,i.textContent=String(e.required)},t.querySelector("#toggle-error").onclick=()=>{e.error=!e.error,s.textContent=String(e.error)},t.querySelector("#toggle-search").onclick=()=>{e.showSearch=!e.showSearch,a.textContent=String(e.showSearch)},t.querySelector("#toggle-clear").onclick=()=>{e.showClearButton=!e.showClearButton,n.textContent=String(e.showClearButton)}}export{u as render};
