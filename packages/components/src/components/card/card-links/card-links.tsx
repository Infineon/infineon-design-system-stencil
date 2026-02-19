import { Component, Element, h } from "@stencil/core";

@Component({
	tag: "ifx-card-links",
	styleUrl: "card-links.scss",
	shadow: true,
})
export class CardLinks {
	@Element() el: HTMLIfxCardLinksElement;

	render() {
		return (
			<div class="container">
				<slot />
			</div>
		);
	}
}
