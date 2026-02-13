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
} from "@stencil/core";
import { isNestedInIfxComponent } from "../..//shared/utils/dom-utils";
import { detectFramework } from "../..//shared/utils/framework-detection";
import { trackComponent } from "../../shared/utils/tracking";
import type { ChipItemSelectEvent } from "./interfaces";

@Component({
	tag: "ifx-chip",
	styleUrl: "chip.scss",
	shadow: true,
})
export class Chip {
	@Element() chip: HTMLElement;

	@Event() ifxChange: EventEmitter<{
		previousSelection: Array<ChipItemSelectEvent>;
		currentSelection: Array<ChipItemSelectEvent>;
		name: string;
	}>;
	@Prop() placeholder: string = "";
	@Prop() size: "small" | "medium" | "large" = "medium";
	@Prop({ mutable: true }) value: Array<string> | string = undefined;
	@Prop() variant: "single" | "multi" = "single";
	@Prop() theme: "outlined" | "filled-light" | "filled-dark" = "outlined";
	@Prop() readOnly: boolean = false;
	@Prop() ariaLabel: string | null;
	@Prop() disabled: boolean = false;
	@Prop() icon: string = "";

	@State() opened: boolean = false;
	@State() selectedOptions: Array<ChipItemSelectEvent> = [];

	@Watch("value")
	handleValueChange(newValue: Array<string> | string) {
		this.syncSelectedOptionsWithProp(newValue);
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

	@Listen("keydown")
	handleKeyDown(event: KeyboardEvent) {
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
						(option) => option.value === eventDetail.value,
					)
				) {
					this.selectedOptions = [...this.selectedOptions, eventDetail];
				}
			} else {
				this.selectedOptions = this.selectedOptions.filter(
					(option) => option.value !== eventDetail.value,
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

	getChipItems(): NodeList {
		return this.chip.querySelectorAll("ifx-chip-item");
	}

	getSelectedOptions(): string {
		if (this.variant !== "multi") {
			return this.selectedOptions.map((option) => option.label).join("");
		}
		return this.selectedOptions
			.slice(0, 2)
			.map((option) => option.label)
			.join(", ");
	}

	toggleDropdownMenu() {
		if (this.readOnly) return;
		this.opened = !this.opened;
	}

	/**
	 * Focuses the chip item at the specified index.
	 * @param index the index of the chip item to focus. -1 will focus the last chip item.
	 */
	focusChipItemAt(index: number = 0) {
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
			".chip-item",
		) as HTMLDivElement;
		if (shadowItem) {
			// Delay needed for the shadow item to be rendered.
			setTimeout(() => {
				shadowItem.focus();
			}, 1);
		}
	}

	focusChip() {
		const chipWrapper: HTMLElement =
			this.chip.shadowRoot.querySelector(".chip__wrapper");
		chipWrapper.focus();
	}

	handleUnselectButtonClick(event: MouseEvent) {
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

	handleWrapperClick() {
		if (!this.readOnly) {
			this.toggleDropdownMenu();
		}
	}

	handleWrapperKeyDown(event: KeyboardEvent) {
		// Keymap oriented at https://www.w3.org/WAI/ARIA/apg/patterns/combobox/#keyboard_interaction
		if (this.readOnly) return;

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

	handleDropdownKeyDown(event: KeyboardEvent) {
		const chipitems = this.getChipItems();

		const targetIndex = Array.from(chipitems).indexOf(
			event.target as HTMLIfxChipItemElement,
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

	syncChipState() {
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

	syncSelectedOptionsWithProp(newValue: Array<string> | string) {
		// Clear old selected options
		this.selectedOptions = [];

		const generateKey = (() => {
			let count = 0;
			return () => count++;
		})();

		if (Array.isArray(newValue)) {
			this.selectedOptions = newValue.map((value) => ({
				value,
				label: value,
				selected: true,
				key: generateKey(),
				emitIfxChange: true,
			}));
		} else if (typeof newValue === "string") {
			this.selectedOptions = [
				{
					value: newValue,
					label: newValue,
					selected: true,
					key: generateKey(),
					emitIfxChange: true,
				},
			];
		}

		this.syncChipState();
	}

	componentWillLoad() {
		this.syncSelectedOptionsWithProp(this.value);
	}

	async componentDidLoad() {
		if (!isNestedInIfxComponent(this.chip)) {
			const framework = detectFramework();
			trackComponent("ifx-chip", await framework);
		}
	}

	render() {
		return (
			<div class="chip">
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
					aria-label={this.ariaLabel}
					aria-value={this.getSelectedOptions()}
					aria-haspopup={!this.readOnly ? "listbox" : undefined}
					aria-expanded={!this.readOnly ? this.opened.toString() : undefined}
					aria-controls={!this.readOnly ? "dropdown" : undefined}
					aria-readonly={this.readOnly ? "true" : undefined}
					aria-multiselectable={this.variant === "multi" ? "true" : undefined}
				>
					{this.icon && (
						<div class="icon__wrapper">
							<ifx-icon icon={this.icon}></ifx-icon>
						</div>
					)}

					<div class="wrapper__label">
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

					{!this.readOnly &&
						(this.variant !== "multi" ||
							(this.variant === "multi" &&
								this.selectedOptions.length === 0)) && (
							<div class="wrapper__open-button">
								<ifx-icon key={1} icon={`chevron-down-16`} />
							</div>
						)}

					{this.selectedOptions.length >= 1 && this.variant === "multi" && (
						<div
							class="wrapper__unselect-button"
							onClick={
								!this.readOnly && !this.disabled
									? (e) => {
											this.handleUnselectButtonClick(e);
										}
									: undefined
							}
						>
							<ifx-icon key={2} icon={`cross16`} />
						</div>
					)}
				</div>

				{this.opened && !this.readOnly && (
					<div id="dropdown" role="listbox" class="chip__dropdown">
						<slot />
					</div>
				)}
			</div>
		);
	}
}
