import { newSpecPage } from "jest-stencil-runner";

jest.mock("@infineon/infineon-icons", () => ({
	getIcon: jest.fn(
		() =>
			'<svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M0 0h20v20H0z" /></svg>',
	),
}));

import { IfxIcon } from "./icon";

describe("ifx-icon", () => {
	it("renders with the default size", async () => {
		const page = await newSpecPage({
			components: [IfxIcon],
			html: `<ifx-icon icon="c-check-16"></ifx-icon>`,
		});

		const root = page.root as HTMLElement;
		const svg = root.querySelector("svg") as SVGElement;

		expect(svg).toBeTruthy();
		expect(svg.getAttribute("width")).toBe("16");
		expect(svg.getAttribute("height")).toBe("16");
	});

	it("renders with a supported fixed size", async () => {
		const page = await newSpecPage({
			components: [IfxIcon],
			html: `<ifx-icon icon="c-check-16" size="24"></ifx-icon>`,
		});

		const root = page.root as HTMLElement & { size: string };
		let svg = root.querySelector("svg") as SVGElement;

		expect(svg.getAttribute("width")).toBe("24");
		expect(svg.getAttribute("height")).toBe("24");

		root.size = "12";
		await page.waitForChanges();

		svg = root.querySelector("svg") as SVGElement;
		expect(svg.getAttribute("width")).toBe("12");
		expect(svg.getAttribute("height")).toBe("12");

		root.size = "32";
		await page.waitForChanges();

		svg = root.querySelector("svg") as SVGElement;
		expect(svg.getAttribute("width")).toBe("32");
		expect(svg.getAttribute("height")).toBe("32");
	});

	it("uses the intrinsic icon size when the size is unsupported", async () => {
		const page = await newSpecPage({
			components: [IfxIcon],
			html: `<ifx-icon icon="c-check-16" size="40"></ifx-icon>`,
		});

		const root = page.root as HTMLElement;
		const svg = root.querySelector("svg") as SVGElement;

		expect(svg.getAttribute("width")).toBe("20");
		expect(svg.getAttribute("height")).toBe("20");
	});
});
