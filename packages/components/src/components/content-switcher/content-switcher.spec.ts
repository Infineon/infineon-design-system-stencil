import { newSpecPage } from "jest-stencil-runner";
import { ContentSwitcher } from "./content-switcher";
import { ContentSwitcherItem } from "./content-switcher-item";

// Mock the Icon component
const MockInfineonIconStencil = () => {
	const el = document.createElement("mock-infineon-icon");
	el.textContent = "Mock Infineon Icon";
	return el;
};

describe("ifx-content-switcher", () => {
	// Mock the problematic method before each test
	beforeEach(() => {
		// Replace the original initializeDividers with a mock implementation
		ContentSwitcher.prototype.initializeDividers = function () {
			// Just create dividers without using the 'after' method
			this.dividers = [];
			this.items.forEach((item, index) => {
				if (index < this.items.length - 1) {
					const divider = document.createElement("div");
					divider.classList.add("ifx-content-switcher-divider");
					this.dividers.push(divider);

					// Instead of item.after(divider), we'll just append it to the parent
					// but only if there's a parent in the test environment
					if (item.parentNode) {
						item.parentNode.insertBefore(divider, item.nextSibling);
					}
				}
			});
		};
	});

	it("should render with default state", async () => {
		const { root } = await newSpecPage({
			components: [
				ContentSwitcher,
				ContentSwitcherItem,
				MockInfineonIconStencil,
			],
			html: `<ifx-content-switcher>
              <ifx-content-switcher-item>Item 1</ifx-content-switcher-item>
              <ifx-content-switcher-item>Item 2</ifx-content-switcher-item>
            </ifx-content-switcher>`,
		});

		// Basic structure verification
		expect(root.tagName).toBe("IFX-CONTENT-SWITCHER");
		expect(
			root.shadowRoot.querySelector(".ifx-content-switcher"),
		).not.toBeNull();
		expect(root.querySelectorAll("ifx-content-switcher-item").length).toBe(2);
	});

	it("should emit ifxChange event when selection changes", async () => {
		const page = await newSpecPage({
			components: [
				ContentSwitcher,
				ContentSwitcherItem,
				MockInfineonIconStencil,
			],
			html: `<ifx-content-switcher>
              <ifx-content-switcher-item value="option1">Item 1</ifx-content-switcher-item>
              <ifx-content-switcher-item value="option2">Item 2</ifx-content-switcher-item>
            </ifx-content-switcher>`,
		});

		const contentSwitcher = page.rootInstance as ContentSwitcher;

		// Spy on the emitter
		const emitSpy = jest.spyOn(contentSwitcher.ifxChange, "emit");

		// Select the second item (index 1)
		contentSwitcher.selectItem(1);
		await page.waitForChanges();

		// Verify event was emitted with correct values
		expect(emitSpy).toHaveBeenCalled();
		const callArg = emitSpy.mock.calls[0][0];
		expect(callArg.newValue).toBe("option2");
	});

	it("should ensure only one item is selected", async () => {
		const page = await newSpecPage({
			components: [
				ContentSwitcher,
				ContentSwitcherItem,
				MockInfineonIconStencil,
			],
			html: `<ifx-content-switcher>
              <ifx-content-switcher-item selected>Item 1</ifx-content-switcher-item>
              <ifx-content-switcher-item>Item 2</ifx-content-switcher-item>
            </ifx-content-switcher>`,
		});

		const root = page.root;
		const contentSwitcher = page.rootInstance as ContentSwitcher;

		// Should have first item selected initially
		expect(contentSwitcher["activeIndex"]).toBe(0);

		// Select second item
		contentSwitcher.selectItem(1);
		await page.waitForChanges();

		// Second item should be selected now
		expect(contentSwitcher["activeIndex"]).toBe(1);
		expect(
			root.querySelectorAll("ifx-content-switcher-item[selected]").length,
		).toBe(1);
		expect(
			root
				.querySelectorAll("ifx-content-switcher-item")[1]
				.hasAttribute("selected"),
		).toBe(true);
	});
});
