import { Component, h, Prop, State, Element } from '@stencil/core';

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
  // Properties
  @Element() host: HTMLElement;
  @Prop() label: string;
  @Prop() icon: 'folder' | 'file' = 'file';
  @Prop({ reflect: true, mutable: true }) expanded: boolean = false;
  @Prop() initiallyExpanded: boolean = false;

  // State
  @State() private hasChildren: boolean = false;
  @State() private isChecked: boolean = false;
  @State() private partialChecked: boolean = false;
  @State() private level: number = 0;

  // Tree Structure Methods
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

  // Lifecycle & Initialization
  componentWillLoad() {
    this.initializeNode();
    this.setupEventListeners();
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

  // Event Handlers
  private handleStateChange = (event: CustomEvent) => {
    event.stopPropagation();
    this.updateCheckState(event.detail.checked);
  };

  private handleCheckboxChange = (event: CustomEvent) => {
    this.updateCheckState(event.detail?.checked ?? !this.isChecked);
  };

  private handleHeaderClick = ({ target }: MouseEvent) => {
    if (!(target as HTMLElement).closest('.tree-item__checkbox-container, .tree-item__chevron-container')) {
      this.updateCheckState(!this.isChecked);
    }
  };

  // State Management
  private async updateCheckState(checked: boolean) {
    this.setNodeState({ isChecked: checked, partialChecked: false });
    await this.updateChildrenState(checked);
    this.updateParentState();
  }

  private setNodeState(state: TreeState) {
    this.isChecked = state.isChecked;
    this.partialChecked = state.partialChecked;
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

  // UI Controls
  private toggleExpand = () => this.hasChildren && (this.expanded = !this.expanded);

  // Render Methods
  render() {
    return (
      <div class={{ 'tree-item': true, 'tree-item--expanded': this.expanded, 'tree-item--has-children': this.hasChildren }}
           role="treeitem" aria-expanded={this.expanded ? 'true' : 'false'} data-level={this.level}>
        {this.renderHeader()}
        {this.expanded && <div class="tree-item__children"><slot/></div>}
      </div>
    );
  }

  private renderHeader() {
    return (
      <div class="tree-item__header" style={{ paddingLeft: `${this.level * 24 + 40}px` }}
           onClick={this.handleHeaderClick}>
        {this.renderCheckbox()}
        {this.renderControls()}
      </div>
    );
  }

  private renderCheckbox() {
    return (
      <div class="tree-item__checkbox-container" onClick={e => e.stopPropagation()}>
        <ifx-checkbox size='s' checked={this.isChecked} indeterminate={this.partialChecked}
                     onIfxChange={this.handleCheckboxChange}/>
      </div>
    );
  }

  private renderControls() {
    return [
      <div class="tree-item__chevron-container" onClick={this.toggleExpand}>
        {this.hasChildren && (
          <div><ifx-icon class={`tree-item__chevron ${this.expanded ? 'chevron-down' : 'chevron-right'}`}
                        icon="chevron-right-16"/></div>
        )}
        <div class="tree-item__line"/>
      </div>,
      <ifx-icon icon={`${this.icon}-16`}/>,
      <span class="tree-item__label">{this.label}</span>
    ];
  }
}
