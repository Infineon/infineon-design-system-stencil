import { Component, Event, type EventEmitter, h, Prop } from "@stencil/core";

@Component({
	tag: "ifx-segment",
	styleUrl: "segment.scss",
	shadow: true,
})
export class Segment {
	@Event({ composed: false }) segmentSelect: EventEmitter<number>;

	@Prop() icon: string;
	@Prop() segmentIndex: number;
	@Prop({ mutable: true }) selected: boolean = false;
	@Prop() value!: string;

	handleSegmentClick() {
		if (this.selected) return;
		this.selected = true;
		this.segmentSelect.emit(this.segmentIndex);
	}

	handleSegmentKeyDown(event: KeyboardEvent) {
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
