import React from 'react';
import { IfxFooter } from '@infineon/infineon-design-system-react';

function Footer() {
    return (
        <div>
            <div>
                Text for the default Footer:
            </div>
           <IfxFooter variant="default">
                <div slot="socials">
                <ifx-link href="http://facebook.com/infineon">
                    <ifx-icon icon="c-info-16"></ifx-icon>
                </ifx-link>
                <ifx-link href="http://youtube.com/infineon">
                    <ifx-icon icon="c-info-16"></ifx-icon>
                </ifx-link>
                <ifx-link href="http://instagram.com/infineon">
                    <ifx-icon icon="c-info-16"></ifx-icon>
                </ifx-link>
                <ifx-link href="http://linkedin.com/infineon">
                    <ifx-icon icon="c-info-16"></ifx-icon>
                </ifx-link>
                <ifx-link href="http://twitter.com/infineon">
                    <ifx-icon icon="c-info-16"></ifx-icon>
                </ifx-link>
                <ifx-link href="http://xing.com/infineon">
                    <ifx-icon icon="c-info-16"></ifx-icon>
                </ifx-link>
                </div>
            </IfxFooter> 

            <div>
                Text for the large Footer:
            </div>
            <ifx-footer variant="large">
                <ifx-footer-column slot="col">
                    <h5 slot="title">Title</h5>
                    <ifx-link bold="false" slot="link">Footer Link</ifx-link>
                    <ifx-link bold="false" slot="link">Footer Link</ifx-link>
                    <ifx-link bold="false" slot="link">Footer Link</ifx-link>
                    <ifx-link bold="false" slot="link">Footer Link</ifx-link>
                </ifx-footer-column>
                <ifx-footer-column slot="col">
                    <h5 slot="title">Title</h5>
                    <ifx-link bold="false" slot="link">Footer Link</ifx-link>
                    <ifx-link bold="false" slot="link">Footer Link</ifx-link>
                    <ifx-link bold="false" slot="link">Footer Link</ifx-link>
                    <ifx-link bold="false" slot="link">Footer Link</ifx-link>
                </ifx-footer-column>
                <ifx-footer-column slot="col">
                    <h5 slot="title">Title</h5>
                    <ifx-link bold="false" slot="link">Footer Link</ifx-link>
                    <ifx-link bold="false" slot="link">Footer Link</ifx-link>
                    <ifx-link bold="false" slot="link">Footer Link</ifx-link>
                    <ifx-link bold="false" slot="link">Footer Link</ifx-link>
                </ifx-footer-column>
                <ifx-footer-column slot="col">
                    <h5 slot="title">Title</h5>
                    <ifx-link bold="false" slot="link">Footer Link</ifx-link>
                    <ifx-link bold="false" slot="link">Footer Link</ifx-link>
                    <ifx-link bold="false" slot="link">Footer Link</ifx-link>
                    <ifx-link bold="false" slot="link">Footer Link</ifx-link>
                </ifx-footer-column>
                <div slot="socials">
                <ifx-link href="http://facebook.com/infineon">
                    <ifx-icon icon="c-info-16"></ifx-icon>
                </ifx-link>
                <ifx-link href="http://youtube.com/infineon">
                    <ifx-icon icon="calendar-16"></ifx-icon>
                </ifx-link>
                <ifx-link href="http://instagram.com/infineon">
                    <ifx-icon icon="fileexe16"></ifx-icon>
                </ifx-link>
                <ifx-link href="http://linkedin.com/infineon">
                    <ifx-icon icon="filegif16"></ifx-icon>
                </ifx-link>
                <ifx-link href="http://twitter.com/infineon">
                    <ifx-icon icon="filehtml16"></ifx-icon>
                </ifx-link>
                <ifx-link href="http://xing.com/infineon">
                    <ifx-icon icon="filejpg16"></ifx-icon>
                </ifx-link>
                </div>
            </ifx-footer>

        </div>
    );
}

export default Footer;