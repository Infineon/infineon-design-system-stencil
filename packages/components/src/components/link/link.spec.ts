import { newSpecPage } from "jest-stencil-runner";
import { Link } from "./link";

describe("ifx-link", () => {
	it("renders with default props", async () => {
		const page = await newSpecPage({
			components: [Link],
			html: `<ifx-link>Link Text</ifx-link>`,
		});

		expect(page.root).toBeTruthy();
		const anchor = page.root.shadowRoot.querySelector("a");
		expect(anchor).toBeTruthy();
		expect(anchor.getAttribute("target")).toBe("_self");
		expect(anchor.className).toContain("bold");
		expect(anchor.hasAttribute("href")).toBeFalsy(); // undefined href
		expect(anchor.getAttribute("role")).toBe("link");
	});

	it("renders with href and target", async () => {
		const page = await newSpecPage({
			components: [Link],
			html: `<ifx-link href="https://example.com" target="_blank">Link Text</ifx-link>`,
		});

		const anchor = page.root.shadowRoot.querySelector("a");
		expect(anchor.getAttribute("href")).toBe("https://example.com");
		expect(anchor.getAttribute("target")).toBe("_blank");
	});

	it("handles different variants correctly", async () => {
		// Test bold variant
		const boldPage = await newSpecPage({
			components: [Link],
			html: `<ifx-link variant="bold">Bold Link</ifx-link>`,
		});
		expect(boldPage.root.shadowRoot.querySelector("a").className).toContain(
			"bold",
		);

		// Test title variant
		const titlePage = await newSpecPage({
			components: [Link],
			html: `<ifx-link variant="title">Title Link</ifx-link>`,
		});
		expect(titlePage.root.shadowRoot.querySelector("a").className).toContain(
			"title",
		);

		// Test underlined variant
		const underlinedPage = await newSpecPage({
			components: [Link],
			html: `<ifx-link variant="underlined">Underlined Link</ifx-link>`,
		});
		expect(
			underlinedPage.root.shadowRoot.querySelector("a").className,
		).toContain("underlined");

		// Test menu variant
		const menuPage = await newSpecPage({
			components: [Link],
			html: `<ifx-link variant="menu">Menu Link</ifx-link>`,
		});
		expect(menuPage.root.shadowRoot.querySelector("a").className).toContain(
			"menu",
		);
	});

	it("handles different sizes correctly", async () => {
		// Test small size
		const smallPage = await newSpecPage({
			components: [Link],
			html: `<ifx-link size="s">Small Link</ifx-link>`,
		});
		expect(smallPage.root.shadowRoot.querySelector("a").className).toContain(
			"small",
		);

		// Test medium size
		const mediumPage = await newSpecPage({
			components: [Link],
			html: `<ifx-link size="m">Medium Link</ifx-link>`,
		});
		expect(mediumPage.root.shadowRoot.querySelector("a").className).toContain(
			"medium",
		);

		// Test large size
		const largePage = await newSpecPage({
			components: [Link],
			html: `<ifx-link size="l">Large Link</ifx-link>`,
		});
		expect(largePage.root.shadowRoot.querySelector("a").className).toContain(
			"large",
		);

		// Test extra large size
		const xlPage = await newSpecPage({
			components: [Link],
			html: `<ifx-link size="xl">Extra Large Link</ifx-link>`,
		});
		expect(xlPage.root.shadowRoot.querySelector("a").className).toContain(
			"extraLarge",
		);
	});

	it("handles disabled state correctly", async () => {
		const page = await newSpecPage({
			components: [Link],
			html: `<ifx-link href="https://example.com" disabled="true">Disabled Link</ifx-link>`,
		});

		const anchor = page.root.shadowRoot.querySelector("a");
		expect(anchor.className).toContain("disabled");
		expect(anchor.hasAttribute("href")).toBeFalsy();
		expect(anchor.hasAttribute("aria-disabled")).toBeTruthy();
	});

	it("applies download attribute when specified", async () => {
		const page = await newSpecPage({
			components: [Link],
			html: `<ifx-link href="https://example.com/file.pdf" download="downloaded-file.pdf">Download Link</ifx-link>`,
		});

		const anchor = page.root.shadowRoot.querySelector("a");
		expect(anchor.getAttribute("download")).toBe("downloaded-file.pdf");
	});

	it("applies aria-label when specified", async () => {
		const page = await newSpecPage({
			components: [Link],
			html: `<ifx-link href="https://example.com" aria-label="Visit Example Website">Link Text</ifx-link>`,
		});

		const anchor = page.root.shadowRoot.querySelector("a");
		expect(anchor.getAttribute("aria-label")).toBe("Visit Example Website");
	});

	it("trims whitespace from href and variant props", async () => {
		const page = await newSpecPage({
			components: [Link],
			html: `<ifx-link href="  https://example.com  " variant="  underlined  ">Link Text</ifx-link>`,
		});

		const anchor = page.root.shadowRoot.querySelector("a");
		expect(anchor.getAttribute("href")).toBe("https://example.com");
		expect(anchor.className).toContain("underlined");
	});

	it("correctly processes extraLarge size with underlined variant", async () => {
		const page = await newSpecPage({
			components: [Link],
			html: `<ifx-link size="xl" variant="underlined">Large Underlined Link</ifx-link>`,
		});

		const anchor = page.root.shadowRoot.querySelector("a");
		// When variant is underlined and size is xl, should use 'large' instead of 'extraLarge'
		expect(anchor.className).toContain("large");
		expect(anchor.className).not.toContain("extraLarge");
	});
});
