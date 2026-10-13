import {
	AttachInternals,
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
import { isNestedInIfxComponent } from "../../../shared/utils/dom-utils";
import { detectFramework } from "../../../shared/utils/framework-detection";
import { trackComponent } from "../../../shared/utils/tracking";

function debounce<A>(func: (arg: A) => void, wait: number): (arg: A) => void {
	let timeout: ReturnType<typeof setTimeout>;
	return (arg: A) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => func(arg), wait);
	};
}

/** Payload emitted by `ifxSelect` when the selection changes. */
export interface SelectChangeDetail {
	value: string;
	label: string;
}

/**
 * A single-select dropdown. Options are provided as slotted `ifx-select-option`
 * children, optionally grouped with `ifx-select-group` (flat optgroup). Native,
 * slot-based architecture mirroring `ifx-multiselect`.
 */
@Component({
	tag: "ifx-select",
	styleUrl: "select.scss",
	shadow: true,
	formAssociated: true,
})
export class Select {
	@Element() el: HTMLIfxSelectElement;

	/** Label shown above the select. */
	@Prop() readonly label: string = "";
	/** Helper text shown below the select. */
	@Prop() readonly caption: string = "";
	/** Size of the select field: `'s'` (36px) or `'m'` (40px). */
	@Prop() readonly size: "s" | "m" = "m";
	/** If true, the select is disabled and not interactive. */
	@Prop() readonly disabled: boolean = false;
	/** If true, shows the select in an error state. */
	@Prop() readonly error: boolean = false;
	/** If true, the select is read-only. */
	@Prop() readonly readOnly: boolean = false;
	/** Whether a selection is required (marks the label with `*`). */
	@Prop() readonly required: boolean = false;
	/** If false, hides the placeholder text when nothing is selected. */
	@Prop() readonly placeholder: boolean = true;
	/** Placeholder text shown when nothing is selected. */
	@Prop() readonly placeholderValue: string = "Placeholder";
	/** If true, shows a search box inside the dropdown. */
	@Prop() readonly showSearch: boolean = false;
	/** Placeholder text for the search input. */
	@Prop() readonly searchPlaceholderValue: string = "Search...";
	/** If true, shows a button to clear the current selection. */
	@Prop() readonly showClearButton: boolean = true;
	/** Name of the select field (used in forms). */
	@Prop() readonly name: string;
	/** The selected option value (source of truth). */
	@Prop({ mutable: true, reflect: true }) value: string;
	/** Message shown when a search yields no results. */
	@Prop() readonly noResultsMessage: string = "No results found.";
	/** ARIA label for the combobox. */
	@Prop() readonly ariaSelectLabel: string = "Select";
	/** ARIA label for the search input. */
	@Prop() readonly ariaSearchLabel: string = "Search options";
	/** ARIA label for the clear button. */
	@Prop() readonly ariaClearLabel: string = "Clear selection";
	/**
	 * ID of an external element that labels the select (`aria-labelledby`). Takes
	 * precedence over the visible label and `ariaSelectLabel`.
	 */
	@Prop() readonly ariaSelectLabelledBy: string = "";
	/**
	 * ID of an external element that describes the select (`aria-describedby`). Takes
	 * precedence over the caption.
	 */
	@Prop() readonly ariaSelectDescribedBy: string = "";

	/**
	 * @deprecated Removed. Provide options as slotted `<ifx-select-option>` children
	 * (optionally grouped with `<ifx-select-group>`) instead of an options array.
	 */
	@Prop() readonly options: unknown;

	@State() selectedLabel: string = "";
	@State() dropdownOpen = false;
	@State() dropdownFlipped = false;
	@State() searchTerm: string = "";
	@State() internalError: boolean = false;

	/** Fired when the selection changes. Emits `{ value, label }`, or `null` on clear. */
	@Event() ifxSelect: EventEmitter<SelectChangeDetail | null>;
	/** Fired when the search input value changes. */
	@Event() ifxInput: EventEmitter<string>;
	/** Fired when the dropdown opens (`true`) or closes (`false`). */
	@Event() ifxOpen: EventEmitter<boolean>;

	@AttachInternals() internals: ElementInternals;

	private dropdownElement!: HTMLElement;
	private focusedIndex = -1;
	private labelId!: string;
	private captionId!: string;
	private listboxId!: string;

	componentWillLoad() {
		this.internalError = this.error;
		const base = `ifx-select-${Math.random().toString(36).substring(2, 9)}`;
		this.labelId = `${base}-label`;
		this.captionId = `${base}-caption`;
		this.listboxId = `${base}-listbox`;
		if (this.options !== undefined) {
			this.warnOptionsDeprecated();
		}
	}

	async componentDidLoad() {
		if (!isNestedInIfxComponent(this.el)) {
			const framework = detectFramework();
			trackComponent("ifx-select", await framework);
		}
		this.el.addEventListener("ifx-option-changed", this.handleOptionChanged);
		// Child options upgrade before the parent's componentDidLoad, so reading their
		// initial `selected` state here is reliable (and catches static markup).
		this.syncInitialSelection();
		setTimeout(() => this.positionDropdown(), 500);
	}

	disconnectedCallback() {
		this.el.removeEventListener("ifx-option-changed", this.handleOptionChanged);
		document.removeEventListener("click", this.handleDocumentClick);
	}

	@Watch("error")
	updateInternalError() {
		this.internalError = this.error;
	}

	@Watch("value")
	valueChanged() {
		this.applyValueToOptions();
	}

	@Watch("options")
	optionsChanged() {
		if (this.options !== undefined) {
			this.warnOptionsDeprecated();
		}
	}

	private warnOptionsDeprecated() {
		console.warn(
			"[ifx-select] The `options` prop was removed. Provide options as slotted <ifx-select-option> children (optionally grouped with <ifx-select-group>). See the migration guide.",
		);
	}

	/** Public API — clears the selection. */
	@Method()
	async clearSelection() {
		this.value = undefined;
		this.applyValueToOptions();
		this.ifxSelect.emit(null);
	}

	/** Public API — returns the currently selected value. */
	@Method()
	async getValue(): Promise<string> {
		return this.value;
	}

	/** Public API — programmatically sets the selected value. */
	@Method()
	async setValue(value: string) {
		this.value = value;
		this.applyValueToOptions();
	}

	/** Public API — opens the dropdown. */
	@Method()
	async showDropdown() {
		this.openDropdown();
	}

	/** Public API — closes the dropdown. */
	@Method()
	async hideDropdown() {
		this.closeDropdown();
	}

	private getOptionElements(): HTMLIfxSelectOptionElement[] {
		return Array.from(this.el.querySelectorAll("ifx-select-option"));
	}

	private handleOptionChanged = (event: CustomEvent) => {
		const { value, reason } = event.detail;
		if (reason === "selected") {
			this.commitSelection(value);
		} else if (reason === "registered") {
			const optionEl = event.target as HTMLIfxSelectOptionElement;
			if (!this.hasValue() && optionEl.selected) {
				this.value = value;
			}
			this.applyValueToOptions();
		} else if (reason === "removed" && value === this.value) {
			this.value = undefined;
			this.applyValueToOptions();
		}
	};

	private syncInitialSelection() {
		if (!this.hasValue()) {
			const preselected = this.getOptionElements().find((o) => o.selected);
			if (preselected) {
				this.value = preselected.value;
			}
		}
		this.applyValueToOptions();
	}

	private commitSelection(value: string) {
		this.value = value;
		this.applyValueToOptions();
		this.closeDropdown();
		this.ifxSelect.emit({ value: this.value, label: this.selectedLabel });
		this.focusWrapper();
	}

	/** Reflects `value` onto the option elements and derives the display label. */
	private applyValueToOptions() {
		const hasValue = this.hasValue();
		let label = "";
		this.getOptionElements().forEach((opt) => {
			const isMatch = hasValue && opt.value === this.value;
			if (opt.selected !== isMatch) {
				opt.selected = isMatch;
			}
			if (isMatch) {
				label = (opt.textContent || "").trim() || opt.value;
			}
		});
		this.selectedLabel = label;
		this.internals?.setFormValue?.(hasValue ? this.value : null);
	}

	private hasValue(): boolean {
		return this.value !== undefined && this.value !== null && this.value !== "";
	}

	// --- dropdown open/close ---------------------------------------------------

	private openDropdown() {
		if ((this.disabled && !this.internalError) || this.readOnly) return;
		if (this.dropdownOpen) return;
		this.positionDropdown();
		this.dropdownOpen = true;
		this.focusedIndex = -1;
		setTimeout(() => {
			document.addEventListener("click", this.handleDocumentClick);
			this.ifxOpen.emit(true);
		}, 0);
	}

	private closeDropdown() {
		if (!this.dropdownOpen) return;
		this.dropdownOpen = false;
		this.focusedIndex = -1;
		document.removeEventListener("click", this.handleDocumentClick);
		this.resetSearch();
		this.ifxOpen.emit(false);
	}

	private toggleDropdown() {
		this.dropdownOpen ? this.closeDropdown() : this.openDropdown();
	}

	private handleDocumentClick = (event: Event) => {
		if (!event.composedPath().includes(this.dropdownElement)) {
			this.closeDropdown();
		}
	};

	private positionDropdown() {
		const wrapperRect = this.el.shadowRoot
			?.querySelector(".ifx-select-wrapper")
			?.getBoundingClientRect();
		if (!wrapperRect) return;
		const spaceBelow = window.innerHeight - wrapperRect.bottom;
		const spaceAbove = wrapperRect.top;
		this.dropdownFlipped =
			(spaceAbove > spaceBelow && wrapperRect.height > spaceBelow) ||
			wrapperRect.bottom > window.innerHeight;
	}

	private focusWrapper() {
		(
			this.el.shadowRoot?.querySelector(".ifx-select-wrapper") as HTMLElement
		)?.focus();
	}

	// --- search ----------------------------------------------------------------

	private handleSearch = debounce((target: { value: string }) => {
		const term = (target.value || "").toLowerCase();
		const active = term !== "";
		this.searchTerm = term;
		this.ifxInput.emit(target.value);

		requestAnimationFrame(() => {
			this.getOptionElements().forEach((option) => {
				option.dispatchEvent(
					new CustomEvent("ifx-search-filter", {
						detail: { searchTerm: term, isActive: active },
					}),
				);
			});
			setTimeout(() => this.updateSearchVisibility(active), 200);
		});
	}, 150);

	private updateSearchVisibility(active: boolean) {
		// Hide group headers whose options are all filtered out.
		this.el.querySelectorAll("ifx-select-group").forEach((group) => {
			const anyVisible = Array.from(
				group.querySelectorAll("ifx-select-option"),
			).some((o) => this.isOptionVisible(o as HTMLElement));
			group.classList.toggle("group--empty", active && !anyVisible);
		});

		const anyVisible = this.getOptionElements().some((o) =>
			this.isOptionVisible(o),
		);
		const container = this.el.shadowRoot?.querySelector(".ifx-select-options");
		container?.classList.toggle("show-no-results", active && !anyVisible);
	}

	private isOptionVisible(option: HTMLElement): boolean {
		const style = window.getComputedStyle(option);
		return style.display !== "none" && option.getBoundingClientRect().height > 0;
	}

	private resetSearch() {
		this.searchTerm = "";
		const searchField = this.el.shadowRoot?.querySelector(
			"ifx-search-field",
		) as HTMLIfxSearchFieldElement | null;
		if (searchField) {
			searchField.value = "";
		}
		this.el.shadowRoot
			?.querySelector(".ifx-select-options")
			?.classList.remove("show-no-results");
		this.el.querySelectorAll("ifx-select-group").forEach((g) => {
			g.classList.remove("group--empty");
		});
		this.getOptionElements().forEach((option) => {
			option.dispatchEvent(
				new CustomEvent("ifx-search-filter", {
					detail: { searchTerm: "", isActive: false },
				}),
			);
		});
	}

	// --- keyboard navigation (roving focus over options) -----------------------

	private isOptionHidden(option: HTMLIfxSelectOptionElement): boolean {
		return (
			option.shadowRoot
				?.querySelector(".option")
				?.classList.contains("search-hidden") ?? false
		);
	}

	private getNavigableOptions(): HTMLIfxSelectOptionElement[] {
		return this.getOptionElements().filter(
			(o) => !o.disabled && !this.isOptionHidden(o),
		);
	}

	private focusOptionAt(index: number) {
		const options = this.getNavigableOptions();
		if (!options.length) return;
		this.focusedIndex = Math.max(0, Math.min(index, options.length - 1));
		options[this.focusedIndex].focus();
	}

	@Listen("keydown")
	handleKeyDown(event: KeyboardEvent) {
		if (this.readOnly || (this.disabled && !this.internalError)) return;

		if (!this.dropdownOpen) {
			if (["Enter", " ", "ArrowDown"].includes(event.key)) {
				event.preventDefault();
				this.openDropdown();
				requestAnimationFrame(() => this.focusOptionAt(0));
			}
			return;
		}

		switch (event.key) {
			case "Escape":
				event.preventDefault();
				this.closeDropdown();
				this.focusWrapper();
				break;
			case "ArrowDown":
				event.preventDefault();
				this.focusOptionAt(this.focusedIndex + 1);
				break;
			case "ArrowUp":
				event.preventDefault();
				this.focusOptionAt(this.focusedIndex - 1);
				break;
			case "Home":
				event.preventDefault();
				this.focusOptionAt(0);
				break;
			case "End":
				event.preventDefault();
				this.focusOptionAt(this.getNavigableOptions().length - 1);
				break;
			case "Tab":
				this.closeDropdown();
				break;
		}
	}

	private handleWrapperClick(event: MouseEvent) {
		this.positionDropdown();
		if (event.target === event.currentTarget) {
			this.toggleDropdown();
		}
	}

	private interactionsDisabled(): boolean {
		return (this.disabled && !this.internalError) || this.readOnly;
	}

	render() {
		const disabledClick = this.interactionsDisabled();
		const stateClass = this.readOnly
			? "readOnly"
			: this.internalError
				? "error"
				: this.disabled
					? "disabled"
					: "";

		const labelledBy =
			this.ariaSelectLabelledBy || (this.label ? this.labelId : undefined);
		const describedBy =
			this.ariaSelectDescribedBy || (this.caption ? this.captionId : undefined);

		return (
			<div
				class={`ifx-select-container ${this.size === "s" ? "small-select" : "medium-select"}`}
				ref={(el) => (this.dropdownElement = el as HTMLElement)}
			>
				<div class="ifx-label-wrapper">
					{this.label && (
						<span class="wrapper-label">
							<span id={this.labelId}>{this.label}</span>
							{this.required && (
								<span
									class={`required ${!this.readOnly && this.internalError ? "error" : ""}`}
								>
									*
								</span>
							)}
						</span>
					)}
				</div>

				<div
					class={`ifx-select-wrapper ${this.dropdownOpen ? "active" : ""} ${this.dropdownFlipped ? "is-flipped" : ""} ${stateClass}`}
					role="combobox"
					aria-labelledby={labelledBy}
					aria-label={labelledBy ? undefined : this.ariaSelectLabel}
					aria-describedby={describedBy}
					aria-controls={this.dropdownOpen ? this.listboxId : undefined}
					aria-expanded={this.dropdownOpen ? "true" : "false"}
					aria-haspopup="listbox"
					aria-disabled={
						!this.readOnly && !this.internalError && this.disabled
							? "true"
							: undefined
					}
					tabIndex={disabledClick ? undefined : 0}
					onClick={disabledClick ? undefined : (e) => this.handleWrapperClick(e)}
				>
					<div
						class={`ifx-select-input ${this.hasValue() ? "" : "placeholder"}`}
						onClick={disabledClick ? undefined : () => this.toggleDropdown()}
					>
						{this.hasValue()
							? this.selectedLabel || this.value
							: this.placeholder
								? this.placeholderValue
								: ""}
					</div>

					{this.dropdownOpen && (
						<div class="ifx-select-dropdown-menu">
							{this.showSearch && (
								<div
									class="ifx-select-dropdown-search"
									onClick={(e) => e.stopPropagation()}
								>
									<ifx-search-field
										class="search-input"
										placeholder={this.searchPlaceholderValue}
										size="s"
										show-delete-icon="true"
										aria-label={this.ariaSearchLabel}
										onKeyDown={(e: KeyboardEvent) => {
											if (e.key === "ArrowDown") {
												e.preventDefault();
												this.focusOptionAt(0);
											} else if (e.key !== "Escape" && e.key !== "Tab") {
												e.stopPropagation();
											}
										}}
										onIfxInput={(event: CustomEvent) =>
											this.handleSearch(event.target as HTMLIfxSearchFieldElement)
										}
									></ifx-search-field>
								</div>
							)}

							<div
								class="ifx-select-options"
								role="listbox"
								id={this.listboxId}
								aria-label={labelledBy ? undefined : this.ariaSelectLabel}
							>
								<slot />
								{this.searchTerm && (
									<div class="ifx-select-no-results">
										<span class="no-results-text">{this.noResultsMessage}</span>
									</div>
								)}
							</div>
						</div>
					)}

					<div class="ifx-select-icon-container">
						{this.hasValue() && this.showClearButton && (
							<div
								class="ifx-clear-button"
								role="button"
								aria-label={this.ariaClearLabel}
								onClick={
									disabledClick
										? undefined
										: (e) => {
												e.stopPropagation();
												this.clearSelection();
											}
								}
							>
								<ifx-icon icon="cRemove16"></ifx-icon>
							</div>
						)}
						<div
							class="icon-wrapper-up"
							aria-hidden="true"
							onClick={disabledClick ? undefined : () => this.toggleDropdown()}
						>
							<ifx-icon key="icon-up" icon="chevron-up-16"></ifx-icon>
						</div>
						<div
							class="icon-wrapper-down"
							aria-hidden="true"
							onClick={disabledClick ? undefined : () => this.toggleDropdown()}
						>
							<ifx-icon key="icon-down" icon="chevron-down-16"></ifx-icon>
						</div>
					</div>
				</div>

				{this.caption && (
					<div
						id={this.captionId}
						class={`single__select-caption ${stateClass}`}
					>
						{this.caption}
					</div>
				)}
			</div>
		);
	}
}
