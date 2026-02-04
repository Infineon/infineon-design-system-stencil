function r(t){t.innerHTML=`
    <h2>Search Field</h2>

    <ifx-search-field size="m" disabled="false" show-delete-icon="true" show-suggestions="false" enable-history="true" max-suggestions="10" max-history-items="5" history-key="ifx-search-history" history-header-text="Recent Searches" value="" autocomplete="on" placeholder="Search..." aria-label="Search field" delete-icon-aria-label="Clear search" history-delete-aria-label="Remove from history" dropdown-aria-label="Search suggestions and history" suggestion-aria-label="Search suggestion" history-item-aria-label="Search history item"></ifx-search-field>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>
    <ifx-button variant="secondary" id="toggle-delete">Toggle Delete Icon</ifx-button>
    <ifx-button variant="secondary" id="toggle-size">Toggle Size</ifx-button>

    <br><br>

    <span><b>Disabled:</b> <span id="state-disabled"></span></span><br>
    <span><b>Show Delete Icon:</b> <span id="state-delete-icon"></span></span><br>
    <span><b>Size:</b> <span id="state-size"></span></span><br>
  `;const e=t.querySelector("ifx-search-field"),i=t.querySelector("#state-disabled"),o=t.querySelector("#state-delete-icon"),a=t.querySelector("#state-size"),s=["s","m"];i.textContent=String(e.disabled),o.textContent=String(e.showDeleteIcon),a.textContent=e.size,t.querySelector("#toggle-disabled").onclick=()=>{e.disabled=!e.disabled,i.textContent=String(e.disabled)},t.querySelector("#toggle-delete").onclick=()=>{e.showDeleteIcon=!e.showDeleteIcon,o.textContent=String(e.showDeleteIcon)},t.querySelector("#toggle-size").onclick=()=>{const l=(s.indexOf(e.size)+1)%s.length;e.size=s[l],a.textContent=e.size}}export{r as render};
