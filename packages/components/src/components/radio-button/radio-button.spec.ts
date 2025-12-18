import { newSpecPage } from "jest-stencil-runner";
import { RadioButton } from "./radio-button";

describe("ifx-radio-button", () => {
	it("renders with default props", async () => {
		const page = await newSpecPage({
			components: [RadioButton],
			html: `<ifx-radio-button></ifx-radio-button>`,
		});

		expect(page.root).toBeTruthy();
		const container = page.root.shadowRoot.querySelector(
			".radioButton__container",
		);
		expect(container).toBeTruthy();
		expect(container.classList.contains("s")).toBeTruthy(); // Default size is 's'

		// Check ARIA attributes
		expect(container.getAttribute("role")).toBe("radio");
		expect(container.getAttribute("aria-checked")).toBe("false");
		expect(container.getAttribute("aria-disabled")).toBe("false");

		// Check hidden input - Fixed type error by adding proper casting
		const input = page.root.shadowRoot.querySelector(
			'input[type="radio"]',
		) as HTMLInputElement;
		expect(input).toBeTruthy();
		expect(input.hidden).toBeTruthy();
	});

	it("renders checked state correctly", async () => {
		const page = await newSpecPage({
			components: [RadioButton],
			html: `<ifx-radio-button checked></ifx-radio-button>`,
		});

		// Container should have aria-checked="true"
		const container = page.root.shadowRoot.querySelector(
			".radioButton__container",
		);
		expect(container.getAttribute("aria-checked")).toBe("true");

		// Wrapper should have 'checked' class
		const wrapper = page.root.shadowRoot.querySelector(".radioButton__wrapper");
		expect(wrapper.classList.contains("checked")).toBeTruthy();

		// Mark element should be present
		const mark = page.root.shadowRoot.querySelector(
			".radioButton__wrapper-mark",
		);
		expect(mark).toBeTruthy();

		// Hidden input should be checked - Fixed type error
		const input = page.root.shadowRoot.querySelector(
			'input[type="radio"]',
		) as HTMLInputElement;
		expect(input.checked).toBeTruthy();
	});

	it("renders with different sizes", async () => {
		// Test medium size
		const page = await newSpecPage({
			components: [RadioButton],
			html: `<ifx-radio-button size="m">Medium</ifx-radio-button>`,
		});

		const container = page.root.shadowRoot.querySelector(
			".radioButton__container",
		);
		expect(container.classList.contains("m")).toBeTruthy();

		// Label should have special class for medium size
		const label = page.root.shadowRoot.querySelector(".label");
		expect(label.classList.contains("label-m")).toBeTruthy();
	});

	it("handles disabled state", async () => {
		const page = await newSpecPage({
			components: [RadioButton],
			html: `<ifx-radio-button disabled>Disabled</ifx-radio-button>`,
		});

		const container = page.root.shadowRoot.querySelector(
			".radioButton__container",
		);
		expect(container.classList.contains("disabled")).toBeTruthy();
		expect(container.getAttribute("aria-disabled")).toBe("true");
		expect(container.getAttribute("tabindex")).toBe("-1");

		// Hidden input should be disabled - Fixed type error
		const input = page.root.shadowRoot.querySelector(
			'input[type="radio"]',
		) as HTMLInputElement;
		expect(input.disabled).toBeTruthy();
	});

	it("updates fallback input when internal state changes", async () => {
		const page = await newSpecPage({
			components: [RadioButton],
			html: `<ifx-radio-button value="test" name="group"></ifx-radio-button>`,
		});

		// Get reference to fallback input
		const fallbackInput = page.root.querySelector(
			"._ifx-radiobutton-fallback",
		) as HTMLInputElement;

		// Force updateFormValue to be called first to ensure properties are set
		page.rootInstance.updateFormValue();
		await page.waitForChanges();

		// Now verify state
		expect(fallbackInput.checked).toBeFalsy();
		expect(fallbackInput.name).toBe("group");
		expect(fallbackInput.value).toBe("test");

		// Change checked state
		page.root.checked = true;
		await page.waitForChanges();

		// Fallback input should be updated
		expect(fallbackInput.checked).toBeTruthy();
	});
});
