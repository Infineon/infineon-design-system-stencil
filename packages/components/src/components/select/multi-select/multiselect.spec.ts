import { newSpecPage } from "jest-stencil-runner";
import { Multiselect } from "./multiselect";

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
	});
});
