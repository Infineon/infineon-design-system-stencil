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

	it("updates visible suggestions while typing when consumer provides new suggestions", async () => {
		const page = await newSpecPage({
			components: [SearchField],
			html: `<ifx-search-field show-suggestions></ifx-search-field>`,
		});

		(page.root as HTMLIfxSearchFieldElement).suggestions = [
			{ id: "a1", text: "Alpha one", type: "suggestion" },
		];
		await page.waitForChanges();

		const input = page.root.shadowRoot.querySelector("input");
		input.value = "a";
		input.dispatchEvent(new Event("input"));
		await page.waitForChanges();

		expect(page.rootInstance.filteredSuggestions.map((item) => item.id)).toEqual([
			"a1",
		]);

		(page.root as HTMLIfxSearchFieldElement).suggestions = [
			{ id: "b1", text: "Beta one", type: "suggestion" },
			{ id: "b2", text: "Beta two", type: "suggestion" },
		];
		input.value = "ab";
		input.dispatchEvent(new Event("input"));
		await page.waitForChanges();

		expect(page.rootInstance.value).toBe("ab");
		expect(page.rootInstance.filteredSuggestions.map((item) => item.id)).toEqual([
			"b1",
			"b2",
		]);
	});

	it("uses external suggestions as provided without internal includes filtering", async () => {
		const page = await newSpecPage({
			components: [SearchField],
			html: `<ifx-search-field show-suggestions></ifx-search-field>`,
		});

		(page.root as HTMLIfxSearchFieldElement).suggestions = [
			{ id: "1", text: "find matches", type: "suggestion" },
			{ id: "2", text: "related concept", type: "suggestion" },
			{ id: "3", text: "semantic result", type: "suggestion" },
		];
		page.root.value = "find";
		await page.waitForChanges();

		expect(page.rootInstance.filteredSuggestions.map((item) => item.id)).toEqual([
			"1",
			"2",
			"3",
		]);
	});

	it("shows external suggestions when query is empty", async () => {
		const page = await newSpecPage({
			components: [SearchField],
			html: `<ifx-search-field show-suggestions></ifx-search-field>`,
		});

		(page.root as HTMLIfxSearchFieldElement).suggestions = [
			{ id: "e1", text: "Top pick", type: "suggestion" },
			{ id: "e2", text: "Trending", type: "suggestion" },
		];
		page.root.value = "";
		await page.waitForChanges();

		expect(page.rootInstance.filteredSuggestions.map((item) => item.id)).toEqual([
			"e1",
			"e2",
		]);
	});

	it("merges history and suggestions with history replacing duplicate suggestion data", async () => {
		const page = await newSpecPage({
			components: [SearchField],
			html: `<ifx-search-field></ifx-search-field>`,
		});

		(page.rootInstance as any).searchHistory = ["shared"];

		(page.root as HTMLIfxSearchFieldElement).suggestions = [
			{ id: "s1", text: "shared", type: "suggestion" },
			{ id: "s2", text: "external only", type: "suggestion" },
		];
		page.root.value = "";
		(page.rootInstance as any).updateSuggestions();
		await page.waitForChanges();

		expect(page.rootInstance.filteredSuggestions.map((item) => item.text)).toEqual([
			"shared",
			"external only",
		]);
		expect(page.rootInstance.filteredSuggestions.map((item) => item.type)).toEqual([
			"history",
			"suggestion",
		]);
	});

	it("collects and displays history when suggestions are disabled", async () => {
		const historyKey = "ifx-search-history-only-test";
		localStorage.removeItem(historyKey);

		const page = await newSpecPage({
			components: [SearchField],
			html: `<ifx-search-field history-key="${historyKey}"></ifx-search-field>`,
		});

		page.root.value = "history only query";
		await page.waitForChanges();

		(page.rootInstance as any).handleSearch();
		await page.waitForChanges();

		expect((page.rootInstance as any).searchHistory).toEqual([
			"history only query",
		]);

		(page.rootInstance as any).focusInput();
		await page.waitForChanges();

		expect(page.rootInstance.filteredSuggestions.map((item) => item.text)).toEqual([
			"history only query",
		]);
		expect(
			page.rootInstance.filteredSuggestions.every(
				(item) => item.type === "history",
			),
		).toBeTruthy();
		expect(page.rootInstance.showDropdown).toBeTruthy();

		localStorage.removeItem(historyKey);
	});

	it("shows external suggestions when history is disabled", async () => {
		const page = await newSpecPage({
			components: [SearchField],
			html: `<ifx-search-field show-suggestions></ifx-search-field>`,
		});

		(page.root as HTMLIfxSearchFieldElement).enableHistory = false;
		(page.root as HTMLIfxSearchFieldElement).suggestions = [
			{ id: "s1", text: "Search result one", type: "suggestion" },
			{ id: "s2", text: "Search result two", type: "suggestion" },
		];
		await page.waitForChanges();

		const input = page.root.shadowRoot.querySelector("input");
		input.value = "search";
		input.dispatchEvent(new Event("input"));
		await page.waitForChanges();

		expect(page.rootInstance.filteredSuggestions.map((item) => item.id)).toEqual([
			"s1",
			"s2",
		]);
		expect(
			page.rootInstance.filteredSuggestions.every(
				(item) => item.type === "suggestion",
			),
		).toBeTruthy();

		(page.rootInstance as any).handleSearch();
		await page.waitForChanges();
		expect((page.rootInstance as any).searchHistory).toEqual([]);
	});

	it("combines external suggestions and history when both are enabled", async () => {
		const historyKey = "ifx-search-combined-test";
		localStorage.removeItem(historyKey);

		const page = await newSpecPage({
			components: [SearchField],
			html: `<ifx-search-field show-suggestions history-key="${historyKey}"></ifx-search-field>`,
		});

		(page.rootInstance as any).searchHistory = ["recent search"];
		(page.root as HTMLIfxSearchFieldElement).suggestions = [
			{ id: "r1", text: "ranked result", type: "suggestion" },
		];
		page.root.value = "";
		(page.rootInstance as any).updateSuggestions();
		await page.waitForChanges();

		expect(page.rootInstance.filteredSuggestions.map((item) => item.text)).toEqual([
			"ranked result",
			"recent search",
		]);
		expect(page.rootInstance.filteredSuggestions.map((item) => item.type)).toEqual([
			"suggestion",
			"history",
		]);

		localStorage.removeItem(historyKey);
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

	it("adds to history on Enter even when dropdown is closed", async () => {
		const historyKey = "ifx-search-enter-submit-test";
		localStorage.removeItem(historyKey);

		const page = await newSpecPage({
			components: [SearchField],
			html: `<ifx-search-field history-key="${historyKey}" enable-history="true" show-suggestions="false"></ifx-search-field>`,
		});

		page.root.value = "submitted from enter";
		await page.waitForChanges();

		expect(page.rootInstance.showDropdown).toBeFalsy();

		const enterEvent = new KeyboardEvent("keydown", { key: "Enter" });
		(page.rootInstance as any).handleKeyDown(enterEvent);
		await page.waitForChanges();

		expect((page.rootInstance as any).searchHistory).toEqual([
			"submitted from enter",
		]);

		localStorage.removeItem(historyKey);
	});
});
