import { newSpecPage } from "jest-stencil-runner";
import { Chip } from "./chip";
import { ChipItem } from "./chip-item/chip-item";

// Create mock components
const MockInfineonIconStencil = () => {
	const el = document.createElement("mock-infineon-icon");
	el.textContent = "Mock Infineon Icon";
	return el;
};

const MockInfineonIndicator = () => {
	const el = document.createElement("mock-infineon-indicator");
	el.setAttribute("variant", "number");
	el.setAttribute("number", "0");
	return el;
};

describe("ifx-chip", () => {
	// Basic rendering tests
	it("should render with default props", async () => {
		const { root } = await newSpecPage({
			components: [
				Chip,
				ChipItem,
				MockInfineonIconStencil,
				MockInfineonIndicator,
			],
			html: `<ifx-chip placeholder="Select an option"></ifx-chip>`,
		});

		expect(root).toEqualHtml(`
<ifx-chip placeholder="Select an option">
  <template shadowrootmode="open">
    <div class="chip">
      <div aria-controls="dropdown" aria-expanded="false" aria-haspopup="listbox" aria-value="" class="chip__wrapper chip__wrapper--medium chip__wrapper--single outlined" role="combobox" tabindex="0">
        <div class="wrapper__label">
          Select an option
        </div>
        <div class="wrapper__open-button">
          <ifx-icon icon="chevron-down-16">
          </ifx-icon>
        </div>
      </div>
    </div>
  </template>
</ifx-chip>
`);
	});

	it("should render with small size", async () => {
		const { root } = await newSpecPage({
			components: [Chip, MockInfineonIconStencil, MockInfineonIndicator],
			html: `<ifx-chip placeholder="Select an option" size="small"></ifx-chip>`,
		});

		const wrapper = root.shadowRoot.querySelector(".chip__wrapper");
		expect(wrapper.classList.contains("chip__wrapper--small")).toBe(true);
	});

	it("should render with multi variant", async () => {
		const { root } = await newSpecPage({
			components: [Chip, MockInfineonIconStencil, MockInfineonIndicator],
			html: `<ifx-chip placeholder="Select an option" variant="multi"></ifx-chip>`,
		});

		const wrapper = root.shadowRoot.querySelector(".chip__wrapper");
		expect(wrapper.classList.contains("chip__wrapper--multi")).toBe(true);
	});

	it("should render in readOnly mode", async () => {
		const { root } = await newSpecPage({
			components: [Chip, MockInfineonIconStencil, MockInfineonIndicator],
			html: `<ifx-chip placeholder="Select an option" read-only="true"></ifx-chip>`,
		});

		const wrapper = root.shadowRoot.querySelector(".chip__wrapper");
		expect(wrapper.getAttribute("aria-readonly")).toBe("true");
		// No click handler should be attached
		expect(wrapper.getAttribute("onClick")).toBeNull();
	});

	it("should render with pre-selected values from string value", async () => {
		const page = await newSpecPage({
			components: [
				Chip,
				ChipItem,
				MockInfineonIconStencil,
				MockInfineonIndicator,
			],
			html: `<ifx-chip placeholder="Select an option" value="option1"></ifx-chip>`,
		});

		const chip = page.rootInstance;
		expect(chip.selectedOptions.length).toBe(1);
		expect(chip.selectedOptions[0].value).toBe("option1");

		const wrapper = page.root.shadowRoot.querySelector(".chip__wrapper");
		expect(wrapper.classList.contains("chip__wrapper--selected")).toBe(true);
	});

	it("should render with pre-selected values from array", async () => {
		const page = await newSpecPage({
			components: [
				Chip,
				ChipItem,
				MockInfineonIconStencil,
				MockInfineonIndicator,
			],
			html: `<ifx-chip placeholder="Select options" variant="multi"></ifx-chip>`,
		});

		// Set value prop programmatically
		page.root.value = ["option1", "option2"];
		await page.waitForChanges();

		const chip = page.rootInstance;
		expect(chip.selectedOptions.length).toBe(2);
		expect(chip.selectedOptions[0].value).toBe("option1");
		expect(chip.selectedOptions[1].value).toBe("option2");

		const wrapper = page.root.shadowRoot.querySelector(".chip__wrapper");
		expect(wrapper.classList.contains("chip__wrapper--selected")).toBe(true);
	});

	// Dropdown functionality tests
	it("should open dropdown when clicked", async () => {
		const page = await newSpecPage({
			components: [
				Chip,
				ChipItem,
				MockInfineonIconStencil,
				MockInfineonIndicator,
			],
			html: `<ifx-chip placeholder="Select an option">
               <ifx-chip-item value="option1">Option 1</ifx-chip-item>
             </ifx-chip>`,
		});

		const wrapper = page.root.shadowRoot.querySelector(
			".chip__wrapper",
		) as HTMLElement;

		// Dropdown should be closed initially
		expect(page.root.shadowRoot.querySelector(".chip__dropdown")).toBeNull();

		// Click to open
		wrapper.click();
		await page.waitForChanges();

		// Dropdown should be open
		const dropdown = page.root.shadowRoot.querySelector(".chip__dropdown");
		expect(dropdown).not.toBeNull();
		expect(wrapper.classList.contains("chip__wrapper--opened")).toBe(true);
		expect(wrapper.getAttribute("aria-expanded")).toBe("true");
	});

	it("should not open dropdown when readOnly", async () => {
		const page = await newSpecPage({
			components: [
				Chip,
				ChipItem,
				MockInfineonIconStencil,
				MockInfineonIndicator,
			],
			html: `<ifx-chip placeholder="Select an option" read-only="true">
               <ifx-chip-item value="option1">Option 1</ifx-chip-item>
             </ifx-chip>`,
		});

		const wrapper = page.root.shadowRoot.querySelector(
			".chip__wrapper",
		) as HTMLElement;

		// Click attempt
		wrapper.click();
		await page.waitForChanges();

		// Dropdown should still be closed
		expect(page.root.shadowRoot.querySelector(".chip__dropdown")).toBeNull();
	});

	it("should handle selection in single variant", async () => {
		const page = await newSpecPage({
			components: [
				Chip,
				ChipItem,
				MockInfineonIconStencil,
				MockInfineonIndicator,
			],
			html: `<ifx-chip placeholder="Select an option">
             <ifx-chip-item value="option1">Option 1</ifx-chip-item>
           </ifx-chip>`,
		});

		// Mock the chipItem selection behavior
		const chip = page.rootInstance;

		// Simulate chip item selection with value and matching label
		chip.updateSelectedOptions(
			new CustomEvent("ifxChipItemSelect", {
				detail: {
					value: "option1", // Value should be option1
					label: "Option 1", // Label should be Option 1
					selected: true,
					key: 0,
					emitIfxChange: true,
				},
			}),
		);

		await page.waitForChanges();

		// Check selected options
		expect(chip.selectedOptions.length).toBe(1);
		expect(chip.selectedOptions[0].value).toBe("option1");
	});

	it("should handle multiple selections in multi variant", async () => {
		const page = await newSpecPage({
			components: [
				Chip,
				ChipItem,
				MockInfineonIconStencil,
				MockInfineonIndicator,
			],
			html: `<ifx-chip placeholder="Select options" variant="multi">
               <ifx-chip-item value="option1">Option 1</ifx-chip-item>
               <ifx-chip-item value="option2">Option 2</ifx-chip-item>
               <ifx-chip-item value="option3">Option 3</ifx-chip-item>
             </ifx-chip>`,
		});

		const chip = page.rootInstance;

		// Simulate chip item selections
		chip.updateSelectedOptions(
			new CustomEvent("ifxChipItemSelect", {
				detail: {
					value: "option1",
					label: "Option 1",
					selected: true,
					key: 0,
					emitIfxChange: true,
				},
			}),
		);

		chip.updateSelectedOptions(
			new CustomEvent("ifxChipItemSelect", {
				detail: {
					value: "option2",
					label: "Option 2",
					selected: true,
					key: 1,
					emitIfxChange: true,
				},
			}),
		);

		await page.waitForChanges();

		// Check selected options
		expect(chip.selectedOptions.length).toBe(2);
		expect(chip.value).toEqual(["option1", "option2"]);

		// UI should show first two options
		const selectedOptions = page.root.shadowRoot.querySelector(
			".label__selected-options",
		);
		expect(selectedOptions.textContent.trim()).toBe("option1, option2");
		// Add a third option
		chip.updateSelectedOptions(
			new CustomEvent("ifxChipItemSelect", {
				detail: {
					value: "option3",
					label: "Option 3",
					selected: true,
					key: 2,
					emitIfxChange: true,
				},
			}),
		);

		await page.waitForChanges();

		// UI should still show just first two options and indicator appears
		expect(chip.selectedOptions.length).toBe(3);
		expect(selectedOptions.textContent.trim()).toBe("option1, option2");
		const indicator = page.root.shadowRoot.querySelector("ifx-indicator");
		expect(indicator).not.toBeNull();
		expect(indicator.getAttribute("number")).toBe("1"); // Shows 1 more item
	});

	// Event tests
	it("should emit ifxChange event when selection changes", async () => {
		const page = await newSpecPage({
			components: [
				Chip,
				ChipItem,
				MockInfineonIconStencil,
				MockInfineonIndicator,
			],
			html: `<ifx-chip placeholder="Select an option">
               <ifx-chip-item value="option1">Option 1</ifx-chip-item>
             </ifx-chip>`,
		});

		const chip = page.rootInstance;
		const ifxChangeSpy = jest.fn();
		page.root.addEventListener("ifxChange", ifxChangeSpy);

		// Simulate chip item selection
		chip.updateSelectedOptions(
			new CustomEvent("ifxChipItemSelect", {
				detail: {
					value: "option1",
					label: "Option 1",
					selected: true,
					key: 0,
					emitIfxChange: true,
				},
			}),
		);

		await page.waitForChanges();

		// Check event was emitted
		expect(ifxChangeSpy).toHaveBeenCalled();

		// Event should contain correct data
		const eventData = ifxChangeSpy.mock.calls[0][0].detail;
		expect(eventData.previousSelection).toEqual([]);
		expect(eventData.currentSelection.length).toBe(1);
		expect(eventData.currentSelection[0].value).toBe("option1");
		expect(eventData.name).toBe("Select an option");
	});

	// Unselect button tests
	it("should clear all selections when unselect button is clicked", async () => {
		const page = await newSpecPage({
			components: [
				Chip,
				ChipItem,
				MockInfineonIconStencil,
				MockInfineonIndicator,
			],
			html: `<ifx-chip placeholder="Select options" variant="multi">
               <ifx-chip-item value="option1">Option 1</ifx-chip-item>
               <ifx-chip-item value="option2">Option 2</ifx-chip-item>
             </ifx-chip>`,
		});

		const chip = page.rootInstance;
		const ifxChangeSpy = jest.fn();
		page.root.addEventListener("ifxChange", ifxChangeSpy);

		// Set up initial selections
		chip.updateSelectedOptions(
			new CustomEvent("ifxChipItemSelect", {
				detail: {
					value: "option1",
					label: "Option 1",
					selected: true,
					key: 0,
					emitIfxChange: true,
				},
			}),
		);

		await page.waitForChanges();
		ifxChangeSpy.mockClear();

		// Mock chip items in DOM
		const chipItems = [
			{ selected: true, chipState: {}, setAttribute: jest.fn() },
		];
		jest.spyOn(chip, "getChipItems").mockImplementation(() => chipItems as any);

		// Click unselect button
		const unselectButton = page.root.shadowRoot.querySelector(
			".wrapper__unselect-button",
		);
		const clickEvent = new MouseEvent("click", { bubbles: true });
		jest.spyOn(clickEvent, "stopPropagation");
		unselectButton.dispatchEvent(clickEvent);

		await page.waitForChanges();

		// Check event propagation was stopped
		expect(clickEvent.stopPropagation).toHaveBeenCalled();

		// Check selections were cleared
		expect(chip.selectedOptions.length).toBe(0);
		expect(chip.value).toEqual([]);

		// Check ifxChange event was emitted
		expect(ifxChangeSpy).toHaveBeenCalled();
		const eventData = ifxChangeSpy.mock.calls[0][0].detail;
		expect(eventData.currentSelection).toEqual([]);
	});

	// Keyboard navigation tests
	it("should open dropdown and focus first item with ArrowDown key", async () => {
		const page = await newSpecPage({
			components: [
				Chip,
				ChipItem,
				MockInfineonIconStencil,
				MockInfineonIndicator,
			],
			html: `<ifx-chip placeholder="Select options">
               <ifx-chip-item value="option1">Option 1</ifx-chip-item>
             </ifx-chip>`,
		});

		const chip = page.rootInstance;
		// Mock the focusChipItemAt method
		const focusSpy = jest.spyOn(chip, "focusChipItemAt");

		// Simulate key press
		const event = new KeyboardEvent("keydown", {
			code: "ArrowDown",
			bubbles: true,
		});
		jest.spyOn(event, "preventDefault");
		page.root.dispatchEvent(event);

		// Check preventDefault was called and focusChipItemAt was called with index 0
		expect(event.preventDefault).toHaveBeenCalled();
		expect(focusSpy).toHaveBeenCalledWith(0);
	});

	it("should close dropdown with Escape key when dropdown is open", async () => {
		const page = await newSpecPage({
			components: [
				Chip,
				ChipItem,
				MockInfineonIconStencil,
				MockInfineonIndicator,
			],
			html: `<ifx-chip placeholder="Select options">
               <ifx-chip-item value="option1">Option 1</ifx-chip-item>
             </ifx-chip>`,
		});

		const chip = page.rootInstance;

		// Open dropdown
		chip.opened = true;
		await page.waitForChanges();

		// Mock focusChip method
		const focusSpy = jest.spyOn(chip, "focusChip");

		// Create a fake chip element for event.target
		const fakeChipElement = document.createElement("ifx-chip");

		// Simulate Escape key press
		const event = new KeyboardEvent("keydown", {
			code: "Escape",
			bubbles: true,
		});
		Object.defineProperty(event, "target", { value: fakeChipElement });
		jest.spyOn(event, "preventDefault");
		page.root.dispatchEvent(event);

		await page.waitForChanges();

		// Check dropdown was closed and chip was focused
		expect(chip.opened).toBe(false);
		expect(focusSpy).toHaveBeenCalled();
	});

	// Value synchronization tests
	it("should update selectedOptions when value prop changes", async () => {
		const page = await newSpecPage({
			components: [
				Chip,
				ChipItem,
				MockInfineonIconStencil,
				MockInfineonIndicator,
			],
			html: `<ifx-chip placeholder="Select options"></ifx-chip>`,
		});

		const chip = page.rootInstance;

		// Set value prop
		page.root.value = "option1";
		await page.waitForChanges();

		// Check selectedOptions was updated
		expect(chip.selectedOptions.length).toBe(1);
		expect(chip.selectedOptions[0].value).toBe("option1");

		// Change to array value
		page.root.value = ["option2", "option3"];
		await page.waitForChanges();

		// Check selectedOptions was updated
		expect(chip.selectedOptions.length).toBe(2);
		expect(chip.selectedOptions[0].value).toBe("option2");
		expect(chip.selectedOptions[1].value).toBe("option3");
	});
});
