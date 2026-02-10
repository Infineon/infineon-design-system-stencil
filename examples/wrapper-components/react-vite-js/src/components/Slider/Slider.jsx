import { useState } from 'react';
import { IfxSlider, IfxButton } from '@infineon/infineon-design-system-react';

function Slider() {
  const [showPercentage, setShowPercentage] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const [typeIndex, setTypeIndex] = useState(0);
  const types = ['single', 'double'];

  const togglePercentage = () => {
    setShowPercentage((prev) => !prev);
  };

  const toggleDisable = () => {
    setDisabled((prev) => !prev);
  };

  const toggleType = () => {
    setTypeIndex((index) => (index + 1) % types.length);
  };

  return (
    <div className="component">
      <h2>Slider</h2>

      <h3>Default</h3>
      <IfxSlider
        value="50"
        min="0"
        max="100"
        step="1"
        type={types[typeIndex]}
        showPercentage={showPercentage}
        disabled={disabled}
      ></IfxSlider>

      <h3>With Icons</h3>
      <IfxSlider
        value="50"
        min="0"
        max="100"
        step="1"
        type={types[typeIndex]}
        left-icon="cogwheel-16"
        right-icon="cogwheel-16"
        showPercentage={showPercentage}
        disabled={disabled}
      ></IfxSlider>

      <h3>With Texts</h3>
      <IfxSlider
        value="50"
        min="0"
        max="100"
        step="1"
        type={types[typeIndex]}
        left-text="LeftText"
        right-text="RightText"
        showPercentage={showPercentage}
        disabled={disabled}
      ></IfxSlider>
      <br />
      <br />

      <h3 class="controls-title">Controls</h3>
      <div class="controls">
        <IfxButton variant="secondary" onClick={togglePercentage}>Toggle Percentage</IfxButton>
        <IfxButton variant="secondary" onClick={toggleDisable}>Toggle Disable</IfxButton>
        <IfxButton variant="secondary" onClick={toggleType}>Toggle Type</IfxButton>
      </div>
      <br />

      <div class="state">
        <div><b>Percentage:</b> {String(showPercentage)}</div>
        <div><b>Disable:</b> {String(disabled)}</div>
        <div><b>Type:</b> {types[typeIndex]}</div>
      </div>
    </div>
  );
}

export default Slider;