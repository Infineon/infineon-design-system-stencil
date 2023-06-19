import React from 'react';
import { IfxCard, IfxCardHeadline, IfxCardOverline, IfxCardText, IfxLink, IfxIcon, IfxCardImage } from '@infineon/infineon-design-system-react';

function Card() {
  return (
    <IfxCard direction="vertical">
      <IfxCardImage position="right" src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg" alt="" slot="img"></IfxCardImage>
      <IfxCardOverline>Overline</IfxCardOverline>
      <IfxCardHeadline>Headline</IfxCardHeadline>
      <IfxCardText>
        Some quick example text to build on the card title and make up the bulk of the card's content
      </IfxCardText>
        <IfxLink href="http://google.com" target="_blank" underline={false}>
          <IfxIcon icon="calendar16"></IfxIcon>
          Linkaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </IfxLink>
    </IfxCard>
  );
}

export default Card;