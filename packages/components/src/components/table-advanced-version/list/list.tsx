import {
	Component,
	Element,
	Event,
	type EventEmitter,
	h,
	Prop,
	State,
	Watch,
} from "@stencil/core";

@Component({
	tag: "ifx-list",
	styleUrl: "list.scss",
	shadow: true,
})
export class List {
	@Element() private el: HTMLElement;
	@State() expanded: boolean = false;
	@State() showMore = false;
	@State() selectedCount: number = 0;
	@State() totalItems = 0;
	@Prop() name = "";
	@Prop() maxVisibleItems = 6;
	@Prop() type: string = "checkbox"; //default value
	@Prop({ mutable: true }) resetTrigger: boolean;
	@State() internalResetTrigger: boolean = false;

	@Event() ifxListUpdate: EventEmitter;

	observer: MutationObserver;

	@Watch("type")
	handleTypeChange(newType: string) {
		this.updateListEntriesType(newType);
	}

	@Watch("resetTrigger")
	resetTriggerChanged(newValue: boolean) {
		if (newValue) {
			this.reset();
			this.resetTrigger = false; // Resetting the trigger after the action is performed
		}
	}

	componentWillLoad() {
		this.setupListenersAndObservers();
		this.initializeList();
	}

	disconnectedCallback() {
		this.cleanupListenersAndObservers();
	}

	reset() {
		this.resetListEntries();
		this.expanded = false;
		this.showMore = false;
		this.selectedCount = 0;
		this.ifxListUpdate.emit({ name: this.name, selectedItems: [] });
	}

	render() {
		return this.renderList();
	}

	// Refactored methods for clarity and maintainability
	private setupListenersAndObservers() {
		this.el.addEventListener("ifxListEntryChange", this.handleCheckedChange);
		this.observer = new MutationObserver(this.handleMutation);
		this.observer.observe(this.el, { childList: true });
	}

	private cleanupListenersAndObservers() {
		this.el.removeEventListener("ifxListEntryChange", this.handleCheckedChange);
		this.observer.disconnect();
	}

	private initializeList() {
		this.selectedCount = this.getSelectedItems(this.el).length;
		this.totalItems = this.getTotalItems();
		this.updateListEntriesType(this.type);
		this.checkRadioButtonConstraint();
	}

	private updateListEntriesType(newType: string) {
		const listEntries = Array.from(this.el.querySelectorAll("ifx-list-entry"));
		listEntries.forEach((entry) => entry.setAttribute("type", newType));
	}

	private resetListEntries() {
		const listEntries = Array.from(this.el.querySelectorAll("ifx-list-entry"));
		listEntries.forEach((entry) => {
			entry.value = false;
			entry.setAttribute("value", "false");
		});
	}

	private handleMutation = () => {
		const newTotalItems = this.getTotalItems();
		if (newTotalItems !== this.totalItems) {
			this.totalItems = newTotalItems;
			this.handleCheckedChange();
		}
		this.updateListEntriesType(this.type);
	};

	private checkRadioButtonConstraint() {
		if (this.type === "radio-button" && this.selectedCount > 1) {
			this.resetListEntries(); // Reset all and let the user select again
			this.selectedCount = 0;
		}
	}

	getTotalItems() {
		return this.el.querySelectorAll("ifx-list-entry").length;
	}

	toggleList = (event: MouseEvent) => {
		event.stopPropagation();
		this.expanded = !this.expanded;
	};

	toggleShowMore = (event: MouseEvent) => {
		event.stopPropagation();
		this.showMore = !this.showMore;
	};

	getSelectedItems(el: HTMLElement) {
		return Array.from(el.querySelectorAll("ifx-list-entry"))
			.filter((entry) => entry.getAttribute("value") === "true")
			.map((entry) => ({
				label: entry.getAttribute("label"),
				value: entry.getAttribute("value"),
				type: entry.getAttribute("type"),
				element: entry,
			}));
	}

	handleCheckedChange = (event?: CustomEvent) => {
		// If the type of the changed entry is 'radio-button' and its value is true, deselect all other radio buttons
		if (event && event.detail.type === "radio-button" && event.detail.value) {
			const otherRadioButtons = Array.from(
				this.el.querySelectorAll("ifx-list-entry"),
			).filter(
				(entry) =>
					entry.getAttribute("type") === "radio-button" &&
					entry !== event.target,
			);
			otherRadioButtons.forEach((radioButton) =>
				radioButton.setAttribute("value", "false"),
			);
		}

		const selectedItems = this.getSelectedItems(this.el);
		this.selectedCount = selectedItems.length;

		this.ifxListUpdate.emit({ name: this.name, selectedItems });
	};

	private renderList() {
		const listEntries = Array.from(this.el.querySelectorAll("ifx-list-entry"));
		const visibleItems = this.showMore
			? listEntries
			: listEntries.slice(0, this.maxVisibleItems);
		const remainingItems = listEntries.length - visibleItems.length;

		return (
			<div class="list-wrapper">
				{visibleItems.map((entry) => (
					<slot name={entry.getAttribute("slot")}></slot>
				))}
				{(remainingItems > 0 || this.showMore) && (
					<div class="link-wrapper" onClick={this.toggleShowMore}>
						<ifx-icon
							key={this.showMore.toString()}
							icon={this.showMore ? "chevron-up-16" : "chevron-down-16"}
						/>
						<ifx-link
							size="s"
							href=""
							target="_blank"
							variant="underlined"
							disabled={false}
						>
							{this.showMore ? "Show less" : `Show ${remainingItems} more`}
						</ifx-link>
					</div>
				)}
			</div>
		);
	}
}
