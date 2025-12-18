import {
	Component,
	Element,
	Event,
	type EventEmitter,
	Fragment,
	h,
	Prop,
	State,
	Watch,
} from "@stencil/core";

export interface TreeViewCheckChangeEvent {
	checked: boolean;
	indeterminate: boolean;
	value?: string;
	affectedChildItems?: Array<{
		checked: boolean;
		indeterminate: boolean;
		value?: string;
	}>;
	component?: TreeViewItem;
}

export interface TreeViewExpandChangeEvent {
	expanded: boolean;
	value?: string;
	affectedItems?: Array<{ expanded: boolean; value?: string }>;
	component?: TreeViewItem;
}

export interface TreeViewDisableChangeEvent {
	disabled: boolean;
	component?: TreeViewItem;
}

interface TreeState {
	isChecked: boolean;
	partialChecked: boolean;
}

@Component({
	tag: "ifx-tree-view-item",
	styleUrl: "tree-view-item.scss",
	shadow: true,
})
export class TreeViewItem {
	@Element() host: HTMLElement;
	@Prop({ reflect: true, mutable: true }) expanded: boolean = false;
	@Prop() initiallyExpanded: boolean = false;
	@Prop() disableItem: boolean = false;
	@Prop() ariaLabel: string | null;
	@Prop() initiallySelected: boolean = false;
	@Prop() value: string;

	@Event() ifxTreeViewItemExpandChange: EventEmitter<TreeViewExpandChangeEvent>;
	@Event() ifxTreeViewItemCheckChange: EventEmitter<TreeViewCheckChangeEvent>;
	@Event()
	ifxTreeViewItemDisableChange: EventEmitter<TreeViewDisableChangeEvent>;

	@State() private hasChildren: boolean = false;
	@State() private isChecked: boolean = false;
	@State() private partialChecked: boolean = false;
	@State() private level: number = 0;
	@State() private disableAllItems: boolean = false;
	@State() private expandAllItems: boolean = false;
	@State() private suppressExpandEvents: boolean = false;

	private get disabled() {
		return this.disableAllItems || this.disableItem;
	}

	private get isExpanded() {
		return this.expandAllItems || this.expanded;
	}

	private findChildren = () =>
		Array.from(this.host.children).filter(
			(child): child is HTMLElement =>
				child instanceof HTMLElement && child.tagName === "IFX-TREE-VIEW-ITEM",
		);

	private calculateNodeLevel = (): number => {
		let level = 0,
			parent = this.host.parentElement;
		while (parent) {
			if (parent.tagName === "IFX-TREE-VIEW-ITEM") level++;
			parent = parent.parentElement;
		}
		return level;
	};

	componentWillLoad() {
		this.expanded = this.initiallyExpanded;
		this.hasChildren = this.findChildren().length > 0;
		this.level = this.calculateNodeLevel();
		this.host.setAttribute("data-level", this.level.toString());
		this.isChecked = this.initiallySelected;
		this.host.addEventListener(
			"internal-check-state-change",
			this.handleStateChange,
		);
	}

	componentDidLoad() {
		this.observeParentAttribute(
			"disable-all-items",
			(val) => (this.disableAllItems = val),
		);
		this.observeParentAttribute(
			"data-expand-all-items",
			(val) => (this.expandAllItems = val),
			true,
		);
		if (this.shouldExpandFromParent()) this.expandAllDescendants();
		(this.host as any)["__stencil_instance"] = this;
		if (this.initiallySelected) setTimeout(() => this.updateParentState(), 0);
	}

	private observeParentAttribute(
		attr: string,
		cb: (val: boolean) => void,
		breakOnAttr = false,
	) {
		let parent = this.host.parentElement;
		while (parent) {
			if (
				parent.tagName === "IFX-TREE-VIEW" ||
				(breakOnAttr && parent.hasAttribute(attr))
			) {
				const observer = new MutationObserver(() =>
					cb(parent.hasAttribute(attr)),
				);
				observer.observe(parent, { attributes: true });
				cb(parent.hasAttribute(attr));
				break;
			}
			parent = parent.parentElement;
		}
	}

	private shouldExpandFromParent(): boolean {
		let parent = this.host.parentElement;
		while (parent) {
			if (
				parent.tagName === "IFX-TREE-VIEW" &&
				(parent.hasAttribute("expand-all-items") ||
					parent.hasAttribute("data-expand-all-items"))
			)
				return true;
			parent = parent.parentElement;
		}
		return false;
	}

	private expandAllDescendants() {
		this.expanded = true;
		this.findChildren().forEach((child) => {
			(child as any).expanded = true;
			(child as any).expandAllDescendants?.();
		});
	}

	private handleStateChange = (event: CustomEvent) => {
		if (this.disabled) return;
		event.stopPropagation();
		this.updateCheckState(event.detail.checked);
	};

	private handleCheckboxChange = (event: CustomEvent) => {
		if (this.disabled) return;
		this.updateCheckState(event.detail?.checked ?? !this.isChecked);
	};

	private handleHeaderClick = ({ target }: MouseEvent) => {
		if (this.disabled) return;
		if (
			!(target as HTMLElement).closest(
				".tree-item__checkbox-container, .tree-item__chevron-container",
			)
		) {
			if (this.hasChildren) {
				const newCheckedState = !this.isChecked;
				this.updateCheckState(newCheckedState);
				const affectedItems = newCheckedState
					? this.expandOrCollapseAllDescendants(true)
					: this.expandOrCollapseAllDescendants(false);
				this.ifxTreeViewItemExpandChange.emit({
					expanded: newCheckedState,
					affectedItems,
					component: this,
				});
			} else {
				this.updateCheckState(!this.isChecked);
			}
		}
	};

	private expandOrCollapseAllDescendants(expand: boolean) {
		this.suppressExpandEvents = true;
		const affectedItems: Array<{ expanded: boolean; value?: string }> = [];
		this.expanded = expand;
		if (this.hasChildren)
			affectedItems.push({ expanded: expand, value: this.value });
		this.findChildren().forEach((child) => {
			const childInstance = (child as any)["__stencil_instance"];
			if (childInstance && childInstance.hasChildren) {
				childInstance.suppressExpandEvents = true;
				childInstance.expanded = expand;
				affectedItems.push({ expanded: expand, value: childInstance.value });
				if (childInstance.hasChildren) {
					const childAffected =
						childInstance.expandOrCollapseAllDescendants(expand);
					affectedItems.push(...childAffected);
				}
			}
		});
		this.suppressExpandEvents = false;
		return affectedItems;
	}

	private async updateCheckState(checked: boolean, fromParent = false) {
		if (this.disabled) return;
		if (!fromParent && this.hasChildren) {
			const affected = this.collectDescendantStates(checked);
			this.setNodeState({ isChecked: checked, partialChecked: false }, false);
			await this.updateChildrenSilently(checked);
			this.ifxTreeViewItemCheckChange.emit({
				checked,
				indeterminate: false,
				value: this.value,
				affectedChildItems: affected,
				component: this,
			});
			this.updateParentState();
		} else if (fromParent) {
			this.setNodeState({ isChecked: checked, partialChecked: false }, false);
		} else {
			this.setNodeState({ isChecked: checked, partialChecked: false });
			await this.updateChildrenState(checked);
			this.updateParentState();
		}
	}

	private async updateChildrenSilently(checked: boolean) {
		for (const child of this.findChildren()) {
			const childInstance = (child as any)["__stencil_instance"];
			if (childInstance && !childInstance.disabled) {
				childInstance.setNodeState(
					{ isChecked: checked, partialChecked: false },
					false,
				);
				await childInstance.updateChildrenSilently(checked);
			}
		}
	}

	@Watch("expanded")
	handleExpandedChange(newValue: boolean) {
		if (!this.suppressExpandEvents) {
			this.ifxTreeViewItemExpandChange.emit({
				expanded: newValue,
				value: this.value,
				affectedItems: [{ expanded: newValue, value: this.value }],
				component: this,
			});
		}
	}

	@Watch("disableItem")
	handleDisableItemChange(newValue: boolean) {
		this.ifxTreeViewItemDisableChange.emit({
			disabled: newValue,
			component: this,
		});
	}

	private setNodeState(state: TreeState, emitEvent = true) {
		this.isChecked = state.isChecked;
		this.partialChecked = state.partialChecked;
		if (emitEvent) {
			this.ifxTreeViewItemCheckChange.emit({
				checked: this.isChecked,
				indeterminate: this.partialChecked,
				value: this.value,
				level: this.level,
				disabled: this.disabled,
				component: this,
			} as any);
		}
	}

	private collectDescendantStates(checked: boolean) {
		const descendants: Array<{
			checked: boolean;
			indeterminate: boolean;
			value?: string;
		}> = [];
		const collect = (el: Element, skipSelf = false) => {
			const instance: any =
				el === this.host ? this : (el as any)["__stencil_instance"];
			if (!skipSelf && !instance?.disabled) {
				descendants.push({
					checked,
					indeterminate: false,
					value: instance?.value,
				});
			}
			Array.from(el.children).forEach((child) => {
				if (child.tagName === "IFX-TREE-VIEW-ITEM") collect(child, false);
			});
		};
		Array.from(this.host.children).forEach((child) => {
			if (child.tagName === "IFX-TREE-VIEW-ITEM") collect(child, false);
		});
		return descendants;
	}

	private async updateChildrenState(checked: boolean) {
		for (const child of this.findChildren()) {
			const childInstance = (child as any)["__stencil_instance"];
			if (childInstance && !childInstance.disabled) {
				await (child as HTMLIfxTreeViewItemElement).componentOnReady();
				child.dispatchEvent(
					new CustomEvent("internal-check-state-change", {
						detail: { checked },
						bubbles: false,
						composed: true,
					}),
				);
			}
		}
	}

	private findSiblingNodes(
		parent: HTMLIfxTreeViewItemElement,
	): HTMLIfxTreeViewItemElement[] {
		return Array.from(parent.children).filter(
			(child): child is HTMLIfxTreeViewItemElement =>
				child instanceof HTMLElement && child.tagName === "IFX-TREE-VIEW-ITEM",
		);
	}

	private updateParentState() {
		const parent = this.host.parentElement?.closest("ifx-tree-view-item");
		if (!parent) return;
		setTimeout(() => {
			const parentInstance = (parent as any)[
				"__stencil_instance"
			] as TreeViewItem;
			if (!parentInstance) return;
			const siblings = this.findSiblingNodes(parent);
			const { allChecked, someChecked } = this.calculateSiblingStates(siblings);
			parentInstance.setNodeState(
				{
					isChecked: allChecked,
					partialChecked: !allChecked && someChecked,
				},
				false,
			);
			parentInstance.updateParentState();
		}, 0);
	}

	private calculateSiblingStates(siblings: HTMLIfxTreeViewItemElement[]) {
		const states = siblings.map((sib) => {
			const instance = (sib as any)["__stencil_instance"] as TreeViewItem;
			return {
				checked: instance?.isChecked,
				partial: instance?.partialChecked,
			};
		});
		const checkedCount = states.filter((state) => state.checked).length;
		const partialCount = states.filter((state) => state.partial).length;
		return {
			allChecked:
				states.length > 0 &&
				checkedCount === states.length &&
				partialCount === 0,
			someChecked: checkedCount > 0 || partialCount > 0,
		};
	}

	private toggleExpand = () => {
		if (this.disabled || !this.hasChildren) return;
		this.expanded = !this.expanded;
	};

	private handleKeyDown = (event: KeyboardEvent) => {
		const allItems = Array.from(
			this.host
				.closest("ifx-tree-view")
				?.querySelectorAll<HTMLElement>("ifx-tree-view-item") || [],
		);
		const visibleItems = allItems.filter((item) => {
			let parent = item.parentElement?.closest("ifx-tree-view-item");
			while (parent) {
				const parentCmp = parent as any;
				if (!(parentCmp.expandAllItems || parentCmp.expanded)) return false;
				parent = parent.parentElement?.closest("ifx-tree-view-item");
			}
			return true;
		});
		const currentIndex = visibleItems.findIndex((el) => el === this.host);
		const focusLabelIcon = (el: Element | null) =>
			(el as HTMLElement | null)?.focus();

		switch (event.key) {
			case "ArrowDown": {
				event.preventDefault();
				for (let i = currentIndex + 1; i < visibleItems.length; i++) {
					const next = visibleItems[i] as any;
					if (!next.disabled) {
						focusLabelIcon(
							next.shadowRoot?.querySelector(
								".tree-item__label-icon-container",
							),
						);
						break;
					}
				}
				break;
			}
			case "ArrowUp": {
				event.preventDefault();
				for (let i = currentIndex - 1; i >= 0; i--) {
					const prev = visibleItems[i] as any;
					if (!prev.disabled) {
						focusLabelIcon(
							prev.shadowRoot?.querySelector(
								".tree-item__label-icon-container",
							),
						);
						break;
					}
				}
				break;
			}
			case "ArrowRight": {
				event.preventDefault();
				if (!this.isExpanded && this.hasChildren) {
					this.expanded = true;
				} else if (this.isExpanded && this.hasChildren) {
					const firstChild =
						this.host.querySelector<HTMLElement>("ifx-tree-view-item");
					if (firstChild && !(firstChild as any).disabled) {
						focusLabelIcon(
							firstChild.shadowRoot?.querySelector(
								".tree-item__label-icon-container",
							),
						);
					}
				}
				break;
			}
			case "ArrowLeft": {
				event.preventDefault();
				if (this.isExpanded && this.hasChildren) {
					this.expanded = false;
				} else {
					const parent = this.host.parentElement?.closest("ifx-tree-view-item");
					if (parent && !(parent as any).disabled) {
						focusLabelIcon(
							(parent as HTMLElement).shadowRoot?.querySelector(
								".tree-item__label-icon-container",
							),
						);
					}
				}
				break;
			}
			case " ":
			case "Enter": {
				event.preventDefault();
				if (this.hasChildren) {
					const newCheckedState = !this.isChecked;
					this.updateCheckState(newCheckedState);
					const affectedItems = newCheckedState
						? this.expandOrCollapseAllDescendants(true)
						: this.expandOrCollapseAllDescendants(false);
					this.ifxTreeViewItemExpandChange.emit({
						expanded: newCheckedState,
						affectedItems,
						component: this,
					});
				} else {
					this.updateCheckState(!this.isChecked);
				}
				break;
			}
		}
	};

	render() {
		return (
			<div
				class={{
					"tree-item": true,
					"tree-item--expanded": this.isExpanded,
					"tree-item--has-children": this.hasChildren,
					"tree-item--disabled": this.disabled,
				}}
				role="treeitem"
				aria-expanded={this.isExpanded ? "true" : "false"}
				data-level={this.level}
				aria-disabled={this.disabled ? "true" : undefined}
				aria-label={this.ariaLabel}
			>
				<div class="tree-item__content">
					<div
						class="tree-item__checkbox-container"
						onClick={(e) => e.stopPropagation()}
					>
						<ifx-checkbox
							size="s"
							checked={this.partialChecked ? false : this.isChecked}
							indeterminate={this.partialChecked}
							onIfxChange={this.handleCheckboxChange}
							disabled={this.disabled}
						/>
					</div>
					<div
						class="tree-item__header"
						style={{ paddingLeft: `${this.level * 24 + 10}px` }}
						onClick={this.handleHeaderClick}
						tabIndex={-1}
						aria-disabled={this.disabled ? "true" : undefined}
					>
						{this.hasChildren && (
							<div
								class="tree-item__chevron-container"
								onClick={this.toggleExpand}
							>
								<ifx-icon
									class={`tree-item__chevron ${this.isExpanded ? "chevron-down" : "chevron-right"}`}
									icon="chevron-right-16"
								/>
								<div class="tree-item__line" />
							</div>
						)}
						<div
							class="tree-item__label-icon-container"
							tabIndex={this.disabled ? -1 : 0}
							onKeyDown={this.handleKeyDown}
						>
							<div class="tree-item__icon-container">
								{this.hasChildren ? (
									<Fragment>
										<ifx-icon
											class={{ "icon--hidden": this.isExpanded }}
											icon="folder-16"
										/>
										<ifx-icon
											class={{ "icon--hidden": !this.isExpanded }}
											icon="folder-open-16"
										/>
									</Fragment>
								) : (
									<ifx-icon icon="file-16" />
								)}
							</div>
							<span class="tree-item__label">
								<slot />
							</span>
						</div>
					</div>
				</div>
				{this.isExpanded && (
					<div class="tree-item__children">
						<slot name="children" />
					</div>
				)}
			</div>
		);
	}
}
