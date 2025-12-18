import { newSpecPage } from "jest-stencil-runner";
import { Download } from "./download";

describe("ifx-download", () => {
	it("should render with default props", async () => {
		const { root } = await newSpecPage({
			components: [Download],
			html: `<ifx-download>Download CSS Tokens</ifx-download>`,
		});

		expect(root).not.toBeNull();
		const link = root.shadowRoot.querySelector("ifx-link");
		expect(link).not.toBeNull();
		expect(link.getAttribute("href")).toContain("css-variables.css");
		expect(link.getAttribute("download")).toBe("infineon-tokens.css");
		expect(link.getAttribute("size")).toBe("m");
		expect(link.getAttribute("variant")).toBe("bold");
	});

	it("should render with scss option", async () => {
		const { root } = await newSpecPage({
			components: [Download],
			html: `<ifx-download tokens="scss">Download SCSS Tokens</ifx-download>`,
		});

		const link = root.shadowRoot.querySelector("ifx-link");
		expect(link.getAttribute("href")).toContain("scss-variables.scss");
		expect(link.getAttribute("download")).toBe("infineon-tokens.scss");
	});

	it("should handle click and initiate download", async () => {
		const page = await newSpecPage({
			components: [Download],
			html: `<ifx-download>Download Tokens</ifx-download>`,
		});

		// Mock fetch API
		const originalFetch = global.fetch;
		const mockBlob = new Blob(["test content"], { type: "text/plain" });
		const mockResponse = { blob: () => Promise.resolve(mockBlob) };
		global.fetch = jest.fn().mockResolvedValue(mockResponse);

		// Mock URL.createObjectURL
		const mockUrl = "blob:mock-url";
		global.URL.createObjectURL = jest.fn().mockReturnValue(mockUrl);

		// Mock document.createElement and element methods
		const mockLink = {
			href: "",
			download: "",
			click: jest.fn(),
		};
		jest
			.spyOn(document, "createElement")
			.mockImplementation(() => mockLink as any);

		// Trigger click on the link
		const link = page.root.shadowRoot.querySelector("ifx-link");
		const clickEvent = new MouseEvent("click", { bubbles: true });
		jest.spyOn(clickEvent, "preventDefault");
		link.dispatchEvent(clickEvent);

		// Wait for promises to resolve
		await new Promise((resolve) => setTimeout(resolve, 0));

		// Verify that preventDefault was called
		expect(clickEvent.preventDefault).toHaveBeenCalled();

		// Verify fetch was called with correct URL
		expect(global.fetch).toHaveBeenCalledWith(
			"https://raw.githubusercontent.com/Infineon/public-assets/main/ifx-tokens/css-variables.css",
		);

		// Verify link properties were set correctly
		expect(mockLink.href).toBe(mockUrl);
		expect(mockLink.download).toBe("infineon-tokens.css");
		expect(mockLink.click).toHaveBeenCalled();

		// Restore original implementations
		global.fetch = originalFetch;
	});

	it("should pass slot content to link", async () => {
		const { root } = await newSpecPage({
			components: [Download],
			html: `<ifx-download>Custom Text</ifx-download>`,
		});

		const link = root.shadowRoot.querySelector("ifx-link");
		expect(link.innerHTML).toContain("<slot></slot>");
	});
});
