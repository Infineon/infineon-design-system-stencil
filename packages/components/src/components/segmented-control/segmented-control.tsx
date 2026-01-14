import {
	Component,
	Element,
	Event,
	type EventEmitter,
	h,
	Listen,
	Prop,
} from "@stencil/core";
import { isNestedInIfxComponent } from "../..//shared/utils/dom-utils";
import { detectFramework } from "../..//shared/utils/framework-detection";
import { trackComponent } from "../../shared/utils/tracking";

@Component({
	tag: "ifx-segmented-control",
	styleUrl: "segmented-control.scss",
	shadow: true,
})
export class SegmentedControl {
	@Element() el: HTMLElement;

	@Event() ifxChange: EventEmitter<{
		previousValue: string;
		selectedValue: string;
	}>;

	@Prop() caption: string = "";
	@Prop() label: string = "";
	@Prop() size: "regular" | "small" = "regular";
	@Prop() required: boolean = false;
	@Prop() error: boolean = false;

	@Listen("segmentSelect")
	onSegmentSelect(event: CustomEvent) {
		const { previousValue, selectedValue } = this.unselectPreviousSegment(
			event.detail,
		);
		this.selectedValue = selectedValue;
		this.ifxChange.emit({ previousValue, selectedValue });
	}

	private selectedValue: string = "";

	unselectPreviousSegment(newSelectedIndex: number): {
		previousValue: string;
		selectedValue: string;
	} {
		let previousValue: string;
		let selectedValue: string;

		const segments: NodeList = this.getSegments();
		segments.forEach((control: HTMLIfxSegmentElement) => {
			if (control.selected) {
				if (control.segmentIndex !== newSelectedIndex) {
					control.selected = false;
					previousValue = control.value;
				} else {
					selectedValue = control.value;
				}
			}
		});

		return { previousValue, selectedValue };
	}

	getSegments(): NodeList {
		return this.el.querySelectorAll("ifx-segment");
	}

	setActiveSegment(): void {
		const segments: NodeList = this.getSegments();
		let activeSegmentedControlFound = false;
		segments.forEach((control: HTMLIfxSegmentElement, idx: number) => {
			control.segmentIndex = idx;
			if (activeSegmentedControlFound) {
				if (control.selected) control.selected = false;
			} else {
				if (control.selected) {
					activeSegmentedControlFound = true;
					this.selectedValue = control.value;
				}
			}
		});
	}

	setSegmentSize(): void {
		const segments: NodeList = this.getSegments();
		segments.forEach((control: HTMLIfxSegmentElement) => {
			control.shadowRoot
				.querySelector(".segment")
				.classList.add(`segment--${this.size}`);
		});
	}

	async componentDidLoad() {
		if (!isNestedInIfxComponent(this.el)) {
			const framework = detectFramework();
			trackComponent("ifx-segmented-control", await framework);
		}
		this.setActiveSegment();
	}

	render() {
		return (
			<div
				aria-value={this.selectedValue}
				aria-label="segmented control"
				class="group"
			>
				<div class="group__label">
					{this.label.trim()}
					{this.required && this.label.trim().toLowerCase() !== "" && (
						<span class={`required ${this.error ? "error" : ""}`}>*</span>
					)}
				</div>

				<div class="group__controls">
					<slot />
				</div>

				{this.caption.trim() && (
					<div class={`group__caption ${this.error ? "error" : ""}`}>
						<ifx-icon icon="c-info-16"></ifx-icon> {this.caption.trim()}
					</div>
				)}
			</div>
		);
	}

	componentDidRender() {
		this.setSegmentSize();
	}
}
