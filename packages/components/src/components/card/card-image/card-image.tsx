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
		return <img src={this.src} alt={this.alt} class="card-image" />;
	}
}
