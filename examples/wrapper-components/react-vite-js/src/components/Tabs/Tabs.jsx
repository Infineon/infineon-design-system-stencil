import { useState } from 'react';
import { IfxTabs, IfxTab, IfxButton } from '@infineon/infineon-design-system-react';

function Tabs() {
  const orientations = ['horizontal', 'vertical'];

  const [orientationIndex, setOrientationIndex] = useState(0);
  const [fullWidth, setFullWidth] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const tabsKey = `${orientations[orientationIndex]}-${disabled}`;

  const toggleOrientation = () => {
    setOrientationIndex((index) => (index + 1) % orientations.length);
  }

  const toggleFullWidth = () => {
    setFullWidth(prevFullWidth => !prevFullWidth);
  }

  const toggleDisabled = () => {
    setDisabled(prevDisabled => !prevDisabled);
  }

  return (
    <div className="component">
      <h2>Tabs</h2>
      <IfxTabs
        key={tabsKey}
        orientation={orientations[orientationIndex]}
        active-tab-index="0"
        full-width={fullWidth}
      >
        <IfxTab header="Tab 1">
          Content for Tab #1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        </IfxTab>
        <IfxTab header="Tab 2" disabled={disabled}>
          Content for Tab #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        </IfxTab>
        <IfxTab header="Tab 3">
          Content for Tab #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        </IfxTab>
      </IfxTabs>
      <br />
      <br />

      <h3 class="controls-title">Controls</h3>
      <div class="controls">
        <IfxButton variant="secondary" onClick={toggleOrientation}>Toggle Orientation</IfxButton>
        <IfxButton variant="secondary" onClick={toggleFullWidth}>Toggle Full Width</IfxButton>
        <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled (Tab 2)</IfxButton>
      </div>
      <br />

      <div class="state">
        <div><b>Orientation:</b> {orientations[orientationIndex]}</div>
        <div><b>Full Width:</b> {String(fullWidth)}</div>
        <div><b>Disabled Tab 2:</b> {String(disabled)}</div>
      </div>
    </div>
  );
}

export default Tabs;