export function render(container) {

  container.innerHTML = `
  <h2>Footer</h2>
  <br/>
  <h3>Small Footer</h3>

  <ifx-footer copyright-text="© 1999 - 2026 Infineon Technologies AG">
    <div slot="info">
      <ifx-link variant="menu" aria-label="Go to Homepage" href="http://infineon.com" target="_blank">Terms</ifx-link>
      <ifx-link variant="menu" href="https://yourwebsite.com/imprint" target="_blank">Imprint</ifx-link>
      <ifx-link variant="menu" href="https://yourwebsite.com/privacy-policy" target="_blank">Privacy policy</ifx-link>
      <ifx-link variant="menu" href="https://yourwebsite.com/glossary" target="_blank">Glossary</ifx-link>
    </div>
  </ifx-footer>

  <h3>Medium Footer</h3>

  <ifx-footer copyright-text="© 1999 - 2026 Infineon Technologies AG">
    <div slot="socials">
      <ifx-link variant="title" href="http://facebook.com/infineon" aria-label="Follow us on Facebook">
        <ifx-icon icon="facebook"></ifx-icon>
      </ifx-link>
      <ifx-link variant="title" href="http://youtube.com/infineon" aria-label="Follow us on Youtube">
        <ifx-icon icon="youtube"></ifx-icon>
      </ifx-link>
      <ifx-link variant="title" href="http://instagram.com/infineon" aria-label="Follow us on Instagram">
        <ifx-icon icon="instagram"></ifx-icon>
      </ifx-link>
      <ifx-link variant="title" href="http://linkedin.com/infineon" aria-label="Follow us on LinkedIn">
        <ifx-icon icon="linkedin"></ifx-icon>
      </ifx-link>
      <ifx-link variant="title" href="http://xing.com/infineon" aria-label="Follow us on Xing">
        <ifx-icon icon="xing"></ifx-icon>
      </ifx-link>
    </div>
    <div slot="info">
      <ifx-link variant="menu" href="https://yourwebsite.com/terms" target="_blank">Terms</ifx-link>
      <ifx-link variant="menu" href="https://yourwebsite.com/imprint" target="_blank">Imprint</ifx-link>
      <ifx-link variant="menu" href="https://yourwebsite.com/privacy-policy" target="_blank">Privacy policy</ifx-link>
      <ifx-link variant="menu" href="https://yourwebsite.com/glossary" target="_blank">Glossary</ifx-link>
    </div>
  </ifx-footer>

  <h3>Large Footer</h3>

  <ifx-footer copyright-text="© 1999 - 2026 Infineon Technologies AG">
    <ifx-footer-column slot="col">
      <h5 slot="title">Title</h5>
      <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
      <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
      <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
      <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
    </ifx-footer-column>
    <ifx-footer-column slot="col">
      <h5 slot="title">Title</h5>
      <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
      <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
      <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
      <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
    </ifx-footer-column>
    <ifx-footer-column slot="col">
      <h5 slot="title">Title</h5>
      <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
      <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
      <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
      <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
    </ifx-footer-column>
    <ifx-footer-column slot="col">
      <h5 slot="title">Title</h5>
      <ifx-link variant="menu" slot="link">Footer Link</ifx-link>
      <ifx-link variant="menu" slot="link">Footer Link</ifx-link>
      <ifx-link variant="menu" slot="link">Footer Link</ifx-link>
      <ifx-link variant="menu" slot="link">Footer Link</ifx-link>
    </ifx-footer-column>
    <div slot="socials">
      <ifx-link variant="title" href="http://facebook.com/infineon">
        <ifx-icon icon="facebook"></ifx-icon>
      </ifx-link>
      <ifx-link variant="title" href="http://youtube.com/infineon">
        <ifx-icon icon="youtube"></ifx-icon>
      </ifx-link>
      <ifx-link variant="title" href="http://instagram.com/infineon">
        <ifx-icon icon="instagram"></ifx-icon>
      </ifx-link>
      <ifx-link variant="title" href="http://linkedin.com/infineon">
        <ifx-icon icon="linkedin"></ifx-icon>
      </ifx-link>
      <ifx-link variant="title" href="http://xing.com/infineon">
        <ifx-icon icon="xing"></ifx-icon>
      </ifx-link>
    </div>
    <div slot="info">
      <ifx-link variant="menu" href="https://yourwebsite.com/terms" target="_blank">Terms</ifx-link>
      <ifx-link variant="menu" href="https://yourwebsite.com/imprint" target="_blank">Imprint</ifx-link>
      <ifx-link variant="menu" href="https://yourwebsite.com/privacy-policy" target="_blank">Privacy policy</ifx-link>
      <ifx-link variant="menu" href="https://yourwebsite.com/glossary" target="_blank">Glossary</ifx-link>
    </div>
  </ifx-footer>
  `;
}