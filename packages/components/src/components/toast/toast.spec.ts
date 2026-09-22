import { newSpecPage } from "jest-stencil-runner";
import { Toast } from "./toast";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe("ifx-toast", () => {
	it("should render", async () => {
		const { root } = await newSpecPage({
			components: [Toast],
			html: `<ifx-toast duration="0"></ifx-toast>`,
		});

		expect(root.shadowRoot.querySelector(".ifx-toast")).toBeTruthy();
	});

	it("applies the status modifier class", async () => {
		for (const status of ["loading", "success", "warning", "danger"]) {
			const { root } = await newSpecPage({
				components: [Toast],
				html: `<ifx-toast status="${status}" duration="0"></ifx-toast>`,
			});

			expect(
				root.shadowRoot.querySelector(`.ifx-toast--${status}`),
			).toBeTruthy();
		}
	});

	it("renders the matching status icon", async () => {
		const cases: Record<string, string> = {
			success: "c-check-f-16",
			warning: "c-warning-f-16",
			danger: "c-remove-f-16",
		};

		for (const [status, icon] of Object.entries(cases)) {
			const { root } = await newSpecPage({
				components: [Toast],
				html: `<ifx-toast status="${status}" duration="0"></ifx-toast>`,
			});

			const iconEl = root.shadowRoot.querySelector(".ifx-toast__icon ifx-icon");
			expect(iconEl?.getAttribute("icon")).toBe(icon);
		}
	});

	it("renders a spinner (not an icon) for the loading status", async () => {
		const { root } = await newSpecPage({
			components: [Toast],
			html: `<ifx-toast status="loading" duration="0"></ifx-toast>`,
		});

		expect(
			root.shadowRoot.querySelector(".ifx-toast__icon ifx-spinner"),
		).toBeTruthy();
		expect(
			root.shadowRoot.querySelector(".ifx-toast__icon ifx-icon"),
		).toBeFalsy();
	});

	it("renders the message text", async () => {
		const { root } = await newSpecPage({
			components: [Toast],
			html: `<ifx-toast message="Hello world" duration="0"></ifx-toast>`,
		});

		expect(
			root.shadowRoot.querySelector(".ifx-toast__body").textContent,
		).toContain("Hello world");
	});

	it("falls back to the default slot when no message is set", async () => {
		const { root } = await newSpecPage({
			components: [Toast],
			html: `<ifx-toast duration="0"></ifx-toast>`,
		});

		expect(root.shadowRoot.querySelector(".ifx-toast__body slot")).toBeTruthy();
	});

	it("does not render a close button", async () => {
		const { root } = await newSpecPage({
			components: [Toast],
			html: `<ifx-toast duration="0"></ifx-toast>`,
		});

		expect(root.shadowRoot.querySelector(".ifx-toast__close")).toBeFalsy();
	});

	it("renders no action when actionText is empty", async () => {
		const { root } = await newSpecPage({
			components: [Toast],
			html: `<ifx-toast duration="0"></ifx-toast>`,
		});

		expect(root.shadowRoot.querySelector(".ifx-toast__action")).toBeFalsy();
	});

	it("dismisses (reason 'action') and emits ifxToastAction when the action button is clicked", async () => {
		const { root, waitForChanges } = await newSpecPage({
			components: [Toast],
			html: `<ifx-toast action-text="Dismiss" duration="0"></ifx-toast>`,
		});

		const actionSpy = jest.fn();
		const closeSpy = jest.fn();
		root.addEventListener("ifxToastAction", actionSpy);
		root.addEventListener("ifxToastClose", closeSpy);

		const button = root.shadowRoot.querySelector(
			".ifx-toast__action button",
		) as HTMLButtonElement;
		expect(button).toBeTruthy();
		button.click();
		await waitForChanges();

		expect(actionSpy).toHaveBeenCalled();
		expect(closeSpy).toHaveBeenCalledWith(
			expect.objectContaining({ detail: expect.objectContaining({ reason: "action" }) }),
		);
	});

	it("auto-dismisses after the duration", async () => {
		const { root, waitForChanges } = await newSpecPage({
			components: [Toast],
			html: `<ifx-toast status="success" duration="20"></ifx-toast>`,
		});

		const spy = jest.fn();
		root.addEventListener("ifxToastClose", spy);

		await wait(60);
		await waitForChanges();

		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({ detail: expect.objectContaining({ reason: "timeout" }) }),
		);
	});

	it("never auto-dismisses the loading status", async () => {
		const { root, waitForChanges } = await newSpecPage({
			components: [Toast],
			html: `<ifx-toast status="loading" duration="20"></ifx-toast>`,
		});

		const spy = jest.fn();
		root.addEventListener("ifxToastClose", spy);

		await wait(60);
		await waitForChanges();

		expect(spy).not.toHaveBeenCalled();
	});

	it("starts the auto-dismiss timer when the status changes away from loading", async () => {
		const page = await newSpecPage({
			components: [Toast],
			html: `<ifx-toast status="loading" duration="20"></ifx-toast>`,
		});

		const spy = jest.fn();
		page.root.addEventListener("ifxToastClose", spy);

		await wait(60);
		await page.waitForChanges();
		expect(spy).not.toHaveBeenCalled();

		page.root.status = "success";
		await page.waitForChanges();
		await wait(60);
		await page.waitForChanges();

		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({ detail: expect.objectContaining({ reason: "timeout" }) }),
		);
	});

	it("clears the timer when removed from the DOM", async () => {
		const page = await newSpecPage({
			components: [Toast],
			html: `<ifx-toast status="success" duration="20"></ifx-toast>`,
		});

		const spy = jest.fn();
		page.root.addEventListener("ifxToastClose", spy);

		page.root.remove();
		await wait(60);
		await page.waitForChanges();

		expect(spy).not.toHaveBeenCalled();
	});

	it("dismiss() emits ifxToastClose synchronously when animation is disabled", async () => {
		const { root, rootInstance, waitForChanges } = await newSpecPage({
			components: [Toast],
			html: `<ifx-toast duration="0"></ifx-toast>`,
		});

		const spy = jest.fn();
		root.addEventListener("ifxToastClose", spy);

		await rootInstance.dismiss();
		await waitForChanges();

		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({ detail: expect.objectContaining({ reason: "programmatic" }) }),
		);
	});

	it("emits the provided toastId in the event detail", async () => {
		const { root, rootInstance, waitForChanges } = await newSpecPage({
			components: [Toast],
			html: `<ifx-toast toast-id="my-toast" duration="0"></ifx-toast>`,
		});

		const spy = jest.fn();
		root.addEventListener("ifxToastClose", spy);

		await rootInstance.dismiss();
		await waitForChanges();

		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				detail: { id: "my-toast", reason: "programmatic" },
			}),
		);
	});

	it("emits an auto-generated id when no toastId is set", async () => {
		const { root, rootInstance, waitForChanges } = await newSpecPage({
			components: [Toast],
			html: `<ifx-toast duration="0"></ifx-toast>`,
		});

		const spy = jest.fn();
		root.addEventListener("ifxToastClose", spy);

		await rootInstance.dismiss();
		await waitForChanges();

		expect(spy).toHaveBeenCalledWith(
			expect.objectContaining({
				detail: expect.objectContaining({ id: expect.stringMatching(/^toast-/) }),
			}),
		);
	});
});
