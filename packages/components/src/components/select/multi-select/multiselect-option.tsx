import {
	Component,
	Element,
	Host,
	h,
	Listen,
	Prop,
	State,
} from "@stencil/core";

@Component({
	tag: "ifx-multiselect-option",
	styleUrl: "multiselect-option.scss",
	shadow: true,
})
export class MultiselectOption {
	@Element() el: HTMLElement;

	@Prop() value: string;
	@Prop({ reflect: true, mutable: true }) selected: boolean = false;
	@Prop({ reflect: true, mutable: true }) disabled: boolean = false;
	@Prop({ reflect: true, mutable: true }) indeterminate: boolean = false;

	@State() private isExpanded: boolean = false;
	@State() private hasChildren: boolean = false;
	@State() private depth: number = 0;
	@State() private searchTerm: string = "";
	@State() private isSearchActive: boolean = false;
	@State() private isSearchDisabled: boolean = false;

	componentWillLoad() {
		this.hasChildren = this.el.children.length > 0;
		this.depth = this.calculateDepth();

		this.el.setAttribute("data-level", this.depth.toString());

		if (this.hasChildren) {
			const hasSelectedChildren = this.hasAnySelectedChildren();
			if (hasSelectedChildren) {
				this.isExpanded = true;
			}
		}
	}

  componentDidLoad() {
    (this.el as any)['__stencil_instance'] = this;
    this.notifyMultiselect();
    this.el.addEventListener('ifx-search-filter', this.handleSearchFilter);
  }

	disconnectedCallback() {
		this.el.removeEventListener("ifx-search-filter", this.handleSearchFilter);
	}

	private handleSearchFilter = (event: CustomEvent) => {
		const { searchTerm, isActive } = event.detail;
		this.searchTerm = searchTerm.toLowerCase();
		this.isSearchActive = isActive;

		requestAnimationFrame(() => {
			this.updateSearchClasses();
		});
	};

	private updateSearchClasses() {
		const optionDiv = this.el.shadowRoot?.querySelector(".option");
		if (!optionDiv) return;

		if (!this.isSearchActive) {
			optionDiv.classList.remove(
				"search-hidden",
				"search-parent",
				"search-match",
			);
			this.removeHighlighting();
			this.isSearchDisabled = false;
			return;
		}

		const textContent = this.getTextContent().toLowerCase();
		const matchesSearch = textContent.includes(this.searchTerm);
		const hasMatchingParent = this.hasMatchingParent();

		requestAnimationFrame(() => {
			const hasMatchingChildren = this.hasMatchingChildren();

			optionDiv.classList.remove(
				"search-hidden",
				"search-parent",
				"search-match",
			);
			this.isSearchDisabled = false;

			if (matchesSearch && !this.hasChildren) {
				optionDiv.classList.add("search-match");
				this.highlightSearchTerm();
			} else if (matchesSearch && this.hasChildren) {
				optionDiv.classList.add("search-match");
				this.highlightSearchTerm();
				this.isExpanded = true;
			} else if (!matchesSearch && this.hasChildren && hasMatchingChildren) {
				optionDiv.classList.add("search-parent");
				this.removeHighlighting();
				this.isExpanded = true;
				this.isSearchDisabled = true;
			} else if (hasMatchingParent) {
				optionDiv.classList.add("search-match");
				this.removeHighlighting();
			} else {
				optionDiv.classList.add("search-hidden");
				this.removeHighlighting();
			}
		});
	}

	private highlightSearchTerm() {
		if (!this.searchTerm) return;

		const labelElement = this.el.shadowRoot?.querySelector(".option-label");
		if (!labelElement) return;

		const slotElement = labelElement.querySelector("slot");
		if (!slotElement) return;

		this.removeHighlighting();

		const originalText = this.getTextContent();
		const searchTermLower = this.searchTerm.toLowerCase();
		const originalTextLower = originalText.toLowerCase();

		if (!originalTextLower.includes(searchTermLower)) return;

		const searchIndex = originalTextLower.indexOf(searchTermLower);

		if (searchIndex === -1) return;

		const beforeMatch = originalText.substring(0, searchIndex);
		const matchText = originalText.substring(
			searchIndex,
			searchIndex + searchTermLower.length,
		);
		const afterMatch = originalText.substring(
			searchIndex + searchTermLower.length,
		);

		const highlightedContent = document.createElement("span");
		highlightedContent.className = "highlighted-text";

		if (beforeMatch) {
			highlightedContent.appendChild(document.createTextNode(beforeMatch));
		}

		const boldElement = document.createElement("strong");
		boldElement.className = "search-highlight";
		boldElement.textContent = matchText;
		highlightedContent.appendChild(boldElement);

		if (afterMatch) {
			highlightedContent.appendChild(document.createTextNode(afterMatch));
		}

		labelElement.setAttribute("data-original-content", "true");
		slotElement.style.display = "none";
		labelElement.appendChild(highlightedContent);
	}

	private removeHighlighting() {
		const labelElement = this.el.shadowRoot?.querySelector(".option-label");
		if (!labelElement) return;

		const slotElement = labelElement.querySelector("slot");
		const highlightedElement = labelElement.querySelector(".highlighted-text");

		if (highlightedElement) {
			labelElement.removeChild(highlightedElement);
		}

		if (slotElement) {
			slotElement.style.display = "";
		}

		labelElement.removeAttribute("data-original-content");
	}

	private getTextContent(): string {
		let text = "";
		Array.from(this.el.childNodes).forEach((node) => {
			if (node.nodeType === Node.TEXT_NODE) {
				text += node.textContent?.trim() || "";
			}
		});
		return text || this.value || "";
	}

	private hasMatchingChildren(): boolean {
		if (!this.hasChildren) return false;

		const childOptions = Array.from(this.el.children).filter(
			(child) => child.tagName === "IFX-MULTISELECT-OPTION",
		) as HTMLElement[];

		return childOptions.some((child) => {
			const childInstance = (child as any)["__stencil_instance"];
			if (!childInstance) return false;

			const childText = childInstance.getTextContent().toLowerCase();
			const childMatches = childText.includes(this.searchTerm);
			const grandChildrenMatch = childInstance.hasMatchingChildren();

			return childMatches || grandChildrenMatch;
		});
	}

	private hasMatchingParent(): boolean {
		let parent = this.el.parentElement;
		while (parent && parent.tagName === "IFX-MULTISELECT-OPTION") {
			const parentInstance = (parent as any)["__stencil_instance"];
			if (parentInstance) {
				const parentText = parentInstance.getTextContent().toLowerCase();
				if (parentText.includes(this.searchTerm)) {
					return true;
				}
			}
			parent = parent.parentElement;
		}
		return false;
	}

	private calculateDepth(): number {
		let depth = 0;
		let parent = this.el.parentElement;
		while (parent && parent.tagName !== "IFX-MULTISELECT") {
			if (parent.tagName === "IFX-MULTISELECT-OPTION") {
				depth++;
			}
			parent = parent.parentElement;
		}
		return depth;
	}

	@Listen("click")
	handleClick(event: Event) {
		if (this.disabled || (this.isSearchActive && this.isSearchDisabled)) return;

		event.stopPropagation();

		if (
			event.type === "click" &&
			(event.target as HTMLElement).closest(".chevron-wrapper")
		) {
			this.toggleExpansion();
			return;
		}

		let newSelectedState: boolean;

		if (this.indeterminate) {
			newSelectedState = true;
		} else {
			newSelectedState = !this.selected;
		}

		this.selected = newSelectedState;
		this.indeterminate = false;

		if (this.hasChildren) {
			this.isExpanded = newSelectedState;

			requestAnimationFrame(() => {
				this.selectAllChildren(newSelectedState);
				this.expandAllChildren(newSelectedState);
			});
		}

		this.updateParentStates();
		this.notifyMultiselect();
	}

	@Listen("keydown")
	handleKeyDown(event: KeyboardEvent) {
		if (this.disabled || (this.isSearchActive && this.isSearchDisabled)) return;

		const target = event.target as HTMLElement;

		if (
			target.closest(".chevron-wrapper") ||
			target.closest(".checkbox-wrapper")
		) {
			return;
		}

		if (event.key !== "ArrowUp" && event.key !== "ArrowDown") {
			event.stopPropagation();
		}

		if (event.key === "ArrowRight" && this.hasChildren) {
			this.isExpanded = true;
		}

		if (event.key === "ArrowLeft" && this.hasChildren) {
			this.isExpanded = false;
		}
	}

	private notifyMultiselect() {
		const updateEvent = new CustomEvent("ifx-option-changed", {
			bubbles: true,
			detail: {
				value: this.value,
				selected: this.selected,
				indeterminate: this.indeterminate,
			},
		});
		this.el.dispatchEvent(updateEvent);
	}

	private selectAllChildren(selected: boolean) {
		const directChildren = Array.from(this.el.children).filter(
			(child) => child.tagName === "IFX-MULTISELECT-OPTION",
		) as any[];

		directChildren.forEach((child: any) => {
			const childInstance = child["__stencil_instance"];
			if (childInstance) {
				childInstance.selected = selected;
				childInstance.indeterminate = false;

				if (childInstance.hasChildren) {
					childInstance.isExpanded = selected;
					childInstance.selectAllChildren(selected);
				}
				childInstance.notifyMultiselect?.();
			}
		});
	}

	private expandAllChildren(expanded: boolean) {
		const directChildren = Array.from(this.el.children).filter(
			(child) => child.tagName === "IFX-MULTISELECT-OPTION",
		) as any[];

		directChildren.forEach((child: any) => {
			const childInstance = child["__stencil_instance"];
			if (childInstance && childInstance.hasChildren) {
				childInstance.isExpanded = expanded;
				childInstance.expandAllChildren(expanded);
			}
		});
	}

	private updateParentStates() {
		let parent = this.el.parentElement;
		while (parent && parent.tagName === "IFX-MULTISELECT-OPTION") {
			const parentInstance = (parent as any)["__stencil_instance"];
			if (!parentInstance) {
				parent = parent.parentElement;
				continue;
			}

			const siblings = Array.from(parent.children)
				.filter((child) => child.tagName === "IFX-MULTISELECT-OPTION")
				.map((child) => (child as any)["__stencil_instance"])
				.filter((instance) => instance !== null);

			const selectedCount = siblings.filter(
				(sibling) => sibling.selected,
			).length;
			const indeterminateCount = siblings.filter(
				(sibling) => sibling.indeterminate,
			).length;
			const totalCount = siblings.length;

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

			parentInstance.notifyMultiselect?.();
			parent = parent.parentElement;
		}
	}

	private toggleExpansion() {
		this.isExpanded = !this.isExpanded;
	}

	private handleCheckboxClick = (event: Event) => {
		if (this.disabled || (this.isSearchActive && this.isSearchDisabled)) return;

		event.stopPropagation();

		let newSelectedState: boolean;

		if (this.indeterminate) {
			newSelectedState = true;
		} else {
			newSelectedState = !this.selected;
		}

		this.selected = newSelectedState;
		this.indeterminate = false;

		if (this.hasChildren) {
			this.isExpanded = newSelectedState;

			requestAnimationFrame(() => {
				this.selectAllChildren(newSelectedState);
				this.expandAllChildren(newSelectedState);
			});
		}

		this.updateParentStates();
		this.notifyMultiselect();
	};

	private handleHeaderClick = (event: Event) => {
		event.stopPropagation();
		if (!this.disabled && !(this.isSearchActive && this.isSearchDisabled)) {
			this.handleClick(event);
		}
	};

	private hasAnySelectedChildren(): boolean {
		const childOptions = Array.from(this.el.children).filter(
			(child) => child.tagName === "IFX-MULTISELECT-OPTION",
		) as HTMLElement[];

		return childOptions.some((child) => {
			const hasSelected = child.hasAttribute("selected");
			const hasSelectedDescendants = this.checkForSelectedDescendants(child);

			return hasSelected || hasSelectedDescendants;
		});
	}

	private checkForSelectedDescendants(element: HTMLElement): boolean {
		const nestedOptions = Array.from(element.children).filter(
			(child) => child.tagName === "IFX-MULTISELECT-OPTION",
		) as HTMLElement[];

		return nestedOptions.some((nestedChild) => {
			const isSelected = nestedChild.hasAttribute("selected");
			const hasSelectedNested = this.checkForSelectedDescendants(nestedChild);

			return isSelected || hasSelectedNested;
		});
	}

	render() {
		let isFlatMultiselect = false;
		const parentMultiselect = this.el.closest("ifx-multiselect");
		if (parentMultiselect) {
			const allOptions = Array.from(
				parentMultiselect.querySelectorAll("ifx-multiselect-option"),
			);
			isFlatMultiselect = allOptions.every(
				(option) => option.children.length === 0,
			);
		}

		const basePadding = this.depth * 28 + 16;
		const additionalPadding = this.hasChildren ? 0 : 28;
		const totalPadding = basePadding + additionalPadding;

		const optionItemStyle = isFlatMultiselect
			? undefined
			: { paddingLeft: `${totalPadding}px` };

		return (
			<Host>
				<div
					class={{
						option: true,
						"option--has-children": this.hasChildren,
						"option--expanded": this.isExpanded,
						"option--disabled": this.disabled,
						"option--selected": this.selected,
					}}
					role="option"
					aria-expanded={
						this.hasChildren ? (this.isExpanded ? "true" : "false") : undefined
					}
					aria-selected={this.selected ? "true" : "false"}
					aria-disabled={this.disabled ? "true" : "false"}
					data-level={this.depth}
					data-value={this.value}
				>
					<div class="option-item" style={optionItemStyle}>
						<div
							class="chevron-wrapper"
							tabIndex={this.hasChildren ? 0 : -1}
							role={this.hasChildren ? "button" : undefined}
							aria-label={
								this.hasChildren
									? this.isExpanded
										? "Collapse"
										: "Expand"
									: undefined
							}
							onClick={(e) => {
								e.stopPropagation();
								this.toggleExpansion();
							}}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									e.preventDefault();
									e.stopPropagation();
									this.toggleExpansion();
								}
							}}
						>
							{this.hasChildren && (
								<ifx-icon
									class={`chevron ${this.isExpanded ? "chevron--expanded" : "chevron--collapsed"}`}
									icon="chevron-right-16"
								/>
							)}
						</div>

						<div class="checkbox-wrapper" onClick={(e) => e.stopPropagation()}>
							<ifx-checkbox
								size="s"
								checked={
									this.isSearchActive && this.isSearchDisabled
										? false
										: this.indeterminate
											? false
											: this.selected
								}
								indeterminate={
									this.isSearchActive && this.isSearchDisabled
										? false
										: this.indeterminate
								}
								onClick={this.handleCheckboxClick}
								disabled={
									this.disabled ||
									(this.isSearchActive && this.isSearchDisabled)
								}
								onKeyDown={(e) => {
									if (e.key === "Enter" || e.key === " ") {
										e.preventDefault();
										e.stopPropagation();
										this.handleCheckboxClick(e);
									}
								}}
							/>
						</div>

						<div
							class="option-label"
							onClick={this.handleHeaderClick}
							tabIndex={-1}
						>
							<slot />
						</div>
					</div>

					{this.isExpanded && (
						<div class="option-children">
							<slot name="children" />
						</div>
					)}
				</div>
			</Host>
		);
	}
}
