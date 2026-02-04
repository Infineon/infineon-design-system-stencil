function s(t){t.innerHTML=`
    <h2>Search Bar</h2>

    <ifx-search-bar is-open="true" disabled="false" value="" autocomplete="on"></ifx-search-bar>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
    <ifx-button variant="secondary" id="toggle-open">Toggle Open</ifx-button>

    <br><br>

    <span><b>Disabled:</b> <span id="state-disabled"></span></span><br>
    <span><b>Open:</b> <span id="state-open"></span></span><br>
  `;const e=t.querySelector("ifx-search-bar"),n=t.querySelector("#state-disabled"),a=t.querySelector("#state-open");n.textContent=String(e.disabled),a.textContent=String(e.isOpen),t.querySelector("#toggle-disabled").onclick=()=>{e.disabled=!e.disabled,n.textContent=String(e.disabled)},t.querySelector("#toggle-open").onclick=()=>{e.isOpen=!e.isOpen,a.textContent=String(e.isOpen)}}export{s as render};
