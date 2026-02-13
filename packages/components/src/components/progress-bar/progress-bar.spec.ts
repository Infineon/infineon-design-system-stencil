import { newSpecPage } from "jest-stencil-runner";
import { ProgressBar } from "./progress-bar";

describe("ifx-progress-bar", () => {
	it("renders with default props", async () => {
		const page = await newSpecPage({
			components: [ProgressBar],
			html: `<ifx-progress-bar></ifx-progress-bar>`,
		});

		expect(page.root).toBeTruthy();
		const progressBarContainer =
			page.root.shadowRoot.querySelector(".progress-bar");
		expect(progressBarContainer).toBeTruthy();

		const progressElement = page.root.shadowRoot.querySelector(
			".progress",
		) as HTMLElement;
		expect(progressElement).toBeTruthy();
		expect(progressElement.style.width).toBe("0%");

		// No label should be visible with default props
		const label = page.root.shadowRoot.querySelector(".label");
		expect(label).toBeFalsy();
	});

	it("renders with specific value", async () => {
		const page = await newSpecPage({
			components: [ProgressBar],
			html: `<ifx-progress-bar value="75"></ifx-progress-bar>`,
		});

		const progressElement = page.root.shadowRoot.querySelector(
			".progress",
		) as HTMLElement;
		expect(progressElement.style.width).toBe("75%");
	});

	it("calls valueChanged when value actually changes", async () => {
		const page = await newSpecPage({
			components: [ProgressBar],
			html: `<ifx-progress-bar value="75"></ifx-progress-bar>`,
		});

		const instance = page.rootInstance;
		const spy = jest.spyOn(instance, "valueChanged");

		// Set a different value
		page.root.value = 80;
		await page.waitForChanges();

		// The watcher SHOULD be called when value changes
		expect(spy).toHaveBeenCalled();
		// The first argument should be the new value (80)
		expect(spy.mock.calls[0][0]).toBe(80);
		// The second argument should be the old value (75)
		expect(spy.mock.calls[0][1]).toBe(75);
	});

	it("applies size class correctly", async () => {
		const page = await newSpecPage({
			components: [ProgressBar],
			html: `<ifx-progress-bar size="s"></ifx-progress-bar>`,
		});

		const progressBarContainer =
			page.root.shadowRoot.querySelector(".progress-bar");
		expect(progressBarContainer.classList.contains("s")).toBeTruthy();
	});

	it('shows label when showLabel is true and size is not "s"', async () => {
		const page = await newSpecPage({
			components: [ProgressBar],
			html: `<ifx-progress-bar value="42" show-label="true"></ifx-progress-bar>`,
		});

		const label = page.root.shadowRoot.querySelector(".label");
		expect(label).toBeTruthy();
		expect(label.textContent).toBe("42%");
	});

	it('does not show label when size is "s" even if showLabel is true', async () => {
		const page = await newSpecPage({
			components: [ProgressBar],
			html: `<ifx-progress-bar value="42" size="s" show-label="true"></ifx-progress-bar>`,
		});

		const label = page.root.shadowRoot.querySelector(".label");
		expect(label).toBeFalsy();
	});

	it("does not show label when value is 0", async () => {
		const page = await newSpecPage({
			components: [ProgressBar],
			html: `<ifx-progress-bar value="0" show-label="true"></ifx-progress-bar>`,
		});

		const label = page.root.shadowRoot.querySelector(".label");
		expect(label).toBeFalsy();
	});
});
