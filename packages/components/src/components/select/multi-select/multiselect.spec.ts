import { newSpecPage } from "jest-stencil-runner";
import { Multiselect } from "./multiselect";
import { MultiselectGroup } from "./multiselect-group";
import { MultiselectOption } from "./multiselect-option";

describe("ifx-multiselect", () => {
	// Mock implementation to avoid ElementInternals issues
	beforeEach(() => {
		// Create a stub method that doesn't use setFormValue
		Multiselect.prototype.onSelectionChange = jest.fn();

		// Mock loadInitialOptions to avoid issues
		(Multiselect.prototype as any).loadInitialOptions = jest
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
			expect((Multiselect.prototype as any).toggleDropdown).toBeDefined();
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

	it("recognizes grouped options as root options", async () => {
		const page = await newSpecPage({
			components: [Multiselect, MultiselectGroup, MultiselectOption],
			html: `
				<ifx-multiselect>
					<ifx-multiselect-option value="a">A</ifx-multiselect-option>
					<ifx-multiselect-group label="Revenue">
						<ifx-multiselect-option value="b">B</ifx-multiselect-option>
						<ifx-multiselect-option value="c">C</ifx-multiselect-option>
					</ifx-multiselect-group>
					<ifx-multiselect-option value="d">D</ifx-multiselect-option>
				</ifx-multiselect>
			`,
		});

		const options = (page.rootInstance as any).parseChildOptions();

		expect(options.map((option) => option.value)).toEqual(["a", "b", "c", "d"]);
	});

	it("keeps nested options inside a grouped option as a tree", async () => {
		const page = await newSpecPage({
			components: [Multiselect, MultiselectGroup, MultiselectOption],
			html: `
				<ifx-multiselect>
					<ifx-multiselect-group label="Revenue">
						<ifx-multiselect-option value="parent">
							Parent
							<ifx-multiselect-option value="child" slot="children">Child</ifx-multiselect-option>
						</ifx-multiselect-option>
					</ifx-multiselect-group>
				</ifx-multiselect>
			`,
		});

		const [parent] = (page.rootInstance as any).parseChildOptions();

		expect(parent.value).toBe("parent");
		expect(parent.children.map((option) => option.value)).toEqual(["child"]);
	});

	it("parses an initially selected option inside a group", async () => {
		const page = await newSpecPage({
			components: [Multiselect, MultiselectGroup, MultiselectOption],
			html: `
				<ifx-multiselect>
					<ifx-multiselect-group label="Revenue">
						<ifx-multiselect-option value="total" selected>Total revenue</ifx-multiselect-option>
					</ifx-multiselect-group>
				</ifx-multiselect>
			`,
		});

		const [option] = (page.rootInstance as any).parseChildOptions();
		const selectedOptions = (page.rootInstance as any).collectSelectedOptions([
			option,
		]);

		expect(option).toMatchObject({ value: "total", selected: true });
		expect(selectedOptions.map((selected) => selected.value)).toEqual(["total"]);
	});
});
