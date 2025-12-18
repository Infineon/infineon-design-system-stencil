import { newSpecPage } from "jest-stencil-runner";
import { IfxTabs } from "./tabs";

// Improved mock for ifx-tab component
class MockTab extends HTMLElement {
	_header: string = "Tab";
	_disabled: boolean = false;
	_icon: string = "";
	_iconPosition: string = "left";

	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	// Handle attribute changes correctly
	static get observedAttributes() {
		return ["header", "disabled", "icon", "icon-position"];
	}

	attributeChangedCallback(name, newValue) {
		if (name === "header") {
			this._header = newValue;
		} else if (name === "disabled") {
			this._disabled = newValue !== null;
		} else if (name === "icon") {
			this._icon = newValue;
		} else if (name === "icon-position") {
			this._iconPosition = newValue;
		}

		// Emit header change event when header attribute changes
		if (name === "header") {
			this.dispatchEvent(
				new CustomEvent("tabHeaderChange", {
					detail: this._header,
					bubbles: true,
					composed: true,
				}),
			);
		}
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = `<div>Tab Content</div>`;

		// Initialize from attributes
		if (this.hasAttribute("header")) {
			this._header = this.getAttribute("header");
		}
		this._disabled = this.hasAttribute("disabled");
		if (this.hasAttribute("icon")) {
			this._icon = this.getAttribute("icon");
		}
		if (this.hasAttribute("icon-position")) {
			this._iconPosition = this.getAttribute("icon-position");
		}

		// Emit initial header value
		this.dispatchEvent(
			new CustomEvent("tabHeaderChange", {
				detail: this._header,
				bubbles: true,
				composed: true,
			}),
		);
	}

	// Getter methods for parent component to access
	get header() {
		return this._header;
	}

	get disabled() {
		return this._disabled;
	}

	get icon() {
		return this._icon;
	}

	get iconPosition() {
		return this._iconPosition;
	}
}

// Register the mock component
customElements.define("ifx-tab", MockTab);

describe("ifx-tabs", () => {
	it("renders with basic structure", async () => {
		const page = await newSpecPage({
			components: [IfxTabs],
			html: `
        <ifx-tabs>
          <ifx-tab header="Tab 1">Content 1</ifx-tab>
          <ifx-tab header="Tab 2">Content 2</ifx-tab>
          <ifx-tab header="Tab 3">Content 3</ifx-tab>
        </ifx-tabs>
      `,
		});

		// Wait for component to process changes
		await page.waitForChanges();

		// Basic rendering check
		expect(page.root).toBeTruthy();
		expect(page.root.shadowRoot).toBeTruthy();

		// Check default props
		expect(page.rootInstance.orientation).toBe("horizontal");
		expect(page.rootInstance.activeTabIndex).toBe(0);
		expect(page.rootInstance.fullWidth).toBe(false);

		// Check that tabs container is rendered
		const tabsContainer = page.root.shadowRoot.querySelector(".tabs");
		expect(tabsContainer).toBeTruthy();
		expect(tabsContainer.classList.contains("horizontal")).toBe(true);

		// Check tab list
		const tabsList = page.root.shadowRoot.querySelector(".tabs-list");
		expect(tabsList).toBeTruthy();
		expect(tabsList.getAttribute("role")).toBe("tablist");

		// Check tab items
		const tabItems = page.root.shadowRoot.querySelectorAll(".tab-item");
		expect(tabItems.length).toBe(3);
		expect(tabItems[0].classList.contains("active")).toBe(true);
		expect(tabItems[1].classList.contains("active")).toBe(false);

		// Check tab content
		const tabContent = page.root.shadowRoot.querySelector(".tab-content");
		expect(tabContent).toBeTruthy();
	});
});
