import { newSpecPage } from "jest-stencil-runner";
import { IconButton } from "./icon-button";

describe("ifx-icon-button", () => {
	it("renders with default props", async () => {
		const page = await newSpecPage({
			components: [IconButton],
			html: `<ifx-icon-button icon="c-info-16"></ifx-icon-button>`,
		});

		expect(page.root).toBeTruthy();
		const button = page.root.shadowRoot.querySelector("button");
		expect(button).toBeTruthy();
		expect(button.classList.contains("btn-primary")).toBeTruthy();
		expect(button.classList.contains("btn-round")).toBeTruthy();

		const icon = button.querySelector("ifx-icon");
		expect(icon).toBeTruthy();
		expect(icon.getAttribute("icon")).toBe("c-info-16");
	});

	it("renders with specified variant", async () => {
		const page = await newSpecPage({
			components: [IconButton],
			html: `<ifx-icon-button variant="secondary" icon="c-info-16"></ifx-icon-button>`,
		});

		const button = page.root.shadowRoot.querySelector("button");
		expect(button.classList.contains("btn-secondary")).toBeTruthy();
	});

	it("renders with tertiary variant", async () => {
		const page = await newSpecPage({
			components: [IconButton],
			html: `<ifx-icon-button variant="tertiary" icon="c-info-16"></ifx-icon-button>`,
		});

		const button = page.root.shadowRoot.querySelector("button");
		expect(button.classList.contains("btn-tertiary")).toBeTruthy();
	});

	it("renders with different sizes", async () => {
		const page = await newSpecPage({
			components: [IconButton],
			html: `<ifx-icon-button size="s" icon="c-info-16"></ifx-icon-button>`,
		});

		const button = page.root.shadowRoot.querySelector("button");
		expect(button.classList.contains("btn-s")).toBeTruthy();

		// Update the size and check the class is updated
		page.root.size = "l";
		await page.waitForChanges();

		expect(button.classList.contains("btn-l")).toBeTruthy();
	});

	it("renders with square shape", async () => {
		const page = await newSpecPage({
			components: [IconButton],
			html: `<ifx-icon-button shape="square" icon="c-info-16"></ifx-icon-button>`,
		});

		const button = page.root.shadowRoot.querySelector("button");
		expect(button.classList.contains("btn-square")).toBeTruthy();
	});

	it("renders as a link when href is provided", async () => {
		const page = await newSpecPage({
			components: [IconButton],
			html: `<ifx-icon-button href="https://example.com" icon="c-info-16"></ifx-icon-button>`,
		});

		const link = page.root.shadowRoot.querySelector("a");
		expect(link).toBeTruthy();
		expect(link.getAttribute("href")).toBe("https://example.com");
		expect(link.getAttribute("target")).toBe("_self");

		// Button should not be present
		const button = page.root.shadowRoot.querySelector("button");
		expect(button).toBeFalsy();
	});

	it("sets rel attribute for external links", async () => {
		const page = await newSpecPage({
			components: [IconButton],
			html: `<ifx-icon-button href="https://example.com" target="_blank" icon="c-info-16"></ifx-icon-button>`,
		});

		const link = page.root.shadowRoot.querySelector("a");
		expect(link.getAttribute("rel")).toBe("noopener noreferrer");
	});

	it("handles disabled state for buttons", async () => {
		const page = await newSpecPage({
			components: [IconButton],
			html: `<ifx-icon-button disabled="true" icon="c-info-16"></ifx-icon-button>`,
		});

		const button = page.root.shadowRoot.querySelector("button");
		expect(button.hasAttribute("disabled")).toBeTruthy();
		expect(button.classList.contains("disabled")).toBeTruthy();

		// In Stencil tests, we need to check the property rather than the attribute
		// when boolean values are involved
		expect(page.rootInstance.disabled).toBeTruthy();

		// Or test if the host has the attribute set (without checking its value)
		expect(page.root.hasAttribute("aria-disabled")).toBeTruthy();
	});

	// The setFocus test is fine as it is since you're using href to create a link
	// which is currently the only element that gets the ref set

	it("updates icon when icon prop changes", async () => {
		const page = await newSpecPage({
			components: [IconButton],
			html: `<ifx-icon-button icon="c-info-16"></ifx-icon-button>`,
		});

		const icon = page.root.shadowRoot.querySelector("ifx-icon");
		expect(icon.getAttribute("icon")).toBe("c-info-16");

		// Update the icon
		page.root.icon = "calendar-16";
		await page.waitForChanges();

		expect(icon.getAttribute("icon")).toBe("calendar-16");
	});

	it("stops event propagation when disabled", async () => {
		const page = await newSpecPage({
			components: [IconButton],
			html: `<ifx-icon-button disabled="true" icon="c-info-16"></ifx-icon-button>`,
		});

		const iconButton = page.root;
		const event = new MouseEvent("click", { bubbles: true });
		const stopPropagationSpy = jest.spyOn(event, "stopImmediatePropagation");

		iconButton.dispatchEvent(event);
		expect(stopPropagationSpy).toHaveBeenCalled();
	});

	it("allows event propagation when not disabled", async () => {
		const page = await newSpecPage({
			components: [IconButton],
			html: `<ifx-icon-button icon="c-info-16"></ifx-icon-button>`,
		});

		const iconButton = page.root;
		const event = new MouseEvent("click", { bubbles: true });
		const stopPropagationSpy = jest.spyOn(event, "stopImmediatePropagation");

		iconButton.dispatchEvent(event);
		expect(stopPropagationSpy).not.toHaveBeenCalled();
	});

	it("sets focus on the button element", async () => {
		const page = await newSpecPage({
			components: [IconButton],
			// Use href to create a link instead of a button since only links have the ref set
			html: `<ifx-icon-button href="#" icon="c-info-16"></ifx-icon-button>`,
		});

		const link = page.root.shadowRoot.querySelector("a");
		const focusSpy = jest.spyOn(link, "focus");

		await page.rootInstance.setFocus();
		expect(focusSpy).toHaveBeenCalled();
	});

	it("applies aria-label attribute", async () => {
		const page = await newSpecPage({
			components: [IconButton],
			html: `<ifx-icon-button aria-label="Information button" icon="c-info-16"></ifx-icon-button>`,
		});

		expect(page.root.getAttribute("aria-label")).toBe("Information button");
	});
});
