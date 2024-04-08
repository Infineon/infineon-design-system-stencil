import React from 'react';
import { IfxSlider } from '@infineon/infineon-design-system-react';

function Slider() {
  return (
    <div>
      <IfxSlider value="50" min="0" max="100" showPercentage={true}></IfxSlider>
      <IfxSlider minVal="20" maxVal="80" min="0" max="100" type="range" ></IfxSlider>
    </div>
  );
}

export default Slider;