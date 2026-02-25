import { newSpecPage } from "jest-stencil-runner";
import { Spinner } from "./spinner";

describe("ifx-spinner", () => {
	it("renders with default props", async () => {
		const page = await newSpecPage({
			components: [Spinner],
			html: `<ifx-spinner></ifx-spinner>`,
		});

		const spinner = page.root.shadowRoot.querySelector(".spinner");
		expect(spinner).toBeTruthy();
		expect(spinner.getAttribute("aria-label")).toBe("Loading");

		// Default is not inverted
		const border = page.root.shadowRoot.querySelector(".border");
		expect(border).toBeTruthy();
		expect(border.classList.contains("inverted")).toBeFalsy();
	});

	it("renders with small size", async () => {
		const page = await newSpecPage({
			components: [Spinner],
			html: `<ifx-spinner size="s"></ifx-spinner>`,
		});

		const spinner = page.root.shadowRoot.querySelector(".spinner");
		expect(spinner.classList.contains("s")).toBeTruthy();
	});

	it("renders with brand variant", async () => {
		const page = await newSpecPage({
			components: [Spinner],
			html: `<ifx-spinner variant="brand"></ifx-spinner>`,
		});

		// No border div for brand variant
		const border = page.root.shadowRoot.querySelector(".border");
		expect(border).toBeFalsy();

		// Should have semiconductor element instead
		const semiconductor = page.root.shadowRoot.querySelector(".semiconductor");
		expect(semiconductor).toBeTruthy();

		// Should contain SVG
		const svg = semiconductor.querySelector("svg");
		expect(svg).toBeTruthy();
	});

	it("renders with inverted style", async () => {
		const page = await newSpecPage({
			components: [Spinner],
			html: `<ifx-spinner inverted="true"></ifx-spinner>`,
		});

		const border = page.root.shadowRoot.querySelector(".border");
		expect(border.classList.contains("inverted")).toBeTruthy();
	});

	it("renders brand variant with inverted style", async () => {
		const page = await newSpecPage({
			components: [Spinner],
			html: `<ifx-spinner variant="brand" inverted="true"></ifx-spinner>`,
		});

		const semiconductor = page.root.shadowRoot.querySelector(".semiconductor");
		expect(semiconductor.classList.contains("inverted")).toBeTruthy();
	});
});
