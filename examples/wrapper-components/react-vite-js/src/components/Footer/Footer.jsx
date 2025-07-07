import { IfxFooter, IfxLink, IfxIcon, IfxFooterColumn } from '@infineon/infineon-design-system-react';

function Footer() {
  return (
    <IfxFooter variant="large" termsUrl="https://yourwebsite.com/terms">
      <IfxFooterColumn slot="col">
        <h5 slot="title">Title</h5>
        <IfxLink slot="link">Footer Link</IfxLink>
        <IfxLink slot="link">Footer Link</IfxLink>
        <IfxLink slot="link">Footer Link</IfxLink>
        <IfxLink slot="link">Footer Link</IfxLink>
      </IfxFooterColumn>
      <IfxFooterColumn slot="col">
        <h5 slot="title">Title</h5>
        <IfxLink slot="link">Footer Link</IfxLink>
        <IfxLink slot="link">Footer Link</IfxLink>
        <IfxLink slot="link">Footer Link</IfxLink>
        <IfxLink slot="link">Footer Link</IfxLink>
      </IfxFooterColumn>
      <IfxFooterColumn slot="col">
        <h5 slot="title">Title</h5>
        <IfxLink slot="link">Footer Link</IfxLink>
        <IfxLink slot="link">Footer Link</IfxLink>
        <IfxLink slot="link">Footer Link</IfxLink>
        <IfxLink slot="link">Footer Link</IfxLink>
      </IfxFooterColumn>
      <IfxFooterColumn slot="col">
        <h5 slot="title">Title</h5>
        <IfxLink slot="link">Footer Link</IfxLink>
        <IfxLink slot="link">Footer Link</IfxLink>
        <IfxLink slot="link">Footer Link</IfxLink>
        <IfxLink slot="link">Footer Link</IfxLink>
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
        <IfxLink href="http://x.com/infineon">
          <IfxIcon icon="c-info-16"></IfxIcon>
        </IfxLink>
        <IfxLink href="http://xing.com/infineon">
          <IfxIcon icon="c-info-16"></IfxIcon>
        </IfxLink>
      </div>
      <div slot="info">
        <IfxLink variant="menu" href="https://yourwebsite.com/terms" target="_blank">Terms</IfxLink>
      </div>
  </IfxFooter>
  );
}

export default Footer;