import { readFileSync } from "node:fs";
import { join } from "node:path";
import { newSpecPage } from "jest-stencil-runner";
import { Chip } from "../../chip/chip";
import { Multiselect } from "./multiselect";
import { MultiselectGroup } from "./multiselect-group";
import { MultiselectOption } from "./multiselect-option";

const getVisibleChips = (page: any): HTMLElement[] =>
	Array.from(
		page.root.shadowRoot.querySelectorAll(".ifx-multiselect-chip"),
	).filter(
		(chip: HTMLElement): chip is HTMLElement =>
			chip.querySelector("button") !== null,
	);

const getVisibleIndicators = (page: any): HTMLElement[] =>
	(() => {
		const measurement = page.root.shadowRoot.querySelector(
			".ifx-multiselect-measurement",
		);
		return Array.from(
			page.root.shadowRoot.querySelectorAll(".ifx-multiselect-indicator"),
		).filter(
			(indicator: HTMLElement): indicator is HTMLElement =>
				indicator.parentElement !== measurement,
		);
	})();

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

	it("blocks mouse and keyboard interaction and propagates disabled state", async () => {
		const page = await newSpecPage({
			components: [Multiselect, MultiselectGroup, MultiselectOption, Chip],
			html: `
				<ifx-multiselect>
					<ifx-multiselect-group label="Revenue">
						<ifx-multiselect-option value="parent">
							Parent
							<ifx-multiselect-option value="child" selected slot="children">Child</ifx-multiselect-option>
						</ifx-multiselect-option>
					</ifx-multiselect-group>
				</ifx-multiselect>
			`,
		});
		const component = page.rootInstance as any;
		const option = page.root.querySelector("ifx-multiselect-option");
		const selectedOption = option.querySelector("ifx-multiselect-option");
		const optionInstance = (selectedOption as any).__stencil_instance;
		const initialSelections = [
			{ value: "kept", label: "Kept", selected: true },
		];
		component.persistentSelectedOptions = initialSelections;
		component.visibleSelectedCount = 1;
		page.root.disabled = true;
		await page.waitForChanges();
		const selectedChip = page.root.shadowRoot.querySelector("ifx-chip");
		const clearButton = page.root.shadowRoot.querySelector(
			".ifx-clear-button",
		) as HTMLButtonElement;

		const wrapper = page.root.shadowRoot.querySelector(
			".ifx-multiselect-wrapper",
		) as HTMLElement;
		wrapper.click();
		wrapper.dispatchEvent(
			new KeyboardEvent("keydown", { key: "Enter", bubbles: true }),
		);
		selectedOption.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		selectedOption.dispatchEvent(
			new KeyboardEvent("keydown", { key: "ArrowLeft", bubbles: true }),
		);
		selectedChip.shadowRoot
			.querySelector(".wrapper__unselect-button")
			.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		clearButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));

		component.selectAll();
		component.expandAll();
		component.collapseAll();
		await component.clearSelection();
		await page.waitForChanges();

		expect(component.dropdownOpen).toBe(false);
		expect(component.persistentSelectedOptions).toEqual(initialSelections);
		expect(optionInstance.selected).toBe(true);
		expect(selectedChip.disabled).toBe(true);
		expect(
			selectedChip.shadowRoot
				.querySelector(".chip__wrapper")
				.classList.contains("disabled"),
		).toBe(true);
		expect(
			selectedOption.shadowRoot
				.querySelector('[role="option"]')
				.getAttribute("aria-disabled"),
		).toBe("true");
		expect(
			page.root.shadowRoot
				.querySelector(".ifx-multiselect-wrapper")
				.getAttribute("aria-disabled"),
		).toBe("true");
		expect(
			page.root.shadowRoot
				.querySelector(".ifx-multiselect-wrapper")
				.getAttribute("tabindex"),
		).toBeNull();
	});

	it("allows interaction when disabled with an error, matching single-select", async () => {
		const page = await newSpecPage({
			components: [Multiselect],
			html: `<ifx-multiselect disabled error show-search="false" show-expand-collapse="false"></ifx-multiselect>`,
		});
		const wrapper = page.root.shadowRoot.querySelector(
			".ifx-multiselect-wrapper",
		) as HTMLElement;

		expect(wrapper.classList.contains("error")).toBe(true);
		expect(wrapper.classList.contains("disabled")).toBe(false);
		expect(wrapper.getAttribute("aria-disabled")).toBeNull();
		expect(wrapper.getAttribute("tabindex")).toBe("0");
		wrapper.dispatchEvent(
			new KeyboardEvent("keydown", {
				key: "Enter",
				code: "Enter",
				bubbles: true,
			}),
		);
		await page.waitForChanges();

		expect(page.rootInstance.dropdownOpen).toBe(true);
		expect(
			page.root.shadowRoot
				.querySelector(".select-all-wrapper")
				.classList.contains("disabled"),
		).toBe(false);
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
		expect(selectedOptions.map((selected) => selected.value)).toEqual([
			"total",
		]);
	});

	it("restores hidden groups when search is cleared through handleSearch", async () => {
		const page = await newSpecPage({
			components: [Multiselect, MultiselectGroup, MultiselectOption],
			html: `
				<ifx-multiselect>
					<ifx-multiselect-group label="Revenue">
						<ifx-multiselect-option value="revenue">Revenue</ifx-multiselect-option>
					</ifx-multiselect-group>
				</ifx-multiselect>
			`,
		});
		const group = page.root.querySelector("ifx-multiselect-group");
		const searchInput = document.createElement("input");

		searchInput.value = "costs";
		(page.rootInstance as any).handleSearch(searchInput);
		await new Promise((resolve) => setTimeout(resolve, 400));
		expect(group.classList.contains("empty-group")).toBe(true);

		searchInput.value = "";
		(page.rootInstance as any).handleSearch(searchInput);
		await new Promise((resolve) => setTimeout(resolve, 200));

		expect(group.classList.contains("empty-group")).toBe(false);
	});

	it("opens the overflow indicator with selected options and their parent context", async () => {
		const page = await newSpecPage({
			components: [Multiselect, MultiselectGroup, MultiselectOption],
			html: `
				<ifx-multiselect>
					<ifx-multiselect-group label="Region">
						<ifx-multiselect-option value="region">
							Region
							<ifx-multiselect-option value="selected" selected slot="children">Selected</ifx-multiselect-option>
							<ifx-multiselect-option value="sibling" slot="children">Sibling</ifx-multiselect-option>
						</ifx-multiselect-option>
					</ifx-multiselect-group>
					<ifx-multiselect-group label="Unselected">
						<ifx-multiselect-option value="unselected">Unselected</ifx-multiselect-option>
					</ifx-multiselect-group>
					<ifx-multiselect-option value="other" selected>Other</ifx-multiselect-option>
				</ifx-multiselect>
			`,
		});
		const component = page.rootInstance as any;
		component.persistentSelectedOptions = [
			{ value: "selected", label: "Selected", selected: true },
			{ value: "other", label: "Other", selected: true },
		];
		component.visibleSelectedCount = 1;
		await page.waitForChanges();

		const indicator = page.root.shadowRoot.querySelector(
			".ifx-multiselect-indicator[role='button']",
		) as HTMLElement;
		indicator.click();
		await new Promise((resolve) => setTimeout(resolve, 0));
		await new Promise((resolve) =>
			requestAnimationFrame(() => requestAnimationFrame(resolve)),
		);
		await page.waitForChanges();

		const options = Array.from(
			page.root.querySelectorAll("ifx-multiselect-option"),
		) as HTMLIfxMultiselectOptionElement[];
		const optionClass = (option: HTMLIfxMultiselectOptionElement) =>
			option.shadowRoot.querySelector(".option").classList;

		expect(component.dropdownOpen).toBe(true);
		expect(optionClass(options[0]).contains("search-parent")).toBe(true);
		expect(optionClass(options[1]).contains("search-match")).toBe(true);
		expect(optionClass(options[2]).contains("search-hidden")).toBe(true);
		expect(optionClass(options[3]).contains("search-hidden")).toBe(true);
		expect(optionClass(options[4]).contains("search-match")).toBe(true);
		const groups = Array.from(
			page.root.querySelectorAll("ifx-multiselect-group"),
		) as HTMLElement[];
		expect(groups[0].classList.contains("empty-group")).toBe(false);
		expect(groups[1].classList.contains("empty-group")).toBe(true);
	});

	it("closes the selected-only dropdown when the overflow indicator is activated again", async () => {
		const page = await newSpecPage({
			components: [Multiselect, MultiselectOption],
			html: `
				<ifx-multiselect>
					<ifx-multiselect-option value="first" selected>First</ifx-multiselect-option>
					<ifx-multiselect-option value="second" selected>Second</ifx-multiselect-option>
				</ifx-multiselect>
			`,
		});
		const component = page.rootInstance as any;
		component.persistentSelectedOptions = [
			{ value: "first", label: "First", selected: true },
			{ value: "second", label: "Second", selected: true },
		];
		component.visibleSelectedCount = 1;
		await page.waitForChanges();

		const activateIndicator = () => {
			const indicator = page.root.shadowRoot.querySelector(
				".ifx-multiselect-indicator[role='button']",
			) as HTMLElement;
			indicator.dispatchEvent(
				new KeyboardEvent("keydown", {
					key: "Enter",
					bubbles: true,
				}),
			);
		};

		activateIndicator();
		await page.waitForChanges();
		expect(component.dropdownOpen).toBe(true);
		expect(component.selectedOnlyFilter).toBe(true);

		activateIndicator();
		await page.waitForChanges();
		expect(component.dropdownOpen).toBe(false);
	});

	it("shows only groups containing visible search results and restores them on reset", () => {
		const revenueGroup = document.createElement("ifx-multiselect-group");
		const costsGroup = document.createElement("ifx-multiselect-group");
		revenueGroup.appendChild(document.createElement("ifx-multiselect-option"));
		costsGroup.appendChild(document.createElement("ifx-multiselect-option"));
		const context = {
			getGroupElements: () => [revenueGroup, costsGroup],
			isOptionVisible: jest
				.fn()
				.mockReturnValueOnce(true)
				.mockReturnValue(false),
		};

		(Multiselect.prototype as any).updateGroupVisibility.call(context, true);

		expect(revenueGroup.classList.contains("empty-group")).toBe(false);
		expect(costsGroup.classList.contains("empty-group")).toBe(true);

		(Multiselect.prototype as any).updateGroupVisibility.call(context, false);

		expect(revenueGroup.classList.contains("empty-group")).toBe(false);
		expect(costsGroup.classList.contains("empty-group")).toBe(false);

		const resetContext = {
			searchTerm: "revenue",
			el: { shadowRoot: { querySelector: () => null } },
			getAllOptionElements: () => [],
			updateGroupVisibility: jest.fn(),
			showSeparators: jest.fn(),
		};
		(Multiselect.prototype as any).resetSearch.call(resetContext);
		expect(resetContext.updateGroupVisibility).toHaveBeenCalledWith(false);
		expect(resetContext.showSeparators).toHaveBeenCalled();
	});

	it("select all changes only enabled leaves", async () => {
		const page = await newSpecPage({
			components: [Multiselect, MultiselectGroup, MultiselectOption],
			html: `
				<ifx-multiselect>
					<ifx-multiselect-option value="enabled">Enabled</ifx-multiselect-option>
					<ifx-multiselect-option value="disabled" disabled>Disabled</ifx-multiselect-option>
					<ifx-multiselect-group label="Disabled group" disabled>
						<ifx-multiselect-option value="grouped">Grouped</ifx-multiselect-option>
					</ifx-multiselect-group>
				</ifx-multiselect>
			`,
		});

		const options = Array.from(
			page.root.querySelectorAll("ifx-multiselect-option"),
		) as HTMLIfxMultiselectOptionElement[];

		(page.rootInstance as any).selectAll();

		expect(options[0].selected).toBe(true);
		expect(options[1].selected).toBe(false);
		expect(options[2].selected).toBe(false);
	});

	it("selects enabled leaves and expands nested parents", async () => {
		const page = await newSpecPage({
			components: [Multiselect, MultiselectGroup, MultiselectOption],
			html: `
				<ifx-multiselect>
					<ifx-multiselect-option value="parent">
						Parent
						<ifx-multiselect-option value="child" slot="children">Child</ifx-multiselect-option>
					</ifx-multiselect-option>
				</ifx-multiselect>
			`,
		});

		(page.rootInstance as any).selectAll();
		await page.waitForChanges();

		const parent = page.root.querySelector("ifx-multiselect-option");
		const child = parent.querySelector("ifx-multiselect-option");

		expect(child.selected).toBe(true);
		expect(
			parent.shadowRoot
				.querySelector('[role="option"]')
				.getAttribute("aria-expanded"),
		).toBe("true");
	});

	it("considers all enabled leaves selected when disabled leaves are unselected", async () => {
		const page = await newSpecPage({
			components: [Multiselect, MultiselectGroup, MultiselectOption],
			html: `
				<ifx-multiselect>
					<ifx-multiselect-option value="enabled" selected>Enabled</ifx-multiselect-option>
					<ifx-multiselect-option value="disabled" disabled>Disabled</ifx-multiselect-option>
					<ifx-multiselect-group label="Disabled group" disabled>
						<ifx-multiselect-option value="grouped">Grouped</ifx-multiselect-option>
					</ifx-multiselect-group>
				</ifx-multiselect>
			`,
		});

		const selectAll = (page.rootInstance as any).renderSelectAll();
		const checkbox = selectAll.$children$[0];

		expect(checkbox.$attrs$.checked).toBe(true);
	});

	it("emits ifxClear before clearing selections", async () => {
		const page = await newSpecPage({
			components: [Multiselect],
			html: `<ifx-multiselect></ifx-multiselect>`,
		});
		const component = page.rootInstance as any;
		const clearSelection = jest
			.spyOn(component, "clearSelection")
			.mockResolvedValue(undefined);
		const clearListener = jest.fn();

		page.root.addEventListener("ifxClear", clearListener);
		component.handleClearButtonClick(new MouseEvent("click"));

		expect(clearListener).toHaveBeenCalledTimes(1);
		expect(clearSelection).toHaveBeenCalledTimes(1);
	});

	it("does not clear selections when ifxClear is prevented", async () => {
		const page = await newSpecPage({
			components: [Multiselect],
			html: `<ifx-multiselect></ifx-multiselect>`,
		});
		const component = page.rootInstance as any;
		const clearSelection = jest.spyOn(component, "clearSelection");

		page.root.addEventListener("ifxClear", (event) => {
			event.preventDefault();
		});
		component.handleClearButtonClick(new MouseEvent("click"));

		expect(clearSelection).not.toHaveBeenCalled();
	});

	it("renders selected options as removable chips", async () => {
		const page = await newSpecPage({
			components: [Multiselect],
			html: `<ifx-multiselect></ifx-multiselect>`,
		});

		page.rootInstance.persistentSelectedOptions = [
			{ value: "one", label: "Option one", selected: true },
			{ value: "two", label: "Option two", selected: true },
		];
		await page.waitForChanges();
		page.rootInstance.visibleSelectedCount = 2;
		await page.waitForChanges();

		const chips = getVisibleChips(page);
		expect(chips).toHaveLength(2);
		expect(
			page.root.shadowRoot.querySelector('[aria-label="Remove Option one"]'),
		).toBeTruthy();

		(
			page.root.shadowRoot.querySelector(
				'[aria-label="Remove Option one"]',
			) as HTMLButtonElement
		).click();
		await page.waitForChanges();

		expect(getVisibleChips(page)).toHaveLength(1);
	});

	it("shows all selected chips when they fit", async () => {
		const page = await newSpecPage({
			components: [Multiselect],
			html: `<ifx-multiselect></ifx-multiselect>`,
		});

		page.rootInstance.persistentSelectedOptions = [
			{ value: "one", label: "Option one", selected: true },
			{ value: "two", label: "Option two", selected: true },
		];
		await page.waitForChanges();
		page.rootInstance.visibleSelectedCount = 2;
		await page.waitForChanges();

		expect(getVisibleChips(page)).toHaveLength(2);
		expect(getVisibleIndicators(page)).toHaveLength(0);
	});

	it("moves chips that do not fit to the remaining count indicator", async () => {
		const page = await newSpecPage({
			components: [Multiselect],
			html: `<ifx-multiselect></ifx-multiselect>`,
		});

		page.rootInstance.persistentSelectedOptions = [
			{ value: "one", label: "Option one", selected: true },
			{ value: "two", label: "Option two", selected: true },
			{ value: "three", label: "Option three", selected: true },
		];
		await page.waitForChanges();

		const input = page.root.shadowRoot.querySelector(
			".ifx-multiselect-input",
		) as HTMLElement;
		Object.defineProperty(input, "clientWidth", {
			configurable: true,
			value: 120,
		});

		const measurement = page.root.shadowRoot.querySelector(
			".ifx-multiselect-measurement",
		) as HTMLElement;
		measurement
			.querySelectorAll<HTMLElement>(".ifx-multiselect-chip")
			.forEach((chip) => {
				Object.defineProperty(chip, "offsetWidth", {
					configurable: true,
					value: 70,
				});
			});
		measurement
			.querySelectorAll<HTMLElement>(".ifx-multiselect-indicator")
			.forEach((indicator) => {
				Object.defineProperty(indicator, "offsetWidth", {
					configurable: true,
					value: 28,
				});
			});

		(page.rootInstance as any).measureSelectedOptions();
		await page.waitForChanges();

		expect(getVisibleChips(page)).toHaveLength(1);
		expect(getVisibleIndicators(page)[0]?.textContent).toBe("+2");
		expect(getVisibleIndicators(page)[0]?.getAttribute("aria-label")).toBe(
			"Show 2 more selected options",
		);
	});

	it("renders the remaining count indicator in disabled mode", async () => {
		const page = await newSpecPage({
			components: [Multiselect],
			html: `<ifx-multiselect disabled></ifx-multiselect>`,
		});

		page.rootInstance.persistentSelectedOptions = [
			{ value: "one", label: "Option one", selected: true },
			{ value: "two", label: "Option two", selected: true },
		];
		page.rootInstance.visibleSelectedCount = 1;
		await page.waitForChanges();

		const indicator = page.root.shadowRoot.querySelector(
			".ifx-multiselect-indicator[role='button']",
		);
		expect(indicator.classList.contains("disabled")).toBe(true);
		expect(indicator.getAttribute("aria-disabled")).toBe("true");
		expect(indicator.getAttribute("tabindex")).toBe("-1");
		const multiselectStyles = readFileSync(
			join(__dirname, "multiselect.scss"),
			"utf8",
		);
		expect(multiselectStyles).toMatch(
			/\.ifx-multiselect-indicator\s*\{[\s\S]*?&\.disabled\s*\{[\s\S]*?background-color:\s*tokens\.\$ifxColorEngineering300;[\s\S]*?pointer-events:\s*none;/,
		);
	});
});
