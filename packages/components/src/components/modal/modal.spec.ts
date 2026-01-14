import { newSpecPage } from "jest-stencil-runner";
import { IfxModal } from "./modal";

// Mock the animation utility
jest.mock("../..//shared/utils/animation", () => ({
	animationTo: jest.fn(() => ({
		addEventListener: (event, callback) => {
			if (event === "finish") setTimeout(callback, 0);
			return { remove: jest.fn() };
		},
	})),
	KEYFRAMES: {
		fadeIn: {},
		fadeOut: {},
	},
}));

describe("ifx-modal", () => {
	beforeEach(() => {
		// Mock lifecycle methods directly to avoid DOM issues
		IfxModal.prototype.componentDidLoad = jest.fn();
		IfxModal.prototype.handleComponentOverflow = jest.fn();
		IfxModal.prototype.isModalContentContainerHeightReachedViewport = jest.fn(
			() => Promise.resolve(false),
		);

		// Prevent the component from trying to add event listeners to window
		jest.spyOn(window, "addEventListener").mockImplementation(() => {});
		jest.spyOn(window, "removeEventListener").mockImplementation(() => {});
	});

	it("renders with default props", async () => {
		const page = await newSpecPage({
			components: [IfxModal],
			html: `<ifx-modal></ifx-modal>`,
		});

		expect(page.root).toBeTruthy();
		const caption = page.root.shadowRoot.querySelector(".modal-caption");
		expect(caption.textContent).toBe("Modal Title");
	});

	it("renders with custom caption", async () => {
		const page = await newSpecPage({
			components: [IfxModal],
			html: `<ifx-modal caption="Custom Title"></ifx-modal>`,
		});

		const caption = page.root.shadowRoot.querySelector(".modal-caption");
		expect(caption.textContent).toBe("Custom Title");
	});

	it("renders with different sizes", async () => {
		const page = await newSpecPage({
			components: [IfxModal],
			html: `<ifx-modal size="m"></ifx-modal>`,
		});

		const contentContainer = page.root.shadowRoot.querySelector(
			".modal-content-container",
		);
		expect(contentContainer.classList.contains("m")).toBeTruthy();
	});

	it("respects showCloseButton prop", async () => {
		// With close button (default)
		const page1 = await newSpecPage({
			components: [IfxModal],
			html: `<ifx-modal></ifx-modal>`,
		});

		const closeButton1 = page1.root.shadowRoot.querySelector(
			".modal-close-button",
		);
		expect(closeButton1).toBeTruthy();

		// Without close button
		const page2 = await newSpecPage({
			components: [IfxModal],
			html: `<ifx-modal show-close-button="false"></ifx-modal>`,
		});

		const closeButton2 = page2.root.shadowRoot.querySelector(
			".modal-close-button",
		);
		expect(closeButton2).toBeFalsy();
	});
});
