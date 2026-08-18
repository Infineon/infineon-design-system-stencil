import {
	Component,
	Element,
	Event,
	type EventEmitter,
	Host,
	h,
	Method,
	Prop,
	Watch,
} from "@stencil/core";
import { animationTo } from "../../shared/utils/animation";
import { isNestedInIfxComponent } from "../../shared/utils/dom-utils";
import { detectFramework } from "../../shared/utils/framework-detection";
import { trackComponent } from "../../shared/utils/tracking";

export type ToastStatus = "loading" | "success" | "warning" | "danger";

export type ToastCloseReason = "timeout" | "action" | "programmatic";

/** Base payload shared by all toast lifecycle events — the toast's stable id. */
export interface ToastEventDetail {
	/** Stable id of the toast (the `toastId` prop, or an auto-generated fallback). */
	id: string;
}

/** Payload of `ifxToastClose` — the toast id plus why it closed. */
export interface ToastCloseEventDetail extends ToastEventDetail {
	reason: ToastCloseReason;
}

/** Vertical gap between stacked toasts; must match `margin-top` in toast-container.scss ($ifxSpace50). */
const STACK_GAP_PX = 4;

/** Inner content fade + slight upward slide, paired with the host height animation. */
const FADE_IN: Keyframe[] = [
	{
		opacity: 0,
		transform: "translateY(8px)",
		easing: "cubic-bezier(0.16, 1, 0.3, 1)",
	},
	{ opacity: 1, transform: "translateY(0)" },
];
const FADE_OUT: Keyframe[] = [
	{ opacity: 1, transform: "translateY(0)" },
	{ opacity: 0, transform: "translateY(8px)" },
];

/** Maps the non-loading status values to their filled status icon. */
const STATUS_ICONS: Record<Exclude<ToastStatus, "loading">, string> = {
	success: "c-check-f-16",
	warning: "c-warning-f-16",
	danger: "c-remove-f-16",
};

@Component({
	tag: "ifx-toast",
	styleUrl: "toast.scss",
	shadow: true,
})
export class Toast {
	@Element() el: HTMLIfxToastElement;

	/** Stable id emitted with every toast event. Auto-generated when not set. */
	@Prop() readonly toastId: string;
	/** Status variant controlling the status icon and accent color. */
	@Prop() readonly status: ToastStatus = "success";
	/** Message text. Falls back to the default slot when empty. */
	@Prop() readonly message: string;
	/** Text for the trailing action button that dismisses the toast. Hidden when empty. */
	@Prop() readonly actionText: string;
	/** Auto-dismiss delay in ms. `0` disables auto-dismiss. The `loading` status never auto-dismisses. */
	@Prop() readonly duration: number = 5000;

	/** Emitted once the toast has been shown (mounted and rendered). */
	@Event() ifxToastOpen: EventEmitter<ToastEventDetail>;
	/** Emitted after the toast finished dismissing (animation complete). */
	@Event() ifxToastClose: EventEmitter<ToastCloseEventDetail>;
	/** Emitted when the action is activated (before the toast dismisses). */
	@Event() ifxToastAction: EventEmitter<ToastEventDetail>;

	private toastEl: HTMLElement;
	private dismissTimer: ReturnType<typeof setTimeout>;
	private dismissing = false;
	private internalId: string;

	componentWillLoad() {
		this.internalId = `toast-${Math.random().toString(36).substring(2, 9)}`;
	}

	/** The id surfaced in events: the `toastId` prop, or the generated fallback. */
	private get resolvedId(): string {
		return this.toastId || this.internalId;
	}

	async componentDidLoad() {
		if (!isNestedInIfxComponent(this.el)) {
			const framework = detectFramework();
			trackComponent("ifx-toast", await framework);
		}
		this.runEnterAnimation();
		this.startTimer();
		this.ifxToastOpen.emit({ id: this.resolvedId });
	}

	disconnectedCallback() {
		this.clearTimer();
	}

	/**
	 * Restart the auto-dismiss timer when the status changes (e.g. `loading` → `success`):
	 * leaving `loading` (re)starts the timer, entering `loading` clears it.
	 */
	@Watch("status")
	statusChanged(newStatus: ToastStatus, oldStatus: ToastStatus) {
		if (newStatus === oldStatus) {
			return;
		}
		this.clearTimer();
		this.startTimer();
	}

	/**
	 * Programmatically dismisses the toast. Runs the exit animation and then emits `ifxToastClose`.
	 */
	@Method()
	async dismiss(reason: ToastCloseReason = "programmatic") {
		if (this.dismissing) {
			return;
		}
		this.dismissing = true;
		this.clearTimer();
		this.emitCloseAfterExit(reason);
	}

	private startTimer() {
		if (this.duration > 0 && this.status !== "loading" && !this.dismissing) {
			this.dismissTimer = setTimeout(() => {
				this.dismiss("timeout");
			}, this.duration);
		}
	}

	private clearTimer() {
		if (this.dismissTimer) {
			clearTimeout(this.dismissTimer);
			this.dismissTimer = undefined;
		}
	}

	private skipAnimation(): boolean {
		return !this.toastEl || this.prefersReducedMotion();
	}

	private prefersReducedMotion(): boolean {
		return (
			typeof window !== "undefined" &&
			typeof window.matchMedia === "function" &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches
		);
	}

	private runEnterAnimation() {
		if (this.skipAnimation()) {
			return;
		}
		const host = this.el;
		try {
			// Grow host height + margin from 0 so the toast rises in and pushes the stack up.
			const fullHeight = host.offsetHeight;
			const isFirst = host.parentElement?.firstElementChild === host;
			const endMargin = isFirst ? 0 : STACK_GAP_PX;
			const grow = animationTo(
				host,
				[
					{ height: "0px", marginTop: "0px" },
					{ height: `${fullHeight}px`, marginTop: `${endMargin}px` },
				],
				{ duration: 250, easing: "cubic-bezier(0.16, 1, 0.3, 1)" },
			);
			grow.addEventListener("finish", () => {
				host.style.height = "";
				host.style.marginTop = "";
			});
			animationTo(this.toastEl, FADE_IN, { duration: 250 });
		} catch (_err) {
			// Web Animations API unavailable (e.g. SSR / jsdom); render statically.
			host.style.height = "";
			host.style.marginTop = "";
		}
	}

	private emitCloseAfterExit(reason: ToastCloseReason) {
		const emit = () => this.ifxToastClose.emit({ id: this.resolvedId, reason });
		if (this.skipAnimation()) {
			emit();
			return;
		}
		const host = this.el;
		try {
			// Collapse host height + margin to 0 so the stack closes up as the toast leaves.
			const startHeight = host.offsetHeight;
			const startMargin = parseFloat(getComputedStyle(host).marginTop) || 0;
			const collapse = animationTo(
				host,
				[
					{ height: `${startHeight}px`, marginTop: `${startMargin}px` },
					{ height: "0px", marginTop: "0px" },
				],
				{ duration: 200, easing: "cubic-bezier(0.4, 0, 1, 1)" },
			);
			collapse.addEventListener("finish", emit);
			animationTo(this.toastEl, FADE_OUT, { duration: 200 });
		} catch (_err) {
			emit();
		}
	}

	private handleAction = () => {
		this.ifxToastAction.emit({ id: this.resolvedId });
		this.dismiss("action");
	};

	private renderIcon() {
		if (this.status === "loading") {
			return <ifx-spinner variant="default" size="s" ariaLabelText="Loading" />;
		}
		return <ifx-icon icon={STATUS_ICONS[this.status]} />;
	}

	render() {
		const isDanger = this.status === "danger";
		return (
			<Host>
				<div
					ref={(el) => {
						this.toastEl = el;
					}}
					class={`ifx-toast ifx-toast--${this.status}`}
					role={isDanger ? "alert" : "status"}
					aria-live={isDanger ? "assertive" : "polite"}
				>
					<div class="ifx-toast__icon">{this.renderIcon()}</div>
					<div class="ifx-toast__body">
						{this.message ? this.message : <slot />}
					</div>
					{this.actionText && (
						<div class="ifx-toast__action">
							<button type="button" onClick={this.handleAction}>
								{this.actionText}
							</button>
						</div>
					)}
				</div>
			</Host>
		);
	}
}
