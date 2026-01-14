import { newSpecPage } from "jest-stencil-runner";
import { Notification } from "./notification";

describe("ifx-notification", () => {
	it("renders with default props", async () => {
		const page = await newSpecPage({
			components: [Notification],
			html: `<ifx-notification>Notification content</ifx-notification>`,
		});

		expect(page.root).toBeTruthy();
		const wrapper = page.root.shadowRoot.querySelector(
			".ifx-notification__wrapper",
		);
		expect(wrapper).toBeTruthy();

		// Should have success class by default
		expect(
			wrapper.classList.contains("ifx-notification__wrapper--success"),
		).toBeTruthy();

		// Content should be in the slot
		const slotContainer = page.root.shadowRoot.querySelector(
			".ifx-notification__slot",
		);
		expect(slotContainer).toBeTruthy();

		// No link should be rendered without linkText and linkHref
		const link = page.root.shadowRoot.querySelector(".ifx-notification__link");
		expect(link).toBeFalsy();
	});

	it("renders with different variants", async () => {
		// Test each variant
		const variants = ["success", "locked", "error", "neutral"];

		for (const variant of variants) {
			const page = await newSpecPage({
				components: [Notification],
				html: `<ifx-notification variant="${variant}">Notification content</ifx-notification>`,
			});

			const wrapper = page.root.shadowRoot.querySelector(
				".ifx-notification__wrapper",
			);
			expect(
				wrapper.classList.contains(`ifx-notification__wrapper--${variant}`),
			).toBeTruthy();
		}
	});

	it("renders with an icon", async () => {
		const page = await newSpecPage({
			components: [Notification],
			html: `<ifx-notification icon="info-16">Notification content</ifx-notification>`,
		});

		const iconElement = page.root.shadowRoot.querySelector(
			".ifx-notification__icon ifx-icon",
		);
		expect(iconElement).toBeTruthy();
		expect(iconElement.getAttribute("icon")).toBe("info-16");
	});

	it("renders with link", async () => {
		const page = await newSpecPage({
			components: [Notification],
			html: `<ifx-notification 
        link-text="Learn more" 
        link-href="https://example.com"
      >Notification content</ifx-notification>`,
		});

		const linkContainer = page.root.shadowRoot.querySelector(
			".ifx-notification__link",
		);
		expect(linkContainer).toBeTruthy();

		const link = linkContainer.querySelector("ifx-link");
		expect(link).toBeTruthy();
		expect(link.getAttribute("href")).toBe("https://example.com");
		expect(link.getAttribute("target")).toBe("_blank"); // Default target
		expect(link.textContent.trim().startsWith("Learn more")).toBeTruthy();

		// Should have an arrow icon
		const linkIcon = link.querySelector("ifx-icon");
		expect(linkIcon).toBeTruthy();
		expect(linkIcon.getAttribute("icon")).toBe("arrow-right-16");
	});

	it("renders with custom link target", async () => {
		const page = await newSpecPage({
			components: [Notification],
			html: `<ifx-notification 
        link-text="Learn more" 
        link-href="https://example.com"
        link-target="_self"
      >Notification content</ifx-notification>`,
		});

		const link = page.root.shadowRoot.querySelector(
			".ifx-notification__link ifx-link",
		);
		expect(link.getAttribute("target")).toBe("_self");
	});

	it("does not render link when only linkText is provided", async () => {
		const page = await newSpecPage({
			components: [Notification],
			html: `<ifx-notification link-text="Learn more">Notification content</ifx-notification>`,
		});

		const linkContainer = page.root.shadowRoot.querySelector(
			".ifx-notification__link",
		);
		expect(linkContainer).toBeFalsy();
	});

	it("does not render link when only linkHref is provided", async () => {
		const page = await newSpecPage({
			components: [Notification],
			html: `<ifx-notification link-href="https://example.com">Notification content</ifx-notification>`,
		});

		const linkContainer = page.root.shadowRoot.querySelector(
			".ifx-notification__link",
		);
		expect(linkContainer).toBeFalsy();
	});
});
