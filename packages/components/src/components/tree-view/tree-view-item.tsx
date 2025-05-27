import { Component, h, Prop, State, Element, Fragment, Event, EventEmitter, Watch } from '@stencil/core';

export interface TreeViewCheckChangeEvent {
  checked: boolean;
  indeterminate: boolean;
  affectedChildItems?: Array<{ label: string; checked: boolean; indeterminate: boolean }>;
}

export interface TreeViewExpandChangeEvent {
  expanded: boolean;
  affectedItems?: Array<{ label: string; expanded: boolean }>;
}

interface TreeState {
  isChecked: boolean;
  partialChecked: boolean;
}

type HTMLIfxTreeViewItemElement = HTMLElement & { componentOnReady: () => Promise<unknown> };

@Component({
  tag: 'ifx-tree-view-item',
  styleUrl: 'tree-view-item.scss',
  shadow: true,
})
export class TreeViewItem {
  @Element() host: HTMLElement;
  @Prop() label: string;
  @Prop({ reflect: true, mutable: true }) expanded: boolean = false;
  @Prop() initiallyExpanded: boolean = false;
  @Prop() disableItem: boolean = false;
  @Prop() ariaLabel: string | null;
  @Prop() initiallySelected: boolean = false;

  @Event() ifxTreeViewItemExpandChange: EventEmitter<TreeViewExpandChangeEvent>;
  @Event() ifxTreeViewItemCheckChange: EventEmitter<TreeViewCheckChangeEvent>;
  @Event() ifxTreeViewItemDisableChange: EventEmitter<boolean>;

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

  private findChildren = () => Array.from(this.host.children)
    .filter((child): child is HTMLElement =>
      child instanceof HTMLElement && child.tagName === 'IFX-TREE-VIEW-ITEM'
    );

  private calculateNodeLevel = (): number => {
    let level = 0, parent = this.host.parentElement;
    while (parent) {
      if (parent.tagName === 'IFX-TREE-VIEW-ITEM') level++;
      parent = parent.parentElement;
    }
    return level;
  };

  componentWillLoad() {
    this.initializeNode();
    this.setupEventListeners();
  }

  componentDidLoad() {
    this.observeDisableAllItems();
    this.observeExpandAllItems();
    if (this.shouldExpandFromParent()) {
      this.expandAllDescendants();
    }
    (this.host as any)['__stencil_instance'] = this;

    // Update parent state if this item is initially selected
    if (this.initiallySelected) {
      // Use setTimeout to ensure all components are ready
      setTimeout(() => {
        this.updateParentState();
      }, 0);
    }
  }

  private shouldExpandFromParent(): boolean {
    let parent = this.host.parentElement;
    while (parent) {
      if (
        parent.tagName === 'IFX-TREE-VIEW' &&
        (parent.hasAttribute('expand-all-items') || parent.hasAttribute('data-expand-all-items'))
      ) {
        return true;
      }
      parent = parent.parentElement;
    }
    return false;
  }

  private expandAllDescendants() {
    this.expanded = true;
    const children = this.findChildren();
    for (const child of children) {
      if (typeof (child as any).expanded !== 'undefined') {
        (child as any).expanded = true;
      }
      if (typeof (child as any).expandAllDescendants === 'function') {
        (child as any).expandAllDescendants();
      }
    }
  }

  private observeDisableAllItems() {
    let parent = this.host.parentElement;
    while (parent) {
      if (parent.tagName === 'IFX-TREE-VIEW') {
        const observer = new MutationObserver(mutations => {
          for (const mutation of mutations) {
            if (
              mutation.type === 'attributes' &&
              mutation.attributeName === 'disable-all-items'
            ) {
              const disableAll = (parent as any).disableAllItems;
              this.disableAllItems = !!disableAll || parent.hasAttribute('disable-all-items');
            }
          }
        });
        observer.observe(parent, { attributes: true });
        const disableAll = (parent as any).disableAllItems;
        this.disableAllItems = !!disableAll || parent.hasAttribute('disable-all-items');
        break;
      }
      parent = parent.parentElement;
    }
  }

  private observeExpandAllItems() {
    let parent = this.host.parentElement;
    while (parent) {
      if (parent.tagName === 'IFX-TREE-VIEW' || parent.hasAttribute('data-expand-all-items')) {
        const observer = new MutationObserver(mutations => {
          for (const mutation of mutations) {
            if (
              mutation.type === 'attributes' &&
              mutation.attributeName === 'data-expand-all-items'
            ) {
              this.expandAllItems = parent.hasAttribute('data-expand-all-items');
            }
          }
        });
        observer.observe(parent, { attributes: true });
        this.expandAllItems = parent.hasAttribute('data-expand-all-items');
        break;
      }
      parent = parent.parentElement;
    }
  }

  private initializeNode() {
    this.expanded = this.initiallyExpanded;
    this.hasChildren = this.findChildren().length > 0;
    this.level = this.calculateNodeLevel();
    this.host.setAttribute('data-level', this.level.toString());
    this.isChecked = this.initiallySelected;
  }

  private setupEventListeners() {
    this.host.addEventListener('internal-check-state-change', this.handleStateChange);
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
    if (!(target as HTMLElement).closest('.tree-item__checkbox-container, .tree-item__chevron-container')) {
      if (this.hasChildren) {
        const newCheckedState = !this.isChecked;
        this.updateCheckState(newCheckedState);

        if (newCheckedState) {
          // When selecting: expand all descendants
          const expandedItems = this.expandAllDescendantsRecursively();
          this.ifxTreeViewItemExpandChange.emit({
            expanded: true,
            affectedItems: expandedItems
          });
        } else {
          // When deselecting: collapse all descendants
          const collapsedItems = this.collapseAllDescendantsRecursively();
          this.ifxTreeViewItemExpandChange.emit({
            expanded: false,
            affectedItems: collapsedItems
          });
        }
      } else {
        this.updateCheckState(!this.isChecked);
      }
    }
  };

  private expandAllDescendantsRecursively(): Array<{ label: string; expanded: boolean }> {
    this.suppressExpandEvents = true;
    const affectedItems: Array<{ label: string; expanded: boolean }> = [];

    this.expanded = true;
    if (this.hasChildren) {
      affectedItems.push({ label: this.label, expanded: true });
    }

    const children = this.findChildren();
    for (const child of children) {
      const childInstance = (child as any)['__stencil_instance'];
      if (childInstance && childInstance.hasChildren) {
        childInstance.suppressExpandEvents = true;
        childInstance.expanded = true;
        affectedItems.push({ label: childInstance.label, expanded: true });

        if (childInstance.hasChildren) {
          const childAffected = childInstance.expandAllDescendantsRecursively();
          affectedItems.push(...childAffected.filter(item => item.label !== childInstance.label));
        }
      }
    }
    this.suppressExpandEvents = false;
    return affectedItems;
  }

  private collapseAllDescendantsRecursively(): Array<{ label: string; expanded: boolean }> {
    this.suppressExpandEvents = true;
    const affectedItems: Array<{ label: string; expanded: boolean }> = [];

    this.expanded = false;
    if (this.hasChildren) {
      affectedItems.push({ label: this.label, expanded: false });
    }

    const children = this.findChildren();
    for (const child of children) {
      const childInstance = (child as any)['__stencil_instance'];
      if (childInstance && childInstance.hasChildren) {
        childInstance.suppressExpandEvents = true;
        childInstance.expanded = false;
        affectedItems.push({ label: childInstance.label, expanded: false });

        if (childInstance.hasChildren) {
          const childAffected = childInstance.collapseAllDescendantsRecursively();
          affectedItems.push(...childAffected.filter(item => item.label !== childInstance.label));
        }
      }
    }
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
        affectedChildItems: affected,
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
    const children = this.findChildren();
    for (const child of children) {
      const childInstance = (child as any)['__stencil_instance'];
      if (childInstance) {
        childInstance.setNodeState({ isChecked: checked, partialChecked: false }, false);
        await childInstance.updateChildrenSilently(checked);
      }
    }
  }

  @Watch('expanded')
  handleExpandedChange(newValue: boolean) {
    if (!this.suppressExpandEvents) {
      this.ifxTreeViewItemExpandChange.emit({
        expanded: newValue,
        affectedItems: [{ label: this.label, expanded: newValue }]
      });
    }
  }

  @Watch('disableItem')
  handleDisableItemChange(newValue: boolean) {
    this.ifxTreeViewItemDisableChange.emit(newValue);
  }

  private setNodeState(state: TreeState, emitEvent = true) {
    this.isChecked = state.isChecked;
    this.partialChecked = state.partialChecked;
    if (emitEvent) {
      this.ifxTreeViewItemCheckChange.emit({
        checked: this.isChecked,
        indeterminate: this.partialChecked,
      });
    }
  }

  private collectDescendantStates(checked: boolean) {
    const descendants: Array<{ label: string; checked: boolean; indeterminate: boolean }> = [];
    const collect = (el: Element) => {
      let instance: any = null;
      if (el === this.host) {
        instance = this;
      } else if ((el as any)['__stencil_instance']) {
        instance = (el as any)['__stencil_instance'];
      }
      const label = instance?.label ?? (el as any).label ?? '';
      descendants.push({
        label,
        checked,
        indeterminate: false,
      });
      Array.from(el.children)
        .forEach(child => {
          if (child.tagName === 'IFX-TREE-VIEW-ITEM') {
            collect(child);
          }
        });
    };
    collect(this.host);
    return descendants;
  }

  private async updateChildrenState(checked: boolean) {
    const children = this.findChildren();
    for (const child of children) {
      await (child as HTMLIfxTreeViewItemElement).componentOnReady();
      child.dispatchEvent(new CustomEvent('internal-check-state-change', {
        detail: { checked },
        bubbles: false,
        composed: true
      }));
    }
  }

  private findSiblingNodes(parent: HTMLElement): HTMLIfxTreeViewItemElement[] {
    return Array.from(parent.children)
      .filter((child): child is HTMLIfxTreeViewItemElement =>
        child instanceof HTMLElement && child.tagName === 'IFX-TREE-VIEW-ITEM'
      );
  }

  private updateParentState() {
    const parent = this.host.parentElement?.closest('ifx-tree-view-item') as HTMLIfxTreeViewItemElement;
    if (!parent) return;

    // Use a small timeout to ensure the component is ready
    setTimeout(() => {
      const parentInstance = (parent as any)['__stencil_instance'] as TreeViewItem;
      if (!parentInstance) return;

      const siblings = this.findSiblingNodes(parent);
      const states = this.calculateSiblingStates(siblings);

      parentInstance.setNodeState({
        isChecked: states.allChecked,
        partialChecked: !states.allChecked && states.someChecked
      }, false);

      parentInstance.updateParentState();
    }, 0);
  }

  private calculateSiblingStates(siblings: HTMLIfxTreeViewItemElement[]) {
    const states = siblings.map(sib => {
      const instance = (sib as any)['__stencil_instance'] as TreeViewItem;
      if (!instance) return { checked: false, partial: false };

      return {
        checked: instance.isChecked,
        partial: instance.partialChecked
      };
    });

    const checkedCount = states.filter(state => state.checked).length;
    const partialCount = states.filter(state => state.partial).length;

    return {
      allChecked: states.length > 0 && checkedCount === states.length && partialCount === 0,
      someChecked: checkedCount > 0 || partialCount > 0
    };
  }

  private toggleExpand = () => {
    if (this.disabled) return;
    if (this.hasChildren) {
      this.expanded = !this.expanded;
    }
  };

  private handleKeyDown = (event: KeyboardEvent) => {

    const allItems = Array.from(
      this.host
        .closest('ifx-tree-view')
        ?.querySelectorAll('ifx-tree-view-item') || []
    );

    const visibleItems = allItems.filter(item => {
      let parent = item.parentElement?.closest('ifx-tree-view-item');
      while (parent) {
        const parentCmp = parent as any;
        if (!(parentCmp.expandAllItems || parentCmp.expanded)) {
          return false;
        }
        parent = parent.parentElement?.closest('ifx-tree-view-item');
      }
      return true;
    });

    const currentIndex = visibleItems.findIndex(el => el === this.host);

    function focusLabelIcon(el: Element | null) {
      (el as HTMLElement | null)?.focus();
    }

    switch (event.key) {
      case 'ArrowDown': {
        event.preventDefault();
        let nextIndex = currentIndex + 1;
        while (nextIndex < visibleItems.length) {
          const next = visibleItems[nextIndex] as any;
          if (!next.disabled) {
            focusLabelIcon(next.shadowRoot?.querySelector('.tree-item__label-icon-container'));
            break;
          }
          nextIndex++;
        }
        break;
      }
      case 'ArrowUp': {
        event.preventDefault();
        let prevIndex = currentIndex - 1;
        while (prevIndex >= 0) {
          const prev = visibleItems[prevIndex] as any;
          if (!prev.disabled) {
            focusLabelIcon(prev.shadowRoot?.querySelector('.tree-item__label-icon-container'));
            break;
          }
          prevIndex--;
        }
        break;
      }
      case 'ArrowRight': {
        event.preventDefault();
        if (!this.isExpanded && this.hasChildren) {
          this.expanded = true;
        } else if (this.isExpanded && this.hasChildren) {
          const firstChild = this.host.querySelector('ifx-tree-view-item');
          if (firstChild && !(firstChild as any).disabled) {
            focusLabelIcon((firstChild as HTMLElement).shadowRoot?.querySelector('.tree-item__label-icon-container'));
          }
        }
        break;
      }
      case 'ArrowLeft': {
        event.preventDefault();
        if (this.isExpanded && this.hasChildren) {
          this.expanded = false;
        } else {
          const parent = this.host.parentElement?.closest('ifx-tree-view-item');
          if (parent && !(parent as any).disabled) {
            focusLabelIcon((parent as HTMLElement).shadowRoot?.querySelector('.tree-item__label-icon-container'));
          }
        }
        break;
      }
      case ' ':
      case 'Enter': {
        event.preventDefault();
        this.updateCheckState(!this.isChecked);
        break;
      }
    }
  };

  render() {
    return (
      <div
        class={{
          'tree-item': true,
          'tree-item--expanded': this.isExpanded,
          'tree-item--has-children': this.hasChildren,
          'tree-item--disabled': this.disabled,
        }}
        role="treeitem"
        aria-expanded={this.isExpanded ? 'true' : 'false'}
        data-level={this.level}
        aria-disabled={this.disabled ? 'true' : undefined}
        aria-label={this.ariaLabel}
      >
        <div class="tree-item__content">
          {this.renderCheckbox()}
          {this.renderHeader()}
        </div>
        {this.isExpanded && <div class="tree-item__children"><slot/></div>}
      </div>
    );
  }

  private renderHeader() {
    return (
      <div
        class="tree-item__header"
        style={{ paddingLeft: `${this.level * 24 + 10}px` }}
        onClick={this.handleHeaderClick}
        tabIndex={-1}
        aria-disabled={this.disabled ? 'true' : undefined}
      >
        {this.renderControls()}
      </div>
    );
  }

  private renderCheckbox() {
    return (
      <div class="tree-item__checkbox-container" onClick={e => e.stopPropagation()}>
        <ifx-checkbox
          size='s'
          checked={this.partialChecked ? false : this.isChecked}
          indeterminate={this.partialChecked}
          onIfxChange={this.handleCheckboxChange}
          disabled={this.disabled}
        />
      </div>
    );
  }

  private renderControls() {
    return [
      this.hasChildren && (
        <div class="tree-item__chevron-container" onClick={this.toggleExpand}>
          <ifx-icon class={`tree-item__chevron ${this.isExpanded ? 'chevron-down' : 'chevron-right'}`}
                    icon="chevron-right-16"/>
          <div class="tree-item__line"/>
        </div>
      ),
      <div
        class="tree-item__label-icon-container"
        tabIndex={this.disabled ? -1 : 0}
        onKeyDown={this.handleKeyDown}
      >
        <div class="tree-item__icon-container">
          {
            this.hasChildren ? (
              <Fragment>
                <ifx-icon class={{'icon--hidden': this.isExpanded}} icon="folder-16"/>
                <ifx-icon class={{'icon--hidden': !this.isExpanded}} icon="folder-open-16"/>
              </Fragment>
            ) : (
              <ifx-icon icon="file-16"/>
            )
          }
        </div>
        <span class="tree-item__label">{this.label}</span>
      </div>
    ];
  }
}
