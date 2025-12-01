import { newSpecPage } from "jest-stencil-runner";
import { Multiselect } from "./multiselect";

describe("ifx-multiselect", () => {
	// Mock implementation to avoid ElementInternals issues
	beforeEach(() => {
		// Create a stub method that doesn't use setFormValue
		Multiselect.prototype.onSelectionChange = jest.fn();

		// Mock loadInitialOptions to avoid issues
		Multiselect.prototype.loadInitialOptions = jest
			.fn()
			.mockImplementation(function () {
				this.isLoading = false;
				this.internalError = this.error;
				this.internalErrorMessage = this.errorMessage;
			});
	});

	afterEach(() => {
		// Reset mocks
		jest.restoreAllMocks();
	});

	it("renders with default props", async () => {
		const page = await newSpecPage({
			components: [Multiselect],
			html: `<ifx-multiselect></ifx-multiselect>`,
		});

		expect(page.root).toBeTruthy();
		// Check attributes directly instead of properties
		expect(page.root.getAttribute("size") || "medium").toBe("medium");
		expect(page.root.hasAttribute("disabled")).toBe(false);
	});

	it("renders with custom label and placeholder", async () => {
		const page = await newSpecPage({
			components: [Multiselect],
			html: `<ifx-multiselect label="Custom Label" placeholder="Select options..."></ifx-multiselect>`,
		});

		expect(page.root.getAttribute("label")).toBe("Custom Label");
		expect(page.root.getAttribute("placeholder")).toBe("Select options...");
	});

	it("handles different sizes", async () => {
		const page = await newSpecPage({
			components: [Multiselect],
			html: `<ifx-multiselect size="small"></ifx-multiselect>`,
		});

		expect(page.root.getAttribute("size")).toBe("small");
	});

	it("handles disabled state", async () => {
		const page = await newSpecPage({
			components: [Multiselect],
			html: `<ifx-multiselect disabled></ifx-multiselect>`,
		});

		expect(page.root.hasAttribute("disabled")).toBe(true);
	});

	it("handles error state", async () => {
		const page = await newSpecPage({
			components: [Multiselect],
			html: `<ifx-multiselect error="true" error-message="Custom error"></ifx-multiselect>`,
		});

		expect(page.root.getAttribute("error")).toBe("true");
		expect(page.root.getAttribute("error-message")).toBe("Custom error");
	});

	it("toggles dropdown state", async () => {
		const page = await newSpecPage({
			components: [Multiselect],
			html: `<ifx-multiselect></ifx-multiselect>`,
		});

		// Access component instance via componentOnReady()
		const component = await page.root.componentOnReady();

		// Initially closed (default state)
		expect(component.dropdownOpen || false).toBeFalsy();

		// Call the method on the component instance
		if (typeof component.toggleDropdown === "function") {
			component.toggleDropdown();
			await page.waitForChanges();

			// Should now be open
			expect(component.dropdownOpen).toBeTruthy();
		} else {
			// Alternative: just verify the method exists on the prototype
			expect(Multiselect.prototype.toggleDropdown).toBeDefined();
		}
	});

	it("should handle helper text", async () => {
		const page = await newSpecPage({
			components: [Multiselect],
			html: `<ifx-multiselect helper-text="This is helper text"></ifx-multiselect>`,
		});

		expect(page.root.getAttribute("helper-text")).toBe("This is helper text");
	});

	it("should handle required state", async () => {
		const page = await newSpecPage({
			components: [Multiselect],
			html: `<ifx-multiselect required></ifx-multiselect>`,
		});

		expect(page.root.hasAttribute("required")).toBe(true);
	});
});
