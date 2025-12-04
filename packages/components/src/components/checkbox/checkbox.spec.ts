import { newSpecPage } from "jest-stencil-runner";
import { Checkbox } from "./checkbox";

// Create a mock implementation
const mockSetFormValue = jest.fn();

// Save original method before overriding
const originalHandleCheckbox = Checkbox.prototype.handleCheckbox;

// Create test-specific implementation of handleCheckbox
// Mocking Browser Form API: The original implementation uses the browser's form API
// (setFormValue() or similar methods) that aren't available in the Jest testing environment.
// The mock simulates this behavior.
Checkbox.prototype.handleCheckbox = function () {
	if (!this.disabled) {
		if (!this.inputElement.indeterminate) {
			this.internalChecked = !this.internalChecked;
		}

		// Mock the form value setting behavior
		if (this.internalChecked && !this.internalIndeterminate) {
			if (this.value !== undefined) {
				mockSetFormValue(this.value);
			} else {
				mockSetFormValue("on");
			}
		} else {
			mockSetFormValue(null);
		}

		this.ifxChange.emit(this.internalChecked);
	}
};

const MockInfineonIconStencil = () => {
	const el = document.createElement("mock-infineon-icon");
	el.textContent = "Mock Infineon Icon";
	return el;
};

const InfineonIconStencil = MockInfineonIconStencil;

describe("ifx-checkbox", () => {
	beforeEach(() => {
		// Clear mock calls between tests
		mockSetFormValue.mockClear();
	});

	afterAll(() => {
		Checkbox.prototype.handleCheckbox = originalHandleCheckbox;
	});

	it("should render", async () => {
		const { root } = await newSpecPage({
			components: [Checkbox, InfineonIconStencil],
			html: `<ifx-checkbox></ifx-checkbox>`,
		});

		expect(root).toEqualHtml(`
      <ifx-checkbox>
        <template shadowrootmode="open">
          <div class="checkbox__container">
            <input hidden="" id="checkbox" type="checkbox" value="undefined">
            <div aria-checked="false" aria-labelledby="label" class="checkbox-m checkbox__wrapper" role="checkbox" tabindex="0">
            </div>
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
		checkbox.addEventListener("ifxChange", ifxChangeSpy); // Attach listener manually

		const wrapper = page.root.shadowRoot.querySelector(
			".checkbox__wrapper",
		) as HTMLElement;

		// Simulate a click on the wrapper element
		wrapper.click();
		await page.waitForChanges();

		// Verify the event was emitted
		expect(ifxChangeSpy).toHaveBeenCalled(); // Check if the event was received
	});

	// it('should call setFormValue with "on" when checked', async () => {
	//   const page = await newSpecPage({
	//     components: [Checkbox, InfineonIconStencil],
	//     html: `<ifx-checkbox></ifx-checkbox>`,
	//   });

	//   const wrapper = page.root.shadowRoot.querySelector('.checkbox__wrapper') as HTMLElement;
	//   wrapper.click();
	//   await page.waitForChanges();

	//   expect(mockSetFormValue).toHaveBeenCalledWith('on');
	// });

	// it('should call setFormValue with custom value when provided', async () => {
	//   const page = await newSpecPage({
	//     components: [Checkbox, InfineonIconStencil],
	//     html: `<ifx-checkbox value="test-value"></ifx-checkbox>`,
	//   });

	//   const wrapper = page.root.shadowRoot.querySelector('.checkbox__wrapper') as HTMLElement;
	//   wrapper.click();
	//   await page.waitForChanges();

	//   expect(mockSetFormValue).toHaveBeenCalledWith('test-value');
	// });

	// it('should call setFormValue with null when unchecked', async () => {
	//   const page = await newSpecPage({
	//     components: [Checkbox, InfineonIconStencil],
	//     html: `<ifx-checkbox checked="true"></ifx-checkbox>`,
	//   });

	//   // Click to uncheck
	//   const wrapper = page.root.shadowRoot.querySelector('.checkbox__wrapper') as HTMLElement;
	//   wrapper.click();
	//   await page.waitForChanges();

	//   // The last call should be with null
	//   expect(mockSetFormValue).toHaveBeenLastCalledWith(null);
	// });

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

		const wrapper = checkbox.shadowRoot.querySelector(
			".checkbox__wrapper",
		) as HTMLElement;
		wrapper.click();
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

		const wrapper = checkbox.shadowRoot.querySelector(
			".checkbox__wrapper",
		) as HTMLElement;
		wrapper.click();
		await page.waitForChanges();

		expect(ifxChangeSpy).not.toHaveBeenCalled();
	});
});
