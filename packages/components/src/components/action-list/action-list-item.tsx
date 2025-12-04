import {
	Component,
	Element,
	Event,
	type EventEmitter,
	h,
	Prop,
	Watch,
} from "@stencil/core";
import classNames from "classnames";

export interface ActionListItemClickEvent {
	value?: string;
	href?: string;
	target?: string;
	component?: ActionListItem;
}

@Component({
	tag: "ifx-action-list-item",
	styleUrl: "action-list-item.scss",
	shadow: true,
})
export class ActionListItem {
	@Element() host: HTMLElement;

	/**
	 * The title text displayed in the item
	 */
	@Prop() itemTitle: string;

	/**
	 * The description text displayed below the title
	 */
	@Prop() description?: string;

	/**
	 * Value associated with this item
	 */
	@Prop() value?: string;

	/**
	 * URL to navigate to when item is clicked
	 */
	@Prop() href?: string;

	/**
	 * Target for the link navigation
	 * @default '_self'
	 */
	@Prop() target: string = "_self";

	/**
	 * Controls whether the item is disabled
	 * @default false
	 */
	@Prop() disabled: boolean = false;

	/**
	 * Aria label for accessibility support
	 */
	@Prop() itemAriaLabel?: string;

	/**
	 * Event emitted when the main item area is clicked
	 */
	@Event() ifxActionListItemClick: EventEmitter<ActionListItemClickEvent>;

	@Watch("disabled")
	onDisabledChange() {
		// Update interactive elements when disabled state changes
		this.updateSlotElementsDisabledState();
	}

	private handleMainClick = (event: MouseEvent) => {
		if (this.disabled) {
			event.preventDefault();
			event.stopPropagation();
			return;
		}

		// Check if clicked element is inside leading or trailing areas
		const leadingElement = this.host.shadowRoot?.querySelector(
			".action-list-item__leading",
		);
		const trailingElement = this.host.shadowRoot?.querySelector(
			".action-list-item__trailing",
		);

		if (
			leadingElement?.contains(event.target as Node) ||
			trailingElement?.contains(event.target as Node)
		) {
			return; // Don't trigger main click if clicking on leading/trailing areas
		}

		// Always emit main event when clicking on content area (text), regardless of interactive elements
		this.ifxActionListItemClick.emit({
			value: this.value,
			href: this.href,
			target: this.target,
			component: this,
		});

		// If href is provided, automatically navigate (Link mode)
		// If no href is provided, only the event is emitted (Event mode)
		if (this.href) {
			if (this.target === "_blank") {
				window.open(this.href, this.target);
			} else {
				window.location.href = this.href;
			}
		}
	};

	private handleLeadingClick = (event: MouseEvent) => {
		if (this.disabled) {
			event.preventDefault();
			event.stopPropagation();
			return;
		}

		const target = event.target as HTMLElement;

		// Check if the clicked element or any of its parents is an interactive component
		let currentElement = target;
		while (currentElement && currentElement !== this.host) {
			if (this.isInteractiveElement(currentElement)) {
				// Interactive element clicked - stop propagation to prevent main event
				event.stopPropagation();
				return;
			}
			currentElement = currentElement.parentElement;
		}

		// Non-interactive element clicked - trigger main action
		event.stopPropagation();
		this.ifxActionListItemClick.emit({
			value: this.value,
			href: this.href,
			target: this.target,
			component: this,
		});

		// If href is provided, automatically navigate
		if (this.href) {
			if (this.target === "_blank") {
				window.open(this.href, this.target);
			} else {
				window.location.href = this.href;
			}
		}
	};

	private handleTrailingClick = (event: MouseEvent) => {
		if (this.disabled) {
			event.preventDefault();
			event.stopPropagation();
			return;
		}

		const target = event.target as HTMLElement;

		// Check if the clicked element or any of its parents is an interactive component
		let currentElement = target;
		while (currentElement && currentElement !== this.host) {
			if (this.isInteractiveElement(currentElement)) {
				// Interactive element clicked - stop propagation to prevent main event
				event.stopPropagation();
				return;
			}
			currentElement = currentElement.parentElement;
		}

		// Non-interactive element clicked - trigger main action
		event.stopPropagation();
		this.ifxActionListItemClick.emit({
			value: this.value,
			href: this.href,
			target: this.target,
			component: this,
		});

		// If href is provided, automatically navigate
		if (this.href) {
			if (this.target === "_blank") {
				window.open(this.href, this.target);
			} else {
				window.location.href = this.href;
			}
		}
	};

	private isInteractiveElement = (element: HTMLElement): boolean => {
		// Get the tag name, handling both custom elements and standard HTML
		const tagName = element.tagName.toUpperCase();

		// List of Infineon components that should block main event
		const interactiveInfineonComponents = [
			"IFX-BUTTON",
			"IFX-CHECKBOX",
			"IFX-SWITCH",
		];

		// Check if it's an interactive Infineon component
		return interactiveInfineonComponents.includes(tagName);
	};

	private handleMainKeyDown = (event: KeyboardEvent) => {
		if (this.disabled) return;

		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();

			// Always trigger main action via keyboard, regardless of interactive elements
			this.handleMainClick(event as any);
		}
	};

	private handleLeadingKeyDown = (event: KeyboardEvent) => {
		if (this.disabled) return;

		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();

			const leadingSlot = this.host.shadowRoot?.querySelector(
				'slot[name="leading"]',
			) as HTMLSlotElement;
			const assignedElements = leadingSlot?.assignedElements() || [];

			// Find first interactive element and activate it
			const firstInteractive = assignedElements.find((el) =>
				this.isInteractiveElement(el as HTMLElement),
			) as HTMLElement;

			if (firstInteractive) {
				firstInteractive.focus();
				firstInteractive.click();
			}
		}
	};

	private handleTrailingKeyDown = (event: KeyboardEvent) => {
		if (this.disabled) return;

		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();

			const trailingSlot = this.host.shadowRoot?.querySelector(
				'slot[name="trailing"]',
			) as HTMLSlotElement;
			const assignedElements = trailingSlot?.assignedElements() || [];

			// Find first interactive element and activate it
			const firstInteractive = assignedElements.find((el) =>
				this.isInteractiveElement(el as HTMLElement),
			) as HTMLElement;

			if (firstInteractive) {
				firstInteractive.focus();
				firstInteractive.click();
			}
		}
	};

	private hasSlotContent(slotName: string): boolean {
		const slot = this.host.querySelector(`[slot="${slotName}"]`);
		return !!slot;
	}

	componentDidLoad() {
		// Apply disabled state to interactive elements in slots
		this.updateSlotElementsDisabledState();
	}

	componentDidUpdate() {
		// Apply disabled state to interactive elements in slots when disabled prop changes
		this.updateSlotElementsDisabledState();
	}

	private updateSlotElementsDisabledState = () => {
		// Only handle interactive components that should be disabled
		const interactiveComponents = ["ifx-checkbox", "ifx-switch", "ifx-button"];

		// Get all slotted elements
		const slots = this.host.querySelectorAll("[slot]");

		slots.forEach((slottedElement) => {
			// Check if the slotted element itself is an interactive component
			if (
				interactiveComponents.includes(slottedElement.tagName.toLowerCase())
			) {
				this.setElementDisabledState(slottedElement as HTMLElement);
			}

			// Also check for nested interactive components within the slotted element
			interactiveComponents.forEach((componentTag) => {
				const nestedElements = slottedElement.querySelectorAll(componentTag);
				nestedElements.forEach((nestedElement) => {
					this.setElementDisabledState(nestedElement as HTMLElement);
				});
			});
		});
	};

	private setElementDisabledState = (element: HTMLElement) => {
		if (this.disabled) {
			element.setAttribute("disabled", "true");
		} else {
			element.removeAttribute("disabled");
		}
	};
	render() {
		const isClickable = !this.disabled && (this.href || this.value);
		const ariaLabel =
			this.itemAriaLabel ||
			`${this.itemTitle}${this.description ? ` - ${this.description}` : ""}`;
		const hasLeadingContent = this.hasSlotContent("leading");
		const hasTrailingContent = this.hasSlotContent("trailing");

		return (
			<div
				class={classNames(
					"action-list-item",
					this.disabled && "action-list-item--disabled",
					isClickable && "action-list-item--clickable",
				)}
				role="listitem"
				tabIndex={isClickable ? 0 : -1}
				aria-label={ariaLabel}
				aria-disabled={this.disabled ? "true" : undefined}
				onClick={this.handleMainClick}
				onKeyDown={this.handleMainKeyDown}
			>
				{/* Leading Item Container - only render if content exists */}
				{hasLeadingContent && (
					<div
						class="action-list-item__leading"
						onClick={this.handleLeadingClick}
						onKeyDown={this.handleLeadingKeyDown}
					>
						<slot name="leading"></slot>
					</div>
				)}

				{/* Text Container */}
				<div class="action-list-item__content">
					<div class="action-list-item__title">{this.itemTitle}</div>
					{this.description && (
						<div class="action-list-item__description">{this.description}</div>
					)}
				</div>

				{/* Trailing Item Container - only render if content exists */}
				{hasTrailingContent && (
					<div
						class="action-list-item__trailing"
						onClick={this.handleTrailingClick}
						onKeyDown={this.handleTrailingKeyDown}
					>
						<slot name="trailing"></slot>
					</div>
				)}
			</div>
		);
	}
}
