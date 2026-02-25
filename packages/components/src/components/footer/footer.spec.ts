import { newSpecPage } from "jest-stencil-runner";
import { Footer } from "./footer";
import { FooterColumn } from "./footer-column";

describe("ifx-footer", () => {
	it("renders with default props", async () => {
		const page = await newSpecPage({
			components: [Footer],
			html: `<ifx-footer></ifx-footer>`,
		});

		expect(page.root).toBeTruthy();
		const footerContainer =
			page.root.shadowRoot.querySelector(".footer__container");
		expect(footerContainer).toBeTruthy();

		// Check copyright text is rendered
		const currentYear = new Date().getFullYear();
		const expectedCopyrightText = `© 1999 - ${currentYear} Infineon Technologies AG`;
		const copyrightElement =
			page.root.shadowRoot.querySelector(".footer__brand");
		expect(copyrightElement.textContent.trim()).toBe(expectedCopyrightText);

		// No logos should be visible without slots
		const topLogo = page.root.shadowRoot.querySelector(".footer__logo_top");
		const bottomLogo = page.root.shadowRoot.querySelector(".footer__logo_btm");
		expect(topLogo).toBeFalsy();
		expect(bottomLogo).toBeFalsy();
	});

	it("renders with custom copyright text", async () => {
		const customCopyright = "Custom Copyright 2024";
		const page = await newSpecPage({
			components: [Footer],
			html: `<ifx-footer copyright-text="${customCopyright}"></ifx-footer>`,
		});

		const copyrightElement =
			page.root.shadowRoot.querySelector(".footer__brand");
		expect(copyrightElement.textContent.trim()).toBe(customCopyright);
	});

	it("renders with column slots", async () => {
		const page = await newSpecPage({
			components: [Footer, FooterColumn],
			html: `
        <ifx-footer>
          <ifx-footer-column slot="col">
            <h5 slot="title">Column Title</h5>
            <a slot="link">Link 1</a>
            <a slot="link">Link 2</a>
          </ifx-footer-column>
        </ifx-footer>
      `,
		});

		// Check if the column wrapper is rendered
		const colWrapper = page.root.shadowRoot.querySelector(".col-wrapper");
		expect(colWrapper).toBeTruthy();

		// Check if the slot content is passed through
		const colSlot = colWrapper.querySelector('slot[name="col"]');
		expect(colSlot).toBeTruthy();

		// Top logo should be visible
		const logo = page.root.shadowRoot.querySelector(".footer__logo_top");
		expect(logo).toBeTruthy();
	});

	it("renders with socials slot", async () => {
		const page = await newSpecPage({
			components: [Footer],
			html: `
        <ifx-footer>
          <div slot="socials">
            <a href="https://example.com">Social Link</a>
          </div>
        </ifx-footer>
      `,
		});

		// Check if the socials container is rendered
		const socialsContainer = page.root.shadowRoot.querySelector(".default");
		expect(socialsContainer).toBeTruthy();

		// Check if the slot content is passed through
		const socialsSlot = socialsContainer.querySelector('slot[name="socials"]');
		expect(socialsSlot).toBeTruthy();

		// Bottom logo should be visible
		const logo = page.root.shadowRoot.querySelector(".footer__logo_btm");
		expect(logo).toBeTruthy();
	});

	it("renders with info slot", async () => {
		const page = await newSpecPage({
			components: [Footer],
			html: `
        <ifx-footer>
          <div slot="info">
            <a href="https://example.com/terms">Terms</a>
            <a href="https://example.com/privacy">Privacy</a>
          </div>
        </ifx-footer>
      `,
		});

		// Check if the info container is rendered
		const infoContainer = page.root.shadowRoot.querySelector(".footer__info");
		expect(infoContainer).toBeTruthy();

		// Check if the slot content is passed through
		const infoSlot = infoContainer.querySelector('slot[name="info"]');
		expect(infoSlot).toBeTruthy();
	});

	it("renders with all slots", async () => {
		const page = await newSpecPage({
			components: [Footer, FooterColumn],
			html: `
        <ifx-footer>
          <ifx-footer-column slot="col">
            <h5 slot="title">Column Title</h5>
            <a slot="link">Link 1</a>
          </ifx-footer-column>
          <div slot="socials">
            <a href="https://example.com">Social Link</a>
          </div>
          <div slot="info">
            <a href="https://example.com/terms">Terms</a>
          </div>
        </ifx-footer>
      `,
		});

		// All containers should be rendered
		const colWrapper = page.root.shadowRoot.querySelector(".col-wrapper");
		const socialsContainer = page.root.shadowRoot.querySelector(".default");
		const infoContainer = page.root.shadowRoot.querySelector(".footer__info");

		expect(colWrapper).toBeTruthy();
		expect(socialsContainer).toBeTruthy();
		expect(infoContainer).toBeTruthy();

		// Both logos should be visible
		const topLogo = page.root.shadowRoot.querySelector(".footer__logo_top");
		const bottomLogo = page.root.shadowRoot.querySelector(".footer__logo_btm");
		expect(topLogo).toBeTruthy();
		expect(bottomLogo).toBeTruthy();
	});

	// For the last test that's failing, replace it with:
	it("handles slot detection in componentWillLoad correctly", async () => {
		// Create a footer instance using newSpecPage to avoid direct property assignment
		const emptyPage = await newSpecPage({
			components: [Footer],
			html: `<ifx-footer></ifx-footer>`,
		});
		const footer = emptyPage.rootInstance;

		// Verify no slots initially
		expect(footer["hasColSlot"]).toBeFalsy();
		expect(footer["hasSocialsSlot"]).toBeFalsy();

		// Test with column slot
		const withColPage = await newSpecPage({
			components: [Footer],
			html: `
      <ifx-footer>
        <div slot="col"></div>
      </ifx-footer>
    `,
		});

		const footerWithCol = withColPage.rootInstance;
		expect(footerWithCol["hasColSlot"]).toBeTruthy();
		expect(footerWithCol["hasSocialsSlot"]).toBeFalsy();

		// Test with both slots
		const withBothPage = await newSpecPage({
			components: [Footer],
			html: `
      <ifx-footer>
        <div slot="col"></div>
        <div slot="socials"></div>
      </ifx-footer>
    `,
		});

		const footerWithBoth = withBothPage.rootInstance;
		expect(footerWithBoth["hasColSlot"]).toBeTruthy();
		expect(footerWithBoth["hasSocialsSlot"]).toBeTruthy();
	});
});
