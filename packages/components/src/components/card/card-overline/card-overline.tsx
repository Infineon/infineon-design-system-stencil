import { Component, h } from "@stencil/core";

@Component({
	tag: "ifx-card-overline",
	styleUrl: "card-overline.scss",
	shadow: true,
})
export class CardOverline {
	render() {
		return (
			<div class="card-overline">
				<slot />
			</div>
		);
	}
}
