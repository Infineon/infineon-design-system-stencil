import { newSpecPage } from "jest-stencil-runner";
import { Toast } from "../toast";
import { ToastContainer } from "./toast-container";

describe("ifx-toast-container", () => {
	it("renders with the default placement", async () => {
		const { root } = await newSpecPage({
			components: [ToastContainer],
			html: `<ifx-toast-container></ifx-toast-container>`,
		});

		expect(
			root.shadowRoot.querySelector(".ifx-toast-container--bottom-right"),
		).toBeTruthy();
		expect(root.getAttribute("placement")).toBe("bottom-right");
	});

	it("applies the placement modifier class", async () => {
		const { root } = await newSpecPage({
			components: [ToastContainer],
			html: `<ifx-toast-container placement="top-center"></ifx-toast-container>`,
		});

		expect(
			root.shadowRoot.querySelector(".ifx-toast-container--top-center"),
		).toBeTruthy();
	});

	it("slots toast children", async () => {
		const { root } = await newSpecPage({
			components: [ToastContainer, Toast],
			html: `<ifx-toast-container><ifx-toast duration="0"></ifx-toast></ifx-toast-container>`,
		});

		expect(root.querySelector("ifx-toast")).toBeTruthy();
		expect(root.shadowRoot.querySelector("slot")).toBeTruthy();
	});

	it("addToast appends a toast and removes it once dismissed", async () => {
		const { root, rootInstance, waitForChanges } = await newSpecPage({
			components: [ToastContainer, Toast],
			html: `<ifx-toast-container></ifx-toast-container>`,
		});

		const toast = await rootInstance.addToast({
			status: "success",
			message: "Hi",
			duration: 0,
		});
		await waitForChanges();
		expect(root.querySelector("ifx-toast")).toBeTruthy();

		await (toast as any).dismiss();
		await waitForChanges();
		expect(root.querySelector("ifx-toast")).toBeFalsy();
	});

	it("dismissAll dismisses every child toast", async () => {
		const { root, rootInstance, waitForChanges } = await newSpecPage({
			components: [ToastContainer, Toast],
			html: `<ifx-toast-container></ifx-toast-container>`,
		});

		await rootInstance.addToast({
			message: "a",
			duration: 0,
		});
		await rootInstance.addToast({
			message: "b",
			duration: 0,
		});
		await waitForChanges();
		expect(root.querySelectorAll("ifx-toast").length).toBe(2);

		await rootInstance.dismissAll();
		await waitForChanges();

		expect(root.querySelectorAll("ifx-toast").length).toBe(0);
	});
});
