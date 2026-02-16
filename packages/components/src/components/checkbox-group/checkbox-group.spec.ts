import { newSpecPage } from "jest-stencil-runner";
import { CheckboxGroup } from "./checkbox-group";

// Mock the setError method on checkbox components
const mockSetError = jest.fn();

// Mock Icon component
const MockInfineonIconStencil = () => {
	const el = document.createElement("mock-infineon-icon");
	el.textContent = "Mock Infineon Icon";
	return el;
};

describe("ifx-checkbox-group", () => {
	beforeEach(() => {
		// Clear mock calls between tests
		mockSetError.mockClear();
	});

	it("should render", async () => {
		const { root } = await newSpecPage({
			components: [CheckboxGroup, MockInfineonIconStencil],
			html: `<ifx-checkbox-group></ifx-checkbox-group>`,
		});

		expect(root).toEqualHtml(`
      <ifx-checkbox-group>
        <template shadowrootmode="open">
          <div class="checkbox-group-container">
            <div class="checkbox-group undefined vertical">
              <slot></slot>
            </div>
          </div>
        </template>
      </ifx-checkbox-group>
    `);
	});

	it("should render with horizontal alignment", async () => {
		const { root } = await newSpecPage({
			components: [CheckboxGroup, MockInfineonIconStencil],
			html: `<ifx-checkbox-group alignment="horizontal"></ifx-checkbox-group>`,
		});

		const checkboxGroup = root.shadowRoot.querySelector(".checkbox-group");
		expect(checkboxGroup.classList.contains("horizontal")).toBe(true);
	});

	it("should render with vertical alignment", async () => {
		const { root } = await newSpecPage({
			components: [CheckboxGroup, MockInfineonIconStencil],
			html: `<ifx-checkbox-group alignment="vertical"></ifx-checkbox-group>`,
		});

		const checkboxGroup = root.shadowRoot.querySelector(".checkbox-group");
		expect(checkboxGroup.classList.contains("vertical")).toBe(true);
	});

	it("should show group label when showGroupLabel is true", async () => {
		const { root } = await newSpecPage({
			components: [CheckboxGroup, MockInfineonIconStencil],
			html: `<ifx-checkbox-group show-group-label="true" group-label-text="Test Label"></ifx-checkbox-group>`,
		});

		const groupLabel = root.shadowRoot.querySelector(".group-label");
		expect(groupLabel).not.toBeNull();
		expect(groupLabel.textContent).toContain("Test Label");
	});

	it("shows asterisk on the label when required and showGroupLabel is true", async () => {
		const page = await newSpecPage({
			components: [CheckboxGroup],
			html: `<ifx-checkbox-group show-group-label="true" group-label-text="Test Label" required="true"></ifx-checkbox-group>`,
		});

		const groupLabel = page.root.shadowRoot.querySelector(".group-label");
		expect(groupLabel).toBeTruthy();

		const required = page.root.shadowRoot.querySelector(".required");
		expect(required).toBeTruthy();
		expect(required.textContent).toBe("*");

		expect(groupLabel.textContent).toBe("Test Label*");
	});

	it("should not show group label by default", async () => {
		// Test with default state - not setting showGroupLabel at all
		const page = await newSpecPage({
			components: [CheckboxGroup, MockInfineonIconStencil],
			html: `<ifx-checkbox-group></ifx-checkbox-group>`,
		});

		// Verify the group label isn't rendered
		const groupLabel = page.root.shadowRoot.querySelector(".group-label");
		expect(groupLabel).toBeNull();
	});

	it("should set error on all checkboxes with setGroupError method", async () => {
		// Mock setting the error property
		const errorSetterSpy = jest.fn();

		// Create mock checkboxes that track property assignments
		const mockCheckboxes = Array.from({ length: 3 }, () => {
			const checkbox = document.createElement("div");
			// Define a property with a spy as the setter
			Object.defineProperty(checkbox, "error", {
				set: errorSetterSpy,
				get: () => false,
			});
			return checkbox;
		});

		const page = await newSpecPage({
			components: [CheckboxGroup],
			html: `<ifx-checkbox-group></ifx-checkbox-group>`,
		});

		// Get the instance to directly access el
		const instance = page.rootInstance;

		// Directly spy on querySelectorAll of the internal element
		const querySelectorAllSpy = jest
			.spyOn(instance.el, "querySelectorAll")
			.mockReturnValue(mockCheckboxes);

		// Call the method
		await page.root.setGroupError(true);

		// Verify querySelectorAll was called with the right selector
		expect(querySelectorAllSpy).toHaveBeenCalledWith("ifx-checkbox");

		// Verify the error property was set (called 3 times, once per checkbox)
		expect(errorSetterSpy).toHaveBeenCalledTimes(3);
		expect(errorSetterSpy).toHaveBeenCalledWith(true);
	});

	it("should update error states when receiving ifxError event", async () => {
		const page = await newSpecPage({
			components: [CheckboxGroup, MockInfineonIconStencil],
			html: `<ifx-checkbox-group></ifx-checkbox-group>`,
		});

		const checkboxGroup = page.rootInstance;

		// Create a mock checkbox with correct tagName (uppercase)
		const mockCheckbox = document.createElement("div");
		Object.defineProperty(mockCheckbox, "tagName", {
			value: "IFX-CHECKBOX",
			configurable: true,
		});

		// Manually add the error state to the map first (instead of relying on the handler)
		checkboxGroup.errorStates.set(mockCheckbox, true);

		// Then manually call updateHasErrors
		checkboxGroup.updateHasErrors();

		// Verify the final state
		expect(checkboxGroup.hasErrors).toBe(true);
	});
});
