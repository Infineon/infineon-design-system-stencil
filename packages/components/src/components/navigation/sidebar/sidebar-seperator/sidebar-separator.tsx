// sidebar-separator.tsx
import { Component, h } from "@stencil/core";

@Component({
	tag: "ifx-sidebar-separator",
	styleUrl: "sidebar-separator.scss",
	shadow: true,
})
export class SidebarSeparator {
	render() {
		return <div class="sidebar-separator"></div>;
	}
}
