import { newSpecPage } from "jest-stencil-runner";
import { SearchField } from "./search-field";

describe("ifx-search-field", () => {
	it("renders with default props", async () => {
		const page = await newSpecPage({
			components: [SearchField],
			html: `<ifx-search-field></ifx-search-field>`,
		});

		expect(page.root).toBeTruthy();
		const searchField = page.root.shadowRoot.querySelector(".search-field");
		expect(searchField).toBeTruthy();

		// Check default placeholder
		const input = page.root.shadowRoot.querySelector("input");
		expect(input.getAttribute("placeholder")).toBe("Search...");

		// Check default size (not small)
		const wrapper = page.root.shadowRoot.querySelector(
			".search-field__wrapper",
		);
		expect(wrapper.classList.contains("search-field__wrapper-s")).toBeFalsy();

		// Search icon should be visible
		const searchIcon = page.root.shadowRoot.querySelector(".search-icon");
		expect(searchIcon).toBeTruthy();
		expect(searchIcon.getAttribute("icon")).toBe("search-16");

		// Delete icon should not be visible by default
		const deleteIcon = page.root.shadowRoot.querySelector(".delete-icon");
		expect(deleteIcon).toBeFalsy();
	});

	it("handles disabled state", async () => {
		const page = await newSpecPage({
			components: [SearchField],
			html: `<ifx-search-field disabled></ifx-search-field>`,
		});

		const searchField = page.root.shadowRoot.querySelector(".search-field");
		expect(searchField.hasAttribute("aria-disabled")).toBeTruthy();

		const input = page.root.shadowRoot.querySelector("input");
		expect(input.disabled).toBeTruthy();
	});

	it("renders with small size", async () => {
		const page = await newSpecPage({
			components: [SearchField],
			html: `<ifx-search-field size="s"></ifx-search-field>`,
		});

		const wrapper = page.root.shadowRoot.querySelector(
			".search-field__wrapper",
		);
		expect(wrapper.classList.contains("search-field__wrapper-s")).toBeTruthy();
	});

	it("renders with custom placeholder", async () => {
		const page = await newSpecPage({
			components: [SearchField],
			html: `<ifx-search-field placeholder="Type something..."></ifx-search-field>`,
		});

		const input = page.root.shadowRoot.querySelector("input");
		expect(input.getAttribute("placeholder")).toBe("Type something...");
	});

	it("handles input events and updates value", async () => {
		const page = await newSpecPage({
			components: [SearchField],
			html: `<ifx-search-field></ifx-search-field>`,
		});

		// Spy on the ifxInput event
		const inputEventSpy = jest.fn();
		page.win.addEventListener("ifxInput", inputEventSpy);

		// Setup input element and mock the input event
		const input = page.root.shadowRoot.querySelector("input");

		// Set the input value
		input.value = "test query";

		// Trigger the input event
		input.dispatchEvent(new Event("input"));
		await page.waitForChanges();

		// Component value should be updated
		expect(page.rootInstance.value).toBe("test query");

		// Event should have been emitted
		expect(inputEventSpy).toHaveBeenCalled();
		const emittedEvent = inputEventSpy.mock.calls[0][0];
		expect(emittedEvent.detail).toBe("test query");
	});

	it("shows delete icon when showDeleteIcon is true and value is not empty", async () => {
		const page = await newSpecPage({
			components: [SearchField],
			html: `<ifx-search-field show-delete-icon value="test"></ifx-search-field>`,
		});

		// Manually set the internal state to match what would happen after componentWillUpdate
		page.rootInstance.showDeleteIconInternalState = true;

		// Force a re-render
		await page.waitForChanges();

		// Delete icon should be visible
		const deleteIcon = page.root.shadowRoot.querySelector(".delete-icon");
		expect(deleteIcon).toBeTruthy();
		expect(deleteIcon.getAttribute("icon")).toBe("cRemove16");
	});

	it("handles delete icon click", async () => {
		const page = await newSpecPage({
			components: [SearchField],
			html: `<ifx-search-field show-delete-icon value="test"></ifx-search-field>`,
		});

		// Manually set the internal state to make the delete icon appear
		page.rootInstance.showDeleteIconInternalState = true;
		await page.waitForChanges();

		// Spy on the ifxInput event
		const inputEventSpy = jest.fn();
		page.win.addEventListener("ifxInput", inputEventSpy);

		// Find and click the delete icon
		const deleteIcon = page.root.shadowRoot.querySelector(
			".delete-icon",
		) as HTMLElement;
		expect(deleteIcon).toBeTruthy(); // Add this check to ensure icon exists
		deleteIcon.click();
		await page.waitForChanges();

		// Value should be cleared
		expect(page.rootInstance.value).toBe("");

		// Input element value should be cleared
		const input = page.root.shadowRoot.querySelector("input");
		expect(input.value).toBe("");

		// Event should have been emitted with empty string
		expect(inputEventSpy).toHaveBeenCalled();
		const emittedEvent = inputEventSpy.mock.calls[0][0];
		expect(emittedEvent.detail).toBe("");

		// Delete icon should now be hidden
		const deleteIconAfterClick =
			page.root.shadowRoot.querySelector(".delete-icon");
		expect(deleteIconAfterClick).toBeFalsy();
	});

	it("does not show delete icon when value is empty", async () => {
		const page = await newSpecPage({
			components: [SearchField],
			html: `<ifx-search-field show-delete-icon="true" value=""></ifx-search-field>`,
		});

		// Component needs to update to evaluate the delete icon
		await page.waitForChanges();

		// Delete icon should not be visible
		const deleteIcon = page.root.shadowRoot.querySelector(".delete-icon");
		expect(deleteIcon).toBeFalsy();
	});

	it("handles focus", async () => {
		const page = await newSpecPage({
			components: [SearchField],
			html: `<ifx-search-field></ifx-search-field>`,
		});

		// Spy on the ifxFocus event
		const focusEventSpy = jest.fn();
		page.win.addEventListener("ifxFocus", focusEventSpy);

		// Initially not focused
		expect(page.rootInstance.isFocused).toBeFalsy();

		// Click the wrapper to focus
		const wrapper = page.root.shadowRoot.querySelector(
			".search-field__wrapper",
		) as HTMLElement;
		wrapper.click();
		await page.waitForChanges();

		// Should now be focused
		expect(page.rootInstance.isFocused).toBeTruthy();

		// Focus event should have been emitted
		expect(focusEventSpy).toHaveBeenCalled();

		// Wrapper should have focused class
		expect(wrapper.classList.contains("focused")).toBeTruthy();
	});

	it("watches value changes and updates input", async () => {
		const page = await newSpecPage({
			components: [SearchField],
			html: `<ifx-search-field></ifx-search-field>`,
		});

		// Setup input element
		const input = page.root.shadowRoot.querySelector("input");

		// Change the value property
		page.root.value = "new value";
		await page.waitForChanges();

		// Input element should be updated
		expect(input.value).toBe("new value");
	});

	it("handles outside click to hide dropdown", async () => {
		const page = await newSpecPage({
			components: [SearchField],
			html: `<ifx-search-field></ifx-search-field>`,
		});

		// Set the component as having a dropdown open
		page.rootInstance.showDropdown = true;
		await page.waitForChanges();

		// Mock the input and dropdown elements
		const input = page.root.shadowRoot.querySelector("input");
		page.rootInstance.inputElement = input;
		page.rootInstance.dropdownElement = null; // No dropdown element in DOM

		// Create a mousedown event outside the input
		const outsideClickEvent = new MouseEvent("mousedown");

		// Mock composedPath to return a path that doesn't include the input
		Object.defineProperty(outsideClickEvent, "composedPath", {
			value: () => [document.body],
			writable: true,
		});

		// Trigger the event
		document.dispatchEvent(outsideClickEvent);
		await page.waitForChanges();

		// Dropdown should be hidden
		expect(page.rootInstance.showDropdown).toBeFalsy();
	});

	it("sets maxlength on input when provided", async () => {
		const page = await newSpecPage({
			components: [SearchField],
			html: `<ifx-search-field maxlength="10"></ifx-search-field>`,
		});

		const input = page.root.shadowRoot.querySelector("input");
		expect(input.getAttribute("maxlength")).toBe("10");
	});

	it("sets autocomplete attribute on input", async () => {
		const page = await newSpecPage({
			components: [SearchField],
			html: `<ifx-search-field autocomplete="off"></ifx-search-field>`,
		});

		const input = page.root.shadowRoot.querySelector("input");
		expect(input.getAttribute("autocomplete")).toBe("off");
	});
});
