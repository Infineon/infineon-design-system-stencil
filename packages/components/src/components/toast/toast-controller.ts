import { applyToastConfig } from "./toast-config";
import type {
	ToastConfig,
	ToastPlacement,
} from "./toast-container/toast-container";

/**
 * Structural types for the elements created at runtime. We intentionally do not
 * reference the generated `HTMLIfx*Element` globals here: those resolve in `.tsx`
 * component files but not reliably in plain `.ts` files (matching the existing
 * `as HTMLElement` pattern used by the table cell renderers).
 */
type ToastElement = HTMLElement &
	ToastConfig & {
		dismiss?: (reason?: string) => void | Promise<void>;
	};

type ToastContainerElement = HTMLElement & {
	placement?: ToastPlacement;
	max?: number;
	enforceMax?: () => void | Promise<void>;
	componentOnReady?: () => Promise<unknown>;
};

/** Options accepted by `ifxToast.show()` — the toast config plus a target placement. */
export interface ToastOptions extends ToastConfig {
	/** Which placement (corner) the toast appears in. Defaults to `bottom-right`. */
	placement?: ToastPlacement;
	/**
	 * Maximum number of simultaneously visible toasts in this placement. `0`/omitted
	 * means unlimited. Applied to the placement's container (last value wins).
	 */
	max?: number;
}

/** Returned by every `ifxToast` call to update or dismiss the created toast. */
export interface ToastHandle {
	/** The underlying `ifx-toast` element (or `null` outside a DOM environment). */
	readonly el: ToastElement | null;
	/** Updates the live toast (e.g. transition `loading` → `success`). */
	update(options: Partial<ToastOptions>): void;
	/** Dismisses the toast (runs the exit animation when available). */
	dismiss(): void;
}

const DEFAULT_PLACEMENT: ToastPlacement = "bottom-right";

/** One singleton container per placement, mounted lazily to `document.body`. */
const containers = new Map<ToastPlacement, ToastContainerElement>();

const NOOP_HANDLE: ToastHandle = {
	el: null,
	update() {},
	dismiss() {},
};

function isBrowser(): boolean {
	return (
		typeof document !== "undefined" &&
		typeof document.createElement === "function"
	);
}

function getContainer(placement: ToastPlacement): ToastContainerElement {
	const existing = containers.get(placement);
	if (existing && document.body.contains(existing)) {
		return existing;
	}
	const container = document.createElement(
		"ifx-toast-container",
	) as ToastContainerElement;
	container.placement = placement;
	document.body.appendChild(container);
	containers.set(placement, container);
	return container;
}

/**
 * Enforces the container's `max` once it is upgraded. The controller appends toasts
 * directly (not via `addToast`), so it must trigger the cap itself; awaiting
 * `componentOnReady` covers the freshly-created, not-yet-hydrated container.
 */
function enforceContainerMax(container: ToastContainerElement) {
	const run = () => container.enforceMax?.();
	const ready = container.componentOnReady?.();
	if (ready && typeof ready.then === "function") {
		ready.then(run);
	} else {
		run();
	}
}

function dismissToast(el: ToastElement) {
	if (typeof el.dismiss === "function") {
		el.dismiss();
	} else {
		// Not upgraded yet (e.g. SSR fallback): just remove it.
		el.remove();
	}
}

function createHandle(el: ToastElement): ToastHandle {
	return {
		el,
		update(options: Partial<ToastOptions>) {
			applyToastConfig(el, options);
		},
		dismiss() {
			dismissToast(el);
		},
	};
}

function show(options: ToastOptions = {}): ToastHandle {
	if (!isBrowser()) {
		// SSR / non-DOM environment: no-op so imperative calls never throw.
		return NOOP_HANDLE;
	}
	const { placement = DEFAULT_PLACEMENT, max, ...config } = options;
	const container = getContainer(placement);
	if (max !== undefined) {
		container.max = max;
	}
	const toast = document.createElement("ifx-toast") as ToastElement;
	applyToastConfig(toast, config);
	// Remove the toast from the DOM once it finishes dismissing.
	toast.addEventListener("ifxToastClose", () => toast.remove(), { once: true });
	container.appendChild(toast);
	// Cap the stack after the newest toast is in the DOM (controller bypasses addToast).
	enforceContainerMax(container);
	return createHandle(toast);
}

type ShorthandOptions = Omit<ToastOptions, "status" | "message">;

function showWithStatus(
	status: NonNullable<ToastOptions["status"]>,
	message: string,
	options?: ShorthandOptions,
): ToastHandle {
	return show({ ...options, status, message });
}

function dismissAll(placement?: ToastPlacement): void {
	if (!isBrowser()) {
		return;
	}
	const targets = placement
		? [containers.get(placement)]
		: Array.from(containers.values());
	for (const container of targets) {
		if (!container) {
			continue;
		}
		const toasts = Array.from(
			container.querySelectorAll("ifx-toast"),
		) as ToastElement[];
		for (const toast of toasts) {
			dismissToast(toast);
		}
	}
}

/**
 * Imperative helper for showing toasts from anywhere — the recommended way for
 * event/status-driven notifications. Lazily mounts a singleton `ifx-toast-container`
 * per placement to `document.body` and returns a handle to update or dismiss the toast.
 *
 * @example
 * const t = ifxToast.loading("Saving…");
 * await save();
 * t.update({ status: "success", message: "Saved" });
 */
export const ifxToast = {
	show,
	success: (message: string, options?: ShorthandOptions) =>
		showWithStatus("success", message, options),
	warning: (message: string, options?: ShorthandOptions) =>
		showWithStatus("warning", message, options),
	danger: (message: string, options?: ShorthandOptions) =>
		showWithStatus("danger", message, options),
	loading: (message: string, options?: ShorthandOptions) =>
		showWithStatus("loading", message, options),
	dismissAll,
};
