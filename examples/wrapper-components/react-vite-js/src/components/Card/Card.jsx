/* eslint-disable react/no-unescaped-entities */
import { IfxCard, IfxCardHeadline, IfxButton, IfxCardOverline, IfxCardText, IfxCardImage, IfxCardLinks } from '@infineon/infineon-design-system-react';

function Card() {
  return (
    <IfxCard href="http://google.com" target="_blank" direction="vertical">
      <IfxCardImage position="right" src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg" alt="" slot="img"></IfxCardImage>
      <IfxCardOverline>Overline</IfxCardOverline>
      <IfxCardHeadline>Headline</IfxCardHeadline>
      <IfxCardText>
        Some quick example text to build on the card title and make up the bulk of the card's content
      </IfxCardText>
      <IfxCardLinks slot="buttons">
        <IfxButton color='primary'>Button</IfxButton>  
        <IfxButton color='primary'>Button</IfxButton>  
      </IfxCardLinks>  
    </IfxCard>
  );
}

export default Card;