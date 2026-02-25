import { newSpecPage } from "jest-stencil-runner";
import { ActionList } from "./action-list";
import { ActionListItem } from "./action-list-item";

describe("ifx-action-list", () => {
	it("renders basic structure", async () => {
		const page = await newSpecPage({
			components: [ActionList],
			html: `<ifx-action-list></ifx-action-list>`,
		});
		expect(page.root).toEqualHtml(`
      <ifx-action-list>
        <mock:shadow-root>
          <div class="action-list" role="list">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </ifx-action-list>
    `);
	});

	it("renders with aria label", async () => {
		const page = await newSpecPage({
			components: [ActionList],
			html: `<ifx-action-list list-aria-label="Test Menu"></ifx-action-list>`,
		});
		expect(page.root).toEqualHtml(`
      <ifx-action-list list-aria-label="Test Menu">
        <mock:shadow-root>
          <div class="action-list" role="list" aria-label="Test Menu">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </ifx-action-list>
    `);
	});

	it("renders with action list items", async () => {
		const page = await newSpecPage({
			components: [ActionList, ActionListItem],
			html: `
        <ifx-action-list>
          <ifx-action-list-item item-title="Test Item"></ifx-action-list-item>
        </ifx-action-list>
      `,
		});

		const actionListItem = page.root.querySelector("ifx-action-list-item");
		expect(actionListItem).not.toBeNull();
	});
});

describe("ifx-action-list-item", () => {
	it("renders with title only (no slots)", async () => {
		const page = await newSpecPage({
			components: [ActionListItem],
			html: `<ifx-action-list-item item-title="Test Title"></ifx-action-list-item>`,
		});

		const rootDiv = page.root.shadowRoot.querySelector(".action-list-item");
		expect(rootDiv).not.toBeNull();
		expect(rootDiv.getAttribute("role")).toBe("listitem");
		expect(rootDiv.getAttribute("aria-label")).toBe("Test Title");
		expect(rootDiv.getAttribute("tabindex")).toBe("-1");

		// Should only have content container when no slots are used
		const contentContainer = page.root.shadowRoot.querySelector(
			".action-list-item__content",
		);
		expect(contentContainer).not.toBeNull();

		const titleElement = contentContainer.querySelector(
			".action-list-item__title",
		);
		expect(titleElement.textContent).toBe("Test Title");

		// Leading and trailing containers should not be rendered when empty
		const leadingContainer = page.root.shadowRoot.querySelector(
			".action-list-item__leading",
		);
		const trailingContainer = page.root.shadowRoot.querySelector(
			".action-list-item__trailing",
		);
		expect(leadingContainer).toBeNull();
		expect(trailingContainer).toBeNull();
	});

	it("renders with title and description", async () => {
		const page = await newSpecPage({
			components: [ActionListItem],
			html: `<ifx-action-list-item item-title="Test Title" description="Test Description"></ifx-action-list-item>`,
		});

		const rootDiv = page.root.shadowRoot.querySelector(".action-list-item");
		expect(rootDiv.getAttribute("aria-label")).toBe(
			"Test Title - Test Description",
		);

		const contentContainer = page.root.shadowRoot.querySelector(
			".action-list-item__content",
		);
		const titleElement = contentContainer.querySelector(
			".action-list-item__title",
		);
		const descriptionElement = contentContainer.querySelector(
			".action-list-item__description",
		);

		expect(titleElement.textContent).toBe("Test Title");
		expect(descriptionElement.textContent).toBe("Test Description");
	});

	it("renders with leading slot content", async () => {
		const page = await newSpecPage({
			components: [ActionListItem],
			html: `
        <ifx-action-list-item item-title="Test Title">
          <ifx-icon slot="leading" icon="home-16"></ifx-icon>
        </ifx-action-list-item>
      `,
		});

		// Leading container should be rendered when slot has content
		const leadingContainer = page.root.shadowRoot.querySelector(
			".action-list-item__leading",
		);
		expect(leadingContainer).not.toBeNull();

		const leadingSlot = leadingContainer.querySelector('slot[name="leading"]');
		expect(leadingSlot).not.toBeNull();
	});

	it("renders with trailing slot content", async () => {
		const page = await newSpecPage({
			components: [ActionListItem],
			html: `
        <ifx-action-list-item item-title="Test Title">
          <ifx-icon slot="trailing" icon="chevron-right-16"></ifx-icon>
        </ifx-action-list-item>
      `,
		});

		// Trailing container should be rendered when slot has content
		const trailingContainer = page.root.shadowRoot.querySelector(
			".action-list-item__trailing",
		);
		expect(trailingContainer).not.toBeNull();

		const trailingSlot = trailingContainer.querySelector(
			'slot[name="trailing"]',
		);
		expect(trailingSlot).not.toBeNull();
	});

	it("renders with both leading and trailing slots", async () => {
		const page = await newSpecPage({
			components: [ActionListItem],
			html: `
        <ifx-action-list-item item-title="Test Title">
          <ifx-icon slot="leading" icon="home-16"></ifx-icon>
          <ifx-icon slot="trailing" icon="chevron-right-16"></ifx-icon>
        </ifx-action-list-item>
      `,
		});

		const leadingContainer = page.root.shadowRoot.querySelector(
			".action-list-item__leading",
		);
		const trailingContainer = page.root.shadowRoot.querySelector(
			".action-list-item__trailing",
		);

		expect(leadingContainer).not.toBeNull();
		expect(trailingContainer).not.toBeNull();
	});

	it("applies disabled state", async () => {
		const page = await newSpecPage({
			components: [ActionListItem],
			html: `<ifx-action-list-item item-title="Test Title" disabled="true"></ifx-action-list-item>`,
		});
		const rootDiv = page.root.shadowRoot.querySelector(".action-list-item");
		expect(rootDiv.classList.contains("action-list-item--disabled")).toBe(true);
		expect(rootDiv.getAttribute("aria-disabled")).toBe("true");
		expect(rootDiv.getAttribute("tabindex")).toBe("-1");
	});

	it("applies clickable state when href is provided", async () => {
		const page = await newSpecPage({
			components: [ActionListItem],
			html: `<ifx-action-list-item item-title="Test Title" href="/test"></ifx-action-list-item>`,
		});
		const rootDiv = page.root.shadowRoot.querySelector(".action-list-item");
		expect(rootDiv.classList.contains("action-list-item--clickable")).toBe(
			true,
		);
		expect(rootDiv.getAttribute("tabindex")).toBe("0");
	});

	it("applies clickable state when value is provided", async () => {
		const page = await newSpecPage({
			components: [ActionListItem],
			html: `<ifx-action-list-item item-title="Test Title" value="test-value"></ifx-action-list-item>`,
		});
		const rootDiv = page.root.shadowRoot.querySelector(".action-list-item");
		expect(rootDiv.classList.contains("action-list-item--clickable")).toBe(
			true,
		);
		expect(rootDiv.getAttribute("tabindex")).toBe("0");
	});

	it("is not clickable when disabled even with href/value", async () => {
		const page = await newSpecPage({
			components: [ActionListItem],
			html: `<ifx-action-list-item item-title="Test Title" value="test-value" disabled="true"></ifx-action-list-item>`,
		});
		const rootDiv = page.root.shadowRoot.querySelector(".action-list-item");
		expect(rootDiv.classList.contains("action-list-item--clickable")).toBe(
			false,
		);
		expect(rootDiv.getAttribute("tabindex")).toBe("-1");
	});

	it("applies custom aria label", async () => {
		const page = await newSpecPage({
			components: [ActionListItem],
			html: `<ifx-action-list-item item-title="Test Title" item-aria-label="Custom Label"></ifx-action-list-item>`,
		});
		const rootDiv = page.root.shadowRoot.querySelector(".action-list-item");
		expect(rootDiv.getAttribute("aria-label")).toBe("Custom Label");
	});

	it("sets target attribute correctly", async () => {
		const page = await newSpecPage({
			components: [ActionListItem],
			html: `<ifx-action-list-item item-title="Test Title" href="/test" target="_blank"></ifx-action-list-item>`,
		});

		// Test is mainly for ensuring the property is properly set
		expect(page.rootInstance.target).toBe("_blank");
	});

	it("emits click event when clicked", async () => {
		const page = await newSpecPage({
			components: [ActionListItem],
			html: `<ifx-action-list-item item-title="Test Title" value="test-value"></ifx-action-list-item>`,
		});

		const clickSpy = jest.fn();
		page.root.addEventListener("ifxActionListItemClick", clickSpy);

		const rootDiv = page.root.shadowRoot.querySelector(
			".action-list-item",
		) as HTMLElement;
		rootDiv.click();

		await page.waitForChanges();

		expect(clickSpy).toHaveBeenCalledTimes(1);
		expect(clickSpy.mock.calls[0][0].detail.value).toBe("test-value");
		expect(clickSpy.mock.calls[0][0].detail.component).toBe(page.rootInstance);
	});

	it("emits click event with href details", async () => {
		const page = await newSpecPage({
			components: [ActionListItem],
			html: `<ifx-action-list-item item-title="Test Title" href="/test" target="_blank"></ifx-action-list-item>`,
		});

		const clickSpy = jest.fn();
		page.root.addEventListener("ifxActionListItemClick", clickSpy);

		const rootDiv = page.root.shadowRoot.querySelector(
			".action-list-item",
		) as HTMLElement;
		rootDiv.click();

		await page.waitForChanges();

		expect(clickSpy).toHaveBeenCalledTimes(1);
		const eventDetail = clickSpy.mock.calls[0][0].detail;
		expect(eventDetail.href).toBe("/test");
		expect(eventDetail.target).toBe("_blank");
	});

	it("does not emit click event when disabled", async () => {
		const page = await newSpecPage({
			components: [ActionListItem],
			html: `<ifx-action-list-item item-title="Test Title" value="test-value" disabled="true"></ifx-action-list-item>`,
		});

		const clickSpy = jest.fn();
		page.root.addEventListener("ifxActionListItemClick", clickSpy);

		const rootDiv = page.root.shadowRoot.querySelector(
			".action-list-item",
		) as HTMLElement;
		rootDiv.click();

		await page.waitForChanges();

		expect(clickSpy).not.toHaveBeenCalled();
	});

	it("handles keyboard events", async () => {
		const page = await newSpecPage({
			components: [ActionListItem],
			html: `<ifx-action-list-item item-title="Test Title" value="test-value"></ifx-action-list-item>`,
		});

		const clickSpy = jest.fn();
		page.root.addEventListener("ifxActionListItemClick", clickSpy);

		const rootDiv = page.root.shadowRoot.querySelector(
			".action-list-item",
		) as HTMLElement;

		// Test Enter key
		const enterEvent = new KeyboardEvent("keydown", { key: "Enter" });
		rootDiv.dispatchEvent(enterEvent);

		await page.waitForChanges();
		expect(clickSpy).toHaveBeenCalledTimes(1);

		// Test Space key
		const spaceEvent = new KeyboardEvent("keydown", { key: " " });
		rootDiv.dispatchEvent(spaceEvent);

		await page.waitForChanges();
		expect(clickSpy).toHaveBeenCalledTimes(2);
	});

	it("does not handle keyboard events when disabled", async () => {
		const page = await newSpecPage({
			components: [ActionListItem],
			html: `<ifx-action-list-item item-title="Test Title" value="test-value" disabled="true"></ifx-action-list-item>`,
		});

		const clickSpy = jest.fn();
		page.root.addEventListener("ifxActionListItemClick", clickSpy);

		const rootDiv = page.root.shadowRoot.querySelector(
			".action-list-item",
		) as HTMLElement;

		const enterEvent = new KeyboardEvent("keydown", { key: "Enter" });
		rootDiv.dispatchEvent(enterEvent);

		await page.waitForChanges();
		expect(clickSpy).not.toHaveBeenCalled();
	});

	it("has correct default values", async () => {
		const page = await newSpecPage({
			components: [ActionListItem],
			html: `<ifx-action-list-item item-title="Test Title"></ifx-action-list-item>`,
		});

		expect(page.rootInstance.target).toBe("_self");
		expect(page.rootInstance.disabled).toBe(false);
		expect(page.rootInstance.value).toBeUndefined();
		expect(page.rootInstance.href).toBeUndefined();
		expect(page.rootInstance.description).toBeUndefined();
		expect(page.rootInstance.itemAriaLabel).toBeUndefined();
	});
});
