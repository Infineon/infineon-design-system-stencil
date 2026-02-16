import { Component, Element, h, Prop } from "@stencil/core";

@Component({
	tag: "ifx-sidebar-title",
	styleUrl: "sidebar-title.scss",
	shadow: true,
})
export class SidebarTitle {
	@Element() el;
	@Prop() showInCollapsed: boolean = false;

	componentWillLoad() {
		// Set data attribute for CSS targeting
		this.el.setAttribute(
			"data-show-in-collapsed",
			this.showInCollapsed.toString(),
		);
	}

	render() {
		return (
			<div class="sidebar__title">
				<div class="sidebar__title-label">
					<slot />
				</div>
			</div>
		);
	}
}
