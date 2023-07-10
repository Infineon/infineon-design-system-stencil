import React from 'react';
import { IfxCard, IfxLink } from '@infineon/infineon-design-system-react';
import { IfxCardHeadline } from '@infineon/infineon-design-system-react';
import { IfxCardOverline } from '@infineon/infineon-design-system-react';
import { IfxCardText } from '@infineon/infineon-design-system-react';

function Card() {
    return (
        <div>
        <IfxCard>
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg" alt="" slot="img" />
        <IfxCardOverline slot="overline">
            Overline
            </IfxCardOverline>
        <IfxCardHeadline slot="headline">
            Headline
            </IfxCardHeadline>
        <IfxCardText slot="text">
            Some example test to test the Card component. Some example test to test the Card component. Some example test to test the Card component.
            </IfxCardText>
        <IfxLink href="www.google.com" target="_blank" icon="true" slot="btn" underline="false" position="right">Link</IfxLink>
        </IfxCard>

        <div>
        <br></br>
        Some example text to test the Card component. Some example text to test the Card component. Some example text to test the Card component.
        </div>
        <br></br>

        <IfxCard direction='horizontal'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg" alt="" slot="img" />
        <IfxCardOverline slot="overline">
            Overline
            </IfxCardOverline>
        <IfxCardHeadline slot="headline">
            Headline
            </IfxCardHeadline>
        <IfxCardText slot="text">
        Some example test to test the Card component.  Some example test to test the Card component. Some example test to test the Card component.
            </IfxCardText>
        <IfxLink href="www.google.com" target="_blank" icon="true" slot="btn" underline="false" position="right">Link</IfxLink>
        </IfxCard>

        </div>
    );
}

export default Card;