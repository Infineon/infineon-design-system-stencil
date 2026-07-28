import { newSpecPage } from "jest-stencil-runner";
import { DropdownItem } from "./dropdown-item";

describe("ifx-dropdown-item", () => {
	it("should emit ifxDropdownItem when enabled", async () => {
		const page = await newSpecPage({
			components: [DropdownItem],
			html: `<ifx-dropdown-item>Menu Item</ifx-dropdown-item>`,
		});

		const item = page.rootInstance;
		const emitSpy = jest.spyOn(item.ifxDropdownItem, "emit");

		item.handleEventEmission(new MouseEvent("click"));

		expect(emitSpy).toHaveBeenCalledWith("Menu Item");
	});

	it("should not emit ifxDropdownItem and should stop propagation when disabled", async () => {
		const page = await newSpecPage({
			components: [DropdownItem],
			html: `<ifx-dropdown-item disabled>Menu Item</ifx-dropdown-item>`,
		});

		const item = page.rootInstance;
		const emitSpy = jest.spyOn(item.ifxDropdownItem, "emit");
		const event = new MouseEvent("click", {
			bubbles: true,
			cancelable: true,
		});
		const preventDefaultSpy = jest.spyOn(event, "preventDefault");
		const stopPropagationSpy = jest.spyOn(event, "stopPropagation");

		item.handleEventEmission(event);

		expect(emitSpy).not.toHaveBeenCalled();
		expect(preventDefaultSpy).toHaveBeenCalled();
		expect(stopPropagationSpy).toHaveBeenCalled();
	});

	it("should not navigate when disabled with href", async () => {
		const page = await newSpecPage({
			components: [DropdownItem],
			html: `<ifx-dropdown-item href="https://example.com" disabled>Menu Item</ifx-dropdown-item>`,
		});

		await page.waitForChanges();

		const anchor = page.root.shadowRoot.querySelector("a") as HTMLAnchorElement;
		expect(anchor.getAttribute("aria-disabled")).toBe("true");
		expect(anchor.tabIndex).toBe(-1);
	});

	it("should render aria-disabled='true' and tabIndex=-1 when disabled", async () => {
		const page = await newSpecPage({
			components: [DropdownItem],
			html: `<ifx-dropdown-item disabled>Menu Item</ifx-dropdown-item>`,
		});

		await page.waitForChanges();

		const anchor = page.root.shadowRoot.querySelector("a");
		expect(anchor.getAttribute("aria-disabled")).toBe("true");
		expect(anchor.tabIndex).toBe(-1);
	});

	it("should not set aria-disabled or negative tabIndex when enabled", async () => {
		const page = await newSpecPage({
			components: [DropdownItem],
			html: `<ifx-dropdown-item>Menu Item</ifx-dropdown-item>`,
		});

		await page.waitForChanges();

		const anchor = page.root.shadowRoot.querySelector("a");
		expect(anchor.getAttribute("aria-disabled")).toBeNull();
		expect(anchor.tabIndex).toBe(0);
	});

	it("should transition from enabled to disabled and back", async () => {
		const page = await newSpecPage({
			components: [DropdownItem],
			html: `<ifx-dropdown-item>Menu Item</ifx-dropdown-item>`,
		});

		const item = page.root;
		let anchor = item.shadowRoot.querySelector("a");
		expect(anchor.tabIndex).toBe(0);
		expect(anchor.getAttribute("aria-disabled")).toBeNull();

		item.disabled = true;
		await page.waitForChanges();

		anchor = item.shadowRoot.querySelector("a");
		expect(anchor.tabIndex).toBe(-1);
		expect(anchor.getAttribute("aria-disabled")).toBe("true");

		item.disabled = false;
		await page.waitForChanges();

		anchor = item.shadowRoot.querySelector("a");
		expect(anchor.tabIndex).toBe(0);
		expect(anchor.getAttribute("aria-disabled")).toBeNull();
	});

	it("should treat disabled='false' as enabled", async () => {
		const page = await newSpecPage({
			components: [DropdownItem],
			html: `<ifx-dropdown-item disabled="false">Menu Item</ifx-dropdown-item>`,
		});

		await page.waitForChanges();

		const anchor = page.root.shadowRoot.querySelector("a");
		expect(anchor.getAttribute("aria-disabled")).toBeNull();
		expect(anchor.tabIndex).toBe(0);
	});
});
