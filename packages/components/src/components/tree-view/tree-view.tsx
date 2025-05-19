import { Component, h, Prop, Event, EventEmitter, Watch } from '@stencil/core';

@Component({
  tag: 'ifx-tree-view',
  styleUrl: 'tree-view.scss',
  shadow: true,
})
export class TreeView {
  @Prop() label: string;
  @Prop() disableAllItems: boolean = false;
  @Prop() expandAllItems: boolean = false;
  @Prop() ariaLabel: string = 'Tree View';

  @Event() ifxTreeViewExpandAllChange: EventEmitter<boolean>;
  @Event() ifxTreeViewDisableAllChange: EventEmitter<boolean>;

  @Watch('expandAllItems')
  handleExpandAllItemsChange(newValue: boolean) {
    this.ifxTreeViewExpandAllChange.emit(newValue);
  }

  @Watch('disableAllItems')
  handleDisableAllItemsChange(newValue: boolean) {
    this.ifxTreeViewDisableAllChange.emit(newValue);
  }

  render() {
    return (
      <div
        class={{
          'tree-view': true,
          'tree-view--disabled': this.disableAllItems,
        }}
        role="tree"
        aria-label={this.ariaLabel}
      >
        {this.label && <div class="tree-view__label">{this.label}</div>}
        <slot ref={el => {
          if (el) {
            if (this.disableAllItems) {
              el.setAttribute('data-disable-all-items', 'true');
            } else {
              el.removeAttribute('data-disable-all-items');
            }
            if (this.expandAllItems) {
              el.setAttribute('data-expand-all-items', 'true');
            } else {
              el.removeAttribute('data-expand-all-items');
            }
          }
        }}></slot>
      </div>
    );
  }
}
