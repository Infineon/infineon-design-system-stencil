import { createPopper, type Instance as PopperInstance } from "@popperjs/core";
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

type DropdownTrigger = HTMLElement & IOpenable & { disabled?: boolean };
type DropdownMenu = HTMLElement & IOpenable;

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
	/** Where the dropdown menu is positioned relative to the trigger. */
	@Prop() readonly placement: Placement = "bottom-start";
	/** Wether the dropdown should be open initially. */
	@Prop() readonly defaultOpen: boolean = false;
	@State() internalIsOpen: boolean = false;
	/** If true, the menu is not appended to <body> (stays in place). */
	@Prop() readonly noAppendToBody: boolean = false;
	/** Fired when dropdown open. */
	@Event() ifxOpen!: EventEmitter;
	/** Fired when dropdown closed. */
	@Event() ifxClose!: EventEmitter;
	/** General dropdown event. */
	@Event() ifxDropdown!: EventEmitter;
	/** If true, dropdown is disabled and cannot be opened. */
	@Prop() readonly disabled: boolean = false;
	/** If true, clicking outside will not close the dropdown. */
	@Prop() readonly noCloseOnOutsideClick: boolean = false;
	/** Id true, clicking inside the menu will not close the dropdown. */
	@Prop() readonly noCloseOnMenuClick: boolean = false;
	@Element() el!: HTMLIfxDropdownElement;
	@State() trigger?: DropdownTrigger;
	@State() menu?: DropdownMenu;
	// Popper instance for positioning
	private popperInstance: PopperInstance | null = null;

	@Listen("mousedown", { target: "document" })
	handleOutsideClick(event: MouseEvent) {
		const target = event.target as HTMLElement;

		if (
			!this.noCloseOnOutsideClick &&
			!this.el.contains(target) &&
			!this.menu?.contains(target)
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
			!this.menu?.contains(target)
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
		const hosts: HTMLIfxDropdownItemElement[] = Array.from(
			this.menu.querySelectorAll<HTMLIfxDropdownItemElement>("ifx-dropdown-item"),
		);
		return hosts
			.filter(
				(h) => {
					const isHidden = h.hide;
					const isDisabled = h.disabled;
					return !isHidden && !isDisabled;
				},
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
				this.trigger?.focus();
				break;
			case "Tab":
				if (e.shiftKey && i === 0) {
					e.preventDefault();
					this.closeDropdown();
					this.trigger?.focus();
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
			this.trigger.disabled = newValue;
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

	private updateSlotContent() {
		const newTrigger = this.el.querySelector(
			"ifx-dropdown-trigger-button, ifx-dropdown-trigger",
		) as DropdownTrigger | null;

		if (newTrigger !== this.trigger) {
			if (this.trigger) {
				this.trigger.removeEventListener("click", this.handleTriggerClick);
				this.trigger.removeEventListener("keydown", this.handleTriggerKeyDown);
			}
			this.trigger = newTrigger ?? undefined;
			if (this.trigger) {
				this.trigger.disabled = this.disabled;
				this.trigger.addEventListener("click", this.handleTriggerClick);
				this.trigger.addEventListener("keydown", this.handleTriggerKeyDown);
			}
		}

		const newMenu = this.el.querySelector(
			"ifx-dropdown-menu",
		) as DropdownMenu | null;

		if (!this.noAppendToBody) {
			if (this.menu && this.menu !== newMenu) {
				this.menu.removeEventListener("click", this.handleMenuClick);
				this.menu.removeEventListener("keydown", this.handleMenuKeyDown);
				this.menu.remove();
			}
			this.menu = newMenu ?? undefined;
			if (this.menu && !document.body.contains(this.menu)) {
				document.body.append(this.menu);
			}
		} else {
			this.menu = newMenu ?? undefined;
		}

		if (this.menu) {
			this.menu.removeEventListener("click", this.handleMenuClick);
			this.menu.removeEventListener("keydown", this.handleMenuKeyDown);
			this.menu.addEventListener("click", this.handleMenuClick);
			this.menu.addEventListener("keydown", this.handleMenuKeyDown);
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
	/** Returns wether the dropdown is currently open. */
	@Method()
	async isOpen() {
		return this.internalIsOpen;
	}
	/** Closes the dropdown and cleans up the popper instance. */
	@Method()
	async closeDropdown() {
		if (this.internalIsOpen) {
			this.internalIsOpen = false;

			if (this.trigger) {
				this.trigger.isOpen = false;
			}
			if (this.menu) {
				this.menu.isOpen = false;
			}

			this.ifxClose.emit();
		}

		if (this.popperInstance) {
			this.popperInstance.destroy();
			this.popperInstance = null;
		}
	}
	/** Opens the dropdown and sets up the popper positioning. */
	@Method()
	async openDropdown() {
		if (!this.internalIsOpen && !this.disabled && this.menu) {
			this.internalIsOpen = true;
			if (this.trigger) {
				this.trigger.isOpen = true;
			}
			this.menu.isOpen = true;
			this.popperInstance = createPopper(this.el, this.menu, {
				placement: this.placement,
				strategy: this.noAppendToBody ? "absolute" : "fixed",
			});
			this.ifxOpen.emit();
		}
	}

	render() {
		return (
			<div class="dropdown">
				<slot />
			</div>
		);
	}
}
