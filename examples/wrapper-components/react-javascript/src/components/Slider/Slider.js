import React from 'react';
import { IfxSlider } from '@infineon/infineon-design-system-react';

function Slider() {
  return (
    <div>
      <IfxSlider value="50" min="0" max="100" showPercentage={true}></IfxSlider>
      <IfxSlider minValHandle="20" maxValHandle="80" min="0" max="100" type="double" ></IfxSlider>
    </div>
  );
}

export default Slider;