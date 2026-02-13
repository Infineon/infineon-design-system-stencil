import {
	AttachInternals,
	Component,
	Element,
	Event,
	type EventEmitter,
	h,
	Method,
	Prop,
	State,
	Watch,
} from "@stencil/core";
import { isNestedInIfxComponent } from "../../../shared/utils/dom-utils";
import { detectFramework } from "../../../shared/utils/framework-detection";
import { trackComponent } from "../../../shared/utils/tracking";
import type { Option } from "./interfaces";

function debounce(func, wait) {
	let timeout;
	return function executedFunction(...args) {
		const later = () => {
			clearTimeout(timeout);
			func(...args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
}

@Component({
	tag: "ifx-multiselect",
	styleUrl: "multiselect.scss",
	shadow: true,
	// formAssociated: true
})
export class Multiselect {
	@Prop() name: string;
	@Prop() disabled: boolean = false;
	@Prop() required: boolean = false;
	@Prop() error: boolean = false;
	@Prop() caption: string = "";
	@Prop() label: string = "";
	@Prop() placeholder: string = "";
	@Prop() showSearch: boolean = true;
	@Prop() showSelectAll: boolean = true;
	@Prop() showClearButton: boolean = true;
	@Prop() showExpandCollapse: boolean = true;
	@Prop() noResultsMessage: string = "No results found.";
	@Prop() showNoResultsMessage: boolean = true;
	@Prop() searchPlaceholder: string = "Search";
	@Prop() selectAllLabel: string = "Select all";
	@Prop() expandLabel: string = "Expand";
	@Prop() collapseLabel: string = "Collapse";
	@Prop() ariaMultiSelectLabel: string = "Multi-select dropdown";
	@Prop() ariaMultiSelectLabelledBy: string = "";
	@Prop() ariaMultiSelectDescribedBy: string = "";
	@Prop() ariaSearchLabel: string = "Search options";
	@Prop() ariaClearLabel: string = "Clear all selections";
	@Prop() ariaToggleLabel: string = "Toggle dropdown";
	@Prop() ariaSelectAllLabel: string = "Select all options";
	@Prop() ariaExpandAllLabel: string = "Expand all categories";
	@Prop() ariaCollapseAllLabel: string = "Collapse all categories";

	@State() internalError: boolean = false;
	@State() persistentSelectedOptions: Option[] = [];
	@State() dropdownOpen = false;
	@State() dropdownFlipped: boolean;
	@State() searchTerm: string = "";

	@Event() ifxSelect: EventEmitter;
	@Event() ifxOpen: EventEmitter;

	@Element() el: HTMLElement;
	dropdownElement!: HTMLElement;

	@AttachInternals() internals: ElementInternals;
	private parseChildOptions(): Option[] {
		const options: Option[] = [];
		const childElements = Array.from(this.el.children);

		childElements.forEach((child, index) => {
			if (child.tagName === "IFX-MULTISELECT-OPTION") {
				const option = this.parseOptionElement(child as HTMLElement, index);
				if (option) {
					options.push(option);
				}
			}
		});

		return options;
	}

	private parseOptionElement(
		element: HTMLElement,
		index: number,
	): Option | null {
		const value = element.getAttribute("value") || `option-${index}`;
		const selected = element.hasAttribute("selected");
		const disabled = element.hasAttribute("disabled");
		const indeterminate = element.hasAttribute("indeterminate");

		const option: Option = {
			value,
			selected,
			disabled,
			indeterminate,
		};

		const nestedOptions = Array.from(element.children)
			.filter((child) => child.tagName === "IFX-MULTISELECT-OPTION")
			.map((child, childIndex) =>
				this.parseOptionElement(child as HTMLElement, childIndex),
			)
			.filter((opt) => opt !== null) as Option[];

		if (nestedOptions.length > 0) {
			option.children = nestedOptions;
		}

		return option;
	}

	loadInitialOptions() {
		this.internalError = this.error;
		const allOptions = this.parseChildOptions();
		const initiallySelected = this.collectSelectedOptions(allOptions);
		const initiallySelectedNotInState = initiallySelected.filter(
			(init) =>
				!this.persistentSelectedOptions.some((opt) => opt.value == init.value),
		);
		this.persistentSelectedOptions = [
			...this.persistentSelectedOptions,
			...initiallySelectedNotInState,
		];
	}

	private collectSelectedOptions(options: Option[]): Option[] {
		let selectedOptions: Option[] = [];

		for (const option of options) {
			if (option.selected) {
				if (option.children && option.children.length > 0) {
					selectedOptions = selectedOptions.concat(
						this.collectLeafOptions(option.children),
					);
				} else {
					if (
						!selectedOptions.some(
							(existingOption) => existingOption.value === option.value,
						)
					) {
						selectedOptions.push(option);
					}
				}
			} else {
				if (option.children && option.children.length > 0) {
					selectedOptions = selectedOptions.concat(
						this.collectSelectedOptions(option.children),
					);
				}
			}
		}

		return selectedOptions;
	}

	private collectLeafOptions(children: Option[]): Option[] {
		let leafOptions = [];

		for (const child of children) {
			if (child.children && child.children.length > 0) {
				leafOptions = leafOptions.concat(
					this.collectLeafOptions(child.children),
				);
			} else {
				leafOptions.push(child);
			}
		}
		return leafOptions;
	}

	handleSearch = debounce((targetElement: HTMLInputElement) => {
		const searchTerm = targetElement.value.toLowerCase();
		const isSearchActive = searchTerm !== "";

		this.searchTerm = searchTerm;

		const wrapper = this.el.shadowRoot.querySelector(
			".ifx-multiselect-wrapper",
		);
		if (wrapper) {
			if (isSearchActive) {
				wrapper.classList.remove("active");
			} else {
				const searchField =
					this.el.shadowRoot.querySelector("ifx-search-field");
				const searchFieldHasFocus =
					searchField && searchField.matches(":focus-within");
				if (!searchFieldHasFocus) {
					wrapper.classList.add("active");
				}
			}
		}

		const optionsContainer = this.el.shadowRoot.querySelector(
			".ifx-multiselect-options",
		);
		if (optionsContainer) {
			if (isSearchActive) {
				optionsContainer.classList.add("has-search-filter");
			} else {
				optionsContainer.classList.remove("has-search-filter");
			}
		}

		requestAnimationFrame(() => {
			const allOptions = this.el.querySelectorAll("ifx-multiselect-option");
			allOptions.forEach((option) => {
				const searchEvent = new CustomEvent("ifx-search-filter", {
					detail: { searchTerm, isActive: isSearchActive },
				});
				option.dispatchEvent(searchEvent);
			});

			if (isSearchActive) {
				setTimeout(() => {
					const allOptions = this.el.querySelectorAll("ifx-multiselect-option");
					let visibleCount = 0;

					allOptions.forEach((option) => {
						const style = window.getComputedStyle(option);
						const rect = option.getBoundingClientRect();

						if (
							style.display !== "none" &&
							style.visibility !== "hidden" &&
							style.opacity !== "0" &&
							rect.height > 0
						) {
							visibleCount++;
						}
					});

					const optionsContainer = this.el.shadowRoot.querySelector(
						".ifx-multiselect-options",
					);
					if (optionsContainer) {
						if (visibleCount === 0) {
							optionsContainer.classList.add("show-no-results");
						} else {
							optionsContainer.classList.remove("show-no-results");
						}
					}
				}, 200);
			} else {
				const optionsContainer = this.el.shadowRoot.querySelector(
					".ifx-multiselect-options",
				);
				if (optionsContainer) {
					optionsContainer.classList.remove("show-no-results");
				}
			}
		});
	}, 150);

	private handleSearchFocus(hasFocus: boolean) {
		const wrapper = this.el.shadowRoot.querySelector(
			".ifx-multiselect-wrapper",
		);
		if (wrapper) {
			if (hasFocus || this.searchTerm !== "") {
				wrapper.classList.remove("active");
			} else {
				wrapper.classList.add("active");
			}
		}
	}

	positionDropdown() {
		const wrapperRect = this.el.shadowRoot
			.querySelector(".ifx-multiselect-wrapper")
			?.getBoundingClientRect();
		const spaceBelow = window.innerHeight - wrapperRect.bottom;
		const spaceAbove = wrapperRect.top;

		if (
			(spaceAbove > spaceBelow && wrapperRect.height > spaceBelow) ||
			wrapperRect.bottom > window.innerHeight
		) {
			this.dropdownFlipped = true;
		} else {
			this.dropdownFlipped = false;
		}
	}

	//private pendingSelectionUpdate = false;
	public updateSlotBasedSelections(emitEvent: boolean = false) {
		const allOptionElements = this.el.querySelectorAll(
			"ifx-multiselect-option",
		);
		const selectedLeafOptions: Option[] = [];

		allOptionElements.forEach((optionEl: any) => {
			const instance = optionEl["__stencil_instance"];
			if (instance && instance.selected && !instance.hasChildren) {
				selectedLeafOptions.push({
					value: instance.value,
					selected: true,
					disabled: instance.disabled,
					label: instance.getTextContent() || instance.value,
				});
			}
		});

		this.persistentSelectedOptions = selectedLeafOptions;

		if (emitEvent) {
			this.ifxSelect.emit(this.persistentSelectedOptions);
		}
	}

	private updateInitialParentStates() {
		const allOptionElements = this.el.querySelectorAll(
			"ifx-multiselect-option",
		);
		const optionsByDepth = Array.from(allOptionElements)
			.map((el) => ({
				element: el,
				instance: (el as any)["__stencil_instance"],
				depth: parseInt(el.getAttribute("data-level") || "0"),
			}))
			.filter((item) => item.instance)
			.sort((a, b) => b.depth - a.depth);

		optionsByDepth.forEach(({ instance }) => {
			if (instance.hasChildren) {
				this.updateParentState(instance);
			}
		});
	}

	private updateParentState(parentInstance: any) {
		const directChildren = Array.from(
			parentInstance.el.children as HTMLCollection,
		)
			.filter((child: Element) => child.tagName === "IFX-MULTISELECT-OPTION")
			.map((child) => (child as any)["__stencil_instance"])
			.filter((instance) => instance !== null);

		const selectedCount = directChildren.filter(
			(child) => child.selected,
		).length;
		const indeterminateCount = directChildren.filter(
			(child) => child.indeterminate,
		).length;
		const totalCount = directChildren.length;

		if (selectedCount === totalCount && indeterminateCount === 0) {
			parentInstance.selected = true;
			parentInstance.indeterminate = false;
		} else if (selectedCount === 0 && indeterminateCount === 0) {
			parentInstance.selected = false;
			parentInstance.indeterminate = false;
		} else {
			parentInstance.selected = false;
			parentInstance.indeterminate = true;
		}
	}

	async componentDidLoad() {
		if (!isNestedInIfxComponent(this.el)) {
			const framework = detectFramework();
			trackComponent("ifx-multiselect", await framework);
		}
		setTimeout(() => {
			this.positionDropdown();
		}, 500);

		this.el.addEventListener("ifx-option-changed", (event: CustomEvent) => {
			const optionInstance = (event.target as any)?.__stencil_instance;
			if (optionInstance && !optionInstance.hasChildren) {
				this.updateSlotBasedSelections(true);
			}
		});

		setTimeout(() => {
			this.updateSlotBasedSelections(false);
			this.updateInitialParentStates();
		}, 100);
	}

	componentWillLoad() {
		this.loadInitialOptions();
	}

	@Watch("error")
	updateInternalError() {
		this.internalError = this.error;
	}

	@Watch("persistentSelectedOptions")
	onSelectionChange(newValue: Option[], _: Option[]) {
		const formData = new FormData();
		newValue.forEach((option) => formData.append(this.name, option.value));
		//this.internals.setFormValue(formData);
	}
	collapseAll() {
		const allOptionElements = this.el.querySelectorAll(
			"ifx-multiselect-option",
		);
		allOptionElements.forEach((optionEl: any) => {
			const instance = optionEl["__stencil_instance"];
			if (instance && instance.hasChildren) {
				instance.isExpanded = false;
			}
		});
	}

	expandAll() {
		const allOptionElements = this.el.querySelectorAll(
			"ifx-multiselect-option",
		);
		allOptionElements.forEach((optionEl: any) => {
			const instance = optionEl["__stencil_instance"];
			if (instance && instance.hasChildren) {
				instance.isExpanded = true;
			}
		});
	}

	selectAll() {
		this.resetSearch();

		const allOptionElements = this.el.querySelectorAll(
			"ifx-multiselect-option",
		);

		allOptionElements.forEach((optionEl: any) => {
			const instance = optionEl["__stencil_instance"];
			if (instance) {
				if (instance.hasChildren) {
					instance.isExpanded = true;
				} else {
					instance.selected = true;
				}
			}
		});

		setTimeout(() => {
			this.updateInitialParentStates();
			this.updateSlotBasedSelections(false);
			this.ifxSelect.emit(this.persistentSelectedOptions);
		}, 0);
	}

	@Method()
	async clearSelection() {
		const allOptionElements = this.el.querySelectorAll(
			"ifx-multiselect-option",
		);
		allOptionElements.forEach((optionEl: any) => {
			const instance = optionEl["__stencil_instance"];
			if (instance) {
				instance.selected = false;
				instance.indeterminate = false;
				if (instance.hasChildren) {
					instance.isExpanded = false;
				}
			}
		});

		this.persistentSelectedOptions = [];

		setTimeout(() => {
			this.updateSlotBasedSelections(false);
			this.ifxSelect.emit(this.persistentSelectedOptions);
		}, 0);
	}

	handleDocumentClick = (event: Event) => {
		const path = event.composedPath();
		if (!path.includes(this.dropdownElement)) {
			this.dropdownOpen = false;
			document.removeEventListener("click", this.handleDocumentClick);
			this.resetSearch();
			this.ifxOpen.emit(this.dropdownOpen);
		}
	};

	toggleDropdown() {
		this.dropdownOpen = !this.dropdownOpen;
		setTimeout(() => {
			if (this.dropdownOpen) {
				document.addEventListener("click", this.handleDocumentClick);
			} else {
				this.resetSearch();
			}
			this.ifxOpen.emit(this.dropdownOpen);
		}, 0);
	}

	private resetSearch() {
		this.searchTerm = "";

		const searchField = this.el.shadowRoot.querySelector(
			"ifx-search-field",
		) as any;
		if (searchField) {
			searchField.value = "";
		}

		const optionsContainer = this.el.shadowRoot.querySelector(
			".ifx-multiselect-options",
		);
		if (optionsContainer) {
			optionsContainer.classList.remove("has-search-filter");
		}

		const allOptions = this.el.querySelectorAll("ifx-multiselect-option");
		allOptions.forEach((option) => {
			const searchEvent = new CustomEvent("ifx-search-filter", {
				detail: { searchTerm: "", isActive: false },
			});
			option.dispatchEvent(searchEvent);
		});
	}

	handleWrapperClick(event: MouseEvent) {
		this.positionDropdown();

		if (event.currentTarget === event.target) {
			this.toggleDropdown();
		}
	}

	handleKeyDown(event: KeyboardEvent) {
		if (this.disabled) return;

		// If dropdown is closed, only allow opening
		if (!this.dropdownOpen) {
			switch (event.code) {
				case "Enter":
				case "Space":
				case "ArrowDown":
					event.preventDefault();
					this.toggleDropdown();
					break;
			}
			return;
		}

		// Dropdown is open - handle navigation and controls
		switch (event.code) {
			case "Escape":
				event.preventDefault();
				this.toggleDropdown();
				break;
			case "Enter":
			case "Space": {
				// Don't close dropdown when pressing space/enter in controls area
				const target = event.target as HTMLElement;
				if (!target.closest(".ifx-multiselect-dropdown-functions")) {
					event.preventDefault();
					this.toggleDropdown();
				}
				break;
			}
			case "ArrowDown":
			case "ArrowUp":
				// Focus first/last option for navigation
				event.preventDefault();
				this.focusFirstOption();
				break;
		}
	}

	private focusFirstOption() {
		const firstOption = this.el.querySelector(
			"ifx-multiselect-option:not(.search-hidden)",
		);
		if (firstOption) {
			const labelElement = firstOption.shadowRoot?.querySelector(
				".option-label",
			) as HTMLElement;
			labelElement?.focus();
		}
	}

	private renderSelectAll() {
		const allOptionElements = this.el.querySelectorAll(
			"ifx-multiselect-option",
		);
		const leafOptions = Array.from(allOptionElements).filter(
			(el: any) => !el.hasChildren,
		);
		const selectedLeafOptions = Array.from(allOptionElements).filter(
			(el: any) => !el.hasChildren && el.selected,
		);

		const allSelected =
			leafOptions.length > 0 &&
			selectedLeafOptions.length === leafOptions.length;

		const toggleSelectAll = (event?: Event) => {
			if (event) {
				event.preventDefault();
				event.stopPropagation();
			}

			if (allSelected) {
				this.clearSelection();
			} else {
				this.selectAll();
			}
		};

		return (
			<div class="select-all-wrapper">
				<ifx-checkbox
					id="selectAll"
					checked={allSelected}
					size="s"
					aria-label={this.ariaSelectAllLabel}
					onClick={toggleSelectAll}
					onKeyDown={(e) => {
						if (e.key === "Enter" || e.key === " ") {
							e.preventDefault();
							e.stopPropagation();
							toggleSelectAll(e);
						}
					}}
				>
					{this.selectAllLabel}
				</ifx-checkbox>
			</div>
		);
	}

	private renderNoResultsMessage() {
		return (
			<div class="ifx-multiselect-no-results">
				<div class="no-results-content">
					<span class="no-results-text">{this.noResultsMessage}</span>
				</div>
			</div>
		);
	}

	render() {
		const selectedOptionsLabels = this.persistentSelectedOptions
			.map((option) => (option as any).label || option.value)
			.join(", ");

		const hasSelections = this.persistentSelectedOptions.length > 0;

		let isFlatMultiselect = false;
		const allOptionElements = this.el.querySelectorAll(
			"ifx-multiselect-option",
		);
		if (allOptionElements.length > 0) {
			isFlatMultiselect = Array.from(allOptionElements).every(
				(option) => option.children.length === 0,
			);
		}

		return (
			<div
				class={`ifx-multiselect-container ${this.disabled && !this.error ? "disabled" : ""}`}
				ref={(el) => (this.dropdownElement = el as HTMLElement)}
			>
				{
					<div class="ifx-label-wrapper">
						{this.label && (
							<span class="wrapper-label">
								<span>{this.label}</span>
								{this.required && (
									<span class={`required ${this.error ? "error" : ""}`}>*</span>
								)}
							</span>
						)}
					</div>
				}
				<div
					class={`ifx-multiselect-wrapper
        ${this.dropdownOpen ? "active" : ""}
        ${this.dropdownFlipped ? "is-flipped" : ""}
        ${this.internalError ? "error" : ""}
        ${this.disabled && !this.error ? "disabled" : ""}`}
					role="combobox"
					aria-label={this.ariaMultiSelectLabel}
					aria-labelledby={this.ariaMultiSelectLabelledBy || undefined}
					aria-describedby={this.ariaMultiSelectDescribedBy || undefined}
					aria-expanded={this.dropdownOpen}
					aria-haspopup="listbox"
					aria-disabled={this.disabled && !this.error}
					tabindex="0"
					onClick={
						this.disabled && !this.error
							? undefined
							: (event) => this.handleWrapperClick(event)
					}
					onKeyDown={
						this.disabled && !this.error
							? undefined
							: (event) => this.handleKeyDown(event)
					}
				>
					<div
						class={`ifx-multiselect-input
          ${hasSelections ? "" : "placeholder"}
          `}
						onClick={
							this.disabled && !this.error
								? undefined
								: () => this.toggleDropdown()
						}
					>
						{hasSelections ? selectedOptionsLabels : this.placeholder}
					</div>
					{this.dropdownOpen && (
						<div class="ifx-multiselect-dropdown-menu">
							{(this.showSearch ||
								this.showSelectAll ||
								(this.showExpandCollapse && !isFlatMultiselect)) && (
								<div
									class="ifx-multiselect-dropdown-functions"
									onClick={(e) => e.stopPropagation()}
								>
									{this.showSearch && (
										<div class="ifx-multiselect-dropdown-search">
											<ifx-search-field
												class="search-input"
												placeholder={this.searchPlaceholder}
												size="s"
												show-delete-icon="true"
												aria-label={this.ariaSearchLabel}
												onKeyDown={(e) => {
													e.stopPropagation();
												}}
												onIfxInput={(event) => this.handleSearch(event.target)}
												onFocus={() => this.handleSearchFocus(true)}
												onBlur={() => this.handleSearchFocus(false)}
											></ifx-search-field>
										</div>
									)}

									<div class="ifx-multiselect-dropdown-controls">
										{this.showSelectAll && this.renderSelectAll()}
										{this.showExpandCollapse && !isFlatMultiselect && (
											<div class="expand-collapse-controls">
												<span
													class="control-item"
													role="button"
													tabIndex={0}
													aria-label={this.ariaExpandAllLabel}
													onClick={(e) => {
														e.stopPropagation();
														this.expandAll();
													}}
													onKeyDown={(e) => {
														if (e.key === "Enter" || e.key === " ") {
															e.preventDefault();
															e.stopPropagation();
															this.expandAll();
														}
													}}
												>
													{this.expandLabel}
												</span>
												<span
													class="control-item"
													role="button"
													tabIndex={0}
													aria-label={this.ariaCollapseAllLabel}
													onClick={(e) => {
														e.stopPropagation();
														this.collapseAll();
													}}
													onKeyDown={(e) => {
														if (e.key === "Enter" || e.key === " ") {
															e.preventDefault();
															e.stopPropagation();
															this.collapseAll();
														}
													}}
												>
													{this.collapseLabel}
												</span>
											</div>
										)}
									</div>
								</div>
							)}

							<div
								class="ifx-multiselect-options"
								role="listbox"
								aria-multiselectable="true"
							>
								<slot />
								{this.searchTerm &&
									this.showNoResultsMessage &&
									this.renderNoResultsMessage()}
							</div>
						</div>
					)}
					<div class="ifx-multiselect-icon-container">
						{/* Clear Button - will show only if there's a selection */}
						{this.persistentSelectedOptions.length > 0 && (
							<div
								class={`ifx-clear-button ${!this.showClearButton ? "hide" : ""}`}
								onClick={
									this.disabled && !this.error
										? undefined
										: () => this.clearSelection()
								}
							>
								<ifx-icon icon="cRemove16"></ifx-icon>
							</div>
						)}
						<div
							class="icon-wrapper-up"
							onClick={
								this.disabled && !this.error
									? undefined
									: () => this.toggleDropdown()
							}
						>
							<ifx-icon key="icon-up" icon="chevron-up-16"></ifx-icon>
						</div>
						<div
							class="icon-wrapper-down"
							onClick={
								this.disabled && !this.error
									? undefined
									: () => this.toggleDropdown()
							}
						>
							<ifx-icon key="icon-down" icon="chevron-down-16"></ifx-icon>
						</div>
					</div>
				</div>
				{this.caption && (
					<div
						class={`multi__select-caption ${this.error ? "error" : ""} ${this.disabled && !this.error ? "disabled" : ""}`}
					>
						{this.caption}
					</div>
				)}
			</div>
		);
	}
}
