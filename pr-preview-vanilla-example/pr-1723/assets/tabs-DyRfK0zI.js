function s(t){t.innerHTML=`
    <h2>Tabs</h2>

    <ifx-tabs orientation="horizontal" active-tab-index="0" full-width="false"><ifx-tab header="Tab 1" icon="" icon-position="left">
        Content for Tab #1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
    </ifx-tab><ifx-tab header="Tab 2" disabled="false" icon="" icon-position="left">
        Content for Tab #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
    </ifx-tab><ifx-tab header="Tab 3" icon="" icon-position="left">
        Content for Tab #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
    </ifx-tab></ifx-tabs>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-orientation">Toggle Orientation</ifx-button>
    <ifx-button variant="secondary" id="toggle-fullWidth">Toggle Full Width</ifx-button>
    <ifx-button variant="secondary" id="toggle-disabled">Toggle Disabled</ifx-button>

    <br><br>

    <span><b>Orientation:</b> <span id="state-orientation"></span></span><br>
    <span><b>Full Width:</b> <span id="state-fullWidth"></span></span><br>
    <span><b>Disabled:</b> <span id="state-disabled"></span></span><br>
  `;const e=t.querySelector("ifx-tabs"),i=t.querySelector("#state-orientation"),n=t.querySelector("#state-fullWidth"),a=t.querySelector("#state-disabled");i.textContent=e.orientation,n.textContent=String(e.fullWidth),a.textContent=String(e.disabled),t.querySelector("#toggle-orientation").onclick=()=>{e.orientation=e.orientation==="horizontal"?"vertical":"horizontal",i.textContent=e.orientation},t.querySelector("#toggle-fullWidth").onclick=()=>{e.fullWidth=!e.fullWidth,n.textContent=String(e.fullWidth)},t.querySelector("#toggle-disabled").onclick=()=>{e.disabled=!e.disabled,a.textContent=String(e.disabled)}}export{s as render};
