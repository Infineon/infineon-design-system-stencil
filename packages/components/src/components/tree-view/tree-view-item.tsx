import { Component, h, Prop, State, Element, Fragment, Event, EventEmitter, Watch } from '@stencil/core';

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

  @Event() ifxTreeViewItemExpandChange: EventEmitter<boolean>;
  @Event() ifxTreeViewItemCheckChange: EventEmitter<{ checked: boolean; indeterminate: boolean }>;
  @Event() ifxTreeViewItemDisableChange: EventEmitter<boolean>;

  @State() private hasChildren: boolean = false;
  @State() private isChecked: boolean = false;
  @State() private partialChecked: boolean = false;
  @State() private level: number = 0;
  @State() private disableAllItems: boolean = false;
  @State() private expandAllItems: boolean = false;

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
      this.updateCheckState(!this.isChecked);
    }
  };

  private async updateCheckState(checked: boolean) {
    if (this.disabled) return;
    this.setNodeState({ isChecked: checked, partialChecked: false });
    await this.updateChildrenState(checked);
    this.updateParentState();
  }

  @Watch('expanded')
  handleExpandedChange(newValue: boolean) {
    this.ifxTreeViewItemExpandChange.emit(newValue);
  }

  @Watch('disableItem')
  handleDisableItemChange(newValue: boolean) {
    this.ifxTreeViewItemDisableChange.emit(newValue);
  }

  private setNodeState(state: TreeState) {
    this.isChecked = state.isChecked;
    this.partialChecked = state.partialChecked;
    this.ifxTreeViewItemCheckChange.emit({
      checked: this.isChecked,
      indeterminate: this.partialChecked,
    });
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
    const parentEl = parent.parentElement;
    if (!parentEl) return [];
    return Array.from(
      parentEl.querySelectorAll('ifx-tree-view-item')
    ).map(el => el as HTMLIfxTreeViewItemElement);
  }

  private updateParentState() {
    const parent = this.host.parentElement?.closest('ifx-tree-view-item') as HTMLIfxTreeViewItemElement;
    if (!parent) return;
    parent.componentOnReady().then(resolved => {
      const parentNode = resolved as unknown as TreeViewItem;
      if (!parentNode?.updateParentState) return;
      const siblings = this.findSiblingNodes(parent);
      const states = this.calculateSiblingStates(siblings);
      parentNode.setNodeState({
        isChecked: states.allChecked,
        partialChecked: !states.allChecked && states.someChecked
      });
      parentNode.updateParentState();
    });
  }

  private calculateSiblingStates(siblings: HTMLIfxTreeViewItemElement[]) {
    return {
      allChecked: siblings.every(sib => (sib as unknown as TreeViewItem).isChecked),
      someChecked: siblings.some(sib => {
        const node = sib as unknown as TreeViewItem;
        return node.isChecked || node.partialChecked;
      })
    };
  }

  private toggleExpand = () => {
    if (this.disabled) return;
    this.hasChildren && (this.expanded = !this.expanded);
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
          checked={this.isChecked}
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
