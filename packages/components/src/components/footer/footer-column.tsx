import { Component, Element, h } from "@stencil/core";

@Component({
	tag: "ifx-footer-column",
	styleUrl: "./footer-column.scss",
	shadow: true,
})
export class FooterColumn {
	@Element() el;

	render() {
		return (
			<div class="col">
				<slot name="title" />
				<span aria-label="navigation link">
					<slot name="link" />
				</span>
			</div>
		);
	}
}
