import { newSpecPage } from "jest-stencil-runner";
import { IfxSlider } from "./slider";

let mockSetFormValue: jest.Mock;

beforeEach(() => {
	mockSetFormValue = jest.fn();
	HTMLElement.prototype.attachInternals = jest.fn().mockReturnValue({
		setFormValue: mockSetFormValue,
	});
});

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

	it("writes single slider value to form internals on input", async () => {
		const page = await newSpecPage({
			components: [IfxSlider],
			html: `<ifx-slider min="0" max="100" value="25"></ifx-slider>`,
		});

		const sliderInput = page.root.shadowRoot.querySelector("input[type='range']") as HTMLInputElement;
		sliderInput.value = "45";
		mockSetFormValue.mockClear();
		sliderInput.dispatchEvent(new Event("input"));
		await page.waitForChanges();

		expect(mockSetFormValue).toHaveBeenCalledWith("45");
	});

	it("updates public value on single slider input", async () => {
		const page = await newSpecPage({
			components: [IfxSlider],
			html: `<ifx-slider min="0" max="100" value="25"></ifx-slider>`,
		});

		const sliderInput = page.root.shadowRoot.querySelector("input[type='range']") as HTMLInputElement;
		sliderInput.value = "55";
		sliderInput.dispatchEvent(new Event("input"));
		await page.waitForChanges();

		expect(page.rootInstance.value).toBe(55);
	});

	it("writes range slider values to form internals on input", async () => {
		const page = await newSpecPage({
			components: [IfxSlider],
			html: `<ifx-slider type="double" min="0" max="100" min-value-handle="20" max-value-handle="80"></ifx-slider>`,
		});

		const maxSlider = page.root.shadowRoot.querySelector("#max-slider") as HTMLInputElement;
		maxSlider.value = "70";
		mockSetFormValue.mockClear();
		maxSlider.dispatchEvent(new Event("input"));
		await page.waitForChanges();

		expect(mockSetFormValue).toHaveBeenCalledWith(
			JSON.stringify({ min: 20, max: 70 }),
		);
	});

	it("restores initial value on form reset", async () => {
		const page = await newSpecPage({
			components: [IfxSlider],
			html: `<ifx-slider min="0" max="100" value="30"></ifx-slider>`,
		});

		const sliderInput = page.root.shadowRoot.querySelector("input[type='range']") as HTMLInputElement;
		sliderInput.value = "90";
		sliderInput.dispatchEvent(new Event("input"));
		await page.waitForChanges();

		mockSetFormValue.mockClear();
		(page.rootInstance as IfxSlider).formResetCallback();
		await page.waitForChanges();

		expect((page.rootInstance as IfxSlider).internalValue).toBe(30);
		expect(mockSetFormValue).toHaveBeenCalledWith("30");
	});
});
