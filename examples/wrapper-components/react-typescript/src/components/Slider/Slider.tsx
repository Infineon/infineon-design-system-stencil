import { IfxSlider } from '@infineon/infineon-design-system-react';

function Slider() {
  return (
    <div>
      <IfxSlider value="50" min="0" max="100" showPercentage={true}></IfxSlider>
    </div>
  );
}

export default Slider;