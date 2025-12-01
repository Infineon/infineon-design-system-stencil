import {
	Component,
	Element,
	Event,
	type EventEmitter,
	Host,
	h,
	State,
} from "@stencil/core";
import { isNestedInIfxComponent } from "../..//shared/utils/dom-utils";
import { detectFramework } from "../..//shared/utils/framework-detection";
import { trackComponent } from "../../shared/utils/tracking";

export type ChangeEvent = { oldValue: string; newValue: string };

type ContentSwitcherItem = Element & {
	selected: boolean;
};

@Component({
	tag: "ifx-content-switcher",
	styleUrl: "./content-switcher.scss",
	shadow: true,
})
export class ContentSwitcher {
	@Element() el: HTMLElement;

	@State() items: Element[];
	@State() activeIndex = -1;
	@State() hoverIndex: number = -1;
	@State() focusIndex: number = -1;

	@State() dividers: Element[] = [];

	@Event() ifxChange: EventEmitter<ChangeEvent>;

	private eventHandlers: Map<Element, { [key: string]: EventListener }> =
		new Map();

	componentWillLoad() {
		this.items = Array.from(this.el.children);
		this.initializeDividers();
		this.addEventListeners();
		this.ensureSingleSelectedItem();
	}

	async componentDidLoad() {
		if (!isNestedInIfxComponent(this.el)) {
			const framework = detectFramework();
			trackComponent("ifx-content-switcher", await framework);
		}
	}

	disconnectedCallback() {
		this.removeEventListeners();
	}

	/**
	 * Initialize the dividers between items.
	 */
	initializeDividers() {
		this.items.forEach((item, index) => {
			if (index < this.items.length - 1) {
				const divider = document.createElement("div");
				divider.classList.add("ifx-content-switcher-divider");
				item.after(divider);
				this.dividers.push(divider);
			}
		});
	}

	/**
	 * Add event listeners for each item.
	 */
	addEventListeners() {
		this.items.forEach((item, index) => {
			const handlers = {
				click: () => this.selectItem(index),
				mouseenter: () => this.handleHover(index, true),
				mouseleave: () => this.handleHover(index, false),
				focus: () => this.handleFocus(index, true),
				blur: () => this.handleFocus(index, false),
			};

			Object.keys(handlers).forEach((event) => {
				item.addEventListener(event, handlers[event]);
			});

			this.eventHandlers.set(item, handlers);
		});
	}

	/**
	 * Remove all event listeners.
	 */
	removeEventListeners() {
		this.eventHandlers.forEach((handlers, item) => {
			Object.keys(handlers).forEach((event) => {
				item.removeEventListener(event, handlers[event]);
			});
		});
		this.eventHandlers.clear();
	}

	ensureSingleSelectedItem() {
		this.items.forEach((item, index) => {
			const isSelected =
				item.getAttribute("selected") === "true" ||
				(item as ContentSwitcherItem).selected;
			if (isSelected) {
				if (this.activeIndex < 0) {
					this.selectItem(index);
				} else {
					item.removeAttribute("selected");
					(item as ContentSwitcherItem).selected = false;
				}
			}
		});
	}

	/**
	 * Handle hover events on an item.
	 * @param index - Index of the item.
	 * @param isActive - Whether the item is hovered.
	 */
	handleHover(index: number, isActive: boolean) {
		this.hoverIndex = isActive ? index : -1;
		this.updateDividersOfItem(index);
	}

	/**
	 * Handle hover events on an item.
	 * @param index - Index of the item.
	 * @param isActive - Whether the item is focused.
	 */
	handleFocus(index: number, isActive: boolean) {
		this.focusIndex = isActive ? index : -1;
		this.updateDividersOfItem(index);
	}

	/**
	 * Update visibility of dividers adjacent to a specific item.
	 * @param itemIndex - Index of the item.
	 */
	updateDividersOfItem(itemIndex: number) {
		if (itemIndex < this.items.length - 1) {
			this.updateDividerVisibility(itemIndex);
		}
		if (itemIndex > 0) {
			this.updateDividerVisibility(itemIndex - 1);
		}
	}

	/**
	 * Update visibility of a specific divider.
	 * @param dividerIndex - Index of the divider.
	 */
	updateDividerVisibility(dividerIndex: number) {
		const hiddenDividers = new Set([
			this.activeIndex,
			this.activeIndex - 1,
			this.hoverIndex,
			this.hoverIndex - 1,
			this.focusIndex,
			this.focusIndex - 1,
		]);
		this.setDividerVisibility(dividerIndex, hiddenDividers.has(dividerIndex));
	}

	/**
	 * Set the visibility of a specific divider.
	 * @param dividerIndex - Index of the divider.
	 * @param hidden - Whether the divider should be hidden.
	 */
	setDividerVisibility(dividerIndex: number, hidden: boolean) {
		if (this.dividers[dividerIndex]) {
			this.dividers[dividerIndex].classList.toggle("hidden", hidden);
		}
	}

	/**
	 * Select a specific item.
	 * @param itemIndex - Index of the item to be selected.
	 */
	selectItem(itemIndex: number) {
		if (itemIndex === this.activeIndex) return;
		const oldIndex = this.activeIndex;
		if (oldIndex >= 0) {
			this.items[oldIndex].removeAttribute("selected");
		}

		this.activeIndex = itemIndex;
		this.items[itemIndex].setAttribute("selected", "true");

		this.ifxChange.emit({
			oldValue: this.getValueOfItem(oldIndex),
			newValue: this.getValueOfItem(itemIndex),
		});
		this.updateDividersOfItem(oldIndex);
		this.updateDividersOfItem(itemIndex);
	}

	/**
	 * Get the value property of the item at a specific index.
	 * Falls back to the index if no value is set.
	 *
	 * @param index - Index of the item.
	 * @returns The value of the item.
	 */
	getValueOfItem(index: number): string {
		if (this.items[index] == null) return index.toLocaleString();
		return this.items[index].getAttribute("value") || index.toLocaleString();
	}

	render() {
		return (
			<Host>
				<div class="ifx-content-switcher" role="group">
					<slot></slot>
				</div>
			</Host>
		);
	}
}
