import { Component, Element, Host, h, Prop } from "@stencil/core";
import { isNestedInIfxComponent } from "../..//shared/utils/dom-utils";
import { detectFramework } from "../..//shared/utils/framework-detection";
import { trackComponent } from "../../shared/utils/tracking";
export type NotificationVariant = "success" | "locked" | "error" | "neutral";

@Component({
	tag: "ifx-notification",
	styleUrl: "notification.scss",
	shadow: true,
})
export class Notification {
	@Element() el: HTMLIfxNotificationElement;
	/** Icon to display in the notification. */
	@Prop() readonly icon: string;
	/** Visual style of the notification (e.g. success, error). */
	@Prop() readonly variant: NotificationVariant = "success";
	/** Text for the optional action link. */
	@Prop() readonly linkText: string;
	/** URL the notification link should navigate to. */
	@Prop() readonly linkHref: string;
	/** Where to open the link (same tab, new tab, etc.). */
	@Prop() readonly linkTarget: string = "_blank";

	async componentDidLoad() {
		if (!isNestedInIfxComponent(this.el)) {
			const framework = detectFramework();
			trackComponent("ifx-notification", await framework);
		}
	}

	private getClassName(): string {
		switch (this.variant) {
			case "success":
				return "ifx-notification__wrapper--success";
			case "locked":
				return "ifx-notification__wrapper--locked";
			case "error":
				return "ifx-notification__wrapper--error";
			case "neutral":
				return "ifx-notification__wrapper--neutral";
			default:
				return "ifx-notification__wrapper--success";
		}
	}

	render() {
		return (
			<Host>
				<div class={"ifx-notification__wrapper " + this.getClassName()}>
					<div class="ifx-notification__icon">
						<ifx-icon icon={this.icon}></ifx-icon>
					</div>
					<div class="ifx-notification__body">
						<div class="ifx-notification__slot">
							<slot />
						</div>
						{this.linkText && this.linkHref && (
							<div class="ifx-notification__link">
								<ifx-link href={this.linkHref} target={this.linkTarget}>
									{this.linkText}
									<ifx-icon icon="arrow-right-16"></ifx-icon>
								</ifx-link>
							</div>
						)}
					</div>
				</div>
			</Host>
		);
	}
}
