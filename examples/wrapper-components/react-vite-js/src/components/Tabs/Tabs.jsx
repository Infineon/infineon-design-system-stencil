import { useState } from 'react';

function Tabs() {
  const orientations = ['horizontal', 'vertical'];

  const [orientationIndex, setOrientationIndex] = useState(0);
  const [fullWidth, setFullWidth] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const tabsKey = `${orientations[orientationIndex]}-${disabled}`;

  return (
    <div>
      <h2>Tabs</h2>
      <ifx-tabs
        key={tabsKey}
        orientation={orientations[orientationIndex]}
        active-tab-index="0"
        full-width={fullWidth}
      >
        <ifx-tab header="Tab 1">
          Content for Tab #1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
          </ifx-tab>
        <ifx-tab header="Tab 2" disabled={disabled}>
          Content for Tab #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
          </ifx-tab>
        <ifx-tab header="Tab 3">
          Content for Tab #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
          </ifx-tab>
      </ifx-tabs>

      <br />
      <br />
      <h3 style={{ textDecoration: 'underline' }}>Controls</h3>
      <ifx-button variant="secondary" onClick={() => setOrientationIndex(i => (i + 1) % orientations.length)}>Toggle Orientation</ifx-button>
      <ifx-button variant="secondary" onClick={() => setFullWidth(p => !p)}>Toggle Full Width</ifx-button>
      <ifx-button variant="secondary" onClick={() => setDisabled(p => !p)}>Toggle Disabled (Tab 2)</ifx-button>
      <br />
      <br />
      <span><b>Orientation:</b> {orientations[orientationIndex]}</span><br />
      <span><b>Full Width:</b> {String(fullWidth)}</span><br />
      <span><b>Disabled Tab 2:</b> {String(disabled)}</span><br />
    </div>
  );
}

export default Tabs;