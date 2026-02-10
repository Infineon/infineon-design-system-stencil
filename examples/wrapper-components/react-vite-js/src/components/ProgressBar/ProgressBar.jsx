import { useState } from 'react';
import { IfxProgressBar, IfxButton } from '@infineon/infineon-design-system-react';

function ProgressBar() {
  const [progressValue, setProgressValue] = useState(10);

  const [sizeIndex, setSizeIndex] = useState(1);
  const sizes = ['s', 'm'];

  const [showLabel, setShowLabel] = useState(true);

  const updateProgressOnClick = () => {
    setProgressValue((currentValue) => {
      if (currentValue < 100) {
        return currentValue + 10;
      } else {
        return 10;
      }
    });
  };

  const toggleSize = () => {
    setSizeIndex((index) => (index + 1) % sizes.length);
  };

  const toggleShowLabel = () => {
    setShowLabel((prev) => !prev);
  };

  return (
    <div className="component">
      <h2>Progress Bar</h2>

      <IfxProgressBar value={progressValue} size={sizes[sizeIndex]} showLabel={showLabel}></IfxProgressBar>
      <br />
      <br />

      <h3 class="controls-title">Controls</h3>
      <div class="controls">
        <IfxButton variant="secondary" onClick={updateProgressOnClick}>Update progress</IfxButton>
        <IfxButton variant="secondary" onClick={toggleSize}>Toggle Size</IfxButton>
        <IfxButton variant="secondary" onClick={toggleShowLabel}>Toggle Label</IfxButton>
      </div>
      <br />

      <div class="state">
        <div><b>Size:</b> {sizes[sizeIndex]}</div>
        <div><b>ShowLabel:</b> {String(showLabel)}</div>
      </div>
    </div>
  );
}

export default ProgressBar;