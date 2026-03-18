import {
	Component,
	Element,
	Event,
	type EventEmitter,
	h,
	Listen,
	Prop,
	Watch,
} from "@stencil/core";
import type { ChipItemSelectEvent, ChipState } from "../interfaces";

@Component({
	tag: "ifx-chip-item",
	styleUrl: "chip-item.scss",
	shadow: true,
})
export class ChipItem {
	@Element() chipItem: HTMLIfxChipItemElement;

	/** Emitted on chip select/deselect. */
	@Event({ composed: false }) ifxChipItemSelect: EventEmitter<ChipItemSelectEvent>;

	/** Identifier value for this chip. */
	@Prop() readonly value: string = undefined;
	/** Bahaviour and appearance configuration. */
	@Prop() readonly chipState: ChipState = {
		emitIfxChipItemSelect: true,
		variant: "multi",
		size: "large",
	};
	/** Wether the chip is selected (reflected). */
	@Prop({ mutable: true, reflect: true }) selected: boolean = false;

	@Listen("ifxChipItemSelect", { target: "body" })
	updateItemSelection(event: CustomEvent<ChipItemSelectEvent>) {
		if (this.chipState.variant === "single") {
			const target = event.target as HTMLIfxChipItemElement;
			/* Also making sure chip items are from the same group (parent) while unselecting. */
			if (
				this.chipItem !== target &&
				this.chipItem.parentElement === target.parentElement
			) {
				this.selected = false;
			}
		}
	}

	@Watch("selected")
	validateSelected(newValue: boolean, oldValue: boolean) {
		if (newValue !== oldValue) {
			/* Do not emit if ChipState does not allow. */
			if (this.chipState.emitIfxChipItemSelect) {
				this.emitIfxChipItemSelectEvent();
			} else {
				this.chipState.emitIfxChipItemSelect = true;
			}
		}
	}

	private getItemLabel(): string {
		return this.chipItem.innerText as string;
	}

	private toggleItemSelection() {
		this.selected = !this.selected;
	}

	private emitIfxChipItemSelectEvent(emitIfxChange: boolean = true) {
		this.ifxChipItemSelect.emit({
			emitIfxChange: emitIfxChange,
			key: this.chipState.key,
			label: this.getItemLabel(),
			selected: this.selected,
			value: this.value,
		});
	}

	private handleItemClick() {
		this.toggleItemSelection();
	}

	private handleItemKeyDown(event: KeyboardEvent) {
		if (event.code === "Enter" || event.code === "Space") {
			this.toggleItemSelection();
		}
	}

	private handleSelectedState() {
		if (this.selected) {
			this.emitIfxChipItemSelectEvent(false);
		}
	}

	componentWillLoad() {
		/* Propogating the selected state to the Chip (Parent) component if it is set. */
		this.handleSelectedState();
	}

	render() {
		return (
			<div
				class={`chip-item chip-item--${this.chipState.size} 
                    chip-item--${(this.selected && this.chipState.variant) === "single" ? "selected" : ""}`}
				tabIndex={0}
				onClick={() => {
					this.handleItemClick();
				}}
				onKeyDown={(e) => {
					this.handleItemKeyDown(e);
				}}
				role="option"
				aria-selected={this.selected.toString()}
			>
				{/* Checkbox; renders only in 'multi' variant. */}
				{this.chipState.variant === "multi" && (
					<ifx-checkbox
						checked={this.selected}
						tabIndex={-1}
						size="s"
					></ifx-checkbox>
				)}

				<div class="chip-item__label">
					{" "}
					<slot />{" "}
				</div>

				{/* Selected indicator only visible in 'single' variant. */}
				<div class="chip-item__selected-indicator">
					<ifx-icon icon="check-16"> </ifx-icon>
				</div>
			</div>
		);
	}
}
