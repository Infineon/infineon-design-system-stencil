import { Component, Element, h, State } from "@stencil/core";

@Component({
	tag: "ifx-card-text",
	styleUrl: "./card-text.scss",
	shadow: true,
})
export class CardText {
	@Element() el;
	@State() hasBtn: boolean;

	componentWillLoad() {
		const link = this.el.closest("ifx-card").querySelector("ifx-link");
		const button = this.el.closest("ifx-card").querySelector("ifx-button");
		if (link || button) {
			this.hasBtn = true;
		}
	}

	render() {
		return (
			<div class={`card__text-wrapper ${this.hasBtn ? "hasBtn" : ""}`}>
				<div class={`card-text`}>
					<slot />
				</div>
			</div>
		);
	}
}
