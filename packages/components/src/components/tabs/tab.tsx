import {
	Component,
	Element,
	Event,
	type EventEmitter,
	h,
	Prop,
} from "@stencil/core";

@Component({
	tag: "ifx-tab",
	styleUrl: "tab.scss",
	shadow: false,
})
export class IfxTab {
	@Element() el: HTMLIfxTabElement;
	@Prop() readonly header: string;
	@Prop() readonly disabled: boolean;
	@Prop() readonly icon: string = "";
	@Prop() readonly iconPosition: "left" | "right" = "left";
	@Event() tabHeaderChange: EventEmitter;

	componentWillUpdate() {
		this.tabHeaderChange.emit(this.header);
	}

	render() {
		return <slot />;
	}
}
