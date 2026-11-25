import {
	Component,
	Element,
	Event,
	type EventEmitter,
	h,
	Listen,
	Prop,
	State,
	Watch,
	Host,
} from "@stencil/core";
import { isNestedInIfxComponent } from "../..//shared/utils/dom-utils";
import { detectFramework } from "../..//shared/utils/framework-detection";
import { trackComponent } from "../../shared/utils/tracking";
import { sanitizeHref } from "../../shared/utils/url-utils";
import type { ChipItemSelectEvent } from "./interfaces";

@Component({
	tag: "ifx-chip",
	styleUrl: "chip.scss",
	shadow: true,
})
export class Chip {
	@Element() chip: HTMLIfxChipElement;

	/** Fires on selection change. */
	@Event() ifxChange: EventEmitter<{
		previousSelection: Array<ChipItemSelectEvent>;
		currentSelection: Array<ChipItemSelectEvent>;
		name: string;
	}>;
	@Event() ifxClick: EventEmitter<MouseEvent>;
	/** Placeholder text */
	@Prop() readonly placeholder: string = "";
	/** Visible label for an action chip (`variant="action"`). Falls back to `placeholder` when not set. */
	@Prop() readonly actionLabel: string = "";
	/** Component size */
	@Prop() readonly size: "small" | "medium" | "large" = "medium";
	/** Current selection (mutable) */
	@Prop({ mutable: true }) value: Array<string> | string = undefined;
	/** Selection mode */
	@Prop() readonly variant: "single" | "multi" | "action" = "single";
	/** URL navigated to. When set, the chip renders as a link. */
	@Prop() readonly href: string;
	/** Browsing context used for navigation. */
	@Prop() readonly target: "_self" | "_blank" | "_parent" = "_blank";
	/** Visual theme */
	@Prop() readonly theme: "outlined" | "filled-light" | "filled-dark" =
		"outlined";
	/** Read-only state */
	@Prop() readonly readOnly: boolean = false;
	/** ARIA Label text */
	@Prop() readonly ariaLabelText: string | null;
	/** Disabeled state */
	@Prop() readonly disabled: boolean = false;
	/** Sets Icon */
	@Prop() readonly icon: string = "";
	/** Makes an action chip toggle its selected state when activated. */
	@Prop() readonly selectable: boolean = false;
	/** Whether a selectable action chip is selected. */
	@Prop({ mutable: true, reflect: true }) selected: boolean = false;

	@State() opened: boolean = false;
	@State() selectedOptions: Array<ChipItemSelectEvent> = [];

	private observer?: MutationObserver;

	@Watch("value")
	handleValueChange(newValue: Array<string> | string) {
		if (!this.isActionable()) {
			this.syncSelectedOptionsWithProp(newValue);
		}
	}

	private isActionable() {
		return (
			this.variant === "action" ||
			this.href !== undefined ||
			this.chip.hasAttribute("href") ||
			this.getChipItems().length === 0
		);
	}

	private get isSelectable(): boolean {
		const selectableAttribute = this.chip.getAttribute("selectable");
		if (selectableAttribute === "" || selectableAttribute === "false") {
			return false;
		}
		return this.selectable;
	}

	@Watch("readOnly")
	handleReadOnlyChange(newValue: boolean) {
		if (newValue) {
			this.opened = false;
		}
	}

	@Listen("mousedown", { target: "document" })
	closeDropdownOnOutsideClick(event: MouseEvent) {
		const path = event.composedPath();
		const chipWrapper: HTMLElement =
			this.chip.shadowRoot.querySelector(".chip__wrapper");
		const chipDropdown: HTMLElement =
			this.chip.shadowRoot.querySelector(".chip__dropdown");
		if (
			!path.includes(chipDropdown) &&
			!path.includes(chipWrapper) &&
			this.opened
		) {
			this.toggleDropdownMenu();
		}
	}

	/* @Listen("keydown") */
	private handleKeyDown(event: KeyboardEvent) {
		// override behavior of all keys except Tab. Users should be able to tab out of the component.
		if (event.code !== "Tab") {
			event.preventDefault();
		}

		if ((event.target as HTMLElement).tagName === "IFX-CHIP") {
			this.handleWrapperKeyDown(event);
		} else if ((event.target as HTMLElement).tagName === "IFX-CHIP-ITEM") {
			this.handleDropdownKeyDown(event);
		}
	}

	@Listen("ifxChipItemSelect")
	updateSelectedOptions(event: CustomEvent<ChipItemSelectEvent>) {
		const eventDetail: ChipItemSelectEvent = event.detail;
		const previousSelection: Array<ChipItemSelectEvent> = [
			...this.selectedOptions,
		];

		if (this.variant !== "multi") {
			if (eventDetail.selected) {
				this.opened = false;
				const chipItems: NodeList = this.getChipItems();
				chipItems.forEach((chipItem: HTMLIfxChipItemElement) => {
					if (chipItem.selected && chipItem !== event.target) {
						chipItem.chipState = {
							...chipItem.chipState,
							emitIfxChipItemSelect: false,
						};
						chipItem.selected = false;
					}
				});
				this.selectedOptions = [eventDetail];
			} else {
				this.selectedOptions = [];
			}
			this.value = this.selectedOptions[0]
				? this.selectedOptions[0].value
				: undefined;
		} else {
			if (eventDetail.selected) {
				// Prevent duplicate entries
				if (
					!this.selectedOptions.find(
						(option) => option.value === eventDetail.value
					)
				) {
					this.selectedOptions = [...this.selectedOptions, eventDetail];
				}
			} else {
				this.selectedOptions = this.selectedOptions.filter(
					(option) => option.value !== eventDetail.value
				);
			}
			this.value = this.selectedOptions.map((option) => option.value);
		}

		if (eventDetail.emitIfxChange) {
			this.ifxChange.emit({
				previousSelection: previousSelection,
				currentSelection: this.selectedOptions,
				name: this.placeholder,
			});
		}
	}

	private getChipItems(): NodeList {
		return this.chip.querySelectorAll("ifx-chip-item");
	}

	private getSelectedOptions(): string {
		if (this.variant !== "multi") {
			return this.selectedOptions.map((option) => option.label).join("");
		}
		return this.selectedOptions
			.slice(0, 2)
			.map((option) => option.label)
			.join(", ");
	}

	private toggleDropdownMenu() {
		if (this.readOnly)
			return;
		this.opened = !this.opened;
	}

	/**
	 * Focuses the chip item at the specified index.
	 * @param index the index of the chip item to focus. -1 will focus the last chip item.
	 */
	private focusChipItemAt(index: number = 0) {
		this.opened = true;
		const chipItems: NodeList = this.getChipItems();
		let item: HTMLIfxChipItemElement;

		if (index === -1) {
			item = chipItems.item(chipItems.length - 1) as HTMLIfxChipItemElement;
		} else if (index >= 0 && index < chipItems.length) {
			item = chipItems.item(index) as HTMLIfxChipItemElement;
		} else {
			console.error(`Invalid index: ${index}`);
			return;
		}

		const shadowItem = item.shadowRoot.querySelector(
			".chip-item"
		) as HTMLDivElement;
		if (shadowItem) {
			// Delay needed for the shadow item to be rendered.
			setTimeout(() => {
				shadowItem.focus();
			}, 1);
		}
	}

	private focusChip() {
		const chipWrapper: HTMLElement =
			this.chip.shadowRoot.querySelector(".chip__wrapper");
		chipWrapper.focus();
	}

	private handleUnselectKeyDown(event: KeyboardEvent) {
    if (event.code === "Enter" || event.code === "Space") {
        event.stopPropagation();
        event.preventDefault();
        this.handleUnselectButtonClick(event);
        this.focusChip();
    }
}

	private handleUnselectButtonClick(event: Event) {
		event.stopPropagation();
		this.opened = false;

		let itemGotUnselected = false;
		const chipItems: NodeList = this.getChipItems();
		chipItems.forEach((chipItem: HTMLIfxChipItemElement) => {
			if (chipItem.selected) {
				itemGotUnselected = true;
				chipItem.chipState = {
					...chipItem.chipState,
					emitIfxChipItemSelect: false,
				};
				chipItem.selected = false;
			}
		});

		/* Emit event only if at least one item was unselected. */
		if (itemGotUnselected) {
			const previousSelection: Array<ChipItemSelectEvent> =
				this.selectedOptions;
			this.selectedOptions = [];
			this.value = [];
			this.ifxChange.emit({
				previousSelection: previousSelection,
				currentSelection: [],
				name: this.placeholder,
			});
		}
	}

	private handleWrapperClick() {
		if (!this.readOnly) {
			this.toggleDropdownMenu();
		}
	}

	private handleWrapperKeyDown(event: KeyboardEvent) {
		// Keymap oriented at https://www.w3.org/WAI/ARIA/apg/patterns/combobox/#keyboard_interaction
		if (this.readOnly)
			return;

		if (!this.opened) {
			switch (event.code) {
				case "Space":
				case "Enter":
				case "ArrowDown":
					this.focusChipItemAt(0);
					break;
				case "ArrowUp":
					this.focusChipItemAt(-1);
					break;
			}
		} else {
			switch (event.code) {
				case "Escape":
					this.opened = false;
					this.focusChip();
					break;
			}
		}
	}

	private handleDropdownKeyDown(event: KeyboardEvent) {
		const chipitems = this.getChipItems();

		const targetIndex = Array.from(chipitems).indexOf(
			event.target as HTMLIfxChipItemElement
		);
		if (targetIndex === -1) {
			console.error("Target not found in chip items");
			return;
		}

		switch (event.code) {
			case "ArrowDown":
				if (targetIndex === chipitems.length - 1) break;
				this.focusChipItemAt(targetIndex + 1);
				break;
			case "ArrowUp":
				if (targetIndex === 0) break;
				this.focusChipItemAt(targetIndex - 1);
				break;
			case "Escape":
				this.opened = false;
				this.focusChip();
				break;
			case "Space":
				// selection is handled by the chip-item component
				if (this.variant === "single") {
					// only close dropdown if single select
					this.opened = false;
					this.focusChip();
				}
				break;
			case "Enter":
				// selection is handled by the chip-item component
				this.opened = false;
				this.focusChip();
				break;
		}
	}

	private syncChipState() {
		const chipItems: NodeList = this.getChipItems();
		let key: number = 0;
		chipItems.forEach((chipItem: HTMLIfxChipItemElement) => {
			chipItem.chipState = {
				emitIfxChipItemSelect: true,
				size: this.size ? this.size : "medium",
				variant: this.variant === "multi" ? "multi" : "single",
				key: key++,
			};
		});
	}

	private getLabelForValue(value: string): string {
		const item = (
			Array.from(this.getChipItems()) as HTMLIfxChipItemElement[]
		).find((chipItem) => chipItem.value === value);
		return item?.textContent?.trim() || value;
	}

	private refreshLabels() {
		let changed = false;
		const updated = this.selectedOptions.map((option) => {
			const label = this.getLabelForValue(option.value);
			if (label === option.label) return option;
			changed = true;
			return { ...option, label };
		});
		if (changed) this.selectedOptions = updated;
	}

	private syncSelectedOptionsWithProp(newValue: Array<string> | string) {
		this.selectedOptions = [];
		const generateKey = (() => {
			let count = 0;
			return () => count++;
		})();
		if (Array.isArray(newValue)) {
			this.selectedOptions = newValue.map((value) => ({
				value,
				label: this.getLabelForValue(value),
				selected: true,
				key: generateKey(),
				emitIfxChange: true,
			}));
		} else if (typeof newValue === "string") {
			this.selectedOptions = [
				{
					value: newValue,
					label: this.getLabelForValue(newValue),
					selected: true,
					key: generateKey(),
					emitIfxChange: true,
				},
			];
		}
		this.syncChipState();
	}

	private handleActionClick = (event: MouseEvent) => {
		if (this.readOnly || this.disabled) return;

		if (this.isSelectable) {
			this.selected = !this.selected;
		}
		this.ifxClick.emit(event);
	};

	componentWillLoad() {
		if (!this.isActionable()) {
			this.syncSelectedOptionsWithProp(this.value);
		}
	}

async componentDidLoad() {
    this.refreshLabels();
    if (typeof MutationObserver !== "undefined") {
        this.observer = new MutationObserver(() => {
            this.syncChipState();
            this.refreshLabels();
        });
        this.observer.observe(this.chip, {
            childList: true,
            subtree: true,
            characterData: true,
        });
    }
    if (!isNestedInIfxComponent(this.chip)) {
        const framework = detectFramework();
        trackComponent("ifx-chip", await framework);
    }
}

	disconnectedCallback() {
		this.observer?.disconnect();
	}

	render() {
		const wrapperClass = `chip__wrapper chip__wrapper--${this.size ? this.size : "medium"}
			chip__wrapper--${this.variant === "multi" ? "multi" : "single"}
			${this.theme ? this.theme : "outlined"}
			${this.isSelectable ? "chip__wrapper--selectable" : ""}
			${this.selected ? "chip__wrapper--selected" : ""}
			${this.readOnly ? "read-only" : ""}
			${this.disabled ? "disabled" : ""}`;
			
		const actionText = this.variant === "action" ? (this.actionLabel || this.placeholder) : this.placeholder;

		return (
			<Host onKeyDown={!this.isActionable() ? (event: KeyboardEvent) => this.handleKeyDown(event) : undefined}>
			<div class="chip" part="chip">
				{this.isActionable() ? (
					this.href ? (
						<a
							class={`${wrapperClass} chip__wrapper--action`}
							href={sanitizeHref(this.href)}
							target={this.target}
							rel={this.target === "_blank" ? "noopener noreferrer" : undefined}
							tabIndex={this.disabled ? -1 : 0}
							aria-label={this.ariaLabelText || undefined}
							aria-disabled={this.disabled ? "true" : undefined}
							part="label-wrapper"
						>
							{this.icon && (
								<span class="icon__wrapper">
									<ifx-icon icon={this.icon}></ifx-icon>
								</span>
							)}
							<span class="wrapper__label" part="label">
								{actionText}
							</span>
						</a>
					) : (
						<button
							type="button"
							class={`${wrapperClass} chip__wrapper--action`}
							onClick={this.handleActionClick}
							tabIndex={this.disabled ? -1 : 0}
							aria-label={this.ariaLabelText || undefined}
							aria-pressed={this.isSelectable ? this.selected.toString() : undefined}
							aria-disabled={this.disabled || this.readOnly ? "true" : undefined}
							disabled={this.disabled}
							part="label-wrapper"
						>
							{this.icon && (
								<span class="icon__wrapper">
									<ifx-icon icon={this.icon}></ifx-icon>
								</span>
							)}
							<span class="wrapper__label" part="label">
								{actionText}
							</span>
						</button>
					)
				) : (
				<div
					class={`chip__wrapper chip__wrapper--${this.size ? this.size : "medium"}
                  chip__wrapper--${this.variant === "multi" ? "multi" : "single"}
                  ${this.opened && !this.readOnly ? "chip__wrapper--opened" : ""}
                  ${this.selectedOptions.length ? "chip__wrapper--selected" : ""}
                  ${this.theme ? this.theme : "outlined"}
                  ${this.disabled ? "disabled" : ""}
                  ${this.readOnly ? "read-only" : ""}`}
						tabIndex={0}
						onClick={
							!this.readOnly && !this.disabled
								? () => {
										this.handleWrapperClick();
								  }
								: undefined
						}
						role="combobox"
						aria-label-text={this.ariaLabelText}
						aria-value={this.getSelectedOptions()}
						aria-haspopup={!this.readOnly ? "listbox" : undefined}
						aria-expanded={!this.readOnly ? this.opened.toString() : undefined}
						aria-controls={!this.readOnly ? "dropdown" : undefined}
						aria-readonly={this.readOnly ? "true" : undefined}
						aria-multiselectable={this.variant === "multi" ? "true" : undefined}
						part="label-wrapper"
					>
						{this.icon && (
							<div class="icon__wrapper">
								<ifx-icon icon={this.icon}></ifx-icon>
							</div>
						)}

						<div class="wrapper__label" part="label">
							{this.selectedOptions.length === 0 && `${this.placeholder}`}

							{this.selectedOptions.length !== 0 &&
								this.variant === "multi" &&
								this.placeholder !== "" &&
								`${this.placeholder}:`}

							{this.selectedOptions.length !== 0 && (
								<div class="label__selected-options">
									{this.getSelectedOptions()}
								</div>
							)}

							{this.selectedOptions.length > 2 && this.variant === "multi" && (
								<ifx-indicator
									variant="number"
									inverted={this.theme === "outlined" ? false : true}
									number={this.selectedOptions.length - 2}
								></ifx-indicator>
							)}
						</div>

					{(
						this.variant === "single" ||
						(this.variant === "multi" &&
							this.selectedOptions.length === 0
						)
					) && (
						<div class="wrapper__open-button">
							<ifx-icon key={1} icon={`chevron-down-16`} />
						</div>
					)}

						{this.selectedOptions.length >= 1 && this.variant === "multi" && (
								<div
										class="wrapper__unselect-button"
										role="button"
										aria-label="Clear selection"
										tabIndex={!this.readOnly && !this.disabled ? 0 : -1}
										onClick={
												!this.readOnly && !this.disabled
														? (e) => this.handleUnselectButtonClick(e)
														: undefined
										}
										onKeyDown={
												!this.readOnly && !this.disabled
														? (e) => this.handleUnselectKeyDown(e)
														: undefined
										}
								>
										<ifx-icon key={2} icon={`cross16`} />
								</div>
						)}
					</div>
				)}

				{!this.isActionable() && this.opened && !this.readOnly && (
					<div id="dropdown" role="listbox" class="chip__dropdown">
						<slot />
					</div>
				)}
			</div>
			</Host>
		);
	}
}
