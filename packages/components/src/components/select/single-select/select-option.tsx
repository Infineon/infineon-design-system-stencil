import {
	Component,
	Element,
	Host,
	h,
	Listen,
	Prop,
	State,
} from "@stencil/core";

/**
 * A single selectable option inside an `ifx-select`. Provided as a slotted child
 * (optionally wrapped in an `ifx-select-group`). Mirrors the multi-select option
 * pattern but simplified for single selection — no checkbox, nesting or chevron.
 */
@Component({
	tag: "ifx-select-option",
	styleUrl: "select-option.scss",
	shadow: true,
})
export class SelectOption {
	@Element() el: HTMLIfxSelectOptionElement;

	/** Value associated with this option (used for selection and events). */
	@Prop() readonly value: string;
	/** Whether this option is currently selected. */
	@Prop({ reflect: true, mutable: true }) selected: boolean = false;
	/** Whether this option is disabled and not interactive. */
	@Prop({ reflect: true, mutable: true }) disabled: boolean = false;

	@State() private searchTerm: string = "";
	@State() private isSearchActive: boolean = false;

	componentDidLoad() {
		this.notifySelect("registered");
		this.el.addEventListener(
			"ifx-search-filter",
			this.handleSearchFilter as EventListener,
		);
	}

	disconnectedCallback() {
		this.el.removeEventListener(
			"ifx-search-filter",
			this.handleSearchFilter as EventListener,
		);
		this.notifySelect("removed");
	}

	@Listen("click")
	handleClick(event: Event) {
		if (this.disabled) return;
		event.stopPropagation();
		this.select();
	}

	@Listen("keydown")
	handleKeyDown(event: KeyboardEvent) {
		if (this.disabled) return;
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			event.stopPropagation();
			this.select();
		}
	}

	private select() {
		// Single-select: selecting is not a toggle. The parent deselects the others.
		this.selected = true;
		this.notifySelect("selected");
	}

	/** Bubbles a lifecycle/selection notification to the parent `ifx-select`. */
	private notifySelect(reason: "registered" | "removed" | "selected") {
		this.el.dispatchEvent(
			new CustomEvent("ifx-option-changed", {
				bubbles: true,
				composed: true,
				detail: { value: this.value, selected: this.selected, reason },
			}),
		);
	}

	/** Plain-text label from the slotted content (used for value display + search). */
	getTextContent(): string {
		return (this.el.textContent || "").trim() || this.value || "";
	}

	private handleSearchFilter = (event: CustomEvent) => {
		this.searchTerm = (event.detail.searchTerm || "").toLowerCase();
		this.isSearchActive = event.detail.isActive;
		// Flat leaf option — no child states to await, so update synchronously
		// (exact substring match, so numeric queries like "2026" don't match "2020").
		this.updateSearchClasses();
	};

	private updateSearchClasses() {
		const optionDiv = this.el.shadowRoot?.querySelector(".option");
		if (!optionDiv) return;

		optionDiv.classList.remove("search-hidden", "search-match");

		if (!this.isSearchActive) {
			this.removeHighlighting();
			return;
		}

		const matches = this.getTextContent()
			.toLowerCase()
			.includes(this.searchTerm);
		if (matches) {
			optionDiv.classList.add("search-match");
			this.highlightSearchTerm();
		} else {
			optionDiv.classList.add("search-hidden");
			this.removeHighlighting();
		}
	}

	private highlightSearchTerm() {
		if (!this.searchTerm) return;
		const labelElement = this.el.shadowRoot?.querySelector(".option-label");
		const slotElement = labelElement?.querySelector("slot");
		if (!labelElement || !slotElement) return;

		this.removeHighlighting();

		const original = this.getTextContent();
		const index = original.toLowerCase().indexOf(this.searchTerm);
		if (index === -1) return;

		const before = original.substring(0, index);
		const match = original.substring(index, index + this.searchTerm.length);
		const after = original.substring(index + this.searchTerm.length);

		const wrapper = document.createElement("span");
		wrapper.className = "highlighted-text";
		if (before) wrapper.appendChild(document.createTextNode(before));
		const strong = document.createElement("strong");
		strong.className = "search-highlight";
		strong.textContent = match;
		wrapper.appendChild(strong);
		if (after) wrapper.appendChild(document.createTextNode(after));

		labelElement.setAttribute("data-original-content", "true");
		(slotElement as HTMLElement).style.display = "none";
		labelElement.appendChild(wrapper);
	}

	private removeHighlighting() {
		const labelElement = this.el.shadowRoot?.querySelector(".option-label");
		if (!labelElement) return;
		const slotElement = labelElement.querySelector("slot");
		const highlighted = labelElement.querySelector(".highlighted-text");
		if (highlighted) labelElement.removeChild(highlighted);
		if (slotElement) (slotElement as HTMLElement).style.display = "";
		labelElement.removeAttribute("data-original-content");
	}

	render() {
		return (
			<Host tabIndex={-1}>
				<div
					class={{
						option: true,
						"option--disabled": this.disabled,
						"option--selected": this.selected,
					}}
					role="option"
					aria-selected={this.selected ? "true" : "false"}
					aria-disabled={this.disabled ? "true" : "false"}
					data-value={this.value}
					tabIndex={-1}
				>
					<div class="option-label">
						<slot />
					</div>
					{this.selected && <ifx-icon class="option-check" icon="check16" />}
				</div>
			</Host>
		);
	}
}
