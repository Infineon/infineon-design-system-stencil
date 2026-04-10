import { newSpecPage } from "jest-stencil-runner";
import { TextArea } from "./textarea";

let mockSetFormValue: jest.Mock;

beforeEach(() => {
	mockSetFormValue = jest.fn();
	HTMLElement.prototype.attachInternals = jest.fn().mockReturnValue({
		setFormValue: mockSetFormValue,
	} as any);
});

afterEach(() => {
	jest.restoreAllMocks();
});

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

	it("reflects the name on the host for form submission", async () => {
		const page = await newSpecPage({
			components: [TextArea],
			html: `<ifx-textarea></ifx-textarea>`,
		});

		page.root.name = "description";
		await page.waitForChanges();

		expect(page.root.getAttribute("name")).toBe("description");
		expect(page.root.shadowRoot.querySelector("textarea")?.getAttribute("name")).toBeNull();
	});

	it("syncs the form value when the textarea changes", async () => {
		const page = await newSpecPage({
			components: [TextArea],
			html: `<ifx-textarea></ifx-textarea>`,
		});

		mockSetFormValue.mockClear();

		const textarea = page.root.shadowRoot.querySelector("textarea") as HTMLTextAreaElement;
		textarea.value = "hello";
		textarea.dispatchEvent(new Event("input", { bubbles: true }));
		await page.waitForChanges();

		expect(page.root).toHaveProperty("value", "hello");
		expect(mockSetFormValue).toHaveBeenCalledWith("hello");
	});

	it("resets to the initial value when the form is reset", async () => {
		const page = await newSpecPage({
			components: [TextArea],
			html: `<ifx-textarea value="initial"></ifx-textarea>`,
		});

		page.root.value = "changed";
		await page.waitForChanges();
		mockSetFormValue.mockClear();

		(page.rootInstance as TextArea).formResetCallback();
		await page.waitForChanges();

		const textarea = page.root.shadowRoot.querySelector("textarea") as HTMLTextAreaElement;
		expect(page.root).toHaveProperty("value", "initial");
		expect(textarea.value).toBe("initial");
		expect(mockSetFormValue).toHaveBeenCalledWith("initial");
	});
});
