import {
	Component,
	Element,
	Event,
	type EventEmitter,
	h,
	Prop,
} from "@stencil/core";

@Component({
	tag: "ifx-breadcrumb-item-label",
	styleUrl: "breadcrumb-item-label.scss",
	shadow: true,
})
export class BreadcrumbItemLabel {
	@Prop() icon: string;
	@Prop() href: string;
	@Prop() target: string = "_self";
	@Element() el;
	@Event() breadcrumbMenuIconWrapper: EventEmitter<CustomEvent>;

	componentDidLoad() {
		const container = this.el.shadowRoot.querySelector(
			".breadcrumb-item-label-container",
		);
		const menuWrapper = container.querySelector(".menu-icon-wrapper");
		this.breadcrumbMenuIconWrapper.emit(menuWrapper);
	}

	render() {
		return (
			<a
				href={this.href}
				target={this.target}
				class="breadcrumb-item-label-container"
				role="link"
			>
				<ifx-icon icon={this.icon} aria-hidden="true"></ifx-icon>
				<span class="label-wrapper">
					<slot />
				</span>
				<span class="menu-icon-wrapper" aria-hiden="true">
					<ifx-icon icon="chevron-down-16"></ifx-icon>
				</span>
			</a>
		);
	}
}
