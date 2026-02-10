function s(e){e.innerHTML=`
    <h2>Tabs</h2>

    <h3>Horizontal</h3>
    <div class="controls">
      <ifx-tabs orientation="horizontal" active-tab-index="0" full-width="false">
    <ifx-tab header="Tab 1" disabled="false" icon="" icon-position="left">
        Content for Tab #1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
    </ifx-tab>
    <ifx-tab header="Tab 2" disabled="true" icon="" icon-position="left">
        Content for Tab #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
    </ifx-tab>
    <ifx-tab header="Tab 3" disabled="false" icon="" icon-position="left">
        Content for Tab #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
    </ifx-tab>
    </ifx-tabs>

    <h3>Vertical</h3>
    <div class="controls">
      <ifx-tabs orientation="vertical" active-tab-index="0" full-width="false">
    <ifx-tab header="Tab 1" disabled="false" icon="" icon-position="left">
        Content for Tab #1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
    </ifx-tab>
    <ifx-tab header="Tab 2" disabled="true" icon="" icon-position="left">
        Content for Tab #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
    </ifx-tab>
    <ifx-tab header="Tab 3" disabled="false" icon="" icon-position="left">
        Content for Tab #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
    </ifx-tab>
    </ifx-tabs>

    <br><br>

    <h3 class="controls-title">Controls</h3>
    <div class="controls">
      <ifx-button variant="secondary" id="toggle-fullWidth">Toggle Full Width</ifx-button>
    </div>

    <br>

    <div class="state">
      <div><b>Full Width:</b> <span id="state-fullWidth"></div>
    </div>
  `;const i=e.querySelector("ifx-tabs"),t=e.querySelector("#state-fullWidth");t.textContent=String(i.fullWidth),e.querySelector("#toggle-fullWidth").onclick=()=>{i.fullWidth=!i.fullWidth,t.textContent=String(i.fullWidth)}}export{s as render};
