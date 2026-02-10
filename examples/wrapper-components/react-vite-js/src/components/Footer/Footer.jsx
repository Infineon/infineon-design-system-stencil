import { IfxFooter, IfxLink, IfxIcon, IfxFooterColumn } from '@infineon/infineon-design-system-react';

function Footer() {
  return (
    <div className="component">
      <h2>Footer</h2>
      <br />
      <br />
      <h3>Small Footer</h3>
      <IfxFooter copyright-text="© 1999 - 2024 Infineon Technologies AG">
        <div slot="info">
          <IfxLink variant="menu" href="http://infineon.com" target="_blank">
            Terms
          </IfxLink>
          <IfxLink variant="menu" href="https://yourwebsite.com/imprint" target="_blank">
            Imprint
          </IfxLink>
          <IfxLink variant="menu" href="https://yourwebsite.com/privacy-policy" target="_blank">
            Privacy policy
          </IfxLink>
          <IfxLink variant="menu" href="https://yourwebsite.com/glossary" target="_blank">
            Glossary
          </IfxLink>
        </div>
      </IfxFooter>

      <br />

      <h3>Medium Footer</h3>
      <IfxFooter copyright-text="© 1999 - 2024 Infineon Technologies AG">
        <div slot="socials">
          <IfxLink variant="title" href="http://infineon.com">
            <IfxIcon icon="home-16"></IfxIcon>
          </IfxLink>
          <IfxLink variant="title" href="http://facebook.com/infineon">
            <IfxIcon icon="facebook"></IfxIcon>
          </IfxLink>
          <IfxLink variant="title" href="http://youtube.com/infineon">
            <IfxIcon icon="youtube"></IfxIcon>
          </IfxLink>
          <IfxLink variant="title" href="http://instagram.com/infineon">
            <IfxIcon icon="instagram"></IfxIcon>
          </IfxLink>
          <IfxLink variant="title" href="http://linkedin.com/infineon">
            <IfxIcon icon="linkedin"></IfxIcon>
          </IfxLink>
          <IfxLink variant="title" href="http://xing.com/infineon">
            <IfxIcon icon="xing"></IfxIcon>
          </IfxLink>
        </div>

        <div slot="info">
          <IfxLink variant="menu" href="https://yourwebsite.com/terms" target="_blank">
            Terms
          </IfxLink>
          <IfxLink variant="menu" href="https://yourwebsite.com/imprint" target="_blank">
            Imprint
          </IfxLink>
          <IfxLink variant="menu" href="https://yourwebsite.com/privacy-policy" target="_blank">
            Privacy policy
          </IfxLink>
          <IfxLink variant="menu" href="https://yourwebsite.com/glossary" target="_blank">
            Glossary
          </IfxLink>
        </div>
      </IfxFooter>

      <br />

      <h3>Large Footer</h3>
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
          <IfxLink slot="link" href="https://google.com">
            Footer Link
          </IfxLink>
          <IfxLink slot="link" href="https://google.com">
            Footer Link
          </IfxLink>
          <IfxLink slot="link" href="https://google.com">
            Footer Link
          </IfxLink>
          <IfxLink slot="link" href="https://google.com">
            Footer Link
          </IfxLink>
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
            <IfxIcon icon="calendar-16"></IfxIcon>
          </IfxLink>
          <IfxLink href="http://instagram.com/infineon">
            <IfxIcon icon="fileexe16"></IfxIcon>
          </IfxLink>
          <IfxLink href="http://linkedin.com/infineon">
            <IfxIcon icon="filegif16"></IfxIcon>
          </IfxLink>
          <IfxLink href="http://twitter.com/infineon">
            <IfxIcon icon="filehtml16"></IfxIcon>
          </IfxLink>
          <IfxLink href="http://xing.com/infineon">
            <IfxIcon icon="filejpg16"></IfxIcon>
          </IfxLink>
        </div>

        <div slot="info">
          <IfxLink variant="menu" href="https://yourwebsite.com/terms" target="_blank">
            Terms
          </IfxLink>
        </div>
      </IfxFooter>
    </div>
  );
}

export default Footer;