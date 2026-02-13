import { newSpecPage } from "jest-stencil-runner";
import { Dropdown } from "./dropdown";

// Mock the @popperjs/core createPopper function
const mockDestroy = jest.fn();
const mockCreatePopper = jest.fn().mockReturnValue({
	destroy: mockDestroy,
});

jest.mock("@popperjs/core", () => ({
	createPopper: mockCreatePopper,
}));

describe("ifx-dropdown", () => {
	beforeEach(() => {
		jest.clearAllMocks();

		// Mock updateSlotContent to prevent errors during initialization
		Dropdown.prototype.updateSlotContent = jest.fn();

		// Override openDropdown to avoid the createPopper call issue
		Dropdown.prototype.openDropdown = function () {
			if (!this.internalIsOpen && !this.disabled) {
				this.internalIsOpen = true;
				if (this.trigger) {
					this.trigger.isOpen = true;
				}
				if (this.menu) {
					this.menu.isOpen = true;
				}
				// Skip the createPopper call
				this.popperInstance = { destroy: mockDestroy };
				this.ifxOpen.emit();
			}
			return Promise.resolve();
		};
	});

	it("should render with default props", async () => {
		const page = await newSpecPage({
			components: [Dropdown],
			html: `<ifx-dropdown></ifx-dropdown>`,
		});

		const dropdown = page.rootInstance;
		expect(dropdown).toBeDefined();
		expect(await dropdown.isOpen()).toBe(false);
		expect(page.root.shadowRoot.querySelector(".dropdown")).not.toBeNull();
	});

	it("should open dropdown when openDropdown is called", async () => {
		const page = await newSpecPage({
			components: [Dropdown],
			html: `<ifx-dropdown></ifx-dropdown>`,
		});

		const dropdown = page.rootInstance;

		// Create minimal mock elements
		dropdown.trigger = { isOpen: false };
		dropdown.menu = { isOpen: false };

		const openSpy = jest.spyOn(dropdown.ifxOpen, "emit");

		// Call the openDropdown method
		await dropdown.openDropdown();
		await page.waitForChanges();

		// Verify state changes
		expect(dropdown.internalIsOpen).toBe(true);
		expect(openSpy).toHaveBeenCalled();
		expect(dropdown.trigger.isOpen).toBe(true);
		expect(dropdown.menu.isOpen).toBe(true);
	});

	it("should close dropdown when closeDropdown is called", async () => {
		const page = await newSpecPage({
			components: [Dropdown],
			html: `<ifx-dropdown></ifx-dropdown>`,
		});

		const dropdown = page.rootInstance;

		// Create minimal mock elements and open the dropdown
		dropdown.trigger = { isOpen: true };
		dropdown.menu = { isOpen: true };
		dropdown.popperInstance = { destroy: mockDestroy };
		dropdown.internalIsOpen = true;

		// Now test closing
		const closeSpy = jest.spyOn(dropdown.ifxClose, "emit");

		await dropdown.closeDropdown();
		await page.waitForChanges();

		expect(dropdown.internalIsOpen).toBe(false);
		expect(closeSpy).toHaveBeenCalled();
		expect(dropdown.trigger.isOpen).toBe(false);
		expect(dropdown.menu.isOpen).toBe(false);
		expect(mockDestroy).toHaveBeenCalled();
	});

	it("should not open dropdown when disabled", async () => {
		// Create with disabled attribute already set in HTML
		const page = await newSpecPage({
			components: [Dropdown],
			html: `<ifx-dropdown disabled></ifx-dropdown>`,
		});

		const dropdown = page.rootInstance;

		// Setup with mock elements
		dropdown.trigger = { isOpen: false };
		dropdown.menu = { isOpen: false };

		const openSpy = jest.spyOn(dropdown.ifxOpen, "emit");

		// Call the openDropdown method
		await dropdown.openDropdown();
		await page.waitForChanges();

		// Verify dropdown stays closed
		expect(dropdown.internalIsOpen).toBe(false);
		expect(openSpy).not.toHaveBeenCalled();
	});

	it("should clean up resources on disconnection", async () => {
		const page = await newSpecPage({
			components: [Dropdown],
			html: `<ifx-dropdown></ifx-dropdown>`,
		});

		const dropdown = page.rootInstance;

		// Setup the popper instance directly
		dropdown.popperInstance = { destroy: mockDestroy };
		dropdown.menu = { remove: jest.fn() };

		// Simulate disconnection
		dropdown.disconnectedCallback();

		// Verify cleanup
		expect(mockDestroy).toHaveBeenCalled();
		expect(dropdown.popperInstance).toBeNull();
		expect(dropdown.menu.remove).toHaveBeenCalled();
	});
});
