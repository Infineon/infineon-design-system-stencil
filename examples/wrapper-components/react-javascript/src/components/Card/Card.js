import React from 'react';
import { IfxCard, IfxLink } from '@infineon/infineon-design-system-react';
import { IfxCardHeadline } from '@infineon/infineon-design-system-react';
import { IfxCardOverline } from '@infineon/infineon-design-system-react';
import { IfxCardText } from '@infineon/infineon-design-system-react';

function Card() {
    return (
        <div>
        <IfxCard img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg" alt="" slot="img" direction='horizontal'>
        <IfxCardOverline slot="overline">
            Overline
            </IfxCardOverline>
        <IfxCardHeadline slot="headline">
            Headline
            </IfxCardHeadline>
        <IfxCardText slot="text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
            </IfxCardText>
        <IfxLink href="" target="_blank" icon="true" slot="btn" underline="false" position="right">Link</IfxLink>
        </IfxCard>

        <IfxCard img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg" alt="" slot="img" alignment='right'>
        <IfxCardOverline slot="overline">
            Overline
            </IfxCardOverline>
        <IfxCardHeadline slot="headline">
            Headline
            </IfxCardHeadline>
        <IfxCardText slot="text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
            </IfxCardText>
        <IfxLink href="" target="_blank" icon="true" slot="btn" underline="false" position="right">Link</IfxLink>
        </IfxCard>

        <div>
            text for card component
        </div>
        </div>
    );
}

export default Card;