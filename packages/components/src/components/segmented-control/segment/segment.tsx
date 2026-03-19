import { Component, Event, type EventEmitter, h, Prop } from "@stencil/core";

@Component({
	tag: "ifx-segment",
	styleUrl: "segment.scss",
	shadow: true,
})
export class Segment {
	/** Fired when this segment is selected (emits the segment index). */
	@Event({ composed: false }) segmentSelect: EventEmitter<number>;
	/** Icon to display inside the segment. */
	@Prop() readonly icon: string;
	/** Index of this segment within the segmented control. */
	@Prop() readonly segmentIndex: number;
	/** Whether this segment is currently selected. */
	@Prop({ mutable: true }) selected: boolean = false;
	/** Value associated with this segment. */
	@Prop() readonly value!: string;

	private handleSegmentClick() {
		if (this.selected) return;
		this.selected = true;
		this.segmentSelect.emit(this.segmentIndex);
	}

	private handleSegmentKeyDown(event: KeyboardEvent) {
		if (event.code === "Enter" || event.code === "Space") {
			if (this.selected) return;
			this.selected = true;
			this.segmentSelect.emit(this.segmentIndex);
		}
	}

	render() {
		return (
			<div
				class={`segment ${this.selected ? "segment--selected" : ""}`}
				tabIndex={0}
				onClick={() => {
					this.handleSegmentClick();
				}}
				onKeyDown={(e) => {
					this.handleSegmentKeyDown(e);
				}}
			>
				<ifx-icon icon={this.icon}></ifx-icon> <slot />
			</div>
		);
	}
}
