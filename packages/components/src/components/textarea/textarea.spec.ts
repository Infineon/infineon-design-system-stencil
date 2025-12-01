import { newSpecPage } from "jest-stencil-runner";
import { TextArea } from "./textarea";

// Skip the real componentWillLoad that uses internals
//TextArea.prototype.componentWillLoad = jest.fn();

describe("ifx-textarea", () => {
	it("renders with basic structure", async () => {
		const page = await newSpecPage({
			components: [TextArea],
			html: `<ifx-textarea label="Test Label" placeholder="Type here..."></ifx-textarea>`,
		});

		expect(page.root).toBeTruthy();
		expect(page.root.shadowRoot).toBeTruthy();

		const label = page.root.shadowRoot.querySelector(".wrapper__label");
		expect(label).toBeTruthy();
		expect(label.textContent.trim()).toBe("Test Label");

		const textarea = page.root.shadowRoot.querySelector("textarea");
		expect(textarea).toBeTruthy();
		expect(textarea.getAttribute("aria-label")).toBe("a textarea");
		expect(textarea.getAttribute("placeholder")).toBe("Type here...");
	});
});
