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

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>
    <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
    <ifx-button variant="secondary" id="toggle-required">Toggle Required</ifx-button>
    <ifx-button variant="secondary" id="toggle-error">Toggle Error</ifx-button>
    <ifx-button variant="secondary" id="toggle-search">Toggle Search</ifx-button>
    <ifx-button variant="secondary" id="toggle-clear">Toggle Clear Button</ifx-button>

    <br><br>

    <span><b>Size:</b> <span id="state-size"></span></span><br>
    <span><b>Disabled:</b> <span id="state-disabled"></span></span><br>
    <span><b>Required:</b> <span id="state-required"></span></span><br>
    <span><b>Error:</b> <span id="state-error"></span></span><br>
    <span><b>Show Search:</b> <span id="state-search"></span></span><br>
    <span><b>Show Clear Button:</b> <span id="state-clear"></span></span><br>
  `;const e=t.querySelector("ifx-select"),o=t.querySelector("#state-size"),a=t.querySelector("#state-disabled"),s=t.querySelector("#state-required"),n=t.querySelector("#state-error"),l=t.querySelector("#state-search"),i=t.querySelector("#state-clear"),r=["m","s"];o.textContent=e.size,a.textContent=String(e.disabled),s.textContent=String(e.required),n.textContent=String(e.error),l.textContent=String(e.showSearch),i.textContent=String(e.showClearButton),t.querySelector("#toggle-size").onclick=()=>{const c=(r.indexOf(e.size)+1)%r.length;e.size=r[c],o.textContent=e.size},t.querySelector("#toggle-disabled").onclick=()=>{e.disabled=!e.disabled,a.textContent=String(e.disabled)},t.querySelector("#toggle-required").onclick=()=>{e.required=!e.required,s.textContent=String(e.required)},t.querySelector("#toggle-error").onclick=()=>{e.error=!e.error,n.textContent=String(e.error)},t.querySelector("#toggle-search").onclick=()=>{e.showSearch=!e.showSearch,l.textContent=String(e.showSearch)},t.querySelector("#toggle-clear").onclick=()=>{e.showClearButton=!e.showClearButton,i.textContent=String(e.showClearButton)}}export{u as render};
