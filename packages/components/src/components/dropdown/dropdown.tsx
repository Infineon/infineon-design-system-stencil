import { createPopper } from "@popperjs/core";
import {
	Component,
	Element,
	Event,
	type EventEmitter,
	h,
	Listen,
	Method,
	Prop,
	State,
	Watch,
} from "@stencil/core";
import { isNestedInIfxComponent } from "../../shared/utils/dom-utils";
import { detectFramework } from "../../shared/utils/framework-detection";
import { trackComponent } from "../../shared/utils/tracking";

import type { IOpenable } from "./IOpenable";

export type Placement =
	| "auto"
	| "auto-start"
	| "auto-end"
	| "top"
	| "top-start"
	| "top-end"
	| "bottom"
	| "bottom-start"
	| "bottom-end"
	| "right"
	| "right-start"
	| "right-end"
	| "left"
	| "left-start"
	| "left-end";

@Component({
	tag: "ifx-dropdown",
	styleUrl: "dropdown.scss",
	shadow: true,
})
export class Dropdown {
	@Prop() placement: Placement = "bottom-start";
	@Prop() defaultOpen: boolean = false;
	@State() internalIsOpen: boolean = false;
	@Prop() noAppendToBody: boolean = false;
	@Event() ifxOpen: EventEmitter;
	@Event() ifxClose: EventEmitter;
	@Event() ifxDropdown: EventEmitter;
	@Prop() disabled: boolean;
	@Prop() noCloseOnOutsideClick: boolean = false;
	@Prop() noCloseOnMenuClick: boolean = false;
	@Element() el;
	@State() trigger: HTMLElement;
	@State() menu: HTMLElement;
	// Popper instance for positioning
	popperInstance: any;

	@Listen("mousedown", { target: "document" })
	handleOutsideClick(event: MouseEvent) {
		const target = event.target as HTMLElement;

		if (
			!this.noCloseOnOutsideClick &&
			!this.el.contains(target) &&
			!this.menu.contains(target)
		) {
			this.closeDropdown();
		}
	}

	@Listen("focusin", { target: "document" })
	handleFocusOutside(event: FocusEvent) {
		const target = event.target as HTMLElement;
		if (
			this.internalIsOpen &&
			!this.el.contains(target) &&
			!this.menu.contains(target)
		) {
			this.closeDropdown();
		}
	}

	private handleTriggerClick = () => {
		if (!this.internalIsOpen) this.openDropdown();
		else this.closeDropdown();
	};

	private handleTriggerKeyDown = (e: KeyboardEvent) => {
		const key = e.key;
		if (key === "Tab" && this.internalIsOpen && !e.shiftKey) {
			e.preventDefault();
			this.focusFirstItem();
		}
	};

	private handleMenuClick = () => {
		if (!this.noCloseOnMenuClick) this.closeDropdown();
	};

	private getItemFocusables(): HTMLElement[] {
		if (!this.menu) return [];
		const hosts = Array.from(
			this.menu.querySelectorAll<HTMLElement>("ifx-dropdown-item"),
		);
		return hosts
			.filter(
				(h) =>
					!(h.getAttribute("hide") === "true" || h.classList.contains("hide")),
			)
			.map((h) => h.shadowRoot?.querySelector("a") as HTMLElement | null)
			.filter((el): el is HTMLElement => !!el);
	}

	private handleMenuKeyDown = (e: KeyboardEvent) => {
		const items = this.getItemFocusables();
		if (!items.length) return;

		const i = items.indexOf(document.activeElement as HTMLElement);

		switch (e.key) {
			case "ArrowDown":
				e.preventDefault();
				items[(i + 1) % items.length].focus();
				break;
			case "ArrowUp":
				e.preventDefault();
				items[(i - 1 + items.length) % items.length].focus();
				break;
			case "Home":
				e.preventDefault();
				items[0].focus();
				break;
			case "End":
				e.preventDefault();
				items[items.length - 1].focus();
				break;
			case "Enter":
			case " ":
			case "Spacebar":
				e.preventDefault();
				(document.activeElement as HTMLElement)?.click();
				break;
			case "Escape":
				e.preventDefault();
				this.closeDropdown();
				(this.trigger as HTMLElement)?.focus();
				break;
			case "Tab":
				if (e.shiftKey && i === 0) {
					e.preventDefault();
					this.closeDropdown();
					(this.trigger as HTMLElement)?.focus();
				}
				break;
		}
	};

	componentWillLoad() {
		//maybe not needed
		this.updateSlotContent();
		this.watchHandlerIsOpen(this.defaultOpen, this.internalIsOpen);
	}

	async componentDidLoad() {
		if (!isNestedInIfxComponent(this.el)) {
			const framework = detectFramework();
			trackComponent("ifx-dropdown", await framework);
		}
	}

	@Watch("defaultOpen")
	watchHandlerIsOpen(newValue: boolean, oldValue: boolean) {
		if (newValue !== oldValue && newValue !== this.internalIsOpen) {
			if (newValue) {
				this.openDropdown();
			} else {
				this.closeDropdown();
			}
		}
	}

	@Watch("disabled")
	watchHandlerDisabled(newValue: boolean) {
		if (this.trigger) {
			(
				this.trigger as undefined as HTMLIfxDropdownTriggerButtonElement
			).disabled = newValue;
		}
	}

	@Listen("slotchange")
	watchHandlerSlot() {
		this.updateSlotContent();
	}

	private focusFirstItem() {
		const [first] = this.getItemFocusables();
		first?.focus();
	}

	updateSlotContent() {
		const newTrigger = this.el.querySelector(
			"ifx-dropdown-trigger-button, ifx-dropdown-trigger",
		) as HTMLElement | null;

		if (newTrigger !== this.trigger) {
			if (this.trigger) {
				this.trigger.removeEventListener("click", this.handleTriggerClick);
				this.trigger.removeEventListener("keydown", this.handleTriggerKeyDown);
			}
			this.trigger = newTrigger!;
			if (this.trigger) {
				(this.trigger as any).disabled = this.disabled;
				this.trigger.addEventListener("click", this.handleTriggerClick);
				this.trigger.addEventListener("keydown", this.handleTriggerKeyDown);
			}
		}

		const newMenu = this.el.querySelector(
			"ifx-dropdown-menu",
		) as HTMLElement | null;

		if (!this.noAppendToBody) {
			if (this.menu && this.menu !== newMenu) {
				this.menu.removeEventListener("click", this.handleMenuClick);
				this.menu.removeEventListener("keydown", this.handleMenuKeyDown);
				this.menu.remove();
			}
			this.menu = newMenu!;
			if (this.menu && !document.body.contains(this.menu)) {
				document.body.append(this.menu);
			}
		} else {
			this.menu = newMenu!;
		}

		if (this.menu) {
			this.menu.removeEventListener("click", this.handleMenuClick);
			this.menu.removeEventListener("keydown", this.handleMenuKeyDown);
			this.menu.addEventListener("click", this.handleMenuClick);
			this.menu.addEventListener("keydown", this.handleMenuKeyDown);
		}
	}

	menuClickHandler() {
		if (!this.noCloseOnMenuClick) {
			this.closeDropdown();
		}
	}

	disconnectedCallback() {
		if (this.popperInstance) {
			this.popperInstance.destroy();
			this.popperInstance = null;
		}

		if (this.menu) {
			this.menu.remove();
		}
	}

	@Method()
	async isOpen() {
		return this.internalIsOpen;
	}

	@Method()
	async closeDropdown() {
		if (this.internalIsOpen) {
			this.internalIsOpen = false;

			(this.trigger as unknown as IOpenable).isOpen = false;
			(this.menu as unknown as IOpenable).isOpen = false;

			this.ifxClose.emit();
		}

		if (this.popperInstance) {
			this.popperInstance.destroy();
			this.popperInstance = null;
		}
	}

	@Method()
	async openDropdown() {
		if (!this.internalIsOpen && !this.disabled) {
			this.internalIsOpen = true;
			(this.trigger as any).isOpen = true;
			(this.menu as any).isOpen = true;
			this.popperInstance = createPopper(this.el, this.menu, {
				placement: this.placement,
			});
			this.ifxOpen.emit();
		}
	}

	render() {
		return (
			<div aria-label="dropdown menu" class="dropdown">
				<slot />
			</div>
		);
	}
}
