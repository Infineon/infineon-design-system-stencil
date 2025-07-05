import { Component, h, Prop, Event, EventEmitter, Watch } from '@stencil/core';
import { trackComponent } from '../../global/utils/tracking';

@Component({
  tag: 'ifx-tree-view',
  styleUrl: 'tree-view.scss',
  shadow: true,
})
export class TreeView {
  @Prop() label?: string;
  @Prop() disableAllItems: boolean = false;
  @Prop() expandAllItems: boolean = false;
  @Prop() ariaLabel: string | null;

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

  private handleSlotRef = (el: HTMLSlotElement | null) => {
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
  };

  componentWillLoad() { 
    trackComponent('ifx-tree-view')
  }

  render() {
    return (
      <div
        class={`tree-view ${this.disableAllItems ? ' tree-view--disabled' : ''}`}
        role="tree"
        aria-label={this.ariaLabel}
      >
        {this.label && this.label.trim() !== '' && <div class="tree-view__label">{this.label}</div>}
        <slot ref={this.handleSlotRef}></slot>
      </div>
    );
  }
}
