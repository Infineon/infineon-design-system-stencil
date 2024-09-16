import { IfxFooter, IfxLink, IfxIcon, IfxFooterColumn } from '@infineon/infineon-design-system-react';

function Footer() {
  return (
    <IfxFooter variant="large" termsUrl="https://yourwebsite.com/terms">
      <IfxFooterColumn slot="col">
        <h5 slot="title">Title</h5>
        <IfxLink bold="false" slot="link">Footer Link</IfxLink>
        <IfxLink bold="false" slot="link">Footer Link</IfxLink>
        <IfxLink bold="false" slot="link">Footer Link</IfxLink>
        <IfxLink bold="false" slot="link">Footer Link</IfxLink>
      </IfxFooterColumn>
      <IfxFooterColumn slot="col">
        <h5 slot="title">Title</h5>
        <IfxLink bold="false" slot="link">Footer Link</IfxLink>
        <IfxLink bold="false" slot="link">Footer Link</IfxLink>
        <IfxLink bold="false" slot="link">Footer Link</IfxLink>
        <IfxLink bold="false" slot="link">Footer Link</IfxLink>
      </IfxFooterColumn>
      <IfxFooterColumn slot="col">
        <h5 slot="title">Title</h5>
        <IfxLink bold="false" slot="link">Footer Link</IfxLink>
        <IfxLink bold="false" slot="link">Footer Link</IfxLink>
        <IfxLink bold="false" slot="link">Footer Link</IfxLink>
        <IfxLink bold="false" slot="link">Footer Link</IfxLink>
      </IfxFooterColumn>
      <IfxFooterColumn slot="col">
        <h5 slot="title">Title</h5>
        <IfxLink bold="false" slot="link">Footer Link</IfxLink>
        <IfxLink bold="false" slot="link">Footer Link</IfxLink>
        <IfxLink bold="false" slot="link">Footer Link</IfxLink>
        <IfxLink bold="false" slot="link">Footer Link</IfxLink>
      </IfxFooterColumn>
      <div slot="socials">
        <IfxLink href="http://facebook.com/infineon">
          <IfxIcon icon="c-info-16"></IfxIcon>
        </IfxLink>
        <IfxLink href="http://youtube.com/infineon">
          <IfxIcon icon="c-info-16"></IfxIcon>
        </IfxLink>
        <IfxLink href="http://instagram.com/infineon">
          <IfxIcon icon="c-info-16"></IfxIcon>
        </IfxLink>
        <IfxLink href="http://linkedin.com/infineon">
          <IfxIcon icon="c-info-16"></IfxIcon>
        </IfxLink>
        <IfxLink href="http://twitter.com/infineon">
          <IfxIcon icon="c-info-16"></IfxIcon>
        </IfxLink>
        <IfxLink href="http://xing.com/infineon">
          <IfxIcon icon="c-info-16"></IfxIcon>
        </IfxLink>
      </div>
    </IfxFooter>
  );
}

export default Footer;