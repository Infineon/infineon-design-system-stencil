import { newSpecPage } from "jest-stencil-runner";
import { Checkbox } from "./checkbox";

const MockInfineonIconStencil = () => {
	const el = document.createElement("mock-infineon-icon");
	el.textContent = "Mock Infineon Icon";
	return el;
};

const InfineonIconStencil = MockInfineonIconStencil;

// Mock ElementInternals setFormValue
let mockSetFormValue: jest.Mock;

beforeEach(() => {
	mockSetFormValue = jest.fn();
	// Mock attachInternals to return our mocked ElementInternals
	HTMLElement.prototype.attachInternals = jest.fn().mockReturnValue({
		setFormValue: mockSetFormValue,
	} as any);
});

afterEach(() => {
	jest.restoreAllMocks();
});

describe("ifx-checkbox", () => {
	// Helper method to simulate checkbox interaction
	// Note: In the Jest/Stencil test environment, .click() alone doesn't toggle
	// the checked state or trigger the onChange handler defined in JSX. We need to:
	// 1. Manually toggle the checked state
	// 2. Dispatch a 'change' event to trigger the onChange handler,
	//    which calls handleCheckbox() and emits the ifxChange event
	const simulateClick = async (page: any) => {
		const input = page.root.shadowRoot.querySelector(
			"#checkbox",
		) as HTMLInputElement;
		// Manually toggle the checked state
		input.checked = !input.checked;
		// Dispatch change event to trigger onChange handler
		input.dispatchEvent(new Event("change", { bubbles: true }));
		await page.waitForChanges();
	};

	it("should render", async () => {
		const { root } = await newSpecPage({
			components: [Checkbox, InfineonIconStencil],
			html: `<ifx-checkbox></ifx-checkbox>`,
		});

		expect(root).toEqualHtml(`
      <ifx-checkbox>
        <template shadowrootmode="open">
          <div class="checkbox__container">
            <input class="checkbox__input" id="checkbox" type="checkbox" value="undefined">
            <label class="checkbox-m checkbox__wrapper" for="checkbox">
            </label>
          </div>
        </template>
      </ifx-checkbox>
    `);
	});

	it("should display slotted content", async () => {
		const { root } = await newSpecPage({
			components: [Checkbox, InfineonIconStencil],
			html: `<ifx-checkbox>Test content</ifx-checkbox>`,
		});

		const slotElement = root.shadowRoot.querySelector("slot");
		const labelContent = slotElement.assignedNodes()[0].textContent;
		expect(labelContent).toBe("Test content");
	});

	it("should be checked when checked attribute is set", async () => {
		const { root } = await newSpecPage({
			components: [Checkbox, InfineonIconStencil],
			html: `<ifx-checkbox checked="true">Test content</ifx-checkbox>`,
		});

		const checkboxInput = root.shadowRoot.querySelector("input");
		expect(checkboxInput.checked).toBe(true);
	});

	it("should not be checked when checked attribute is not set", async () => {
		const { root } = await newSpecPage({
			components: [Checkbox, InfineonIconStencil],
			html: `<ifx-checkbox>Test content</ifx-checkbox>`,
		});

		const checkboxInput = root.shadowRoot.querySelector("input");
		expect(checkboxInput.checked).toBe(false);
	});

	it("should emit ifxChange event when clicked", async () => {
		const page = await newSpecPage({
			components: [Checkbox, InfineonIconStencil],
			html: `<ifx-checkbox></ifx-checkbox>`,
		});

		const checkbox = page.root as any as HTMLIfxCheckboxElement;
		const ifxChangeSpy = jest.fn();
		checkbox.addEventListener("ifxChange", ifxChangeSpy);

		await simulateClick(page);

		expect(ifxChangeSpy).toHaveBeenCalled();
	});

	it("should emit ifxError event when error prop changes", async () => {
		const page = await newSpecPage({
			components: [Checkbox, InfineonIconStencil],
			html: `<ifx-checkbox></ifx-checkbox>`,
		});

		const checkbox = page.root;
		const ifxErrorSpy = jest.fn();
		checkbox.addEventListener("ifxError", ifxErrorSpy);

		// Change error property
		checkbox.setAttribute("error", "true");
		await page.waitForChanges();

		expect(ifxErrorSpy).toHaveBeenCalled();
	});

	it("should include checked state in ifxChange event data", async () => {
		const page = await newSpecPage({
			components: [Checkbox, InfineonIconStencil],
			html: `<ifx-checkbox></ifx-checkbox>`,
		});

		const checkbox = page.root;
		let eventData = null;
		checkbox.addEventListener("ifxChange", (e) => {
			eventData = (e as CustomEvent).detail;
		});

		const input = checkbox.shadowRoot.querySelector(
			"#checkbox",
		) as HTMLInputElement;
		input.checked = true;
		input.dispatchEvent(new Event("change", { bubbles: true }));
		await page.waitForChanges();

		expect(eventData).toBe(true);
	});

	it("should not emit ifxChange when disabled", async () => {
		const page = await newSpecPage({
			components: [Checkbox, InfineonIconStencil],
			html: `<ifx-checkbox disabled="true"></ifx-checkbox>`,
		});

		const checkbox = page.root;
		const ifxChangeSpy = jest.fn();
		checkbox.addEventListener("ifxChange", ifxChangeSpy);

		await simulateClick(page);

		expect(ifxChangeSpy).not.toHaveBeenCalled();
	});

	it('should call setFormValue with "on" when checked', async () => {
		const page = await newSpecPage({
			components: [Checkbox, InfineonIconStencil],
			html: `<ifx-checkbox></ifx-checkbox>`,
		});

		// Clear any calls that happened during component initialization
		mockSetFormValue.mockClear();

		await simulateClick(page);

		expect(mockSetFormValue).toHaveBeenCalledWith("on");
	});

	it("should call setFormValue with custom value when provided", async () => {
		const page = await newSpecPage({
			components: [Checkbox, InfineonIconStencil],
			html: `<ifx-checkbox value="test-value"></ifx-checkbox>`,
		});

		// Clear any calls that happened during component initialization
		mockSetFormValue.mockClear();

		await simulateClick(page);

		expect(mockSetFormValue).toHaveBeenCalledWith("test-value");
	});

	it("should call setFormValue with null when unchecked", async () => {
		const page = await newSpecPage({
			components: [Checkbox, InfineonIconStencil],
			html: `<ifx-checkbox checked="true"></ifx-checkbox>`,
		});

		// Clear any calls that happened during component initialization
		mockSetFormValue.mockClear();

		// Click to uncheck
		await simulateClick(page);

		// Should be called with null when unchecked
		expect(mockSetFormValue).toHaveBeenCalledWith(null);
	});

	it("should reset to initial unchecked state when form is reset", async () => {
		const page = await newSpecPage({
			components: [Checkbox, InfineonIconStencil],
			html: `<ifx-checkbox></ifx-checkbox>`,
		});

		// Check the checkbox
		await simulateClick(page);
		expect((page.root as any).checked).toBe(true);

		// Clear mock calls
		mockSetFormValue.mockClear();

		// Reset form - should go back to unchecked
		const component = page.rootInstance as any;
		component.formResetCallback();
		await page.waitForChanges();

		expect((page.root as any).checked).toBe(false);
		expect(mockSetFormValue).toHaveBeenCalledWith(null);
	});

	it("should reset to initial checked state when form is reset", async () => {
		const page = await newSpecPage({
			components: [Checkbox, InfineonIconStencil],
			html: `<ifx-checkbox checked="true" value="test-value"></ifx-checkbox>`,
		});

		// Uncheck the checkbox
		await simulateClick(page);
		expect((page.root as any).checked).toBe(false);

		// Clear mock calls
		mockSetFormValue.mockClear();

		// Reset form - should go back to checked with initial value
		const component = page.rootInstance as any;
		component.formResetCallback();
		await page.waitForChanges();

		expect((page.root as any).checked).toBe(true);
		expect(mockSetFormValue).toHaveBeenCalledWith("test-value");
	});
});
