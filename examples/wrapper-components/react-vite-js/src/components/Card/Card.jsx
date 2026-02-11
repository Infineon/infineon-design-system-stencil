import { useState } from 'react';
import { IfxCard, IfxCardHeadline, IfxButton, IfxCardOverline, IfxCardText, IfxCardImage, IfxCardLinks } from '@infineon/infineon-design-system-react';

function Card() {

  const [directionIndex, setDirectionIndex] = useState(0);
  const directions = ["horizontal", "vertical"];

  const toggleDirection = () => {
    setDirectionIndex((index) => (index + 1) % directions.length);
  }

  return (
    <div className="component">
      <h2>Card</h2>
      <IfxCard href="http://google.com" target="_blank" direction={directions[directionIndex]} aria-label="Card">
        <IfxCardImage position="right" src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg" alt="" slot="img"></IfxCardImage>
        <IfxCardOverline>Overline</IfxCardOverline>
        <IfxCardHeadline>Headline</IfxCardHeadline>
        <IfxCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content
        </IfxCardText>
        <IfxCardLinks slot="buttons">
          <IfxButton variant="primary">Button</IfxButton>
          <IfxButton variant="secondary">Button</IfxButton>
        </IfxCardLinks>
      </IfxCard>
      <br />
      <br />

      <h3 class="controls-title">Controls</h3>
      <div class="controls">
        <IfxButton variant="secondary" onClick={toggleDirection}>Toggle Direction</IfxButton>
      </div>
      <br />

      <div class="state">
        <div><b>Direction:</b> {directions[directionIndex]}</div>
      </div>
    </div>
  );
}

export default Card;