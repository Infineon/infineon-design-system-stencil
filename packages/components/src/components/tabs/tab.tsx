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
  /** Visible title text displayed in the tab header. */
  @Prop() readonly header: string;
  /** Disables the tab when true. */
  @Prop() readonly disabled: boolean;
  /** Icon displayed in the tab header. */
  @Prop() readonly icon: string = '';
  /** Position of the Icon relative to the header text. */
  @Prop() readonly iconPosition: 'left' | 'right' = 'left';
  /** Subline under the header, only for advanced variant. */
  @Prop() readonly subline: string;
  /** Text of the Advanced-Tab-Label */
  @Prop() readonly label: string;
  /** Number of the Advanced-Tab-Number */
  @Prop() readonly number: number = 0;
  /** Makes the tab header stick to the top of its scrolling oontainer */
  @Prop() readonly sticky: boolean = false;
  /** Emitted when tab header triggers a change (selection or property updates). */
  @Event() tabHeaderChange: EventEmitter;

	componentWillUpdate() {
		this.tabHeaderChange.emit(this.header);
	}

	render() {
		return <slot />;
	}
}
