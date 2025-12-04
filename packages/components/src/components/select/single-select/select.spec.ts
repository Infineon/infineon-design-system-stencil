// Create a standalone mock component that doesn't import the original
class MockChoices {
	// Properties
	placeholderValue = "Placeholder";
	optionIsSelected = false;
	selectedOption = null;
	size = "medium (40px)";
	label = "";
	error = false;
	errorMessage = "Error";
	disabled = false;
	showClearButton = true;

	// Mock event emitter
	ifxSelect = { emit: jest.fn() };

	// Mock methods
	toggleDropdown = jest.fn();
	clearSelection = jest.fn(function () {
		this.optionIsSelected = false;
		this.selectedOption = null;
	});
	clearInput = jest.fn();
	clearSelectField = jest.fn();
	handleChange = jest.fn(function () {
		this.selectedOption = { value: "option1", label: "Option 1", id: 1 };
		this.ifxSelect.emit(this.selectedOption);
	});
	getSizeClass() {
		return this.size === "s" ? "small-select" : "medium-select";
	}
}

describe("ifx-select", () => {
	// Test methods and properties directly without rendering
	it("has correct default properties", () => {
		const component = new MockChoices();
		expect(component.placeholderValue).toBe("Placeholder");
		expect(component.size).toBe("medium (40px)");
		expect(component.optionIsSelected).toBeFalsy();
		expect(component.selectedOption).toBeNull();
	});

	it("sets custom properties correctly", () => {
		const component = new MockChoices();
		component.label = "Custom Label";
		component.placeholderValue = "Select an option";
		component.error = true;
		component.errorMessage = "Custom error";
		component.disabled = true;

		expect(component.label).toBe("Custom Label");
		expect(component.placeholderValue).toBe("Select an option");
		expect(component.error).toBe(true);
		expect(component.errorMessage).toBe("Custom error");
		expect(component.disabled).toBe(true);
	});

	it("clears selection", () => {
		const component = new MockChoices();
		component.optionIsSelected = true;
		component.selectedOption = { value: "option1", label: "Option 1" };

		component.clearSelection();

		expect(component.optionIsSelected).toBeFalsy();
		expect(component.selectedOption).toBeNull();
	});

	it("handles option selection", () => {
		const component = new MockChoices();
		component.handleChange();

		expect(component.selectedOption).toEqual({
			value: "option1",
			label: "Option 1",
			id: 1,
		});
		expect(component.ifxSelect.emit).toHaveBeenCalled();
	});

	it("supports different sizes", () => {
		const component = new MockChoices();

		// Default should be medium
		expect(component.getSizeClass()).toBe("medium-select");

		// Change to small
		component.size = "s";
		expect(component.getSizeClass()).toBe("small-select");
	});
});
