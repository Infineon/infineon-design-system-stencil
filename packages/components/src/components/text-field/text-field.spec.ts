import { newSpecPage } from "jest-stencil-runner";
import { TextField } from "./text-field";

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

describe("ifx-text-field", () => {
	it("renders with default props", async () => {
		const page = await newSpecPage({
			components: [TextField],
			html: `<ifx-text-field>Label Text</ifx-text-field>`,
		});

		// Basic rendering check
		expect(page.root).toBeTruthy();
		expect(page.root.shadowRoot).toBeTruthy();

		// Check container and attributes
		const container = page.root.shadowRoot.querySelector(
			".textInput__container",
		);
		expect(container).toBeTruthy();
		expect(container.getAttribute("aria-label")).toBe(
			"a text field for user input",
		);
		expect(container.getAttribute("aria-disabled")).toBe(null);

		// Check input element
		const input = page.root.shadowRoot.querySelector("input");
		expect(input).toBeTruthy();
		expect(input.getAttribute("placeholder")).toBe("Placeholder");
		expect(input.getAttribute("type")).toBe("text");
		expect(input.disabled).toBe(false);

		// Check that no error or success classes exist
		expect(input.classList.contains("error")).toBe(false);
		expect(input.classList.contains("success")).toBe(false);

		// No icon should be present by default
		const icon = page.root.shadowRoot.querySelector(".input-icon");
		expect(icon).toBeFalsy();

		// No caption should be present by default
		const caption = page.root.shadowRoot.querySelector(
			".textInput__bottom-wrapper-caption",
		);
		expect(caption).toBeFalsy();
	});

	// Rest of tests remain the same
	it("renders with icon", async () => {
		const page = await newSpecPage({
			components: [TextField],
			html: `<ifx-text-field icon="test-icon">Label with Icon</ifx-text-field>`,
		});

		// Check icon is rendered
		const icon = page.root.shadowRoot.querySelector(".input-icon");
		expect(icon).toBeTruthy();
		expect(icon.getAttribute("icon")).toBe("test-icon");

		// Input should have the icon class
		const input = page.root.shadowRoot.querySelector("input");
		expect(input.classList.contains("icon")).toBe(true);
	});

	it("reflects the name on the host for form submission", async () => {
		const page = await newSpecPage({
			components: [TextField],
			html: `<ifx-text-field></ifx-text-field>`,
		});

		page.root.name = "username";
		await page.waitForChanges();

		expect(page.root.getAttribute("name")).toBe("username");
		expect(page.root.shadowRoot.querySelector("input")?.getAttribute("name")).toBeNull();
	});

	it("syncs the form value when the input changes", async () => {
		const page = await newSpecPage({
			components: [TextField],
			html: `<ifx-text-field></ifx-text-field>`,
		});

		mockSetFormValue.mockClear();

		const input = page.root.shadowRoot.querySelector("input") as HTMLInputElement;
		input.value = "hello";
		input.dispatchEvent(new Event("input", { bubbles: true }));
		await page.waitForChanges();

		expect(page.root).toHaveProperty("value", "hello");
		expect(mockSetFormValue).toHaveBeenCalledWith("hello");
	});

	it("resets to the initial value when the form is reset", async () => {
		const page = await newSpecPage({
			components: [TextField],
			html: `<ifx-text-field value="initial"></ifx-text-field>`,
		});

		page.root.value = "changed";
		await page.waitForChanges();
		mockSetFormValue.mockClear();

		(page.rootInstance as TextField).formResetCallback();
		await page.waitForChanges();

		const input = page.root.shadowRoot.querySelector("input") as HTMLInputElement;
		expect(page.root).toHaveProperty("value", "initial");
		expect(input.value).toBe("initial");
		expect(mockSetFormValue).toHaveBeenCalledWith("initial");
	});
});
