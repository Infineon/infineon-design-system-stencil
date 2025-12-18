import { newSpecPage } from "jest-stencil-runner";
import { Tooltip } from "./tooltip";

// Mock createPopper
jest.mock("@popperjs/core", () => ({
	createPopper: jest.fn().mockImplementation(() => ({
		destroy: jest.fn(),
		update: jest.fn(),
		setOptions: jest.fn(),
	})),
}));

describe("ifx-tooltip", () => {
	it("renders with default props", async () => {
		const page = await newSpecPage({
			components: [Tooltip],
			html: `<ifx-tooltip text="Default tooltip text">Hover me</ifx-tooltip>`,
		});

		expect(page.root).toBeTruthy();
		expect(page.root.shadowRoot).toBeTruthy();

		const tooltipContainer = page.root.shadowRoot.querySelector(
			".tooltip__container",
		);
		expect(tooltipContainer).toBeTruthy();

		// Default variant should be compact
		const tooltipCompact =
			page.root.shadowRoot.querySelector(".tooltip-compact");
		expect(tooltipCompact).toBeTruthy();
		expect(tooltipCompact.textContent).toContain("Default tooltip text");

		// By default, tooltip should not be visible
		expect(tooltipCompact.classList.contains("visible")).toBeFalsy();
	});

	it("renders with dismissible variant", async () => {
		const page = await newSpecPage({
			components: [Tooltip],
			html: `<ifx-tooltip variant="dismissible" header="Tooltip Header" text="Dismissible tooltip">Click me</ifx-tooltip>`,
		});

		const tooltipDismissible = page.root.shadowRoot.querySelector(
			".tooltip-dismissible",
		);
		expect(tooltipDismissible).toBeTruthy();

		// Check header and content
		const header = tooltipDismissible.querySelector(
			".tooltip-dismissible-header",
		);
		expect(header.textContent).toBe("Tooltip Header");

		const body = tooltipDismissible.querySelector(".tooltip-dismissible-body");
		expect(body.textContent).toBe("Dismissible tooltip");
	});

	it("renders with extended variant", async () => {
		const page = await newSpecPage({
			components: [Tooltip],
			html: `<ifx-tooltip variant="extended" header="Extended Header" text="Extended tooltip">Hover me</ifx-tooltip>`,
		});

		const tooltipExtended =
			page.root.shadowRoot.querySelector(".tooltip-extended");
		expect(tooltipExtended).toBeTruthy();

		// Check header and content
		const header = tooltipExtended.querySelector(".tooltip-extended-header");
		expect(header.textContent).toBe("Extended Header");

		const body = tooltipExtended.querySelector(".tooltip-extended-body");
		expect(body.textContent).toBe("Extended tooltip");
	});
});
