import {
	Component,
	Element,
	Host,
	h,
	Method,
	Prop,
	State,
} from "@stencil/core";
import { isNestedInIfxComponent } from "../../../shared/utils/dom-utils";
import { detectFramework } from "../../../shared/utils/framework-detection";
import { trackComponent } from "../../../shared/utils/tracking";
import { applyToastConfig } from "../toast-config";
import type { ToastStatus } from "../toast";

export type ToastPlacement =
	| "top-left"
	| "top-center"
	| "top-right"
	| "bottom-left"
	| "bottom-center"
	| "bottom-right";

/** Properties accepted when adding a toast imperatively via `addToast`. */
export interface ToastConfig {
	toastId?: string;
	status?: ToastStatus;
	message?: string;
	actionText?: string;
	duration?: number;
}

@Component({
	tag: "ifx-toast-container",
	styleUrl: "toast-container.scss",
	shadow: true,
})
export class ToastContainer {
	@Element() el: HTMLIfxToastContainerElement;

	/** Placement of the container on desktop. Collapses to top/bottom on mobile. */
	@Prop({ reflect: true }) readonly placement: ToastPlacement = "bottom-right";
	/** Distance in px from the viewport edge. Added on top of the navbar clearance for top placements. */
	@Prop() readonly offset: number = 16;
	/** CSS selector of the navbar/header to keep clear of on top placements. Empty disables measuring. */
	@Prop() readonly navbarSelector: string = "ifx-navbar";
	/** Maximum number of simultaneously visible toasts. `0` means unlimited. */
	@Prop() readonly max: number = 0;

	@State() navbarClearance = 0;

	private resizeRaf: number;

	async componentDidLoad() {
		if (!isNestedInIfxComponent(this.el)) {
			const framework = detectFramework();
			trackComponent("ifx-toast-container", await framework);
		}
		this.updateNavbarClearance();
		if (typeof window !== "undefined") {
			window.addEventListener("resize", this.handleResize);
		}
	}

	disconnectedCallback() {
		if (typeof window !== "undefined") {
			window.removeEventListener("resize", this.handleResize);
			if (this.resizeRaf) {
				cancelAnimationFrame(this.resizeRaf);
			}
		}
	}

	/**
	 * Creates an `ifx-toast`, appends it to the container, and removes it once dismissed.
	 * Returns the created element so callers can update or dismiss it.
	 */
	@Method()
	async addToast(config: ToastConfig = {}): Promise<HTMLIfxToastElement> {
		this.updateNavbarClearance();
		const toast = document.createElement("ifx-toast") as HTMLIfxToastElement;
		applyToastConfig(toast, config);

		toast.addEventListener("ifxToastClose", () => toast.remove(), { once: true });
		this.el.appendChild(toast);
		this.enforceMax();
		return toast;
	}

	/** Dismisses every toast currently in the container. */
	@Method()
	async dismissAll(): Promise<void> {
		await Promise.all(this.getToasts().map((toast) => toast.dismiss?.()));
	}

	/**
	 * Dismisses the oldest toasts until at most `max` remain (`max <= 0` disables the
	 * limit). Public so the `ifxToast` controller can enforce the cap after appending a
	 * toast directly, not only via `addToast`.
	 */
	@Method()
	async enforceMax(): Promise<void> {
		if (this.max <= 0) {
			return;
		}
		const toasts = this.getToasts();
		const excess = toasts.length - this.max;
		// Oldest toasts come first in DOM order; dismiss them until within the limit.
		for (let i = 0; i < excess; i++) {
			toasts[i].dismiss?.();
		}
	}

	private getToasts(): HTMLIfxToastElement[] {
		return Array.from(this.el.querySelectorAll("ifx-toast"));
	}

	private measureNavbar(): number {
		if (typeof document === "undefined") {
			return 0;
		}
		const selector = this.navbarSelector?.trim();
		if (!selector) {
			return 0;
		}
		const navbar = document.querySelector(selector) as HTMLElement | null;
		if (!navbar) {
			return 0;
		}
		return Math.max(0, navbar.getBoundingClientRect().bottom);
	}

	private updateNavbarClearance = () => {
		this.navbarClearance = this.measureNavbar();
	};

	private handleResize = () => {
		if (typeof window === "undefined") {
			return;
		}
		if (this.resizeRaf) {
			cancelAnimationFrame(this.resizeRaf);
		}
		this.resizeRaf = requestAnimationFrame(this.updateNavbarClearance);
	};

	render() {
		return (
			<Host
				style={{
					"--ifx-toast-offset": `${this.offset}px`,
					"--ifx-toast-navbar": `${this.navbarClearance}px`,
				}}
			>
				<section
					class={`ifx-toast-container ifx-toast-container--${this.placement}`}
					aria-label="Notifications"
				>
					<slot />
				</section>
			</Host>
		);
	}
}
