import { newSpecPage } from "jest-stencil-runner";
import { IfxSlider } from "./slider";

describe("ifx-slider", () => {
	it("renders with basic structure", async () => {
		const page = await newSpecPage({
			components: [IfxSlider],
			html: `<ifx-slider></ifx-slider>`,
		});

		// Basic rendering check
		expect(page.root).toBeTruthy();
		expect(page.root.shadowRoot).toBeTruthy();
	});

	it("sets properties from attributes", async () => {
		const page = await newSpecPage({
			components: [IfxSlider],
			html: `<ifx-slider min="10" max="200" value="75"></ifx-slider>`,
		});

		// Wait for properties to be set from attributes
		await page.waitForChanges();

		// Check that props are reflected in component instance
		expect(page.rootInstance.min).toBe(10);
		expect(page.rootInstance.max).toBe(200);
		expect(page.rootInstance.value).toBe(75);
	});

	it("sets disabled property", async () => {
		const page = await newSpecPage({
			components: [IfxSlider],
			html: `<ifx-slider disabled="true"></ifx-slider>`,
		});

		await page.waitForChanges();
		expect(page.rootInstance.disabled).toBe(true);
	});

	it("sets showPercentage property", async () => {
		const page = await newSpecPage({
			components: [IfxSlider],
			html: `<ifx-slider show-percentage="true"></ifx-slider>`,
		});

		await page.waitForChanges();
		expect(page.rootInstance.showPercentage).toBe(true);
	});

	it("sets icon properties", async () => {
		const page = await newSpecPage({
			components: [IfxSlider],
			html: `<ifx-slider left-icon="cogwheel-16" right-icon="cogwheel-16"></ifx-slider>`,
		});

		await page.waitForChanges();
		expect(page.rootInstance.leftIcon).toBe("cogwheel-16");
		expect(page.rootInstance.rightIcon).toBe("cogwheel-16");
	});

	it("sets text properties", async () => {
		const page = await newSpecPage({
			components: [IfxSlider],
			html: `<ifx-slider left-text="Min" right-text="Max"></ifx-slider>`,
		});

		await page.waitForChanges();
		expect(page.rootInstance.leftText).toBe("Min");
		expect(page.rootInstance.rightText).toBe("Max");
	});

	it("sets double slider properties", async () => {
		const page = await newSpecPage({
			components: [IfxSlider],
			html: `<ifx-slider type="double" min-value-handle="20" max-value-handle="80"></ifx-slider>`,
		});

		await page.waitForChanges();
		expect(page.rootInstance.type).toBe("double");
		expect(page.rootInstance.minValueHandle).toBe(20);
		expect(page.rootInstance.maxValueHandle).toBe(80);
	});
});
