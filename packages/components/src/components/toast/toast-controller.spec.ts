import { newSpecPage } from "jest-stencil-runner";
import { Toast } from "./toast";
import { ToastContainer } from "./toast-container/toast-container";
import { ifxToast } from "./toast-controller";

const opts = { duration: 0 } as const;

describe("ifxToast", () => {
	let page: Awaited<ReturnType<typeof newSpecPage>>;

	beforeEach(async () => {
		// Bootstraps the Stencil platform (global document + registers the components).
		page = await newSpecPage({
			components: [ToastContainer, Toast],
			html: `<div></div>`,
		});
	});

	afterEach(async () => {
		ifxToast.dismissAll();
		await page.waitForChanges();
		document.body.innerHTML = "";
	});

	it("mounts a single container and a toast for success()", async () => {
		const handle = ifxToast.success("hi", { placement: "top-center", ...opts });
		await page.waitForChanges();

		const containers = document.body.querySelectorAll("ifx-toast-container");
		expect(containers.length).toBe(1);
		expect((containers[0] as any).placement).toBe("top-center");

		const toasts = containers[0].querySelectorAll("ifx-toast");
		expect(toasts.length).toBe(1);
		expect(handle.el).toBe(toasts[0]);
		expect(handle.el?.status).toBe("success");
		expect(handle.el?.message).toBe("hi");
	});

	it("reuses the container for the same placement", async () => {
		ifxToast.success("a", { placement: "bottom-right", ...opts });
		ifxToast.warning("b", { placement: "bottom-right", ...opts });
		await page.waitForChanges();

		expect(document.body.querySelectorAll("ifx-toast-container").length).toBe(
			1,
		);
		expect(document.body.querySelectorAll("ifx-toast").length).toBe(2);
	});

	it("creates separate containers for different placements", async () => {
		ifxToast.success("a", { placement: "top-left", ...opts });
		ifxToast.danger("b", { placement: "bottom-right", ...opts });
		await page.waitForChanges();

		expect(document.body.querySelectorAll("ifx-toast-container").length).toBe(
			2,
		);
	});

	it("update() sets properties on the toast element", async () => {
		const handle = ifxToast.loading("Saving…", opts);
		await page.waitForChanges();
		expect(handle.el?.status).toBe("loading");

		handle.update({ status: "success", message: "Saved" });
		await page.waitForChanges();
		expect(handle.el?.status).toBe("success");
		expect(handle.el?.message).toBe("Saved");
	});

	it("update() adding actionText renders the dismiss action (loading → success)", async () => {
		const handle = ifxToast.loading("Saving…", opts);
		await page.waitForChanges();
		// No action while loading and none configured yet.
		expect(
			handle.el?.shadowRoot?.querySelector(".ifx-toast__action"),
		).toBeFalsy();

		handle.update({ status: "success", message: "Saved", actionText: "Dismiss" });
		await page.waitForChanges();

		const action = handle.el?.shadowRoot?.querySelector(
			".ifx-toast__action button",
		) as HTMLButtonElement | null;
		expect(action).toBeTruthy();
		expect(action?.textContent).toContain("Dismiss");
	});

	it("enforces the container max by dismissing the oldest toasts", async () => {
		ifxToast.success("a", { placement: "bottom-right", max: 2, ...opts });
		ifxToast.success("b", { placement: "bottom-right", ...opts });
		ifxToast.success("c", { placement: "bottom-right", ...opts });
		await page.waitForChanges();
		await page.waitForChanges();

		const messages = Array.from(
			document.body.querySelectorAll("ifx-toast"),
		).map((t) => (t as any).message);
		// Oldest ("a") dismissed to satisfy max=2; newest two remain.
		expect(messages).toEqual(["b", "c"]);
	});

	it("dismiss() removes the toast from the DOM", async () => {
		const handle = ifxToast.success("hi", opts);
		await page.waitForChanges();
		expect(document.body.querySelectorAll("ifx-toast").length).toBe(1);

		handle.dismiss();
		await page.waitForChanges();
		expect(document.body.querySelectorAll("ifx-toast").length).toBe(0);
	});

	it("is a no-op when the DOM is unavailable (SSR guard)", () => {
		const originalDocument = global.document;
		(global as any).document = undefined;

		try {
			const handle = ifxToast.success("hi", opts);
			expect(handle.el).toBeNull();
		} finally {
			(global as any).document = originalDocument;
		}
	});
});
