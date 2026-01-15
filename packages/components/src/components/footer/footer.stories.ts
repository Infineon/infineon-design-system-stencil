import { icons } from "@infineon/infineon-icons";
import { html } from "lit";
export default {
	title: "Components/Footer",
	tags: ["autodocs"],
	args: {
		copyrightText: "© 1999 - 2026 Infineon Technologies AG",
		href: "http://infineon.com",
		icon: "home-16",
		ariaLabelOfLink: "Go to Homepage",
	},
	argTypes: {
		copyrightText: {
			description: "Sets the text for the copyright.",
			control: "text",
			table: {
				category: "ifx-footer props",
			},
		},
		icon: {
			description: "Sets the icon for the footer.",
			options: Object.keys(icons),
			control: { type: "select" },
			table: {
				category: "ifx-icon props",
				type: {
					summary: "string",
				},
			},
		},
		href: {
			description: "Sets the link for the footer.",
			control: "text",
			table: {
				category: "ifx-link props",
			},
		},
		ariaLabelOfLink: {
			name: "ariaLabel",
			description: "Sets the aria-label for the link. Enhances accessibility.",
			control: "text",
			table: {
				category: "ifx-link props",
				type: {
					summary: "Options",
					detail: "Follow us on...",
				},
			},
		},
	},
};

const DefaultTemplate = (args) => {
	return html`
    <ifx-footer copyright-text="${args.copyrightText}">
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
  </ifx-footer>`;
};

const SmallTemplate = (args) => {
	return html`
<ifx-footer copyright-text="${args.copyrightText}">
    <div slot="info">
      <ifx-link variant="menu" aria-label="${args.ariaLabelOfLink}" href="${args.href}" target="_blank">Terms</ifx-link>
      <ifx-link variant="menu" href="https://yourwebsite.com/imprint" target="_blank">Imprint</ifx-link>
      <ifx-link variant="menu" href="https://yourwebsite.com/privacy-policy" target="_blank">Privacy policy</ifx-link>
      <ifx-link variant="menu" href="https://yourwebsite.com/glossary" target="_blank">Glossary</ifx-link>
    </div>
  </ifx-footer>`;
};

const LargeTemplate = (args) => {
	return html`
  <ifx-footer copyright-text="${args.copyrightText}">
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
</ifx-footer>`;
};

export const Small = SmallTemplate.bind({});
export const Medium = DefaultTemplate.bind({});
export const Large = LargeTemplate.bind({});
