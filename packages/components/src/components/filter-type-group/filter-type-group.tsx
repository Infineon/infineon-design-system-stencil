import { Component, h } from '@stencil/core';

@Component({
  tag: 'ifx-filter-type-group',
  styleUrl: 'filter-type-group.scss',
  shadow: true,
})
export class IfxFilterTypeGroup {
  render() {
    return (
      <div class="filter-type-group">
        <slot name="filter-search" />
        <slot name="filter-accordion" />
      </div>
    );
  }
}