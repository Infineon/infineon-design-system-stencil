import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ifx-tree-view',
  styleUrl: 'tree-view.scss',
  shadow: true,
})
export class TreeView {
  @Prop() label: string;
  @Prop() disableAllItems: boolean = false;

  render() {
    return (
      <div class="tree-view" role="tree" aria-label={this.label}>
        {this.label && <div class="tree-view__label">{this.label}</div>}
        <slot></slot>
      </div>
    );
  }
}
