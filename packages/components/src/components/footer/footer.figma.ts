import figma, { html } from "@figma/code-connect/html";

// Figma models the footer with multiple size variants (Small, Medium, Large).
// The component is fully responsive and adapts automatically to different screen sizes.
// The slot-based structure allows flexible content composition while maintaining consistent styling across variants.

// Variant: Small - Legal/info links only
figma.connect("https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=16471%3A10482", {
	variant: {
		Size: "Small",
	},
	example: () => html`
    <!-- Generic example. Adjust to your needs -->
    <!-- Footer with legal and informational links only -->
    <ifx-footer copyright-text="© 1999 - 2026 Infineon Technologies AG">
      <div slot="info">
        <ifx-link variant="menu" href="https://yourwebsite.com/terms" target="_blank">Terms</ifx-link>
        <ifx-link variant="menu" href="https://yourwebsite.com/imprint" target="_blank">Imprint</ifx-link>
        <ifx-link variant="menu" href="https://yourwebsite.com/privacy-policy" target="_blank">Privacy policy</ifx-link>
        <ifx-link variant="menu" href="https://yourwebsite.com/glossary" target="_blank">Glossary</ifx-link>
      </div>
    </ifx-footer>
  `,
});

// Variant: Medium - Social icons + legal/info links
figma.connect("https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=16471%3A10482", {
	variant: {
		Size: "Medium",
	},
	example: () => html`
    <!-- Generic example. Adjust to your needs -->
    <!-- Footer with social media links and legal/informational links -->
    <ifx-footer copyright-text="© 1999 - 2026 Infineon Technologies AG">
      <div slot="socials">
        <ifx-link variant="title" href="http://youtube.com/infineon" aria-label="Follow us on Youtube">
          <ifx-icon icon="youtube"></ifx-icon>
        </ifx-link>
        <ifx-link variant="title" href="http://linkedin.com/infineon" aria-label="Follow us on LinkedIn">
          <ifx-icon icon="linkedin"></ifx-icon>
        </ifx-link>
        <ifx-link variant="title" href="http://instagram.com/infineon" aria-label="Follow us on Instagram">
          <ifx-icon icon="instagram"></ifx-icon>
        </ifx-link>
        <ifx-link variant="title" href="http://facebook.com/infineon" aria-label="Follow us on Facebook">
          <ifx-icon icon="facebook"></ifx-icon>
        </ifx-link>
      </div>
      <div slot="info">
        <ifx-link variant="menu" href="https://yourwebsite.com/terms" target="_blank">Terms</ifx-link>
        <ifx-link variant="menu" href="https://yourwebsite.com/imprint" target="_blank">Imprint</ifx-link>
        <ifx-link variant="menu" href="https://yourwebsite.com/privacy-policy" target="_blank">Privacy policy</ifx-link>
        <ifx-link variant="menu" href="https://yourwebsite.com/glossary" target="_blank">Glossary</ifx-link>
      </div>
    </ifx-footer>
  `,
});

// Variant: Large - Columns + social icons + legal/info links
figma.connect("https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=16471%3A10482", {
	variant: {
		Size: "Large",
	},
	example: () => html`
    <!-- Generic example. Adjust to your needs -->
    <!-- Footer with multiple columns for navigation, social icons, and legal links -->
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
        <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
        <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
        <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
        <ifx-link href="#" variant="menu" slot="link">Footer Link</ifx-link>
      </ifx-footer-column>
      <div slot="socials">
        <ifx-link variant="title" href="http://youtube.com/infineon" aria-label="Follow us on Youtube">
          <ifx-icon icon="youtube"></ifx-icon>
        </ifx-link>
        <ifx-link variant="title" href="http://linkedin.com/infineon" aria-label="Follow us on LinkedIn">
          <ifx-icon icon="linkedin"></ifx-icon>
        </ifx-link>
        <ifx-link variant="title" href="http://instagram.com/infineon" aria-label="Follow us on Instagram">
          <ifx-icon icon="instagram"></ifx-icon>
        </ifx-link>
        <ifx-link variant="title" href="http://facebook.com/infineon" aria-label="Follow us on Facebook">
          <ifx-icon icon="facebook"></ifx-icon>
        </ifx-link>
      </div>
      <div slot="info">
        <ifx-link variant="menu" href="https://yourwebsite.com/terms" target="_blank">Terms</ifx-link>
        <ifx-link variant="menu" href="https://yourwebsite.com/imprint" target="_blank">Imprint</ifx-link>
        <ifx-link variant="menu" href="https://yourwebsite.com/privacy-policy" target="_blank">Privacy policy</ifx-link>
        <ifx-link variant="menu" href="https://yourwebsite.com/glossary" target="_blank">Glossary</ifx-link>
      </div>
    </ifx-footer>
  `,
});
