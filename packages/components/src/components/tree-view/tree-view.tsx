import {
	Component,
	Element,
	Event,
	type EventEmitter,
	h,
	Prop,
	Watch,
} from "@stencil/core";
import { isNestedInIfxComponent } from "../..//shared/utils/dom-utils";
import { detectFramework } from "../..//shared/utils/framework-detection";
import { trackComponent } from "../../shared/utils/tracking";

@Component({
	tag: "ifx-tree-view",
	styleUrl: "tree-view.scss",
	shadow: true,
})
export class TreeView {
	@Element() el: HTMLElement;
	@Prop() label?: string;
	@Prop() disableAllItems: boolean = false;
	@Prop() expandAllItems: boolean = false;
	@Prop() ariaLabel: string | null;

	@Event() ifxTreeViewExpandAllChange: EventEmitter<boolean>;
	@Event() ifxTreeViewDisableAllChange: EventEmitter<boolean>;

	@Watch("expandAllItems")
	handleExpandAllItemsChange(newValue: boolean) {
		this.ifxTreeViewExpandAllChange.emit(newValue);
	}

	@Watch("disableAllItems")
	handleDisableAllItemsChange(newValue: boolean) {
		this.ifxTreeViewDisableAllChange.emit(newValue);
	}

	private handleSlotRef = (el: HTMLSlotElement | null) => {
		if (el) {
			if (this.disableAllItems) {
				el.setAttribute("data-disable-all-items", "true");
			} else {
				el.removeAttribute("data-disable-all-items");
			}
			if (this.expandAllItems) {
				el.setAttribute("data-expand-all-items", "true");
			} else {
				el.removeAttribute("data-expand-all-items");
			}
		}
	};

	async componentDidLoad() {
		if (!isNestedInIfxComponent(this.el)) {
			const framework = detectFramework();
			trackComponent("ifx-tree-view", await framework);
		}
	}

	render() {
		return (
			<div
				class={`tree-view ${this.disableAllItems ? " tree-view--disabled" : ""}`}
				role="tree"
				aria-label={this.ariaLabel}
			>
				{this.label && this.label.trim() !== "" && (
					<div class="tree-view__label">{this.label}</div>
				)}
				<slot ref={this.handleSlotRef}></slot>
			</div>
		);
	}
}
