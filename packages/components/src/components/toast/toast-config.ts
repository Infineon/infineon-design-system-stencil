import type { ToastConfig } from "./toast-container/toast-container";

/**
 * Copies the defined `ToastConfig` fields onto an `ifx-toast` element. Shared by the
 * container's `addToast` and the `ifxToast` controller so the property mapping lives
 * in one place. `undefined` fields are skipped so `update()` can patch selectively.
 */
export function applyToastConfig(
	toast: HTMLElement & ToastConfig,
	config: ToastConfig,
) {
	if (config.toastId !== undefined) toast.toastId = config.toastId;
	if (config.status !== undefined) toast.status = config.status;
	if (config.message !== undefined) toast.message = config.message;
	if (config.actionText !== undefined) toast.actionText = config.actionText;
	if (config.duration !== undefined) toast.duration = config.duration;
}
