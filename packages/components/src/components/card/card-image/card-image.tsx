import { Component, Event, type EventEmitter, h, Prop } from "@stencil/core";

@Component({
	tag: "ifx-card-image",
	styleUrl: "card-image.scss",
	shadow: true,
})
export class CardImage {
	/** Image source URL. */
	@Prop() readonly src: string;
	/** Text description of the image for screen readers. */
	@Prop() readonly alt: string;
	/** Image position. */
	@Prop() readonly position: string;
	/** CSS object-fit value applied to the image. */
	@Prop() readonly objectFit: "cover" | "contain" | "fill" | "none" = "cover";
	/** Shows a configurable background behind the image. */
	@Prop() readonly withBackground = false;
	/** Background color used when withBackground is enabled. */
	@Prop() readonly backgroundColor = "transparent";
	/** Padding applied around the image when withBackground is enabled. */
	@Prop() readonly backgroundPadding = "0";
	/** Emits the image position when it changes or is set. */
	@Event() imgPosition: EventEmitter;

	private handlePosition(position) {
		this.imgPosition.emit(position);
	}

	componentWillLoad() {
		this.handlePosition(this.position);
	}

	componentDidUpdate() {
		this.handlePosition(this.position);
	}

	render() {
		const image = (
			<img
				src={this.src}
				alt={this.alt}
				class={`card-image ${this.objectFit !== "cover" ? `object-fit-${this.objectFit}` : ""}`}
			/>
		);

		if (!this.withBackground) {
			return image;
		}

		return (
			<div
				class="card-image-background"
				style={{
					backgroundColor: this.backgroundColor,
					padding: this.backgroundPadding,
				}}
			>
				{image}
			</div>
		);
	}
}
