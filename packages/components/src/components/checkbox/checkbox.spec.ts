import { newSpecPage } from "jest-stencil-runner";
import { Checkbox } from "./checkbox";

const MockInfineonIconStencil = () => {
	const el = document.createElement("mock-infineon-icon");
	el.textContent = "Mock Infineon Icon";
	return el;
};

const InfineonIconStencil = MockInfineonIconStencil;

describe("ifx-checkbox", () => {
	// Helper method to simulate checkbox interaction
	// Note: In the Jest/Stencil test environment, .click() alone doesn't trigger
	// the onChange handler defined in JSX. We need to:
	// 1. Call .click() to toggle the checked state
	// 2. Manually dispatch a 'change' event to trigger the onChange handler,
	//    which calls handleCheckbox() and emits the ifxChange event
	const simulateClick = async (page: any) => {
		const input = page.root.shadowRoot.querySelector("#checkbox") as HTMLInputElement;
		input.click();
		input.dispatchEvent(new Event('change', { bubbles: true }));
		await page.waitForChanges();
	};

	it("should render", async () => {
		const { root } = await newSpecPage({
			components: [Checkbox, InfineonIconStencil],
			html: `<ifx-checkbox></ifx-checkbox>`,
		});

		expect(root).toEqualHtml(`
      <ifx-checkbox>
        <template shadowrootmode="open">
          <div class="checkbox__container">
            <input class="checkbox__input" id="checkbox" type="checkbox" value="undefined">
            <label class="checkbox-m checkbox__wrapper" for="checkbox">
            </label>
          </div>
        </template>
      </ifx-checkbox>
    `);
	});

	it("should display slotted content", async () => {
		const { root } = await newSpecPage({
			components: [Checkbox, InfineonIconStencil],
			html: `<ifx-checkbox>Test content</ifx-checkbox>`,
		});

		const slotElement = root.shadowRoot.querySelector("slot");
		const labelContent = slotElement.assignedNodes()[0].textContent;
		expect(labelContent).toBe("Test content");
	});

	it("should be checked when checked attribute is set", async () => {
		const { root } = await newSpecPage({
			components: [Checkbox, InfineonIconStencil],
			html: `<ifx-checkbox checked="true">Test content</ifx-checkbox>`,
		});

		const checkboxInput = root.shadowRoot.querySelector("input");
		expect(checkboxInput.checked).toBe(true);
	});

	it("should not be checked when checked attribute is not set", async () => {
		const { root } = await newSpecPage({
			components: [Checkbox, InfineonIconStencil],
			html: `<ifx-checkbox>Test content</ifx-checkbox>`,
		});

		const checkboxInput = root.shadowRoot.querySelector("input");
		expect(checkboxInput.checked).toBe(false);
	});

	it("should emit ifxChange event when clicked", async () => {
		const page = await newSpecPage({
			components: [Checkbox, InfineonIconStencil],
			html: `<ifx-checkbox></ifx-checkbox>`,
		});

		const checkbox = page.root as any as HTMLIfxCheckboxElement;
		const ifxChangeSpy = jest.fn();
		checkbox.addEventListener("ifxChange", ifxChangeSpy);

		await simulateClick(page);

		expect(ifxChangeSpy).toHaveBeenCalled();
	});

	it("should emit ifxError event when error prop changes", async () => {
		const page = await newSpecPage({
			components: [Checkbox, InfineonIconStencil],
			html: `<ifx-checkbox></ifx-checkbox>`,
		});

		const checkbox = page.root;
		const ifxErrorSpy = jest.fn();
		checkbox.addEventListener("ifxError", ifxErrorSpy);

		// Change error property
		checkbox.setAttribute("error", "true");
		await page.waitForChanges();

		expect(ifxErrorSpy).toHaveBeenCalled();
	});

	it("should include checked state in ifxChange event data", async () => {
		const page = await newSpecPage({
			components: [Checkbox, InfineonIconStencil],
			html: `<ifx-checkbox></ifx-checkbox>`,
		});

		const checkbox = page.root;
		let eventData = null;
		checkbox.addEventListener("ifxChange", (e) => {
			eventData = (e as CustomEvent).detail;
		});

		const input = checkbox.shadowRoot.querySelector(
			"#checkbox",
		) as HTMLInputElement;
		input.checked = true;
		input.dispatchEvent(new Event('change', { bubbles: true }));
		await page.waitForChanges();

		expect(eventData).toBe(true);
	});

	it("should not emit ifxChange when disabled", async () => {
		const page = await newSpecPage({
			components: [Checkbox, InfineonIconStencil],
			html: `<ifx-checkbox disabled="true"></ifx-checkbox>`,
		});

		const checkbox = page.root;
		const ifxChangeSpy = jest.fn();
		checkbox.addEventListener("ifxChange", ifxChangeSpy);

		await simulateClick(page);

		expect(ifxChangeSpy).not.toHaveBeenCalled();
	});
});
