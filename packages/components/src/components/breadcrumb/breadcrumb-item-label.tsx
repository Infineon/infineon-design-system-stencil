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
	/** Icon displayed inside the breadcrumb item. */
	@Prop() readonly icon: string;
	/** URL the breadcrumb item links to. */
	@Prop() readonly href: string;
	/** Where to open the link. */
	@Prop() readonly target: string = "_self";
	@Element() el: HTMLIfxBreadcrumbItemLabelElement;
	/** Fires with the icon wrapper element when it's ready. */
	@Event() breadcrumbMenuIconWrapper: EventEmitter<HTMLElement>;

	componentDidLoad() {
		const container = this.el.shadowRoot.querySelector(
			".breadcrumb-item-label-container",
		);
		const menuWrapper = container?.querySelector(
			".menu-icon-wrapper",
		) as HTMLElement | null;
		if (menuWrapper) {
			this.breadcrumbMenuIconWrapper.emit(menuWrapper);
		}
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
