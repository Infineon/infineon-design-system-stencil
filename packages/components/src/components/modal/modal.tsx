import {
	Component,
	Element,
	Event,
	type EventEmitter,
	Host,
	h,
	Prop,
	State,
	Watch,
} from "@stencil/core";
import { animationTo, KEYFRAMES } from "../..//shared/utils/animation";
import { isNestedInIfxComponent } from "../..//shared/utils/dom-utils";
import {
	isFocusable,
	isHidden,
	queryShadowRoot,
} from "../..//shared/utils/focus-trap";
import { detectFramework } from "../..//shared/utils/framework-detection";
import { trackComponent } from "../../shared/utils/tracking";

type CloseEventTrigger = "CLOSE_BUTTON" | "ESCAPE_KEY" | "BACKDROP";

export interface BeforeCloseEventDetail {
	trigger: CloseEventTrigger;
}
@Component({
	tag: "ifx-modal",
	styleUrl: "modal.scss",
	shadow: true,
})
export class IfxModal {
	@Prop({ reflect: true, mutable: true }) opened?: boolean = false;
	@State() showModal: boolean = this.opened || false;

	@Prop() caption: string = "Modal Title";
	@Prop() captionAriaLabel: string | null;

	@Prop() closeOnOverlayClick: boolean = true;

	@Event() ifxOpen: EventEmitter;
	@Event() ifxClose: EventEmitter;

	@Prop() variant: "default" | "alert-brand" | "alert-danger" = "default";

	@Prop() size: "s" | "m" | "l" = "s";

	@Prop() alertIcon: string = "";
	@Prop() okButtonLabel: string = "OK";
	@Prop() cancelButtonLabel: string = "Cancel";
	@Prop() closeButtonAriaLabel: string | null;

	@Element() hostElement: HTMLElement;

	@State() slotButtonsPresent: boolean = false;

	@Prop() showCloseButton: boolean = true;

	private modalContainer: HTMLElement;
	private focusableElements: HTMLElement[] = [];
	private closeButton: HTMLButtonElement | HTMLIfxIconButtonElement;
	private resizeTimeout: ReturnType<typeof setTimeout>;

	handleResize = () => {
		clearTimeout(this.resizeTimeout);
		this.resizeTimeout = setTimeout(() => {
			if (this.showModal) {
				this.handleComponentOverflow();
			}
		}, 100);
	};

	async componentDidLoad() {
		if (!isNestedInIfxComponent(this.hostElement)) {
			const framework = detectFramework();
			trackComponent("ifx-modal", await framework);
		}
		// Query all focusable elements and store them in `focusableElements`.
		// Needed for the "focus trap" functionality.
		this.focusableElements = queryShadowRoot(
			this.hostElement.shadowRoot,
			(el) => isHidden(el) || el.matches("[data-focus-trap-edge]"),
			isFocusable,
		);
		window.addEventListener("resize", this.handleResize);
	}

	disconnectedCallback() {
		window.removeEventListener("resize", this.handleResize);
	}

	componentWillRender() {
		if (this.showModal) {
			this.handleComponentOverflow();
		}
	}

	async handleComponentOverflow() {
		const modalContentContainer = this.hostElement.shadowRoot.querySelector(
			".modal-content-container",
		);
		if (
			this.showModal &&
			(await this.isModalContentContainerHeightReachedViewport())
		) {
			modalContentContainer.classList.add("no-overflow");
		} else if (modalContentContainer?.classList.contains("no-overflow")) {
			modalContentContainer?.classList.remove("no-overflow");
		}
	}

	getFirstFocusableElement(): HTMLElement | null {
		return this.focusableElements[0];
	}

	getLastFocusableElement(): HTMLElement | null {
		return this.focusableElements[this.focusableElements.length - 1];
	}

	handleTopFocus = () => {
		this.attemptFocus(this.getLastFocusableElement());
	};

	handleBottomFocus = () => {
		this.attemptFocus(this.getFirstFocusableElement());
	};

	attemptFocus(element: HTMLElement | null) {
		if (element == null) {
			setTimeout(() => {
				//wait until DOM is fully loaded
				this.closeButton.focus();
			});
			return;
		}

		setTimeout(() => {
			//wait until DOM is fully loaded
			element.focus();
		}, 0);
	}

	open() {
		this.showModal = true;
		try {
			const anim = animationTo(this.modalContainer, KEYFRAMES.fadeIn, {
				duration: 200,
			});
			anim.addEventListener("finish", () => {
				// Setting focus on last item and removing immediately
				// so, on tab press first element is focused
				setTimeout(() => {
					this.getLastFocusableElement()?.focus();
					this.getLastFocusableElement()?.blur();
				}, 0);

				this.ifxOpen.emit();
			});

			this.hostElement.addEventListener("keydown", this.handleKeypress);
		} catch (err) {
			this.ifxOpen.emit();
		}
	}

	close() {
		try {
			const anim = animationTo(this.modalContainer, KEYFRAMES.fadeOut, {
				duration: 200,
			});
			anim.addEventListener("finish", () => {
				this.showModal = false;
				this.ifxClose.emit();
			});
			this.hostElement.removeEventListener("keydown", this.handleKeypress);
		} catch (err) {
			this.showModal = false;
			this.ifxClose.emit();
		}
	}

	handleKeypress = (event: KeyboardEvent) => {
		if (!this.showModal) {
			return;
		}
		if (event.key === "Escape") {
			this.doBeforeClose("ESCAPE_KEY");
		}
	};

	doBeforeClose(trigger: CloseEventTrigger) {
		const triggers = [];
		triggers.push(trigger);
		const prevented = triggers.some((event) => event.defaultPrevented);
		if (!prevented) {
			this.opened = false;
		}
	}

	@Watch("opened")
	openedChanged(newValue) {
		if (newValue === true) {
			this.open();
		} else {
			this.close();
		}
	}

	handleOverlayClick() {
		if (this.closeOnOverlayClick) {
			this.doBeforeClose("BACKDROP");
		}
	}

	handleContentUpdate(e) {
		const slotElement = e.target;
		const nodes = slotElement.assignedNodes();
		if (nodes.length > 0) {
			nodes.forEach((node) => {
				if (node.observer) {
					node.observer.disconnect();
					delete node.observer;
				}
				const observer = new MutationObserver((mutationsList, _) => {
					for (const mutation of mutationsList) {
						if (mutation.type === "childList") {
							if (this.showModal) {
								this.handleComponentOverflow();
							}
						}
					}
				});
				observer.observe(node, {
					attributes: true,
					childList: true,
					subtree: true,
				});
				node.observer = observer;
			});
		}
	}

	handleButtonsSlotChange(e) {
		if (e.currentTarget.assignedElements()[0]?.childElementCount > 0) {
			this.slotButtonsPresent = true;
		} else {
			this.slotButtonsPresent = false;
		}
	}

	isModalContentContainerHeightReachedViewport() {
		//Adding timeout for proper height detection on Edge browser
		return new Promise((resolve) => {
			setTimeout(() => {
				const modalContent = this.hostElement.shadowRoot.querySelector(
					".modal-content",
				) as HTMLElement;
				const modalContentHeight = modalContent.offsetHeight;
				const viewportHeight = window.innerHeight;
				const extraMarginForEdgeBrowser = 3;
				resolve(
					modalContentHeight + extraMarginForEdgeBrowser >=
						viewportHeight * 0.9,
				);
			}, 100);
		});
	}

	render() {
		const isAlertVariant = this.variant !== "default";
		return (
			<Host>
				<div
					ref={(el) => (this.modalContainer = el)}
					class={`modal-container ${this.showModal ? "open" : ""}`}
				>
					<div
						class="modal-overlay"
						onClick={() => this.handleOverlayClick()}
					></div>
					<div
						data-focus-trap-edge
						onFocus={this.handleTopFocus}
						tabindex="0"
					></div>
					<div
						class={`modal-content-container ${this.size}`}
						role="dialog"
						aria-modal="true"
						aria-label={this.captionAriaLabel}
					>
						{isAlertVariant ? (
							<div
								class={`modal-icon-container ${this.variant === "alert-brand" ? "" : "danger"}`}
							>
								{this.alertIcon ? <ifx-icon icon={this.alertIcon} /> : null}
							</div>
						) : null}
						<div class="modal-content">
							<div class="modal-header">
								<h2 class="modal-caption">{this.caption}</h2>
								{this.showCloseButton && (
									<ifx-icon-button
										class="modal-close-button"
										ref={(el) => (this.closeButton = el)}
										icon="cross-16"
										variant="tertiary"
										onClick={() => this.doBeforeClose("CLOSE_BUTTON")}
									></ifx-icon-button>
								)}
							</div>
							<div class="modal-body">
								<slot
									name="content"
									onSlotchange={(e) => this.handleContentUpdate(e)}
								/>
							</div>
							<div
								class={`modal-footer ${this.slotButtonsPresent ? "buttons-present" : ""}`}
							>
								<slot
									name="buttons"
									onSlotchange={(e) => this.handleButtonsSlotChange(e)}
								></slot>
							</div>
						</div>
					</div>
					<div
						data-focus-trap-edge
						onFocus={this.handleBottomFocus}
						tabindex="0"
					></div>
				</div>
			</Host>
		);
	}
}
