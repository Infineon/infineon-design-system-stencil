import { Component, Event, type EventEmitter, h, Prop } from "@stencil/core";

@Component({
	tag: "ifx-card-image",
	styleUrl: "card-image.scss",
	shadow: true,
})
export class CardImage {
	@Prop() readonly src: string;
	@Prop() readonly alt: string;
	@Prop() readonly position: string;
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
