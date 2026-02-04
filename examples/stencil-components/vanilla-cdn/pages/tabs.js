export function render(container) {

  container.innerHTML = `
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
  `;

    const tabsElement = container.querySelector('ifx-tabs');
    const orientationState = container.querySelector('#state-orientation');
    const fullWidthState = container.querySelector('#state-fullWidth');
    const disabledState = container.querySelector('#state-disabled');

    orientationState.textContent = tabsElement.orientation;
    fullWidthState.textContent = String(tabsElement.fullWidth);
    disabledState.textContent = String(tabsElement.disabled);

    container.querySelector('#toggle-orientation').onclick = () => {
      tabsElement.orientation = tabsElement.orientation === 'horizontal' ? 'vertical' : 'horizontal';
      orientationState.textContent = tabsElement.orientation;
    }

    container.querySelector('#toggle-fullWidth').onclick = () => {
      tabsElement.fullWidth = !tabsElement.fullWidth;
      fullWidthState.textContent = String(tabsElement.fullWidth);
    }

    container.querySelector('#toggle-disabled').onclick = () => {
      tabsElement.disabled = !tabsElement.disabled;
      disabledState.textContent = String(tabsElement.disabled);
    }
}