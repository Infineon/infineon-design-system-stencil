import { Component, h, Prop, State, Element } from '@stencil/core';

@Component({
  tag: 'ifx-tree-view-item',
  styleUrl: 'tree-view-item.scss',
  shadow: true,
})
export class TreeViewItem {
  @Element() host: HTMLElement;

  @Prop() label: string;
  @Prop() icon: 'folder' | 'file' = 'file';
  @Prop({ reflect: true, mutable: true }) expanded: boolean = false;
  @Prop() initiallyExpanded: boolean = false;

  @State() hasChildren: boolean = false;
  @State() isChecked: boolean = false;
  @State() partialChecked: boolean = false;
  @State() level: number = 0;

  componentWillLoad() {
    if (this.initiallyExpanded) {
      this.expanded = true;
    }

    const childItems = this.getTreeViewItems(this.host);
    this.hasChildren = childItems.length > 0;

    this.level = this.calculateLevel(this.host);
    this.host.setAttribute('data-level', this.level.toString());
  }

  private getTreeViewItems(element: HTMLElement): HTMLElement[] {
    const children = Array.from(element.children).filter(
      (child): child is HTMLElement => child instanceof HTMLElement
    );
    return children.filter((child) => child.tagName === 'IFX-TREE-VIEW-ITEM');
  }

  private calculateLevel(element: HTMLElement): number {
    let level = 0;
    let parent = element.parentElement;

    while (parent) {
      if (parent.tagName === 'IFX-TREE-VIEW-ITEM') {
        level++;
      }
      parent = parent.parentElement;
    }

    return level;
  }

  private toggleExpand() {
    if (this.hasChildren) {
      this.expanded = !this.expanded;
    }
  }

  private toggleCheckbox(event: CustomEvent | null = null, checked?: boolean) {
    console.log('toggleCheckbox called:', { event, checked, isChecked: this.isChecked });

    if (event) {
      this.isChecked = event.detail.checked;
    } else if (checked !== undefined) {
      this.isChecked = checked;
    } else {
      this.isChecked = !this.isChecked;
    }

    console.log('Updated isChecked:', this.isChecked);

    // Apply checkbox state to all child elements
    const childItems = Array.from(this.host.querySelectorAll('ifx-tree-view-item')) as HTMLIfxTreeViewItemElement[];
    console.log('Child items found:', childItems);

    childItems.forEach((childElement) => {
      childElement.componentOnReady().then((resolvedChild) => {
        const childComponent = resolvedChild as unknown as TreeViewItem;
        if (childComponent && typeof childComponent.toggleCheckbox === 'function') {
          console.log('Toggling child checkbox:', {
            childComponent,
            isChecked: this.isChecked,
          });
          childComponent.isChecked = this.isChecked;
          childComponent.partialChecked = false; // Reset partial state for children
          childComponent.toggleCheckbox(null, this.isChecked); // Recursively propagate state
        } else {
          console.warn('Resolved child does not have toggleCheckbox:', resolvedChild);
        }
      });
    });

    // Update parent elements based on child states
    this.updateParentCheckboxState();
  }

  private updateParentCheckboxState() {
    console.log('updateParentCheckboxState called for:', this.host);

    const parentElement = this.host.parentElement?.closest('ifx-tree-view-item') as HTMLIfxTreeViewItemElement;
    if (parentElement) {
      parentElement.componentOnReady().then((resolvedParent) => {
        const parentComponent = resolvedParent as unknown as TreeViewItem;
        if (parentComponent && typeof parentComponent.updateParentCheckboxState === 'function') {
          const siblingItems = Array.from(
            parentElement.parentElement?.querySelectorAll('ifx-tree-view-item') || []
          ) as HTMLIfxTreeViewItemElement[];

          console.log('Sibling items found:', siblingItems);

          const allChecked = siblingItems.every((siblingElement) => {
            const siblingComponent = siblingElement as unknown as TreeViewItem;
            return siblingComponent.isChecked;
          });

          const someChecked = siblingItems.some((siblingElement) => {
            const siblingComponent = siblingElement as unknown as TreeViewItem;
            return siblingComponent.isChecked || siblingComponent.partialChecked;
          });

          console.log('Parent state update:', { allChecked, someChecked });

          parentComponent.isChecked = allChecked;
          parentComponent.partialChecked = !allChecked && someChecked;

          parentComponent.updateParentCheckboxState();
        } else {
          console.warn('Resolved parent does not have updateParentCheckboxState:', resolvedParent);
        }
      });
    } else {
      console.warn('No parent element found for:', this.host);
    }
  }

  private handleHeaderClick(event: MouseEvent) {
    // Verhindere, dass der Klick auf den Chevron den Header-Klick auslöst
    const target = event.target as HTMLElement;
    if (target.closest('.tree-item__chevron-container')) {
      return;
    }

    // Checkbox umschalten
    this.toggleCheckbox();
  }

  render() {
    const paddingLeft = `${this.level * 16 + 32}px`; // Berechnung der Einrückung

    return (
      <div
        class={{
          'tree-item': true,
          'tree-item--expanded': this.expanded,
          'tree-item--has-children': this.hasChildren,
        }}
        role="treeitem"
        aria-expanded={this.expanded ? 'true' : 'false'}
        data-level={this.level}
      >
        <div
          class="tree-item__header"
          style={{ paddingLeft }}
          onClick={(event: MouseEvent) => this.handleHeaderClick(event)}
        >
          <div class="tree-item__checkbox-container">
            <ifx-checkbox
              checked={this.isChecked}
              indeterminate={this.partialChecked}
              onIfxChange={(event: CustomEvent) => this.toggleCheckbox(event)}
            ></ifx-checkbox>
          </div>
          <div class="tree-item__chevron-container" onClick={() => this.toggleExpand()}>
            {this.hasChildren && (
              <div>
                <ifx-icon
                  class={`tree-item__chevron ${this.expanded ? 'chevron-down' : 'chevron-right'}`}
                  icon="chevron-right-16"
                ></ifx-icon>
              </div>
            )}
            <div class="tree-item__line"></div>
          </div>
          {this.icon === 'folder' && (
            <ifx-icon icon="folder-16"></ifx-icon>
          )}
          {this.icon === 'file' && <ifx-icon icon="file-16"></ifx-icon>}
          <span class="tree-item__label">{this.label}</span>
        </div>
        {this.expanded && (
          <div class="tree-item__children">
            <slot></slot>
          </div>
        )}
      </div>
    );
  }
}
